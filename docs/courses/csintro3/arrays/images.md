# Activity: Images

``||images:Images||`` are used to represent many things on screen in @boardname@ -
``||scene:backgrounds||``, ``||sprites:Sprites||``, many other elements of the games.

A number of complex behaviors can be handled easily using ``||arrays:arrays||`` of
``||images:Images||``, allowing for games with a larger variety of content for
the person playing to experience.

## Concept: Simple Animations

Animations in games are represented as a series of different images that
get shown in a sequence.

Using ``||arrays:arrays||``, these ``||images:images||`` can be stored in
a single location and referenced much more easily than they could be using
individual variables.

## Example #1: Flapping Duck

1. Review the code below
2. Identify how the ``||images:Image||`` array is created
3. Identify how the ``||loops:for||`` loop is used to iterate through the
different ``||images:images||`` of the ``||sprites:ducks||``

```typescript
let characterImages: Image[] = [
    sprites.duck.duck1,
    sprites.duck.duck2,
    sprites.duck.duck3,
    sprites.duck.duck4,
    sprites.duck.duck5,
    sprites.duck.duck6
];

let duck: Sprite = sprites.create(characterImages[0], SpriteKind.Player);
for (let index = 0; index < characterImages.length; index++) {
    pause(150);
    duck.setImage(characterImages[index]);
}
```

## Student Task #1: Walking Hero

1. Start with the code from example #1
2. Modify the code to show a **hero walking** instead of a **flying duck**,
by replacing the images in ``||variables:characterImages||``
3. Use a second ``||loops:for||`` loop that causes the current ``||loops:for||``
loop to repeat **20** times, so that the animation will continue to repeat

### ~hint

The ``||images:images||`` of a hero walking can be referenced using the following variables:

* ``||sprites:sprites.castle.heroWalkFront1||``
* ``||sprites:sprites.castle.heroWalkFront2||``
* ``||sprites:sprites.castle.heroWalkFront3||``
* ``||sprites:sprites.castle.heroWalkFront4||``

### ~

## Concept: Remainder Operator

Creating an animation using arrays is useful, but does lead to some issues.
For example, what if the intention is to run it in the background, forever?

One approach would be to use the ``||game:on update interval||`` event.
Using this with the previous example might look like the snippet below.

```typescript-ignore
let count = 0;
game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count]);
    count++;
});
```

However, this won't quite work; after the last index in the array, the code will crash,
because you will be trying to refer to an ``||images:image||`` that **doesn't exist**.

This could be handled using ``||logic:logic||`` to reset the value when it gets too high.

```typescript-ignore
let count = 0;
game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count]);
    count++;
    if (count == characterImages.length) {
        count = 0;
    }
});
```

The **remainder** operator, ``%``, can be used to handle this case more appropriately.
This operator is used to signify the **remainder** of integer division between two numbers:
that is, ``5 % 3`` is equal to 2, because 5 goes into 3 one time, with **two remaining**.

### ~hint

The remainder operator is often referred to as the ``mod`` operator,
short for modulo or modulus.

### ~

## Example #2: Continually Flapping Duck

![Animation of a duck from this example](/static/courses/csintro3/arrays/duck-animation.gif)

1. Review the code below
2. Identify how ``||variables:count||`` is used
3. Identify how the remainder (``%``) operator is used to refer to a value
within the ``||images:image||`` ``||arrays:array||``

```typescript
let characterImages: Image[] = [
    sprites.duck.duck1,
    sprites.duck.duck2,
    sprites.duck.duck3,
    sprites.duck.duck4,
    sprites.duck.duck5,
    sprites.duck.duck6
];

let duck: Sprite = sprites.create(characterImages[0], SpriteKind.Player);
let count: number = 0;

game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count % characterImages.length]);
    count++;
});
```

## Student Task #2: Continuous Walking Animation

1. Start with the code from task #1
2. Replace the ``||loops:for||`` loops with the ``||game:on update interval||``
event with a ``||variables:counter||`` as shown in example #2 to make the
animation run indefinitely
3. Make the hero ``||controller:move||`` with the directional buttons

## Concept: Random Images

In games, ``||sprites:sprites||`` will often need to be created a large number of times,
to represent ``||sprites:enemies||``, ``||sprites:collectible items||``, or anything else.

To make the games more visually appealing, these ``||sprites:Sprites||``
can be given different ``||images:images||`` to make sure they do not all look the same.

The ``||sprites.onCreated||`` event is helpful for handling this type of behavior.

```sig
sprites.onCreated(0, null);
```

## Example #3: Asteroids!

![Animation of asteroids being created using this example](/static/courses/csintro3/arrays/asteroid-spawning.gif)

1. Review the code below
2. Identify how the different images for ``||sprites:Asteroid||``s are defined,
and what happens to the image originally set for the ``||sprites:Sprite||``
3. Identify what occurs when an ``||sprites:Asteroid||`` is ``||sprites:created||``
4. Identify how ``||math:Math.pickRandom||`` is used to pick a
``||math:random||`` ``||images:image||``

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

let asteroids: Image[] = [
    sprites.space.spaceAsteroid0,
    sprites.space.spaceAsteroid1
];

