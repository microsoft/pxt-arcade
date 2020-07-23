# Catch

```blocks
namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const snake = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Projectile, 6, function (sprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    sprite.destroy()
})
scene.onHitTile(SpriteKind.Projectile2, 6, function (sprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    falling = sprites.create(img`
        . . 2 2 2 2 . .
        . 2 2 2 2 2 2 .
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        . 2 2 2 2 2 2 .
        . . 2 2 2 2 . .
    `, SpriteKind.Projectile)
    falling.setFlag(SpriteFlag.BounceOnWall, true)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
})
let limit = 0
let falling: Sprite = null
let s4Dir = 1
info.setLife(3)
let basket = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
basket.setPosition(80, 100)
controller.moveSprite(basket, 160, 0)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . .
    . . . 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
scene.setTile(5, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(6, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, true)
scene.setTileMap(img`
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 1 1 1 1 1 1 1 1 5
    5 6 6 6 6 6 6 6 6 5
`)
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
            . . 2 2 2 2 . .
            . 2 2 2 2 2 2 .
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            . 2 2 2 2 2 2 .
            . . 2 2 2 2 . .
        `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
            . . 8 8 8 8 . .
            . 8 8 8 8 8 8 .
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            . 8 8 8 8 8 8 .
            . . 8 8 8 8 . .
        `, SpriteKind.Projectile2)
    }
    falling.setPosition(randint(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.setFlag(SpriteFlag.BounceOnWall, true)
})
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
```

```package
color-coded-tilemap
```

## About the author

This project was contributed by Erik Pasternak from the [Blockly](https://developers.google.com/blockly) team.
