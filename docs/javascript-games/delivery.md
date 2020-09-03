# Delivery

Get those packages to delivered but be quick or you'll miss the address!

```typescript
namespace SpriteKind {
    export const Object = SpriteKind.create()
}
// Game over when you reach the end of the
// neighborhood
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 3 3 3 3 3 3 . . . .
        . . . . . 3 3 d d 3 3 3 3 . . .
        . . . . . c d 3 3 3 3 3 c . . .
        . . . . 3 c d 3 3 3 3 3 c 3 . .
        . . . a 3 c d 3 3 3 3 3 c 3 a .
        . . . f 3 c d 3 3 3 3 3 c 3 f .
        . . . f a c 3 3 3 3 3 3 c a f .
        . . . f 3 c 3 b b b b 3 c 3 f .
        . . . a 3 3 b c c c c b 3 3 a .
        . . . a a b c c c c c c b a a .
        . . . f a d d d d d d d d a f .
        . . . f a d 3 3 3 3 3 3 d a f .
        . . . . 3 d d 3 3 3 3 d d 3 f .
        . . . . f 3 d 3 3 3 3 d 3 f . .
        . . . . . a 3 3 3 3 3 3 a . . .
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let package1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . e e e e e e e . .
        . . . . . . e d d d d d e e . .
        . . . . . e d d d d d d e e . .
        . . . . e d d d d d d e d e . .
        . . . . e e e e e e e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d e e . .
        . . . . e d d d d d e e e . . .
        . . . . e e e e e e e e . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, car, 0, 50)
})
// Deliver packages up (A) or down (B)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let package2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . e e e e e e e . .
        . . . . . . e d d d d d e e . .
        . . . . . e d d d d d d e e . .
        . . . . e d d d d d d e d e . .
        . . . . e e e e e e e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d d e . .
        . . . . e d d d d d e d e e . .
        . . . . e d d d d d e e e . . .
        . . . . e e e e e e e e . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, car, 0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 3 3 3 3 3 3 3 3 . .
        . . . . . 3 c 3 3 3 3 3 3 d 3 .
        . . . . 3 c c 3 3 3 3 3 3 d c 3
        . . d 3 d c c 3 d d d d d d c c
        . d 3 3 d c b a a a a a a a 3 c
        . 3 3 3 d b a a b b b a b b a 3
        . 3 3 3 3 3 a b b b b a b b b a
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a
        . 3 d d 3 a f a a a f a a a a a
        . d d 3 a a a f a a f a a a a a
        . a a a a a a a f f f a a a a a
        . a a a a f f f a a a a f f f f
        . . . a f f f f f a a f f f f f
        . . . . f f f f . . . . f f f .
        . . . . . . . . . . . . . . . .
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . 3 3 3 3 3 3 3 3 . . . .
        . . . 3 d 3 3 3 3 3 3 c 3 . . .
        . . 3 c d 3 3 3 3 3 3 c c 3 . .
        . 3 c c d d d d d d 3 c c d 3 d
        . 3 c 3 a a a a a a a b c d 3 3
        . 3 3 a b b a b b b a a b d 3 3
        . 3 a b b b a b b b b a 3 3 3 3
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
        . a a a a a a f a a a f a 3 d d
        . a a a a a a f a a f a a a 3 d
        . a a a a a a f f f a a a a a a
        . a f f f f a a a a f f f a a a
        . . f f f f f a a f f f f f a .
        . . . f f f . . . . f f f f . .
        . . . . . . . . . . . . . . . .
        `)
})
// Change the car image based on the direction it's
// driving
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . a a c c a a . . . .
        . . . . . a 3 3 3 3 3 3 a . . .
        . . . . 3 c 3 3 3 3 3 3 c 3 . .
        . . . a 3 c d 3 3 3 3 3 c 3 a .
        . . . f 3 3 d 3 3 3 3 3 c 3 f .
        . . . f 3 3 d 3 3 3 3 3 3 3 f .
        . . . f 3 3 d 3 3 3 3 3 3 3 f .
        . . . f 3 c 3 d d 3 3 3 c 3 f .
        . . . a 3 c a c c c c a c 3 a .
        . . . a 3 a c b b b b c a 3 a .
        . . . a 3 a b b b b b b a 3 a .
        . . . a a a a a a a a a a a a .
        . . . f a d a a a a a a d a f .
        . . . f a 3 d a a a a d 3 a f .
        . . . f f a a a a a a a a f f .
        . . . . f f . . . . . . f f . .
        `)
})
// Score a point for delivering packages to houses
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Object, function (sprite, otherSprite) {
    music.magicWand.play()
    sprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
// Lose a point for driving into a house
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(139, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    scene.cameraShake(2, 200)
    info.changeScoreBy(-1)
})
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level`)
let car = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . 3 3 3 3 3 3 3 3 . . . .
    . . . 3 d 3 3 3 3 3 3 c 3 . . .
    . . 3 c d 3 3 3 3 3 3 c c 3 . .
    . 3 c c d d d d d d 3 c c d 3 d
    . 3 c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
