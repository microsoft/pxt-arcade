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

        if (!updateLoop)
            updateLoop = setInterval(() => {
                board().updateView()
            }, 20)
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
        public sprite: Sprite;
        private palette = new Uint32Array(16);
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
            this.canvas = document.getElementById('screen') as any;

            let p = ["#0"].concat(paletteSrc)
            for (let i = 0; i < 16; ++i) {
                this.palette[i] = htmlColorToUint32(p[i])
            }
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

        fillRect(x: number, y: number, w: number, h: number, c: int) {
            while (h-- > 0) {
                let p = this.pix(x, y++)
                for (let i = 0; i < w; ++i)
                    this.screen[p++] = c;
            }
        }

        flush: () => void;

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            this.canvas = document.createElement("canvas");
            this.stats = document.createElement("div")
            this.stats.className  ="stats"
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            document.body.appendChild(this.canvas);
            document.body.appendChild(this.stats);
            this.canvas.style.width = "256px";

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
