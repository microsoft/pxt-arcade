# Cherry Pickr

![Game view in simulator](/static/lessons/cherry-pickr/cherry-pickr.png)

Collect as many cherries as you can before time runs out!

## Learning Objective

Learn the basic requirements to build a functional game!

* The concept of a sprite
* How to set up a tilemap 
* Spawning cherries on the tilemap
* Setting and moving a character
* Designing the map
* Setting up a countdown

## Lesson Sections

* [Part One: Start the Game](#part-one-start-the-game)
* [Part Two: Set the Background](#part-two-set-the-background)
* [Part Three: Create and Move the Player](#part-three-create-and-move-the-player)
* [Part Four: Spawn Cherries on the Screen](#part-four-spawn-cherries-on-the-screen)
* [Part Five: Keep Track of the Score and Time](#part-five-keep-track-of-the-score-and-time)
* [Part Six: Picking Up Cherries](#part-six-picking-up-cherries)

## Part One: Start the Game

Go to the [MakeCode Arcade](@homeurl@) editor and select **New Project** to begin creating a new game.

Once the editor loads, you will see a green ``||loops:on start||`` block already placed in the editor Workspace.

We want the game to start with a _Title Screen_ to let the player know what game they are playing. To do that, we go to ``||game:Game||`` in the Toolbox and under the **Prompt** category, drag a ``||game:splash||`` block into the ``||loops:on start||`` block. Give your game a title and put in as the text for the ``||game:splash||`` block.

```blocks
game.splash("Cherry Pickr")
```

## Part Two: Set the Background

To set the background, click on ``||scene:Scene||`` in the Toolbox and drag the ``||scene:set tilemap to||`` block into the ``||loops:on start||`` block. Go ahead and click the gray box and draw whatever you want the background to look like .

```blocks
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
```

## Part Three: Create and Move the Player

### Creating

Our next step is to create a movable character. To do this, go to  ``||sprites:Sprites||`` in the Toolbox under the **Create** category and drag a ``||sprites:set mySprite to||`` block into ``||loops:on start|``.

Next, draw what you want the player to look like. Click the square grey box inside the ``||sprites:set mySprite to||`` block. A paint editor will pop up and this is where you will draw what you want your player to look like.

```blocks
let mySprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
```

OK, We've created our player!

### ~hint

#### Renaming the sprite variable

We can rename our character from ``mySprite`` to ``player`` (or anything else that you'd like) by clicking the drop down anywhere you see the ``mySprite`` variable and selecting ``Rename variable...``. If you change the variable's name, keep that in mind as you go through the rest of this lesson. Each time you see ``mySprite``, use your variable name instead.

### ~

### Moving

To move the player, click ``||controller:Controller||`` in the Toolbox and drag out a ``||controller:control sprite||`` block into the ``||loops:on start||`` block. Make sure the variable selected is ``mySprite``.

Then go to ``||scene:Scene||`` and under the **Camera** category, drag the ``||scene:camera follow sprite||`` block into the ``||loops:on start||`` block. Again, make sure the variable selected is ``mySprite``.

We do this so that when the player moves around the tilemap, they will remain at the center of the screen.
To make the player move faster, set the ``vx`` and ``vy`` to `150`.

```blocks
let mySprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
```

Now we are able to move our player! In the simulator, test out the movement of the player.

![Player moving on the screen](/static/lessons/cherry-pickr/movingplayer.gif)

## Part Four: Spawn Cherries on the Screen

We want cherries to appear randomly on the screen every half a second. In order to do this, go into ``||game:Game||`` in the Toolbox and drag out the ``||game:on game update every||`` block onto the editor.

Next we will define what a cherry is, by going to ``||sprites:Sprites||`` and dragging out the ``||sprites:set mySprite to||`` block inside the ``||game:on game update every||`` block.

Click the drop down and rename the variable to ``||variables:cherry||``. Click the gray square box to draw what you want your item to look like. Then click the drop down that says ``||sprites:Player||`` and change the kind ``||sprites:Food||``.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
})
```

To spawn cherries on the screen, we need to set a random x and y coordinate. Go to the ``||sprites:Sprites||`` tab and drag the ``||sprites:set mySprite position to||`` inside the ``||sprites:on game update every||`` block. Change ``||variables:mySprite||`` to ``||variables:cherry||``.

To make the cherry spawn randomly on the tilemap, go to the ``||math:Math||`` tab and drag one ``||math:pick random||`` block into the x-value of ``||sprites:set item position to||``. Drag another into the y-value.

Change the values for the first ``||math:pick random||`` block to `0` and `160`. Change the values for the second ``||math:pick random||`` block to `0` and `120`.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

## Part Five: Keep Track of the Score and Time

### Keep Track of Time

We need to keep track of how long the game will last. To do this, go to ``||info:Info||`` and drag the ``||info:start countdown||`` into the ``||loops:on start||`` block. Click on the `10` and change it to `60` so that the game will end after 60 seconds.

### Keep Track of the Score

The next part is to keep track of the score. Go to ``||info:Info||`` and drag the ``||info:set score to||`` into the ``||loops:on start||`` block. Leave the value at `0` since the player doesn't have any points at the beginning of the game.

We will add to the score in [Part Six: Picking Up Cherries](#part-six-picking-up-cherries).

The game simulator will automatically show the timer and score at the top of the screen.

```blocks
let mySprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
```

## Part Six: Picking Up Cherries

The last task is to let our player to actually collect cherries. Go to ``||sprites:Sprites||`` and, from the **Overlaps** category, drag out ``||sprites:on sprite of kind Player overlaps||``. Change the second ``||sprites:Player||`` kind to ``||sprites:Food||``. The text for the block should now say ``||sprites:on sprite of kind Player overlaps otherSprite of kind Food||``.

This block will run every time a ``||sprites:Player||`` sprite overlaps a ``||sprites:Food||`` sprite.

### Changing the Score

To change the score when the cherry is touched, go to the ``||info:Info||`` tab and drag the ``||info:change score by||`` block into the ``||sprites:on sprite of kind Player overlaps||`` block. Leave the value at `1`.

### Removing the Item

When this block runs, two new variables are created: ``||variables:sprite||`` and ``||variables:otherSprite||``. We need to remove ``||variables:otherSprite||`` from the game, which is the ``||sprites:Food||`` that collided with the ``||sprites:Player||``.

To do so, go to ``||sprites:Sprites||`` in the Toolbox and, under **Effects**, drag the ``||sprites:destroy||`` block into the ``||sprites:on sprite of kind Player overlaps||`` block. Then, drag the ``||variables:otherSprite||`` variable from the top of the block into the ``||sprites:destroy||`` block.

You might notice that the ``||variables:mySprite||`` block is removed from the ``||sprites:destroy||`` block when you replace it with ``||variables:otherSprite||``. You can delete that block by dragging it to the Toolbox.

```blocks
let cherry: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

And now we have a fully functioning game!

![Working Game](/static/lessons/cherry-pickr/workinggame.gif)

### ~hint

#### Local variables

The variables ``||variables:sprite||`` and ``||variables:otherSprite||`` are called _local variables_. They are created when the block for the collision runs, and they can only be used inside of that block. When that block runs, the ``||variables:sprite||`` variable holds the ``||sprites:Player||`` sprite involved in the collision, and the ``||variables:otherSprite||`` variable holds the ``||sprites:Food||`` sprite.

### ~

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile5": {
        "data": "hwQQABAAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile6": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile7": {
        "data": "hwQQABAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile8": {
        "data": "hwQQABAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDIwMjAyMDIwMjAyMDIwMzAzMDMwMzAzMDMwMzAzMDMwMzA0MDQwNDA0MDQwNDA0MDQwNDA0MDUwNTA1MDUwNTA1MDUwNTA1MDUwNjA2MDYwNjA2MDYwNjA2MDYwNjA3MDcwNzA3MDcwNzA3MDcwNzA3MDgwODA4MDgwODA4MDgwODA4MDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5",
            "myTiles.tile6",
            "myTiles.tile7",
            "myTiles.tile8"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```