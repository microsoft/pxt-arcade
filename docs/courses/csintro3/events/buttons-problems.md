# Problem Set: Buttons

This section contains a number of selected problems for the Buttons section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Ducky Go Home

Create a ``||sprites:sprite||`` that looks like an alien spaceship,
and ``||controller:moves with buttons||``.

Next, create an event that causes a ``||sprites:projectile||`` that looks like a duck
to be created from the spaceship with a ``||sprites:vy||`` of 50 when
the ``||controller:A||`` button is pressed.

## Problem #2: Jump Man

Create a ``||sprites:sprite||`` to represent the main character in your game.
Give the ``||sprites:sprite||`` an ``||sprites:ay||`` of 100
to represent the force of ``||sprites:gravity||``,
and set the ``||sprites:stay on screen||`` flag to ``||logic:true||``.
Make the character ``||controller:move with buttons||`` with a ``||sprites:vx||``
of 100 and a ``||sprites:vy||`` of 0,
so that it can move along the bottom of the screen.

Next, create an event that causes the character to 'jump,'
by setting the ``||sprites:vy||`` to -50 when the ``||controller:A||`` button
is pressed.

Now, the character can move along the bottom of the screen
and jump; all ready for your next hit platformer.

## Problem #3: Coordinate Tracker

It is helpful to know where specific sprites are on the screen.
The ``console.log`` can be very helpful when debugging your games,
as it provides a consistent and easy location to store information
without getting in the way of the game like ``||game:game.splash||``
or ``||sprites:sprite.say||``.

Create a ``||sprites:sprite||`` that ``||controllers:moves with buttons||``,
and create an event that logs the ``||sprites:sprite||``'s current position
when the ``||controller:B||`` button is pressed.
Make sure it is clear which value corresponds to which property;
one way to do this would be by using the format ``x: 40, y: 80``.

## Problem #4: Inversion

Create a ``||sprites:sprite||`` to represent a princess with magical powers.
Set it's ``||sprites:ay||`` to 200, and the ``||sprites:stay on screen||`` flag
to ``||logic:true||``.
Make the character ``||controller:move with buttons||`` with a ``||sprites:vx||``
of 100 and a ``||sprites:vy||`` of 0,
so that it can move along the bottom of the screen.

![Princess causing gravity to switch](/static/courses/csintro3/events/inversion.gif)

Create an event that occurs when the ``||controller:A||`` button is pressed.
In it, you should do the following to the princess ``||sprites:sprite||``:

* Set the ``||sprites:vy||`` to 0,
so that the ``||sprites:sprite||`` stops in place.
* Set the ``||sprites:ay||`` to itself **times -1**,
so that it accelerates in the opposite direction.
* **Invert** the ``||images:image||`` of the sprite,
using the following snippet (assuming the ``||sprites:sprite||``
is stored as ``||variables:mySprite||``)

```typescript-ignore
mySprite.image.flipY();
```

With this, the ``||controller:A||`` button will use the princesses magic
to swap gravity,
and flip upside down.

## Problem #5: Food Fight

Create **four** ``||controller:controller button pressed||`` events,
one for each directional button.

Each of these events should create a food ``||sprites:projectile||`` that moves
in the direction of the buttons:
the ``||controller:left||`` button could create a strawberry
that moves across the screen from right to left,
the ``||controller:up||`` button could create an ice cream cone the moves
from bottom to top, and so on.
