# Barrel Dodger

Make an action game where the player has to move quick to avoid fast moving barrels. Get hit and it's **GAME OVER!**

![Dodging barrels](/static/lessons/barrel-dodger/barrel-dodger.png)

## Step 1

OK, let's get started by making our ``Player`` sprite. Start by placing a ``||variables:set mySprite to||`` block in an ``||loops:on start||`` block to create your sprite.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img``, SpriteKind.Player)
```

## Step 2

Draw your player sprite's image using the image editor.

![Sprite image editor](/static/lessons/barrel-dodger/draw-player.gif)

## Step 3

We want to put our sprite character nearer to the left side so the screen so drag a ``||sprites:set mySprite position||`` into ``||loops:on start||`` and set ``x`` to `40` and ``y`` to `70`.

```blocks
enum SpriteKind {
    Player,
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
mySprite.setPosition(40, 70)
```

## Step 4

Drag a ``||sprites:set mySprite x(horizontal position)||`` into the ``||loops:on start||``, click the dropdown and select ``ay (acceleration y)``. Set the value to `500` so that character is pulled down by "gravity".

```blocks
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
`, 0)
mySprite.setPosition(40, 70)
mySprite.ay = 500
```

## Step 5

Now let's create a platform base at the bottom of the screen. Drag a ``||scene:set tile to||`` into ``||loops:on start||``. Set the tile index color. This index value is set in the tile map where we want the platform tiles to show up in the scene. In the next box, fill in the tile image with the pixels you want with the image editor. Click 
the **(+)** symbol and turn the ``wall`` attribute **on**. This makes the sprite stop when it moves into the tile and it will won't fall through our platform.

Get a ``||scene:set tilemap to||`` and put it under the ``||scene:set tile to||``. Using the tile index color value, draw the platform at the bottom of the map.

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

Next, let's have some barrels moving at random speeds. Make them start from the right side of the screen and fly towards the player sprite. Move an ``||game:on game update every||`` onto the editor and set the interval time to `750` milliseconds. Drag a ``||sprites:projectile from side||`` into it. Click the empty image box in the projectile block and change the dimensions to 8x8. Draw the barrel.

![Draw a barrel in the image editor](/static/lessons/barrel-dodger/draw-barrel.gif)

After that, drag a ``||math:pick random||`` block into where ``vx`` is and set the range from ``-80`` to ``-100``.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-80, -100), 0)
})
```

## Step 7

Now we want add a ``||sprites:set mySprite x(horizontal position)||`` to ``||game:on game update every||``. Get one of those and in the dropdown, select ``lifespan``. Change the variable to ``projectile`` instead of ``mySprite``. Make the lifespan value be `60`. Drag a  ``||sprites:set mySprite position to||`` into the bottom of ``||game:on game update every||`` and change the variable to ``projectile``. Set the ``x`` value to `160` and the ``y`` value to `90`.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-80, -100), 0)
    projectile.lifespan = 60
    projectile.setPosition(160, 90)
})
```

## Step 8

Let's give the sprite the ability to jump when we press a button. We do this with  ``||controller:on any button pressed||``. Find that block and drag it out onto the editor. Change the button from ``any`` to ``A``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    
})
```

## Step 9

We need to make sure that the sprite is on the ground before jumping, so drag an ``||logic:if then||`` conditional into the ``||controller:on A button pressed||``. Replace `true` with ``||scene:is mySprite hitting wall||`` and change ``left`` side ``bottom``. Finally, put in a ``||sprites:set mySprite x(horizontal position)||`` and  choose ``||sprites:vy (velocity y)||`` from the dropdown. Set the value to `-150`.

```blocks
enum SpriteKind {
    Player,
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
`, 0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
```

## Step 10

Each time a barrel starts to move we want to increase the score. Get a ``||info:change score by||`` and put it into ``||game:on game update every||``. Leave the value at `1`.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectileFromSide(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-80, -100), 0)
    projectile.lifespan = 60
    projectile.setPosition(160, 90)
    info.changeScoreBy(1)
})
```

## Step 11

Our final step is to end the game if a barrel touches the sprite player. Drag an ``||sprites:on sprite overlaps||`` onto the editor. Set the sprite kind for ``otherSprite`` to ``Projectile``. End the game with a ``||game:game over||`` block inside.

```blocks
enum SpriteKind {
    Player,
    Projectile
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over()
})
```

## Complete

Awesome! Congratulations on making the Barrel Dodger game! You are on your way to making amazing games with  @boardname@.


![Barrel Dodger game playing](/static/lessons/barrel-dodger/barrel-dodger.gif)