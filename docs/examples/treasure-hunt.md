# Treasure Hunt

```typescript
let answer = ""
let EndGame: Sprite = null
let wizard: Sprite = null
let queen: Sprite = null
let jewel: Sprite = null
let door: Sprite = null
let haspotion = false
let gifttoqueen = false
let canopendoor = false
let key: Sprite = null
let potion: Sprite = null
let sprite: Sprite = null
/**
 * Find the code to End the Game!
 * 
 * The Wizard knows the answer in return for a magic potion which the Queen has.
 * 
 * But the Queen demands a gift!
 */
scene.setTileMap(img`
. . . . f . . . . . . . f . . f 
. . . . f f f . . . . f f . . f 
f f f . . . f f . f f f . . f f 
. . f . . . . . . . . . . . f . 
. . f f f . f f . f f f . . f . 
. . . . f . f . . . . f . . f . 
. . . . f . f . . . . f . . . . 
. f f f f . f . . . . f . . f . 
. . . . . . f . . . . f . . f . 
8 f f f f . f . . . . f . . f . 
. . . . f . f f . f f f . . f . 
. . . . f . . . . . . . . . . . 
. . . . f . . . . . . f f f f . 
. . . . f . . . . . . f . . . . 
. . . . f . . . . . . f . . . . 
. . . . f . . . . . . f . . . . 
`)
scene.setTile(15, img`
f f f f f f f 1 f f f f f 1 f f 
f f 1 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 1 f f f f 1 f 1 f f 1 f f f f 
f f f f f f 1 f f f f f 1 f f f 
1 1 f f 1 f 1 f f f f f f f f f 
f f f 1 f f f 1 f f f f f f f f 
f 1 f f f f f f 1 1 1 f f f 1 f 
f f 1 f f f f f f f f f f f 1 1 
f f f 1 f f f f f f f f f f 1 f 
f f f f f f f f f f f 1 f f f f 
f 1 f f f f f f f 1 f f f f f f 
f 1 f f f f f 1 1 1 f f f 1 1 1 
1 1 f f 1 1 f f f f 1 f f f f f 
f f f f f f f f f f 1 f f f f f 
`, true)
scene.setTile(0, img`
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
`, false)
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . b b b b b b b b . . . . . 
. . . b d d d d d d b b . . . . 
. . . b d d 7 d 7 d d b . . . . 
. . b b d d d d d d d b b . . . 
. . b . d a d d d a d . b . . . 
b b b . d d a a a d d . b b b . 
. . . . d d d d d d d . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . 8 . . . 6 6 6 . . . 8 . . . 
8 8 8 8 8 8 6 6 6 8 8 8 8 8 8 . 
. 8 8 . . . 6 6 6 . . . 8 8 . . 
. . . . . 6 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 8 . . . . 
. . . 8 6 6 6 6 6 6 6 8 . . . . 
. . . 8 . . . . . . . 8 . . . . 
`)
sprite.x = 10
sprite.y = 10
key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d 
. . . . . . . . . . . d . . . d 
d d d d d d d d d d d d . . . d 
d d d d d d d d d d d d . . . d 
d . d . d . d . . . . d . . . d 
d . d . d . d . . . . d d d d d 
d . d . d . d . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
key.x = 150
key.y = 150
canopendoor = false
gifttoqueen = false
haspotion = false
door = sprites.create(img`
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 f f 8 8 8 8 8 8 8 8 8 f f 
f f 8 f f 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
`)
door.x = 10
door.y = 150
jewel = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b 
. b b b b 1 b b b 1 1 1 1 b b . 
. b b b b b b 1 b 1 b b b b . . 
. . b b b b b b b b b b b . . . 
. . b b b b b b b b b b b . . . 
. . . b b b b b b b b b . . . . 
. . . b b b b b b b b b . . . . 
. . . . b b b b b b b . . . . . 
. . . . . b b b b b b . . . . . 
. . . . . . b b b b . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . . b . . . . . . . . 
`)
jewel.x = 30
jewel.y = 200
queen = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . a . e . 6 . e . c . . . . 
. . . e . 4 . e . 5 . e . . . . 
. . . e e e e e e e e e . . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . 8 8 d d d d d d 8 . . . . 
. . . 8 d 4 d d d 4 d 8 . . . . 
. . . 8 d d d d d d d 8 . . . . 
. . . 8 d b b d b b d 8 . . . . 
. . . 8 d d b b b d 8 8 . . . . 
. . . 8 . d d d d d 8 . . . . . 
. 8 8 8 . . 5 5 5 . 8 8 . . . . 
. 8 . . . . 5 5 5 . . 8 8 8 . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
`)
queen.x = 180
queen.y = 30
wizard = sprites.create(img`
. . . . . 4 4 . . . . . . . . . 
. . . . 4 4 4 . . . . . . . . . 
. . 4 4 4 4 4 4 4 4 . . . . . . 
4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . d d d d . . . . . . . . . 
e e . d f d d . . . . . . . . . 
a e . d d d d . . . . . . . . . 
a e . 9 9 d d . . . . . . . . . 
8 . . . 4 4 . . . . . . . . . . 
8 4 . . 4 4 4 . . . . . . . . . 
8 4 4 . 4 4 4 4 . . . . . . . . 
8 . 4 4 4 4 4 4 4 . . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 . . . 
. . . . . . 4 4 4 4 4 4 4 4 . . 
. . . . . . 4 4 4 4 4 4 4 4 . . 
`)
wizard.x = 210
wizard.y = 230
EndGame = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . 2 . . 2 2 . . . 
. . . 2 2 . . . 2 . 2 2 . . . . 
. . . . 2 2 2 . 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 . . . 2 . . 
. . 2 . . . . 2 e . . . . 2 . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e e . . . . . 
. . . . e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e d e e e e . . . 
. . e e e e e d d d e e e e . . 
. e e e e e d d d d d e e e e . 
. e e e e d d d a d d d e e e . 
e e e e d d d a a a d d d e e e 
`)
EndGame.x = 140
EndGame.y = 240
sprite.onOverlap(function (other) {
    if (other == key) {
        music.playSound(music.sounds(Sounds.PowerUp))
        key.destroy()
        canopendoor = true
    }
    if (other == door) {
        if (canopendoor) {
            music.playSound(music.sounds(Sounds.PowerUp))
            door.destroy()
        }
    }
    if (other == jewel) {
        music.playSound(music.sounds(Sounds.PowerUp))
        jewel.destroy()
        gifttoqueen = true
    }
    if (other == queen) {
        if (gifttoqueen) {
            music.playSound(music.sounds(Sounds.PowerUp))
            queen.destroy()
            potion = sprites.create(img`
