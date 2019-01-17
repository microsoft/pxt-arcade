# Dodge the Burgers

Dodge the burgers and eat the fruits!

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let projectile: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 100)
    music.baDing.play()
})
scene.setBackgroundColor(13)
sprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(sprite, 100, 100)
sprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(sprites.food.smallBurger, -60, 0)
    } else if (false) {
        projectile = sprites.createProjectileFromSide(sprites.food.smallPizza, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(sprites.food.smallStrawberry, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = Math.randomRange(10, 110)
})
```