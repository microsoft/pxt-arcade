# Lab 3.4 Part 1: High scores

## High scores! @showdialog

In this project, you will work with arrays in MakeCode to build a
high scores table.

You will be able to add this to other projects, too!

## Let's start at the beginning

We will begin with a project that you created in labs 2.1 and 2.6.

If you would like to use your own project, then check with your instructor.

Run the project to refresh your memory. When you are ready, move on to the
next step.

## More scores! @showdialog

MakeCode Arcade can hold a single high score for any project that you create,
but what if you wanted to keep the top five scores and player names instead?

Let's build a high score table that does just that!

## Variables!

1.   Use the   
``||variables:Variables||`` drawer to create three variables:
     -    One variable will hold the **high scores**.
     -    One variable will hold the **high score names**.
     -    One variable will hold the **number of high scores**.
1.   Add a block to your   
``||loops(noclick):on start||``   
container to set the   
**number of high scores** to `3`.
1.   Add blocks to your   
``||loops(noclick):on start||``   
container to set the   
**high scores** variable to an array with three numbers.
     -    Add whatever scores you like for your initial high score table!
     -    Make sure the scores are in *descending* order. In other words,
     make sure the highest score is first and the lowest score is last.
1.   Add blocks to your   
``||loops(noclick):on start||``   
container to set the   
**high score names** variable to a list of three empty strings.
Add whatever names you like for your initial high score table.

Check the hint if you need help.

```blocks
let number_of_high_scores = 3
let high_scores = [500, 300, 100]
let high_score_names = ["Charlie", "Bravo", "Alfa"]
```

## When does it end!

When the game ends, we need to check the high scores table and add an entry
if needed. But how do we know when the game ends?

In our current project, the game ends when the player runs out of lives.
We have an event handler that can run when that happens.

-    From the ``||info:Info||`` drawer, add an   
``||info:on life zero||``   
container to your workspace.

Any blocks that we add to this container will run when the player runs
out of lives. Because we added this event handler, we need to remember
to make the game end, because it will not end on its own now!

## Show me!

Before we end the game, let's display the high scores table.

1.   Create a new variable called **high scores message**.
1.   In your   
``||info(noclick):on life zero||``   
container,
set the value of   
**high scores message** to the string   
**High scores\n**.
     -    Those special characters at the end ask MakeCode to put
the characters on their own line.
     -    Remember that you can find an empty string block in the **Text** drawer
of the toolbox.
1.   To your   
``||info(noclick):on life zero||``   
container, add a   
``||loops:for||`` ``||variables(loops):index||``
``||loops:from 0 to (4)||``   
container. The   
``||variables(noclick):index||``   
variable will count through the
indexes of your array.
1.   In place of the   
``||loops(noclick):(4)||`` value in your loop, use blocks
to build the following expression:   
``||variables:number of high scores||``
``||math:- (1)||``.   
Remember that computers start counting at zero, and the highest index
for an array is one less than its size.
1.   In the   
``||loops(noclick):for||`` loop, build your high score message.
Set the   
**high scores message** variable to join the following strings:
     1.   ``||variables:high scores text||``
     (In other words, you are adding to the existing value.)
     1.   ``||variables(arrays):high score names||``
     ``||arrays:get value at||`` ``||variables(arrays):index||``
     1.   The string   
     **`: `**. (That's a colon followed by a space.)
     1.   ``||variables(arrays):high scores||``
     ``||arrays:get value at||`` ``||variables(arrays):index||``
     1.   The string   
     **`\n`**. This special character
     will put each high score on a separate line.
1.   To your   
``||info(noclick):on life zero||``   
container, display   
**high scores message** with a   
``||game:show long text||``   
block, and then end the game.

Run your project to see if your empty high scores table appears before
the game ends. Check the hint if you need help.

```blocks
let high_score_names: string[] = []
let high_scores: number[] = []
let number_of_high_scores = 0
let high_scores_message: string = ""
info.onLifeZero(function () {
    high_scores_message = "High scores\\n"
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        high_scores_message = "" + high_scores_message + high_score_names[index] + ": " + high_scores[index] + "\\n"
    }
    game.showLongText(high_scores_message, DialogLayout.Center)
    game.gameOver(false)
})
```

## Complete! @showdialog

Good work! We have created a high scores table and displayed it at the end
of the game. Now, we can add scores to it! On to Part 2!

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
let projectile: Sprite = null
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
    high_scores_message = "High Scores\n"
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