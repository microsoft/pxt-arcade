# Adding your own hardware to Arcade

## ~ hint
**Warning**: this document is preliminary and is going to change.
It's fine build prototypes according to it and experiment,
but not to go to production.
## ~

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
* **F4** (formely F401) based on one of the ST Micro **STM32F4xx** chips:
  * **STM32F401xE** (Cortex M4F, 96kB of RAM, 512kB of flash, 84MHz)
  * **STM32F411xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  * **STM32F412xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  * **STM32F412xG** (Cortex M4F, 256kB of RAM, 1024kB of flash, 96MHz)

The STM32F41x are listed at 100MHz, but to support USB we need to run them at 96MHz.
We support 48 pin as well as larger packages.
Only STM32F412 in 64 pin and larger packages supports parallel screen interface,
which is required if you want to use ILI9341 320x240 screen.

Additionally, we're considering adding the following in the future:
* **N840** based on Nordic **NRF52840** (Cortex M4F, 256kB of RAM, 1024kB of flash, 64MHz)

Other choices are possible, and we would love to hear your feedback.

Other than the MCU the two variants contain the same components (with optional variations
in the power supply).

* 160x128 color TFT screen based on ST7735 or ILI9163C controller chip in SPI version 
  - we skip using 8 bottom rows of the screen to upscaling to 320x240
* alternatively, 320x240 color TFT screen based on ILI9341 controller chip in 
  8 bit parallel version (not SPI!); this requires STM32F412RE or better and is not
  implemented yet
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
* **no** power LED - please skip that one, unless you're also including PWREN line, which will shut it down; otherwise auto power-off will be difficult

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

#### ST7735 at 160x128

The screen needs to be connected to the hardware SPI module.

On some screens:
* the RS/DC is called A0
* the DATA is called MOSI or SDA
* the CLOCK is called SCK or SCL
* LEDK is called LED-
* LEDA is called LED+
* RESET is called RST
* most screens don't have MISO line

The purpose of the `DISPLAY_BL` is to dim or shut off the screen.
The schematics shows one way of doing this.
Experiment with the value of `R2` to get optimal brightness.

We have found the following part numbers for screens:

