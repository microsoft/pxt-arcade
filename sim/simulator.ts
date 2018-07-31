/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-common-packages/libs/controller/enums.ts"/>

namespace pxsim {
    export type CommonBoard = Board

    let forcedUpdateLoop: any

    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
        initGamepad();

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
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, true, e)
            }
            window.onkeyup = (e) => {
                const b = board()
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, false, e)
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
        public id: string;
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
        private view: ScreenView;

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

        setKey(which: number, isPressed: boolean, e: KeyboardEvent) {
            let k = mapKey(which)
            if (k) {
                this.handleKeyEvent(k, isPressed);
                e.preventDefault();
            }
        }

        handleKeyEvent(key: Key, isPressed: boolean) {
            this.lastKey = Date.now()
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key)
            this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, 0) // "any" key
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
            this.id = msg.id;

            if (!this.controls) {
                this.controlsDiv = document.getElementById("controls") as HTMLDivElement;
                this.controlsDiv.innerHTML = "";
                this.controls = new ControlPad(this.controlsDiv);

                this.controlsDiv.onmouseover = () => {
                    if (!document.hasFocus()) window.focus();
                }
            }

            this.view = new ScreenView(this.screenState, this.canvas, () => this.layout(), () => this.updateStats());
            this.layout()

            throttleAnimation(cb => window.onresize = cb, () => this.layout())
            let info = document.getElementById("instructions")
            indicateFocus(document.hasFocus());

            return Promise.resolve();
        }

        updateStats() {
            this.stats.textContent = this.screenState.stats;
            this.tryScreenshot();
        }

        layout() {
            const minControlWidth = 100;
            const wWidth = window.innerWidth;
            const wHeight = window.innerHeight;
            if (wWidth < wHeight) {
                // Place controls below
                this.view.centerInBox(0, 0, window.innerWidth, window.innerHeight - minControlWidth);

                const bottom = this.view.boundingBox().bottom;
                let controlsHeight = window.innerHeight - bottom;

                if (controlsHeight * 2 > wWidth)
                    controlsHeight = wWidth / 2 | 0;

                this.controls.moveDPad(0, window.innerHeight - controlsHeight, controlsHeight);
                this.controls.moveButtons(window.innerWidth - controlsHeight, window.innerHeight - controlsHeight, controlsHeight);
            }
            else {
                // Place controls on sides
                const availableWidth = window.innerWidth - minControlWidth * 2;
                this.view.centerInBox(minControlWidth, 0, availableWidth, window.innerHeight);

                const left = this.view.boundingBox().left;

                this.controls.moveDPad(0, window.innerHeight - left, left);
                this.controls.moveButtons(window.innerWidth - left, window.innerHeight - left, left);
            }
        }
    }

    class ScreenView {
        state: ScreenState;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        cellWidth: number;

        palette: string[];

        boxLeft: number;
        boxTop: number;
        boxWidth: number;
        boxHeight: number;

        private cachedWidth: number;
        private cachedHeight: number;

        constructor(state: ScreenState, canvas: HTMLCanvasElement, private onResize: () => void, private onUpdate: () => void) {
            this.state = state;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");

            this.centerInBox(0, 0, 200, 200)
            this.context.fillStyle = "#000000";
            this.context.fill();

            this.attach();
            this.refreshPalette();
        }

        attach() {
            throttleAnimation(cb => this.state.onChange = cb, () => this.redraw(true));
        }

        centerInBox(left: number, top: number, width: number, height: number) {
            this.boxLeft = left;
            this.boxTop = top;
            this.boxHeight = height;
            this.boxWidth = width;
            this.resize();
        }

        boundingBox() {
            return this.canvas.getBoundingClientRect();
        }

        protected resize() {
            this.cellWidth = Math.max(1, Math.floor(Math.min(this.boxWidth / this.state.width, this.boxHeight / this.state.height)));
            const actualWidth = this.cellWidth * this.state.width;
            const actualHeight = this.cellWidth * this.state.height;
            this.canvas.style.left = (this.boxLeft + ((this.boxWidth - actualWidth) / 2)) + "px";
            this.canvas.style.top = (this.boxTop + ((this.boxHeight - actualHeight) / 2)) + "px";
            this.canvas.width = actualWidth;
            this.canvas.height = actualHeight;
            if (this.palette) this.redraw(false);
        }

        protected refreshPalette() {
            this.palette = [];

            for (let i = 0; i < this.state.palette.length; i++) {
                const c = this.state.palette[i];
                this.palette.push(`rgb(${c & 0xff},${(c >> 8) & 0xff},${(c >> 16) & 0xff})`);
            }
        }

        protected redraw(screenStateChanged: boolean) {
            if (this.cachedHeight !== this.state.height || this.cachedWidth !== this.state.width) {
                this.cachedHeight = this.state.height;
                this.cachedWidth = this.state.width;
                this.refreshPalette();
                this.resize();
                this.onResize();
            }
            else {
                for (let x = 0; x < this.state.width; x++) {
                    for (let y = 0; y < this.state.height; y++) {
                        this.context.fillStyle = this.palette[this.state.lastImage.data[x + y * this.state.width] & 0xff]
                        this.context.fillRect(x * this.cellWidth, y * this.cellWidth, this.cellWidth, this.cellWidth);
                    }
                }
            }
            if (screenStateChanged) {
                this.onUpdate()
            }
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

    function throttleAnimation(event: (cb: () => void) => void, handler: () => void) {
        let requested = false;
        event(() => {
            if (!requested) {
                window.requestAnimationFrame(() => {
                    handler();
                    requested = false;
                });
            }
        })
    }
}


namespace pxsim.pxtcore {
    export function getButtonByPinCfg(key: number) {
        return { id: key }
    }
}

namespace pxsim.ButtonMethods {
    export function id(button: any): number {
        return (button).id;
    }
}
