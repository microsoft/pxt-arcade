# Simple Maze

### ~button /#tutorial:/tutorials/simple-maze

Try this tutorial!

### ~

## Introduction @unplugged

Welcome to @boardname@! Let's get started by creating a simple game where your player tries to get out of a maze while there's still time!

![Simple maze game playing](/static/tutorials/simple-maze/simple-maze-game.gif)

## Step 1

The first thing we'll do is make our player. Find the ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
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

## Step 2 @fullscreen

Click on the grey box in ``||variables:set mySprite to||`` an draw your player's image. It can be anything, solid block or a figure.

![Draw a figure for the sprite](/static/tutorials/simple-maze/draw-sprite-figure.gif)

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
```

## Step 3

Now, let's make our sprite figure move with the controller arrow keys. Get a ``||controller:move mySprite with buttons||`` from ``||controller:Controller||`` and put it under ``||variables:set mySprite to||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
```

## Step 4

Next, make a tile to set into the scene. Pull ``||scene:set tile||`` from ``||scene:Scene||`` into ``||loops:on start||``. Fill the whole tile with one color in the image editor.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(0, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, false)
```

## Step 5

Click on the color bubble in ``||scene:set tile||`` and change the color index to the same color you filled the tile with. Click on the **(+)**  and set ``wall`` to `ON`.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
```

## Step 6

Add a ``||scene:set tile map||`` to ``||loops:on start||``. For its image, draw a maze using the same color as the tile you just made. Leave an opening on the left side of the maze.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
scene.setTileMap(img`
a a a a a a a a a a 
a . . . . . . . . a 
a . . . . . . . . a 
a . . a . . a a a a 
a . . a . . . a . a 
a . . a . . . . . a 
. . . a . a . . . a 
a a a a a a a a a a 
`)
```

## Step 7

Put a ``||info:start countdown||`` after ``||scene:set tile map||`` to set the amount of time for the game.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 . . . . . . 2 . . . . . 
. . 2 . 1 . . . 1 . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 . . . 1 . . . . 2 . . . . 
. . 2 . . . . . . . . 2 . . . . 
. . 2 2 2 . . . . . 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. 2 2 2 . . 2 . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . 2 2 2 . 2 . . . . . . . . 
. . . 2 . . . . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
scene.setTileMap(img`
a a a a a a a a a a 
a . . . . . . . . a 
a . . . . . . . . a 
a . . a . . a a a a 
a . . a . . . a . a 
a . . a . . . . . a 
. . . a . a . . . a 
a a a a a a a a a a 
`)
info.startCountdown(10)
```

## Step 8

Find ``||game:on game update||`` in ``||game:Game||``, and drag it into the workspace.

```blocks
game.onUpdate(function () {

})
```

## Step 9

We need to see if the player makes it out of the maze by adding a ``||logic:if then||`` block inside ``||game:on game update||``. Get a ``||logic:0 < 0||`` block and replace the `true` condition with it.

```blocks
game.onUpdate(function () {
    if (0 < 0) {

    }
})
```

## Step 10

Find the ``||sprites:mySprite x||`` block and put it in where the first `0` is. Click the dropdown and select ``left``.

```blocks
let mySprite: Sprite = null
game.onUpdate(function () {
    if (mySprite.left < 0) {
    }
})
```

## Step 11

Put a ``||game:game over||`` inside of ``||logic:if then||``. Click the **(+)** symbol and click on the ``LOSE`` button to make it say ``WIN``.

```blocks
let mySprite: Sprite = null
game.onUpdate(function () {
    if (mySprite.left < 0) {
        game.over(true)
    }
})
```

## Complete

Congratulations, your maze game is complete! You can now play your first game. See if you can escape the maze.
