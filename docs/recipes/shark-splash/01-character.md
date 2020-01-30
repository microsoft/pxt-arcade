# The Journey Begins

## Introduction @unplugged

create your hero!

## Set the scene

From ``||scene:SCENE||``, drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your Workspace, and select a shade of blue for the ocean.

```blocks
scene.setBackgroundColor(8)
```

## Create a sprite

From ``||sprites:Sprites||``, drag the ``||variables:set mySprite to||`` block into ``||loops:on start|``.

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
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
`, SpriteKind.Player)
```

## Draw your hero

Click on the grey box for ``||variables:set mySprite to||`` and then select the **Gallery** view. Click on the duck to select it!

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
```

## Control your hero!

From ``||controller:Controller||`` Toolbox drawer and drag the ``||controller:move mySprite with buttons||`` block **after** ``||variables:set mySprite||``. This will allow you to move your ``||sprites:Player||`` sprite around the screen. Try it out by using the arrow keys on your keyboard or clicking the joystick in the Game Simulator

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```


## Spawn projectiles!

Now lets have our duck shoot some bubbles! Find ``||controller:on A button pressed||`` in ``||controller:Controller||``, and drag it into the workspace.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```


## Spawn projectiles!

From ``||sprites:Sprites||`` drag ``||sprites:projectile from mySprite||`` in , and drag it into the ``||controller:on A button pressed||``. Use the spacebar on your keyboard or click the **A** button in the Game Simulator to try it out!

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . 6 6 6 6 6 6 . . .
        . . 6 9 9 9 9 9 9 6 . .
        . 6 1 9 9 9 9 9 9 9 6 .
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 1 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        . f 1 9 9 9 9 9 9 1 6 .
        . . f 1 1 1 1 1 1 f . .
        . . . f f f f f f . . .
    `, mySprite, -100, 0)
})
```

## Conclusion @unplugged

next steps
create enemies