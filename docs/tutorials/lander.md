# Lander

### ~button /#tutorial:/tutorials/lander

Let's create a lunar landing game!

### ~

## Introduction @unplugged

![Game animation](/static/tutorials/lander.gif)

Build a simple landing game where the player's goal is to land on the orange pad. When the player makes contact with the lunar surface or lands sideways, it's game over!

## Step 1 @fullscreen

Find ``||scene:set tile to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||``, click the first tile, and choose white for color of the lunar surface. Then, in the image editor take a bucket of white paint and fill the entire square with it. Next, toggle the ``wall`` from **OFF** to **ON**. Duplicate the ``||scene:set tile to||`` block in ``||loops:on start||`` and put below the first one. Change the color of the new block to the landing pad color, orange and in the image editor take a bucket of orange paint and fill the entire square.. Make another copy of ``||scene:set tile to||`` block and change its tile color to the starting pad color, green. Fill the image editor square with green.

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
```

## Step 2 @fullscreen

Find ``||scene:set tile map to||`` in ``||scene:Scene||``. Drag it into the ``||loops:on start||`` **after** the last ``||scene:set tile to||``. Go into the image editor and draw a mountainous lunar surface in white, then draw a landing pad at the very end in orange. Make sure the starting pad is green. This is where we create the scene with obstacles in the path of the ship, make sure it's possible to complete!

```blocks
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

Go into ``||sprites:Sprites||``, grab a ``||sprites:set sprite of kind Player||``, and drag it into ``||loops:on start||``. Click the drop down showing ``||variables:mySprite||`` and rename it to ``||variables:lander||``. In the ``||sprites:sprite of kind Player||`` block, click on the grey box to open the **image editor**. Draw a spaceship.

```blocks
let lander = sprites.create(img`
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

Find ``||sprites:set mySprite position to||`` under ``||sprites:Sprites||``, and drag it below ``||sprites:set lander to sprite of kind Player||``. Change ``||variables:mySprite||`` to ``||variables:lander||`` then use into the position selector (click the space for ``x`` and click on the position selector) and place it above where you placed your green tile.  

```blocks
let lander: Sprite = null
lander.setPosition(6, 102)
```

## Step 5 @fullscreen

In ``||sprites:Sprites||`` grab a ``||sprites:set sprite stay in screen||`` and drag it under the ``||sprites:set lander position to||`` block. Toggle the switch to **ON** and set the variable to ``||variables:lander||``. Next, grab a ``||sprites:set sprite x||`` and drag it under the ``||sprites:set stay in screen block||``. Set the drop down to ``ay`` and make the value be ``30``.

```blocks
let lander: Sprite = null
lander.setFlag(SpriteFlag.StayInScreen, true)
lander.ay = 30
```

## Step 6 @fullscreen

In ``||variables:Variables||`` grab a ``||variables:set to||`` block and drag it into ``||loops:on start||``. Change the variable name to ``||variables:angle||``, and then drag a text block from ``||text:Text||`` into the value. Set the value to ``"straight"``.

```blocks
let angle = ""
angle = "straight"
```

## Step 7 @fullscreen

Drag an ``||controller:on A button pressed||`` from ``||controller:Controller||`` and place it in your workspace. From ``||logic:Logic||``, grab an ``||logic:if then else||`` statement and drag it into ``||controller:on A button pressed||``. Click the **(+)** symbol at the end. Grab a ``||logic:0 = 0||`` block from from ``||logic:Logic||`` and place it in the ``||logic:if||``. Duplicate the ``||logic:0=0||`` block and place it in the ``||logic:if else||`` section. For both ``||logic:0 = 0||`` statements, set the first value to ``||variables:angle||``. Grab a ``||text:" "||`` and place it in the second value of both equal statements. For the first if statement set the ``||variables:angle||`` equal to ``straight``. For the else if set the ``||variables:angle||`` equal to ``"left"``. 

```blocks
let angle = "straight"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
    } else if (angle == "left") {
    } else {
    }
})
```


## Step 8 @fullscreen

