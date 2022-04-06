namespace config {
    // button/smarconfig
    export const PIN_BTNMX_LATCH = DAL.P0
    export const PIN_BTNMX_CLOCK = DAL.P1
    export const PIN_BTNMX_DATA = DAL.P2

    // pybadge-like layout
    export const PIN_BTN_LEFT = 1050
    export const PIN_BTN_UP = 1052
    export const PIN_BTN_DOWN = 1051
    export const PIN_BTN_RIGHT = 1053
    export const PIN_BTN_A = 1054
    export const PIN_BTN_B = 1055
    export const PIN_BTN_MENU = 1056

    // screen
    export const PIN_DISPLAY_SCK = DAL.P22
    export const PIN_DISPLAY_MOSI = DAL.P23
    export const PIN_DISPLAY_MISO = DAL.P20
    export const PIN_DISPLAY_DC = DAL.P24
    export const PIN_DISPLAY_BL = DAL.P21
    export const PIN_DISPLAY_RST = DAL.P19
    export const PIN_DISPLAY_CS = DAL.P25

    export const PIN_JACK_TX = DAL.P9
    export const PIN_JACK_SND = DAL.P7

    export const DISPLAY_WIDTH = 160
    export const DISPLAY_HEIGHT = 128

    export const DISPLAY_TYPE = 4242
    export const DISPLAY_CFG0 = 0x00000080
    export const DISPLAY_CFG1 = 0x00000603
    export const DISPLAY_CFG2 = 8
}
