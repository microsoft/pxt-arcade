# Case Study Catch Up

![Animation of Case Study at the end of the section](/static/courses/csintro3/events/end-of-section-case-study.gif)

At the end of the events section, the case study should resemble this example solution:

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
    export const PowerUp = SpriteKind.create();
    export const Laser = SpriteKind.create();
    export const Star = SpriteKind.create();
    export const EnemyLaser = SpriteKind.create();
}

enum PowerUpType {
    Health,
    Score
}

/**
 * Contains the images used in the game
 */
namespace spritesheet {
    export let player: Image = img`
        . . . . 8 . . . .
        . . . 8 8 8 . . .
        . . . 8 1 8 . . .
        . . 2 8 1 8 2 . .
        . 2 2 8 8 8 2 2 .
        2 2 2 8 8 8 2 2 2
        . . . 5 . 5 . . .
    `;

    export let enemy: Image = img`
        5 5 . . . . 5 5
        7 7 7 7 7 7 7 7
        . 9 9 7 7 9 9 .
        . 7 7 7 7 7 7 .
        . . . 9 9 . . .
    `;

    export let asteroid: Image = sprites.space.spaceAsteroid0;

    export let powerUp: Image = img`
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

    export let laser: Image = img`
        4
        4
    `;
}

/**
 * Creates and controls the asteroids within the game
 */
namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(spritesheet.asteroid, SpriteKind.Asteroid);
    });

    /**
     * Set the initial velocities for the given sprite
     * @param asteroid the asteroid to set the initial velocities of
     */
    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    /**
     * Place the given sprite at a random location at the top of the screen
     * @param sprite the sprite to place at the top of the screen
     * @param edge how many pixels between either edge of the screen to set
     */
    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player: Sprite = initialize();
    export let maxCharge = 3;
    export let currentCharge = maxCharge;

    /**
     * @returns a player sprite that moves with the directional buttons
     */
    function initialize(): Sprite {
        let sprite = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(sprite, 80, 30);
        controller.A.repeatInterval = 400;
        sprite.x = screen.width / 2;
        sprite.y = screen.height - 20;
        sprite.setStayInScreen(true);
        return sprite;
    }

    // When the player presses A, fire a laser from the spaceship
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        fireLaser();
    });

    // When the player holds A, also fire the laser
    controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
        fireLaser();
    });

    /**
     * Fires a laser from the player's ship if they have the energy to do so
     */
    function fireLaser() {
        if (currentCharge > 0) {
            currentCharge--;
            sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
        }
    }

    game.onUpdateInterval(750, function () {
        if (currentCharge < maxCharge) {
            currentCharge++;
        }
    });
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    let myEnemy = createEnemy();

    /**
     * @returns an enemy sprite that is positioned at the top of the screen
     */
    function createEnemy(): Sprite {
        let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
        setPosition(enemy, 10);
        enemy.vy = 10;
        return enemy;
    }

    /**
     * Place the given sprite at a random location at the top of the screen
     * @param sprite the sprite to place at the top of the screen
     * @param edge how many pixels between either edge of the screen to set
     */
    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }

    game.onUpdateInterval(200, function () {
        // Create a laser 10% of the time
        if (Math.percentChance(10)) {
            sprites.createProjectile(img`3`, 0, 70, SpriteKind.EnemyLaser, myEnemy);
        }

        // follow the player
        if (myEnemy.x < ship.player.x) {
            myEnemy.vx = 15;
        } else {
            myEnemy.vx = -15;
        }
    });
}

/**
 * Creates and controls the stars in the game
 */
namespace star {
    game.onUpdateInterval(200, function () {
        if (Math.percentChance(50)) {
            let star = sprites.createProjectile(img`1`, 0, 50, SpriteKind.Star);
            star.x = randint(0, screen.width);
            star.setFlag(SpriteFlag.Ghost, true);
            star.z = -1;
        }
    });
}

/**
 * Generates powerups for the player to collect
 */
namespace powerups {
    let availablePowerUps = [
        PowerUpType.Health,
        PowerUpType.Score
    ];

    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.data = Math.pickRandom(availablePowerUps);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    /**
     * Place the given sprite at a random location at the top of the screen
     * @param sprite the sprite to place at the top of the screen
     * @param edge how many pixels between either edge of the screen to set
     */
    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }

    /**
     * Set the initial velocities for the given sprite
     * @param powerUp the powerUp to set the initial velocities of
     */
    function setMotion(powerUp: Sprite) {
        powerUp.vy = 60;
    }

    /**
     * @param powerUp sprite to get type of
     * @returns the type of the given powerUp
     */
    export function getType(powerUp: Sprite): PowerUpType {
        return powerUp.data;
    }

    game.onUpdateInterval(1000, function () {
        if (Math.percentChance(33)) {
            sprites.create(spritesheet.powerUp, SpriteKind.PowerUp);
        }
    });
}

/**
 * Handle overlaps between different sprites
 */
namespace overlapevents {
    // When the player hits an asteroid, damage the player and destroy the asteroid
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    });

    // When the player hits an enemy, damage the player and destroy the enemy
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
    });

    // When a laser hits an asteroid, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeScoreBy(1);
        otherSprite.destroy(effects.fire, 200);
        sprite.destroy();
    });

    // When a laser hits an enemy, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeScoreBy(1);
        otherSprite.destroy(effects.bubbles);
        sprite.destroy();
    });

    // When an  enemy laser hits the player, destroy the laser, say "ow!", and lose life
    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        info.changeLifeBy(-1);
        otherSprite.destroy();
        sprite.say("ow!", 500);
    });

    // When a player hits a powerup, apply the bonus for that powerup
    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        if (powerUp == PowerUpType.Health) {
            sprite.say("Got health!", 500);
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            sprite.say("Score!", 500);
            info.changeScoreBy(15);
        }
    });
}

/**
 * Set up the state of the game
 */
namespace status {
    initialize(4, 0);

    /**
     * Sets up the initial state of the game
     * @param life the initial life to set
     * @param score the initial score to set
     */
    function initialize(life: number, score: number) {
        info.setLife(life);
        info.setScore(score);
    }

    info.onLifeZero(function () {
        let playerContinue = game.ask("Continue?", "Cost: 50 points");
        if (playerContinue) {
            info.setLife(3);
            info.changeScoreBy(-50);
        } else {
            game.over();
        }
    });
}
```