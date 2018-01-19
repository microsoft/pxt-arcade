namespace sprite {
    export let allSprites: Sprite[]

    export function createFromBuffer(imgbuf:Buffer) {
        return create(image.ofBuffer(imgbuf))
    }

    export function create(img: Image) {
        let spr = new Sprite(img)
        if (!allSprites) {
            allSprites = []
            control.addFrameHandler(10, dt => {
                for (let s of allSprites)
                    s._update(dt)

                for (let s of allSprites) {
                    if (s.collisionHandler) {
                        for (let o of allSprites) {
                            if (s != o && s.collidesWith(o))
                                s.collisionHandler(o)
                        }

                        if (s.flags & Flag.Unbounded) {
                            // OK
                        } else if (
                            0 <= s.x && s.x < screen.width() &&
                            0 <= s.y && s.y < screen.height()) {
                            // OK
                        } else {
                            s.collisionHandler(null)
                        }
                    }
                }
            })
            control.addFrameHandler(90, dt => {
                allSprites.sort((a, b) => a.z - b.z || a.id - b.id)
                for (let s of allSprites)
                    s._draw()
            })
        }
        allSprites.push(spr)
        spr.id = allSprites.length
        return spr
    }

    export enum Flag {
        Ghost = 1, // doesn't collide with other sprites
        Unbounded = 2, // hitting walls doesn't generate collision events
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
    collisionHandler: (other: Sprite) => void

    constructor(img: Image) {
        this.x = screen.width() / 2
        this.y = screen.height() / 2
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.flags = 0
        this.image = img
    }

    width() {
        return this.image.width()
    }
    height() {
        return this.image.height()
    }
    left() {
        return this.x - (this.width() >> 1)
    }
    top() {
        return this.y - (this.height() >> 1)
    }

    _draw() {
        screen.drawImage(this.image, this.left(), this.top())
    }

    _update(dt: number) {
        this.x += this.vx * dt
        this.y += this.vy * dt
        this.vx += this.ax * dt
        this.vy += this.ay * dt
    }

    collidesWith(other: Sprite) {
        if (this.flags & sprite.Flag.Ghost)
            return false
        if (other.flags & sprite.Flag.Ghost)
            return false
        return other.image.overlapsWith(this.image, this.left() - other.left(), this.top() - other.top())
    }

    onCollision(handler: (other: Sprite) => void) {
        this.collisionHandler = handler
    }
}