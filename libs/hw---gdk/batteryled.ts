// Game Designer's Kit battery-low indicator LED (P6).

namespace gdk {
    const ADC_LOW_THRESHOLD = 700;
    const STARTUP_DELAY_MS = 2000;
    const REFRESH_MS = 5000;
    const SAMPLES = 4;

    const led = pins.pinByCfg(DAL.CFG_PIN_P6);

    function readAdcAveraged(): number {
        let acc = 0;
        let n = 0;
        for (let i = 0; i < SAMPLES; i++) {
            const v = readP0Adc();
            if (v >= 0) { acc += v; n++; }
        }
        return n > 0 ? Math.idiv(acc, n) : -1;
    }

    function updateLed() {
        const adc = readAdcAveraged();
        if (adc < 0) return;
        const low = adc < ADC_LOW_THRESHOLD;
        if (led) led.digitalWrite(low);
    }

    control.runInBackground(function () {
        pause(STARTUP_DELAY_MS);
        updateLed();
        while (true) {
            pause(REFRESH_MS);
            updateLed();
        }
    });
}
