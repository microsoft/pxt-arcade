# Lab 2.6 Part 4: Starting Difficulty
### @explicitHints true

## Starting Difficulty @showdialog

Let's update your game so that the player can choose a difficulty level!

![Lab 2.6.4](https://arcade.makecode.com/api/_cADfbEhv00c8/thumb)


## Selecting difficulties

Let review some of the variables that we have set for your project.

We can consider this the "normal difficulty" level.

**Normal difficulty**

-    Maximum projectiles: 2
-    Starting enemy speed: 25
-    Maximum enemy speed: 150

Jot down some values that you think are reasonable for an **easy** difficulty
level.

Also jot down some values for a **tough** difficulty level.

## What would you like?

To begin, let's ask the player for a difficulty level.

---

1.   Create a new variable that will store the player's choice of difficulty.
Give the variable a good name. (We will use **difficulty**.)
1.   In your<br/> 
``||loops(noclick):on start||``<br/> 
container, ``||game:ask||`` the player for a one-digit
difficulty number and store it in your new variable.<br/>
(You will need to expand the default block.)

---

Run your project to make sure nothing has changed (yet) after choosing a difficulty.

Check the hint to verify your code.

#### ~ tutorialhint

```blocks
let projectileCount = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
projectileCount = 0
// @highlight
let difficulty = game.askForNumber("Difficulty?", 1)
```

## Set 'em up!

Now, let's set some values to reflect the player's difficulty selection.

---

1.   At the **bottom** of your<br/> 
``||loops(noclick):on start||``<br/> 
container, add an<br/> 
``||logic:if <true> then [] else []||``<br/> 
block.
1.   Add enough branches to test two options for our difficulty.
1.   Add conditional statements to test whether the player selected
a difficulty of<br/> 
**1** or **2**.
1.   Inside each branch of the<br/> 
``||logic(noclick):if||`` block,
set the appropriate variables
to the values that you noted at the beginning of this activity.


~hint Why only two? 🤷‍♂️

---

It's good practice to have a "catch-all" in your conditionals.

Here, that means we'll check whether the user's input equals **1** or **2**...
but if it's anything else, we'll treat it as if they had entered a **3**. 

```block

if (difficulty == 1) {
    maxProjectiles = 3
    enemyVelocity = 15
    maxEnemyVY = 100
} else if (difficulty == 2) {
    maxProjectiles = 2
    enemyVelocity = 35
    maxEnemyVY = 150
} else {
    maxProjectiles = 1
    enemyVelocity = 75
    maxEnemyVY = 200
}

```

hint~

---

Run your project to test the three different difficulties.
Try different values for your inner variables until you are happy with the three levels.

Check the hint if you need help.

#### ~ tutorialhint

```blocks
let maxEnemyVY = 0
let enemyVelocity = 0
let maxProjectiles = 0
let projectileCount = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
projectileCount = 0
let difficulty = game.askForNumber("Difficulty?")
// @highlight
if (difficulty == 1) {
    maxProjectiles = 3
    enemyVelocity = 15
    maxEnemyVY = 100
} else if (difficulty == 2) {
    maxProjectiles = 2
    enemyVelocity = 35
    maxEnemyVY = 150
} else {
    maxProjectiles = 1
    enemyVelocity = 75
    maxEnemyVY = 200
}
```

## Conclusion @showdialog

Congratulations! You've built a game that changes as the game is played and
allows the player to choose a difficulty.

-    What other settings could you change or add to make your game
easier or harder to play?
-    Are there other changes you could make to make the game easier or harder?


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
let maxProjectiles = 0
let projectileCount = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
projectileCount = 0
let difficulty = game.askForNumber("Difficulty?")
if (difficulty == 1) {
    maxProjectiles = 5
    enemyVelocity = 15
    maxEnemyVY = 100
} else if (difficulty == 3) {
    maxProjectiles = 2
    enemyVelocity = 50
    maxEnemyVY = 200
} else {
    maxProjectiles = 3
    enemyVelocity = 25
    maxEnemyVY = 150
}
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, enemyVelocity)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
