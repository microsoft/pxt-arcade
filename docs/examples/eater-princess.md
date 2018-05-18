# Eater Princess

The Princess is hungry, feed her! But watch out for spoiled food.

```blocks
let deathpill: Sprite = null
let diamond: Sprite = null
let Arrow: Sprite = null
let princess: Sprite = null
let plant: Sprite = null
function randomAssets() {
    plant = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 . . . . . . . . . 
. . . . . . 4 . . . . . . . . . 
. . 4 4 . . 4 . . . 4 4 4 . . . 
. . . 4 4 . 4 . 4 4 4 . . . . . 
. . . . . 4 4 . 4 . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . 4 4 4 . 4 4 . . . . . . . 
. . . 4 . . . . . 4 4 . . . . . 
. . 4 4 . . . . . . 4 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    plant.x = Math.randomRange(0, scene.screenWidth())
    plant.y = Math.randomRange(0, scene.screenHeight())
    plant.z = 1
    Arrow = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 . . . . . . . . . 
. . . . a a a . . . . . . . . . 
. . . a a a a a . . . . . . . . 
. . . a . a . a . . . . . . . . 
. . . . . a . . . . . . . . . . 
. . . . . a . . . . . . . . . . 
. . . . . a . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Arrow.x = Math.randomRange(0, scene.screenWidth())
    Arrow.y = Math.randomRange(0, scene.screenHeight())
    Arrow.z = 4
    if (Math.randomRange(0, 10) > 8) {
        diamond = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . . c c . c c . . . . . . 
. . . . c c c c c c c c . . . . 
. . . c c . . c . . . c c . . . 
. . . . c . . . . . c c . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c c . . c c . . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c c . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        diamond.x = Math.randomRange(0, scene.screenWidth())
        diamond.y = Math.randomRange(0, scene.screenHeight())
        diamond.z = 10
    } else {
        deathpill = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        deathpill.x = Math.randomRange(0, scene.screenWidth())
        deathpill.y = Math.randomRange(0, scene.screenHeight())
        deathpill.z = 20
    }
}
scene.setTileMap(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
info.setLife(3)
princess = sprites.create(sprites.castle.princessFront0)
info.startCountdown(30)
princess.onOverlap(function (other) {
    info.changeScoreBy(other.z)
    if (other.z == 20) {
        info.changeLifeBy(-1)
    }
    other.destroy()
})
game.onUpdateInterval(2000, function () {
    randomAssets()
})
game.onUpdate(function () {
    princess.x += controller.dx()
    princess.y += controller.dy()
})
```