# Lab 2.1 Part 2: Shooting gallery

## Here come the enemies! @showdialog

A game without enemies isn't much of a game. Let's add some!

## Standard orbit, Mr. Sulu.

Let's park some enemies at the top of the screen.

1.   From the ``||game:Game||`` drawer, add an   
``||game:on game update every (500) ms||``   
container block to your workspace.
1.   Change the interval from `500` ms to `1000` ms.   
**Question**: How long is 1,000 milliseconds?
1.   Within your new   
``||game(noclick):on game update every (1000) ms||``   
container,
add blocks to accomplish the following:
     1.   Add an enemy sprite to the screen.
     1.   Give the enemy sprite variable an appropriate name.
     1.   Give the enemy sprite an appropriate image.
     1.   Place the enemy sprite just above the top of the screen.
          Make sure at least part of the image is visible, though!
     1.   Give the enemy sprite a random x-coordinate.

Test your code to make sure it runs as you expect it.
You should see a bunch of enemies created at the top of the screen, with only
part of the image peeking into the screen.
View the hint to check your code.

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
})
```

## Let's roll!

Now, let's move the enemies toward the player!

1.   At the bottom of your   
``||game(noclick):on game update every (1000) ms||``   
container, add a   
``||sprites:set||`` ``||variables(sprites):mySprite||``
``||sprites:velocity to vx (50) vy (50)||``   
block.
1.   Change the variable name to your enemy sprite.
1.   Change the velocity values so that the sprites move slowly
toward the bottom of the screen.
1.   Add another block so that the enemy sprite is destroyed when it leaves
the screen.

Test your code to make sure it runs as you expect it.
View the hint to check your code.

```blocks
let enemySprite: Sprite = null
game.onUpdateInterval(1000, function () {
    enemySprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Enemy)
    enemySprite.setPosition(randint(8, 152), 0)
    // @highlight
    enemySprite.setVelocity(0, 25)
    // @highlight
    enemySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Complete! @showdialog

Good work! You've added enemies to your project that move toward the player.
In the next part, we'll add the ability to destroy those enemies!

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
```

```ghost
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