# Activity: Logic

Just like in Blocks, using ``||logic:Logic||`` in JavaScript allows for games that react
to user input and the state of the game.

Just like in Blocks, a boolean value can be stored as a variable in JavaScript.

```block
let x = true
```

is equivalent to

```typescript
let x: boolean = true;
```

## Concept: If and Else Statements

![Animation of if-else structure being written](/static/courses/csintro3/structure/writing-if-else.gif)

The ``||logic:if then||`` and ``||logic:else||`` blocks were amongst the most important
in the ``||logic:Logic||`` category in the previous course,
and remain just as important in JavaScript.

In JavaScript, these can be expressed as:

```typescript-ignore
if (condition) {
    console.log("The condition is true");
}
```

and

```typescript-ignore
if (condition) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}
```

In these snippets, ``||variables:condition||`` is a boolean value
(an expression that evaluates to ``||logic:true||`` or ``||logic:false||``).
In Blocks, these often took the form of elongated hexagons:

```block
let x = true
```

## Concept: Comparisons

In blocks, there were many ways to compare two numbers. In JavaScript,
these same comparisons are available.

| Name                      | Symbol    | JavaScript            |
| :------------------------ | :-------: | :-------------------:	|
| Equal To                  | =         | ``value1 == value2``  |
| Not Equal To              | &ne;      | ``value1 != value2``  |
| Less Than                 | <         | ``value1 < value2``   |
| Less Than or Equal To     | &le;      | ``value1 <= value2``  |
| Greater Than              | >         | ``value1 > value2``   |
| Greater Than or Equal To  | &ge;      | ``value1 >= value2``  |

## Example #1: Numeric Comparisons

1. Review the two examples below
2. Identify what comparison is taking place in the ``||logic:if||``
3. Before running the code, identify what will be printed with ``console.log`` (if anything)
4. Run the examples and verify your responses to step 3

### Example #1a: Less Than

```typescript
let num: number = -5;
if (num < 0) {
    console.log("num is negative!");
}
```

### Example #1b: Equal to

```typescript
let num: number = 1;
if (num == 1) {
    console.log("num is one!");
} else {
    console.log("num is not one!");
}
```

Notice how the code above uses curly braces (``{`` and ``}``)
and indentation to separate the code that is contained within each logical block.
This is done for two major reasons:

### ~hint

### Readability

Anyone can look at the code and easily decipher what is part of the if statement
and what is not, even if they have never seen it before.
The indentation provides a visual distinction for where different statements will run.

### ~

### ~hint

### Functionality

JavaScript ignores indentation, but does not ignore curly braces.
Curly braces are used to group code together,
which makes it possible to include multiple expressions in the conditional statements.

```typescript
let num: number = 1;
if (num > 5) {
    console.log("num is big!");
    console.log("which means num is not small");
    console.log("and num is not medium");
} else {
    console.log("num is not big!");
    console.log("which means num is small");
    console.log("or num is medium");
}
```

### ~

## Student Task #1: A Simple Comparison

1. Create a variable that stores a number
2. Use an ``||logic:if||`` statement to check if the number is less than 2
3. If the condition is true (in the ``||logic:if||`` section), print "Hello!" to the console
4. If the condition is false (in the ``||logic:else||`` section), print "Goodbye!" to the console

## Concept: Boolean Operators

Boolean operators allow boolean values to be manipulated.

| Name  | Order | JavaScript                        |
| :---- | :---: | :-------------------------------: |
| Not   | 1st   | ``!bool1``                        |
| And   | 2nd   | ``bool1 && bool2``                |
| Or    | 3rd   | ``bool1`` &vert;&vert; ``bool2``  |

Just like in math, the order of operations becomes important when there are
multiple operators being used at once.

### ~hint

The vertical bar (``|``) character is used when writing ``||logic:or||``.
Be sure to find where it is located on your keyboard!

### ~

### Example #2: Order of Boolean Operators

Evaluate the value stored in the variable ``||variables:bool4||`` given the following code:

