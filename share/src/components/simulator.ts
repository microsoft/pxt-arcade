import { tickEvent } from '../telemetry/appinsights';

export enum SimulatorButton {
    A,
    B,
    Up,
    Down,
    Left,
    Right,
    Menu,
    Reset
}

interface SimulatorMessage {
    type: string;
}

interface SimulatorReadyMessage extends SimulatorMessage {
    type: "ready";
}

interface SimulatorRestartMessage extends SimulatorMessage {
    type: "simulator";
    command: "restart";
}

interface SimulatorRunMessage extends SimulatorMessage {
    type: "run";
    code: string;
}

interface SimulatorButtonMessage extends SimulatorMessage {
    type: "button-pressed"
    button: SimulatorButton;
    pressed: boolean;
}

type SentMessage = SimulatorRunMessage | SimulatorButtonMessage;
type ReceivedMessage = SimulatorReadyMessage | SimulatorRestartMessage;

// No trailing slash!!!
const baseurl = "https://trg-arcade.userpxt.io/beta---simulator"

export class Simulator {
    protected frame: HTMLIFrameElement | undefined;
    protected buttonState: boolean[] = [];

    protected changeListeners: ((button: SimulatorButton, pressed: boolean) => void)[] = [];
    protected framePromise: Deferrable;
    protected readyPromise: Deferrable;

    protected lastRunBinary: string;

    constructor(frame?: HTMLIFrameElement) {
        this.frame = frame;

        window.addEventListener("message", this.messageHandler);
    }

    setFrame(frame: HTMLIFrameElement | null) {
        if (frame) {
            this.frame = frame;
            if (this.framePromise) this.framePromise.resolve();
        }
    }

    pressButton(button: SimulatorButton) {
        if (!this.buttonState[button]) {
            this.sendButtonState(button, true);
        }
    }

    releaseButton(button: SimulatorButton) {
        if (this.buttonState[button]) {
            this.sendButtonState(button, false);
        }
    }

    isPressed(button: SimulatorButton) {
        return !!this.buttonState[button];
    }

    addChangeListener(cb: (button: SimulatorButton, pressed: boolean) => void) {
        if (this.changeListeners.indexOf(cb) === -1) {
            this.changeListeners.push(cb);
        }
    }

    removeChangeListener(cb: (button: SimulatorButton, pressed: boolean) => void) {
        const index = this.changeListeners.indexOf(cb);
        if (index !== -1) {
            this.changeListeners.splice(index, 1);
        }
    }

    runCode(binaryjs: string) {
        this.lastRunBinary = binaryjs;

        this.waitForSimFrameAsync()
            .then(() => {
                this.readyPromise = undefined;

                const id = `sim-frame-${Math.random() * 1000000}`;
                this.frame.setAttribute("id", id);
                this.frame.src = `${baseurl}?justscreen=1&run=${id}#${id}`;

                this.waitForSimReadyAsync()
                    .then(() => {
                        this.sendMessage({
                            type: "run",
                            code: binaryjs
                        });
                    });
            })
    }

    dispose() {
        window.removeEventListener("message", this.messageHandler);
    }

    protected sendButtonState(button: SimulatorButton, pressed: boolean) {
        this.updateButtonState(button, pressed);
        this.sendMessage({
            type: "button-pressed",
            button,
            pressed
        });
    }

    protected updateButtonState(button: SimulatorButton, pressed: boolean) {
        if ((!!this.buttonState[button]) !== pressed) {
            this.buttonState[button] = pressed;
            this.changeListeners.forEach(cb => cb(button, pressed));
        }
    }

    protected sendMessage(msg: SentMessage) {
        if (this.frame && this.frame.contentWindow) {
            this.frame.contentWindow.postMessage(msg, "*");
        }
    }

    protected handleMessage(msg: ReceivedMessage) {
        switch (msg.type) {
            case "ready":
                if (this.readyPromise) this.readyPromise.resolve();
                break;
            case "simulator":
                if (msg.command === "restart") {
                    tickEvent("shareExperiment.play.restart");
                    this.runCode(this.lastRunBinary);
                }
        }
    }

    protected messageHandler = (ev: MessageEvent) => {
        const msg = ev.data as ReceivedMessage;
        this.handleMessage(msg);
    }

    protected waitForSimFrameAsync() {
        if (this.frame) return Promise.resolve();
        if (this.framePromise) return this.framePromise.promise;

        this.framePromise = new Deferrable();

        return this.framePromise.promise;
    }

    protected waitForSimReadyAsync() {
        if (this.readyPromise) return this.readyPromise.promise;

        this.readyPromise = new Deferrable();

        return this.readyPromise.promise;
    }
}

class Deferrable {
    promise: Promise<void>;
    protected _resolve: () => void;
    protected _reject: (reason?: any) => void;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    resolve() {
        if (this._resolve) this._resolve();
        this._resolve = undefined;
        this._reject = undefined;
    }

    reject() {
        if (this._reject) this._reject();
        this._resolve = undefined;
        this._reject = undefined;
    }

    isFinished() {
        return !this._resolve;
    }
}