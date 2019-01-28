# Problem Set: Parameters

This section contains a number of selected problems for the Parameters section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Capslock

Capslock is an effective tool, but is often enabled accidentally. Create a function called ``printHello`` that accepts a boolean called ``capslock``. If ``capslock`` is true, the function should print ``HELLO WORLD``, otherwise, it should print ``hello world``


```typescript
function printHello(capslock: boolean) {
    if (capslock) {
        console.log("HELLO WORLD");
    } else {
        console.log("hello world");
    }
}

printHello(true);
printHello(false);
```

## Problem #2: Print Line

Write a function called ``printLine`` that takes in a number called ``length`` as a parameter. The function should then build up a string containing ``length`` number of ``*`` characters before printing it to the console.

For example: the following function calls should log the following strings to the console.

| function call    | console output |
|:-----------------|:---------------|
| ``printLine(2)`` | ``**``         |
| ``printLine(4)`` | ``****``       |
| ``printLine(1)`` | ``*``          |
| ``printLine(3)`` | ``***``        |

### ~hint

You can build up a string using a ``||loops:for||`` loop and the ``||math:+=||`` operator.

### ~

## Problem #3: Print Triangle

Keyboard characters allow us to express words, but they can also be used to create art.
Write a function called ``printLine`` that takes in a number called ``size`` as a parameter and prints out a triangle to the console of the specified size.

The triangle should take up ``size`` lines in the console where each line contains an increasing number of ``*`` characters. That is, the first line should contain just ``*``, the second ``**`` and so on.

For example, the function call ``printTriangle(5)`` should print the following output to the console.

```
*
**
***
****
*****
```


### ~hint

It may be helpful to use the ``printLine`` function from the previous problem

### ~

## Problem #4: Urgent Message!

There can be some cases in which you need to log something that is extremely important. To solve this, use functions. Write a function called ``urgentLog`` that takes in a string called ``message`` and a number called ``numOfTimes``. The function should take the ``message`` and log it to the console a total of ``numOfTimes`` times.

## Problem #5: Pizza Place

The following function will randomly place a pizza sprite on the screen.

```typescript
function makePizza() {
    let pizza: Sprite = sprites.create(sprites.food.smallPizza);
    pizza.x = Math.randomRange(0, scene.screenWidth());
    pizza.y = Math.randomRange(0, scene.screenHeight());
    loops.pause(200);
}
```

Copy this function into your code. 

You're running your own pizza place and have received the following orders from customers:
* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

Write a function called ``makeOrder`` that takes in number parameter called ``numOfOrders``. The function should ``||game:game.splash||`` how many pizzas have been ordered and then use a ``||loops:for||`` loop to make that many pizzas.

## Problem #6: Sprite Factory

Write a function called ``spriteFactory`` that takes in an image called ``form`` and a number called ``numOfSprites``. The function should take the image ``form`` and create sprites that use that image. The function should create the number of sprites that is specified.

The sprites will all default to be in the center of the screen and overlap one another. Find a way to show that there are multiple sprites, either using motion or placing them in different position. 

### ~hint

Look at the ``makePizza`` function from the previous problem if you are stuck

### ~

## Example #7: Follow the Leader

Write a function called ``follow`` that accepts 2 ``||sprites:sprites||``, a ``leader`` and a ``follower``.

Modify the ``vx`` and ``vy`` values of the ``follower`` sprite such that it will go in the direction of the ``leader`` sprite.

**Challenge:** speed is defined as ``Math.sqrt((vx * vx) + (vy * vy))`` where ``vx`` and ``vy`` are the velocities of a sprite. Try to implement this function in a way that the follower will have the same speed