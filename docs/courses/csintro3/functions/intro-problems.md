# Problem Set: Intro to Functions

This section contains a number of selected problems for the Intro to JavaScript
Functions section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Print a Letter

Using the ``||functions:functions||`` in the code snippet below,
``log`` a short (four line) letter to the console.

```typescript
function printIntro() {
    console.log("Dear Friend,");
}

function printMiddle() {
    console.log("How are you?")
    console.log("I am learning JavaScript!");
}

function printEnding() {
    console.log("Sincerely, Awesome Coder");
}
```

## Problem #2: My Favorite Color Is...

Create a ``||functions:function||``, ``||functions:myFavoriteColor||``,
that will ``log`` the string ``My favorite color is `` to the console,
followed by the name of your favorite color on the next line.

## Problem #3: Counting Fruit

Recreate the code snippet below, and replace the commented out line
with a ``||functions:function||`` called ``||functions:countFruit||``
that will ``log`` the total number of fruit (the sum of ``||variables:apples||``
and ``||variables:oranges||``) to the console.

```typescript-ignore
let apples: number = 10;
let oranges: number = 5;

// countFruit goes here

countFruit();

oranges = 15;

countFruit();
```

## Problem #4: Pizza Place

The ``||functions:function||`` in the code snippet below places a pizza
``||sprites:Sprite||`` in a ``||math:random||`` location on the screen,
after taking one second to make the pizza.

```typescript
namespace SpriteKind {
    export const Pizza = SpriteKind.create();
}

function makePizza() {
    pause(1000);
    let pizza: Sprite = sprites.create(sprites.food.smallPizza, SpriteKind.Pizza);
    pizza.x = randint(0, screen.width);
    pizza.y = randint(0, screen.height);
}
```

Recreate this code snippet in a new project. In this project,
the player will be the owner of a Pizza Parlor.

The player will have the following orders for pizza:

* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

Create **three** new ``||functions:Functions||`` to handle the orders.
Each ``||functions:function||`` should ``||game:splash||`` how many pizzas
are in the given order,  and then use a ``||loops:for||`` loop to make that many pizzas.

## Problem #5: Asteroid Storm Maker

Create a ``||functions:function||`` called ``||functions:fireAsteroid||``.

In the function, create a new ``||sprites:projectile||`` representing
an ``||sprites:Asteroid||``.

Set the ``||sprites:Asteroid||``'s ``||sprites:x||`` position to be a
random position between 0 and ``||sprites:screen.width||``.
Set the ``||sprites:y||`` position to 0.

Set the ``||sprites:Asteroid||``'s ``||sprites:vy||`` to 50,
and the ``||sprites:vx||`` to a ``||math:random||`` value between -10 and 10.

Create another ``||functions:function||`` called ``||function:asteroidStorm||``.
In it, create **ten** ``||sprites:Asteroids||`` using ``||functions:fireAsteroid||``,
with a **250 ms** ``||loops:pause||`` between each asteroid.

Call ``||functions:asteroidStorm||`` at least once to test your code.