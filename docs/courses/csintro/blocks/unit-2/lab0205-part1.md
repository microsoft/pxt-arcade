# Lab 2.5 Part 1: Pick a Number!
### @explicitHints true

## Pick a number! @showdialog

Let's make a game where the player tries to guess a number that the game show host
has chosen.

![Lab 2.5.1](https://arcade.makecode.com/api/_cMkLyW8wc8vk/thumb)



## Set the stage

Let's set the stage with a sprite for the game show host.

---


1.  To your <br/>
``||loops(noclick):on start||`` <br/>
container, add a block that creates a
sprite for your host.
    -   Give the sprite an appropriate variable name
    -   Give the sprite an appropriate image
    -   Have the game show host say,
        "Guess which number I am thinking of."
    -    At the bottom of your <br/>
    ``||loops(noclick):on start||`` <br/>
    container, add a <br/>
    ``||loops:pause (500) ms||`` <br/>
    block from the <br/>
    ``||loops:Loops||`` <br/>
    drawer.
    -   Set the pause to something between **`2000`** and **`5000`** milliseconds. We want the game to pause
        long enough for the player to read the prompt.

---


Run your project to make sure it works as expected.



#### ~ tutorialhint

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
```

## Let's be random!

Now, we need the host to pick a number.

---


1.  Create a new variable that will hold your game show host's secret number.
1.  To the **bottom** of your <br/>
``||loops(noclick):on start||`` <br/>
container,
set the value of your new variable to a random number between 1 and 10.
    -   Remember that the <br/>
    ``||math:pick random||`` <br/>
    block is in the <br/>
    ``||math:Math||`` <br/>
    drawer.


#### ~ tutorialhint

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
// @highlight
let hostsNumber = randint(1, 10)
```

## Take a guess!

Now, let's get the player's guess.

---


1.   Create a new variable that will hold the player's guess.
1.   To the **bottom** of your  
``||loops(noclick):on start||`` <br/>
container, ask the player for a number.
Store the guess in your new variable.

---


Run your project to make sure it works as expected.
View the hint if you need some help.

#### ~ tutorialhint

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
let hostsNumber = randint(1, 10)
// @highlight
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
```

## Was I right?

Now, let's see if the player was correct! To do so, we need to create a
*conditional* statement.

~hint What is a conditional?

---

A conditional tests whether something is true or false. It only
runs the associated code under the _condition_ that the statement was true.

We are going to add a conditional in the form of an ``||logic(noclick):if / else||`` statement. 

```block
if (true) {

} else {

}
```


hint~

---


1.   To the **bottom** of your <br/>
``||loops(noclick):on start||`` <br/>
container,
add an <br/>
``||logic:if (true) then [] else []||`` <br/>
block. You'll find that block in the <br/>
``||logic:Logic||`` <br/>
drawer.
1.   In place of the <br/>
``||logic(noclick):(true)||`` <br/>
value, drop a <br/>
``||logic:<(0) = (0)>||`` <br/>
block. You will find that in the <br/>
``||logic:Logic||`` drawer, also.
1.   Use blocks from the <br/>
``||variables:Variables||`` <br/>
drawer to make the
block say something like this: <br/>
``||logic(noclick):if||`` ``||variables(noclick):hostsNumber||``
``||logic(noclick):=||`` ``||variables(noclick):playerGuess||``


---

Use the hint to check your code. 

We'll fill in the
``||logic(noclick):if / else||``
container next.

#### ~ tutorialhint

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {

} else {

}
```

## Say what?

Time to fill up the  ``||logic(noclick):if / else||`` container.

---


-    In the top half of the container, <br/>
(the ``||logic(noclick):if||``) <br/>
add blocks to make the host
say that the player was correct. <br/>
  - Use a **join** block to also show the correct number
-    In the bottom half of the container, <br/>
(the ``||logic(noclick):else||``) <br/>
add blocks to make the host
say that the player was incorrect. <br/>
  - Use a **join** block to also show the correct number

---


Run your project to see if your code works as expected.
Use the hint to check your code.

#### ~ tutorialhint

```blocks
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {
    hostSprite.sayText("Great job! " + hostsNumber + " was my number!")
} else {
    hostSprite.sayText("Sorry! " + hostsNumber + " was my number.")
}
```

## Complete @showdialog

**Good work!**
🥳 🥳 🥳

We'll use conditional statements to create another game in Part 2!




```ghost
let hostSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
hostSprite.sayText("Guess which number I am thinking of.")
pause(5000)
let hostsNumber = randint(1, 10)
let playerGuess = game.askForNumber("Choose a number between 1 and 10.")
if (hostsNumber == playerGuess) {
    hostSprite.sayText("Great job! " + hostsNumber + " was my number!")
} else {
    hostSprite.sayText("Sorry! " + hostsNumber + " was my number.")
}
```
