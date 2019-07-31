# Raspberry Pi Zero Setup

![An Arcade control panel made of cardboard](/static/hardware/raspberry-pi/cardboard-control-panel/pisetup.jpg)

## Firwmare setup

### Install the firmware

Follow the [Firmware Installation Instructions](https://learn.adafruit.com/makecode-arcade-with-raspberry-pi-zero/firmware#firmware-3-1)
to re-image your Raspberry Pi SD card with the MakeCode Arcade firmware.

### Update ``arcade.cfg``

Make sure the ``arcade.cfg`` file on your Raspberry Pi Zero image contains the following text:

```
BTN_RESET=4
BTN_EXIT=3
BTN_MENU=2
BTN_A=26
BTN_B=19
BTN_LEFT=13
BTN_UP=6
BTN_RIGHT=5
BTN_DOWN=0
BTN_A2=11
BTN_B2=9
BTN_LEFT2=10
BTN_UP2=22
BTN_RIGHT2=27
BTN_DOWN2=17
BTN_A3=21
BTN_B3=20
BTN_LEFT3=16
BTN_UP3=12
BTN_RIGHT3=1
BTN_DOWN3=7
BTN_A4=8
BTN_B4=25
BTN_LEFT4=24
BTN_UP4=23
BTN_RIGHT4=18
BTN_DOWN4=15
```

## Test the firmware

Now, let's try out the firmware.

- [ ] insert the SD card in the Raspberry Pi Zero.
- [ ] connect the screen cable.
- [ ] connect USB power cable. Double check which one you plug in!
- [ ] connect the USB data cable.

You should see the game selection dialog on the screen.

![Screen displaying the game menu dialog](/static/hardware/raspberry-pi/cardboard-control-panel/gamemenu.jpg)

### Download the configuration program

Download or copy the **[Configuration Program](https://makecode.com/_gCyify35UE4K)** into the [MakeCode Arcade](@homeurl@) editor and then download the .UF2 file onto the
SD card.

![A screenshot of the configuration game](/static/hardware/raspberry-pi/cardboard-control-panel/configurator.png)

You can use this program in your browser, or on the Raspberry Pi panel to help make sure your wiring is correct.

https://youtu.be/wOGvokzL-7c

## Wiring

Route all of the female header connecters on the jumper wires from the inside of the box through the hole for the wires.

![A bunch of jumper wires sticking out from the center hole on the control panel](/static/hardware/raspberry-pi/cardboard-control-panel/cable-stick.jpg)

### Connect GROUND pins

Use the Test Program to identity which header is Ground on the Raspberry Pi Zero. 
You should have **3 jumper wires** with **female header** connectors wrapped with electrical tape. These connect to the **GROUND**
pins.

### Connect the all of the buttons except EXIT, MENU

Use the Test Program to determine which header the buttons will go to. You can connect them randomly then use the program to reorder them:

- [ ] connect a wire to a valid pin location
- [ ] press the buttons until you identity which button this wire connects to
- [ ] move the jumper wire to the correct jumper using the pinout map
- [ ] press the button again to test the correct mapping

<br/>
https://youtu.be/-P5I_BzoYdg

#### ~ hint

This process is **much** easier if you name each jumper wire with a label using clear tape and a marker.

#### ~

### Connect EXIT, MENU

Use the program to determine which header those buttons will go to.

- [ ] pressing EXIT exits the current game and goes back to the selection screen.
- [ ] pressing MENU will pop up the game menu

### Update or customize the menu

If you want to customize the menu displayed on the Pi, 

* open the program https://makecode.com/_CMgeUJ0Jp0KY
* click ``|Download|`` and select the **Pi 0** hardware profile
* test your menu changes in the simulator
* make sure that your project is named **.menu**
* **Compile** and drop the menu into your ARCADE drive after connecting your Pi to the computer. 
