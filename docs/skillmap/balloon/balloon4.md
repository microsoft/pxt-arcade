# Two Player Party

### @explicitHints true


## {Intro @showdialog}

This tutorial will help you turn your game into a two-player event!

![Use what you've learned to add a second player](/static/skillmap/balloon/balloon4.gif "We can add a second mouse and balloon." )




## {2. Play Your Game}


**Play the game!**

- :binoculars: Look at your project in the game window.

Press the (A) button or **space bar** as fast as you can.  You should see a mouse pumping up a balloon that gets bigger and bigger until it crosses the line and wins the game.

~hint My game doesn't work ⚠️

---

If your code doesn't work, start by looking to see if you can figure out what is going wrong.  Make sure each block is in the correct event container.

```blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```

If those steps don't solve your problem, click <br/>"Replace my code"<br/>
 to replace the blocks in your workspace with new starter code.

hint~




## {3. Add Second Player}

**Repeat your past steps to add a second player!**

To save time, we've connected the blocks you need inside a new category in the toolbox. Can you figure out what you need to do to get Player 2 working?

💡 **Tip:** _If you need more help, click through the steps for details._




## {4. Add the Sprites}

- :bolt: Look under ``||simplified:Simplified||`` for the bundle of code you need to add to **the end of** the ``||loops(noclick):on start||`` container.

- :mouse pointer: Click the empty grey boxes to choose the blue balloon and blue mouse images.

💡 **Tip:** _You can also change the **x** value for the Player 1 sprites to move them left a bit._


~hint Show me... 🕵🏽

![Add a second set of sprites](/static/skillmap/balloon/player2.gif "Add the bundle from simplified to create a second player." )


hint~


#### ~ tutorialhint

```blocks
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
simplified.wrap(function () {
    let myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    let myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})

```





## {5. Play Your Game!}

**Take a look!**

- :binoculars: Look at your project in the game window.  <br/><br/>
You should see that a second mouse and balloon have appeared.






## {6. Player 2 Pressed}

- :game: Now look under ``||controller:Controller||`` for the blocks you need to allow the second mouse to move when Player 2 presses their **A button**.

- :mouse pointer: Drop them in an empty area of the workspace, then click the empty grey box to choose the picture of the second mouse pressing the handle.

💡 **Tip:** _To test these blocks, use the U key on your keyboard to simulate the player 2 A button._



~hint Show me! 🕵🏽


![Add a bundle for the player 2 button](/static/skillmap/balloon/pressed2.gif "Find the bundle under Controller." )


hint~



#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
```





## {7. Mouse Up}

- :game: Now look under ``||controller:Controller||`` for the blocks you need to make the second mouse return to normal when Player 2 releases the **A button**.

- :mouse pointer: Drop them in an empty area of the workspace, then click the empty grey box to choose the picture of the second mouse releasing the handle.


~hint Show me! 🕵🏽

![Add the button for when the second player releases the button](/static/skillmap/balloon/released2.gif "The new bundle is now under the Controller category." )


hint~



```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```

#### ~ tutorialhint
```blocks
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(assets.image`mouse2-up`)
})
```



## {8. Play Your Game!}

**Try your game!**

- :binoculars: Look at your project in full-screen by clicking the **resize** button on the normal game window!

Find a friend and have them press the (A) button or **space bar** while you press the **U** key on the keyboard.  Who makes it to the top first?

![Click the resize button to play your game on the large screen.](/static/skillmap/balloon/big.gif " Size-Up!" )



```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```



## {9. Add a Label}

**Last step!**

- :ticket: From ``||carnival:Carnival||``, add
```block
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)
```
to **the top** of the ``||loops(noclick):on start||`` container to put a label on the booth so everyone knows the name of the game!

**Play your finished game a few times!  Who can get the best 2 out of 3?**




~hint Show me! 🕵🏽

![Add a label to the game window](/static/skillmap/balloon/label.gif "Find the label under Carnival." )


hint~




```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})

