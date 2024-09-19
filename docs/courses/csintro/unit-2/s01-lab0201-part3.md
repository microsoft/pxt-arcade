# Lab 2.1 Part 3: Shooting gallery

## Villains be gone! @showdialog

Our project allows the player to fire at enemies moving toward them,
but nothing happens to the enemies when they are hit. Let's fix that!

## Gotta start somewhere!

First, let's give the player a starting score and set of lives.

1.   At the bottom of your   
``||loops(noclick):on start||``   
container, add blocks
from the ``||info:Info||`` drawer to give the player:
     1.   A starting score
     1.   A starting set of lives.

Test your project to see if your code runs as expected.
View the hint if you need help.

```blocks
let enemySprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
// @highlight
info.setScore(0)
// @highlight
info.setLife(3)
```

## Bye bye, enemies!

Now, let's make our projectiles remove the enemy it strikes.
Let's add to our player's score, too!

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player) overlaps||`` ``||variables(sprites):otherSprite||``
``||sprites:of kind (Player)||``   
container to your workspace.
1.   Change the kinds so that the block reads as follows:   
``||sprites(noclick):on sprite of kind Projectile overlaps otherSprite of kind Enemy||``
1.   Into your new container, drag a block from the   
``||info:Info||`` drawer
that increases the player's score. Feel free to change the value to anything
you like.
1.   Add more blocks so that   
``||variables(noclick):sprite||`` and   
``||variables(noclick):otherSprite||`` are destroyed. Use any effect
that you like!

Test your project to see if your code runs as expected.
View the hint if you need help.

```block
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
```

## Complete! @showdialog

Good work! The player now has a way to destroy enemies and earn points.
Now we need to put the player in some jeopardy. On to part 4!

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
let enemySprite: Sprite = null
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
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