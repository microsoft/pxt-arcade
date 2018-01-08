/// <reference path="../libs/core/enums.d.ts"/>

type color = number
type int = number

namespace pxsim.screen {
    /**
     * Set a pixel
     * @param x 
     * @param y 
     * @param c 
     */
    //% block
    export function set(x: int, y: int, c: color) {
        const b = board()
        if (b.inRange(x, y)) {
            b.screen[b.pix(x, y)] = b.color(c)
        }
    }

    /**
     * Fill a rectangle
     * @param x 
     * @param y 
     * @param w 
     * @param h 
     * @param c 
     */
    //% block
    export function rect(x: int, y: int, w: int, h: int, c: color) {
        const b = board()
        let [x2, y2] = b.clamp(x + w - 1, y + h - 1);
        [x, y] = b.clamp(x, y)
        b.fillRect(x, y, x2 - x + 1, y2 - y + 1, b.color(c))
    }
}

namespace pxsim.turtle {
    /**
     * Triggers when the turtle bumps a wall
     * @param handler 
     */
    //% blockId=onBump block="on bump"
    export function onBump(handler: RefAction) {
        let b = board();

        b.bus.listen("Turtle", "Bump", handler);
    }
}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Runs code every frame.
     * @param body the code to repeat
     */
    //% block
    export function frame(body: RefAction): void {
        board().frameHandler = body
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m: string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg: string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}

namespace pxsim {
    /**
     * A ghost on the screen.
     */
    //%
    export class Sprite {
        /**
         * The X-coordiante
         */
        //%
        public x = 100;
        /**
        * The Y-coordiante
        */
        //%
        public y = 100;
        public angle = 90;

        constructor() {
        }

        private foobar() { }

        /**
         * Move the thing forward
         */
        //%
        public forwardAsync(steps: number) {
            let deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            board().updateView();

            if (this.x < 0 || this.y < 0)
                board().bus.queue("TURTLE", "BUMP");

            return Promise.delay(400)
        }
    }
}

namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    //% block
    export function createSprite(): Sprite {
        return new Sprite();
    }
}