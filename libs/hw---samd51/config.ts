
namespace config {
    export const PIN_LED = DAL.PA22;

    export const PIN_SCK = DAL.PA01;
    export const PIN_MISO = DAL.PB23;
    export const PIN_MOSI = DAL.PA00;

    export const PIN_SDA = DAL.PA12;
    export const PIN_SCL = DAL.PA13;

    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA05;

    export const PIN_A2 = DAL.PB08;
    export const PIN_A3 = DAL.PB09;
    export const PIN_A4 = DAL.PA04;
    export const PIN_A5 = DAL.PA06;
    export const PIN_RX = DAL.PA16;
    export const PIN_TX = DAL.PA17;
    export const PIN_D2 = DAL.PA07;
    export const PIN_D3 = DAL.PB22;
    export const PIN_D4 = DAL.PA14;
    export const PIN_D5 = DAL.PA15; // ???
    export const PIN_D7 = DAL.PA18;
    export const PIN_D9 = DAL.PA19;
    export const PIN_D10 = DAL.PA20;
    export const PIN_D11 = DAL.PA21;
    export const PIN_D12 = DAL.PA23;

    export const PIN_BTN_LEFT = PIN_D11;
    export const PIN_BTN_UP = PIN_D10;
    export const PIN_BTN_RIGHT = PIN_D9;
    export const PIN_BTN_DOWN = PIN_D12;

    export const PIN_BTN_A = PIN_SCL;
    export const PIN_BTN_B = PIN_D7;
    export const PIN_BTN_MENU = PIN_SDA;

    export const PIN_DISPLAY_CS = PIN_A2;
    export const PIN_DISPLAY_SCK = PIN_SCK;
    export const PIN_DISPLAY_MOSI = PIN_MOSI;
    export const PIN_DISPLAY_DC = PIN_A3;
    export const PIN_DISPLAY_RST = PIN_A4;
    export const PIN_DISPLAY_MISO = PIN_MISO;
    export const PIN_DISPLAY_BL = PIN_A5;

    export const PIN_JACK_TX = PIN_TX;

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = PIN_D2;
    export const SPEAKER_VOLUME = 512;
    
    export const DISPLAY_CFG0 = 0x00000090;
    export const DISPLAY_CFG1 = 0x000e14ff;

    //export const DISPLAY_CFG0 = 0x01000080;
    //export const DISPLAY_CFG1 = 0x00000603;

    export const DISPLAY_CFG2 = 24; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;

    // TODO: JACDAC pin
}
