# Lab 2.6 Part 3: Not So Fast!
### @explicitHints true

## Not too fast! @showdialog

At some point, your enemies will be moving too fast.

Let's update your game so that enemies have a speed limit!

![Lab 2.6.3](https://arcade.makecode.com/api/_e6MEdsWedWoc/thumb)


## What's the limit?

First, let's determine the enemy's speed limit.

---

1.   Create a new ``||variables:variable||`` that sets the enemy speed limit.<br/>
(Call it something like **maxEnemyVY**.)
1.   In your<br/> 
``||loops(noclick):on start||``<br/> 
container, set your new variable to
a reasonable speed limit.

---

Run your project to make sure nothing has changed...yet!

#### ~ tutorialhint

```blocks
let maxEnemyVY = 0
let enemyVelocity = 0
let projectileCount = 0
let maxProjectiles = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
maxProjectiles = 2
projectileCount = 0
enemyVelocity = 25
// @highlight
maxEnemyVY = 150
```

## Mind your speed!

Now, let's enforce our new speed limit.

---

1.   Go back to that<br/> 
``||sprites(noclick):on overlap||``<br/> 
container where enemies are
destroyed when they collide with a projectile.
1.   Add blocks **to the bottom** of that container
to create the following ``||logic:if||`` statement:

``||logic:if <enemyVelocity [>] maxEnemyVY> then||``

-   ``||variables:set [enemyVelocity] to [maxEnemyVY]||``

---

Run your project to test your speed limit. Try different speed limit values
and see what works best for your project.


#### ~ tutorialhint

```blocks
let enemyVelocity = 0
let maxEnemyVY = 0
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    enemyVelocity += 5
    // @highlight
    if (enemyVelocity > maxEnemyVY) {
        enemyVelocity = maxEnemyVY
    }
})
```

## Conclusion @showdialog

***Great job!*** 

Now, let's ask the player how difficult they want the game to be.

On to Part 4!


```package
lab2imgs=github:kiki-lee/lab2imgs
```

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
        fireSprite.setPosition(flamethrower.x, flamethrower.y)
        fireSprite.setVelocity(0, -200)
        fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
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
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let projectileCount = 0
let maxProjectiles = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
maxProjectiles = 2
projectileCount = 0
let enemyVelocity = 25
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, enemyVelocity)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
        fireSprite.setPosition(flamethrower.x, flamethrower.y)
        fireSprite.setVelocity(0, -200)
        fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
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
    if (enemyVelocity > maxEnemyVY) {
        enemyVelocity = maxEnemyVY
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let maxEnemyVY = 0
let enemyVelocity = 0
let projectileCount = 0
let maxProjectiles = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
maxProjectiles = 2
projectileCount = 0
enemyVelocity = 25
maxEnemyVY = 150
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, enemyVelocity)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
