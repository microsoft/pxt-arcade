# Bouncer Bucket

![Ball dropping into a bucket](/static/javascript-games/bouncer-bucket.png)

This game drops balls onto the screen and makes them bounce while moving left to right. The purpose of the game is to catch the balls in a bucket before they bounce away and leave the screen. The player scores points for each ball caught. Balls move at different speeds so catching a faster ball scores a higher point value.

## Game concepts

### Sprite physics

Using the motion properties of sprites we can simulate the action of a ball or balls bouncing. Along with a position, we can assign velocity and acceleration to a sprite representing a ball. To make the sprite behave like a real ball dropping from above, it begins at the top of the screen with velocity of `0` and is given a value of acceleration in the down direction. The value of acceleration chosen for the game is `100` pixels per second, per second. This makes the ball sprite speed up as it drops, simulating the effect of gravity. The ball is also sent moving left to right at a constant velocity based on the color of the ball. Green balls go slow, `10` pixels per second. The red and orange balls go faster at `20` and `30` pixels per second.

### Creating the bounce

A game update interval (the **onUpdateInterval** function) checks to see if any balls have reached the bottom of the screen. If they have, their velocity is set to negative to make them go back up. The game physics knows to make the acceleration invert so the ball will slow down as it moves upward. It will actually stop at the value of **y** were it started. But at that point, the game physics changes the direction of acceleration and the ball begins to drop again.

This is a nice effect but we know that in real life a ball will go to a lower height each time it bounces due to the loss of energy. We can simulate this by adding a little bit more acceleration to the ball each time it bounces. This creates a decay effect causing the bounce to peak at a lower point each time. In the game, the decay acceleration added to the current acceleration is `20`.

Since the came can have multiple balls bouncing at the same time, their sprites are kept in an array so the game update interval can scan for which ones have hit the bottom of the screen.

### Catching the balls

The balls are caught in a bucket sprite. The bucket is moved with the left and right buttons to make it line up under a dropping ball. The **x** position of the bucket is adjusted in an **onUpdate** function by adding the button change, or _delta_, value of **dx**. There is a 3 pixel target width for the ball to enter the bucket. So, the **x** value of the ball can only be `1` pixel on either side of the **x** value of the bucket to make a catch and score points.

To make it a little move difficult to score points, the bucket must move to a new position every `3` seconds. Otherwise, the player could just leave the bucket in one place and wait for balls to randomly drop in.

When the balls hit the bucket but miss the target spot, they are bounced away from the side of the bucket they contacted.

The bucket catching code uses the **onOverlap** event to detect when a ball sprite reaches the bucket sprite.

### Dropping balls

Each ball is dropped at a random location in the upper corner of the screen. The player can't expect a ball to drop at the same place every time. When a ball bounces off the screen it's destroyed and replaced by another ball whose type is randomly chosen.

### Playing the game

There are two modes of play: single ball and multiple balls. Press the **A** button to drop a single ball and press the **B** to drop `10` balls at once. The single ball mode runs for `45` seconds and the multiple ball mode runs for `30` seconds. The player tries to catch as many balls as possible while the time counts down.

## Game program

Here's the code for the _bouncer bucket_ game. Have fun!

```blocks
namespace SpriteKind {
    export const Ball = SpriteKind.create();
}
let bouncers: Sprite[] = []
let balls: Image[] = []
let catcher: Sprite = null
let deadball: Sprite = null
let sitting = 0
let playing = false
game.splash("Bouncer Bucket", "A = 1 ball, B = 10 balls")
balls.push(img`
. . 7 7 7 7 . .
. 7 7 7 7 7 7 .
7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7
. 7 7 7 7 7 7 .
. . 7 7 7 7 . .
`)
balls.push(img`
. . 2 2 2 2 . .
. 2 2 2 2 2 2 .
2 2 2 2 2 2 2 2
2 2 2 2 2 2 2 2
2 2 2 2 2 2 2 2
2 2 2 2 2 2 2 2
. 2 2 2 2 2 2 .
. . 2 2 2 2 . .
`)
balls.push(img`
. . 4 4 4 4 . .
. 4 4 4 4 4 4 .
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
. 4 4 4 4 4 4 .
. . 4 4 4 4 . .
`)
catcher = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
1 . . . . . . . . . . . . . . 1
f e e . . . . . . . . . . e e f
1 f e e . . . . . . . . e e f 1
1 1 f e e e e e e e e e e f 1 1
. 1 e f e e e e e e e e f e 1 .
. 1 e f e e e e e e e e f e 1 .
. 1 e e f f e e e e f f e e 1 .
. 1 e e e e f f f f e e e e 1 .
. 1 1 e e e e e e e e e e 1 1 .
. . 1 e e e e e e e e e e 1 . .
. . 1 e e e e e e e e e e 1 . .
. . 1 1 e e e e e e e e 1 1 . .
. . . 1 e e e e e e e e 1 . . .
. . . 1 1 1 1 1 1 1 1 1 1 . . .
`, SpriteKind.Player)
catcher.bottom = scene.screenHeight() - 1
catcher.setStayInScreen(true)
info.setScore(0)
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.x > otherSprite.x - 2 && sprite.x < otherSprite.x + 2) {
        if (sitting > 300) {
            otherSprite.say("nope", 200)
            sprite.vy = sprite.vy * -2
        } else {
            let normalScore = sprite.vx
            if (normalScore < 0) {
                normalScore = normalScore * -1
            }
            otherSprite.say("" + normalScore, 200)
            info.setScore(info.score() + normalScore)
            sprite.destroy()
        }
    } else if (sprite.x <= otherSprite.x) {
        sprite.vx = sprite.vx * -2
    } else {
        sprite.vx = sprite.vx * 2
    }
})
info.onCountdownEnd(function () {
    playing = false
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Ball, function (sprite) {
    for (let j = 0; j <= bouncers.length - 1; j++) {
        if (bouncers[j] == sprite) {
            deadball = bouncers.removeAt(j)
        }
    }
    makeBouncer()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!playing) {
        playing = true
        makeBouncer()
        info.startCountdown(60)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!playing) {
        playing = true
        for (let i = 0; i < 10; i++) {
            makeBouncer()
        }
        info.startCountdown(30)
    }
})
function makeBouncer() {
    let ballChoice = randint(0, 2)
    let ballsCount = bouncers.unshift(sprites.create(balls[ballChoice], SpriteKind.Ball))
    bouncers[0].setFlag(SpriteFlag.AutoDestroy, true)
    bouncers[0].x = randint(0, scene.screenWidth() / 4)
    bouncers[0].y = randint(0, scene.screenHeight() / 3)
    bouncers[0].vx = 10 + ballChoice * 10
    bouncers[0].ay = 100
}
game.onUpdate(function () {
    let moveX = controller.dx()
    if (moveX != 0) {
        sitting = 0
        catcher.x += moveX
    }
})
game.onUpdateInterval(10, function () {
    for (let bouncer of bouncers) {
        if (bouncer.bottom >= scene.screenHeight() && bouncer.vy > 0) {
            bouncer.vy = bouncer.vy * -1
            bouncer.ay = bouncer.ay + 20
        }
    }
    sitting += 1
})
```