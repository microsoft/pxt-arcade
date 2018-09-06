# Activity: Projectiles from Sprites

Projectiles are just sprites with a bit of extra behavior by default; this means that you can do anything with them that you can do with sprites. You can change their speed, the image they show, and how they interact with other sprites and have them originate from another sprite. 

In this activity, students will use:
* ``||sprites:projectile - from sprite||`` sprites
* ``||sprite:on sprite destroyed||``
* ``||math:pick random||``
* ``||sprites:ghost on||``

## Concept: Projectile From Sprite

https://youtu.be/Y7_-noa6_FU 

[Alternative Video Location](https://aka.ms/40544a-projectile-from-sprite) 

There are many games that have sprites sending out projectile sprites. We can set projectiles to originate from a sprite to drop coins, create obstacles, kick a ball or send a laser beam to destroy an asteroid by using ``||sprites:projectile - from sprite||`` as below: 

```block
enum SpriteKind {
    Player,
    Enemy,
    Target,
    Ball
}
let ball: Sprite = null
let mySprite: Sprite = null
ball = sprites.createProjectile(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, -50, 0, SpriteKind.Ball, mySprite)
```

### Example #1: Throw ball

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Throw Ball") 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Target,
    Ball
}
let mySprite: Sprite = null
let ball: Sprite = null
let targetVelocity = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectile(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, -50, 0, SpriteKind.Ball, mySprite)
    pause(200)
})
targetVelocity = 20
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

1. Start with the code from example #1
2. Modify the code to make a target sprite on the other side of the screen from the player sprite 
3. Add a countdown timer
4. Build an ``||sprites:on overlap||`` event for the ball and the target to add a point and destroy the ball
5. **Challenge**: Make the target into projectiles that move down the screen and add vertical motion to the player sprite

## Concept: Projectiles from other Projectile Sprites

https://youtu.be/EkG5UxwfxG8 

[Alternative Video Location](https://aka.ms/40544a-projectile-from-projectile)

We can use the projectiles we have made as the source of animation like projectiles by following the following examples to build a projectile raining cloud (that is a projectile). 

## Example #2a: Cloud projectile 

Start with the following cloud moving across the screen:

```blocks
enum SpriteKind {
    Cloud
}
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud)
```

There isn't all that much to this code; it spawns a cloud, which slowly moves across the screen. However, what if we want to make the cloud rain? We can do this by adding projectiles that are emitted from the cloud itself!

## Example #2b: Cloud projectile that emits projectile rain

Review the code carefully for the use of ``||sprites:ghost on||`` and ``||sprites:projectile -- from sprite||`` for the raindrop projectiles. 

```blocks
enum SpriteKind {
    Cloud,
    Rain
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
})
```

We set the raindrops to be ``||sprites:ghosts||`` - this means that **they won't be detected in overlap** with other sprites, and will pass through sprites as if there were no overlap events. It turns out that there is a fairly significant performance benefit to doing this when you spawn a large amount of projectiles (and don't need them to overlap with other sprites).

Try removing the ``||sprites:ghosts||`` block, and see how much the performance goes down.

## Example #2c: Cloud projectile that widely emits projectile rain

We can change where the rain drops show up, so that they don't all appear in the same location relative to the cloud by applying a random value to the raindrop X value. 

```block
let raindrop: Sprite = null
raindrop.x += Math.randomRange(1, 14)
```

```blocks

enum SpriteKind {
    Cloud,
    Rain
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})
```

## Example #2d: count destroyed raindrops

The ghost raindrop sprites can't have an overlap event but we can use ``||sprite:on sprite destroyed||``. So we can count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

```block
enum SpriteKind {
    Cloud,
    Rain
}
let raindrop: Sprite = null
sprites.onDestroyed(SpriteKind.Rain, function (sprite: Sprite) {
    info.changeScoreBy(1)
})
```

```blocks
enum SpriteKind {
    Cloud,
    Rain
}

let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectile(img`
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
`, 10, 0, SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    raindrop = sprites.createProjectile(img`
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
`, 0, 30, SpriteKind.Rain, cloud)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += Math.randomRange(1, 14)
})

sprites.onDestroyed(SpriteKind.Rain, function (sprite: Sprite) {
    info.changeScoreBy(1)
})

sprites.onDestroyed(SpriteKind.Cloud, function (sprite: Sprite) {
    game.over(true)
})
```

## Student Task #2: Projectile from Projectile

https://youtu.be/qlijC56n88k 

[Alternative Video Location](https://aka.ms/40544a-projectile-from-proj-task)

Make a projectile go across the bottom of the screen that will give off different projectiles that "float" to the top of the screen. Use parts of example code above for inspiration to start you project

1. Create a projectile that moves across the bottom of the screen
2. have a new projectile float from the original bottom projectile
3. Make several of the floating projectiles come from the bottom projectile 

### ~hint

Use a loop and if creating many projectiles use ``||sprite:ghost on||``

### ~

4. **Challenge**: As the projectiles "float" up from the bottom of the game screen give them a small random X direction so they move at a slight angle left or right

## What did we learn?

1. How can we make a sprite that came from a sprite block act like a projectile sprite? Explain the block code to use.
2. Give examples of using ghost and/or on overlap events in a game to make a projectile: decoration, laser beam, coin (reward). Explain each. 
3. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might make your game run faster than leaving it off.

### [Teacher Material](/courses/csintro/about/teachers)