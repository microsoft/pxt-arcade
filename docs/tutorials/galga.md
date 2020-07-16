# Galga

### ~button /#tutorial:/tutorials/galga

Try this tutorial!

### ~

## Introduction @unplugged

Fly your space plane through the oncoming bogey spacecraft. Can you survive the continuous attack? You start with three lives but you gain more by firing on the enemy ships. You lose a life with every collision, so try to blast away the enemy before they hit you.

![Space plane and attacking spacecraft](/static/tutorials/galga.gif)

## Step 1

Add code to create a ``||sprites:sprite||``, rename it as ``||variables:spacePlane||``, and draw a plane or some kind of flying object in it.

![Space plane sprite image](/static/tutorials/galga/space-plane.jpg)

```blocks
let spacePlane: Sprite = null
// @highlight
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

``||sprites:set||`` the ``||variables:spacePlane||`` to ``||sprites:stay in the screen||``.

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
// @highlight
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
```

## Step 3

Start the game with a few lives, so ``||info:set life to||`` to ``3``.

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
// @highlight
info.setLife(3)
```

## Step 4

Now ``||controller:move||`` the ``||variables:spacePlane||``
with the ``||controller:controller buttons||`` and change the sensitivity
``vx`` and ``vy`` to ``200``.

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
// @highlight
controller.moveSprite(spacePlane, 200, 200)
```

## Step 5 @fullscreen

Add an event to run code when ``||controller:button A is pressed||``.
In that event, create a ``||sprites:projectile sprite||`` named **dart** that is launched ``||sprites:from||`` the ``||variables:spacePlane||`` and set the sensitivity ``vx`` to ``200``
and ``vy`` to ``0``.

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

## Step 6 @fullscreen

Add another event to run code on ``||game:game update every half second||``.
In that event, create a ``||sprites:sprite||`` of kind ``||sprites:Enemy||``, rename it to **bogey**,
and draw the enemy plane in it.

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

## Step 7

On the ``||variables:bogey||`` sprite, ``||sprites:set the velocity||`` with
values to have it fly **horizontally** from **right to left**.

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
    // @highlight
    bogey.setVelocity(-100, 0)
})
```

## Step 8

Add code to ``||sprites:set the position||`` of ``||variables:bogey||`` to
`x` to `180` and `y` to a ``||math:random number||`` between ``0`` and ``120``.

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
    // @highlight
    bogey.setPosition(180, randint(0, 120))
})
```

## Step 9

Use one more event to run code when a ``||sprites:Player sprite||`` ``||sprites:overlaps||`` with an ``||sprites:Enemy sprite||``.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 10

Add code to ``||sprites:destroy||`` ``||variables:otherSprite||``, which is the enemy sprite.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## Step 11

In that event, add code to ``||info:remove a life||`` (or change it by ``-1``).

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    // @highlight
    info.changeLifeBy(-1)
})
```

## Step 12

Put in an event to run code when a ``||sprites:Projectile sprite||`` ``||sprites:overlaps||`` with an ``||sprites:Enemy sprite||``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 13

Add code to ``||sprites:destroy||`` ``||variables:otherSprite||``, the enemy sprite.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## Step 14

Insert code to ``||sprites:destroy||`` ``||variables:sprite||``, the projectile sprite,
with a ``||sprites:fire effect||``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    // @highlight
    sprite.destroy(effects.fire, 100)
})
```

## Step 15

Add code to add ``||info:change the score by||`` by ``1``.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    // @highlight
    info.changeScoreBy(1)
})
```

## Complete @fullscreen

Congratulations, you have completed your game! Use the direction buttons to move your space plane to miss the bogeys. Use button **A** to shoot darts at them.

![Space plane and attacking spacecraft](/static/tutorials/galga.gif)

