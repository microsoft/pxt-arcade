# Sorting Algorithms

```blocks
namespace SpriteKind {
    export const glyph = SpriteKind.create();
    export const UI = SpriteKind.create();
}
let CursorAt = 0
let CursorSprite: Sprite = null
let y = 0
let CurrentIndex = 0
let spriteList: Sprite[] = []
let CodeSequence: number[] = []
let curY = 0
let PlayerTurn = false
let curX = 0
let x = 0
let SoundList: number[] = []
let imageList: Image[] = []
let mySprite: Sprite = null
let value = 0
let index = 0
function InitUI() {
    mySprite = sprites.create(imageList[0], SpriteKind.UI)
    mySprite.setPosition(60, 90)
    mySprite = sprites.create(imageList[1], SpriteKind.UI)
    mySprite.setPosition(80, 90)
    mySprite = sprites.create(imageList[2], SpriteKind.UI)
    mySprite.setPosition(100, 90)
    mySprite = sprites.create(imageList[3], SpriteKind.UI)
    mySprite.setPosition(60, 108)
    mySprite = sprites.create(imageList[4], SpriteKind.UI)
    mySprite.setPosition(80, 108)
    mySprite = sprites.create(imageList[5], SpriteKind.UI)
    mySprite.setPosition(100, 108)
    CursorSprite = sprites.create(img`
1 1 1 1 1 . . . . . . 1 1 1 1 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 . . . . . . . . . . . . . . 1
1 1 1 1 1 . . . . . . 1 1 1 1 1
`, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
    curX = 0
    curY = 0
}
function InitImages() {
    imageList = [img`
