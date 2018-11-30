# Throw a Bone

[Open this tutorial in the editor!](/#tutorial:concepts/throw-a-bone)

## Introduction @unplugged

Setting up ``||sprites:Sprites||`` can get a bit complicated, with a number of different blocks. ``||sprites:Projectiles||`` are special ``||sprites:Sprites||`` that are made to move across the screen, and simplify these sorts of behavior for you.

This allows you to easily create things like asteroids that move across the screen, or lasers that are fired from a spaceship.

## Step 1 @fullscreen

Find ``||variables:set mySprite to||`` in ``||sprites:Sprites||``, and drag it into the ``||loops:on start||``. Open the image editor for ``||variables:mySprite||``, and select or create an image of a skeleton.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

## Step 2 @fullscreen

Find ``||variables:set projectile to||`` in ``||sprites:Sprites||``, and drag it into the ``||loops:on start||`` **after** ``||variables:set mySprite to||``. Open the image editor for ``||variables:projectile||``, and draw an image of a bone.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, 0, SpriteKind.Player)
```

## Step 3 @fullscreen

In ``||sprites:projectile||``, set ``||sprites:vx||`` to 50. Then, run the game, and notice that the ``||variables:projectile||`` now starts on the **left** side of the screen, and moves to the right.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 50, 0, SpriteKind.Player)
```

## Step 4 @fullscreen

In ``||sprites:projectile||``, set ``||sprites:vy||`` to -15. Then, run the game, and notice that the ``||variables:projectile||`` now starts on the **bottom left** corner of the screen and moves up and to the right.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 50, -15, SpriteKind.Player)
```

## Step 5 @fullscreen

In ``||sprites:projectile||``, set ``||sprites:vy||`` to -15. Then, run the game, and notice that the ``||variables:projectile||`` now starts on the **bottom left** corner of the screen and moves up and to the right.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 50, -15, SpriteKind.Player)
```

## Step 6 @fullscreen

Click on the **(+)** at the end of ``||sprites:projectile||``, and change ``||variables:item||`` to ``||variables:mySprite||``.

This will cause the bone to be created at the same location as ``||variables:mySprite||``, no matter where that ``||sprites:sprite||`` is on the screen.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 . . . .
. . . . . . . . . 1 1 1 1 1 . .
. . . . . . . 1 1 1 1 1 1 1 . .
. . . . . . 1 1 1 1 . 1 1 1 . .
. . 1 1 . 1 1 1 1 . . . . . . .
. 1 1 1 1 1 1 . . . . . . . . .
. 1 1 1 1 1 . . . . . . . . . .
. . 1 1 1 1 . . . . . . . . . .
. . . 1 1 1 . . . . . . . . . .
. . . . 1 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 50, -15, SpriteKind.Player, mySprite)
```

## Step 7 @fullscreen

Find ``||controller:on any button pressed||`` in ``||controller:Controller||``, and drag it into the workspace. Drag ``||variables:set projectile to||`` from ``||loops:on start||`` into ``||controller:on any button pressed||``.

This will create an event that occurs whenever the person playing the game presses a button. Whenever that event occurs, ``||variables:mySprite||`` will 'throw' a new bone up and to the right.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectile(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . 1 1 1 1 1 1 1 . .
    . . . . . . 1 1 1 1 . 1 1 1 . .
    . . 1 1 . 1 1 1 1 . . . . . . .
    . 1 1 1 1 1 1 . . . . . . . . .
    . 1 1 1 1 1 . . . . . . . . . .
    . . 1 1 1 1 . . . . . . . . . .
    . . . 1 1 1 . . . . . . . . . .
    . . . . 1 1 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, 50, -15, SpriteKind.Player, mySprite)
})
```

## Step 8 @fullscreen

In the ``||controller:on any button pressed||`` event, click on ``||controller:any||`` and change it to ``||controller:A||``.

This will make it so the skeleton only throws a bone if the ``||controller:A||`` button is pressed, and not if any of the other buttons are pressed.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectile(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 . . . .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . 1 1 1 1 1 1 1 . .
    . . . . . . 1 1 1 1 . 1 1 1 . .
    . . 1 1 . 1 1 1 1 . . . . . . .
    . 1 1 1 1 1 1 . . . . . . . . .
    . 1 1 1 1 1 . . . . . . . . . .
    . . 1 1 1 1 . . . . . . . . . .
    . . . 1 1 1 . . . . . . . . . .
    . . . . 1 1 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, 50, -15, SpriteKind.Player, mySprite)
})
```

## Complete

Congratulation, your skeleton will now throw bones!

You can add ``||controller:move mySprite with buttons||`` to the ``||loops:on start||``, to make it so the skeleton can move around the screen and throw bones from different spaces.
