namespace gdk {
    /**
     * Blocking single-shot ADC read of P0 (P0.02 / AIN0). Returns 0..1023 (same
     * scale as pins.analogReadPin), or -1 on hardware timeout.
     *
     * On micro:bit V2 the native SAADC implementation in analog.cpp is used.
     * The body below is the simulator fallback: there is no SAADC in the
     * simulator, so it reports a full battery (1023) to keep the battery
     * monitor and any game running without a runtime error.
     */
    //% shim=gdk::readP0Adc
    export function readP0Adc(): number {
        return 1023;
    }
}
