# Lab 3.5 Part 3: What a Great Character
### @explicitHints true

## What a great character! @showdialog

In the previous tutorial, you learned to use a built-in block to animate a sprite.

In this tutorial, we'll use an extension to do some more complex actions!

![Lab 3.5.3](https://arcade.makecode.com/api/_WfpV16DDwUTU/thumb)

## One sprite to start!

First, we need a hero sprite for our project.

---


1.    In your <br/>
``||loops(noclick):on start||`` <br/>
container, add blocks that
do the following:
      -    Create a hero sprite for your player
      -    Give the sprite an appropriate image and variable name
      -    Let the player control the hero sprite using the d-pad
      -    Keep the hero sprite on the screen

---


Check the hint if you need any help.

#### ~ tutorialhint

```blocks
let monkiki = sprites.create(sprites.builtin.forestMonkey0, SpriteKind.Player)
controller.moveSprite(monkiki)
monkiki.setStayInScreen(true)
```

## Show some character!

We've added an extension for this tutorial. Notice the new <br/>
``||characterAnimations:Character||`` drawer in your toolbox.

---


1.   Add a <br/>
``||characterAnimations: ||`` ``||variables(noclick):mySprite||``<br/>
``||characterAnimations(noclick):loop frames [ ]||``<br/> ``||characterAnimations(noclick): (500)||``<br/> 
``|| when (not moving)||`` <br/>
block to the bottom of your <br/>
``||loops(noclick):on start||`` <br/>
container.
1.   Change the variable name to your hero sprite's variable name.

---


Give this new block a try! Use the built-in images and animations in the
gallery to learn about this new block.

Can you make your hero sprite animate appropriately when it is moving
in any of the four directions on the screen?

#### ~ tutorialhint

```blocks
let monkiki = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(monkiki)
monkiki.setStayInScreen(true)
//@highlight
characterAnimations.loopFrames(
monkiki,
[img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
//@highlight
characterAnimations.loopFrames(
monkiki,
[img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
//@highlight
characterAnimations.loopFrames(
monkiki,
[img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    . . . c d b e e d d c d d d d c 
    . . . . c f e e e d d c c c c c 
    . . . . . f f e e e d d d d f . 
    . . . . f e e e e f f f f f . . 
    f f . f e e e e e e f f . . . . 
    f e . f e e f e e f e e f . . . 
    f e . f e e e f e e f e e f . . 
    f e f f e f b b f b d f d b f . 
    f f f f e b d d f d d f d d f . 
    . f f f f f f f f f f f f f . . 
    `],
100,
characterAnimations.rule(Predicate.MovingUp)
)
//@highlight
characterAnimations.loopFrames(
monkiki,
[img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown)
)

```

## Conclusion @showdialog

**Congratulations!** <br/>
🥳 🥳 🥳

You've used the **Character** extension to do some complex
animations with sprites! If you want to use the **Character** extension in
your own projects, check with your instructor to get the extension URL.

Try creating more animations on your own.

Have fun!



```ghost
let monkiki = sprites.create(sprites.builtin.forestMonkey0, SpriteKind.Player)
controller.moveSprite(monkiki)
monkiki.setStayInScreen(true)
characterAnimations.loopFrames(
monkiki,
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