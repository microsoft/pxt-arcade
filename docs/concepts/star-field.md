# Star Field

## Introduction @unplugged

Having stars in the background is important to show motion for a game that takes place in space. Stars filling the screen as moving projectiles give the illusion of a player sprite speeding through space, even if it remains at the same location on the screen.

![Star field background playing](/static/concepts/star-field/star-field-background.gif)

## Step 1

Find ``||game:on game update||`` in ``||game:Game||``, and drag it into the workspace.

```blocks
game.onUpdate(function () {

})
```

## Step 2

Find ``||sprites:projectile from side||`` in ``||sprites:Sprites||``. Drag it into the ``||game:on game update||``. Change `vx` to `0` and `vy` to `100`. 

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
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
`, 0, 100)
})
```

## Step 3 @fullscreen

Click on the grey box in ``||variables:set projectile to||`` and create a single white pixel for the star.

![Creating star image](/static/concepts/star-field/creating-star-image.gif)

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 100)
})
```

## Step 4 @fullscreen

Find ``||Math:pick random 0 to 10||`` in ``||Math:Math||``. Change the ``0`` to ``20``, and the ``10`` to ``30``. Place it in ``||sprites:vy||`` in ``||sprites:projectile||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
})
```

## Step 5

Find ``||sprites:set mySprite position to||`` in ``||sprites:Sprites||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
    projectile.setPosition(0, 0)
})
```

## Step 6

Grab another ``||Math:pick random 0 to 10||`` and put it in as the ``||sprites:x||`` value for position. Find ``||scene:screen width||`` in ``||scene:Scene||``, and replace the ``10`` with it.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
    projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
})
```

## Step 7 @fullscreen

At this point, too many stars are being created. This is fixed by surrounding the blocks inside ``||game:on game update||`` with an ``||logic:if then||`` block.

![Surround with if then](/static/concepts/star-field/surround-if-then.gif)

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    if (true) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
    }
})
```

## Step 8

Get a ``||Math:0 % chance||`` block and replace the ``true`` condition in the ``||logic: if then||`` with it. Change the ``0`` to ``25``.
 
```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
    }
})
```

## Complete

Congratulations, your star field is complete! Build any game you wish on top of it, or continue to the next part for a challenge that helps optimize the code.

## Extra Challenge @fullscreen

In real outer space, stars are millions of light year away, so they shouldn't interact with anything else.

Find ``||sprites:set mySprite stay in screen||`` in ``||sprites:Sprites||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:stay in screen||`` to ``||sprites:ghost||``, and click on ``off`` to turn it ``on``.

This will also have a large effect on the frame rate, as the game can ignore the fact that the stars overlap with the other sprites in the game.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, Math.randomRange(20, 30))
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
})
```
