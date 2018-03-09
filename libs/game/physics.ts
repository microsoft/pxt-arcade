class PhysicsEngine {
    constructor() {
    }

    /**
     * Adds sprite to the physics
     * @param sprite 
     */
    addSprite(sprite: Sprite) { }

    draw() {}

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
    private sprites: sprites.SpriteMap;
    constructor() {
        super();
        this.sprites = new sprites.SpriteMap();
    }

    addSprite(sprite: Sprite) {
        this.sprites.insert(sprite);
    }

    draw() {
        if(game.debug)
            this.sprites.draw();
    }

    update() {
        const dt = control.deltaTime;
        const dt2 = dt / 2;

        // update sprite positions
        for (let s of this.sprites.sprites) {
            if (s.flags & sprites.Flag.Destroyed) {
                this.sprites.remove(s);
            } else {
                const ovx = s.vx;
                const ovy = s.vy;
                s.vx += s.ax * dt
                s.vy += s.ay * dt
                s.x += (ovx + s.vx) * dt2;
                s.y += (ovy + s.vy) * dt2;
            }
        }

        // collsiion detection
        this.sprites.update();

        // update sprite positions
        for (let s of this.sprites.sprites) {
            s._update(dt)
            s._collisions();
        }

    }

    collides(sprite: Sprite): Sprite[] {
        const r = this.sprites.overlaps(sprite);
        console.log(`collides: ${r.length}`)
        return r;
    }
}

namespace physics {
    /**
     * Gets the default physics engine
     */
    export let engine = new ArcadePhysicsEngine();
}