game.onUpdateInterval(1000, function () {
    sprites.create(img`1`, SpriteKind.Asteroid);
});

sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
    sprite.setImage(Math.pickRandom(asteroids));
    sprite.y = randint(0, screen.height);
    sprite.x = randint(0, screen.width);
});
```

## Student Task #3: Falling Asteroids

1. Start with the code from example #3
2. In the ``||sprites:on created||`` event, set the ``||variables:sprite||``
``||sprites:y||`` position to be 0, so it starts at the top of the screen
3. After setting the ``||sprites:y||`` position, set the ``||sprites:vy||``
to a ``||math:random value between||`` 30 and 50
4. Set the ``||sprites:Ghost||`` flag for every ``||sprites:Asteroid||`` to ``||logic:true||``

### ~hint

The other ``||sprites:Asteroid||`` ``||images:images||`` can be referenced
using the following ``||variables:variables||``:

* ``||sprites:sprites.space.spaceAsteroid2||``
* ``||sprites:sprites.space.spaceAsteroid3||``
* ``||sprites:sprites.space.spaceAsteroid4||``

### ~

## What did we learn?

1. How does using multiple ``||images:images||`` allow for games that are
more visually appealing?
2. How is the **remainder** ``%`` operator used to make sure the code never
accesses an invalid index in the ``||arrays:array||``?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/arrays/images-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Power Up Images

In the ``spritesheet`` namespace, change the ``||variables:powerUp||`` ``||images:image||``
to an ``||arrays:array||`` of ``||images:images||``,
and rename it to ``||variables:powerUps||``.
Create a custom ``||images:image||`` for each type of ``PowerUp``,
and store them at the index for the given type
(similar to ``||variables:powerups.responses||``).

In order to use these images, when creating a ``||sprites:sprite||`` set the
``||images:image||`` to some default value (a single pixel ``||images:image||``,
or one of the ``PowerUp`` images), and then set the ``||images:image||``
appropriately for the chosen type in the ``||sprites:on created||`` event.

Because the type will be stored in both the ``data`` and as the index for
the ``||images:image||``, you should store the result of
``||math:Math.pickRandom(availablePowerUps)||`` so that it can be
referenced in both parts where it is necessary.

### Asteroids!

Instead of using a single image for all asteroids,
create an ``||arrays:array||`` of ``||images:images||`` and ``||math:pick||``
one at random whenever you create a new asteroid.

### Solution

```typescript-ignore
namespace spritesheet {
    export let asteroids: Image[] = [
        sprites.space.spaceAsteroid0,
        sprites.space.spaceAsteroid1,
        sprites.space.spaceAsteroid2,
        sprites.space.spaceAsteroid3,
        sprites.space.spaceAsteroid4
    ];

    export let powerUps: Image[] = [];

    powerUps[PowerUpType.Health] = img`
        . . . 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 .
        1 1 1 2 2 1 2 2 1 1 1
        1 1 2 2 2 2 2 3 2 1 1
        1 1 f 2 2 2 3 2 2 1 1
        1 1 f 2 2 2 2 2 2 1 1
        1 1 1 f 2 2 2 2 1 1 1
        . 1 1 1 f 2 2 1 1 1 .
        . . 1 1 1 f 1 1 1 . .
        . . . 1 1 1 1 1 . . .
    `;

    powerUps[PowerUpType.Score] = img`
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

    powerUps[PowerUpType.EnergyUp] = img`
        . . . 8 8 8 8 8 . . .
        . . 8 8 8 f 8 8 8 . .
        . 8 8 f f f f f 8 8 .
        8 8 8 f 8 d 8 f 8 8 8
        8 8 8 f d d d f 8 8 8
        8 8 8 f 8 d 8 f 8 8 8
        8 8 8 f 8 8 8 f 8 8 8
        8 8 8 f d d d f 8 8 8
        . 8 8 f 8 8 8 f 8 8 .
        . . 8 f f f f f 8 . .
        . . . 8 8 8 8 8 . . .
    `;

    powerUps[PowerUpType.RechargeRateUp] = img`
        . . . e e e e e . . .
        . . e e e 5 4 e e . .
        . e e e 5 5 e e e e .
        e e e 5 5 4 4 4 e e e
        e e 5 5 5 5 5 5 5 5 e
        e e e e e 5 5 5 4 e e
        e e e e 5 5 5 4 e e e
        e e e 5 5 5 4 e e e e
        . e e 5 5 4 e e e e .
        . . e e 5 4 e e e . .
        . . . e e e e e . . .
    `;
}

namespace asteroids {
    game.onUpdateInterval(1500, function () {
        sprites.create(Math.pickRandom(spritesheet.asteroids), SpriteKind.Asteroid);
    });
}

namespace powerups {
    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        let typeOfPowerUp = Math.pickRandom(availablePowerUps);
        sprite.data = typeOfPowerUp;
        sprite.setImage(spritesheet.powerUps[typeOfPowerUp]);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(600, function () {
        if (Math.percentChance(50)) {
            let currentPowerUps = sprites.allOfKind(SpriteKind.PowerUp);
            if (currentPowerUps.length() < 2) {
                sprites.create(img`1`, SpriteKind.PowerUp);
            }
        }
    });
}
```

### ~