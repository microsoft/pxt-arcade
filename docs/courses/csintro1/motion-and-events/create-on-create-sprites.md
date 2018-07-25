# Activity: Generate Sprites using Create and On Create

Many games need to spawn sprites to be collected like coins, or avoided like oil spills. We will use ``||sprites:create empty sprite||`` to spawn a new empty sprite, which is a place holder for a sprite without an image. Then use a ``||sprites:on created||`` event to set the image and a random position for newly generated sprites.  ``||sprites:on created||`` uses sprite kind so we can gie our new sprites the exact attributes we want like image, velocity or position.

## Concept: Random Clouds - on created event with spawn SpriteKind 

https://youtu.be/iPxXjitXEUg 

## Example 2: random clouds

Use ``||sprites:on created||`` event to set image and location after a SpriteKind is spawned

1. Review the code below 
2. Create the sample code and run the code 
3. Save the code for the task (name it "spawnCloud")  
4. Carefully examine the ``||sprites:create empty sprite||``  block and ``||sprites:on created||`` event

```blocks
enum SpriteKind {
    Helicopter,
    Cloud,
    Player,
    Enemy
}
let cloud2: Sprite = null
let cloud1: Sprite = null
let agent: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
// Control the copter with the + pad
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
    newCloud.x = Math.randomRange(16, screen.width - 16)
    newCloud.y = Math.randomRange(20, screen.height - 75)
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
// Create and place "clouds"  Sprites
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
```

## Student Task #2: More Random Clouds

The ``||sprites:on created||`` event allows us to become efficient with our code by running our set up for new clouds multiple times with the same code.  Now we will create new clouds with ``||Sprite:create empty sprite ||`` blocks.

1. start with example #2 or your own similar code  
2. Review the code and find create empty sprite of kind blocks
3. add 2 more create empty sprite of kind blocks for clouds
4. create empty sprite of a new SpriteKind: 
    - create empty sprite having a small image, perhaps a bird, butterfly, other small item
    - add the image and random position using a new ``||sprites:on created||`` event block. 
    - create ``||Sprite:create empty sprite||`` for at least five of the new sprites (in random positions)
5. Challenge: create an event for the Helicopter overlap with the new SpriteKind that has an action that gives the New SpriteKind a fast velocity so will fly off the screen after overlap.

## What did we learn? 

1.  Describe how a ``SpriteKind`` label is used in generating a sprite using ``||Sprite:create empty sprite||`` block
2. Explain what the  ``||sprites:on created||`` block does.

## Rubrics

### Overlap task rubric [TODO from overlap 2 make unique]

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Create & On-Create | fully competed 1a + b tasks|  fully completed all 3 tasks | Completed all 3 tasks and at least 1 Challenge | Completed all tasks and Challenge Code  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric [todo - from overlap 2]
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanations | answered questions but parts are unclear or lack detail | Explanations address both questions fully | all answers have clear explanations | included an exceptional explanation with original example, drawing or analogy |

### Score = \_\_\_\_\_\_ /10 