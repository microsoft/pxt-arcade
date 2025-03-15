# Lab 2.1 Part 3: Hit the Targets!
### @explicitHints true

## Be Gone! @showdialog

Our project allows the player to fire at enemies moving toward them,
but nothing happens to the enemies when they are hit. Let's fix that!

![Lab 2.1.3](https://arcade.makecode.com/api/_1YCaFF5C6iXf/thumb)

## Gotta start somewhere!

First, let's give the player a starting score and set of lives.

---

1.   At the bottom of your<br/>
``||loops(noclick):on start||``<br/>
container, add blocks
from the ``||info:Info||`` drawer to give the player:
     1.   A starting score
     1.   A starting set of lives.

---

Test your project to see if your code runs as expected.


#### ~ tutorialhint

```blocks
let flamethrower: Sprite = null
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
// @highlight
info.setScore(0)
// @highlight
info.setLife(3)
```

## Bye bye, enemies!

Now, let's make our projectiles remove the enemy it strikes.
Let's add to our player's score, too!

---

1.   From the ``||sprites:Sprites||`` drawer, add an <br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``<br/>
container to your workspace.
1.   Change the kinds so that the block reads as follows:<br/>
``||sprites(noclick):on [sprite] of kind [Projectile] overlaps [otherSprite] of kind [Enemy]||``
1.   Into your new container, drag a block from the<br/>
``||info:Info||`` drawer
that increases the player's score. Feel free to change the value to anything
you like.
1.   Add more blocks so that<br/>
``||variables(noclick):sprite||`` and<br/>
``||variables(noclick):otherSprite||`` are both destroyed (with any effect
that you like!)


~hint Why sprite and othersprite? 🤷🏻‍♀️ 

---

In this game, we have dozens of projectiles (all with the same name) and 
dozens of enemies (also with the same name.) So how is the computer to know which one to destroy? 

The ``||sprites(noclick):on overlap||`` block gives us a very clever way to make sure
that the computer is picking the _**exact**_ Food that overlapped with the Player. It assigns it a new name!

By swapping the ``||variables(noclick): mySprite||`` value with ``||variables(noclick):sprite||`` or ``||variables(noclick):othersprite||``, you now have a way to 
make sure that only the exact items that overlapped are affected.  Pretty cool, huh?


hint~

---

Test your project to see if your code runs as expected.


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.spray, 500)
})
```



## Make it Colorful

Let's make the scene look a little more snazzy with some background color.

---

1.   At the top of your<br/>
``||loops(noclick):on start||``<br/>
container, add a block 
from the ``||scene:Scene||`` drawer to add a background color. <br/>
Try to choose a color that works well with the other sprites you've chosen. 

---

Test your project to see if your code runs as expected.


#### ~ tutorialhint

```blocks
let flamethrower: Sprite = null
// @highlight
scene.setBackgroundColor(11)
flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
```



## Complete! @showdialog

Good work! 

The player now has a way to destroy targets and earn points.
Now we need to put the player in some jeopardy. On to part 4!




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
let iceSprite: Sprite = null
let fireSprite: Sprite = null
let flamethrower: Sprite = null
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