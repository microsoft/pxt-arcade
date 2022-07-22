# Activity: Loops Intro

When writing code, we often want to repeat the same action. Using loops, we can reduce redundancy in our code - that is, we can avoid writing the same code multiple times. 

An example in visualizing a loop is to look at multiplication of integers as repeated addition. The repeated addition of the integer 4 added together five times:

> 4 + 4 + 4 + 4 + 4  is equal to 4\*5

We reduced the redundancy in the expression 

> 4 + 4 + 4 + 4 + 4 

by using a different operator (multiplication: **`*`**) to express the same overall expression.

We can use loops to solve tasks in a similar way. The following code leaves the variable ``||variables:output||`` with the same output as the expressions above.

```blocks
let output = 0
for (let i = 0; i < 5; i++) {
    output += 4
}
game.splash("5x4=" + output)
```

In this activity students will be introduced to:

* Sprite motion with loops
* ``||loops:repeat||`` loop

## Concept: Motion with loops

Start off by trying to solve a small task: slowly move a ghost from the center of the screen towards the bottom right corner.

## Example #1: Moving a Ghost (the long way)

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/ifq1MpMeP2k)

1. Open the sample code below
2. Run the code. The ghost should scroll off to the bottom right area of the screen and peek just over the edge
3. Review the blocks that caused this to happen. What would you need to add if the screen was twice as large as it is?

```blocks
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
sprite.x += 5
pause(100)
sprite.y += 5
pause(100)
```

## Student Task #1: Move to the upper left corner, and move faster

1. Reuse the code from the previous example
2. Make the sprite move up and to the left instead - to do so, change all movements to be in the opposite direction
3. Change the ``||loops:pause||`` between each step to be only 50 ms, instead of 100 - we decided we want the ghost to be a little bit faster than it was

## Concept: Moving a sprite using the repeat block loop

When completing the last task, you likely noticed that you were doing the same action repeatedly - moving in one direction, pausing, moving in another, pausing, and then repeating that. Instead of doing that by inserting the same chunk of code multiple times, we can, by using loops, ``||loops:repeat||`` that chunk of code more easily.

## Student Task #2: Add a second sprite using loops

We now want to add in a second ghost that moves towards the bottom right like in the first example.

1. Add in a second sprite
2. Make the second sprite move in the opposite direction of the current sprite, with each step immediately following the current sprite

### ~hint

The loop body is the code that is surrounded by the loop. We need to add more things into the **body** of the loop. 

Start with the code in the example. The solution isn't much different from the example - we just need to add to the code for the second sprite in the body or the same loop.

### ~

## Student Task #3: Boomerang

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/38kp5N8lIwk)

1. Add a single loop to the following code so that the boomerang goes to the right 50 pixels over the period of two seconds
2. Make the boomerang return to its original location over the course of two seconds using a loop
3. **Challenge:** use the ``||images:flip picture horizontally||`` block inside the loops to make it appear like the boomerang is rotating as it flies

### ~hint

Motion and flips will both occur very quickly unless you include the ``||loops:pause||`` in the loop.

### ~

```blocks
let boomerang: Sprite = null
boomerang = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . 4 5 5 4 . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
boomerang.x += 5
pause(200)
```

## What did we learn?

1. Describe how a ``||loops:repeat||`` block makes programming easier by reducing code repetition. Use an example.
2. Explain how it is easier (or harder) to add in a second sprite to the code inside of the loop than it would have been to add it in the prior (loop-less) version? Why?
3. Did you use more than one ``||loops:repeat||`` in any of the tasks above? Why might you want to have one loop after another, rather than just combining them into a single loop?

### [Teacher Material](/courses/csintro1/about/teachers)
