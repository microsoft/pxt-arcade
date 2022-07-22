# Activity: Logic Intro

Logic in software development allows for flexible programs that respond appropriately to different conditions. In this section, we will identify how comparisons can be used within our code.

In these activities, students will work with:

* ``||logic:if||`` block
* Comparison operators

## Concept: Comparisons

Comparison logic with the ``||logic:if||`` statement

In our games we will often want to compare values and take an action when the comparison statement is true.

> Example: Is laserPower (8) greter than enemyShieldStrength (5)? If it is ``||logic:true||`` that laserPower is greater than enemyShieldStrength, then we will add 1 to numEnemiesDestroyed.

We perform comparison tests with ``||logic:if||``

We have already seen similar behaviors in events like ``||sprites:on overlap||``. **If** the two sprites were overlapping and not ghosts, then the code for the event will run (for example, the score might increase).

``||logic:if||`` statements allow us to program a behavior based on the state of the game.

## Concept: ``||logic:if||`` Statement

``||logic:if||`` statements perform a test, and if the test evaluates to true, then it will run code that is given. Some further examples are:

* if the score is greater than 10, then give additional countdown time
* if the player has 0 lives left, then game over

These are what are known as comparisons because they compare the value of two things.

To use an ``||logic:if||`` statement block, we must fill it with a comparison test. If the test is true the code in the block will run. Below is a comparison to see if high score is greater than 5.

```block
if (info.highScore() > 5) {
    game.splash("Good job!")
}
```

## Concept: Comparison Operators

When we make comparisons, we have two numbers, in a specific order, and what is know as a comparison operator. A comparison operator allows us to specify what type of comparison we are doing. Some basic ones are:

* ``||logic:>||`` (Greater than): determines whether the first value given represents a quantity that is larger than the second value
* ``||logic:<||`` (Less than): determines whether the first value given represents a quantity that is smaller than the second value
* ``||logic:=||`` (Equal to): determines whether the two values given represent the same quantity

### Example #1: Less than

1. Play the game linked below
2. Review the code that uses comparisons
3. Look at how it uses ``||logic:if||`` logic and a less than comparison to modify the game

[Less Than Example](https://makecode.com/_YERAiggVK6mH)

```blocks
let mySprite: Sprite = null
let projectile: Sprite = null
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . 7 7 . . . . . . . . . . .
. . . 7 7 7 7 . . . . . . . . .
. . . 7 . . 7 7 7 . . . . . . .
. . . 7 . . . . 7 7 7 . . . . .
. . . 7 . . . . . . 7 7 7 . . .
. . . 7 . . . . . . . . 7 7 7 .
. . . 7 . . . . . . 7 7 7 . . .
. . . 7 . . . . 7 7 7 . . . . .
. . . 7 . . 7 7 7 . . . . . . .
. . . 7 7 7 7 . . . . . . . . .
. . . 7 7 . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 50)
mySprite.x = 8
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, -150, 0, SpriteKind.Enemy)
    projectile.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    if (info.score() < 10) {
        projectile.vx += 100
    }
})
```

When the game creates a new enemy, it checks to see if the player's score is less than a certain value.

If that is the case, the player has just started playing the game, so the game makes it easier for the player by decreasing the speed in which the projectiles are thrown at the player.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-ifless-task)

## Student Task #1a: Scoring

1. Create a new project
2. Create a ``||sprites:Sprite||``
3. When the player presses the ``||controller:A||`` button, increase the score by 1
4. When the player presses the ``||controller:B||`` button, if the player's score is less than 10, make the ``||sprites:Sprite||`` say something

## Student Task #1b: Sprite Position

1. Create a new project
2. Create a sprite, and use ``||controller:move mySprite with buttons||`` to make it move when the directional keys are pressed
3. When the player is on the left half of the screen and the player presses the ``||controller:A||``button, make the score increase by 1

### ~hint

The player is on the left half of the screen if their ``||sprites:x position||`` is less than half of the screen width

### ~

### Example #2: Greater Than

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-ifgreater)

1. Play the game linked above
2. Review the code that uses comparisons
3. Look at how it uses ``||logic:if||`` logic and a greater than comparison to modify the game

[Greater than example](https://makecode.com/_3M85jR4tCAXA)

```blocks
namespace SpriteKind {
    export const Cherry = SpriteKind.create();
}
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cherry, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() > 5) {
        mySprite.sayText("Too many cherries")
    }
})
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . .
. . . . . f 5 5 5 f f . . . . .
. . . . f 1 5 2 5 1 6 f . . . .
. . . f 1 6 6 6 6 6 1 6 f . . .
. . . f 6 6 f f f f 6 1 f . . .
. . . f 6 f f d d f f 6 f . . .
. . f 6 f d f d d f d f 6 f . .
. . f 6 f d 3 d d 3 d f 6 f . .
. . f 6 6 f d d d d f 6 6 f . .
. f 6 6 f 3 f f f f 3 f 6 6 f .
. . f f d 3 5 3 3 5 3 d f f . .
. . f d d f 3 5 5 3 f d d f . .
. . . f f 3 3 3 3 3 3 f f . . .
. . . f 3 3 5 3 3 5 3 3 f . . .
. . . f f f f f f f f f f . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
game.splash("Collect 5 cherries")
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, randint(-30, 30), randint(-30, 30), SpriteKind.Cherry)
})
```

When the player collects a cherry, if the player has collected more than 5, then the sprite says "Too many cherries".

## Student Task #2: Follow me!

1. Start a new project
2. Create 2 sprites, a leader and a follower
3. Set the ``||sprites:x position||`` of the leader at a random value between 100 and 140 and set the ``||sprites:x position||`` of the follower at 20.
4. Make it so that when the player presses the ``||controller:A||`` button, if the leader's ``||sprites:x position||`` is greater than the follower's, then make the follower change their ``||sprites:x position||`` by 10

### Example #3: Equality

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-ifequal)

