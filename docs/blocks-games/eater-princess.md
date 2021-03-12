# Eater Princess

The Princess is hungry, feed her! But watch out for death pill.

```blocks
namespace SpriteKind {
    export const Taco = SpriteKind.create();
}
let deathpill: Sprite = null
let taco: Sprite = null
let cherry: Sprite = null
let princess: Sprite = null
let strawberry: Sprite = null
/**
 * Eating a strawberry or a cherry gives 1 point
 *
 * Eating taco gives 10 points
 *
 * If you try to eat the death pill you will lose a life, but gain 15 points.
 *
 * Princess, you have 60 seconds and 3 life to finish the game.
 */
function randomAssets() {
    strawberry = sprites.create(img`
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
    `, SpriteKind.Food)
    strawberry.x = randint(0, scene.screenWidth())
    strawberry.y = randint(0, scene.screenHeight())
    cherry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6
        . . . . . . . . . 6 6 7 7 7 7 8
        . . . . . . 8 8 8 7 7 8 8 6 8 8
        . . e e e e c 6 6 8 8 . 8 7 8 .
        . e 2 5 4 2 e c 8 . . . 6 7 8 .
        e 2 4 2 2 2 2 2 c . . . 6 7 8 .
        e 2 2 2 2 2 2 2 c . . . 8 6 8 .
        e 2 e e 2 2 2 2 e e e e c 6 8 .
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
        . c 2 e e e 2 e 2 4 2 2 2 2 c .
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e
        . . . e c c e c 2 2 2 2 2 2 2 e
        . . . . . . . c 2 e e 2 2 e 2 c
        . . . . . . . c e e e e e e 2 c
        . . . . . . . . c e 2 2 2 2 c .
        . . . . . . . . . c c c c c . .
    `, SpriteKind.Food)
    cherry.x = randint(0, scene.screenWidth())
    cherry.y = randint(0, scene.screenHeight())
    if (Math.percentChance(20)) {
        taco = sprites.create(img`
            . . . . . . . e e e e . . . . .
            . . . . . e e 4 5 5 5 e e . . .
            . . . . e 4 5 6 2 2 7 6 6 e . .
            . . . e 5 6 6 7 2 2 6 4 4 4 e .
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 .
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4
            e 5 c c e 5 4 5 5 5 4 5 5 5 e .
            e 5 c c 5 5 5 5 5 5 5 5 4 e . .
            e 5 e c 5 4 5 4 5 5 5 e e . . .
            e 5 e e 5 5 5 5 5 4 e . . . . .
            4 5 4 e 5 5 5 5 e e . . . . . .
            . 4 5 4 5 5 4 e . . . . . . . .
            . . 4 4 e e e . . . . . . . . .
        `, SpriteKind.Taco)
        taco.x = randint(0, scene.screenWidth())
        taco.y = randint(0, scene.screenHeight())
    } else {
        deathpill = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f f . . . . . . . . . .
            . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
            . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
            . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
            . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
            . . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . .
            . . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
            . . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
            . . . 7 . . f d d d 1 1 1 1 d d d f f . . . . .
            . . . 7 7 . f b d b f d d f b d b f c f . . . .
            . . . 7 7 7 f c d c f 1 1 f c d c f b f . . . .
            . . . . 7 7 f f f b d b 1 b d f f c f . . . . .
            . . . . f c b 1 b c f f f f f f . . . . . . . .
            . . . . f 1 c 1 c 1 f f f f f f . . . . . . . .
            . . . . f d f d f d f f f f f . . . . . . . . .
            . . . . . f . f . f . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
        deathpill.x = randint(0, scene.screenWidth())
        deathpill.y = randint(0, scene.screenHeight())
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(15)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Taco, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
})
info.setLife(3)
info.startCountdown(60)
princess = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
princess.setStayInScreen(true)
controller.moveSprite(princess)
scene.setBackgroundColor(11)
game.onUpdateInterval(2000, function () {
    randomAssets()
})

```
