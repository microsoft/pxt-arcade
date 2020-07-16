# Activity: Parameters

In the previous lesson, the parentheses ``()`` in function definitions were skimmed over.
These are used to indicate the **Parameters** for the ``||functions:function||``.

Parameters are variables that can be passed (given) to the ``||functions:function||``.
This allows for functions that can react appropriately to different conditions and settings.

## Concept: Functions with Parameters

Functions can be provided with parameters by including them between the parentheses
in the function definition.

```typescript-ignore
function name(parameter: parameterType) {
    // function contents
}
name(value);
```

There are three new elements added to this snippet since the previous lesson:

* ``parameter``: the name of the parameter variable
* ``parameterType``: the type the parameter must be
* ``value``: a variable (or value) that is being passed to ``name``

``value`` must be of type ``parameterType``, or else the code will not be able to run.

``parameter`` can be handled like any other variable within the scope of the function
``||functions:name||`` - however, the value it is initially assigned will be whatever
value is provided when the function is called.

## Example #1: Reducing Redundancy with Parameters

![Animation of combining two functions with parameters](/static/courses/csintro3/functions/adding-first-parameter.gif)
Parameters can be used to reduce redundancy between different functions.

1. Review the two code snippets below
2. Verify that the two snippets produce the same results
3. Identify how ``||functions:printMessage||`` uses parameters to reduce the
redundancy between ``||functions:printHello||`` and ``||functions:printWorld||``

```typescript
function printHello() {
    console.log("Hello");
}

function printWorld() {
    console.log("World");
}
printHello();
printWorld();
```

```typescript
function printMessage(message: string) {
    console.log(message);
}

printMessage("Hello");
printMessage("World");
```

Beyond just reducing redundancy, this allows for the code to be more flexible:
if the developer chooses to start all messages by printing "Hey Listen!" before the message,
this can be changed in a single place,
rather than in every method that prints to the console.

## Student Task #1: Hey, You!

1. Create a function named ``||functions:greet||``
2. Add a parameter ``firstName`` that is of type ``||text:string||``
3. In the function, ``||game:game.splash||`` a greeting that includes ``firstName``
(if "You" is passed, it might ``||game:splash||`` "Hey, You!")
4. Call the function with three different names

## Concept: Multiple Parameters

Functions are not limited to a single parameter; more than one parameter can be passed,
with each separated by a comma (``,``).

```typescript-ignore
function name(parameterOne: parameterOneType, parameterTwo: parameterTwoType) {
    // function contents
}
name(valueOne, valueTwo);
```

Notice that when calling the function, the order the parameters are passed must
match the order the parameters were defined in; in this case,
``parameterOne`` will store ``valueOne``, and ``parameterTwo`` will store ``valueTwo``.

## Example #2: Choose for Me

![Animation of using a function with multiple parameters](/static/courses/csintro3/functions/using-multiple-parameters.gif)

1. Review the code below
2. Identify how the two parameters are being used
3. Identify what the ``||math:Math.percentChance(50)||`` evaluates to

```typescript
function choose(choice1: string, choice2: string) {
    if (Math.percentChance(50)) {
        console.log("I think " + choice1 + " is the better choice");
    } else {
        console.log("I think " + choice2 + " is the better choice");
    }

}
choose("cats", "dogs");
choose("pizza", "tacos");
choose("Summer", "Winter");
```

## Student Task #2: Extended Greeting

1. Start with the your solution to task #1
2. Modify the function so that it accepts two ``||text:strings||``:
``firstName`` and ``lastName``
3. Make use of **both** parameters in the greeting
(for example, ``||functions:greeting("You", "Friend")||`` could result in "Hey You Friend!")

## Example #3: Non String Parameters

1. Review the code below
2. Identify the types of the two parameters
3. Identify how those two parameters are used in the function

```typescript
function changeByFive(value: number, add: boolean) {
    if (add) {
        value += 5;
    } else {
        value -= 5;
    }
    game.splash("" + value);
}

changeByFive(2, true);
changeByFive(15, false);
```

## Student Task #3: Move the Sprite

1. Create a function named ``||functions:horizontalMovement||``
2. Add two parameters to the function: ``player`` of type ``||sprites:Sprite||``,
and ``left`` of type ``||logic:boolean||``
3. ``||logic:if||`` ``left`` is true, move ``player`` 10 pixels to the left
4. ``||logic:if||`` ``left`` is false, move ``player`` 10 pixels to the right

## What did we learn?

1. How do parameters allow for more flexible code?
2. Review the functions you have learned,
like ``||game:game.splash||`` and ``console.log``,
and identify which ones have parameters.

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/functions/parameters-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Set Up Values

Modify the ``initialize`` function in the ``status`` namespace to accept **two** parameters:
one for the initial ``life`` value, and one for the initial ``score`` value.
Update the **call** to that function so that the behavior remains the same.

### Enemies!

Move all of the code that is currently in the ``enemy`` namespace into a function
named ``createEnemy``. Call this function to create a single enemy.

Next, create a function named ``setPosition``, which accepts a ``||sprites:Sprite||``
(call it ``sprite``) and a ``||math:number||`` (call it ``edge``).
This should place the given ``||sprites:Sprite||`` in a **random x position**
between ``edge`` and ``screen.width - edge``.

Call this function from ``createEnemy`` so that each time an enemy is
created it starts in a random position.
You should also remove the places where the ``x`` and ``y`` positions are set.

### Solution

```typescript-ignore
/**
 * Set up the state of the game
 */
namespace status {
    initialize(4, 0);

    function initialize(life: number, score: number) {
        info.setLife(life);
        info.setScore(score);
    }
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    createEnemy();

    function createEnemy() {
        let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
        setPosition(enemy, 10);
        enemy.vy = 10;
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}
```

### ~