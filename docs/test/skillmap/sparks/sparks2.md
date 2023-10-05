# Winner, Winner
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's add some code that allows the player to win or lose.


![Time is ticking](/static/skillmap/sparks/sparks2.gif "Let's add a way to win." )




## {2. Play Your Game}


**Play the clicker game!**

Press the (B) button or the **enter key** and watch the score go up!




~hint My game doesn't work ⚠️

---

If your code isn't working and you can't figure out why, click
<br/>"Replace my code"<br/>
to replace the blocks in your workspace with new starter code.

hint~





## {3. Win Some}

**Add a score event.**

- :id card: From the ``||info:Info||`` category, drag<br/>
``||info:on score [30]||``<br/>
into an **empty area** of the workspace.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {})
```



## {4. Game Over}

**Win the game when the score reaches 30.**

- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:game over <WIN>||``<br/>
into the **empty** <br/>
``||info(noclick):on score [30]||`` container.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    game.gameOver(true)
})
```






## {5. Check Your Game!}


- :binoculars: Try your project in the game window.

Press the (B) button as quickly as possible and you should win the game when you score gets to 30.




## {6. Counting the Seconds}

Right now, the winning score will always be 30.
Let's change the final score to the amount of time it took to win the game,
then celebrate the "lowest" score.

---

- :id card: From the ``||info:Info||`` category, drag<br/>
``||info:set score to [0]||``<br/>
into the **top of** the<br/>
``||info(noclick):on score [30]||`` container that's already in the workspace.

- :circle: From the ``||game:Game||`` category, drag<br/>
``||stopwatch:timer value [tenths]||``<br/>
to replace **0** inside the <br/>
``||info(noclick):set score to [0]||`` block.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.gameOver(true)
})
```




## {7. Lowest Wins}


- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:use [high score] as best score||``<br/>
into the **top of** the<br/>
``||info(noclick):on score [30]||`` container that's already in the workspace.

- :mouse pointer: Click ``||game:high score||`` and choose
``||game: low score||`` from the dropdown menu.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.gameOver(true)
})
```



## {8. How long has this been going on?}

Let the user see how long they've been playing.


- :stopwatch: From the ``||stopwatch:Stopwatch||`` category, drag<br/>
``||stopwatch:start timer using [tenths only]||``<br/>
into the **end of** the<br/>
``||loops(noclick):on start||`` container that's already in the workspace.


#### ~ tutorialhint

```blocks
let kindling: Sprite = null
scene.setBackgroundImage(sparks.background1)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
//@highlight
stopwatch.startTimer(stopwatch.TimerType.Tens)
```



## {9. Check Your Game!}


- :binoculars: Try your project in the game window again.

Press the (B) button as quickly as possible and
see how long it takes you to win the game when you score gets to 30.




## {Finale}

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
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
info.onScore(30)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {})
stopwatch.getTimerValue(stopwatch.TimerGran.Tenths)
stopwatch.startTimer(stopwatch.TimerType.Tens)
```

```template

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        info.changeScoreBy(1)
        kindling.startEffect(effects.fire, 500)
})

let kindling: Sprite = null
scene.setBackgroundImage(sparks.background1)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```

```ghost
info.onScore(30, function () {
    game.gameOver(true)
})

game.onUpdateInterval(1000, function () {
    if (inCutscene == false) {
        info.changeScoreBy(currentLevel * -1)
    }
})
```



```package
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.5
stopwatch=github:kiki-lee/stopwatch#v0.0.5
```

