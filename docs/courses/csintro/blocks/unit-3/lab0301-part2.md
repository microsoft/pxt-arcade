# Lab 3.1 Part 2: Introduction to loops
### @explicitHints true

## For! @showdialog

In this lab, we're exploring *definite loops*. Definite loops are loops that run a specific number of times.

In Part 1, we learned about the **repeat** loop.

Now, we will learn about the **for** loop.


```block
let foodSprite: Sprite = null
for (let index = 0; index < 6; index++) {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
    foodSprite.setPosition(10 + index * 20, 10)
}
```
<br/>

---

<br/>

![Lab 3.1.2](https://arcade.makecode.com/api/_9McPiWefHahc/thumb)



## What's the same? What's different?

Sometimes we want to make calculations in our code that require knowing how many times we've been through a loop.

The simplest tool for this is the **for** loop.

---


Look at the code in this project. Run it and see how the sprites appear.

Now, look *closely* at the blocks that create the sprites.

Each sprite uses a pair of blocks.

-    What is the same in each pair?
-    What is different in each pair?

---


Head to the next step when you are ready.

## For! (Again)

Did you notice that the *only* difference in each pair is the multiplier 
that goes with the **distance** variable?

---


-    In the first pair, that multiplier is **zero**.
-    In the second pair, the multiplier is **one**.
-    In the next, it's **two**.
-    In the last, it's **three**.

We have a loop that can help us with this!
It counts from zero to a number you choose.
It's the ``||loops(noclick):for||`` block!

---


Move to the next step to learn how to use a ``||loops(noclick):for||`` loop
in this project.

## Step aside!

Let's replace these repetitive blocks with a **for** loop.

---


1.    Drag the blocks that create the sprites off to the side.
We'll use a couple of them shortly.
1.    At the bottom of the <br/>
``||loops(noclick):on start||`` <br/>
container, add a <br/>
``||loops:for [index] from 0 to (4)||`` <br/>
block.
1.    Change the ``||loops(noclick):for||`` loop so that <br/>
``||variables(noclick):index||``
counts from 
**0** to **3**.
1.    Drag **just one pair** of our sprite creation and position blocks into the
``||loops(noclick):for||`` container.

---

Run your project and check the simulator. It might not look like it's
working correctly, but it is! We need to make one minor adjustment, though.

Compare your code to the hint before moving forward.

#### ~ tutorialhint

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

The ``||loops(noclick):for||`` loop keeps track of how many times it has run
and stores that number in the ``||variables(noclick):index||`` 
variable...but we're not using that in our loop yet! 

Let's fix that.

---


-   Drag a copy of the
``||variables(noclick):index||`` variable from the title of the
``||loops(noclick):for||`` loop, and into the space that holds the multiplier for
``||variables(noclick):distance||``.

---

Run your project again and see that the ducks are back in a row!

Check the hint carefully if you need help on this step.

#### ~ tutorialhint

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

**Good work!** <br/>
🎊 🎊 🎊


Notice how much cleaner your code looks now that you've used a
**for** loop?

How might you use this in future projects?

---


Try these extensions if you have time:

-    Change the for loop number and notice how the sprites are drawn on the screen.
-    Can you generate a single column of sprites instead of a row?
-    Can you generate a series of sprites drawn diagonally?
-    Notice that the loop control variable, ``||variables(noclick):index||``,
is the same shape and color as any other variable?
If you don't like the name of the loop control variable,
you can rename it, just like any other. Give it a try!
-    Let's say you want to draw a grid of sprites on the screen<br/>
(like the image below:) <br/>
![Ducks in a grid.](/static/courses/csintro/S01.L03.01.P02.duck_grid.png) <br/>
How might you do that?
-    Create an interesting pattern of sprites using loops.
Challenge your "helping trios" teammates to duplicate your pattern.
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