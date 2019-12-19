# Delivery

Get those packages to delivered but be quick or you'll miss the address!

```typescript
namespace SpriteKind {
    export const object = SpriteKind.create()
}
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
// Deliver packages up (A) or down (B)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _package = sprites.createProjectileFromSprite(img`
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    _package = sprites.createProjectileFromSprite(img`
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
// Score a point for delivering packages to houses
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.object, function (sprite, otherSprite) {
    music.magicWand.play()
    sprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
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
// Lose a point for driving into a house
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(139, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    scene.cameraShake(2, 200)
    info.changeScoreBy(-1)
})
// Game over when you reach the end of the
// neighborhood
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    game.over(true, effects.confetti)
})
let _package: Sprite = null
let redhouse: Sprite = null
let purplehouse: Sprite = null
let car: Sprite = null
scene.setTileMap(img`
    d d d d d d d d d d d d d d d d d d d d d d d d d d e d d d d d
    d d 1 d d e d d 1 d d e d d d 1 d e d d f d d 1 d e d f d e d d
    d d d d d d d d d d d d e d d d d d d d d d d d d d d d d d d d
    a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 d e d
    d d d d d d d d d e d d d d d d d d d d d d d d d d d d 7 d d d
    d e d f d 6 d d e d d d 6 d d f d d d 6 d e d d f d d d 7 d d d
    d d d d d d d d d d d d d e d d d d d d d d d d d e d d 7 f d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 d d d
    d e d d 1 d f d d 1 d d d d 1 d d f d d 1 d f d d d 1 d 7 e d d
    d d d d d d d d d d d d f d d d d d d d d d d d d d d d 7 d e d
    d d 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 d d d
    d d 7 f d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    e d 7 d d d 6 d e d d 6 d d d e d 6 d d f d d 6 d d d f d d e d
    d d 7 d d d d d d d d d d d f d d d d d d d d d d d d d e d d d
    d d 7 d d f d d d d f d d d d d e d d d d d d e d d d d d d f d
    f d 7 d d d d e d d d d d d d d d d d e d f d d d f d d d d d d
    d d 7 d 1 d d d 1 d d e d 1 d f d d 1 d d d d 1 d d d 1 d e d d
    d d 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    e d 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 d d d
    d d d d d d d d f d d d d d d d d d d d d d d d d d d d 7 d f d
    d f d d d d 6 d d d d 6 d d e d 6 d f d d 6 d d d d 6 d 7 e d d
    d d d d f d d d d e d d d f d d d d d d d d d f d d d d 7 d e d
    d d d d d d d d d d d d d d d d d d d d d d d d d d e d 7 d d d
    d e d d d 1 d d d d 1 d d d d 1 d d d d 1 d d d d 1 d d 7 d f d
    d d d d d d d e d d d d d f d d d d e d d d d e d d d d 7 d d d
    d d 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 d e d
    d d 7 d d e d d e d d d e d d d d d d d d d d d f d d d d d d d
    f f 7 d d d d 6 d d d d d d 6 d d d 6 d e d d d d d d d d f d d
    d d 7 d d d d d d f d d f d d d d f d d d f d d d e d d d d d d
    d d 7 d 1 d f d d d 1 d d e d d d d d d d d d d 1 d d d d d d d
    d d 7 d d d d d e d d d d d d d d e d d d d d d d d d e d d d e
    d d 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c
`, TileScale.Sixteen)
scene.setTile(9, img`
    c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b 1 1 1 1 d b b b 1 1 1 1 d b b
    b d 1 1 1 1 b b b d 1 1 1 1 b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    c c c c c c c c c c c c c c c c
`, false)
scene.setTile(7, img`
    c b d b b b b b b b b b b d b c
    c b d b b b b d 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 d b b b b d b c
    c b d b b b b b b b b b b d b c
    c b d b b b b b b b b b b d b c
    c b d b b b b b b b b b b d b c
    c b d b b b b d 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 1 b b b b d b c
    c b d b b b b 1 d b b b b d b c
    c b d b b b b b b b b b b d b c
    c b d b b b b b b b b b b d b c
`, false)
scene.setTile(5, img`
    c c c c c c c c c c c c c . . .
    b b b b b b b b b b b b b c . .
    d d d d d d d d d d d d b b c .
    b b b b b b b b b b b b d b b c
    b b b b b b b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b d b b b b b b b d b c
    b b b b d 1 1 b b b b b b d b c
    b b b b b 1 1 1 b b b b b d b c
    b b b b b b 1 1 d b b b b d b c
    b b b b b b b d b b b b b d b c
    b b b b b b b b b b b b b d b c
    d d b b b b b b b b b b b d b c
    b b d b b b b b b b b b b d b c
    c b d b b b b b b b b b b d b c
`, false)
scene.setTile(3, img`
    c b d b b b b b b b b b b d b c
    b b d b b b b b b b b b b d b c
    d d b b b b b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b b b d b b b b b d b c
    b b b b b b 1 1 d b b b b d b c
    b b b b b 1 1 1 b b b b b d b c
    b b b b d 1 1 b b b b b b d b c
    b b b b b d b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b b b b b b b b b d b c
    b b b b b b b b b b b b d b b c
    d d d d d d d d d d d d b b c .
    b b b b b b b b b b b b b c . .
    c c c c c c c c c c c c c . . .
`, false)
scene.setTile(4, img`
    . . . c c c c c c c c c c c c c
    . . c b b b b b b b b b b b b b
    . c b b d d d d d d d d d d d d
    c b b d b b b b b b b b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b d b b b b b
    c b d b b b b b b 1 1 d b b b b
    c b d b b b b b 1 1 1 b b b b b
    c b d b b b b d 1 1 b b b b b b
    c b d b b b b b d b b b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b b b b b d d
    c b d b b b b b b b b b b d b b
    c b d b b b b b b b b b b d b c
`, false)
scene.setTile(2, img`
    c b d b b b b b b b b b b d b c
    c b d b b b b b b b b b b d b b
    c b d b b b b b b b b b b b d d
    c b d b b b b b b b b b b b b b
    c b d b b b b b d b b b b b b b
    c b d b b b b d 1 1 b b b b b b
    c b d b b b b b 1 1 1 b b b b b
    c b d b b b b b b 1 1 d b b b b
    c b d b b b b b b b d b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b b b b b b b
    c b d b b b b b b b b b b b b b
    c b b d b b b b b b b b b b b b
    . c b b d d d d d d d d d d d d
    . . c b b b b b b b b b b b b b
    . . . c c c c c c c c c c c c c
`, false)
scene.setTile(13, img`
    7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7
    7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7
    7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7
    7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7
    7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, false)
