/*
Frame handlers:
 10 - physics and collisions
 20 - frame()
 60 - screen/sprite background
 90 - drawing sprites
 95 - drawing score
100 - loops.menu()
200 - screen refresh
*/

/**
 * Sprites on screen
 */
//% weight=98 color=#12592A icon="\uf111"
namespace sprites {
    export let allSprites: Sprite[]

    /**
     * Creates a new sprite from an image
     * @param img the iamge
     */
    //% _blockId=spritescreate block="create %img"
    export function create(img: Image): Sprite {
        game.init()
        let spr = new Sprite(img)
        allSprites.push(spr)
        spr.id = allSprites.length
        physics.engine.addSprite(spr);
        return spr
    }

    /**
     * Creates a sprite from a sequence of images
     * @param imgs an array of images
     */
    //% _blockId=spritescreateanimation block="create animated %images"
    export function createWithAnimation(imgs: Image[]) {
        let s = create(imgs[0])
        s.animation = new SpriteAnimation(imgs)
        return s
    }

    /**
     * Create a new sprite with given speed, and place it at the edge of the screen so it moves towards the middle. 
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    export function createProjectile(img: Image, vx: number, vy: number) {
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

        s.flags |= sprites.Flag.AutoDestroy;

        return s
    }

    export enum Flag {
        Ghost = 1, // doesn't collide with other sprites
        Destroyed = 2,
        AutoDestroy = 4, // remove the sprite when no longer visible
    }
}

//%
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

/**
 * A state property from the sprite
 */
//%
enum SpriteWriteProperty {
    //% block=x
    X,
    //% block=y
    Y,
    //% block="vx"
    VX,
    //% block="vy"
    VY,
    //% block="ax"
    AX,
    //% block="ay"
    AY,
    //% block="type"
    Type
}

/**
 * A state property from the sprite
 */
//%
enum SpriteReadProperty {
    //% block=x
    X,
    //% block=y
    Y,
    //% block="vx"
    VX,
    //% block="vy"
    VY,
    //% block="ax"
    AX,
    //% block="ay"
    AY,
    //% block=left
    Left,
    //% block=right
    Right,
    //% block=top
    Top,
    //% block=bottom
    Bottom,
    //% block=width
    Width,
    //% block=height
    Height,
    //% block=type
    Type
}

/** 
 * A sprite on screem 
 **/
//%
class Sprite {
    x: number
    y: number
    _z: number
    vx: number
    vy: number
    ax: number
    ay: number
    image: Image
    flags: number
    id: number
    type: number

    animation: SpriteAnimation

    overlapHandler: (other: Sprite) => void;
    private wallHandler: () => void;
    private destroyHandler: () => void;

    constructor(img: Image) {
        this.x = screen.width >> 1
        this.y = screen.height >> 1
        this._z = 0
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.flags = 0
        this.image = img
        this.type = 0
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        if (value != this._z) {
            this._z = value;
            game.flags |= game.Flag.NeedsSorting;
        }
    }

    /**
     * Sets a property of the sprite
     * @param property the name of the property to change
     * @param the updated value
     */
    //% weight=80 blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spritesspreiteset block="set %sprite %property to %value" blockGap=8
    public set(property: SpriteWriteProperty, value: number) {
        switch (property) {
            case SpriteWriteProperty.X: this.x = value; break;
            case SpriteWriteProperty.Y: this.y = value; break;
            case SpriteWriteProperty.VX: this.vx = value; break;
            case SpriteWriteProperty.VY: this.vy = value; break;
            case SpriteWriteProperty.AX: this.ax = value; break;
            case SpriteWriteProperty.AY: this.ay = value; break;
            case SpriteWriteProperty.Type: this.type = value; break;
        }
    }

    /**
     * Changes a property of the sprite
     * @param property the name of the property to change
     * @param value amount of change, eg: 1
     */
    //% weight=79
    //% blockNamespace=Sprites
    //% blockId=spritespsritechange block="change %sprite %property by %value" blockGap=8
    public changeBy(property: SpriteWriteProperty, value: number) {
        switch (property) {
            case SpriteWriteProperty.X: this.x += value; break;
            case SpriteWriteProperty.Y: this.y += value; break;
            case SpriteWriteProperty.VX: this.vx += value; break;
            case SpriteWriteProperty.VY: this.vy += value; break;
            case SpriteWriteProperty.AX: this.ax += value; break;
            case SpriteWriteProperty.AY: this.ay += value; break;
            case SpriteWriteProperty.Type: this.type += value; break;
        }
    }

