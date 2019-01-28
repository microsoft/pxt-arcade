# Problem Set: Sprite Overlap

This section contains a number of selected problems for the Sprite Overlap section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Hidden Treasure

Create a game that creates two sprites, a player sprite and a treasure sprite. The player sprite can look like anything, but should be controlled with button input. The treasure sprite should be 100% transparent and be placed at a random position on the screen. Use a ``||sprites:Sprite Overlap||`` event end the game with a winning parameter when the player overlaps with the treasure.

## Problem #2: Bees!

Create a game with with two initial sprites, a player sprite and a bee hive sprite. The bee hive should have an x-position of 0 and the player should be controlled with button input. Make the player stay on the screen and have initial health of 5. Every 200 ms, make a bee projectile come from the bee hive with an x-velocity of 80 and a random y-velocity between -50 and 50. If the bee and player overlap, destroy the bee sprite and decrease the player's health by 1.

## Problem #3: Bees and Honey!

Create a game with with two initial sprites, a player sprite and a bee hive sprite. The bee hive should have an x-position of 0 and the player should be controlled with button input. Make the player stay on the screen and have initial health of 5. Every 200 ms, with an 80% chance, make a bee projectile come from the bee hive with an x-velocity of 80 and a random y-velocity between -50 and 50. If the bee and player overlap, destroy the bee sprite and decrease the player's health by 1. On the other 20% chance, make a honey projectile with an x-velocity of 80 and a random y-velocity between -50 and 50. If the honey and the player overlap, destroy the honey sprite and increase the score by 1.

## Problem #4: Ghost Burger

Create a game with with two initial sprites, a player sprite and a burger sprite. The burger sprite should have a random x and y velocity and should bounce on walls. The player sprite should be controlled using button input. Make the score increase every time the player and burger overlap. To prevent the score increasing once every game update, set the burger to be a ghost, pause for 1 second, and then set the burger to not be a ghost.

## Problem #5: Dodge Ball

Create a game that initial has just a player that moves with button input. Every 2 seconds, create a projectile that looks like a ball with random velocity and bounces on walls. If the player overlaps with a ball, the game should end.