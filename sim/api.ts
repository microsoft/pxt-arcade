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
            case 90: // Z
                return Key.A
            case 13: // Enter
            case 88: // X
                return Key.B
            default: return Key.None
        }
    }
}

namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause_loops
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m: string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg: string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}

namespace pxsim.control {
    /**
     * Listen to a event
     */
    //% 
    export function onEvent(ev: string, arg: number, f: RefAction) {
        board().bus.listen(ev, arg, f)
    }

    /**
     * Generate an event
     */
    //% 
    export function raiseEvent(ev: string, arg: number) {
        board().bus.queue(ev, arg)
    }

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% 
    export function createBuffer(size: int): RefBuffer {
        return pxsim.BufferMethods.createBuffer(size)
    }

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=control/millis weight=50
    //% blockId=control_running_time block="millis (ms)" 
    export function millis() {
        return Date.now() - board().startTime
    }

    /**
     * Restarts the console.
     */
    //% block async
    export function reset() {
        pxsim.Runtime.postMessage(<pxsim.SimulatorCommandMessage>{
            type: "simulator",
            command: "restart"
        })
        const cb = getResume();
    }

    export let runInParallel = thread.runInBackground;

    export function waitForEvent(id: string, evid: number) {
        const cb = getResume();
        board().bus.wait(id, evid, cb);
    }

    export function allocateNotifyEvent(): number {
        let b = board();
        return b.bus.nextNotifyEvent++;
    }
}

namespace pxsim.game {
    export function takeScreenshot() {
        const b = board();
        b.tryScreenshot();
    }
}