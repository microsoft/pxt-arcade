# Part 1: A screen full of food

## A screen full of food! @showdialog

In this lab, we will write a game where the player must eat all the food
which appears--while avoiding an enemy which bounces around the screen!

## Sprite-o-rama!

First, let's add a sprite to the screen every three seconds.

1.   From the **Game** drawer, add an   
``||game:on game update every (500) ms||``   
block to your project. Place it anywhere on your workspace.
1.   Change the time from 500 milliseconds to **3000** milliseconds.
You can just type the number. You don't have to select an item from the
list that appears.
1.   From the **Sprites** drawer, add a   
``||variables(sprites):set my sprite to||``
``||sprites:sprite [] of kind Player||``   
block to the   
``||game(noclick):on game update||``   
block that you just added to your workspace.
1.   This sprite represents food, so change the sprite kind to **Food**.
1.   Select or create any food image that you like for your sprite.
1.   Give the sprite variable a meaningful name, like `foodSprite`.

Watch your game run in the simulator. What's wrong?

~hint What is a millisecond?
A millisecond is 1/1000 of a second. In other words, 1,000 milliseconds
is the same as 1 second.

So, 3,000 milliseconds is the same as 3 seconds.
hint~

```blocks
let foodSprite: Sprite = null
game.onUpdateInterval(3000, () => {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
})
```

## Go your own way, food!

It might look like you only have one sprite on your screen.

It only *looks* that way, though ... because the sprites are on top of each other!

Let's put them at random locations on the screen.
Be sure to use the hint button at the bottom of the screen if you want to
see the code that you are trying to build in these steps.

1.   Add a   
``||sprites:set||`` ``||variables(sprites):foodSprite||``
``||sprites:position to x (0) y (0)||``   
block to the **bottom** of   
``||game(noclick):on game update every (3000) ms||``.
1.   Select the dropdown next to the variable name and select the
variable that you created earlier.
1.   Instead of entering a number for the **x** and **y** coordinates,
we are going to use a block that picks a random number.
1.   From the **Math** drawer, drag a   
``||math:pick random (0) to (10)||``   
block and drop it into the **x** value of the   
``||sprites(noclick):set||``
``||variables(noclick):foodSprite||`` ``||sprites(noclick):position to x (0) y (0)||``   
block.
1.   Instead of the numbers **0** and **10**, change the values to pick
a random number from **8** to **152**.

Let your program run in the simulator. That's a little better, right?
Now, let's pick a random **y** value, too.

1.   Drag another   
``||math:pick random (0) to (10)||``   
block and drop it into the **y** value of the   
``||sprites(noclick):set||``
``||variables(noclick):foodSprite||`` ``||sprites(noclick):position to x (0) y (0)||``   
block.
1.   Change the random values to include numbers from **8** to **112**.

Now, you should have food appearing all over the screen!

**Questions**

-   Why **8** to **152** for **x**?
-   Why **8** to **112** for **y**?

```blocks
let foodSprite: Sprite = null
game.onUpdateInterval(3000, () => {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```

## Complete

Good work! Now, we need to add a player. Onward to Part 2!

```ghost
let foodSprite: Sprite = null
game.onUpdateInterval(3000, function () {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```
