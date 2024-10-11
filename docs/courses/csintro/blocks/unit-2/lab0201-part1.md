# Lab 2.1 Part 1: Shooting gallery

## Fire away! @showdialog

In this lab, you will learn about event handlers and how they can be used
in your projects.

You also will learn ways to play sounds.

## Step right up!

We will be creating a "shooting gallery" game.
First, let's add a hero sprite to our project.

1.   From the ``||sprites:Sprites||`` drawer, add a block to your
``||loops(noclick):on start||`` container to create your player's sprite.
1.   Give your variable an appropriate name.
1.   Give the sprite an appropriate image.
1.   Add more blocks so that the player sprite:
     1.   Starts near the bottom of the screen.
     1.   Moves when the player uses the d-pad.
     1.   Stays on the screen.

Test your project to make sure your code runs as expected.
View the hint to check your code.

```blocks
let heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
```

## Press the button!

Let's add our first event handler.

-    From the ``||controller:Controller||`` drawer, drag an   
``||controller:on A button pressed||``   
container block onto your workspace.

Any blocks that you place in this container will run whenever the player
presses the **A** button on their controller.

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Projectile ... what?

Now, let's launch a *projectile* every time the player presses the **A** button.

1.   Inside the   
``||controller(noclick):on A button pressed||``   
container that you just added to your workspace,
add a   
``||sprites:Sprites||`` block that
creates a new sprite. This sprite will be the projectile.
1.   Change the sprite's kind to **Projectile**.
1.   Give the sprite an appropriate image.
1.   Give the sprite an appropriate name.

Now, let's make the sprite look like it is launched from the player's sprite!

~hint What is a projectile?
A projectile is something that is thrown or launched forward, like a ball,
a bullet, or a laser beam.
hint~

```blocks
let plasmaSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
})
```

## Fire away!

Let's add some blocks so that the projectile looks like it was launched
by the player.

1.   To the bottom of your   
``||controller(noclick):on A button pressed||``   
container, add a   
``||sprites:set||`` ``||variables(sprites):mySprite||``
``||sprites:position to x (0) y (0)||``   
block.
1.   Change the variable name to your projectile's name.
1.   For the x-coordinate, add a   
``||variables(sprites):mySprite||``
``||sprites:x||``   
block. You'll find that block in the
``||sprites:Sprites||`` drawer.
1.   In the new block for the x-coordinate, change the variable name to
your player's sprite.
1.   Add another   
``||variables(sprites):mySprite||``
``||sprites:x||``   
block for the y-coordinate. Use the dropdown to change the
**x** to **y**. Also, change the variable name to match your player's sprite,
just like before.

These blocks will move the projectile so that it at the same location
as your player sprite.

Test your project to make sure that it runs as expected.
View the hint to check your code.

```blocks
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
})
```

## Get a move on!

It's not much of a projectile if it doesn't move! Let's make the projectile
move up the screen when it is launched.

1.   To the bottom of your   
``||controller(noclick):on A button pressed||``   
container, add a   
``||sprites:set||`` ``||variables(sprites):mySprite||``
``||sprites:velocity to vx (50) vy (50)||``   
block. You'll find that block
in the ``||sprites:Sprites||`` drawer.
1.   Change the variable name to your projectile.
1.   Set the **vx** and **vy** values to make the projectile move up towards
the top of the screen.
1.   Add a block to destroy the projectile when it moves off of the screen.

Use the hint if you get stuck!

```blocks
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## Complete! @showdialog

Good work! You just made a project where the player can launch some
projectiles. In the next part, we'll add some enemies to hurl those
projectiles at!

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    plasmaSprite = sprites.create(sprites.projectile.explosion1, SpriteKind.Projectile)
    plasmaSprite.setPosition(heroSprite.x, heroSprite.y)
    plasmaSprite.setVelocity(0, -50)
    plasmaSprite.setFlag(SpriteFlag.AutoDestroy, true)
})
let plasmaSprite: Sprite = null
let heroSprite: Sprite = null
heroSprite = sprites.create(sprites.space.spaceOrangeShip, SpriteKind.Player)
heroSprite.setPosition(80, 110)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
```
