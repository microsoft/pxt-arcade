# Lab 2.1 Part 2: Here Come the Targets!
### @explicitHints true

## Here come the enemies! @showdialog

A game without enemies isn't much of a game.<br/>
Let's add some targets!

![Lab 2.1.2](https://arcade.makecode.com/api/_5e25JWbrWAiq/thumb)

## Standard Orbit

Let's park some enemies at the top of the screen.

---

1.   From the ``||game:Game||`` drawer, <br/>add an<br/>
``||game:on game update every (500) ms||``<br/>
container block to your workspace.
1.   Change the interval from `500` ms to `1000` ms.<br/><br/>
_**Question**: How long is 1,000 milliseconds?_<br/><br/>
1.   Within your new<br/>
``||game(noclick):on game update every (1000) ms||``<br/>
container,
add blocks to accomplish the following:
     1.   Add an enemy sprite to the screen.
     1.   Give the enemy sprite variable an appropriate name.
     1.   Give the enemy sprite an appropriate image.
     1.   Place the enemy sprite just above the top of the screen.
          Make sure at least part of the image is visible, though!
     1.   Give the enemy sprite a random x-coordinate.

---

Test your code to make sure it runs as you expect. <br/>

You should see a bunch of enemies created at the top of the screen, with only
part of the image peeking in.



#### ~ tutorialhint

```blocks
let iceSprite: Sprite = null
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
})
```

## Let's roll!

Now, let's move the enemies toward the player!

---

1.   At the bottom of your<br/>
``||game(noclick):on game update every (1000) ms||``<br/>
container, add a<br/>
``||sprites:set [mySprite] velocity to vx [50] vy [50]||``<br/>
block.
1.   Change the variable name to your enemy sprite.
1.   Change the velocity values so that the sprites move slowly
toward the bottom of the screen.
1.   Add another block so that the enemy sprite is destroyed when it leaves
the screen.

---

Test your code to make sure it runs the way you expected.


#### ~ tutorialhint

```blocks
let iceSprite: Sprite = null
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    // @highlight
    iceSprite.setVelocity(0, 25)
    // @highlight
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Complete! @showdialog

Good work! You've added enemies to your project that move toward the player.
In the next part, we'll add the ability to destroy those enemies!




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
let fireSprite: Sprite = null
let flamethrower: Sprite = null
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```