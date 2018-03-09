class PhysicsEngine {
    constructor() {
    }

    /**
     * Adds sprite to the physics
     * @param sprite 
     */
    addSprite(sprite: Sprite) { }

    draw() { }

    /**
     * Compute physic information before rendering
     */
    update() {
    }
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

    draw() {
        if (game.debug)
            this.map.draw();
    }

    update() {
        const dt = control.deltaTime;
        const dt2 = dt / 2;

        // remove dead sprites
        this.sprites = this.sprites.filter(sprite => !(sprite.flags & sprites.Flag.Destroyed));

        // update sprite positions
        for (let s of this.sprites) {
            const ovx = s.vx;
            const ovy = s.vy;
            s.vx += s.ax * dt
            s.vy += s.ay * dt
            s.x += (ovx + s.vx) * dt2;
            s.y += (ovy + s.vy) * dt2;
            s._update(dt)
        }

        // update physics of non-ghosts
        const colliders = this.sprites.filter(sprite => !(sprite.flags & sprites.Flag.Ghost));
        const collisioners = colliders.filter(sprite => !!sprite.collisionHandler);
        if (collisioners.length < Math.sqrt(colliders.length)) {
            this.map = undefined;
        } else {
            if (!this.map) this.map = new sprites.SpriteMap();
            this.map.update(colliders);
        }

        // update sprite collisions
        for (let s of collisioners) {
            s._collisions();
        }
    }

    collides(sprite: Sprite): Sprite[] {
        if (this.map)
            return this.map.overlaps(sprite);
        else {
            const r: Sprite[] = [];
            const n = this.sprites.length;
            for (let i = 0; i < n; ++i) {
                if (sprite.collidesWith(this.sprites[i]))
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
    export let engine = new ArcadePhysicsEngine();
}
