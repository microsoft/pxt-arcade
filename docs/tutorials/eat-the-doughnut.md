# Eat the Doughnut

[Open this tutorial in the editor!](/#tutorial:tutorials/eat-the-doughnut)

## Introduction @unplugged

Games can be made from any idea you have, but general need two things: a way for the player to win, and a way for the player to lose. 

In this tutorial, you will build a fairly simple game, with the goal of collecting a doughnut before time runs out.

## Step 1 @fullscreen

Find ``||scene:set background color to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||``, and then click on the grey box and select a new background color.

```blocks
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

In the ``||sprites:sprite of kind Player||`` block, click on the grey box to open the **image editor**. Use it to design your own image for the ``||sprites:Sprite||``, and then click outside of the image editor.

This will assign the character you created a new image, making them show up on the screen.

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
```

## Step 4 

Find ``||controller:move mySprite with buttons||`` in ``||controller:Controller||``, and drag it into the ``||loops:on start||`` after ``||variables:set mySprite to||``.

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
controller.moveSprite(mySprite)
```

## Step 5 @fullscreen

Drag another ``||variables:set mySprite to||`` into the ``||loops:on start||``. Click on ``||variables:mySprite||``, and select ``||variables:Create a new variable||``, and enter ``doughnut`` as the variable name.

This will create **another** ``||sprites:Sprite||``, that will not be controlled by the player.

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

## Step 6

Click on the grey box for ``||variables:doughnut||``, and then select the ``Gallery`` view. Scroll to find the image of a small doughnut (without sprinkles), and select it to load it into the image editor.

The image editor has a lot of other images in it; feel free to look around and choose another one if it looks better to you!

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
```

## Step 7 @fullscreen

Find ``||sprites:set mySprite position to x 0 y 0||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||`` after ``||variables:set doughnut to||``. Click on ``||variables:mySprite||`` in the new block to open a drop down menu, and select ``||variables:doughnut||`` to change the ``||sprites:Sprite||`` that it affects.

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
doughnut.setPosition(0, 0)
```

## Step 8 @fullscreen

Select ``||sprites:x||`` and ``||sprites:y||`` positions for the ``||variables:doughnut||`` in ``||sprites:set doughnut position to||``. Use the image below as a guide for where the different ``||sprites:x||`` and ``||sprites:y||`` values will place the ``||sprites:Sprite||``.

![Positioning Hint](/static/tutorials/eat-the-doughnut/position-hint.png)

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
doughnut.setPosition(140, 100)
```

## Step 9

Find ``||info:start countdown 10s||`` in ``||info:Info||``. Drag it into the ``||loops:on start||`` after ``||sprites:set doughnut position to||``, and change the ``10`` to ``5``.

This will start a countdown that will soon end the game; we'd better add a way to win!

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
info.startCountdown(5)
```

## Step 10 @fullscreen

Find ``||sprites:on sprite of kind Player overlaps otherSprite of kind Enemy||`` in ``||sprites:Sprites||``, and drag it into the workspace. In the ``||variables:doughnut||`` ``||sprites:Sprite||``, change the ``||sprites:kind||`` from ``||sprites:Player||`` to ``||sprites:Enemy||``.

This will create an **event** that occurs when a ``||sprites:Player Sprite||`` touches and ``||sprites:Enemy Sprite||``. Events allow you to set blocks to run whenever something occurs; for example, ``||loops:on start||`` is an event that lets you set code to run as soon as the game is started!

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let doughnut: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
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
info.startCountdown(5)
```

## Step 11 @fullscreen

Find ``||game:game over||`` in ``||game:Game||``, and drag it into the ``||sprites:on overlap||`` event. Click on the ``(+)`` to add an option to win the game, and make sure it is set to ``||logic:true||``.

This will make it so that when the ``||sprites:overlap event||`` occurs, the player will win the game.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let doughnut: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	game.over(true)
})
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
info.startCountdown(5)
```

## Complete

Congratulations, you have completed your game! Try to move your character around the screen to collect the doughnut before time runs out!