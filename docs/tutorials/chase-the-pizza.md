# Chase the Pizza

### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## {Introduction @unplugged}

![Game animation](/static/tutorials/chase-the-pizza.gif)

In this tutorial you will create a game with 2 sprites, a ``||sprites:Player||`` sprite and a ``||sprites:Food||`` sprite. The goal of the game is to eat as much pizza as you can before the time runs out! Each time your player catches the pizza, you gain points and the countdown is restarted.

## {Step 1}

Open the ``||scene:Scene||`` Toolbox drawer and drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your Workspace. Click **Next** to go to the next step in the Tutorial.

```blocks
// @highlight
scene.setBackgroundColor(0)
```

## {Step 2}

In the ``||scene:set background color||`` block, click on the grey color oval to open the color palette and select a background color. To see what this looks like in your game, look at the Game Simulator window.

![Choose background color](/static/tutorials/chase-the-pizza/background-color.jpg)

## {Step 3}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag the first block, ``||variables(sprites):set mySprite||`` into the ``||loops:on start||`` block on your Workspace. This will create a new ``||sprites:Player||`` character for your game.

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

## {Step 4}

Draw your ``||sprites:Player||`` character by clicking on the grey square in the ``||variables(sprites):set mySprite||`` block to open the Sprite Editor. Use the color palette and design tools to draw an image on the canvas. Click **Done** when you are finished.

![Image editor](/static/tutorials/chase-the-pizza/image-editor.gif)

## {Step 5}

Open the ``||controller:Controller||`` Toolbox drawer and drag the ``||controller:move mySprite with buttons||`` block after the ``||variables(sprites):set mySprite||`` block. This will allow you to move your ``||sprites:Player||`` sprite around the screen with the arrow keys. Try it out in the Game Simulator

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

## {Step 6}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag another ``||variables(sprites):set mySprite2||`` block into the ``||loops:on start||`` block on your Workspace. This will be the **pizza** sprite in our game.

```blocks
let mySprite: Sprite = null
let mySprite2: Sprite = null
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
mySprite2 = sprites.create(img`
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

## {Step 7}

In the ``||variables(sprites):set mySprite2||`` block, click on ``||variables(noclick):mySprite2||`` to open the menu, and select ``Rename variable...`` Type in ``pizza`` as the new sprite name and click **Ok**.

![Rename mySprite2](/static/tutorials/chase-the-pizza/rename-mysprite2.gif)

## {Step 8}

In the ``||variables(noclick):set pizza||`` block, click on the ``||sprites:Player||`` kind to open the menu of different Sprite kinds. Select ``||sprites:Food||`` as your ``||variables(noclick):pizza||`` sprite kind.

![Set sprite kind](/static/tutorials/chase-the-pizza/sprite-kind.jpg)

## {Step 9}

Click on the grey box for ``||variables(noclick):set pizza||`` and then select the **Gallery** view. Scroll to find the image of a small pizza (or any other image you like!) and select it to load into the image editor.

![Image gallery](/static/tutorials/chase-the-pizza/image-gallery.gif)

## {Step 10}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag the ``||sprites:on sprite overlaps otherSprite||`` block onto your Workspace (you can place this anywhere).

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {

})
```

## {Step 11}

In the ``||sprites:on sprite overlaps otherSprite||`` block, click on the second ``||sprites:Player||`` kind after ``||variables(noclick):otherSprite||`` to open the menu. Select ``||sprites:Food||`` as its kind.

![Overlap sprite kind](/static/tutorials/chase-the-pizza/overlap-kind-sprite.png)

## {Step 12}

When our ``||sprites:Player||`` overlaps with the ``||variables(noclick):pizza||`` sprite, let’s add a point to our game score. Open the ``||info:Info||`` Toolbox drawer and drag the ``||info:change score||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```

## {Step 13}

Let’s set the position for ``||variables(noclick):pizza||`` to random locations around the screen. Open the ``||sprites:Sprites||`` Toolbox drawer and drag the ``||sprites:set mySprite position||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block on your Workspace.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    mySprite.setPosition(0, 0)
})
```

## {Step 14}

In the ``||sprites:set mySprite position||`` block, click on the ``||variables(noclick):mySprite||`` variable to open the menu, and select your ``||variables(noclick):pizza||`` sprite.

![Change mySprite to pizza](/static/tutorials/chase-the-pizza/sprite-position-rename.png)

## {Step 15}

Open the ``||math:Math||`` Toolbox drawer and drag two ``||math:pick random||`` blocks onto the Workspace. Drop one into the ``x`` coordinate of the ``||sprites:set pizza position||`` block, and the other into the ``y`` coordinate replacing the ``0`` values.

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 10), randint(0, 10))
})
```

## {Step 16}

The Arcade game screen is `160` pixels wide, and `120` pixels high. In the first ``||math:pick random||`` block in the `x` coordinate of the ``||sprites:set pizza position||`` block, change the maximum value from ``10`` to **160**. In the second ``||math:pick random||`` block in the ``y`` coordinate, change the maximum value from ``10`` to **120**.

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
})
```

## {Step 17}

Let’s restart our countdown each time. Open the ``||info:Info||`` Toolbox drawer and drag a ``||info:start countdown||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block on your Workspace.

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(10)
})
```
## {Complete}

Congratulations, you have completed your game! Use the Game Simulator to play by moving your ``||sprites:Player||`` around the screen to try and eat as much pizza as possible before the time runs out. What’s your high score?

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

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(10)
})
```
