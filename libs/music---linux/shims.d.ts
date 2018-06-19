// Auto-generated. Do not edit.
declare namespace music {

    /**
     * Play a tone through the speaker for some amount of time.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param ms tone duration in milliseconds (ms), eg: BeatFraction.Half
     */
    //% help=music/play-tone
    //% blockId=music_play_note block="play tone|at %note=device_note|for %duration=device_beat"
    //% parts="headphone" async
    //% blockNamespace=music
    //% weight=76 blockGap=8 shim=music::playTone
    function playTone(frequency: int32, ms: int32): void;
}

// Auto-generated. Do not edit. Really.
