// Game Designer's Kit backlight override.
//
// Why this file exists:
// The PCB drives the LCD backlight through an AO3407A P-channel MOSFET high-side switch.
// Source = 3V3, Drain = LCD_LED, Gate = P10 (with 10k pull-up to 3V3).
// P-FET truth table on this board:
//   P10 LOW  -> MOSFET ON  -> 3V3 reaches LCD_LED -> backlight ON
//   P10 HIGH -> MOSFET OFF -> backlight OFF
// The CODAL ST7735 driver does `bl->setDigitalValue(1)` once during init
// (see node_modules/pxt-common-packages/libs/screen---st7735/screen.cpp around line 125),
// which turns this PCB's backlight OFF. We override it back to LOW here.
//
// Ordering: `hw---gdk` depends on `screen---st7735`, so this file's top-level
// statements run AFTER screen---st7735/targetoverrides.ts has triggered the C++ display
// constructor (which is what writes BL=HIGH). Therefore the synchronous write below
// reliably wins over the driver's default. The background watchdog re-asserts BL=LOW
// every second as a defense against any later code path that re-initialises the screen.

namespace gdk {
    function driveBacklightOn(): void {
        const bl = pins.pinByCfg(DAL.CFG_PIN_DISPLAY_BL);
        if (bl) bl.digitalWrite(false);
    }

    driveBacklightOn();

    forever(function () {
        driveBacklightOn();
        pause(1000);
    });
}
