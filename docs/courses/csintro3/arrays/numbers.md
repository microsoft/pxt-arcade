# Activity: Arrays of Numbers

At the end of the previous course, ``||arrays:Arrays||`` were introduced
as a way to store multiple related values.

In JavaScript, ``||arrays:Arrays||`` have a simple syntax,
allowing them to be used as an easy way to store multiple values.

## Concept: Array Syntax

An array is created using square brackets (``[`` and ``]``).

For example, an array of numbers can be created as follows:

```typescript-ignore
let arr: number[] = [];
```

To create an array of values, you simply add square brackets following
the type of the values that will be stored in the ``||arrays:array||``:
``number[]`` is the type for a ``||arrays:number array||``.

Square brackets are also used to set and get values in an array.
The following snippet will **set** the value at index 0 to be 5,
and then **get** that value and splash it on screen.

```typescript
let arr: number[] = [];
arr[0] = 5;
game.splash("" + arr[0]);
```

### ~hint

One way to think of this is as a group of ``||variables:variables||``.

```typescript-ignore
let arr0: number = 5;
let arr1: number = 4;
let arr2: number = 3;
let arr3: number = 2;
let arr4: number = 1;
```

This will store 5 ``||variables:variables||``.
Using an ``||arrays:Array||`` could look similar to the code below.

```typescript-ignore
let arr: number[] = [];

arr[0] = 5;
arr[1] = 4;
arr[2] = 3;
arr[3] = 2;
arr[4] = 1;
```

### ~

## Example #1: Adding and Splashing

1. Review the code below
2. Identify where the ``||arrays:Array||`` is created
3. Identify how the loop is used to **add** values to the array
4. Identify how the second loop is used to **get** values from the array
5. Consider how this behavior could be implemented without arrays

```typescript
let arr: number[] = [];

for (let i = 0; i < 5; i++) {
    arr[i] = i * 2;
}

for (let i = 0; i < 5; i++) {
    game.splash(i + " is " + arr[i]);
}
```

## Student Task #1: Increment Each Value

1. Start with the code from example #1
2. After a value is ``||game:splash||``ed in the second ``||loops:loop||``,
increment the value stored at that index
3. Add a **third** ``||loops:for||`` loop,
which will splash the **new value** stored in each index in the previous step.
The first message splashed from this should be ``0 is now 1``

## Concept: Adding Initial Values

The square brackets used to create a new array also allow for a quick declaration
of the initial contents of the array.
This can be done by adding comma ``,``
separated values between the opening ``[`` and closing ``]`` brackets.

When creating an array with initial values in it,
the first value listed will be stored at index 0,
the second value will be stored at index 1, and so on. 

## Example #2: Quick Creation

1. Review the code below
2. Identify what the initial contents of the array are
3. Identify which index corresponds to which value

```typescript
let arr: number[] = [8, 42, 5];
for (let i = 0; i < 3; i++) {
    game.splash("index " + i + " contains the value " + arr[i]);
}
```

### ~hint

The way arrays were created in the first example is the same arrays
are created in this example.

The only difference is that the first example's array started off **empty**,
as there were no values between the square brackets.

![Animation](/static/courses/csintro3/arrays/changing-example-one.gif)

### ~

## Student Task #2: Add Some Values

In this task, use the new way to create an array that contains elements to start with.

1. In a new project, create two new ``||arrays:arrays||``,
``||variables:evens||`` and ``||variables:odds||``
2. Initialize ``||variables:evens||`` with the **even** values
between 0 to 10 (including 0 and 10)
3. Initialize ``||variables:odds||`` with the **odd** between 0 and 10
4. ``||game:game.splash||`` each value in ``||variables:evens||``
and ``||variables:odds||``

## Concept: Array ``||arrays:Length||``

The ``||arrays:array length||`` property can be used to identify how many
values are contained in an array.
Even when the length of an array is predetermined,
it is common to refer to the ``||arrays:array.length||`` property for
both consistency and readability.

## Example #3: How Many Numbers?

1. Review the code below
2. Identify how many values are contained within each array
3. Identify the ``||arrays:length||`` of each array
4. **Challenge:** identify how the ``||arrays:length||`` of each array
corresponds to the last index in the array that contains a value

```typescript
let a: number[] = [1, 2, 3, 4];
let b: number[] = [];
let c: number[] = [5, 4, 3, 2, 1];

game.splash("a.length is " + a.length);
game.splash("b.length is " + b.length);
game.splash("c.length is " + c.length);
```

