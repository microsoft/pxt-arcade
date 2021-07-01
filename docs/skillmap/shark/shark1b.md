# Enemies Attack!

## Introduction @showdialog

Use the ``||sprites:on created||`` event to make the enemies in your game move!

![Moving Enemies](/static/recipes/shark-splash/02-A-enemies.gif)

## Step 1

Drag an ``||sprites:on created||`` block into the workspace. Change the kind
dropdown to ``||sprites:Enemy||``.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## Step 2

Inside the ``||sprites:on created||`` block, place a ``||sprites:set velocity||`` block.
Drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and use it as the sprite inside of ``||sprites:set velocity||``.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(50, 50)
})
```

## Step 3

Change the values in the ``||sprites:set velocity||`` block to set the speed and direction of your
enemy sprite. In this example, we will set ``||sprites:vx||`` to `-50` and ``||sprites:vy||`` to `0`.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
})
```

## Step 4

Place a ``||sprites:set auto destroy||`` block below the ``||sprites:set velocity||`` block (this is called a sprite **flag**).
Just like before, drag the ``||variables:sprite||`` variable from the ``||sprites:on created||`` block and use it as the sprite for ``||sprites:set auto destroy||``.


```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, false)
})
```

## Step 5

In the ``||sprites:set auto destroy||`` block. Switch the setting for that from **OFF** to **ON**. This setting will cause all of the enemies to get automatically destroyed when they travel outside of the screen.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Conclusion @showdialog

Now let's add code to destroy the enemies with your projectiles! Or, if you're feeling creative, add a background to set the scene.




```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`laser`, mySprite, 90, 0)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
```


```assetjson