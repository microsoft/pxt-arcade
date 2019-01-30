# Problem Set: Buttons

This section contains a number of selected problems for the Buttons section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Laser Shooter

Create a spaceship sprite that moves with button input.
When the player presses the ``||controller:A||`` button,
the player should fire a laser projectile from the sprite with a y-velocity of -100. 

## Problem #2: Jump Man

Create a player sprite and set their initial y-acceleration to 10.
Set the sprite flag ``||sprites:stay on screen||`` to true so that the
player doesn't move off screen. When the player presses the ``||controller:A||``
button, set the player's y-velocity to 20.
This should give the illusion that the player is jumping.

## Problem #3: Gravity Switcher

Create a player sprite and set their initial y-acceleration to 10.
Set the sprite flag ``||sprites:stay on screen||`` to true so that
the player doesn't move off screen.
When the player presses the ``||controller:A||`` button,
set the player's y-velocity to 0 and set its y-acceleration
to its current y-acceleration times -1.

## Problem #4: Coordinate Tracker

It is helpful to know where specific sprites are on the screen.
Create a player sprite that moves with button input.
When the player presses the ``||controller:A||`` button,
the game should ``||game:splash||`` to the screen the coordinates of the player sprite.
If the the sprite’s x-position was 40 and its y-position was 80,
it would say ``x = 40, y = 80``.
What happens when the player moves off the screen?

## Problem #5: Ready, Aim, Fire!

Create a player sprite in the middle of the screen.
When the player presses the ``||controller:up||`` button,
the player should fire a projectile in the up direction.
When the player presses the ``||controller:down||`` button,
the player should fire a projectile in the down direction.
The same should be true for when the player presses the  ``||controller:left||``
and ``||controller:right||`` buttons,
a projectile should fire in the direction of the button pressed.