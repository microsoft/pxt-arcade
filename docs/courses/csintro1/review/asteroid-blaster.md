# Review: Asteroid Blaster

Create your own asteroid destroying masterpiece.

![Asteroid Blaster](/static/courses/csintro1/review/asteroid-blaster.gif)

## Student Task #1: Create the Spaceship

Create a spaceship for the player to control

1. Create a sprite, with the image set to a spaceship. Store it in the variable ``||variables:spaceship||``
2. Add a ``||controller:move spaceship with buttons||`` block, and set both ``||controller:vx||`` and ``||controller:vy||`` to 50
3. ``||sprites:Change||`` ``||variables:spaceship||``s ``||sprites:y||`` position by 40, to move them closer to the bottom of the screen
4. Use ``||info:set life to 3||`` to start the player off with some life
5. Use ``||info:set score to 0||`` to start the player off with no score

## Student Task #2: Firing Lasers

Add the ability for the player to fire lasers

1. Create an ``||controller:on A button pressed||`` event
2. In the event, create a ``||sprites:projectile from spaceship||`` with a ``||sprites:vx||`` of 0 and a ``||sprites:vy||`` of -100 
3. Change the image of each ``||sprites:projectile||`` image to be a laser - a one or two pixel line is enough
4. Set the kind of each ``||sprites:projectile||`` kind to `Laser`
5. Set the ``||sprites:z||`` value for the ``||sprites:projectile||`` to be -1, so that it appears below the ship

## Student Task #3: Evil Asteroids

Add asteroids for the player to avoid, that are created more quickly as time goes on

1. Create a ``||loops:forever||`` loop
2. Inside the ``||loops:forever||`` loop, create a ``||sprites:projectile from side||`` with an image of an asteroid and change both the ``||sprites:vx||`` and ``||sprites:vy||`` to ``||math:random||`` values between -50 and 50
3. Set it to be of ``||sprites:kind|`` `Asteroid`
4. After creating the ``Asteroid``, use ``||loops:pause||`` to pause for `2000 - (30 x` ``||info:score||`` `)` ms. As the player scores **more points**, the time between asteroids being created **decreases**

## Student Task #4: Damage

Add an event so that the player loses life 

1. Add an event for when a sprite of kind `Player` overlaps with a sprite of kind `Asteroid`
2. Decrease ``||info:life||`` by 1
3. ``||sprites:destroy||`` the ``Asteroid`` sprite

## Student Task #5: Laser Effect

Give the laser some power to destroy the asteroids

1. Add an event for when a sprite of kind ``Laser`` overlaps with a sprite of kind ``Asteroid``
2. Increase the player's score by one
3. ``||sprites:destroy||`` both the ``Asteroid`` and ``Laser`` sprites involved in the overlap

## Challenges

Currently, the game gets nearly impossible to progress past 67 or so points; at that point, the ``||loops:pause||`` will do nothing, as ``2000 - 30 * 67`` is less than 0. To fix this, use ``||math:max||`` in the ``||loops:pause||``, to choose the maximum (largest) value between the current equation, and 500.
