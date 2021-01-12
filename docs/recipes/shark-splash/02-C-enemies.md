# Make enemies that damage the player

## Introduction @unplugged

**There's more at stake when enemies do damage!**
<hr/>


![Enemy Damage](/static/recipes/shark-splash/02-C-enemies.gif)

## Step 1

Let's make collisions with enemies eat away at your health.

First, we need to tell the computer how many lives our hero character 
starts with.  ♥️♥️♥️ Three sounds good ♥️♥️♥️
<hr/>

🔲 Grab a ``||info:set life to [3]||`` block and snap it into the bottom of your 
existing **on start** container.  


```blocks
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    ...........fffcc...........
    ...........fbbbbcfffffffff.
    ............fbfffbbbbbbbbbf
    ............ffbbbbffb111bbf
    ..........ffcbbbbbff11111bf
    .........fcccbcbcbb11cccc1f
    ccccc...fcccbcbcbbb1c1c1cf.
    cbbddccfccccbcbcbbb1333c...
    .ccbddbcccccbbbbbbb1c333c..
    ..ccbbcccccccbbbbb11c133c..
    ..fccbffccccccbbbb111c31cc.
    ..fccf.cbbcccccbbbc111111c.
    .fcbbf..cdddddfbbbc1111cc..
    .fbbf....cdddfbbdbffccc....
    fbbf......ccfbbdbf.........
    fff.........fffff..........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
info.setLife(3)
```

## Step 2
Now it's time to add the code that tells the computer what to do 
when the player and enemy overlap.  

If you already have an **on sprite overlaps enemy** container in your workspace, 
you can add on to that.  Otherwise, you'll need to include this container here.
<hr/>

🔲 Drag an ``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``
container into the workspace. 

🔲 Change the second kind to Enemy.  
<br/>

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 3

The first thing you want to do when an enemy overlaps your hero is destroy the enemy. 
That will keep the enemy from hitting you multiple times at once. 
<hr/>

🔲 If you don't already have one, snap a ``||sprites:destroy [mySprite]||`` 
block into the **on sprite overlaps enemy** container.

🔲 Drag the ``||variables:otherSprite||`` variable from the header of the
**on sprite overlaps enemy** container and place it inside
the **destroy sprite** block, replacing ``||variables:mySprite||``.   
<br/>


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## Step 4

Now, we'll add the code to remove a life when struck by the enemy.
<hr/>

🔲 Snap a ``||info:change life by [-1]||`` block into the bottom of your
**on sprite overlaps enemy** container.  

🔲 Just for fun, snap a ``||scene:camera shake by [4] pixels for [500] ms||`` 
block at the end of the same container. 
This lets the player know they've been hit!  
<br/>

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
```

## Conclusion @unplugged

**Congrats!**

Now you've got some worthy enemies.
<hr/>

If you want to continue adding to your game,   
choose **A)** to learn how to make your enemies move!  
Choose **B)** to learn how to spawn multiple kinds of enemies.  
Choose **C)** to design your own game scenery!  


|      |      |      |
|:----:|:----:|:----:|
|  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies)  | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**A) Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)| [**B) Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**C) Design a background**](#recipe:/recipes/shark-splash/04-background) |

