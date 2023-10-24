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

**Set the variable in your program.**

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





## {5. Replace in the game event}

**Add the variable to your code.**

Let's use the variable to take away a larger amount of points in each level.

---

- :binoculars: Look for the <br/>
``||info: change score by [-1]||`` <br/>
block that's **already inside of** <br/>
``||game(noclick):on game update every [1000]ms||``.

- :mouse pointer: **Delete** the <br/>
``||info: change score by [-1]||`` <br/>
block and replace it with <br/>
``||info: change score by [level x -1]||`` <br/>
from the ``||info:Info||`` category<br/>

---

_**Tip:** Having a hard time finding a block? Click the colored text in the instruction to
pop open the category that you need._

![Again and Again](/static/skillmap/sparks/pink.gif "Let's add more levels." )



#### ~ tutorialhint
```blocks
game.onUpdateInterval(1000, function () {
    //@highlight
    info.changeScoreBy(level * -1)
})
```




## {6. Check Your Game!}


- :binoculars: Try your project in the game window.

It should work exactly the same way as it did before...until the level goes up!






## {7. Going Up}

The level should go up each time the player gets to 30 points.
We'll need a function to make that happen.


~hint What's a function? 💡

---

A **function** is a set of code that you name so that you can **call** it
over and over inside of your program without having to write the code
again each time.

Here is an example of a function **definition**:

```blocks
let textSprite: TextSprite = null
let firePit: Sprite = null
function change_level () {
    info.setScore(0)
    let level = level + 1
    textSprite.setText("Level " + level)
}
```

And here is the block we'll use to **call** our function when we want to use that code:

```block
//@hide
function change_level () {}

change_level()
```

↑ That block represents all of the
code that we added into our function
definition.


hint~

- :chevron down: Click **Advanced** in the toolbox to reveal
the ``||functions:Functions||`` category.

- :function: Click on ``||functions:Functions||``, then click <br/>
**Make a Function**.

- :mouse pointer: Give your function the name **change_level** and click "Done".





## {8. What's your function}

Let's add the code to add one to the level inside the function.

---

- :align justify: Open ``||variables: Variables||`` and drag <br/>
``||variables:set [level] to [0]||`` <br/>
into the ``||functions(on click):function [change_level]||`` container. <br/>

- :calculator: From ``||math:Math||``, drag <br/>
``||math:[0] + [0]||`` in to **replace** the **0** in the <br/>
``||variables:set [level] to [0]||`` block.



#### ~ tutorialhint
```blocks
function change_level () {
    level = 0 + 0
}
```




## {9. Another one}

Add one to level...

---

- :align justify: Open ``||variables: Variables||`` and drag <br/>
``||variables:level||`` in to replace the first **0** inside of <br/>
``||variables:set [level] to [0 + 0]||``.

- :mouse pointer: Find <br/>
``||variables:set [level] to [level + 0]||`` <br/>
and change the last **0** to a **1**.



#### ~ tutorialhint
```blocks
function change_level () {
    level = level + 1
}
```





## {10. Another one}

If you play your game right now, you'll see nothing has changed, because you're not
using the


```block
//@hide
function change_level () {}

change_level()
```

block anywhere yet.  Let's fix that.

---

- :mouse pointer: Delete everything inside of <br/>
``||info(no click):on score [30]||`` <br/>
**without** deleting the container itself.


- :function: From ``||functions:Functions||``, drag <br/>
``||functions:call change_level||`` into <br/>
``||info(no click):on score [30]||``. <br/>


#### ~ tutorialhint


```blocks
//@hide
function change_level () {}

info.onScore(30, function () {
    change_level()
})
```



## {11. Check Your Game!}


- :binoculars: Try your game now.

When you get to 30, things should start to get harder, but that's all you'll see.
After that, the game will keep going on forever. We'll change that in the next step.





## {12. Another one}

Resetting the score inside your function will allow you to trigger change_level
again the next time you reach 30.

---

- :id card: From ``||info:Info||``, drag <br/>
``||info:set score to [0]||`` <br/>
into the **top of** the <br/>
``||function: function [change_level]||`` function.


#### ~ tutorialhint

```blocks
//@hide
function change_level () {}

info.onScore(30, function () {
    info.setScore(0)
    change_level()
})
```




## {13. Play Your Game!}


- :binoculars: Try your game again.

This time when you play, your score will start over every time you reach 30 and
the game will get harder each time.




## {14. Finale}

**🪨 Your game ROCKS!! 🪨**

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

let textSprite: TextSprite = null
let firePit: Sprite = null

info.changeScoreBy(level * -1)
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)
info.setScore(0)
let level = level + 1
textSprite.setText("Level " + level)
```

```template
info.onScore(-5, function () {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    kindling.startEffect(effects.fire, 500)
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
    change_level()
})
function change_level () {
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

