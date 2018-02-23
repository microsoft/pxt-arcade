/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    export type CommonBoard = Board

    const paletteSrc = [
        "#000000", // black
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
                board().screenState.maybeForceUpdate()
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

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public canvas: HTMLCanvasElement;
        public stats: HTMLElement;
        public screen: Uint32Array;
        public startTime = Date.now()
        public screenState: ScreenState

        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.screenState = new ScreenState(paletteSrc)
        }

        setKey(which: number, isPressed: boolean) {
            let k = mapKey(which)
            if (k)
                this.bus.queue(isPressed ? "_keydown" : "_keyup", k)
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            this.canvas = document.createElement("canvas");
            this.stats = document.createElement("div")
            this.stats.className = "stats"
            this.canvas.width = 16;
            this.canvas.height = 16;
            this.canvas.style.width = "256px";
            
            this.screenState.onChange = () => {
                this.canvas.width = this.screenState.width
                this.canvas.height = this.screenState.height

                const ctx = this.canvas.getContext("2d")
                ctx.imageSmoothingEnabled = false
                const imgdata = ctx.getImageData(0, 0, this.screenState.width, this.screenState.height)
                const arr = new Uint32Array(imgdata.data.buffer)
                
                // after we did one-time setup, redefine ourselves to be quicker
                this.screenState.onChange = () => {
                    arr.set(this.screenState.screen)
                    ctx.putImageData(imgdata, 0, 0)
                }
                // and finally call the redefnied self
                this.screenState.onChange()
            }

            document.body.appendChild(this.canvas);
            let info = document.createElement("div")
            info.className = "info"
            info.textContent = "Use arrows and Z,X."
            document.body.appendChild(this.stats);
            document.body.appendChild(info);

            return Promise.resolve();
        }
    }
}


namespace pxsim.pxtcore {
    export function updateStats(s: string) {
        board().stats.textContent = s
    }
}
