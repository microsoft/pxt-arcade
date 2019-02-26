# Problem Set: Returns

This section contains a number of selected problems for the Returns section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Current Season

Implement a ``||functions:function||`` called ``||functions:currentSeason||`` that
returns a ``||text:string||`` describing the current season
(for example, "Spring", "Summer", "Autumn", or "Winter").

## Problem #2: Favorite Food

Write a short program in which you create a variable called ``||variables:favoriteFood||``,
and set it equal to the string describing what the player's favorite food is
(use ``||game:game.askForString||``).

Then, implement a ``||functions:function||`` called ``||functions:getFavoriteFood||``
that takes in no parameters and returns the current value of ``||variables:favoriteFood||``.

## Problem #3: createEnemy

Implement a ``||functions:function||`` called ``||functions:createEnemy||`` that takes no
parameters and uses ``||sprites:sprites.create||`` to return a ``||sprites:sprite||`` of
kind ``Enemy`` with an evil looking image.

## Problem #4: Brick Builder

Implement a ``||functions:function||`` called ``||functions:createBrick||`` that takes in
three numbers as parameters: ``||variables:width||``, ``||variables:height||``,
and ``||variables:color||``.
The function should then return an ``||images:Image||`` with these attributes.
To do this, you will need to use two new functions, ``||images:image.create||``
and ``||images:Image.fill||``.

The function ``||images:image.create||`` takes in a ``||variables:width||`` and
a ``||variables:height||`` and returns a transparent ``||images:Image||`` with those dimensions.

```sig
image.create(0, 0);
```

Once you have an ``||images:Image||`` ``||variables:myImage||``,
calling the function``||images:myImage.fill||`` will modify the ``||images:image||``
be completely filled with the given ``||variables:color||``.

```sig
image.create(0, 0).fill(0);
```

When you are done, add it to the following snippet:
the result should be a red bar across the center of the screen.

```typescript-ignore
// Your function here

let myBrick = createBrick(screen.width, 16, 2);

sprites.create(myBrick);
```

## Problem #5: Conversions

Angles can be tricky because there are two basic units: **degrees** and **radians**.
Degrees tend to be more commonly used for day-to-day purposes,
but radians are more commonly used in math and science.
In this problem, you will implement two ``||functions:functions||`` to allow you
to convert from one to the other.

It is important to know how exactly the values are measured when trying to convert
from one unit to another.

A full circle can be represented by 360 degrees and by 2π radians
(π, or pi, is represented in JavaScript as ``||math:Math.PI||``):
if you divide both by two, you can see that ``180 degrees`` is equal to ``π radians``.
Using this information, you can convert a number from degrees to radians by multiplying
the value by ``||Math:Math.PI||`` and dividing it by 180.

Implement a ``||functions:function||`` called ``||functions:toRadians||`` that takes an
input called ``||variables:angle||`` that is an angle represented in degrees and returns
the radian equivalent of that angle.

Finally, implement another ``||functions:function||`` called ``||functions:toDegrees||``
that takes an input called ``||variables:angle||`` that is an angle represented in radians
and returns the degree equivalent of that angle.
