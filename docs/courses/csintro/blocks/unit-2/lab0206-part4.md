# Lab 2.6 Part 4: Starting Difficulty

## Starting Difficulty @showdialog

Let's update your game so that the player can choose a difficulty level!

## Selecting difficulties

Let review some of the variables that we have set for your project.
Let's consider this the "normal difficulty" level.

**Normal difficulty**

-    Maximum projectiles: 3
-    Starting enemy speed: 25
-    Maximum enemy speed: 150

Jot down some values that you think are reasonable for an **easy** difficulty
level.

Also jot down some values for a **challenging** difficulty level.

## What would you like?

To begin, let's ask the player for a difficulty level.

1.   Create a new variable that will store the player's choice of difficulty.
Give the variable a good name. How about **difficulty**?
1.   In your   
``||loops(noclick):on start||``   
container, ask the player for a
difficulty number and store it in your new variable.

Run your project to make sure nothing has changed after choosing a difficulty.
Check the hint to verify your code.

```blocks
let projectileCount = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
projectileCount = 0
// @highlight
let difficulty = game.askForNumber("Difficulty?")
```

## Set 'em up!

Now, let's set some values to reflect the player's difficulty selection.

1.   At the **bottom** of your   
``||loops(noclick):on start||``   
container, add an   
``||logic:if (true) then [] else []||``   
block.
1.   Add enough branches to test three options for our difficulty.
1.   Add conditional statements to test whether the player selected
a difficulty of   
**1**, **2**, or **3**.
1.   In each branch of the   
``||logic(noclick):if||`` block,
set the three variables
to the values that you noted at the beginning of this activity.

Run your project to test the three different difficulties.
Try different values until you are happy with the three difficulties.

Check the hint if you need help.

```blocks
let maxEnemySpeed = 0
let enemyVelocity = 0
let maxProjectiles = 0
let projectileCount = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
projectileCount = 0
let difficulty = game.askForNumber("Difficulty?")
// @highlight
if (difficulty == 1) {
    maxProjectiles = 5
    enemyVelocity = 15
    maxEnemySpeed = 100
} else if (difficulty == 3) {
    maxProjectiles = 2
    enemyVelocity = 50
    maxEnemySpeed = 200
} else {
    maxProjectiles = 3
    enemyVelocity = 25
    maxEnemySpeed = 150
}
```

## Conclusion @showdialog

Congratulations! You've built a game that changes as the game is played and
allows the player to choose a difficulty.

-    What other settings could you change or add to make your game
easier or harder to play?
-    Are there other changes you could make to make the game easier or harder?

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
let maxProjectiles = 0
let projectileCount = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
projectileCount = 0
let difficulty = game.askForNumber("Difficulty?")
if (difficulty == 1) {
    maxProjectiles = 5
    enemyVelocity = 15
    maxEnemySpeed = 100
} else if (difficulty == 3) {
    maxProjectiles = 2
    enemyVelocity = 50
    maxEnemySpeed = 200
} else {
    maxProjectiles = 3
    enemyVelocity = 25
    maxEnemySpeed = 150
}
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, enemyVelocity)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
