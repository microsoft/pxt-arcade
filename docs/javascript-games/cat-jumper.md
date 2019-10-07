# Cat Jumper

Make the cat leap to each level and collect all the coins!

```typescript
namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const bee = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -180
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . f f . f f .
        . f 1 1 f 1 1 .
        . . f f f f . .
        . f 5 5 f 5 f .
        . f f 5 f 5 f .
        . f 5 5 f 5 f .
        . . f f f f . .
        . . . . . . . .
    `, SpriteKind.bee)
    bee_x = cat.x + 80
    bee_y = Math.max(cat.y - 60, 0)
    bee.setPosition(bee_x, bee_y)
    animation.runImageAnimation(
    bee,
    [img`
        . . f f . f f .
        . f 1 1 f 1 1 .
        . . f f f f . .
        . f 5 5 f 5 f .
        . f f 5 f 5 f .
        . f 5 5 f 5 f .
        . . f f f f . .
        . . . . . . . .
   `, img`
        . . . . . . . .
        . . . . . . . .
        . . f f f f . .
        . f 5 5 f 5 f .
        . f f 5 f 5 f .
        . f 5 5 f 5 f .
        . . f f f f . .
        . . . . . . . .
    `],
    70,
    true
    )
    bee.follow(cat)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bee, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite.bottom < otherSprite.bottom) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee_y = 0
let bee_x = 0
let bee: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let cat: Sprite = null
scene.setBackgroundColor(9)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . f . . . . . . . . . . . .
    . . f f . . . . . . . . . . . .
    . f f . . . . . . . . . . . . .
    f f . . . . . . . . . . . . . .
    f f . . . . . . . . . f . . . .
    . f . . . . . . . . . f f f . .
    . . f . f f f f f f f f 5 f . .
    . . f f f f f f f f f f f f f .
    . . f f f f f f f f f . . . . .
    . . f . f . . f . f . . . . . .
    . . f . f . . f . f . . . . . .
    . . f . f . . f . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(cat, 80, 0)
