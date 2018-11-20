# Space Destroyer

An example program that uses blocks and built-in images.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Laser
}
let item: Sprite = null
let ship: Sprite = null
let projectile: Sprite = null
let asteroids: Image[] = []
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . 7 7 . . .
. . . 7 7 . . .
. . . 7 7 . . .
. . . 7 7 . . .
`, 0, -75, SpriteKind.Laser, ship)
})
asteroids = [sprites.space.spaceSmallAsteroid1, sprites.space.spaceSmallAsteroid0, sprites.space.spaceAsteroid0, sprites.space.spaceAsteroid1, sprites.space.spaceAsteroid4, sprites.space.spaceAsteroid3]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setFlag(SpriteFlag.StayInScreen, true)
ship.bottom = 120
controller.moveSprite(ship, 100, 0)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectile(Math.pickRandom(asteroids), 0, 75, SpriteKind.Enemy, item)
    projectile.x = Math.randomRange(10, 150)
})

```
