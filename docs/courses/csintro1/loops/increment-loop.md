# Activity: Button Speed

Games often need to keep multiple variables to keep track of how well a player is doing. When programming in blocks, there are many ways game code needs to increase (or decrease) a count. 

We refer to increasing a count as incrementing it, and decreasing count as decrementing it. We will update our game score by using the ``||variables:change by||`` block.

In these activities, the student will be introduced to:

* ``||loops:repeat||`` loops
* ``||loops:for index||`` loops
* Variables with ``||variables:change by||``
* ``||game:on game update every||``
* Info ``||info:set score||``
* Game ``||info:countdown||``

## Concept: Increase By (increment) 

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/Gcu13oTP1Tw)

## Examples: Incrementing a Variable

1. Review each example below
2. Create a new project and name it "increment"
3. Create the sample code and run the code
4. Note how changing the ``||variables:change by||`` amount changes the game score 

### Example #1a: Increment with ``||game:on game update every||`` #example-1a

```blocks
let count = 0
game.onUpdateInterval(500, function () {
    count += 1
    info.setScore(count)
})
```

### Example #1b: Increment with "A" Button #example-1b

```blocks
let count = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    count += 1
    info.setScore(count)
})
```

### Example #1c: Increment with a Countdown #example-1c

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

1. Start with code from [example #1c](#example-1c)
2. Add a sprite to coach the player
3. Use ``||sprites:say||`` to give words of encouragement, setting a short display time (for example, 500 ms)
4. Make ``||sprites:say||`` so it flashes by placing it in ``||game:on game update every 1000 ms||``
4. **Challenge:** have the sprite coach give the current score in addition to a cheer ("Faster!")

### Example #2: Increment to make a spiral #example-2

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/rpmKVYNv7uI)

A spiral increases the length of each side. In the example below the sides are 5, 6, 7 and 8 pixels long. To continue the spiral we will need to continue to make each side longer than the last. Notice that some of the lengths are negative values (these are in order to move up or move left).

```blocks
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

## Student Task #2: Move in a spiral #task-2

We want to move a sprite in a spiral - starting small in a square like pattern, and moving further and further away as the iteration process continues. Currently, the sprite drifts up and to the left. We need to increase the distance that the sprite travels on a side for each iteration so that it moves further for each side.

![spiral image](/static/courses/csintro1/loops/spiral.png)

1. Start with the code from [example #2](#example-2), add in a new variable ``||variables:increase||``
2. Use the ``||variables:change by||`` block to increment ``||variables:increase||`` by 5 at the end of the code block for the loop
3. Add math expressions like `+` and `-` to use the variable ``||variables:increase||`` to increase the distance the sprite moves on each step

### ~hint

Part 3 might look like the code below:

```block
let mySprite: Sprite = null
let increase = 0
mySprite.x += -7 - increase
increase += 5
```

### ~

The code above will cause the `X` position for ``||variables:mySprite||`` to move farther by 5 on each loop as ``||variables:increase||`` becomes 5 larger each time in the loop. In the small example code above we subtract ``||variables:increase||`` from -7 (as in `-7 - increase`). The result is used to update the sprite's ``||sprites:x||`` coordinate. 

So we can see the following for how one of the spiral sides moves farther each loop

>* Loop 1: mySprite X coordinate change = **-7** 
>* Loop 2: mySprite X coordinate change = -7 - 5 = **-12** 
>* Loop 3: mySprite X coordinate change = -7 - 10 - **-17**

In the following task we will need to update all sides of the spiral.

### Example #3: For Loop

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/5cN4cDrRt88)

The ``||loops:for||`` loop is another common loop. This loop has a counter variable built in that has the default name ``||variables:index||`` in blocks. The value of ``||variables:index||`` is incremented between the values entered in the ``||loops:for||`` loop. We can use the ``||variables:index||`` variable inside of the body of the ``||loops:for||`` loop.

```blocks
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

The ``||loops:for index from 0 to 4||`` loop behaves similar to the repeat loop, but gives access to a variable inside the loop called ``||variables:index||``. Each iteration this value will be updated. 

* on the first iteration ``||variables:index||`` will be 0
* on the second iteration ``||variables:index||`` will be 1
* and so on, until ``||variables:index||`` reaches the final iteration - with the default value of 4

## Student Task #3: ``||loops:for index||`` loops #task-3

In this task we need to use a ``||loops:for||`` loop to help in implementing the behavior from [task #2](#task-2).

This ``||loops:for||`` will provide the variable ``||variables:index||`` for use similar to the ``||variables:increase||`` variable in [task #2](#task-2). We need to clean up the [task #2](#task-2) code by switching to a ``||loops:for||`` block.

1. Add a ``||loops:for||`` to your [task #2](#task-2) solution. Change the end value in the ``||loops:for index from 0 to 4||`` block from `4` to `10`. Your code should now behave like it did before you made any modifications
2. Change how we define the ``||variables:increase||`` variable. We won't increment the variable any more but we'll **set** the value of ``||variables:increase||`` to ``||variables:index||`` multiplied by **5** inside of the ``||loops:for index from 0 to 10||`` block

```blocks
let increase = 0
let index = 0
increase = index * 5
```

## What did we learn?

1. In [task #3](#task-3), you may have noticed that when you switched from a ``||loops:repeat||`` loop to a ``||loops:for index||`` loop, the sprite actually continued in it's spiral for a little bit longer than it did before. Why is that? 
2. Is there a difference between how many times ``||loops:repeat 0 times||`` and ``||loops:for index from 0 to 0||`` will run? When might you want to choose to use a ``||loops:repeat||`` loop over a ``||loops:for index||`` loop?

### [Teacher Material](/courses/csintro1/about/teachers)
