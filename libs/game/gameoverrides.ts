/**
 * Repeats the code forever in the background. On each iteration, allows other codes to run.
 * @param body code to execute
 */
//% help=loops/forever weight=100 afterOnStart=true blockNamespace="loops"
//% blockId=forever block="forever" blockAllowMultiple=1
function forever(a: () => void): void {
    game.forever(a);
}

/**
 * Pause for the specified time in milliseconds
 * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
 */
//% help=loops/pause weight=99
//% async block="pause %pause=timePicker|ms"
//% blockId=device_pause blockNamespace="loops"
function pause(ms: number): void {
    loops.pause(ms);
}

// micro:bit compatibility
// these functions allow some level of reuse
// between micro:bit and other maker-style editors
namespace basic {
    export function pause(millis: number) {
        loops.pause(millis);
    }

    export function forever(a: () => void) {
        game.forever(a);
    }
}