# Paddle!

## Introduction @unplugged

A 2 player variation of the famous pong game!

![A ball bouncing on paddles](/static/tutorials/paddle.gif)

## Step 1

Let's work on the ball. Add code to ball ``||sprites:create the sprite||`` and
rename the variable to ``||variables:ball||``.

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

## Step 2

Add code to make ``||variables:ball||`` ``||sprites:bounce on walls||``
and ``||sprites:set the velocity||`` to ``vx`` 100, ``vy`` 100.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
// @highlight
ball.setVelocity(100, 100)
// @highlight
ball.setFlag(SpriteFlag.BounceOnWall, true)
```

## Step 3

Add code to set the ``y`` of ``||variables:ball||`` to a random value
between ``0`` and ``120``.

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
ball.setFlag(SpriteFlag.BounceOnWall, true)
// @highlight
ball.y = Math.randomRange(0, 120)
```

## Step 4

Create a new function ``create ball`` and move the code from ``||loops:on start||``.
Keep this function for later.

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
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.y = Math.randomRange(0, 120)
}
let ball: Sprite = null
create_ball()
```

## Step 5

Let's work on the left paddle.
Add code to ``||sprites:create a sprite||`` ``||variables:left paddle||`` 
and change the kind to ``LeftPaddles``.

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

## Step 6

Add code to make the ``||variables:left paddle||`` move up and down with the
``||controller:controller buttons||``.

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
// @highlight
controller.moveSprite(left_paddle, 0, 150)
```

## Step 7

Add code to ``||set the left||`` of ``||variables:left paddle||`` to ``0``.

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
left_paddle.setFlag(SpriteFlag.StayInScreen, true)
// @highlight
left_paddle.left = 0
```

## Step 8

Create a new function ``create left paddle`` and move the code from ``||loops:on start||``.
Keep this function for later.

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
    left_paddle.setFlag(SpriteFlag.StayInScreen, true)
    left_paddle.left = 0
}
create_left_paddle()
```

## Step 9

Create another function for the ``||variables:right paddle||``
and ``||sprites:set the right||`` of the sprite to ``160``.

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
    right_paddle.setFlag(SpriteFlag.StayInScreen, true)
    right_paddle.right = 160
}
let right_paddle: Sprite = null
create_right_paddle()
```

## Step 10

Call all 3 functions in the ``||loops:on start||``.

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
    ball.setFlag(SpriteFlag.BounceOnWall, true)
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
    left_paddle.setFlag(SpriteFlag.StayInScreen, true)
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
    right_paddle.setFlag(SpriteFlag.StayInScreen, true)
    right_paddle.right = 160
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
```

## Step 10

Add an event that runs code when ``||variables:ball||`` ``||sprites:overlaps||`` 
with ``||variables:left_paddle||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
})
```

## Step 12

Inverse the horizontal speed (``vx``) of ``||variables:sprite||`` to simulate the bounce
on the paddle... and ``||info:add score||`` to the player.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
```

## Step 13

Add another event that runs code when ``||variables:ball||`` ``||sprites:overlaps||`` 
with ``||variables:right_paddle||``, inverse the right paddle ``vx`` and ``||info:change the score||`` of player 2.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
```
