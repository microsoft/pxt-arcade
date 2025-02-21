# Lab 2.6 Part 1: Only Room for Two!
### @explicitHints true


## There's only room for two of us! @showdialog

Many games limit the number of projectiles that you can create at any one time.

Let's update one of your previous projects to do just that!

![Lab 2.6.1](https://arcade.makecode.com/api/_giXKwtdy5Whv/thumb)


## How many do you want?

First, let's define the maximum number of projectiles that we can have
on the screen.

---

1.   Create a new ``||variables:variable||`` that will hold the maximum number of projectiles
allowed on the screen. <br/>
(Call it something like **maxProjectiles**.)
1.   We also need a new variable that will keep track of the number of
projectiles currently on the screen. <br/>
(Call it something like **projectileCount**.)
1.   In your<br/>
``||loops(noclick):on start||``<br/>
container, set the value of<br/>
``||variables:maxProjectiles||``<br/>
to **2**.
1.   In your<br/>
``||loops(noclick):on start||``<br/>
container, set the value of<br/>
``||variables:projectileCount||``<br/>
to **0**.

---

Check the hint if you need help.

#### ~ tutorialhint

```blocks
let maxProjectiles = 20
let projectileCount = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
// @highlight
 maxProjectiles = 2
// @highlight
 projectileCount = 0
```

## Count 'em up!

Now we need to *increment* our variable when we create a projectile.

---

1.   In your<br/>
``||controller(noclick):on (A) button (pressed)||``<br/>
container,
add a block that changes the<br/>
``||variables:projectileCount||``<br/>
variable by **1**.

We also need to *decrement* our variable when a projectile is destroyed.
The easiest way to do this is to add a new event handler.

1.   From the ``||sprites:Sprites||`` drawer, add an<br/>
``||sprites:on destroyed [sprite] of kind [Player]||``<br/>
block.
1.   In this new container, change the kind to **Projectile**.
1.   Add a block to this new container that changes the <br/>
``||variables:projectileCount||``<br/>
variable by **-1**.

---

Run your project. You should not see any difference from before. Why not?

View the hint to check your code.

#### ~ tutorialhint

```blocks
let fireSprite: Sprite = null
let projectileCount = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    fireSprite.setPosition(flamethrower.x, flamethrower.y)
    fireSprite.setVelocity(0, -200)
    fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
    // @highlight
    projectileCount += 1
})
//@highlight
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
```

## Testing! Testing! 1 ... 2 ... 3!

Nothing seems different (yet.)
We are counting the number of projectiles on the screen,
but we aren't doing anything to limit them.<br/>
Let's fix that!

---

1.   To the **top** of your <br/>
``||controller(noclick):on (A) button (pressed)||`` <br/>
container, add an <br/>
``||logic:if||``<br/>
block.
1.   Move all of the other blocks from the <br/>
``||controller(noclick):on (A) button (pressed)||``<br/>
container into the new <br/>
``||logic(noclick):if||``  container. 
1.   Add blocks so that the title of the ``||logic:if||`` block reads:<br/>
``||logic(noclick):if <projectileCount [<] maxProjectiles> then||``.

---

Run your project and see if it limits the number of projectiles that you are
able to create.  (If your vy is high, you may have to fire very fast!)


#### ~ tutorialhint

```blocks
let fireSprite: Sprite = null
let projectileCount = 0
let maxProjectiles = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
        fireSprite.setPosition(flamethrower.x, flamethrower.y)
        fireSprite.setVelocity(0, -200)
        fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
        projectileCount += 1
    }
})
```

## Conclusion @showdialog

Good job! Now, let's make the enemies speed up! 

**On to Part 2!**


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
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
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
    if (projectileCount < maxProjectiles) {
        fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
        fireSprite.setPosition(flamethrower.x, flamethrower.y)
        fireSprite.setVelocity(0, -200)
        fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
        projectileCount += 1
    }
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let projectileCount = 0
let maxProjectiles = 0
let flamethrower: Sprite = null
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
maxProjectiles = 3
projectileCount = 0
game.onUpdateInterval(1000, function () {
    iceSprite = sprites.create(lab2imgs.icecube, SpriteKind.Enemy)
    iceSprite.setPosition(randint(8, 152), 0)
    iceSprite.setVelocity(0, 25)
    iceSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```
