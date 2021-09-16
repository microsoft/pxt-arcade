# Projectile Effects

## {Introduction @unplugged}

Now that you have enemies and projectiles, let's give your projectiles some power!

![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)

## {Detect sprite overlaps}

From ``||sprites:Sprites||``, drag the ``||sprites:on||`` ``||variables:sprite||`` ``||sprites:overlaps||``  ``||variables:otherSprite||`` block into your workspace. Click the first dropdown and select ``||sprites:Projectile||``, then click the second dropdown and select ``||sprites:Enemy||``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## {Destroy the enemy}

From ``||sprites:Sprites||``, drag the ``||sprites:destroy||`` block into your ``||sprites:on sprite overlaps||`` blocks. Drag the ``||variables:otherSprite||`` variable into the ``||sprites:destroy sprite||``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## {Add score}

From ``||info:Info||``, drag the ``||info:change score||`` block into ``||sprites:on sprite overlaps||`` to give yourself a point each time you hit an enemy.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    // @highlight
    info.changeScoreBy(1)
})
```

## {Spawn projectiles}

From ``||sprites:Sprites||``, drag the ``||sprites:mySprite start effect||`` block into ``||sprites:on sprite overlaps||``. Then drag the ``||variables:sprite||`` variable into the ``||sprites:start effect||`` block. Click the dropdown to select your favorite effect!


```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    // @highlight
    sprite.startEffect(effects.bubbles)
})
```

## {Conclusion @unplugged}

Now try making your enemies move or spawn multiple kinds of enemies!

|      |      |      |
|:----:|:----:|:----:|
|  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies)  | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)| [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**Design a background**](#recipe:/recipes/shark-splash/04-background) |