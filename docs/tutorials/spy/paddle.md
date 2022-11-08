# Paddle!

## {Introduction @unplugged}

**Paddle** is a 2 player variation of the famous pong game!

![A ball bouncing on paddles](/static/tutorials/paddle.gif)

## {Step 1}

Let's start by making the ball. Add code to ``||sprites:create the sprite||`` for
the ball. Name the sprite variable to ``||variables(noclick):ball||``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
```

## {Step 2}

Put in code to make the ``||variables(noclick):ball||`` ``||sprites:bounce on walls||``
and ``||sprites:set the velocity||`` to ``vx`` of ``100`` and ``vy`` of ``100``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
```

## {Step 3}

Use some more code to set the ``y`` of ``||variables(noclick):ball||`` to a ``||math:random||``
value between ``0`` and ``120``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
ball.y = Math.randomRange(0, 120)
```

## {Step 4}

Create a new function, ``create_ball``, and move the code you added in the previous
steps into this function. Keep this function for later.

```blocks
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = Math.randomRange(0, 120)
}
let ball: Sprite = null
create_ball()
```

## {Step 5}

Let's work on the left paddle. Add code to ``||sprites:create a sprite||`` for
``||variables(noclick):left_paddle||`` and change the kind to ``LeftPaddles``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
```

## {Step 6}

Make the ``||variables(noclick):left_paddle||`` move up and down using code for the
``||controller:controller buttons||``. Use the velocity of `0` for ``||controller:vx||`` and `150`
for ``||controller:vy||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
```

## {Step 7}

Add code to ``||sprites:set the left||`` position of ``||variables(noclick):left_paddle||`` to ``0``.
Also, put in more code to make ``||variables(noclick):left_paddle||`` ``||sprites:stay in screen||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
left_paddle.setStayInScreen(true)
left_paddle.left = 0
```

## {Step 8}

Create a new function, ``create_left_paddle``, and move the code from ``||loops:on start||``
into it. Keep this function for later.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle: Sprite = null
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}
create_left_paddle()
```

## {Step 9}

Create another function, ``create_right_paddle``, for the ``||variables(noclick):right_paddle||``.
Copy all of the code from the ``create_left_paddle`` function and put it in this new
function. Change all of the ``||variables(noclick):left_paddle||`` variables in the function to
``||variables(noclick):right_paddle||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.left = 0
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Step 10}

Let's make some more changes inside of ``create_right_paddle``. Set the kind of the paddle sprite to ``RightPaddles``. Change the position setting of the paddle from ``||variables(noclick):left||`` to
``||variables(noclick):right||`` and set the value to `160`. To make this a 2 player game, replace the
``||controller:move||`` code with a multiplayer ``||controller:move player 2||`` for
``||variables(noclick):right_paddle||``. Use the same values for ``||controller:vx||`` and ``||controller:vy||``

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Step 11}

``||functions:Call||`` all 3 functions in the ``||loops:on start||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = Math.randomRange(0, 120)
}
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
```

## {Step 12}

Add an event that runs code when ``||variables(noclick):ball||`` ``||sprites:overlaps||``
with ``||variables(noclick):left_paddle||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
})
```

## {Step 13}

Use the inverse of the horizontal speed (``vx``) of ``||variables(noclick):sprite||`` to simulate
the bounce on the paddle... and ``||info:change score||`` of the player by ``1``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
```

## {Step 14}

Add another event that runs code when ``||variables(noclick):ball||`` ``||sprites:overlaps||``
with ``||variables(noclick):right_paddle||``. Invert ``vx`` the right paddle's ``vx`` and
``||info:change the score||`` of player 2 by ``1``.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
```
