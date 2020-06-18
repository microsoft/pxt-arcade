# Simple Extensions

## Introduction @unplugged

Extensions in @boardname@ allow users to easily develop and share portions of their code with others. In this tutorial, you will be using the ``||corgio:corgio||`` extension to create a simple platformer. In this example the extension is automatically loaded: in other projects, you can load the extension as shown below.

![Adding Corgio Extension](/static/tutorials/simple-extensions/add-corgio.gif)

## Step 1

The first thing we'll do is make our corgio. Find the ``||variables:set myCorg to||`` in ``||corgio:Corgi||``. Drag it into the ``||loops:on start||``. The corgio should appear on the left side of the screen.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
```

## Step 2

Now, let's make our sprite figure move left and right with the controller arrow keys. Get a ``||corgio:make myCorg move left and right with arrow keys||`` and a ``||corgio:make myCorg jump if up arrow key is pressed||`` from ``||corgio:Corgi||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
```

## Step 3

The corgio is a bit boring when it's image doesn't change; to fix this, get a ``||corgio:change image when myCorg is moving||`` block from ``||corgio:Corgio||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
```

## Step 5 @fullscreen

Add a ``||scene:set tilemap to||`` from ``||scene:Scene||`` to ``||loops:on start||``.
Set the size of the tilemap to ``20x8``,
draw some platforms for the corgi to stand on,
and set them as ``Walls``.

![Animation showing completion of this step](/static/tutorials/simple-extensions/create-tilemap.gif)

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(
    hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000101010101010101010101000000000000000000`,
    img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . 2 2 2 2 2 2 . . . . . . . . . . . . .
        . . . . . . . . 2 2 2 2 . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . .
    `,
    [myTiles.tile0,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0],
    TileScale.Sixteen
))
```

## Step 6

To make it so the camera follows the corgio as it leaves the screen, add ``||corgio:make camera follow myCorg left and right||`` from ``||corgio:Corgio||`` and put it under ``||variables:set myCorg to||``.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(
    hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000101010101010101010101000000000000000000`,
    img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . 2 2 2 2 2 2 . . . . . . . . . . . . .
        . . . . . . . . 2 2 2 2 . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . .
    `,
    [myTiles.tile0,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0],
    TileScale.Sixteen
))
```

## Step 7

At the end of the tilemap, draw a column that is a different tile than the other tiles in the map.
This will represent the goal for the player.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(
    hex`1400080000000000000000000000000000000000000000030000000000000000000000000000000000000003000000000000000000000000000000000000000300000000000000000000000000000202020200030001010101010100000000000000000200000003000000000000000001010101020202020000000300000000000000000000000002000000000000030101010101010101010101020000000000000003`,
    img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 2 2 2 2 . .
        . 2 2 2 2 2 2 . . . . . . . . 2 . . . .
        . . . . . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . . . . . . . . . 2 . . . . . . .
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . .
    `,
    [myTiles.tile0,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0,sprites.builtin.coral0],
    TileScale.Sixteen
))

```

## Step 8

Add a ``||scene:on sprite of kind Player overlaps at location||`` block from ``||scene:Scene||``,
then click on the checkered tile to find the tile you used as a goal.
Inside of that event, add a ``||game:game over lose||``.
Click ``LOSE`` to change it to ``WIN``.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(
            hex`1400080000000000000000000000000000000000000000030000000000000000000000000000000000000003000000000000000000000000000000000000000300000000000000000000000000000202020200030001010101010100000000000000000200000003000000000000000001010101020202020000000300000000000000000000000002000000000000030101010101010101010101020000000000000003`,
            img`
                . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 2 2 2 . .
                . 2 2 2 2 2 2 . . . . . . . . 2 . . . .
                . . . . . . . . 2 2 2 2 2 2 2 2 . . . .
                . . . . . . . . . . . . 2 . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . .
            `,
            [myTiles.tile0,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0,sprites.builtin.coral0],
            TileScale.Sixteen
        ))

```

## Complete

Congratulations, your platformer is complete! See if you can get to the wall at the end of the level.

```package
corgio
```
