# Simple Enemies

### @autoexpandOff true

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAADMzMzMzMzMzLy7u7u7u7vLvMvMzMzMvMu8vMzMzMzLy7zMy8zMvMzLvMy8zMzLzMu8zMzLvMzMy7zMzLzLzMzLvMzMvMvMzMu8zMzLvMzMy7zMvMzMy8zLvMzLzMy8zMu8vMzMzMzLy7zLzMzMzLzLvLu7u7u7u8vMzMzMzMzMzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAiIiIiIiIiIkJEREREREQkQiIiIiIiIiRCIiIiIiIiJEIiREQiIiIkQkJERCIkJCRCQiREJCQkJEJCREQiQiIkQkJERCRCIiRCQiREIiQkJEIiREQkJCQkQiIiIiIiIiRCIiIiIiIiJEIiIiIiIiIkQkRERERERCQiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAAB3d3d3d3d3d1dVVVVVVVV1V3d3d3d3d3VXd3d3d3d3dVdXVVVVVXd1V1dXV3d3d3VXV3VVd3d3dVdXV1d3d3d1V3d1dXV3d3VXd1VXdXd3dVd3dXV1d3d1V3dVVXV3d3VXd3d3d3d3dVd3d3d3d3d1V1VVVVVVVXV3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAABERERERERERFRVVVVVVVVFVEREREREREVURFRFRERERVRERVRERERFVFRVVUVEREVUVFVVVURFRVRUVVVVVUVFVFRVVVVVRUVUVFVVVURFRVRUVVVFRERFVERFVEREREVURFRFRERERVRERERERERFVFVVVVVVVUVERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile5": {
        "data": "hwQQABAAAACqqqqqqqqqqrq7u7u7u7uruqqqqqqqqqu6qqqqqqqqq7qqqqqqqqqruqqqqqqqqqu6qrurqqqqq7q6u7u7uqururq7u7u6q6u6qrurqqqqq7qqqqqqqqqruqqqqqqqqqu6qqqqqqqqq7qqqqqqqqqruru7u7u7u6uqqqqqqqqqqg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level0": {
        "id": "level0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxZTAwMGEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDAwMDAwMDAwMDAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjIwMjIwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIwMjAwMDAwMjAwMDAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5"
        ],
        "displayName": "level0"
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxZTAwMGEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDAwMDAwMDAwMDAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDEwNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDUwMDAwMDAwMDAwMDUwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMjIwMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIwMjAwMDAwMDAwMDAyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5",
            "myTiles.tile2"
        ],
        "displayName": "platformer1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

```template
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile3)
info.setLife(3)
```

## Start @showdialog

In this lesson, we'll take what we made in previous tutorials and add simple enemies.

We'll also use a sprite overlap event to have enemies interact with the player sprite.

![Editing our platformer](/static/skillmap/platformer/platformer3.gif "Time to live dangerously!")


## Spawning enemies pt. 1

**Let's start by choosing a location to [__*spawn*__](#spawnd "make appear")
some enemies on the tilemap.**

We'll use purple **[ ! ]** tiles as enemy spawn points.

---