. . . . . . . . . . . . . . 2 2 
. . . . . . . 2 2 2 . 2 2 . 2 2 
. . . . . . . 2 2 2 . 2 2 . . . 
. . . . . . . 2 9 . . . . . . . 
. . . . . . 2 9 9 . . . . . . . 
. . . . . . 2 9 9 . . . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . 9 9 9 9 9 9 9 9 9 . . . . 
. . 9 9 f f 9 9 9 9 9 9 9 9 . . 
. . 9 f f 9 9 9 9 9 9 9 9 9 9 . 
. 9 9 f 9 9 9 9 9 9 9 9 9 9 9 . 
. 9 9 f 9 9 9 9 9 9 9 9 9 9 9 . 
. . 9 f f 9 9 9 9 9 9 9 9 9 9 . 
. . 9 9 f f 9 9 9 9 9 9 9 9 . . 
. . . 9 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 9 9 9 9 9 . . . . 
`)
            potion.x = 180
            potion.y = 30
            potion.setFlag(SpriteFlag.Ghost, true)
            haspotion = true
        }
    }
    if (other == wizard && haspotion) {
        music.playSound(music.sounds(Sounds.PowerUp))
        wizard.say("42")
        wizard.destroy()
    }
    if (other == EndGame) {
        music.playSound(music.sounds(Sounds.PowerUp))
        answer = game.askForString("")
        if (parseInt(answer) == 42) {
            game.splash("Congratulations! You Win!!!")
            control.reset()
        }
    }
})
game.onUpdate(function () {
    sprite.x += controller.dx()
    sprite.y += controller.dy()
    scene.cameraFollowSprite(sprite)
    if (potion) {
        potion.left = sprite.right
        potion.bottom = sprite.bottom
    }
})
```