simplified.wrap(function () {
    let myBalloon3 = sprites.create(img`.`, SpriteKind.Player)
    myBalloon3.setPosition(110, 93)
    let myMouse3 = sprites.create(img`.`, SpriteKind.Mouse)
    myMouse3.setPosition(110, 93)
})
```


#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
let myMouse2: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myBalloon2.setPosition(110, 93)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
//@highlight
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)

```



## {10. Finale}

**🥳 You've done it 🥳**

You've finished your two-player game!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/balloon/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap and click the button in the side panel to share your game with friends!



```blockconfig.global
let myBalloon2: Sprite = null
let myMouse2: Sprite = null
info.player2.changeScoreBy(1)
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
myBalloon2 = sprites.create(img`.`, SpriteKind.Player)
scene.setBackgroundColor(1)
myBalloon2.setPosition(110, 93)
scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) { })
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
myMouse2.setImage(img`.`)

controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(img`.`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})

carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)

simplified.wrap(function () {
    myBalloon2 = sprites.create(img`.`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})

controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon2, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse2.setImage(img`.`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(img`.`)
})

```


```package
sprite-scaling
carnival=github:microsoft/arcade-carnival#v0.0.7
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks#v0.0.7
balloon-images=github:microsoft/arcade-tutorial-extensions/balloon-images#v0.0.11
```


```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```






