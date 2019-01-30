# Problem Set: Arrays of Images

This section contains a number of selected problems for the Arrays of Images section.

It is recommended that you review the problems,
and complete a few before moving on to the next section.

## Problem #1: Haunted Skeleton

Create a simple animation for a skeleton sprite,
using the following ``||images:Images||``:

* ``||sprites:sprites.castle.skellyWalkFront1||``
* ``||sprites:sprites.castle.skellyWalkFront2||``
* ``||sprites:sprites.castle.skellyWalkFront3||``

``||loops:Pause||`` for **250 ms** between each change of the ``||images:Image||``.

Make this animation repeat **40 times**.

## Problem #2: Walking Princess

Create a simple animation for a princess sprite,
using the following ``||images:Images||``:

* ``||sprites:sprites.castle.princess2WalkFront1||``
* ``||sprites:sprites.castle.princess2WalkFront2||``
* ``||sprites:sprites.castle.princess2WalkFront3||``

Use an ``||game:on update interval||`` event to make the ``||images:Image||``
change every **200 ms**.
Make sure to use the **Remainder Operator** so the animation repeats!

## Problem #3: Food Fight

Create an ``||arrays:Array||`` of ``||images:Images||``,
that contains ``||images:Images||`` of at least **5** different types of food.

Create a 'food fight' by creating ``||sprites:Projectiles||`` in an
``||game:on update interval||`` event.

Each of these ``||sprites:projectiles||`` should have a ``||math:random||``
``||images:Image||`` from the ``||arrays:Array||`` of ``||images:Images||``.
The ``||sprites:projectiles||`` should also have ``||math:random||`` ``||sprites:x||``
and ``||sprites:y||`` velocities, so that they can fly from any direction.

## Problem #4: Designer

Design your own animation by drawing the individual frames in it!

Create an ``||arrays:Array||`` of ``||images:Images||`` that contains
**at least 4** ``||images:Images||`` that you have drawn,
and use ``||game:on update interval||`` to repeat the animation. 

If nothing comes to mind, you could try to animate one of these:

* A bird
* A fish
* A flower
* A flame