tiles.placeOnRandomTile(car, myTiles.tile4)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    let myPurpleHouse = sprites.create(img`
        ....................8a8aa8a8....................
        .................aaa888aa8a8aaa.................
        ..............aaa8aa8a8aa888aa8aaa..............
        ...........8aa8aa8888a8aa8a8888aa8aa8...........
        ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
        .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
        ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
        dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
        bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
        dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
        dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
        dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
        bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
        dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
        bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
        dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
        bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
        dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
        dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
        dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
        bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
        dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
        dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
        dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
        ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
        bddddddddddddbcddddddddddddddddddcbddddddddddddb
        bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
        bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
        bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
        bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
        bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
        bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
        bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
        cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
        cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
        ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
        .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
        ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
        ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
        ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
        .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
        ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
        `, SpriteKind.Object)
    tiles.placeOnTile(myPurpleHouse, value)
}
for (let value of tiles.getTilesByType(myTiles.tile2)) {
    let myRedHouse = sprites.create(img`
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ....644444444c66f4e44e44e44e44ee66c444444446....
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666cccccccccccd166666666666666661dccccccccccc666
        66cb444444444cb411111111111111114bc444444444bc66
        64444444444446c444444444444444444c64444444444446
        cccccccc6666666cb44444444444444bc6666666cccccccc
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        46622cc6666ccc64444444444444444446ccc6666cc22664
        46622e22cc66666cc64444444444446cc66666cc22e22664
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        ...........e22e22eeee2e22e2eeee22e22e...........
        ..............222e22e2e22eee22e222..............
        .................222eee22e2e222.................
        ....................e2e22e2e....................
        `, SpriteKind.Object)
    tiles.placeOnTile(myRedHouse, value)
}
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAKCqqgoAAAAAAAAKAAAAAAAAAAoAAAAAAKCqqgoAoAAAAAAAAAAACgAAoAqgqqqqAACgqqAAAAoAAKCgqgCgAAAAAAAKAAAAAAAAAAAAAAAAAKqqqgAAAAAACqqgAAAAAACqCqAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmBgAAAAAAYAAAAAAAAABgAAAAAAYAZmZmBgBgAAAAAGYAAGZmAAAAAAAAYAAAZmYGBgAABgAGAAYGAAAAAAYAZgYAAAAAAABgBgAAAAAAAAAAAAAAAGZmZgYAAAAABgYABgAAAGAGBgAGAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAAC8vbu7u7vby7y9uxu9u9vLvL27G7G728u8vbsbsbvby7y9uxuxu9vLvL2727G728u8vbu7u7vby7y9u7u7u9vLvL27u7u728u8vbsbvbvby7y9uxuxu9vLvL27G7G728u8vbsbsbvby7y9u9uxu9vL27u7u7u7u73bu7u7u7u7vQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAADbu7u7u7u7vdu7uxu9u7u9vL27G7G728u8vbsbsbvby7y9uxuxu9vLvL2727G728u8vbu7u7vby7y9u7u7u9vLvL27u7u728u8vbsbvbvby7y9uxuxu9vLvL27G7G728u8vbsbsbvby7y9u9uxu9vLvL27u7u728u8vbu7u7vbyw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAyMDAwMjAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDgwMTBhMDEwYjAxMDgwMTAxMGEwMTAxMDEwODAxMGIwMTBhMDEwMTAxMDgwMTAxMGEwMTBhMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwYTAxMDEwYjAxMDEwMTAxMDEwMTAxMGIwMTAxMDEwMTAxMDEwMTAxMDEwYjBkMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMGEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTA1MGEwMTAxMDEwMTAxMGEwMTA5MDEwYjAxMDEwMTAxMDkwMTAxMGEwMTAxMDEwOTAxMDEwMTAxMGEwMTAxMDEwNTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDUwYjAxMDEwMTAxMGEwMTAxMDEwMTAxMDEwMTAxMGIwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTA1MDEwMTBhMDEwMTAxMDEwODAxMGEwMTAxMDgwMTAxMDEwMTA4MDEwMTBhMDEwMTA4MDEwMTAxMGEwMTA4MDEwNTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTBhMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDUwMTAxMDEwMTAxMDcwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjA0MDEwYjAxMDEwMTA1MGIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMGEwMTAxMDEwMTAxMDEwMTBhMDEwMTAxMGEwNTAxMDEwMTA5MDEwMTAxMDEwMTA5MDEwMTAxMDEwMTA5MDEwMTAxMDEwOTAxMDEwYjAxMDEwMTAxMDEwYjAxMDUwMTBhMDEwMTAxMDEwYTAxMDEwMTAxMDEwMTBhMDEwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTA1MDEwMTAxMDEwYjAxMDEwMTBhMDEwMTBiMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMGEwMTAxMDEwMTAxMDEwNTBiMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTBiMDEwMTBhMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTBiMDUwMTA4MDEwMTAxMDgwMTAxMDEwMTA4MDEwMTBhMDEwODAxMDEwMTAxMDgwMTBhMDEwODAxMDEwMTAxMDEwMTA1MDEwMTAxMGEwMTAxMDEwMTBhMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMGEwMTBhMDEwNjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDMwMTAxMDEwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTBiMDEwMTAxMDEwMTAxMDEwMTA1MDEwMTAxMDEwMTAxMGIwMTAxMDkwMTAxMDEwMTA5MDEwMTAxMDkwMTAxMDEwMTAxMDkwMTAxMDEwMTA5MDEwNTAxMDEwYTAxMDEwMTAxMDEwMTAxMDEwMTAxMGIwMTAxMDEwMTAxMGIwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDUwMTAxMDEwMTBhMDEwYTAxMDEwMTAxMGEwMTAxMDEwMTBhMDEwMTBiMDEwYTAxMDEwMTAxMGEwMTAxMGIwMTA1MGEwMTAxMDEwMTAxMDEwMTA4MDEwMTAxMDEwODAxMDEwMTAxMDgwMTAxMDEwMTA4MDEwMTAxMDEwODAxMDEwNTAxMGEwMTBhMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTBiMDEwMTAxMDEwMTAxMDUwMTAxMDEwMTAxMDcwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjA0MDEwMTAxMDEwMTA1MDEwMTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwNTAxMGEwMTAxMDkwMTBhMDEwMTAxMDkwMTAxMGEwMTAxMDkwMTAxMGEwMTAxMDEwMTBhMDEwMTAxMDEwMTAxMDUwMTAxMGIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwYTAxMGEwMTA1MDEwODAxMDEwYjAxMDEwODAxMDEwMTAxMGIwYTAxMDEwMTAxMDEwMTAxMDgwMTAxMDEwMTBiMDEwMTAxMGIwNTBiMDEwMTAxMDEwMTBiMDEwMTBhMDEwMTAxMDEwMTAxMDEwYTAxMDEwMTAxMDEwYjAxMDEwMTAxMDEwMTAxMDYwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "sprites.castle.tileGrass1",
            "sprites.vehicle.roadHorizontal",
            "sprites.vehicle.roadTurn2",
            "sprites.vehicle.roadTurn4",
            "sprites.vehicle.roadVertical",
            "sprites.vehicle.roadTurn3",
            "sprites.vehicle.roadTurn1",
            "myTiles.tile1",
            "myTiles.tile2",
            "sprites.castle.saplingPine",
            "sprites.castle.tileGrass2",
            "myTiles.tile3",
            "myTiles.tile4"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```