scene.setTileMap(img`
    . . . . . . . . . . . . . 4 4 5 5 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . 7 7 7 7 . . . . . 5 . . . . . . . . .
    . . . . . . 5 4 . . . . . . . . . . . 4 . . 7 7 . . . . . . . .
    . . . . . . 7 7 7 7 . . . . . . . . 7 7 . . . . . 5 4 . . . . .
    . . . . . . . . . . . . . . . 5 . . . . . . . . . 7 7 . . . . 2
    7 7 7 7 7 . . . . . . . 7 7 . 7 7 . . . . . . . . . . . . 7 7 7
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`)
scene.setTile(7, img`
    7 7 7 5 7 7 7 7 7 7 5 7 7 7 7 7
    7 7 7 7 e 7 e 7 7 7 7 7 7 e 7 7
    7 7 e e e 7 7 e e 7 7 e e e 7 e
    7 e e 7 e 7 e e e e 7 e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e 7 e e e e 7 e e
    e 7 e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e b e e e e e e e e
    e e e e e e e e e e e e b e e e
    e e b e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e c c e e e c . c c c c c e e
    . . . c e e c . . . e c c . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(2, img`
    . . . . . . 5 5 5 5 . . . . . .
    . . . . . 5 5 3 3 3 5 . . . . .
    . . . . 5 3 3 b b 3 5 . . . . .
    . . . . 5 3 b b b b 3 5 . . . .
    . . . 5 3 b b c c b 3 5 . . . .
    . . . 5 3 b c c c b 3 5 . . . .
    . . 5 3 3 c c f c b 3 5 . . . .
    . . 5 3 b c f f c b 3 5 . . . .
    . . 5 3 b c c f c c 3 5 . . . .
    . . 5 3 b b c f f c 3 5 . . . .
    . . 5 3 3 b c c c c 3 5 . . . .
    . . 5 3 3 b b c c b 3 5 . . . .
    . . 5 5 3 b b c b b 3 5 . . . .
    . . . 5 3 3 b b b 3 3 5 . . . .
    . . . 5 5 3 3 3 3 3 5 . . . . .
    . . . . . . 5 5 5 5 . . . . . .
`, true)
scene.setTile(4, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, false)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, false)
cat.ay = 350
scene.cameraFollowSprite(cat)
for (let value of scene.getTilesByType(4)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . f 5 5 5 5 f . . . . .
        . . . . f 5 4 4 4 4 5 f . . . .
        . . . . f 5 4 5 5 5 5 f . . . .
        . . . . f 5 4 5 5 5 5 f . . . .
        . . . . f 5 4 5 5 4 5 f . . . .
        . . . . . f 5 5 5 5 f . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.coin)
    value.place(coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . f 5 5 5 5 f . . . . .
        . . . . f 5 4 4 4 4 5 f . . . .
        . . . . f 5 4 5 5 5 5 f . . . .
        . . . . f 5 4 5 5 5 5 f . . . .
        . . . . f 5 4 5 5 4 5 f . . . .
        . . . . . f 5 5 5 5 f . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . f 5 4 4 5 f . . . . .
        . . . . . f 5 4 5 5 f . . . . .
        . . . . . f 5 4 5 5 f . . . . .
        . . . . . f 5 4 4 5 f . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . f 5 4 4 5 f . . . . .
        . . . . . f 5 4 5 5 f . . . . .
        . . . . . f 5 4 5 5 f . . . . .
        . . . . . f 5 4 4 5 f . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . . f f . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `],
    100,
    true
    )
    animation.runMovementAnimation(
    coin,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
}
for (let value of scene.getTilesByType(5)) {
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 7 7 7 8 2 5 2 8 7 7 . . . .
        . . 6 6 7 7 2 2 2 . 7 7 . . . .
        . . . . 6 7 7 2 7 7 7 6 . . . .
        . . . . . 6 6 7 6 6 6 . . . . .
        . . . . . . . 7 . . . . . . . .
    `, SpriteKind.flower)
    value.place(flower)
}
game.onUpdate(function () {
    if (cat.y >= scene.screenHeight()) {
        game.over(false)
    }
})
game.onUpdate(function () {
    if (cat.vy > 0) {
        cat.setImage(img`
            f . . . . . . . . . . . . . . .
            f . . . . . . . . . . . . . . .
            f . . . . . . . . . . . . . . .
            f f . . . . . . . . . . . . . .
            . f . . . . . . . . . . . . . .
            . f f . . . . . . . . . . . . .
            . . f f . . . . . . . . . . . .
            . . . f f f . . . . . . . . . .
            . . . f f f f f f . . . f . . .
            . . . f f f f f f f f f f f f .
            . . . f . f 1 1 f f f f f 5 f .
            . . . f . f 1 1 f . f f f f f f
            . . . f . f . . f . f . . . . .
            . . . f . f . . f . f . . . . .
            . . . f . f . . f f f f . . . .
            . . . . . . . . . f . f . . . .
        `)
    } else if (cat.vy < 0) {
        cat.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . f . . .
            . . . . . . . . . . . . f f f .
            . . . . . . . . . . . f f 5 f .
            . . . . . . . . . . . f f f f f
            . . . . . . . . . . f f f . . .
            . . . . . . . . f f f f f f f .
            . . . . . . f f f f f 1 f f f f
            . . f f f f f f f 1 1 . . . . .
            . f f . f f f f f 1 . . . . . .
            f . . . f f . f . . . . . . . .
            . . . f f . . f . . . . . . . .
            . . . f . . f . . . . . . . . .
        `)
    } else {
        if (0 == cat.x % 2) {
            cat.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . f . . .
                f . . . . . . . . . . . f f f .
                f f f f f f f f f f f f f 5 f .
                . . . f f f f f f f f f f f f f
                . . . f f f 1 1 f f f f . . . .
                . . . f f . . . . f f . . . . .
                . . . f f . . . . f f . . . . .
                . . . f f . . . . f f . . . . .
            `)
        } else {
            cat.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                f . . . . . . . . . . . f . . .
                f . . . . . . . . . . . f f f .
                f f f f f f f f f f f f f 5 f .
                . . . f f f f f f f f f f f f f
                . . . f f f 1 1 f f f f . . . .
                . . . f . f . . f . f . . . . .
                . . . f . f . . f . f . . . . .
                . . . f . f . . f . f . . . . .
            `)
        }
    }
    if (cat.vx < 0) {
        cat.image.flipX()
    }
})
```

```package
animation
```