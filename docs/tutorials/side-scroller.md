# Car race tutorial

Create a side-scrolling car racing game to jump over obstacles and make it to the finish line.

![Car race game play](/static/tutorials/car-race.gif)

## Step 1 - Set the background color

First, let’s set the color of the background for our racing game. From the ``||scene:Scene||`` Toolbox drawer, drag a ``||scene:set background color||`` block onto the Workspace. Drop it into the ``||loops:on start||`` block.

In the ``||scene:set background color||`` block, click on the grey oval to select a color.

![Background color](/static/tutorials/side-scroller/background-color.png)

```blocks
scene.setBackgroundColor(6)
```

## Step 2 - Create the tilemap

Now let’s use a tile map to represent the road for our game. From the ``||scene:Scene||`` Toolbox drawer, in the **Tiles** category, drag a ``||scene:set tilemap||`` block into the ``||loops:on start||`` block, after the ``||scene:set background color||`` block.

![Set tilemap](/static/tutorials/side-scroller/set-tilemap.png)

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level_0`)
```

## Step 3 - Set the canvas size

In the ``||scene:set tilemap||`` block, click on the grey square to open up the Tilemap Editor.

In the bottom left corner, set the dimensions for the canvas to **50** by **8** pixels. This will make our game background very wide and short.

![Canvas size](/static/tutorials/side-scroller/canvas-size.png)

## Step 4 - Draw the road

Select a **tile** from the Tile Gallery or draw your own tile to represent the road for your race. You will notice that there is a road tile in the **Miscellaneous** part of the Tile Gallery that you can use.

Click on the **Pencil** icon to draw the road along the bottom of your Tilemap canvas.

![Road tile](/static/tutorials/side-scroller/road-tile.png)

## Step 5 - Create obstacles

Go back to the Tilemap Editor again by clicking on the square in the ``||scene:set tilemap||`` block. This time we are going to create an obstacle for your car to jump over.

Select a tile from the Gallery or draw your own tile to represent an obstacle – this could be water, hot lava or spikes!

Place up to three obstacle tiles in a row at various points in the middle of your road.

![Obstacles](/static/tutorials/side-scroller/obstacles.png)

## Step 6 - Create finish line

Open up the Tilemap Editor again by clicking on the square in the ``||scene:set tilemap||`` block. Now we are going to create the finish line for our race.

Select a tile from the Gallery or draw your own tile to represent the finish line and draw it along the right side of our tilemap canvas.

![Finish line](/static/tutorials/side-scroller/finish-line.png)

## Step 7 - Draw the walls

Go one more time to the Tilemap Editor. The last thing we’re going to do in our tilemap is to add walls on the road for our car to drive on.

Click on the **Wall** tool, then draw along the road tiles.

![Walls](/static/tutorials/side-scroller/walls.png)


## Step 8 - Create a player sprite

From the ``||sprites:Sprites||`` Toolbox drawer, drag a ``||variables:set mySprite||`` block into the ``||loops:on start||`` block after the ``||scene:set tilemap||`` block.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
```

## Step 9 - Design your car sprite

In the ``||sprites:sprite||`` block, click on the grey image oval and select an image from the Gallery or draw your own **Car** sprite.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d 3 3 3 3 3 3 c . . . . 
    . . . c d 3 3 3 3 3 3 c c . . . 
    . . c c d d d d d d 3 c c d . . 
    . . c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
```

## Step 10 - Add gravity

Let’s add code to simulate gravity pulling our car down. We can do this by adding an acceleration force to our car.

From the ``||sprites:Sprites||`` Toolbox drawer, drag a ``||sprites:set mySprite x to 0||`` block and drop after the ``||variables:set mySprite||`` block.

## Step 11 - Set acceleration

In the ``||sprites:set mySprite x to 0||`` block, click on the ``||sprites:x||`` property drop-down menu and select ``||sprites:ay (accleration Y)||`` along the vertical axis. Set the value to be ``400``. This will pull our car down, simulating gravity.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d 3 3 3 3 3 3 c . . . . 
    . . . c d 3 3 3 3 3 3 c c . . . 
    . . c c d d d d d d 3 c c d . . 
    . . c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
