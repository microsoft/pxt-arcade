# Lab 2.1 Part 5 (BONUS): Pew, Pew!
### @explicitHints true

## BONUS — Pew, Pew! @showdialog

Time to add some sound effects to your project!

![Lab 2.1.5](https://arcade.makecode.com/api/_ehvLLVLYx1iu/thumb)

## Pew pew!

Let's add a sound whenever a projectile is fired.
We'll use a new event handler for this.

---

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on created [sprite] of kind [Player]||``   
container to your workspace.
1.   Change the block so that it reads as follows:   
``||sprites(noclick):on created sprite of kind Projectile||``
1.   Into your new container, drag a   
``||music:play (sound ba ding) until done||``   
block from the
``||music:Music||`` drawer.
1.   Change the sound to **pew pew**.
1.   Change the playback mode to **in background**.

This new event handler will run anytime a projectile is created in your project.

---

Test your project to see if your code runs as expected. 
Feel free to try different sounds!

#### ~ tutorialhint

```block
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
```

## Crash!

Now, let's add a sound whenever an enemy is destroyed.
We'll use yet another new event handler for this.

---

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on destroyed [sprite] of kind [Player]||`` 
container to your workspace.
1.   Change the block so that it reads as follows:   
``||sprites(noclick):on destroyed sprite of kind Enemy||``
1.   Into your new container, drag a   
``||music:play (sound ba ding) until done||``   
block from the
``||music:Music||`` drawer.
1.   Change the sound to **small crash**.
1.   Change the playback mode to **in background**.

This new event handler will run anytime an enemy is destroyed.

---


Test your project to see if your code runs as expected.
Feel free to try different sounds!

---

**Question**: Did you notice that the crash plays when an enemy flies off of the screen,
too? Why is that? How could you fix it?

~hint Answer

---

We have an instruction in our code telling the computer to auto-destroy Enemy sprites when they leave the screen.

To avoid hearing the crash in that instance, try moving the sound effect out of the <br/>
``||sprites(noclick):on destroyed sprite of kind Enemy||`` <br/>
container and into the overlap container where the destroying happens.

hint~

#### ~ tutorialhint

```block
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
```

or 

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    //@highlight
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
```





## Complete! @showdialog

Good work! If you still have time, give these other bonuses a try!

---


-    Create your own images for each sprite
-    Create a background image
-    Let the player fire projectiles with the **B** button also, but use
this block instead:

```block
let projectile = sprites.createProjectileFromSprite(lab2imgs.flame, flamethrower, 0, -50)
```
(How does this block work compared to the blocks that you used for the **A** button?)




```package
lab2imgs=github:kiki-lee/lab2imgs
```

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(lab2imgs.flame, flamethrower, 0, -50)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null
let projectile: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```