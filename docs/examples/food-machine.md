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
. a a a a 7 7 7 7 7 7 a a a a . 
. a d a a a 7 7 7 7 a a a a a a 
a d a a a a a a a a a a d a a a 
a a a d a a d a a a a a a a d a 
d a a a a a a d a a d a a a a a 
a a a a a a a d d d a a a a d a 
a d a a a d a a a a a d d a d a 
a a a d a a a a a a a a a a a . 
. a a a a a a d a a a d a a d . 
. a a a a a a a d a a a a a a . 
. . a a d a a a a a d d a . . . 
. . . a a a a a a d a a . . . . 
. . . . . a d a d a d . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f . 1 . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 . . 
. . f f 1 1 1 1 1 1 f f f 1 . . 
f f f f 1 1 1 1 f f f 1 f 1 1 . 
f . f 1 f f f f 1 1 1 1 f 1 1 . 
f . f e 1 1 1 1 1 1 e e f 1 1 . 
f . f e e e e e e e e d f 1 1 . 
f . f d d d d d d d d d f 1 1 . 
f . f d d d d d d d d d f . . . 
f . f d d d d d d d d d f f . . 
f f f f d d d d d d d d d f . . 
. . . f d d d d d d d d d f . . 
. . . f d d d d d d d d f f . . 
. . . f f d d d d d d f f . . . 
. . . . f f f f f f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . d d d d . . . . . . . . . 
. . d d d d d d d . . . . . . . 
. 8 d d d d d d d d . . . . . . 
. 8 8 d d d d d d d . . . . . . 
. 8 8 d d d d d d d d . . . . . 
. 8 8 8 8 8 d d d d d d . . . . 
. . 8 8 8 8 d d d d d d . . . . 
. . 8 8 8 8 8 d d d d d . . . . 
. . . 8 8 8 8 8 d d 1 1 . . . . 
. . . . . 8 8 8 8 1 1 1 1 . 1 1 
. . . . . . . . . 1 1 1 1 1 e e 
. . . . . . . . . . . 1 1 e e e 
. . . . . . . . . . . e e e e . 
. . . . . . . . . . . . e e . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 . . . 
. . . . . . . 1 1 1 9 9 9 9 . . 
. . . . . . . 1 9 9 9 1 9 9 . . 
. . . . . . d 1 1 9 9 1 1 9 . . 
. . . . . . d 1 1 1 1 1 1 9 . . 
. . . . . d d d d 1 1 1 1 9 . . 
. . . . . d d d d d 1 1 1 1 . . 
. . . . d d d d d d d d d . . . 
. . . . d d d d d d d d . . . . 
. . . d d d d d d . . . . . . . 
. . d d d d d d . . . . . . . . 
. d d d d . . . . . . . . . . . 
. d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. d e e d d e d d d e d d e d . 
. e d d d d d e d d d d d e d . 
. d d d d d d d d d d d d d d . 
. 6 6 a a a a 6 a a a 6 6 6 a . 
6 6 8 8 8 8 8 6 8 8 8 8 6 8 6 6 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. d d d d d d d d d d d d d d . 
. d d d d d d d d d d d d d d . 
. d d d d d d d d d d d d d d . 
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
            left = sprites.createProjectile(imagery, 0, 100)
            left.x = 40
            left.ay = -30
        } else if (columcounter == 1) {
            middle = sprites.createProjectile(imagery, 0, 100)
            middle.x = 80
            middle.ay = -30
        } else {
            right = sprites.createProjectile(imagery, 0, 100)
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