# Activity: Button Speed   

Games often need to keep multiple variables to keep track of how well a player is doing. When programming in blocks, there are many ways game code needs to increase (or decrease) a count. 

We refer to increasing a count as incrementing it, and decreasing count as decrementing it. We will update our game score by using the  ``||variables:change by||`` block.

In these activities, the student will be introduced to:
* ``||loops:repeat||`` loops
* ``||loops:for index||`` loops
* Variables with ``||variables:increase by||``
* ``||game:on game update every||``
* Info ``||info:set score||``
* Game ``||info:countdown||``

## Concept: Increase By (increment)

# TODO: Create Video overview + increment.  Provide high level script outline.

* Variables with increase by  
* Game update every  
* Info set score  

## Examples: Incrementing a Variable

https://youtu.be/fOiJJuJteMs

[Alternative Video Location](https://aka.ms/40544a-incrementloop1)

1. Review each example below
2. Create the sample and run the code
3. Save the code for the start of the next task (name it "increment") 
4. Note how changing the ``||variables:change by||`` amount changes the game score

### Example #1a: Increment with On Game Update 

```blocks  
let count = 0
game.onUpdateInterval(500, function () {
    count += 1
    info.setScore(count)
})
```

### Example #1b: Increment with "A" Button  

```blocks  
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})
```  

### Example #1c: Increment with a Countdown   

```blocks
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})

game.splash("Press \"A\" FAST", "GO!")
info.startCountdown(5)
```

## Student Task #1: Make the game have a cheering coach

1. Start with code from example #1c
2. Add a sprite to coach the player
3. Use ``||sprites:say("")||`` to give words of encouragement, setting a short display time (for example, 500 ms)
4. Make ``||sprites:say("")||`` so it flashes by placing it in ``||game:on game update(1000)||``
4. **Challenge:** Have the sprite coach give the current score in addition to a cheer ("Faster!")

### Example #2: Increment to make a spiral

https://youtu.be/ilbOGc6oFXk

[Alternative Video Location](https://aka.ms/40544a-incrementloop2)

A spiral increases the length of each side. In the example below the sides are 5, 6, 7 and 8 pixels long. To continue the spiral we will need to continue to make each side longer than the last. Notice that some of the lengths are negative values (in order to move up or move left).

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 8 . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 8 9 8 . . . 
. . . 8 8 8 8 8 8 8 9 9 9 8 . . 
. . 8 8 8 8 8 8 8 8 8 9 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 10; i++) {
    pause(200)
    mySprite.x += 5
    pause(200)
    mySprite.y += 6
    pause(200)
    mySprite.x += -7
    pause(200)
    mySprite.y += -8
}
```

## Student Task #2: Move in a spiral

We want to move the sprite in the following blocks in a spiral - starting small in a square like pattern, and moving further and further away as the iterations move on. Currently, the sprite drifts up and to the left. We need to increase the distance that the sprite travels on a side for each iteration so that it moves further for each side.

![spiral image](/static/courses/csintro1/loops/spiral.png)

1. Start with the example above, add in a new variable - we'll refer to it as ``||variables:increase||``. 
2. Use the ``||variables:change by||`` block to increment ``||variables:increase||`` by 5 at the end of the code block for the loop.
3. Add math expressions like ``||math:+||`` and ``||math:-||`` to use the variable ``||variables:increase||`` to increase the distance the sprite moves on each step - that might look like the code in this ``||loops:on start||`` block below:

```blocks
let mySprite: Sprite = null
let increase = 0
mySprite.x += -7 - increase
increase += 5
```

The code above will cause mySprite X movement to move farther by 5 on each loop as ``||variables:increase||`` becomes 5 larger each loop.  In the small example code above we subtract ``||variables:increase||`` from -7 as in  `-7 - increase`. The result is used to update the sprite's ``||sprites:x||`` coordinate.  

So we can see the following for how one of the spiral sides moves farther each loop

* Loop 1: mySprite x coordinate change = **-7** 
* Loop 2: mySprite X coordinate change = -7 - 5 = **-12** 
* Loop 3: mySprite X coordinate change = -7 - 10 - **-17**

in the task we will need to update all sides of the spiral

### Example #3: For Loop

https://youtu.be/J0sB0HFxIyQ

[Alternative Video Location](https://aka.ms/40544a-incrementloop3)

The ``||loops:for||`` loop is another common loop.  This loop has a counter variable built in that defaults as ``||variables:index||`` in blocks.  The value of index is incremented between the values entered in the for loop.  We can use the ``||variables:index||`` variable inside of the body of the ``||loops:for||`` loop.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . 9 2 9 . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index <= 4; index++) {
    mySprite.say("" + index, 500)
    pause(1000)
}
```

The ``||loops:for index from 0 to 4||`` loop behaves similar to the repeat loop, but gives  access to a variable inside the loop called index. Each iteration this value will be updated. 

* on the first iteration ``||variables:index||`` will be 0
* on the second iteration ``||variables:index||`` will be 1
* and so on, until ``||variables:index||`` reaches the final iteration - with the default value of 4

## Student Task #3: for index loops

In this task we need to use ``||loops:for||`` loop to help in implementing the behavior from task #2.

This ``||loops:for||`` will provide the variable ``||variables:index||`` similar to how we used the ``||variables:increase||`` variable in ttask #2. We need to clean up the task #2 code by switching to use a ``||loops:for||`` block.

1. Add a ``||loops:for||`` to your task #2 solution.  **Change the end value in the** ``||loops:for index from 0 to 4||`` ** block from `4` to `10`**.  Your code should now behave like it did before you made any modifications.
2. Replace how we define the ``||variables:increase||`` variable.  We won't increment the variable any more but will **set** the value of ``||variables:increase||`` to ``||variables:index||`` multiplied by **5** inside of the  ``||loops:for index from 0 to 10||`` block. 

```blocks
let increase = 0
let index = 0
increase = index * 5
```

## What did we learn?

1. In task #3, you may have noticed that when you switched from a repeat loop to a for loop, the sprite actually continued in it's spiral for a little bit longer than it did before. Why is that? 
2. Is there a difference between how many times ``||loops:repeat 0 times||`` and ``||loops:for index from 0 to 0||`` will run? When might you want to choose to use a ``||loops:repeat||`` loop over a ``||loops:for index||`` loop?