#include "pxt.h"
#include "nrf.h"

namespace gdk {

// DMA target for the one conversion result. Must live in RAM (EasyDMA).
static volatile int16_t adcResult;
static bool saadcCalibrated = false;

// Busy-wait for a SAADC event register, with a hard timeout so a failed
// conversion can never freeze the game loop. Returns true if the event fired.
static bool saadcWait(volatile uint32_t *evt, uint32_t timeoutUs) {
    uint64_t start = pxt::current_time_us();
    while (*evt == 0) {
        if (pxt::current_time_us() - start > timeoutUs)
            return false;
    }
    *evt = 0;
    return true;
}

// One-time offset calibration (recommended by Nordic before first use).
static void saadcCalibrate() {
    NRF_SAADC->EVENTS_CALIBRATEDONE = 0;
    NRF_SAADC->TASKS_CALIBRATEOFFSET = 1;
    if (saadcWait(&NRF_SAADC->EVENTS_CALIBRATEDONE, 5000))
        saadcCalibrated = true;
    // After calibration the SAADC raises STOPPED; clear it so the real read starts clean.
    NRF_SAADC->EVENTS_STOPPED = 0;
}

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
//%
int readP0Adc() {
    NRF_SAADC->RESOLUTION = SAADC_RESOLUTION_VAL_14bit << SAADC_RESOLUTION_VAL_Pos;
    NRF_SAADC->OVERSAMPLE = SAADC_OVERSAMPLE_OVERSAMPLE_Bypass << SAADC_OVERSAMPLE_OVERSAMPLE_Pos;

    // P0 = P0.02 = AIN0 on channel 0; all other channels unused.
    NRF_SAADC->CH[0].PSELP = SAADC_CH_PSELP_PSELP_AnalogInput0 << SAADC_CH_PSELP_PSELP_Pos;
    NRF_SAADC->CH[0].PSELN = SAADC_CH_PSELN_PSELN_NC << SAADC_CH_PSELN_PSELN_Pos;
    NRF_SAADC->CH[0].CONFIG =
        (SAADC_CH_CONFIG_RESP_Bypass << SAADC_CH_CONFIG_RESP_Pos) |
        (SAADC_CH_CONFIG_RESN_Bypass << SAADC_CH_CONFIG_RESN_Pos) |
        (SAADC_CH_CONFIG_GAIN_Gain1_6 << SAADC_CH_CONFIG_GAIN_Pos) |
        (SAADC_CH_CONFIG_REFSEL_Internal << SAADC_CH_CONFIG_REFSEL_Pos) |
        (SAADC_CH_CONFIG_TACQ_40us << SAADC_CH_CONFIG_TACQ_Pos) |
        (SAADC_CH_CONFIG_MODE_SE << SAADC_CH_CONFIG_MODE_Pos) |
        (SAADC_CH_CONFIG_BURST_Disabled << SAADC_CH_CONFIG_BURST_Pos);
    for (int c = 1; c < 8; c++) {
        NRF_SAADC->CH[c].PSELP = SAADC_CH_PSELP_PSELP_NC << SAADC_CH_PSELP_PSELP_Pos;
        NRF_SAADC->CH[c].PSELN = SAADC_CH_PSELN_PSELN_NC << SAADC_CH_PSELN_PSELN_Pos;
    }

    adcResult = 0;
    NRF_SAADC->RESULT.PTR = (uint32_t)&adcResult;
    NRF_SAADC->RESULT.MAXCNT = 1;

    NRF_SAADC->EVENTS_STARTED = 0;
    NRF_SAADC->EVENTS_END = 0;
    NRF_SAADC->EVENTS_STOPPED = 0;

    NRF_SAADC->ENABLE = SAADC_ENABLE_ENABLE_Enabled << SAADC_ENABLE_ENABLE_Pos;

    if (!saadcCalibrated)
        saadcCalibrate();

    // Ready the (D)MA buffer.
    NRF_SAADC->TASKS_START = 1;
    if (!saadcWait(&NRF_SAADC->EVENTS_STARTED, 5000)) {
        NRF_SAADC->ENABLE = 0;
        return -1;
    }

    // Take the actual sample -- THIS is what fills RESULT and raises END.
    NRF_SAADC->TASKS_SAMPLE = 1;
    if (!saadcWait(&NRF_SAADC->EVENTS_END, 5000)) {
        NRF_SAADC->TASKS_STOP = 1;
        NRF_SAADC->ENABLE = 0;
        return -1;
    }

    int sample = adcResult;
    if (sample < 0)
        sample = 0; // single-ended: clip small negative offset to 0

    NRF_SAADC->TASKS_STOP = 1;
    saadcWait(&NRF_SAADC->EVENTS_STOPPED, 5000);
    NRF_SAADC->ENABLE = 0;

    // 14-bit full scale is 16383; scale to the familiar 0..1023 range.
    return sample / 16;
}

} // namespace gdk
