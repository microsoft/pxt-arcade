# Catch

```blocks
namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const snake = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    falling = sprites.create(img`
        . . 2 2 2 2 . .
        . 2 2 2 2 2 2 .
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2
        . 2 2 2 2 2 2 .
        . . 2 2 2 2 . .
        `, SpriteKind.Projectile)
    falling.setBounceOnWall(true)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, myTiles.tile3)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, myTiles.tile3)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
let limit = 0
let falling: Sprite = null
let s4Dir = 1
info.setLife(3)
let basket = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 1 7 1 7 1 7 1 7 1 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
basket.setPosition(80, 100)
controller.moveSprite(basket, 160, 0)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . .
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . .
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . .
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . .
    . . . 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
tiles.setTilemap(tilemap`level`)
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
            . . 2 2 2 2 . .
            . 2 2 2 2 2 2 .
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2
            . 2 2 2 2 2 2 .
            . . 2 2 2 2 . .
            `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
            . . 8 8 8 8 . .
            . 8 8 8 8 8 8 .
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            8 8 8 8 8 8 8 8
            . 8 8 8 8 8 8 .
            . . 8 8 8 8 . .
            `, SpriteKind.Projectile2)
    }
    falling.setPosition(randint(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.setBounceOnWall(true)
})
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////w==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDIwMjAyMDIwMjAyMDIwMjAxMDEwMjAyMDIwMjAyMDIwMjAyMDEwMTAyMDIwMjAyMDIwMjAyMDIwMTAxMDIwMjAyMDIwMjAyMDIwMjAxMDEwMjAyMDIwMjAyMDIwMjAyMDEwMTAyMDIwMjAyMDIwMjAyMDIwMTAxMDIwMjAyMDIwMjAyMDIwMjAxMDEwMzAzMDMwMzAzMDMwMzAzMDEwMjAwMDAwMDIwMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

## About the author

This project was contributed by Erik Pasternak from the [Blockly](https://developers.google.com/blockly) team.
