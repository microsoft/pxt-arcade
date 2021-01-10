# Creating Enemy Sprites

## Introduction @unplugged

**Learn how to create enemies and spawn them at random locations!**
<hr/>

![Enemies](/static/recipes/shark-splash/02-enemies.gif)

## Step 1

To spawn enemies over and over again, we'll use an **on game update** loop. 
<hr/> 

🔲 Add an ``||game:on game update every [500]ms||`` container to the workspace.

```blocks
game.onUpdateInterval(500, function () {
})
```

## Step 2

Now we can add code to create enemies.
<hr/>

🔲 From the ``||sprites:Sprites||`` category, pull out an 
``||variables:set [mySprite] to sprite [ ] of kind [Player]||`` block and snap it 
into the new container.

🔲 Rename ``||variables:mySprite||`` to the variable to ``||variables:myEnemy||`` 
and change the kind from ``||sprites:Player||``to ``||sprites:Enemy||``. 

🔲 Click the grey square to open the sprite editor and draw an enemy
(or toggle to the **Gallery** and choose one that has been created for you.)  
<br/>


```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    // @highlight
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
})
```

## Step 3

At this point, we have the most boring enemies ever...they just kind of sit there.

**Let's fix that. **
<hr/>

🔲 Add a ``||sprites:set [mySprite] position to x [0] y [0]||`` 
block to the bottom of your **on game update** container.

🔲 Change ``||variables:mySprite||`` to ``||variables:myEnemy||`` in the new 
block.

<br/>

```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    myEnemy.setPosition(0, 0)
})
```

## Step 4

For the most fun, let's have the enemies appear at a random location across the screen.
<hr/>

🔲 Drag out a ``||Math:pick random [0] to [10]||`` argument block 
and snap it in to the **set position** block, replacing the **0** value for **x**.

🔲 Leave the first number in the **pick random** block as **0**, but change 
the second number from **10** to **160**, because that's the width of the screen.  
<br/>

```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    myEnemy.setPosition(randint(0, 160), 0)
})
```

## Step 5
We need to do something similar to cover the screen from top to bottom. 
<hr/>

🔲 Duplicate the ``||Math:pick random [0] to [160]||`` block from the **x** value and 
drag the copy in to the **y** area to replace **0**.

🔲 Inside the duplicate that we just placed, change **160** to **120**, because the 
height of the screen is just a little smaller than the width.  
<br/>


```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    // @highlight
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
})
```

## Step 6

If you try your game now, you'll see enemies pop up all over the place, but 
nothing happens when they catch you.  

**Let's change that!**
<hr/>

🔲 Drag an ``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||`` 
container into the workspace. 

🔲 Change the second sprite kind to ``||sprites:Enemy||``.
<hr/>

Now we have a container that will run code whenever our player and enemies overlap.  
<br/>

```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
})

// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 7

If a player and an enemy overlap, the first thing you want to do is destroy the
sprite (so it doesn't keep triggering the overlap action.)
<hr/>

🔲 Snap a ``||sprites:destroy [mySprite]||`` block into the empty **on sprite overlaps** container.

🔲 Drag the ``||variables:otherSprite||`` variable from the header of the 
**on sprite overlaps** to replace **mySprite** in the **destroy** block. This makes it
so that whichever sprite runs into the main player will be the one that is destroyed.  

<br/>




```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . c c . . .
        . . . . . . . c c c c 6 3 c . .
        . . . . . . c 6 3 3 3 3 6 c . .
        . . c c . c 6 c c 3 3 3 3 3 c .
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c
        . f f 5 c 6 c 5 f f 6 3 3 3 c c
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
        . c c 5 5 5 5 5 b c c 3 3 3 3 c
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
        b 5 4 b 4 4 4 4 b b 5 c b b . .
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
        . c c c c c c c c c . . c c c .
    `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## Conclusion @unplugged

**Now you have enemies!** 
<hr/>
Next, you can choose  
**A)** to add code that will destroy enemies with your projectiles.   
**Or**, choose **B)** learn to make your enemies move around.   
**Or**, choose **C)** to find out how to add a couple of different kinds of enemies.

|      |      |      |
|:----:|:----:|:----:|
|  [![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) |  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies) | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) |
| [**A) Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles) | [**B) Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies) | [**C) Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) |
