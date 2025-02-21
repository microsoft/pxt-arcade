# Lab 2.6 Part 2: Here Come the Targets...Faster!
### @explicitHints true

## Here come the enemies...faster! @showdialog

Many games get more difficult the longer you play.

Let's update your game so that enemies fall faster as you go!

![Lab 2.6.2](https://arcade.makecode.com/api/_37jgdDcTzdwj/thumb)


## Variable speed

We need to keep track of the current speed of the enemies.

---

1.   Take a look at your<br/> 
``||game(noclick):on game update every (1000) ms||``<br/> 
container.
Make a note of the **vy** value for your enemy sprites.
1.   Create a new ``||variables:variable||`` that will keep track of the enemy speed.<br/>
(Call it something like **enemySpeed**.)
1.   In your<br/> 
``||loops(noclick):on start||``<br/> 
container, set the value of your new
variable to the value that you noted in Step 1.
1.   Use an ``||variables:enemySpeed||`` value block to replace the **vy** of your enemy's velocity.

---

Run your project to make sure nothing appears to have changed yet.

Check the hint if you need help.

#### ~ tutorialhint

```blocks

let iceSprite: Sprite = null
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
//@highlight
let enemyVelocity = 25


game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    // @highlight
    iceSprite.setVelocity(0, enemyVelocity)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Let's speed things up!

Now, let's make the game more difficult the longer you play.

---

1.   Find the<br/> 
``||sprites(noclick):on overlap||``<br/> 
container where enemies are
destroyed when they collide when a projectile.
1.   In that<br/> 
``||sprites(noclick):on overlap||``<br/> 
container, add a block that
changes the enemySpeed variable by some small amount. <br/>
(Like 1, 3, or 5)

---

Run your project and see how it works.
As enemies are destroyed, you should see new enemies moving faster.

Experiment with different values to find a good speed.


#### ~ tutorialhint

```blocks
let enemyVelocity = 25
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    // @highlight
    enemyVelocity += 5
})
```

## Conclusion @showdialog

**Good job!**

But maybe that's too fast?

Let's move on to Part 3 where we will put a speed limit on the targets.



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
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
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
