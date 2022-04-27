# BlockOut

Use the arrow keys to bounce the projectile off of your paddle to destroy all the blocks on the screen!

![Game view in simulator](/static/lessons/block-out/working-game.gif)

## Learning Objectives

Learn the basics to a basic bouncing projectile game!

* The concept of sprite
* How to spawn multiple sprites
* Sprite projectile interactions
* Setting and moving a "player"
* Setting a score increment
* Semi-random movement

## Lesson Sections

* [Part One: Creating the Sprites](#part-one-creating-the-sprites)
* [Part Two: Creating the Blocks](#part-two-creating-the-blocks)
* [Part Three: Finishing the Setup](#part-three-finishing-the-setup)
* [Part Four: Ball and Paddle Interactions](#part-four-ball-and-paddle-interactions)
* [Part Five: Directional Bouncing](#part-five-directional-bouncing)
* [Part Six: Creating Block Collisions](#part-six-creating-block-collisions)
* [Part Seven: Ending the Game](#part-seven-ending-the-game)

## Part One: Creating the Sprites

Go to the [MakeCode Arcade](@homeurl@) editor and select **New Project** to create a new game.

Once the editor loads, you will see a green ``||loops:on start||`` block already in the editor Workspace.

At first, we want to create the main player of the game which in our case will be a paddle. Drag a ``||sprites:set mySprite to sprite of kind player||`` from ``||sprites:Sprites||`` and place it in the ``||loops:on start||`` block. Then click on ``||variables:mySprite||`` and select ``rename variable``. Name your variable to ``paddle``. Then in the image editor, click on the ``16x16`` block until it reads ``32x32``. Draw a purple line near the bottom of the image.

![Switching sizes](/static/lessons/block-out/32x32Blockout.gif)

Next, drag a ``||sprites:set mySprite position to x y||`` from ``||sprites:Sprites||`` and put it into the ``||loops:on start||`` block. Set the **x** value to **79** and the **y** value to **100**. Again, from ``||sprites:Sprites||``, drag a ``||sprites:set mySprite stay in screen||`` into the ``||loops:on start||``. Change ``mySprite`` to ``paddle``. Now in ``||controller:Controller||``, grab a ``||controller:move mySprite with buttons||`` and drag it into ``||loops:on start||``. Also, change ``mySprite`` to ``paddle``. Click the **(+)** sign and set the **vx** value to **100** and **vy** value to **0**.

![Player moving on the screen](/static/lessons/block-out/moving-player.gif)

Next, we will make the projectile that will bounce against the paddle, walls, and blocks. Go into ``||sprites:Sprites||`` and grab a ``||sprites:set projectile to projectile from mySprite||`` and then place it in the ``||lopps:on start||``. Click on the image editor and draw a ball. Change ``mySprite`` to ``paddle`` and set **vx** to **50** and **vy** to **-55**. Go to ``||sprites:Sprites||``, grab a ``||sprites:set mySprite stay in screen||``, and drag it into the workspace. Then set the ``mySprite`` to ``projectile`` and then change the ``stay in screen`` to ``destroy on wall``. Keep the toggle set to **OFF**. Go to ``||sprites:Sprites||``, grab a ``||sprites:set projectile bounce on wall on||``, and drag it into ``||loops:on start||``.

```blocks
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setBounceOnWall(true)
```

Congratulations! You have now created the main sprites for the game.

## Part Two: Creating the Blocks

In this part of the lesson we are going to create the blocks. Go into ``||loops:Loops||``, grab a ``||loops:for index from 0 to||``, and drag it into the workspace. Change the field input to **9**. Duplicate the same block and place it inside the first loop. Now change the field input from **9** to **2**. Go into ``||variables:Variables||`` and create a new variable called ``index2``.  Next drag out the ``||variables:index2||`` and place it in the ``input`` of the second ``||loops:for loop||``.

### Creating an Offset

![Block Offset](/static/lessons/block-out/offset.png)

In ``||variables:Variables||`` drag out a ``||variables:set var to||`` and place it in the second ``||loops:for||`` loop. Select the drop down and rename the variable to **x**. From ``||math:Math||``grab a ``||math:_ X _||`` block and pull it into the ``||variables:set x to||`` block. From ``||variables:Variables||`` drag out an ``||variables:index||`` block and drag it into the first field of the ``||math:_ X _||`` block. Set the second field to **18**.

Now, from ``||logic:Logic||``, grab an ``||logic:if then||`` statement and drag it into the second loop. Drag a ``||logic:0 = 0||`` block from ``||logic:Logic||`` and place it inside the ``||logic:if then||`` statement. From ``||math:Math||`` pull out a ``||math:remainder of _ / _||`` block and move it into the first field of the equal statement. From variables, grab ``||variables:index2||`` block and drag it into the first field of the remainder. Set the second field of the remainder to **2**. Lastly, set the end field of the equal statement to **1**.

Now we are going to offset the blocks dependent on the row they are spawned in. From ``||variables:Variables||`` grab a ``||variables:set x to||`` and drag it into the if statement. Grab a ``||math:0 + 0||`` block from math and drag it into the ``||variables:set x to||``. Then in the first field place a ``||math:0 x 0||`` and then from ``||variables:Variables||`` grab a ``||variables:index||`` block and drag it into the first field of the ``||math:0 x 0||``. Now set the second field of the ``||math:0 x 0||`` to **18** and set the second field of the ``||math:0 + 0||`` to **8**.

### ~hint

Your ``||loops:for||`` should look like this.

```blocks
let x=0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
    }
}
```

### ~

### Spawning the Blocks

Now in ``||variables:Variables||``, grab a ``||variables: set x to||`` and place it after the ``||logic:if||`` statement. Select the drop down and then click ``new variable`` and name it ``tilePick``. From ``||math:Math||`` grab a ``||math:pick random||`` and set it to be from **0** to **2**.

Get an ``||logic: if then else||`` from ``||logic:Logic||`` and drag it in after the ``||variables:set tilePick to||``. Click the **(+)** symbol on the new ``||logic:if then else||``. In both of the ``||logic:if then else||`` fields, place a ``||logic:0 = 0||`` block from ``||logic:Logic||``. Then from ``||variables:Variables||``, drag out 2 ``||variables:tilePick||`` blocks and place them in the first field of each of the ``||logic:0 = 0||`` blocks. Set the second field of the first part to **0** and the second field of the second part to **1**.

Then from ``||sprites:Sprites||`` grab a ``||sprites:set mySprite to sprite of kind player||`` block. Select the first drop down and create a new name called ``tile``. Then click ``player`` and select ``add a new kind`` and name it ``block``. Draw a picture of a block in the sprite editor. Duplicate this block and set it in the ``||logic:else if||`` section and the ``||logic:else||`` section. Draw different tiles for each part.

Lastly, from ``||sprites:Sprites||`` grab a ``||sprites:set mySprite position to||`` and drag it in after the ``||logic:if then else if then else||`` block. Click ``mySprite`` and select ``tile``. Then drag from ``||variables:Variables||`` a ``||variables:x||`` block and place it in the ``x`` field of the ``||sprites:set mySprite position to||``. In the ``y`` field drag a ``||math:0 + 0||`` block and place it there. In the first field, drag a ``||math:0 x 0||`` block there and set the second field of the ``||math:0 x 0||`` block to **18**. In the first part of the ``||math:0 x 0||`` block, put in a a ``||variables:index2||`` block from ``||variables:Variables||``. In the last field of the ``||math:0 + 0||`` block set it to **20**.

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
let tile:Sprite=null
let x = 0
let tilePick = 0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
```


## Part Three: Finishing the Setup

Now on to finish the set up of the game. From ``||info:Info||`` grab a ``||info:set score to 0||`` block and drag it into the ``||loops:on start||``. Change the **0** to **1**. From ``||scene:Scene||`` grab a ``||scene:set background color to||`` and set it to ``light pink``. Lastly, from ``||variables:Variables||`` grab a ``||variables:set var to||`` and drag it into ``||loops:on start||``. Click the drop down and hit ``new variable``, and make a variable called **direction**, and set its value to **1**.

```blocks
let direction = 0
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
```

## Part Four: Ball and Paddle Interactions

![Ball and Paddle](/static/lessons/block-out/moving-player.gif)

To create the interaction, go to ``||sprites:Sprites||`` and grab an ``||sprites:on sprite of kind player overlaps othersprite of kind player||`` and drag it anywhere in your workspace. Change the first ``player`` to ``projectile`` and check that the second is set to ``player``. Next, from ``||sprites:Sprites||``, grab a ``||sprites:set mySprite velocity to||`` and place it in the ``||sprites:on sprite of kind player overlaps||``. Drag ``sprite`` from the ``||sprites:overlaps||`` block and drag it into the ``mySprite`` section of the velocity block.

Back in ``||sprites:Sprites||`` grab a ``||sprites:mySprite x||`` block and drag it into the ``vx`` field. Drag the ``sprite`` out of the ``||sprites:overlap||`` block and place it over the ``mySprite`` in the ``vx`` field. Now click the ``x`` drop down and select ``vx (velocity x)``.

From ``||math:Math||`` grab a ``||math:0 x 0||`` block and place it in the ``vy`` section of the velocity block. Set the first field of the block to **-1** and, in ``||sprites:Sprites||``, grab a ``||sprites:mySprite x||`` and drag it into the second field. Click the drop down and select ``vy (velocity y)``. Drag ``sprite`` from the ``||sprites:overlap||`` block and place it over the ``mySprite`` in the ``||sprites:mySprite vy||``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
```


## Part Five: Directional Bouncing

![Directional Bouncing](/static/lessons/block-out/directional-bouncing.gif)

When our ball collides with a block, we want to be able to detect which side the block bounced on. In our implementation, we are going to create a function for this event. To do this, go under ``Advanced`` to find the ``||functions:Functions||`` and click ``Make a Function...``. The function editor then pops up. Type in **getPos** where it says **doSomething**. This will mean the position of the ball relative to the block. Click on ``Sprite`` in the upper bar. A new **parameter** is now added. Name it to **sprite**. Again, click on ``Sprite`` in the upper bar. Another parameter pops up, name it to **otherSprite**.

![Creating Functions](/static/lessons/block-out/creating-functions.gif)

### ~hint

#### The Definition of Parameter

A function can be called anywhere in the code. A function can have parameters of different types. This means that when the function is called, things such as variables can be passed into the function to be modified or edited.

### ~

From ``||logic:Logic||`` grab a ``||logic: if then else||`` block and place it in the function. Now from ``||logic:Logic||``, grab a ``||logic:_ or _||`` block and place it in the ``||logic:if||`` statement.

From ``||logic:Logic||`` grab a ``||logic:0 < 0||`` block and place it in the first field of the ``||logic:_ or _||`` block. Next, in the first field of the ``||logic:0 < 0||`` block, place a ``||sprites:mySprite x||`` from ``||sprites:Sprites||``. Drag ``sprite`` from the function block and place it on the ``mySprite``. In the second field, place a ``||math:0 - 0||`` block from ``||math:Math||``. Set the second field to **8**. In the first part of the ``||math:0-0||`` block, place a ``||sprites:mySprite x||``. Drag an ``otherSprite`` from the function and place it in the ``mySprite``.

Duplicate the entire block (the one that started as jsut the ``||logic:0 < 0||``) and place it in the second field of the ``||logic:or||`` conditional statement. Change the ``<`` sign to a ``>`` sign. Then, in the math block, change the ``-`` sign to a ``+`` sign. In the ``||logic:if||`` statement then place a ``||variables:set var to||`` from ``||variables:Variables||``. Click the dropdown and select ``direction``. Then type in **1**. In the ``||logic:else||`` statement place a  ``||variables:set var to||`` from ``||variables:Variables||``. Click the dropdown and select ``direction``. Then type in **0**.

Congrats, we have now made a function!

```blocks
let direction = 0
function getPos (sprite: Sprite, otherSprite: Sprite) {
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
```

## Part Six: Creating Block Collisions

![Bouncing](/static/lessons/block-out/directional-bouncing.gif)

In our game, when the player collides with a block, the ball should bounce, the block should be destroyed, and the score should increment.

From ``||sprites:Sprites||`` grab a ``||sprites:on sprite of kind player overlaps||`` and place it in the workspace. Change the first kind from ``player`` to ``projectile``. Then for the second kind, change it from kind ``player`` to kind ``block``. From ``||info:Info||`` drag out a ``||info:change score by 1||`` and place it in the new ``||sprites:overlap||`` block. Then in ``||functions:Functions||``, grab a ``||functions:call getPos mySprite mySprite||`` and place it after the ``score`` block.

Now grab an ``||logic:if then else||`` block from ``||logic:Logic||`` and place it after the ``||functions:call getPos||``. From ``||logic:Logic||`` grab a ``||logic:0 = 0||`` block and place it in the ``||logic:if||`` statement. Set the second **0** to **1**. From ``||variables:Variables||`` drag a ``||variables:direction||`` and place it in the spot for the first **0**.

In the first part of the ``||logic:if||`` statement, place a ``||sprites:set mySprite velocity to||`` from ``||sprites:Sprites||``. Drag a ``sprite`` from the ``||sprites:overlaps||`` block and place it over the ``mySprite``. In the ``vx`` field, drag a ``||math:0 x 0||`` block from ``||math:Math||``. In the first field of the ``||math:0 x 0||`` block type in **-1** and in the second field, drag in a ``||sprites:mySprite x||`` from ``||sprites:Sprites||``. Drag a ``sprite`` from the ``||sprites::overlaps||`` block and place it over the ``mySprite``. Then select the drop down and change it to ``vx (velocity x)``. In the ``vy`` section, drag in a ``||math:0 x 0||`` block from ``||math:Math||`` and set the first field to **-1**. Pull in a ``||sprites:mySprite x||`` from ``||sprites:Sprites||``. Drag a ``sprite`` from the ``||sprites:overlaps||`` block and place it over the ``mySprite``. Then select the drop down and change it to ``vy (velocity y)``.

Duplicate the entire ``||sprites:set mySprite velocity to||`` block and place it in the ``||logic:else||`` statement. Drag out the ``vx`` and ``vy`` fields and switch them. In the first field that corresponds to ``vx``, set the drop down to ``vx (velocity x)``. In the second field that corresponds to ``vy``, and inside the ``||math:-1x(sprite)vx velocity x||``, change the drop down to ``vy (velocity y)``.

Lastly, outside of the ``||logic:if||`` statement, drag a ``||sprites:destroy mySprite||`` from ``||sprites:Sprites||``. Drag an ``otherSprite`` from the ``||sprites:overlaps||`` block and place it over the ``mySprite``.

```blocks
let direction = 0
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos(sprite: Sprite, otherSprite: Sprite) {
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    getPos(sprite, otherSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    otherSprite.destroy()
})
```

## Part Seven: Ending the Game

From ``||loops:Loops||`` drag out a ``||loops:forever block||`` and place it anywhere in the workspace. From ``||logic:Logic||`` drag out an ``||logic:if then||`` block and place it in the ``||loops:forever||`` loop. From ``||logic:Logic||`` drag out a ``||logic:0 > 0||`` block and place it in the ``||logic:if||`` statement. Set the second field to **119**. Then from ``||sprites:Sprites||`` drag out a ``||sprites:mySprite x||`` and place it in the first field. Set the ``mySprite`` to ``projectile`` and the ``x`` to ``bottom``. Inside the ``||logic:if||`` statement drag in a ``||game:game over lose||`` block from ``||game:Game||``. Click the **(+)** symbol and set the effect to ``slash``.

Then from ``||logic:Logic||``, drag out an ``||logic:if then||`` block and place it in the ``||loops:forever||`` loop. From ``||logic:Logic||`` drag out a ``||logic:0 = 0||`` block and place it in the ``||logic:if||`` statement. Set the second field to **30**. For the first field, drag in ``||info:score||`` from ``||info:Info||``. Inside the ``|logic:if||`` statement drag in a ``||game:game over lose||`` block from ``||game:Game||``. Switch the toggle to **WIN** and then click the **(+)** symbol set the effect to ``brighten``.

```blocks
info.setScore(1)
let projectile: Sprite = null
forever(function () {
    if (projectile.bottom > 119) {
        game.over(false, effects.slash)
    }
    if (info.score() == 2) {
        game.over(true, effects.confetti)
    }
})
```

Now we have a fully functioning game!

## Final Game

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos (sprite: Sprite, otherSprite: Sprite) {
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    getPos(sprite, otherSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    otherSprite.destroy()
})
let direction = 0
let tile: Sprite = null
let tilePick = 0
let x = 0
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setBounceOnWall(true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
forever(function () {
    if (projectile.bottom > 119) {
        game.over(false, effects.slash)
    }
    if (info.score() == 30) {
        game.over(true, effects.bubbles)
    }
})
```

![Working Game](/static/lessons/block-out/working-game.gif)