    /**
     * Gets a property of the sprite
     * @param property the name of the property to change
     */
    //% weight=81 blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spritespspriteget block="%sprite %property"
    public get(property: SpriteReadProperty) {
        switch (property) {
            case SpriteReadProperty.X: return this.x;
            case SpriteReadProperty.Y: return this.y;
            case SpriteReadProperty.Left: return this.left;
            case SpriteReadProperty.Right: return this.right;
            case SpriteReadProperty.Top: return this.top;
            case SpriteReadProperty.Bottom: return this.bottom;
            case SpriteReadProperty.Width: return this.width;
            case SpriteReadProperty.Height: return this.height;
            case SpriteReadProperty.Y: return this.y;
            case SpriteReadProperty.VX: return this.vx;
            case SpriteReadProperty.VY: return this.vy;
            case SpriteReadProperty.AX: return this.ax;
            case SpriteReadProperty.AY: return this.ay;
            case SpriteReadProperty.Type: return this.type;
            default: return 0;
        }
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

    __draw() {
        screen.drawTransparentImage(this.image, this.left, this.top)
        if (game.debug)
            screen.drawRect(this.left, this.top, this.width, this.height, 3);
    }

    __update(dt: number) {
        if (this.animation)
            this.animation.update(this)
        if (this.flags & sprites.Flag.AutoDestroy) {
            if (this.right < 0 || this.bottom < 0 ||
                this.left > screen.width ||
                this.top > screen.height) {
                this.destroy()
            }
        }
    }

    __computeOverlaps() {
        const oh = this.overlapHandler;
        if (oh) {
            for (let o of physics.engine.collides(this, 0)) {
                let tmp = o
                control.runInParallel(() => oh(tmp))
            }
        }

        if (this.wallHandler) {
            if (
                0 <= this.x && this.x < screen.width &&
                0 <= this.y && this.y < screen.height) {
                // OK
            } else {
                control.runInParallel(this.wallHandler)
            }
        }

    }

    /**
     * Sets the sprite as a ghost (which does not interact with physics)
     */
    //% blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spritesetghost block="set %sprite ghost"
    setGhost() {
        this.flags |= sprites.Flag.Ghost
    }

    /**
     * Tests if a sprite overlaps with another
     * @param other 
     */
    //% blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spriteoverlapswith block="%sprite overlaps with %other"
    overlapsWith(other: Sprite) {
        if (other == this) return false;
        if (this.flags & sprites.Flag.Ghost)
            return false
        if (other.flags & sprites.Flag.Ghost)
            return false
        return other.image.overlapsWith(this.image, this.left - other.left, this.top - other.top)
    }

    /**
     * Registers code when the sprite overlaps with another sprite
     * @param spriteType sprite type to match
     * @param handler 
     */
    //% blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spriteonoverlap block="on %sprite overlap with"
    onOverlap(handler: (other: Sprite) => void) {
        this.overlapHandler = handler;
    }

    onHitWall(handler: () => void) {
        this.wallHandler = handler
    }

    /**
     * Register code to run when sprite is destroyed
     * @param handler 
     */
    //% weight=9 blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spriteondestroy block="on %sprite destroyed"
    onDestroyed(handler: () => void) {
        this.destroyHandler = handler
    }

    /**
     * Destroys the sprite
     */
    //% weight=10 blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spritedestroy block="destroy %sprite"
    destroy() {
        if (this.flags & sprites.Flag.Destroyed)
            return
        this.flags |= sprites.Flag.Destroyed
        sprites.allSprites.removeElement(this);
        physics.engine.removeSprite(this);
        if (this.destroyHandler) {
            control.runInParallel(this.destroyHandler)
        }
    }

    toString() {
        return `${this.id}(${this.x},${this.y})->(${this.vx},${this.vy})`;
    }
}