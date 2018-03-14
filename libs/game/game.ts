/**
 * Game transitions and dialog
 **/
//% color=#008272 weight=99 icon="\uf1d8"
namespace game {
    export enum Flag {
        NeedsSorting = 1 << 1,
    }

    /**
     * Determins if diagnostics are shown
     */
    export let debug = false;
    export let flags: number = 0;

    let isOver = false
    let _waitAnyKey: () => void
    let bgFunction = () => { }

    export function setWaitAnyKey(f: () => void) {
        _waitAnyKey = f
    }

    export function waitAnyKey() {
        if (_waitAnyKey) _waitAnyKey()
        else pause(2000)
    }

    function freeze() {
        setBackgroundCallback(() => { })
        game.frame(() => { })
        sprites.allSprites = [];
    }

    export function init() {
        if (!sprites.allSprites) {
            sprites.allSprites = []
            game.setBackground(0)
            control.addFrameHandler(10, () => {
                const dt = control.deltaTime;
                physics.engine.update(dt);
                for (let s of sprites.allSprites)
                    s.__update(dt);
            })
            control.addFrameHandler(60, () => { bgFunction() })
            control.addFrameHandler(90, () => {
                if (flags & Flag.NeedsSorting)
                    sprites.allSprites.sort(function (a, b) { return a.z - b.z || a.id - b.id; })
                for (let s of sprites.allSprites)
                    s.__draw()
                if (game.debug)
                    physics.engine.draw();
            
                flags = 0;
            })
        }
    }    

    export function setBackgroundCallback(f: () => void) {
        init();
        bgFunction = f
    }

    /**
     * Sets the game background color
     * @param color 
     */
    //% blockId=gamesetbackgroundcolor block="set background to %color"
    export function setBackground(color: number) {
        init();
        bgFunction = () => {
            screen.fill(color)
        }
    }

    function showBackground(h: number, c: number) {
        let top = (screen.height - h) / 2
        if (screen.isMono) {
            screen.fillRect(0, top, screen.width, h, 0)
            screen.drawLine(0, top, screen.width, top, c)
            screen.drawLine(0, top + h - 1, screen.width, top + h - 1, c)
        } else {
            screen.fillRect(0, top, screen.width, h, c)
        }
        return top
    }

    /**
     * Show a title, subtitle menu
     * @param title 
     * @param subtitle
     */
    //% weight=90
    //% blockId=gameSplash block="splash %title %subtitle"
    export function splash(title: string, subtitle: string) {
        showDialog(title, subtitle)
        waitAnyKey()
    }

    /**
     * Shows a dialog on screen
     * @param title 
     * @param subtitle 
     */
    //% weight=89
    //% blockId=gameDialog block="show dialog %title %subtitle"
    export function showDialog(title: string, subtitle: string) {
        let lines = 1
        if (!subtitle) lines = 0
        else
            for (let i = 0; i < subtitle.length; ++i)
                if (subtitle[i] == '\n') lines++

        let h = 28 + lines * (image.font5.charHeight + 2)
        let top = showBackground(h, 9)
        screen.print(title, 8, top + 8, 14, image.font8)
        screen.print(subtitle, 8, top + 23, 13, image.font5)
    }

    function meltScreen() {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 1000; ++j) {
                let x = Math.randomRange(0, screen.width - 1)
                let y = Math.randomRange(0, screen.height - 3)
                let c = screen.get(x, y)
                screen.set(x, y + 1, c)
                screen.set(x, y + 2, c)
            }
            pause(100)
        }
    }

    /**
     * Finishes the game and displays score
     */
    //% blockId=gameOver block="game over"
    //% weight=80
    export function over() {
        if (isOver) return
        takeScreenshot();
        isOver = true
        control.clearHandlers()
        control.runInParallel(() => {
            music.playSound(music.sounds(Sounds.Wawawawaa))
            freeze();
            meltScreen();
            let top = showBackground(44, 4)
            screen.printCenter("GAME OVER!", top + 8, 5, image.font8)
            if (hud.hasScore()) {
                screen.printCenter("Score:" + hud.score(), top + 23, 2, image.font5)
                if (hud.score() > hud.highScore()) {
                    hud.saveHighScore();
                    screen.printCenter("New High Score!", top + 32, 2, image.font5);
                }
            }
            pause(1000) // wait for users to stop pressing keys
            waitAnyKey()
            control.reset()
        })
    }

    /**
     * Tells the game host to grab a screenshot
     */
    //% shim=game::takeScreenshot
    export function takeScreenshot() {
        // handled by host
    }

    let __frameCb: () => void = undefined;
    /**
     * Repeats the code in the screen rendering loop.
     * @param body code to execute
     */
    //% help=loops/frame weight=100 afterOnStart=true
    //% blockId=frame block="game frame"
    export function frame(a: () => void): void {
        if (!__frameCb)
            control.addFrameHandler(20, function() {
                if (__frameCb) __frameCb();
            });
        __frameCb = a;
    }        
}
