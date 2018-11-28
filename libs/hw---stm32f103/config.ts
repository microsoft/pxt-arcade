
namespace config {
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

    export const PIN_BTN_LEFT = DAL.PB_10;
    export const PIN_BTN_UP = DAL.PA_15;
    export const PIN_BTN_RIGHT = DAL.PA_5;
    export const PIN_BTN_DOWN = DAL.PC_13;

    export const PIN_BTN_A = PIN_SDA;
    export const PIN_BTN_B = PIN_SCL;
    export const PIN_BTN_MENU = PIN_RX;

    export const PIN_DISPLAY_CS = DAL.PB_12;
    export const PIN_DISPLAY_SCK = DAL.PB_13;
    export const PIN_DISPLAY_MOSI = DAL.PB_15;
    export const PIN_DISPLAY_DC = DAL.PC_5;
    export const PIN_DISPLAY_RST = DAL.PC_4;
    export const PIN_DISPLAY_MISO = DAL.PB_14;
    export const PIN_DISPLAY_BL = DAL.PA_4;
    
    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.PB_8;

    export const DISPLAY_CFG0 = 0x00000080;
    export const DISPLAY_CFG1 = 0x000603;

    export const DISPLAY_CFG2 = 22; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}
