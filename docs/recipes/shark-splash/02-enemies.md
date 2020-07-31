# Creating Enemy Sprites

## Introduction @unplugged

Create enemies and spawn them at random locations!

![Enemies](/static/recipes/shark-splash/02-enemies.gif)

## Step 1

Add an ``||game:on update interval||`` block to the workspace.

```blocks
game.onUpdateInterval(500, function () {
})
```

## Step 2

Inside the ``||game:on update interval||`` event, place a ``||variables:set mySprite to||`` ``||sprites:sprite||`` block.
Rename the variable to ``||variables:enemySprite||`` and change the ``||sprites:Player||`` kind to ``||sprites:Enemy||``. Click on the
grey square to open the sprite editor and draw an image for the enemy.

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    // @highlight
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
})
```

## Step 3

Place a ``||sprites:set position to||`` block right below the ``||variables:set enemySprite to||`` ``||sprites:sprite||`` block. Change
the variable to ``||variables:enemySprite||`` in the dropdown list.

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    enemySprite.setPosition(0, 0)
})
```

## Step 4

For ``||sprites:x||`` value in the ``||sprites:set position to||`` block, place a ``||Math:pick random 0 to 10||``.
Change the maximum random number from `10` to `160` (the width of the screen).

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    enemySprite.setPosition(randint(0, 160), 0)
})
```

## Step 5

Get another ``||Math:pick random 0 to 10||`` block and put in inside the ``||sprites:y||`` value of ``||sprites:set position to||``.
Change the maximum random number from `10` to `120` (the height of the screen).

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    enemySprite.setPosition(randint(0, 160), randint(0, 120))
})
```

## Step 6

Drag a ``||sprites:on overlap||`` block into the workspace. Change the second sprite kind to ``||sprites:Enemy||``.

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    enemySprite.setPosition(randint(0, 160), randint(0, 120))
})

// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 7

Inside the ``||sprites:on overlap||`` block, place a ``||sprites:destroy sprite||`` block. Drag the
``||variables:otherSprite||`` variable from the ``||sprites:on overlap||`` block and place it inside
the  ``||sprites:destroy sprite||``.



```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    enemySprite.setPosition(randint(0, 160), randint(0, 120))
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## Conclusion @unplugged

Now that you have enemies, let's add code to destroy the enemies with your projectiles! Or, if you want, you can continue with making them move or with spawning different kinds of enemies.

|      |      |      |
|:----:|:----:|:----:|
|  [![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) | [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies) | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) |
| [**Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles) | [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies) | [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) |