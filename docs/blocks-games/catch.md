# Catch

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy,
    Projectile2,
    snake
}
let sprite_list: Sprite[] = []
let limit = 0
let basket: Sprite = null
let mySprite4: Sprite = null
let falling: Sprite = null
let s4Dir = 0
scene.onHitTile(SpriteKind.Projectile, 5, function (sprite) {
    sprite.vx = -1 * sprite.vx
})
scene.onHitTile(SpriteKind.Projectile, 6, function (sprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.setScore(info.score() + 1)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    falling = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . . 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . . 2 2 2 2 2 2 . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Projectile)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
})
scene.onHitTile(SpriteKind.Projectile2, 5, function (sprite) {
    sprite.vx = -1 * sprite.vx
})
scene.onHitTile(SpriteKind.Projectile2, 6, function (sprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
s4Dir = 1
info.setLife(3)
basket = sprites.create(img`
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
sprite_list = sprites.allOfKind(SpriteKind.Projectile)
mySprite4 = sprites.create(img`
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
    if (info.score() < 10 || Math.randomRange(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . 2 2 2 2 2 2 . . . . .
            . . . . 2 2 2 2 2 2 2 2 . . . .
            . . . . 2 2 2 2 2 2 2 2 . . . .
            . . . . 2 2 2 2 2 2 2 2 . . . .
            . . . . 2 2 2 2 2 2 2 2 . . . .
            . . . . . 2 2 2 2 2 2 . . . . .
            . . . . . . 2 2 2 2 . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 8 8 8 8 . . . . . . .
            . . . . 8 8 8 8 8 8 . . . . . .
            . . . 8 8 8 8 8 8 8 8 . . . . .
            . . . 8 8 8 8 8 8 8 8 . . . . .
            . . . 8 8 8 8 8 8 8 8 . . . . .
            . . . 8 8 8 8 8 8 8 8 . . . . .
            . . . . 8 8 8 8 8 8 . . . . . .
            . . . . . 8 8 8 8 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile2)
    }
    falling.setPosition(Math.randomRange(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(Math.randomRange(-100, 100), Math.randomRange(0 - limit, 5))
    falling.ay = 20
})
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
```

## About the author

This project was contributed by Erik Pasternak from the [Blockly](https://developers.google.com/blockly) team.
