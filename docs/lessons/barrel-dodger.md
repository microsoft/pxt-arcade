# Barrel Dodger

Make an action game where the player has to react quickly to avoid fast moving barrels. Get hit and it's **GAME OVER!**

![Barrel Dodger game playing](/static/lessons/barrel-dodger/barrel-dodger.gif)

## Step 1

OK, let's get started by making our ``Player`` sprite. Start by placing a ``||variables(sprites):set mySprite to||`` block in an ``||loops:on start||`` block to create your sprite.

```blocks
let mySprite: Sprite = sprites.create(img``, SpriteKind.Player)
```

## Step 2

Draw your player sprite's image using the image editor.

![Sprite image editor](/static/lessons/barrel-dodger/draw-player.gif)

## Step 3

We want to put our sprite character nearer to the left side of the screen so drag a ``||sprites:set mySprite position||`` into ``||loops:on start||`` and set ``x`` to `20` and ``y`` to `70`.

```blocks
let mySprite: Sprite = sprites.create(img`
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

Drag a ``||variables(sprites):set mySprite x||`` into the ``||loops:on start||``, click the dropdown, and select ``ay (acceleration y)``. Set the value to `500` so that character is pulled down by "gravity".

```blocks
let mySprite: Sprite = sprites.create(img`
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

Now let's create a platform base at the bottom of the screen.
Get a ``||scene:set tilemap to||`` and put it in ``||loops:on start||``.
Click on the gray box to open the ``tilemap editor``.
In the bottom left corner, set the size of the tilemap to ``10x8``
and draw a platform for in the bottom two rows of the tilemap.
Finally, click the `Wall` button, and fill in those two rows with walls.

![Example of drawing tilemap](/static/lessons/barrel-dodger/draw-tilemap.gif)

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))

```

## Step 6

Next, let's have some barrels moving at random speeds. Make them start from the right side of the screen and fly towards the player sprite. Move an ``||game:on game update every||`` onto the editor and set the interval time to `1500` milliseconds. Drag a ``||sprites:projectile from side||`` into it. Click the empty image box in the projectile block and change the dimensions to 8x8. Draw the barrel.

![Draw a barrel in the image editor](/static/lessons/barrel-dodger/draw-barrel.gif)

After that, drag a ``||math:pick random||`` block into where ``vx`` is and set the range from ``-100`` to ``-80``.

```blocks
game.onUpdateInterval(1500, function () {
    let projectile = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, randint(-100, -80), 0)
})
```

## Step 7

Find ``||scene:place mySprite on top of tilemap col row||`` and drag it into the ``||game:on game update interval||`` after ``||variables:set projectile to||``.
Set the ``||scene:col||`` to 9 and the ``||scene:row||`` to 5, which is the tile on the right side of the screen directly above the wall.
Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):projectile||``, so that it refers to the sprite that was just created.

```blocks
game.onUpdateInterval(1500, function () {
    let  projectile = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
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
let mySprite = sprites.create(img`
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
game.onUpdateInterval(1500, function () {
    let projectile = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```

## Step 11

Our final step is to end the game if a barrel touches the sprite player. Drag an ``||sprites:on sprite overlaps||`` onto the editor. Set the sprite kind for ``otherSprite`` to ``Projectile``. End the game with a ``||game:game over||`` block inside.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
```

## Complete

Awesome! Congratulations on making the Barrel Dodger game! You are on your way to making amazing games with @boardname@.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite = sprites.create(img`
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

namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
game.onUpdateInterval(1500, function () {
    let projectile = sprites.createProjectileFromSide(img`
        1 e e e e e e 1
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        1 e e e e e e 1
    `, randint(-100, -80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```
