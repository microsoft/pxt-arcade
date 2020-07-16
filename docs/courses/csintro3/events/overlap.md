# Activity: Sprite Overlap Events

``||sprites:Overlap||`` events allow developers to easily handle situations in
which different characters overlap on the game screen.

This can be used for all sorts of different behaviors: allowing lasers to destroy
asteroids, players to collect coins, or any other interaction between colliding sprites.

## Concept: Sprite Overlaps

Creating ``||sprites:Sprite Overlap||`` events is a bit more complicated than previous events.

```sig
sprites.onOverlap(0, 0, undefined);
```

The ``||sprites:sprites.onOverlap||`` event accepts three parameters:
the ``||sprites:kind||`` of the first ``||sprites:sprite||``,
the ``||sprites:kind||`` of the second ``||sprites:sprite||``,
and finally the **event handler**.

This event handler is a bit different than previous events, though.
It accepts **two parameters**: first, the ``||sprites:sprite||`` of
the first ``||sprites:kind||`` listed in the event's parameter, and second,
the ``||sprites:sprite||`` of the other kind that is listed.

## Example #1: Adding an Overlap Event

![Adding Overlap Event](/static/courses/csintro3/events/adding-overlap.gif)

1. Review the code snippet below
2. Identify how the overlap event is added to the code
3. Identify which sprite in the **event handler** is ``||variables:mySprite||``,
and which is ``||variables:enemy||``

```typescript
let mySprite = sprites.create(img`
    1 1 1
`, SpriteKind.Player);
controller.moveSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
    5 2 5
    2 5 2
    5 2 5
`, SpriteKind.Enemy);
enemy.x += 50;

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch!", 250);
});
```

## Student Task #1: Adding to an Overlap Event

1. Start with the code from example #1
2. Add another ``||sprites:say||`` to the event handler so that the ``||sprites:Enemy||``
sprite ``||sprites:says||`` "Sorry" for 500 ms
3. Add a ``||loops:pause||`` of 500 ms in between the two calls to ``||sprites:say||``,
so that the ``||sprites:Enemy||`` takes a bit to respond

## Concept: Ghost Sprites

The ``||sprites:Ghost||`` flag for ``||sprites:sprites||`` is used to indicate that
the sprite should ignore ``||sprites:overlap||`` events and collisions with ``||scene:Walls||``.

In the previous courses, it was very common to set a ``||sprites:Sprite||`` to be a
``||sprites:Ghost||`` temporarily during events, to make it so the
``||sprites:Overlap||`` events would trigger only once. In JavaScript,
this can be done using ``||sprites:setFlag||``.

## Example #2: Making a Ghost

1. Review the code below
2. Identify the section of the code that makes the ``||sprites:Enemy||``
into a ``||sprites:Ghost||``

```typescript
let mySprite = sprites.create(img`
    1 1 1
`, SpriteKind.Player);
controller.moveSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
    5 2 5
    2 5 2
    5 2 5
`, SpriteKind.Enemy);
enemy.x += 50;

enemy.setFlag(SpriteFlag.Ghost, true);
```

## Student Task #2: Ghost and Events

1. Start with the code from task #1
2. Create a second ``||sprites:Enemy||`` sprite, and change the ``||sprites:x||``
position by ``-50``
3. Set the new ``||sprites:Enemy||`` to be a ``||sprites:Ghost||``
4. Move ``||variables:mySprite||`` so that it overlaps both enemies.
Verify that only one will trigger the ``||sprites:overlap||`` event

## Example #3: Bounce!

1. Review the code below
2. Identify the code related to the ``||variables:paddle||``: in particular,
the sections that will
    * create the ``||variables:paddle||`` ``||sprites:Sprite||``
    * move the ``||variables:paddle||`` towards the bottom of the screen
    * allow the ``||variables:paddle||`` to be controlled using the left and right buttons
3. Identify the code related to the ``||variables:ball||``:
in particular, the sections that will
    * create the ``||variables:ball||`` ``||sprites:Sprite||`` every second
    * give the ``||variables:ball||`` an initial position

```typescript
namespace SpriteKind {
    export const Paddle = SpriteKind.create();
    export const Ball = SpriteKind.create();
}

let paddle: Sprite = sprites.create(img`
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
`, SpriteKind.Paddle);
paddle.y += 50;
controller.moveSprite(paddle, 100, 0);

game.onUpdateInterval(1000, function () {
    let ball: Sprite = sprites.createProjectile(img`
        . . 1 1 . .
        . 1 1 1 1 .
        1 1 d d 1 1
        1 1 d d 1 1
        . 1 1 1 1 .
        . . 1 1 . .
    `, randint(-40, 40), 30, SpriteKind.Ball);
    ball.x = screen.width / 2;
    ball.y = screen.height / 2;
});
```

## Student Task #3: Bounce on the Paddle

![Animation of difference between example and completed task 3](/static/courses/csintro3/events/bounce-task.gif)

1. Start with the code from example #3
2. Add an ``||sprites:overlap||`` event between ``||sprites:sprites||``
of kind ``||sprites:Paddle||`` and ``||sprites:Ball||``
3. In the event, reverse the ``||sprites:Ball||``'s ``||sprites:vy||``.
This can be done by assigning it to the 0 minus the current ``||sprites:vy||``
4. In the event, set the ``||sprites:Ball||`` to be a ``||sprites:Ghost||``,
so that it will only overlap with the paddle a single time

## What did we learn?

1. In your own words, explain why the **event handler** for the
``||sprites:overlap event||`` has two parameters.
2. Why is the ``||sprites:Sprite||`` ``||sprites:Ghost||`` flag
commonly used in ``||sprites:overlap||`` events?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/events/overlap-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Enemy Lasers

In the previous lesson, a basic level of artificial intelligence to the game;
the enemy will "follow" the player for as long as it survives,
and randomly fire it's laser.
There's one big problem, though; the laser doesn't do anything.

Add an ``||sprites:on overlap||`` event between ``Player`` and ``EnemyLaser``
``||sprites:sprites||``. In the overlap,
destroy the ``EnemyLaser`` ``||sprites:sprite||``,
and make the ``Player`` ``||sprites:sprite||`` ``||sprites:say||`` "ow!" for 500ms.

### Destroy Effects

In the ``||sprites:on overlap||`` event between ``Laser`` and ``Enemy``,
modify the ``otherSprite.destroy`` to use the ``effects.bubble`` effect.

In the ``||sprites:on overlap||`` event between ``Laser`` and ``Asteroid``,
modify the ``otherSprite.destroy`` to use the ``effects.fire`` effect,
with a duration of 200ms.

### Solution

```typescript-ignore
/**
 * Handle overlaps between different sprites
 */
namespace overlapevents {
    // When a laser hits an asteroid, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy(effects.fire, 200);
        sprite.destroy();
    });

    // When a laser hits an enemy, destroy both sprites
    sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy(effects.bubbles);
        sprite.destroy();
    });

    // When an  enemy laser hits the player, destroy the laser and say "ow!"
    sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyLaser, function (sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy();
        sprite.say("ow!");
    });
}
```

### ~