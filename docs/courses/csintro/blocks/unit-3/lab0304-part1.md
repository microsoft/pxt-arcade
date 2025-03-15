# Lab 3.4 Part 1: High Scores
### @explicitHints true

## High scores! @showdialog

In this project, you will work with arrays in MakeCode to build a
high score table.

You'll be able to add this to other projects, too!

![Lab 3.4.1](https://arcade.makecode.com/api/_aMYfe73hpCLC/thumb)

## Let's start at the beginning

We'll begin with a project similar to what you created in labs 2.1 and 2.6.

If you'd like to use your own project, check with your instructor.
You will need to have two tabs open to continue following along with the tutorial.

To refresh your memory, run the project that's in the workspace. 
When you're ready, move on to the next step.

## More scores! @showdialog

By default, MakeCode Arcade can hold a single high score for any project you create.
But, what if you want to remember the top three scores _and_ player names?

Let's build a high score table that does just that!

## Variables!

1.   Open the
``||variables:Variables||`` drawer to create three variables:
     -    One will hold **high scores**
     -    One will hold **high score names**
     -    One will hold the total **number of high scores** the program can remember
1.   Add a block to your <br/>
``||loops(noclick):on start||`` <br/>
container to set the <br/>
**number of high scores** to `3`.
1.   Add a block to your <br/>
``||loops(noclick):on start||`` <br/>
container to initialize the <br/>
**high scores** variable to an array with three numbers.
     -    Add whatever scores you like for your initial high score table!
     -    Make sure the scores are in *descending* order. In other words,
     make sure the highest score is first and the lowest score is last.
1.   Add a block to your <br/>
``||loops(noclick):on start||`` <br/>
container to set the <br/>
**high score names** variable to a list of three empty strings.
Add whatever names you like for your initial high score table.

~hint Set a variable to an array? 🧐

---

Remember that a variable is like a named container that can hold something you'll want to use later. In this project, we want it to hold an entire array.

You can think of an array as a row of connected houses...and each house could have a value living in it (sometimes those values are even other variables or arrays!)

The name of your array is like a street name (hopefully a descriptive one that lets people know what they can expect from that row of houses)
and each house has its own address, starting with 0 and incrementing by 1 until it reaches the 
last one on the street.


![Arrays as houses](/static/courses/csintro/arrays_highscore_pl.jpg)

If you want to get a value from one of the houses, you need to ask for it using both its street name and address number (also known as an index).

For example, if you want to announce the value living in the first house on highScore street, you would write that as:<br/>

```block
let high_scores: number[] = []
game.splash(high_score[0])
```

For the third house on highScore street, you need to ask for:<br/>

```block
let high_scores: number[] = []
game.splash(high_scores[2])
```

Do you see the pattern?

---

In this assignment, when we ask you to set the high score variable to an array with three numbers, it's like we're
asking you to name the street something like **highScore** and put **three** houses on it, where each house contains a number. 

This is an example of how you would do that with blocks:<br/>

```block
let high_score = [500, 300, 100]
```


hint~

Check the hint if you need help.

#### ~ tutorialhint

```block
let number_of_high_scores = 3
let high_scores = [500, 300, 100]
let high_score_names = ["Charlie", "Bravo", "Alfa"]
```

## When does it end!

When the game ends, we need to check the high scores table and add an entry
if needed. But how do we know when the game ends?

In our current project, the game ends when the player runs out of lives.
Arcade has an event handler that can run when that happens.

---


-    From the ``||info:Info||`` drawer, add an <br/>
``||info:on life zero||`` <br/>
container to your workspace.

---

Any blocks that we add to this container will run when the player runs
out of lives. 

⚠️ _**Now that we've added this event handler, we need to remember
to include a<br/> `game over` block, because Arcade will no longer
do it automatically!**_


#### ~ tutorialhint

```blocks
info.onLifeZero(function () { })
```

## Show me!

Before we end the game, let's display the high score table.

---


1.   Create a new variable for a **high scores message**.
1.   In your <br/>
``||info(noclick):on life zero||`` <br/>
container,
set the value of <br/>
**high scores message** to the ``||text:string||`` <br/>
**"High scores\n"**. <br/>
(Those special characters at the end ask MakeCode to move to a new line.)<br/>
1.   To your <br/>
``||info(noclick):on life zero||`` <br/>
container, add a <br/>
``||loops:for [index] from 0 to (4)||`` <br/>
container.<br/> (We'll use the loop's
``||variables(noclick):index||`` to count through the
indexes of your array.)
1.   In place of the <br/>
``||loops(noclick):(4)||`` value in your loop, use blocks
to build the following expression: <br/>
``||variables:number of high scores||``
``||math:- (1)||``. <br/>
(Remember that computers start counting at zero, so the highest index
for an array is one less than its size.)
1.   Inside of the
``||loops(noclick):for||`` loop, build your new high score message.<br/>
SetAdd to the
**high scores message** variable by joining the following strings:
     1.   The existing ``||variables:high scores text||`` value.
     1.   ``||variables(arrays):high score names||``
     ``||arrays:get value at||`` ``||variables(arrays):index||``
     1.   The string <br/>
     **"`: `"**. (That's a colon followed by a space.)
     1.   ``||variables(arrays):high scores||``
     ``||arrays:get value at||`` ``||variables(arrays):index||``
     1.   The string <br/>
     **"`\n` "**. (This special character
     will put each high score on a separate line.)

~hint Ummm...What? 🤔

---

Within the ``||loops(noclick):for||`` loop, you need to run through each element of each array and sew the values together into a message that can be displayed as a high score table. 

You're going to take the original **high score message**, 
then add on a new line that joins the first value of the **high scores text** array
with the first value from the **high score** array.  On the next line, you'll join
the second value of the **high scores text** array
with the second value from the **high score** array...and on and on. 

Fortunately, you only need to write the code once, because the ``||loops(noclick):for||`` loop
can move through each element of the arrays using the ``||variables(noclick):index||`` variable.

When you're done, your ``||loops(noclick):for||`` loop should look something like this:

```block
    let high_scores_message = null
    for (let index = 0; index <= number_of_high_scores - 1; index++) {
        high_scores_message = "" + high_scores_message + high_score_names[index] + ": " + high_scores[index] + "\\n"
    }
```


hint~


6.   At the end of your <br/>
``||info(noclick):on life zero||`` <br/>
container, display the new<br/>
**high scores message** using a <br/>
``||game:show long text||`` <br/>
block
1. Finally, make sure you have a block at the very bottom of the <br/>
``||info(noclick):on life zero||`` <br/> container to end the game as a WIN. 

---


Run your project to see how your high score table looks when the game ends. 

💡 _For easier testing, consider moving the **ask** block out of the **set difficulty** block and replacing it with the value of **1**.
You can also temporarily change the value of the initial **set life** block to **1** so that your game goes faster._



(Check the hint for help.)

#### ~ tutorialhint

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
    game.gameOver(true)
})
```

## Complete! @showdialog

**Good work!**<br/>
🎂 🎂 🎂

You've created a high score table and displayed it at the end
of the game. 

Next, we'll show you how to add more scores to it! On to Part 2!




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
scene.setBackgroundColor(13)
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