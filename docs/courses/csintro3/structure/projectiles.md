# Activity: Projectiles

``||sprites:Sprites||`` form the basis of most games in MakeCode @boardname@.
There are a variety of options available when creating and using ``||sprites:sprites||``,
to make them flexible and easy to use.

In the blocks based courses,
``||sprites:projectiles||`` and ``||sprites:sprite flags||`` were
used to easily provide complex behaviors to characters in games.
In JavaScript, these same functions are available to enhance the projects you create.

## Concept: Projectiles in JavaScript

In blocks, there were two types of ``||sprites:projectiles||`` used to represent
``||sprites:sprites||`` that move across the screen:
``||sprites:projectiles from side||``,
which move across the screen from the side,

```sig
sprites.createProjectileFromSide(null, 0, 0);
```

and ``||sprites:projectile from sprite||``,
which start at the same position as the provided ``||sprites:sprite||``.

```sig
sprites.createProjectileFromSprite(null, null, 0, 0);
```

These can be used in the same way as ``||sprites:sprites.create||``,
to create a character on the screen for the player to see and interact with.

## Example #1: Speedy Taxi

![Animation of a taxi projectile](/static/courses/csintro3/structure/speedy-taxi.gif)

1. Review the code below
2. Identify how ``||sprites:projectile from side||`` is used to create
a car moving across the screen
3. Identify how ``||sprites:projectile from sprite||`` is used to create
customers that leave the car

```typescript
let taxi: Sprite = sprites.createProjectileFromSide(sprites.vehicle.carBlueRight, 50, 0);

for (let i = 0; i < 4; i++) {
    pause(1000);
    let customer: Sprite = sprites.createProjectileFromSprite(sprites.castle.princessFront0, taxi, 0, 30);
}
```

## Student Task #1: Super Speedy Taxi

1. Start with the code from example #1
2. Create a second ``||sprites:projectile from sprite||`` on each iteration of the loop,
that starts in the same spot as ``||variables:customer||`` but moves in the opposite direction
3. Make the ``||variables:taxi||`` temporarily **stop** to let out customers:
before creating the ``||variables:customer||`` ``||sprites:projectile||``,
set the ``||variables:customer||`` ``||sprites:vx||`` to 0,
and then ``||loops:pause||`` for half a second
4. After the customers are let out of the taxi,
reset the ``||variables:taxi||``'s ``||sprites:vx||`` to 50

### ~hint

You might have noticed that the ``||sprites:projectiles||`` shown in this section
do not allow for the ``SpriteKind`` to be set when they are created.
These are defined to have the ``SpriteKind`` ``1``,
which will typically correspond to the **second** ``SpriteKind`` in the project.

With the default ``SpriteKind`` in blocks,
this corresponds to ``SpriteKind.Projectile``.

```typescript-ignore

```

If you need to use another ``SpriteKind``,
the ``||sprites:sprites.createProjectile||`` function can be used.

```sig
sprites.createProjectile(null, 0, 0, 0, null);
```

This function behaves like ``||sprites:createProjectileFromSide||`` normally,
but switches to behave like ``||sprites:createProjectileFromSprite||`` when
a ``||sprites:sprite||`` is passed as the final parameter.
This allows you to specify the ``SpriteKind`` like you can with
a normal ``||sprites:sprite||``.

### ~

## Concept: Sprite Flags

``||sprites:Sprite Flags||`` can be used to provide ``||sprites:sprites||``
with common behaviors.
The ``||sprites:mySprite.setFlag||`` function can be used to turn flags
on and off.

```sig
sprites.create(null).setFlag(0, false);
```

By default, ``||sprites:Projectile||`` ``||sprites:sprites||``,
have two ``||sprites:sprite flags||`` turned on:
``||sprites:SpriteFlag.DestroyOnWall||``,
which will ``||sprites:destroy||`` the ``||sprites:sprite||``
when it collides with a ``||scene:Wall||``,
and ``||sprites:SpriteFlag.AutoDestroy||``,
which will destroy the ``||sprites:sprite||`` when it moves off the screen.

## Example #2: Bouncy Ball

1. Review the code below
2. Identify how ``||sprites:set flag||`` and ``||sprites:BounceOnWall||``
``||sprites:flags||`` are used to make the ``||sprites:bounce||`` around the screen
3. Identify how the ``||sprites:sprite||`` moves around the screen

```typescript
let mySprite: Sprite = sprites.create(img`
    . . . . d d d d d d d . . . .
    . . d d d d d d d d d d d . .
    . d d d d d d d d d d d d d .
    . d d d d d d d d d d d d d .
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d
    . d d d d d d d d d d d d d .
    . d d d d d d d d d d d d d .
    . . d d d d d d d d d d d . .
    . . . . d d d d d d d . . . .
