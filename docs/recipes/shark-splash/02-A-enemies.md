# Making the enemies move

## Introduction @unplugged

Use the ``||sprites:on created||`` event to make the enemies in your game move!

## Step 1

Drag an ``||sprites:on created||`` block into the workspace. Change the kind
dropdown to "Enemy".

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## Step 2

Inside the ``||sprites:on created||`` block, place a ``||sprites:set velocity||`` block.
Drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and place it inside
the sprite argument of ``||sprites:set velocity||``.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(50, 50)
})
```

## Step 3

Change the values in ``||sprites:set velocity||`` block to set the speed and direction of your
enemy sprite. In this example, we will set the vx to -50 and vy to 0.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
})
```

## Step 4

Place a ``||sprites:set flag||`` block below the ``||sprites:set velocity||`` block.
Drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and place it inside
the sprite argument of ``||sprites:set flag||``.


```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.StayInScreen, false)
})
```

## Step 5

Change the dropdown in the ``||sprites:set flag||`` block to "auto destroy" and change the
second argument from off to on. This flag will make it so that the enemies will be
automatically destroyed when they travel outside of the screen.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Conclusion @unplugged

next steps
create enemies