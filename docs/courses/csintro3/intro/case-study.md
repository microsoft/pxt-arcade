# Introduction: Case Study

This course is about learning to program through making games using JavaScript.

The lessons are typically based on very short pieces of code, to teach the concepts
in bite-sized snippets.
These short snippets allow us to focus on the new behaviors,
but it will not always be obvious how the different snippets can be integrated
into a final product.

To make sure this goal stays in sight throughout the course,
most lessons include a **Case Study** section at the end,
with small tasks that will be incorporated into the game.

Following these sections throughout the course will give experience turning a rough concept -
of a game with asteroids flying across the screen at random -
into a complete, full featured game.

The first snippets below show the beginning and end of this process.
The initial code is what you will start with, and add to each lesson.

Below that snippet is an example of the final product,
including many of the "Challenge" features.
If you get stuck when implementing any of the sections,
feel free to take a peek at the solution below the problem,
or return here and look at the final goal.

The point of the case study is to learn how the code works together while building
up a larger game, not as a challenge for each individual topic.

## Initial Code

```typescript
enum SpriteKind {
    Asteroid,
    Projectile
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = Math.randomRange(edge, screen.width - edge);
        sprite.y = 0;
    }
}
```

## First few additions:

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy,
    Asteroid,
    Laser
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = Math.randomRange(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let player = sprites.create(img`
    . . . . 8 . . . .
    . . . 8 8 8 . . .
    . . . 8 1 8 . . .
    . . 2 8 1 8 2 . .
    . 2 2 8 8 8 2 2 .
    2 2 2 8 8 8 2 2 2
    . . . 5 . 5 . . .
`, SpriteKind.Player);
player.setFlag(SpriteFlag.StayInScreen, true);

controller.moveSprite(player, 80, 30);
player.y = screen.height - 20;
```

## Final Result

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy,
    PowerUp,
    Asteroid,
    Laser,
    Star,
    EnemyLaser,
    BrokenAsteroid,
    PowerUpTrail
}

enum PowerUpType {
    Health,
    Score,
    Attack,
    MaxEnergy,
    Ghost
}

namespace spritesheet {
    export let asteroids: Image[] = [
        sprites.space.spaceAsteroid0,
        sprites.space.spaceAsteroid1,
        sprites.space.spaceAsteroid2
    ];

    export let brokenAsteroids: Image[] = [
        sprites.space.spaceSmallAsteroid0,
        sprites.space.spaceSmallAsteroid1,
        sprites.space.spaceSmallAsteroid2,
        sprites.space.spaceSmallAsteroid3,
        sprites.space.spaceSmallAsteroid4,
        sprites.space.spaceSmallAsteroid5
    ];

    export let laser: Image = img`
        4
        4
    `;

    export let player: Image[] = [
        img`
            8 8 . . . . . .
            8 1 8 . . . . .
            . 8 1 8 2 2 2 2
            . . 8 8 8 2 2 .
            . . 2 8 8 8 5 .
            . . 2 2 8 . . .
            . . 2 2 5 . . .
            . . 2 . . . . .
        `, img`
            . . . . 8 . . . .
            . . . 8 8 8 . . .
            . . . 8 1 8 . . .
            . . 2 8 1 8 2 . .
            . 2 2 8 8 8 2 2 .
            2 2 2 8 8 8 2 2 2
            . . . 5 . 5 . . .
        `
    ];

    player.push(player[0].clone());
    player[2].flipX();

    export let enemy: Image[] = [img`
        5 5 . . . . 5 5
        7 7 7 7 7 7 7 7
        . 9 9 7 7 9 9 .
        . 7 7 7 7 7 7 .
        . . . 9 9 . . .
    `];

    export let enemyLaser = img`
        7
        7
    `;

    export let powerUp: Image[] = [];
    powerUp[PowerUpType.Health] = img`
        . . . 7 7 7 7 7 . . .
        . . 7 7 7 7 7 7 7 . .
        . 7 7 2 7 7 7 2 7 7 .
        7 7 7 2 7 7 7 2 7 7 7
        7 7 7 2 7 7 7 2 7 7 7
        7 7 7 2 2 2 2 2 7 7 7
        7 7 7 2 7 7 7 2 7 7 7
        7 7 7 2 7 7 7 2 7 7 7
        . 7 7 2 7 7 7 2 7 7 .
        . . 7 7 7 7 7 7 7 . .
        . . . 7 7 7 7 7 . . .
    `;
    powerUp[PowerUpType.Score] = img`
        . . . 5 5 5 5 5 . . .
        . . 5 5 5 f 5 5 5 . .
        . 5 5 5 f f f 5 5 5 .
        5 5 5 f 5 f 5 f 5 5 5
        5 5 5 5 f 5 5 5 5 5 5
        5 5 5 5 5 f 5 5 5 5 5
        5 5 5 5 5 5 f 5 5 5 5
        5 5 5 f 5 f 5 f 5 5 5
        . 5 5 5 f f f 5 5 5 .
        . . 5 5 5 f 5 5 5 . .
        . . . 5 5 5 5 5 . . .
    `;
    powerUp[PowerUpType.Attack] = img`
        . . . 6 6 6 6 6 . . .
        . . 6 6 6 6 6 6 6 . .
        . 6 6 1 6 6 6 1 6 6 .
        6 6 1 1 1 6 1 1 1 6 6
        6 1 6 1 6 1 6 1 6 1 6
        6 6 6 1 6 6 6 1 6 6 6
        6 6 6 1 6 6 6 1 6 6 6
        6 6 6 1 6 6 6 1 6 6 6
        . 6 6 1 6 6 6 1 6 6 .
        . . 6 6 6 6 6 6 6 . .
        . . . 6 6 6 6 6 . . .
    `;
    powerUp[PowerUpType.MaxEnergy] = img`
        . . . c c c c c . . . 
        . . c c c c c c c . . 
        . c c b b b b b c c . 
        c c c b c c c c c c c 
        c c c b c c c c c c c 
        c c c b b b b c c c c 
        c c c b c c c c c c c 
        c c c b c c c c c c c 
        . c c b b b b b c c . 
        . . c c c c c c c . . 
        . . . c c c c c . . . 
    `;
    powerUp[PowerUpType.Ghost] = img`
        . . . b b b b b . . . 
        . . b b b b b b b . . 
        . b b 1 1 1 1 1 b b . 
        b b b 1 f 1 f 1 b b b 
        b b b 1 f 1 f 1 b b b 
        b b b 1 1 1 1 1 b b b 
        b b b 1 1 1 1 1 b b b 
        b b 1 1 1 1 1 1 1 b b 
        . b b b b b b b b b . 
        . . b b b b b b b . . 
        . . . b b b b b . . . 
    `;

    export let stars: Image[] = [
        img`
            1 1
        `,
        img`
            1
        `,
        img`
            3 . . 1
        `,
        img`
            3 .
            . .
            . .
            . 1
        `
    ];
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        misc.setPosition(sprite, 10);
        setMotion(sprite);
    });

    sprites.onDestroyed(SpriteKind.Asteroid, function (sprite: Sprite) {
        info.changeScoreBy(1);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }
}

namespace stars {
    sprites.onCreated(SpriteKind.Star, function (sprite: Sprite) {
        misc.setPosition(sprite);
        setMotion(sprite);
        sprite.setFlag(SpriteFlag.Ghost, true);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        sprite.z = -1;
    });

    game.onUpdateInterval(50, function () {
        if (Math.percentChance(33)) {
            sprites.create(Math.pickRandom(spritesheet.stars), SpriteKind.Star);
        }
    });

    fillScreen();

    function setMotion(star: Sprite) {
        star.vy = 20;
    }

    function fillScreen() {
        for (let row = 0; row < screen.height / 10; row++) {
            sprites.create(Math.pickRandom(spritesheet.stars), SpriteKind.Star);
        }

        for (let star of sprites.allOfKind(SpriteKind.Star)) {
            star.y = Math.randomRange(0, screen.height);
        }
    }
}

namespace powerups {
    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        misc.setPosition(sprite, 10);
        setMotion(sprite);
    });

    sprites.onDestroyed(SpriteKind.PowerUp, function (sprite: Sprite) {
        ship.player.say("missed it :(", 500);
    });

    function setMotion(powerUp: Sprite) {
        powerUp.vy = 60;
    }

    export function getType(powerUp: Sprite): number {
        return spritesheet.powerUp.indexOf(powerUp.image);
    }

    game.onUpdateInterval(1000, function () {
        if (Math.percentChance(33)) {
            sprites.create(Math.pickRandom(spritesheet.powerUp), SpriteKind.PowerUp);
        }
    });

    game.onUpdate(function () {
        for (let powerUp of sprites.allOfKind(SpriteKind.PowerUp)) {
            if (Math.percentChance(60)) {
                let trail = sprites.createProjectile(img`1`, 0, 0, SpriteKind.PowerUpTrail, powerUp);
                trail.lifespan = 300 + Math.randomRange(-150, 150);
                trail.x += Math.randomRange(-5, 5);
                trail.setFlag(SpriteFlag.Ghost, true);
                trail.image.fill(Math.randomRange(1, 14));
                trail.z = -1;
            }
        }
    });
}

namespace enemy {
    sprites.onCreated(SpriteKind.Enemy, function (sprite: Sprite) {
        misc.setPosition(sprite, 10);
        setMotion(sprite);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
    });

    function setMotion(enemy: Sprite) {
        enemy.vy = 15;
    }

    sprites.onDestroyed(SpriteKind.Enemy, function (sprite: Sprite) {
        info.changeScoreBy(3);
    });

    game.onUpdateInterval(1500, function () {
        if (Math.percentChance(40)) {
            sprites.create(Math.pickRandom(spritesheet.enemy), SpriteKind.Enemy);
        }
    });

    game.onUpdate(function () {
        for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
            let diff: number = enemy.x - ship.player.x;
            if (diff < -2) {
                enemy.vx = 8;
            } else if (diff > 2) {
                enemy.vx = -8;
            } else {
                enemy.vx = 0;
            }
            if (Math.percentChance(4)) {
                sprites.createProjectile(spritesheet.enemyLaser, 0, 45, SpriteKind.EnemyLaser, enemy);
            }
        }
    });
}

namespace ship {
    export let player = sprites.create(spritesheet.player[1], SpriteKind.Player);
    player.setFlag(SpriteFlag.StayInScreen, true);

    info.setLife(3);
    info.setScore(0);

    controller.moveSprite(player, 80, 30);
    player.y = screen.height - 20;

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (state.charge > 0) {
            sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            state.charge--;
        }
    });

    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        if (state.boostCharge > 0) {
            let left = sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            let right = sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            left.x -= 2;
            right.x += 2;
            state.boostCharge--;
        } else {
            player.say("no more boost", 500);
        }
    });

    game.onUpdate(function () {
        if (player.vx < -1) {
            player.setImage(spritesheet.player[0]);
        } else if (player.vx <= 1) {
            player.setImage(spritesheet.player[1]);
        } else {
            player.setImage(spritesheet.player[2]);
        }
    });
}

namespace overlapevents {
    let powerUpStrings: string[] = [];
    powerUpStrings[PowerUpType.Health] = "health!";
    powerUpStrings[PowerUpType.Score] = "score!";
    powerUpStrings[PowerUpType.Attack] = "laser boost!";
    powerUpStrings[PowerUpType.MaxEnergy] = "more energy!";
    powerUpStrings[PowerUpType.Ghost] = "ghost mode!";

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        info.changeScoreBy(-1);
        otherSprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Player, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        info.changeScoreBy(-1);
        otherSprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeScoreBy(1);
        otherSprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        if (powerUp != -1) {
            ship.player.say(powerUpStrings[powerUp], 500);
        }
        if (powerUp == PowerUpType.Health) {
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            info.changeScoreBy(15);
        } else if (powerUp == PowerUpType.Attack) {
            state.boostCharge = Math.min(state.boostCharge + 5, 20);
        } else if (powerUp == PowerUpType.MaxEnergy) {
            state.maxCharge++;
            state.charge++;
        } else if (powerUp == PowerUpType.Ghost) {
            misc.tempGhost(ship.player, 1000);
        }
    });

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-2);
        info.changeScoreBy(-3);
        otherSprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    });

    sprites.onOverlap(SpriteKind.Asteroid, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        sprite.setFlag(SpriteFlag.Ghost, true);
        let left = sprites.createProjectile(Math.pickRandom(spritesheet.brokenAsteroids),
            Math.randomRange(-20, -10),
            sprite.vy * (1 + Math.random()),
            SpriteKind.BrokenAsteroid,
            sprite);
        let right = sprites.createProjectile(Math.pickRandom(spritesheet.brokenAsteroids),
            Math.randomRange(10, 20),
            sprite.vy * (1 + Math.random()),
            SpriteKind.BrokenAsteroid,
            sprite);
        sprite.destroy();
        otherSprite.destroy();
    });
}

namespace state {
    info.onLifeZero(function () {
        let deduction: number = Math.min(50, info.score());
        if (game.ask("Continue?", "Cost: " + deduction + " points")) {
            info.changeScoreBy(-deduction);
            info.setLife(2);
            misc.tempGhost(ship.player, 350);
        } else {
            game.over();
        }
    });

    export let maxCharge: number = 5;
    export let charge: number = maxCharge;
    export let boostCharge: number = 0;

    let chargeBar = sprites.create(image.create(7, 30));

    chargeBar.z = 50;
    chargeBar.setFlag(SpriteFlag.Ghost, true);
    chargeBar.right = screen.width - 2;
    chargeBar.bottom = screen.height - 2;

    let boostDisplay = sprites.create(image.create(15, 10));
    boostDisplay.right = chargeBar.left - 2;
    boostDisplay.bottom = chargeBar.bottom;

    game.onUpdateInterval(1000, function () {
        charge = Math.min(charge + 1, maxCharge);
    });

    game.onUpdate(function () {
        let bar: Image = chargeBar.image;
        let startFilled = Math.floor(bar.height * charge / maxCharge);
        bar.fill(7);
        bar.fillRect(0, startFilled, bar.width, bar.height - startFilled, 2);

        let display = boostDisplay.image;
        display.fill(0);
        display.print("" + boostCharge, 0, 0);
    });
}

namespace misc {
    export function tempGhost(character: Sprite, time: number) {
        character.setFlag(SpriteFlag.Ghost, true);
        control.runInParallel(function () {
            pause(time);
            character.setFlag(SpriteFlag.Ghost, false);
        });
    }

    export function setPosition(star: Sprite, edge?: number) {
        if (edge === undefined) edge = 0;
        star.x = Math.randomRange(edge, screen.width - edge);
        star.y = 0;
    }
}
```