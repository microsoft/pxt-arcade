# Setting the Scene

[Open this tutorial in the editor!](/#tutorial:/concepts/setting-the-scene)

## Introduction @unplugged

The maps and levels in a game are important to make the game interesting to explore. ``||scene:Tilemaps||`` are used to create maps for the player to explore, which can even be set to prevent the player from moving past certain points.

## Step 1 @fullscreen

Find ``||scene:set tilemap to||`` in ``||scene:Scene||``. Drag it into ``||loops:on start||``.

```blocks
tiles.setTilemap(tiles.createTilemap(
    hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
    img`
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
    `,
    [],
    TileScale.Sixteen
))

```

## Step 2 @fullscreen

Click on the grey box in ``||scene:set tilemap to||`` to open the tilemap editor. Pick a tile from the gallery (or create your own under `My Tiles`), and draw a small tilemap for the ``||scene:tilemap||``.

Run the code, and notice that the tilemap is shown as the background. Each pixel of the drawing in the image editor is shown as a 16x16 square on the screen.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`1000100000000000000000000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000000000000000000000000000000000010000000001000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
    img`
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
    `,
    [myTiles.tile0,myTiles.tile1],
    TileScale.Sixteen
))

```

## Step 3 @fullscreen

Find ``||variables:set mySprite to||`` and drag it into ``||loops:on start||`` to create a ``||sprites:Sprite||``. Open the image editor for the ``||sprites:Sprite||`` and create an image to represent it on the screen.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`1000100000000000000000000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000000000000000000000000000000000010000000001000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
    img`
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
    `,
    [myTiles.tile0,myTiles.tile1],
    TileScale.Sixteen
))
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . .
. . . . f f f 2 2 f f f . . . .
. . . f f f 2 2 2 2 f f f . . .
. . f f f e e e e e e f f f . .
. . f f e 2 2 2 2 2 2 e e f . .
. . f e 2 f f f f f f 2 e f . .
. . f f f f e e e e f f f f . .
. f f e f b f 4 4 f b f e f f .
. f e e 4 1 f d d f 1 4 e e f .
. . f e e d d d d d d e e f . .
. . . f e e 4 4 4 4 e e f . . .
. . e 4 f 2 2 2 2 2 2 f 4 e . .
. . 4 d f 2 2 2 2 2 2 f d 4 . .
. . 4 4 f 4 4 5 5 4 4 f 4 4 . .
. . . . . f f f f f f . . . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
```

## Step 4 @fullscreen

Find ``||controller:move mySprite with buttons||`` and drag it into ``||loops:on start||`` after ``||variables:set mySprite to||``.

This lets the player move the character around the map that is displayed on the screen. However, there is one issue; the player can move straight through the beautiful tiles we designed! This is fixed by changing all of them to be ``||scene:Wall||`` tiles.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`1000100000000000000000000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000000000000000000000000000000000010000000001000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
    img`
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
    `,
    [myTiles.tile0,myTiles.tile1],
    TileScale.Sixteen
))
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . .
. . . . f f f 2 2 f f f . . . .
. . . f f f 2 2 2 2 f f f . . .
. . f f f e e e e e e f f f . .
. . f f e 2 2 2 2 2 2 e e f . .
. . f e 2 f f f f f f 2 e f . .
. . f f f f e e e e f f f f . .
. f f e f b f 4 4 f b f e f f .
. f e e 4 1 f d d f 1 4 e e f .
. . f e e d d d d d d e e f . .
. . . f e e 4 4 4 4 e e f . . .
. . e 4 f 2 2 2 2 2 2 f 4 e . .
. . 4 d f 2 2 2 2 2 2 f d 4 . .
. . 4 4 f 4 4 5 5 4 4 f 4 4 . .
. . . . . f f f f f f . . . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## Step 5 @fullscreen

Open the tilemap editor, and click on the wall icon above `Gallery`.
Use it to draw walls over the parts of your tilemap that the player shouldn't be able to move through.

![Example of drawing walls in the tilemap editor](/static/concepts/setting-the-scene/drawing-walls.gif)

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
        5 5 5 5 4 4 4 4 5 5 5 5 4 4 4 4
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`1000100000000000000000000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000000000000000000000000000000000010000000001000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
    img`
        . . . . . . . . . . . . . . . .
        . . . 2 . . 2 . . . . . . . . .
        . . . 2 . . 2 . . . . . . . . .
        . . . 2 . . 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 2 . . . . 2 . . . . . . . .
        . . . 2 2 2 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,
    [myTiles.tile0,myTiles.tile1],
    TileScale.Sixteen
))
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)

```

## Complete @fullscreen

Congratulations, your first tilemap is complete! Try to move the character around the screen, or create more types of ``||scene:tiles||``. If you expand the ``||scene:tilemap||`` image, you can create a larger map - if you do, use ``||scene:camera follow sprite mySprite||`` to make it so the camera stays centered on the character you control, so that you can explore the entire map!
