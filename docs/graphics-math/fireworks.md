# Fireworks!

Enjoy the fireworks! Watch them being launched in the background, and even
create some of your own by pressing buttons.

```typescript
/**
 * particle effects
 *
 * The particle effects you see in arcade are formed through the combination
 * of several objects:
 *
 * **Particles** are the individual elements you see on the screen -
 * they contain a small amount of information that conveys where and how they are represented.
 *
 * **ParticleFactories** describe how the particles are created
 * and how they should be be displayed on the screen. This sets things like initial speed,
 * color, and how long the particle survives
 *
 * **ParticleSources** control when Particles are allowed to be created,
 * they apply updates to the particles, they display them to the screen,
 * and make sure the state is clean (e.g. getting rid of particles when their lifespan runs out).
 * They use ParticleFactories to handle the creation of the sprites involved, so a single source
 * can have a wide variety of actual behaviors by attaching different types of factories to it.
 * Most effects in Arcade use the standard particle source, but some use slightly modified versions
 * to add special behaviors. In particular, the Fire effect has a special source that makes
 * particles move toward each other to get a flame-like 'wave'. Bubbles though, have a source
 * that makes the individual bubbles oscillate left and right, and change state (grow bigger / smaller)
 *
 * Finally, **ParticleEffects** create a combination of a ParticleSource and a ParticleFactory,
 * which display on the screen - typically attached to a sprite or other screen element.
 *
 * Many of these are derived from particle effects that have already been created.
 * If you're interested, you can find those effects in
 * pxt-common-packages/libs/game/particleeffects.ts,
 * with some factories defined in
 * pxt-common-packages/libs/game/particlefactories.ts,
 * and other logic (e.g. the ParticleSources) defined in
 * pxt-common-packages/libs/game/particles.ts
 */
const fireworkEffects: effects.ParticleEffect[] = [
    /** small spinner effect **/
    createEffect(
        1000,
        300,
        () => {
            /**
             * this extends the radial factory used in the warm radial, cool radial,
             * and halo effects to shorten the lifespan of the particles, so they will
             * form a smaller radius
             */
            class ShortRadial extends particles.RadialFactory {
                createParticle(anchor: particles.ParticleAnchor) {
                    const p = super.createParticle(anchor);
                    p.lifespan = randint(200, 450);
                    return p;
                }
            }

            return new ShortRadial(
                2,
                50,
                5,
                randomPalette(randint(2, 5))
            );
        }
    ),
    /** Brocade: forms an 'umbrella like' pattern. I started building this off of the 'fountain' particle **/
    new effects.ParticleEffect(600, 500, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        class BrocadeFactory extends particles.SprayFactory {
            galois: Math.FastRandom;
            palette: number[];

            constructor() {
                super(110, 180, 359);
                this.galois = new Math.FastRandom();
                this.palette = randomPalette(2);
            }

            createParticle(anchor: particles.ParticleAnchor) {
                const p = super.createParticle(anchor);

                if (this.galois.percentChance(25)) {
                    p.color = this.palette[0];
                    p.lifespan = randint(50, 150);
                } else {
                    p.color = this.palette[1];
                    p.lifespan = randint(50, 350);
                }
                return p;
            }

            drawParticle(p: particles.Particle, x: Fx8, y: Fx8) {
                // always just fill a pixel if color is first color, otherwise single pixel 3/4 the time
                if (p.color == this.palette[0] || this.galois.percentChance(85)) {
                    screen.setPixel(Fx.toInt(x), Fx.toInt(y), p.color);
                } else {
                    const toPrint = this.galois.randomBool()
                        ? img`
                            . 1 .
                            1 1 1
                            . 1 .
                        `
                        : img`
                            1 . 1
                            . 1 .
                            1 . 1
                        `;
                    toPrint.replace(0x1, p.color);
                    screen.drawTransparentImage(
                        toPrint,
                        Fx.toInt(x),
                        Fx.toInt(y)
                    );
                }
            }
        }

        const factory = new BrocadeFactory();
        const source = new particles.ParticleSource(anchor, particlesPerSecond, factory);
        source.setAcceleration(0, 600);
        return source;
    }),
    /** Sparkler like effect**/
    createEffect(
        600,
        600,
        () => {
            class SparklerFactory extends particles.SprayFactory {
                galois: Math.FastRandom;
                palette: number[];

                constructor() {
                    super(50, 180, 359);
                    this.galois = new Math.FastRandom();
                    this.palette = randomPalette(2);
                }

                createParticle(anchor: particles.ParticleAnchor) {
                    const p = super.createParticle(anchor);
                    p.data = randint(0, 10);

                    if (this.galois.percentChance(25)) {
                        p.color = this.palette[0];
                        p.lifespan = randint(250, 450);
                    } else {
                        p.color = this.palette[2];
                        p.lifespan = randint(500, 750);
                    }

                    return p;
                }

                drawParticle(p: particles.Particle, x: Fx8, y: Fx8) {
                    ++p.data;
                    // this condition will make the particles flicker;
                    // p.data >> 1 is equivalent to dividing by 2,
                    // and % 2 evaluates to 1 or 0 (effectively, odd or even)
                    // this condition then executes if it evaluates to 1,
                    // which javascript considers to be 'truthy'
                    if ((p.data >> 1) % 2) {
                        // mostly print single dots, but potentially also print small shapes
                        const toPrint = this.galois.percentChance(90)
                            ? img`1`
                            : this.galois.randomBool()
                                ? img`
                                    . 1 .
                                    1 . 1
                                    . 1 .
                                `
                                : img`
                                    1 . 1
                                    . 1 .
                                `;
                        toPrint.replace(1, p.color);
                        screen.drawTransparentImage(
                            toPrint,
                            Fx.toInt(x),
                            Fx.toInt(y)
                        );
                    }
                }
            }

            return new SparklerFactory();
        }
    ),
    /** Crossette: straight lines that fly straight out, with small 'branches' **/
    createEffect(
        100,
        600,
        () => {
            class CrossetteFactory extends particles.SprayFactory {
                galois: Math.FastRandom;
                anchor: particles.ParticleAnchor;
                particlesRemaining: number
                palette: number[];

                constructor() {
                    super(40, 180, 359);
                    this.galois = new Math.FastRandom();
                    this.particlesRemaining = 8;
                    this.palette = randomPalette(2);
                }

                createParticle(anchor: particles.ParticleAnchor) {
                    if (--this.particlesRemaining < 0) {
                        return undefined;
                    }
                    if (!this.anchor)
                        this.anchor = anchor;
                    const p = super.createParticle(anchor);
                    const particleRateMultiple = Fx8(randint(60, 100) / 100);
                    p.vx = Fx.mul(p.vx, particleRateMultiple);
                    p.vy = Fx.mul(p.vy, particleRateMultiple);
                    p.color = this.palette[this.galois.randomRange(0, 1)];;

                    p.lifespan = randint(600, 800);
                    return p;
                }

                drawParticle(p: particles.Particle, x: Fx8, y: Fx8) {
                    // double line with offset x to make the current position of the particle
                    // slightly 'thicker'
                    for (let i = 0; i < 2; i++) {
                        screen.drawLine(
                            Fx.toInt(x) + i,
                            Fx.toInt(y),
                            this.anchor.x,
                            this.anchor.y,
                            p.color
                        );
                    }
                    if (this.galois.randomBool()) {
                        screen.drawTransparentImage(
                            this.galois.randomBool()
                                ? img`
                                    4 . 4
                                    . 4 .
                                    4 . 4
                                `
                                : img`
                                    . 4 .
                                    4 . 4
                                    . 4 .
                                `,
                            Fx.toInt(x) - 1,
                            Fx.toInt(y) - 1
                        );
                    }
                }
            }

            return new CrossetteFactory();
        }
    ),
]

/**
 * This is copied from my original definition for it in
 * pxt-common-packages/libs/game/particleeffects.ts, as that isn't currently exported.
 *
 * It is used to wrap simple particle factories that are created with a standard source
 * into effects that can be easily used
 */
function createEffect(
    defaultParticlesPerSecond: number,
    defaultLifespan: number,
    factoryFactory: (anchor?: particles.ParticleAnchor) => particles.ParticleFactory
): effects.ParticleEffect {
    return new effects.ParticleEffect(defaultParticlesPerSecond, defaultLifespan,
        (anchor: particles.ParticleAnchor, pps: number) =>
            new particles.ParticleSource(anchor, pps, factoryFactory()));
}

// stars that don't twinkle - focus should be on fireworks, not the random
// changes in the background
new effects.ScreenEffect(
    2,
    5,
    5000,
    function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        class NoTwinkleStarFactory extends particles.StarFactory {
            constructor() {
                super();
                this.possibleColors = [0xE, 0xB, 0xC, 0xD];
            }

            drawParticle(p: particles.Particle, x: Fx8, y: Fx8) {
                const rest = 0x7FFF;
                const selected = this.images[rest & p.data].clone();
                selected.replace(0x1, p.color);
                screen.drawTransparentImage(
                    selected,
                    Fx.toInt(x),
                    Fx.toInt(y)
                );
            }
        }
        const factory = new NoTwinkleStarFactory();
        return new particles.ParticleSource(
            anchor,
            particlesPerSecond,
            new NoTwinkleStarFactory()
        );
    }
).startScreenEffect();

const fireworkTrail = createEffect(
    25,
    50,
    a => {
        class FireworkTrail extends particles.ParticleFactory {
            constructor() {
                super();
            }

            createParticle(anchor: particles.ParticleAnchor) {
                const p = super.createParticle(anchor);
                p.vx = Fx.neg(Fx8(anchor.vx + randint(-10, 10)));
                p.vy = Fx.neg(Fx8(anchor.vy >> 1));
                p.lifespan = randint(50, 500);
                p.color = Math.percentChance(90) ? 0xE : randint(0x1, 0xD);
                return p;
            }

            drawParticle(p: particles.Particle, x: Fx8, y: Fx8) {
                screen.setPixel(
                    Fx.toInt(x),
                    Fx.toInt(y),
                    p.color
                );
            }
        }
        return new FireworkTrail;
    }
);

// disable the menu button - menus shouldn't get in the way of the demonstration!
controller.menu.onEvent(ControllerButtonEvent.Pressed, undefined);
controller.anyButton.onEvent(
    ControllerButtonEvent.Pressed,
    tryToFire
);

const TIMEOUT = 200;
let lastFired = game.runtime();
function tryToFire() {
    const time = game.runtime();
    if (lastFired + TIMEOUT < time) {
        const vx = randint(-35, 35);
        const firework = sprites.createProjectileFromSide(
            img`
                e
                e
            `,
            vx,
            randint(-150, -125)
        );

        if (!firework.vx || Math.percentChance(70)) {
            firework.x = randint(25, screen.width - 25);
        } else {
            firework.y -= 20;
            firework.vy *= .8;
            if (Math.abs(firework.vx) < 10) {
                firework.vx = randint(30, 40) * (firework.vx < 0 ? -1 : 1);
            } else {
                firework.vx *= 2;
            }
        }

        firework.startEffect(fireworkTrail);
        firework.ay = 100;
        firework.lifespan = randint(800, 1200);
        lastFired = time;
    }
}

game.onUpdate(function () {
    if (lastFired + (3 * TIMEOUT) < game.runtime()) {
        // auto fire if there hasn't been any for a while
        tryToFire();
    }
});


sprites.onDestroyed(SpriteKind.Projectile, s => {
    Math.pickRandom(fireworkEffects).start(s, 500);
});

/**
 * Color stuff
 *
 * this uses the pxt-color extension to change the color palette at runtime.
 * To make all the fireworks unique, this generates a random palette of pastel-ish colors,
 * with the exception of 0xE (set to white) and 0xF (left as black).
 * It also continuously changes the colors from 0x1 to 0xA, fading between different palettes
 * for those colors at random.
 */
const p = color.currentPalette();
p.setColor(0xB, generatePastel().hexValue());
p.setColor(0xC, generatePastel().hexValue());
p.setColor(0xD, generatePastel().hexValue());
p.setColor(0xE, 0xFFFFFF);
color.setPalette(p);

forever(() => {
    new color.Fade()
        .mapEndHSL(
            generatePastel,
            0x1,
            0xA
        )
        .startUntilDone(500);
})

function generatePastel() {
    // generate a random pastel-adjacent color:
    // pastels have 100% saturation and high luminosity ('brightness')
    return new color.HSL(
        randint(0, 359),
        1,
        randint(75, 95) / 100
    );
}

/**
 * Generates a value to be used to specify the colors for each firework,
 * so that the colors aren't always the same between fireworks that run
 * at the same time (value between 1 and 8, so there will always be )
 */
function randomPalette(len: number) {
    if (len > 8) {
        len = 8;
    }
    const palette: number[] = [];
    for (let i = 0; i < len; i++) {
        while (palette.length == i) {
            const selected = randint(1, 0xA);
            if (palette.indexOf(selected) < 0) {
                palette.push(selected);
            }
        }
    }

    return palette;
}
```

```package
pxt-color=github:jwunderl/pxt-color#v0.0.29
```
