declare namespace pins {
    /*
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalPin;
    */
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A0)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A1)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A2)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A3)
    const A3: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A4)
    const A4: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_A5)
    const A5: PwmPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D0)
    const D0: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D1)
    const D1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D2)
    const D2: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D4)
    const D4: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D9)
    const D9: PwmPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_D13)
    const D13: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED_2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED1)
    const LED_1: DigitalInOutPin;

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
