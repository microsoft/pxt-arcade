# Advanced Topics: Nested Functions

When ``||functions:functions||`` get to be particularly complex,
it can be helpful to break them up into smaller functions to clarify
exactly what each section of the code is doing.
This helps break up long sections of code into smaller,
more readable chunks.

The downside of this would be that the new, smaller functions will be
available to use everywhere in the code.
Instead of a single function to manage the behavior,
there will be one useful one with a number of smaller
functions that are only used within the useful function.

To better manage this behavior,
JavaScript allows for **nested functions**:
functions that exist only within another function.

## Concept: Creating a Nested Function

The creation of a nested function is fairly simple:
just declare the function as it is normally done,
only within the scope of another function.

## Example #1: ``||functions:hello||`` and ``||functions:world||``

1. Review the code below
2. Identify how the nested functions ``||functions:hello||`` and
``||functions:world||`` are **created**
3. Identify how the two nested functions are **called**

```typescript
function helloWorld() {
    hello();
    world();

    function hello() {
        game.splash("hello");
    }
    function world() {
        game.splash("world");
    }
}

helloWorld();
```

## Student Task #1: Break up the Math

1. Review the code below
2. In a new project, recreate the code
3. Create **three** nested functions: one that will create and ``||game:splash||``
``||variables:output||``, another that will create and ``||game:splash||``
``||variables:otherOutput||``, and a final one that will create and
``||game:splash||`` ``||variables:finalOutput||``
4. Call each of the nested functions so that the output will match the initial output

```typescript
function doMath() {
    let output: number = 5 + 4;
    game.splash("5 + 4 is " + output);

    let anotherOutput: number = 5 * 4;
    game.splash("5 * 4 is " + anotherOutput);

    let finalOutput: number = 5 - 4;
    game.splash("5 - 4 is " + finalOutput);
}

doMath();
```

## Concept: Variable Scope

Nested functions have access to the variables declared in the outer function,
just like functions have access to the variables declared outside of the functions.

This can be useful when creating nested functions,
as much of the code can be put into a nested function
without needing to declare a parameter for every single variable in the function.

### ~hint

If you want to use a value that is in the outer function in the nested
function without modifying it by accident,
you can always pass the value as a parameter.

### ~

## Example #2: Add and Subtract

1. Review the code snippets below; the behavior is the same for both
2. Identify how ``||functions:intro||`` and ``||functions:finale||`` 

```typescript
function worldCreation(hero: string, villain: string, location: string) {
    console.log(hero + " was a simple farm hand,");
    console.log("before " + villain + " arrived. They destroyed");
    console.log("the farm of " + location + ".");

    console.log("In the end, " + hero + " was able to save");
    console.log("the people of " + location + " using magic");
    console.log("and cunning, ending the reign of " + villain + ".");
}

worldCreation("Alice", "Needy Elephantman", "Cornucopia");
```

```typescript
function worldCreation(hero: string, villain: string, location: string) {
    intro();
    finale();

    function intro() {
        console.log(hero + " was a simple farm hand,");
        console.log("before " + villain + " arrived. They destroyed");
        console.log("the farm of " + location + ".");
    }

    function finale() {
        console.log("In the end, " + hero + " was able to save");
        console.log("the people of " + location + " using magic");
        console.log("and cunning, ending the reign of " + villain + ".");
    }
}

worldCreation("Alice", "Needy Elephantman", "Cornucopia");
```

## Student Task #2: Splash and Dash

1. Review the code below
2. In a new project, recreate the code
3. Create two **nested functions** in ``||functions:splashAndDash||``:
one to ``||game:splash||`` ``||variables:words||``,
and one to move ``||variables:sprites||`` to the right by ``||variables:distance||``
4. Verify that the behavior has not changed after creating the two functions

```typescript
function splashAndDash(words: string, sprite: Sprite, distance: number) {
    game.splash(words);
    sprite.x += distance;
}

let mySprite: Sprite = sprites.create(sprites.duck.duck1);
pause(1000);
splashAndDash("I'm Moving!", mySprite, 25);
```

### ~hint

Note that the examples on this page are purely for the ease of learning nested functions;
replacing each line in a function with another function is unlikely to be a good idea.
Typically, these should be used to separate different logical chunks of code,
to help clarify the code.

The benefit of nested functions is more apparent when the functions are significantly larger;
often dozens of lines long, or more. In smaller cases like the ones shown here,
it is unlikely to be particularly helpful -
these are being used solely as examples of how nested functions work,
not as a demontration of how short functions should be written.

### ~

## What did we learn?

1. How do nested functions help break down large functions?
2. How does knowing the scope of the variables within the outer
function help when writing inner functions?
