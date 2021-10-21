# Experience Danger

### @autoexpandOff true

```ghost
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
scene.setBackgroundColor(0)
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
mySprite.setStayInScreen(true)
info.startCountdown(15)
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
    pause(randint(1000, 2000))
})
forever(function () {
    myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, -90, 0)
    myEnemy.setKind(SpriteKind.Enemy)
    myEnemy.y = randint(0, 120)
    pause(randint(1200, 2200))
})


```

```template

info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})

let projectile: Sprite = null
scene.setBackgroundColor(7)
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
mySprite.setStayInScreen(true)
info.startCountdown(15)
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
    pause(randint(1000, 2000))
})


```


## {Intro @showdialog}

Collecting things is great, but avoiding danger is more exciting.

This tutorial will show you how to add menacing elements to your game.

![Avoid the rocks](/static/skillmap/collector/collector-activity-3.gif "Make it exciting!" )



## {Step 1}

The code for a collector game is already in the workspace.
We can build on this to make something that requires extra skill.

Let's start by adding a new kind of projectile.

---

► Right-click on the ``||loops:forever||`` loop container (the one that already holds
the code for your main projectile) and choose **Duplicate** from the
top of the menu.

► Inside that new loop, click on the ``||variables: projectile||`` variable in the
**set projectile to** block. A dropdown will appear, allowing you to
select **New variable...** .

► Name this new enemy projectile **myEnemy**.


```blocks

forever(function () {
    let projectile: Sprite = null
    //@highlight
    myEnemy = sprites.createProjectileFromSide(img`
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
    pause(randint(1000, 2000))
})
```


## {Step 2}

Our new enemy isn't quite ready. Let's make sure to get all the blocks
in the new **forever** loop pointed to the right thing.

---

► Change the variable in the new ``||sprites:set [projectile] [y] to (pick random [0] to [120])||`` block from **projectile**
to **myEnemy**.

► Now change the image for your **myEnemy** sprite from a coin to
something a little more dangerous, like a rock.


```blocks

forever(function () {
    let myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, -90, 0)
    myEnemy.y = randint(0, 120)
    pause(randint(1000, 2000))
})
```


## {Step 3}

If you play your game right now, you'll see that the rocks and the coins
fly out at about the same rate. Let's add some variation.

---

► Inside the first block in the **myEnemy** ``||loops:forever||`` loop, change the **vx** for **myEnemy** to **-110**

► Rocks should also be less frequent than coins.  Let's change the
 ``||loops:pause (pick random [1000] to [2000])ms||`` to stay between **1500** and **2500** ms.


```blocks

forever(function () {
    let myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, -110, 0)
    myEnemy.y = randint(0, 120)
    pause(randint(1500, 2500))
})
```


## {Step 4}

**😲 Uh-Oh 😲**

Right now, running into an enemy INCREASES your score.  That's not right.

Let's make sure the code knows the difference between a projectile and myEnemy.

---

► From ``||sprites:Sprites||``, grab a ``||sprites:set [mySprite2] kind to [Player]||``
block and snap it just **ABOVE** the **pause** block in the enemy's **forever** loop container.

► In the new block, change **mySprite2** to **myEnemy** and change **Player**
to **Enemy**.


```blocks

forever(function () {
    let myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, -110, 0)
    myEnemy.y = randint(0, 120)
    //@highlight
        myEnemy.setKind(SpriteKind.Enemy)
    pause(randint(1500, 2500))

})
```

## {Step 5}

**😈 Wicked 😈**

Now the program knows your rock is an enemy.
What are we going to do about it?

---

► Duplicate the ``||sprites: on [sprite] of kind [Player] overlaps [otherSprite] of kind [Projectile]||``
 container that's already in the
workspace.

► In the header of the new container,
change the second **kind** from **Projectile** to **Enemy**.

► Change the effect from **rings** to something more meaningful for your
enemy. (**Fire** is impressive.)



```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
```


## {Step 6}

At this point, the player is still awarded points when they hit a rock.

**Let's subtract a life, instead.**

---

► Delete the ``||info:change score by [1]||`` block from the **on overlaps Enemy**
container.

► From ``||info: Info||``, grab a ``||info:change life by [-1]||`` block and
snap it into the end of the **on overlaps Enemy**
container.



```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    //@highlight
    info.changeLifeBy(-1)
})
```


## {Step 7}

**What an amazing creation!**

This game has it all...countless riches, enemies, winning, and losing!  Play it through before moving along.

Click **Done** to return to the main page where you can share your game
with family and friends!