```typescript
let bool1: boolean = false;
let bool2: boolean = true;
let bool3: boolean = false;

let bool4: boolean = bool1 && bool2 || !bool3;
```

Following the order of operations, the value assigned to
``||variables:bool4||`` is evaluated as follows

1. Negate ``||variables:bool3||``, which evaluates to ``||logic:true||``
2. Check ``||variables:bool1||`` **and** ``||variables:bool2||``,
which evaluates to ``||logic:false||``
3. Check the result of step 1 **or** the result of step 2,
(that is, ``||logic:true||`` ``||logic:or||`` ``||logic:false||``)
which evaluates to ``||logic:true||``

This results in ``||variables:bool4||`` storing ``||logic:true||``.

This result can be changed by adding parentheses:

```typescript
let bool1: boolean = false;
let bool2: boolean = true;
let bool3: boolean = false;

let bool4: boolean = bool1 && (bool2 || !bool3);
```

Following the order of operations, the value assigned to
``||variables:bool4||`` is evaluated as follows:

1. Negate ``||variables:bool3||``, which evaluates to ``||logic:true||``
2. Check ``||variables:bool2||`` **or** the result of step 1,
which evaluates to ``||logic:true||``
3. Check ``||variables:bool1||`` **and** the result of step 3,
which evaluates to ``||logic:false||``

This results in ``||variables:bool4||`` storing ``||logic:false||`` instead.

## Example #3: Numeric Comparisons

1. Review the two examples below
2. Identify what comparisons are taking place in the ``||logic:if||``
3. Before running the code, identify what will be printed with ``console.log`` (if anything)
4. Run the examples and verify your responses to step 3

### Example #3a: Greater Than and Equal To


```typescript
let val1: number = 5;
let val2: number = 0;
if (val1 > 2 && val2 == 0) {
    console.log("The condition is true");
}
```

This expression can be evaluated by hand by breaking it into smaller subproblems.
The animation below shows it being broken up into single comparisons,
piece by piece.

![Animation of expression being evaluated piece by piece](/static/courses/csintro3/structure/evaluating-expression.gif)

### Example #3b: Greater Than or Equal To

```typescript
let num: number = 5;
let bool: boolean = true;
if (num > 2 || bool) {
    console.log("The condition is true");
}
```

## Student Task #2: Compare a Lot!

1. Create two variables to store two numbers:
    * Variable ``||variables:a||`` stores ``7``
    * Variable ``||variables:b||`` stores ``8``
2. Use an ``||logic:if||`` statement to perform **two** comparison on these variable
    * First, check that ``||variables:a||`` is **less than** 4
    * Then, check that ``||variables:b||`` is **not equal to** 9
    * Combine these two statements using ``||logic:or||`` (``||``)
3. If the condition is ``||logic:true||``, print "You got it!" to the console
4. If the condition is ``||logic:false||``, print "Try again!" to the console

## What did we learn?

1. How do logical comparisons allow games to be more reactive to different conditions?
2. In JavaScript, how can the order in which an expression is evaluated be changed?
3. **Challenge:** consider the following expressions for different values of
``bool1`` and ``bool2``. When will they be the same, when will they be different?
    * ``!bool1 && !bool2``
    * ``!(bool1 || bool2)``

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/logic-problems) for this section to review
the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### That's My Name!

When somebody enters their name, we should make sure they know who made this game.
Store the result of the call to ``||game:game.askForString||`` that asks for the
users name in the variable ``||variables:playerName||``.

Before adding it to ``||variables:name||``, check if the player has entered your
name by comparing (with ``||logic:==||``) ``||variables:playerName||`` and a
string containing your first name. If the player has entered your name,
append a " 2" to ``||variables:playerName||``, to make sure they know they're
not the first one to play this game.

(In the example solution, "myName!" will be used to represent the games author)

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

let name: string = "Captain ";
let playerName: string = game.askForString("What is your name?");

if (playerName == "myName!") {
    playerName += " 2";
}

name += playerName;

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

let x: number = screen.width / 2;
let y: number = screen.height - 20;
```

### ~