# Creating your own Arcade hardware

### ~ alert

#### Contact the MakeCode Team

**If you want to produce an Arcade compatible product please let us know at arcadehdw@microsoft.com.**

### ~

## Overview #overview

The MakeCode Arcade system is designed to support a variety of physical gaming devices in addition to a more virtual experience on a PC or mobile device. We encourage others to design and build new variants of MakeCode Arcade hardware using the guidelines presented in this document. 

### ~ tip

#### Minimal Open Source Reference Design

![Schematics screenshot](/static/hardware/minipcb.png)

We have built a minimal open source hardware reference design for an Arcade board. This consists of a schematic (available as PDF and as Altium .SchDoc), a layout (available as Gerbers and related CAM files plus an Altium .PcbDoc), and a BoM (available as a Microsoft Excel file). 
* **Download Reference Design at [https://github.com/microsoft/pxt-arcade-hardware-designs](https://github.com/microsoft/pxt-arcade-hardware-designs)**

### ~


Arcade hardware must meet the following specifications:

* An ARM Cortex M microcontroller (see [MCU](#mcu))
* 160x120 pixel display (see [display](#screen))
* 4 directional buttons, 2 action buttons (A and B), 1 utility button (menu/select/pause), 1 reset button (see [buttons](#buttons))
* single channel sound output (see [audio](#audio))
* USB connector for programming and power (see [USB connector](#usb))
* Some way to commission and possibly debug the board (see [commissioning and debugging](#debug))

In addition we encourage:

* a connector for multi-player communications (see [Jacdac](#jacdac))
* provision for battery power: a battery connector, a battery holder and/or a LiPo recharging circuit (see [battery](#battery))
* **exclusion** of a power LED which would draw unnecessary current (see [power](#power))

Other optional elements include:
* an accelerometer or other motion sensor (see [accelerometer](#accelerometer))
* a vibration motor (see [vibration motor](#vibrationmotor))
* a 3.5mm stereo audio connector for headphones (see [audio](#audio))
* additional flash memory
* status LEDs (see [LEDs](#leds))
* an electrical expansion connector to support the use of plug-in accessories and connection of external 
circuits (see [expansion coonnector](#pins))

A firmware configuration system allows a lot of flexibility regarding specific component choices and circuit designs to meet the above specification, see [Configuration](#cf2). 

The rest of this page is split into three main sections, each of which refers to our reference design:
* [Components](#components) describes each of the required and optional components and features in more detail
* [Hardware design notes](#hardwaredev) provides additional hardware circuit design considerations
* [Firmware development notes](#firmwaredev) describes aspects of firmware development and configuration

## Components #components

### MCU #mcu

MakeCode Arcade currently only targets ARM Cortex-based MCUs; we have tested Cortex M4F and M0+.

The Arcade display resolution and colour depth requires 160x120x4 bits for a display buffer, taking a little under 10kB.
We need at least two sets of display data for double-buffering and the user is very likely to use two or three more for various
sprite operations. This, together with heap fragmentation concerns,  requires the hardware to have **at least 96kB of RAM**. Programs with heavy memory requirements may only run if there is more than 96kB of RAM.
In addition **512kB of flash** and a processor speed of at least **64MHz** or more are recommended.

We currently support the following hardware variants which match the above criteria:
* **D5** based on Microchip **ATSAMD51G19A** (Cortex M4F, 192kB of RAM, 512kB of flash, 120MHz)
* **F4** (formerly F401) based on one of the ST Micro **STM32F4xx** chips:
  - **STM32F401xE** (Cortex M4F, 96kB of RAM, 512kB of flash, 84MHz)
  - **STM32F411xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  - **STM32F412xE** (Cortex M4F, 128kB of RAM, 512kB of flash, 96MHz)
  - **STM32F412xG** (Cortex M4F, 256kB of RAM, 1024kB of flash, 96MHz)
* **R2** based on **RP2040** (Cortex-M0+, 264kB of RAM, typically 2048kB+ of flash, 125MHz)

The STM32F41x series is listed to run at 100MHz, but to support USB we need to run them at 96MHz.
We support 48 pin and larger packages. Only STM32F412 in 64 pin and larger packages support a parallel display interface,
which is required if you want to use an ILI9341 320x240 display (see [display](#screen)).

Additionally, we have experimental support for the following:
* **N4** based on Nordic **NRF52840** (Cortex M4F, 256kB of RAM, 1024kB of flash, 64MHz)
* **N3** based on Nordic **NRF52833** (Cortex M4F, 128kB of RAM, 512kB of flash, 64MHz)

Of course, many other choices are possible and we would love to hear your feedback.

### Display #screen

When using a 160x128 pixel display we do not use the 8 bottom rows of the display, to make
it easier to upscale to a 320x240 display. We use 15 colors plus transparency along with
a user-controllable palette. Some of the displays we have tested are listed below, but 
if you have good reasons to use a different display please let us know.

#### 160x128 based on ST7735 or ILI9163C controller chip

In this case the display is connected to the MCU using SPI. The chosen display must therefore expose the ST7735 or 
ILI9163C SPI interface. Different displays use different names for the same pins. The following are all equivalent:
* RS, DC and A0
* MOSI, SDA and DATA
* SCK, SCLK, SCL and CLOCK
* LEDK and LED-
* LEDA and LED+
* RESET and RST

Most displays don't have a MISO line and in any case this does not need to be connected.

The purpose of the `LCD_BL` signal is to modulate power to the LCD backlight in order to dim or shut off the display.
The reference design shows one way of doing this. 

We have found the following part numbers for ST7735 and ILI9163C displays:

* [MTF0177SN-10](http://www.microtech-lcd.com/tftlcd/177-14-pin128160-custom-lcd-di.html)
* [Z180SN009](https://www.ezsolutionkr.com/tft-lcd-z180sn009-v0-0)
* [JD-T18003-T01](https://cdn-shop.adafruit.com/datasheets/JD-T1800.pdf)

#### 320x240 based on ILI9341 via SPI

On D5, the SPI can run up to 50MHz and most displays seem to be able to handle that,
which results in about 36fps.

Also, use the following display configuration to begin with:

```
DISPLAY_TYPE = 9341
DISPLAY_WIDTH = 320
DISPLAY_HEIGHT = 240
DISPLAY_CFG0 = 0x08
DISPLAY_CFG1 = 0x0010ff
DISPLAY_CFG2 = 50
```

#### 320x240 based on ILI9341 via 8-bit parallel

On F4, this requires an 8 bit parallel interface because SPI at 42MHz is unstable;
in this case STM32F412RE or better is required.

The FSMC controller on STM32F412 in 64 pin version enforces
the following pin connections:

| Screen   | Function | STM32F412RE |
| -------- | -------- | ------- |
| RD       | NOE      | PC5     |
| WR       | NWE      | PC2/PD2 | 
| RS (D/C) | A0       | PC3     |
| D0       | D0       | PB14    |
| D1       | D1       | PC6     |
| D2       | D2       | PC11    |
| D3       | D3       | PC12    |
| D4       | D4       | PA2     |
| D5       | D5       | PA3     |
| D6       | D6       | PA4     |
| D7       | D7       | PA5     |
<br/>

The CS pin of the screen can be connected anywhere (defined in bootloader as `DISPLAY_CS`).
The RS pin is also currently handled in software, so could be anywhere, 
but it's recommended to connect it to A0 (defined in bootloader as `DISPLAY_DC`).

The choice of the WR pin should be in `DISPLAY_MOSI` bootloader config,
and `DISPLAY_MISO` should contain `PC5` if the display read line is connected.
Otherwise `DISPLAY_MISO` should be undefined.
`DISPLAY_SCK` should always be undefined.

Also, use the following display configuration to begin with:

```
DISPLAY_TYPE = 9341
DISPLAY_WIDTH = 320
DISPLAY_HEIGHT = 240
DISPLAY_CFG0 = 0x08
DISPLAY_CFG1 = 0x0010ff
DISPLAY_CFG2 = 0x1000004
```

Note that the ILI9341 has 4 configuration pins IM3, IM2, IM1, IM0.
The following configurations are supported:

| IM3 | IM2 | IM1 | IM0 | Connection       |
| --- | --- | --- | --- | ---------------- |
|  0  |  0  |  0  |  0  | D[7:0]   - D7:D0 |
|  1  |  0  |  0  |  1  | D[17:10] - D7:D0 |

That is, in the first config connect pin D[7] to PA5, D[6] to PA4, etc.
In the second config, connect D[17] to PA5, D[16] to PA4, etc.

### Buttons #buttons

We require a total of 8 buttons: `left`, `up`, `right`, `down` (in a directional pad or d-pad layout), `A`, `B`, `Menu` and `Reset`.
The 4 directional buttons, the A/B buttons, and the MENU button are to be connected
to an MCU GPIO pin to provide digital inputs. Our configuration system (see [Configuration](#cf2)) allows for
active high or active low button inputs. If the MCU has internal pull-ups or pull-downs, there is no need for external pull-ups.

The recommended button arrangement is to have the directional buttons in a 'd-pad' layout on the left of the board, while the `A` and `B` buttons are to the right. `A` is above and to the right of `B`. `Menu` is best placed somewhere near the other buttons, and `Reset` is best placed next to the USB connector.

One function of the `Menu` button is to exit low-power sleep mode. For an MCU with a 'wakeup' input pin that takes the MCU out of a deep sleep low power mode, `Menu` should be wired to that pin. The `Reset` button should be wired to the MCU reset pin.

Arcade boards should have 'soft power off' rather than a physical on-off switch, see [power management](#power).

### Audio #audio

Single channel mono audio output requires either a DAC or PWM with DMA support. The corresponding audio output from the MCU
should be connected to an amplifier and an on-board sounder or speaker. A headphone jack for sound is optional.
Note that we no longer use a stereo jack for networking, instead we use the purpose-built [Jacdac protocol](#jacdac) with its own connector. If there is an audio
headphone jack it must be clearly labelled with a 'headphone' symbol.

### USB connector #usb

Arcade must have a micro USB socket for power and UF2 programming. We recommend a part with through-hole 
mechanical solder-down tabs to provide more strength, especially for 'bare boards' whcih have no physical enclosure to
add mechanical strength. We recommend adding ESD protection for the USB data lines and a zener diode
to clamp the Vbus power line and thereby limit over-voltage transients during USB connection. 

### Multi-player communications with Jacdac #jacdac

### ~ alert

#### Warning

**Multi-player communication is under development.
It's fine to build prototypes, but before designing any production hardware please contact us at arcadehdw@microsoft.com.**

### ~

Multi-player communications between Arcade devices is based on [Jacdac](https://aka.ms/jacdac), a protocol for networking over a single-wire connection.

### Battery power #battery

Arcade boards should ideally have provision for battery power: a battery connector, 
a battery holder and/or a LiPo recharging circuit. For regular batteries we suggest using a JST connector
of the same style and polarity as that used on the Adafruit Circuit Playground Express.  

### Accelerometer #accelerometer

An accelerometer is optional. We currently support the following parts:

* LIS3DH
* MMA8453
* MPU6050

If requested, we can potentially add support for other accelerometers such as MSA300.

The accelerometers should have the SDA, SCL and INT1 lines connected
to each respective `ACCELEROMETER_*` line as defined in the bootloader.

### Vibration motor #vibrationmotor

An optional vibration motor can be connected. It should be driven by the `VIBRATION` line as defined in the bootloader. Software will keep this pin low during normal operation, and drive it high to activate the motor. 

### LEDs #leds

Up to 4 LEDs can be defined. The first can be used for Jacdac status.

### Expansion connector #pins

You may wish to include some kind of expansion connector that allows users to connect their own circuitry to your Arcade board. This could be a pin header that's either fitted during production or left unpopulated for users to fit or solder to if desired. Alternatively, if a number of pins are to be exposed in an 'edge connector' style, one option is a micro:bit compatible edge-connector. Another approach is to use [Jacdac](https://aka.ms/jacdac) so that it's really easy for users to add or remove additional hardware functionality. 

## Hardware design notes #hardwaredev

### Power management #power

The Arcade firmware automatically switches the device off if it is not in use, unless the user has disabled this feature. 
A hardware power switch is therefore unnecessary. Not
only does this reduce cost, the auto-power-off feature improves battery life.

In order to ensure very low quiescent consumption following auto-power-off, all peripherals to the MCU must 
enter a low power mode. We also put the CPU into deep sleep. The LCD backlight and audio amplifier will 
be switched off. Ensure that there is no power LED
that cannot be turned off from the MCU. If you require an MCU output to signal shutdown there is an 
optional `PWREN` signal - if defined, the software will pull it high on boot, and keep it low during sleep. 
If you want to include a power LED, control it via the `PWREN` signal.

A 3.3V regulator is likely to be needed. It should be robust to any unfiltered transients on the USB power line
and to downstream short-circuits which may occur if the Arcade board has no enclosure. If it is possible to
touch the regulator, it must not get too hot to touch under any circumstances.

An optional `BATTSENSE` can be connected to a voltage divider and to the battery.
This is not yet supported in software.

### Comissioning and debugging #debug

Provision must be made for commissioning boards following manufacture. Depending on the MCU it may
be possible to flash and test the board over USB. However, to-date we have used a debug connector
which exposes SWD and other signals, as shown in the reference design. We use a standard 0.1" pitch
single row header footprint for this, but we do not fit a connector to the PCB. Instead we use the technique
described here: [debug connector information](/hardware/dbg).

### Pin mapping

The reference design provides a particular pinout (or pin mapping), but it is possible to use a different pinout.
You need to put your pinout in the bootloader and flash the bootloader.
Then, when you get a UF2 file from the Arcade website, it will at runtime look for
settings such as the pinout in the bootloader and use the right pins.

There are some restrictions on the pinout:

* if using SPI screen, if needs to be on SPI pins; on F4 best use SPI1 as it may allow for faster refresh in the future
* DISPLAY_BL should be on a pin with PWM (so we can dim it)
* MENU button should be a pin which can wake the MCU up from sleep mode (on D5 it requires `EIC`; on F4 it can be any pin)
* other buttons can be on any pin
* `JACK_TX` if present needs to be on `UART_TX` pin on F4, and on PAD0 of a SERCOM with EIC on D5
* `JACK_SND` if present needs to be on TIM1_CH* pin of F4 and DAC0 of D5 (PA02)

## Firmware development notes #firmwaredev

### Bootloaders #bootloaders

There are different bootloaders to support the hardware variants.
These bootloaders support the [CF2 configuration data section](#cf2).

* F4: https://github.com/mmoskal/uf2-stm32f
* D5: https://github.com/microsoft/uf2-samdx1
* R2 (UF2 bootloader always in ROM)

The following bootloaders do **not** support the [CF2 configuration data section](#cf2) yet.

* N4: https://github.com/adafruit/Adafruit_nRF52840_Bootloader

### Compilation

If you're compiling a bootloader on your own, you will need to create a `board.h` file.
Start from an existing, generic arcade board (README in bootloader should have instructions).
Then:

* if you don't have accelerometer, remove all lines with the `ACCELEROMETER` word
* if you don't have vibration motor, remove the line for `PIN_VIBRATION`
* if you are not doing a pin header:
  - maybe you want to leave holes for people to solder a header in?
  - otherwise, remove all `PIN_Dx`, and `PIN_SDA`, `PIN_SCL`, `PIN_MISO`, `PIN_MOSI`, 
    `PIN_SCK`, `PIN_SERVO_x` entries
* if you have fewer than 4 LEDs remove `PIN_LEDx`
* if you do not have a way to disable power to external components, remove `PIN_PWREN`
* if you don't have Jacdac, remove `PIN_JACK_*`
* if you don't have Jacdac power, remove `PIN_JACK_PWREN`
* if you don't have second menu button (it's not required), remove `PIN_BTN_MENU2`
* if you don't have a voltage divider for measuring battery level (which isn't supported yet anyway),
  remove `PIN_BATTSENSE`

Once you're done with all these changes, drop the `board.h` file onto https://microsoft.github.io/uf2/patcher/.

This should load the config, with stuff removed.
Now you can patch the config with your pinout.
You should at least change `BOOTLOADER_BOARD_ID` to a new random value. 
DO NOT generate it by banging on the board or using a clever hex string, 
use `printf "0x%04x%04x\n" $RANDOM $RANDOM` to minimize the risk of a conflict

If you're seeing strange effects on the display, you can try one of the following
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

For the ST7735 and ILI9341 screens:
* the low byte of `CFG0` is the MADCTL register
* the next two bytes of `CFG0` are offset X and Y (if the display doesn't start at 0, 0)
* the lowest bit of high byte of `CFG0` can be set to enabled XOR of palette
* `CFG1` is FRMCTR1
* the low byte of `CFG2` is the desired SPI frequency in MHz (ignored for ILI9341)

The patching website can also remove config entries, just specify the value as `null`.

Once you're done patching, select "Apply my patch", which will download new `board.h`.

Note that you need to use the patching website to put the right header and size
in the configuration data. It's also possible to patch a binary file of the bootloader with new config using the
same website.

### Bootloader protection #protection

End users will typically update the bootloader by copying a special UF2 file, which
has a user-level application that overwrites the bootloader.

To prevent misuse of this feature (eg one student emailing to a another a malicious UF2 
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

#### D5 #d5

`JACK_TX` needs to be on a pin with external IRQ and `PAD0` of some SERCOM.

`JACK_SND` needs to be on ``PA02`` (DAC output).

#### R2 #r2

For RP2040, the application looks for CF2 section (see below) at 4kB before the end of 1MB, 2MB, 4MB, 8MB, 16MB, 32MB (that's megabytes) in the flash. It's recommended to place it at all these addresses (size of flash permitting). 
See [sample config UF2](https://github.com/microsoft/pxt-arcade/blob/master/libs/hw---rp2040/sample-config.uf2).
Manufacturers should provide a "factory reset" UF2 which contains all these config sections, and possibly a test game.
This file can be used to recover after the flash has been overwritten (eg by large files in the Micropython filesystem).

### Configuration #cf2

We anticipate the future need of various configurations for display controllers, as well as different
accelerometers, etc. Thus, we generate the same UF2 file
for all boards of a given variant, and have the runtime look for configuration
values in the bootloader area (called **CF2** configuration).

See https://github.com/microsoft/uf2/blob/master/cf2.md for more details on the configuration format.
The [bootloaders](#bootloaders) can be binary patched with new configuration data if needed.

The configuration data also includes the assignment of a GPIO pin header.
Generally, the header isn't essential to this board, but it's recommended
to at least leave holes for people to solder it in.

The mapping between MCU GPIOs and the various hardware signals such as the buttons and display interface is specified in the bootloader. They can be changed as described above.

