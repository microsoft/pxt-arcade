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

## Step 4

Pull ``||scene:set tile to with wall||`` from ``||scene:Scene||`` into ``||loops:on start||``. Fill the whole tile with one color in the image editor. Click on the color bubble in ``||scene:set tile to with wall||`` and change the color index to the same color you filled the tile with. Click the ``wall`` setting to `ON`.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
```

## Step 5 @fullscreen

Add a ``||scene:set tile map||`` to ``||loops:on start||``. For it's image, create two platforms for the corgi to stand on.

![Drawing a platform](/static/tutorials/simple-extensions/draw-platforms.gif)

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . 4 4 4 4 4 4 . .
    . . . . . . . . . .
    4 4 4 4 4 4 4 4 4 4
`)
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
```

## Step 6 @fullscreen

Open up the image editor of ``||scene:set tile map||`` again, and change the size of the image until you get to **32x8**. Draw more platforms for the corgio to jump on.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . 4 . . . . . 4 . . . . . .
    . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . 4 . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . . .
    4 4 4 4 4 4 4 4 4 4 . . . . . . . . . 4 . . . . . . . . 4 4 4 .
`)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
```

## Step 7

To make it so the camera follows the corgio as it leaves the screen, add ``||corgio:make camera follow myCorg left and right||`` from ``||corgio:Corgio||`` and put it under ``||variables:set myCorg to||``.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . 4 . . . . . 4 . . . . . .
    . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . 4 . . . . . 4 . . . . . .
    . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . . .
    4 4 4 4 4 4 4 4 4 4 . . . . . . . . . 4 . . . . . . . . 4 4 4 .
`)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
```

## Step 8

At the end of the tile map, draw a column that is a different color than the current walls. Set that tile to be a wall just like you did in step 4.

![Add winning event](/static/tutorials/simple-extensions/add-goal.png)

```blocks
let myCorg = corgio.create(SpriteKind.Player)
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . 4 . . . . . 4 . . . . . 7
    . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . 4 . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . . 7
    4 4 4 4 4 4 4 4 4 4 . . . . . . . . . 4 . . . . . . . . 4 4 4 7
`)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
```

## Step 9

Add a ``||scene:on sprite of kind Player hits wall||`` block from ``||scene:Scene||``, and select the color of the new wall you made in the color bubble. Inside of that, add a ``||game:game over||``.

![Add winning event](/static/tutorials/simple-extensions/game-win-event.gif)

```blocks
let myCorg = corgio.create(SpriteKind.Player)
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . 4 . . . . . 4 . . . . . 7
    . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . 4 . . . . . 4 . . . . . 7
    . . . . . . . . . . . . . . . . . . . 4 . . . . . . . . . . . 7
    4 4 4 4 4 4 4 4 4 4 . . . . . . . . . 4 . . . . . . . . 4 4 4 7
`)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
```

## Complete

Congratulations, your platformer is complete! See if you can get to the wall at the end of the level.

```package
corgio
```
