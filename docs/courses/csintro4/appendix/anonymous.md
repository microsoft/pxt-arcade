# Advanced Topics: Anonymous Functions

The parameters of an event look a bit different than parameters for other functions.
They accept **other functions** as parameters,
but these functions are a bit different than other functions we have used in several ways.

All the functions passed as parameters to event start with ``||functions:function||``,
followed by a list of parameters, and then curly braces to encompass the event handler.
These functions look a lot like other functions we've seen and created,
but it's missing something important: a name for the function.

## Concept: Function Declarations

The "normal" way functions have been created (outside of events)
in this course has been through **Function Declarations**.

```typescript-ignore
function sayHi() {
    game.splash("Hello!");
}
sayHi();
```

This has a benefit that you might not have recognized at first:
the ``||functions:sayHi||`` function can be used **anywhere** in the code.
For example, consider the following snippet:

```typescript-ignore
sayHi();
function sayHi() {
    game.splash("Hello!");
}
```

In this case, ``||functions:sayHi||`` is actually called **before** it
is defined in the code.
This allows the functions to be called wherever they are needed,
even if they're not defined until later in the program.

## Example #1: Functions as a Variable

Another thing that might not seem obvious at first is that ``||functions:sayHi||``
is also a ``||variables:variable||``.

1. Review the code below
2. Identify how the variable ``||variables:hello||`` is assigned to the
``||functions:function||`` ``||functions:sayHi||``
3. Notice the line following the definition of ``||variables:hello||``:
``||variables:hello||`` can be used to call the ``||functions:function||`` ``||functions:sayHi||``

```typescript
let hello = sayHi;
hello();

function sayHi() {
    game.splash("Hello!");
}
```

## Student Task #1: Passing a Declared Function as a Value

In this task, you will pass a declared function as a parameter to an event.
This task is demonstrated in the GIF below the snippet.

1. Review the code below: the ``||functions:splashAndDash||`` function is
defined to move the player and splash on the screen
2. Create a ``||game:game.onUpdateInterval||`` event with a period of 2000 ms
3. Replace the ``||functions:function||`` in the parameter with a
``||functions:splashAndDash||`` to pass it as a parameter

```typescript
function splashAndDash() {
    game.splash("Hello!");
    player.x += 5;
}

let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, SpriteKind.Player);
player.x = 0;
```

![Demonstration of Task](/static/courses/csintro4/appendix/splash-and-dash.gif)

## Concept: Anonymous Functions

Treating functions as variables is one part of how we have made events work,
but we're still missing something.

The functions are defined **within** the list of parameters in events,
not separately with a function declaration.

This behavior is handled using **anonymous functions**.
These are functions that are created without being assigned a name.

## Example #2: Converting to Anonymous Function

1. Review the two snippets below
2. Identify how the anonymous function is created and assigned to the
variable ``||variables:splash||``
3. Try calling ``||functions:splash||`` **before** it is defined in both snippets

### Example #2a: Creating a Function Declaration

```typescript-ignore
function splash() {
    game.splash("Hello!");
}
splash();
```

### Example #2b: Creating an Anonymous Function

```typescript-ignore
let splash = function () {
    game.splash("Hello!");
}
splash();
```

The last step of this example might yield a surprising result.
As the anonymous function is directly assigned to the variable ``||variables:splash||``,
it will only be accessible after the variable has been assigned,
unlike a function defined using a function declaration.

However, this is not necessarily a bad thing.
If the ``||functions:function||`` is only going to be used in a single place,
then it does not need to be defined separately.

This is the way events are usually handled in the rest of this course.
Using this approach, we can avoid having to keep track of extra functions
that are only created to be passed to a single event.

## Student Task #2: Using Anonymous Functions for Events

In this task, you will change the code in task #1 to use an anonymous function.
This task is demonstrated in the GIF below the snippet.

1. Start with the code from task #1
2. Modify ``||functions:splashAndDash||`` so that it is stored as an **anonymous function**
3. Instead of passing a reference to ``||functions:splashAndDash||``,
pass the anonymous function itself to the function without storing it separately

```typescript
let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, SpriteKind.Player);
player.x = 0;

game.onUpdateInterval(2000, function () {
    game.splash("Hello!");
    player.x += 5;
});
```

![Conversion to anonymous function](/static/courses/csintro4/appendix/anonymous-again.gif)

## What did we learn?

1. List one difference between **function declarations** and **anonymous functions**.
2. What is one reason you might pass an **anonymous function** as a
parameter to an event, instead of a named function?

### ~hint

## Sidenote: Immediately Invoking a Function

If the intention is to only to call a function once,
then the function can simply be invoked without storing a reference to it.

The following snippet will create and invoke the function without any way
to access it in the future.

```typescript
let myMagicNumber: number = (function () {
    let output: number = 0;
    // Some magic computation
    return output;
})();
```

This can result in code that is very hard to debug, though -
use this approach with caution.

### ~
