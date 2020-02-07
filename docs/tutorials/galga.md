# Galga

### ~button /#tutorial:/tutorials/galga

Try this tutorial!

### ~

## Introduction @unplugged

Fly your space plane through the oncoming bogey spacecraft. Can you survive the continuous attack? You start with three lives but you gain more by firing on the enemy ships. You lose a life with every collision, so try to blast away the enemy before they hit you.

![Space plane and attacking spacecraft](/static/tutorials/galga.gif)

## Step 1 @fullscreen

Get a ``||sprites:set mySprite to sprite of kind player||`` block an put it in the ``||loops:on start||``. Click on the ``||variables:mySprite||`` variable, select ``||variables:Rename variable...||``, and rename it to ``||variables:spacePlane||``. Click on the empty sprite image to open the image editor. Draw a picture of a Space Plane.

![Space plane sprite image](/static/tutorials/galga/space-plane.jpg)

```blocks
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## Step 2

Go back to ``||sprites:Sprites||`` again and pull out a ``||sprites:set mySprite stay in screen||`` and put it in after the other sprite block. Change ``||variables:mySprite||`` to ``||variables:spacePlane||``. Click the ``OFF`` button to make it switch to ``ON``. Go over to ``||info:Info||``, get a ``||info:set life to||`` block, and put it in there, too. Set the life count to `3`.

```blocks
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
```

## Step 3

Now, let's add some button actions. In ``||controller:Controller||`` pull out a ``||controller:move mySprite with buttons||``. As before, change ``||variables:mySprite||`` to ``||variables:spacePlane||``. Click on the **(+)** symbol and change both `vx` and `vy` to `200`. Next, get the ``||controller:on A button pressed||`` from ``||controller:Controller||`` and put it out in the Workspace somehwere.

```blocks
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 8 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . . . . . . . . .
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . .
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . . . . . . . . .
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . .
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . .
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . . . . . . . . .
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

## Step 4 @fullscreen

Back in ``||sprites:Sprites||``, find a ``||sprites:set projectile to projectile from mySprite||`` block and put it in the ``||controller:on A button pressed||``. Click on the ``||variables:projectile||`` variable, select ``||variables:Rename variable...||``, and rename it to ``||variables:dart||``. Switch the ``||variables:mySprite||`` variable to ``||variables:spacePlane||``,  set the `vx` value to `200`, and set the `vy` value to `0`. Click on the empty sprite image to open the image editor. Draw a picture of a dart.

![Dart projectile](/static/tutorials/galga/dart.jpg)

```blocks
let spacePlane: Sprite = null
let dart: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . 5 5 a 2 2 2 2 4 4 4 . . . .
        . . . 5 a a 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spacePlane, 200, 0)
})
```

## Step 5

From ``||sprites:Sprites||`` get a ``||sprites:on sprite of kind Player overlaps||`` block. Switch the second ``kind`` type at the end of the block to ``||sprites:Enemy||``. Then, drop a ``||sprites:destroy mySprite||`` block in there. Go up and grab the ``||variables:otherSprite||`` variable from the top of the block and drop it onto ``||variables:mySprite||`` in  ``||sprites:destroy mySprite||``. You may notice that the ``||variables:mySprite||`` block moves to the workspace. You can delete it by dragging it to the toolbar. (It will glow red with an icon of a trash can when you do so.) Now, go get a ``||info:change life by||`` block from the ``||info:Info||`` toolbox and drop it in after ``||sprites:destroy otherSprite||``. Set the life change value to `-1`.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```

## Step 6

Make a copy of ``||sprites:on sprite of kind Player overlaps||`` by clicking on it with the `right` mouse button and selecting **Duplicate**. In that new block, change the first ``kind`` from ``Player`` to ``Projectile``. Also, in the ``||info:change life by||``, make the life change value be a `1`.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
```

## Step 7

Duplicate the ``||sprites:destroy otherSprite||`` and place the new copy after the first one. Like you did earlier, pull the ``||variables:sprite||`` variable from the ``||sprites:on sprite of kind Projectile overlaps||`` and drop it onto ``||variables:otherSprite||`` in the ``||sprites:destroy sprite||`` block. As before, delete the ``||variables:otherSprite||`` block from the workspace by dragging it to the toolbox. Then, click on the **(+)** symbol and choose the ``fire`` effect. Also, set effect time to ``100 ms``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(1)
})
```

## Step 8 @fullscreen

Over in ``||game:Game||`` pickup an ``||game:on game update every||`` an place it out on the Workspace. Get a ``||sprites:set mySprite to sprite of kind player||`` block an put it into the ``||game:on update interval||``. Rename the variable to ``||variables:bogey||``. Then, change the ``||sprites:kind||`` from ``||sprites:Player||`` to ``||sprites:Enemy||``. Click on the empty sprite image to open the image editor. Draw a picture of an enemy airplane.

![Enemy airplane image](/static/tutorials/galga/bogey.jpg)

```blocks
let bogey: Sprite = null
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
})
```

## Step 9

Find the ``||sprites:set mySprite velocity to||`` and put it after the sprite you just made. Change the variable to ``||variables:bogey||``. Then, set `vx` to `-100` and `vy` to `0`. Add in a ``||sprites:set mySprite position to||`` block. Again, change the variable to ``||variables:bogey||``. Set the `x` value to `180`. Over in ``||math:Math||``, get the ``||math:pick random||`` block and drop it into the `y` value slot.

```blocks
let bogey: Sprite = null
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 10))
})
```

## Step 10

In the ``||math:pick random||`` block, set the first value as `8` and the second value as `112`.

```blocks
let bogey: Sprite = null
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 9 9 . . . . . 5 . . . .
        . . . 9 9 9 9 . . . 5 5 . . . .
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . .
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(8, 112))
})
```

## Complete @fullscreen

Congratulations, you have completed your game! Use the direction buttons to move your space plane to miss the bogeys. Use button **A** to shoot darts at them.

![Space plane and attacking spacecraft](/static/tutorials/galga.gif)

