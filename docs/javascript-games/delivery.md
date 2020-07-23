# Delivery

Get those packages to delivered but be quick or you'll miss the address!

```typescript
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
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . a . . a . . . . . . . . . .
        . . a . . a . . . . . . a a a .
        . . a . . a . a a a . . a . a .
        . . a a a a . a a . . . a a a .
        . . a . . a . . a a . . a a . .
        . . a . . a . . . a a . a . . .
        . . . . . . . a a a . . a a a .
        . . . . . . . a . . . . . . . .
        . . . . . . . a . . . . . . . .
        . . . . . . . a . . . . . . . .
        . . . . . a . a . a . . . . . .
        . . . . . . a a a . . . . . . .
        . . . . . . . a . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 6 6 6 . . . . . . .
        . . . . . 6 . 6 . 6 . . . . . .
        . . . . . . . 6 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 6
        . . 6 . . 6 . . 6 6 6 . . 6 6 6
        . . 6 . . 6 . . 6 . . . . 6 . .
        . . 6 . . 6 . . 6 . . . . 6 6 6
        . . 6 6 6 6 . . 6 . . . . 6 . .
        . . 6 . . 6 6 . 6 6 6 . . 6 . .
        . . 6 . . 6 6 . . . 6 6 . 6 . .
        . . 6 . . 6 . . 6 6 6 6 . 6 6 6
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        c c c c c c c c c c c c c c b b
        b b b b b b b b b b b b b b d d
        d d d d d d d d d d d d d d b b
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
        d d d d d d d d d d d d d d b b
        b b b b b b b b b b b b b b d d
        c c c c c c c c c c c c c c b b
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        b b c c c c c c c c c c c c c c
        d d b b b b b b b b b b b b b b
        b b d d d d d d d d d d d d d d
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
        b b d d d d d d d d d d d d d d
        d d b b b b b b b b b b b b b b
        b b c c c c c c c c c c c c c c
    `

}
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
// Deliver packages up (A) or down (B)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _package2 = sprites.createProjectileFromSprite(img`
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
let _package2: Sprite = null
let _package: Sprite = null
let myRedHouse: Sprite = null
let myPurpleHouse: Sprite = null
let car: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
    hex`2000200001010101010101010101010101010101010101010101010101010101010b0101010108010a010b010801010a01010108010b010a0101010801010a010a010101010101010101010101010a01010b010101010101010b0101010101010101010b0d0202020202020202020202020202020202020202020202020202020301010101010101010101010a01010101010101010101010101010101010101050a01010101010a0109010b010101010901010a01010109010101010a0101010501010101010b01010101010101010101010101010101010101010101010101050b010101010a01010101010101010b0101010101010b0101010101010101010501010a0101010108010a010108010101010801010a0101080101010a010801050101010101010101010101010101010a010101010101010101010101010101050101010101070202020202020202020202020202020202020202020202020204010b010101050b01010101010101010101010101010101010a010101010101010a0101010a0501010109010101010109010101010109010101010901010b01010101010b0105010a010101010a0101010101010a010101010101010b01010101010101010105010101010b0101010a01010b0101010101010101010101010a010101010101050b010b0101010101010101010101010b01010a01010101010101010101010b05010801010108010101010801010a01080101010108010a0108010101010101050101010a010101010a0101010101010101010101010101010101010a010a010602020202020202020202020202020202020202020202020202030101010101010101010b0101010101010101010101010b0101010101010101050101010101010b0101090101010109010101090101010101090101010109010501010a010101010101010101010b01010101010b0101010101010b0101010105010101010a010a010101010a010101010a01010b010a010101010a01010b01050a01010101010101080101010108010101010801010101080101010108010105010a010a01010101010101010101010101010101010101010b010101010101050101010101070202020202020202020202020202020202020202020202020204010101010105010101010101010b010101010101010101010101010101010101010101010105010a010109010a0101010901010a01010901010a010101010a0101010101010501010b0101010101010101010101010101010101010101010101010a010a0105010801010b010108010101010b0a0101010101010108010101010b0101010b050b01010101010b01010a010101010101010a01010101010b0101010101010106020202020202020202020202020202020202020202020202020202020c`,
    img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
    `,
    [myTiles.tile0,sprites.castle.tileGrass1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,myTiles.tile1,myTiles.tile2,sprites.castle.saplingPine,sprites.castle.tileGrass2,myTiles.tile3,myTiles.tile4],
    TileScale.Sixteen))
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
tiles.placeOnRandomTile(car, myTiles.tile4)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    myPurpleHouse = sprites.create(img`
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
        `, SpriteKind.Object)
    tiles.placeOnTile(myPurpleHouse, value)
}
for (let value2 of tiles.getTilesByType(myTiles.tile2)) {
    myRedHouse = sprites.create(img`
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
        `, SpriteKind.Object)
    tiles.placeOnTile(myRedHouse, value2)
}
```