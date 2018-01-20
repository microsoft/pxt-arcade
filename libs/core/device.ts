// this is where the size of the screen is specified
let screen = image.create(128, 128)

namespace image {
    export function updateScreen() {
        _show(screen)
    }

    updateScreen()
}

namespace control {
    class Callback {
        order: number
        handler: (dt: number) => void
    }

    let callbacks: Callback[]

    let frameNo = 0
    let framesInSample = 0
    let timeInSample = 0

    function init() {
        if (callbacks) return
        callbacks = []
        let prevTime = control.millis()
        control.runInBackground(() => {
            while (true) {
                frameNo++
                let loopStart = control.millis()
                let dt = (loopStart - prevTime) / 1000.0
                prevTime = loopStart
                for (let f of callbacks) {
                    f.handler(dt)
                }
                image.updateScreen()
                let runtime = control.millis() - loopStart
                timeInSample += runtime
                framesInSample++
                if (timeInSample > 1000) {
                    image._stats(`render: ${Math.round(timeInSample / framesInSample * 1000)}us`)
                    timeInSample = 0
                    framesInSample = 0
                }
                let delay = Math.max(1, 20 - runtime)
                loops.pause(delay)
            }
        })
    }

    export function clearHandlers() {
        init()
        callbacks = []
    }

    export function addFrameHandler(order: number, handler: (dt: number) => void) {
        init()
        let fn = new Callback()
        fn.order = order
        fn.handler = handler
        for (let i = 0; i < callbacks.length; ++i) {
            if (callbacks[i].order > order) {
                callbacks.insertAt(i, fn)
                return
            }
        }
        callbacks.push(fn)
    }
}

namespace loops {
    /**
     * Runs code every frame.
     * @param body the code to repeat
     */
    //% block
    export function frame(body: () => void): void {
        control.addFrameHandler(100, body)
    }
}

/**
 * Tagged hex literal converter
 */
//% shim=@hex
function hex(lits: any, ...args: any[]): Buffer { return null }


/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function img(lits: any, ...args: any[]): Image { return null }
