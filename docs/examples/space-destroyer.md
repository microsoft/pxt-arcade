# Space Destroyer

An example program that uses blocks and built-in images.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}
let ship: Sprite = null
let projectile: Sprite = null
let asteroids: Image[] = []
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . 7 7 . . .
. . . 7 7 . . .
. . . 7 7 . . .
. . . 7 7 . . .
`, ship, 0, -75)
})
asteroids = [sprites.space.spaceSmallAsteroid1, sprites.space.spaceSmallAsteroid0, sprites.space.spaceAsteroid0, sprites.space.spaceAsteroid1, sprites.space.spaceAsteroid4, sprites.space.spaceAsteroid3]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setFlag(SpriteFlag.StayInScreen, true)
ship.bottom = 120
controller.moveSprite(ship, 100, 0)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(asteroids[Math.randomRange(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = Math.randomRange(10, 150)
})

```
