// Auto-generated. Do not edit.
declare namespace gdk {

    /**
     * Blocking single-shot ADC read of P0 (P0.02 / AIN0). Returns 0..1023 (same
     * scale as pins.analogReadPin), or -1 on hardware timeout.
     *
     * Absolute internal 0.6V reference + gain 1/6 => full scale 3.6V (VDD-independent,
     * so the reading stays correct as the battery/VDD drains). 40us acquisition suits
     * the on-board ~82k divider.
     *
     * Owns the SAADC exclusively for the ~50us the conversion takes, then fully
     * disables it. It does NOT touch PPI/timers/IRQs, so it cannot disturb the
     * display or audio. The complete manual sequence is:
     *   ENABLE -> START -> (STARTED) -> SAMPLE -> (END) -> STOP -> (STOPPED) -> DISABLE
     * The SAMPLE task is the critical step the previous version was missing.
     */
    //% shim=gdk::readP0Adc
    function readP0Adc(): int32;
}

// Auto-generated. Do not edit. Really.
