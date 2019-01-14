# Eat the Doughnut

[Open this tutorial in the editor!](/#tutorial:tutorials/eat-the-doughnut)

## Introduction @unplugged

![Game animation](/static/tutorials/eat-the-doughnut.gif)

In this tutorial, you will build a fairly simple game with the goal of eating a doughnut before time runs out. When the player eats a doughnut, the countdown is restarted.

## Step 1 @fullscreen

Find ``||scene:set background color to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||`` and then click on the grey box to select a new background color.

```blocks
// @highlight
scene.setBackgroundColor(7)
```

## Step 2 @fullscreen

Find ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||`` **after** ``||scene:set background color to||``.

This will create a new character in the game -- but there is no image to represent this character yet.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
scene.setBackgroundColor(7)
// @highlight
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

## Step 3 @fullscreen

In the ``||sprites:sprite of kind Player||`` block, click on the grey box to open the **image editor**. Use it to design your own image for the ``||sprites:Sprite||`` and then click outside of the image editor.

![Image editor](/static/tutorials/eat-the-doughnut/image-editor.gif)

## Step 4 @fullscreen

Find ``||controller:move mySprite with buttons||`` in ``||controller:Controller||`` and drag it into the ``||loops:on start||`` after ``||variables:set mySprite to||``.

This block allows the person playing the game to move the ``||sprites:Sprite||`` with the directional buttons; try pressing the different buttons to move your character around the screen!

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. 3 3 . . . . . . . . . . 3 . . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . 3 3 . . . . . . 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Step 5 @fullscreen

Drag another ``||variables:set mySprite to||`` into the ``||loops:on start||``. Click on ``||variables:mySprite||``, select ``||variables:New variable||``, and enter ``doughnut`` as the variable name.

This will create **another** ``||sprites:Sprite||``, but one that isn't controlled by the player.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let doughnut: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. 3 3 . . . . . . . . . . 3 . . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . 3 3 . . . . . . 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
doughnut = sprites.create(img`
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

## Step 6 @fullscreen

Click on the grey box for ``||variables:doughnut||`` and then select the Gallery view. Scroll to find the image of a small doughnut (or any other image you like!) and select it to load into the image editor.

![Image editor](/static/tutorials/eat-the-doughnut/image-gal.gif)

## Step 7 @fullscreen

Find ``||sprites:set mySprite position to x 0 y 0||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||`` just after ``||variables:set doughnut to||``. Click on ``||variables:mySprite||`` in the new block to open a drop down menu. Select ``||variables:doughnut||`` to change the ``||sprites:Sprite||`` that it affects.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let doughnut: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. 3 3 . . . . . . . . . . 3 . . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . 3 3 . . . . . . 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
doughnut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// @highlight
doughnut.setPosition(0, 0)
```

## Step 8 @fullscreen

Select ``||sprites:x||`` and ``||sprites:y||`` positions for the ``||variables:doughnut||`` in ``||sprites:set doughnut position to||``. Click on the ``x`` and ``y`` then use the picker to help set the coordinates.

![Set position](/static/tutorials/eat-the-doughnut/set-position.gif)

## Step 9 @fullscreen

Find ``||info:start countdown 10s||`` in ``||info:Info||``. Drag it into the ``||loops:on start||`` after ``||sprites:set doughnut position to||`` and change the ``10`` to ``3``.

This will start a countdown that will soon end the game; we'll need to add a way to win!

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let doughnut: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . 8 8 . . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. 3 3 . . . . . . . . . . 3 . . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . 3 3 . . . . . . 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
doughnut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
doughnut.setPosition(140, 100)
// @highlight
info.startCountdown(3)
```

## Step 10 @fullscreen

Find ``||sprites:on sprite of kind Player overlaps otherSprite of kind Enemy||`` in ``||sprites:Sprites||`` and drag it into the workspace. In the ``||variables:doughnut||`` ``||sprites:Sprite||``, change the ``||sprites:kind||`` from ``||sprites:Player||`` to ``||sprites:Enemy||``.

This will create an **event** that occurs when a ``||sprites:Player Sprite||`` touches and ``||sprites:Enemy Sprite||``. Events allow you to set blocks to run whenever something occurs; for example, ``||loops:on start||`` is an event that lets you set code to run as soon as the game is started!

```blocks
enum SpriteKind {
    Player,
    Enemy
}
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
```

## Step 11 @fullscreen

When an overlap is detected, the player should have a point added to their score. Find the ``||info:change score by||`` block in ``||info:Info||`` and add it to the ``||sprites:on ... overlap ...||`` event.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Food,
    Projectile
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    info.changeScoreBy(1)
})
```

## Step 12 @fullscreen

Also, when the overlap happens, the doughnut should move to another position on the screen.
The screen is 160 pixels wide by 120 pixels high and we want to have the doughnut away from the side so that it doesn't get clipped. Using the ``||math:pick random||`` block, we can generate an ``x`` position from ``20`` to ``140`` and a ``y`` position from ``20`` to ``100``.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Food,
    Projectile
}
let doughnut: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    // @highlight
    doughnut.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 80))
})
```

## Step 13 @fullscreen

One final thing for the overlap event, the countdown should also restart. Drag another ``||info:start countdown||`` into the ``||sprites: on ... overlap ...||`` event. Set the countdown to `3` seconds.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Food,
    Projectile
}
let doughnut: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    doughnut.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 80))
    // @highlight
    info.startCountdown(3)
})
```

## Complete @fullscreen

![Game animation](/static/tutorials/eat-the-doughnut.gif)

Congratulations, you have completed your game! Try to move your character around the screen to collect the doughnut before time runs out!
