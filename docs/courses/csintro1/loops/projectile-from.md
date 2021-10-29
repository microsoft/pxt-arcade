# Activity: Projectiles from Sprites

Another option for projectiles is to set a sprite for them to originate from. This is particularly useful for creating special effects.

In this activity, students will use:

* ``||sprites:projectile from mySprite||`` sprites
* ``||sprites:on sprite destroyed||``
* ``||math:pick random||``
* ``||sprites:ghost on||``

## Concept: Projectile from Sprite

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/bX9FOLNmScA)

There are many games that have sprites sending out projectile sprites. We can set projectiles to originate from a sprite to drop coins, create obstacles, kick a ball or send a laser beam to destroy an asteroid by using ``||sprites:projectile from mySprite||``.

```block
let ball: Sprite = null
let mySprite: Sprite = null
ball = sprites.createProjectileFromSprite(img`
. . . . . . 7 7
. . . . . . 7 7
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
`, mySprite, -50, 0)
```

### Example #1: Throw ball #example-1

1. Review the code below
2. Create a new project and name it "Throw Ball"
3. Create the sample code and run the code

```blocks
let mySprite: Sprite = null
let ball: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
. . . . . . 7 7
. . . . . . 7 7
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
`, mySprite, -50, 0)
    pause(200)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . e e e e . . 7 7 . .
. . . . . . e d d e . . 7 9 . .
. . . . . . e d d e . . 4 . . .
. . . . . . . d d . 4 4 . . . .
. . . . . . 4 5 5 4 4 . . . . .
. . . . . 4 4 4 4 . . . . . . .
. . . 9 4 4 . 4 4 . . . . . . .
. . . . . . . 4 4 . . . . . . .
. . . . . . . 3 3 . . . . . . .
. . . . . . 3 3 3 . . . . . . .
. . . . . 3 3 . 3 3 . . . . . .
. . . . . 3 . . . 3 3 . . . . .
. . . . . 3 . . . . 3 . . . . .
. . . . 1 1 . . . 1 1 . . . . .
`, SpriteKind.Player)
mySprite.setPosition(145, 60)
```

## Student Task #1: Throw a ball at a target

1. Start with the code from [example #1](#example-1)
2. Modify the code to make a target sprite on the other side of the screen from the player sprite
3. Add a countdown timer
4. Create an ``||sprites:on overlap||`` event for the ball and the target to add a point and destroy the ball
5. **Challenge**: make the target into projectiles that move down the screen and add vertical motion to the player sprite

## Concept: Projectiles from other Projectile Sprites

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/SJh_4f_SQss)

We can use projectiles to create an animation. The following examples build a projectile raining cloud (that is also a projectile).

## Example #2: Cloudy Day

1. Review the code snippets below
2. For each snippet, create the sample code and run the code
3. Identify what is new in each snippet

### Example #2a: Cloud projectile

```blocks
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . 1 1 1 1 1 . 1 . . .
. . 1 1 1 1 1 9 9 9 1 1 1 1 . .
. . 1 1 9 9 9 9 1 9 9 9 9 1 . .
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . .
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . .
. 1 1 1 1 1 1 1 1 1 1 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 10, 0)
cloud.y = 60
```

There's not much to this code; it spawns a cloud, which slowly moves across the screen. However, what if we want to make the cloud rain? We can do this by adding projectiles that are emitted from the cloud itself!

### Example #2b: Cloud projectile that emits projectile rain

Review the code carefully for the use of ``||sprites:projectile from sprite||`` for the raindrop projectiles.

```blocks
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . 1 1 1 1 1 . 1 . . .
. . 1 1 1 1 1 9 9 9 1 1 1 1 . .
. . 1 1 9 9 9 9 1 9 9 9 9 1 . .
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . .
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . .
. 1 1 1 1 1 1 1 1 1 1 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 10, 0)
cloud.y = 60
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
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
`, cloud, 0, 30)
})
```

### Example #2c: Cloud projectile that widely emits projectile rain

We can make the rain drops show up at different places so that they don't all appear in the same location relative to the cloud. We'll set the raindrop `X` property to a random value.

```block
let raindrop: Sprite = null
raindrop.x += randint(1, 14)
```

```blocks
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . 1 1 1 1 1 . 1 . . .
. . 1 1 1 1 1 9 9 9 1 1 1 1 . .
. . 1 1 9 9 9 9 1 9 9 9 9 1 . .
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . .
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . .
. 1 1 1 1 1 1 1 1 1 1 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 10, 0)
cloud.y = 60
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
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
`, cloud, 0, 30)
    raindrop.y += 3
    raindrop.x += randint(1, 14)
})
```

### Example #2d: Count destroyed raindrops

We can count the raindrops that make it to the bottom of the screen by adding them up in an ``||sprites:on destroyed sprite of kind||`` event.

```blocks
namespace SpriteKind {
    export const Cloud = SpriteKind.create();
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . 1 1 1 1 1 . 1 . . .
. . 1 1 1 1 1 9 9 9 1 1 1 1 . .
. . 1 1 9 9 9 9 1 9 9 9 9 1 . .
. 1 1 9 9 1 9 9 1 9 9 1 9 1 . .
. 1 9 9 1 9 9 9 9 1 1 1 1 1 . .
. 1 1 1 1 1 1 1 1 1 1 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 10, 0)
cloud.setKind(SpriteKind.Cloud)
cloud.y = 60
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
. . 9 . . . . . . . . . . . . .
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
`, cloud, 0, 30)
    raindrop.y += 3
    raindrop.x += randint(1, 14)
})

sprites.onDestroyed(SpriteKind.Projectile, function (sprite: Sprite) {
    info.changeScoreBy(1)
})

sprites.onDestroyed(SpriteKind.Cloud, function (sprite: Sprite) {
    game.over(true)
})
```

Note the new ``||sprites:set cloud kind to Cloud||`` block was added in as well; the cloud ``||sprites:Projectile||``'s ``||sprites:kind||`` needed to be changed so that a different ``||sprites:on destroyed||`` event can be applied to the clouds and the rain drops.

## Student Task #2: Projectile from Projectile

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/NEUZT6jdUkw)

Make a projectile move across the bottom of the screen that, while moving, gives off different projectiles that "float" to the top of the screen. Use parts of example code above for inspiration to start you project.

1. Create a ``||sprites:projectile from side||`` that moves across the bottom of the screen
2. Create a new ``||sprites:projectile from mySprite||`` that floats from the original bottom projectile
3. Use ``||loops:loops||`` or ``||game:on update every||`` event to create more of the projectile from part 2
4. **Challenge:** as the projectiles "float" up from the bottom of the game screen, give them a small random X velocity so they move at a slight angle to the left or right

## What did we learn?

1. How can we make a sprite that came from a regular ``||sprites:sprite||`` act like a projectile sprite? Explain the block code to use.
2. Give examples of using on overlap events in a game to make projectiles that are decorations, laser beams, and coins (reward). Explain each.
3. **Challenge:** create a hypothesis about why it might be useful to make projectiles have ``||sprites:ghost on||``.

### [Teacher Material](/courses/csintro1/about/teachers)
