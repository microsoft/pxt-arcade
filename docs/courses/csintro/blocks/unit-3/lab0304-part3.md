# Lab 3.4 Part 3: Don't Lose It!
### @explicitHints true

## Don't lose it! @showdialog

We've added a high score table to our project, displayed it at the end
of the game, and added the player's name when they qualify.

Now, let's save the high score table so that it doesn't get lost each
time we play our game!

![Lab 3.4.3](https://arcade.makecode.com/api/_6t78hiKYxRpt/thumb)

## Where is the table?

We've added an extension to your project. Look for a new
drawer in your toolbox called ``||blockSettings:BetterSettings||``.

Right now, we're using arrays to keep track of scores, but those reset each time through. 

Instead, let's check to see if a "better" high score table has been created.

---

1. First, find the two blocks where you create <br/>
** highScores ** and <br/>
**highScoreNames**, and drag those off to the side.<br/>
(You'll use them again in a minute.)
2. At the bottom of your <br/>
``||loops(noclick):on start||`` container, add an <br/>
``||logic:if <true> then else||`` container and add blocks so that it reads
as follows: <br/>
``||logic:if||`` ``||blockSettings:setting with name (" highScores ") exists||``
``||logic:then||``
    1.   In the <br/>
``||logic(noclick):if||`` branch, add blocks that read as follows: <br/>
``||variables:set ( highScores ) to||``
``||blockSettings:read settings (" highScores ") as number array||``
    1.   In the <br/>
``||logic:else||`` branch, place your block that you moved
off to the side that
creates the <br/>
** highScores ** array with your starting values.

Repeat the steps for your **highScoreNames** variable.

*Watch spelling and capitalization!*

---

Check the hint if you need some help.

#### ~ tutorialhint

```blocks
if (blockSettings.exists(" highScores ")) {
    let highScores = blockSettings.readNumberArray(" highScores ")
} else {
    let highScores = [500, 300, 100]
}
if (blockSettings.exists("highScoreNames")) {
    let highScoreNames = blockSettings.readStringArray("highScoreNames")
} else {
    let highScoreNames = ["Charlie", "Bravo", "Alfa"]
}
```

## Save it!

If a high score table exists, we've made sure it will load when the game starts. Now, we need to 
be able to add and remove scores from that table. 

---

In your <br/>
``||info(noclick):on life zero||`` container, right before the
``||loops:break||`` block,
add the following:

-    ``||blockSettings:set setting (" highScores ") to number array||``
``||variables: highScores ||``
-    ``||blockSettings:set setting ("highScoreNames") to string array||``
``||variables:highScoreNames||``

---

Give it a try! Your high score table should save between plays!

Check the hint if you need some help.

#### ~ tutorialhint

```blocks
let numScores = 0
let highScores: number [] = []
let highScoreNames: string[] = []
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            let playerName = game.askForString("High score! What is your name?")
            highScores.insertAt(index, info.score())
            highScoreNames.insertAt(index, playerName)
            highScores.pop()
            highScoreNames.pop()
            // @highlight
            blockSettings.writeNumberArray("highScores", highScores)
            // @highlight
            blockSettings.writeStringArray("highScoreNames", highScoreNames)
            break;
        }
    }
})
```

## Complete! @showdialog

**Good work!**<br/>
🍔 🍔 🍔 
 
We've made a high score table that works!

Feel free to use this in any of your projects!

If you'd like to use ``||blockSettings:BetterSettings||``  (or its cousin,
**Settings**) in your own projects, ask your instructor for the address of the extension.

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < MAX_PROJECTILES) {
        projectileCount += 1
        projectile = sprites.create(sprites.food.smallApple, SpriteKind.Projectile)
        projectile.setPosition(heroSprite.x, heroSprite.y)
        projectile.setVelocity(0, -50)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            playerName = game.askForString("High score! What is your name?")
            highScores.insertAt(index, info.score())
            highScoreNames.insertAt(index, playerName)
            highScores.pop()
            highScoreNames.pop()
            break;
        }
    }
    highScores_message = " highScores \\n"
    for (let index = 0; index <= numScores - 1; index++) {
        highScores_message = "" + highScores_message + highScoreNames[index] + ": " + highScores[index] + "\\n"
    }
    game.showLongText(highScores_message, DialogLayout.Center)
    game.gameOver(true)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.coolRadial, 500)
    if (enemyVelocity < MAX_ENEMY_VELOCITY) {
        enemyVelocity += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let enemySprite: Sprite = null
let highScores_message = ""
let playerName = ""
let projectile: Sprite = null
let highScoreNames: string[] = []
let highScores: number[] = []
let numScores = 0
let heroSprite: Sprite = null
let projectileCount = 0
let enemyVelocity = 0
let MAX_ENEMY_VELOCITY = 0
let MAX_PROJECTILES = 0
scene.setBackgroundColor(13)
let difficulty = game.askForNumber("Enter starting difficulty (1, 2, or 3)")
if (difficulty == 1) {
    MAX_PROJECTILES = 5
    MAX_ENEMY_VELOCITY = 100
    enemyVelocity = 10
} else if (difficulty == 3) {
    MAX_PROJECTILES = 2
    MAX_ENEMY_VELOCITY = 200
    enemyVelocity = 50
} else {
    MAX_PROJECTILES = 3
    MAX_ENEMY_VELOCITY = 150
    enemyVelocity = 25
}
projectileCount = 0
heroSprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
heroSprite.setPosition(80, 100)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
numScores = 3
highScores = [500, 300, 100]
highScoreNames = ["Charlie", "Bravo", "Alfa"]
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.food.smallBurger, SpriteKind.Enemy)
    enemySprite.setPosition(randint(10, 150), -5)
    enemySprite.setVelocity(0, enemyVelocity)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < MAX_PROJECTILES) {
        projectileCount += 1
        projectile = sprites.create(sprites.food.smallApple, SpriteKind.Projectile)
        projectile.setPosition(heroSprite.x, heroSprite.y)
        projectile.setVelocity(0, -50)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            playerName = game.askForString("High score! What is your name?")
            highScores.insertAt(index, info.score())
            highScoreNames.insertAt(index, playerName)
            highScores.pop()
            highScoreNames.pop()
            blockSettings.writeNumberArray(" highScores ", highScores)
            blockSettings.writeStringArray("highScoreNames", highScoreNames)
            break;
        }
    }
    highScores_message = " highScores \\n"
    for (let index = 0; index <= numScores - 1; index++) {
        highScores_message = "" + highScores_message + highScoreNames[index] + ": " + highScores[index] + "\\n"
    }
    game.showLongText(highScores_message, DialogLayout.Center)
    game.gameOver(true)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.coolRadial, 500)
    if (enemyVelocity < MAX_ENEMY_VELOCITY) {
        enemyVelocity += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let enemySprite: Sprite = null
let highScores_message = ""
let playerName = ""
let projectile: Sprite = null
let highScoreNames: string[] = []
let highScores: number[] = []
let numScores = 0
let heroSprite: Sprite = null
let projectileCount = 0
let enemyVelocity = 0
let MAX_ENEMY_VELOCITY = 0
let MAX_PROJECTILES = 0
scene.setBackgroundColor(13)
let difficulty = game.askForNumber("Enter starting difficulty (1, 2, or 3)")
if (difficulty == 1) {
    MAX_PROJECTILES = 5
    MAX_ENEMY_VELOCITY = 100
    enemyVelocity = 10
} else if (difficulty == 3) {
    MAX_PROJECTILES = 2
    MAX_ENEMY_VELOCITY = 200
    enemyVelocity = 50
} else {
    MAX_PROJECTILES = 3
    MAX_ENEMY_VELOCITY = 150
    enemyVelocity = 25
}
projectileCount = 0
heroSprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
heroSprite.setPosition(80, 100)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
numScores = 3
if (blockSettings.exists(" highScores ")) {
    highScores = blockSettings.readNumberArray(" highScores ")
} else {
    highScores = [500, 300, 100]
}
if (blockSettings.exists("highScoreNames")) {
    highScoreNames = blockSettings.readStringArray("highScoreNames")
} else {
    highScoreNames = ["Charlie", "Bravo", "Alfa"]
}
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.food.smallBurger, SpriteKind.Enemy)
    enemySprite.setPosition(randint(10, 150), -5)
    enemySprite.setVelocity(0, enemyVelocity)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```package
betterSettings=github:sargedev/bettersettings
```