`)
mySprite.setBounceOnWall(true);
mySprite.vx = 50;
```

## Student Task #2: More Bouncing!

1. Start with the code from example #2
2. Add a ``||sprites:y acceleration||`` of 40 to the ball
3. ``||loops:Pause||`` for 10 seconds after setting the acceleration
4. After the ``||loops:pause||``,
turn the ``||sprites:BounceOnWall||`` flag **off**
(``||sprites:set||`` it to ``||logic:false||``)

## Concept: Particle Effects

![Animation of the fire particle effect](/static/courses/csintro3/structure/fire-animation.gif)

Particle effects are **visual** effects that can be applied in your game.
They typically will not impact the game,
and are intended to add a visual flair to the games that you create.

These effects can be used in many different ways.
One common use is to start the effect **on** a ``||sprites:Sprite||``,
with ``||sprites:mySprite.startEffect||``.

```sig
sprites.create(null).startEffect(null, 0);
```

Another common way to use an effect is with an effect that can be applied
to the entire screen, with ``||scene:myEffect.startScreenEffect||``.

```sig
effects.confetti.startScreenEffect();
```

### ~hint

There are a number of different effects available,
but not all are particle effects.

It can be helpful to use the Blocks editor to see which effects are available
for any given type of effect,
as only the effects that are valid for that type of function will be listed in
the drop down on the block.

Effects are implemented as objects which control how they appear on the screen;
this course is not focused on Object Oriented Programming,
so the exact behaviors and implementations may not fully make sense right away.
You can find more details and examples of effects in the documentation for
[startEffect](/reference/sprites/sprite/start-effect) and
[startScreenEffect](/reference/scene/start-screen-effect).

### ~

## Example #3: Fire in a Snowstorm

1. Review the code below
2. Identify how ``effects.fire`` is used to set the logs on fire
3. Identify how ``effects.blizzard`` is used to create a 'snowstorm' background

```typescript
let myLogs = sprites.create(img`
    e e e e . . . . . e e . . . . .
    . e e e e e . e e e d e e . . .
    . . . e e e e e e e d e e . . .
    . . . e e e e e e e d e . . . .
    . . . . e d d d e e d e . . . .
    . . . . e e e d e e d e e e . .
    . . . e e e d e e e e d e e e .
    . . e e e d e e e e e e d e e e
    . e e d d e e . . e e e e d e e
    . e e d e e e . . . . e e d e e
    . e e d e e . . . . . . e e . .
    . e e e e e . . . . . . . . . .
    . . e e . . . . . . . . . . . .
`, SpriteKind.Player);

myLogs.startEffect(effects.fire);
effects.blizzard.startScreenEffect();
```

## Student Task #3: Stop and Start

1. Start with the code from example #3
2. Give both effects in the game a 2 second duration:
    * Add 2000 as an extra parameter to ``||sprites:startEffect||``
    * Add 2000 as a parameter to ``||scene:startScreenEffect||``
3. ``||loops:Pause||`` for 4 seconds after the current code
4. After the ``||loops:pause||``, start two more effects:
    * Start ``effects.warmRadial`` on ``||variables:myLogs||``
    with ``||sprites:startEffect||``
    * Start ``effects.starField`` with a ``||scene:startScreenEffect||``

## What did we learn?

1. How are ``||sprites:projectile||`` ``||sprites:Sprites||`` different
from ``||sprites:sprites||`` created with ``||sprites:sprites.create||``?
2. Create a hypothesis on how ``||sprites:SpriteFlag.StayInScreen||`` will
change the behavior of a ``||sprites:Sprite||``.
Test this hypotheses by creating a game that uses it.
3. How do particle effects impact your game?
When would particle effects not be useful?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/projectiles-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Initial Position

Earlier on in the case study,
the variables ``||variables:x||`` and ``||variables:y||`` were created to
store the location the player should start at.
Move these assignments after the creation of the ``||variables:player||``,
and then change it to set ``||variables:player.x||`` instead of ``||variables:x||``,
and ``||variables:player.y||`` instead of ``||variables:y||``.

### Solution

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
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
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let name: string = "Captain ";
let playerName: string = game.askForString("What is your name?");

if (playerName == "myName!") {
    playerName += " 2";
}

name += playerName;

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

for (let i = 0; i < 10; i++) {
    sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    pause(250);
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

controller.moveSprite(player, 80, 30);
player.x = screen.width / 2;
player.y = screen.height - 20;
```

### ~