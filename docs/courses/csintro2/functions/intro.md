# Functions intro

defining a function - using game.splash() for a simple method that can be converted to blocks and back with no changes

```typescript
function hello() {
    game.splash("hello");
}

hello();
```

## Important parts of the code (for now):

>* `function`: start defining a new function 
>* `hello`: the name for the function you are creating
>* `{}`: the statements between the opening and closing curly brace are the contents of the function (equivalent to the blocks inside the functions)
>* `hello()`: calls the function hello, running the code that is assigned to it

(question for students: have them run the code without the `hello()`, and ask if the code inside the function is run if the method isn't called; "no, because nothing is splashed on the screen")

## Variable scoping / functions different from blocks

```typescript
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

makeNumbers();
```

run the code. Makes variables in function, etc, etc.

```typescript
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

makeNumbers();
game.splash(first + "");
```

Why doesn't this work -> variables not defined outside the scope of makeNumbers, so they are only usable in there.

Why this is good:

```typescript
function makeNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    let first: number = 5;
    let second: number = 6;
    game.splash((first * second) + "");
}

makeNumbers();
makeOtherNumbers();
```

explain how keeping the variables in a small scope allows for the names to be used in multiple different contexts, without the possibility of interfering with one another (e.g. button presses with pauses causing them to happen in the same time period). Also helps minimize the number of values available at any given scope -> if a value is only ever useful within a method, there's no reason to keep track of it outside that method.

If the other behavior is preferred (for example, a given function modifies a variable), the value can be identified outside any functions and referenced inside - that is

```typescript
let first: number;
let second: number;
function makeNumbers() {
    first = 5;
    second = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    first = 5;
    second = 6;
    game.splash((first * second) + "");
}

makeNumbers();
makeOtherNumbers();
```

(maybe note that this can lead to weird bugs like the following
```typescript
let first: number;
let second: number;
function makeNumbers() {
    let first = 5;
    let second = 6;
    game.splash((first + second) + "");
}

function makeOtherNumbers() {
    first = 5;
    second = 6;
    game.splash((first * second) + "");
}

makeNumbers();
game.splash("" + first); // Why is first not defined???!
makeOtherNumbers();
```
with local variables in makeNumber shadowing the variables outside, making them **different variables with the same name**
)

Note that this is the default behavior for converting blocks to ts, as blocks don't have a sense of scope in variables / local variables are ts only