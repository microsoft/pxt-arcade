# Lab 2.1 Part 4: Collision Alert!
### @explicitHints true

## Collision alert! @showdialog

When enemies hit your player, the player should lose a life.<br/>
Let's finish the game by adding one more event handler.

![Lab 2.1.4](https://arcade.makecode.com/api/_0wWasDYJfW35/thumb)


## Ouch!

1.   From the ``||sprites:Sprites||`` drawer, add another<br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``<br/>
container to your workspace.
1.   Change the block so that it reads as follows:<br/>
``||sprites(noclick):on [sprite] of kind [Player] overlaps [otherSprite] of kind [Enemy]||``
1.   Into your new container, drag a block from the<br/>
``||info:Info||`` drawer
that removes one of the player's lives.
1.   Add another block that destroys the enemy. Use any effect that you like.

---

Test your project to see if your code runs as expected.


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
```

## Complete! @showdialog

Good work! Lab 2.1 is now complete! 

If you have time, move on to the bonus
level, to add some sound effects!




```package
lab2imgs=github:kiki-lee/lab2imgs
```


```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null

scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```