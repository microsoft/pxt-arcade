# Getting started

## Introduction @unplugged

Welome to MakeCode Arcade! Let's get started by making a simple game with a player sprite and some falling obstacles.

## Step 1

The first thing we'll do is make our player. Find the ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

```blocks
enum SpriteKind {
    Player,
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

Click on the grey box in ``||variables:set mySprite to||`` an draw your player's image. It can be just be a solid block or you can draw a more complicated figure if you want.

![Draw a figure for the sprite](/static/tutorials/getting-started/draw-sprite-figure.gif)

## Step 3

Now, let's make our sprite figure move with the controller arrow keys. Get two ``||sprites:change mySprite x (horizontal position)||`` blocks and put them into ``||game:on update||``.

```blocks
enum SpriteKind {
    Player,
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

game.onUpdate(function () {
    mySprite.y += controller.dy()
})
```