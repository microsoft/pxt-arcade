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
        implements pxsim.MusicBoard, pxsim.JacDacBoard {
        public id: string;
        public bus: EventBus;
        public jacdacState: pxsim.JacDacState;
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
            this.jacdacState = new JacDacState(this);
            this.addMessageListener(this.receiveScreenshot.bind(this));
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

        private receiveScreenshot(msg: SimulatorMessage) {
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
            indicateFocus(document.hasFocus());

            return Promise.resolve();
        }

        updateStats() {
            this.stats.textContent = this.screenState.stats;
            this.tryScreenshot();
        }

        layout() {
            const minControlWidth = 100;
            const menuResetWidth = minControlWidth * 0.7;

            const maxWidth = document.body.clientWidth;
            const maxHeight = document.body.clientHeight;

            const landscapeWidth = maxWidth - minControlWidth * 2;
            const portraitHeight = maxHeight - minControlWidth;

            const portraitMetrics = this.view.getFit(maxWidth, portraitHeight, 20);
            const landscapeMetrics = this.view.getFit(landscapeWidth, maxHeight, 20);

            if (portraitMetrics.area > landscapeMetrics.area) {
                // Place controls below
                this.view.centerInBox(0, 0, portraitMetrics);
                const bb = this.view.boundingBox();

                const availableHeight = maxHeight - bb.bottom;
                let controlsHeight = availableHeight * 4 / 5;

                if (controlsHeight * 2 > maxWidth)
                    controlsHeight = maxWidth / 2 | 0;

                const controlsTop = maxHeight - availableHeight + (availableHeight - controlsHeight) * 3 / 4;

                this.controls.moveDPad(0, controlsTop, controlsHeight);
                this.controls.moveButtons(maxWidth - controlsHeight, controlsTop, controlsHeight);

                const spacing = 30;
                const menuResetTop = bb.bottom + 20;
                const midpoint = maxWidth / 2;

                // Centered between the d-pad and buttons
                this.controls.moveReset(midpoint - (spacing / 2) - menuResetWidth, menuResetTop, menuResetWidth);
                this.controls.moveMenu(midpoint + (spacing / 2), menuResetTop, menuResetWidth);
            }
            else {
                // Place controls on sides
                this.view.centerInBox(minControlWidth, 0, landscapeMetrics);
                const bb = this.view.boundingBox();

                this.controls.moveDPad(0, maxHeight - bb.left, bb.left);
                this.controls.moveButtons(maxWidth - bb.left, maxHeight - bb.left, bb.left);

                this.controls.moveReset(bb.left - menuResetWidth - 20, bb.top, menuResetWidth);
                this.controls.moveMenu(bb.right + 20, bb.top, menuResetWidth)
            }
        }
    }

    interface ScreenMetrics {
        width: number;
        height: number;
        left: number;
        top: number;
        area: number;
    }

    class ScreenView {
        state: ScreenState;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        cellWidth: number;

        palette: string[];

        private cachedWidth: number;
        private cachedHeight: number;
        private cachedPalette: Uint32Array;

        private ox: number;
        private oy: number;
        private metrics: ScreenMetrics;

        constructor(state: ScreenState, canvas: HTMLCanvasElement, private onResize: () => void, private onUpdate: () => void) {
            this.state = state;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");

            this.centerInBox(0, 0, this.getFit(200, 200, 20));
            this.context.fillStyle = "#000000";
            this.context.fill();

            this.attach();
            this.refreshPalette();
        }

        attach() {
            throttleAnimation(cb => this.state.onChange = cb, () => this.redraw(true));
        }

        centerInBox(ox: number, oy: number, metrics: ScreenMetrics) {
            this.ox = ox;
            this.oy = oy;
            this.metrics = metrics;
            this.resize();
        }

        boundingBox() {
            return this.canvas.getBoundingClientRect();
        }

        aspectRatio() {
            return this.state.width / this.state.height;
        }

        getFit(boundsWidth: number, boundsHeight: number, padding: number): ScreenMetrics {
            let screenWidth: number, screenHeight: number;
            const aspectRatio = this.aspectRatio();

            const maxWidth = boundsWidth - padding * 2;
            const maxHeight = boundsHeight - padding * 2;

            if (isEdge() || isIE()) {
                // Snap to closest screen-size to avoid scaling issues
                const cellWidth = Math.max(1, Math.floor(Math.min(maxWidth / this.state.width, maxHeight / this.state.height)));
                screenWidth = cellWidth * this.state.width;
                screenHeight = cellWidth * this.state.height;
            }
            else {
                const constrainedHeight = maxWidth / aspectRatio;
                const constrainedWidth = maxHeight * aspectRatio;
                if (constrainedHeight < maxHeight) {
                    if (constrainedWidth < maxWidth) {
                        const area1 = constrainedHeight * maxWidth;
                        const area2 = constrainedWidth * maxHeight;
                        if (area1 > area2) {
                            screenWidth = maxWidth;
                            screenHeight = constrainedHeight;
                        }
                        else {
                            screenWidth = constrainedWidth;
                            screenHeight = maxHeight;
                        }
                    }
                    else {
                        screenWidth = maxWidth;
                        screenHeight = constrainedHeight;
                    }
                }
                else {
                    screenWidth = constrainedWidth;
                    screenHeight = maxHeight;
                }
            }


            return {
                width: screenWidth,
                height: screenHeight,
                left: (boundsWidth - screenWidth ) / 2,
                top: (boundsHeight - screenHeight) / 2,
                area: screenWidth * screenHeight
            }
        }

        protected calculateClipPath(width: number, height: number, borderWidth: number) {
            let points = [];
            const wedgeOffset = borderWidth * 2 / 3;

            points.push([0, wedgeOffset]);
            points.push([wedgeOffset, 0]);
            points.push([width + borderWidth * 2 - wedgeOffset, 0]);
            points.push([width + borderWidth * 2, wedgeOffset]);
            points.push([width + borderWidth * 2, height + borderWidth * 2 - wedgeOffset]);
            points.push([width + borderWidth * 2 - wedgeOffset, height + borderWidth * 2]);
            points.push([wedgeOffset, height + borderWidth * 2]);
            points.push([0, height + borderWidth * 2 - wedgeOffset]);

            const polyString = "polygon(" + points.map(p => p.map(c => c + "px").join(" ")).join(", ") + ")";
            this.canvas.style.clipPath = polyString;
        }

        protected refreshPalette() {
            this.palette = [];

            for (let i = 0; i < this.state.palette.length; i++) {
                const c = this.state.palette[i];
                this.palette.push(`rgb(${c & 0xff},${(c >> 8) & 0xff},${(c >> 16) & 0xff})`);
            }
        }

        protected redraw(screenStateChanged: boolean) {
            if (this.cachedHeight !== this.state.height || this.cachedWidth !== this.state.width || this.paletteDidChange()) {
                this.cachedHeight = this.state.height;
                this.cachedWidth = this.state.width;
                this.cachedPalette = this.state.palette.slice();
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

        protected resize() {
            if (isEdge() || isIE()) {
                this.cellWidth = this.metrics.width / this.state.width;
                this.canvas.width = this.metrics.width;
                this.canvas.height = this.metrics.height;
            }
            else {
                this.cellWidth = 1;
                this.canvas.width = this.state.width;
                this.canvas.height = this.state.height;
                this.canvas.style.width = this.metrics.width + "px";
                this.canvas.style.height = this.metrics.height + "px";
            }

            const bb = this.boundingBox();

            const borderWidth = (bb.width - this.metrics.width) / 2;
            const borderHeight = (bb.height - this.metrics.height) / 2;
            const leftMargin = this.ox + this.metrics.left - borderWidth;

            this.canvas.style.left = leftMargin + "px";
            this.canvas.style.top = Math.min(this.oy + this.metrics.top - borderHeight, leftMargin) + "px";

            this.calculateClipPath(this.metrics.width, this.metrics.height, (bb.width - this.metrics.width) / 2);

            if (this.palette) this.redraw(false);
        }

        protected paletteDidChange() {
            if (!this.cachedPalette || this.cachedPalette.length != this.state.palette.length) return true;
            for (let i = 0; i < this.cachedPalette.length; i++) {
                if (this.cachedPalette[i] != this.state.palette[i]) return true;
            }
            return false;
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

// Copied verbatim from pxt-core
function hasNavigator(): boolean {
    return typeof navigator !== "undefined";
}
function isEdge(): boolean {
    return hasNavigator() && /Edge/i.test(navigator.userAgent);
}
function isIE(): boolean {
    return hasNavigator() && /Trident/i.test(navigator.userAgent);
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
