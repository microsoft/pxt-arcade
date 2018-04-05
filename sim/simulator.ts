/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/libs/keys/enums.ts"/>

namespace pxsim {
    export type CommonBoard = Board

    let forcedUpdateLoop: any

    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();

        if (!forcedUpdateLoop) {
            // this is used to force screen update if game loop is stuck or not set up properly
            forcedUpdateLoop = setInterval(() => {
                //board().screenState.maybeForceUpdate()
            }, 100)
            const body = document.getElementById("root")
            window.onfocus = () => {
                indicateFocus(true);
            }
            window.onblur = () => {
                indicateFocus(false);
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

    const openMeInMakeCode = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAACBAgMAAACA` +
        `3hMIAAAACVBMVEX///+rq6sAAACQF3jzAAAAdklEQVQY05WQsQ2FMAxE3/8KDZUp2CcjMBIlYorUTIntuLA` +
        `UCcHpFRfp4kuMaqqIKGa61kpxfqgis4ghKYOzMipl+pCqfpjzcFHCfOjaUtfmXViLeLVExgIljuN70jYcyH` +
        `PUhAosRi969a920E7azHWx/zvm4QZrZxQ87RClwwAAAABJRU5ErkJggg==`

    export function loadImageAsync(url: string) {
        return new Promise<HTMLCanvasElement>((resolve, reject) => {
            const img = new Image();
            img.src = url
            img.onload = () => {
                const canvas = document.createElement("canvas")
                canvas.width = img.width
                canvas.height = img.height
                const ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0);
                resolve(canvas)
            };
            img.onerror = () => {
                reject(new Error("Cannot load image"))
            }
        })
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard
        implements pxsim.MusicBoard {
        public bus: EventBus;
        public audioState: AudioState;
        public background: HTMLDivElement;
        public controlsDiv: HTMLDivElement;
        public canvas: HTMLCanvasElement;
        public stats: HTMLElement;
        public screen: Uint32Array;
        public startTime = Date.now()
        public screenState: ScreenState
        private lastKey = 0
        private lastScreenshot: Uint32Array
        private lastScreenshotTime = 0;

        private controls: ControlPad;

        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.screenState = new ScreenState(null)
            this.audioState = new AudioState();
        }

        getDefaultPitchPin(): Pin {
            return undefined;
        }

        setKey(which: number, isPressed: boolean) {
            let k = mapKey(which)
            if (k) {
                this.handleKeyEvent(k, isPressed);
            }
        }

        handleKeyEvent(key: Key, isPressed: boolean) {
            this.lastKey = Date.now()
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key)
            if (this.controls) {
                this.controls.mirrorKey(key, isPressed);
            }
        }

        public receiveMessage(msg: SimulatorMessage) {
            if (msg.type == "screenshot")
                this.screenshotAsync((msg as SimulatorScreenshotMessage).title || pxsim.title || "...")
                    .then(img => {
                        Runtime.postMessage(
                            { type: "screenshot", data: img } as SimulatorScreenshotMessage)
                    })
        }

        private screenshotAsync(title: string) {
            let w = this.screenState.width
            let h = this.screenState.height
            let work = document.createElement("canvas")
            let border = 16
            let bottom = 32
            work.width = w + border * 2
            work.height = h + border * 2 + bottom
            let ctx = work.getContext("2d")
            ctx.imageSmoothingEnabled = false
            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, work.width, work.height)
            let id = ctx.getImageData(border, border, w, h)
            if (this.lastScreenshot)
                new Uint32Array(id.data.buffer).set(this.lastScreenshot)
            else
                new Uint32Array(id.data.buffer).fill(0xff000000)
            ctx.putImageData(id, border, border)
            let lblTop = 2 * border + h + 4
            ctx.fillStyle = 'black'
            ctx.font = '13px sans-serif'
            ctx.fillText(title, border, lblTop, w)
            return loadImageAsync(openMeInMakeCode)
                .then(openme => {
                    ctx.drawImage(openme, border + w + 3, border)
                    return work.toDataURL("image/png")
                })
        }

        tryScreenshot() {
            let now = Date.now()
            // if there was a key since last screenshot and at least 100ms ago, 
            // and last screenshot was at least 3s ago, record a new one
            if (now - this.lastScreenshotTime > 3000 &&
                this.lastKey < now - 100 &&
                (!this.lastScreenshot || this.lastKey > this.lastScreenshotTime))
                this.takeScreenshot();
        }

        takeScreenshot() {
            let now = Date.now()
            this.lastScreenshot = this.screenState.screen.slice(0)
            this.lastScreenshotTime = now
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            this.runOptions = msg;
            this.background = document.getElementById("screen-back") as HTMLDivElement;
            this.canvas = document.getElementById("paint-surface") as HTMLCanvasElement;
            this.stats = document.getElementById("debug-stats");
            this.stats.className = "stats"
            this.canvas.width = 16;
            this.canvas.height = 16;

            if (!this.controls) {
                this.controlsDiv = document.getElementById("controls") as HTMLDivElement;
                this.controlsDiv.innerHTML = "";
                this.controls = new ControlPad(this.controlsDiv);

                this.controlsDiv.onmouseover = () => {
                    if (!document.hasFocus()) window.focus();
                }
            }

            let requested = false

            this.screenState.onChange = () => {
                this.canvas.width = this.screenState.width
                this.canvas.height = this.screenState.height

                const ctx = this.canvas.getContext("2d")
                ctx.imageSmoothingEnabled = false
                const imgdata = ctx.getImageData(0, 0, this.screenState.width, this.screenState.height)
                const arr = new Uint32Array(imgdata.data.buffer)

                let flush = () => {
                    requested = false
                    ctx.putImageData(imgdata, 0, 0)
                    this.stats.textContent = this.screenState.stats;
                    var width = this.canvas.scrollWidth < this.canvas.scrollHeight ? this.canvas.scrollWidth : this.canvas.scrollHeight;
                    this.background.style.width = `${width + 20}px`;
                    this.tryScreenshot()
                }

                // after we did one-time setup, redefine ourselves to be quicker
                this.screenState.onChange = () => {
                    arr.set(this.screenState.screen)
                    if (!requested) {
                        requested = true
                        window.requestAnimationFrame(flush)
                    }
                }
                // and finally call the redefined self
                this.screenState.onChange()
            }

            window.onresize = () => {
                var width = this.canvas.scrollWidth < this.canvas.scrollHeight ? this.canvas.scrollWidth : this.canvas.scrollHeight;
                this.background.style.width = `${width + 20}px`;
            }

            let info = document.getElementById("instructions")
            indicateFocus(document.hasFocus());

            return Promise.resolve();
        }
    }

    function indicateFocus(hasFocus: boolean) {
        const b = board().background;
        const c = board().controlsDiv;
        if (!b || !c) return;

        if (hasFocus) {
            b.classList.add("has-focus");
            c.classList.remove("no-focus");
        }
        else {
            b.classList.remove("has-focus");
            c.classList.add("no-focus");
        }
    }
}
