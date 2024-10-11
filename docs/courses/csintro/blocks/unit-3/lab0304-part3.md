# Lab 3.4 Part 3: High scores

## Don't lose it! @showdialog

We've added a high scores table to our project, displayed it at the end
of the game, and added the player's name if they qualify.

Now, let's save the high scores table so that it doesn't get lost each
time we play our game!

## Where is the table?

We've added an extension to your project, and you'll notice a new
drawer in your toolbox called **BetterSettings**.

In your ``||loops(noclick):on start||`` blocks, we simply create the **high scores**
and **high score names** arrays and add some values to it.

Instead, let's load the high score table if one has been saved.

-    First, find the two blocks where you create the   
**high scores** and   
**high score names** variables, and drag them off to the side. You'll use
them again later.

Now, at the bottom of your   
``||loops(noclick):on start||`` container, add the
following blocks.

1.   Add an   
``||logic:if (true) then else||`` container and add blocks so that it reads
as follows:   
``||logic:if||`` ``||blockSettings:setting with name ("high scores") exists||``
``||logic:then||``
1.   In the   
``||logic(noclick):if||`` branch, add blocks that read as follows:   
``||variables:set (high scores) to||``
``||blockSettings:read settings ("high scores") as number array||``
1.   In the   
``||logic:else||`` branch, place your block that you moved
off to the side that
creates the   
**high scores** array with your starting values.

Do something similar for your **high score names** variable.

*Watch your spelling and capitalization!*

Check the hint if you need some help.

```blocks
if (blockSettings.exists("high scores")) {
    let high_scores = blockSettings.readNumberArray("high scores")
} else {
    let high_scores = [500, 300, 100]
}
if (blockSettings.exists("high score names")) {
    let high_score_names = blockSettings.readStringArray("high score names")
} else {
    let high_score_names = ["Charlie", "Bravo", "Alfa"]
}
```

## Save it!

We've loaded the high score table if one has been saved. Now, we need to save
the high score table when we change it!

In your   
``||info(noclick):on life zero||`` container, after we update the   
**high scores** and **high score names** variables
and right before the   
``||loops:break||`` block,
add the following blocks:

-    ``||blockSettings:set setting ("high scores") to number array||``
``||variables:high scores||``
-    ``||blockSettings:set setting ("high score names") to string array||``
``||variables:high score names||``

Give it a try! Your high score table should save between plays!

Check the hint if you need some help.

```blocks
let number_of_high_scores = 0
let high_scores: number [] = []
let high_score_names: string[] = []
info.onLifeZero(function () {
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {
            let playerName = game.askForString("High score! What is your name?")
            high_scores.insertAt(index, info.score())
            high_score_names.insertAt(index, playerName)
            high_scores.pop()
            high_score_names.pop()
            // @highlight
            blockSettings.writeNumberArray("high scores", high_scores)
            // @highlight
            blockSettings.writeStringArray("high score names", high_score_names)
            break;
        }
    }
})
```

## Complete! @showdialog

Good work! We have made a high scores table that works!

Feel free to use this in any of your projects!

If you would like to use **BetterSettings** or its cousin, simply called
**Settings**, in your own projects, then ask your instructor.

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
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {
            playerName = game.askForString("High score! What is your name?")
            high_scores.insertAt(index, info.score())
            high_score_names.insertAt(index, playerName)
            high_scores.pop()
            high_score_names.pop()
            break;
        }
    }
    high_scores_message = "High Scores\\n"
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        high_scores_message = "" + high_scores_message + high_score_names[index] + ": " + high_scores[index] + "\\n"
    }
    game.showLongText(high_scores_message, DialogLayout.Center)
    game.gameOver(false)
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
let high_scores_message = ""
let playerName = ""
let projectile: Sprite = null
let high_score_names: string[] = []
let high_scores: number[] = []
let number_of_high_scores = 0
let heroSprite: Sprite = null
let projectileCount = 0
let enemyVelocity = 0
let MAX_ENEMY_VELOCITY = 0
let MAX_PROJECTILES = 0
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
number_of_high_scores = 3
high_scores = [500, 300, 100]
high_score_names = ["Charlie", "Bravo", "Alfa"]
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
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {
            playerName = game.askForString("High score! What is your name?")
            high_scores.insertAt(index, info.score())
            high_score_names.insertAt(index, playerName)
            high_scores.pop()
            high_score_names.pop()
            blockSettings.writeNumberArray("high scores", high_scores)
            blockSettings.writeStringArray("high score names", high_score_names)
            break;
        }
    }
    high_scores_message = "High Scores\\n"
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        high_scores_message = "" + high_scores_message + high_score_names[index] + ": " + high_scores[index] + "\\n"
    }
    game.showLongText(high_scores_message, DialogLayout.Center)
    game.gameOver(false)
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
let high_scores_message = ""
let playerName = ""
let projectile: Sprite = null
let high_score_names: string[] = []
let high_scores: number[] = []
let number_of_high_scores = 0
let heroSprite: Sprite = null
let projectileCount = 0
let enemyVelocity = 0
let MAX_ENEMY_VELOCITY = 0
let MAX_PROJECTILES = 0
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
number_of_high_scores = 3
if (blockSettings.exists("high scores")) {
    high_scores = blockSettings.readNumberArray("high scores")
} else {
    high_scores = [500, 300, 100]
}
if (blockSettings.exists("high score names")) {
    high_score_names = blockSettings.readStringArray("high score names")
} else {
    high_score_names = ["Charlie", "Bravo", "Alfa"]
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