```

## Step 12 - Make the car move

Now let’s add code that will make our car drive forward automatically.

From the ``||sprites:Sprites||`` Toolbox drawer, drag another ``||sprites:set mySprite x to 0||`` block into the ``||loops:on start||`` block. This time, click on the x property drop-down menu and select ``||sprites:vx (velocity x)||`` along the X horizontal axis. Set the value to be ``100``. This will set the speed of our car to be moving to the right of the screen.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d 3 3 3 3 3 3 c . . . . 
    . . . c d 3 3 3 3 3 3 c c . . . 
    . . c c d d d d d d 3 c c d . . 
    . . c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
```

## Step 13 - Follow sprite with camera

Notice in the game simulator, that our car jumps off the screen! We need to add some code to follow our car as it moves.

In the ``||scene:Scene||`` Toolbox drawer, scroll to the bottom to see the **Camera** category, drag a ``||scene:camera follow sprite||`` block and drop after the last ``||sprites:set mySprite||`` block.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d 3 3 3 3 3 3 c . . . . 
    . . . c d 3 3 3 3 3 3 c c . . . 
    . . c c d d d d d d 3 c c d . . 
    . . c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
```

## Step 14 - Add Jump when button pressed

When the player presses button **A**, we want our car to be able to jump over the obstacles.

From the ``||controller:Controller||`` Toolbox drawer, drag a ``||controller:on A button||`` pressed block onto the Workspace.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

## Step 15 - Check that car is on road

We only want to be able to jump when our car is on the road – no flying cars! So we need to add a check.

From the ``||logic:Logic||`` Toolbox drawer, drag an ``||logic:if then||`` block into the ``||controller:on A button||`` pressed block.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {

    }
})
```

## Step 16 - Check for walls

From the ``||scene:Scene||`` Toolbox drawer, under the **Collisions** category, drag a ``||scene:is mySprite hitting wall||`` block, and drop into the ``||logic:if then||`` block replacing true. Click on the drop-down menu and select ``||sprites:bottom||`` for the wall direction.

![Hitting Wall](/static/tutorials/side-scroller/hitting-wall.png)

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {

    }
})
```

## Step 17 - Make car jump

From the ``||sprites:Sprites||`` Toolbox drawer, drag a ``||sprites:set mySprite x to 0||`` block into the ``||logic:if then||`` block.

Click on the ``||sprites:x||`` property drop-down menu and select ``||sprites:vy (velocity along the Y vertical axis)||``. Set the value to be ``-200``. This will set the speed of our car to be moving up to jump.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.x = -200
    }
})
```

## Step 18 - Add overlaps behavior

When our car runs into an obstacle, we should lose the game. And when our car runs into the finish line we should win the game. To write that code, we need to use ``||scene:sprite overlaps tile||`` blocks.

From the ``||scene:Scene||`` Toolbox drawer, under the **Tiles** category, drag two ``||sprites:on sprite of kind overlaps tile||`` blocks onto the Workspace.

![Sprite overlaps tile wall](/static/tutorials/side-scroller/sprite-overlaps-tile.png)

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
	
})
```

## Step 19 - Specify obstacle and finish line tiles

In the first ``||sprites:on sprite of kind overlaps tile||`` block, click on the checkered square drop-down menu and select your Obstacle tile.

In the second ``||sprites:on sprite of kind overlaps tile||`` block, click on the checkered square drop-down menu and select your Finish Line tile.

![Sprite overlaps tile wall](/static/tutorials/side-scroller/obstacle-finish-tiles.png)

## Step 20 - Game over

From the ``||game:Game||`` Toolbox drawer, drag **two** ``||game:game over||`` blocks onto the Workspace – drop one into each of the ``||sprites:on sprite of kind overlaps tile||`` blocks.

In the second ``||sprites:on sprite of kind overlaps tile||`` Finish Line block, toggle the ``||game:game over||`` setting to **WIN**.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    game.over(true)
})
```

## Step 21 - Play your game!

That’s it! Try playing your game in the full screen simulator – jump over obstacles to make it to the finish line! Next you can try adding different types of obstacles, or adding platforms for your car to jump onto.


```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAA/8z//wAAAMzP/P//wP////////8AAAD//8zM/AAAAADw////AAAAAP////8AAMz8/////8D////PzP//AAD///////8AAADw///P/wAAAADM////AAAAAPD///8AAPD//8zM/8D//8z8////AMD8//z//P8AAAAAAP/PzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAzMjAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDIyMjIyMjIyMDAyMDIyMjIyMjAwMjAyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.vehicle.roadHorizontal",
            "myTiles.tile1",
            "sprites.dungeon.greenOuterEast0"
        ]
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```