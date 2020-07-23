# Activity: Return Values

In the previous section, functions were shown to accept input in the form of **parameters**.
These allow developers to pass values **to** a function.

**Return values** allow a function to return (give back) a value at the end of a function call.
This **ends** the call to the function, continuing the code from where the function was called.

## Concept: Returning a Value

Functions can be given return value by using the return value,
and giving the function a type.

```typescript-ignore
function name(parameter: parameterType): outputType {
    // function contents
    return output;
}
let returnedValue: outputType = name(value);
```

There are four new elements added to this snippet since the previous lesson:

* ``return``: the start of the **return statement**; the value that follows this will be returned
* ``output;``: the value that is returned
* ``: outputType``: the type of the value that is going to be returned by the function
* ``let returnedValue: outputType = ``:
storing the returned value from ``||functions:name||`` in a variable.
If the returned variable is not stored like this,
the returned value will not be accessible afterwards.

``returnedValue`` will store the result of the call to ``||functions:name||``,
allowing that value to be used outside of the function.

## Example #1: Gimme 5

1. Review the code below
2. Identify what the return type of this function will be
3. Identify what will be stored in ``||variables:returnedValue||``
after ``||functions:giveMeFive||`` is finished

```typescript
function giveMeFive(): number {
    return 5;
}

let returnedValue: number = giveMeFive();
```

## Student Task #1: Who are You?

1. Create a function named ``||functions:aName||``
2. Add a return value to ``||functions:aName||``, which returns "Bill"
3. After calling the function, store the returned value
in the variable ``||variables:theName||``
4. Use ``||game:game.splash||`` to display ``||variables:theName||``
5. **Challenge:** give ``||functions:aName||`` a parameter ``name``
of type ``||text:string||``. Modify the return value to return ``name`` instead

## Concept: Different Return Values

Return statements are very useful when writing functions,
but require some care to make sure the code runs properly.

### Error #1: Returning too early

In the following snippet, the intention of ``hello`` is to return the value 5,
and also ``||game:splash||`` "5 is returned!".

```typescript
function hello(): number {
    let output: number = 5;
    return output;

    game.splash(output + " is returned!");
}
```

However, because the return statement comes before the ``||game:splash||``,

the function ends before the value is ``||game:splashed||``.
This can be fixed in this case by switching the order of the statements,
so that the return value is at the **end** of the function.

```typescript
function hello(): number {
    let output: number = 5;
    game.splash(output + " is returned!");

    return output;
}
```

### Error #2: Missing a Return

In this example, the intention is to return 5 half the time, and otherwise return 10.

```typescript-ignore
function world(): number {
    if (Math.percentChance(50)) {
        return 5;
    } else if (Math.percentChance(50)) {
        return 10;
    }
}
```

This code can be fixed by removing the condition on the else as follows:

```typescript
function world(): number {
    if (Math.percentChance(50)) {
        return 5;
    } else {
        return 10;
    }
}
```

Another way to address this issue is to only have a single return statement,
and create an ``||variables:output||`` variable to return.
For example, the above code could be rewritten as the following:

```typescript
function world(): number {
    let output: number = 0;
    if (Math.percentChance(50)) {
        output = 5;
    } else {
        output = 10;
    }
    return output;
}
```

### ~hint

There is another case of error #2 above that can be very confusing to catch.

```typescript-ignore
function world(num: number): number {
    if (num < 0) {
        return 5;
    } else if (num >= 0) {
        return 4;
    }
}
```

This code will fail to run, giving the error that ``Not all code paths return a value.``

This may seem odd; if ``num`` is not less than 0,
then we can generally reason that ``num`` **must be** greater than or equal to 0.

However, there are some cases where that statement is incorrect that we have not covered yet -
and even if it were the case,
the code should be written so that it does not require this sort of reasoning.
To make this code work properly,
one of the fixes for error #2 should be applied here as well.

### ~

## Example #2: Absolute Value

1. Review the code below
2. Identify what ``||functions:makePositive||`` will return in the
three commented out ``console.log`` statements
3. Recreate the code, and uncomment the three statements to verify
the results are correct

```typescript
function makePositive(num: number): number {
    if (num < 0) {
        return -1 * num;
    } else {
        return num;
    }
}
// console.log("" + makePositive(-3));
// console.log("" + makePositive(5));
// console.log("" + makePositive(0));
```

