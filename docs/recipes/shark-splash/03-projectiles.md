# Projectiles and Effects

## Introduction @unplugged

**Let's give our projectiles some power!**
<hr/>

![Projectiles](/static/recipes/shark-splash/03-projectiles.gif)

## Detect sprite overlaps

First, we need to add the code that detects when a projectile has overlapped with an enemy. 
<hr/>

🔲 From the ``||sprites:Sprites||`` category, drag the 
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||`` container 
into your workspace. 

🔲 Change the first kind to **Projectile** and the second kind to **Enemy**.  
<br/>


```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Destroy the enemy

In this step, we'll destroy the enemy (aka: otherSprite).
<hr/>

🔲 Drag a ``||sprites:destroy [mySprite]||`` block into the new
**on sprite overlaps** container. 

🔲 Take the ``||variables:otherSprite||`` variable from the **on sprite overlaps** header
and snap it into the **destroy** block to replace **mySprite**.  
<br/>

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    otherSprite.destroy()
})
```

## Add score

**Let's turn this into a real game!**

After we destroy enemies with a projectile, we can add points to our score.
<hr/>

🔲 From ``||info:Info||``, drag the ``||info:change score by [1]||`` block to
the bottom of your **on sprite overlaps** container.

<br/>


```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    // @highlight
    info.changeScoreBy(1)
})
```

## Projectile Effects

Just for fun, let's add an effect to make the enemies more spectacular
when they're destroyed.
<hr/>

🔲 Find your **destroy** block inside your **on sprite overlaps** container 
and click the **⊕**.

Now you have an option for adding an effect and an amount of time that the effect will run.

🔲 Choose an effect from the dropdown menu, and change **500** ms to **200**ms.



```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    // @highlight
    mySprite.destroy(effects.spray, 200)
    info.changeScoreBy(1)
})
```

## Conclusion @unplugged

**You're on a roll!**
<hr/>

Want to make your game even more epic?  
Choose **A)** to learn to make your enemies move around, or  
Choose **B)** learn to spawn multiple kinds of enemies.  
Choose **C)** to learn to design a custom background for your game!


|      |      |      |
|:----:|:----:|:----:|
|  [![Moving enemies](/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies)  | [![Multiple enemies](/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
| [**A) Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)| [**B) Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies) | [**C) Design a background**](#recipe:/recipes/shark-splash/04-background) |
