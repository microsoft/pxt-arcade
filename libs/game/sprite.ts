/*
Frame handlers:
 10 - physics and collisions
 20 - loops.frame()
 60 - screen/sprite background
 90 - drawing sprites
 95 - drawing score
100 - loops.menu()
200 - screen refresh
*/

namespace sprite {
    export let allSprites: Sprite[]

    export function createFromBuffer(imgbuf: Buffer) {
        return create(image.ofBuffer(imgbuf))
    }

    export function reset() {
        init()
        allSprites = []
    }

    function init() {
        if (!allSprites) {
            allSprites = []
            setBackgroundColor(0)
            control.addFrameHandler(10, () => {
                for (let s of allSprites)
                    s._update(control.deltaTime)
                for (let s of allSprites)
                    s._collisions()
            })
            control.addFrameHandler(60, () => { bgFunction() })
            control.addFrameHandler(90, () => {
                allSprites.sort((a, b) => a.z - b.z || a.id - b.id)
                for (let s of allSprites)
                    s._draw()
            })
        }
    }

    let bgFunction = () => { }

    export function setBackgroundCallback(f: () => void) {
        init()
        bgFunction = f
    }

    export function setBackgroundColor(c: number) {
        init()
        bgFunction = () => {
            screen.fill(c)
        }
    }

    export function create(img: Image) {
        init()
        let spr = new Sprite(img)
        allSprites.push(spr)
        spr.id = allSprites.length
        return spr
    }

    export function createWithAnimation(imgs: Image[]) {
        let s = create(imgs[0])
        s.animation = new SpriteAnimation(imgs)
        return s
    }
    
    /**
     * Create a new sprite with given speed, and place it at the edge of the screen so it moves towards the middle. The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    export function launchParticle(img: Image, vx: number, vy: number) {
        let s = create(img)
        s.vx = vx
        s.vy = vy

        // put it at the edge of the screen so that it moves towards the middle

        if (vx < 0)
            s.x = screen.width + (s.width >> 1) - 1
        else if (vx > 0)
            s.x = -(s.width >> 1) + 1

        if (vy < 0)
            s.y = screen.height + (s.height >> 1) - 1
        else if (vy > 0)
            s.y = -(s.height >> 1) + 1

        s.flags |= sprite.Flag.AutoDestroy

        return s
    }

    export enum Flag {
        Ghost = 1, // doesn't collide with other sprites
        Destroyed = 2,
        AutoDestroy = 4, // remove the sprite when no longer visible
    }
}

class SpriteAnimation {
    frames: Image[]
    frameIdx: number
    time: number
    step: number

    constructor(f: Image[]) {
        this.frames = f
        this.frameIdx = 0
        this.time = 0
        this.step = 0.2
    }

    reset() {
        this.frameIdx = 0
        this.time = 0
    }

    update(parent: Sprite) {
        this.time += control.deltaTime
        let f = (this.time / this.step) | 0
        if (f != this.frameIdx) {
            if (f >= this.frames.length)
                this.reset()
            else
                this.frameIdx = f
            parent.image = this.frames[this.frameIdx]
        }
    }
}

class Sprite {
    x: number
    y: number
    z: number
    vx: number
    vy: number
    ax: number
    ay: number
    image: Image
    flags: number
    id: number
    type: number

    animation: SpriteAnimation

    private collisionHandler: (other: Sprite) => void
    private wallHandler: () => void
    private destroyHandler: () => void

    constructor(img: Image) {
        this.x = screen.width >> 1
        this.y = screen.height >> 1
        this.z = 0
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.flags = 0
        this.image = img
        this.type = 0
    }

    get width() {
        return this.image.width
    }
    get height() {
        return this.image.height
    }
    get left() {
        return this.x - (this.width >> 1)
    }
    get right() {
        return this.left + this.width
    }
    get top() {
        return this.y - (this.height >> 1)
    }
    get bottom() {
        return this.top + this.height
    }

    _draw() {
        screen.drawTransparentImage(this.image, this.left, this.top)
    }

    _update(dt: number) {
        this.x += this.vx * dt
        this.y += this.vy * dt
        this.vx += this.ax * dt
        this.vy += this.ay * dt
        if (this.animation)
            this.animation.update(this)
    }

    _collisions() {
        if (this.collisionHandler) {
            for (let o of sprite.allSprites) {
                if (this != o && this.collidesWith(o)) {
                    let tmp = o
                    control.runInBackground(() => this.collisionHandler(tmp))
                }

            }
        }

        if (this.wallHandler) {
            if (
                0 <= this.x && this.x < screen.width &&
                0 <= this.y && this.y < screen.height) {
                // OK
            } else {
                control.runInBackground(this.wallHandler)
            }
        }

        if (this.flags & sprite.Flag.AutoDestroy) {
            if (this.right < 0 || this.bottom < 0 ||
                this.left >= screen.width ||
                this.top >= screen.height) {
                this.destroy()
            }
        }
    }

    makeGhost() {
        this.flags |= sprite.Flag.Ghost
    }

    collidesWith(other: Sprite) {
        if (this.flags & sprite.Flag.Ghost)
            return false
        if (other.flags & sprite.Flag.Ghost)
            return false
        return other.image.overlapsWith(this.image, this.left - other.left, this.top - other.top)
    }

    onCollision(handler: (other: Sprite) => void) {
        this.collisionHandler = handler
    }

    onHitWall(handler: () => void) {
        this.wallHandler = handler
    }

    onDestroy(handler: () => void) {
        this.destroyHandler = handler
    }

    destroy() {
        if (this.flags & sprite.Flag.Destroyed)
            return
        this.flags |= sprite.Flag.Destroyed
        sprite.allSprites.removeElement(this)
        if (this.destroyHandler) {
            control.runInBackground(this.destroyHandler)
        }
    }
}