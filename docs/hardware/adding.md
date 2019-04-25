# Creating your own Arcade hardware

## ~ hint

**Warning**: this document is preliminary and changes to it will occur frequently.
It's fine to build prototypes according to the information presented for experimention only,
but do not make production hardware.  **If you want to produce Arcade-compatible
boards other than hobby prototypes, please contact us at arcadehdw@microsoft.com.**

## ~

[Debug connector information](/hardware/dbg)

## Overview #overview

The MakeCode Arcade system is designed to support a variety of physical gaming devices in addition to a more virtual experience on a PC or mobile device. We encourage others to design and build new variants of MakeCode Arcade hardware using the guidelines presented in this document. 

Arcade hardware must meet the following specifications:

* 160x120 pixel screen
* 15 colors plus transparency; user-controllable palette
* 4 directional buttons, 2 action buttons (A and B), 1 utility button (menu/select/pause), 1 reset button
* single channel sound output 
* USB connector for programming and power

In addition we encourage the inclusion of:

* 3.5mm stereo audio connector for multi-player communications
* provision for battery power: a battery connector, a battery holder and/or a LiPo recharging circuit

Other optional elements include:
* an accelerometer
* a vibration motor
* a second 3.5mm stereo audio connector for headphones
* an electrical expansion connector to support the use of plug-in accessories and connection of external circuits

