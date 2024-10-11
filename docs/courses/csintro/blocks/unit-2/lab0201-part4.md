# Lab 2.1 Part 4: Shooting gallery

## Collision alert! @showdialog

When enemies hit your player, the player should lose a life. Let's finish
the game by adding one more event handler.

## Ouch!

1.   From the ``||sprites:Sprites||`` drawer, add another   
``||sprites:on||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player) overlaps||`` ``||variables(sprites):otherSprite||``
``||sprites:of kind (Player)||``   
container to your workspace.
1.   Change the block so that it reads as follows:   
``||sprites(noclick):on sprite of kind Player overlaps otherSprite of kind Enemy||``
1.   Into your new container, drag a block from the   
``||info:Info||`` drawer
that removes one of the player's lives.
1.   Add another block that destroys the enemy. Use any effect that you like.

Test your project to see if your code runs as expected.
View the hint if you need help.

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
```

## Complete! @showdialog

Good work! Your game is now complete! If you have time, then move on to the bonus
section, where we will add some sound effects!

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, 25)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
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
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    enemySprite.setVelocity(0, 25)
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```