scene.setTile(14, img`
    5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7
    7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7
    7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7
    7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7
    7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7
    7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7
    7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7
    7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7
    7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7
    7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7
    7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1
    7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d
    7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6
    7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7
    7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7
`, false)
scene.setTile(15, img`
    7 7 7 7 7 7 7 c c 7 7 7 7 7 7 7
    7 7 7 7 c c c 6 5 c 6 6 7 7 7 7
    7 7 7 7 c 6 c 5 5 c 7 6 7 7 7 7
    7 7 7 6 c c 7 5 5 7 c 6 6 7 7 7
    7 7 c c 7 7 7 7 7 5 7 7 c 6 7 7
    7 6 6 6 c 6 7 7 7 7 6 c c 6 6 7
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6
    7 c c 7 6 6 6 6 6 7 7 7 7 c 6 7
    7 c 7 7 6 6 7 6 6 7 7 6 7 7 c 7
    7 c c c c 7 7 6 f 7 7 c c c c 7
    7 7 7 7 c 7 c f f c 7 c 7 7 7 7
    7 7 7 7 7 6 f e e e c 7 7 7 7 7
    7 7 7 7 7 e e e e e e 7 7 7 7 7
    7 7 7 7 e e 7 e e 7 e e 7 7 7 7
    7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7
`, false)
scene.setTile(12, img`
    c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b 1 1 1 1 d b b b 1 1 1 1 d b b
    b d 1 1 1 1 b b b d 1 1 1 1 b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    c c c c c c c c c c c c c c c c
`, true)
scene.setTile(10, img`
    c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b 1 1 1 1 d b b b 1 1 1 1 d b b
    b d 1 1 1 1 b b b d 1 1 1 1 b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d
    b b b b b b b b b b b b b b b b
    c c c c c c c c c c c c c c c c
`, false)
car = sprites.create(img`
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
car.setFlag(SpriteFlag.StayInScreen, true)
scene.placeOnRandomTile(car, 10)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
let tilelist1 = scene.getTilesByType(1)
for (let value of tilelist1) {
    purplehouse = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . . . . . . .
        . . . . . . . . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . . . . . . .
        . . . . . . . . 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . . . . . . . .
        . . . . . a a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a a . . . . .
        . . . a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a . . .
        d c c a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a c c d
        b c b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b c b
        d b b a a 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 a a b b d
        d b b a a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a a b b d
        d c c a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a c c d
        b c b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b c b
        d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d
        d b b a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a b b d
        d c c a a 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 a a c c d
        b c b a a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 8 8 a a 8 8 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a a b c b
        d b b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b b d
        d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d
        d c c a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a c c d
        b c b a a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a a b c b
        d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 c c b b b b c c 8 8 8 a a 8 a a 8 a a 8 8 8 8 a a b b d
        d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b b b b b b b b c c 8 8 8 a a 8 a a 8 a a 8 a a b b d
        d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c c c c c b b b b b c c 8 8 8 a a 8 a a 8 8 8 c c d
        b c b a a 8 a a 8 8 8 c c b b b b b c c b d d d d d d b c c b b b b b c c 8 8 8 a a 8 a a b c b
        d b b a a 8 a a c c b b b b b c c b d d d d d d d d d d d d b c c b b b b b c c a a 8 a a b b d
        d b b a a c c b b b b c c c b d d d d d d d d d d d d d d d d d d b c c c b b b b c c a a b b d
        d c c c b b b b c c c b d d d b c c b b b b b b b b b b b b c c b d d d b c c c b b b b c c c d
        c c c c c c c c b b b b b b b c b d d d d d d d d d d d d d d b c b b b b b b b c c c c c c c c
        b d d d d d d d d d d d d b c d d d d d d d d d d d d d d d d d d c b d d d d d d d d d d d d b
        b b c b d d d d d d d d d c b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c d d d d d d d d d b c b b
        b b b c c c c c c c c c c c d 1 b b b b b b b b b b b b b b b b 1 d c c c c c c c c c c c b b b
        b b b b d d d d d d d d d c 1 1 b e e e e e e e e e e e e e e b 1 1 c d d d d d d d d d b b b b
        b b b 8 a a a a a a a 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 a a a a a a a 8 b b b
        b b b 8 8 8 8 8 8 8 8 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 8 8 8 8 8 8 8 8 b b b
        b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 3 3 3 3 3 8 b b b
        b b b 8 3 f f 3 f f 3 8 d c b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 3 f f 3 8 b b b
        b b b 8 3 c c 3 c c 3 8 d c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c c 3 8 b b b
        b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 3 3 8 b b b
        c b b 8 3 f f 3 f f 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 8 b b c
        c b b 8 3 c c 3 c c 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 b b c
        c c b b b b b b b b b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b c c
        . c b b d d d d d d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b c .
        . . c b d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . .
        . . . c d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . .
        . . . . b d d d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . .
        . . . . . b d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . .
        . . . . . . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . .
    `, SpriteKind.object)
    value.place(purplehouse)
}
let tilelist2 = scene.getTilesByType(6)
for (let value2 of tilelist2) {
    redhouse = sprites.create(img`
        . . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . .
        . . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . .
        . . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . .
        . . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . .
        . . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . .
        . c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c .
        c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c
        c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c
        c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c
        6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6
        6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6
        6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6
        6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6
        6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6
        6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6
        6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6
        6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6
        6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6
        6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6
        c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c
        4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4
        4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4
        4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4
        6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6
        4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4
        4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4
        4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4
        6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6
        4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4
        4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4
        4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4
        6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6
        4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4
        4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4
        4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4
        6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6
        4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4
        4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4
        4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4
        6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6
        4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4
        . . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . .
        . . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . .
        . . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . .
        . . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . .
        . . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.object)
    value2.place(redhouse)
}
```

```package
color-coded-tilemap
```