# Problem Set: Intro

This section contains a number of selected problems for the Intro section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Where are You?

Create a program that has one ``||sprites:sprite||`` that you can move around the screen.

Use an ``||game:on game update||`` event to have the ``||sprites:sprite||``
``||sprites:say||`` it's current  position.

For example, if the ``||sprites:sprite||``'s ``||sprites:x position||`` is 40 and
its ``||sprites:y position||`` is 80, it could ``||sprites:say||`` ``x=40, y=80``.

## Problem #2: Loopy Duck

The duck in the animation below loops back around to the left side of the screen
when it leaves the screen.

![Loopy duck](/static/courses/csintro3/events/loopy-duck.gif)

Recreate this in a new project by using an ``||game:on game update||`` event
to detect if the duck ``||sprites:sprite||`` has left the screen. ``||logic:If||``
it has, reset the ``||sprites:sprite||``'s ``||sprites:x position||`` so that
it is returned to the left side of the screen.

### ~hint

You may want to use the ``||sprites:left||`` and ``||sprites:right||`` properties
when comparing and resetting the ``||sprites:sprites||``,
rather than the ``||sprites:x position||`` property.
These properties are based off the ``||sprites:x position||`` **and**
the dimensions of the ``||images:Image||`` provided to the ``||sprites:sprite||``.

To use them, you would want to check that the ``||sprites:left position||`` for the
``||sprites:sprite||`` is off the ``||scene:screen||``, and then set the
``||sprites:right position||`` to 0.

### ~

## Problem #3: Portals

The animation below is similar to the one from problem #2,
except the ``||sprites:sprite||`` moves from the right side of the screen
to the top (and from the bottom to the left side).

![Portals](/static/courses/csintro3/events/portals.gif)

Notice that the ``||sprites:sprite||`` always comes out of the **center** of a side,
and that the ``||sprites:vx||`` and ``||sprites:vy||`` are **swapped** whenever
the ``||sprites:sprite||`` 'teleports' to the other side of the screen. 

Recreate this animation in a new project.
You might want to start with the solution for problem #2,
if you have completed it.

## Problem #4: Tracing a Path

In "Hansel and Gretel," a popular fairy tale,
a trail of bread crumbs was used to indicate the path the
children took into the woods.
This was intended to help them find their way back,
in case they got lost.

Create a new project with a ``||sprites:sprite||`` that
``||controller:moves||`` with the directional buttons.
In an ``||game:on game update||`` event,
draw the path the ``||sprites:sprite||`` is taking onto the ``||scene:background image||``.

![Bread Crumbs](/static/courses/csintro3/events/bread-crumbs.gif)

To do this, you will need to use a few functions that you may not have used before.
``||scene:scene.backgroundImage()||`` returns the ``||images:Image||`` that is used as
the background.
With this, you can call the ``||images:setPixel||`` function on the
``||scene:background image||`` to change the color of a single pixel.

```sig
image.create(0, 0).setPixel(0, 0, 0);
```

In the example below, ``||images:setPixel||`` is used to set a pixel in the top left corner
of the screen to be red.

```typescript
let myBackground = scene.backgroundImage();
myBackground.setPixel(5, 5, 2);
```

To make the trail, use ``||images:set pixel||`` in an ``||game:on game update||`` event to
set the pixel the ``||sprites:sprite||`` is currently at to be red.

When you are done, try changing the ``||sprites:sprite||`` to have the
``||sprites:bounce on wall||`` flag turned on,
and give a random initial velocity instead of moving with the controller.
The ``||sprites:Sprite||`` should start to bounce around the screen,
drawing the path it has taken along the way.

### Challenge: Interpolation

You might have noticed that the trail didn't fill in every single pixel that the
``||sprites:sprite||`` crossed when moving fast,
resulting in a dotted line rather than a solid one.
``||sprites:Sprites||`` can move more than a single pixel per ``||game:game update||``,
while only a single pixel is drawn.

If you would prefer to have a solid line,
you can **interpolate** the pixels in between ``||game:updates||``
by drawing a line instead of a single pixel.

![Tracer](/static/courses/csintro3/events/tracer.gif)

To do this, you can use the ``||images:drawLine||`` function on the
``||scene:background image||``.

```sig
image.create(0, 0).drawLine(0, 0, 0, 0, 0);
```

This draws a line from the first two parameters
(``||variables:x0||`` and ``||variables:y0||``)
to the second pair of parameters
(``||variables:x1||`` and ``||variables:y1||``)
that is given the given color.

In the example below, a red (``2``) line is drawn from the point
``x=5, y=5`` to the point ``x=25, y=10`` on the background.

```typescript
let myBackground = scene.backgroundImage();
myBackground.drawLine(5, 5, 25, 10, 2);
```

Declare two new variables, ``||variables:lastX||`` and ``||variables:lastY||``.
Initialize them to the ``||sprites:sprite||``'s position at the beginning of the game.

In the ``||game:on game update||``, instead of using ``||images:setPixel||``,
use ``||images:drawLine||`` to draw a line **from** ``||variables:lastX||`` and
``||variables:lastY||`` **to** ``||sprites:sprite.x||`` and ``||sprites:sprite.y||``.

This will **interpolate** the line between the previous position and the current position;
if you move 5 pixels away, the line will be drawn to show that path.

**After** drawing the line in the event, update ``||variables:lastX||``
and ``||variables:lastY||`` to the ``||sprites:sprite||``'s current position,
so the next ``||game:game update||`` draws from the correct position.
