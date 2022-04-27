# Music and Sounds

## Melodies

The high-level music API in arcade creates and processes melodies as a sequence of
notes following a syntax form for each note. The melodies are authored using the
`music.Melody` class in arcade which encodes them into a string with this syntax.
For some examples of formatted melodies, see the [mixer extension/package](https://github.com/microsoft/pxt-common-packages/blob/master/libs/mixer/melody.ts#L387).

Melodies are constructed with a series of commands outlined below.

### Command: play note

To play a note:
```
[ABCDEFG] (\d+)  (:\d+)  (-\d+)
note      octave length  tempo
```

The octave, length, and tempo are all optional parameters. Here are some examples:

* `A5:2-120` (play note `A` in octave `5` for `2` beats and set the tempo to `120` bpm)
* `C` (play note `C` for one beat at the current tempo)
* `g5:1` (play note `G` in octave `5` for `1` beat at the current tempo)

### Command: rest

To rest:
```
[R] (:\d+)
```
For example:

* `R` (rest for `1` beat at current tempo)
* `R:3` (rest for `3` beats at current tempo)

### Command: play tone

To play a frequency for a duration in ms:

```
!\d+,\d+
```

For example:
* `!262,500` (play frequency `262` Hz for `500` ms)

### Command: set envelope

To set the ADSR envelope for the played sounds:
```
@\d+,\d+,\d+,\d+
```

Where the four values indicate:

1. "Attack" in ms
2. "Decay" in ms
3. "Sustain" volume (0-255)
4. "Release" in ms

For more information on envelopes, check the Wikipedia article [here](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope).

### Command: set waveform

To set the waveform for the generated notes:

```
~\d+
```

Where the number refers to one of the waveforms in the table below:

Waveform        | Value
----------------|-------
triangle        | 1
sawtooth        | 2
sine            | 3
tunable noise   | 4
noise           | 5
square (10%)    | 11
square (20%)    | 12
square (30%)    | 13
square (40%)    | 14
square (50%)    | 15
cycle 16        | 16
cycle 32        | 17
cycle 64        | 18

The `noise` is an actual white noise. It ignores the requested frequency or note.

The `tunable noise` tone contains a pseudorandom sample. At high frequency it sounds similar to white noise, at low frequency it produces irregular crackling noises.

The `cycle 16`, `cycle 32`, and `cycle 64` waveforms are repeating pseudorandom patterns with a cycle length of 16/32/64 samples respectively. They sound like a noise-distorted square wave, with short cycles being more regular and long cycles being noisier.

### Command: set end frequency

To set the end for the generated notes:

```
^\d+
```

When the end frequency is set, the tone will linear ramp the frequency from the initial set frequency to the end frequency over the duration of the tone.

Here are some examples:

* `!2000,1000^100` will start at `2000` Hz and ramp to `100` Hz over the course of `1000` ms
* `!1300,200^50` will start at `1300` Hz and ramp to `50` Hz over the course of `200` ms
* `!150,500^800` will start at `150` Hz and ramp to `800` Hz over the course of `500` ms

## Sound Instructions

The low-level music API exposed in JavaScript revolves around sound "instructions".

A sound instruction is a series of bytes stored in a `Buffer` with the following format:

Field           | Bits
----------------|------
waveform        | 8
unused          | 8
frequency (hz)  | 16
duration (ms)   | 16
start volume    | 16
end volume      | 16
end frequency   | 16

Volume is a scalar value that ranges from 0 to 1024. See the table in previous section for
the available values for waveform.

To play a sound buffer, use the `music.playInstructions()` API. Buffers can contain
multiple instructions one after the other, so a single "effect" or "melody" should be
constructed in a single Buffer.

### ~ hint

#### Getting buffers

To create a `Buffer`, you can use the `control.createBuffer()` API.

### ~

### Channels

The arcade "hardware" has three available music "channels" that are mixed to produce
the game audio. Using the `music.playInstructions()` API will automatically allocate
a channel to play the instruction and that channel remains occupied until the sound play
completes. Attempting to play too many sounds simultaneously will cause some sounds
to be dropped if all channels are currently busy.

### Hex buffers

If your music or sounds are mostly static (i.e. not created at runtime), you can save
memory by storing them in `hex` buffers. These buffers are compiled into the "binary"
by the MakeCode compiler.
Note that there is currently no way to play sound samples - the buffers below would only apply to the `playInstructions` format described above.
You can create static buffers using this tagged template literal syntax:

```typescript
// The contents of the literal string should be data in hex-encoding
const mySound: Buffer = hex`0123456789abcdef`;
```
