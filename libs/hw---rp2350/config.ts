// Pimoroni Badgeware Tufty 2350 (RP2350B).
// Pin values are raw RP2350B GPIO numbers; the DAL pin enum only goes up to P30,
// so numeric literals are used throughout.
// Sources: https://github.com/pimoroni/tufty2350/blob/main/board/pins.csv and the
// board's MicroPython firmware (machine.Pin.board).
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
    // Arcade renders 160x120 and the driver pixel-doubles it, so these are the physical size.
    export const DISPLAY_TYPE = 7789; // DAL.DISPLAY_TYPE_ST7789
    export const DISPLAY_WIDTH = 320;
    export const DISPLAY_HEIGHT = 240;
    // MADCTL = 0x90 (row order | scan order); colors are inverted by the ST7789 driver (INVON)
    export const DISPLAY_CFG0 = 0x00000090;
    // 0xffffff = don't write FRMCTR1 (0xB1 is RGBCTRL on the ST7789)
    export const DISPLAY_CFG1 = 0xffffff;
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

    // Qw/ST connector I2C bus
    export const PIN_SDA = 4;
    export const PIN_SCL = 5;

    // LSM6DS accelerometer (WHO_AM_I 0x6A at 0x6A) on the internal I2C bus, which also
    // hosts the CAP1208 touch controller (0x28, alert on GPIO13)
    export const ACCELEROMETER_TYPE = 0xD4; // DAL.ACCELEROMETER_TYPE_LSM6DS
    export const PIN_ACCELEROMETER_SDA = 18;
    export const PIN_ACCELEROMETER_SCL = 19;
    export const PIN_ACCELEROMETER_INT = 20;

    export const PIN_IR_OUT = 16;
    export const PIN_IR_IN = 17;

    export const PIN_USB_POWER = 12; // VBUS_DETECT
    export const PIN_BATTSENSE = 40; // VBAT_SENSE
    export const PIN_LIGHT = 43;     // LIGHT_SENSE
}
