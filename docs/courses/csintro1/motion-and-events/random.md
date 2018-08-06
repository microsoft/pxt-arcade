# Activity: Random Sprite Location

In this activity, students will be introduced to: 
*  ``||math:pick random||`` to generate random numbers
* Setting random sprite positions
* Setting button press events

## Concept: pick a random number

We can pick a random number in a range using ``||math:pick random||``.  First, we will use this to display a random value.

https://youtu.be/PS8clbMInjw

[Alternative Video Location](https://aka.ms/40544a-randomsplash)

## Example #1: pick random

1. Review the code below
2. Create the sample code and run the code
3. Re-run the code several times to see the values generated
4. Observe how the range (between two numbers) is set

```blocks  
let randomNumber = 0
randomNumber = Math.randomRange(0, 10)
game.splash("Random Number is " + randomNumber)
```

## Student Task #1: create random numbers ranges

1. Start with the example code above
2. Adjust the code to pick a random number from 1 to 100
3. Add a new variable ``||variables:anotherRandom||`` to pick a random number from 20 to 30
4. Add ``||game:splash||`` for ``||variables:anotherRandom||`` variable and change the label from 'x' to a meaningful label
5. **Challenge:** use blocks to generate a random number that can result in both negative and positive values

## Concept: pick a random location

https://youtu.be/Ggj4rOXw6ns

[Alternative Video Location](https://aka.ms/40544a-randomposition)

Games often have an element of luck and surprise to keep the player engaged. In this example, we will use random numbers to place a sprite on the screen in a random location.  We can use a random range because we know the dimensions of the screen.

## Example #2: random sprite location

1. Review the code below
2. Create the sample code and run it
3. Save the code for the task (name it "randomLocation")
4. Examine the use of ``||math:pick random||`` in the sprite location block. The code does not assign the chosen random number to a variable before using it

```blocks  
enum SpriteKind {
    Player,
    Enemy
}
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
mySprite.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
```  

## Student Task #2: Set random position using a button event

1. Starting with example #2 code
2. Add a ``||controller:on A button pressed||`` block
3. Make the event code for the `A` button move a sprite to a new random position
4. Add another sprite and make it move with the `B` button
5. **Challenge:** make both sprites change position with the `A` button and make the `B` button give one of the sprites a random velocity (use small numbers that can be both postive and negative)

### ~hint

For Challenge: velocity can be set using the set sprite blocks

```block
let mySprite: Sprite = null
mySprite.vx = 0
mySprite.vy = 0
```

### ~

## Example #3: check for random overlap 

https://youtu.be/OgyWVwCJJIk

[Alternative Video Location](https://aka.ms/40544a-randompositionoverlap)

1. Review the code below
2. Create the sample code and run the code 
3. Examine the use of SpriteKind in the overlap

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Hat
}
let mySprite: Sprite = null
let hat: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
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
mySprite.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat.setPosition(35, 60)
```

## Student Task #3: check for random overlap with many sprites

1. Starting with task #2 where the game randomly moves 2 sprites with button pushes
2. Add at least 2 more sprites with random or fixed position
3. Add an ``||sprite:on overlap||`` event result in a new behavior that uses ``||math:pick random||`` (for example, set velocity, set location, change location by, and so on) with sprite action of saying something
4. Be sure the overlap will work for several sprite of the same SpriteKind
5. **Challenge:** make multiple sprites randomly change position with the `A` button and both of the sprites a random velocity (use a range across negative and positive for ``||sprites:vx||`` and ``||sprites:vy||``)

## What did we learn? 

1. Describe how the ability to generate a random value can make a game more interesting and/or challenging.
2. Make a hypothesis of a good use of random that you would like to design into a future game - especially something we don't know how to do yet. Be descriptive of the game and how random would be needed.
