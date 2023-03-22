# Walking Hero

[Open this tutorial in the editor!](/#tutorial:/concepts/walking-hero)

## {Introduction @unplugged}

``||sprites:Sprites||`` can be used to represent the **characters** in your game. These can be anything - coins to collect, enemies to avoid, or lasers fired from a spaceship.

In this tutorial, you will create the main character for a game, and allow them to move with the controller buttons.

## {Step 1 @fullscreen}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

This ``||sprites:Sprite||`` will represent the main character in the game; for now, it has no image and doesn't do anything, though.

```blocks
let mySprite = sprites.create(img`
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

## {Step 2 @fullscreen}

Click on the grey box in ``||variables(sprites):set mySprite to||`` to open the image editor. Use it to draw an image to represent your new sprite on the screen.

When you close the image editor by clicking outside of it, the image you drew will show up in the center of the screen in the simulator.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
```

## {Step 3 @fullscreen}

This ``||sprites:Sprite||`` represents the main character in our game, so it should move when the player presses buttons.

Find ``||controller:move mySprite with buttons||`` in ``||controller:Controller||``. Place it after ``||variables(sprites):set mySprite to||``.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## {Complete}

Congratulations, your hero will now walk whenever the player presses one of the directional buttons!