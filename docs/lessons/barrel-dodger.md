# Barrel Dodger

Make an action game where the player has to react quickly to avoid fast moving barrels. Get hit and it's **GAME OVER!**

![Dodging barrels](/static/lessons/barrel-dodger/barrel-dodger.png)

## Step 1

OK, let's get started by making our ``Player`` sprite. Start by placing a ``||variables:set mySprite to||`` block in an ``||loops:on start||`` block to create your sprite.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img``, SpriteKind.Player)
```

## Step 2

Draw your player sprite's image using the image editor.

![Sprite image editor](/static/lessons/barrel-dodger/draw-player.gif)

## Step 3

We want to put our sprite character nearer to the left side of the screen so drag a ``||sprites:set mySprite position||`` into ``||loops:on start||`` and set ``x`` to `20` and ``y`` to `70`.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(20, 70)
```

## Step 4

Drag a ``||sprites:set mySprite x||`` into the ``||loops:on start||``, click the dropdown, and select ``ay (acceleration y)``. Set the value to `500` so that character is pulled down by "gravity".

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(20, 70)
mySprite.ay = 500
```

## Step 5

Now let's create a platform base at the bottom of the screen. Drag a ``||scene:set tile to||`` into ``||loops:on start||``. Set the tile index color. This index value is set in the tile map where we want the platform tiles to show up in the scene. In the next box, fill in the tile image with the pixels you want with the image editor. Click the **(+)** symbol and turn the ``wall`` attribute **on**. This makes the sprite stop when it moves into the tile and it will won't fall through our platform.

Get a ``||scene:set tilemap to||`` and put it under the ``||scene:set tile to||``. Using the tile index color value, draw the platform at the bottom of the map - make sure that it is **two tiles tall** from the bottom of the screen.

```blocks
scene.setTile(3, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, true)
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`)
```

## Step 6

Next, let's have some barrels moving at random speeds. Make them start from the right side of the screen and fly towards the player sprite. Move an ``||game:on game update every||`` onto the editor and set the interval time to `1500` milliseconds. Drag a ``||sprites:projectile from side||`` into it. Click the empty image box in the projectile block and change the dimensions to 8x8. Draw the barrel.

![Draw a barrel in the image editor](/static/lessons/barrel-dodger/draw-barrel.gif)

After that, drag a ``||math:pick random||`` block into where ``vx`` is and set the range from ``-100`` to ``-80``.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-100, -80), 0)
})
```

## Step 7

Find ``||variables:set myTile to||`` in ``||scene:Scene||`` and drag it into the ``||game:on game update interval||``. Set the ``||scene:col||`` to 9 and the ``||scene:row||`` to 5, which is the tile on the right side of the screen directly above the wall. Drag ``||scene:on top of myTile place mySprite||`` after ``||variables:set myTile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

```blocks
let projectile: Sprite = null
let myTile: tiles.Tile = null
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-100, -80), 0)
    myTile = scene.getTile(9, 5)
    myTile.place(projectile)
})
```

## Step 8

Let's give the sprite the ability to jump when we press a button. We do this with  ``||controller:on any button pressed||``. Find that block and drag it out onto the editor. Change the button from ``any`` to ``A``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    
})
```

## Step 9

We need to make sure that the sprite is on the ground before jumping, so drag an ``||logic:if then||`` conditional into the ``||controller:on A button pressed||``. Replace `true` with ``||scene:is mySprite hitting wall||`` and change ``left`` side ``bottom``. Finally, put in a ``||sprites:set mySprite x||`` and choose ``||sprites:vy (velocity y)||`` from the dropdown. Set the value to `-250`.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
```

## Step 10

Each time a barrel starts to move we want to increase the score. Get a ``||info:change score by||`` and put it into ``||game:on game update every||``. Leave the value at `1`.

```blocks
let projectile: Sprite = null
let myTile: tiles.Tile = null
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-100, -80), 0)
    info.changeScoreBy(1)
    myTile = scene.getTile(9, 5)
    myTile.place(projectile)
})
```

## Step 11

Our final step is to end the game if a barrel touches the sprite player. Drag an ``||sprites:on sprite overlaps||`` onto the editor. Set the sprite kind for ``otherSprite`` to ``Projectile``. End the game with a ``||game:game over||`` block inside.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
```

## Complete

Awesome! Congratulations on making the Barrel Dodger game! You are on your way to making amazing games with @boardname@.

![Barrel Dodger game playing](/static/lessons/barrel-dodger/barrel-dodger.gif)

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let myTile: tiles.Tile = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
mySprite.setPosition(20, 70)
mySprite.ay = 500
scene.setTile(3, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`, true)
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3
`)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
        1 e e e e e e 1
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        1 e e e e e e 1
    `, Math.randomRange(-100, -80), 0)
    info.changeScoreBy(1)
    myTile = scene.getTile(9, 5)
    myTile.place(projectile)
})
```