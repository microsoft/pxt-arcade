# When the Wind Blows
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's add some code that allows the player to win or lose.


![Let's add some wind](/static/skillmap/sparks/sparks3.gif "Let's add wind to take points away." )




## {2. Play Your Game}


**Play the clicker game!**

Press the (B) button or the **enter key** and see how fast you can light your fire!


~hint My game doesn't work ⚠️

---

If your code isn't working and you can't figure out why, click
<br/>"Replace my code"<br/>
to replace the blocks in your workspace with new starter code.

hint~




## {3. Lose Some}


**Time for a challenge!** <br/>
❤️‍🔥 ❤️‍🔥 ❤️‍🔥

It's too easy to reach 30.
Let's subtract a point every second to represent the effects of the wind.

---


- :circle: From the ``||game:Game||`` category, drag<br/>
``||game: on game update every [500] ms||``<br/>
into **an empty area** of the workspace.

- :mouse pointer: Change **500** ms to **1000** ms (which is also 1 second.)



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(1000, function () { })
```


## {4. Losing It}


- :id card: From the ``||info:Info||`` category, drag<br/>
``||info: change score by [1]||``<br/>
into **the empty**<br/>
``||game(noclick): on game update every [1000] ms||``<br/>
container already in the workspace.

- :mouse pointer: Change **1** to **-1** to remove a point.



#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
//@highlight
        info.changeScoreBy(-1)
})
```





## {5. Check Your Game!}


- :binoculars: Try your project in the game window.

Press the (B) button as quickly as possible and see if you can hit 30 points before too many points are taken away.





## {6. Enough is Enough}

Let's add a way to lose the game when points fall too far below zero.

🕰️ 🕰️ 🕰️

- :id card: From the ``||info:Info||`` category, drag<br/>
``||info:on score [30]||``<br/>
into an **empty area** of the workspace.

- :mouse pointer: Click inside the empty container and change **30** to **-5**.


#### ~ tutorialhint

```blocks
//@highlight
info.onScore(-5, function () { })
```




## {7. Enough is Enough Contd.}

- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:game over <WIN>||``<br/>
into the **empty** <br/>
``||info(noclick):on score [-5]||`` container.

- :mouse pointer: Click **`<WIN`>** and change it to **`<LOSE`>**.



#### ~ tutorialhint

```blocks
info.onScore(-5, function () {
    //@highlight
    game.gameOver(false)
})
```



## {8. Check Your Game!}


- :binoculars: Take a look at the game window

Don't touch any buttons or keys...you should lose the game after five seconds.



## {9. Play again}

- :sync alt: Reset your game and play again!

Click the (B) button as fast as you can.  Is the game any harder to win?

💡 _Don't worry if your game is still too easy. In the next tutorial, we'll add more
levels, which will make the game much harder!_




## {10. Too Lossy}

Now the player loses the game if they're not ready to start.

Let's add a start screen to give the player a chance to catch up.

---

- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:show long text [You are in ...]||``<br/>
into the **top of** the <br/>
``||loops(noclick):on start||`` container already in the workspace.


#### ~ tutorialhint

```blocks
let kindling: Sprite = null
//@highlight
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```


## {11. More words}

Add another block to share the goal of the game.

---

- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:show long text [The world...]||``<br/>
into the ``||loops(noclick):on start||`` container, just below the <br/>
``||game:show long text [You are in ...]||``<br/>
block.


#### ~ tutorialhint

```blocks
let kindling: Sprite = null
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
//@highlight
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```
```blockconfig.local
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
```



## {12. Play again}

- :binoculars: Reset your game and play again!

You should see your messages and be able to clear them with the (A) button.

The points won't start going down until your final message is dismissed.





## {Finale}

**🔥 So HOT 🔥**

Now that's a great game!


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
stopwatch.startTimer(stopwatch.TimerType.Tens)

info.onScore(30, function () {
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.gameOver(true)
})

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

