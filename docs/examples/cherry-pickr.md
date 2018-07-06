# Cherry Pickr

Drive around and collect as many Cherries as you can! Make sure to avoid the unhealthy food or else!

```typescript
enum SpriteKind {
    Player,
    Enemy,
    coin,
    boost,
    badBoost
}

let mapimage: Image = null
let maxCherries = 0
let cherriesOnScreen = 0
let randomY = 0
let speed = 0
let randomX = 0
let item: Sprite = null
let badBoost: Sprite = null
let boost: Sprite = null
let player: Sprite = null

sprites.onOverlap(SpriteKind.Player, SpriteKind.boost, function (player, boost) {
    speed += 15
    controller.controlSprite(player, speed, speed)
    music.playSound(music.sounds(Sounds.MagicWand))
    boost.destroy()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.badBoost, function (player, badBoost) {
    speed += -15
    music.playSound(music.sounds(Sounds.PowerDown))
    badBoost.destroy()
    if (speed < 15) {
        speed = 15
    }
    controller.controlSprite(player, speed, speed)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (player, item) {
    info.changeScoreBy(1)
    cherriesOnScreen += -1
    item.destroy()
    music.playSound(music.sounds(Sounds.BaDing))
})

game.splash("Cherry Pickr")
game.showLongText("Collect as many cherries as you can in 60 seconds!", DialogLayout.Bottom)
info.startCountdown(60)
info.setScore(0)

mapimage = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 2 2 e 2 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 f f f f f 2 e 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 2 2 f f f f f f f f f f f 2 2 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 2 2 f f f f f f f f 2 e 2 f f f 2 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 2 2 f f f f f f f f f 2 e 2 f f f 2 2 7 7 7 7 
7 7 7 7 7 7 7 7 2 2 f f f f f f f f f f 2 e 2 f f f f 2 2 7 7 7 
7 7 7 7 7 7 7 2 2 f f f f f f f f 2 2 2 2 e 2 f f f f f 2 2 7 7 
7 7 7 7 7 7 7 2 f f f f f f f 2 2 2 7 2 2 e 2 f f f f f f 2 7 7 
7 7 7 7 7 7 2 2 f f f f f f 2 2 7 7 7 7 7 e 2 f f f f f f 2 2 7 
7 7 7 7 7 7 2 f f f f f f 2 2 7 7 7 7 7 7 7 2 2 f f f f f f 2 7 
7 7 7 7 7 7 2 f f f f f f 2 7 7 7 7 7 7 7 7 7 2 f f f f f f 2 7 
7 7 7 7 7 7 2 2 f 2 2 2 2 2 7 7 7 7 7 7 7 7 7 2 2 2 2 f 2 2 2 7 
7 7 7 7 7 7 e e f e e e e 7 7 7 7 7 7 7 7 7 7 e e e e f e e e 7 
7 7 7 7 7 7 2 2 f 2 2 2 2 2 7 7 7 7 7 7 7 7 7 2 2 2 2 f 2 2 2 7 
7 7 7 7 7 7 2 f f f f f f 2 7 7 7 7 7 7 7 7 7 2 f f f f f f 2 7 
7 7 7 7 7 7 2 f f f f f f 2 2 7 7 7 7 7 7 7 2 2 f f f f f f 2 7 
7 7 7 7 7 7 2 2 f f f f f f 2 2 7 7 7 7 7 2 2 f f f f f f 2 2 7 
7 7 7 7 7 7 7 2 f f f f f f f 2 2 2 7 2 2 2 f f f f f f f 2 7 7 
7 7 7 7 7 7 7 2 2 f f f f f f f f 2 e 2 f f f f f f f f 2 2 7 7 
7 7 7 7 7 7 7 7 2 2 f f f f f f f f f f f f f f f f f 2 2 7 7 7 
7 7 7 7 7 7 7 7 7 2 2 f f f f f f 2 e 2 f f f f f f 2 2 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 2 2 f f f f f 2 e 2 f f f f f 2 2 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 2 2 f f f f 2 e 2 f f f f 2 2 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 f f 2 e 2 f f 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 e 2 2 2 2 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`

scene.setTileMap(mapimage)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)

scene.setTile(14, img`
e e e e e d e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
d d d d d d d d d d d d d d d d 
e e e e e e e e e d e e e e e e 
e e e e e e e e e d e e e e e e 
e e e e e e e e e d e e e e e e 
d d d d d d d d d d d d d d d d 
e e e e e d e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
d d d d d d d d d d d d d d d d 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)

scene.setTile(2, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)

player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . 3 3 8 8 8 8 3 3 . . . . . 
. . . 3 3 1 1 1 1 3 3 . . . . . 
. . . 8 8 1 1 1 1 8 8 . . . . . 
. . . 8 8 1 1 1 1 8 8 . . . . . 
. . . 3 3 1 1 1 1 3 3 . . . . . 
. . . 3 3 8 8 8 8 3 3 . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

speed = 100
maxCherries = 5
cherriesOnScreen = 0
controller.controlSprite(player, speed, speed)
player.setPosition(400, 373)

game.onUpdateInterval(10000, function () {
    randomX = Math.randomRange(0, 512)
    randomY = Math.randomRange(0, 512)
    while (mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 14 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 7 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 2) {
        randomX = Math.randomRange(0, 512)
        randomY = Math.randomRange(0, 512)
    }
    badBoost = sprites.create(sprites.food.smallDonut, SpriteKind.badBoost)
    badBoost.setPosition(randomX, randomY)
})

game.onUpdateInterval(10000, function () {
    randomX = Math.randomRange(0, 512)
    randomY = Math.randomRange(0, 512)
    while (mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 14 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 7 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 2) {
        randomX = Math.randomRange(0, 512)
        randomY = Math.randomRange(0, 512)
    }

    boost = sprites.create(img`
. . 8 . . . . . 8 . . . . . . . 
. 8 9 8 . . . 8 9 8 . . . . . . 
. 8 9 9 8 . . 8 9 9 8 . . . . . 
. . 8 9 9 8 . . 8 9 9 8 . . . . 
. . . 8 9 9 8 . . 8 9 9 8 . . . 
. . . . 8 9 9 8 . . 8 9 9 8 . . 
. . . . . 8 9 9 8 . . 8 9 9 8 . 
. . . . . . 8 9 9 8 . . 8 9 9 8 
. . . . . 8 9 9 8 . . 8 9 9 8 . 
. . . . 8 9 9 8 . . 8 9 9 8 . . 
. . . 8 9 9 8 . . 8 9 9 8 . . . 
. . 8 9 9 8 . . 8 9 9 8 . . . . 
. 8 9 9 8 . . 8 9 9 8 . . . . . 
. 8 9 8 . . . 8 9 8 . . . . . . 
. . 8 . . . . . 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.boost)
    boost.setPosition(randomX, randomY)
})

game.onUpdateInterval(1000, function () {
    if (cherriesOnScreen < maxCherries) {
        randomX = Math.randomRange(0, 512)
        randomY = Math.randomRange(0, 512)

        while (mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 14 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 7 || mapimage.getPixel(Math.floor(randomX / 16), Math.floor(randomY / 16)) == 2) {
            randomX = Math.randomRange(0, 512)
            randomY = Math.randomRange(0, 512)
        }

        item = sprites.create(sprites.food.smallCherries, SpriteKind.coin)

        item.setPosition(randomX, randomY)
        cherriesOnScreen += 1
    }
})

game.onUpdate(function () {
    scene.cameraFollowSprite(player)
})
```