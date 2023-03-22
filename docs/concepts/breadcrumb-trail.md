# Breadcrumb Trail

## {Introduction @unplugged}

Placing ``||sprites:sprites||`` on a ``||scene:tilemap||`` can be a great way to set up levels
for your player to explore. These ``||sprites:sprites||`` can be used as decoration
or as objects that the player can interact with.

In this case, you will create a scene where breadcrumbs are placed on the grass in a forest setting.

![Breadcrumb trail being created](/static/concepts/breadcrumb-trail/breadcrumb-trail.gif)

## {Step 1}

Find ``||scene:set tilemap to||`` in ``||scene:Scene||``
and drag it into the ``||loops:on start||``.
Open the tilemap editor and use the paint bucket tool to fill the canvas with a grassy background.

```blocks
tiles.setTilemap(tilemap`level_0`)
```

## {Step 2}

Open the image editor for the ``||scene:tilemap||`` again.
Draw a path from the **top left** to the **bottom right** with a different tile.

```blocks
tiles.setTilemap(tilemap`level_1`)
```

## {Step 3}

Find ``||loops:for element value of list||``
and place it after the ``||scene:set tilemap to||`` block.

```blocks
let list: number[] = []
tiles.setTilemap(tilemap`level_1`)
for (let value of list) {

}
```

## {Step 4}

Find ``||scene:array of all locations||`` in ``||scene:Scene||``.
Place it in the ``||loops:for element value of list||`` block on top of ``||variables:list||``.
Select the tile you drew diagonally across the map.
The loop will now run once for every tile of that type in the tilemap.

```blocks
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {

}
```

## {Step 5}

Find ``||variables(sprites):set mySprite to sprite of kind player||`` in ``||sprites:Sprites||``
and drag it into the ``||loops:for element||`` loop.
Draw breadcrumbs for the image of the sprite.
This will create a new ``||sprites:Sprite||`` for every one of the
selected ``||scene:tiles||`` in the ``||scene:tilemap||``.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
}
```

## {Step 6}

Find ``||scene:place mySprite on top of tilemap col row||``
and place it after ``||variables(sprites):set mySprite to||``.
Drag ``||variables:value||`` from the ``||loops:for loop||`` to ``||variables:tilemap col row||``.
Make sure ``||variables(noclick):mySprite||`` is the ``||variables:variable||`` for the
``||sprites:sprite||`` you just created.
This will place the breadcrumbs on each ``||scene:tile||`` of the diagonal line.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
}
```

## {Step 7}

If you want to make the tile below the sprite look the same as the others
so that it doesn't stand out from other tiles,
find ``||scene:set at tilemap col row||`` in ``||scene:Scene||``
and place it after ``||variables(sprites):set mySprite to||``.
Drag ``||variables:value||`` on top of ``||scene:tilemap col row||``,
and select the tile you want the tile to become (in this case, the same as the other tiles).

![Example showing how to complete this step](/static/concepts/breadcrumb-trail/removing-placer-tiles.gif)

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
}
```

## {Complete}

Congratulations, your forest is complete! If you want to see the breadcrumbs placed one by one,
add a ``||loops:pause||`` inside the ``||loops:for element||`` loop.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    pause(350)
}
```

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
        "data": "MTAxMDAwMTAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3",
            "sprites.castle.tileDarkGrass2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```