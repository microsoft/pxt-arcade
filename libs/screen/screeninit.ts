/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function img(lits: any, ...args: any[]): Image { return null }

let screen = image.create(128, 128)

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Image): void {}
    //% shim=pxt::updateStats
    function updateStats(msg: string): void {}

    control.setupScreenRefresh(() => updateScreen(screen))

    export function _stats(msg: string) {
        updateStats(msg)
    }
}
