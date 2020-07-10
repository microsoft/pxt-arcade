# Make enemies damage the player

## Introduction @unplugged

Use the ``||info:change life by -1||`` block to damage the player when they overlap an enemy!

![Enemy Damage](/static/recipes/shark-splash/02-C-enemies.gif)

## Step 1

Place a ``||info:set life to 3||`` block inside the ``||loops:on start||`` event in your workspace.

```blocks
info.setLife(3)
```

## Step 2

Drag an ``||sprites:on overlap||`` block into the workspace. Change the second dropdown to "Enemy". If you
already have a ``||sprites:on overlap||`` block in your workspace for Player and Enemy sprites, use that
instead.

## Step 3

Place a ``||sprites:destroy sprite||`` block inside the ``||sprites:on overlap||`` event. Drag the
``||variables:otherSprite||`` variable from the ``||sprites:on overlap||`` block and place it inside
the ``||sprites:destroy sprite||``. You can skip this step if ``||variables:otherSprite||`` is already
destroyed in this event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## Step 4

Place a ``||info:change life by -1||`` block inside the ``||sprites:on overlap||`` event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```

## Step 5

Place a ``||scene:camera shake||`` block inside the ``||sprites:on overlap||`` event. This will
let the player know when they have been hit.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
```

## Conclusion @unplugged

|      |      |      |
|:----:|:----:|:----:|
|  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies)  | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)| [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**Design a background**](#recipe:/recipes/shark-splash/04-background) |

