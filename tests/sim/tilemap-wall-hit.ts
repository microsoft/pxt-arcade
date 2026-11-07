// @serial: hit wall col 6 row 3 at 88 56
// @serial: stopped at 88 56 vx 0
const columns = 10
const rows = 8
const data = control.createBuffer(4 + columns * rows)
data.setNumber(NumberFormat.UInt16LE, 0, columns)
data.setNumber(NumberFormat.UInt16LE, 2, rows)
tiles.setCurrentTilemap(tiles.createTilemap(data, image.create(columns, rows),
    [image.create(16, 16)], TileScale.Sixteen))
tiles.setWallAt(tiles.getTileLocation(6, 3), true)
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    console.log("hit wall col " + location.column + " row " + location.row + " at "
        + Math.round(sprite.x) + " " + Math.round(sprite.y))
})
const box = image.create(16, 16)
box.fill(1)
const mover = sprites.create(box, SpriteKind.Player)
mover.setPosition(40, 56)
mover.vx = 50
pause(1200)
console.log("stopped at " + Math.round(mover.x) + " " + Math.round(mover.y) + " vx " + mover.vx)
