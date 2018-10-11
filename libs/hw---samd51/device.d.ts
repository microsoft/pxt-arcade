// TODO remove pins?
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

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D2)
    const D2: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D3)
    const D3: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D4)
    const D4: PwmOnlyPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;
}

declare namespace input {
    //% block="button A" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_A,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonA: Button;
    //% block="button B" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_B,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonB: Button;
    //% block="button Left" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_LEFT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonLeft: Button;
    //% block="button Right" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_RIGHT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonRight: Button;

    //% block="button Up" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_UP,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonUp: Button;
    //% block="button Down" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_DOWN,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonDown: Button;

    //% block="button Menu" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_MENU,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonMenu: Button;
}
