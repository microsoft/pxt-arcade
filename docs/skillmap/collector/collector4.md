# Give it Life

### @autoexpandOff true


```template
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
scene.setBackgroundColor(3)
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


```ghost

info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
})
let extraLife: Sprite = null
let myEnemy: Sprite = null
let projectile: Sprite = null
scene.setBackgroundColor(3)
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
    myEnemy.y = randint(0, 120)
    myEnemy.setKind(SpriteKind.Enemy)
    pause(randint(1200, 2200))

})
forever(function () {
    extraLife = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . c c c . . . . . c c c . . .
. c 2 2 2 c c . c c 2 2 2 c . .
. c 2 2 2 2 2 c 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. . c 2 2 2 2 2 2 2 2 2 c . . .
. . . c 2 2 2 2 2 2 2 c . . . .
. . . . c c 2 2 2 c c . . . . .
. . . . . . c 2 c . . . . . . .
. . . . . . . c . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -90, 0)
    extraLife.y = randint(0, 120)
    extraLife.setKind(SpriteKind.Food)
    pause(randint(4000, 5000))
     otherSprite.say("+1", 1000)

})


```



## {Intro @showdialog}

Ready to give your game some extra life?


![Collect extra lives](/static/skillmap/collector/collector-activity-4.gif "Collect your jar of hearts" )



## {Step 1}

The code for a collector game is already in the workspace.

**❤️ Let's add the ability to collect extra lives ❤️**

---

► Right-click on the ``||loops:forever||`` loop container that holds
the code to create **myEnemy** and choose **Duplicate** from the
top of the menu.

► Inside that new loop, click on the ``||variables: myEnemy||`` variable in the
**set projectile to** block. A dropdown will appear, allowing you to
select **New variable...** .

► Name your extra life projectile **extraLife**.


```blocks
forever(function () {
    let myEnemy: Sprite = null
//@highlight
    let extraLife = sprites.createProjectileFromSide(img`
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
    myEnemy.setKind(SpriteKind.Enemy)
    pause(randint(1500, 2500))
})

```


## {Step 2}

**The extra life isn't quite ready.**

Let's make sure to get all the blocks
in the new **forever** loop pointed to the right place.

---

► Change the variables in both the **set y to** block AND the **set kind to**
block from ``||variables:myEnemy||`` to ``||variables:extraLife||``.

► Now change the image for the **extraLife** sprite from a rock to
something healing...like a heart or a potion.

► Extra lives aren't the enemy, they're fuel! In the **set kind to** block,
change **Enemy** to **Food**.


```blocks

forever(function () {
    let extraLife = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . c c c . . . . . c c c . . .
. c 2 2 2 c c . c c 2 2 2 c . .
. c 2 2 2 2 2 c 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. . c 2 2 2 2 2 2 2 2 2 c . . .
. . . c 2 2 2 2 2 2 2 c . . . .
. . . . c c 2 2 2 c c . . . . .
. . . . . . c 2 c . . . . . . .
. . . . . . . c . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -90, 0)
    extraLife.y = randint(0, 120)
    extraLife.setKind(SpriteKind.Food)
    pause(randint(1200, 2200))
})

```


## {Step 3}

Extra lives are supposed to be special, but they appear just as much
as the other two projectiles right now.

**Let's set a longer random pause for extraLife.**

---

► Inside the new **extraLife** forever loop, change the
random **pause** to stay between **4500** and **5500** ms.


```blocks

forever(function () {
    let extraLife = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . c c c . . . . . c c c . . .
. c 2 2 2 c c . c c 2 2 2 c . .
. c 2 2 2 2 2 c 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. c 2 2 2 2 2 2 2 2 2 2 2 c . .
. . c 2 2 2 2 2 2 2 2 2 c . . .
. . . c 2 2 2 2 2 2 2 c . . . .
. . . . c c 2 2 2 c c . . . . .
. . . . . . c 2 c . . . . . . .
. . . . . . . c . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -90, 0)
    extraLife.y = randint(0, 120)
    extraLife.setKind(SpriteKind.Enemy)
    //@highlight
    pause(randint(4500, 5500))
})

```



## {Step 4}

**Play through your game once or twice.  Notice anything wrong?**

That's right! Nothing happens when you collect an extra life. Let's
fix that.

---

► Duplicate the **on sprite overlaps Enemy** container that's already in the
workspace.

► In the header of the new container,
change the second **kind** from **Enemy** to **Food**.

► Change the effect from **fire** to something more appropriate for an
extra life. (**Hearts** work well with this theme.)



```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
})
```


## {Step 6}

The extra life is still **subtracting** a life when collected.

Let's make it **add** one, instead.

---

► Inside the **on sprite overlaps Food** container,
Look for the ``||info:change life by [-1]||`` block
and change **-1** to **1**.

► To exaggerate this gift even more, open the ``||sprites:Sprites||`` category
and grab a ``||sprites:[mySprite] say [":)"]||`` block.

► Snap the new block into the **top** of the **on sprite overlaps Food** container.



```blocks
    let mySprite: Sprite = null

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.say(":)")
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
})

```



## {Step 7}

► The new **mySprite say** block is pointed toward the wrong sprite. To fix that,
drag the ``||variables:otherSprite||`` argument out of the header of the
**on sprite overlaps Food** header and snap it in to replace the
``||variables:mySprite||`` variable.

► Change the text from **:)** to **+1**.


```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
   //@highlight
    otherSprite.say("+1")
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
})

```

## {Step 8}


**There you go!**

You have a full-featured game that anyone would be proud of.

Click **Done** to return to the main page where you can share your game
with family and friends!