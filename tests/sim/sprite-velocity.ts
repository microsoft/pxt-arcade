// @serial: 60 75
const mover = sprites.create(image.create(16, 16), SpriteKind.Player)
mover.setPosition(10, 100)
mover.vx = 50
mover.vy = -25
pause(1010)
console.log(Math.round(mover.x) + " " + Math.round(mover.y))
