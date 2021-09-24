# Make enemies damage the player

## {Introduction @unplugged}

Use the ``||info:change life by -1||`` block to damage the player when they overlap an enemy!

![Enemy Damage](/static/recipes/shark-splash/02-C-enemies.gif)

## {Step 1}

Place a ``||info:set life to 3||`` block inside the ``||loops:on start||`` event in your workspace.

```blocks
info.setLife(3)
```

## {Step 2}

Drag an ``||sprites:on overlaps||`` block into the workspace. Change the second kind to ``||sprites:Enemy||`` in the dropdown. If you already have a ``||sprites:on overlaps||`` block in your workspace for the ``||sprites:Player||`` and ``||sprites:Enemy||`` sprites, use that instead.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## {Step 3}

Place a ``||sprites:destroy sprite||`` block inside the ``||sprites:on overlaps||`` event. Drag the
``||variables:otherSprite||`` variable from the ``||sprites:on overlaps||`` block and place it inside
the ``||sprites:destroy sprite||``. You can skip this step if ``||variables:otherSprite||`` is already
destroyed in this event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## {Step 4}

Place a ``||info:change life by -1||`` block inside the ``||sprites:on overlaps||`` event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```

## {Step 5}

Place a ``||scene:camera shake||`` block inside the ``||sprites:on overlaps||`` event. This
lets the player know that they have been hit.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
```

## {Conclusion @unplugged}

|      |      |      |
|:----:|:----:|:----:|
|  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies)  | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)| [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**Design a background**](#recipe:/recipes/shark-splash/04-background) |

