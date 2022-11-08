# Barrel Dodger

## {Introduction @unplugged}

Make an action game where the player has to react quickly to avoid fast moving barrels. Get hit and it's **GAME OVER!**

![Barrel Dodger game playing](/static/lessons/barrel-dodger/barrel-dodger.gif)

## {Step 1}

Let's create a platform base at the bottom of the screen.
Get a ``||scene:set tilemap to||`` and put it in ``||loops:on start||``.
Click on the gray box to open the ``tilemap editor``.
In the bottom left corner, set the size of the tilemap to ``10x8``
and draw a platform in the bottom two rows of the tilemap.
Finally, click the `Wall` button, and fill in those two rows with wall tiles.

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
// @highlight
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

## {Step 2}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||`` and draw your player sprite.

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
// @highlight
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
// @highlight
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
```

## {Step 3}

Open the tilemap editor and find the tile position where you want to place your sprite (hint: it's 1, 5!). You can see the position on the lower left of the editor.
Use the ``||scene:place mySprite on top of tilemap col row||`` block to position your player on that tile.

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
// @highlight
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
// @highlight
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
```

## {Step 4}

Let's give the sprite the ability to jump when we press a button. We do this by moving
the player upward in an ``||controller:on A button pressed||`` event. Inside the event, make the sprite move up with a ``||sprites:vy (velocity y)||``. Use `-200` for the `vy` value.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
```

## {Step 5}

Drag a ``||sprites:set mySprite x||`` into the ``||loops:on start||``, click the dropdown, and select ``||sprites:ay (acceleration y)||``. Set the value to `500` so that character is pulled down by "gravity".

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
// @highlight
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
// @highlight
mySprite.ay = 500
```


## {Step 6}

We need to make sure that the sprite is on the ground before jumping, so drag an ``||logic:if then||`` conditional into the ``||controller:on A button pressed||``. Replace `true` with ``||scene:is mySprite hitting wall||`` and change the ``left`` side to ``bottom``. Now, drag the ``||sprites:vy (velocity y)||`` that was added earlier inside the ``||logic:if then||`` conditional.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
```

## {Step 7}

Let's have some barrels moving at random speeds. Make them start from the right side of the screen and fly towards the player sprite. Move an ``||game:on game update every||`` onto the editor and set the interval time to `2000` milliseconds. Drag a ``||sprites:projectile from side||`` into it and draw the barrel.

![Draw a barrel in the image editor](/static/lessons/barrel-dodger/draw-barrel.gif)

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, 100, 50)
})
```

## {Step 8}

Drag a ``||math:pick random||`` block into where ``vx`` is and set the range from ``-100`` to ``-80``. Also, set the ``vy`` speed for the projectile to ``0``.

```blocks
game.onUpdateInterval(2000, function () {
    // @highlight
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

## {Step 9}

Find ``||scene:place mySprite on top of tilemap col row||`` and drag it into the ``||game:on game update interval||`` after ``||variables(sprites):set projectile to||``.
Set the ``||scene:col||`` to 9 and the ``||scene:row||`` to 5, which is the tile on the right side of the screen directly above the wall.
Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):projectile||``, so that it refers to the sprite that was just created.

```blocks
game.onUpdateInterval(2000, function () {
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
    // @highlight
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
```

## {Step 10}

Each time a barrel starts to move we want to increase the score. Get a ``||info:change score by||`` and put it into ``||game:on game update every||``.

```blocks
game.onUpdateInterval(2000, function () {
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
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    // @highlight
    info.changeScoreBy(1)
})
```

## {Step 11}

Our final step is to end the game if a barrel touches the sprite player. Drag an ``||sprites:on sprite overlaps||`` onto the editor. Set the sprite kind for ``otherSprite`` to ``Projectile``. End the game with a ``||game:game over||`` block inside.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
```

## {Complete}

Awesome! Congratulations on making the Barrel Dodger game!
