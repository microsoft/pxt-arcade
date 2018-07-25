
namespace pxsim {
    let state: {[index: number]: boolean} = {};
    let init = false;
    let connected = false;
    let resetPressed = false;


    export function initGamepad() {
        resetPressed = false;
        if (init) return;
        init = true;
        window.addEventListener("gamepadconnected", (e) => {
            if (connected) return;
            connected = true;
            setInterval(() => {
                onUpdate();
            }, 20);
        });
    }

    export function onUpdate() {
        const g = navigator.getGamepads();
        if (g) {
            for (let i = 0; i < g.length; i++) {
                const gamepad = g[i];
                if (gamepad && gamepad.buttons && gamepad.buttons.length) {
                    updateState(Key.A, 0, gamepad);
                    updateState(Key.B, 1, gamepad);
                    updateState(Key.Up, 12, gamepad, 1, false);
                    updateState(Key.Down, 13, gamepad, 1, true);
                    updateState(Key.Left, 14, gamepad, 0, false);
                    updateState(Key.Right, 15, gamepad, 0, true);

                    if (!resetPressed && gamepad.buttons[9] && gamepad.buttons[9].pressed) {
                        resetPressed = true;
                        pxsim.control.reset();
                    }
                }
            }
        }
    }

    function updateState(key: Key, buttonIndex: number, gamepad: Gamepad, axis?: number, axisPositive?: boolean) {
        let pressed = gamepad.buttons[buttonIndex].pressed;
        if (axis != undefined && gamepad.axes && gamepad.axes[axis]) {
            const value = gamepad.axes[axis];
            if (Math.abs(value) > 0.5) {
                pressed = pressed || (axisPositive === value > 0);
            }
        }
        const old = state[key];
        if (old != pressed) {
            state[key] = pressed;
            board().handleKeyEvent(key, pressed);
        }
    }
}