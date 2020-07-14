#include "pxt.h"

#include <wiringPi.h>
#include <wiringPiI2C.h>
#include <pthread.h>

#include <linux/input.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

namespace music {
void playTone(int frequency, int ms);
}

namespace pxt {

enum class Key {
    LEFT = 1,
    UP,
    RIGHT,
    DOWN,
    A,
    B,
    MENU,
    LEFT2,
    UP2,
    RIGHT2,
    DOWN2,
    A2,
    B2,
    RESET,
    EXIT,
};

/*
BTN_A = 12, 16
BTN_B = 6, 13
BTN_MENU = 20
BTN_EXIT = 22, 23
BTN_RESTART = 26
JOYSTICK_ADDR = 0x48
# Free pins: 4, 5, 17, 24, 25, 27
*/

const int INTERNAL_KEY_UP = 2050;
const int INTERNAL_KEY_DOWN = 2051;

static int adcFD;

static int useScanCodes, scanCodeFD;

#define SWAP(v) (uint16_t)((v >> 8) | (v << 8))
#define MID 0x3300
#define DEAD 0x1000

static int readADC(int channel) {
    if (!adcFD) {
        int addr = getConfigInt("JOYSTICK_ADDR", -1);
        if (addr < 0)
            adcFD = -1;
        else
            adcFD = wiringPiI2CSetup(0x48);
    }

    if (adcFD < 0)
        return MID;

    uint16_t config = 0x8383;
    config += 0x4000 + 0x1000 * channel;

    wiringPiI2CWriteReg16(adcFD, 0x01, SWAP(config));
    sleep_core_us(1000);

    config = wiringPiI2CReadReg16(adcFD, 0x00);
    return SWAP(config);
}

#define SET(s) r |= 1 << (int)(Key::s)
#define KEY(s)                                                                                     \
    if (isPressed("BTN_" #s, (int)Key::s))                                                         \
    SET(s)

static uint8_t pressedScanCodes[1024];

static int isPressed(const char *name, int keyPos) {
    static uint64_t parsedPin[(int)Key::EXIT + 1];

    if (useScanCodes) {
        auto pins = getConfigInts(name);
        for (int i = 0; pins[i] != ENDMARK; ++i) {
            auto p = pins[i];
            if (p < (int)sizeof(pressedScanCodes) && pressedScanCodes[p])
                return 1;
        }
        return 0;
    }

    if (parsedPin[keyPos] == 0) {
        auto pins = getConfigInts(name);
        for (int i = 0; pins[i] != ENDMARK; ++i) {
            auto p = pins[i];
            auto mask = 1ULL << p;
            parsedPin[keyPos] |= mask;
            pinMode(p, INPUT);
            pullUpDnControl(p, PUD_UP);
        }
        // make sure it's non-zero
        parsedPin[keyPos] |= 1ULL << 63;
    }

    for (int i = 0; i < 63; ++i) {
        if ((parsedPin[keyPos] >> i) & 1)
            if (!digitalRead(i))
                return 1;
    }

    return 0;
}

static void updateScanCodes() {
    if (!useScanCodes)
        return;

    struct input_event ev[64];
    int rd = read(scanCodeFD, ev, sizeof(ev));

    for (int i = 0; i < rd / (int)sizeof(struct input_event); i++) {
        if (ev[i].type == 1 && ev[i].code < sizeof(pressedScanCodes))
            pressedScanCodes[ev[i].code] = ev[i].value;
    }
}

static uint16_t ch0, ch1;
static uint32_t state;

static uint32_t readBtns() {
    uint32_t r = 0;

    updateScanCodes();

    KEY(A);
    KEY(B);
    KEY(LEFT);
    KEY(RIGHT);
    KEY(UP);
    KEY(DOWN);
    KEY(MENU);
    KEY(EXIT);
    KEY(RESET);

    KEY(A2);
    KEY(B2);
    KEY(LEFT2);
    KEY(RIGHT2);
    KEY(UP2);
    KEY(DOWN2);

    ch0 = readADC(0);
    ch1 = readADC(1);

    if (ch0 < MID - DEAD)
        SET(UP);
    if (ch0 > MID + DEAD)
        SET(DOWN);

    if (ch1 < MID - DEAD)
        SET(LEFT);
    if (ch1 > MID + DEAD)
        SET(RIGHT);

    return r;
}

//% expose
int pressureLevelByButtonId(int btnId, int codalId) {
    int inv = 0;
    int v = 0;

    switch ((Key)btnId) {
    case Key::DOWN:
        v = ch0;
        inv = 1;
        break;
    case Key::UP:
        v = ch0;
        inv = -1;
        break;
    case Key::RIGHT:
        v = ch1;
        inv = 1;
        break;
    case Key::LEFT:
        v = ch1;
        inv = -1;
        break;
    default:
        break;
    }

    if (adcFD < 0 || inv == 0) {
        return (state & (1 << btnId)) ? 512 : 0;
    }

    int dead = DEAD / 4;

    v = (v - MID) * inv;
    v = (v - dead) * 512 / (MID - dead);

    if (v < 0)
        v = 0;
    if (v > 512)
        v = 512;

    return v;
}

static void *btnPoll(void *dummy) {
    (void)dummy;

    state = readBtns();
    int k = 0;
    while (1) {
        sleep_core_us(5000);
        uint32_t nstate = readBtns();

        if (k++ % 30 == 0) {
            // DMESG("CH0 %p CH1 %p", readADC(0), readADC(1));
        }

        if (state != nstate) {
            for (int i = 1; i < 32; ++i) {
                uint32_t mask = 1 << i;
                int ev = 0;
                if ((state & mask) && !(nstate & mask))
                    ev = INTERNAL_KEY_UP;
                else if (!(state & mask) && (nstate & mask)) {
                    ev = INTERNAL_KEY_DOWN;
                    if (i == (int)Key::EXIT)
                        target_exit();
                    else if (i == (int)Key::RESET)
                        target_reset();
                }
                if (ev) {
                    // DMESG("evt: %d at %d", ev, i);
                    raiseEvent(ev, i);
                    raiseEvent(ev, 0); // any key
                }
            }
            state = nstate;
        }
    }

    return NULL;
}

void initKeys() {
    DMESG("init keys");
    // music::playTone(0, 0); // start music process early

    if (getConfigString("SCAN_CODES")) {
        useScanCodes = 1;
        scanCodeFD = open(getConfigString("SCAN_CODES"), O_RDONLY);
        if (scanCodeFD < 0) {
            DMESG("can't open %s", getConfigString("SCAN_CODES"));
            return;
        }
    } else {
        wiringPiSetupGpio();
    }

    pthread_t disp;
    pthread_create(&disp, NULL, btnPoll, NULL);
    pthread_detach(disp);
}

//% expose
void setupButton(int buttonId, int key) {
    (void)buttonId;
    (void)key;
    // not needed on RPi
}

} // namespace pxt
