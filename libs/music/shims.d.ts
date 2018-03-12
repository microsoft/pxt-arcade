// Auto-generated. Do not edit.
declare namespace music {

    /**
     * Set a source of digital sound data (PCM) for making tones.
     * Samples are 1020 x 10bit unsigned PCM.
     * A reference to the buffer is kept to avoid the memory overhead, so changes to the buffer
     * values are reflected immediately to the sound output. 
     */
    //% help=music/set-tone
    //% weight=1 group="Tones"
    //% deprecated
    //% blockId=music_set_tone block="set tone %buffer" shim=music::setTone
    function setTone(buffer: Buffer): void;

    /**
     * Set the output volume of the sound synthesizer.
     * @param volume the volume 0...256, eg: 128
     */
    //% blockId=synth_set_volume block="set volume %volume"
    //% parts="speaker"
    //% volume.min=0 volume.max=256
    //% help=music/set-volume
    //% weight=70 shim=music::setVolume
    function setVolume(volume: int32): void;

    /**
     * Play a tone through the speaker for some amount of time.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param ms tone duration in milliseconds (ms), eg: music.beat(BeatFraction.Half)
     */
    //% help=music/play-tone
    //% blockId=music_play_note block="play tone|at %note=device_note|for %duration=device_beat"
    //% parts="headphone" async
    //% blockNamespace=music
    //% weight=76 blockGap=8 shim=music::playTone
    function playTone(frequency: int32, ms: int32): void;
}

// Auto-generated. Do not edit. Really.
