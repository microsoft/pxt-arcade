# Starfield

## {Introduction @unplugged}

Having stars moving in the background of your scene is an effective way to show motion for a game that's set in space. Stars filling the screen as moving projectiles can create an illusion of a player sprite speeding through space, even if it remains at the same location on the screen.

![Starfield background playing](/static/concepts/star-field/star-field-background.gif)

## {Step 1}

In the ``||game:Game||`` Toolbox drawer, get an ``||game:on game update||`` block and drag it into the workspace.

```blocks
game.onUpdate(function () {

})
```

## {Step 2}

From ``||sprites:Sprites||``, find the ``||variables:set projectile to||`` block that has a ``||sprites:projectile from side||`` inside of it. Drag it into the ``||game:on game update||``. Change `vx` to `0` and `vy` to `100`.

```blocks
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

## {Step 3 @fullscreen}

Click on the grey box in ``||sprites:projectile from side||`` and create a single white pixel for the star.

![Creating star image](/static/concepts/star-field/creating-star-image.gif)

```blocks
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

## {Step 4 @fullscreen}

Grab a ``||Math:pick random 0 to 10||`` from ``||Math:Math||``. Place it in the  ``||sprites:vy||`` slot of ``||sprites:projectile||`` right over the ``100``. In the ``||Math:pick random 0 to 10||``, change the ``0`` to ``20``, and the ``10`` to ``30``

```blocks
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
`, 0, randint(20, 30))
})
```

## {Step 5}

Go back to ``||sprites:Sprites||`` and find the ``||sprites:set mySprite position to||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

```blocks
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
`, 0, randint(20, 30))
    projectile.setPosition(0, 0)
})
```

## {Step 6}

Grab another ``||Math:pick random 0 to 10||`` and put it in as the ``||sprites:x||`` value for ``||sprites:set projectile position to||``. Find ``||scene:screen width||`` in ``||scene:Scene||`` and replace the ``10`` in the ``||Math:pick random 0 to 10||`` with it.

```blocks
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
`, 0, randint(20, 30))
    projectile.setPosition(randint(0, scene.screenWidth()), 0)
})
```

## {Step 7 @fullscreen}

At this point, too many stars are being created. This is fixed by surrounding the blocks inside ``||game:on game update||`` with an ``||logic:if then||`` block.

![Surround with if then](/static/concepts/star-field/surround-if-then.gif)

```blocks
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
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Step 8}

Get a ``||Math:0 % chance||`` block from ``||math:Math||`` and replace the ``true`` condition in the ``||logic: if then||`` with it. Change the percentage from ``0`` to ``25``.

```blocks
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
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Complete}

Congratulations, your starfield is complete! Build any game you wish on top of it, or continue to the next step for a challenge that will help optimize the code.

## {Extra Challenge @fullscreen}

In reality, the stars in outer space are millions of light years away from anything else. So, they shouldn't interact or collide with other objects out there.

Find ``||sprites:set mySprite auto destroy||`` in ``||sprites:Sprites||``. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:auto destroy||`` to ``||sprites:ghost||``, and click on ``OFF`` to turn it ``ON``.

This also has a large effect on the frame rate, as the game can skip processing any actions related to the stars overlapping other sprites in the game.

```blocks
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
`, 0, randint(20, 30))
        projectile.setPosition(randint(0, scene.screenWidth()), 0)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
})
```