* [MTF0177SN-10](http://www.microtech-lcd.com/tftlcd/TFT-LCD-Module9.html)
* [Z180SN009](https://www.ezsolutionkr.com/tft-lcd-z180sn009-v0-0)

However, others are also available - searching for ST7735 or ILI9163 usually yields
the right ones. They are around $2.

![Screen connection](/static/hardware/screen.png)

#### ILI9134 at 320x240

This is not implemented yet.

### Audio

The board should have a buzzer. You need to figure out how to connect it properly
and what kind of amplifier you might need.
Below is a schematic with a simple low-pass filter and a headphone jack for audio.
You only need low-pass filter when there is no DAC on board (you need low-pass
filter for F4, but you don't need it for D51).

The headphone jack is optional.
Also note that this is not for JACDAC networking, for that see below.

![Audio connection](/static/hardware/audio.png)

### JACDAC

## ~ hint
**Warning**: JACDAC is under development now and is going to change.
It's fine build prototypes according to this schematics,
but not to go to production just yet.
## ~


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
If possible, keep this separate from the SDA/SCL exposed on the header,
so the one on the header can be used as a general digital IO.

## Vibration motor

An optional vibration motor can be connected to `VIBRATION` line.
Software will keep it low during normal operation, and pull it high
to activate the motor.

## Power management

The board will have auto-power-off feature to improve battery life.

Currently, we plan to shut down display back light, and accelerometer if any,
and put the CPU in sleep mode.

There is an optional `PWREN` pin. If defined, the software will pull it high on
boot, and keep it low during sleep.
The idea is for it to control power supply to display, accelerometer,
and other on-board components. 

Please do not provide a power LED that cannot be turned off from the MCU.
It's fine for power LED supply to be controlled by PWREN.

An optional `BATTSENSE` can be connected to a voltage divider and to battery.
This is not yet supported in software.

## LEDs

Up to 4 LEDs can be defined.
The first two can be also used for JACDAC status.

## Pin header

Following is the recommended pinout of the header.
Header is optional, but at least holes are nice to have.
If there's limited space for header pins D10-D11 should be dropped,
and then D8-D9.

The assignment is shown for 64 pin (or larger) version of F4.
For the 48 pin version, drop D8-D11 and connect accelerometer SDA/SCL
on the header.

| Pin | Function | F4   | F4-48   |
| --- | -------- | ---- | ------- |
| D1  | TX       | PA02 | PA02    |
| D2  | RX       | PA03 | PA03    |
| D3  | MOSI     | PB15 | PB15    |
| D4  | MISO     | PB14 | PB14    |
| D5  | SCK      | PB13 | PB13    |
| D6  | SCL      | PB08 | PB10    |
| D7  | SDA      | PB07 | PB03    |
| D8  | SERVO1   | PA00 | -       |
| D9  | SERVO2   | PA01 | -       |
| D10 | I/O      | PC05 | -       |
| D11 | I/O      | PC11 | -       |

## Pin notes

While there is recommended pinout in this document, you can use any different
pinout.
You need to put your pinout in the bootloader, and flash the bootloader.
Then, when you get a UF2 file from Arcade website, it will at runtime look for
settings in the bootloader and use the right pins.

There are some restrictions on the pinout:

* screen needs to be on SPI pins (of course); on F4 use SPI1 as it's faster
* DISPLAY_BL should be on a pin with PWM (so we can dim it)
* MENU button should be a pin which can wake the MCU up from sleep mode (on D51 it requires `EIC`; on F4 it can be any pin)
* other buttons can be on any pin
* the MENU2 button is optional
* JACK_TX if present needs to be on UART_TX pin on F4, and on PAD0 of a SERCOM with EIC on D51
* JACK_SND if present needs to be on TIM1_CH* pin of F4 and DAC0 of D51 (PA02)

Of course, if you're building a guide about how to connect screen and buttons to
an existing board, all components are really optional. 

### Generating bootloader

If you're compiling bootloader on your own, you will need to create `board.h` file.
Start from an existing, generic arcade board (README in bootloader should have instructions).
Then:

* if you don't have accelerometer, remove all lines with `ACCELEROMETER` word
* if you don't have vibration motor, remove line for `PIN_VIBRATION`
* if you are not doing a pin header:
  * maybe you can at least leave holes for people to solder a header in?
  * otherwise, remove all `PIN_Dx`, and `PIN_SDA`, `PIN_SCL`, `PIN_MISO`, `PIN_MOSI`, 
    `PIN_SCK`, `PIN_SERVO_x`
* if you have less than 4 LEDs remove `PIN_LEDx`
* if you do not have a way to disable power to external components, remove `PIN_PWREN`
* if you don't have JACDAC, remove `PIN_JACK_*`
* if you don't have JACDAC power, remove `PIN_JACK_PWREN`
* if you don't have second menu button (it's not needed), remove `PIN_BTN_MENU2`
* if you don't have voltage divider for measuring battery level (which isn't supported yet anyway),
  remove `PIN_BATTSENSE`

Once you're done with all these changes, drop the `board.h` file on https://microsoft.github.io/uf2/patcher/

This should load the config, with stuff removed.
Now you can patch the config with your pin out.
You should at least change `BOOTLOADER_BOARD_ID` to a new random value. 
Don't generate it by banging on the board or using clever hex string, 
just use `printf "0x%04x%04x\n" $RANDOM $RANDOM` to minimize the risk of conflict

If you're seeing strange effects on the screen, you can try one of the following
configs:

```
DISPLAY_CFG0 = 0x01000080 
DISPLAY_CFG1 = 0x00000603
# or:
DISPLAY_CFG0 = 0x00000080 
DISPLAY_CFG1 = 0x00000603
# or:
DISPLAY_CFG0 = 0x00000090
DISPLAY_CFG1 = 0x000e14ff
```

For the ST7735 screen:
* the low byte of `CFG0` is the MADCTL register
* the next two bytes of `CFG0` are offset X and Y (if the screen doesn't start at 0, 0)
* the lowest bit of high byte of `CFG0` can be set to enabled XOR of palette
* `CFG1` is FRMCTR1
* the low byte of `CFG2` is the desired SPI frequency in MHz

Once you're done patching, press "Apply my patch", which will download new `board.h`.

Note that you need to use the patching website to put the right header and size
in the configuration data.

It's also possible to patch a binary file of bootloader with new config using the
same website.

The patching website can also remove config entires, just specify the value as `null`.

### Bootloader protection

End users will typically update the bootloader by copying a special UF2 file, which
has a user-level application, which overwrites the bootloader.

To prevent misuse of this feature (eg., one student emailing to a another a malicious UF2 
file which writes a non-functional bootloader), some bootloaders (currently only F4)
implement a protection feature.
When booting, the bootloader will check if it's write-protected (this is done by setting bits
in flash, which only take effect upon reset).
If the write-protection is disabled, presumably during a bootloader update process,
the bootloader will present a screen to the user, asking if they really want to update
the bootloader, and they it may brick the board.
If the users agrees to upgrade, the app is allowed to run (and presumably update the booloader).
Otherwise, the protection is re-enabled.

The default configuration of the bootloaders have this feature disabled to ease the
development process. To enable it, set `BOOTLOADER_PROTECTION = 1`.

## Variant notes

### F4

STM32F4 requires an external crystal for stable USB operation.
The software takes the installed crystal frequency from a specific bootloader location,
but best to stick to 8MHz.

Following is the recommended pinout. The recommended pinout for
header is defined above. It's consistent with the config for the generic F4
in the bootloader repo.

```
# 64 pin package F4

PIN_ACCELEROMETER_INT = PC13
PIN_ACCELEROMETER_SCL = PB10
PIN_ACCELEROMETER_SDA = PB03

PIN_BTN_A = PC00
PIN_BTN_B = PC01
PIN_BTN_DOWN = PB02
PIN_BTN_LEFT = PA04
PIN_BTN_MENU = PC02
PIN_BTN_MENU2 = PC03
PIN_BTN_RIGHT = PC09
PIN_BTN_UP = PB05

PIN_DISPLAY_BL = PB09
PIN_DISPLAY_CS = PB12
PIN_DISPLAY_DC = PB04
PIN_DISPLAY_MISO = PA06
PIN_DISPLAY_MOSI = PA07
PIN_DISPLAY_RST = PC12
PIN_DISPLAY_SCK = PA05

PIN_JACK_PWREN = PC10
PIN_JACK_SND = PA08
PIN_JACK_TX = PB06

PIN_LED1 = PB00
PIN_LED2 = PB01
PIN_LED3 = PC07
PIN_LED4 = PC06

PIN_BATTSENSE = PC04
PIN_PWREN = PA15
PIN_VIBRATION = PC08
```

```
# 48 pin package F4

PIN_ACCELEROMETER_INT = PC13
PIN_ACCELEROMETER_SCL = PB10
PIN_ACCELEROMETER_SDA = PB03

PIN_BTN_A = PB08
PIN_BTN_B = PA15
PIN_BTN_DOWN = PB02
PIN_BTN_LEFT = PA04
PIN_BTN_MENU = PA01
PIN_BTN_MENU2 = null # or PB01
PIN_BTN_RIGHT = PA10
PIN_BTN_UP = PB05

PIN_DISPLAY_BL = PB09
PIN_DISPLAY_CS = PB12
PIN_DISPLAY_DC = PB04
PIN_DISPLAY_MISO = PA06
PIN_DISPLAY_MOSI = PA07
PIN_DISPLAY_RST = PB07
PIN_DISPLAY_SCK = PA05

PIN_JACK_PWREN = PA00
PIN_JACK_SND = PA08
PIN_JACK_TX = PB06

PIN_LED1 = PB00
PIN_LED2 = PB01 # or null
PIN_LED3 = null
PIN_LED4 = null

PIN_BATTSENSE = null
PIN_PWREN = PC15
PIN_VIBRATION = PC14
```

### D51

JACK_TX needs to be on a pin with external IRQ and PAD0 of some SERCOM.

JACK_SND needs to be on PA02 (DAC output).



## Bootloaders

* F4: https://github.com/mmoskal/uf2-stm32f
* D51: https://github.com/Microsoft/uf2-samdx1
* N840: https://github.com/adafruit/Adafruit_nRF52840_Bootloader

The first two bootloaders already implement the CF2 configuration data section.
