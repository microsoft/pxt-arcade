/**
 * Repeats the code forever in the background. On each iteration, allows other codes to run.
 * @param body code to execute
 */
//% help=loops/forever weight=100 afterOnStart=true blockNamespace="loops"
//% blockId=forever block="forever" blockAllowMultiple=1
function forever(a: () => void): void {
    game.forever(a);
}

// micro:bit compatibility
// these functions allow some level of reuse
// between micro:bit and other maker-style editors
namespace basic {
    export function forever(a: () => void) {
        game.forever(a);
    }
}