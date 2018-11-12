# Case Study

```typescript
enum SpriteKind {
    Player,
    Enemy,
    PowerUp,
    Asteroid,
    Laser,
    Star,
    EnemyLaser, // they add this
    BrokenAsteroid, // for enemy laser - asteroids challenge
    PowerUpTrail // for power up trail challenge
}

enum PowerUpType {
    Health,
    Score,
    Attack,
    MaxEnergy, // max energy up bonus
    Ghost  // "ghost" mode
}

namespace spritesheet {
    export let asteroids: Image[] = [
        sprites.space.spaceAsteroid0,
        sprites.space.spaceAsteroid1,
        sprites.space.spaceAsteroid2
    ];

    export let brokenAsteroids: Image[] = [  // FOR ASTEROID-ENEMYLASER
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
    // max energy challenge
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
    // ghost challenge
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
    `

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
    ]
}

namespace asteroids {
    // let asteroidImages: Image[] = [
    //     sprites.space.spaceAsteroid0,
    //     sprites.space.spaceAsteroid1,
    //     sprites.space.spaceAsteroid2
    // ];

    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        // sprite.setImage(Math.pickRandom(asteroidImages));
        sprite.setImage(Math.pickRandom(spritesheet.asteroids));
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite);
        setMotion(sprite);
        // for setMotion, store variable in namespace for sprite, make them convert to parameters
    })

    sprites.onDestroyed(SpriteKind.Asteroid, function (sprite: Sprite) {
        info.changeScoreBy(1);
        // Make them do this
    })

    game.onUpdateInterval(1500, function () {
        sprites.createEmptySprite(SpriteKind.Asteroid);
    })

    function setPosition(asteroid: Sprite): void {
        asteroid.x = Math.randomRange(10, screen.width - 10); // student fill in these
        asteroid.y = 0;
    }

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }
}

namespace stars {
    // let starImages: Image[] = [
    //     img`
    //         1 1
    //     `,
    //     img`
    //         1
    //     `,
    //     img`
    //         3 . . 1
    //     `,
    //     img`
    //         3 .
    //         . .
    //         . .
    //         . 1
    //     `
    // ]

    sprites.onCreated(SpriteKind.Star, function (sprite: Sprite) {
        // sprite.setImage(Math.pickRandom(starImages));
        sprite.setImage(Math.pickRandom(spritesheet.stars));
        setPosition(sprite);
        setMotion(sprite);
        sprite.setFlag(SpriteFlag.Ghost, true);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        sprite.z = -1;  // have them set this to teach properties
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(star: Sprite): void {
        star.x = Math.randomRange(0, screen.width); // student fill in these
        star.y = 0;
    }

    function setMotion(star: Sprite): void {
        star.vy = 20;
    }

    game.onUpdateInterval(50, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.Star);
        }
    })

    for (let row = 0; row < screen.height / 10; row++) {
        sprites.createEmptySprite(SpriteKind.Star);
    }
    for (let star of sprites.allOfKind(SpriteKind.Star)) {
        star.y = Math.randomRange(0, screen.height);
    }
}

namespace powerups {
    // Last task: make them add a new powerup
    // * type: GhostMode
    // * effect: turns 'ghost' on for ship for 1 second
    // Challenge after last task; add "Max Energy Up"

