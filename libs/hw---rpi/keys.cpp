#include "pxt.h"

#include <wiringPi.h>
#include <wiringPiI2C.h>
#include <pthread.h>

namespace music {
void playTone(int frequency, int ms);
}

namespace pxt {

static uint64_t configuredPins;

enum class Key {
    LEFT = 1,
    UP,
    RIGHT,
    DOWN,
    A,
    B,
    MENU,
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
#define KEY(s)                                                                                 \
    if (isPressed("BTN_" #s))                                                                                   \
    SET(s)

static int isPressed(const char *name) {
    auto pins = getConfigInts(name);
    for (int i = 0; pins[i] != ENDMARK; ++i) {
        auto p = pins[i];
        auto mask = 1ULL << p;
        if (!(configuredPins & mask)) {
            pinMode(p, INPUT);
            pullUpDnControl(p, PUD_UP);
            configuredPins |= mask;
        }
        if (!digitalRead(p))
            return 1;
    }
    return 0;
}

static uint32_t readBtns() {
    uint32_t r = 0;

    KEY(A);
    KEY(B);
    KEY(LEFT);
    KEY(RIGHT);
    KEY(UP);
    KEY(DOWN);
    KEY(MENU);
    KEY(EXIT);
    KEY(RESET);
    
    uint16_t ch0 = readADC(0), ch1 = readADC(1);

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

static void *btnPoll(void *dummy) {
    (void)dummy;

    uint32_t state = readBtns();
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

    wiringPiSetupGpio();

    pthread_t disp;
    pthread_create(&disp, NULL, btnPoll, NULL);
    pthread_detach(disp);
}

} // namespace pxt
