# Runner

A simple example

```typescript
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

let jumper = sprites.create(frames[0])

jumper.x = 20
jumper.y = 70
jumper.z = 10
jumper.ay = 400

let currHouse: Sprite
let gap = 0

function newHouse() {
    let w = currHouse ? randint(40, 80) : screen.width
    let img = image.create(w, 70)
    img.fill(randint(2, 5))
    let s = sprites.createProjectile(img, -80, 0, 0)
    if (!currHouse) {
        s.y = 110
        s.x = screen.width / 2
    } else {
        s.y = randint(100, currHouse.y + 8)
        info.changeScoreBy(1)
    }
    gap = randint(5, 20)
    currHouse = s
}

newHouse()

jumper.onOverlap(function (h: Sprite) {
    if (jumper.bottom - 4 < h.top) {
        if (jumper.vy > 0)
            jumper.vy = 0
        jumper.y = h.top - jumper.height / 2
    }
})

game.onUpdate(function () {
    if (controller.A.isPressed() && jumper.vy >= 0)
        jumper.vy = -100

    if (jumper.y > screen.height)
        game.over()
    if (currHouse.right + gap < screen.width)
        newHouse()
})
```
