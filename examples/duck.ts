const duckImg = image.ofBuffer(hex`f40a
00eeee0000
00e0ee00ee
00eeee00ee
aaaaaa00ee
00eeeeeeee
00eeeeeeee
00eeeeeeee
0000eeee00
0000eeee00
0000eeee00
00aaaaaa00
`)

const cloudImg = image.ofBuffer(hex`f410
0000ffffff000000
00f5555555f000ff
0f5555555fffffff
0000ffffff000000
`)

let block = image.repeatY(20, image.ofBuffer(hex`f40e
00 0f f7 77 7f f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
`))

let bot = image.ofBuffer(hex`f40e
0f ff ff ff ff ff f0
0f 77 77 77 77 77 f0
0f 77 77 77 77 77 f0
00 ff 77 77 77 ff 00
00 0f 77 77 77 f0 00
`)

let top = bot.clone()
top.flipY()

let hole = image.create(top.width(), 50)

let pimg = image.concatY([block, top, hole, bot, block])

let spread = 80
let prevObstacle: Sprite

let duck = sprite.create(duckImg)
duck.image.flipX()
duck.y = 90
duck.x = 20

duck.onCollision(game.over)
duck.onHitWall(game.over)

function launchObstacle() {
    prevObstacle = sprite.launchObstacle(pimg, -30, 0)
    prevObstacle.y = Math.randomRange(30, 90)
    prevObstacle.onDestroy(function () {
        game.addToScore(1)
    })
}

keys.A.onPressed(function () {
    if (prevObstacle == null)
        launchObstacle()
    duck.ay = 300
    duck.vy = -100
})

control.addFrameHandler(0, function () {
    screen.fill(4)

    if (Math.random() < 0.02) {
        let s = sprite.launchObstacle(cloudImg, -45, 0)
        s.y = Math.randomRange(0, screen.height())
        s.z = -1
        s.flags |= sprite.Flag.Ghost
    }

    if (prevObstacle && prevObstacle.x < screen.width() - spread) {
        launchObstacle()
        spread = Math.randomRange(40, 90)
    }
})
