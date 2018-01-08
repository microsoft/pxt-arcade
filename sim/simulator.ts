/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    const paletteSrc = [
        "#000000", // black
        "#33e2e4", // teal 
        "#05b3e0", // blue
        "#3d30ad", // violet
        "#b09eff", // light violet
        "#5df51f", // green
        "#6a8927", // dollar green
        "#65471f", // brown
        "#98294a", // bordowy
        "#f80000", // red
        "#e30ec0", // pink
        "#ff9da5", // light pink
        "#ff9005", // orange
        "#efe204", // yellow
        "#ffffff", // white
    ]
    let updateLoop = 0

    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();

        if (!updateLoop) {
            updateLoop = setInterval(() => {
                board().updateView()
            }, 20)
            const body = document.getElementById("root")
            window.onfocus = () => {
                body.className = "focus"
            }
            window.onblur = () => {
                body.className = "blur"
            }
            window.onkeydown = (e) => {
                const b = board()
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, true)
            }
            window.onkeyup = (e) => {
                const b = board()
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, false)
            }
        }
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board(): Board {
        return runtime.board as Board;
    }

    function htmlColorToUint32(hexColor: string) {
        const ca = new Uint8ClampedArray(4)
        const ui = new Uint32Array(ca.buffer)
        const v = parseInt(hexColor.replace(/#/, ""), 16)
        ca[0] = (v >> 16) & 0xff;
        ca[1] = (v >> 8) & 0xff;
        ca[2] = (v >> 0) & 0xff;
        ca[3] = 0xff; // alpha
        // convert to uint32 using target endian
        return new Uint32Array(ca.buffer)[0]
    }

    function perfNow() {
        // TODO polyfill?
        return window.performance.now()
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public canvas: HTMLCanvasElement;
        public stats: HTMLElement;
        public palette = new Uint32Array(16);
        public width = 128;
        public height = 128;
        public screen: Uint32Array;
        public frameHandler: RefAction;
        public frameNo = 1;
        public inUpdate = false;

        private frameSamples = 0
        private frameUser = 0
        private frameSystem = 0
        private frameSkip = 0

        constructor() {
            super();
            this.bus = new EventBus(runtime);

            let p = ["#0"].concat(paletteSrc)
            for (let i = 0; i < 16; ++i) {
                this.palette[i] = htmlColorToUint32(p[i])
            }
        }

        setKey(which: number, isPressed: boolean) {
            let k = mapKey(which)
            if (k)
                this.bus.queue(isPressed ? "_keydown" : "_keyup", k)
        }

        pix(x: int, y: int) {
            return (x | 0) + (y | 0) * this.width
        }

        inRange(x: int, y: int) {
            return 0 <= (x | 0) && (x | 0) < this.width &&
                0 <= (y | 0) && (y | 0) < this.height;
        }

        clamp(x: int, y: int) {
            x |= 0
            y |= 0

            if (x < 0) x = 0
            else if (x >= this.width)
                x = this.width - 1

            if (y < 0) y = 0
            else if (y >= this.height)
                y = this.height - 1

            return [x, y]
        }

        color(c: number) {
            c |= 0
            if (c < 0 || c >= 16) return 0
            return this.palette[c]
        }

        fillRect(x: number, y: number, w: number, h: number, c: color) {
            c = this.color(c)
            while (h-- > 0) {
                let p = this.pix(x, y++)
                for (let i = 0; i < w; ++i)
                    this.screen[p++] = c;
            }
        }

        // Image format:
        //  byte 0: magic 0xf4 - 4 bit color; 0xf0 is monochromatic
        //  byte 1: width in pixels
        //  byte 2...N: data 4 bits per pixels, high order nibble printed first, lines aligned to byte
        //  byte 2...N: data 1 bit per pixels, low order bit printed first, lines aligned to byte

        drawIcon(x: int, y: int, img: Uint8Array, color: color) {
            if (!img || img.length < 3 || img[0] != 0xf0)
                return
            let w = img[1]
            let byteW = (w + 7) >> 3
            let h = ((img.length - 2) / byteW) | 0
            if (h == 0)
                return

            x |= 0
            y |= 0
            const sh = this.height
            const sw = this.width

            if (x + w <= 0) return
            if (x >= sw) return
            if (y + h <= 0) return
            if (y >= sh) return

            let p = 2
            color = this.color(color)
            const screen = this.screen

            for (let i = 0; i < h; ++i) {
                let yy = y + i
                if (0 <= yy && yy < sh) {
                    let dst = yy * sw
                    let src = p
                    let xx = x
                    let end = Math.min(sw, w + x)
                    if (x < 0) {
                        src += ((-x) >> 3)
                        xx += ((-x) >> 3) * 8
                    }
                    dst += xx
                    let mask = 0x01
                    let v = img[src++]
                    while (xx < end) {
                        if (xx >= 0 && (v & mask)) {
                            screen[dst] = color
                        }
                        mask <<= 1
                        if (mask & 0x100) {
                            mask = 0x01
                            v = img[src++]
                        }
                        dst++
                        xx++
                    }
                }
                p += byteW
            }
        }

        drawImage(x: int, y: int, img: Uint8Array) {
            if (!img || img.length < 3 || img[0] != 0xf4)
                return
            let w = img[1]
            let byteW = (w + 1) >> 1
            let h = ((img.length - 2) / byteW) | 0
            if (h == 0)
                return

            x |= 0
            y |= 0
            const sh = this.height
            const sw = this.width

            if (x + w <= 0) return
            if (x >= sw) return
            if (y + h <= 0) return
            if (y >= sh) return

            let p = 2

            const palette = this.palette
            const screen = this.screen

            for (let i = 0; i < h; ++i) {
                let yy = y + i
                if (0 <= yy && yy < sh) {
                    let dst = yy * sw
                    let len = 0
                    let src = p
                    if (x < 0) {
                        src += ((-x) >> 1)
                        len = Math.min(sw, w + x)
                        if (x & 1) {
                            let c = img[src++] & 0xf
                            if (c)
                                screen[dst] = palette[c]
                            dst++
                            len--
                        }
                    } else {
                        dst += x
                        len = Math.min(sw - x, w)
                    }

                    for (let i = 0; i < len >> 1; ++i) {
                        const v = img[src++]
                        if (v >> 4)
                            screen[dst] = palette[v >> 4]
                        dst++
                        if (v & 0xf)
                            screen[dst] = palette[v & 0xf]
                        dst++
                    }

                    if (len & 1) {
                        let c = img[src++] >> 4
                        if (c)
                            screen[dst++] = palette[c]
                    }
                }
                p += byteW
            }
        }

        flush: () => void;

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            this.canvas = document.createElement("canvas");
            this.stats = document.createElement("div")
            this.stats.className = "stats"
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.width = "256px";
            document.body.appendChild(this.canvas);
            let info = document.createElement("div")
            info.className = "info"
            info.textContent = "Use arrows and Z,X."
            document.body.appendChild(this.stats);
            document.body.appendChild(info);

            /*
            for (let c of paletteSrc) {
                let d = document.createElement("div");
                d.className = "sq";
                d.style.backgroundColor = c;
                document.body.appendChild(d)
            }
            */

            const ctx = this.canvas.getContext("2d")
            ctx.imageSmoothingEnabled = false
            const img = ctx.getImageData(0, 0, this.width, this.height)
            this.screen = new Uint32Array(img.data.buffer)

            this.flush = () => {
                ctx.putImageData(img, 0, 0)
            }

            this.fillRect(0, 0, this.width, this.height, 0)

            return Promise.resolve();
        }

        updateView() {
            this.frameNo++

            if (this.frameSamples >= 50) {
                let p1 = Math.round(this.frameUser * 1000 / this.frameSamples)
                let p2 = Math.round(this.frameSystem * 1000 / this.frameSamples)
                this.stats.textContent = `render: ${p1}us (+ ${p2}us)` +
                    (this.frameSkip ? ` ${this.frameSkip} skipped` : ``)
                this.frameSamples = 0
                this.frameSkip = 0
                this.frameUser = 0
                this.frameSystem = 0
            }

            if (this.inUpdate) {
                this.frameSkip++
                return
            }
            let start = perfNow()
            this.inUpdate = true
            this.frameSamples++
            if (this.frameHandler) {
                runtime.runFiberAsync(this.frameHandler)
                    .then(() => {
                        let stopUser = perfNow()
                        this.frameUser += stopUser - start
                        this.flush()
                        this.frameSystem += perfNow() - stopUser
                        this.inUpdate = false
                    })
            } else {
                this.flush()
                this.frameSystem += perfNow() - start
                this.inUpdate = false
            }
        }
    }
}
