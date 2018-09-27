# Loops Practice

## Student Task #1: Risky Life Bar

In this example, we'll be making a game that randomly chooses how much life we have left. Any button press activates a round of this game, where a random number (0 to 5 inclusive) is chosen to be the new amount of health left for the game. Naturally if 0 is chosen, the game will know to end because we lost all our health. If any other number is chosen, we would continue to loop this process of randomly setting the health left 2 more times. If the loop finishes, then the player should get a point for surviving that round.

The next section will describe specific steps for creating the game described above. Feel free to try to skip the steps if you want to challenge yourself and just make it based off the english description.

1. On any button press, add a loop block that will run 3 times.
2. Inside the loop, make it so that the life left is reset each time through the loop. It should be set to a random value from 0 to 5 inclusive. Also add a pause for 1 second after doing this so we can see the effect.
3. Make it so that after each round (surviving the randomized health trials) the score increases by one.

## Student Task #2: Moving Sprites with Loops

As we saw in the fundamentals lesson on loops, one application of loops is to repeatedly change the x and y location of a sprite, which makes it gradually move. Our end goal is to make our sprite gradually move clockwise in a square across the whole screen. We can break it down into the following steps:

1. Make a sprite of your choice and start it in the upper left corner (setting its x and y to 8 should be about right.)

2. We have to decide when we want our square movement to happen - for now we'll say this will all happen on-any-button-press, so pull out one of those blocks and we'll begin putting blocks of code in there.

3. Make the sprite gradually move to the right. We know that gradual movement is just made up of a bunch of smaller movements that are repeated, so we know we're going to use a loop here. Let's arbitrarily make the loop run 10+ times and then change by an x offset that makes the movement look good to you. To actually see the movement be gradual, be sure to add a pause 100ms (or longer) after you change the position. Try this out - your sprite should gradually move to the right when you press any key.
4. Repeat this process so that after the sprite finishes its loop for moving to the right, it immediately begins a loop to move down. Then after that a loop to go left and then finally a loop to go back upwards to the start. (The only difference between these loops should be the choice of changing x/y and the values used to change by.) At this point a button press should take your sprite all the way around its clockwise square path.
5. Instead of on button press activate the square movement, let's use another loop. Use the forever block and put the code we wrote inside there. Now our sprite will endlessly go along our square path!

### ~hint

Note: You may have noticed that this exercise seems awfully familiar in result to some things we've used before: vx and vy! It turns out that vx and vy really are equivalent in concept to what we wrote blocks for in this past exercise. Try playing with the pause time and how much the x and y position change by each loop iteration. You'll find that a very smooth animation can be achieved with the right values for those two parameters.

### ~

6. **Challenge:** Move your sprite in other shapes besides a square (triangles, circles). You could also try to move multiple sprites at once and see how that turns out.

## Student Task #3: Drawing multiple sprites with loops

For this exercise we're not going to use loops to chose movement, but rather loops to do multiple drawings. Overview: make it so that on any button press, we draw 3 of a sprite (flower/star?) in random locations (Don't worry about overlapping / duplication but do keep boundaries and grid size in mind).

1. On any button press, make your sprite appear at a random location.
2. We know that the sprite needs to appear 3 times total, and we just wrote the code for it to appear randomly once. Let's put the previous code we have into a loop that runs 3 times. 

## Student Task #4: Drawing a line of sprites with loops

Create functions to draw sprites in a line for a row (across) and in a column (up and down).

1. Create a small sprite (8x8)
2. Create a function using a loop that will create a column of 4 of the sprites
    * give the first sprite at a **y** coordinate of 25
    * place each sprite 15 pixels farther down the game screen
3. Create a function using a loop that will create a row of 4 of the sprites
    * give the first sprite at a **x** coordinate of 20
    * place each sprite 15 pixels farther down the game screen
4. make the program call both the row and the column functions
6. **Challenge:** Using the row function, create a 4x4 grid of sprites

### ~hint

To set a row, one on top of another, we need to change the **y** coordinate for each row so each row is created at a distance from the previous row.

### ~
