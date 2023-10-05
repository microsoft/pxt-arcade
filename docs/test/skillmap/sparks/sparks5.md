# Show and Tell
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's add details to polish it up!


![Show and Tell](/static/skillmap/sparks/sparks5.gif "Let's add some details to make the game look more professional." )




## {2. Play Your Game}


**Play your game!**

Press the (B) button and see how many seconds you can last before the flames die down!




~hint My game doesn't work ⚠️

---

If your code isn't working and you can't figure out why, click
<br/>"Replace my code"<br/>
to replace the blocks in your workspace with new starter code.

hint~





## {3. Letting them know}

Let's make the level changes from the last tutorial more noticable.

---


- :circle: From the ``||game: Game||`` category, grab <br/>
``||game: show long text ["Congrats!..."]||`` <br/>
and snap it to **the top** of the<br/>
``||functions(noclick): function change_level||`` <br/>
container that's already in the workspace.

---

Now the game will alert you to the level change.


#### ~ tutorialhint
```blocks
function change_level () {
    //@highlight
    game.showLongText("Congrats! You started a fire! But...can you do it with fewer sticks?", DialogLayout.Full)
    info.setScore(0)
    level = level + 1
}
```





## {4. Show the current level}

Part of the thrill of this game is knowing what level you're on!

Let's show the current level at the top of the screen.

---


- :tree: From the ``||scene: Scene||`` category, grab <br/>
``||scene: assign label [join "Level" level]||`` <br/>
and snap it to **the bottom** of the<br/>
``||functions(noclick): function change_level||`` <br/>
container that's already in the workspace.

---

Now the game will update the label each time the level changes.



#### ~ tutorialhint
```blocks
function change_level () {
    game.showLongText("Congrats! You started a fire! But...can you do it with fewer sticks?", DialogLayout.Full)
    info.setScore(0)
    level = level + 1
    //@highlight
    scene.addLabelTo2("Level " + level)
}

```




## {5. Show the starting level}

There's still no label during the first level!

---


- :tree: From the ``||scene: Scene||`` category, grab <br/>
``||scene: assign label [join "Level" level]||`` <br/>
and snap it to **the bottom** of the<br/>
``||loops(noclick): on start||`` <br/>
container that's already in the workspace.

---

Now there will be a label as soon as the game starts.



#### ~ tutorialhint
```blocks
let level = 1
let kindling: Sprite = null
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
stopwatch.startTimer(stopwatch.TimerType.Tens)
//@highlight
scene.addLabelTo2("Level " + level)

```








## {6. Check Your Game!}


- :binoculars: Try your project in the game window.

The game should show which level you're on as you go, and each level should be harder than the last.





## {7. Pile of Sticks}

To start a fire with "fewer sticks," we're going to also need to change the **kindling** image with each level.  To do that, we'll use an array.


~hint What's an array? 💡

---

An **array** is an ordered list of elements that

Here is what our array of kindling will look like:

```blocks
let textSprite: TextSprite = null
let firePit: Sprite = null
function change_level () {
    info.setScore(0)
    let level = level + 1
    textSprite.setText("Level " + level)
}
```


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

let firePit: Sprite = null

info.changeScoreBy(level * -1)
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.startEffect(effects.fire)
info.onScore(30, function () { })
game.showLongText("Congrats! You started a fire! But...can you do it with fewer sticks?", DialogLayout.Full)
scene.addLabelTo2("Level " + level)

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
    change_level()
})

let level = 1
let kindling: Sprite = null
game.showLongText("You are in Israel circa 100,000 B.C.", DialogLayout.Full)
game.showLongText("The world around you is starting to freeze. Press the (B) button as quickly as possible to light a fire that will keep you warm.", DialogLayout.Full)
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
stopwatch.startTimer(stopwatch.TimerType.Tens)

function change_level () {
    info.setScore(0)
    level = level + 1
}
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(level*-1)
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


```customts

namespace scene{

    let thisTextSprite: TextSprite = null

    /**
    * Adds text to the top left of game
    */
    //% group="Extension"
    //% blockId=add_label_to_2
    //% block="assign label $myLabel || using $myColor"
    //% myLabel.defl="Level 1"
    //% myColor.shadow="colorindexpicker"
    //% myColor.defl=1
    //% inlineInputMode=inline
    //% help=github:docs/add_label_to_2
    export function addLabelTo2(myLabel: string, myColor?: number) {
        if (!myColor) {myColor = 1;}
        if (thisTextSprite) {
            sprites.destroy(thisTextSprite)
        }
        thisTextSprite = textsprite.create(myLabel, 0, myColor)
        thisTextSprite.left = 5
        thisTextSprite.top = 5
    }

}

```
