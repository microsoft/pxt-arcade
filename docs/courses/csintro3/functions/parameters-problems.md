# Problem Set: Parameters

This section contains a number of selected problems for the Parameters section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Urgent Message!

Implement a ``||functions:function||`` called ``||functions:urgentLog||`` that accepts a
string called ``||variables:message||`` and a number called ``||variables:numOfTimes||``
as parameters.

The function should take the ``||variables:message||``, and ``log`` it to the console a
total of ``||variables:numOfTimes||`` times.

## Problem #2: Caps Lock

The `Caps Lock` key on a keyboard is used to modify whether the letters you type show up in
``UPPER CASE`` or ``lower case``.

Implement a ``||functions:function||`` called ``||functions:printHello||`` that accepts
a ``||logic:boolean||`` value called ``||variables:capsLock||``.

``||logic:If||`` ``||variables:capsLock||`` is ``||logic:true||``,
the ``||functions:function||`` should print ``HELLO WORLD`` to the console;
otherwise, it should print ``hello world``.

## Problem #3: Pizza Place

You've decided to build a Pizzeria, and need a computer to help finish the orders.

The ``||functions:function||`` ``||functions:makeOnePizza||`` below will place a
pizza in a random location on the screen.
Feel free to customize the pizza ``||sprites:Sprite||`` to use your families secret recipe.

```typescript
function makeOnePizza() {
    pause(200);
    let pizza: Sprite = sprites.create(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
    `);
    pizza.startEffect(effects.fire, 500);
    pizza.x = randint(0, screen.width);
    pizza.y = randint(0, screen.height);
}
```

Create a new project, and copy over ``||functions:makeOnePizza||``.
Implement another ``||functions:function||`` called ``||functions:makeOrder||`` that takes
in a number ``||variables:orderCount||`` as a parameter.

The ``||functions:makeOrder||`` ``||functions:function||`` should ``||game:game.splash||``
how many pizzas have been ordered,
and then make that many pizzas using ``||functions:makeOnePizza||`` in a ``||loops:loop||``.

To test this, create the following orders:

* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

## Problem #4: Sprite Factory

Write a ``||functions:function||`` called ``||functions:spriteFactory||`` that accepts an
``||images:Image||`` called ``||variables:spriteImage||`` and a number called
``||variables:count||`` as parameters.

The ``||functions:function||`` should take the image ``||variables:spriteImage||`` and create
``||variables:count||`` different sprites that use the image.

The ``||sprites:sprites||`` will all initially be in the center of the screen,
in the same location.
When creating the ``||sprites:sprites||``, set ``||math:random||`` initial
``||sprites:velocities||`` for each ``||sprites:sprite||`` to so that
each ``||sprites:sprite||`` is visible.

### ~hint

``||images:Image||`` is the type of an image that appears on the screen; for example,
the image passed as a parameter to the ``||sprites:sprites.create||`` function,
which you create with ``img`1```.

### ~

## Example #5: Follow the Leader

Write a ``||functions:function||`` called ``||functions:follow||`` that accepts two
``||sprites:sprites||``,
a ``||variables:leader||`` and a ``||variables:follower||``, as parameters.

Set the ``||sprites:vx||`` and ``||sprites:vy||`` properties of the
``||variables:follower||`` ``||sprites:sprite||`` such that the
``||variables:follower||`` moves in the direction of the ``||variables:leader||`` sprite.
To do this, you will need to compare the ``||sprites:x||`` and ``||sprites:y||``
positions for both sprites.