# Activity: Functions Intro

Functions are a way to group sections of code to be run together. They are regularly used when writing code both to increase the readability of code, and to allow for reuse of common actions.

In Blocks, ``||functions:Functions||`` can be found under the `Advanced` section.

![finding functions in blocks](/static/courses/csintro2/functions/finding-functions.gif)

In this activity, student will be introduced to:
* Simple functions in blocks
* Calling functions by name

## Concept: Functions for Readability

Functions allow us to break up code into different sections. In doing so, we can separate distinct tasks, giving a distinct name for small tasks in your code.

## Example #1a: Creating Sprites

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/NsENrceOCDw)

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "placeSprites")

```blocks
namespace SpriteKind {
    export const Human = SpriteKind.create();
    export const Cow = SpriteKind.create();
    export const Asteroid = SpriteKind.create();
}
let asteroid: Sprite = null
let cow: Sprite = null
let human: Sprite = null
human = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 4 4 4 4 . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . 4 . 4 . 4 . . . . . .
. . . . . . 4 4 4 . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . 4 . 4 . . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Human)
human.setPosition(20, 30)
human.say("Hello!")
cow = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . e . e e . e . . . . . . .
. . e . e e d e . e . d d d . .
. . . e f e f d e d d d d d d .
. . . e e e e e e d d d d d d .
. . . e 3 3 e e d d e e d e e d
. . . . e e e d d d d d e d d d
. . . . . . . d d e d d d d d d
. . . . . . . . d d d d d d d d
. . . . . . . . . d . . . . d .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cow)
cow.setPosition(50, 80)
cow.say("Moo")
asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
asteroid.say("Crash")
```

This code has a reasonably long ``||loops:on start||`` for how simple it is; we make a human, then we make a cow, and finally we make an asteroid.

In the next examples, we will simplify the ``||loops:on start||`` code by splitting the code into three different functions, so that people reading your code can get an idea of what happens when you start the game quickly, rather than having to read through every single block.

## Example #1b: Creating Sprites (with functions)

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "placeSpritesWithFunctions")

```blocks
namespace SpriteKind {
    export const Human = SpriteKind.create();
    export const Cow = SpriteKind.create();
    export const Asteroid = SpriteKind.create();
}
let asteroid: Sprite = null
let cow: Sprite = null
let human: Sprite = null
function placeHuman() {
    human = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . 4 4 4 4 4 . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . 4 . 4 . 4 . . . . . .
. . . . . . 4 4 4 . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . . 4 . . . . . . . .
. . . . . . 4 . 4 . . . . . . .
. . . . . 4 . . . 4 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Human)
    human.setPosition(20, 30)
    human.say("Hello!")
}
function placeCow() {
    cow = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . e . e e . e . . . . . . .
. . e . e e d e . e . d d d . .
. . . e f e f d e d d d d d d .
. . . e e e e e e d d d d d d .
. . . e 3 3 e e d d e e d e e d
. . . . e e e d d d d d e d d d
. . . . . . . d d e d d d d d d
. . . . . . . . d d d d d d d d
. . . . . . . . . d . . . . d .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Cow)
    cow.setPosition(50, 80)
    cow.say("Moo")
}
function placeAsteroid() {
    asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
    asteroid.say("Crash")
}
placeHuman()
placeCow()
placeAsteroid()
```

One way to think of this is like a book: by adding new functions to our code, we were able to make the blocks inside of the ``||loops:on start||`` block resemble a table of contents for our code, with simple descriptions of the tasks we wanted done.

Each function ends up being a chapter in the book with more details on what exactly is getting down. If you want to get a feeling for how the book will be, you skim through the table of contents, and if parts sound interesting, you can read those by going to the specified location (or function).

## Student Task #1a: Make your own Functions

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/-50-av1tblc)

1. Review the code below
2. Create the sample code and run the code
3. Create 3 different functions, with names that describe different sections of the code.
    * Remove the blocks from the ``||loops:on start||`` block and split it into the three different functions. Each function should have 3 of the 9 blocks
    * Use the ``||functions:call function||`` block 3 times in your ``||loops:on start||`` block to call each new function
4. Make sure your code behaves **exactly** the same as the code below

### ~hint

The 3 functions should cover the initial sprite setup, playing the music, and display items.

Try re-ordering the ``||functions:function calls||`` in your ``||loops:on start||`` - does anything change, or happen in a different order?

### ~

```blocks
namespace SpriteKind {
    export const Human = SpriteKind.create();
    export const Cow = SpriteKind.create();
    export const Asteroid = SpriteKind.create();
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 b b 3 3 3 3 b b 3 3 3 .
. 3 3 3 b b 3 3 3 3 b b 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Whole))
scene.setBackgroundColor(1)
info.setScore(0)
info.startCountdown(10)
```

## Student Task #1b: Functions in Events

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/m4AamaGjDoE)

Functions can be used throughout your code - not just in the ``||loops:on start||`` block.

In this task, we will clean up the ``||controller:on A button pressed||`` event to make it a bit easier to read.

1. Review the code below
2. Create the sample code and run the code
3. Create 2 new functions, named ``||functions:conversation||`` and ``||functions:scorePoints||``
4. Move the blocks in ``||controller:on A button pressed||`` for the conversation to ``||functions:conversation||``, and the blocks for scoring a point and playing a sound to ``||functions:scorePoints||``
5. Use the ``||functions:call function||`` block 2 times in the ``||controller:on A button pressed||`` event to call both new functions
6. **Challenge**: Create an ``||sprites:on overlap||`` event that uses
    * the ``||functions:conversation||`` function
    * an additional function (for example, ``||functions:playerConversation||``, or ``||functions:movePlayer||``)

```blocks
namespace SpriteKind {
    export const Princess = SpriteKind.create();
}
let princess: Sprite = null
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    player.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
})
player = sprites.create(img`
. . . . . . . . . . . . . . . .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 b b 3 3 3 3 b b 3 3 3 .
. 3 3 3 b b 3 3 3 3 b b 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
```

## What did we learn?

1. Describe how the use of functions in code can help make programming easier.
2. Does putting code into separate functions always make sense? Would it be more or less clear if we took the code from example #2, and made a function that calls the other three, so that our ``||loops:on start||`` block only had a single block inside of it?

### [Teacher Material](/courses/csintro2/about/teachers)
