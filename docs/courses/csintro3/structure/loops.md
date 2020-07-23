# Activity: Loops

A ``||loops:for||`` loop is one of the most common loop structures.
It allows for a consistent way to iterate a (generally) predetermined number of times.

In blocks, this structure was represented in two different ways:
the ``||loops:for index||`` loop, as well as the ``||loops:repeat loop||``.
The main difference between the two was largely based on whether or not
the user needed to use the ``||variables:index||`` in their loop.

In JavaScript, the structure of these loops is more complex than in Blocks.
However, this complexity allows for the structure to be suitable for a wider range of tasks.

A ``||loops:for||`` loop has the following structure:

```typescript-ignore
for (initialization; check; update) {
    codeToRun;
    ...;
    moreCodeToRun;
}
```

When the code runs, it will do the following:

1. Run ``initialization``. This is used to set up a variable for the loop to iterate on.
2. Run ``check``.
    * **If** ``check`` evaluates to true, run the code inside the loop
    (in this case, from ``codeToRun`` to ``moreCodeToRun``).
    Then, run ``update`` to change the variable the loop is iterating on, and repeat step 2.
    * **Otherwise**, exit the loop and continue to the next line of code after the loop.

## Example #1: Logging a String

![Filling in Example](/static/courses/csintro3/structure/filling-loop.gif)

1. Review the example code below
2. Identify the ``initialization`` step, the ``check`` step, and the ``update`` step
3. Walk through what the code will do **by hand**.
See the hint below for the first two iterations of the loop

```typescript
for (let i = 0; i < 5; i++) {
    console.log("hello number " + i);
}
```

### ~hint

Set up:

>1. Run ``initialization``. This creates a variable
``||variables:i||`` and assigns it the value 0.

First Iteration:

>1. Run ``check``. The expresssion ``0 < 5`` is ``||logic:true||``,
so the loop will continue.
>2. Log "hello number 0" to the console.
>3. Run ``update``. ``||variables:i||`` is now assigned the value 1.

Second Iteration:

>1. Run ``check``. The expresssion ``1 < 5`` is ``||logic:true||``,
so the loop will continue.
>2. Log "hello number 1" to the console.
>3. Run ``update``. ``||variables:i||`` is now assigned the value 2.

### ~

## Student Task #1: Modify the Loop

1. Start with the code from example #1
2. Modify the ``initialization`` step so that ``||variables:i||`` starts at **10**
3. Modify the ``check`` step to check if ``||variables:i||`` is less than **50**
4. Create a hypothesis on what the last line of output will say
5. Run the code to check your hypothesis
6. **Challenge:** modify the ``update`` step to change ``||variables:i||``
by **2** on each iteration (you will need to use ``||math:=||`` or ``||math:+=||``
instead of ``||math:++||``). How has the output changed?

## Example #2: Summation

1. Review the example code below
2. Identify the ``initialization`` step, the ``check`` step, and the ``update`` step
3. Walk through what the code will do **by hand**

```typescript
let output: number = 0;
for (let i = 0; i < 15; i++) {
    output += i;
}
console.log("" + output);
```

## Student Task #2: Product

1. Create a variable (``||variables:product||``) that is a number.
Assign it the value **1**
2. Create a for loop with the variable ``||variables:i||``.
Assign ``||variables:i||`` the value **1** to start
3. Make ``||variables:i||`` increment by 1 on each iteration in the ``update``
4. In the ``check``, make the loop **end** when i is **greater than** 15
5. In the loop, assign ``||variables:product||`` the value ``product * i``
6. **Challenge:** create another variable, ``||variables:output||``, that is a string.
Assign it the value "" before the loop.
In the loop, after changing the value of ``||variables:product||``,
assign ``||variables:output||`` the value ``output + product + " "``

## What did we learn?

1. In your own words, describe the ``initialization``, ``check``,
and ``update`` steps of a for loop.
2. In @boardname@, create a new project and place a ``||loops:repeat||``
and a ``||loops:for index||`` loop in the ``||loops:on start||``.
Convert the code to JavaScript: what is different between the two loops?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/loops-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Asteroid Blast!

We've decided that at the beginning of the game,
there should be a few extra ``||sprites:Asteroids||``
to make it seem like the player ran into an asteroid belt.

At the end of your code, add a ``||loops:for||`` loop that starts at 0 and ends at 9.

Inside of the loop, add
``||sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid)||``.
This will create 10 ``||sprites:Asteroids||``.
Add a ``||loops:pause||`` for 250 ms into the loop as well,
so that the extra ``||sprites:sprites||`` get created over the course of 2.5 seconds.

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

for (let i = 0; i < 10; i++) {
    sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    pause(250);
}
```

### ~