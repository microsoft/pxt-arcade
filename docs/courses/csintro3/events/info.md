# Activity: Info

The ``||info:Info||`` category has three values that it can keep track of by default: a player's ``||info:score||`` and ``||info:health||``, as well as a ``||info:countdown||`` for the game.

In addition to keeping track of those values, it also allows for a few interesting events: ``||info:on life zero||`` and ``||info:on countdown end||``. These events allow you to override the default behavior of ending the game when the values hit zero.

## Concept: ``||info:Life||``, ``||info:Score||``, and ``||info:Countdown||``s

The values in the ``||info:info||`` can be modified using a few different methods.

## Example #1a: Setting the Score (and Life)

1. Review the code below
2. Identify which sections are used to modify the ``||info:score||``
3. Identify which sections are used to modify the ``||info:life||``

```typescript
info.setScore(0);
info.setLife(5);

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1);
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1);
});
```

## Example #1b: Counting Down

1. Review the code below
2. Identify which sections are used to create a ``||info:countdown||``
3. Identify how the game is played: what is the goal?

```typescript
info.setScore(0);

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1);
});

info.startCountdown(15);
```

## Student Task #1: Losing Life

1. Review the code below, and copy it into a new project
2. Set the ``||info:life||`` to 100 to start
3. Modify the ``||sprites:Overlap||`` event so that it will ``||info:info.changeScoreBy||`` -1 when the ``||sprites:Player||`` ``||sprites:overlaps||`` with the ``||sprites:Enemy||``
4. **Challenge:** currently, the ``||sprites:overlap||`` event will continue to take away life each ``||game:game update||`` where the ``||sprites:sprites||`` overlap. To fix this, make one of the ``||sprites:sprites||`` a ``||sprites:Ghost||``, ``||loops:pause||`` for 500 ms, and then turn off ``||sprites:Ghost||``, so that the ``||sprites:overlap||`` event will only trigger once every 500 ms

### ~hint

Notice that this is the same snippet from the examples in the [Overlap Events](/courses/csintro3/events/overlap) section.

### ~

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}

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
})
```

## Concept: ``||info:Info||`` Events

By default, getting down to 0 (or fewer) ``||info:lives||`` or running out of time for a ``||info:countdown||`` causes a ``||game:game over||``. If a game requires a different behavior for this situation, then this behavior can be handled using one of two events: ``||info:info.onLifeZero||`` and ``||info:info.onCountdownEnd||``.

## Example #2: Running out of Lives

1. Review the code below
2. Identify how the ``||info:info.onLifeZero||`` changes the behavior of the game

```typescript
info.setScore(0);
info.setLife(5);

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1);
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1);
});

info.onLifeZero(function () {
    if (game.ask("Do you want to continue?")) {
        info.setLife(5);
    } else {
        game.over();
    }
});
```

## Student Task #2: Loss Animation

1. Start with the code from task #1
2. Add an ``||info:on life zero||`` event, which turns ``||variables:mySprite||`` into a ``||sprites:Ghost||``
3. Use ``||game:game.splash||`` to display "Oh no, I have lost..."
4. After the ``||game:splash screen||``, end the game with ``||game:game.over||``

### ~hint

If you completed the **challenge** in task #1, you will likely want to lower the initial ``||info:life||`` to about 5 to verify your ``||info:on life zero||`` event is working properly.

### ~

## Student Task #3: More Time!

1. Start with the code from task #2
2. Add a ``||info:countdown||`` that starts at 20 seconds
3. Add an ``||info:on countdown end||`` event
4. In the ``||info:on countdown end||`` event, make ``||variables:mySprite||`` ``||sprites:say||`` "Oops, I need more time!" for 1000 ms
5. In the ``||info:on countdown end||`` event, start a new ``||info:countdown||`` with 20 seconds

## What did we learn?

1. How are the properties in the ``||info:Info||`` category **different** from the ``||variables:Variables||`` we create?
2. How do the ``||info:Info||`` events add more options to the games we create?
