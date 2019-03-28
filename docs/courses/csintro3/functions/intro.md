# Activity: Intro to Functions

In Blocks, ``||functions:functions||`` served as a powerful tool in making
complex games easier to read, as well as reducing redundancy within the games.

These benefits remain in JavaScript,
along with many more features of functions that were unavailable in Blocks.

## Concept: Functions in JavaScript

``||functions:Functions||`` in JavaScript are a bit more complex to
start with than ``||functions:Functions||`` in Blocks.

However, functions in JavaScript are used much more commonly than in blocks,
so it won't take long to get used to the new syntax.

```typescript-ignore
function name() {
    // function contents
}
name();
```

In this code snippet, focus on the following elements of the function:

* ``function``: indicates the start of a new function
(similar to ``let`` indicating a new variable)
* ``name``: the name for the function you are creating
* ``{}``: the statements between the opening and
closing curly brace are the contents of the function
(equivalent to the blocks inside the function);
in this case, the function does nothing,
as there is only a comment inside of it
* ``name()``: calls the function ``name``,
running the code that is assigned to it

### ~hint

The parentheses (``()``) between the function name and the curly braces
will become important in future lessons,
but only serve as a necessary part of the syntax for now.

### ~

## Example #1: Say Hello

![Animation of typing out first function](/static/courses/csintro3/functions/creating-first-function.gif)

1. Review the code below
2. Convert the code to Blocks
3. Identify which blocks came from which parts of the code

```typescript
function sayHello() {
    game.splash("hello");
}

sayHello();
```

### ~hint

Does the function ever run if the code is not called with ``||functions:sayHello()||``?
Remove that line from the previous example and check.

Does "hello" still get ``||game:splash||``ed?

### ~

## Student Task #1: Make a Log

1. Create a function named ``||functions:logMeIn||``
2. In the function, ``||game:splash||`` the phrase "LOGGING!"
3. After the ``||game:splash||``, use ``console.log`` to log the
phrase "I'm Here!" to the console
4. Call the function **twice** after the closing curly brace

## Concept: Variable Scope

One major difference in functions between Blocks and JavaScript is **variable scope**.
This refers to where in the code a variable can be accessed.

This can be seen in a small way with loops:
for example, the following snippet will fail to run,
because ``||variables:i||`` is only accessible **within** the loop it is defined in -
that is the **scope** of the variable.

```typescript-ignore
for (let i = 0; i < 5; i++) {
    console.log("Hello!");
}
console.log("I just logged " + i + " times!"); // error! Can't find variable `i`!
```

This may seem like a problem at first,
but it is actually a helpful behavior as
the amount of code in a project grows larger than a few lines.

For example, if declaring the variable in the loop made it available
throughout the program, the following code would fail because it would
be trying to declare the ``||variables:i||`` twice.

```typescript-ignore
for (let i = 0; i < 5; i++) {
    console.log("Hello!");
}
for (let i = 0; i < 5; i++) {
    console.log("goodbye!");
}
```

This could quickly become a mess as the program being developed
gets to be dozens (or hundreds) of lines long.

Similarly, variables declared **inside** of a function or loop are only
accessible **within** the function.

```typescript
let a = 0;
function example() {
    let b = 1;
    a = 2; // can use `a` here, as it is declared outside the function
}
// can't use `b` here, as it is declared inside the function`
```

In this snippet, ``||variables:b||`` is only accessible within ``example``
where it is declared, whereas ``||variables:a||`` is accessible both inside
and outside the function.

## Example #2: My Little Friend

1. Review the code below
2. Identify which of the four commented out calls to ``||game:game.splash||`` are valid
3. Test each ``||game:game.splash||`` by uncommenting them
(removing the ``//`` before the method call)

```typescript
let little: number;
let myWord: string;

function mystery() {
    let friend: string = "hello";
    little = 5;
    myWord = "I'm here!";

    // game.splash(friend);
    // game.splash("" + little);
}

// game.splash(myWord);
// game.splash(friend);
```

## Student Task #2: Different Numbers

1. Review the code below
2. Read the comment next to each ``||game:game.splash||``
3. Make the game match the expected output by changing where
``||variables:count||`` and ``||variables:log||`` are declared

```typescript
let count: number = 0;
let log: string = "";

function splashNumberOne() {
    count++;
    log += "number is " + count;
    game.splash(log); // Should output "number is 1"
}

function splashNumberTwo() {
    count += 2;
    log += "number is " + count;
    game.splash(log); // Should output "number is 2"
}

splashNumberOne();
splashNumberTwo();
splashNumberOne();
```

## What did we learn?

1. What do the curly braces (``{}``) do when declaring a new function?
2. How is code like task #2 handled in Blocks?
Copy your solution for task #2 into a new project,
and convert it to blocks - what looks different?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/functions/intro-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

Another case where variable scope matters is with **variable shadowing**.
This will be discussed in more detail later in the course,
but an example of the problem can be found in the following snippet:

```typescript
let word: string = "Hello!";
function changeHello() {
    let word: string = "goodbye!"; // Changing word from hello to goodbye
}
changeHello();
game.splash(word);
```

In this example, the intention was to change ``||variables:word||``
from "hello!" to "goodbye!" when the function was called.
It seems like there is a bug in there, though - word is declared twice.

However, because the variable in the function has a different **scope**,
the variable declared in the function **shadows** the outer one -
there are now two variables with the same name within ``||functions:changeHello||``,
with only the local one (the one that shadows the other) being accessible.
The outer variable won't be changed, and will remain "Hello!" when it is ``||game:splash||``ed.

This type of bug is very subtle, and can be hard to catch when looking
through long segments of code; in the next few lessons better ways to
handle this type of behavior will be shown.

### ~

### ~hint

## Case Study

### Initialization and Initialize

Add a function named ``initialize`` to the ``status`` namespace,
which sets the initial values for ``life`` to 4 and ``score`` to 0.

After writing the function, call the function in the ``status`` namespace,
and remove the ``info.setLife`` and ``info.setScore`` that are currently in the namespace.

### Sprite Setup

Add a function named ``initialize`` to the ``ship`` namespace,
which sets up the ship sprite at the start of the game.
This function should set up the initial values for 

### Solution

```typescript-ignore
/**
 * Set up the state of the game
 */
namespace status {
    initialize();

    function initialize() {
        info.setLife(4);
        info.setScore(0);
    }
}

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player: Sprite;
    initialize();

    function initialize() {
        player = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(player, 80, 30);
        player.x = screen.width / 2;
        player.y = screen.height - 20;
    }

    // When the player presses A, fire a laser from the spaceship
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
    });
}
```

### ~
