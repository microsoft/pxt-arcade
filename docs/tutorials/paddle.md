# Paddle!

## {Introduction @unplugged}

**Paddle** is a 2 player variation of the famous pong game!

![A ball bouncing on paddles](/static/tutorials/paddle.gif)

## {Step 1}

Let's start by making the ball. Use ``||variables(sprites):set mySprite to sprite||`` to create a ball sprite. Change the variable name of ``||variables(noclick):mySprite||`` to ``||variables(noclick):ball||``.

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

Put in code to ``||sprites:set ball velocity||`` to ``||sprites:vx||`` of ``100`` and ``||sprites:vy||`` of ``100``. Also,  ``||sprites:set ball bounce on wall||``.

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

Use some more code to set the ``||sprites:y||`` of ``||variables(noclick):ball||`` with ``||math:pick random||`` to get a some value between ``0`` and ``120``.

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
ball.y = randint(0, 120)
```

## {Step 4}

Create a ``||functions:function||`` called ``create_ball`` and move the code you added in the previous
steps from ``||loops:on start||`` into this function. Now, ``||functions:call create_ball||`` in ``||loops:on start||``.

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
    ball.y = randint(0, 120)
}
let ball: Sprite = null
create_ball()
```

## {Step 5}

Let's work on the left paddle. Add a new ``||variables(sprites):set mySprite to sprite||`` to ``||loops:on start||`` and rename the variable to ``||variables(noclick):left_paddle||``. Change the kind to ``||sprites:LeftPaddles||``.

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

Make the ``||variables(noclick):left_paddle||`` move up and down using 
``||controller:move left_paddle with buttons||``. Use the velocity of `0` for ``||controller:vx||`` and `150`
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

Add code to ``||sprites:set left_paddle left||`` to a position of ``0``.
Also, you want to ``||sprites:set left_paddle stay in screen||`` to keep the paddle from disappearing.

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
left_paddle.left = 0
left_paddle.setStayInScreen(true)
```

## {Step 8}

Create a ``||functions:function||`` called ``create_left_paddle`` and move the code you added to the ``||loops:on start||`` into this function. Now, add a ``||functions:call create_left_paddle||`` in ``||loops:on start||``.

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
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
create_left_paddle()
```

## {Step 9}

Create another ``||functions:function||`` called ``create_right_paddle``. This will have the code for the ``||variables(noclick):right_paddle||``.
Copy all of the code from the ``create_left_paddle`` function and put it in this new
function. Change all of the ``||variables(noclick):left_paddle||`` variables in the function to
``||variables(noclick):right_paddle||``. Now, add a ``||functions:call create_right_paddle||`` in ``||loops:on start||``.


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
    right_paddle.left = 0
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Step 10}

Let's make some more changes inside of ``create_right_paddle``. Set the kind of the paddle sprite to ``||sprites:RightPaddles||``. Change the position setting of the paddle from ``||sprites:left||`` to
``||sprites:right||`` and set the value to `160`. To make this a 2 player game, replace the
``||controller:move||`` ``||variables(noclick):right_paddle||`` code with a multiplayer ``||controller:player 2 move||`` for
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
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Step 11}

Make sure that you call 3 functions, ``||functions:call create_ball||``, ``||functions:call create_left_paddle||``, and ``||functions:call create_right_paddle||`` in the ``||loops:on start||``.

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
    ball.y = randint(0, 120)
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
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
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
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
```

## {Step 12}

Add an event that runs code for when ``||variables(noclick):ball||`` overlaps with ``||variables:left_paddle||``. This happens for the case when ``||sprites:on||`` ``||variables(noclick):sprite||`` ``||sprites:of kind Player overlaps||`` ``||variables(noclick):otherSprite||`` ``||sprites:of kind LeftPaddles||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
})
```

## {Step 13}

Inside the event, set the inverse of the horizontal speed for ``||variables(noclick):sprite||`` to simulate the bounce on the paddle. This happens if you ``||sprites:set sprite vx (velocity x) to||`` the negative value of the horizontal speed, which is ``||variables(noclick):sprite||`` ``||sprites:vx (velocity x)||`` multiplied by ``-1``. Also, ``||info:change score by ||`` ``1`` for the player using the ``||variables(noclick):left_paddle||``.

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

Copy the event and all its code from the previous the step. In this event, change the ``||variables(noclick):otherSprite||`` kind from ``||sprites:LeftPaddles||`` to ``||sprites:RightPaddles||``. Replace the ``||info:change score by||`` with the multiplayer ``||info:change player 2 score by||`` for the player using the ``||variables(noclick):right_paddle||``. Keep the same score increment of ``1``.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
```
