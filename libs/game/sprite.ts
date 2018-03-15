/**
 * A state property from the sprite
 */
//%
enum SpriteProperty {
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
    Type,
    //% block=life
    Life
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
    life: number;

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
        this.life = -1
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
    //% blockNamespace=Sprites color="#23c47e"
    //% blockId=spritesspreiteset block="set %sprite %property to %value" blockGap=8
    public set(property: SpriteProperty, value: number) {
        switch (property) {
            case SpriteProperty.X: this.x = value; break;
            case SpriteProperty.Y: this.y = value; break;
            case SpriteProperty.VX: this.vx = value; break;
            case SpriteProperty.VY: this.vy = value; break;
            case SpriteProperty.AX: this.ax = value; break;
            case SpriteProperty.AY: this.ay = value; break;
            case SpriteProperty.Type: this.type = value; break;
            case SpriteProperty.Life: this.life = value; break;
            case SpriteProperty.Left: this.x = value + this.image.width / 2; break;
            case SpriteProperty.Right: this.x = value - this.image.width / 2; break;
            case SpriteProperty.Top: this.y = value + this.image.height / 2; break;
            case SpriteProperty.Bottom: this.y = value - this.image.height / 2; break;
        }
    }

    /**
     * Changes a property of the sprite
     * @param property the name of the property to change
     * @param value amount of change, eg: 1
     */
    //% weight=79
    //% blockNamespace=Sprites color="#23c47e"
    //% blockId=spritespsritechange block="change %sprite %property by %value" blockGap=8
    public changeBy(property: SpriteProperty, value: number) {
        this.set(property, this.get(property) + value);
    }

    /**
     * Gets a property of the sprite
     * @param property the name of the property to change
     */
    //% weight=81 blockGap=8
    //% blockNamespace=Sprites color="#23c47e"
    //% blockId=spritespspriteget block="%sprite %property"
    public get(property: SpriteProperty) {
        switch (property) {
            case SpriteProperty.X: return this.x;
            case SpriteProperty.Y: return this.y;
            case SpriteProperty.Left: return this.left;
            case SpriteProperty.Right: return this.right;
            case SpriteProperty.Top: return this.top;
            case SpriteProperty.Bottom: return this.bottom;
            case SpriteProperty.Width: return this.width;
            case SpriteProperty.Height: return this.height;
            case SpriteProperty.Y: return this.y;
            case SpriteProperty.VX: return this.vx;
            case SpriteProperty.VY: return this.vy;
            case SpriteProperty.AX: return this.ax;
            case SpriteProperty.AY: return this.ay;
            case SpriteProperty.Type: return this.type;
            case SpriteProperty.Life: return this.life;
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
    set left(value: number) {
        this.x = value + (this.width >> 1);
    }
    get right() {
        return this.left + this.width
    }
    set right(value: number) {
        this.x = value - (this.width >> 1);
    }
    get top() {
        return this.y - (this.height >> 1)
    }
    set top(value: number) {
        this.y = value + (this.height >> 1);
    }
    get bottom() {
        return this.top + this.height
    }
    set bottom(value: number) {
        this.y = value - (this.height >> 1);
    }
    __draw() {
        screen.drawTransparentImage(this.image, this.left, this.top)
        if (game.debug)
            screen.drawRect(this.left, this.top, this.width, this.height, 3);
    }

    __update(dt: number) {
        if (this.animation)
            this.animation.update(this)
        if (this.life > 0) {
            this.life--;
            if (this.life <= 0)
                this.destroy();
        }
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
    //% blockNamespace=Sprites color="#23c47e"
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
    //% blockNamespace=Sprites color="#23c47e"
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
    //% blockNamespace=Sprites color="#23c47e"
    //% blockId=spriteonoverlap block="on %sprite overlap with"
    onOverlap(handler: (other: Sprite) => void) {
        this.overlapHandler = handler;
    }

    /**
     * Register code to run when sprite is destroyed
     * @param handler
     */
    //% weight=9 blockGap=8
    //% blockNamespace=Sprites color="#23c47e"
    //% blockId=spriteondestroy block="on %sprite destroyed"
    onDestroyed(handler: () => void) {
        this.destroyHandler = handler
    }

    /**
     * Destroys the sprite
     */
    //% weight=10 blockGap=8
    //% blockNamespace=Sprites color="#23c47e"
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