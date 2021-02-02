# Activity: Multiplayer

So far, games have been primarily been intended for a single user. These are called **single player games**: the player is alone in the world created by developers.

In this section, we will create **multiplayer** games, so that more than one person can play at the same time.

![Final Game](/static/courses/csintro2/logic/paddle-game.gif)

In these activities, students will work with:

* ``||logic:if then ... else if||`` conditions
* Comparison operators
* The ``||controller:controller||`` multiplayer blocks
* The ``||logic:info||`` multiplayer blocks

## Concept: Local Multiplayer

The ``||controller:multiplayer||`` blocks allows for multiple users to play games with each other in the browser.

Using a QWERTY keyboard, the keys for both players are listed below

| Controller Button | Player One    | Player Two    |
| :---------------: | :-----------: | :-----------: |
| ``up``            | W             | I             |
| ``left``          | A             | J             |
| ``down``          | S             | K             |
| ``right``         | D             | L             |
| ``A``             | Q             | U             |
| ``B``             | E             | O             |

<br />

Some keyboards may have a maximum number of keys that can be pressed at a single time, which may inhibit the ability for two people to play on one keyboard.

### ~hint

Many gamepads (for example, an Xbox One controller) can be used to control the game as well. The button mappings depend on the controller, and some gamepads may not work.

Additionally, multiple gamepads can be used to allow for more than the two players a keyboard supports, allowing for three or more players in a single game.

### ~

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-logic-multi)

## Example #1: Player one

1. Review the code below
2. Notice that this is the same type

```blocks
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . 5 . .
    . 5 . . . . . . . . . . 5 5 . .
    . 5 5 5 . . . . . . . 5 5 . . .
    . . . 5 5 5 5 . . . 5 5 . . . .
    . . . . . . 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player);
controller.moveSprite(player1);
```

## Student Task #1: Loading Player Two

1. Start with the code from example #1
2. Get another ``||variables:set mySprite to||``. Draw a different smiley face for the image, and change the variable name to ``||variables:player2||``
3. Get a ``||controller:player 2 move mySprite with buttons||``. Change ``||variables:mySprite||`` to ``||variables:player2||``

With this task complete, you can now play games with two players in it: these players can currently only move around the screen, but you can implement any other behavior you want.

## Concept: Paddle Game

The Paddle Game is a game based off of table tennis (Ping Pong). The Paddle Game was one of the first 2 dimensional games ever released, in which two players can play against one another trying to hit a ball past the opponent.

In the rest of this lesson, we will implement a simple version of The Paddle Game using ``||controller:multiplayer||``. For each of the following tasks, you will build on the code introduced in example 2 to create your final game.


[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-logic-ball)

## Example #2: Paddles

1. Review the code below
2. Identify what is being done to set up the players on the **left** and **right** side of the screen
3. Identify where on the screen the player can move
4. Notice how both player's scores are shown in the corners of the screen, along with the player number

```blocks
let player1 = sprites.create(img`
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
2 2 2 2 2 . . . . . . . . . . .
`, SpriteKind.Player);
controller.moveSprite(player1, 0, 100)
player1.x = 0
player1.setStayInScreen(true)
info.setScore(0)

let player2 = sprites.create(img`
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
. . . . . . . . . . . 8 8 8 8 8
`, SpriteKind.Player);
controller.player2.moveSprite(player2, 0, 100)
player2.x = scene.screenWidth()
player2.setStayInScreen(true)
info.player2.setScore(0)
```

## Student Task #2: Create a Ball

1. Get the ``||sprites:on created sprite of kind||`` event, and change ``||sprites:Player||`` to ``||sprites:Ball||``
2. In the ``||sprites:on created sprite of kind||`` event, use ``||sprites:set sprite image to||`` to give the sprite an image of a ball
3. Give the ball a ``||sprites:vx||`` of either -75 or 75, with a ``||math:50 % chance||`` of each (use an ``||logic:if then ... else||`` block to handle this)
4. Give the ball a random ``||sprites:vy||`` between -75 and 75
5. Assign the variable ``||variables:currentBall||`` to ``||sprites:sprite of kind Ball||`` in ``||loops:on start||``, to create a ball when the game starts

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-logic-complete-multi)

## Student Task #3: Wall Bounce

![Bounce!](/static/courses/csintro2/logic/bounce.gif)

1. Get an ``||game:on game update||`` event. Place an ``||logic:if then ... else if then||`` block inside of the event
2. In the first condition, check if ``||variables:currentBall||``'s ``||sprites:y||`` position is **less than or equal to** 0. If it is,
    * set ``||variables:currentBall||``'s ``||sprites:y||`` position to 0
    * set ``||variables:currentBall||``'s ``||sprites:vy||`` to it's current ``||sprites:vy||`` multiplied by ``-1``
3. In the second condition, check if ``||variables:currentBall||``'s ``||sprites:y||`` position is **greater than or equal to** ``||scene:screen height||``. If it is,
    * set ``||variables:currentBall||``'s ``||sprites:y||`` position to ``||scene:screen height||``
    * set ``||variables:currentBall||``'s ``||sprites:vy||`` to it's current ``||sprites:vy||`` multiplied by ``-1``

## Student Task #4: Keeping Score

![Score](/static/courses/csintro2/logic/keeping-score.gif)

1. Add another ``||logic:if then ... else if then||`` block inside of the ``||game:on game update||`` event
2. ``||logic:if||`` the ``||variables:currentBall||``'s ``||sprites:x||`` position is less than 0, then
    * ``||sprites:destroy||`` the ``||variables:currentBall||``
    * Add one to player two's score with ``||info:change player two score by||``
    * Assign ``||variables:currentBall||`` to a new ``||sprites:sprite of kind Ball||``
3. Otherwise, ``||logic:if||`` the ``||variables:currentBall||``'s ``||sprites:x||`` position is greater than ``||scene:screen width||``, then
    * ``||sprites:destroy||`` the ``||variables:currentBall||``
    * Add one to player one's score with ``||info:change score by||``
    * Assign ``||variables:currentBall||`` to a new ``||sprites:sprite of kind Ball||``
4. In the ``||loops:on start||``, use ``||info:set player one score||`` and ``||info:set player two score||`` to start both players off with a score of 0

## Student Task #5: Hit the Paddle

![Final Game](/static/courses/csintro2/logic/paddle-game.gif)

1. Create an ``||sprites:on overlap||`` event between a ``||sprites:Player||`` and a ``||sprites:Ball||``, so that ``||variables:sprite||`` corresponds to the ``||sprites:Player||``
2. In the ``||sprites:overlap||`` event, first ``||sprites:set otherSprite ghost on||``
3. Next, reverse the ``||sprites:Ball||``'s ``||sprites:vx||`` by setting it to the current ``||sprites:vx||`` multiplied by -1
4. After a ``||loops:pause||`` of 200 ms, ``||sprites:set otherSprite ghost off||``
5. **Challenge:** when reversing the ``||sprites:Ball||``'s ``||sprites:vx||``, multiply the current ``||sprites:vx||`` by -1.1 instead of -1
6. **Challenge:** add ``||sprites:change otherSprite vy by 0||`` to change the vertical speed of the ``||sprites:Ball||`` when it collides with a paddle. Replace the ``0`` with ``||sprites:sprite vy||`` multiplied by ``0.33``

## What did we learn?

1. How does having multiple players at once in a single game allow for new and compelling games?
2. Were there any difficulties in implementing the multiplayer game? Was it easier or harder than a single player game?
