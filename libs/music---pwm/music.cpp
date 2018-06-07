#include "pxt.h"

#define NOTE_PAUSE 20

namespace music {

/**
* Play a tone through the speaker for some amount of time.
* @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
* @param ms tone duration in milliseconds (ms), eg: BeatFraction.Half
*/
//% help=music/play-tone
//% blockId=music_play_note block="play tone|at %note=device_note|for %duration=device_beat"
//% parts="headphone" async
//% blockNamespace=music
//% weight=76 blockGap=8
void playTone(int frequency, int ms) {
  auto pitchPin = LOOKUP_PIN(SPEAKER_AMP);

  if (!pitchPin)
    return;

  if (frequency <= 0) {
    pitchPin->setAnalogValue(0);
  } else {
    pitchPin->setAnalogValue(getConfig(CFG_SPEAKER_VOLUME, 10));
    pitchPin->setAnalogPeriodUs(1000000 / frequency);
    if (ms > 0) {
      int d = max(1, ms - NOTE_PAUSE); // allow for short rest
      int r = max(1, ms - d);
      fiber_sleep(d);
      pitchPin->setAnalogValue(0);
      fiber_sleep(r);
    }
  }
}

} // namespace music
