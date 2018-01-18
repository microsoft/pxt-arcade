
let duckImg = hex`f40a
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
`

function pillarImage() {
    let pillarShort = hex`f40e
0f ff ff ff ff ff f0
0f 77 77 77 77 77 f0
0f 77 77 77 77 77 f0
00 ff 77 77 77 ff 00
00 0f 77 77 77 f0 00
`
    let h = 300
    let w = 7
    let pillar = control.createBuffer(2 + w * h)
    pillar[0] = pillarShort[0]
    pillar[1] = pillarShort[1]
    let top = h / 2 - 20
    let bot = top + 40
    for (let i = 0; i < h; ++i) {
        let src = 0
        if (i <= top) {
            src = top - i
        } else if (i >= bot) {
            src = i - bot
        } else {
            continue // hole
        }
        src = 2 + src * w
        if (src >= pillarShort.length)
            src = 2 + 4 * w
        for (let j = 0; j < w; ++j)
            pillar[2 + i * w + j] = pillarShort[src++]
    }
    return pillar
}

let pillars: Sprite[] = []
let pimg = pillarImage()
let spread = 80
for (let i = 0; i < 4; ++i) {
    let p = image.createSprite(pimg)
    pillars.push(p)
    p.x = i * spread + 130
    p.y = Math.randomRange(30, 90)
}

let stop = false

function gameOver() {
    if (stop) return
    stop = true
    for (let i = 0; i < 40; ++i) {
        image.setFont(image.defaultFont, 2)
        image.setTextColor(Math.randomRange(1, 15))
        screen.print("GAME\nOVER", 30, 50)
        loops.pause(20)
    }
    control.reset()
}

let duck = image.createSprite(duckImg)
duck.image.flipX()
duck.y = 90
duck.x = 20

keys.A.onPressed(function () {
    duck.ay = 300
    for (let p of pillars) {
        p.vx = -30
    }
    duck.vy = -100
})

control.addEvolve(function () {
    screen.fill(4)

    let pass: Sprite = null
    let maxX = 0
    for (let p of pillars) {
        maxX = Math.max(p.x, maxX)
        if (p.x < -20) pass = p
    }
    if (pass) {
        pass.x = maxX + spread
        pass.y = Math.randomRange(30, 90)
    }
})

control.addDraw(function () {
    if (duck.y < -20 || duck.y > screen.height() + 20
        || screen.get(duck.x + 6, duck.y) != 4)
        control.runInBackground(gameOver)
})
