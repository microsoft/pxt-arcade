#include "pxt.h"

#include <wiringPi.h>
#include <wiringPiI2C.h>
#include <pthread.h>

namespace pxt {

enum class Key {
    Left = 1,
    Up,
    Right,
    Down,
    A,
    B,
    Menu,
    Reset,
    Exit,
};

enum class HwKey {
    Y = 13,
    X = 16,
    A = 12,
    B = 6,
    Select = 20,
    Start = 26,
    Player1 = 23,
    Player2 = 22,
};

#define HK(v) (int)(HwKey::v)
const int keyPins[] = {HK(X),     HK(Y),       HK(A),       HK(B), HK(Select),
                       HK(Start), HK(Player1), HK(Player2), 0};

const int INTERNAL_KEY_UP = 2050;
const int INTERNAL_KEY_DOWN = 2051;

static int adcFD;

#define SWAP(v) (uint16_t)((v >> 8) | (v << 8))

static int readADC(int channel) {
    if (!adcFD) {
        adcFD = wiringPiI2CSetup(0x48);
    }

    if (adcFD < 0)
        return -1;

    uint16_t config = 0x8383;
    config += 0x4000 + 0x1000 * channel;

    wiringPiI2CWriteReg16(adcFD, 0x01, SWAP(config));
    sleep_core_us(1000);

    config = wiringPiI2CReadReg16(adcFD, 0x00);
    return SWAP(config);
}

#define CHK(k) !digitalRead(HK(k))
#define SET(s) r |= 1 << (int)(Key::s)
#define KEY(k0, s)                                                                                \
    if (CHK(k0))                                                                                   \
    SET(s)

#define MID 0x3300
#define DEAD 0x1000

static uint32_t readBtns() {
    uint32_t r = 0;

    KEY(A, A);
    KEY(X, A);
    KEY(B, B);
    KEY(Y, B);
    KEY(Select, Menu);
    KEY(Start, Reset);
    KEY(Player1, Exit);
    KEY(Player2, Exit);

    uint16_t ch0 = readADC(0), ch1 = readADC(1);

    if (ch0 < MID - DEAD)
        SET(Up);
    if (ch0 > MID + DEAD)
        SET(Down);

    if (ch1 < MID - DEAD)
        SET(Left);
    if (ch1 > MID + DEAD)
        SET(Right);

    return r;
}

static void *btnPoll(void *dummy) {
    (void)dummy;

    uint32_t state = readBtns();
    // DMESG("btns: %p", state);
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
                    if (i == (int)Key::Exit)
                        target_exit();
                    else if (i == (int)Key::Reset)
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
    wiringPiSetupGpio();

    for (int i = 0; keyPins[i]; ++i) {
        pinMode(keyPins[i], INPUT);
        pullUpDnControl(keyPins[i], PUD_UP);
    }

    pthread_t disp;
    pthread_create(&disp, NULL, btnPoll, NULL);
    pthread_detach(disp);
}

} // namespace pxt
