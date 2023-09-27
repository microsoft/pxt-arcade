# Another Level
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's build on it to add more levels!


![Again and Again](/static/skillmap/sparks/sparks4.gif "Let's add more levels." )




## {2. Play Your Game}


**Play your game!**

Press the (B) button and try to get 30 points before they all disappear!




~hint My game doesn't work ⚠️

---

If your code isn't working and you can't figure out why, click
<br/>"Replace my code"<br/>
to replace the blocks in your workspace with new starter code.

hint~





## {3. Prepping the Variable}

The level needs to change as the user plays.
This is the perfect place to use a variable.


~hint What's a variable? 💡

---

A **variable** is a placeholder that you can use for a value that changes.

In our program, we will **declare** a variable called **level**, which means that we'll tell the program
that we want it to replace the word ``||variables(noclick):level||`` with whatever
value is assigned to it.

Later in our program, we can change the value of **level** and the code will use
the newest value each time we call ``||variables(noclick):level||``.

This is the block we'll use to declare the variable in our program:

```block
let level: number = null
level = 1
```

This is the block we'll use to change the value as we go:

```block
let level: number = null
level++
```

hint~



- :align justify: From the ``||variables:Variables||`` category, click on<br/>
**Make a Variable**<br/>

- :mouse pointer: Enter the name **level** and click **Ok**.



## {4. Put it in the program}

Add the variable to your program.

---

- :align justify: From the ``||variables: Variables||`` category, grab <br/>
``||variables: set [level] to [0]||`` <br/>
and snap it to **the top** of the<br/>
``||loops(noclick): on start||`` <br/>
container that's already in the workspace.

- :mouse pointer: Change the value of level from **0** to **1**.

---

Now the game will begin at Level 1.


#### ~ tutorialhint
```blocks
//@highlight
let level = 1
scene.setBackgroundImage(sparks.background)
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```

```blockconfig.local
let level = 1
```





## {9. Finale}

**👨🏽‍🚒 You're FIRE 👨🏽‍🚒**

What a great game you've got there!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/sparks/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap so you can
add levels to your game!


```blockconfig.global
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)
info.onScore(30, function () { })
```

```template
info.onScore(-5, function () {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    kindling.startEffect(effects.fire, 25)
})
info.onScore(30, function () {
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.gameOver(true)
})
let kindling: Sprite = null
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
stopwatch.startTimer(stopwatch.TimerType.Tens)


game.onUpdateInterval(1000, function () {
    info.changeScoreBy(-1)
})

```

```ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    firePit.startEffect(effects.fire, 100)
})
info.onScore(-5, function () {
    game.gameOver(false)
})
info.onScore(30, function () {
    bumpLevels()
})
function bumpLevels () {
    if (level == 5) {
        info.setScore(game.timeSinceStartSec())
        game.setGameOverMessage(true, "Great job, Fire Maker!")
        game.gameOver(true)
    }
    game.showLongText("Congrats! You started a fire! But...can you do it with fewer sticks?", DialogLayout.Full)
    game.showLongText("Try to pass Level " + level + "!", DialogLayout.Full)
    info.setScore(0)
    level = level + 1
    textSprite.setText("Level " + level)
    firePit.setImage(list[level])
}
let textSprite: TextSprite = null
let firePit: Sprite = null
let level = 0
let list: Image[] = []
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
list = [
sparks.pile1,
sparks.pile2,
sparks.pile3,
sparks.pile4,
sparks.pile5
]
level = 1
scene.setBackgroundImage(sparks.background1)
firePit = sprites.create(sparks.pile1, SpriteKind.Player)
firePit.setPosition(70, 80)
textSprite = textsprite.create("Level 1")
textSprite.setPosition(30, 10)
textSprite.setOutline(1, 6)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(level * -1)
})

```



```package
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.5
stopwatch=github:kiki-lee/stopwatch#v0.0.5
```