► Drag out a ``||loops: for element [value] of [list]||`` [__loop__](#loopd "a segment of code that runs multiple times in a row")
and snap it into the bottom of the ``||loops: on start||`` container.

The [__*list*__](#listical  "ordered group of items") we need in the header of that 👆 loop
is the list of saved location for each of the **[ ! ]** blocks.
Fortunately, we have a piece of code that tells us where those are.

► Find the ``||scene: array of all [ ] locations||`` argument block and
drag it into the header of the new loop where the **list** argument is.

► Click on the checkerboard and change it to the **[ ! ]** tile.


```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile3)
info.setLife(3)
// @highlight
for (let value of tiles.getTilesByType(myTiles.tile5)) {

}
```

## A little lesson @showdialog

Now our loop will run for each tile location.

Each time through the loop, the argument **"value"** will contain another
location on the tilemap!


## Spawning enemies pt. 3

👾 Time to spawn some enemies 👾

---


► Drag ``||variables(sprites): set [mySprite2] to sprite [ ] of kind [player]||``
into the new loop.

► Click the **mySprite2** [__*variable*__](#varied "a label that holds the place for something that can change")
and choose to create a **new variable** called **myEnemy**.

► Click the grey sprite rectangle inside the new block to draw an image for the enemy
(or choose one from the gallery.)

► Change the kind of this sprite from **Player** to **Enemy**.


```blocks
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile3)
info.setLife(3)
for (let value of tiles.getTilesByType(myTiles.tile5)) {
// @highlight
    myEnemy = sprites.create(img`
...........fffffff...ccfff..........
..........fbbbbbbbffcbbbbf..........
..........fbb111bbbbbffbf...........
..........fb11111ffbbbbff...........
..........f1cccc1ffbbbbbcff.........
..........ffc1c1c1bbcbcbcccf........
...........fcc3331bbbcbcbcccf..ccccc
............c333c1bbbcbcbccccfcddbbc
............c333c1bbbbbbbcccccddbcc.
............c333c11bbbbbccccccbbcc..
...........cc331c11bbbbccccccfbccf..
...........cc13c11cbbbcccccbbcfccf..
...........c111111cbbbfdddddc.fbbcf.
............cc1111fbdbbfdddc...fbbf.
..............cccfffbdbbfcc.....fbbf
....................fffff........fff
`, SpriteKind.Enemy)
}
```

## Spawning enemies pt. 3
Our enemies are spawning now, but they're all hanging out in one location.

Let's start each of them on a different **[ ! ]** tile. (Each location will be
stored in the **value** variable at some point as we move through
the **for element** loop.)

---


► Drag a ``||scene: place [mySprite] on top of tilemap col [0] row [0]||`` block
to the bottom of the **for element** loop.

► Change the sprite variable to **myEnemy** and replace the  ``||scene: tilemap col [0] row [0]||``
argument block with the ``||variables(noclick): value||`` argument from the header of the
**for element** loop.


```blocks
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile3)
info.setLife(3)
for (let value of tiles.getTilesByType(myTiles.tile5)) {
    myEnemy = sprites.create(img`
...........fffffff...ccfff..........
..........fbbbbbbbffcbbbbf..........
..........fbb111bbbbbffbf...........
..........fb11111ffbbbbff...........
..........f1cccc1ffbbbbbcff.........
..........ffc1c1c1bbcbcbcccf........
...........fcc3331bbbcbcbcccf..ccccc
............c333c1bbbcbcbccccfcddbbc
............c333c1bbbbbbbcccccddbcc.
............c333c11bbbbbccccccbbcc..
...........cc331c11bbbbccccccfbccf..
...........cc13c11cbbbcccccbbcfccf..
...........c111111cbbbfdddddc.fbbcf.
............cc1111fbdbbfdddc...fbbf.
..............cccfffbdbbfcc.....fbbf
....................fffff........fff
`, SpriteKind.Enemy)
        // @highlight
    tiles.placeOnTile(myEnemy, value)
}
```

## Enemy follow
💤 Did you notice that we have the laziest enemies ever? 💤

Let's wake-up our sprites and get them following our player.

---

► Snap a ``||sprites: set [myEnemy] follow [mySprite]||`` block
into the bottom of the **for element** loop.

► Press the **⊕** on the new block and change the speed to **30**.


```blocks
let myEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile3)
info.setLife(3)
for (let value of tiles.getTilesByType(myTiles.tile5)) {
    myEnemy = sprites.create(img`
...........fffffff...ccfff..........
..........fbbbbbbbffcbbbbf..........
..........fbb111bbbbbffbf...........
..........fb11111ffbbbbff...........
..........f1cccc1ffbbbbbcff.........
..........ffc1c1c1bbcbcbcccf........
...........fcc3331bbbcbcbcccf..ccccc
............c333c1bbbcbcbccccfcddbbc
............c333c1bbbbbbbcccccddbcc.
............c333c11bbbbbccccccbbcc..
...........cc331c11bbbbccccccfbccf..
...........cc13c11cbbbcccccbbcfccf..
...........c111111cbbbfdddddc.fbbcf.
............cc1111fbdbbfdddc...fbbf.
..............cccfffbdbbfcc.....fbbf
....................fffff........fff
`, SpriteKind.Enemy)
    tiles.placeOnTile(myEnemy, value)
    myEnemy.follow(mySprite, 30)
}
```

## Damage pt. 1 @showdialog

Now the enemies should be moving toward the player.

What happens when the enemies reach the player? **Nothing?!?**
Well, that's no fun.
Let's add some code to make this more exciting.
😈👿😈 &nbsp;  😱

---


**Our player and enemies might meet under a couple of different**
[**_conditions_**](#condy "thing we need to know before deciding what happens next"):

1. **If the player jumps on an enemy, the enemy is destroyed**

2. **If the player runs into an enemy,
the player takes damage and the enemy is destroyed**


---

We'll need an **on sprite overlap** event to know if these happen!

## Damage pt. 2
In both overlap cases, we want to destroy the enemy sprite...so
let's code that part first.
💥👿💥

---


► From the ``||sprites: Sprites||`` category, drag an
``||sprites: on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``
[__*event*__](#eventTime "element that makes something happen when a certain action is performed")
 container into the workspace.

► Leave the first kind as **Player** and change the second kind to **Enemy**.

► Snap a ``||sprites: destroy [mySprite]  ⊕||`` block into the new event container.

► Drag the ``||variables(noclick): otherSprite||`` argument from the **on sprite overlaps**
event to replace the ``||variables(noclick): mySprite||`` variable inside the destroy block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## Damage pt. 4 @showdialog

❗ Here comes the exciting part ❗

We need to figure out whether the enemy was **jumped on** or **run into**.
**_THEN_**, based on that
[**_condition_**](#condy "thing we need to know before deciding what happens next"),
 we need to run different code.

The ``||logic:if <true> then||`` block can make that happen.

```block
    if (true) {
    }
```

---



## Damage pt. 5

► Start by adding an ``||logic:if <true> then||`` container to the end
of the newest **on sprite overlaps** container.

---

The next part will take a little deep thinking  🤯

In order to have reached the ``||logic:if <true> then||`` container, the
program must already know that an enemy has overlapped the player.
Now we just have to determine whether or not the player jumped on the enemy
from the top.

In this case, we want to check that the bottom of the player was higher
than the center (**y**) of the enemy. Here's how to do that:

► Drag out a ``||logic:0 < 0||`` logic argument block and snap it into
``||logic:if <true> then||`` to replace the ** `<true>` ** argument.

► On the left-hand side of the **<**, place a ``||sprites:[mySprite] [x]||`` block and change
the **x** to **bottom**, and replace **mySprite** with the **sprite**
variable from the **on sprite overlaps** header.

► On the right-hand side of the **<**, place a ``||sprites:[mySprite] [x]||`` block and change
the **x** to **y**, and replace **mySprite** with the **otherSprite**
variable from the **on sprite overlaps** header.



```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
    }
})
```

## Damage pt. 5.5
To add more style, let's make the player bounce after they've jumped on an enemy.

---


► Snap a ``||sprites:set [mySprite] [x] to ||`` block into the empty **if/then**
logic container and replace **mySprite** with **sprite**.

► Replace **x** with **vy (velocity y)** using the dropdown menu.

► Change the value from **0** to **-100**.



```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        //@highlight
        sprite.vy = -100
    }
})
```


## Damage pt. 6 @showdialog

Now we've written code that checks if the player has bounced on an enemy.
**But what if it didn't?**

We need to add an option in case the player and enemy overlapped in a
different way.  This catch-all condition is called an **else** clause.

---


To add an **else** clause to our **if/then** logic, simply press
the **⊕** at the bottom-left corner of the **if/then** container and one will appear!


```block

  sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    // @highlight
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
    }
})
```

## Damage pt. 6.6

Now that we have an **else** clause, we can use it
for anything that needs to run when the player and enemy
overlap in a non-jumping way.

---


► To remove a life from the player under that condition,
snap a ``||info: change life by [-1]||`` block into the empty **else** clause.


```ghost
        info.changeLifeBy(-1)
```

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.y) {
        sprite.vy = -100
    } else {
    // @highlight
        info.changeLifeBy(-1)
    }
})
```

## Finish

**The basic enemies tutorial is complete.**

Try defeating the level as is, then open the tilemap editor
and see what happens if you add more spawn points!

##Finale

**🔥 Fantastic 🔥**

Click **Done** to return to the main page where you can share your game
with family and friends!