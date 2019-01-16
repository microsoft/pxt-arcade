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
* optional LIS3DH or MSA300 (cheaper) accelerometer; or other
* a magnetic speaker (transducer) with some sort of amplifier
* a [JACDAC](https://jacdac.org/) connector

If you have good reasons to use a different screen or accelerometer, let us know.

We have found the following part numbers for screens:

* [MTF0177SN-10](http://www.microtech-lcd.com/tftlcd/TFT-LCD-Module9.html)
* [Z180SN009](https://www.ezsolutionkr.com/tft-lcd-z180sn009-v0-0)

However, others are also available - searching for ST7735 or ILI9163 usually yields
the right ones. They are around $2.

## Configuration

We are aware of various configuration needs for screen controllers, as well as different
accelerometers etc. coming in future. We generate the same UF2 file
for all boards of a given variant, and have the runtime look for configuration
values in the bootloader area.

See https://github.com/Microsoft/uf2/blob/master/cf2.md for more details on the format.
The bootloaders can be even binary patched with new configuration data if needed.

The configuration data also includes assignment of a GPIO pin header.
Generally, the header isn't essential to this board, but it's recommended
to at least leave holes for people to solder it in.

## Power management

The board will have auto-power-off feature to improve battery life.

Currently, we plan to shut down display back light, and accelerometer if any,
and put the CPU in sleep mode.

## Bootloaders

* F401: https://github.com/mmoskal/uf2-stm32f
* D51: https://github.com/Microsoft/uf2-samdx1 use `arcade` branch for now
* N840: https://github.com/adafruit/Adafruit_nRF52840_Bootloader

The first two bootloaders already implement the CF2 configuration data section.
