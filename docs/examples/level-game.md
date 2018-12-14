# Level Up!

A game with an example of how to do levels and use the timer.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Food
}
let food: Sprite = null
let player: Sprite = null
let level = 0
let count = 0
function startLevel() {
    count = 0
    for (let index = 0; index <= 10 + level; index++) {
        food = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
        food.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
    }
    player.say("Level " + level)
    info.startCountdown(10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (count > 10 + level) {
        level += 1
        startLevel()
    }
})
game.splash("Hurry!")
level = 1
player = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(player, 70, 70)
startLevel()

```