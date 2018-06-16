#include "pxt.h"

#include <wiringPi.h>
#include <pthread.h>

namespace pxt {

const int keyPins[] = {
    // Keys in order
    13, // Y=P33
    16, // X=P36
    12, // A=P32
    6,  // B=P31
    20, // SEL=P38
    26, // START=P37
    23, // PLAYER1
    22, // PLAYER2
    0};

static uint32_t readBtns() {
    uint32_t r = 0;
    for (int i = 0; keyPins[i]; ++i) {
        if (!digitalRead(keyPins[i]))
            r |= 1 << (i + 1);
    }
    return r;
}

const int INTERNAL_KEY_UP = 2050;
const int INTERNAL_KEY_DOWN = 2051;

static void *btnPoll(void *dummy) {
    (void)dummy;

    uint32_t state = readBtns();
    DMESG("btns: %p", state);
    while (1) {
        sleep_core_us(5000);
        uint32_t nstate = readBtns();

        if (state != nstate) {
            for (int i = 1; i < 32; ++i) {
                uint32_t mask = 1 << i;
                int ev = 0;
                if ((state & mask) && !(nstate & mask))
                    ev = INTERNAL_KEY_UP;
                else if (!(state & mask) && (nstate & mask)) {
                    ev = INTERNAL_KEY_DOWN;
                    if (i == 7) // Player1
                        target_exit();
                    else if (i == 8) // Player2
                        target_reset();
                }
                if (ev) {
                    DMESG("evt: %d at %d", ev, i);
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
