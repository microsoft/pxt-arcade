# Collisions

```blocks
const alone = img`
2222
2...2
2222
    `

const friend = img`
55555
55555
55555
    `
const together = img`
6666
6666
6666
    `

const coll = img`
7..77
.77
.77
7..77
    `
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.debug = !game.debug
})
while (true) {
    for (let i = 0; i < 10; ++i) {
        info.changeLifeBy(1)
        let s = sprites.create(alone)
        s.x = randint(0, screen.width);
        s.y = randint(0, screen.height);
        s.vx = randint(-10, 10)
        s.vy = randint(-10, 10)
        s.onOverlap(function (other: Sprite) {
            info.changeScoreBy(1);
        })
    }
    pause(1000)
}
```