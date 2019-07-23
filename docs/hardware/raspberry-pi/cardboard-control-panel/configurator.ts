// update this string with your arcade cfg if needed
const arcadeCfg = `
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
`;

const pCols = [13, 3, 7, 9]
const bkg = image.create(160, 120);
bkg.fillRect(0, 10, 160, 66, 7)
for (let i = 0; i < 4; ++i) {
    bkg.print((2 * i + 1).toString(), 154 - 8 * i, 44, 1);
    bkg.print((2 * i + 2).toString(), 154 - 8 * i, 68, 1);
}
for (let i = 0; i < pCols.length; ++i) {
    bkg.print("P" + (i + 1), 80 + i * (image.font8.charWidth * 3), 80, pCols[i]);
}

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
const srcPinImg = img`
    e e e e e e e e
    e 2 2 2 2 2 2 e
    e 2 2 2 f 2 2 e
    e 2 2 2 f 2 2 e
    e 2 f f f f f e
    e 2 2 2 f 2 2 e
    e 2 2 2 f 2 2 e
    e e e e e e e e
`

bkg.drawImage(gndPinImg, 80, 90)
bkg.print("GND", 90, 90)
bkg.drawImage(srcPinImg, 80, 100)
bkg.print("+3.3/5V", 90, 100)

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
const gnds = [6, 9, 14, 20, 25, 30, 34, 39];
const srcs = [1, 17, 2, 4]


let pinout: Sprite[] = []
for (let i = 0; i < 40; i++) {
    const pin = sprites.create(pinImg.clone(), 0)
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
    if (srcs.indexOf(pinout.length) > -1)
        pin.setImage(srcPinImg);
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
    sprite.setImage(bcmImg.clone());
    if (name == "RESET") {
        bkg.print(`RESET ${index}`, 10, 80, 10)
        sprite.setImage(pinImg)
        sprite.setImage(sprite.image.clone())
        sprite.image.replace(0xc, 10);
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
    } else {
        const i = (parseInt(name[name.length - 1]) || 1) - 1;
        sprite.image.print(name[0], 2, 2, pCols[i], image.font5)
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
setup(controller.player3.A, "A3");
setup(controller.player3.B, "B3");
setup(controller.player3.up, "UP3");
setup(controller.player3.down, "DOWN3");
setup(controller.player3.left, "LEFT3");
setup(controller.player3.right, "RIGHT3");
setup(controller.player4.A, "A4");
setup(controller.player4.B, "B4");
setup(controller.player4.up, "UP4");
setup(controller.player4.down, "DOWN4");
setup(controller.player4.left, "LEFT4");
setup(controller.player4.right, "RIGHT4");

function select(name: string) {
    const sprite = pinout.filter(pin => pin.data["name"] == name)[0];
    const index = pinout.indexOf(sprite) + 1;
    sprite.image.replace(0xc, 5)
    buttonName.say(`${name} ${index}`, 0);
}
function unselect(name: string) {
    const sprite = pinout.filter(pin => pin.data["name"] == name)[0];
    sprite.image.replace(5, 0xc)
    buttonName.say("", 0);
}
function setup(btn: controller.Button, name: string) {
    btn.onEvent(ControllerButtonEvent.Pressed, function () { select(name) })
    btn.onEvent(ControllerButtonEvent.Released, function () { unselect(name) });
}