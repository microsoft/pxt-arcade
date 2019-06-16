//% advanced=true
declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;
}
