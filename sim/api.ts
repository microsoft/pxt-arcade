/// <reference path="../libs/core/enums.d.ts"/>

type color = number
type int = number

namespace pxsim {

    export enum Key {
        None = 0,
        Left = 1,
        Up = 2,
        Right = 3,
        Down = 4,
        A = 5,
        B = 6,
        Menu = 7
    }

    export function mapKey(which: number): Key {
        switch (which) {
            case 65: // A
            case 37: // Left arrow
                return Key.Left
            case 87: // W
            case 38: // Up arrow
                return Key.Up
            case 68: // D
            case 39: // right arrow
                return Key.Right
            case 83: // S
            case 40: // down arrow
                return Key.Down
            case 32: // Space
            case 81: // Q
            case 90: // Z
                return Key.A
            case 13: // Enter
            case 88: // X
            case 69: // E
                return Key.B

            // Player two (see the local-multiplayer package)
            case 74: // J
                return Key.Left + 7
            case 73: // I
                return Key.Up + 7
            case 76: // L
                return Key.Right + 7
            case 75: // K
                return Key.Down + 7
            case 85: // U
                return Key.A + 7
            case 79: // O
                return Key.B + 7
            default: return Key.None
        }
    }

    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

namespace pxsim.pxtcore {
    export function registerWithDal(id: number, evid: number, handler: RefAction, mode: number = 0) {
        board().bus.listen(id, evid, handler);
    }
}

namespace pxsim.game {
    export function takeScreenshot() {
        const b = board();
        b.tryScreenshot();
    }
}