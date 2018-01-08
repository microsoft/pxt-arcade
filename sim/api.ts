/// <reference path="../libs/core/enums.d.ts"/>

type color = number
type int = number

namespace pxsim {
    export enum Key {
        None = 0,
        Left = 1,
        Up = 2,
        Right = 3,
        Down = 4,
        A = 5,
        B = 6,
    }

    export function mapKey(which: number): Key {
        switch (which) {
            case 65: // A
            case 37: // Left arrow
                return Key.Left
            case 87: // W
            case 38: // Up arrow
                return Key.Up
            case 68: // D
            case 39: // right arrow
                return Key.Right
            case 83: // S
            case 40: // down arrow
                return Key.Down
            case 32: // Space
            case 90: // Z
                return Key.A
            case 13: // Enter
            case 88: // X
                return Key.B
            default: return Key.None
        }
    }
}

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
        b.fillRect(x, y, x2 - x + 1, y2 - y + 1, c)
    }

    /**
     * Get the width of the screen in pixels
     */
    //%
    export function width() {
        return board().width
    }

    /**
     * Get the height of the screen in pixels
     */
    //%
    export function height() {
        return board().height
    }

    /**
     * Draw a color image on the screen.
     */
    //%
    export function drawImage(x: number, y: number, img: RefBuffer) {
        if (img) {
            board().drawImage(x, y, img.data)
        }
    }

    /**
     * Draw a monochromatic image on the screen.
     */
    //%
    export function drawIcon(x: number, y: number, img: RefBuffer, color: color) {
        if (img) {
            board().drawIcon(x, y, img.data, color)
        }
    }



    export function isValidImage(buf: RefBuffer) {
        return buf.data.length >= 3 && (buf.data[0] == 0xf0 || buf.data[0] == 0xf4);
    }

    export function bytes(x: number, isMono: boolean) {
        if (isMono)
            return ((x + 7) >> 3)
        else
            return ((x + 1) >> 1)
    }

    /**
     * Return image flipped (mirrored) horizontally
     * @param buf 
     */
    //%
    export function flippedX(buf: RefBuffer) {
        if (!screen.isValidImage(buf))
            return null;
        const w = buf.data[1];
        const isMono = buf.data[0] == 0xf0
        if (isMono)
            return null // TODO
        const bw = bytes(w, isMono);
        const h = ((buf.data.length - 2) / bw) | 0;
        const out = pxsim.BufferMethods.createBuffer(2 + bw * h)
        out.data[0] = buf.data[0];
        out.data[1] = w;
        let dst = 2
        for (let i = 0; i < h; ++i) {
            let src = 2 + (i + 1) * bw - 1
            if (w & 1) {
                let v = buf.data[src--]
                for (let j = 0; j < bw; ++j) {
                    let t = v & 0xf0
                    v = j == bw - 1 ? 0 : buf.data[src--]
                    out.data[dst++] = t | (v & 0xf)
                }
            } else {
                for (let j = 0; j < bw; ++j) {
                    const v = buf.data[src--]
                    out.data[dst++] = (v << 4) | (0xf & (v >> 4));
                }
            }
        }
        return out;

    }

    const bitdouble = [
        0x00, 0x03, 0x0c, 0x0f, 0x30, 0x33, 0x3c, 0x3f, 0xc0, 0xc3, 0xcc, 0xcf, 0xf0, 0xf3, 0xfc, 0xff,
    ]

    /**
     * Return the image (mono or color) where each pixel is replaced by 4
     * @param buf 
     */
    //%
    export function doubledImage(buf: RefBuffer): RefBuffer {
        if (!screen.isValidImage(buf))
            return null;
        const w = buf.data[1];
        if (w > 126)
            return null;
        const isMono = buf.data[0] == 0xf0
        const bw = bytes(w, isMono);
        const h = ((buf.data.length - 2) / bw) | 0;
        const bw2 = bytes(w * 2, isMono);
        const out = pxsim.BufferMethods.createBuffer(2 + bw2 * h * 2)
        out.data[0] = buf.data[0];
        out.data[1] = w * 2;
        let src = 2
        let dst = 2
        for (let i = 0; i < h; ++i) {
            for (let jj = 0; jj < 2; ++jj) {
                let p = src;
                for (let j = 0; j < bw; ++j) {
                    const v = buf.data[p++]
                    if (isMono) {
                        out.data[dst++] = bitdouble[v & 0xf];
                        out.data[dst++] = bitdouble[v >> 4];
                    } else {
                        out.data[dst++] = 0x11 * (v >> 4);
                        out.data[dst++] = 0x11 * (v & 0xf);
                    }
                }
                if (!isMono && (w & 1)) dst--
            }
            src += bw;
        }
        return out;
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

namespace pxsim.control {
    /**
     * Listen to a event
     */
    //% 
    export function on(ev: string, arg: number, f: RefAction) {
        board().bus.listen(ev, arg, f)
    }

    /**
     * Generate an event
     */
    //% 
    export function queue(ev: string, arg: number) {
        board().bus.queue(ev, arg)
    }

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% 
    export function createBuffer(size: int): RefBuffer {
        return pxsim.BufferMethods.createBuffer(size)
    }
}