```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"image7\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/DR3d3d3fS/MzO/u7v/u///TURERETyvzvzu7u7+/+/+01ERERE8vC7v7u7u7tPv/tN9P//RPIA/7+7+7+7T7/7TfT0RETyAAC/u7u7v0+/+030/0RE8gAAv7u7+79P//9NRERERPIAAL+7u7u/T7/7TURP9ETyAP+/u/u/u0+/+030//9E8vC7v7u7u7tPv/tNRET0RPK/O/O7u7v7/7/7TURERETyvzMzv7u7/7v//01ERERE8r87M/////C7D/AkIiIiIvLwu7sPAAAA/w8A//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-up\"\n    },\n    \"image8\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/vR3d3d3fS/MzO/u7sP/7/7TURERETyvzvzu7u7+7v7/01ERERE8vC7v7u7u7u/+/RN9P//RPIA/7+7+7+7v/v0TfT0RETyAAC/u7u7v7/79E30/0RE8gAAv7u7+7+/+/RNRERERPIAAL+7u7u/v/v0TURP9ETyAP+/u/u/u7/79E30//9E8vC7v7u7u7u/+/RNRET0RPK/O/O7u7v7u/v/TURERETyvzMzv7u7D/+/+01ERERE8r87M////wAAv/skIiIiIvLwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-down\"\n    },\n    \"image10\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/sREREREfm/MzO/u7sP/7/7kZmZmZn4vzvzu7u7+7v7/5GZmZmZ+PC7v7u7u7u/+/mR+f//mfgA/7+7+7+7v/v5kfn5mZn4AAC/u7u7v7/7+ZH5/5mZ+AAAv7u7+7+/+/mRmZmZmfgAAL+7u7u/v/v5kfmZ/5n4AP+/u/u/u7/7+ZH5+fmZ+PC7v7u7u7u/+/mRmZ/5mfi/O/O7u7v7u/v/kZmZmZn4vzMzv7u7D/+/+5GZmZmZ+L87M////wAAv/uJiIiIiPjwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-down\"\n    },\n    \"image9\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/AREREREfm/MzO/u7v/u///kZmZmZn4vzvzu7u7+/+/+5GZmZmZ+PC7v7u7u7ufv/uR+f//mfgA/7+7+7+7n7/7kfn5mZn4AAC/u7u7v5+/+5H5/5mZ+AAAv7u7+7+f//+RmZmZmfgAAL+7u7u/n7/7kfmZ/5n4AP+/u/u/u5+/+5H5+fmZ+PC7v7u7u7ufv/uRmZ/5mfi/O/O7u7v7/7/7kZmZmZn4vzMzv7u7/7v//5GZmZmZ+L87M/////C7D/CJiIiIiPjwu7sPAAAA/wAA//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-up\"\n    },\n    \"image6\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP8iIiL/AAAAAAAA8C8RISEiDwAAAAAA/xIRIREi8gAAAAAALxEiIiIiIg8AAADwEiEiIiIiIvLwAADwIiIiIiIiIiIvAADwIiIiIiIiIvLwAAAALyIiIiIiIg8AAAAA/yIiIiIi8gAAAAAA8C8iIiIiDwAAAAAAAP8iIiL/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-1\"\n    },\n    \"image11\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP+IiIj/AAAAAAAA8I8RgYGIDwAAAAAA/xgRgRGI+AAAAAAAjxGIiIiIiA8AAADwGIGIiIiIiPjwAADwiIiIiIiIiIiPAADwiIiIiIiIiPjwAAAAj4iIiIiIiA8AAAAA/4iIiIiI+AAAAAAA8I+IiIiIDwAAAAAAAP+IiIj/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-2\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAAARERERERERES8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREfEiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdEvIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdH///9ftf//////////////////////////////////////////////////////EREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiL///9ftf//////////////////////////////////////////////////////JCIiIiIkIiIi3S0iIvIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIkIiIiIiIiIi8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIiIiIiIiIi/yIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiI=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image7\":\n            case \"mouse1-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..ffffffffffffff.\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image8\":\n            case \"mouse1-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image10\":\n            case \"mouse2-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image9\":\n            case \"mouse2-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image6\":\n            case \"balloon-1\":return img`\n....................\n.........fff........\n.......ff222ff......\n......ff21222ff.....\n.....ff2112222ff....\n.....f211222222f....\n....f21122222222f...\n....f21122222222f...\n....f21122222222f...\n....f22222222222f...\n....f21122222222f...\n....f22122222222f...\n.....f222222222f....\n.....f222222222f....\n......f2222222f.....\n.......f22222f......\n........f222f.......\n.........f2f........\n..........f.........\n.........f2f........\n`;\n            case \"image11\":\n            case \"balloon-2\":return img`\n....................\n.........fff........\n.......ff888ff......\n......ff81888ff.....\n.....ff8118888ff....\n.....f811888888f....\n....f81188888888f...\n....f81188888888f...\n....f81188888888f...\n....f88888888888f...\n....f81188888888f...\n....f88188888888f...\n.....f888888888f....\n.....f888888888f....\n......f8888888f.....\n.......f88888f......\n........f888f.......\n.........f8f........\n..........f.........\n.........f8f........\n`;\n            case \"image4\":\n            case \"booth\":return img`\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444442\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd222\n111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n1111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f\n111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f\nf1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f2\n2fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f22\n22fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"xdO@[$nW`4LDKLg#s^bz\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"bU#zm0=UP]u:}b/slhf$\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"zAFx`|$CRYV(#oP.n0um\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"NSZT%yrFP/(yEppCW+,,\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"6,XcYCTZ$`~q!WN=ZLib\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"p^C#95SSLD{u`5KR)yI;\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"KDrdsHZeu6_]66c^Zqc8\">Mouse</variable><variable id=\"^Ja9]?}+=p;vbofy@HVc\">mouse2</variable><variable id=\"7D`plCR=oBiOlmy$llaz\">myBalloon2</variable><variable id=\"/@$2f;zkY^{4IS;VP#R/\">mouse</variable><variable id=\"AAvaaW@7n2t{jE/(~.r~\">myBalloon</variable><variable id=\"^Wf-N]+O=H?)Xxqr_?(I\">booth</variable><variable id=\",O8rw%td!O5y$|YYktLm\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"balloon race - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"simple-blocks\": \"github:microsoft/arcade-tutorial-extensions/simple-blocks#8267594819b733e5d5fe55c71fc21ea246e8319d\",\n        \"arcade-sprite-util\": \"github:jwunderl/arcade-sprite-util#v0.2.5\",\n        \"sprite-scaling\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\",\n        \"arcade-text\": \"github:microsoft/arcade-text#v1.3.0\",\n        \"Timers\": \"github:microsoft/arcade-timers#v1.1.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"custom.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

