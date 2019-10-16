# Double collisions

When you move ``||variables:mySprite||`` down into the wall,
it should exclaim both kinds of walls it hits -
by running both ``||scene:on hit tile||`` events.

https://github.com/microsoft/pxt-common-packages/pull/920

```blocks
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    game.showLongText("white", DialogLayout.Left)
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.showLongText("green", DialogLayout.Right)
})
let mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . .
    . . 5 . . . . . . . . . . 5 . .
    . 5 . . . . . . . . . . . . 5 .
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . 5 . . . . . . 5 . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . 5 . . . . . . 5 . . . 5
    5 . . . . 5 . . . . 5 . . . . 5
    5 . . . . . 5 5 5 5 . . . . . 5
    5 . . . . . . . . . . . . . . 5
    . 5 . . . . . . . . . . . . 5 .
    . . 5 . . . . . . . . . . 5 . .
    . . . 5 5 5 5 5 5 5 5 5 5 . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
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
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    1 1 1 1 1 7 7 7 7 7
    1 1 1 1 1 7 7 7 7 7
`)

```