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
    let forcedUpdateLoop: any

    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();

        if (!forcedUpdateLoop) {
            // this is used to force screen update if game loop is stuck or not set up properly
            forcedUpdateLoop = setInterval(() => {
                board().maybeForceScreenUpdate()
            }, 100)
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
        // TODO polyfill needed?
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
        public width: number;
        public height: number;
        public screen: Uint32Array;
        public startTime = Date.now()

        private lastImage: Image
        private lastImageFlushTime = 0

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

        showImage(img: Image) {
            if (!this.flush) {
                this.width = img.width()
                this.height = img.height()
                this.canvas.width = this.width
                this.canvas.height = this.height

                const ctx = this.canvas.getContext("2d")
                ctx.imageSmoothingEnabled = false
                const imgdata = ctx.getImageData(0, 0, this.width, this.height)
                this.screen = new Uint32Array(imgdata.data.buffer)

                this.flush = () => {
                    ctx.putImageData(imgdata, 0, 0)
                }
            }

            const src = img.data
            const dst = this.screen
            if (this.width != img._width || this.height != img._height || src.length != dst.length)
                U.userError("wrong size")
            const p = this.palette
            for (let i = 0; i < src.length; ++i) {
                dst[i] = p[src[i] & 0xf]
            }
            this.flush()
            this.lastImage = img
            this.lastImageFlushTime = Date.now()
        }

        flush: () => void;

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            this.canvas = document.createElement("canvas");
            this.stats = document.createElement("div")
            this.stats.className = "stats"
            this.canvas.width = 16;
            this.canvas.height = 16;
            this.canvas.style.width = "256px";
            document.body.appendChild(this.canvas);
            let info = document.createElement("div")
            info.className = "info"
            info.textContent = "Use arrows and Z,X."
            document.body.appendChild(this.stats);
            document.body.appendChild(info);

            return Promise.resolve();
        }

        maybeForceScreenUpdate() {
            const now = Date.now()
            if (this.lastImage && now - this.lastImageFlushTime > 150) {
                this.showImage(this.lastImage)
            }
        }
    }
}
