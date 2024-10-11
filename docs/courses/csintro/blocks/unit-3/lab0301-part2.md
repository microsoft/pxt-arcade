# Lab 3.1 Part 2: Introduction to loops

## For! @showdialog

In this lab, we will explore a family of loops called *definite loops*.

*Definite loops* are loops that run a specific number of times.

In Part 1, we learned about the **repeat** loop.

Now, we will learn about the **for** loop.

```block
let foodSprite: Sprite = null
for (let index = 0; index < 6; index++) {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
    foodSprite.setPosition(10 + index * 20, 10)
}
```

## What's the same? What's different?

Sometimes, we want to repeat a set of blocks, but we need to make some
calculations based on how many times we've been through the loop.

The simplest tool for this task is the **for** loop.

Look at the code in this project. Run it and see how the sprites appear.

Now, look *closely* at the blocks that create the sprites.

Each sprite uses a pair of blocks.

-    What is the same about the blocks in each pair?
-    What is different in each pair?

Head to the next step when you are ready.

## For! Again!

Did you notice that the *only* difference in each pair is the number
that is multiplied with the **distance** variable?

-    In the first pair, that multiplier is **zero**.
-    In the second pair, the multiplier is **one**.
-    In the next, it is **two**.
-    In the last, it is **three**.

We have a loop that does *exactly* that!
It counts starting at zero, and counts up to a number that you choose.
It's the ``||loops(noclick):for||`` block!

Move to the next step to learn how to use the ``||loops(noclick):for||`` loop
in this project.

## Step aside!

Let's replace these repetitive blocks with a **for** loop.

1.    Drag the blocks that create the sprites off to the side.
We will use a couple of them shortly.
1.    At the bottom of the   
``||loops(noclick):on start||``   
container, add a   
``||loops:for||`` ``||variables(loops):index||``
``||loops:from 0 to (4)||``   
block.
1.    Change the ``||loops(noclick):for||`` loop so that   
``||variables(noclick):index||``   
counts from   
**0** to **3** (or any other number that you like).
1.    Drag **just one pair** of blocks that creates and places a sprite
on the screen into the   
``||loops(noclick):for||`` container.

Run your project and check the simulator. It might not look like it's
working correctly, but it is! We need to make one minor adjustment, though.

Compare your code to the hint before moving forward.

```blocks
let duckSprite: Sprite = null
let spriteX = 15
let spriteY = 10
let distance = 20
for (let index = 0; index <= 4; index++) {
    duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
    duckSprite.setPosition(spriteX + 0 * distance, spriteY)
}
```

## Use the index!

The ``||loops(noclick):for||`` loop uses the ``||variables(noclick):index||`` variable
to count, but we are not using it inside of our loop! Let's fix that.

-    From the top of the   
``||loops(noclick):for||`` container, drag a copy of the   
``||variables(noclick):index||`` variable and drop it into the place
that is being multiplied by   
``||variables(noclick):distance||``.

Run your project again and see that the ducks are in a row again!

Check the hint if you need help.

```blocks
let duckSprite: Sprite = null
let spriteX = 15
let spriteY = 10
let distance = 20
for (let index = 0; index <= 4; index++) {
    duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
    duckSprite.setPosition(spriteX + index * distance, spriteY)
}
```

## Complete! @showdialog

Good work!

Notice how much simpler your code looks now that you've used a
**for** loop!

How might you use this in your own projects?

Try these extensions if you have time:

-    Change the numbers and notice how the sprites are drawn on the screen.
-    Can you generate a single column of sprites instead of a row?
-    Can you generate a series of sprites drawn diagonally?
-    Notice that the loop control variable, ``||variables(noclick):index||``,
is the same shape and color as any other variable.
If you don't like the name of the loop control variable,
you can drop one of your own in its place. Give it a try!
-    Let's say you want to draw a grid of sprites on the screen,
like the image below:   
![Ducks in a grid.](/static/courses/csintro/S01.L03.01.P02.duck_grid.png)   
How might you do that?
-    Create an interesting pattern of sprites.
Challenge your "helping trios" teammates to duplicate your pattern using loops.
Compare your code and see if you came up with different ways to produce
the same pattern.

```template
let spriteX = 15
let spriteY = 10
let distance = 20
let duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
duckSprite.setPosition(spriteX + 0 * distance, spriteY)
duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
duckSprite.setPosition(spriteX + 1 * distance, spriteY)
duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
duckSprite.setPosition(spriteX + 2 * distance, spriteY)
duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
duckSprite.setPosition(spriteX + 3 * distance, spriteY)
```

```ghost
let duckSprite: Sprite = null
let spriteX = 15
let spriteY = 10
let distance = 20
for (let index = 0; index <= 4; index++) {
    duckSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
    duckSprite.setPosition(spriteX + index * distance, spriteY)
}
```