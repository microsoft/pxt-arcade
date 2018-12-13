# Dodge the Rocks

Dodge the rocks and stay alive as long as you can

```blocks
enum SpriteKind {
    Player,
    Projectile
}
let projectile: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over()
})
sprite = sprites.create(img`
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4
`, SpriteKind.Player)
controller.moveSprite(sprite, 100, 100)
sprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(sprites.space.spaceAsteroid0, -50, 0)
    } else {
        projectile = sprites.createProjectileFromSide(sprites.space.spaceAsteroid0, 50, 0)
    }
    projectile.y = Math.randomRange(10, 110)
})
```