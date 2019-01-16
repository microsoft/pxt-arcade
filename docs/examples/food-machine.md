# Food Machine

Get lucky and pick 3 fruits!

```blocks
let columcounter = 0
let right: Sprite = null
let middle: Sprite = null
let imagery: Image = null
let tone = 0
let sprite = 0
let left: Sprite = null
let list: Image[] = []
list = [img`
. . . . 7 . . 7 . . . . 7 . . .
. . . 7 7 . . 7 7 . 7 7 . . . .
. . . 7 7 7 7 7 7 7 7 7 . . . .
. 2 2 2 2 7 7 7 7 7 7 2 2 2 2 .
. 2 4 2 2 2 7 7 7 7 2 2 2 2 2 2
2 4 2 2 2 2 2 2 2 2 2 2 4 2 2 2
2 2 2 4 2 2 4 2 2 2 2 2 2 2 4 2
4 2 2 2 2 2 2 4 2 2 4 2 2 2 2 2
2 2 2 2 2 2 2 4 4 4 2 2 2 2 4 2
2 4 2 2 2 4 2 2 2 2 2 4 4 2 4 2
2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 .
. 2 2 2 2 2 2 4 2 2 2 4 2 2 4 .
. 2 2 2 2 2 2 2 4 2 2 2 2 2 2 .
. . 2 2 4 2 2 2 2 2 4 4 2 . . .
. . . 2 2 2 2 2 2 4 2 2 . . . .
. . . . . 2 4 2 4 2 4 . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . e e e e e e e e . 1 . . .
. . . e 1 1 1 1 1 1 1 1 1 1 . .
. . e e 1 1 1 1 1 1 e e e 1 . .
e e e e 1 1 1 1 e e e 1 e 1 1 .
e . e 1 e e e e 1 1 1 1 e 1 1 .
e . e d 1 1 1 1 1 1 d d e 1 1 .
e . e d d d d d d d d 4 e 1 1 .
e . e 4 4 4 4 4 4 4 4 4 e 1 1 .
e . e 4 4 4 4 4 4 4 4 4 e . . .
e . e 4 4 4 4 4 4 4 4 4 e e . .
e e e e 4 4 4 4 4 4 4 4 4 e . .
. . . e 4 4 4 4 4 4 4 4 4 e . .
. . . e 4 4 4 4 4 4 4 4 e e . .
. . . e e 4 4 4 4 4 4 e e . . .
. . . . e e e e e e e e . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . 4 4 4 4 . . . . . . . . .
. . 4 4 4 4 4 4 4 . . . . . . .
. e 4 4 4 4 4 4 4 4 . . . . . .
. e e 4 4 4 4 4 4 4 . . . . . .
. e e 4 4 4 4 4 4 4 4 . . . . .
. e e e e e 4 4 4 4 4 4 . . . .
. . e e e e 4 4 4 4 4 4 . . . .
. . e e e e e 4 4 4 4 4 . . . .
. . . e e e e e 4 4 1 1 . . . .
. . . . . e e e e 1 1 1 1 . 1 1
. . . . . . . . . 1 1 1 1 1 5 5
. . . . . . . . . . . 1 1 5 5 5
. . . . . . . . . . . 5 5 5 5 .
. . . . . . . . . . . . 5 5 . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . . e e e e e . . .
. . . . . . . 1 1 1 e e e e . .
. . . . . . . 1 e e e 1 e e . .
. . . . . . 4 1 1 e e 1 1 e . .
. . . . . . 4 1 1 1 1 1 1 e . .
. . . . . 4 4 4 4 1 1 1 1 e . .
. . . . . 4 4 4 4 4 1 1 1 1 . .
. . . . 4 4 4 4 4 4 4 4 4 . . .
. . . . 4 4 4 4 4 4 4 4 . . . .
. . . 4 4 4 4 4 4 . . . . . . .
. . 4 4 4 4 4 4 . . . . . . . .
. 4 4 4 4 . . . . . . . . . . .
. 4 4 . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. 4 5 5 4 4 5 4 4 4 5 4 4 5 4 .
. 5 4 4 4 4 4 5 4 4 4 4 4 5 4 .
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
. 7 7 2 2 2 2 7 2 2 2 7 7 7 2 .
7 7 e e e e e 7 e e e e 7 e 7 7
. e e e e e e e e e e e e e 7 .
. e e e e e e e e e e e e e e .
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`]
scene.setTileMap(img`
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
b b b b b b b b b b b b b b b b
`)
left = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`)
middle = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`)
right = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`)
columcounter = 0
tone = 440
game.onUpdateInterval(500, function () {
    music.ringTone(tone)
    tone += 40
    imagery = list[Math.randomRange(0, list.length - 1)]
    if (control.millis() < 5000) {
        if (columcounter == 0) {
            left = sprites.createProjectile(imagery, 0, 100, 0)
            left.x = 40
            left.ay = -30
        } else if (columcounter == 1) {
            middle = sprites.createProjectile(imagery, 0, 100, 0)
            middle.x = 80
            middle.ay = -30
        } else {
            right = sprites.createProjectile(imagery, 0, 100, 0)
            right.x = 120
            right.ay = -30
        }
        columcounter += 1
        columcounter = columcounter % 3
    } else {
        left.vy = (110 - left.y) * 1
        middle.vy = (110 - middle.y) * 1
        right.vy = (110 - right.y) * 1
        if (Math.abs(left.y - 110) < 10 && (Math.abs(middle.y - 110) < 10 && Math.abs(right.y - 110) < 10)) {
            music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
            pause(500)
            if (list.indexOf(left.image) == list.indexOf(middle.image) && list.indexOf(left.image) == list.indexOf(right.image)) {
                info.setScore(100 * (list.indexOf(left.image) + 1))
            } else {
                info.setScore(0)
            }
            game.over()
        }
    }
})
```