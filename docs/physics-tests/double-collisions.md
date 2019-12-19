# Double collisions

When you move ``||variables:mySprite||`` down to the floor (wall tiles),
it should show messages for both kinds of wall tiles it hits -
it will run both ``||scene:on hit tile||`` events.

**Feature tested**: Multi-tile collision detection from [pxt-common-packages#920](https://github.com/microsoft/pxt-common-packages/pull/920).

```sim
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

```package
color-coded-tilemap
```