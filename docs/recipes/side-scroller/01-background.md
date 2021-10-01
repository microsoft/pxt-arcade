# Car race tutorial

## {Introduction @unplugged}

Create a side-scrolling car racing game to jump over obstacles and make it to the finish line.

![Car race game play](/static/recipes/side-scroller/car-race.gif)

## {Step 1 - Set the background color}

First, let’s set the color of the background for our racing game. From the ``||scene:Scene||`` Toolbox drawer, drag a ``||scene:set background color||`` block onto the Workspace. Drop it into the ``||loops:on start||`` block.

In the ``||scene:set background color||`` block, click on the grey oval to select a color.

![Background color](/static/recipes/side-scroller/background-color.png)

```blocks
scene.setBackgroundColor(6)
```

## {Step 2 - Create the tilemap}

Now let’s use a tile map to represent the road for our game. From the ``||scene:Scene||`` Toolbox drawer, drag a ``||scene:set tilemap||`` block into the ``||loops:on start||`` block, after the ``||scene:set background color||`` block.

![Set tilemap](/static/recipes/side-scroller/set-tilemap.png)

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level_0`)
```

## {Step 3 - Set the canvas size}

In the ``||scene:set tilemap||`` block, click on the grey square to open up the Tilemap Editor.

In the bottom left corner, set the dimensions for the canvas to **50** by **8** pixels. This will make our game background very wide and short.

![Canvas size](/static/recipes/side-scroller/canvas-size.png)

## {Step 4 - Draw the road}

Select a **tile** from the Tile Gallery or draw your own tile to represent the road for your race. You will notice that there is a road tile in the **Miscellaneous** part of the Tile Gallery that you can use.

Click on the **Pencil** icon to draw the road along the bottom of your Tilemap canvas.

![Road tile](/static/recipes/side-scroller/road-tile.png)

## {Step 5 - Create obstacles}

Go back to the Tilemap Editor again by clicking on the square in the ``||scene:set tilemap||`` block. This time we are going to create an obstacle for your car to jump over.

Select a tile from the Gallery or draw your own tile to represent an obstacle – this could be water, hot lava or spikes!

Place up to three obstacle tiles in a row at various points in the middle of your road.

![Obstacles](/static/recipes/side-scroller/obstacles.png)

## {Step 6 - Create finish line}

Open up the Tilemap Editor again by clicking on the square in the ``||scene:set tilemap||`` block. Now we are going to create the finish line for our race.

Select a tile from the Gallery or draw your own tile to represent the finish line and draw it along the right side of our tilemap canvas.

![Finish line](/static/recipes/side-scroller/finish-line.png)

## {Step 7 - Draw the walls}

Go one more time to the Tilemap Editor. The last thing we’re going to do in our tilemap is to add walls on the road for our car to drive on.

Click on the **Wall** tool, then draw along the road tiles.

![Walls](/static/recipes/side-scroller/walls.png)

## {Step 8 - Finished race course}

You should see some of your new race course in simulator. Not all of the course is visible right now but the rest of the course will appear as your car moves forward.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
```

## {Conclusion @unplugged}

Now, let's make a race car and give it some motion properties to move it along the race course you just created.

|      |
|:----:|
| [![Create car](/static/recipes/side-scroller/02-create-car.gif)](#recipe:/recipes/side-scroller/02-create-car) |
| [**Create a race car**](#recipe:/recipes/side-scroller/02-create-car) |


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