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

let pillars: Sprite[] = []
let spread = 80
for (let i = 0; i < 4; ++i) {
    let p = sprite.create(pimg)
    pillars.push(p)
    p.x = i * spread + 130
    p.y = Math.randomRange(30, 90)
}

let duck = sprite.create(duckImg)
duck.image.flipX()
duck.y = 90
duck.x = 20

duck.onCollision(game.over)
duck.onHitWall(function () {
    game.over()
})

keys.A.onPressed(function () {
    duck.ay = 300
    for (let p of pillars) {
        p.vx = -30
    }
    duck.vy = -100
})

control.addFrameHandler(0, function () {
    screen.fill(4)

    let pass: Sprite = null
    let maxX = 0
    for (let p of pillars) {
        maxX = Math.max(p.x, maxX)
        if (p.x < -8) pass = p
    }
    if (pass) {
        pass.x = maxX + spread
        pass.y = Math.randomRange(30, 90)
        game.addToScore(1)
    }
})
