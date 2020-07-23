# Activity: Types

In blocks, the types of variables that were being used was generally invisible:
when declaring a variable, the type of the variable was assumed
by whatever value was first put into it.

When types came up, they were generally due to small errors:
trying to ``||game:splash||`` a number required that the number be ``||text:join||``ed
to a string, trying to store a string in a variable that's already been designated
to be a string, and other small things.

In MakeCode JavaScript, variables can be explicitly given a type for the computer to treat it as;
 some common examples in @boardname@ are ``||text:string||``,
 ``||math:number||``, and ``||sprites:sprite||``.

## Concept: Implicit Typing to Explicit Typing

In MakeCode JavaScript, variables can be assigned a type at declaration by using ``: type``
after the name of the variable.

![Animation of adding explicit typing](/static/courses/csintro3/intro/explicit-typing.gif)

```typescript
let x: number = 5;
let word: string = "Hello";
```

In this previous code snippet, ``||variables:x||`` is defined to be of type ``||math:number||``,
and ``||variables:word||`` has been defined to be of type ``||text:string||``.

In the following examples, the same code is shown in two different ways:
the first, with the type of the variable inferred from the value that is assigned to it,
and the second, with the type explicitly mentioned.

1. Review the two examples below
2. Identify what is different between the two, and what has stayed the same
3. Notice that ``+`` is the equivalent of ``||text:join||`` from Blocks
4. Run both examples: identify whether the behavior of the code has changed

### Example #1a: Implicit Typing

```typescript
let word = "hello ";
let otherWord = "world";
console.log(word + otherWord);
```

### Example #1b: Explicit typing

```typescript
let word: string = "hello ";
let otherWord: string = "world";
console.log(word + otherWord);
```

## Student Task #1: Output Mystery

1. Start with the code below
2. Make a hypothesis on what value will be stored in ``||variables:word||``
after the code is run
3. Write out the value you expect to be stored in ``||variables:word||``
each time it is assigned a value (there should be three lines)
4. To test your hypothesis, add ``console.log(word)`` after the final
line of the code, and run the program
5. If the output did not match your hypothesis, review what you wrote
in step 3 and identify where the value was different from your expectation.

```typescript
let word: string = "*";
word += "hi";
word += word;
```

## Concept: Logging a Number

Just like in Blocks, numbers need to be converted to a string in order to display them.
This can be done in the same way: using ``+`` (``||text:join||``) to join the number
to an empty string to convert the number to a string.

```typescript
console.log("The number is " + 7);
console.log("" + 7);
```

The same behavior applies for variables:

```typescript
let num: number = 7;
console.log("" + num);
```

## Example #2: Console Log Value

Adding a number to a log in the console is very commonly used for debugging purposes.
Because of this, there is an alternate form of the ``console.log`` function that accepts
both a ``string`` and a ``number``, and displays them both.

```typescript
console.logValue("The number is", 7);
```

Notice that when it prints out, it separates the ``string`` from the ``number`` with a colon and a space.

## Student Task #2: Typos

1. Reproduce the code below. The intention was to output the line "7: is the number!"
2. Identify whether this exact line can be produced using ``console.logValue``
3. Fix the error using ``console.log`` or ``console.logValue``, so that it produces the
exact output listed in step 1

```typescript-ignore
console.logValue(7, "is the number!");
```

## Concept: Benefits of Explicit Typing

Explictly adding types to variables can make understanding complex code much easier.
One situation where it can be particular important is a fairly common one in JavaScript:
when a variable is defined without immediately assigning it a value.

For now, this may seem like an uncommon situation, but as the programs
we write become more complex in future lessons,
it will become more and more common to want to define a few variables at once
without creating a value for them to store immediately.

## Example #3: Required Types

1. Review the example below
2. Identify what variables are created

```typescript
let a: string;
let b: number;
let c: string;

a = "word";
b = 5;
c = "10";
b = b + 3;
c = b + a;
game.splash(c + a);
```

In this example, the type of the variables is defined before any values are assigned to them.
This way, anyone reading the code can identify the type of the value with a glance,
instead of having to read through all of the code.

Another benefit can be seen within the editor itself;
hover over each of the variables to see what type is assigned to each variable.

![Animation of hover text](/static/courses/csintro3/intro/editor-type-hinting.gif)

In the tooltip that shows up when you hover over the variable,
you will see the types known for the variable;
if a type is not known when declaring the variable,
it will be left as ``any`` type,
which does not give any information on what the variable can be used for.

## Student Task #3: Adding types

1. Identify the type that each variable in the snippet below stores
2. Change the first **3** lines of code by adding in type definitions
3. Make sure the code runs without any errors once the previous step has been completed

```typescript-ignore
let x;
let y;
let z;

x = "5";
z = 5;
y = x + z;
z = z + 10;
x = y + z;

console.log(x);
```

## What did we learn

1. Make a hypothesis on why using ``+`` between a ``||text:string||`` and a ``||math:number||``
results in a ``||text:string||``, not a ``||math:number||``.
2. In task #3, you had to look at code someone else wrote and figure out what types the
variables needed to hold. What were the clues that helped you identify what type the
variables needed to hold?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/intro/types-problems) for this section to review
the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Using Types

In your game, add a type to the variable you created in the previous lesson's
``Splash the Intro`` example.

### Setting a Value

``||variables:Variables||`` can be used to store different values that are useful
in your code. In your game, add **two** new variables on new lines
after the rest of the code (including the curly braces ``{}``!).

Make the first variable, ``||variables:x||``, store the value 80.
Make the second variable, ``||variables:y||``, store the value 100.

Make sure to give each of these values the proper type.

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

let x: number = 80;
let y: number = 100;
```

### ~