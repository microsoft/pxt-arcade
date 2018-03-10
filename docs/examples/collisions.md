# Collisions

```blocks
const alone = img`
2222
2...2
2222    
    `

const friend = img`
55555
55555
55555   
    `
const together = img`
6666
6666
6666    
    `

const coll = img`
7..77
.77
.77
7..77   
    `
keys.A.onPressed(function () {
    game.debug = !game.debug
})
while (true) {
    for (let i = 0; i < 10; ++i) {
        hud.changeLifeBy(1)
        let s = sprites.create(alone)
        s.x = Math.randomRange(0, screen.width);
        s.y = Math.randomRange(0, screen.height);
        s.vx = Math.randomRange(-10, 10)
        s.vy = Math.randomRange(-10, 10)
        s.onCollision(function (other: Sprite) {
            hud.changeScoreBy(1);
        })
    }
    loops.pause(1000)
}
```