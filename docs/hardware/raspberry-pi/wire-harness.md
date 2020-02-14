
# Wire Harness

This guide describes how to build a wire harness to connect arcade buttons and joysticks to a Raspberry Pi.

![A wire harness](/static/hardware/raspberry-pi/wire-harness/gallery.jpg)

## Materials

* An **Arcade button kits** for 2 players, containing buttons and joysticks.
* **Male-to-Male jumper cables**
* 2 **mini breadboard**
* Electrical insulation tape

![Materials for the wire harness](/static/hardware/raspberry-pi/wire-harness/materials.jpg)

## 5-Pin Joystick

Let's start by wiring a "Sanwa-style" joystick with a 5-pin JST connector and two buttons. This is a typical setup for a player in MakeCode Arcade.

The idea of the harness is to use the mini-breadboard as a centralized wiring point which can then be used to connect to the Raspberry Pi Zero. The mini breadboard allows to connect ground wires without having to strip and solder cables. Let's get started!

### Step 1

- [ ] Connect 5 male jumper wires into the 5-pin JST connector of the joystick.
- [ ] Use electrical tape to secure the cables.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/joystick-tape.jpg)

### Step 2

- [ ] Identify the ground wire in the JST connect. Hold the joystick with the bottom facing you and the JST connector on the upper right, the ground wire is the upper wire.
- [ ] Connect the other 4 jumper wires to the other side of the breadboard. 
Make sure to place them each in their own row.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/joystick-breadboard.jpg)

## A+B buttons

### Step 3

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button. 
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wire to the same row as the ground wire on the mini-bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/button-breadboard.jpg)

### Step 4

- [ ] Repeat step 4 through 6 for the other button.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/buttons-breadboard.jpg)

### Step 5

- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini-breadboard](/static/hardware/raspberry-pi/wire-harness/breadboard-tape.jpg)

This harness is ready! You can repeat the steps for player 2.

## Menu buttons

There are 3 "system buttons" in arcade: ``RESET``, ``RESTART`` and ``MENU``. You can create a wire harness for those buttons and use the other side of the mini breadboard.

### Step 1

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button. 
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wire to the same row as the ground wire on the mini-bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

## Step 2

- [ ] Repeat step 1 for the two other buttons

## Step 3

- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini-breadboard](/static/hardware/raspberry-pi/wire-harness/breadboard-menu-harness.jpg)

## Ready for installation!

![A wire harness](/static/hardware/raspberry-pi/wire-harness/gallery.jpg)

