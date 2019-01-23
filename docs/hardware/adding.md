# Adding your own hardware to Arcade

Arcade features the following virtual device specification:

* 160x120 pixel screen
* 15 colors plus transparency; user-controllable palette
* 4 directional buttons, 2 action buttons (A and B), 1 utility (menu/select/pause) button, 1 reset button
* 1-channel sound output (either a DAC or PWM with DMA support); this is multiplexed in software

Students can run and create Arcade games in the browser,
either on a computer or a mobile device.

While the focus of Arcade is clearly games, the screen and the buttons give flexibility
in the kind of programs that can be created to teach various computer science concepts.

The focus of the Arcade API design is ease of use. The entire screen is typically
re-drawn on every frame, and the users can place sprites in arbitrary
places on the screen.

Not coincidentally this specification also lends itself to a hardware implementation.

One screen at 160x120x4 bits takes a little under 10kB. We need at least two
screens for double-buffering and the user is very likely to use two or three more for various
sprite operations. This, together with heap fragmentation concerns,
 effectively requires the hardware to have **at least 96kB of RAM**,
though more is clearly better. In addition, **512kB of flash and 64MHz or more** are recommended,
but these usually follow from the RAM size.

We currently support two hardware variants which match these criteria:
* **D51** based on Microchip **ATSAMD51G19A** (Cortex M4F, 192kB of RAM, 512kB of flash, 120MHz)
* **F401** based on ST Micro **STM32F401RE** (Cortex M4F, 96kB of RAM, 512kB of flash, 84MHz)

Additionally, we're considering adding the following in the future:
* **N840** based on Nordic **NRF52840** (Cortex M4F, 256kB of RAM, 1024kB of flash, 64MHz)

Other choices are possible, and we would love to hear your feedback.
We recommend D51 unless there are good reasons to go with F401
(price, etc.), since it's faster and has more memory.

Other than the MCU the two variants contain the same components (with optional variations
in the power supply).

* 160x128 color TFT screen based on ST7735 or ILI9163C controller chip in SPI version 
  - we skip using 8 bottom rows of the screen to upscaling to 320x240 in future
* 6 buttons, for directions, A, and B
* 2 buttons for reset and menu
* female microUSB connector for power and UF2 programming
* ESD protection for the microUSB
* a 3.3V regulator
* a transistor for power management
* JST connector for battery; this is optional if the battery is integrated
* optional LiPo charging circuit
* optional accelerometer
* a magnetic speaker (transducer) with some sort of amplifier
* an optional [JACDAC](https://jacdac.org/) connector

If you have good reasons to use a different screen or accelerometer, let us know.

## Schematics

We are aware of various configuration needs for screen controllers, as well as different
accelerometers etc. coming in future. We generate the same UF2 file
for all boards of a given variant, and have the runtime look for configuration
values in the bootloader area.

See https://github.com/Microsoft/uf2/blob/master/cf2.md for more details on the format.
The bootloaders can be binary patched with new configuration data if needed.

The configuration data also includes assignment of a GPIO pin header.
Generally, the header isn't essential to this board, but it's recommended
to at least leave holes for people to solder it in.

The exact pins where the various `BTN_*`, `JACK_*`, and `DISPLAY_*` lines are connected
is specified in the bootloader. You can change them, as described above.

### Buttons

The 4 directional buttons, the A/B buttons, and the MENU button are to be connected
to GND and a respective MCU pin, as in the schematics below.
There is an internal pull-up enabled on the MCU, so no need for external
pull-ups.
The RESET button is to be connected to the MCU hardware RESET line (refer to the MCU
documentation how to exactly connect it and if it needs any additional components).

The schematics also shows the recommended button arrangement - directional buttons
on the left of the screen, while A/B are on the right of the screen.
A is above and to the right of B.

MENU is best placed somewhere below the other buttons, and RESET is best placed next to
the USB connector.

![Button connection](/static/hardware/buttons.png)

### Screen

The screen needs to be connected to the hardware SPI module.

On some screens:
* the RS/DC is called A0
* the DATA is called MOSI or SDA
* the CLOCK is called SCK or SCL
* LEDK is called LED-
* LEDA is called LED+
* RESET is called RST

The purpose of the `DISPLAY_BL` is to dim or shut off the screen.
The schematics shows one way of doing this.
Experiment with the value of `R2` to get optimal brightness.

We have found the following part numbers for screens:

* [MTF0177SN-10](http://www.microtech-lcd.com/tftlcd/TFT-LCD-Module9.html)
* [Z180SN009](https://www.ezsolutionkr.com/tft-lcd-z180sn009-v0-0)

However, others are also available - searching for ST7735 or ILI9163 usually yields
the right ones. They are around $2.

![Screen connection](/static/hardware/screen.png)

### Audio

The board should have a buzzer. You need to figure out how to connect it properly
and what kind of amplifier you might need.
Below is a schematic with a simple low-pass filter and a headphone jack for audio.
You only need low-pass filter when there is no DAC on board (you need low-pass
filter for F401, but you don't need it for D51).

The headphone jack is optional.
Also note that this is not for JACDAC networking, for that see below.

![Audio connection](/static/hardware/audio.png)

### JACDAC

[JACDAC](https://jacdac.org) is a protocol for networking over a single-wire
connection with optional power delivery.
It lets you play multiplayer games by connecting two (or more with a headphone splitter) Arcades
together.
You can implement JACDAC with or without power delivery, by using one of the
schematics below.

While the schematics use a 3.5mm jack connector with switches, you can also use
one without switches, as they are not used.

#### JACDAC with power delivery

The F1 fuse can be replaced with 500mA (or similar) current limiting circuit.

Power delivery is useful when an external accessory is connected,
which requires power (eg., a joystick, a BLE dongle, or a WiFi dongle).
There are currently no accessories available yet though.

![JACDAC with power](/static/hardware/fulljacdac.png)

#### JACDAC without power delivery

This is sufficient to play multiplayer games.

![JACDAC without power](/static/hardware/nopowerjacdac.png)

### Accelerometer

We currently support the following accelerometers:

* LIS3DH
* MMA8453
* MMA8653

If requested, we can add support for MSA300, which seems to be cheaper.

The accelerometers should have the SDA, SCL and INT1 lines connected
to respective `ACCELEROMETER_*` lines as defined in the bootloader.

## Power management

The board will have auto-power-off feature to improve battery life.

Currently, we plan to shut down display back light, and accelerometer if any,
and put the CPU in sleep mode.

## Pin notes

Buttons can be generally on any pin.
MENU button should be a pin which can wake the MCU up from sleep mode
(usually requires EIC).

## Variant notes

### F401

STM32F4 requires an external crystal for stable USB operation.
The software takes the installed crystal frequency from a specific bootloader location,
but best to stick to 8MHz.

### D51

JACK_TX needs to be on a pin with external IRQ and PAD0 of some SERCOM.

JACK_SND needs to be on PA02 (DAC output).



## Bootloaders

* F401: https://github.com/mmoskal/uf2-stm32f
* D51: https://github.com/Microsoft/uf2-samdx1
* N840: https://github.com/adafruit/Adafruit_nRF52840_Bootloader

The first two bootloaders already implement the CF2 configuration data section.
