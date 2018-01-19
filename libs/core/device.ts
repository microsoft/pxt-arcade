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

namespace game {
    let isOver = false
    let _score = 0
    let scoreSprite: Sprite

    export function over() {
        if (isOver) return
        isOver = true
        control.clearHandlers()
        control.runInBackground(() => {
            for (let i = 0; i < 40; ++i) {
                screen.print("GAME\nOVER", 30, 50, Math.randomRange(1, 15), image.defaultFont)
                loops.pause(40)
            }
            control.reset()
        })
    }

    export function score() {
        return _score
    }

    function initScore() {
        if (scoreSprite) return
        let font = image.defaultFont
        let color = 15
        let maxW = 8
        scoreSprite = sprite.create(image.create(font.charWidth * maxW, font.charHeight))
        scoreSprite.x = screen.width() - font.charWidth * maxW / 2 - 10
        scoreSprite.y = font.charHeight
        scoreSprite.flags |= sprite.Flag.Ghost
        scoreSprite.z = 1000
        control.addFrameHandler(85, () => {
            let s = _score + ""
            while (s.length < maxW) s = " " + s
            scoreSprite.image.print(s, 0, 0, color, font)
        })
    }

    export function setScore(score: number) {
        initScore()
        _score = score
    }

    export function addToScore(points: number) {
        setScore(_score + points)
    }
}

/**
 * Tagged hex literal converter
 */
//% shim=@hex
function hex(lits: any, ...args: any[]): Buffer { return null }
