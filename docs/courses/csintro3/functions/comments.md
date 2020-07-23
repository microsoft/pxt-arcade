# Activity: Function Documentation

In previous lessons, ``||functions:functions||`` have been shown to
have a wide variety of uses, with many different features.

For those reasons,
we will maintain a particular format for ``||functions:function||`` comments.
This way,
anyone who wants to learn about the function will have a consistent and easy way
in which to identify these features,
without having to go back and forth looking for what the different aspects of the function are.

## Concept: Commenting Simple Functions

The first functions discussed in the [Intro Lesson](/courses/csintro3/functions/intro)
were fairly basic; they accepted no input, and did not produce any output.

The ``||functions:sayHello||`` function is a simple demonstration of this;
whenever it is called, it will ``||game:splash||`` "hello" to the person playing the game.

To add a comment to a function like this,
simply describe in a short sentence what the function is actually doing.

## Example #1: Commenting on ``||functions:sayHello||``

1. Review the code below
2. Identify what the method will do
3. Read the comment for the method: identify how it describes the method's behavior

```typescript
/**
 * Displays a greeting for the player to read.
 */
function sayHello() {
    game.splash("hello");
}

sayHello();
```

Notice that the comment does not go into much detail on the behavior -
saying the exact greeting, or how it is done.
If someone wants to know these things, they can read the code itself.

Even if the function were changed to display different text in a slightly different way
(as done below), the same comment could still be used to describe the function.

```typescript
/**
 * Displays a greeting for the player to read.
 */
function sayHello() {
    game.showLongText("Welcome to our new Adventure! You will have a good time here!", DialogLayout.Bottom);
}

sayHello();
```

## Student Task #1: Writing a Comment

1. Review the code below
2. Fill in the comment for the ``||functions:introduction||`` function
3. Fill in the comment for the ``||functions:goodbye||`` function
4. **Challenge:** should a description of ``||variables:word||``
show up in the comment for ``||functions:goodbye||``?

```typescript
/**
 *
 */
function introduction() {
    game.splash("Hi, my name is Bob!");
}

/**
 *
 */
function goodbye() {
    let word = "Goodbye!";
    game.splash(word);
}
```

### ~hint

Hints for Challenge:

* Is ``||variables:word||`` accessible outside of ``||functions:goodbye||``?
* How is the behavior of ``||functions:goodbye||`` different from
``||functions:helloWorld||``? Is ``||variables:word||`` part of that difference?

### ~

## Concept: Parameters

To comment on a parameter, start the line with ``@param``, followed by the
parameter's name, and then a short description of what the function will do.

For example, a section of a comment describing a parameter ``count`` of type
``number`` that determines how many times a value will be printed could be commented on as

```typescript-ignore
/**
 * Prints "Hello!" to the console a given number of times
 * @param count the number of times to print the phrase
 */
```

## Example #2: Commenting on ``||functions:printMessage||``

1. Review the code below
2. Identify what the function will do
3. Read the comment for the function: identify how it describes the function's behavior
4. Hover over the function call and the parameter that is passed to the function
call to see how the editor displays function

```typescript
/**
 * Prints a message
 * @param message the message that will be printed
 */
function printMessage(message: string) {
    console.log(message);
}

printMessage("Hello");
printMessage("World");
```

![Function Highlighting](/static/courses/csintro3/functions/function-highlighting.gif)

## Student Task #2: Commenting on Parameters

1. Review the code below
2. Fill in the comment for the ``||functions:printMyValue||`` function
3. Fill in the comment for the ``||functions:goodbye||`` function

```typescript
/**
 *
 */
function printMyValue(value: number) {
    console.log("" + value);
}

/**
 *
 */
function moveMySprite(mySprite: Sprite) {
    mySprite.x += 20;
}
```

## Concept: Return Values

Return values are incredibly important; if they are not documented properly,
then oftentimes the behavior of the function will be entirely unpredictable.

To document return values, start the comment with ``@returns``,
and then give a short description of what the value returned represents.
Generally, we will put the ``@returns`` annotation after any parameters
for the functions we describe.

```typescript-ignore
/**
 * Prints "Hello!" to the console a given number of times
 * @param count the number of times to print the phrase
 * @returns the number of characters that were printed
 */
```

## Example #3a: Describing Return Values

1. Review the code below
2. Identify what the function will do
3. Read the comment for the function: identify how it describes the function's behavior

```typescript
/*
 * Prints out 5
 * @returns the number requested
 */
function highFive(): number {
    console.log("5");
    return 5;
}
```

## Example #3b: Describing Only Return Values

If the function's only purpose is to return a value,
and nothing else that will affect the person calling it is done,
then you can omit the short description of the function itself
and include only the ``@returns``.

1. Review the code below
2. Identify what the function will do
3. Read the comment for the function: identify how it describes the function's behavior

```typescript
/*
 * @returns the number requested
 */
function lowFive(): number {
    return 5;
}
```

## Student Task #3: What does this Return?

1. Review the code below
2. Fill in the comment for the ``||functions:coinFlip||`` function
3. Fill in the comment for the ``||functions:greetAndBill||`` function
4. **Challenge:** fill in the comment for the ``||functions:sayMyName||`` function

```typescript
/**
 *
 */
function coinFlip(): boolean {
    return Math.percentChance(50);
}

/**
 *
 */
function greetAndBill(): string {
    game.splash("Have a good day!");
    return "Bill";
}

/**
 *
 */
function sayMyName(name: string): string {
    game.splash("Your name is " + name);
    return "my" + name;
}
```

## What did we learn?

1. In your own words, describe why comments for functions are helpful.
2. Why is it important to keep a consistent structure for how comments are written?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/functions/comments-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Commenting!

Review the previous case study examples, and add comments to the functions
that you added in previous lessons to clarify what exactly they are supposed to do.
This includes the following functions:

* ``ship.initialize``
* ``enemy.createEnemy``
* ``enemy.setPosition``
* ``status.initialize``

### Solution

```typescript-ignore
/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    createEnemy();

    /**
     * @returns an enemy sprite that is positioned at the top of the screen
     */
    function createEnemy(): Sprite {
        let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
        setPosition(enemy, 10);
        enemy.vy = 10;
        return enemy;
    }

    /**
     * Place the given sprite at a random location at the top of the screen
     * @param sprite the sprite to place at the top of the screen
     * @param edge how many pixels between either edge of the screen to set
     */
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

    /**
     * @returns a player sprite that moves with the directional buttons
     */
    function initialize(): Sprite {
        let sprite = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(sprite, 80, 30);
        sprite.x = screen.width / 2;
        sprite.y = screen.height - 20;
        return sprite;
    }
}

/**
 * Set up the state of the game
 */
namespace status {
    initialize(4, 0);

    /**
     * Sets up the initial state of the game
     * @param life the initial life to set
     * @param score the initial score to set
     */
    function initialize(life: number, score: number) {
        info.setLife(life);
        info.setScore(score);
    }
}
```

### ~