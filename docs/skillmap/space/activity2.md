# Projectiles

## Introduction @unplugged

![Releasing projectiles](/static/skillmap/space/projectiles.gif "Here, enemy ship. Would you like to borrow an asteroid?")

Are you ready to customize your ship? 

In this tutorial, you'll learm to fire a projectile when the **A** button
is pressed and add your own special effects.

## Customize sprites

The workspace is pre-loaded with code for a flying ship.

It's up to you to customize the [__*sprite*__](#sprote "2-D image that moves on the screen") and make it your own. You could design a new 
kind of vehicle OR turn it into an alien creature floating through space! 👽


---


**Tip:** Remember, to edit a sprite, click inside the grey square where your current sprite is displayed.

![Edit the sprite](/static/skillmap/space/edit-sprite.png "Click within the square. I dare you!")

## Add a button event

🔲 Drag an ``||controller:on [A] button pressed ||`` container into the workspace, 

🔲 Snap a <br/>
``||variables:set [projectile] to||`` ``||sprites:projectile [ ] from [mySprite] with vx [50] vy [50]||`` 
block inside of it.

🔲 Click on the grey box inside of the new projectile block to draw your 
flying object (or select one from the gallery.)

---


**Tip:** Run your code in the simulator and launch a few projectiles 
by pressing the ![The A Button](/static/skillmap/space/a-button.png "Let's get fired up!") button.  What happens?


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
let projectile = sprites.createProjectileFromSprite(img`
3 3 3 3 3 3 3 3
3 . . . . . . 3
3 . 3 3 3 3 . 3
3 . 3 . . 3 . 3
3 . 3 . . 3 . 3
3 . 3 3 3 3 . 3
3 . . . . . . 3
3 3 3 3 3 3 3 3
    `, mySprite, 50, 50)
})
})
```

## Retrospect @unplugged

You probably noticed that your projectiles are firing toward the bottom 
right corner. This is *not helpful* when your enemies are coming from above! Let's take 
a second to figure out what's happening.

---

The ``||variables:set projectile to||`` block comes preloaded with 
an [__*argument*__](#argue "extra chunk of information that the block needs") 
that sets both the [__*vx*__](#whatVX "horizontal velocity") 
and [__*vy*__](#whatVY "vertical velocity") 
values to 50.

```block
let mySprite: Sprite = null
let projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 50, 50)
```

## Learn Velocity @unplugged

To change the direction of the projectiles, you need to change the  
speed they travel in a certain direction.  
In MakeCode Arcade, we call that the [__*velocity*__](#veloc "speed in a given direction").

- Change whether they fly left or right by changing the [__*vx*__](#whatX "speed from left to right")  
- Change whether they fly up or down by changing the [__*vy*__](#whatX "speed from top to bottom")  
- What happens when you change both?

![Directional Projectiles](/static/skillmap/space/vxvy.gif "Round and Round")


## Create a projectile

Play with the __vx__ and __vy__ values of the projectile until they're flying straight up at a decent speed.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    let projectile = sprites.createProjectileFromSprite(img`
3 3 3 3 3 3 3 3
3 . . . . . . 3
3 . 3 3 3 3 . 3
3 . 3 . . 3 . 3
3 . 3 . . 3 . 3
3 . 3 3 3 3 . 3
3 . . . . . . 3
3 3 3 3 3 3 3 3
    `, mySprite, 0, -70)
})
```

## Custom effects

💥 Now for some special effects 💥

---

🔲 Find 
``||sprites:[mySprite] start [spray] effect||`` and snap it in at 
the bottom of the ``||controller:on [A] button pressed ||`` container.  

🔲 Change variable ``||variables:mySprite||`` to ``||variables:projectile||`` if you
want the effects on your projectiles instead of on your ship.  

🔲 Try different options from the ``||sprites:[spray]||`` dropdown menu and choose the one you like best!  

---

**Tip:** You can add another ``||sprites:[mySprite] start [spray] effect||`` block
to add a separate effect on your spaceship

---

**Congrats! Now you're ready to move to the next tutorial.**

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
3 3 3 3 3 3 3 3
3 . . . . . . 3
3 . 3 3 3 3 . 3
3 . 3 . . 3 . 3
3 . 3 . . 3 . 3
3 . 3 3 3 3 . 3
3 . . . . . . 3
3 3 3 3 3 3 3 3
    `, mySprite, 0, -70)
    // @highlight
    projectile.startEffect(effects.fire);
})
```


```template
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
```