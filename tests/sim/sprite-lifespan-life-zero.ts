// @serial: destroyed at 500 ms
// @serial: life zero at 620 ms
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    console.log("destroyed at " + control.millis() + " ms")
})
info.onLifeZero(function () {
    console.log("life zero at " + control.millis() + " ms")
})
const food = sprites.create(image.create(8, 8), SpriteKind.Food)
food.lifespan = 500
pause(610)
info.setLife(1)
info.changeLifeBy(-1)
pause(100)
