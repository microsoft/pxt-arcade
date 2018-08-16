# Getting started

## Step 1 @fullscreen

Welcome, let's get started by making something magical! Start by placing a ``||sprites:set mySprite to||`` block in ``||loops:on start||`` slot to create your sprite.

![Step 1](/static/lessons/barrel-dodger/step1.gif)

```filterblocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, 0)
```

## Step 2 @fullscreen

We want to place the character on the screen towards the left side so drag ``||sprites:set mySprite position to||`` in ``||loops:on start||`` and ``set x to 40 and y to 70``. Then drag a ``||sprites:set mySprite x(horizontal position)||`` into the ``||loops:on start||`` and click the dropdown and select ``||sprites:ay (acceleration y)||`` and set it to 500 so that character is pulled down.

![Step 2](/static/lessons/barrel-dodger/step2.gif)

```filterblocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, 0)
mySprite.setPosition(40, 70)
mySprite.ay = 500
```

## Step 3 @fullscreen

Now we want to create a platform so drag a ``||scene:set tile to||`` into ``||loops:on start||``. Set the color to a color which we need to remember,  we'll call it the reference color. In the next box fill in what you want the block to look like. Click the ``||scene:+||`` and tick it on to make sure it works as a collision and the sprite won't fall through. Then move a ``||scene:set tilemap to||`` into ``||loops:on start||`` and using the reference color, draw the platform to be on the bottom of the editor.

![Step 3](/static/lessons/barrel-dodger/step3.gif)

```filterblocks
scene.setTile(3, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, true)
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`)
```

## Step 4 @fullscreen

Next we want barrels of random speed to fly from the right side towards the sprite at random speeds so start by dragging a ``||game:on game update every||`` into the editor a value of 750 and drag a ``||sprites:set projectile to||`` inside of it. Click the gray box of the projectile block and change the dimensions to 8x8 and draw a barrel. Then drag a ``||math:pick random||`` block into where vx is and set the range to be ``-80 to -100``. Make sure you change the kind to Enemy.

![Step 4](/static/lessons/barrel-dodger/step4.gif)

```filterblocks
enum SpriteKind {
    Player,
    Enemy,
}

let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectile(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-80, -100), 0, 2)
})
```

## Step 5 @fullscreen

Now we want to drag a ``||sprites:set mySprite x(horizontal position)||`` into ``||game:on game update every||`` and select the drop down and change it to ``||sprites:lifespan||`` and change the variable to ``||sprites:projectile||``. Set the value to 60(CHANGE THIS VALUE). Then drag ``||sprites:set mySprite position to||`` into ``||game:on game update every||`` and change the variable to ``||sprites:projectile||`` with the value 160 for x and 90 for y.

![Step 5](/static/lessons/barrel-dodger/step5.gif)

```filterblocks
enum SpriteKind {
    Player,
    Enemy,
}

let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectile(img`
. e e e e e e . 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
e e e e e e e e 
1 1 1 1 1 1 1 1 
e e e e e e e e 
. e e e e e e . 
`, Math.randomRange(-80, -100), 0, 2)
    projectile.lifespan = 60
    projectile.setPosition(160, 90)
})
```

## Step 6 @fullscreen

Now we want the sprite to be able to jump so drag a ``||controller:on any button pressed||`` onto the editor and change ``||controller:any||`` to ``||controller:A||``.

![Step 6](/static/lessons/barrel-dodger/step6.gif)

```filterblocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    
})
```

## Step 7 @fullscreen
 We need to make sure the sprite is on the ground before jumping so drag ``||logic:if true then||`` into the ``||controller:on A button pressed||``. Replace true with ``||scene:is mySprite hitting wall left||`` and change ``||scene:left||`` to ``||scene:bottom||``. Finally, put ``||sprites:set mySprite x(horizontal position)||`` and change select the dropdown and choose ``||sprites:vy (velocity y)||`` and set the value to -150.

 ![Step 7](/static/lessons/barrel-dodger/step7.gif)

```filterblocks
 enum SpriteKind {
    Player,
    Enemy,
}
    let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, 0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
```

## Step 8 @fullscreen

Everytime a barrel spawns we want to increase the score so drag a ``||info:change score by||`` into ``||game:on game update every||`` and leave the value at 1.

![Step 8](/static/lessons/barrel-dodger/step8.gif)

```filterblocks
info.changeScoreBy(1)
```

## Step 9 @fullscreen

Our final step is to end the game when the sprite touches a barrel. Drag ``||sprites:on sprite of kind Player overlaps otherSprite||`` onto the editor. Change the the first variable ``||sprites:sprite||`` to ``||sprites:mySprite||`` and the second one to ``||sprites:projectile||``. Make sure the second kind is Enemy. Lastly, drag ``||game:game over||`` inside.

![Step 9](/static/lessons/barrel-dodger/step9.gif)

```filterblocks
enum SpriteKind {
    Player,
    Enemy,
}
 let projectile: Sprite = null
 let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, 0)

 sprites.onOverlap(1, 2, function (mySprite, projectile) {
    game.over()
})
```

## Step 10 @fullscreen

Awesome! Congratulations on making the Barrel Dodger game! You are on your way to making amazing games with the @boardname@

![Step 10](/static/lessons/barrel-dodger/step10.gif)