# Lab 2.1 Part 1: On Target
### @explicitHints true

## Fire Away! @showdialog

In Lab 2.1, you'll learn about event handlers and how they can be used
in projects. You also work with sound. 🔊

At the end of this unit, you'll have a multi-level target practice game. 
(Our example features a flamethrower melting icecubes that drop from the sky.)

![Lab 2.1.1](https://arcade.makecode.com/api/_axX5jJ3To1Ed/thumb)


## Step Right Up!

Let's create a target tracking game.
First, we need a hero sprite in our project.

---

1.   From the ``||sprites:Sprites||`` drawer, add a block to your
``||loops(noclick):on start||`` container to create your Player sprite.
1.   Give your variable an appropriate name.<br/>
(Ours will be `flamethrower`.)
1.   Give the sprite an image.
1.   Add more blocks so that the player sprite:
     1.   starts near the bottom of the screen
     1.   moves when the player uses the d-pad
     1.   stays on the screen at all times

---

Test your project to make sure your code runs as expected.
View the hint to check your code.

#### ~ tutorialhint

```blocks
//@highlight
let flamethrower = sprites.create(lab2imgs.flamethrower, SpriteKind.Player)
//@highlight
flamethrower.setPosition(80, 110)
//@highlight
controller.moveSprite(flamethrower)
//@highlight
flamethrower.setStayInScreen(true)
```

## Press the Button!

Let's add our first event handler.

---

-    From the ``||controller:Controller||`` drawer, drag an   
``||controller:on A button pressed||``   
container block onto your workspace.

---

Any blocks that you place in this container will run whenever the player
presses the **A** button on their controller.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Projectile ... What?

Launch a *projectile* every time the player presses the **A** button.


~hint What is a projectile?

---

A projectile is something that is thrown or launched...like a ball,
an arrow, or a laser beam.

hint~

---


1.   Inside the   
``||controller(noclick):on A button pressed||``   
container that you just added to your workspace,
add a
``||sprites:Sprites||`` block that
creates a new sprite. This sprite will be the projectile.
1.   Change the sprite's kind to **Projectile**
1.   Give the sprite an appropriate image
1.   Give the sprite an appropriate name

---

Next, we'll make the sprite look like it is launched from the Player sprite!





#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
        let fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
})
```

## Fire Away! Again!

Let's add some blocks so that the projectile looks like it was launched
by the player.

---

1.   To the bottom of your   
``||controller(noclick):on A button pressed||``   
container, add a   
``||sprites:set [mySprite] position to x [0] y [0]||``   
block.
1.   Change the variable name to your projectile's name.
1.   For the x-coordinate, add a<br/>
``||sprites [mySprite] [x]||``<br/>
block. 
1.   In the new block for the x-coordinate, change the variable name to
the name of your **Player** sprite.
1.   Add another  <br/>
``||sprites [mySprite] [x]||``<br/>
block for the y-coordinate. Use the dropdown to change
**x** to **y**. <br/>
Also, change the variable name to
the name of your **Player** sprite,
just like before.


These blocks will move the starting point of the projectile so that it 
is at the same location as your player sprite.

---

Test your project to make sure that it runs as expected.

View the hint to check your code.

#### ~ tutorialhint

```blocks
let flameSprite: Sprite = null
let flamethrower: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    flameSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    //@highlight
    flameSprite.setPosition(flamethrower.x, flamethrower.y)
})
```

## Get A Move On!

It's not much of a projectile if it doesn't move! Let's make the projectile
fly upward when it's launched.

---

1.   To the bottom of your <br/>
``||controller(noclick):on A button pressed||`` <br/>
container, add a  <br/>
``||sprites:set [mySprite] velocity to vx [50] vy [50]||``  <br/>
block. 
1.   Change the variable name to the name of your projectile
1.   Set the **vx** and **vy** values to make the projectile move up towards
the top of the screen
1.   Add a block to destroy the projectile when it moves off of the screen

---

Use the light bulb hint if you get stuck!

#### ~ tutorialhint

```blocks
let flameSprite: Sprite = null
let flamethrower: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    flameSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
    flameSprite.setPosition(flamethrower.x, flamethrower.y)
    //@highlight
    flameSprite.setVelocity(0, -200)
    //@highlight
    flameSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Complete! @showdialog

Good work! You just made a project where the player can launch
projectiles. 

In the next part, we'll add targets to hurl those
projectiles at!




```package
lab2imgs=github:kiki-lee/lab2imgs
```


```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < maxProjectiles) {
        fireSprite = sprites.create(lab2imgs.flame, SpriteKind.Projectile)
        fireSprite.setPosition(flamethrower.x, flamethrower.y)
        fireSprite.setVelocity(0, -200)
        fireSprite.setFlag(SpriteFlag.AutoDestroy, true)
        projectileCount += 1
    }
}
let flameSprite: Sprite = null
let flamethrower: Sprite = null
scene.setBackgroundColor(13)
flamethrower = sprites.create(img`
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 4 5 . . . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . . 9 9 4 . . . . . . 
    . . . . . . 4 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . 5 . . . . . 
    . . . . . 2 4 4 4 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 e 2 . . . . 
    . . . . 2 2 2 2 2 2 e 2 . . . . 
    . . . . 2 2 2 2 2 2 e 2 . . . . 
    . . . . 2 2 2 2 2 2 e 2 . . . . 
    . . . . 2 2 2 2 2 2 e 2 . . . . 
    . . . . 2 4 4 4 4 2 2 2 . . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
flamethrower.setPosition(80, 110)
controller.moveSprite(flamethrower)
flamethrower.setStayInScreen(true)
```
