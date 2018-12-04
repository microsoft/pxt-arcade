// Note that these value can be overridden by the configuration area in the bootloader.
namespace config {
    export const PIN_LED = DAL.PC_8;

    export const PIN_JACK_TX = DAL.PA_9;

    export const PIN_BTN_LEFT = DAL.PA_15;
    export const PIN_BTN_UP = DAL.PA_5;
    export const PIN_BTN_RIGHT = DAL.PC_13;
    export const PIN_BTN_DOWN = DAL.PB_10;

    export const PIN_BTN_A = DAL.PB_1;
    export const PIN_BTN_B = DAL.PB_0;
    export const PIN_BTN_MENU = DAL.PC_10;

    export const PIN_DISPLAY_CS = DAL.PB_12;
    export const PIN_DISPLAY_SCK = DAL.PB_13;
    export const PIN_DISPLAY_MOSI = DAL.PB_15;
    export const PIN_DISPLAY_DC = DAL.PC_5;
    export const PIN_DISPLAY_RST = DAL.PC_4;
    export const PIN_DISPLAY_MISO = DAL.PB_14;
    export const PIN_DISPLAY_BL = DAL.PC_7;
   

    export const DISPLAY_CFG0 = 0x00000080;
    export const DISPLAY_CFG1 = 0x000603;

    export const DISPLAY_CFG2 = 22; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}
