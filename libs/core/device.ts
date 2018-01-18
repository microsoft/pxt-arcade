// this is where the size of the screen is specified
let screen = image.create(128, 128)

namespace image {
    export function updateScreen() {
        _show(screen)
    }

    updateScreen()
}

namespace control {
    let evolveFns: ((dt: number) => void)[]
    let drawFns: (() => void)[]

    let frameNo = 0
    let framesInSample = 0
    let timeInSample = 0

    function init() {
        if (evolveFns) return
        evolveFns = []
        drawFns = []
        let prevTime = control.millis()
        control.runInBackground(() => {
            while (true) {
                frameNo++
                let loopStart = control.millis()
                let dt = (loopStart - prevTime) / 1000.0
                for (let f of evolveFns) {
                    f(dt)
                }
                for (let f of drawFns) {
                    f()
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

    export function addEvolve(f: (dt: number) => void) {
        init()
        evolveFns.push(f)
    }

    export function addDraw(f: () => void) {
        init()
        drawFns.push(f)
    }
}

namespace loops {
    /**
     * Runs code every frame.
     * @param body the code to repeat
     */
    //% block
    export function frame(body: () => void): void {        
        control.addEvolve(body)
    }
}

/**
 * Tagged hex literal converter
 */
//% shim=@hex
function hex(lits: any, ...args: any[]): Buffer { return null }