1. Play the game linked above
2. Review the code that uses comparisons
3. Look at how it uses ``||logic:if||`` logic and an equality comparison to modify the game

[Equality Example](https://makecode.com/_3pgH9LA5kL9b)

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    if (info.life() == 1) {
        mySprite.say("Last chance")
        mySprite.setImage(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . 2 2 . . . . . . . . . . .
. . . 2 2 2 2 . . . . . . . . .
. . . 2 . . 2 2 2 . . . . . . .
. . . 2 . . . . 2 2 2 . . . . .
. . . 2 . . . . . . 2 2 2 . . .
. . . 2 . . . . . . . . 2 2 2 .
. . . 2 . . . . . . 2 2 2 . . .
. . . 2 . . . . 2 2 2 . . . . .
. . . 2 . . 2 2 2 . . . . . . .
. . . 2 2 2 2 . . . . . . . . .
. . . 2 2 . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`)
    }
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . 7 7 . . . . . . . . . . .
. . . 7 7 7 7 . . . . . . . . .
. . . 7 . . 7 7 7 . . . . . . .
. . . 7 . . . . 7 7 7 . . . . .
. . . 7 . . . . . . 7 7 7 . . .
. . . 7 . . . . . . . . 7 7 7 .
. . . 7 . . . . . . 7 7 7 . . .
. . . 7 . . . . 7 7 7 . . . . .
. . . 7 . . 7 7 7 . . . . . . .
. . . 7 7 7 7 . . . . . . . . .
. . . 7 7 . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, -100, randint(-50, 50), SpriteKind.Enemy)
    pause(500)
})
```

When the player is on their final life, the image of the sprite changes and the sprite says "Last chance".

## Student Task #3: Count to 10

1. Create a new project
2. Make it so that when the player presses the ``||controller:A||`` button the score increases by 1
3. Make it so that after the score is increased, if the score is equal to 10, use the ``||game:game over||`` block to end the game

### Example #4: Multiple ``||logic:if||`` Comparisons

1. Play the game linked below
2. Review the code that uses comparisons
3. Look at how it uses ``||logic:if||`` logic and multiple comparisons to modify the game

[Multiple comparisons](https://makecode.com/_FhqaRpe6Riau)

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x < scene.screenWidth() / 2) {
        info.changeScoreBy(1)
    }
    if (mySprite.y < scene.screenHeight() / 2) {
        info.changeLifeBy(-1)
    }
})
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . .
. . . . . f 5 5 5 f f . . . . .
. . . . f 1 5 2 5 1 6 f . . . .
. . . f 1 6 6 6 6 6 1 6 f . . .
. . . f 6 6 f f f f 6 1 f . . .
. . . f 6 f f d d f f 6 f . . .
. . f 6 f d f d d f d f 6 f . .
. . f 6 f d 3 d d 3 d f 6 f . .
. . f 6 6 f d d d d f 6 6 f . .
. f 6 6 f 3 f f f f 3 f 6 6 f .
. . f f d 3 5 3 3 5 3 d f f . .
. . f d d f 3 5 5 3 f d d f . .
. . . f f 3 3 3 3 3 3 f f . . .
. . . f 3 3 5 3 3 5 3 3 f . . .
. . . f f f f f f f f f f . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.setLife(5)
```

Notice how when the player presses the ``||controller:A||`` button, if they are on the left half of the screen, the score will increase, and if they are on the top half of the screen, their lives will decrease.

## Student Task #4: Equal and Greater Than

1. Create a new project
2. Create a ``||sprites:sprite||``
3. Make it so that when the player presses the ``||controller:A||`` button, the score increases by 1
4. In this event, if the player's score is above 10, make the sprite congratulate the player on their high score
5. In the same event, if the player's score is an even number, change the background to a random color
6. **Challenge:** add projectiles that fire from the ``||sprites:sprite||`` when the score is increased to a value greater than 5
7. **Challenge:** if the score reaches 20, change the ``||sprites:sprite||``'s image

### ~hint

The background can be changed to a random color with the following block

```block
scene.setBackgroundColor(randint(1, 15))
```

### ~

## What did we learn?

1. What is an ``||logic:if||`` statement? What is a case in which you would use one?
2. What is a logic comparison? What is a case in which you would use one?

### [Teacher Material](/courses/csintro2/about/teachers)
