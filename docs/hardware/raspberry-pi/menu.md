# Menu Application

This is the game selector program. You can start from this program to customize your arcade game selection experience. Make sure the program is called **.menu**.

```typescript
let menuelts: string[] = [];
let cursor = 0;
let offset = 0;
const logo = img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . 4 . . 4 4 4 . . 4 . . . 4 . . . 4 . 4 4 4 . 4 . 4 . 4 4 4 . 4 4 4 . 4 4 4 . 4 4 . . 4 4 4 .
    . 4 . . . . 4 . . . . 4 . . 4 4 . 4 4 . 4 . 4 . 4 4 . . 4 . . . 4 . . . 4 . 4 . 4 . 4 . 4 . . .
    . 4 . 4 4 4 4 4 4 4 . 4 . . 4 . 4 . 4 . 4 4 4 . 4 . 4 . 4 4 . . 4 . . . 4 . 4 . 4 . 4 . 4 4 . .
    . 4 . 4 4 4 4 4 4 4 . 4 . . 4 . . . 4 . 4 . 4 . 4 . 4 . 4 4 4 . 4 4 4 . 4 4 4 . 4 4 . . 4 4 4 .
    . 4 . 4 4 4 4 4 . 4 . 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    4 . . 4 4 4 4 4 . . . . 4 . . 4 4 4 . . 4 4 4 4 . . . 4 4 4 . . . 4 4 4 . . 4 4 4 . . 4 4 4 4 .
    . 4 . 4 4 4 4 4 . 4 . 4 . . 4 . . . 4 . 4 . . . 4 . 4 . . . 4 . 4 . . . 4 . 4 . . 4 . 4 . . . .
    . 4 . 4 4 4 4 4 4 4 . 4 . . 4 . . . 4 . 4 . . . 4 . 4 . . . . . 4 . . . 4 . 4 . . 4 . 4 . . . .
    . 4 . 4 4 4 4 4 4 4 . 4 . . 4 4 4 4 4 . 4 4 4 4 . . 4 . . . . . 4 4 4 4 4 . 4 . . 4 . 4 4 4 . .
    . 4 . . . . . . . . . 4 . . 4 . . . 4 . 4 . . . 4 . 4 . . . 4 . 4 . . . 4 . 4 . . 4 . 4 . . . .
    . . 4 . . . . . . . 4 . . . 4 . . . 4 . 4 . . . 4 . . 4 4 4 . . 4 . . . 4 . 4 4 4 . . 4 4 4 4 .
`
function showMenu() {
    menuelts = control.programList()
    menuelts = menuelts.filter(s => s && s[0] != ".")

    cursor = 0
    offset = 0

    function move(dx: number) {
        let nc = cursor + dx
        if (nc < 0) nc = 0
        else if (nc >= menuelts.length) nc = menuelts.length - 1
        if (nc - offset < 2) offset = nc - 2
        if (nc - offset > 5) offset = nc - 5
        if (offset < 0) offset = 0
        cursor = nc
    }

    function select() {
        control.runProgram(menuelts[cursor])
    }

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        move(1)
    })
    controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
        move(1)
    })

    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        move(-1)
    })
    controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
        move(-1)
    })

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        select()
    })

    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        select()
    })

    game.onPaint(function () {
        screen.drawImage(logo, (screen.width >> 1) - (logo.width >> 1), 2)
        screen.fillRect(0, 100, 160, 20, 12)
        screen.printCenter("create your game at", 102, 1, image.font5)
        screen.printCenter("arcade.makecode.com", 112, 1, image.font5)
        for (let i = 0; i < 7; ++i) {
            let e = menuelts[i + offset] || ""
            e = e.split('_').join(' ')
            e = e.split('-').join(' ')
            let y = 20 + i * 11
            if (i + offset == cursor) {
                screen.fillRect(0, y - 2, 160, 11, 5)
                screen.print(e, 10, y, 15)
            }
            else
                screen.print(e, 10, y, 1)
        }
    })
}

const menuBootSequence = new storyboard.BootSequence(done => {
    let lg = sprites.create(logo);
    let at = 0;
    let it = 0;

    let startAnimation = function () {
        game.onUpdate(function () {
            if (it++ == 30) {
                lg.vy = -100;
                lg.ay = 100;
            }
            if (lg.top <= 2 && done) {
                lg.vy = -100;
                lg.ay = 100;
                done();
                done = undefined;
            }
        })
    }

    game.onUpdate(function () {
        if (at++ == 120 && startAnimation) {
            startAnimation();
            startAnimation = undefined;
        }
    })
}, 0);

storyboard.microsoftBootSequence.register()
menuBootSequence.register();
storyboard.registerScene("menu", showMenu)
storyboard.start()
```


```packages
storyboard
palette
color
microsoft-boot-sequence=github:microsoft/pxt-microsoft-boot-sequence#v0.0.2
```