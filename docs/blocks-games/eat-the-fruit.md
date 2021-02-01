# Eat the Fruit

Dodge the junk and eat the fruits!

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
let choice = 0
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
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . b b b . . .
            . . . . . . . . b e e 3 3 b . .
            . . . . . . b b e 3 2 e 3 a . .
            . . . . b b 3 3 e 2 2 e 3 3 a .
            . . b b 3 3 3 3 3 e e 3 3 3 a .
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
            b 3 3 3 d d d d 3 3 3 3 3 d d a
            b b b b b b b 3 d d d d d d 3 a
            b d 5 5 5 5 d b b b a a a a a a
            b 3 d d 5 5 5 5 5 5 5 d d d d a
            b 3 3 3 3 3 3 d 5 5 5 d d d d a
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a
            b b b 3 d 5 5 5 5 5 5 5 d d b a
            . . . b b b 3 d 5 5 5 5 d d 3 a
            . . . . . . b b b b 3 d d d b a
            . . . . . . . . . . b b b a a .
        `, -60, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . 3 3 b 3 3 d d 3 3 . .
            . . . . 3 1 1 d 3 d 1 1 1 1 3 .
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3
            . 3 1 1 d 1 1 1 1 d d 1 1 b . .
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 .
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
            . 4 4 d 1 1 1 1 1 1 d d d b b .
            . 4 d b d 1 1 1 1 1 1 1 1 3 . .
            4 d d 5 b d 1 1 1 1 1 1 1 3 . .
            4 5 d 5 5 b b d 1 1 1 1 d 3 . .
            4 5 5 d 5 5 d b b b d d 3 . . .
            4 5 5 5 d d d d 4 4 b 3 . . . .
            . 4 5 5 5 4 4 4 . . . . . . . .
            . . 4 4 4 . . . . . . . . . . .
        `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . 6 . . . . . . . .
            . . . . . . 8 6 6 . . . 6 8 . .
            . . . e e e 8 8 6 6 . 6 7 8 . .
            . . e 2 2 2 2 e 8 6 6 7 6 . . .
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
            e 2 2 2 2 2 2 2 4 e 2 e e c . .
            e e 2 e 2 2 4 2 2 e e e c . . .
            e e e e 2 e 2 2 e e e c . . . .
            e e e 2 e e c e c c c . . . . .
            . c c c c c c c . . . . . . . .
        `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = randint(10, 110)
})
```