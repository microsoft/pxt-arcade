# Collector Game


```ghost

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 b c 5 5 d 4 c . .
    . b b b b 5 5 5 b f d d 4 4 4 b
    . b d 5 b 5 5 b c b 4 4 4 4 b .
    . . b 5 5 b 5 5 5 4 4 4 4 b . .
    . . b d 5 5 b 5 5 5 5 5 5 b . .
    . b d b 5 5 5 d 5 5 5 5 5 5 b .
    b d d c d 5 5 b 5 5 5 5 5 5 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
duck.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        . . b b b b . .
        . b 5 5 5 5 b .
        b 5 d 3 3 d 5 b
        b 5 3 5 5 1 5 b
        c 5 3 5 5 1 d c
        c d d 1 1 d d c
        . f d d d d f .
        . . f f f f . .
        `, -90, 0)
    projectile.y = randint(0, 120)
    pause(1500)
})

```


## {Intro @showdialog}

Ready to give your **W,A,S,D** keys a workout?

Let's create a game that brings back some of the iconic arcade style that we love.

![Code a Collector Game](/static/skillmap/collector/collector-activity-1.gif "Grab that coin!" )



## {Step 2}

**🐤 This game needs a** [__*sprite*__](#sprote "a dynamic 2-D image")**. 🐤**

---

► From the ``||sprites:Sprites||`` category, grab
``||variables:set [mySprite] to sprite [ ] of kind [Player]||``
and drag it into the empty **on start** container in the workspace.

► Get to the **Gallery** by clicking inside the grey sprite image square
and toggling the switch at the top.

► Choose one of our pre-loaded sprite images...or stay in
**Edit** mode to create your own.  Click **Done** once you're
happy with your sprite.


```blocks
//@highlight
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 b c 5 5 d 4 c . .
    . b b b b 5 5 5 b f d d 4 4 4 b
    . b d 5 b 5 5 b c b 4 4 4 4 b .
    . . b 5 5 b 5 5 5 4 4 4 4 b . .
    . . b d 5 5 b 5 5 5 5 5 5 b . .
    . b d b 5 5 5 d 5 5 5 5 5 5 b .
    b d d c d 5 5 b 5 5 5 5 5 5 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    `, SpriteKind.Player)

```




## {Step 3}

**🤩 Fabulous 🤩**

Let's get our sprite moving up and down with the controller.

---

► From the ``||contoller:Controller||`` category, grab a
``||controller:move [mySprite] with buttons ⊕||``
block and snap it into the bottom of the **on start** container.

► Click the **⊕** button on the new block to show extra
 [__*arguments*__](#argue "extra chunks of information the block needs").

► To keep the sprite from moving side-to-side, change
[__*vx*__](#whatVX "horizontal velocity") (velocity on x) to **0**.




```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 b c 5 5 d 4 c . .
    . b b b b 5 5 5 b f d d 4 4 4 b
    . b d 5 b 5 5 b c b 4 4 4 4 b .
    . . b 5 5 b 5 5 5 4 4 4 4 b . .
    . . b d 5 5 b 5 5 5 5 5 5 b . .
    . b d b 5 5 5 d 5 5 5 5 5 5 b .
    b d d c d 5 5 b 5 5 5 5 5 5 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    `, SpriteKind.Player)
    //@highlight
controller.moveSprite(mySprite, 0, 100)

```



## {Step 4}

**💰 The sprite needs something to collect 💰**

Let's toss some coins toward it every couple of seconds...**forever**.

---

► From ``||loops:Loops||`` category, grab a
``||loops:forever||`` loop container and drag it out into
an empty spot on the workspace.

► From ``||sprites:Sprites||``, grab
``||variables:set [projectile] to projectile [ ] from side with vx [50] vy [50]||``
and snap it into the empty **forever** container.

► Choose a coin sprite for your projectile by clicking on the grey box and toggling
to **Gallery** or stay in the **Editor** and create your own.

► To make the projectile fly quickly from right to left, change
[__*vx*__](#whatVX "horizontal velocity") to **-150**
and [__*vy*__](#whatVY "vertical velocity") to **0**.



```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(img`
        . . b b b b . .
        . b 5 5 5 5 b .
        b 5 d 3 3 d 5 b
        b 5 3 5 5 1 5 b
        c 5 3 5 5 1 d c
        c d d 1 1 d d c
        . f d d d d f .
        . . f f f f . .
        `, -150, 0)
})

```




## {Step 5}

**😯 Now you have a steady stream of income 😯**

If we leave the coins like this, the game will be WAY too easy.  Let's
send projectiles from a random height each time.

---

► From  ``||sprites:Sprites||``, grab a
``||sprites:set [mySprite] [x] to [0]||``
block and snap it into the end of the **forever** loop container.

► Change **mySprite** to **projectile** using the first dropdown menu.

► Change **x** to **y** using the other dropdown menu.

► Replace **0** with ``||math:pick random [0] to [10]||``.
(From the ``||math:Math||`` category)


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(img`
        . . b b b b . .
        . b 5 5 5 5 b .
        b 5 d 3 3 d 5 b
        b 5 3 5 5 1 5 b
        c 5 3 5 5 1 d c
        c d d 1 1 d d c
        . f d d d d f .
        . . f f f f . .
        `, -150, 0)
    projectile.y = randint(0, 10)

})

```



## {Step 6}

**This is looking great, but the coins still hover around the top.**

---

► Help the coins spread out by changing the largest random number from
**10** to **120**.

► Keep the coins from shooting out at the speed of light by
adding a ``||loops:pause [100] ms||`` block (from the  ``||loops:Loops||``
category) to the end of the **forever** loop.

► Change the pause time to **1500 ms** by clicking in the textbox and typing
**1500** instead of choosing a time from the dropdown menu.

```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(img`
        . . b b b b . .
        . b 5 5 5 5 b .
        b 5 d 3 3 d 5 b
        b 5 3 5 5 1 5 b
        c 5 3 5 5 1 d c
        c d d 1 1 d d c
        . f d d d d f .
        . . f f f f . .
        `, -150, 0)
    projectile.y = randint(0, 120)
    pause(1500)

})

```

## {Step 7 @showdialog}

**🎮 Give your game a try in the game screen 🎮**


## {Step 8}

**Notice anything missing?**

Right now, nothing happens when you catch a coin.
Let's change that.

---

► From ``||sprites:Sprites||``, grab an
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``
container and drop it into an empty area of the workspace.

► Change the second kind from **Player** to **Projectile**.

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {

})
```



## {Step 9}

Now we have a container for code that runs when the sprite
overlaps a projectile.
**Let's add a block to destroy coins as you catch them.**

---

► From ``||sprites:Sprites||``, grab
``||sprites:destroy [mySprite] ⊕||`` and snap it into the empty
**on sprite overlaps** container.

► To make sure that the correct projectile is destroyed, grab the
``||variables:otherSprite||`` argument from the header of the
**on sprite overlaps** container and drop it into the
``||sprites:destroy [mySprite] ⊕||`` block to replace the value **mySprite**.

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    //@highlight
    otherSprite.destroy()
})
```


## {Step 10}

**🏆 Keeping score 🏆**

Finally, let's add a point to your score after you catch
a coin.

---

► From ``||info:Info||``, grab
``||info:change score by [1]||`` and snap it into the bottom of the
**on sprite overlaps** container.


```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
```


## {Step 11}

**🎆 Congrats 🎆**

---

Now you have your very own collector game. Give it a try!

Click **Done** to return to the main page where you can share your game
with family and friends!