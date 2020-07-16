# Activity: Initialization

This activity starts with the basics needed to get started with JavaScript in @boardname@
by setting variables and outputting them to the user.

## Example #1: Game Splash

The ``||game:splash||`` block allows for a message to pop up on screen for the player to read,
and then dismiss with a button press when they are done with the message.

```sig
game.splash("");
```

```typescript
game.splash("Hello!");
```

In the above section, both ways that ``||game:splash||`` are defined are shown -
for blocks, and for JavaScript. Below those two, is an example of splash being
**used** in JavaScript.

Carefully note the difference between the middle example - which lists out fully
how the block is defined - and how the block is used in the last snippet,
with ``||game:game.||`` in front.
These details will become more important in future sections.

![Animation of typing code snippet](/static/courses/csintro3/intro/first-function-call.gif)

For now, carefully read the JavaScript code to identify the following portions:

* ``||game:game.splash()||``: The **function** that is called
* ``Hello!``: The string that is **given** to the function,
* ``""``: Surrounds the string, to identify it as a string
* ``;``: Indicates the end of the current line of code

## Student Task #1: Hello World!

1. Create a new project in @boardname@
2. Replicate the code from example #1
3. Change the word **"Hello!"** to the phrase **"Hello World!"**
4. Run the code to verify that the output has changed

## Example #2a: Using Variables

Variables allow for code that can easily be changed as necessary for your game.
In JavaScript, these can be declared using two parts:

* the ``let`` keyword to **declare** a variable
* the ``=`` (assignment) operator to **assign** a value to the variable that has been declared

```typescript
let word = "Hello";
```

In the code above, the variable ``||variables:word||`` is assigned the string ``Hello``.

To use the variable, you simply type in the name you assigned the variable - that is,

```typescript
let word = "Hello";
game.splash(word);
```

Will **declare** a variable named ``||variables:word||``,
**assign** that variable the string "Hello",
and then **splash** that variable.

## Example #2b: String Variable vs. Strings

In example #2a, the variable was passed directly to the ``||game:game.splash||`` function.

Referencing the variable is done without surrounding it in quotation marks.
If you try to surround it with quotation marks, it will instead be identified as a string.

The following is nearly identical to the code form example #2a,
but has completely different output.
Before running the code,
identify what will be splashed onto the screen.

```typescript
let word = "Hello";
game.splash("word");
```

## Student Task #2: Creating new Variables

1. Create a new project in @boardname@
2. **Declare** a new variable named ``||variables:dog||``,
and **assign** it the value "Bark!"
3. **Declare** another new variable named ``||variables:cat||``,
and **assign** it the value "Meow"
4. **Declare** one more new variable named ``||variables:catAndDog||``,
and **assign** it the value "Meow and Bark!"
5. Use ``||game:game.splash||`` to display ``||variables:dog||`` to the user
6. Use ``||game:game.splash||`` to display ``||variables:cat||`` to the user
7. Use ``||game:game.splash||`` to display ``||variables:catAndDog||`` to the user

### ~hint

Variables in JavaScript are typically **camel cased**.
The first word in the variable name should be all lowercase,
and any other words should have the first letter capitalized.
For example, if you wanted to name a variable that stores "documents for john",
this could be stored in the variable ``||variables:documentsForJohn||``.

Note the name of the third variable created for this task: ``||variables:catAndDog||``,
and how it is **camel cased**.

### ~

## Example #3: Reassigning variables

Variables can only be **declared** a single time.
This means that you cannot declare two variables with the same name - for example,

```typescript-ignore
let word = "hello";
let word = "goodbye";
```

is invalid, as the second line is attempting to declare a variable that already exists.

### ~hint

This is a simple description of a more complicated rule - later on in the course namespaces
and scope will be discussed, which both change this rule.

### ~

However, variables can be **reassigned** (assigned a new value) as often as needed.

```typescript
let word = "hello";
word = "goodbye";
```

This code will

1. Declare the variable ``||variables:word||``
2. Assign ``||variables:word||`` to the value "hello"
3. Reassign ``||variables:word||`` to the value "goodbye"

### ~hint

What happens to the old value ("hello") of ``||variables:word||`` when it is assigned
a new value in step 3?

The old value is gone - there is no way to reference it anymore.

### ~

## Student Task #3: Splash a Variable

![Animation of task being completed](/static/courses/csintro3/intro/changing-variables.gif)

1. Start with the (valid) code from example #3
2. Immediately after the first line, add a new line to ``||game:game.splash||``
``||variables:word||``
3. Add another ``||game:game.splash||`` with ``||variables:word||`` to the end of the code
4. Verify that the two splash screens display different words

## What did we learn?

1. Explain the difference between **declaring** and **assigning** a value.
It might be useful to try to come up with an analogy.
2. In task #3, the same variable was ``||game:splash||``ed twice, with different results.
Explain how the output was changed in the other lines of code.

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/intro/initialization-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Create an Intro

At the end of your game, create a variable ``||variables:intro||``.
This should store a short introduction to your game;
for example, "Hello! This is my Space Game!"

### Splash the Intro

The ``||game:game.splash||`` function is commonly used to give introductions to games.
Use it to ``||game:splash||`` the introduction you just created.

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

let intro = "Hello! This is my Space Game!";
game.splash(intro);
```

### ~