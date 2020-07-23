# asteroids

```typescript
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

const meteorDeath = [
    img`
. . . 8 8 8
. . . 8 1 8 . 8
. 8 8 . 1 . 8 8 8
. . 8 8 . 8 1 1 8 8
8 8 8 . 8 . 1 1 8
. 8 . 8 8 8 . 8 8
. . 8 8 1 8 8 .
. . . 8 8 8
`,
    img`
. . . 8 8 8
. . . 8 1 8 . .
. 8 8 . . . . 8 8
. . 8 . . . 1 1 8 8
8 8 8 . . . . 1 8
. . . . . . . . .
. . . 8 1 8 . .
. . . 8 8 8
`,
    img`
. . . . 8 .
. . . . . . . .
. 8 . . . . . . .
. . . . . . . . . 8
. . . . . . . . .
. . . . . . . . .
. . . . . . . .
. . . . 8 .
`]


const rocketImg = img`
. 3
. 3
3 3 3
3 3 3
`

spaceship.onOverlap(function (other: Sprite) {
    game.over()
})
spaceship.z = 10

game.onUpdate(function () {
    spaceship.x += controller.dx(70)
    spaceship.x = Math.clamp(10, 118, spaceship.x)

    // metero
    if (Math.random() < 0.05) {
        let m = sprites.createProjectile(meteor, 0, randint(30, 80), 0)
        m.x = randint(10, 140)
    }
    // stars
    if (Math.random() < 0.1) {
        let m = sprites.createProjectile(img`1`, 0, 40, 0)
        m.x = randint(0, screen.width)
        m.lifespan = randint(100, 120)
        m.setFlag(SpriteFlag.Ghost, true);
    }
    let now = control.millis()
    if (controller.A.isPressed()) {
        let r = sprites.createProjectile(rocketImg, 0, -90, 0)
        r.x = spaceship.x
        r.y = spaceship.y - 10
        r.onOverlap(function (other: Sprite) {
            other.destroy()
            const o = sprites.create(meteorDeath[0])
            o.x = other.x;
            o.y = other.y;
            o.vy = -5;
            o.lifespan = 20;
            o.setFlag(SpriteFlag.Ghost, true)
            info.changeScoreBy(1)
        })
    }
})
```
