# Setting the Scene

[Open this tutorial in the editor!](/#tutorial:concepts/setting-the-scene)

## Introduction @unplugged

The maps and levels in a game are important to make the game interesting to explore. ``||scene:Tile maps||`` are used to create maps for the player to explore, which can even be set to prevent the player from moving past certain points.

## Step 1 @fullscreen

Find ``||scene:set tile map to||`` in ``||scene:Scene||``. Drag it into ``||loops:on start||``.

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
```

## Step 2 @fullscreen

Click on the grey box in ``||scene:set tile map to||`` to open the image editor, and draw a small image for the ``||scene:tile map||``.

Run the code, and notice that the tile map is shown as the background. Each pixel of the drawing in the image editor is shown as a 16x16 square on the screen.

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
```

## Step 3 @fullscreen

Find ``||scene:set tile to||`` in ``||scene:Scene||``, and drag it into ``||loops:on start||``. Click on the first grey box (the color picker), and select one of the colors you used in the tile map image.

This will temporarily make that tile appear to disappear on the screen, but that's just because we haven't set an image for the tile yet.

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
scene.setTile(5, img`
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
`, false)
```

## Step 4 @fullscreen

Click on the other gray box in ``||scene:set tile to||`` to open the image editor, and draw an image for the tile.

Any tiles that are assigned the color you specified in the ``||scene:tile map||`` will now be displayed as the image that you drew.

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
scene.setTile(5, img`
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
`, false)
```

## Step 5 @fullscreen

Find ``||variables:set mySprite to||`` and drag it into ``||loops:on start||`` to create a ``||sprites:Sprite||``. Open the image editor for the ``||sprites:Sprite||`` and create an image to represent it on the screen.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
scene.setTile(5, img`
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
`, false)
mySprite = sprites.create(img`
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

## Step 6 @fullscreen

Find ``||controller:move mySprite with buttons||`` and drag it into ``||loops:on start||`` after ``||variables:set mySprite to||``.

This will let the player move the character around the map that is displayed on the screen. However, there is one issue; the player can move straight through the beautiful tiles we designed! This can be fixed by changing the tile to be a ``||scene:Wall||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
scene.setTile(5, img`
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
`, false)
mySprite = sprites.create(img`
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

## Step 7 @fullscreen

Click on the ``(+)`` to expand the in ``||scene:set tile to||`` to expand it to ``||scene:set tile to with wall off||``, and click on ``||scene:off||`` to turn it ``||scene:on||``.

This will set the tile you created to be a ``||scene:Wall||``, so that the player cannot move through it.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
scene.setTileMap(img`
. . . . . . . . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . 5 . . 5 . . . 
. . . . . . . . . . 
. . 5 . . . . 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
scene.setTile(5, img`
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
`, true)
mySprite = sprites.create(img`
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

Congratulations, your first tile map is complete! Try to move the character around the screen, or create more types of ``||scene:tiles||``. If you expand the ``||scene:tile map||`` image, you can create a larger map - if you do, use ``||scene:camera follow sprite mySprite||`` to make it so the camera stays centered on the character you control, so that you can explore the entire map!