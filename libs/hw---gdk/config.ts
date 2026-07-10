// Game Designer's Kit: micro:bit V2 + 1.8" ST7735 (128x160) over edge-connector SPI.
// Direct ST7735 (no 74HC165 / "smart display" auto-detect). GPIO arcade buttons.

namespace config {
    export const SETTINGS_SIZE = (8 * 1024)

    export const PIN_DISPLAY_SCK = DAL.P0_17 // P13
    export const PIN_DISPLAY_MOSI = DAL.P0_13 // P15
    export const PIN_DISPLAY_MISO = DAL.P0_1
    export const PIN_DISPLAY_CS = DAL.P1_2 // P16
    export const PIN_DISPLAY_DC = DAL.P0_10 // P8
    export const PIN_DISPLAY_RST = DAL.P0_12 // P12
    // Active-LOW backlight on P10 (P-FET); see init.ts.
    export const PIN_DISPLAY_BL = DAL.P0_30 // P10

    export const PIN_BTN_UP = DAL.P0_3   // P1
    export const PIN_BTN_DOWN = DAL.P0_4 // P2
    export const PIN_BTN_LEFT = DAL.P0_31 // P3
    export const PIN_BTN_RIGHT = DAL.P0_28 // P4
    export const PIN_BTN_A = DAL.P0_14   // P5
    export const PIN_BTN_B = DAL.P0_23   // P11
    export const PIN_BTN_MENU = DAL.P0_9 // P9

    export const PIN_JACK_SND = DAL.P0_0
    export const SPEAKER_VOLUME = 255

    export const DISPLAY_WIDTH = 160
    export const DISPLAY_HEIGHT = 128
    export const DISPLAY_DELAY = 300
    export const CLOCK_SPEED = 32
    export const DISPLAY_TYPE = 7735 // ST7735 direct panel

    export const DISPLAY_CFG0 = 0x00000080
    export const DISPLAY_CFG1 = 0x00000603
    export const DISPLAY_CFG2 = 24

    // P0: battery divider (analog.cpp). P6: low-battery LED (batteryled.ts).
    export const PIN_P0 = DAL.P0_2
    export const PIN_P6 = DAL.P1_5
}
