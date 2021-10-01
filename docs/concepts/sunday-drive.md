# Sunday Drive

[Open this tutorial in the editor!](/#tutorial:/concepts/sunday-drive)

## {Introduction @unplugged}

Games often need actions to occur repeatedly - enemies and collectibles need to be created, winning conditions need to be checked, and so on. The ``||game:on game update interval||`` event allows you to set code to run on a set time period, so that it will occur repeatedly.

## {Step 1 @fullscreen}

Remove anything that is currently in the workspace, and find ``||game:on update interval 500 ms||`` in ``||game:Game||``. Drag it into the workspace.

```blocks
game.onUpdateInterval(500, function () {

})
```

## {Step 2 @fullscreen}

In the ``||game:on game update interval 500 ms||``, replace the 500 with 1000. This will make it so the event occurs once every second, because 1 ms is a thousandth of a second.

```blocks
game.onUpdateInterval(1000, function () {

})
```

## {Step 3 @fullscreen}

Find ``||sprites:projectile from side||`` in ``||sprites:Sprites||``, and drag it into the ``||game:on game update interval||``. Open the image editor for ``||variables:projectile||``, and select or create an image of a car that is facing **right**.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 50)
})
```

## {Step 4 @fullscreen}

In the ``||sprites:projectile||``, set the ``||sprites:vy||`` to `0`, so that the cars drive **only** to the right.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
})
```

## {Step 5 @fullscreen}

Find ``||sprites:set mySprite x to 0||`` from ``||sprites:Sprites||``, and drag it after the ``||variables:set projectile to||``. Change ``||variables:mySprite||`` to ``||variables:projectile||``, and change ``||sprites:x||`` to ``||sprites:y||``.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = 0
})
```

## {Step 6 @fullscreen}

Find ``||math:pick random 0 to 10||`` in ``||math:Math||``, and replace the 0 in ``||sprites:set projectile y to 0||`` with the it.

This will place the ``||variables:projectile||`` in a random ``||sprites:y||`` position between `0` and `10`.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, 10)
})
```

## {Step 7 @fullscreen}

Find ``||scene:screen height||`` in ``||scene:Scene||``. Replace the 10 in ``||math:pick random 0 to 10||`` with it.

``||scene:screen height||`` is the height of the screen (120), so this will place the ``||variables:projectile||`` in a random position on the left side of the screen.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, scene.screenHeight())
})
```

## {Complete}

Congratulations, you have made cars randomly drive across the screen! You can use this to start your own version of a road crossing game -- for example, making a chicken or duck cross the road. Just remember that ``||sprites:projectiles||`` are of kind ``||sprites:Projectile||`` by default.