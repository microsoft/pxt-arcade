# Chase the Pizza

### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## Introduction @unplugged

![Game animation](/static/tutorials/chase-the-pizza.gif)

In this tutorial you will create a game with 2 sprites, a ``||sprites:Player||`` sprite and a ``||sprites:Food||`` sprite. The goal of the game is to eat as much pizza as you can before the time runs out! Each time your player catches the pizza, you gain points and the countdown is restarted.

## Step 1

Open the ``||scene:Scene||`` Toolbox drawer and drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your Workspace. Click **Next** to go to the next step in the Tutorial.

```blocks
// @highlight
scene.setBackgroundColor(0)
```

## Step 2

In the ``||scene:set background color||`` block, click on the grey color oval to open the color palette and select a background color. To see what this looks like in your game, look at the Game Simulator on the left side of the screen.

![Choose background color](/static/tutorials/chase-the-pizza/background-color.jpg)

```blocks
// @highlight
scene.setBackgroundColor(7)
```

## Step 3

Open the ``||sprites:Sprites||`` Toolbox drawer and drag the first block, ``||variables:set mySprite||`` into the ``||loops:on start|`` block on your Workspace. This will create a new ``||sprites:Player||`` character for your game.

```blocks
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

## Step 4

Draw your ``||sprites:Player||`` character by clicking on the grey square in the ``||variables:set mySprite||`` block to open the Sprite Editor. Use the color palette and design tools to draw an image on the canvas. Click **Done** when you are finished.

![Image editor](/static/tutorials/chase-the-pizza/image-editor.gif)

## Step 5

Open the ``||controller:Controller||`` Toolbox drawer and drag the ``||controller:move mySprite with buttons||`` block after the ``||variables:set mySprite||`` block. This will allow you to move your ``||sprites:Player||`` sprite around the screen with the arrow keys. Try it out in the Game Simulator

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 . 
. 5 5 5 5 f f f f f f 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Step 6

Open the ``||sprites:Sprites||`` Toolbox drawer and drag another ``||variables:set mySprite2||`` block into the ``||loops:on start||`` block on your Workspace. This will be the ``||variables:pizza||`` sprite in our game.

```blocks
let mySprite: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 . 
. 5 5 5 5 f f f f f f 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
pizza = sprites.create(img`
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
`, SpriteKind.Food)
```

## Step 7

In the set ``||variables:mySprite2||`` block, click on ``||variables:mySprite2||`` to open the menu, and select ``Rename variable...`` Type in ``pizza`` as the new sprite name and click **Ok**.

Click on the grey box for ``||variables:pizza||`` and then select the Gallery view. Scroll to find the image of a small pizza (or any other image you like!) and select it to load into the image editor.

![Image editor](/static/tutorials/chase-the-pizza/image-gal.gif)

## Step 8

Find ``||info:start countdown 10s||`` in ``||info:Info||``. Drag it down to bottom of the ``||loops:on start||`` and change the ``10`` to ``3``.

This will start a countdown that will soon end the game; we'll need to add a way to win!

```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 . 
. 5 5 5 5 f f f f f f 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
// @highlight
info.startCountdown(3)
```

## Step 9

Find the ``||sprites:on sprite overlaps otherSprite||`` block in ``||sprites:Sprites||`` and drag it into the workspace. Change the ``||sprites:kind||`` of ``||variables:otherSprite||`` from ``||sprites:Player||`` to ``||sprites:Food||``.

This will create an **event** that occurs when a ``||sprites:Player Sprite||`` touches and ``||sprites:Food Sprite||``. Events allow you to set blocks to run whenever something occurs; for example, ``||loops:on start||`` is an event that lets you set code to run as soon as the game is started!

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	
})
```

## Step 10

When an overlap is detected, the player should have a point added to their score. Find the ``||info:change score by||`` block in ``||info:Info||`` and add it to the ``||sprites:on ... overlap ...||`` event.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
    info.changeScoreBy(1)
})
```

## Step 11

Also, when the overlap happens, the pizza should move to another position on the screen.
Using the ``||math:pick random||`` block, we can generate an ``x`` position from ``20`` to ``140`` and a ``y`` position from ``20`` to ``100``.

The screen is 160 pixels wide by 120 pixels high and we want to have the pizza away from the side so that it doesn't get clipped. 

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    // @highlight
    pizza.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
})
```

## Step 12

One final thing for the overlap event, the countdown should also restart. Drag another ``||info:start countdown||`` into the ``||sprites: on ... overlap ...||`` event. Set the countdown to `3` seconds.

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 80))
    // @highlight
    info.startCountdown(3)
})
```

## Complete

Congratulations, you have completed your game! Try to move your character around the screen to collect the pizza before time runs out!

![Game animation](/static/tutorials/chase-the-pizza.gif)
