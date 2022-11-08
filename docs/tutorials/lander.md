# Lander

### ~button /#tutorial:/tutorials/lander

Let's create a lunar landing game!

### ~

## {Introduction @unplugged}

![Game animation](/static/tutorials/lander.gif)

Build a simple landing game where the player's goal is to land their airship on the landing pad.
When the player makes contact with the surface or lands sideways, it's game over!
The example game is based in space on a lunar lander,
but you can make it into any scenario you want -
for example, a helicopter flying through a jungle,
or a scuba diver avoiding coral.

## {Step 1 @fullscreen}

Find ``||scene:set tilemap to||`` in ``||scene:Scene||`` and drag it into ``||loops:on start||``.
Click on the gray box to open the tilemap editor.

Go into the image editor, set the size to **10 x 8** (this will fill the screen)
and draw obstacles for the player to avoid,
then draw a landing pad at the very end.
Make sure to leave one tile as a 'starting pad',
and set that tile to be a **Wall**.
This is where we create the scene with obstacles in the path of the ship, make sure it's possible to complete!

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000202020200000000000000020202000000020000000202020000020202000002020000000202020000000200000002020202000000000002020202020200000003020202020202020201`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 . . . . . . . . .
    `,
    [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
    TileScale.Sixteen
))
```

## {Step 2 @fullscreen}

Go into ``||sprites:Sprites||``, grab a ``||sprites:set sprite of kind Player||``, and drag it into ``||loops:on start||``. Click the drop down showing ``||variables(noclick):mySprite||`` and rename it to ``||variables(noclick):lander||``. In the ``||sprites:sprite of kind Player||`` block, click on the grey box to open the **image editor**. Draw a spaceship.

```blocks
let lander = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . d d d . . . . . . .
    . . . . . d d d d d . . . . . .
    . . . . d d 1 1 1 d d . . . . .
    . . . . d d 1 1 1 d d . . . . .
    . . . . d d d d d d d . . . . .
    . . . . . d d d d d . . . . . .
    . . . . . f d d d f . . . . . .
    . . . . f f . . . f f . . . . .
    . . . 2 . . . . . . . 2 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Step 3 @fullscreen}

Find ``||sprites:set mySprite position to||`` under ``||sprites:Sprites||``, and drag it below ``||sprites:set lander to sprite of kind Player||``. Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):lander||`` then use into the position selector (click the space for ``x`` and click on the position selector) and place it above where you placed your starting position.

```blocks
let lander: Sprite = null
lander.setPosition(6, 102)
```

## {Step 4 @fullscreen}

In ``||sprites:Sprites||`` grab a ``||sprites:set sprite stay in screen||`` and drag it under the ``||sprites:set lander position to||`` block. Set the variable to ``||variables(noclick):lander||``. Next, grab a ``||sprites:set sprite x||`` and drag it under the ``||sprites:set stay in screen block||``. Set the drop down to ``ay`` and make the value be ``30``.

```blocks
let lander: Sprite = null
lander.setStayInScreen(true)
lander.ay = 30
```

## {Step 5 @fullscreen}

In ``||variables:Variables||`` grab a ``||variables:set to||`` block and drag it into ``||loops:on start||``. Change the variable name to ``||variables(noclick):angle||``, and then drag a text block from ``||text:Text||`` into the value. Set the value to ``"straight"``.

```blocks
let angle = "straight"
```

## {Step 6 @fullscreen}

Drag an ``||controller:on A button pressed||`` from ``||controller:Controller||`` and place it in your workspace. From ``||logic:Logic||``, grab an ``||logic:if then else||`` statement and drag it into ``||controller:on A button pressed||``. Click the **(+)** symbol at the end. Grab a ``||logic:0 = 0||`` block from ``||logic:Logic||`` and place it in the ``||logic:if||``. Duplicate the ``||logic:0 = 0||`` block and place it in the ``||logic:if else||`` section. For both ``||logic:0 = 0||`` statements, set the first value to ``||variables(noclick):angle||``. Grab a ``||text:" "||`` and place it in the second value of both equal statements. For the first ``||logic:if||`` statement, check that ``||variables(noclick):angle||`` is equal to ``"straight"`` by changing ``" "`` to ``"straight"``. For the ``||logic:else if||``, check that ``||variables(noclick):angle||`` is equal to ``"left"``.

```blocks
let angle = "straight"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
    } else if (angle == "left") {
    } else {
    }
})
```


## {Step 7 @fullscreen}

In ``||sprites:Sprite||`` grab three ``||sprites:set sprite velocity to vx vy||`` and place one inside of each ``||logic:if||``, ``||logic:else if||``, and ``||logic:else then else||`` section. Set the sprite variable for all three to ``||variables(noclick):lander||``. In the first, set ``vx`` to ``0`` and ``vy`` to ``-20``. In the second, set ``vx`` to ``-6`` and ``vy`` to ``-20``. Then, in the last, set ``vx`` to ``6`` and ``vy`` to ``-20``.

```blocks
let lander: Sprite = null
let angle = "straight"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
        lander.setVelocity(0, -20)
    } else if (angle == "left") {
        lander.setVelocity(-6, -20)
    } else {
        lander.setVelocity(6, -20)
    }
})
```

