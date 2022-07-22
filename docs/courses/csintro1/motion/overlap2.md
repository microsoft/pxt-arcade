# Activity: Sprite Overlap & Events - Part 2

We use ``||sprites:kind||`` to give a label to our sprites so we can define how one ``||sprites:kind||`` of sprite will react when moving on top of another ``||sprites:kind||`` of sprite.

By making several cloud shaped sprites with the same ``||sprites:kind||`` of `Cloud`, we can write code so that all of the clouds interact with the ``Helicopter`` in the same way with an overlap event.

In this activity, the student will continue to work with:

* ``||sprites:on overlap event||`` with a ``||sprites:kind||`` applied to several identical sprites
* Overlap events

## Concept: ``||sprites:Kind||`` Overlap Event "bump" action

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/c4IkWhgS9l0)

Having sprites bump rather than pass over each other is useful game behavior for a ``||sprites:kind||`` overlap event. One way to simulate a bump is:

1. Move the sprite in the opposite direction after the overlap (we will make it bump backwards). The faster we bump, the farther we move away from the overlap object
    * Change x position by (-1) \* (``||sprites:vx||``)
    * Change y position by (-1) \* (``||sprites:vy||``)
2. Stop the sprite
    * Set ``||sprites:vx||`` and ``||sprites:vy||`` to 0
3. Shake the stationary object (cloud)
    * Move 1 pixel (in any direction)
    * ``||loops:pause||``
    * Move back

## Example #1: Bump action from overlap event #example-1

1. Review the code below
2. Create a new project and name it “copterBump1”
3. Create the sample code and run the code
4. Look at the overlap event - note which sprite is named ``||variables:sprite||`` and which is ``||variables:otherSprite||``, and how the code creates the bump behavior

```blocks
namespace SpriteKind {
    export const Helicopter = SpriteKind.create();
    export const Cloud = SpriteKind.create();
    export const LandingPad = SpriteKind.create();
}
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let copter: Sprite = null
let landing: Sprite = null
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
game.splash("Cloud Bump", "control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . .
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . .
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . .
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . .
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . .
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . .
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . .
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . .
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . .
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . .
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . .
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . .
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . .
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . .
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . .
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . .
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . .
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . .
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Helicopter)
copter.setStayInScreen(true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . 1 1 1 1 1 8 . . . . . .
. . . 1 1 8 8 8 1 1 1 1 1 1 . .
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 .
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 .
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 .
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . .
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . .
. . . . 1 1 8 8 1 1 8 8 1 . . .
. . . . . . 8 8 8 1 1 1 1 . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . 1 1 1 1 1 8 . . . . . .
. . . 1 1 8 8 8 1 1 1 1 1 1 . .
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 .
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 .
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 .
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . .
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . .
. . . . 1 1 8 8 1 1 8 8 1 . . .
. . . . . . 8 8 8 1 1 1 1 . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . 1 1 1 1 1 8 . . . . . .
. . . 1 1 8 8 8 1 1 1 1 1 1 . .
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 .
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 .
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 .
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . .
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . .
. . . . 1 1 8 8 1 1 8 8 1 . . .
. . . . . . 8 8 8 1 1 1 1 . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40

landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.LandingPad)
landing.y = 125
```

## Student Task #1: Soft Landing #task-1

There is a "T" shaped landing area at the bottom of the example. The helicopter sprite should not go through the landing pad, it should land!

1. Starting with [example #1](#example-1), replace the helicopter motion with the short method using ``||controller:dx (left-right buttons)||``
2. Review the rest of the code, and then add an ``||sprites:on overlaps||`` event for when the helicopter overlaps with the landing (note the ``||sprites:kind||`` of ``||sprites:LandingPad||``)
3. The block of code in the overlap event should stop the helicopter velocity motion (setting both ``vx`` and ``vy`` to zero) and then change the helicopter position **up** 2 pixels so it isn't overlapping any more
4. **Challenge:** add a new sprite and ``||sprites:kind||`` to the screen (for example, a mountain or a tree) and set the overlap action to make the helicopter sprite have an erratic motion after an overlap. This should require 3 or more changes in position and/or velocity

### ~hint

#### Challenge hint

Erratic motion can be made by changing the sprite position back and forth multiple times. Try changes in velocity and/or position separated by short pauses.

### ~

## Student Task #2: Add a new unique sprite with ``||sprites:kind||`` of ``||sprites:Cloud||``

1. Starting with example code or [task #1](#task-1)
2. Add a new sprite that looks nothing like a cloud (for example, a hat or a tree)
3. Make sure the new sprite has ``||sprites:kind||`` of ``||sprites:Cloud||`` even though it is not a cloud
4. Position the new sprite so it is not touching any other sprite
5. **Challenge:** add another Sprite that looks different from the previous new sprite and give it a ``||sprites:kind||`` other than ``||sprites:Cloud||`` and make sure it has a unique overlap event action (e.g. - might say something new)
6. Test the overlaps on the new sprite(s)

## What did we learn?

1. Describe how a ``||sprites:kind||`` can improve code (for example, how it can make programming easier, more powerful, more efficient, ...).
2. Explain why in creating a "bump" effect negative `X` and `Y` velocities are used to change the `X` and `Y` positions.

### [Teacher Material](/courses/csintro1/about/teachers)
