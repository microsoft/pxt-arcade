# Clicker Game

### @autoexpandOff true


``` ghost

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

info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
    game.over(true, effects.confetti)

let mySprite: Sprite = null
let power2 = 0
scene.setBackgroundColor(11)
power2 = 1
game.splash("Press (A) to earn clicks!")
info.startCountdown(10)

```

## Introduction @unplugged

Let's make a clicker game!

![Click away](/static/skillmap/clicker/clicker-activity-1.gif "Click and buy bigger clickers" )


## Step 1
This crazy game tests your finger speed as you click your 
way to the championships!  🏆🏆🏆

Let's start building the scoreboard by adding a background color.

---

🔲 Choose a background color by opening the ``||scene:Scene||`` category and dragging 
the ``||scene: set background color to [ ]||`` block into the **on start** 
container that's already in the workspace.

🔲 Click the grey box to choose your own color.  
*(Note: The grey represents empty, so if you leave the box grey, 
your background will continue to look like the empty void of space.)*  


```blocks
//@highlight
scene.setBackgroundColor(11)

```

## Step 2
Add a splash screen to let the user know to press the 
Ⓐ button when they're ready to start playing.

---

🔲 Open the ``||game:Game||`` category and 
drag the ``||game: splash [" "]||`` block into the bottom of the **on start** 
container.

🔲 Click inside the empty text area of the new block and type your instruction.  


```blocks
scene.setBackgroundColor(11)
//@highlight
game.splash("Press (A) to earn clicks!")

```

## Step 3

⚡ Here comes the action ⚡

Now the game needs a container to hold the code that 
[__*increments*__](#addOne "adds to a number (usually adding 1)") 
the score when the Ⓐ button is clicked.

---

🔲 From the ``||controller:Controller||`` category, grab the
``||controller: on [A] button [pressed]||`` container and drop it into an 
empty spot in the workarea.  

🔲 From ``||info:Info||``, drag out the ``||info:change score by [1]||`` block
and snap it into the new container.  


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
```

## Step 4

🎮 Test your game in the simulator 🎮

This game is amazing...but it goes on forever! Add a countdown timer to give
the player a clear endpoint.

---

🔲  Open the ``||info:Info||`` category and 
drag the ``||info: start countdown [10] (s)||`` block into the bottom of the 
``||loops:on start||`` container.   


## Step 5

🎉 Congrats 🎉

You have your very own clicker game!

Make sure to click "Finish" so you can share with friends and compare scores!  
