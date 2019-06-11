# Wiring

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

### Download the configuration program

Load the program below in the MakeCode Arcade editor and download the .UF2 file onto the
SD card.

You can use this program in your browser or on the Raspberry Pi cabinet to help you with wiring.

```typescript
// update this string with your arcade cfg if needed
const arcadeCfg = `
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
`


const bkg = image.create(160, 120);
bkg.fillRect(0, 10, 160, 60, 7)
scene.setBackgroundImage(bkg)

const pinImg = img`
    b b b b b b b b
    b c c c c c c b
    b c c c c c c b
    b c c c c c c b
    b c c c c c c b
    b c c c c c c b
    b c c c c c c b
    b b b b b b b b
`
const bcmImg = img`
    9 9 9 9 9 9 9 9
    9 c c c c c c 9
    9 c c c c c c 9
    9 c c c c c c 9
    9 c c c c c c 9
    9 c c c c c c 9
    9 c c c c c c 9
    9 9 9 9 9 9 9 9
`
const pinSelectedImg = img`
    1 1 1 1 1 1 1 1
    1 5 5 5 5 5 5 1
    1 5 5 5 5 5 5 1
    1 5 5 5 5 5 5 1
    1 5 5 5 5 5 5 1
    1 5 5 5 5 5 5 1
    1 5 5 5 5 5 5 1
    1 1 1 1 1 1 1 1
`
const gndPinImg = img`
    d d d d d d d d
    d 1 1 f 1 1 1 d
    d f f f f f 1 d
    d 1 1 1 1 1 1 d
    d 1 f f f 1 1 d
    d 1 1 1 1 1 1 d
    d 1 1 f 1 1 1 d
    d d d d d d d d
`

// BCM -> pin index
const bcmToPins: any = {
    2: 3,
    3: 5,
    4: 7,
    17: 11,
    27: 13,
    22: 15,
    10: 19,
    9: 21,
    11: 23,
    0: 27,
    5: 29,
    6: 31,
    13: 33,
    19: 35,
    26: 37,
    14: 8,
    15: 10,
    18: 12,
    23: 16,
    24: 18,
    25: 22,
    8: 24,
    7: 26,
    1: 28,
    12: 32,
    16: 36,
    20: 38,
    21: 40,
}
// ground pin indixes
const gnds = [6, 9, 14, 20, 25, 30, 34, 39]

let pinout: Sprite[] = []
for (let i = 0; i < 40; i++) {
    const pin = sprites.create(pinImg, 0)
    pin.data = {};
    pinout.push(pin)
    pin.left = 160 - ((i >> 1) + 1) * 8
    if (i % 2 == 0) {
        pin.y = 56
    } else {
        pin.y = 64
    }

    if (gnds.indexOf(pinout.length) > -1)
        pin.setImage(gndPinImg);
}

// parse arcade.cfg, store name in sprites
for (let line of arcadeCfg.split('\n')) {
    if (line.indexOf("BTN_") != 0) continue;
    const parts = line.substr(4).split('=');
    const name = parts[0];
    const bcm = parseInt(parts[1]);
    const index = bcmToPins[bcm] as number;
    const sprite = pinout[index - 1];
    sprite.data["name"] = name;
    sprite.setImage(bcmImg);
    if (name == "RESET") {
        bkg.print(`RESET ${index}`, 10, 80, 2)
        sprite.setImage(pinImg)
        sprite.setImage(sprite.image.clone())
        sprite.image.replace(0xc, 2);
    }
    else if (name == "EXIT") {
        bkg.print(`EXIT ${index}`, 10, 90, 3)
        sprite.setImage(pinImg)
        sprite.setImage(sprite.image.clone())
        sprite.image.replace(0xc, 3);
    }
    else if (name == "MENU") {
        bkg.print(`MENU ${index}`, 10, 100, 4)
        sprite.setImage(pinImg)
        sprite.setImage(sprite.image.clone())
        sprite.image.replace(0xc, 4);
    }
}

// setup menu, reset, select

// text sprites
let buttonName = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
buttonName.x = 80
buttonName.y = 36
buttonName.say("Press buttons for pin INDEX")

// wire all events
setup(controller.A, "A");
setup(controller.B, "B");
setup(controller.up, "UP");
setup(controller.down, "DOWN");
setup(controller.left, "LEFT");
setup(controller.right, "RIGHT");
setup(controller.player2.A, "A2");
setup(controller.player2.B, "B2");
setup(controller.player2.up, "UP2");
setup(controller.player2.down, "DOWN2");
setup(controller.player2.left, "LEFT2");
setup(controller.player2.right, "RIGHT2");

function select(name: string) {
    const sprite = pinout.filter(pin => pin.data["name"] == name)[0];
    const index = pinout.indexOf(sprite) + 1;
    sprite.setImage(pinSelectedImg);
    buttonName.say(`${name} ${index}`, 0);
}
function unselect(name: string) {
    const sprite = pinout.filter(pin => pin.data["name"] == name)[0];
    sprite.setImage(bcmImg);
    buttonName.say("", 0);
}
function setup(btn: controller.Button, name: string) {
    btn.onEvent(ControllerButtonEvent.Pressed, function () { select(name) })
    btn.onEvent(ControllerButtonEvent.Released, function () { unselect(name) });
}
```

## Test the firmware

It's time to try out the firmware.

- [ ] Insert the SD card in the Raspberry Pi Zero
- [ ] connect the screen cable
- [ ] connect USB power cable (double check which one!) 
- [ ] connect the USB data cable

You should see the game selection dialog.

## Buttons Wiring

Squeeze the bundle of wires attached to the buttons through the wires hole.

![](/static/hardware/raspberry-pi/cardboard-control-panel/cable-stick.jpg)

### Connect GROUND pin

Use the program above to identity which header is ground on the Raspberry Pi.
Connect the header attached to the bundles of wire to a ground header (header **6** for example).

### Connect EXIT, MENU

Use the program to determine which header those buttons go to.

- [ ] pressing EXIT exits the current game and goes back to the selection screen
- [ ] pressing MENU pops up the in-game menu

### Connect the rest of the buttons

Use the program to determine which header the buttons go to. You can connect them randomly then use the program to reorder them.

## Joystick wiring

For each joystick, squeeze the bundle of cables through the wire hole. 

### Connect GROUND pin

Use the program above to identity which header is ground on the Raspberry Pi.
Connect the header attached to the bundles of wire to a ground header (header **6** for example).

### Connect the rest of the buttons

Use the program to determine which header the buttons go to. You can connect them randomly then use the program to reorder them.