## Student Task #3: Add and Splash

1. Review the code below
2. Read the comment for ``||functions:addAndSplash||``
3. Implement the ``||functions:addAndSplash||`` function

```typescript
/**
 * Adds one to each value in the input array, and then displays the length
 * of the array on screen.
 * @param input the array to modify
 */
function addAndSplash(input: number[]) {

}

let arr: number[] = [1, 2, 3, 4];

game.splash(arr[0] + "");
addAndSplash(arr);
game.splash(arr[0] + "");
```

### ~hint

Review the code snippet below.

```typescript
let arr: number[] = [];
arr[3] = 100000;
game.splash(arr.length + "");
```

The result may seem surprising. Why is the length of ``||variables:arr||`` 4,
even though there is only one value in it?

The ``||arrays:length||`` of an array is determined by the index of the last element,
not an exact count of the number of indices assigned a value.
In this case, index ``3`` has been assigned a value,
so the values considered to be 'within' the array are indices ``0``, ``1``, ``2``,
and ``3``, a total of 4 elements.

### ~

## What did we learn

1. In your own words, explain why an ``||arrays:array||`` can often be more useful
than a group of ``||variables:variables||``.
2. Given an array of numbers ``||variables:arr||`` and a ``||loops:for||`` loop
declared like the one below,
what is the difference between ``||variables:i||`` and ``||variables:arr[i]||``?

```typescript-ignore
for (let i = 0; i < arr.length; i++) {

}
```

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/arrays/numbers-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### New Bonus!

Currently, the game lacks a feeling of progression; no matter how long you play,
the only things that will permanently change are the values for ``||info:score||``
and ``||info:life||``.

One way to address this is to add a way for the player to grow more powerful as
they play the game.
Add a new type of ``PowerUp`` called ``EnergyUp``,
which should add ``1`` to the ships maximum energy to allow the player to fire
more lasers at once before having to wait for them to recharge.

To do this, you will need to add the new power up to the ``PowerUpType`` enum,
and update the ``||arrays:availablePowerUps||`` array in the ``powerups`` namespace
to include the new possible powerup.

Finally, in the ``||sprites:overlap event||`` between ``Player`` and ``PowerUp``,
add another ``||logic:else if||`` for when the ``PowerUp`` is the new power up,
which should say "More Energy!" and increase ``||variables:ship.maxCharge||``.

### Draw My Energy

Currently, there is no indication of how much energy the player's ship has,
besides when you run out and it doesn't fire a ``Laser`` anymore. To do so,
add the following snippet to the ``status`` namespace:

```typescript-ignore
game.onPaint(function () {
    let x = 1;
    let y = screen.height - image.font5.charHeight - 1;
    let color = 0x3;

    if (ship.currentCharge == ship.maxCharge) {
        color = 0x7;
    } else if (ship.currentCharge == 0) {
        color = 0x2;
    }

    let energyState = "energy: " + ship.currentCharge + "/" + ship.maxCharge;
    screen.print(energyState, x, y, color, image.font5);
});
```

This uses the ``||game:on paint||`` event, which occurs immediately before any
``||sprites:Sprites||`` are drawn onto the screen. With this,
whenever the screen is updated, the current energy will be printed in the
**bottom left corner** of the screen. Feel free to modify it to your liking!

### Solution

```typescript-ignore
enum PowerUpType {
    Health,
    Score,
    EnergyUp
}

namespace powerups {
    let availablePowerUps = [
        PowerUpType.Health,
        PowerUpType.Score,
        PowerUpType.EnergyUp
    ];

    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        sprite.data = Math.pickRandom(availablePowerUps);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });
}

namespace overlapevents {
    // When a player hits a powerup, apply the bonus for that powerup
    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        if (powerUp == PowerUpType.Health) {
            sprite.say("Got health!", 500);
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            sprite.say("Score!", 500);
            info.changeScoreBy(15);
        } else if (powerUp == PowerUpType.EnergyUp) {
            sprite.say("More Energy!", 500);
            ship.maxCharge++;
        }
    });
}

namespace status {
    game.onPaint(function () {
        let x = 1;
        let y = screen.height - image.font5.charHeight - 1;
        let color = 0x3;

        if (ship.currentCharge == ship.maxCharge) {
            color = 0x7;
        } else if (ship.currentCharge == 0) {
            color = 0x2;
        }

        let energyState = "energy: " + ship.currentCharge + "/" + ship.maxCharge;
        screen.print(energyState, x, y, color, image.font5);
    });
}
```

### ~