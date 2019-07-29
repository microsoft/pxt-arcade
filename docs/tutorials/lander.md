# Lander

### ~button /#tutorial:/tutorials/lander

Let's create a lunar landing game!

### ~

## Introduction @unplugged

![Game animation](/static/tutorials/lander.gif)

In this tutorial, you will build a simple landing game where the player's goal is to land on the orange pad. When the player makes contact with the lunar surface or lands sideways, it's game over.

## Step 1 @fullscreen

Find ``||scene:set tile to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||`` and click the first tile and choose the color of the lunar surface, white. Then in the image editor take a bucket of paint with the color you chose, white, and fill the entire square with that color. Next toggle from off to on. Copy and paste the ``||scene:set tile to||`` block in ``||loops:on start||`` and change the colors of the copied block to the landing pad color, orange. Copy and past the ``||scene:set tile to||`` block and change the colors of the copied block to the starting pad color, green.

```blocks
// @highlight
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
```

## Step 2 @fullscreen

Find ``||scene:set tile map to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||`` **after** ``||scene:set tile to||``. Next go into the image editor and draw a mountainous lunar surface in white, and a landing pad at the very end in orange. Make sure the start is green. This is the section where we create the scene where the obstacles for the ship to go through, make sure it's possible to complete!

```blocks
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
scene.setTileMap(img`
    . . . . . . 1 1 1 1
    . . . . . . . 1 1 1
    . . . 1 . . . 1 1 1
    . . 1 1 1 . . 1 1 .
    . . 1 1 1 . . . 1 .
    . . 1 1 1 1 . . . .
    . 1 1 1 1 1 1 . . .
    7 1 1 1 1 1 1 1 1 4
`)
```

## Step 3 @fullscreen

Go into ``||sprites:Sprites||`` and grab a ``||sprites:set sprite of kind Player||`` and drag it into ``||loops:on start||``. Click the drop down for mySprite and rename the sprite to Lander. In the ``||sprites:sprite of kind Player||`` block, click on the grey box to open the **image editor**. Draw a spaceship.

