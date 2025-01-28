# Lab 2.1 Part 5 (BONUS): Pew, Pew!

## BONUS -- Pew pew! @showdialog

Time to add some sound effects to your project!

## Pew pew!

Let's add a sound whenever a projectile is fired.
We'll use a new event handler for this.

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on created||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player)||``   
container to your workspace.
1.   Change the block so that it reads as follows:   
``||sprites(noclick):on created sprite of kind Projectile||``
1.   Into your new container, drag a   
``||music:play sound (ba ding) until done||``   
block from the
``||music:Music||`` drawer.
1.   Change the sound to **pew pew**.
1.   Change the playback mode to **in background**.

This new event handler will run anytime a projectile is created in your project.

Test your project to see if your code runs as expected.
View the hint if you need help.

Feel free to try different sounds!

```block
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
```

## Crash!

Now, let's add a sound whenever an enemy is destroyed.
We'll use yet another new event handler for this.

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on destroyed||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player)||``   
container to your workspace.
1.   Change the block so that it reads as follows:   
``||sprites(noclick):on created sprite of kind Enemy||``
1.   Into your new container, drag a   
``||music:play sound (ba ding) until done||``   
block from the
``||music:Music||`` drawer.
1.   Change the sound to **small crash**.
1.   Change the playback mode to **in background**.

This new event handler will run anytime an enemy is destroyed.

Test your project to see if your code runs as expected.
View the hint if you need help.

Feel free to try different sounds!

**Question**: Did you notice that the crash plays when an enemy flies off of the screen,
too? Why is that? How could you fix it?

~hint Answer
Instead of using the new "on destroyed" event handler, you could add the
sound blocks to the existing event handlers where the enemies are destroyed.
hint~

```block
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
```

## Complete! @showdialog

Good work! If you still have some time, then give these other bonuses a try!

-    Let the player fire projectiles with the **B** button also, but use
this block instead:
```block
let projectile = sprites.createProjectileFromSprite(sprites.projectile.explosion1, heroSprite, 0, -50)
```
How does this block work compared to the blocks that you used for the **A** button?

-    Create your own images for the sprites.
-    Create a background image.

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
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
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(sprites.projectile.explosion1, heroSprite, 0, -50)
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
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
let projectile: Sprite = null
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