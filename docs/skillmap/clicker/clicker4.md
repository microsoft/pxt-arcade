# Simple Clicker Store

```template
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    power += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(power)
    mySprite.startEffect(effects.spray, 100)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let power = 0
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
power = 1

```

```ghost

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        let mySprite: Sprite = null
        info.changeScoreBy(-10)
        power +=1
        mySprite.say("You've purchased a super-clicker")
                game.showLongText("You bought an auto-clicker!", DialogLayout.Center)

    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(clicks)
})
let autoClicks = 0
let clicks = 0
clicks = 1


    game.splash("")
    game.setDialogTextColor(0)
    game.setDialogCursor(img`
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
        `)
})


```


## Introduction @unplugged

What's more fun than pressing buttons?

🛒 Buying things 🛒

---

Let's modify our clicker game to offer a simple shop.

![Click away](/static/skillmap/clicker/clicker-activity-4.gif "Click and buy bigger clickers" )

## Step 1

The code for a clicker game is already in the workspace.

When you click Ⓑ, you get a super-clicker — but 
what fun is it to get extra power for free? Let's add code to charge the player 10 points for the purchase.

---

🔲 From the ``||info:Info||`` category, grab a ``||info:change score by [1]||``
block and snap it into the top of the **on B button pressed** container.

🔲 Change the value in the new block from **1** to **-10**.   

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
        info.changeScoreBy(-10)
        power += 1
})
```


## Step 2

💡 Now we're onto something 💡

But what if the player doesn't have 10 points to spend? 
Let's do a quick check of the player's score before we 
upgrade the power. 

---

🔲 From ``||logic:Logic||``, choose the top 
``||logic:if <true> then||`` container and drag it into the top of your
**on B button pressed** container already in the workspace. 

🔲 To compare values, open the ``||logic: Logic||``
category and grab a ``||logic: [0] [<] [0]||`` to replace **`<true>`**.



```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 < 0) {
        
    }
    info.changeScoreBy(-10)
    power += 1

})
```

## Step 3

We should check that score is greater than (or equal to) **10**
before we charge the player 10 points. 

---

🔲 To make sure the score is larger than (or equal to) 10, replace the first
**0** in ``||logic: [0] [<] [0]||`` with **10** and change **<**
to **≤**.

🔲 Open the ``||info:Info||`` category and find the ``||info:score||`` value block.
Grab it and drop it in to replace the remaining **0** of the comparison argument.  



```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score() {
        
    }
    info.changeScoreBy(-10)
    power += 1
})
```


## Step 4

Now if the player has a large enough score, you can charge them 
10 points and give them their extra power.

---

🔲 The code to adjust the score and power are already at the bottom of the 
**on B button pressed** container.  All you need to do is grab it and 
drag it into the empty **if/then** container.


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score() {
        info.changeScoreBy(-10)
        power += 1
    }
    

})
```


## Step 5

🎮 Give your game a try 🎮

It should do what you expect...but it's hard to tell that's what's happening.
Let's add a message to let the player know if their purchase has succeeded.

---

🔲 Telling the player the purchase went through is the easy part.  
Open the ``||game:Game||`` category and grab a 
``||game:show long text [" "][bottom]||`` block. 

🔲 Drop the text block into the end of the **if/then** container.

🔲 Click inside the empty text box and write a message to the player, 
letting them know that their purchase went through. 


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        let mySprite: Sprite = null
        info.changeScoreBy(-10)
        power +=1
        game.showLongText("You bought an auto-clicker!", DialogLayout.Bottom)
    }
})
```

## Step 6

Finally, we should let the player know if they don't have enough points to 
buy the clicker.

---

🔲 We already have a note that shows **if** the player has enough points.  
Click the **⊕** at the bottom of the **if/then** container to create an **else** space 
for code that runs when the **if** statement is not true.

🔲 Now you have an **else** container.  Grab another 
``||game:show long text [" "] [bottom]||`` and drag it into the empty **else**.

🔲 Click into the textarea of the new block and write a message to let your
player know that they didn't have enough points for an auto-clicker.


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        let mySprite: Sprite = null
        info.changeScoreBy(-10)
        power +=1
        game.showLongText("You bought an auto-clicker!", DialogLayout.Bottom)
    }
    else {
        game.showLongText("Not enough points for an auto-clicker!", DialogLayout.Bottom)
    }
})
```

## Step 7

⚡️ Amazing ⚡️

Now you have a clicker game with a simple shop.  

Click **Finish** to share it with your friends and compare strategy!   