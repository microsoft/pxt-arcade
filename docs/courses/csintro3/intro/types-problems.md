# Problem Set: Types

This section contains a number of selected problems for the Types section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Confusing Types!

After reading through the types lecture,
an eager student decided to test their knowledge by ``||game:splash||``ing
their favorite number to the screen.
Knowing that ``||game:splash||`` requires a string to be passed,
they made sure to declare their variable as a string,
but to their surprise, it still didn't work.

```typescript-ignore
let myFavoriteNumber: string = 7;
game.splash(myFavoriteNumber);
```

Identify the error in their code, and then change the code so that it properly displays `7`.

## Problem #2: Logging in

Use ``console.logValue`` to log exactly the following text to the console:

```
Hello, I am number: 7
Hey, I'm: 8
How many slices of pizza can you eat: 4
I can eat: 3
```

## Problem #3: Making Types Up

For each of the following types of information,
identify whether you would want use a ``string`` or a ``number`` to store the value.
If both options seem reasonable, explain why.

* The amount of money in a persons pocket
* The name of your favorite food
* Your favorite number
* The name of your favorite celebrity
* How many questions are on this page
* A house address
* A phone number

## Problem #4: What Type is That?

The following code is all ready to go for our next big game,
except for one big issue: we forgot to declare the variables!
Add variable declarations before the current code so that the code runs,
without changing any of the provided code.

```typescript-ignore
color = "red";
count = 1;
output = color + count;
response = "I like " + color;
count = 2;
output = output + count;
color = color + " or blue";
count = 3;
output = output + count;
game.splash(count + color);
game.splash(response + output);
```

## Problem #5: Swapping!

Change the following code so that it will ``||game:splash||`` "Red Light".
This must be done using **only** string reassignment from one variable to another
variable - do not change any of the current lines of code, or reassign anything
directly to a new string
(that is, adding the line ``a = "light";`` before ``game.splash`` is **not** allowed)


```typescript
let a: string = "Red";
let b: string = "Light";
let c: string;

game.splash(b + " " + a);
```