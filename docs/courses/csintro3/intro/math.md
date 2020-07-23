# Activity: Math

In Blocks, each step of an equation needed it's own block.
This can make formulas difficult to properly express,
as it can be hard to identify (or change) the order in which they are evaluated.

In JavaScript, the same formulas can be easier to express,
as the syntax (structure) is much closer to what is used when
evaluating math by hand or with a scientific calculator.

| Operation         | Block                 | JavaScript            |
| :---------------- | :-------------------: | :-------------------- |
| Addition          | ``[let x = (6 + 2)]`` | ``let x = 6 + 2;``    |
| Subtraction       | ``[let x = (6 - 2)]`` | ``let x = 6 - 2;``    |
| Multiplication    | ``[let x = (6 * 2)]`` | ``let x = 6 * 2;``    |
| Division          | ``[let x = (6 / 2)]`` | ``let x = 6 / 2;``    |

## Example #1: Complex Expressions

1. Review the examples below
2. Identify what is different between the Blocks and the JavaScript in each pair
3. Run the examples: identify what the end result will be
(it may be useful to add ``||game:game.splash||`` to display the value)

### Example #1a: Addition and Subtraction

```block
let num: number = 1 + 2 - 3;
```

```typescript-ignore
let num: number = 1 + 2 - 3;
```

### Example #1b: Addition and Multiplication

```block
let num: number = 5 + 3 * 2;
```

```typescript-ignore
let num: number = 5 + 3 * 2;
```

### Example #1c: Division and Multiplication

```block
let num: number = 24 / 3 * 4;
```

```typescript-ignore
let num: number = 24 / 3 * 4;
```

## Student Task #1: Creating Blocks

1. Create a new project in @boardname@. Go to the JavaScript view
2. Recreate the expression below in **JavaScript**
3. To confirm the JavaScript expression is correct, switch to Blocks
and check that the result is the same
4. **Challenge:** change the ``+`` to a ``×``, and switch back to JavaScript.
What has changed?

```blocks
let num: number = 15 + 8 / 3
```

## Concept: Order of Operations

JavaScipt uses a **PEMDAS** structure to determine the order in which operations are evaluated.
This standards for **P**arentheses, **E**xponents,
**M**ultiplication or **D**ivision, **A**ddition or **S**ubtraction.

| Order	| Operation         |
| :---:	| :---------------- |
| 1st   | Parenthesis       |
| 2nd   | Exponents         |
| 3rd   | Multiplication    |
|       | Division          |
| 4th   | Addition          |
|       | Subtraction       |

<br />

Operations of the first order will occur before operations of the second order,
operations of the second order will occur before operations of the third order,
and operations of the third order will occur before operations of the 4th order.

Operations that are of the same order (for example, multiplication and division)
will be completed left-to-right.
This means that ``24 / 3 * 4`` evaluates to ``32``,
because ``24`` is divided by ``3``, then the result is multiplied by ``4``.

Parentheses have the highest order, which means that they are always evaluated first.
This can be used to control the order in which an expression is evaluated.
For example, ``24 / (3 * 4)`` will evaluate to ``2``,
because the parentheses require that ``3 * 4`` is evaluated first,
before the division occurs.

## Example #2: Using PEMDAS

1. Review the examples below
2. In each example, identify how the value of ``||variables:num||``
is changed using the order of operations

### Example #2a: Subtraction and Division

```typescript
let num: number = 10 - 6 / 2;
console.log("" + num);
```

This will print out the number 7, because the division occurs before the subtraction.

If instead the goal is to subtract before dividing, parentheses can be used to change the order

```typescript
let num: number = (10 - 6) / 2;
console.log("" + num);
```

This will print out the number 2 instead.

### Example #2b: Division and Multiplication

```typescript
let num: number = 24 / 3 * 4;
console.log("" + num);
```

This will print out the number 32, because the division occurs before the multiplication.

If instead the goal is to multiply first, the equation can be changed using parentheses

```typescript
let num: number = 24 / (3 * 4);
console.log("" + num);
```

This will print out the number 2 instead.

## Student Task #2: Fixing an Expression

1. Recreate the code below
2. Run the code and identify what value ``||variables:num||`` stores
3. Review the description of the goal of the code in the box below: does the code match the goal?
4. If the code does not match the expected output, modify the order in which it is evaluated
**by adding parentheses**. Do not add or remove any other operators or numbers

### ~hint

The goal of the code was to complete the steps in the following order:

1. add 6 to 4 = **10**
2. divide the result by 2 = **5**
3. subtract 1 from the result = **4**
4. multiply the result by 18 = **72**

### ~

```typescript
let num: number = 18 * 6 + 4 / 2 - 1;
game.splash("" + num);
```

## What did we learn?

1. What is an advantage of writing expressions out in JavaScript as opposed to blocks?
2. In JavaScript, how can the order in which an expression is evaluated be changed?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/intro/math-problems) for this section to
review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Use Relative Values

The ``||scene:screen.width||`` and ``||scene:screen.height||`` properties
correspond to the width and height of the game ``||scene:screen||``.

Change how ``||variables:x||`` and ``||variables:y||`` are set so that ``||variables:x||``
stores ``||scene:screen.width / 2||``, and ``||variables:y||`` stores
``||scene:screen.height - 20||``.

### Solution

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let intro: string = "Hello! This is my Space Game!";
game.splash(intro);
let name: string = game.askForString("What is your name?");

let x: number = screen.width / 2;
let y: number = screen.height - 20;
```

### ~