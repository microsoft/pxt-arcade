# Level Up!

A game with an example of how to do levels and use the timer.

```blocks
let food: Sprite = null
let player: Sprite = null
let level = 0
let count = 0
function startLevel() {
    scene.setBackgroundColor(randint(3, 7))
    count = 0
    for (let index = 0; index <= 10 + level; index++) {
        food = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
        food.setPosition(randint(20, 140), randint(20, 100))
    }
    player.say("Level " + level, 1000)
    info.startCountdown(10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    otherSprite.startEffect(effects.smiles, 200)
    if (count > 10 + level) {
        level += 1
        music.jumpUp.play()
        startLevel()
    } else {
        music.baDing.play()
    }
})
game.splash("Hurry!", "Eat the cherries!")
level = 1
player = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(player, 70, 70)
startLevel()
```