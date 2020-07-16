# Food Machine

Get lucky and pick 3 fruits!

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
        b b b b b b b b b b b b b b b b
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
}
let right: Sprite = null
let middle: Sprite = null
let left: Sprite = null
let columcounter = 0
let imagery: Image = null
let list = [img`
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
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
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
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
let tone = 440
game.onUpdateInterval(500, function () {
    music.ringTone(tone)
    tone += 40
    imagery = list[randint(0, list.length - 1)]
    if (game.runtime() < 5000) {
        if (columcounter == 0) {
            left = sprites.createProjectileFromSide(imagery, 0, 100)
            left.x = 40
            left.ay = -30
        } else if (columcounter == 1) {
            middle = sprites.createProjectileFromSide(imagery, 0, 100)
            middle.x = 80
            middle.ay = -30
        } else {
            right = sprites.createProjectileFromSide(imagery, 0, 100)
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
            game.over(false)
        }
    }
})

```