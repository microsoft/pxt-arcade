# Lab 3.1 Part 1: Introduction to loops

## Repeat that, please! @showdialog

In this lab, we will explore a family of loops called *definite loops*.

*Definite loops* are loops that run a specific number of times.

In Part 1, we'll use one of those loops: The **repeat** loop.

```block
let foodSprite: Sprite = null
for (let index = 0; index < 6; index++) {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
}
```

## Take an apple; leave an apple

Let's create a hero character and drop food randomly on the screen.

1.  Create a sprite for your hero character.
    -   Give the sprite's variable an appropriate name.
    -    Give the sprite an image.
1.  Allow the player to move the hero sprite around the screen.
1.  Whenever the player presses **A**, add a sprite to the screen.
    -   Give the new sprite's variable an appropriate name.
    -   Give the sprite an image.
    -   Place the sprite at a random location on the screen.

Run your project and verify that it works as described.
Check the hint if you need any help.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
let foodSprite: Sprite = null
let heroSprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
controller.moveSprite(heroSprite)
```

## Drop two!

Instead of dropping just one piece of fruit (or other food), let's say we
wanted to drop two pieces of food. That's easy enough to do: just duplicate
the blocks that we have.

But what if we wanted to drop three? Or five?
Or ten? Or what if you wanted to change the number of sprites throughout
the game?

There is a better way to do this: Use a **repeat** loop.

1.    From the   
``||loops:Loops||`` drawer, drop a   
``||loops:repeat (4) times||``   
loop into your   
``||controller(noclick): on (A) button (pressed)||``   
container.
1.    Move the other blocks in that container to the **inside** of the
``||loops(noclick):repeat||`` container.
1.    Change the number of repeats to **2**.

Run your project and verify that the player drops **two** pieces of food
each time you press **A**.

Check the hint if you need help.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
        foodSprite.setPosition(randint(8, 152), randint(8, 112))
    }
})
let foodSprite: Sprite = null
```

## Kick the tires!

Give your new loop a try! As you try different **repeat** values,
answer the questions below.

**Questions**

-    Are there any numbers that are **not** allowed as a repeat value?
-    Are there any numbers that work in unexpected ways?
-    How might you use a **repeat** block in your own projects?

## Food fight!

Instead of dropping food at random locations, let's throw projectiles
from the player.

1.  **Delete** all of the blocks inside of the ``||loops(noclick):repeat||`` container.
Keep the loop, though!
1.  Add the following blocks to your ``||loops(noclick):repeat||`` loop:
    1.   Create a variable called **speedX**.
    1.   Set **speedX** to a random value between 10 and 40.
    1.   Create another variable called **speedY**.
    1.   Add blocks so that it reads:   
    ``||variables:set speedY to||`` ``||math:50 -||``
    ``||variables:speedX||``.
    1.   Create a projectile that starts at your hero sprite with
    velocities **speedX** and **speedY**.

These blocks will send the projectiles in random directions, but will
keeps their speeds roughly the same.

Run your project and see how it operates differently from before.

Try different repeat values!

How might you use this mechanism in your own projects?

Check the hint if you need any help.

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        let speedX = randint(10, 40)
        let speedY = 50 - speedX
        let foodSprite: Sprite = sprites.createProjectileFromSprite(sprites.food.smallApple, heroSprite, speedX, speedY)
    }
})
```

## Complete! @showdialog

Good work! You have worked with the **repeat** loop!

Try these extensions if you have time:

-    Can you generate a random number of projectiles with each button press?
-    Because both speed values are positive, the projectiles always move
toward the bottom-right corner of the screen. Can you find a way to make
the directions more random?
-    Instead of sending the projectiles in random directions, can you
distribute them more uniformly around the hero?

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
        foodSprite.setPosition(randint(8, 152), randint(8, 112))
        speedX = randint(10, 40)
        speedY = 50 - speedX
        foodSprite = sprites.createProjectileFromSprite(sprites.food.smallApple, heroSprite, speedX, speedY)
    }
})
let speedY = 0
let speedX = 0
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
controller.moveSprite(heroSprite)
```