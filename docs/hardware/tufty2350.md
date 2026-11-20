# Tufty 2350

The [Pimoroni Badgeware Tufty 2350](https://shop.pimoroni.com/products/tufty-2350) is a wearable badge based on the Raspberry Pi RP2350.

**Support for this board is in progress and not yet available in the editor.** The board definition lives in `libs/hw---rp2350` and will be enabled once the RP2350 native runtime and compile service are available.

## Specifications

* RP2350 dual-core Arm Cortex-M33 @ 200MHz
* 512kB SRAM, 16MB QSPI XiP flash
* 320x240 full colour IPS display (ST7789, 8-bit parallel bus)
* 2.4GHz WiFi and Bluetooth 5
* 1000mAh rechargeable battery
* Qw/ST and SWD ports
* IR receiver and transmitter
* Five front facing buttons
* Battery voltage monitoring and charge status
* USB-C port for charging and programming
* RESET / BOOTSEL buttons
* 4-zone LED backlight
* Accelerometer
* 8 capacitive touch sensors

## Controls

Arcade games run at 160x120 and are doubled to fill the 320x240 screen. The badge has five front buttons plus a HOME button, which are mapped to Arcade controls as follows:

| Tufty button | Arcade control |
|--------------|----------------|
| A            | Left           |
| C            | Right          |
| UP           | Up             |
| DOWN         | Down           |
| B            | A              |
| HOME         | Menu           |

There is no **B** button on this board.

## Flashing a game

1. Connect the badge to your computer with a USB-C cable.
2. Hold **BOOTSEL** and press **RESET**. A drive named `RP2350` appears.
3. Download your game and copy the `.uf2` file onto the `RP2350` drive.

## Pin mapping

| Function                     | GPIO      |
|------------------------------|-----------|
| Button A / B / C             | 7 / 9 / 10 |
| Button UP / DOWN             | 11 / 6    |
| Button HOME (BOOTSEL)        | 22        |
| LCD CS / RS (DC) / WR / RD   | 27 / 28 / 30 / 31 |
| LCD DB0..DB7                 | 32..39    |
| LCD backlight                | 26        |
| Rear LEDs (4 zones)          | 0, 1, 2, 3 |
| Qw/ST I2C SDA / SCL          | 4 / 5     |
| Internal I2C SDA / SCL       | 18 / 19   |
| Accelerometer interrupt      | 20        |
| Touch controller alert       | 13        |
| IR TX / RX                   | 16 / 17   |
| Peripheral power enable      | 41        |
| VBUS detect                  | 12        |
| Battery sense                | 40        |
| Light sense                  | 43        |

The internal I2C bus hosts an ST LSM6DS-family accelerometer/gyroscope (address `0x6A`) and a Microchip CAP1208 8-channel capacitive touch controller (address `0x28`). The accelerometer is supported by the `accelerometer` extension. There is no speaker, so games run without sound.

Sources: [pimoroni/tufty2350 pins.csv](https://github.com/pimoroni/tufty2350/blob/main/board/pins.csv) and the badge's MicroPython firmware.
