# Activity: Generate Sprites using ``||sprites:create||`` and ``||sprites:on created||``

Many games need to spawn sprites for the player to do things like collect coins or avoid oil spills.

We will use the ``||sprites:set mySprite to||`` block from the Sprites menu to spawn a new empty sprite, with nothing in it yet. Then we can use an ``||sprites:on created||`` event to set the image and a random position for newly generated sprites.

The ``||sprites:on created||`` block uses the sprite's ``||sprites:kind||`` so we can give our new sprites the exact attributes we want, like an image, velocity, or position.

## Concept: Create with on created event

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/XR8DmTOdgNc)

## Example #1: Random clouds #example-1

This example uses the ``||sprites:on created||`` event to set the sprite image and location after a sprite of a particular ``||sprites:kind||`` is spawned.

1. Review the code below
2. Create a new project and name it “spawnCloud”
3. Create the sample code and run the code
4. Carefully examine the ``||sprites:sprite of kind||`` oval in the ``||variables:set cloud to||`` blocks and the ``||sprites:on created||`` event

```blocks
namespace SpriteKind {
    export const Helicopter = SpriteKind.create();
    export const Cloud = SpriteKind.create();
}
let agent: Sprite = null
let cloud1: Sprite = null
let cloud2: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
sprites.onCreated(SpriteKind.Cloud, function (newCloud) {
    newCloud.setImage(img`
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
`)
    newCloud.x = randint(16, scene.screenWidth() - 16)
    newCloud.y = randint(20, scene.screenHeight() - 75)
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
game.splash("Generated Clouds", "on Sprite created")
scene.setBackgroundColor(9)
agent = sprites.create(img`
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

cloud1 = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cloud)
cloud2 = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cloud)
```

## Student Task #1: More Random Clouds

The ``||sprites:on created||`` event allows us to set code to run whenever a new sprite is created. This is used to create new clouds multiple times with the same code. Now we will create new clouds with ``||variables:set cloud to||`` blocks with empty image editors.

1. Start with example #1 or your own similar code
2. Add two more ``||variables:set cloud to||`` blocks for clouds
3.	Add a new ``||variables:set mySprite to||`` block for a different ``||sprites:kind||``. Use the ``||sprites:on created||`` event to
    * set an image for the sprite that is created (for example, a bird or a butterfly)
    * set the sprite to be in a random position
4.	Use ``||variables:set mySprite to||`` blocks to create at least five of the kinds
5. **Challenge:** create an event for the ``||sprites:Helicopter||`` overlap with the new ``||sprites:kind||`` that has an action that gives the new ``||sprites:kind||`` a fast velocity so that it will fly off the screen after they overlap

## What did we learn?

1. Describe how a ``||sprites:kind||`` label is used in generating a sprite by creating an empty sprite block.
2. Explain what the ``||sprites:on created||`` block does for you.

### [Teacher Material](/courses/csintro1/about/teachers)
