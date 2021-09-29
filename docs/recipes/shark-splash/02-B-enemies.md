# Multiple enemy sprites

## {Introduction @unplugged}

Use the ``||math:percent chance||`` block to assign a random image
to your enemies.

![Multiple Enemies](/static/recipes/shark-splash/02-B-enemies.gif)

## {Step 1}

Drag an ``||sprites:on created||`` block into the workspace. Change the kind in the
dropdown to ``||sprites:Enemy||``. If you already have an ``||sprites:on created||`` block
for enemies, use that one instead.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## {Step 2}

Inside the ``||sprites:on created||`` block, place an ``||logic:if then else||`` statement.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (true) {

    }
    else {

    }
})
```

## {Step 3}

Place a ``||math:% chance||`` block as the condition inside the ``||logic:if then else||``.
Change the percentage ``||math:%||`` to `50`.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {

    }
    else {

    }
})
```

## {Step 3}

Place a ``||sprites:set image to||`` block into the first clause of ``||logic:if then else||``.
Drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and use it as
the sprite for ``||sprites:set image to||``. Click on the
grey square to open the sprite editor and draw an image for the enemy.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . . . . c c . . .
            . . . . . . . . . . . . . . . c c c c 6 3 c . .
            . . . . . . . . . . . . . . c 6 3 3 3 3 6 c . .
            . . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c .
            . . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c
            . . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
            . . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
            . . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c
            . . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
            . . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . .
            . . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
            . . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
            . . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
            . . . . . . . . . c c c c c c c c c . . c c c .
        `)
    }
    else {

    }
})
```

## {Step 4}

Place a second ``||sprites:set image to||`` block into the else clause of ``||logic:if then else||``.
Drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and use it as
the sprite for the second ``||sprites:set image to||`` too. Click on the
grey square to open the sprite editor and draw a different image for the enemy.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . . . . c c . . .
            . . . . . . . . . . . . . . . c c c c 6 3 c . .
            . . . . . . . . . . . . . . c 6 3 3 3 3 6 c . .
            . . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c .
            . . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c
            . . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
            . . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
            . . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c
            . . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
            . . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . .
            . . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
            . . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
            . . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
            . . . . . . . . . c c c c c c c c c . . c c c .
        `)
    }
    else {
        sprite.setImage(img`
            . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
            . . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . .
            . . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . .
            . . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . .
            . . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . .
            . . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . .
            . . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . .
            f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . .
            f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . .
            f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . .
            . f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . .
            . . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . .
            . . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . .
            . . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . .
            . . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . .
            . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
        `)
    }
})
```

## {Conclusion @unplugged}

Now let's add code to destroy the enemies with your projectiles! Or, if you're feeling creative, add a background to set the scene.

|      |      |      |
|:----:|:----:|:----:|
|  [![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) | [![Add lives](/static/recipes/shark-splash/02-C-enemies.gif)](#recipe:/recipes/shark-splash/02-C-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles) | [**Add lives**](#recipe:/recipes/shark-splash/02-C-enemies) | [**Design a background**](#recipe:/recipes/shark-splash/04-background) |