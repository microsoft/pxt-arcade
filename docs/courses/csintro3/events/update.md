# Activity: On Update Interval

In the previous lesson, the ``||game:on game update||`` event was used to
handle events that should occur every time the game updates.

However, not all behaviors should necessarily occur every time the game updates.
The ``||game:on game update every||`` event can be used to handle these types of behaviors.

## Concept: Keeping Track of Time

The ``||game:game.onUpdateInterval||`` event is similar to the ``||game:game.onUpdate||``
event, except it will only occur  once per given **period**.

```sig
game.onUpdateInterval(500, undefined);
```

## Example #1: Visualizing the Rate

![Animation of Console Graph](/static/courses/csintro3/events/graphing-value-a.gif)

1. Review the code below
2. Identify the **period** of the event
3. Identify how often the ``||variables:a||`` will be logged to the console

```typescript
let a: number = 0;

game.onUpdateInterval(100, function () {
    console.logValue("a", a);
    a++;
});
```

## Student Task #1: Comparing Periods

1. Start with the code from example #1
2. Create two more variables at the start of the code: ``||variables:a||`` and
``||variables:b||``. Assign each the value 0
3. Create **two** more ``||game:game.onUpdateInterval||`` events:
one with a period of 500 ms, and the other with a period of 1000 ms
4. In the event with a period of 500 ms, use ``console.logValue`` to log
the value of ``||variables:b||``, and then increment the value
5. In the event with a period of 1000 ms, use ``console.logValue`` to log
the value of ``||variables:c||``, and then increment the value

### ~hint

``||game:on game update||`` and ``||game:on game update interval||`` both
allow for multiple **event handlers**, so calling the function multiple times
and assigning different event handlers will work appropriately.

However, some other events discussed in future lessons will **not** allow for this.
Instead, these functions might **overwrite** the old event handler when a new one is assigned.

### ~

## Concept: ``||game:game.onUpdateInterval||`` to Create Projectiles

The ``||game:game.onUpdateInterval||`` event being kept to a consistent pace
makes it ideal for handling behavior like the creation ``||sprites:projectiles||``.

This allows for ``||sprites:sprites||`` that are created regularly,
without overwhelming the player or the screen.

## Example #2: Fewer Stars

![Animation of example stars](/static/courses/csintro3/events/star-background.gif)

1. Review the code below
2. Identify the **period** of the event

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create();
}

game.onUpdateInterval(250, function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = randint(0, screen.height);
});
```

## Student Task #2: Asteroids 2.0

1. Start with the code from example #2
2. Create a second ``||game:game.onUpdateInterval||`` event,
with a period of 750 ms
3. In the new ``||game:game.onUpdateInterval||`` event,
create a projectile with an image of an Asteroid
4. Give the asteroid a ``||math:random||`` ``||sprites:vx||`` between -15 and 15,
and a ``||sprites:vy||`` of 50
5. Assign the asteroid a ``||math:random||`` ``||sprites:x||`` position
between 0 and ``||scene:screen.width||``

## What did we learn?

1. In your own words, explain the difference between the ``||game:game.onUpdate||``
event and the ``||game:game.onUpdateInterval||`` event.
2. Explain why it can be helpful to be able to create multiple **event handlers**
for a given **event**?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/events/update-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Sidenote: Why not ``||loops:pause||`` in ``||game:on game update||``?

The behavior of the ``||game:on game update interval||`` event might seem like an
easy thing to address without making an extra type of event:
why not just ``||loops:pause||`` right before the end of the event handler?
This approach could be used to limit the rate at which stars are created,
like in the snippet below.

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create();
}

game.onUpdate(function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = randint(0, screen.height);
    pause(250);
});
```

Run the code above and you'll likely see an issue:
the game starts to hang between the creation of ``||sprites:Star||``s,
resulting in inconsistent motion as the game only updates once per second.

This occurs because the event occurs as part of the game update;
by calling ``||loops:pause||``, the **entire** game will pause.
This behavior will also occur if ``||loops:pause||`` is used in
``||game:on game update interval||``.
For this reason,it is important to pay attention to the side effects of using any event.

### ~

### ~hint

## Case Study

### Stars! 2.0

Change the ``||game:on game update||`` event that creates stars in the ``star``
namespace to an ``||game:on game update interval||`` event with an interval of 200ms.
Change the ``||math:percent chance||`` from 10 to 50 percent,
as this event will occur less often than the ``||game:on game update||``

### Enemy AI

Currently, the 'enemy' in the game doesn't do much - it is created,
and moves down the screen, and the gets destroyed automatically.
In this task, you will start to make the enemy more interesting.

First, you will need to keep a reference to the enemy -
store the result of the call to ``createEnemy`` in the
variable ``||variables:myEnemy||``.

Use an ``||game:on game update interval||`` event with an interval
of 200ms to control the enemy.
In this, use a ``||math:percent chance||`` and ``||logic:if statement||``
to create a ``||sprites:projectile||`` from ``||variables:myEnemy||`` with a 10% chance.
This projectile should be of kind ``EnemyLaser``, and have a ``||sprites:vy||`` of 70.

Next, you need to make the enemy **follow** the player.
This can be done by changing the ``||sprites:vx||`` to make it move in
the direction of the player's ship:
in the ``||game:on game update interval||`` event,
compare ``||variables:myEnemy||`` and ``||variables:ship.player||``'s ``||sprites:x positions||``.
``||logic:If||`` ``myEnemy.x`` is **less than** ``ship.player.x``,
set ``myEnemy.vx`` to 15; ``||logic:else||``, set it to -15.

### Solution

```typescript-ignore
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
    export const PowerUp = SpriteKind.create();
    export const Laser = SpriteKind.create();
    export const Star = SpriteKind.create();
}

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
```

### ~