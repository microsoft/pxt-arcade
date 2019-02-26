# Problem Set: Sprite Overlap

This section contains a number of selected problems for the Sprite Overlap section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Hidden Treasure

Create two ``||sprites:sprites||``:
a ``||sprites:sprite||`` of kind ``Player``
and a ``||sprites:sprite||`` of kind ``Treasure``.
Design the ``Player`` ``||sprites:sprite||`` so that it looks like a pirate,
and make it ``||controller:move with buttons||``.

The ``Treasure`` ``||sprites:sprite||`` should be filled with the color the background,
so that it is hard to see.
Place the ``Treasure`` at a ``||math:random||`` position on the screen.

Create an ``||sprites:overlap||`` event between ``Player`` and ``Treasure``
``||sprites:sprites||`` to represent the pirate finding the treasure.

In the ``||sprites:overlap||`` event,
use ``||sprites:sprite.setImage||`` to **change** the ``||images:image||`` of the
``Treasure`` ``||sprites:sprite||`` to a treasure chest.
After changing the ``||images:image||``,
``||loops:pause||`` for one second,
and then end the game with ``||game:game.over(true)||``.

## Problem #2: Dodge Ball

Create two ``||sprites:sprites||``:
a ``||sprites:sprite||`` of kind ``Player``
and a ``||sprites:sprite||`` of kind ``Ball``.
Design the ``Player`` ``||sprites:sprite||`` so that it looks like a student in gym class,
and make it ``||controller:move with buttons||``.

Give the ``Ball`` a ``||math:random||`` initial ``||sprites:x||`` and ``||sprites:y||``
velocities.
Set the ``||sprites:BounceOnWall||`` ``SpriteFlag`` to ``||logic:true||``,
so that the ``Ball`` will bounce around the screen.
Draw a ball for the ``||images:image||`` of the ``Ball`` ``||sprites:sprite||``.

Create an ``||sprites:overlap||`` event between ``Player`` and ``Ball`` ``||sprites:sprites||``
to represent the player getting hit by the ball.

In the ``||sprites:overlap||`` event,
``||game:splash||`` "ouch!" to the screen,
and then ends the game with ``||game:game.over(false)||``

## Problem #3: Stay Out of the Fire

Create two ``||sprites:sprites||``:
a ``||sprites:sprite||`` of kind ``Food``
and a ``||sprites:sprite||`` of kind ``Fire``.
Design the ``Food`` ``||sprites:sprite||`` so that it looks like a small burger,
and make it ``||controller:move with buttons||`` at about half speed (that is,
using 50 as the ``||variables:vx||`` and ``||variables:vy||`` parameters for
``||controller:moveSprite||``).

Set the ``Fire`` ``||sprites:sprite||``'s ``||images:image||`` to look like a fire.

Create an ``||sprites:overlap||`` event between ``Food`` and ``Fire``
``||sprites:sprites||`` to represent the player getting hit by the ball.

In the ``||sprites:overlap||`` event,
move the ``||sprites:Food||`` up and to the left **1** pixel, 
and move the ``||sprites:Fire||`` down and to the right **1** pixel.

Now, the ``Food`` and ``Fire`` will **repel** each other when they touch.

## Problem #4: Pushing the Food

Start with a solution to problem #3;
this problem will extend from that code.

The previous problem resulted in the ``Fire`` and ``Food`` moving away from
each other on contact, but they always moved in the same direction.
Another option would be to have the ``Food`` move away from the ``Fire``
depending on where it is on the screen;
that way, if the burger moves on top of the fire from the bottom right,
the burger moves back in the direction it came from.

![Fire pushing away burger](/static/courses/csintro3/events/pushing-the-fire.gif)

In the ``||sprites:overlap||`` event,
remove the portion that makes the ``Fire`` move.
Next, use ``||logic:if||`` conditions to control the direction the ``Food`` is moved.

``||logic:If||`` the ``||sprites:x position||`` of the ``Food`` ``||sprites:sprite||``
is **less than** the ``||sprites:x position||`` of the ``Fire`` ``||sprites:sprite||``,
**increment** the ``Food`` ``||sprites:sprite||``'s ``||sprites:x position||``;
otherwise (``||logic:else||``), **decrement** the ``||sprites:x position||``.

Finally, do the same comparison and updates for the ``||sprites:y position||``.
With that, the ``Food`` ``||sprites:sprite||`` will stay away from the ``Fire``
``||sprites:sprite||``, moving away no matter the direction it comes from.
