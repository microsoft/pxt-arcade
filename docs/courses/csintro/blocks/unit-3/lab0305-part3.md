# Lab 3.5 Part 3: Animated sprites

## What a great character! @showdialog

In the previous tutorial, you learned use a built-in block to animate a sprite.

In this tutorial, we will use an extension to do some more complex actions!

## One sprite to start!

First, we need a hero sprite for our project.

1.    In your   
``||loops(noclick):on start||``   
container, add blocks that
do the following:
      -    Create a hero sprite for your player.
      -    Give the sprite an appropriate image and variable name.
      -    Let the player control the hero sprite using the d-pad.
      -    Keep the hero sprite on the screen.

Check the hint if you need any help.

```blocks
let movingSprite = sprites.create(sprites.builtin.forestMonkey0, SpriteKind.Player)
controller.moveSprite(movingSprite)
movingSprite.setStayInScreen(true)
```

## Show some character!

We've added an extension for this tutorial. Notice the new   
``||characterAnimations:Character||`` drawer in your toolbox.

1.   Add a   
``||variables(characterAnimations):mySprite||``
``||characterAnimations:loop frames [ ] (500) when (not moving)||``   
block to the bottom of your   
``||loops(noclick):on start||``   
container.
1.   Change the variable name to your hero sprite's variable name.

Give this new block a try! Use the built-in images and animations in the
gallery to learn about this new block.

Can you make your hero sprite animate appropriately when it is moving
in any of the four directions on the screen?

```blocks
let movingSprite = sprites.create(sprites.builtin.forestMonkey0, SpriteKind.Player)
controller.moveSprite(movingSprite)
movingSprite.setStayInScreen(true)
characterAnimations.loopFrames(
movingSprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
```

## Conclusion @showdialog

Congratulations! You've used the **Character** extension to do some complex
animations with sprites! If you want to use the **Character** extension in
your own projects, then check with your instructor.

Try some other animations of your own creation.

Have fun!

```ghost
let movingSprite = sprites.create(sprites.builtin.forestMonkey0, SpriteKind.Player)
controller.moveSprite(movingSprite)
movingSprite.setStayInScreen(true)
characterAnimations.loopFrames(
movingSprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
```

```package
characterAnimations=github:microsoft/arcade-character-animations
```