# Ping Pong

Move the paddles to bounce the ball.

```blocks
let botMoveDirection = 0
let botPaddleRandomPoint = 0
let bounceAngle = 0
let normalizedPaddleIntersect = 0
let relativePaddleIntersect = 0
let hasCollision = false
let collisionSign = 0
let botPlayer: Sprite = null
let player: Sprite = null
let collisionPaddle: Sprite = null
let maxSpeed = 0
let ballInitialY = 0
let movingLeft = false
let playerSpeed = 0
let movingRight = false
let ball: Sprite = null
let botSpeed = 0
let playerMovement = 0
function resetBall() {
    ball.vx = 0
    ball.vy = 0
    ball.x = scene.screenWidth() / 2
    ball.y = ballInitialY
    botPlayer.x = scene.screenWidth() / 2
    ball.vy = maxSpeed
}
info.setScore(0)
botSpeed = 2
playerSpeed = 120
ballInitialY = 30
maxSpeed = 150
player = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`)
botPlayer = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`)
ball = sprites.create(img`
. . 1 1 1 1 . .
. 1 1 1 1 1 1 .
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
. 1 1 1 1 1 1 .
. . 1 1 1 1 . .
`)
player.y = scene.screenHeight() - 18
botPlayer.y = 18
ball.y = 30
pause(500)
ball.vy = maxSpeed
game.onUpdate(function () {
    playerMovement = controller.dx(playerSpeed)
    movingRight = playerMovement > 0 && player.x < scene.screenWidth() - player.width / 2
    movingLeft = playerMovement < 0 && player.x > 0 + player.width / 2
    if (movingRight || movingLeft) {
        player.x += playerMovement
    }
    collisionPaddle = player
    collisionSign = -1
    hasCollision = false
    if (ball.overlapsWith(player)) {
        hasCollision = true
        collisionPaddle = player
        collisionSign = -1
    }
    if (ball.overlapsWith(botPlayer)) {
        hasCollision = true
        collisionPaddle = botPlayer
        collisionSign = 1
    }
    if (hasCollision) {
        relativePaddleIntersect = ball.x - collisionPaddle.x
        normalizedPaddleIntersect = relativePaddleIntersect / (collisionPaddle.width / 2)
        if (normalizedPaddleIntersect > 1) {
            normalizedPaddleIntersect = 1
        }
        if (normalizedPaddleIntersect < -1) {
            normalizedPaddleIntersect = -1
        }
        bounceAngle = normalizedPaddleIntersect * (5 * Math.PI / 12) + Math.PI / 2
        ball.vx = maxSpeed * (0 - Math.cos(bounceAngle))
        ball.vy = maxSpeed * Math.sin(bounceAngle) * collisionSign
    }
    if (ball.x < ball.width / 2) {
        ball.vx = Math.abs(ball.vx)
    }
    if (ball.x > scene.screenWidth() - ball.width / 2) {
        ball.vx = Math.abs(ball.vx) * -1
    }
    if (ball.y < 0) {
        info.changeScoreBy(1)
        resetBall()
    }
    if (ball.y > scene.screenHeight()) {
        info.changeScoreBy(-1)
        resetBall()
    }
    if (ball.y < scene.screenHeight() / 2 && ball.vy < 0) {
        botPaddleRandomPoint = randint(0, botPlayer.width) + botPlayer.x - botPlayer.width / 2
        if (botPaddleRandomPoint > ball.x) {
            botMoveDirection = -1
        } else if (botPaddleRandomPoint < ball.x) {
            botMoveDirection = 1
        }
        botPlayer.x += botSpeed * botMoveDirection
    }
})
```