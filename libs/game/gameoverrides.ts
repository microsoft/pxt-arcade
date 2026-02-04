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

namespace sprites {
    /**
     * Places a sprite at a random position on the screen
     * @param sprite the sprite to place at a random position
     */
    //% blockId=spriteRandomPosition 
    //% block="place $sprite at random position"
    //% sprite.shadow="variables_get"
    //% sprite.defl="mySprite"
    //% weight=10
    //% blockNamespace="sprites"
    //% group="Effects"
    //% help=sprites/place-randomly
    export function placeRandomly(sprite: Sprite): void {
        if (!sprite) return;
        const halfWidth = sprite.width >> 1;
        const halfHeight = sprite.height >> 1;
        sprite.x = Math.randomRange(halfWidth, screen.width - halfWidth);
        sprite.y = Math.randomRange(halfHeight, screen.height - halfHeight);
    }
}