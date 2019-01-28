# Problem Set: Info

This section contains a number of selected problems for the Info section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Dodge to Win

Create a player sprite that can move around the screen with button input. Make it so that the player must stay on the screen by setting the ``||sprites:stay in screen||`` flag to true. Create projectiles that fire from the walls in random directions every 500 ms. If the player overlaps with one of these projectiles, the game should be over and the player has lost. Start a countdown for 30 s. When the countdown ends, the game should be over and the player should win.

## Problem #2: Boss Battle

Create two sprites, a player sprite and an enemy sprite. Set the lives to be 5. For this, problem the lives will represent the health of the enemy. Make the player shoot a projectile in the direction of the enemy. If the projectile overlaps with the enemy, destroy the projectile and decrease life by when. If lives run out, the game should be over and the player should win.

## Problem #3: Timed-Maze

Create a tile map with the image of a maze. Leave an open space on the left side for an exit. Make sure to set the color used as walls to be walls. Create a player sprite that can move with button input and is placed at the start of the maze. If the maze is larger than 10x8 tiles, it may be helpful to set the camera to follow the player sprite. If the player's left value is less than 0, i.e. they've reached the exit, the game should be over and the player has won. Set the lives to 5 and start a countdown for 30 s (Or longer depending on the difficulty of the maze). When the countdown ends, the player should be placed back at the start of the maze, a life is taken away and the countdown starts again.

## Problem #4: Hold Your Breath

Create a game in which a player sprite that moves only on the x-axis with button input and has an initial y-position of 16. Set the initial health to 5. During the game update, if the player's y-position is less than or equal to 16, its y-velocity and y-acceleration should both be set to 0. A countdown of 10 s should also start. Otherwise, set the y-acceleration to -20. When the player presses the ``||controller:A||`` button, the player's y-velocity should change by 15. When the countdown ends, reduce life by 1 and start a countdown for 1 s.

## Problem #5: Health and Lives

With the current setup, the idea of health and lives cannot be used concurrently. If a player loses health, they should be closer to losing a life, but if they lose a life, they should have to start over. Use the hearts in the top-left corner to represent health, and the score to represent the number of lives the player has left. When the player runs out of health, the player should be reset to their initial position, a life should be removed, and their health should be restored. If the player has no lives left, the game should be over.

Create a game that uses this mechanic by having a player sprite that moves around with button input and is "hurt" or loses 1 health when the ``||controller:A||`` button is pressed.