    // let powerUpImages: Image[] = [];
    // powerUpImages[PowerUpType.Health] = img`
    //     . . . 7 7 7 7 7 . . .
    //     . . 7 7 7 7 7 7 7 . .
    //     . 7 7 2 7 7 7 2 7 7 .
    //     7 7 7 2 7 7 7 2 7 7 7
    //     7 7 7 2 7 7 7 2 7 7 7
    //     7 7 7 2 2 2 2 2 7 7 7
    //     7 7 7 2 7 7 7 2 7 7 7
    //     7 7 7 2 7 7 7 2 7 7 7
    //     . 7 7 2 7 7 7 2 7 7 .
    //     . . 7 7 7 7 7 7 7 . .
    //     . . . 7 7 7 7 7 . . .
    // `;
    // powerUpImages[PowerUpType.Score] = img`
    //     . . . 5 5 5 5 5 . . .
    //     . . 5 5 5 f 5 5 5 . .
    //     . 5 5 5 f f f 5 5 5 .
    //     5 5 5 f 5 f 5 f 5 5 5
    //     5 5 5 5 f 5 5 5 5 5 5
    //     5 5 5 5 5 f 5 5 5 5 5
    //     5 5 5 5 5 5 f 5 5 5 5
    //     5 5 5 f 5 f 5 f 5 5 5
    //     . 5 5 5 f f f 5 5 5 .
    //     . . 5 5 5 f 5 5 5 . .
    //     . . . 5 5 5 5 5 . . .
    // `;
    // powerUpImages[PowerUpType.Attack] = img`
    //     . . . 6 6 6 6 6 . . .
    //     . . 6 6 6 6 6 6 6 . .
    //     . 6 6 1 6 6 6 1 6 6 .
    //     6 6 1 1 1 6 1 1 1 6 6
    //     6 1 6 1 6 1 6 1 6 1 6
    //     6 6 6 1 6 6 6 1 6 6 6
    //     6 6 6 1 6 6 6 1 6 6 6
    //     6 6 6 1 6 6 6 1 6 6 6
    //     . 6 6 1 6 6 6 1 6 6 .
    //     . . 6 6 6 6 6 6 6 . .
    //     . . . 6 6 6 6 6 . . .
    // `;
    // // max energy challenge
    // powerUpImages[PowerUpType.MaxEnergy] = img`
    //     . . . c c c c c . . . 
    //     . . c c c c c c c . . 
    //     . c c b b b b b c c . 
    //     c c c b c c c c c c c 
    //     c c c b c c c c c c c 
    //     c c c b b b b c c c c 
    //     c c c b c c c c c c c 
    //     c c c b c c c c c c c 
    //     . c c b b b b b c c . 
    //     . . c c c c c c c . . 
    //     . . . c c c c c . . . 
    // `;
    // // ghost challenge
    // powerUpImages[PowerUpType.Ghost] = img`
    //     . . . b b b b b . . . 
    //     . . b b b b b b b . . 
    //     . b b 1 1 1 1 1 b b . 
    //     b b b 1 f 1 f 1 b b b 
    //     b b b 1 f 1 f 1 b b b 
    //     b b b 1 1 1 1 1 b b b 
    //     b b b 1 1 1 1 1 b b b 
    //     b b 1 1 1 1 1 1 1 b b 
    //     . b b b b b b b b b . 
    //     . . b b b b b b b . . 
    //     . . . b b b b b . . . 
    // `

    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        // sprite.setImage(Math.pickRandom(powerUpImages));
        sprite.setImage(Math.pickRandom(spritesheet.powerUp));
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite);
        setMotion(sprite);
    })

    // make them add this event
    sprites.onDestroyed(SpriteKind.PowerUp, function (sprite: Sprite) {
        ship.player.say("missed it :(", 500);
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(powerUp: Sprite): void {
        powerUp.x = Math.randomRange(10, screen.width - 10); // student fill in these
        powerUp.y = 0;
    }

    function setMotion(powerUp: Sprite): void {
        powerUp.vy = 60;
    }

    export function getType(powerUp: Sprite): number {
        return spritesheet.powerUp.indexOf(powerUp.image);
    }

    game.onUpdateInterval(1000, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.PowerUp);
        }
    })

    // Challenge: Trail for powerups
    game.onUpdate(function () {
        for (let powerUp of sprites.allOfKind(SpriteKind.PowerUp)) {
            if (Math.percentChance(60)) {
                let trail: Sprite = sprites.createProjectile(img`1`, 0, 0, SpriteKind.PowerUpTrail, powerUp);
                trail.lifespan = 300 + Math.randomRange(-150, 150);
                trail.x += Math.randomRange(-5, 5);
                trail.setFlag(SpriteFlag.Ghost, true);
                trail.image.fill(Math.randomRange(1, 14));
                trail.z = -1;
            }
        }
    })
}

