# Hardware Definition

Many hardware targets will work as a physical Arcade platform. These are typically SoC based systems that run a small core operating system.

Arcade hardware targets are supported by their _hardware definition_ which is provided as an [extension](https://makecode.com/extensions). The hardware definition specifies the base device characteristics and mappings for the screen, buttons, pins, and sound.

## Extension `pxt.json`

The components of the extension are source files which specify device mappings and control behaviors that are specific to the hardware target. The files and dependancies are all declared in a ``pxt.json`` file just like all MakeCode [extensions](https://makecode.com/extensions).

```
{
    "name": "gizmoq",
    "description": "GizmoQ board",
    "files": [
        "config.ts"
    ],
    "card": {
        "name": "GizmoQ Gamer Board",
        "description": "Specialized GizmoQ Linux image for the GizmoQ Board.",
        "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
        "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
        "cardType": "hw",
        "imageUrl": "/static/boards/gizmoq.jpg"
    },
    "dependencies": {
        "core": "file:../core---gizmoq",
        "screen": "file:../screen---gizmoq",
        "mixer": "file:../mixer---gizmoq",
        "game": "file:../game"
    },
    "public": true
}
```

When downloading an Arcade game program, the **GizmoQ** hardware will appear as a card selection in the **Choose your Hardware** dialog. The board choice might look something like this:

```codecard
[{
        "name": "GizmoQ Gamer Board",
        "description": "Specialized GizmoQ Linux image for the GizmoQ Board.",
        "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
        "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
        "cardType": "hw",
        "imageUrl": "/static/boards/gizmoq.png"
}]
```

### Config description

The hardware definition extension contains a ``config.ts`` file which exports constants that define device settings for your board. These are mostly pin an button settings which map to DAL defines. You get a ``dal.d.ts`` generated for you in the ``core`` extension which contains the DAL definitions. The ``config.ts`` also has the screen settings for board. Here's a sample ``config.ts`` file:

```typescript-ignore
namespace config {
    // Define the pins
    export const PIN_LED = DAL.PB_11;

    export const PIN_SCK = DAL.PA_5;
    export const PIN_MISO = DAL.PA_6;
    export const PIN_MOSI = DAL.PA_7;

    export const PIN_RX = DAL.PA_10;
    export const PIN_TX = DAL.PA_9;

    export const PIN_SDA = DAL.PB_7;
    export const PIN_SCL = DAL.PB_6;

    export const PIN_D14 = DAL.PB_9;
    export const PIN_D15 = DAL.PB_8;
    
    // Buttons are pin settings
    export const PIN_BTN_LEFT = DAL.PB_10;
    export const PIN_BTN_UP = DAL.PA_15;
    export const PIN_BTN_RIGHT = DAL.PA_5;
    export const PIN_BTN_DOWN = DAL.PC_13;

    export const PIN_BTN_A = PIN_SDA;
    export const PIN_BTN_B = PIN_SCL;
    export const PIN_BTN_MENU = PIN_RX;
    
    // LCD screen SPI settings
    export const PIN_DISPLAY_CS = DAL.PB_12;
    export const PIN_DISPLAY_SCK = DAL.PB_13;
    export const PIN_DISPLAY_MOSI = DAL.PB_15;
    export const PIN_DISPLAY_DC = DAL.PC_5;
    export const PIN_DISPLAY_RST = DAL.PC_4;
    export const PIN_DISPLAY_MISO = DAL.PB_14;
    export const PIN_DISPLAY_BL = DAL.PA_4;
    
    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.PB_8;

    // Display metrics and config
    export const DISPLAY_CFG0 = 0x00000080;
    export const DISPLAY_CFG1 = 0x000603;

    export const DISPLAY_CFG2 = 22; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}
```

### Device interface

The hardware definition extension may also have device interface file which connects the DAL definitions to the namespace APIs. This information goes in a ``device.d.ts`` file. Here's an example: 

```typescript-ignore
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
```

### Extension layout

The extnension files are just ``pxt.json``, ``config.ts``, and ``device.d.ts``. The folder that contains the extension files is named with a prefix of ``hw---`` followed by the board name used in the ``pxt.json`` file. For the GizmoQ example, it's hardware definition extension is named ``hw---gizmoq``.
