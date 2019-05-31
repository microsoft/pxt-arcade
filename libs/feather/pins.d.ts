declare namespace feather {
    // --------------------------------------------
    // Left row
    // RST
    // 3V
    // Aref
    // GND
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A0)
    const A0: AnalogOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A1)
    const A1: AnalogOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A2)
    const A2: AnalogInPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A3)
    const A3: AnalogInPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A4)
    const A4: AnalogInPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A5)
    const A5: AnalogInPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;

    // GND
    // --------------------------------------------

    // Right row:
    // BAT
    // EN
    // USB
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D13)
    const D13: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D12)
    const D12: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D11)
    const D11: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D10)
    const D10: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D9)
    const D9: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D6)
    const D6: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D5)
    const D5: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    // --------------------------------------------



    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;
}
