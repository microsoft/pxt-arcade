# Lemon Leak

### @explicitHints true

## {Introduction @unplugged}

![Game animation](/static/tutorials/lemon-leak.gif)

Hey, let's make a game where wild strawberries are out to attack our lemon player. The goal is to keep the lemon from losing its juice by avoiding the oncoming strawberries. The lemon will leak some of its juice when strawberries collide with it.

## {Step 1  @fullscreen}

First, ``||scene:set background color||`` to ``purple``. Create a new sprite called ``||variables(noclick):mySprite||``. Click on the image editor icon, go to the image galler, and select the lemon. Put in code to ``||controller:move mySprite||`` with the controller.

![Pick the lemon image](/static/tutorials/lemon-leak/pick-a-lemon-js.gif)

```spy
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

To keep the lemon from leaving the screen, set ``||variables(noclick):mySprite||`` to ``||sprites:stay in screen||``. after that, ``||info:start a countdown||`` for `30` seconds.

```spy
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

## {Step 3 @resetDiff}

Add a ``||game:on game update every||`` event and set the interval time to `1000` ms, or 1 second. In the event, create a ``||variables(noclick):projectile||`` sprite and send the ``||sprites:projectile from side||``. In the image editor for ``||variables(noclick):projectile||``, go to
the gallery and select the strawberry.

```spy
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
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
    `, 50, 100)
})
```

## {Step 4}

Now, set both the ``vx`` and ``vy`` values for ``||variables(noclick):projectile||`` to ``||math:pick a random||`` number. Set the range for the ``||math:random||`` number from `-50` and `50`.

```spy
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
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

## {Step 5 @resetDiff}

Add an ``||sprites:on overlap||`` event to your code. Set the kind which matches the ``otherSprite`` parameter to ``Projectile``. Put code into the event to ``||sprites:start spray effect||`` on ``||variables(noclick):sprite||``. Have the effect last for ``200`` ms.

```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray, 200)
})
```

## {Step 6}

Lastly, to score hits by the strawberries on the lemon, in the ``||sprites:on overlap||`` event ``||info:change score by||`` the value of `1`.

```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
```

## {Complete @fullscreen}

That's it! Now keep moving the lemon and try not lose too much juice. Everytime a strawberry hits your lemon, it leaks some juice and the strawberry team gets points. See if you can keep the juice points down during the `30` seconds of play.

![Playing Lemon Leak](/static/tutorials/lemon-leak/play-lemon-leak.jpg)
