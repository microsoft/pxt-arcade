# Review: Functionally the Same

Functions allow for code to be structured and reused. In this example, start by refactoring (restructuring) the provided code, and then adding some additional functionality on top.

![Functions Review](/static/courses/csintro2/review/functions.gif)

## Starter Code

```blocks
let mySprite: Sprite = null
let index = 0
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("teleporting!", 1000)
    pause(1000)
    for (let index = 0; index <= 40; index++) {
        mySprite.image.flipX()
        pause(Math.max(300 - 15 * index, 30))
    }
    mySprite.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("teleporting!", 1000)
    pause(1000)
    for (let index = 0; index <= 40; index++) {
        mySprite.image.flipX()
        pause(Math.max(300 - 15 * index, 30))
    }
    mySprite.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("teleporting!", 1000)
    pause(1000)
    for (let index = 0; index <= 40; index++) {
        mySprite.image.flipX()
        pause(Math.max(300 - 15 * index, 30))
    }
    mySprite.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("teleporting!", 1000)
    pause(1000)
    for (let index = 0; index <= 40; index++) {
        mySprite.image.flipX()
        pause(Math.max(300 - 15 * index, 30))
    }
    mySprite.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . f f f f . . . . . .
. . . . f f f 2 2 f f f . . . .
. . . f f f 2 2 2 2 f f f . . .
. . f f f e e e e e e f f f . .
. . f f e 2 2 2 2 2 2 e e f . .
. f f e 2 f f f f f f 2 e f f .
. f f f f f e e e e f f f f f .
. . f e f b f 4 4 f b f e f . .
. f f e 4 1 f d d f 1 4 e f . .
f d f f e 4 d d d d 4 e f e . .
f b f e f 2 2 2 2 e d d 4 e . .
f b f 4 f 2 2 2 2 e d d e . . .
f c f . f 4 4 5 5 f e e . . . .
. f f . f f f f f f f . . . . .
. . . . f f f . . . . . . . . .
`, SpriteKind.Player)
```

## Student Task #1: Refactoring

Start with the code above. It has the same action described for when any of the arrow keys are pressed, but cannot use ``||controller:on any button pressed||`` because the player is not suppposed to teleport when ``||controller:A||`` or ``||controller:B||`` is pressed.

1. Create a function, ``||functions:teleport||``, and duplicate the code from the ``||controller:on left button pressed||`` event into that event
2. Replace the blocks inside the ``||controller:on left button pressed||`` event with ``||functions:call function teleport||``
3. Identify whether the code will behave the same way now as it did before ``||functions:teleport||`` was created
4. Replace the blocks in the 3 other ``||controller:controller||`` events with ``||functions:call function teleport||``

At this point, compare your solution to this task to the provided code:

* is it easier or harder to identify what the ``||controller:controller events||`` do?
* which version has more blocks?
* if you wanted to make the player spin less before teleporting by changing the value in the ``||loops:for index||`` loop, which version is easier to change?

## Student Task #2: ``||controller:A||`` and ``||controller:B||``

Add behavior for a ``||controller:A||`` and ``||controller:B||`` to the game

1. Create a new function called ``||functions:wizard||``. Place ``||functions:call function wizard||`` in both a ``||controller:on A button pressed||`` and a ``||controller:on B button pressed||``
2. In ``||functions:wizard||``, create a ``||logic:if then ... else||``. Replace ``||logic:true||`` with ``||math:0 % chance||``, and change 0 to 50
3. In the ``||logic:if then||`` section, make ``||variables:mySprite||`` move in a square
4. In the ``||logic:else||`` section, make ``||variables:mySprite||`` fire out a blast of sunshine

The exact way you choose to implement steps 3 and 4 is up to you, but the way we did it is listed below

### ~hint

To make the sprite move in a square, you can:

1. ``||sprites:change mySprite x by -10||``, then ``||loops:pause||`` for 250 ms
2. ``||sprites:change mySprite y by -10||``, then ``||loops:pause||`` for 250 ms
3. ``||sprites:change mySprite x by 10||``, then ``||loops:pause||`` for 250 ms
4. ``||sprites:change mySprite y by 10||``

### ~

### ~hint

To fire out a blast of sunshine:

1. Get a ``||loops:repeat 40 times||`` loop
2. Inside the loop, create a ``||sprites:projectile||``, with an image of a single yellow pixel
3. Set the ``||sprites:vx||`` and ``||sprites:vy||`` in the ``||sprites:projectile||`` to be random values using ``||math:pick random -75 to 75||``
4. Click the ``+`` in ``||sprites:projectile||`` and make the projectile come ``||sprites:from sprite||`` ``||variables:mySprite||``
5. Get ``||sprites:set mySprite auto destroy||``, change ``||variables:mySprite||`` to ``||variables:projectile||``, change ``||sprites:auto destroy||`` to ``||sprites:ghost||``, and turn it ``on``

### ~

## Student Task #3: Teleport Sunshine

After seeing the blast of sunshine from the ``||functions:wizard||``, we want to add it to the teleportation. To do so, we will move both the possible actions from ``||functions:wizard||`` into separate functions - that way, anyone who reads the function can get an idea of what's going on without guessing what it was intended to do.

1. Create a new function ``||functions:move in a square||``, and move the code from the ``||logic:if then||`` section in ``||functions:wizard||`` into it. Add ``||functions:call function move in a square||`` to replace the code taken from ``||functions:wizard||``
2. Create a new function ``||functions:blast of sunshine||``, and move the code from the ``||logic:else||`` section in ``||functions:wizard||`` into it. Add ``||functions:call function blast of sunshine||`` to replace the code taken from ``||functions:wizard||``
3. Add ``||functions:call function blast of sunshine||`` to ``||functions:teleport||``, right before the ``||sprites:set mySprite position to||`` block, so that immediately before ``||variables:mySprite||`` moves, there is a ``||functions:blast of sunshine||``
