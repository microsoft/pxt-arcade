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
        `, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let ship: Sprite = null
let asteroids = [
sprites.space.spaceSmallAsteroid1,
sprites.space.spaceSmallAsteroid0,
sprites.space.spaceAsteroid0,
sprites.space.spaceAsteroid1,
sprites.space.spaceAsteroid4,
sprites.space.spaceAsteroid3
]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
game.stats = true
controller.moveSprite(ship, 100, 100)
info.setLife(3)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