We currently require an ARM Cortex-based MCU with 96kB RAM and 512kB flash. A firmware configuration system allows a lot of flexibility regarding specific component choices and circuit designs to meet the above specification, see [Configuration](#cf2). The rest of this page provides details for each of the main components and describes a reference design we have built.

## Components #components

We have built a minimal reference design for an Arcade board. This contains:

* a compatible MCU (see [MCU](#mcu))
* a 160x128 color TFT screen based on ST7735 or ILI9163C controller chip in SPI version (see [screen](#screen))
  
* 8 buttons for directional pad (`left`, `up`, `right`, `down`), `A`, `B`, `Reset` and `Menu` (see [buttons](#buttons))
* an audio output system (see [audio](#audio))
* micro USB socket for power and UF2 programming
* ESD protection for the micro USB
* a 3.3V regulator (see [power](#power))
* a transistor for power management of the LCD
* a JST connector for battery; this is optional if the battery is integrated

* optional LiPo charging circuit
* optional accelerometer (see [accelerometer](#accelerometer))
* an optional [JACDAC](https://jacdac.org/) connector (see [JACDAC](#jacdac)) and optional status LEDs (see [LEDs](#leds))
* **no** power LED - please skip that one, unless you're also including `PWREN` line, which will shut it down; otherwise auto power-off will be difficult (see [power](#power))

### MCU #mcu

MakeCode Arcade currently only targets ARM Cortex MCUs, and we have only tested Cortex M4F. 
Screen data for resolution and depth at 160x120x4 bits takes a little under 10kB. We need at least two
sets of screen data for double-buffering and the user is very likely to use two or three more for various
sprite operations. This, together with heap fragmentation concerns,
effectively requires the hardware to have **at least 96kB of RAM**. Programs with heavy memory requirements
may only run if there is more than 96kB of RAM.
In addition **512kB of flash** and a processor speed of **64MHz** or more are recommended.

We currently support two hardware variants which match the above criteria:
* **D51** based on Microchip **ATSAMD51G19A** (Cortex M4F, 192kB of RAM, 512kB of flash, 120MHz)
* **F4** (formerly F401) based on one of the ST Micro **STM32F4xx** chips:
  * **STM32F401xE** (Cortex M4F, 96kB of RAM, 512kB of flash, 84MHz)
  * **STM32F411xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  * **STM32F412xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  * **STM32F412xG** (Cortex M4F, 256kB of RAM, 1024kB of flash, 96MHz)

The STM32F41x series is listed to run at 100MHz, but to support USB we need to run them at 96MHz.
We support 48 pin and larger packages. Only STM32F412 in 64 pin and larger packages support a parallel screen interface,
which is required if you want to use an ILI9341 320x240 screen.

Additionally, we're considering adding support for the following in the future:
* **N840** based on Nordic **NRF52840** (Cortex M4F, 256kB of RAM, 1024kB of flash, 64MHz)

Of course, many other choices are possible and we would love to hear your feedback.

### Buttons #buttons

The 4 directional buttons, the A/B buttons, and the MENU button are to be connected
to GND and a respective MCU pin, as in the schematic below.
There is an internal pull-up enabled on the MCU, so thers's no need for external
pull-ups.
The RESET button is to be connected to the MCU hardware RESET line (refer to the MCU
documentation how to exactly connect it and if it needs any additional components).

The schematic also shows the recommended button arrangement - directional buttons
on the left of the screen, while A/B are on the right of the screen.
A is above and to the right of B.

MENU is best placed somewhere below the other buttons, and RESET is best placed next to
the USB connector.

![Button connection](/static/hardware/buttons.png)

### Screen #screen

When using a 160x128 pixel display we do not use the 8 bottom rows of the screen, to make
it easier to upscale to a 320x240 display. The displays we have tested are listed below, but 
if you have good reasons to use a different display please let us know.

#### 160x128 based on ST7735

The screen connection is through the hardware SPI module.

On some screens:
* the RS/DC is called A0
* the DATA is called MOSI or SDA
* the CLOCK is called SCK or SCL
* LEDK is called LED-
* LEDA is called LED+
* RESET is called RST
* most screens don't have MISO line

The purpose of the `DISPLAY_BL` is to dim or shut off the screen.
The schematic shows one way of doing this.
Experiment with the value of `R2` to get optimal brightness.

We have found the following part numbers for screens:

* [MTF0177SN-10](http://www.microtech-lcd.com/tftlcd/TFT-LCD-Module9.html)
* [Z180SN009](https://www.ezsolutionkr.com/tft-lcd-z180sn009-v0-0)

Others, however, are also available - searching for ST7735 or ILI9163 usually yields
the right ones. They cost out at around $2.

![Screen connection](/static/hardware/screen.png)

#### 320x240 based on ILI9134

This requires an 8 bit parallel interface because SPI is not fast enough. Therefore STM32F412RE or better is required. 
This is not implemented yet.

### Audio #audio

Single channel mono audio requires either a DAC or PWM with DMA support. The corresponding audio output from the MCU
should be connected to an amplifier and an on-board sounder or speaker. A headphone jack for sound is optional, but note
that this IS SEPARATE FROM the stereo jack for networking (see [multi-player communications](#jacdac).

### Multi-player communications #jacdac

## ~ hint
**Warning**: Multi-player communications is under development now and it may change.
It's fine build prototypes, but for production hardware please contact us at arcadehdw@microsoft.com.
## ~

Multi-player communications between Arcade devices is based on [JACDAC](https://jacdac.org), a protocol for networking over a single-wire connection. It lets you play multiplayer games by connecting Arcades together with standard stereo audio cables. More than two arcades can be connected using headphone splitters.

Note that JACDAC power delivery is still under development so **you should leave the tip of the jack connector disconnected**.

While the schematics use a 3.5mm jack connector with switches, you can also use
one without switches, as they are not used.

![JACDAC without power](/static/hardware/nopowerjacdac.png)

### Accelerometer #accelerometer

An accelerometer is optional. We currently support the following parts:

* LIS3DH
* MMA8453
* MMA8653

If requested, we can potentially add support for other accelerometers such as MSA300.

The accelerometers should have the SDA, SCL and INT1 lines connected
to each respective `ACCELEROMETER_*` line as defined in the bootloader.
If possible, keep this separate from the `SDA`/`SCL` exposed on the header
to keep the one on the header available as a general digital IO line.

### Vibration motor #vibrationmotor

An optional vibration motor can be connected to `VIBRATION` line.
Software will keep it low during normal operation, and pull it high
to activate the motor.

### Power management #power

Arcade supports 'soft' power control and a hardware power switch is therefore unnecessary. Not
only does this remove cost, the auto-power-off feature improves battery life.
Please do not provide a power LED that cannot be turned off from the MCU.
It's fine for a power LED supply to be controlled by `PWREN`.

Currently, we shut down display back lighting, and the accelerometer if any,
and put the CPU in sleep mode.

There is an optional `PWREN` pin. If defined, the software will pull it high on
boot, and keep it low during sleep.
The idea is for it to control the power supply to the display, accelerometer,
and other on-board components. 

An optional `BATTSENSE` can be connected to a voltage divider and to the battery.
This is not yet supported in software.

### LEDs #leds

Up to 4 LEDs can be defined.
The first two can be also used for JACDAC status.

### Pin header #pins

Following is the recommended pinout of the header.
A header is optional, but at having least holes to add pins later are nice to have.
If there's limited space for header pins, `D10`-`D11` should be dropped
but leave `D8`-`D9` remaining.

The assignment is shown for the 64 pin (or larger) version of F4.
For the 48 pin version, drop `D8`-`D11` and connect the accelerometer `SDA`/`SCL`
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

#### Pin notes

While there is recommended pinout in this document, you can use a different
pinout.
You need to put your pinout in the bootloader and flash the bootloader.
Then, when you get a UF2 file from Arcade website, it will at runtime look for
settings in the bootloader and use the right pins.

There are some restrictions on the pinout:

* the screen needs to be on SPI pins (of course); on F4 use SPI1 as it's faster
* DISPLAY_BL should be on a pin with PWM (so we can dim it)
* MENU button should be a pin which can wake the MCU up from sleep mode (on D51 it requires `EIC`; on F4 it can be any pin)
* other buttons can be on any pin
* the MENU2 button is optional
* `JACK_TX` if present needs to be on `UART_TX` pin on F4, and on PAD0 of a SERCOM with EIC on D51
* `JACK_SND` if present needs to be on TIM1_CH* pin of F4 and DAC0 of D51 (PA02)

Of course, if you're building a guide about how to just connect a screen and buttons to
an existing board, all other components really are optional. 

## Bootloaders #bootloaders

There are 2 different bootloaders to support the hardware variants.
These bootloaders support the [CF2 configuration data section](#cf2).

* F4: https://github.com/mmoskal/uf2-stm32f
* D51: https://github.com/Microsoft/uf2-samdx1

The following bootloaders do **not** support the [CF2 configuration data section](#cf2) yet.

* N840: https://github.com/adafruit/Adafruit_nRF52840_Bootloader

### Compilation

If you're compiling a bootloader on your own, you will need to create a `board.h` file.
Start from an existing, generic arcade board (README in bootloader should have instructions).
Then:

* if you don't have accelerometer, remove all lines with the `ACCELEROMETER` word
* if you don't have vibration motor, remove the line for `PIN_VIBRATION`
* if you are not doing a pin header:
  * maybe you can at least leave holes for people to solder a header in?
  * otherwise, remove all `PIN_Dx`, and `PIN_SDA`, `PIN_SCL`, `PIN_MISO`, `PIN_MOSI`, 
    `PIN_SCK`, `PIN_SERVO_x` entries
* if you have less than 4 LEDs remove `PIN_LEDx`
* if you do not have a way to disable power to external components, remove `PIN_PWREN`
* if you don't have JACDAC, remove `PIN_JACK_*`
* if you don't have JACDAC power, remove `PIN_JACK_PWREN`
* if you don't have second menu button (it's not required), remove `PIN_BTN_MENU2`
* if you don't have voltage divider for measuring battery level (which isn't supported yet anyway),
  remove `PIN_BATTSENSE`

Once you're done with all these changes, drop the `board.h` file onto https://microsoft.github.io/uf2/patcher/.

This should load the config, with stuff removed.
Now you can patch the config with your pin out.
You should at least change `BOOTLOADER_BOARD_ID` to a new random value. 
Don't generate it by banging on the board or using clever hex string, 
just use `printf "0x%04x%04x\n" $RANDOM $RANDOM` to minimize the risk of a conflict

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

It's also possible to patch a binary file of the bootloader with new config using the
same website.

The patching website can also remove config entries, just specify the value as `null`.

### Bootloader protection #protection

End users will typically update the bootloader by copying a special UF2 file, which
has a user-level application that overwrites the bootloader.

To prevent misuse of this feature (eg., one student emailing to a another a malicious UF2 
file which writes a non-functional bootloader), some bootloaders (currently only F4)
implement a protection feature.
When booting, the bootloader will check if it's write-protected (this is done by setting bits
in flash, which only take effect upon reset).
If the write-protection is disabled, presumably during a bootloader update process,
the bootloader will present a screen to the user asking if they really want to update
the bootloader and that doing so could possibly brick the board.
If the users agrees to upgrade, the app is allowed to run (and presumably update the bootloader).
Otherwise, the protection is re-enabled.

The default configuration of the bootloaders have this feature disabled to ease the
development process. To enable it, set `BOOTLOADER_PROTECTION = 1`.

### Variant notes #variants

#### F4 #f4

STM32F4 requires an external crystal for stable USB operation.
The software takes the installed crystal frequency from a specific bootloader location,
but best to stick to 8MHz.

The following is the recommended pinout. The recommended pinout for
header was described above. It's consistent with the config for the generic F4
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

#### D51 #d51

`JACK_TX` needs to be on a pin with external IRQ and `PAD0` of some SERCOM.

`JACK_SND` needs to be on ``PA02`` (DAC output).

## Configuration #cf2

We anticipate the future need of various configurations for screen controllers, as well as different
accelerometers, etc. Thus, we generate the same UF2 file
for all boards of a given variant, and have the runtime look for configuration
values in the bootloader area (called **CF2** configuration).

See https://github.com/Microsoft/uf2/blob/master/cf2.md for more details on the configuration format.
The [bootloaders](#bootloaders) can be binary patched with new configuration data if needed.

The configuration data also includes the assignment of a GPIO pin header.
Generally, the header isn't essential to this board, but it's recommended
to at least leave holes for people to solder it in.

The mapping between MCU GPIOs and the various hardware signals such as the buttons and display interface is specified in the bootloader. They can be changed as described above.


