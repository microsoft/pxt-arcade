# Multiple enemy sprites

## Introduction @unplugged

**Let's add a little excitement by choosing from multiple enemy images!**
<hr/>
![Multiple Enemies](/static/recipes/shark-splash/02-B-enemies.gif)

## Step 1

If you already have a block that edits your enemies as they're created, use the one you've got.
Otherwise, you'll need to add one.
<hr/>

🔲 Drag an ``||sprites:on created [sprite] of kind [Player]||`` container 
into the workspace. 

🔲 Change the kind to **Enemy**.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## Step 2

If we want to make about half of our enemies one kind of sprite, 
then have all the others be a second sprite, we'll can use an 
**if/else** statement with a 50% chance of being true.
<hr/>

🔲 Snap a ``||logic:if <true> then / else||`` statement into the bottom 
of your **on created** container.

🔲 Drag a ``||math:[0] % chance||`` block into the **if/then** clause to 
replace **`<true>`**.

🔲 Change the chance percent from **0** to **50**.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {

    }
    else {

    }
})
```

## Step 3

As an example, suppose we want half of our enemies to be hermit crabs and
the other half to be sea snakes.  Here is how we would do that.
<hr/>

🔲 Snap a ``||sprites:set [mySprite] image to [ ]||`` block into the 
empty **if/then** clause (the top section of the **if/else** container.)

🔲 Grab the ``||variables:sprite||`` variable from the header of the 
**on created** container and drag it to replace ``||variables:mySprite||``
in the **set image** block.

🔲 Click the grey square in the **set image** block
to open the sprite editor. Toggle over to the **Gallery** and select the 
hermit crab (or whatever sprite works for the enemy of your game.)



```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . . . . c c . . .
            . . . . . . . . . . . . . . . c c c c 6 3 c . .
            . . . . . . . . . . . . . . c 6 3 3 3 3 6 c . .
            . . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c .
            . . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c
            . . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
            . . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
            . . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c
            . . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
            . . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . .
            . . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
            . . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
            . . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
            . . . . . . . . . c c c c c c c c c . . c c c .
        `)
    }
    else {

    }
})
```

## Step 4

**Now for the snakes!**
<hr/>

🔲 Duplicate the **set image** block we just made. 

🔲 Drag the copy into the empty **else** clause 
(the bottom section of the **if/else** container.)

🔲 Click on the hermit crab to open the sprite editor.  Toggle to 
**Gallery** and change the crab to a snake (or
whatever other enemy sprite works for your game.)

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . . . . c c . . .
            . . . . . . . . . . . . . . . c c c c 6 3 c . .
            . . . . . . . . . . . . . . c 6 3 3 3 3 6 c . .
            . . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c .
            . . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c
            . . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c
            . . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
            . . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
            . . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c
            . . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
            . . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . .
            . . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
            . . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
            . . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
            . . . . . . . . . c c c c c c c c c . . c c c .
        `)
    }
    else {
        sprite.setImage(img`
           . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `)
    }
})
```

## Conclusion @unplugged

**Thrilling!**
<hr/>
Feel like making your game even more epic?

Choose **A)** to learn to destroy enemies with projectiles!   
Choose **B)** to learn to add multiple lives to your game.  
Choose **C)** if you want to set the scene with background art!  

|      |      |      |
|:----:|:----:|:----:|
|  [![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) | [![Add lives](/static/recipes/shark-splash/02-C-enemies.gif)](#recipe:/recipes/shark-splash/02-C-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**A) Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles) | [**B) Add lives**](#recipe:/recipes/shark-splash/02-C-enemies) | [**C) Design a background**](#recipe:/recipes/shark-splash/04-background) |
