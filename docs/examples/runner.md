# Runner

A simple example

```blocks
let frames = [img`
 . . 3 3
 . . 3 3
 . . 3 .
 . 3 3 3 3 
 3 . 3 3 . 3
 3 . 3 3 . 3
 . . 3 3
 . 3 . . 3
 . 3 . . 3
 3 . . 3
 3 . . 3
 `, img`
 . . 3 3
 . . 3 3
 . . 3 .
 . 3 3 3 3 
 3 . 3 3 . 3
 3 . 3 3 . 3
 . . 3 3
 . 3 . . 3
 . 3 . . 3
 . . 3 . . 3
 . . 3 . . 3
 `
]

frames.map(f => f.replace(3, 10))

let jumper = sprites.createWithAnimation(frames)

jumper.x = 20
jumper.y = 70
jumper.z = 10
jumper.ay = 400

let currHouse: Sprite
let gap = 0

function newHouse() {
    let w = currHouse ? Math.randomRange(40, 80) : screen.width
    let img = image.create(w, 70)
    img.fill(Math.randomRange(2, 5))
    let s = sprites.launchParticle(img, -80, 0)
    if (!currHouse) {
        s.y = 110
        s.x = screen.width / 2
    } else {
        s.y = Math.randomRange(100, currHouse.y + 8)
        game.changeScoreBy(1)
    }
    gap = Math.randomRange(5, 20)
    currHouse = s
}

newHouse()

jumper.onCollision(function (h: Sprite) {
    if (jumper.bottom - 4 < h.top) {
        if (jumper.vy > 0)
            jumper.vy = 0
        jumper.y = h.top - jumper.height / 2
    }
})

loops.frame(function () {
    if (keys.A.isPressed() && jumper.vy >= 0)
        jumper.vy = -100

    if (jumper.y > screen.height)
        game.over()
    if (currHouse.right + gap < screen.width)
        newHouse()
})
```
