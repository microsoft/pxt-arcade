# Activity: Multiplayer

So far, games have been primarily been intended for a single user. These are called **single player games**: the player is alone in the world created by developers.

In this section, the ``||controller:local-multiplayer||`` extension will be used to facilitate **multiplayer**, so that more than one person can player at the same time.

## TODO add lesson outline

## TODO add final pong game gif

## TODO finalize block examples once apis are settled

## Concept: Local Multiplayer

The ``||controller:local-multiplayer||`` extension allows for multiple users to play games with eachother in the browser.

Using a QWERTY keyboard, the keys for both players are listed belows

| Controller Button | Player One    | Player Two    |
| :---------------: | :-----------: | :-----------: |
| ``up``            | W             | I             |
| ``left``          | A             | J             |
| ``down``          | S             | K             |
| ``right``         | D             | L             |
| ``A``             | Q             | U             |
| ``B``             | E             | O             |

<br />

Additionally, many gamepads (for example, an Xbox One controller) can be used to control the game as well. The button mappings depend on the controller, and some may not work. Gamepads also allow more than two players can play at once.

## Example #1: Player one

1. Review the code below
2. Notice the two new blocks, ``||controller:set sprite for player one to||`` and ``||controller:control player one with vx 0 vy 0||``
3. Identify whether these blocks are similar to other blocks that were previously used

```blocks
enum SpriteKind {
    Player,
    Enemy
}
controller.setPlayerSprite(controller.PlayerNumber.One, sprites.create(img`
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
`, SpriteKind.Player));
// controller.controlPlayer(controller.PlayerNumber.One, 100, 100); ## TODO comment this when implemented
```

## Student Task #1: Loading Player Two

1. Load the ``||controller:local-multiplayer||`` extension from the ``Extensions`` menu. This will add new options in the ``||controller:Controller||`` category
2. Start with the code from example #1
3. Get another ``||controller:set sprite for player one to||``, and replace ``||controller:one||`` with ``||controller:two||``. Draw a different smiley face for the image
4. Get another ``||controller:control player one with vx 0 vy 0||``, and set both vx and vy to 100. Change ``||controller:one||`` to ``||controller:two||``

With this task complete, you can now play games with two players in it: these players can currently only move around the screen, but you can implement any other behavior you want. If you need access to the sprites, you can use ``||controller:player one sprite||`` to get the sprite currently assigned to player one.

## Concept: Pong

Pong is a game based off of table tennis (Ping Pong). Pong was one of the first 2 dimensional games ever released, in which two players can play against one another trying to hit a ball past the opponent.

In the rest of this lesson, we will implement a simple version of pong using ``||controller:local-multiplayer||``. For each of the following tasks, you will build on the code introduced in example 2 to create your final game.

## Example #2: Paddles

1. Review the code below
2. Identify what is being done to set up the players on the **left** and **right** side of the screen
3. Identify where on the screen the player can move

```blocks
enum SpriteKind {
    Player,
    Enemy
}
controller.setPlayerSprite(controller.PlayerNumber.One, sprites.create(img`
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
`, SpriteKind.Player));
// controller.controlPlayer(controller.PlayerNumber.One, 0, 100); ## TODO comment this when implemented
// controller.getPlayerSprite(controller.PlayerNumber.One).x = 0;
// controller.getPlayerSprite(controller.PlayerNumber.One).setFlag(SpriteFlag.StayInScreen, true);
controller.setPlayerSprite(controller.PlayerNumber.Two, sprites.create(img`
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
. . . . . . . . . . . 5 5 5 5 5 
`, SpriteKind.Player));
// controller.controlPlayer(controller.PlayerNumber.Two, 0, 100); ## TODO comment this when implemented
// controller.getPlayerSprite(controller.PlayerNumber.Two).x = 0;
// controller.getPlayerSprite(controller.PlayerNumber.Two).setFlag(SpriteFlag.StayInScreen, true);
```

## Student Task #2: Create a Ball

1. Get the ``||sprites:on created sprite of kind||`` event, and change ``||sprites:Player||`` to ``||sprites:Ball||``
2. In the ``||sprites:on created sprite of kind||`` event, use ``||sprites:set sprite image to||`` to give the sprite an image of a ball
3. Give the ball a ``||sprites:vx||`` of either -50 or 50, with a ``||math:50 % chance||`` of each (use an ``||logic:if then ... else||`` block to handle this)
4. Give the ball a random ``||sprites:vy||`` between -50 and 50
5. Store the ball sprite in the variable ``||variables:currentBall||``
6. Add ``||sprites:create empty sprite of kind Ball||`` to the ``||loops:on start||``, to create a ball when the game starts

## Student Task #3: Wall Bounce

1. Get an ``||game:on game update||`` event. Place an ``||logic:if then ... else if then||`` block inside of the event
2. In the first condition, check if ``||variables:currentBall||``'s ``||sprites:y||`` position is **less than or equal to** 0. If it is,
    * set ``||variables:currentBall||``'s ``||sprites:y||`` position to 0
    * set ``||variables:currentBall||``'s ``||sprites:vy||`` to it's current ``||sprites:vy||`` multiplied by ``-1``
3. In the second condition, check if ``||variables:currentBall||``'s ``||sprites:y||`` position is **greater than or equal to** ``||scene:screen height||``. If it is,
    * set ``||variables:currentBall||``'s ``||sprites:y||`` position to ``||scene:screen height||``
    * set ``||variables:currentBall||``'s ``||sprites:vy||`` to it's current ``||sprites:vy||`` multiplied by ``-1``

## Student Task #4: Keeping Score

1. Add another ``||logic:if then ... else if then||`` block inside of the event
2. **If** the ``||variables:currentBall||``'s ``||sprites:x||`` position is less than 0, then
    * ``||sprites:destroy||`` the ``||variables:currentBall||``
    * Add one to ``||info:change player two score||``
    * create a new ball with ``||sprites:create empty sprite of kind Ball||``
3. Otherwise, **if** the ``||variables:currentBall||``'s ``||sprites:x||`` position is greater than ``||scene:screen width||``, then
    * ``||sprites:destroy||`` the ``||variables:currentBall||``
    * Add one to ``||info:change player one score||``
    * create a new ball with ``||sprites:create empty sprite of kind Ball||``

## Student Task #5: Hit the Paddle

1. Create an ``||sprites:on overlap||`` event between a ``||sprites:Ball||`` and a ``||sprites:Player||``
2. In the ``||sprites:overlap||`` event, first ``||sprites:set mySprite ghost on||``
3. Next, reverse the ``||sprites:Ball||``'s ``||sprites:vx||`` by setting it to the current ``||sprites:vx||`` multiplied by -1
4. After a ``||loops:pause||`` of 200 ms,  ``||sprites:set mySprite ghost off||``

## What did we learn?

```package
local-multiplayer
```