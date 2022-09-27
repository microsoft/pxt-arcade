# Lemon Leak

### ~button /#tutorial:/tutorials/lemon-leak

Try this tutorial!

### ~

## {Introduction @unplugged}

![Game animation](/static/tutorials/lemon-leak.gif)

Hey, let's make a game where wild strawberries are out to attack our lemon player. The goal is to keep the lemon from losing its juice by avoiding the oncoming strawberries. The lemon will leak some of its juice when strawberries collide with it.

## {Step 1  @fullscreen}

In the ``||loops:on start||`` block put in the ``||scene:set background color||`` from ``||scene:Scene||``. Choose ``purple`` for the color. Pull in a ``||variables(sprites):set mySprite to||`` from ``||sprites:Sprites||``. Click on the grey box and then select the lemon from the gallery. In ``||controller:Controller||`` get a ``||controller:move mySprite with buttons||`` so we can move the lemon around.

![Pick the lemon image](/static/tutorials/lemon-leak/pick-a-lemon.gif)

```blocks
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## {Step 2}

To keep the lemon from leaving the screen, drag over a ``||sprites:set mySprite stay in screen||`` block. Find the ``||info:start countdown||`` block and put it in at the end. Change the time from `10` to `30` seconds.

```blocks
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(30)
```

## {Step 3}

Now, pull out a ``||game:on game update every||`` from ``||game:Game||``. Set the interval time to `1000` ms, or 1 second. From ``||sprites:Sprites||``, drag the ``||variables(sprites):set projectile to||`` ``||sprites:projectile from side||`` block and drop it inside the ``||game:on game update every||``. Click on the grey image box and select the strawberry from the gallery.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, 50, 50)
})
```

## {Step 4}

Over in the ``||math:Math||`` drawer, pick up a ``||math: pick random||`` and put it in ``vx`` slot for the projectile. In ``||math:pick random||`` change the first `0` to `-50` and the second from `10` to `50`. Duplicate this block and put its copy in the slot for ``vy``.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, randint(-50, 50), randint(-50, 50))
})
```

## {Step 5}

From ``||sprites:Sprites||``, drag an ``||sprites:on sprite of kind overlaps||`` block onto the Workspace. Set the kind for ``otherSprite`` to ``Projectile``. From ``||sprites:Sprites||``, drag a ``||sprites:mySprite start effect||`` block and drop inside the ``||sprites:overlaps||`` block. Click the **(+)** icon to expand the block and set the time for the effect to ``200`` ms.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
})
```

## {Step 6}

Lastly, to score hits by the strawberries on the lemon, drag a ``||info:change score by||`` block from ``||info:Info||`` in after the ``||sprites:mySprite start effect||`` block.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
```

## {Complete @fullscreen}

That's it! Now keep moving the lemon and try not lose too much juice. Everytime a strawberry hits your lemon, it leaks some juice and the strawberry team gets points. See if you can keep the juice points down during the `30` seconds of play.

![Playing Lemon Leak](/static/tutorials/lemon-leak/play-lemon-leak.jpg)
