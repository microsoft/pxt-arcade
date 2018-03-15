class PhysicsEngine {
    constructor() {
    }

    /**
     * Adds sprite to the physics
     * @param sprite 
     */
    addSprite(sprite: Sprite) { }

    removeSprite(sprite: Sprite) { }

    draw() { }

    /**
     * Compute physic information before rendering
     */
    update(dt: number) { }

    overlaps(sprite: Sprite, spriteType: number): Sprite[] { return []; }
}

/**
 * A physics engine that does simple AABB bounding box check
 */
class ArcadePhysicsEngine extends PhysicsEngine {
    private sprites: Sprite[];
    private map: sprites.SpriteMap;

    constructor() {
        super();
        this.sprites = [];
    }

    addSprite(sprite: Sprite) {
        this.sprites.push(sprite);
    }

    removeSprite(sprite: Sprite) {
        this.sprites.removeElement(sprite);
    }

    draw() {
        if (this.map)
            this.map.draw();
    }

    update(dt: number) {
        const dt2 = dt / 2;

        // update sprite positions
        for (let s of this.sprites) {
            const ovx = s.vx;
            const ovy = s.vy;
            s.vx += s.ax * dt
            s.vy += s.ay * dt
            s.x += (ovx + s.vx) * dt2;
            s.y += (ovy + s.vy) * dt2;
        }

        // update physics of non-ghosts
        const colliders = this.sprites.filter(sprite => !(sprite.flags & sprites.Flag.Ghost));
        // collect any sprite with a collection handler
        const collisioners = colliders.filter(sprite => !!sprite.overlapHandler);
        // for low number of sprites, just iterate through them
        if (collisioners.length < Math.sqrt(colliders.length)) {
            // not enough sprite, just brute force it
            this.map = undefined;
        } else {
            if (!this.map) this.map = new sprites.SpriteMap();
            this.map.update(colliders);
        }

        // queue collision handlers
        for (const sprite of collisioners)
            sprite.__computeOverlaps();
    }

    /**
     * Returns sprites that overlap with the given sprite. If type is non-zero, also filter by type.
     * @param sprite 
     * @param spriteType 
     */
    overlaps(sprite: Sprite, spriteType: number): Sprite[] {
        if (this.map)
            return this.map.overlaps(sprite, spriteType);
        else {
            const r: Sprite[] = [];
            const n = this.sprites.length;
            for (let i = 0; i < n; ++i) {
                if ((!spriteType || spriteType == this.sprites[i].type) && sprite.overlapsWith(this.sprites[i]))
                    r.push(this.sprites[i]);
            }
            return r;
        }
    }
}

namespace physics {
    /**
     * Gets the default physics engine
     */
    export let engine: PhysicsEngine = new ArcadePhysicsEngine();
}