. . . . . . . . . . b 5 b . . .
. . . . . . . . . b 5 b . . . .
. . . . . . . . . b c . . . . .
. . . . . . b b b b b b . . . .
. . . . . b b 5 5 5 5 5 b . . .
. . . . b b 5 d 1 f 5 5 d f . .
. . . . b 5 5 1 f f 5 d 4 c . .
. . . . b 5 5 d f b d d 4 4 . .
b d d d b b d 5 5 5 4 4 4 4 4 b
b b d 5 5 5 b 5 5 4 4 4 4 4 b .
b d c 5 5 5 5 d 5 5 5 5 5 b . .
c d d c d 5 5 b 5 5 5 5 5 5 b .
c b d d c c b 5 5 5 5 5 5 5 b .
. c d d d d d d 5 5 5 5 5 d b .
. . c b d d d d d 5 5 5 b b . .
. . . c c c c c c c c b b . . .
`, img`
. . . . c c c b b b b b . . . .
. . c c b 4 4 4 4 4 4 b b b . .
. c c 4 4 4 4 4 5 4 4 4 4 b c .
. e 4 4 4 4 4 4 4 4 4 5 4 4 e .
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
e b b 4 4 4 4 4 4 4 4 4 4 4 b e
. e b 4 4 4 4 4 5 4 4 4 4 b e .
8 7 e e b 4 4 4 4 4 4 b e e 6 8
8 7 2 e e e e e e e e e e 2 7 8
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
e c 6 7 6 6 7 7 7 6 6 7 6 c c e
e b e 8 8 c c 8 8 c c c 8 e b e
e e b e c c e e e e e c e b e e
. e e b b 4 4 4 4 4 4 4 4 e e .
. . . c c c c c e e e e e . . .
`, img`
. . . . . . . e c 7 . . . . . .
. . . . e e e c 7 7 e e . . . .
. . c e e e e c 7 e 2 2 e e . .
. c e e e e e c 6 e e 2 2 2 e .
. c e e e 2 e c c 2 4 5 4 2 e .
c e e e 2 2 2 2 2 2 4 5 5 2 2 e
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
. e e e 2 2 2 2 2 2 2 2 2 4 e .
. 2 e e 2 2 2 2 2 2 2 2 4 2 e .
. . 2 e e 2 2 2 2 2 4 4 2 e . .
. . . 2 2 e e 4 4 4 2 e e . . .
. . . . . 2 2 e e e e . . . . .
`, img`
. . . . . . . . . . b b b . . .
. . . . . . . . b e e 3 3 b . .
. . . . . . b b e 3 2 e 3 a . .
. . . . b b 3 3 e 2 2 e 3 3 a .
. . b b 3 3 3 3 3 e e 3 3 3 a .
b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
b 3 3 3 d d d d 3 3 3 3 3 d d a
b b b b b b b 3 d d d d d d 3 a
b d 5 5 5 5 d b b b a a a a a a
b 3 d d 5 5 5 5 5 5 5 d d d d a
b 3 3 3 3 3 3 d 5 5 5 d d d d a
b 3 d 5 5 5 3 3 3 3 3 3 b b b a
b b b 3 d 5 5 5 5 5 5 5 d d b a
. . . b b b 3 d 5 5 5 5 d d 3 a
. . . . . . b b b b 3 d d d b a
. . . . . . . . . . b b b a a .
`, img`
. . . . . 3 3 b 3 3 d d 3 3 . .
. . . . 3 1 1 d 3 d 1 1 1 1 3 .
. . . 3 d 1 1 1 d 1 1 1 d 3 1 3
. . 3 d d 1 1 1 d d 1 1 1 3 3 3
. 3 1 1 d 1 1 1 1 d d 1 1 b . .
. 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
. b d 1 1 1 d 1 1 1 1 1 1 1 3 .
. 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
. 4 4 d 1 1 1 1 1 1 d d d b b .
. 4 d b d 1 1 1 1 1 1 1 1 3 . .
4 d d 5 b d 1 1 1 1 1 1 1 3 . .
4 5 d 5 5 b b d 1 1 1 1 d 3 . .
4 5 5 d 5 5 d b b b d d 3 . . .
4 5 5 5 d d d d 4 4 b 3 . . . .
. 4 5 5 5 4 4 4 . . . . . . . .
. . 4 4 4 . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . 6 6 6 6 6 6 6 6 . .
. . . . . 6 c 6 6 6 6 6 6 9 6 .
. . . . 6 c c 6 6 6 6 6 6 9 c 6
. . d 6 9 c c 6 9 9 9 9 9 9 c c
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c
. 6 6 6 9 b 8 8 b b b 8 b b 8 6
. 6 6 6 6 6 8 b b b b 8 b b b 8
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8
. 8 8 8 8 f f f 8 8 8 8 f f f f
. . . 8 f f f f f 8 8 f f f f f
. . . . f f f f . . . . f f f .
. . . . . . . . . . . . . . . .
`]
}
function InitSounds2() {
    SoundList = [165, 175, 196, 220, 247, 262]
}
function AddToSequence() {
    CodeSequence.push(randint(0, 5))
}
function PlaySequence() {
    for (let index = 0; index <= CodeSequence.length - 1; index++) {
        CurrentIndex = index
        AddToSpriteList()
        pause(200)
    }
    pause(600)
    for (let value of spriteList) {
        value.destroy()
    }
    CurrentIndex = 0
    PlayerTurn = true
}
function InitSequence() {
    for (let index = 0; index <= 2; index++) {
        AddToSequence()
    }
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
function AddToSpriteList() {
    x = CurrentIndex % 9 * 17
    y = Math.floor(CurrentIndex / 9) * 17
    mySprite = sprites.create(imageList[CodeSequence[CurrentIndex]], SpriteKind.glyph)
    spriteList[CurrentIndex] = mySprite
    mySprite.left = x + 5
    mySprite.top = y + 20
    music.playTone(SoundList[CodeSequence[CurrentIndex]], music.beat(BeatFraction.Half))
}
function UpdateCurPos() {
    CursorSprite.x = 60 + 20 * curX
    CursorSprite.y = 90 + 18 * curY
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCurPos()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerTurn == true) {
        CursorAt = curX + curY * 3
        if (CursorAt == CodeSequence[CurrentIndex]) {
            AddToSpriteList()
            info.changeScoreBy(1)
            CurrentIndex += 1
            if (CurrentIndex == CodeSequence.length) {
                NextLevel()
            }
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.min(2, curX + 1)
    UpdateCurPos()
})
function NextLevel() {
    PlayerTurn = false
    pause(500)
    for (let value of spriteList) {
        value.destroy()
    }
    AddToSequence()
    PlaySequence()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCurPos()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.min(1, curX + 1)
    UpdateCurPos()
})
game.showLongText("Memorize the sequence and replay it", DialogLayout.Bottom)
spriteList = sprites.allOfKind(SpriteKind.glyph)
info.setScore(0)
info.setLife(3)
InitImages()
InitSounds2()
InitUI()
InitSequence()
PlaySequence()
```
