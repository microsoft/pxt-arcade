// @serial: overlap at 800 ms
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    console.log("overlap at " + control.millis() + " ms")
    sprites.destroy(otherSprite)
})
const block = image.create(8, 8)
block.fill(1)
const player = sprites.create(block, SpriteKind.Player)
player.setPosition(40, 60)
player.vx = 50
const enemy = sprites.create(block, SpriteKind.Enemy)
enemy.setPosition(127, 60)
enemy.vx = -50
pause(1000)
