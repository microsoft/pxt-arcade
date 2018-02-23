/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer
//% groups=["0.,","1#*"]
function img(lits: any, ...args: any[]): Image { return null }


let screen = image.create(128, 128)

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Image): void {}

    control.addFrameHandler(200, () => {
        updateScreen(screen)
    })

    updateScreen(screen)

    export function _stats(msg: string) {
        // show the msg somewhere - it contains frame rate etc
    }
}
