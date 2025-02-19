# Lab 2.6 Part 2: Here Come the Targets...Faster!

## Here come the enemies...faster! @showdialog

Many games get more difficult the longer you play.
Let's update your game so that enemies fall faster as you play!

## Variable speed

We need to keep track of the current speed of the enemies.

1.   Take a look at your   
``||game(noclick):on game update every (1000) ms||``   
container.
Make a note of the **vy** value for your enemy sprites.
1.   Create a new variable that will keep track of the enemy speed.
Call it something like **enemySpeed**.
1.   In your   
``||loops(noclick):on start||``   
container, set the value of your new
variable to the value that you noted in Step 1.
1.   Drop your variable in place of the number for your **vy** value.

Run your project to make sure nothing has changed.
Check the hint if you need help.

```blocks
let enemySprite: Sprite = null
let enemyVelocity = 25
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    // @highlight
    enemySprite.setVelocity(0, enemyVelocity)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Let's speed things up!

Now, let's make the game more difficult the longer you play.

1.   Find the   
``||sprites(noclick):on overlap||``   
container where enemies are
destroyed when they collide when a projectile.
1.   In that   
``||sprites(noclick):on overlap||``   
container, add a block that
changes the enemy speed variable. Set the change to a small value.

Run your project and see how it works.
As enemies are destroyed, you should see new enemies moving faster.
Experiment with different values to find a good speed.
Check the hint if you need help.

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

Good job! But maybe that's too fast? Let's put a speed limit on the enemies.
On to Part 3!

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