// They make the enemies outside of any name space to start, then move them into a namespace
// they make when they move up
namespace enemy {
    game.onUpdateInterval(1500, function () {
        if (Math.percentChance(40)) {
            // let enemy = sprites.create(img`
            //     5 5 . . . . 5 5
            //     7 7 7 7 7 7 7 7
            //     . 9 9 7 7 9 9 .
            //     . 7 7 7 7 7 7 .
            //     . . . 9 9 . . .
            // `, SpriteKind.Enemy);
            let enemy: Sprite = sprites.create(Math.pickRandom(spritesheet.enemy), SpriteKind.Enemy);
            setPosition(enemy);
            enemy.setFlag(SpriteFlag.AutoDestroy, true);
            enemy.vy = 15;
        }
    })

    // eventually have them recognize this is the same as Asteroids.setPosition
    function setPosition(enemy: Sprite): void {
        enemy.x = Math.randomRange(10, screen.width - 10); // student fill in these
        enemy.y = 0;
    }

    sprites.onDestroyed(SpriteKind.Enemy, function (sprite: Sprite) {
        info.changeScoreBy(3);
    })

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
                sprites.createProjectile(img`
                    7
                    7
                `, 0, 45, SpriteKind.EnemyLaser, enemy);
            }
        }
    })
}

namespace ship {
    // let playerImages: Image[] = [
    //     img`
    //         8 8 . . . . . .
    //         8 1 8 . . . . .
    //         . 8 1 8 2 2 2 2
    //         . . 8 8 8 2 2 .
    //         . . 2 8 8 8 5 .
    //         . . 2 2 8 . . .
    //         . . 2 2 5 . . .
    //         . . 2 . . . . .
    //     `, img`
    //         . . . . 8 . . . .
    //         . . . 8 8 8 . . .
    //         . . . 8 1 8 . . .
    //         . . 2 8 1 8 2 . .
    //         . 2 2 8 8 8 2 2 .
    //         2 2 2 8 8 8 2 2 2
    //         . . . 5 . 5 . . .
    //     `
    // ];

    // playerImages.push(playerImages[0].clone()); // guide through doing this
    // playerImages[2].flipX(); // guide through doing this

    export let boostedLasers: number = 0; // they add this variable (handwave the export till namespaces)
    // export let player: Sprite = sprites.create(playerImages[1], SpriteKind.Player);
    export let player: Sprite = sprites.create(spritesheet.player[1], SpriteKind.Player);
    player.setFlag(SpriteFlag.StayInScreen, true); // using flags, make em do this

    info.setLife(3);
    info.setScore(0);

    controller.controlSprite(player, 80, 30);
    player.y = screen.height - 20;

    // let laserImage: Image = img`
    //     4
    //     4
    // `;

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        /** Progress bar **/
        if (state.charge > 0) {
            sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player); // make them create the laser
            // sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player);
            state.charge--;
        }

        // sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player); // make them create the laser
    })

    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        if (boostedLasers > 0) {
            let left: Sprite = sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            let right: Sprite = sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            // let left: Sprite = sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player);
            // let right: Sprite = sprites.createProjectile(laserImage, controller.dx() * 4, -40, SpriteKind.Laser, player);
            left.x -= 2;
            right.x += 2;
            boostedLasers--;
        } else {
            player.say("no more boost", 500);
        }
    })

    game.onUpdate(function () {
        if (player.vx < -1) { // arrays -> make them switch between the different images instead of having a constant forward facing one
            // player.setImage(playerImages[0]);
            player.setImage(spritesheet.player[0]);
        } else if (player.vx <= 1) {
            // player.setImage(playerImages[1]);
            player.setImage(spritesheet.player[1]);
        } else {
            // player.setImage(playerImages[2]);
            player.setImage(spritesheet.player[2]);
        }
    })
}

namespace overlapevents {
    let powerUpStrings: string[] = [];
    powerUpStrings[PowerUpType.Health] = "health!";
    powerUpStrings[PowerUpType.Score] = "score!";
    powerUpStrings[PowerUpType.Attack] = "laser boost!";
    powerUpStrings[PowerUpType.MaxEnergy] = "more energy!"; // maxEnergy challenge
    powerUpStrings[PowerUpType.Ghost] = "ghost mode!"; // ghost challenge

