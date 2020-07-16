# Mega Bounce

```blocks
game.splash("Juggler", "Press arrows")

scene.setBackgroundColor(3);
// images
let balls: Sprite[] = []

function addBall(ay: number) {
    let ball = sprites.create(img`
...6
..626
.62926
.62226
..626
...6
`)
    ball.image.replace(6, randint(1, 15))
    ball.image.replace(2, randint(1, 15))
    ball.ay = ay
    balls.push(ball);
}

let paddle = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`)
paddle.y = screen.height - 10
let counter = 0

addBall(80);

game.onUpdate(function () {
    counter++;
    for (const ball of balls) {
        if (ball.overlapsWith(paddle)) {
            ball.vy = -20 - ball.ay;
            ball.vx = randint(-40, 40)
            info.changeScoreBy(1)
            if (info.score() % 5 == 0) {
                music.playSound(music.sounds(Sounds.PowerUp))
                addBall(ball.ay);
            }
        }
        if (ball.right > screen.width || ball.left < 0)
            ball.vx = -ball.vx;
        if (ball.y > screen.height)
            game.over();
        if (counter % 10 == 0)
            ball.ay++;
    }
    paddle.x = Math.clamp(paddle.width / 2, screen.width - paddle.width / 2,
        paddle.x + controller.dx(180))
})
```