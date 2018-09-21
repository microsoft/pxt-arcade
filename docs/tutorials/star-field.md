# Star Field

## Introduction @unplugged

Having stars in the background is important to show motion for a game that takes place in space. Stars filling the screen as moving projectiles give the illusion of a player sprite speeding through space, even if it remains at the same location on the screen.

![Star field background playing](/static/tutorials/star-field/star-field-background.gif)

## Step 1

Find ``||variables:set projectile to||`` in ``||sprites:Sprites||``. Drag it into the ``||game:on game update||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectile(img`
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
`, 0, 0, SpriteKind.Player)
})
```

## Step 2 @fullscreen

Click on the grey box in ``||variables:set projectile to||`` and create a single white pixel for the star.

![Creating star image](/static/tutorials/star-field/creating-star-image.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectile(img`
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
`, 0, 0, SpriteKind.Player)
})
```

## Step 3 @fullscreen

Find ``||Math:pick random 0 to 10||``. Change the `0` to `20`, and the `10` to `30`. Place it in ``||sprites:vy||`` in ``||sprites:projectile||``.

![Random Speed](/static/tutorials/star-field/random-speed.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
})
```

## Step 4

Find ``||sprites:set mySprite position to||`` in ``||sprites:Sprites||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
    projectile.setPosition(0, 0)
})
```

## Step 5

Grab another ``||Math:pick random 0 to 10||`` and put it in as the ``x`` value for position. Find ``||scene:screen width||`` in ``||scene:Scene||``, and replace the `10` with it.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
    projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
})
```

## Step 6 @fullscreen

At this point, too many stars are being created. This is fixed by surrounding the blocks inside ``||game:on game update||`` with an ``||logic:if then||`` block.

![Surround with if then](/static/tutorials/star-field/surround-if-then.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    if (true) {
        let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
    }
})
```

## Step 7

Get a ``||Math:0 % chance||`` block and replace the `true` condition in the ``||logic: if then||`` with it. Change the `0` to `25`.
 
```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
    }
})
```

## Complete

Congratulations, your star field is complete! Build any game you wish on top of it, or continue to the next part for a challenge that helps optimize the code.

## Extra Challenge @fullscreen

In real outer space, stars are millions of light year away, so they shouldn't interact with anything else.

Find ``||sprites:set mySprite stay in screen||`` in ``||sprites:Sprites||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:stay in screen||`` to ``||sprites:ghost||``, and click on `off` to turn it `on`.

This will also have a large effect on the frame rate, as the game can ignore the fact that the stars overlap with the other sprites in the game.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projectile = sprites.createProjectile(img`
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
`, 0, Math.randomRange(20, 30), SpriteKind.Player)
        projectile.setPosition(Math.randomRange(0, scene.screenWidth()), 0)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
})
```
