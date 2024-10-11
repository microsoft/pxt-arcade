# Lab 3.4 Part 2: High scores

## My high score! @showdialog

We've added a high scores table to our project and displayed it at the end
of the game. Now, let's add the player's entry if they qualify!

## Where does it go?

Let's figure out where we need to insert our high score. To do that, we will
go through the high scores table one entry at a time. If we find a score that
is smaller, then we've found the right spot!

1.  **At the beginning** of your   
``||info(noclick):on life zero||``   
container, insert another   
``||loops:for||`` ``||variables(loops):index||``
``||loops:from 0 to (4)||``   
container. Again, the   
``||variables(noclick):index||`` variable will count through the
indexes of your array.
1.  Again, in place of the   
``||loops(noclick):(4)||`` value in your loop, use blocks
to build the following expression:   
``||variables:number of high scores||`` ``||math:- (1)||``.   
Feel free to duplicate the blocks from your other   
``||loops(noclick):for||`` loop for that expression.
1.  Inside of this new   
``||loops(noclick):for||``   
loop, add an   
``||logic:if (true) then||``   
block.
1.  Replace the   
``||logic(noclick):(true)||`` value with blocks that build
the following conditional statement:   
``||logic:if||`` ``||info:score||``
``||logic:is greater than||`` ``||variables(arrays):high scores||``
``||arrays:get value at||`` ``||variables(noclick):index||``
    -   Remember to drag the   
    ``||varibles(noclick):index||``   
    variable from the top of your   
    ``||loops(noclick):for||`` loop.
    -   If the editor has changed the name of the variable to something
        like   
        ``||variables(noclick):index2||``,   
        then that's OK! Use whatever variable
        is shown in the top of your   
        ``||loops(noclick):for||`` loop.
    -   The ``||info:score||`` value is in the ``||info:Info||`` drawer.

Feel free to check the hint to verify your code. In the next step, we'll
be able to test your logic!

```blocks
let high_scores: number[] = []
let high_score_names: string[] = []
let number_of_high_scores = 0
let high_scores_message = ""
info.onLifeZero(function () {
    // @highlight
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {

        }
    }
    high_scores_message = "High Scores\\n"
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        high_scores_message = "" + high_scores_message + high_score_names[index] + ": " + high_scores[index] + "\\n"
    }
    game.showLongText(high_scores_message, DialogLayout.Center)
    game.gameOver(false)
})
```

## What's your name?

If the player gets a high score, then we should collect their name.
Let's do that now!

1.    Create a new variable called something like **playerName**.
1.    Inside of the empty   
``||logic(noclick):if||`` block that you just added
to your code, prompt the player for their name and place the value
in your new variable.

Now, play your game and try to get a high score! If you do, then your project
should ask you for your name.

Check the hint if you need help.

```blocks
let high_scores: number[] = []
let number_of_high_scores = 0
info.onLifeZero(function () {
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {
            // @highlight
            let playerName = game.askForString("High score! What is your name?")
        }
    }
})
```

## Add the score

Now, let's add the player's score to the table!

After asking for the player's name, add the blocks described below.
These blocks all go inside of the   
``||logic(noclick):if||`` container.

1.    ``||variables(arrays):high scores||`` ``||arrays:insert at||``
``||variables(noclick):index||`` ``||arrays:value||``
``||info:score||``.
1.    ``||variables(arrays):high score names||``
``||arrays:insert at||``
``||variables(noclick):index||`` ``||arrays:value||``
``||variables:playerName||``.

Again, play your game and try to get a high score! If you do, then your project
should ask you for your name. When your project displays the high score table,
your name and score should appear in the list!

You may notice a problem, though. We'll fix that in the next step.

Check the hint if you need help.

```blocks
let high_scores: number[] = []
let high_score_names: string[] = []
let number_of_high_scores = 0
info.onLifeZero(function () {
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        if (info.score() > high_scores[index]) {
            playerName = game.askForString("High score! What is your name?")
            high_scores.insertAt(index, info.score())
            high_score_names.insertAt(index, playerName)
        }
    }
})
```

## Too many!

Inserting those values into our arrays makes them too long. Let's get rid of the
extra entries at the end of our arrays.

Add the following blocks inside of your   
``||logic(noclick):if||`` container,
beneath the ones that you already have there.

1.   ``||arrays:remove last value from||``
``||variables(arrays):high scores||``
1.   ``||arrays:remove last value from||``
``||variables(arrays):high score names||``
1.   ``||loops:break||``

Remember that error that we mentioned in the previous step? Once we add
the player's name and score to the arrays, then we are done. We don't need to
continue with the rest of the entries in the array. The   
``||loops:break||``
block jumps out of the   
``||loops:for||`` loop early.

You can find that block in the ``||loops:Loops||`` drawer.

Your new high score table should work correctly now!

Check the hint if you need help.

```blocks
let high_scores: number[] = []
let high_score_names: string[] = []
let number_of_high_scores = 0
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
})
```

## Complete! @showdialog

Good work! We have made a high scores table that works!

You might notice that, when you play the game multiple times,
the high scores table resets after each play.

In Part 3, we will learn how to save your high scores table!

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