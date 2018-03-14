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

enum SpriteFlag {
    //% block="ghost"
    Ghost = sprites.Flag.Ghost,
    //% block="auto destroy"
    AutoDestroy = sprites.Flag.AutoDestroy
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
            for (let o of physics.engine.overlaps(this, 0)) {
                let tmp = o
                control.runInParallel(() => oh(tmp))
            }
        }
    }

    /**
     * Sets the sprite as a ghost (which does not interact with physics)
     */
    //% blockGap=8
    //% blockNamespace=Sprites
    //% blockId=spritesetsetflag block="set %sprite %flag %on"
    //% on.fieldEditor=toggleonoff
    setFlag(flag: SpriteFlag, on: boolean) {
        if (on) this.flags |= flag
        else this.flags = ~(~this.flags | flag);
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