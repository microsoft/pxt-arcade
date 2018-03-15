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
//% weight=98 color="#23c47e" icon="\uf111"
namespace sprites {
    export let allSprites: Sprite[]

    /**
     * Creates a new sprite from an image
     * @param img the image
     */
    //% blockId=spritescreate block="sprite %img"
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
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
