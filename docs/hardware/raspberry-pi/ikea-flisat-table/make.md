# Make

![A table with buttons](/static/hardware/raspberry-pi/ikea-flisat-table/buttons-installed.jpg)

## Preparing the boxes

### Step 1

- [ ] Remove the TROFAST boxes from the table

### Step 2

- [ ] Using the 1 1/8" bit, drill in the middle of the long side so that you can route the wires
to the Raspberry-Pi

### Step 3

- [ ] Drill another hole at the back to snake the power supply cable

## Drilling the table holes

### Step 1

- [ ] (Optional) Apply a layer of masking tape on the board to avoid scratches
- [ ] Using a ruler and a pencil, mark the center of joystick, A and B buttons.
Make sure to be at least 4" from the border to avoid touching the boxes. Keep at least 2" between buttons.

![A table with masking tape and drill points](/static/hardware/raspberry-pi/ikea-flisat-table/marked.jpg)

### Step 3

- [ ] Using a 1 1/8" bit, drill the 3 holes as marked

![A table with 3 holes](/static/hardware/raspberry-pi/ikea-flisat-table/drilled.jpg)

### Step 4

- [ ] Position the joystick upside down and center the stick with the hole
- [ ] Mark the corner holes of the joystick with your pencil

![A table with 3 holes](/static/hardware/raspberry-pi/ikea-flisat-table/mask-joystick.jpg)

### Step 5

- [ ] Using a 5/16" bit, drill through each hole of the joystick

![A table with 3 holes](/static/hardware/raspberry-pi/ikea-flisat-table/holes.jpg)

#### ~ hint

Use a **countersink bit** to pre-drill the holes and dig a spot for the screw head.
It will make your work look much more pro!

![A countersink bit](/static/hardware/raspberry-pi/ikea-flisat-table/countersink-bit.jpg)

#### ~

### Step 2

### Step 6

- [ ] Repeat step 1 through 6 for the second player controls

### Step 7

- [ ] Apply masking tape and trace 3 additional holes for RESET, RESTART, MENU buttons
- [ ] Drill the 3 holes

## Installing the wire harnesses

### Step 1

- [ ] Grab a player wire harness that you have previously [prepared](/hardware/raspberry-pi/wire-harness)
- [ ] Stick the mini-breadboard to the center of the board on the back side (hidden side). The 
minibreadboard has a sticky back.
- [ ] Mount both buttons on the board. The clicker can be removed in order to sleeve the button through the hole.
- [ ] Use 4 screws and bolts to secure the joystick to the table.
- [ ] Mount the system menu buttons if this harness has some

### Step 2

- [ ] Repeat step 1 for the player 2 wire harness

## Connecting to the Pi

### Step 1

- [ ] [Setup the Raspberry Pi](/hardware/raspberry-pi/setup) and connect it to a screen. It will indicate to you where the pins should go.

### Step 2

- [ ] Connect a **male-to-female** jumper wire from the **ground** row to the first ground pin on the Pi. If the wire is too short, connect another **male-to-female** wire to double the length.

### Step 3

- [ ] Connecta **male-to-female** jumper wire from the first logic row to the first pin location for player 1
- [ ] Try pressing the A/B buttons or moving the joystick until the configuration screen tells you which key is pressed. This allow you to identify which button the wire is connected to.
- [ ] Move the wire to the correct header on the raspberry Pi, following the instructions of the configuration game.

### Step 4

- [ ] Repeat step 3 for all other wires on the breadboard.

### Step 5

- [ ] Use electrical tape to secure all the headers added to the breadboard.

## Closing the table

- [ ] Once all the buttons are connected and tested,
- [ ] Pre-drill a hole on each corner of the plates
- [ ] Screw each corner in the drilled holes