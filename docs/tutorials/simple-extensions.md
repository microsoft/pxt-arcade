# Simple Extensions

## {Introduction @unplugged}

Extensions in @boardname@ allow users to easily develop and share portions of their code with others. In this tutorial, you will be using the ``||corgio:corgio||`` extension to create a simple platformer. In this example the extension is automatically loaded: in other projects, you can load the extension as shown below.

![Adding Corgio Extension](/static/tutorials/simple-extensions/add-corgio.gif)

## {Step 1}

The first thing we'll do is make our corgio. Find the ``||variables:set myCorg to||`` in ``||corgio:Corgi||``. Drag it into the ``||loops:on start||``. The corgio should appear on the left side of the screen.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
```

## {Step 2}

Now, let's make our sprite figure move left and right with the controller arrow keys. Get a ``||corgio:make myCorg move left and right with arrow keys||`` and a ``||corgio:make myCorg jump if up arrow key is pressed||`` from ``||corgio:Corgi||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
```

## {Step 3}

The corgio is a bit boring when it's image doesn't change; to fix this, get a ``||corgio:change image when myCorg is moving||`` block from ``||corgio:Corgio||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
```

## {Step 5 @fullscreen}

Add a ``||scene:set tilemap to||`` from ``||scene:Scene||`` to ``||loops:on start||``.
Set the size of the tilemap to ``20x8``,
draw some platforms for the corgi to stand on,
and set them as ``Walls``.

![Animation showing completion of this step](/static/tutorials/simple-extensions/create-tilemap.gif)

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level_0`)
```

## {Step 6}

To make it so the camera follows the corgio as it leaves the screen, add ``||corgio:make camera follow myCorg left and right||`` from ``||corgio:Corgio||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tilemap`level_0`)
```

## {Step 7}

At the end of the tilemap, draw a column that is a different tile than the other tiles in the map.
This will represent the goal for the player.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tilemap`level_1`)
```

## {Step 8}

Add a ``||scene:on sprite of kind Player overlaps at location||`` block from ``||scene:Scene||``,
then click on the checkered tile to find the tile you used as a goal.
Inside of that event, add a ``||game:game over lose||``.
Click ``LOSE`` to change it to ``WIN``.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tilemap`level_1`)
```

## {Complete}

Congratulations, your platformer is complete! See if you can get to the wall at the end of the level.

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMDIwMjAwMDMwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDIwMjAyMDIwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMDAyMDIyMjIwMjAwMDAwMDIwMDAwMDAwMDAwMDAwMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAyMjIyMjIyMjIyMjIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0",
            "sprites.builtin.coral0"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

```package
corgio
```
