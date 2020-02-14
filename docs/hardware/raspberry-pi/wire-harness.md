
# Wire Harness

This guide describes how to build a wire harness to connect arcade buttons and joysticks to a Raspberry Pi.

![A wire harness](/static/hardware/raspberry-pi/wire-harness/gallery.jpg)

## Materials

* **Arcade button kits** for 2 players, containing buttons and joysticks
* **Male-to-male** jumper cables
* **Male-to-female** jumper wires
* 2 **mini breadboard**
* Electrical insulation tape

## 5-Pin Joystick "Sanwa-style"

Let's start by wiring a "Sanwa-style" joystick with a 5-pin JST connector and two buttons. This is a typical setup for a player in MakeCode Arcade.

The idea of the harness is to use the mini breadboard as a centralized wiring point which can then be used to connect to the Raspberry Pi Zero. The mini breadboard allows to connect ground wires without having to strip and solder cables. Let's get started!

https://youtu.be/nb6OEdccT6w

### Step 1

- [ ] Connect 5 male jumper wires into the 5-pin JST connector of the joystick.
- [ ] Use electrical tape to secure the cables.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/joystick-tape.jpg)

### Step 2

- [ ] Identify the ground wire in the JST connector. Hold the joystick with the bottom facing you and the JST connector on the upper right, the ground wire is the upper wire.

![Finding ground](/static/hardware/raspberry-pi/wire-harness/5pin.jpg)

- [ ] Connect the other 4 jumper wires to the other side of the breadboard. 
Make sure to place them each in their own row.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/joystick-breadboard.jpg)

## A+B buttons

### Step 1

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button. 
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wires to the same row as the ground wire on the mini bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/button-breadboard.jpg)

### Step 2

- [ ] Repeat steps 4 through 6 for the other button.

![A button is connected](/static/hardware/raspberry-pi/wire-harness/buttons-breadboard.jpg)


### Step 3

- [ ] Insert 6 **male-to-female** jumper wires in parallel to the logic wires.
- [ ] Insert 1 **male-to-female** jumper wire on the ground row.
- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini breadboard](/static/hardware/raspberry-pi/wire-harness/breadboard-tape.jpg)

That harness is ready! You can repeat the steps for player 2.

## Menu buttons

There are 3 "system buttons" in arcade: ``RESET``, ``RESTART`` and ``MENU``. You can create a wire harness for those buttons and use the other side of the mini breadboard.

https://youtu.be/uCF_dTbmA0I

### Step 1

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button. 
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wire to the same row as the ground wire on the mini bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

### Step 2

- [ ] Repeat step 1 for the two other buttons

### Step 3

- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini breadboard](/static/hardware/raspberry-pi/wire-harness/breadboard-menu-harness.jpg)


It's ready!

![A wire harness with 5 buttons and a joystick](/static/hardware/raspberry-pi/wire-harness/menu-harness.jpg)
