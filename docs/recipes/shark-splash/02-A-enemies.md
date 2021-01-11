# Making the enemies move

## Introduction @unplugged

Enemies are too easy to reach when they're sitting still. 

**Let's get them moving.**
<hr/>

![Moving Enemies](/static/recipes/shark-splash/02-A-enemies.gif)

## Step 1

First, we need to add the code to tell the program *when* to get 
an enemy moving.
<hr/>

🔲 Drag an ``||sprites:on created [sprite] of kind [Player]||`` container 
into the workspace. 

🔲 Change the kind to ``||sprites:Enemy||``.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## Step 2

To get the enemy moving left, they'll need a negative 
[__*velocity*__](#whatVel "speed in a direction") along the x-axis (**vx**).
<hr/>

🔲 Snap a ``||sprites:set [mySprite] velocity to vx [50] vy [50]||`` block into
the **on created** block. 

🔲 Replace  ``||variables:mySprite||`` with the ``||variables:sprite||`` variable
from the header of the **on created** container.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(50, 50)
})
```

## Step 3

If we leave the velocity the way it is, enemies will drift toward the
bottom right. Let's change the arguments so they move straight to the left. 
<hr/>

🔲 To stop the downward drift, change **vy** of the **set sprite velocity** to **0**.

🔲 To change their direction from right to left, change **vx** of the **set sprite velocity** 
to **-50**.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
})
```

## Step 4

Once the enemies travel out of sight, they won't ever come back. 
Let's clean them up by telling them to auto destroy once 
they leave the screen.
<hr/>

🔲 Snap a ``||sprites:set [mySprite] [stay in screen] <OFF>||`` block 
into the **end** of the **on created** container.

🔲 Replace  ``||variables:mySprite||`` with the ``||variables:sprite||`` variable
from the header of the **on created** container.

🔲 Click ``||sprites:stay in screen||`` to open a dropdown.  Select ``||sprites:auto destroy||``.

🔲 Toggle **`<OFF>`** to **`<ON>`**.  
<br/>

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Conclusion @unplugged

**Ready to keep going?!?**

Choose **A)** to add power to your projectiles.  
Choose **B)** to learn to spawn lots of enemies.  
Choose **C)** to find out how to make the background your own!  

|      |      |      |
|:----:|:----:|:----:|
|  [![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**A) Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles) | [**B) Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**C) Design a background**](#recipe:/recipes/shark-splash/04-background) |
