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

export class Simulator {
    protected frame: HTMLIFrameElement | undefined;
    protected buttonState: boolean[] = [];

    protected changeListeners: ((button: SimulatorButton, pressed: boolean) => void)[] = [];

    constructor(frame?: HTMLIFrameElement) {
        this.frame = frame;
    }

    setFrame(frame: HTMLIFrameElement | null) {
        if (frame) this.frame = frame;
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
        if (index != -1) {
            this.changeListeners.splice(index, 1);
        }
    }

    protected sendButtonState(button: SimulatorButton, pressed: boolean) {
        if (this.frame && this.frame.contentWindow) {
            this.frame.contentWindow.postMessage({

            }, "*" /* FIXME: This isn't a security sensitive codepath, but we should use the origin anyways */)
        }
    }

    protected updateButtonState(button: SimulatorButton, pressed: boolean) {
        if ((!!this.buttonState[button]) !== pressed) {
            this.buttonState[button] = pressed;
            this.changeListeners.forEach(cb => cb(button, pressed));
        }
    }
}