    // let brokenAsteroids: Image[] = [  // FOR ASTEROID-ENEMYLASER
    //     sprites.space.spaceSmallAsteroid0,
    //     sprites.space.spaceSmallAsteroid1,
    //     sprites.space.spaceSmallAsteroid2,
    //     sprites.space.spaceSmallAsteroid3,
    //     sprites.space.spaceSmallAsteroid4,
    //     sprites.space.spaceSmallAsteroid5
    // ];

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1); // rm this and make them add it
        info.changeScoreBy(-1); // rm this and make them add it
        otherSprite.destroy(); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    // ADDED IN CHALLENGE
    sprites.onOverlap(SpriteKind.Player, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1); // rm this and make them add it
        info.changeScoreBy(-1); // rm this and make them add it
        otherSprite.destroy(); // rm this and make them add it
    })

    // ADDED IN CHALLENGE
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        info.changeScoreBy(1); // rm this and make them add it
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        // make them convert to storing a msg, then calling Ship.player.say in one place / less redundant (and then to string arrays)
        if (powerUp != -1) {
            ship.player.say(powerUpStrings[powerUp], 500);
        }
        if (powerUp === PowerUpType.Health) {
            info.changeLifeBy(1);
            // ship.player.say("health!", 500);
        } else if (powerUp === PowerUpType.Score) {
            info.changeScoreBy(15);
            // ship.player.say("score!", 500);
        } else if (powerUp === PowerUpType.Attack) {
            ship.boostedLasers += 5;
            // ship.player.say("laser boost!", 500);
        } else if (powerUp === PowerUpType.MaxEnergy) { // max energy challenge
            state.maxCharge++;
            state.charge++;
        } else if (powerUp === PowerUpType.Ghost) { // ghost mode challenge
            misc.tempGhost(ship.player, 1000);
        }
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-2);
        info.changeScoreBy(-3);
        otherSprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    })


    // CHALLENGE: add overlap event for enemy lasers and asteroids, that 'splits' the asteroids
    // in two moving diagonally downwards from curr asteroid position
    sprites.onOverlap(SpriteKind.Asteroid, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        sprite.setFlag(SpriteFlag.Ghost, true);
        let left = sprites.createProjectile(Math.pickRandom(spritesheet.brokenAsteroids), Math.randomRange(-20, -10), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        let right = sprites.createProjectile(Math.pickRandom(spritesheet.brokenAsteroids), Math.randomRange(10, 20), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        // let left = sprites.createProjectile(Math.pickRandom(brokenAsteroids), Math.randomRange(-20, -10), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        // let right = sprites.createProjectile(Math.pickRandom(brokenAsteroids), Math.randomRange(10, 20), sprite.vy * (1 + Math.random()), SpriteKind.BrokenAsteroid, sprite);
        sprite.destroy();
        otherSprite.destroy();
    })
}

// Eventually / at end of functions, make them create a misc type namespace 
// for helper functions / general game state elements
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
    })

    /** Progress bar **/

    export let maxCharge: number = 5;
    export let charge: number = maxCharge;
    let chargeBar: Sprite = sprites.create(image.create(7, 30));

    chargeBar.z = 50;
    chargeBar.setFlag(SpriteFlag.Ghost, true);
    chargeBar.right = scene.screenWidth() - 2;
    chargeBar.bottom = scene.screenHeight() - 2;

    game.onUpdateInterval(1000, function () {
        charge = Math.min(charge + 1, maxCharge);
    })

    game.onUpdate(function () {
        let bar: Image = chargeBar.image;
        let startFilled = Math.floor(bar.height * charge / maxCharge);

        bar.fill(7);
        bar.fillRect(0, startFilled, bar.width, bar.height - startFilled, 2);
    })

    /** End Progress bar **/
}

