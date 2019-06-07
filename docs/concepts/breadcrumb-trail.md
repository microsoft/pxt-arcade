# Breadcrumb Trail

## Introduction @unplugged

Placing ``||sprites:sprites||`` on a ``||scene:tile map||`` can be a great way to set up levels
for your player to explore. These ``||sprites:sprites||`` can be used as decorations,
or to add things for the player to interact with.

In this case, you will create a scene where breadcrumbs are placed on the grass in a forest.

![Breadcrumb trail being created](/static/concepts/breadcrumb-trail/breadcrumb-trail.gif)

## Step 1

Find ``||scene:set tile map to||`` in ``||scene:Scene||``,
and drag it into the ``||loops:on start||``.
Open the image and use the paint bucket to fill it with green.

```blocks
scene.setTileMap(img`
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7
`)
```

## Step 2

Open the image editor for the ``||scene:tile map||`` again,
and draw a **red** path from the **top left** to the **bottom right**.

```blocks
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
```

## Step 3

Find ``||scene:set tile to||`` in ``||scene:Scene||``,
and place it in the ``||loops:on start||``.
Select the **red** ``||scene:tile||``,
and set the image to a picture of grass (there are several in the gallery).

```blocks
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
```

## Step 4

Place another ``||scene:set tile to||`` block after the first.
Select the **green** ``||scene:tile||``,
and make it have the same image as the previous step.

```blocks
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
```

## Step 5

Find ``||scene:set tile list to array of all tiles||`` in ``||scene:Scene||``.
Place it at the end of the ``||loops:on start||`` block.
Select the **red** tiles.
This creates a variable that stores all the red tiles in the current ``||scene:tile map||``.

```blocks
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
let tile_list = scene.getTilesByType(2)
```

## Step 6

Find ``||loops:for element value of list||``,
and place it after the ``||scene:array of all tiles||`` block.
Change ``||variables:list||`` to ``||variables:tile list||``.
This will now loop over every red ``||scene:tile||`` in the ``||scene:tile map||``,
with ``||variables:value||`` representing a different ``||scene:tile||`` each time.

```blocks
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
let tile_list = scene.getTilesByType(2)
for (let value of tile_list) {

}
```

## Step 7

Find ``||sprites:set mySprite to sprite of kind player||`` in ``||sprites:Sprites||``,
and drag it into the ``||loops:for element||`` loop.
Draw breadcrumbs for the image of the sprite.
This will create a new ``||sprites:Sprite||`` for every red ``||scene:tile||`` in the
``||scene:tile map||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
let tile_list = scene.getTilesByType(2)
for (let value of tile_list) {
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

## Step 8

Find ``||scene:on top of myTile place mySprite||``,
and place it after ``||sprites:set mySprite to||``.
Drag ``||variables:value||`` from the ``||loops:for loop||`` to ``||variables:myTile||``,
and make sure ``||variables:mySprite||`` is the ``||variables:variable||`` for the
``||sprites:sprite||`` you just created.
This will place the breadcrumbs on each **red** ``||scene:tile||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
let tile_list = scene.getTilesByType(2)
for (let value of tile_list) {
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
    value.place(mySprite)
}
```

## Complete

Cnogratulations, yuor forest is complete! If you want to see the breadcrumbs placed one by one,
add a ``||loops:pause||`` inside the ``||loops:for element||`` loop.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
    2 7 7 7 7 7 7 7 7 7
    2 2 2 7 7 7 7 7 7 7
    7 7 2 2 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7
    7 7 7 7 2 2 2 2 2 7
    7 7 7 7 7 7 7 7 2 7
    7 7 7 7 7 7 7 7 2 2
`)
scene.setTile(2, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
scene.setTile(7, img`
    6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 6
    6 6 7 6 7 7 6 6 6 6 6 6 6 6 6 6
    6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 6
    6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 6
    6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, false)
let tile_list = scene.getTilesByType(2)
for (let value of tile_list) {
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
    value.place(mySprite)
    pause(350)
}
```