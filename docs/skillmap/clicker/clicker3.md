# Variable Clicker

```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    mySprite.startEffect(effects.spray, 100)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
info.startCountdown(10)
game.splash("Press (A) to earn clicks!")
mySprite = sprites.create(img`
    .........bbbbb................
    ........bb111bb...............
    .......b1111111b..............
    ......bb1111111bb....bbb......
    ...bbbbd11111111bbbbbb1bb.....
    ..bb111dd111111111111111b.....
    .bb111111111111111111111b.....
    .b1111111111111111d11111bb....
    bb111111111111111d1111111bb...
    b111111111111111d111111111bb..
    bb111111111111111d111111111bb.
    .bbb11ddd111111111d11111111bb.
    ...bbbbbd1111111111bbb11bbbb..
    .......bb11111111bbb.bbbb.....
    ........bbb11111bb............
    ..........bbbbbbb.............
    `, SpriteKind.Player)

```

```ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-20)
    power2 += 1
    game.showLongText("You bought one extra click!", DialogLayout.Top)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(power2)
    mySprite.startEffect(effects.spray, 100)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let power2 = 0
let mySprite: Sprite = null
scene.setBackgroundColor(11)
info.startCountdown(10)
game.splash("Press (A) to earn clicks!")
mySprite = sprites.create(img`
    .........bbbbb................
    ........bb111bb...............
    .......b1111111b..............
    ......bb1111111bb....bbb......
    ...bbbbd11111111bbbbbb1bb.....
    ..bb111dd111111111111111b.....
    .bb111111111111111111111b.....
    .b1111111111111111d11111bb....
    bb111111111111111d1111111bb...
    b111111111111111d111111111bb..
    bb111111111111111d111111111bb.
    .bbb11ddd111111111d11111111bb.
    ...bbbbbd1111111111bbb11bbbb..
    .......bb11111111bbb.bbbb.....
    ........bbb11111bb............
    ..........bbbbbbb.............
    `, SpriteKind.Player)
power2 = 1


```



## Introduction @unplugged

There's so much more to explore with our clicker games.

Let's keep building!

![Click away](/static/skillmaps/clicker/clicker-activity-3.gif "Click and buy bigger clickers" )

## Step 1

Incrementing by one point per click has been fun, but what if we could
make the game more interesting?

Let's allow the player to buy a more powerful clicker when they press the 
Ⓑ button. 

---

🔲 From ``||controller:Controller||``, grab an 
``||controller:on [A] button [pressed]||`` container and drop it into
an empty area in the workspace.  
*Note: The block will appear faded at first because it conflicts with the other 
** on button pressed** container in the workspace.*

🔲 Click **A** in the empty **on button pressed** container, and choose 
**B** from the dropdown menu.  


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
})
```


## Step 2

Adding another increment to the Ⓑ button would only allow the score to 
increase faster one time for each click. 

To make a permanent change, we'll need to add a 
[__*variable*__](#varied "a label that holds the place for something that can change"). 

---

🔲 Open the ``||variables:Variables||`` category and click the button
to **[ Make a Variable]**.

🔲 In the prompt, type the name of the variable that will keep track of 
how powerful your clicker is.  For the rest of this tutorial, we'll refer to
that variable as **power**.

🔲 Click **OK** to save your variable and close the window.   



## Step 3

We've got a variable, but before we can use it, it needs to mean something.

Let's [__*initialize*__](#init "Set the starting value")
**power** by setting a value before it's used.

---

🔲 From ``||variables:Variables||``, grab the 
``||variables:set [power] to [0]||`` block and add it to the end of the 
**on start** container.

🔲 Change **0** to **1** to make it easy to replace the increment value
we're already relying on.

```block
let power = 0
power = 1
```


## Step 4

Now we can drop a **power** variable into our **change score by** block
so that every click responds to our changing values.

---

🔲 Open the ``||variables:Variables||`` category and grab a 
``||variables:power||`` variable.

🔲 Drop ``||variables:power||`` into the **change score by** block (inside of
the **on A button pressed** container),
replacing the number **1**.



## Step 5

To make our "super-clicker", we need to make the **power**
larger after Ⓑ is pressed.

---

🔲 Open the ``||variables:Variables||`` category. Grab a 
``||variables:change [power] by [1]||`` variable and snap it into the 
empty **on B button pressed** container.  



## Step 6

🎇 There you have it, a Super-Clicker 🎇

Click **Finish** to share your game with friends and start
a competition!

