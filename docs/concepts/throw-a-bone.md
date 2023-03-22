# Throw a Bone

[Open this tutorial in the editor!](/#tutorial:/concepts/throw-a-bone)

## {Introduction @unplugged}

Setting up ``||sprites:Sprites||`` can get a bit complicated, with a number of different blocks. ``||sprites:Projectiles||`` are special ``||sprites:Sprites||`` that are made to move across the screen and simplify these sorts of behaviors for you.

This allows you to easily create things like asteroids that move across the screen, or lasers that are fired from a spaceship.

## {Step 1 @fullscreen}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||`` and drag it into the ``||loops:on start||``. Open the image editor for ``||variables(noclick):mySprite||`` and select or create an image of a skeleton.

```blocks
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

## {Step 2 @fullscreen}

Find ``||sprites:projectile from mySprite||`` in ``||sprites:Sprites||`` and drag it into the ``||loops:on start||`` **after** ``||variables(sprites):set mySprite to||``.

This will create a ``||sprites:Sprite||`` that starts in the same location as ``||sprites:mySprite||``, no matter where it is on the screen.

```blocks
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
let projectile = sprites.createProjectileFromSprite(img`
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
`, mySprite, 50, 50)
```

## {Step 3 @fullscreen}

Open the image editor for ``||variables(sprites):projectile||`` and draw an image of a bone.

```blocks
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
let projectile = sprites.createProjectileFromSprite(img`
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
`, mySprite, 50, 50)
```

## {Step 4 @fullscreen}

In ``||sprites:projectile||``, change ``||sprites:vy||`` from `50` to `-15` so that it moves **upwards** instead of **downwards**.

```blocks
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
let projectile = sprites.createProjectileFromSprite(img`
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
`, mySprite, 50, -15)
```

## {Step 5 @fullscreen}

Find ``||controller:on A button pressed||`` in ``||controller:Controller||`` and drag it into the workspace. Drag ``||variables(sprites):set projectile to||`` from ``||loops:on start||`` into ``||controller:on A button pressed||``.

This will create an event that occurs whenever the person playing the game presses the ``||controller:A||`` button. Whenever that event occurs, ``||variables(noclick):mySprite||`` will 'throw' a new bone up and to the right.

```blocks
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
    let projectile = sprites.createProjectileFromSprite(img`
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
    `, mySprite, 50, -15);
})
```

## {Complete}

Congratulation, your skeleton will now throw bones!

If you want to continue to grow this project, here are a few suggestions on things you can try after you click `Done`:

* Add ``||controller:move mySprite with buttons||`` to the ``||loops:on start||``, to make it so the skeleton can move around the screen and throw bones from different spaces.
* Create another sprite, and use an ``||sprites:on overlap||`` event to make it so that sprite can catch the bone.
* Create a spray effect when you throw the bone by adding ``||sprites:mySprite start spray effect||`` in the ``||controller:on A button pressed||`` event, and make the spray come from the bone.
