# Lab 2.5 Part 1: Pick a Number!

## Pick a number! @showdialog

Let's make a game where the player guesses a number that the game show host
has chosen.

## Set the stage

Let's set the stage with a sprite for the game show host.

1.  To your   
``||loops(noclick):on start||``   
container, add a block that creates a
sprite for your game show host.
    -   Give the sprite an appropriate variable name.
    -   Give the sprite an appropriate image.
    -   Have the game show host say,
        "Guess which number I am thinking of."
    -    At the bottom of your   
    ``||loops(noclick):on start||``   
    container, add a   
    ``||loops:pause (500) ms||``   
    block from the   
    ``||loops:Loops||``   
    drawer.
    -   Set the pause to `1000` milliseconds. We want the game to pause
        long enough for the player to read the prompt.
    -   Feel free to change the length of the pause to a different value.

Run your project to make sure it works as expected.
View the hint if you need some help.

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(1000)
```

## Let's be random!

Now, we need the host to pick a number.

1.  Create a new variable that will hold your game show host's secret number.
1.  To the **bottom** of your   
``||loops(noclick):on start||``   
container,
set the value of your new variable to a random number from 1 to 10.
    -   Remember that the   
    ``||math:pick random||``   
    block is in the   
    ``||math:Math||``   
    drawer.

View the hint if you need some help.

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(2000)
// @highlight
let hostsNumber = randint(1, 10)
```

## Take a guess!

Now, let's get the player's guess.

1.   Create a new variable that will hold the player's guess.
1.   To the **bottom** of your  
``||loops(noclick):on start||``   
container, ask the player for a number.
Store the guess in your new variable.

Run your project to make sure it works as expected.
View the hint if you need some help.

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(2000)
let hostsNumber = randint(1, 10)
// @highlight
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
```

## Was I right?

Now, let's see if the player was correct! To do so, we need to create a
*conditional statement*.

~hint What is a conditional statement?
A conditional statement is sometimes called an "if" statement.
It tests whether something is true or false.
hint~

1.   To the **bottom** of your   
``||loops(noclick):on start||``   
container,
add an   
``||logic:if (true) then [] else []||``   
block. You'll find that block in the   
``||logic:Logic||``   
drawer.
1.   In place of the   
``||logic(noclick):(true)||``   
value, drop a   
``||logic:(0) = (0)||``   
block. You will find that in the   
``||logic:Logic||`` drawer, also.
1.   Use blocks from the   
``||variables:Variables||``   
drawer to make the
block say something like this:   
``||logic(noclick):if||`` ``||variables(noclick):hostsNumber||``
``||logic(noclick):=||`` ``||variables(noclick):playerGuess||``

Use the hint to check your code. We'll fill in the
``||logic(noclick):if||``
container next.

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(2000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {

} else {

}
```

## Say what?

Now, complete the ``||logic(noclick):if||`` container.

-    In the top half of the   
``||logic(noclick):if||``   
container, add blocks to make the game show host
say that the player was correct.   
Use a **join** block to also show the host's number.
-    In the bottom half of the   
``||logic(noclick):if||``   
container, add block to make the game show host
say that the player was incorrect.   
Use a **join** block to also show the host's number.

Run your project to see if your code works as expected.
Use the hint to check your code.

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(2000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {
    hostSprite.sayText("Great job! " + hostsNumber + " was my number!")
} else {
    hostSprite.sayText("Sorry! " + hostsNumber + " was my number.")
}
```

## Complete @showdialog

Good work! Let's use conditional statements to create another game in Part 2!

```ghost
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(2000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {
    hostSprite.sayText("Great job! " + hostsNumber + " was my number!")
} else {
    hostSprite.sayText("Sorry! " + hostsNumber + " was my number.")
}
```
