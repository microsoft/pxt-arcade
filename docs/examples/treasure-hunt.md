# Treasure Hunt

```typescript
namespace SpriteKind {
    export const Jewel = SpriteKind.create()
    export const Queen = SpriteKind.create()
    export const Wizard = SpriteKind.create()
    export const EndGame = SpriteKind.create()
    export const Potion = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6
        6 6 6 8 8 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6
        6 6 6 8 8 6 6 6 6 6 6 7 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 f f 8 8 8 8 8 8 8 8 8 f f
        f f 8 f f 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f
    `
    //% blockIdentity=images._tile
    export const tile5 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . d d d d d
        . . . . . . . . . . . d . . . d
        . . . . . . . . . . . d . . . d
        e d e d e d e d d e e d . . . d
        d d d d d d d d d d d d . . . d
        d . d . d . d . . . . d . . . d
        d . d . d . d . . . . d . . . d
        d . d . d . d . . . . d d d d d
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Wizard, function (sprite, otherSprite) {
    if (haspotion) {
        music.playSound(music.sounds(Sounds.PowerUp))
        wizard.say("The password is: 42")
        pause(5000)
        wizard.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    music.playSound(music.sounds(Sounds.PowerUp))
    tiles.setTileAt(location, sprites.castle.tileDarkGrass1)
    canopendoor = true
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (canopendoor) {
        music.playSound(music.sounds(Sounds.PowerUp))
        tiles.setTileAt(location, sprites.castle.tileDarkGrass1)
    } else {
        mySprite.y += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.playSound(music.sounds(Sounds.PowerUp))
    tiles.setTileAt(location, sprites.castle.tileDarkGrass1)
    gifttoqueen = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Queen, function (sprite, otherSprite) {
    if (gifttoqueen) {
        music.playSound(music.sounds(Sounds.PowerUp))
        queen.destroy()
        potion = sprites.create(img`
            . . . . . . . . . . . . . . 2 2
            . . . . . . . 2 2 2 . 2 2 . 2 2
            . . . . . . . 2 2 2 . 2 2 . . .
            . . . . . . . 2 9 . . . . . . .
            . . . . . . 2 9 9 . . . . . . .
            . . . . . . 2 9 9 . . . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . 9 9 9 9 9 9 9 9 9 . . . .
            . . 9 9 f f 9 9 9 9 9 9 9 9 . .
            . . 9 f f 9 9 9 9 9 9 9 9 9 9 .
            . 9 9 f 9 9 9 9 9 9 9 9 9 9 9 .
            . 9 9 f 9 9 9 9 9 9 9 9 9 9 9 .
            . . 9 f f 9 9 9 9 9 9 9 9 9 9 .
            . . 9 9 f f 9 9 9 9 9 9 9 9 . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . . 9 9 9 9 9 9 9 9 . . . .
        `, SpriteKind.Potion)
        potion.x = 180
        potion.y = 30
        potion.setFlag(SpriteFlag.Ghost, true)
        haspotion = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EndGame, function (sprite, otherSprite) {
    music.playSound(music.sounds(Sounds.PowerUp))
    if (parseInt(game.askForString("")) == 42) {
        game.splash("Congratulations! You Win!!!")
        game.over(true)
    } else {
        pause(500)
    }
})
/**
 * Find the code to End the Game!
 *
 * The Wizard knows the answer in return for a magic potion which the Queen has.
 *
 * But the Queen demands a gift!
 */
let potion: Sprite = null
let wizard: Sprite = null
let queen: Sprite = null
let haspotion = false
let gifttoqueen = false
let canopendoor = false
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003050505010505050505050501050501050505050101010505050701010505010101010505050101050101010505010105050105050505050505050505050105050501010105010105010101050501050505050501050105050505010505010505050505010501050505050105050505050101010105010505050501050501050505050505050105050a05010505010509010101010501050504050105050105050505050105010105050101050501050505050501050505050505050505050505050505010505050505050101010105050505050105050505050501050505050505050501050505050505010505050505050505010505050505050105050505`,
            img`
                . . . . 2 . . . . . . . 2 . . 2
                . . . . 2 2 2 . . . . 2 2 . . 2
                2 2 2 . . . 2 2 . 2 2 2 . . 2 2
                . . 2 . . . . . . . . . . . 2 .
                . . 2 2 2 . 2 2 . 2 2 2 . . 2 .
                . . . . 2 . 2 . . . . 2 . . 2 .
                . . . . 2 . 2 . . . . 2 . . . .
                . 2 2 2 2 . 2 . . . . 2 . . 2 .
                . . . . . . 2 . . . . 2 . . 2 .
                . 2 2 2 2 . 2 . . . . 2 . . 2 .
                . . . . 2 . 2 2 . . 2 2 . . 2 .
                . . . . 2 . . . . . . . . . . .
                . . . . 2 . . . . . . 2 2 2 2 .
                . . . . 2 . . . . . . 2 . . . .
                . . . . 2 . . . . . . 2 . . . .
                . . . . 2 . . . . . . 2 . . . .
            `,
            [myTiles.tile0,sprites.castle.rock1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . b b b b b b b b . . . .
    . . . b d d d d d d b b . . .
    . . . b d d 7 d 7 d d b . . .
    . . b b d d d d d d d b b . .
    . . b . d a d d d a d . b . .
    b b b . d d a a a d d . b b b
    . . . . d d d d d d d . . . .
    . . . . . . 2 2 2 . . . . . .
    . . 4 . . . 2 2 2 . . . 4 . .
    4 4 4 4 4 4 2 2 2 4 4 4 4 4 4
    . 4 4 . . . 2 2 2 . . . 4 4 .
    . . . . . 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 4 . . .
    . . . 4 2 2 2 2 2 2 2 4 . . .
    . . . 4 . . . . . . . 4 . . .
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
canopendoor = false
gifttoqueen = false
haspotion = false
queen = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . a . e . 6 . e . c . . . .
    . . . e . 4 . e . 5 . e . . . .
    . . . e e e e e e e e e . . . .
    . . . . 8 8 8 8 8 8 8 8 . . . .
    . . . 8 8 d d d d d d 8 . . . .
    . . . 8 d 4 d d d 4 d 8 . . . .
    . . . 8 d d d d d d d 8 . . . .
    . . . 8 d b b d b b d 8 . . . .
    . . . 8 d d b b b d 8 8 . . . .
    . . . 8 . d d d d d 8 . . . . .
    . 8 8 8 . . 5 5 5 . 8 8 . . . .
    . 8 . . . . 5 5 5 . . 8 8 8 . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
`, SpriteKind.Queen)
tiles.placeOnRandomTile(queen, myTiles.tile2)
wizard = sprites.create(img`
    . . . . . 4 4 . . . . . . . . .
    . . . . 4 4 4 . . . . . . . . .
    . . 4 4 4 4 4 4 4 4 . . . . . .
    4 4 4 4 4 4 4 4 4 4 . . . . . .
    . . . d d d d . . . . . . . . .
    e e . d f d d . . . . . . . . .
    a e . d d d d . . . . . . . . .
    a e . 9 9 d d . . . . . . . . .
    8 . . . 4 4 . . . . . . . . . .
    8 4 . . 4 4 4 . . . . . . . . .
    8 4 4 . 4 4 4 4 . . . . . . . .
    8 . 4 4 4 4 4 4 4 . . . . . . .
    . . . . . 4 4 4 4 4 4 . . . . .
    . . . . . 4 4 4 4 4 4 4 4 . . .
    . . . . . . 4 4 4 4 4 4 4 4 . .
    . . . . . . 4 4 4 4 4 4 4 4 . .
`, SpriteKind.Wizard)
wizard.x = 210
wizard.y = 230
let EndGame2 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . 2 2 . . . . 2 . . 2 2 . . .
    . . . 2 2 . . . 2 . 2 2 . . . .
    . . . . 2 2 2 . 2 2 2 . . . . .
    . . . . . . 2 2 2 2 2 2 2 2 . .
    . . 2 2 2 2 2 2 2 2 . . . 2 . .
    . . 2 . . . . 2 e . . . . 2 . .
    . . . . . . e e e e . . . . . .
    . . . . . . e e e e e . . . . .
    . . . . e e e e e e e e . . . .
    . . . e e e e e e e e e . . . .
    . . . e e e e e d e e e e . . .
    . . e e e e e d d d e e e e . .
    . e e e e e d d d d d e e e e .
    . e e e e d d d a d d d e e e .
    e e e e d d d a a a d d d e e e
`, SpriteKind.EndGame)
EndGame2.x = 140
EndGame2.y = 240
controller.moveSprite(mySprite)
game.onUpdate(function () {
    scene.cameraFollowSprite(mySprite)
    if (potion) {
        potion.left = mySprite.right
        potion.bottom = mySprite.bottom
    }
})
```