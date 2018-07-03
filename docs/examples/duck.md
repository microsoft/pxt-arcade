# Duck

A simple example

```typescript
/**
* A simple example
*/
game.splash("Falling Duck", "Z to jump")

const duckImg = img`
..5555
..5f55..55
..5555..55
444444..55
..55555555
..55555555
..55555555
....5555
....5555
....5555
..444444
`

const cloudImg = img`
 . 1 1 1 . . . . . . . . . 1 1
 1 9 9 9 1 . . 1 1 1 . . 1 9 9 1
 1 9 9 9 9 1 1 9 9 9 1 1 9 9 9 1
 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1
 . 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 `.doubled()

let block = image.repeatY(20, img`
00 01 17 77 71 10 00
00 01 77 77 77 10 00
00 01 77 77 77 10 00
00 01 77 77 77 10 00
`)

let bot = img`
01 11 11 11 11 11 10
01 77 77 77 77 77 10
01 77 77 77 77 77 10
00 11 77 77 77 11 00
00 01 77 77 77 10 00
`

let top = bot.clone()
top.flipY()

let hole = image.create(top.width(), 50)

let pimg = image.concatY([block, top, hole, bot, block])

let spread = 80
let prevObstacle: Sprite

let duck = sprites.create(duckImg)
duck.image.flipX()
duck.x = 20
duck.ay = 300

duck.onOverlap(function (other: Sprite) {
    game.over()
})

function launchObstacle() {
    prevObstacle = sprites.createProjectile(pimg, -30, 0, 0)
    prevObstacle.y = Math.randomRange(30, 90)
    prevObstacle.onDestroyed(function () {
        info.changeScoreBy(1)
    })
}

launchObstacle()

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    duck.vy = -100
})

scene.setBackgroundColor(9)
game.onUpdate(function () {
    if (duck.y < 0 || duck.y > screen.height) {
        game.over();
    }

    if (Math.random() < 0.02) {
        let s = sprites.createProjectile(cloudImg, -45, 0, 0)
        s.y = Math.randomRange(0, screen.height())
        s.z = -1
        s.flags |= sprites.Flag.Ghost
    }

    if (prevObstacle.x < screen.width - spread) {
        launchObstacle()
        spread = Math.randomRange(40, 90)
    }
})
```
