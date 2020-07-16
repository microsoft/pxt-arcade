# Advanced Topics: For Each Loops

``||arrays:Arrays||`` can be traversed using a simple ``||loops:for||`` loop,
using each index from 0 to one less than the ``||arrays:length||`` of
the ``||arrays:array||``.

This can have a few downsides; for one, the index will often not be relevant
outside of keeping track of the different elements of the ``||arrays:array||``.

Additionally, the ``||arrays:array||`` might be created and intended
to be used only within the loop,
like destroying random ``||sprites:Enemies||``
using ``||sprites:sprites.allOfKind||``;
keeping the array around after the loop might result in bugs when
the array is unintentionally used later on.

``||loops:For each||`` loops will iterate through each element in an ``||arrays:array||``.

## Concept: For Each loop syntax

In JavaScript, a ``||loops:for each||`` loop is generally represented
using the ``||loops:for ... of||`` statement, shown in the snippet below.

```typescript
let words: string[] = ["hello", "world"];
for (let element of words) {
    game.splash(element);
}
```

In this snippet, ``||variables:element||`` is the loop variable
(like ``||variables:i||`` in a normal ``||loops:for||`` loop),
and is changed to a different element from the array ``||variables:words||``
on each iteration of the ``||loops:loop||``.

This is done in order from the first element (index 0) to the last
element in the array.

## Example #1: ``||loops:For Each||`` ``||sprites:Enemy||``

1. Review the code below
2. Identify how the ``||loops:for ... of||`` loop is used to iterate over
all ``||sprites:Enemy||``s
3. Identify what is done to each ``||sprites:Enemy||`` in the ``||loops:for ... of||`` loop

```typescript
for (let i = 0; i < 15; i++) {
    let skeleton: Sprite = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy);
    skeleton.x = randint(0, screen.width);
    skeleton.y = randint(0, screen.height);
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
        enemy.say("hi!", 1000);
    }
});
```

## Student Task #1: Spooky Skeleton

1. Start with the code from example #1
2. In the ``||loops:for ... of||`` loop, move each ``||sprites:enemy||`` **up** two pixels
3. After the ``||loops:for ... of||`` loop, ``||loops:pause||`` for 1000 ms
4. After the ``||loops:pause||``, create another ``||loops:for ... of||``
over all ``||sprites:sprites||`` of ``||sprites:kind||`` ``||sprites:Enemy||``
5. In the **second** ``||loops:for ... of||`` loop, move every
``||sprites:Enemy||`` **down** two pixels
5. **Challenge:** in your own words, explain why this behavior couldn't be
(easily) handled using only the first ``||loops:for ... of||`` loop.
It may help to temporarily put the ``||loops:pause||`` inside that loop to test

### ~hint

The ``||loops:for ... of||`` statement is sufficient in most all cases
to handle this sort of behavior.

The rest of this appendix is quite a bit more complex, and potentially confusing:
it is included mostly as a reference for use as needed.
The topics introduced are commonly used in the **functional programming** paradigm.

### ~

## Concept: Filter and For Each

In JavaScript, there is another common implementation of the ``||loops:for each||`` loop:
the ``||arrays:array.forEach||`` function.
This applies the given function to each element in the ``||arrays:array||``.

The function that is passed to ``||arrays:array.forEach||`` is allowed to
have up to two parameters: the first, the element in the array,
and the second, the index of that element in the array.

```typescript
["Hello", "world"]
    .forEach(function (element: string, index: number) {
        game.splash(element);
    });
```

There are a number of other functions that can be used in this way.
One of the most common is ``||arrays:array.filter||``.
``||arrays:Filter||`` accepts a function with up to two parameters
(the same allowed in ``||arrays:forEach||``) that returns a boolean value.

``||arrays:Filter||`` then returns a **new** array containing only the
elements that the given function returned **true** for.

```typescript
let myNumbers: number[] = [1, 2, 3, 5, 8, 4];

myNumbers.filter(function (element: number) {
        return element <= 4;
    }).forEach(function (element: number) {
        game.splash(element + " is not greater than 4!");
    });
```

The snippet above will first filter out any elements from the array
``||variables:myNumbers||`` that are greater than 4,
and then iterate over any remaining elements in the ``||arrays:array||``.

## Example #2: Filter the Enemies!

1. Review the code below
2. Identify how ``||arrays:filter||`` is used to identify only the
``||sprites:Enemy||``s on the **right** side of the screen
3. Identify how the ``||arrays:forEach||`` changes the ``||sprites:Enemy||``s
that are on the **right** half of the screen

```typescript
for (let i = 0; i < 15; i++) {
    let skeleton: Sprite = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy);
    skeleton.x = randint(0, screen.width);
    skeleton.y = randint(0, screen.height);
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let allEnemies: Sprite[] = sprites.allOfKind(SpriteKind.Enemy);
    allEnemies.filter(function (element: Sprite) {
            return element.x > screen.width / 2;
        }).forEach(function (element: Sprite) {
            element.x -= screen.width / 2;
        });
});
```

## Student Task #2: Move to the Right

1. Start with the code from example #2
2. Add a new event for when the player presses the ``||controller:right||`` button
3. In this event, use ``||arrays:filter||`` to select all ``||sprites:Enemy||``s
that are on the **left** half of the screen, and ``||arrays:forEach||`` to move any
``||sprites:Enemy||``s that are on the **left** to the right side of the screen
(this will be effectively the opposite of the ``||controller:left||`` button event,
so duplicating that to start will likely be helpful)
4. **Challenge:** recreate the same behavior for ``||controller:up||`` and
``||controller:down||``, so that the enemies can be moved to the **top** or **bottom**
half of the screen

## What did we learn?

1. In your own words, explain how ``||loops:for ... of||`` loops can be easier to
use than ``||loops:for||`` loops.
2. How do ``||arrays:filter||`` and ``||arrays:forEach||`` allow ``||arrays:arrays||``
to be used more easily?

### ~hint

### Sidenote: Arrow Functions

The **arrow function** (``=>``) is very useful when modifying code in cases like this.
This is an alternate form of a function that is not covered in detail in this course,
but allows for clearer formatting when programming in this style.

```typescript
for (let i = 0; i < 15; i++) {
    let skeleton: Sprite = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy);
    skeleton.x = randint(0, screen.width);
    skeleton.y = randint(0, screen.height);
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let allEnemies: Sprite[] = sprites.allOfKind(SpriteKind.Enemy);
    allEnemies
        .filter(element => element.x > screen.width / 2)
        .forEach(element => element.x -= screen.width / 2);
});
```

The snippet above will behave exactly the same as example #2.
The line ``element => element.x > screen.width / 2`` says
"take the first element,
pass it as a parameter to the function on the right side of the ``=>``,
and return the result of the statement on the right.

Arrow Functions can also be created that are more than a single line
using curly braces ``{}``,
but these will not automatically return the result of the statement
and will behave similarly to other ``||functions:functions||``.

Additionally, if an arrow function requires more than a single parameter
(or no parameters), parentheses need to be used to group the parameters:

1. No parameters: ``() => game.splash("I'm here!")`` will
splash "I'm here!" when it is called
2. Two parameters: ``(a, b) => a + b`` will return the sum
of ``||variables:a||`` and ``||variables:b||``

### ~
