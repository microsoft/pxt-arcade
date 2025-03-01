# Lab 3.4 Part 2: My High Score
### @explicitHints true

## My high score! @showdialog

We've added a high score table to the end of our game. 

Let's add more players to that table as they receive high scores. 

![Lab 3.4.2](https://arcade.makecode.com/api/_FPvhi4cmhYod/thumb)


## Where does it go?

Let's figure out where to put our new high score. 

To do that, we'll go through the high scores table one entry at a time until we
find a score that's smaller than the one we're adding. That's how we know we've 
found the right spot!

---


1.  **At the beginning** of your <br/>
``||info(noclick):on life zero||`` <br/>
container, insert another <br/>
``||loops:for||`` loop container.<br/>
1.  Again, in place of the <br/>
``||loops(noclick):(4)||`` value in your loop, use blocks
to build the following expression: <br/>
``||variables:numScores||`` ``||math:- (1)||``. <br/>
(Feel free to duplicate the blocks from your other
``||loops(noclick):for||`` loop using that expression.)
1.  Inside of this new
``||loops(noclick):for||``
loop, add an <br/>
``||logic:if <true> then||`` <br/>
block.
1.  Replace the <br/>
``||logic(noclick):<true>||`` value with blocks that build
the following conditional statement: <br/>
``||logic:if < [score] [>] ([highScore] get value at [index]) >||``<br/>

💡 _Remember to drag the ``||varibles(noclick):index||``
    variable from the top of your ``||loops(noclick):for||`` loop._

💡💡 _If the editor changes the index variable to something 
like ``||variables(noclick):index2||``, that's OK!  Use whatever variable 
is shown in the title of your ``||loops(noclick):for||`` loop._

💡💡💡 _You can find the ``||info:score||`` value in the ``||info:Info||`` drawer._

---

Feel free to check the hint to verify the code you have so far. 

#### ~ tutorialhint

```blocks
let highScores: number[] = []
let highScoreNames: string[] = []
let numScores = 0
let highScoreMessage = ""
info.onLifeZero(function () {
    // @highlight
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {

        }
    }
    highScoreMessage = "High Scores\\n"
    for (let index = 0; index <= numScores - 1; index++) {
        highScoreMessage = "" + highScoreMessage + highScoreNames[index] + ": " + highScores[index] + "\\n"
    }
    game.showLongText(highScoreMessage, DialogLayout.Center)
    game.gameOver(true)
})
```

## What's your name?

If the player gets a high score, then we should collect their name.
Let's do that now!

---


1.    Create a new variable called something like **playerName**.
1.    Inside the empty <br/>
``||logic(noclick):if||`` block, prompt the player for their name and place the value
in your new variable.
1.    Once you've got the new name, you need to ``||loops: break||`` out of that ``||loops(noclick):for||`` loop,
otherwise, it might ask the player for their name multiple times! 

---

Play your game and try to get a high score. If you do, your project
should ask for your name!

Check the hint if you need help.

---

**Question**

How can you edit your code so that you don't have to play as long to get a new high score?




#### ~ tutorialhint

```blocks
let highScores: number[] = []
let numScores = 0
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            // @highlight
            let playerName = game.askForString("High score! What is your name?")
            //@highlight
            break
        }
    }
})
```

## Add the score

Now, let's add the player's high score to our table!

---


After asking for the player's name, add blocks to insert each of the new values into the correct array.

These blocks all go inside of the ``||logic(noclick):if||`` container, before the 
``||loops(noclick):break||`` block.

1.    ``||arrays:[highScores] insert at [index] value [score]||``
1.    ``||arrays:[highScoreNames] insert at [index] value [playerName]||``


---

Again, play your game and try to get a high score! If you do, then your project
should ask you for your name. 

When your project displays the high score table,
your name and score should appear in the list!


#### ~ tutorialhint

```blocks
let highScores: number[] = []
let highScoreNames: string[] = []
let numScores = 0
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            playerName = game.askForString("High score! What is your name?")
            //@highlight
            highScores.insertAt(index, info.score())
            //@highlight
            highScoreNames.insertAt(index, playerName)
            break
        }
    }
})
```

## Too many!

Inserting new values into our arrays will keep making them longer and longer unless we get rid of 
the extra entries at the end.

---

Add the following blocks into your
``||logic(noclick):if||`` container, right above the
``||loops(noclick): break||`` block.

1.   ``||arrays:remove last value from [highScores]||``
1.   ``||arrays:remove last value from [highScoreNames]||``



#### ~ tutorialhint

```blocks
let highScores: number[] = []
let highScoreNames: string[] = []
let numScores = 0
info.onLifeZero(function () {
    for (let index = 0; index <= numScores - 1; index++) {
        if (info.score() > highScores[index]) {
            playerName = game.askForString("High score! What is your name?")
            highScores.insertAt(index, info.score())
            highScoreNames.insertAt(index, playerName)
            //@highlight
            highScores.pop()
            //@highlight
            highScoreNames.pop()
            break;
        }
    }
})
```

## Complete! @showdialog

**Good work!***<br/>
🌮 🌮 🌮

You have a high scores table that works!

When you play the game multiple times, you might notice that
the high scores table resets after each play.

In Part 3, we'll show you how to save your high scores table from game to game!



```package
betterSettings=github:sargedev/bettersettings
```

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
    highScoreMessage = "High Scores\\n"
    for (let index = 0; index <= numScores - 1; index++) {
        highScoreMessage = "" + highScoreMessage + highScoreNames[index] + ": " + highScores[index] + "\\n"
    }
    game.showLongText(highScoreMessage, DialogLayout.Center)
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
let highScoreMessage = ""
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
            break;
        }
    }
    highScoreMessage = "High Scores\\n"
    for (let index = 0; index <= numScores - 1; index++) {
        highScoreMessage = "" + highScoreMessage + highScoreNames[index] + ": " + highScores[index] + "\\n"
    }
    game.showLongText(highScoreMessage, DialogLayout.Center)
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
let highScoreMessage = ""
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