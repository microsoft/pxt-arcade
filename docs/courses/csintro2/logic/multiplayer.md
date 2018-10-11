# Activity: Multiplayer

So far, games have been primarily been intended for a single user. These are called **single player games**: the player is alone in the world created by developers.

In this section, the ``||controller:local-multiplayer||`` extension will be used to facilitate **multiplayer**, so that more than one person can player at the same time.

## Concept: Local Multiplayer

The ``||controller:local-multiplayer||`` extension allows for multiple users to play games with eachother in the browser.

Using a QWERTY keyboard, the keys for both players are as follows

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

In the rest of this lesson, we will implement a simple version of pong using ``||controller:local-multiplayer||``.

## Example #2: Paddles

1. Review the






```package
local-multiplayer
```