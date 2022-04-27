# Activity: Random Sprite Location

Random numbers provide an element of chance to our games that make them look and feel more natural. They can also provide surprises and introduce elements of "good" or "bad" luck.

In this activity, students will use:
* ``||math:pick random||`` to generate random numbers
* Setting random sprite positions
* Setting button press events

## Concept: Picking a Random Number

We can pick a random number in a range using ``||math:pick random||``. First, we will use this to display a random value on the screen.

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/4B7mv_oLqRs)

## Example #1: Pick Random

1. Review the code below
2. Create the sample code and run the code
3. Re-run the code several times to see the values generated
4. Observe how the range (between two numbers) is set

```blocks
let randomNumber = 0
randomNumber = randint(0, 10)
game.splash("Random Number is " + randomNumber)
```

## Student Task #1: Create Random Number Ranges

1. Start with the example code above
2. Adjust the code to pick a random number from **1** to **100**
3. Add a new variable ``||variables:anotherRandom||`` to pick a random number from **20** to **30**
4. Add a ``||game:splash||`` for the ``||variables:anotherRandom||`` variable
5. **Challenge:** use blocks to generate a random number that can result in both negative and positive values

## Concept: Pick a Random Location

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/XFOD-QmW4io)

Games often have an element of luck and surprise to keep the player engaged. In this example, we will use random numbers to place a sprite on the screen in a random location. We can use a random range because we know the dimensions of the screen.

## Example #2: Random Sprite Location #example-2

1. Review the code below
2. Create a new project and name it “randomLocation”
3. Create the sample code and run it
4. Examine the use of ``||math:pick random||`` in the sprite location block. The code does not assign the chosen random number to a variable before using it

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . 5 . . 5 . . 5 . . . . . .
. . . . 5 . 5 . 5 . . . . . . .
. . . . . 5 7 5 . . . . . . . .
. . . . 5 7 2 7 5 . . . . . . .
. . . . . 5 7 5 . . . . . . . .
. . . . . . 5 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . 2 1 1 1 1 1 1 1 2 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . 1 . 1 . . . . . . . .
. . . . 7 . . . 7 . . . . . . .
. . . 7 . . . . . 7 . . . . . .
. . 2 2 . . . . . 2 2 . . . . .
`, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
```

## Student Task #2: Set random position using a button event #task-2

1. Starting with code from [example #2](#example-2)
2. Add a ``||controller:on A button pressed||`` block
3. Make the event code for the ``||controller:A||`` button move a sprite to a new random position
4. Add another sprite and make it move with the ``||controller:B||`` button
5. **Challenge:** make both sprites change position with the ``||controller:A||`` button, and make the ``||controller:B||`` button give one of the sprites a random velocity (use small numbers that can be both positive and negative)

### ~hint

For challenge: velocity can be set using the set sprite blocks

```block
let mySprite: Sprite = null
mySprite.vx = 0
mySprite.vy = 0
```

### ~

## Example #3: Random and Overlaps

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/6KhZeuF4KLY)

1. Review the code below
2. Create the sample code and run the code
3. Examine the use of the sprite's ``||sprites:kind||`` in the overlap event

```blocks
namespace SpriteKind {
    export const Hat = SpriteKind.create();
}
let mySprite: Sprite = null
let hat: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hat, function (sprite, otherSprite) {
    sprite.say("Excuse Me!", 500)
})
hat = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . .
. . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . . 6 4 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Hat)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . 5 . . 5 . . 5 . . . . . .
. . . . 5 . 5 . 5 . . . . . . .
. . . . . 5 7 5 . . . . . . . .
. . . . 5 7 2 7 5 . . . . . . .
. . . . . 5 7 5 . . . . . . . .
. . . . . . 5 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . 2 1 1 1 1 1 1 1 2 . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . . 1 . . . . . . . . .
. . . . . 1 . 1 . . . . . . . .
. . . . 7 . . . 7 . . . . . . .
. . . 7 . . . . . 7 . . . . . .
. . 2 2 . . . . . 2 2 . . . . .
`, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
hat.setPosition(35, 60)
```

## Student Task #3: Check for random overlap with many sprites

1. Starting with [task #2](#task-2) where the game randomly moves 2 sprites with button pushes
2. Add at least 2 more sprites with random or fixed position
3. Add an ``||sprites:on overlap||`` event that results in a new behavior that uses ``||math:pick random||`` (for example, set velocity, set location, change location by, and so on), and causes the sprite to ``||sprites:say||`` something
4. Test that the ``||sprites:overlap||`` works with different sprites of the same ``||sprites:kind||``
5. **Challenge:** make multiple sprites randomly change position with the ``||controller:A||`` button and give two of the sprites a random velocity (use a range across negative and positive for ``||sprites:vx||`` and ``||sprites:vy||``)

## What did we learn?

1. Describe how the ability to generate a random value can make a game more interesting and/or challenging.
2. Make a hypothesis of a good use of ``||math:pick random||`` that you would like to design into a future game - especially something we don't know how to do yet. Be descriptive of the game and how a random value would be needed.

### [Teacher Material](/courses/csintro1/about/teachers)
