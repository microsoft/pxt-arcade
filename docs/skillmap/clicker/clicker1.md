# Basic Clicker


``` ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-20)
    power2 += 1
    game.showLongText("You bought one extra click!", DialogLayout.Top)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        .........bbbbb..................
        ........bb111bb.................
        .......b1111111b................
        ......bb1111111bb....bbb........
        ...bbbbd11111111bbbbbb1bb.......
        ..bb111dd111111111111111b.......
        .bb111111111111111111111b.......
        .b1111111111111111d11111bb......
        bb111111111111111d1111111bb.....
        b111111111111111d111111111bb....
        bb111111111111111d111111111bb...
        .bbb11ddd111111111d11111111bb...
        ...bbbbbd1111111111bbb11bbbb....
        .......bb11111111bbb.bbbb.......
        ........bbb11111bb..............
        ..........bbbbbbb...............
        `, SpriteKind.Player)
    mySprite.startEffect(effects.spray)
    info.changeScoreBy(power2)
})
    game.over(true, effects.confetti)

let mySprite: Sprite = null
let power2 = 0
scene.setBackgroundColor(11)
power2 = 1
game.splash("Press (A) to earn clicks!")


```

## Introduction @unplugged

Let's make a clicker game!

![Click away](/static/skillmaps/clicker/clicker-activity-1.gif "Click and buy bigger clickers" )


## Step 1
This crazy game tests your finger speed as you click your 
way to the championships!  🏆🏆🏆

Let's set-up the scoreboard.

---

🔲 


```blocks

```



[__*increment*__](#addOne "add to a number (usually adding 1)") 
the score when the A-button is clicked.