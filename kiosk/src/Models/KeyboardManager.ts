import configData from "../config.json"

export class KeyboardManager {
    private keyboardState: { [index: string]: boolean} = {};

    constructor() {
        document.addEventListener("keydown", (e) => {
            this.keyboardState[e.key.toUpperCase()] = true;
        });
        document.addEventListener("keyup", (e) => {
            this.keyboardState[e.key.toUpperCase()] = false;
        });
    }

    private checkPressed(gamepadIndex: number, keys: string[][]): boolean {
        if (gamepadIndex == -1) {
            return keys.some((list) => list.some(key => this.keyboardState[key.toUpperCase()]));
        }

        return keys[gamepadIndex].some(key => this.keyboardState[key.toUpperCase()]);
    }

    isAButtonPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardAButtonKeys);
    }

    isBButtonPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardBButtonKeys);
    }

    isEscapeButtonPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardEscapeButtonKeys);
    }

    isResetButtonPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardResetButtonKeys);
    }

    isMenuButtonPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardMenuButtonKeys);
    }

    isLeftPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardLeftKeys);
    }

    isRightPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardRightKeys);
    }

    isUpPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardUpKeys);
    }

    isDownPressed(gamepadIndex: number = -1): boolean {
        return this.checkPressed(gamepadIndex, configData.KeyboardDownKeys);
    }

}