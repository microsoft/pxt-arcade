namespace sprite {
    export let allSprites: Sprite[]

    export function createFromBuffer(imgbuf: Buffer) {
        return create(image.ofBuffer(imgbuf))
    }

    export function create(img: Image) {
        let spr = new Sprite(img)
        if (!allSprites) {
            allSprites = []
            control.addFrameHandler(10, dt => {
                for (let s of allSprites)
                    s._update(dt)
                for (let s of allSprites)
                    s._collisions()
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

    export function launchObstacle(img: Image, vx: number, vy: number) {
        let s = create(img)
        s.vx = vx
        s.vy = vy

        // put it at the edge of the screen so that it moves towards the middle

        if (vx < 0)
            s.x = screen.width() + (s.width() >> 1) - 1
        else if (vx > 0)
            s.x = -(s.width() >> 1) + 1

        if (vy < 0)
            s.y = screen.height() + (s.height() >> 1) - 1
        else if (vy > 0)
            s.y = -(s.height() >> 1) + 1

        s.flags |= sprite.Flag.AutoDestroy

        return s
    }

    export enum Flag {
        Ghost = 1, // doesn't collide with other sprites
        Destroyed = 2,
        AutoDestroy = 4, // remove the sprite when no longer visible
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
    private collisionHandler: (other: Sprite) => void
    private wallHandler: () => void
    private destroyHandler: () => void

    constructor(img: Image) {
        this.x = screen.width() >> 1
        this.y = screen.height() >> 1
        this.z = 0
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.flags = 0
        this.image = img
        this.type = 0
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
    right() {
        return this.left() + this.width()
    }
    top() {
        return this.y - (this.height() >> 1)
    }
    bottom() {
        return this.top() + this.height()
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

    _collisions() {
        if (this.collisionHandler) {
            for (let o of sprite.allSprites) {
                if (this != o && this.collidesWith(o))
                    this.collisionHandler(o)
            }
        }

        if (this.wallHandler) {
            if (
                0 <= this.x && this.x < screen.width() &&
                0 <= this.y && this.y < screen.height()) {
                // OK
            } else {
                this.wallHandler()
            }
        }

        if (this.flags & sprite.Flag.AutoDestroy) {
            if (this.right() < 0 || this.bottom() < 0 ||
                this.left() >= screen.width() ||
                this.top() >= screen.height()) {
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
        return other.image.overlapsWith(this.image, this.left() - other.left(), this.top() - other.top())
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
            this.destroyHandler()
        }
    }
}