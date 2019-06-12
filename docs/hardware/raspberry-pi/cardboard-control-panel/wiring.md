# Raspberry Pi Setup

![An Arcade control panel made of cardboard](/static/hardware/raspberry-pi/cardboard-control-panel/pisetup.jpg)

## Firwmare setup

### Install the firmware

Follow the [Firmware Installation Instructions](https://learn.adafruit.com/makecode-arcade-with-raspberry-pi-zero/firmware#firmware-3-1)
to re-image your Raspberry Pi SD card with the MakeCode Arcade firmware.

### Update ``arcade.cfg``

Make sure the ``arcade.cfg`` file on your Raspberry Pi Zero image contains the following text:

```
BTN_MENU=20
BTN_EXIT=24
BTN_RESET=12
BTN_A=16
BTN_B=23
BTN_LEFT=26
BTN_RIGHT=19
BTN_UP=6
BTN_DOWN=13
BTN_A2=5
BTN_B2=25
BTN_LEFT2=17
BTN_RIGHT2=27
BTN_UP2=22
BTN_DOWN2=18
```

## Test the firmware

It's time to try out the firmware.

- [ ] insert the SD card in the Raspberry Pi Zero.
- [ ] connect the screen cable.
- [ ] connect USB power cable. Double check which one you plug in!
- [ ] connect the USB data cable.

You should see the game selection dialog.

![Screen displaying the game menu dialog](/static/hardware/raspberry-pi/cardboard-control-panel/gamemenu.jpg)

### Download the configuration program

Load the program below in the MakeCode Arcade editor and download the .UF2 file onto the
SD card.

https://makecode.com/_dycMdHUYRFrX

You can use this program in your browser or on the Raspberry Pi cabinet to help you with wiring.

https://youtu.be/wOGvokzL-7c


## Wiring

Squeeze all the female headers from the inside of the box to the hole for wires.

![A bunch of jumper wires sticking out from the center hole on the control panel](/static/hardware/raspberry-pi/cardboard-control-panel/cable-stick.jpg)

### Connect GROUND pins

Use the program above to identity which header is ground on the Raspberry Pi. 
You should have **3 female headers** marked with electrical tape to connect on the **GROUND**
pins.

### Connect the all of the buttons except EXIT, MENU

Use the program to determine which header the buttons go to. You can connect them randomly then use the program to reorder them:

* connect a wire to a valid pin location
* press the buttons until you identity which button this wire connects to
* move the jumper wire to the correct jumper using the pinout map
* press the button again to test the correct mapping

#### ~ hint

This process is **much** easier if you name each jumper wire using clear tape and a sharpie.

#### ~

### Connect EXIT, MENU

Use the program to determine which header those buttons go to.

- [ ] pressing EXIT exits the current game and goes back to the selection screen.
- [ ] pressing MENU will pop up the game menu
