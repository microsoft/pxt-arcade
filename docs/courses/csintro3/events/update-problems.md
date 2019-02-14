# Problem Set: On Game Update Interval

This section contains a number of selected problems for the On Update Interval section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Counting Time

Create a variable, ``||variables:count||``,
that will store the number of **updates** that occur.
Set it to 0 to start.

Create an ``||game:on game update interval||`` event with an interval
of **2000 ms**.
In this event, increment ``||variables:count||``.

Create **another** ``||game:on game update interval||`` event,
with an interval of **5000 ms**.
In this event, ``||game:splash||`` the value of ``||variables:count||``
to the screen.

## Problem #2: Smiles All Around!

Create an ``||game:on game update interval||`` event with an interval
of **1500 ms**.

In this event, create a ``||sprites:Sprite||`` with an image of a smiley face.
Place the ``||sprites:sprite||`` in a ``||math:random||`` position on the screen,
and set it's ``||sprites:lifespan||`` to **10000 ms**.

## Problem #3: Enemies Inbound

Use an ``||game:on game update interval||`` event with an interval
of **1000 ms** to create ``||sprites:projectile sprites||`` that move
from the **left** side of the screen to the **right** side.
Set the initial ``||sprites:y position||`` for each ``||sprites:projectile||``
to a ``||math:random||`` value between 0 and ``||scene:screen.height||``.

These ``||sprites:projectiles||`` can serve as enemies for a player to avoid.

## Problem #4: Asteroids!

The ``||math:Math.percentChance||`` function can be used to generate a
``||logic:boolean||`` value with a chance of being ``||logic:true||`` or ``||logic:false||``.
This allows for an easy way to introduce a bit of variety into your games,
by introducing ``||math:random||`` behavior.

When used in a reoccurring event,
``||math:Math.percentChance||`` can be used to simulate behaviors that occur
on a **random interval**.
For example, in an ``||game:on game update||`` event,
the function can be used to cause an action to occur on a given percent of the
``||game:updates||`` in the game.

Create an ``||game:on game update interval||`` event that occurs every **300 ms**.
In the event, create an asteroid ``||sprites:projectile||`` with
``||math:random||`` ``||sprites:x||`` and ``||sprites:y||`` velocities between
-100 and 100.

Use an ``||logic:if||`` statement and ``||math:Math.percentChance||`` to
make the ``||sprites:projectile||`` be created in only **20 percent** of the
``||game:updates||``, rather than in each ``||game:update||``.
