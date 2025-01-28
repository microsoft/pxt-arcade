# Lab 2.6 Part 3: Not So Fast!

## Not too fast! @showdialog

At some point, your enemies will be moving too fast.
Let's update your game so that enemies have a speed limit!

## What's the limit?

First, let's determine the enemy's speed limit.

1.   Create a new variable that sets the enemy speed limit.
Call it something like **maxEnemySpeed**.
1.   In your   
``||loops(noclick):on start||``   
container, set your new variable to
a reasonable speed limit.

Run your project to make sure nothing has changed ... yet!
Check the hint to verify your code.

```blocks
let maxEnemySpeed = 0
let enemyVelocity = 0
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
enemyVelocity = 25
// @highlight
maxEnemySpeed = 150
```

## Mind your speed!

Now, let's enforce our new speed limit.

1.   Go back to that   
``||sprites(noclick):on overlap||``   
container where enemies are
destroyed when they collide when a projectile.
1.   Add blocks **to the bottom** of that container
to create the following ``||logic(noclick):if||`` statement:

``||logic:if||`` ``||variables:enemyVelocity||``
``||logic:is greater than||``
``||variables:maxEnemySpeed||`` ``||logic:then||``

-   ``||variables:set (enemyVelocity) to (maxEnemySpeed)||``

Run your project to test your speed limit. Try different speed limit values
and see what works best for your project.
Check the hint if you need help.

```blocks
let enemyVelocity = 0
let maxEnemySpeed = 0
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    enemyVelocity += 5
    // @highlight
    if (enemyVelocity > maxEnemySpeed) {
        enemyVelocity = maxEnemySpeed
    }
})
```

## Conclusion @showdialog

Good job! Now, let's ask the player how difficult they want the game to be.
On to Part 4!

```template
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
    enemyVelocity += 5
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
let enemyVelocity = 25
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, enemyVelocity)
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
    enemyVelocity += 5
    if (enemyVelocity > maxEnemySpeed) {
        enemyVelocity = maxEnemySpeed
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let maxEnemySpeed = 0
let enemyVelocity = 0
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
enemyVelocity = 25
maxEnemySpeed = 150
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, enemyVelocity)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
