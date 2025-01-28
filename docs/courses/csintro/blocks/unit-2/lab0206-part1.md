# Lab 2.6 Part 1: Only Room for Two of Us!

## There's only room for three of us! @showdialog

Many games limit the number of projectiles that you can create at any one time.
Let's update one of your previous projects to do just that!

## How many do you want?

First, let's define the maximum number of projectiles that we can have
on the screen.

1.   Create a new variable that will hold the maximum number of projectiles
allowed on the screen. Call it something like **maxProjectiles**.
1.   We also need a new variable that will keep track of the number of
projectiles currently on the screen. Call it something like
**projectileCount**.
1.   In your   
``||loops(noclick):on start||``   
container, set the value of   
``||variables:maxProjectiles||``   
to **3**.
1.   In your   
``||loops(noclick):on start||``   
container, set the value of   
``||variables:projectileCount||``   
to **0**.

Check the hint if you need help.

```blocks
let projectileCount = 0
let maxProjectiles = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
// @highlight
maxProjectiles = 3
// @highlight
projectileCount = 0
```

## Count 'em up!

Now we need to *increment* our variable when we create a projectile.

1.   In your   
``||controller(noclick):on (A) button (pressed)||``   
container,
add a block that changes the   
``||variables:projectileCount||``   
variable by **1**.

We also need to *decrement* our variable when a projectile is destroyed.
The easiest way to do this is to add a new event handler.

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on destroyed||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player)||``   
block.
1.   In this new container, change the kind to **Projectile**.
1.   In this new container,
add a block that changes the   
``||variables:projectileCount||``   
variable by **-1**.

Run your project. You should not see any difference from before. Why not?
View the hint to check your code.

```blocks
let plasmaSprite: Sprite = null
let projectileCount = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
    // @highlight
    projectileCount += 1
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
```

## Testing! Testing! 1 ... 2 ... 3!

Nothing seems different in your project.
We are counting the number of projectiles on the screen,
but we aren't doing anything to limit them.
Let's fix that!

1.   To the **top** of your   
``||controller(noclick):on (A) button (pressed)||``   
container, add an   
``||logic:if||``   
block.
1.   Move all of the blocks beneath the   
``||logic(noclick):if||``   
block inside of it.
1.   Add blocks so that the ``||logic:if||`` block reads:   
``||logic(noclick):if||`` ``||variables(noclick):projectileCount||``
``||logic(noclick):is less than||`` ``||variables(noclick):maxProjectiles||``.

Run your project and see if it limits the number of projectiles that you are
able to create. View the hint if you need help.

```blocks
let plasmaSprite: Sprite = null
let projectileCount = 0
let maxProjectiles = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
        plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
        plasmaSprite.setVelocity(0, -50)
        plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
        projectileCount += 1
    }
})
```

## Conclusion @showdialog

Good job! Now, let's make the enemies speed up! On to Part 2!

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, 25)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
        plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
        plasmaSprite.setVelocity(0, -50)
        plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
        projectileCount += 1
    }
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let projectileCount = 0
let maxProjectiles = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
maxProjectiles = 3
projectileCount = 0
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, 25)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
