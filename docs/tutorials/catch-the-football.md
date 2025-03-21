# Catch the Football

### ~button /#tutorial:/tutorials/catch-the-football

Try this tutorial!

### ~

## {Introduction @unplugged}

![Game animation](/static/tutorials/catch-the-football.gif)

In this tutorial you will create a game with 2 sprites, a ``||sprites:Player||`` sprite and a ``||sprites:Ball||`` sprite. The goal of the game is to catch as many balls as you can before the time runs out! Each time your player catches a ball, you gain points and the countdown is restarted.

## {Step 1}

Open the ``||scene:Scene||`` Toolbox drawer and drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your Workspace. Click **Next** to go to the next step in the Tutorial.

```blocks
// @highlight
scene.setBackgroundColor(0)
```

## {Step 2}

In the ``||scene:set background color||`` block, click on the grey color oval to open the color palette and select a color for the football field. To see what this looks like in your game, look at the Game Simulator on the left side of the screen.

![Choose background color](/static/tutorials/chase-the-pizza/background-color.jpg)

## {Step 3}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag the first block, ``||variables(sprites):set mySprite||`` into the ``||loops:on start|`` block on your Workspace. This will create a new ``||sprites:Player||`` character for your game.

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

Choose your ``||sprites:Player||`` character by clicking on the grey square in the ``||variables(sprites):set mySprite||`` block to open the Sprite Editor. Click on the **Gallery** tab and choose your player image. Click **Done** when you are finished.

![Edit player sprite image](/static/tutorials/catch-the-football/choose-player-image.gif)

## {Step 5}

Open the ``||controller:Controller||`` Toolbox drawer and drag the ``||controller:move mySprite with buttons||`` block after the ``||variables(sprites):set mySprite||`` block. This will allow you to move your ``||sprites:Player||`` sprite around the screen with the arrow keys. Try it out in the Game Simulator

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## {Step 6}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag another set ``||variables(sprites):set mySprite2||`` block into the ``||loops:on start||`` block on your Workspace. This will be the **ball** sprite in our game.

```blocks
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
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

In the set ``||variables(sprites):set mySprite2||`` block, click on ``||variables(noclick):mySprite2||`` to open the menu, and select ``Rename variable...`` Type in ``football`` as the new sprite name and click **Ok**.

![Rename mySprite2](/static/tutorials/catch-the-football/rename-variable.gif)

## {Step 8}

In the ``||variables:set football||`` block, click on the ``||sprites:Player||`` kind to open the menu of different Sprite kinds.  Select ``||sprites:Projectile||`` as your ``||variables(noclick):football||`` sprite kind.

![Set sprite kind](/static/tutorials/catch-the-football/sprite-kind.png)

## {Step 9}

Draw your football sprite by clicking on the grey square in the ``||variables(sprites):set football||`` block to open the Sprite Editor

![Edit football sprite image](/static/tutorials/catch-the-football/football-sprite-editor.gif)

## {Step 10}

Open the ``||sprites:Sprites||`` Toolbox drawer and drag the ``||sprites:on sprite overlaps otherSprite||`` block onto your Workspace (you can place this anywhere).

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {

})
```

## {Step 11}

In the ``||sprites:on sprite overlaps otherSprite||`` block, click on the second ``||sprites:Player||`` kind after ``||variables(noclick):otherSprite||`` to open the menu. Select ``||sprites:Projectile||`` as its kind.

![Overlap sprite kind](/static/tutorials/catch-the-football/overlaps-projectile.png)

## {Step 12}

When our ``||sprites:Player||`` overlaps with the ``||variables(noclick):football||`` sprite, let’s add a point to our game score. Open the ``||info:Info||`` Toolbox drawer and drag the ``||info:change score||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```

## {Step 13}

Let’s set the position for ``||variables(noclick):football||`` to random locations around the screen. Open the ``||sprites:Sprites||`` Toolbox drawer and drag the ``||sprites(sprites):set mySprite position||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block on your Workspace.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    mySprite.setPosition(0, 0)
})
```

## {Step 14}

In the ``||sprites:set mySprite position||`` block, click on the ``||variables(noclick):mySprite||`` variable to open the menu, and select your ``||variables(noclick):football||`` sprite.

![Change mySprite to football](/static/tutorials/catch-the-football/set-football-position.png)

## {Step 15}

Open the ``||math:Math||`` Toolbox drawer and drag two ``||math:pick random||`` blocks onto the Workspace. Drop one into the ``x`` coordinate of the ``||sprites:set football position||`` block, and the other into the ``y`` coordinate replacing the ``0`` values.

```blocks
let football: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    football.setPosition(randint(0, 10), randint(0, 10))
})
```

## {Step 16}

The Arcade game screen is `160` pixels wide, and `120` pixels high. In the first ``||math:pick random||`` block in the `x` coordinate of the ``||sprites:set football position||`` block, change the maximum value from ``10`` to **160**. In the second ``||math:pick random||`` block in the ``y`` coordinate, change the maximum value from ``10`` to **120**.

```blocks
let football: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    football.setPosition(randint(0, 160), randint(0, 120))
})
```

## {Step 17}

Let’s restart our countdown each time. Open the ``||info:Info||`` Toolbox drawer and drag a ``||info:start countdown||`` block into the ``||sprites:on sprite overlaps otherSprite||`` block on your Workspace.

```blocks
let football: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    football.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(10)
})
```
## {Complete}

Congratulations, you have completed your game! Use the Game Simulator to play by moving your ``||sprites:Player||`` around the screen to try and catch as much balls as possible before the time runs out. What’s your high score?

```blocks
let football: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . f f f f . . . .
    . . f f e e e e f f . .
    . f f e e e e e e f f .
    f f f f 4 e e e f f f f
    f f f 4 4 4 e e f f f f
    f f f 4 4 4 4 e e f f f
    f 4 e 4 4 4 4 4 4 e 4 f
    f 4 4 f f 4 4 f f 4 4 f
    f e 4 d d d d d d 4 e f
    . f e d d b b d d e f .
    . f f e 4 4 4 4 e f f .
    e 4 f b 1 1 1 1 b f 4 e
    4 d f 1 1 1 1 1 1 f d 4
    4 4 f 6 6 6 6 6 6 f 4 4
    . . . f f f f f f . . .
    . . . f f . . f f . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
football = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . e e . . . . . .
    . . . . . . e e e e e e . . . .
    . . . . e e e e e e e e e e . .
    . . e e e e e e e e e e e e e .
    . e e e e e e e e e e e e e e e
    e e e 1 1 1 e 1 1 1 e 1 1 1 e e
    e e e e e e e e e e e e e e e e
    . e e e e e e e e e e e e e e e
    . . e e e e e e e e e e e e e .
    . . . . . e e e e e e e . . . .
    . . . . . . . e e e . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    football.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(10)
})
```
