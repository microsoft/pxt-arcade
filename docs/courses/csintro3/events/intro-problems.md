# Problem Set: Intro

This section contains a number of selected problems for the Intro section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Where you at?

When debugging games, it can be helpful to know the exact position of the sprites.
Create a program that has one sprite that moves with keyboard controls.
Use an ``||game:on game update||`` event to have the sprite ``||sprites:say||`` it position.
For example, if the the sprite's x-position was 40 and its y-position was 80,
it would ``||sprites:say||`` ``x = 40, y = 80``.

## Problem #2: Black and White

As the sprites move around the screen,
it can be nice to have them interact with the background.
Create a game that uses an ``||game:on game update||`` event that sets
the background color based on the position of a sprite.
If the sprite is on the left half of the screen,
set the background color to black (15) otherwise set the background color to white (1).

## Problem #3: Loop

Setting the velocity of a sprite can be a nice way to make games more
interesting by having sprites move.
However, if a sprite has a non-zero velocity in either the x or y direction,
that sprite is bound to end of off the screen.
There are many solutions to avoid this,
but imagine the case in which a sprite goes off the right side of a
screen and appears on the left side of the screen. 

Use an ``||game:on game update||`` event to detect if a certain sprite has
gone off the right side of the screen and if it has,
change its position to appear on the left side of the screen.

## Problem #4: Portals

Perhaps there are cooler and more interesting solutions the problem
presented in the Loop problem above. Imagine the idea of a portal?
That is kind of what is presented previously, but only along the x-axis.
Imagine if a sprite when off the right side of the screen
and came out the top part of the screen.
And went through the bottom part of the screen,
but came out the left side of the screen. 

Create a program that uses an ``||game:on game update||``
event to do this with the following conditions,

* When a sprite come out of a certain side,
it should come out of the center of that side
(e.g. if the sprite is coming out of the top,
its x-position should be 80 since that is half of the screen width).
* When going through a portal,
the velocities of the x and y axis should switch.
Think about how to do this without losing the value of one of the velocities.

![Portals](/static/courses/csintro3/events/portals.gif)

## Problem #5: Delta Duck

Sprites can have more complex behavior than just setting their initial position,
velocity, and acceleration. These properties can be adjusted based on the state
of the game using ``||game:on game update||`` events.
Create a game that has the following behavior.

* Create a sprite with the initial position of (80, 60) and initial x-velocity of -50.
* If the sprite's x-position is less than 30,
set the sprite's x-velocity to 50 and its y-velocity to -50.
* If the sprite's y-position is less than 10,
set the sprite's x-velocity to 50 and its y-velocity to 50.
* If the sprite's x-position is greater than 130,
set the sprite's x-velocity to 50 and its y-velocity to 0.

Below is animation that may help visualize what is going on.

![Delta Duck](/static/courses/csintro3/events/delta-duck.gif)