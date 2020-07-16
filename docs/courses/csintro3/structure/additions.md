# Case Study Additions

At this point, you have the knowledge necessary to deal with a larger pieces of code -
in particular, by using comments to leave information for anyone reading it in the future,
as well as namespaces to split code into logical chunks.

To get a head start on future topics, there are a few more namespaces that we will add
in to make the game a bit more interesting,
and give a framework for future tasks to build upon.

Below are two snippets of code.

The first is the current state of the example game, with a few minor changes;
in particular, removing the ``||game:splash||`` screen and ``||game:prompt||``
for user input, as well as the initial blast of ``||sprites:Asteroids||``.
These can be left in your game if you'd like (just make sure that they remain
at the end of the code, so they are executed after everything is set up),
but have been removed to make it easier to focus on the game.

The second is the version that will be referenced going forward.
This includes a number of new namespaces that will make the game a bit more interesting.
Play the game and see what has changed,
and duplicate the changes from this page into your own game.

### ~hint

In future activities, the solutions will be limited to show the sections
of the code that have been updated.

This will help focus on the sections of the code that are relevant to each task,
without having to search through the entire game's code for every single change.
If a portion of a namespace or a certain function is not shown,
that will usually mean the code is to remain **unmodified**, not that it should be **deleted**.

### ~

## Current Game

![Animation of current case study game](/static/courses/csintro3/structure/current-case-study.gif)

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
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
}

/**
 * Creates and controls the asteroids within the game
 */
namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setImage(spritesheet.asteroid);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player = sprites.create(spritesheet.player, SpriteKind.Player);

    controller.moveSprite(player, 80, 30);
    player.x = screen.width / 2;
    player.y = screen.height - 20;
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
    enemy.x = ship.player.x;
    enemy.y = 20;
    enemy.vy = 10;
}
```

## New Version

![Animation of updated case study game](/static/courses/csintro3/structure/updated-case-study.gif)

### Change List:

* [ ] Added two more SpriteKinds: PowerUp, and Laser
* [ ] Added another enum, PowerUpType
* [ ] Added images in spritesheet for PowerUp and Laser
* [ ] Added powerups namespace, which creates and handles powerups
* [ ] Added overlapevents namespace, which contains events to handle
overlaps between different sprites
* [ ] Added status namespace, which will contain things related to the state of the game

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
    export const PowerUp = SpriteKind.create();
    export const Laser = SpriteKind.create();
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
    export let player = sprites.create(spritesheet.player, SpriteKind.Player);

    controller.moveSprite(player, 80, 30);
    player.x = screen.width / 2;
    player.y = screen.height - 20;

    // When the player presses A, fire a laser from the spaceship
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
    });
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
    enemy.x = ship.player.x;
    enemy.y = 20;
    enemy.vy = 10;
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

    // When a laser hits an asteroid, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    // When a laser hits an enemy, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.destroy();
    });

    // When a player hits a powerup, apply the bonus for that powerup
    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        if (powerUp == PowerUpType.Health) {
            sprite.say("Got health!")
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            sprite.say("Score!")
            info.changeScoreBy(15);
        }
    });
}

/**
 * Set up the state of the game
 */
namespace status {
    info.setLife(3);
    info.setScore(0);
}
```