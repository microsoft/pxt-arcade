# Bunny Hop

Help your bunny get through the forest by jumping over the trees and stumps.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bunny.y >= 80) {
        bunny.vy = -200
    }
})
let log: Sprite = null
let log_speed = 0
let bunny: Sprite = null
scene.setBackgroundColor(13)
bunny = sprites.create(img`
    . . 3 1 1 . . . . 3 1 . . . . .
    . . 3 3 1 1 . . . 3 1 . . . . .
    . . . 3 1 1 . . . 1 1 . . . . .
    . . . . 1 1 1 1 1 1 . . . . . .
    . . . . 1 f 1 1 f 1 . . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . 1 f f f f 1 1 . . . . .
    . . . . . 1 1 1 1 . . . . . . .
    . . 1 1 . . . 1 . . . 1 1 . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 . . . 1 . . . 1 1 . . .
    . . . . . . . 1 . . . . . . . .
    . . . . . . 1 1 1 1 1 . . . . .
    . . . . . 1 1 . . . 1 . . . . .
    . . . . 1 1 . . . 1 . . . . . .
`, SpriteKind.Player)
bunny.setPosition(10, 80)
game.onUpdate(function () {
    if (bunny.y < 80) {
        bunny.ay = 450
    } else {
        bunny.ay = 0
        bunny.vy = 0
    }
})
game.onUpdateInterval(Math.randomRange(1000, 3000), function () {
    log_speed = -100 - game.runtime() / 250
    log = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . b b b b . . . . . . . . . .
        . . . . . . . . b b d d d d b b . . . . . . . .
        . . . . . . . b d d b b b b d d b . . . . . . .
        . . . . . . b d b b d d d d b b d b . . . . . .
        . . . . . b d b b d b b b b d b b d b . . . . .
        . . . . . b d b d b d d d d b d b d b . . . . .
        . . . . . c d b b d b b b b d b b d c . . . . .
        . . . . . c b d b b d d d d b b d b c . . . . .
        . . . . . e f b d d b b b b d d b c e . . . . .
        . . . . . e e f f b d d d d b c c e e . . . . .
        . . . . . e e e e f f c c c c e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . c e e e e e e e e e e e e . . . . . .
        . . . . . f e e e e e e e e e e e e . . . . . .
        . . . . . c c e e e e e e e e e e e . . . . . .
        . . . . . . f e e e e e e e e e e e . . . . . .
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
    `, log_speed, 0)
    log.y = 80
    info.changeScoreBy(10)
})
```