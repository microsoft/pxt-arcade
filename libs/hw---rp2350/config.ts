// Pimoroni Badgeware Tufty 2350 (RP2350B).
// Pin values are raw RP2350B GPIO numbers; the DAL pin enum only goes up to P30,
// so numeric literals are used throughout.
// Source: https://github.com/pimoroni/tufty2350/blob/main/board/pins.csv
namespace config {
    // Front buttons (active low, internal pull-up). The Tufty has five front
    // buttons plus HOME; there is no Arcade "B" button on this board.
    export const PIN_BTN_LEFT = 7;   // Tufty A
    export const PIN_BTN_RIGHT = 10; // Tufty C
    export const PIN_BTN_UP = 11;    // Tufty UP
    export const PIN_BTN_DOWN = 6;   // Tufty DOWN
    export const PIN_BTN_A = 9;      // Tufty B
    export const PIN_BTN_MENU = 22;  // Tufty HOME (BOOTSEL)

    // 320x240 ST7789 IPS panel on an 8-bit parallel (8080) bus, DB0..DB7 = GPIO32..39.
    // Arcade renders 160x120 and the driver pixel-doubles to 320x240.
    export const DISPLAY_TYPE = 9341; // DAL.DISPLAY_TYPE_ILI9341: 2x pixel-doubled MIPI-DCS panel
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 120;
    // MADCTL = 0x90 (row order | scan order), bit 24 = invert colors (IPS panel)
    export const DISPLAY_CFG0 = 0x01000090;
    // bits 24..31 = 1 (parallel bus), bits 0..7 = first data pin (GPIO32)
    export const DISPLAY_CFG2 = 0x01000020;
    export const PIN_DISPLAY_CS = 27;
    export const PIN_DISPLAY_DC = 28;   // LCD_RS
    export const PIN_DISPLAY_MOSI = 30; // LCD_WR (write strobe) for parallel bus
    export const PIN_DISPLAY_MISO = 31; // LCD_RD (read strobe) for parallel bus
    export const PIN_DISPLAY_BL = 26;

    // Switched power rail for the display, backlight and I2C peripherals
    export const PIN_PWREN = 41;

    // Rear white LEDs (4-zone backlight)
    export const PIN_LED1 = 0;
    export const PIN_LED2 = 1;
    export const PIN_LED3 = 2;
    export const PIN_LED4 = 3;

    // I2C bus shared by the RTC, accelerometer and Qw/ST connector
    export const PIN_SDA = 4;
    export const PIN_SCL = 5;
    export const PIN_ACCELEROMETER_SDA = 4;
    export const PIN_ACCELEROMETER_SCL = 5;

    export const PIN_USB_POWER = 12; // VBUS_DETECT
    export const PIN_BATTSENSE = 40; // VBAT_SENSE
    export const PIN_LIGHT = 43;     // LIGHT_SENSE
}
