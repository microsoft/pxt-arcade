# Getting started

## Introduction @unplugged

Welcome to @boardname@! Let's get started by creating a simple game where your player tries to get out of a maze while there's still time!

![Simple maze game playing](/static/tutorials/simple-maze/simple-maze-game.gif)

## Step 1

The first thing we'll do is make our player. Find the ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

```blocks
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
`)
```

## Step 2 @fullscreen

Click on the grey box in ``||variables:set mySprite to||`` an draw your player's image. It can be anything, solid block or a figure.

![Draw a figure for the sprite](/static/tutorials/simple-maze/draw-sprite-figure.gif)

```blocks
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
`)
```

## Step 3

Now, let's make our sprite figure move with the controller arrow keys. Get a ``||controller:control sprite||`` from ``||controller:Controller||`` and put it under ``||variables:set mySprite to||``.

```blocks
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
`)
controller.controlSprite(mySprite, 100, 100)
```

## Step 4

Next, make a tile to set into the scene. Pull ``||scene:set tile||`` from ``||scene:Scene||`` into ``||loops:on start||``. Fill the whole tile with one color in the image editor.

```blocks
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
`)
controller.controlSprite(mySprite, 100, 100)
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
`)
```

## Step 5

Click on the color bubble in ``||scene:set tile||`` and change the color index to the same color you filled the tile with. Click on the **(+)**  and set ``wall`` to `ON`.

```blocks
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
`)
controller.controlSprite(mySprite, 100, 100)
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

Add a ``||scene:set tile map||`` to ``||loops:on start||``. For it's image, draw a maze using the same color as the tile you just made. Leave an opening on the left side of the maze.

```blocks
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
`)
controller.controlSprite(mySprite, 100, 100)
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
`)
controller.controlSprite(mySprite, 100, 100)
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

We need to see if the player makes it out of the maze by adding a ``||logic:if then||`` block inside ``||game:update||``. Get a ``||logic:0 < 0||`` block and replace the `true` condition with it.

```blocks
game.onUpdate(function () {
    if (0 < 0) {

    }
})
```

## Step 9

Change the ``<`` condition in ``||logic:0 < 0||`` to ``<=``. Find the ``||sprites:mySprite x (horizontal position)||`` block and put it in where the first `0` is. Click the dropdown and select ``left``. Put a ``||game:game over||`` inside of ``||logic:if then||``.

```blocks
let mySprite: Sprite = null
game.onUpdate(function () {
    if (mySprite.left <= 0) {
        game.over(true)
    }
})
```

## Complete

Congratulations, your maze game is complete! You can now play your first game. See if you can escape the maze.