```blocks
Lander = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . d d d . . . . . . .
    . . . . . d d d d d . . . . . .
    . . . . d d 1 1 1 d d . . . . .
    . . . . d d 1 1 1 d d . . . . .
    . . . . d d d d d d d . . . . .
    . . . . . d d d d d . . . . . .
    . . . . . f d d d f . . . . . .
    . . . . f f . . . f f . . . . .
    . . . 2 . . . . . . . 2 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## Step 4 @fullscreen

Go into ``||sprites:Sprites||`` and grab a ``||sprites:set mySprite position to||`` and drag it under ``||sprites:set Lander to sprite of kind Player||``. Change ``||varibales:mySprite||`` to ``||variables:Lander||`` and then go into the position selector (click the space in x and choose the plus arrow) and place it above the green.  

```blocks
let Lander: Sprite = null
Lander.setPosition(6, 102)
```

## Step 5 @fullscreen

In ``||sprites:Sprites||`` grab a ``||sprites:set sprite stay in screen||`` and drag it under the position block. Toggle the switch to on and set the variable to Lander. Next grab a ``||sprites:set sprite x||`` and drag it under the stay in screen block. Set the drop down to **ay**, and the value to be **30**.

```blocks
let Lander: Sprite = null
Lander.ay = 30
Lander.setFlag(SpriteFlag.StayInScreen, true)
```

## Step 6 @fullscreen

In ``||variables:Variables||`` grab a ``||variables:set to||`` block and drag it into on start. Change the variable name to angle and then drag a text box from ``||text:Text||`` and drag it into the value. Set the value to straight.

```blocks
let angle = ""
angle = "straight"
```

## Step 7 @fullscreen

Next drag an ``||controller:on A button pressed||`` from ``||controller:Controller||`` and drag it into your workspace. From ``||logic:Logic||`` grab an ``||logic:if then else||`` statement and drag it into ``||controller:on A button pressed||``. Then click the plus arrow. Grab a ``||logic:0=0||`` block from from ``||logic:Logic||`` and place two of them in the if else if sections. For both equal statements set the first value to ``||variables:angle||`` and for the first set the second field to ``||text:" "||`` of straight and the second to  ``||text:" "||`` of left. 


## Step 8 @fullscreen

Now from ``||sprites:Sprite||`` grab a ``||sprites:set sprite velocity to vx vy||`` and place it in all three of the sections. Set the sprite variable for all three to Lander. In the first set vx to **0** and vy to **-20**. In the second set vx to **-6** and vy to **-20**. Then in the last set set the vx to **6** and vy to **-20**.

```blocks
let Lander: Sprite = null
let angle = "straight"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
        Lander.setVelocity(0, -20)
    } else if (angle == "left") {
        Lander.setVelocity(-1 * Math.sqrt(20), -20)
    } else {
        Lander.setVelocity(1 * Math.sqrt(20), -20)
    }
})
```

## Step 9 @fullscreen

When the sprite hits the lunar surface it should die. So grab from ``||scene:Scene||`` grab a ``||scene: on sprite of kind Player hits wall||`` and place it in the workspace. Make sure the color is set to the lunar surface, white. From ``||sprites:Sprite||`` grab a ``||sprites:destroy sprite||``. Change the sprite to Lander and select the plus arrow. Set the effect to fire and the time to 500 ms. From ``||game:Game||`` grab a ``||game:game over lose||`` and click the plus arrow and set the effect to dissolve.

```blocks
let Lander: Sprite = null
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    Lander.destroy(effects.fire, 500)
    game.over(false, effects.dissolve)
})
```

## Step 10 @fullscreen

Next grab from ``||scene:Scene||`` a ``||scene:on sprite of kind Player hits wall||`` and drag it into the workspace. Make sure to set the color to the landing pad, orange. Then grab from ``||logic:if then else||`` and drag it into the block. Again from ``||logic:Logic||`` grab ``||logic:0=0||`` and drag it into the if statement. Grab the ``||variables:angle||`` from the ``||variables:Variable||`` drawer and drag it into the first field of the equal statement. Grab a ``||text:" "||`` from ``||text:Text||`` and place it in the second field and type straight. 

## Step 11 @fullscreen

In the first section of the if else statement, drag in from ``||game:Game||`` a ``||game:game over||`` and switch the toggle to Win and click the + sign and select star field. Then in the else, grab from ``||sprites:destroy sprite||`` and switch mySprite to Lander. Click the plus sign and choose fire effect and 500 ms. Next grab from ``||game:Game||`` a ``||game:game over||`` and place it after the ``||sprites:destroy sprite||`` block and click the plus sign and set the effect to dissolve.

```blocks
let Lander: Sprite = null
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    if (angle == "straight") {
        game.over(true, effects.starField)
    } else {
        Lander.destroy(effects.fire, 500)
        game.over(false, effects.dissolve)
    }
})
```

## Step 12 @fullscreen

From ``||controller:Controller||`` grab ``||controller:on A button pressed||`` and drag it into the workspace. Change the A to left. Then from ``||variables:Variables||`` grab ``||variables:set variable to||`` and drag it into ``||controller:on left button pressed||``. Switch the variable to angle. Grab a ``||text:" "||`` from ``||text:Text||``and place it after the to. Type in left. From ``||sprites:Sprites||`` grab a ``||sprites:set image to||`` and set the variable to Lander. Draw an image of a sideways lander going left.

```blocks
let Lander: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "left"
    Lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . d d d . . . . . . . .
        . . . . d d d d d . . . . . . .
        . . . d d d 1 1 d d . . . . . .
        . . . d d 1 1 1 d d . . . . . .
        . . . d d 1 1 d d d f f . . . .
        . . . . d d d d d . . . f . . .
        . . . . . d d d . . . . . 2 . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
```

## Step 13 @fullscreen

Right click on the ``||controller:on left button pressed||`` and duplicate it twice. Change the buttons to right and up. For right change the text to "right" and for up change the text to "straight". Lastly draw an image of a spacecraft going diagonally right-up for right. Copy the initial spacecraft drawing for straight and paste it into the image editor for the up button.

```blocks
let Lander: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "left"
    Lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . d d d . . . . . . . .
        . . . . d d d d d . . . . . . .
        . . . d d d 1 1 d d . . . . . .
        . . . d d 1 1 1 d d . . . . . .
        . . . d d 1 1 d d d f f . . . .
        . . . . d d d d d . . . f . . .
        . . . . . d d d . . . . . 2 . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "right"
    Lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . d d d . . . . .
        . . . . . . . d d d d d . . . .
        . . . . . . d d 1 1 d d d . . .
        . . . . . . d d 1 1 1 d d . . .
        . . . . f f d d d 1 1 d d . . .
        . . . f . . . d d d d d . . . .
        . . 2 . . . . . d d d . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . . f . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "straight"
    Lander.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d d d . . . . . . .
        . . . . . d d d d d . . . . . .
        . . . . d d 1 1 1 d d . . . . .
        . . . . d d 1 1 1 d d . . . . .
        . . . . d d d d d d d . . . . .
        . . . . . d d d d d . . . . . .
        . . . . . f d d d f . . . . . .
        . . . . f f . . . f f . . . . .
        . . . 2 . . . . . . . 2 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
```

## Complete @fullscreen

Congratulations, you have completed your game! Now try and make your own levels!