### ~

## Student Task #2: Up or Down

1. Create a function named ``||functions:addOrRemove||``
2. Add two parameters to the function: ``input`` of type ``||Math:number||``,
and ``up`` of type ``||logic:boolean||``
3. Add an ``||logic:if ... else||`` to the function
    * if ``||logic:up||`` is true, return ``input`` plus one
    * otherwise, return ``input`` minus one
4. **Challenge:** create **four** test cases for ``||functions:addOrRemove||``,
with different values for ``input`` and ``up`` that verify the function is working properly

## Example #3: Sprites

Like parameters, the return type of a function can be of any type.

1. Review the code below
2. Identify what ``||functions:copyCat||`` accepts as a parameter,
and what it returns
3. Recreate the example and create a ``||sprites:sprite||``.
Call the function using that new ``||sprites:sprite||`` as a parameter,
and identify what is returned.

```typescript
function copyCat(originalSprite: Sprite): Sprite {
    return sprites.create(originalSprite.image);
}
```

## Concept: Ending a Function

The ``return`` keyword causes the function to stop running and return.
This can be very helpful when searching for a value,
or reaching a case in which the function should end early.

## Example #4: Finding Three

```typescript
function containsThree(min: number, max: number): boolean {
    for (let i = min; i <= max; i++) {
        console.log("" + i);
        if (i == 3) {
            return true;
        }
    }
    return false;
}
let found: boolean = containsThree(0, 5);
console.log("" + found);
found = containsThree(5, 10);
console.log("" + found);
```

``||functions:containsThree||`` will go through all values starting at
``||variables:min||`` and ending at ``||variables:max||``,
``logging`` the value of each until it finds the value 3.
If it finds 3, it will return true;
otherwise, it will return false.

In the first case shown in the code (``||functions:containsThree(0, 5)||``),
the function only logs ``0``, ``1``, ``2``, and ``3``
because the function stopped once it found ``3`` and returned ``true``.

In the first case shown in the code (``||functions:containsThree(5, 10)||``),
the function logs all values between ``5`` and ``10``
because it never finds ``3``, and returns ``false``.

### ~hint

A ``return`` statement can also be used without a value;
in this case, the function call will end, and nothing will be returned.

```typescript
function printCountTimes(words: string, count: number) {
    if (count <= 0) {
        return;
    }

    // Omitted complicated set up code

    for (let i = 0; i < count; i++) {
        console.log(words);
    }
}
```

In the above snippet, ``||functions:printCountTimes||`` will ``return``
early if count is less than or equal to ``0``.

By returning early, it avoids doing the unnecessary ``// Omitted complicated set up code``.

### ~

## What did we learn?

1. What needs to be added to a function so that it will return a value?
2. If a function returns a value in one case, does it need to return a value in all cases?
3. What happens if you call a function with a return value without
storing or using the returned value?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/functions/returns-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Return the Sprites

In the ``enemy`` namespace, modify the ``createEnemy`` function so that
it returns the ``||sprites:Sprite||`` that is created.

Next, in the ``ship`` namespace, modify the ``initialize`` function to
create the ``||sprites:Sprite||`` as a local variable
(rather than just immediately storing it as the ``player``),
and return the newly created ``||sprites:Sprite||``.

After doing this, modify the declaration of ``||variables:player||``
in ``ship`` so that it is also **initialized** to the value returned by
the call to ``initialize``.
Now, it is a bit more clear what the value is assigned to,
as you no longer have to look into different functions to see where it is first given a value.

### Solution

Notice that the name of the sprite created in ``ship.initialize``
was changed from ``||variables:player||`` to ``||variables:sprite||``
in the example solution below; this isn't required to complete this task,
but it does make it a bit more clear that the value is not the same
as the one that is outside the function.

```typescript-ignore
/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    createEnemy();

    function createEnemy(): Sprite {
        let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
        setPosition(enemy, 10);
        enemy.vy = 10;
        return enemy;
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player: Sprite = initialize();

    function initialize(): Sprite {
        let sprite = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(sprite, 80, 30);
        sprite.x = screen.width / 2;
        sprite.y = screen.height - 20;
        return sprite;
    }

    // When the player presses A, fire a laser from the spaceship
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
    });
}
```

### ~