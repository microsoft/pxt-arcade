# Activity: Logic in Loops

``||logic:if||`` and ``||logic:else||`` conditions allows for the development games and programs that properly respond to different states and conditions - however, the condition only occurs a single time. The ``||loops:while||`` loop allows for conditions to be checked an indefinite number of times, until the condition becomes false - effectively serving as a looping ``||logic:if||`` statement.

In this activity, students will:
* Use ``||loops:while||`` loops

## Concept: While loops

Using ``||loops:while||`` loops allows for actions and tasks that repeat until certain conditions are met. One example of this can be found in making a game based off of guessing a number.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-logic-while)

## Example #1: Guessing Game #example-1

1. Review the code below
2. Create the sample code and run the code
3. Identify why the code runs until the player guesses the correct answer

```blocks
let guess = 0
let value = randint(1, 5)
game.splash("I'm thinking of a number between 1 and 5")
while (guess != value) {
    guess = parseInt(game.askForString("What's your guess"))
}
game.splash("Correct!")
game.over(true)
```

This game requires the player to guess a number that the game has chosen. The game generates a random number, and then prompts the player to guess until they get it right.

Another way to think about this task is that we want the code that prompts the player to guess to keep looping **while** they are getting the answer wrong.

### ~hint

#### "while" isn't "until"?

In English, the difference between "until" *some condition* and "while" *some condition* is simply that they are opposites.

Example: "We want to run this code until the player guesses it correctly" is the same as saying "we want to run this code while the player guesses it incorrectly".

### ~

## Student Task #1: Checking Math

1. Start with the code from [example #1](#example-1)
2. Generate a second random value between 1 and 5, and store it in the variable ``||variables:secondValue||``
3. Change the ``||game:splash||`` screen from "I'm thinking of a number between 1 and 5" to "Answer the question!"
4. Compare the ``||variables:guess||`` to the result of `value + secondValue` instead of just `value`
5. Change the ``||game:ask for string with text||`` value to instead ask for the sum of ``||variables:value||`` and ``||variables:secondValue||`` (make sure to include what those two values are in the message)

## Example #2: Fireball Game

![Fire thrower](/static/courses/csintro2/logic/fire-shooter.gif)

1. Review the code below
2. Create the sample code and run the code

```blocks
namespace SpriteKind {
    export const Fireball = SpriteKind.create();
    export const Fire = SpriteKind.create();
    export const FireSource = SpriteKind.create();
}
let fireSource: Sprite = null
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
mySprite = sprites.create(img`
. . . . . . . f f f . . . . . .
. . . . . . f 4 4 4 f . . . . .
. . . . . f 4 4 4 4 4 f . . . .
. . . . f 4 4 2 2 4 4 4 f . . .
. . . . f 4 4 2 2 2 4 4 4 f . .
. . . f 4 4 2 2 2 2 2 4 4 f . .
. . . f 4 4 2 2 2 2 2 2 4 4 f .
. . . f 4 4 2 2 2 5 5 2 4 4 f .
. . f 4 4 4 2 2 2 5 5 5 4 4 4 f
. f 4 4 4 2 2 2 5 5 5 5 4 4 4 f
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f
. f 4 4 4 2 2 5 5 5 5 5 5 4 f .
. . f 4 4 4 4 4 4 4 4 4 4 4 f .
. . . f 4 4 4 4 4 4 4 4 f f . .
. . . . f f f f f f f f . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite.setStayInScreen(true)
info.setLife(15)
info.startCountdown(3)
game.onUpdateInterval(500, function () {
    fireSource = sprites.create(img`
. . . . . . . . . . . . . . . .
. . 2 2 2 2 2 2 . . 5 . . . . .
. . 2 . . . . 2 2 5 . . . . . .
. . 2 . . . . 2 2 2 . . . . . .
. . 2 2 2 2 2 2 2 2 . . . . . .
. . 2 f 2 2 2 2 f 2 . . . . . .
. . 2 2 f 2 2 f 2 2 . . . . . .
. . 2 2 2 f f 2 2 2 . . . . . .
. . 2 2 2 f f 2 2 2 . . . . . .
. . 2 2 2 f f 2 2 2 . . . . . .
. . 2 2 2 f f 2 2 2 . . . . . .
. . 2 2 f 2 2 f 2 2 . . . . . .
. . 2 f 2 2 2 2 f 2 . . . . . .
. . 2 2 2 2 2 2 2 2 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.FireSource)
})
```

This is a game in which the object is to keep throwing fireballs for as long as you can. The player's ``||info:score||`` is how many fireballs they have launched. The problem for the player is that they have a limited number of fireballs, which are stored as ``||info:life||``, and need to pickup fuel in order to get more.

An important part is missing, though: the code that will fire the fireballs when the player says to start!

## Student Task #2: Creating fireballs

1. Start with the code from example #2
2. To start, add in the code to fire a single fireball from ``||variables:mySprite||`` in the ``||controller:on A button pressed||`` event. This should:
    * Use an ``||logic:if||`` statement to check that the player has more than one life
    * Create a ``||sprites:projectile||`` of a fireball with the origin set to ``||variables:mySprite||`` (along with some initial velocities)
    * Decrement ``||info:life||`` by 1
    * Increment ``||info:score||`` by 1
3. Replace the ``||logic:if||`` statement from part 2 with a ``||loops:while||`` loop, so that the projectiles continue **until** the player runs out of life. Note that you will want to include a ``||loops:pause (1000) ms||`` block in the ``||loops:while||`` loop to slow down execution."

### ~hint

#### Using a while or repeat loop?

Why did we use a ``||loops:while||`` loop instead of a ``||loops:repeat||`` loop?

The intention of the game is to keep creating fires until the game ends, after the player initially presses the **A** button.

A ``||loops:repeat||`` loop is intended to be used to repeat something a pre-determined number of times. Using a ``||loops:while||`` loop is very useful in this case to more accurately reflect what the developer intends (which will make the code more readable for a classmate or friend).

### ~

## What did we learn?

1. How are ``||loops:while||`` loops different from ``||loops:for index||`` loops?
2. Explain why picking up the ``||variables:fireSource||`` allowed the player to keep making fireballs, without any other buttons being pressed.
3. **Challenge:** if ``||logic:if||`` statements didn't exist, could you use ``||loops:while||`` loops to implement the same behavior in blocks? If so, how?

### [Teacher Material](/courses/csintro2/about/teachers)