namespace misc {
    export function tempGhost(character: Sprite, time: number) {
        control.runInParallel(function () {
            character.setFlag(SpriteFlag.Ghost, true);
            pause(time);
            character.setFlag(SpriteFlag.Ghost, false);
        })
    }
}
```

## Final:

```typescript
enum SpriteKind {
    Player,
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
    `

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
        sprite.setImage(Math.pickRandom(spritesheet.asteroids));
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        misc.setPosition(sprite, 10);
        setMotion(sprite);
    });

    sprites.onDestroyed(SpriteKind.Asteroid, function (sprite: Sprite) {
        info.changeScoreBy(1);
    });

    game.onUpdateInterval(1500, function () {
        sprites.createEmptySprite(SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }
}

namespace stars {
    sprites.onCreated(SpriteKind.Star, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(spritesheet.stars));
        misc.setPosition(sprite);
        setMotion(sprite);
        sprite.setFlag(SpriteFlag.Ghost, true);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        sprite.z = -1;
    });

    game.onUpdateInterval(50, function () {
        if (Math.percentChance(33)) {
            sprites.createEmptySprite(SpriteKind.Star);
        }
    });

    fillScreen();

    function setMotion(star: Sprite) {
        star.vy = 20;
    }

    function fillScreen() {
        for (let row = 0; row < screen.height / 10; row++) {
            sprites.createEmptySprite(SpriteKind.Star);
        }
        for (let star of sprites.allOfKind(SpriteKind.Star)) {
            star.y = Math.randomRange(0, screen.height);
        }
    }
}

namespace powerups {
    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.setImage(Math.pickRandom(spritesheet.powerUp));
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
            sprites.createEmptySprite(SpriteKind.PowerUp);
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
        sprite.setImage(Math.pickRandom(spritesheet.enemy));
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
            sprites.createEmptySprite(SpriteKind.Enemy);
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

    controller.controlSprite(player, 80, 30);
    player.y = screen.height - 20;

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (state.charge > 0) {
            sprites.createProjectile(spritesheet.laser, controller.dx() * 4, -40, SpriteKind.Laser, player);
            state.charge--;
        }
    })

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
    })

    game.onUpdate(function () {
        if (player.vx < -1) {
            player.setImage(spritesheet.player[0]);
        } else if (player.vx <= 1) {
            player.setImage(spritesheet.player[1]);
        } else {
            player.setImage(spritesheet.player[2]);
        }
    })
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
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        info.changeScoreBy(-1);
        otherSprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Laser, SpriteKind.BrokenAsteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeScoreBy(1);
        otherSprite.destroy();
    })

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
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-2);
        info.changeScoreBy(-3);
        otherSprite.destroy();
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    })

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
    })
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
    })

    export let maxCharge: number = 5;
    export let charge: number = maxCharge;
    export let boostCharge: number = 0;

    let chargeBar = sprites.create(image.create(7, 30));

    chargeBar.z = 50;
    chargeBar.setFlag(SpriteFlag.Ghost, true);
    chargeBar.right = scene.screenWidth() - 2;
    chargeBar.bottom = scene.screenHeight() - 2;

    let boostDisplay = sprites.create(image.create(15, 10));
    boostDisplay.right = chargeBar.left - 2;
    boostDisplay.bottom = chargeBar.bottom;

    game.onUpdateInterval(1000, function () {
        charge = Math.min(charge + 1, maxCharge);
    })

    game.onUpdate(function () {
        let bar: Image = chargeBar.image;
        let startFilled = Math.floor(bar.height * charge / maxCharge);
        bar.fill(7);
        bar.fillRect(0, startFilled, bar.width, bar.height - startFilled, 2);

        let display = boostDisplay.image;
        display.fill(0);
        display.print("" + boostCharge, 0, 0);
    })
}

namespace misc {
    export function tempGhost(character: Sprite, time: number) {
        control.runInParallel(function () {
            character.setFlag(SpriteFlag.Ghost, true);
            pause(time);
            character.setFlag(SpriteFlag.Ghost, false);
        })
    }

    export function setPosition(star: Sprite, edge?: number) {
        if (edge === undefined) edge = 0;
        star.x = Math.randomRange(edge, screen.width - edge);
        star.y = 0;
    }
}
```