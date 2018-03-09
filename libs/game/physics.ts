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
        this.map = new sprites.SpriteMap();
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
        this.sprites = this.sprites.filter(sprite => !(sprite.flags * sprites.Flag.Destroyed));

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
        this.map.update(this.sprites.filter(sprite => !(sprite.flags & sprites.Flag.Ghost)));

        // update sprite positions
        for (let s of this.sprites) {
            s._update(dt)
            s._collisions();
        }
    }

    collides(sprite: Sprite): Sprite[] {
        return this.map.overlaps(sprite);
    }
}

namespace physics {
    /**
     * Gets the default physics engine
     */
    export let engine = new ArcadePhysicsEngine();
}