## {Step 8 @fullscreen}

When the sprite hits the lunar surface it gets destroyed. So from ``||scene:Scene||`` grab a ``||scene: on sprite of kind Player overlaps at location||`` and place it in the workspace. Make sure the image is the same as the obstacles. From ``||sprites:Sprite||`` grab a ``||sprites:destroy sprite||``. Change the sprite to ``||variables(noclick):lander||`` and click on the **(+)** symbol. Set the effect to ``fire`` and the time to ``500`` ms. From ``||game:Game||`` grab a ``||game:game over lose||`` and click the **(+)** symbol and set the effect to ``dissolve``.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}
let lander: Sprite = null
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    lander.destroy(effects.fire, 500)
    game.over(false, effects.dissolve)
})
```

## {Step 9 @fullscreen}

Next grab from ``||scene:Scene||`` a ``||scene:on sprite of kind Player overlaps at location||`` and drag it into the workspace. Make sure to set the image to the landing pad. Then grab a ``||logic:if then else||`` and drag it inside. Again, from ``||logic:Logic||`` grab a ``||logic:0 = 0||`` and drag it into the ``||logic:if||`` statement. Grab the ``||variables(noclick):angle||`` from the ``||variables(noclick):Variable||`` drawer and place it in the first field of the ``||logic:0 = 0||``. Grab a ``" "`` from ``||text:Text||`` and place it in the second field and type the string ``straight``.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}
let angle = ""
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (angle == "straight") {
    } else {
    }
})
```

## {Step 10 @fullscreen}

Find ``||game:game over||`` in ``||game:Game||``, and drag it into the first section of the ``||logic:if then ... else||`` statement. Switch the toggle to **Win**, then click the **(+)** sign and select ``star field``. Then, find ``||sprites:destroy sprite||`` in ``||sprites:Sprites||``, drag it into the ``||logic:else||``, and switch ``||variables(noclick):mySprite||`` to ``||variables(noclick):Lander||``. Click the **(+)** sign and choose the ``fire`` effect and ``500`` ms. Finally, grab another ``||game:game over||`` and place it after the ``||sprites:destroy sprite||`` block. Click the **(+)** sign and set the effect to ``dissolve``.

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
    //% blockIdentity=images._tile
    export const tile1 = img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}
let lander: Sprite = null
let angle: string = null;
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (angle == "straight") {
        game.over(true, effects.starField)
    } else {
        lander.destroy(effects.fire, 500)
        game.over(false, effects.dissolve)
    }
})
```

## {Step 11 @fullscreen}

From ``||controller:Controller||`` grab ``||controller:on A button pressed||`` and drag it into the workspace. Change the button from ``A`` to ``left``. Then from ``||variables:Variables||`` grab ``||variables:set variable to||`` and drag it into ``||controller:on left button pressed||``. Switch the variable to ``||variables(noclick):angle||``. Grab a ``" "`` from ``||text:Text||``and place it after the ``to``. Type in ``left``. From ``||sprites:Sprites||`` grab a ``||sprites:set image to||`` and set the variable to ``||variables(noclick):lander||``. Draw an image of a sideways lander going left.

```blocks
let lander: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let angle = "left"
    lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . d d d . . . . . . . .
        . . . . d d d d d . . . . . . .
        . . . d d d 1 1 d d . . . . . .
        . . . d d 1 1 1 d d . . . . . .
        . . . d d 1 1 d d d f f . . . .
        . . . . d d d d d . . . f . . .
        . . . . . d d d . . . . . 2 . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
```

## {Step 12 @fullscreen}

Right click on the ``||controller:on left button pressed||`` and duplicate it twice. Change the buttons to ``right`` and ``up``. For ``right`` change the text to ``"right"`` and for ``up`` change the text to ``"straight"``. Finally, draw an image of a spacecraft going diagonally right-up for ``right``. Copy the first spacecraft drawing for straight and paste it into the image editor for the ``up`` button.

```blocks
let lander: Sprite = null
let angle: string = null;
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "left"
    lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . d d d . . . . . . . .
        . . . . d d d d d . . . . . . .
        . . . d d d 1 1 d d . . . . . .
        . . . d d 1 1 1 d d . . . . . .
        . . . d d 1 1 d d d f f . . . .
        . . . . d d d d d . . . f . . .
        . . . . . d d d . . . . . 2 . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "right"
    lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . d d d . . . . .
        . . . . . . . d d d d d . . . .
        . . . . . . d d 1 1 d d d . . .
        . . . . . . d d 1 1 1 d d . . .
        . . . . f f d d d 1 1 d d . . .
        . . . f . . . d d d d d . . . .
        . . 2 . . . . . d d d . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "straight"
    lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d d d . . . . . . .
        . . . . . d d d d d . . . . . .
        . . . . d d 1 1 1 d d . . . . .
        . . . . d d 1 1 1 d d . . . . .
        . . . . d d d d d d d . . . . .
        . . . . . d d d d d . . . . . .
        . . . . . f d d d f . . . . . .
        . . . . f f . . . f f . . . . .
        . . . 2 . . . . . . . 2 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
```

## {Complete @fullscreen}

Congratulations, you have completed your game! Now try and make more levels!