In ``||sprites:Sprite||`` grab three ``||sprites:set sprite velocity to vx vy||`` and place one inside of each ``||logic:if||``, ``||logic:else if||``, and ``||logic:else then else||`` section. Set the sprite variable for all three to ``||variables:lander||``. In the first, set ``vx`` to ``0`` and ``vy`` to ``-20``. In the second, set ``vx`` to ``-6`` and ``vy`` to ``-20``. Then, in the last, set ``vx`` to ``6`` and ``vy`` to ``-20``.

```blocks
let lander: Sprite = null
let angle = "straight"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
        lander.setVelocity(0, -20)
    } else if (angle == "left") {
        lander.setVelocity(-6, -20)
    } else {
        lander.setVelocity(6, -20)
    }
})
```

## Step 9 @fullscreen

When the sprite hits the lunar surface it gets destroyed. So from ``||scene:Scene||`` grab a ``||scene: on sprite of kind Player hits wall||`` and place it in the workspace. Make sure the color is the same as the lunar surface, white. From ``||sprites:Sprite||`` grab a ``||sprites:destroy sprite||``. Change the sprite to ``||variables:lander||`` and click on the **(+)** symbol. Set the effect to ``fire`` and the time to ``500`` ms. From ``||game:Game||`` grab a ``||game:game over lose||`` and click the **(+)** symbol and set the effect to ``dissolve``.

```blocks
let lander: Sprite = null
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    lander.destroy(effects.fire, 500)
    game.over(false, effects.dissolve)
})
```

## Step 10 @fullscreen

Next grab from ``||scene:Scene||`` a ``||scene:on sprite of kind Player hits wall||`` and drag it into the workspace. Make sure to set the color to the landing pad, orange. Then grab a ``||logic:if then else||`` and drag it inside. Again, from ``||logic:Logic||`` grab a ``||logic:0 = 0||`` and drag it into the ``||logic:if||`` statement. Grab the ``||variables:angle||`` from the ``||variables:Variable||`` drawer and place it in the first field of the ``||logic:0 = 0||``. Grab a ``" "`` from ``||text:Text||`` and place it in the second field and type the string ``straight``. 

```blocks
let angle = ""
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    if (angle == "straight") {
    } else {
    }
})
```

## Step 11 @fullscreen

Find ``||game:game over||`` in ``||game:Game||``, and drag it into the first section of the ``||logic:if then ... else||`` statement. Switch the toggle to **Win**, then click the **(+)** sign and select ``star field``. Then, find ``||sprites:destroy sprite||`` in ``||sprites:Sprites||``, drag it into the ``||logic:else||``, and switch ``||variables:mySprite||`` to ``||variables:Lander||``. Click the **(+)** sign and choose the ``fire`` effect and ``500`` ms. Finally, grab another ``||game:game over||`` and place it after the ``||sprites:destroy sprite||`` block. Click the **(+)** sign and set the effect to ``dissolve``.

```blocks
let lander: Sprite = null
let angle: string = null;
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    if (angle == "straight") {
        game.over(true, effects.starField)
    } else {
        lander.destroy(effects.fire, 500)
        game.over(false, effects.dissolve)
    }
})
```

## Step 12 @fullscreen

From ``||controller:Controller||`` grab ``||controller:on A button pressed||`` and drag it into the workspace. Change the button from ``A`` to ``left``. Then from ``||variables:Variables||`` grab ``||variables:set variable to||`` and drag it into ``||controller:on left button pressed||``. Switch the variable to ``||variables:angle||``. Grab a ``" "`` from ``||text:Text||``and place it after the ``to``. Type in ``left``. From ``||sprites:Sprites||`` grab a ``||sprites:set image to||`` and set the variable to ``||variables:lander||``. Draw an image of a sideways lander going left.

```blocks
let lander: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let angle = "left"
    lander.setImage(img`
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

Right click on the ``||controller:on left button pressed||`` and duplicate it twice. Change the buttons to ``right`` and ``up``. For ``right`` change the text to ``"right"`` and for ``up`` change the text to ``"straight"``. Finally, draw an image of a spacecraft going diagonally right-up for ``right``. Copy the first spacecraft drawing for straight and paste it into the image editor for the ``up`` button.

```blocks
let lander: Sprite = null
let angle: string;
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "left"
    lander.setImage(img`
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
    lander.setImage(img`
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
    lander.setImage(img`
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

Congratulations, you have completed your game! Now try and make more levels!
