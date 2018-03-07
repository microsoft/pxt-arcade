# asteroids

Example

```blocks
const spaceship = sprites.create(img`
 . . . . d
 . . . . d
 . . . d d d
 . . d d d d d
 . d a d a d a d
 d a a a a a a a d
 d a a a a a a a d
 `)
spaceship.y = 110

const meteor = img`
. . . 8 8 8 
. . 8 8 1 8 8 8
. 8 8 1 1 8 8 8 8
. . 8 8 8 8 1 1 8 8
8 8 8 8 8 8 1 1 8
. 8 8 8 8 8 8 8 8
. . 8 8 1 8 8 8
. . . 8 8 8 
`

const rocketImg = img`
. 3 
. 3
3 3 3
3 3 3
`

spaceship.onCollision(function (other: Sprite) {
    game.over()
})
spaceship.z = 10

loops.frame(function () {
    spaceship.x += keys.dx(70)
    spaceship.x = Math.clamp(10, 118, spaceship.x)

    if (Math.random() < 0.05) {
        let m = sprites.launchParticle(meteor, 0, Math.randomRange(30, 80))
        m.x = Math.randomRange(10, 118)
    }
    // stars
    if (Math.random() < 0.1) {
        let m = sprites.launchParticle(img`f`, 0, 40)
        m.x = Math.randomRange(0, 128)
        m.makeGhost()
    }
    let now = control.millis()
    if (keys.A.wasPressed()) {
        let r = sprites.launchParticle(rocketImg, 0, -90)
        r.x = spaceship.x
        r.y = spaceship.y - 10
        r.onCollision(function (other: Sprite) {
            other.destroy()
            game.addToScore(1)
        })
    }
})

```
