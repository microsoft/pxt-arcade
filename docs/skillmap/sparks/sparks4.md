# Play with Friends
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's add to it to create a multiplayer game.

![Whack-the-Mole](/static/skillmap/mole/mole4.gif "Twice as much fun with two people." )




## {2. Play Your Game}


- :binoculars: Play the game you have so far.

Using the joypad (or the arrow keys on your keyboard) move the hammer around the screen and earn 1 point each time it overlaps the mole!


~hint My game doesn't work ⚠️

---

If your code isn't working and you can't figure out why, click
<br/>"Replace my code"<br/>
to replace the blocks in your workspace with new starter code.

hint~


#### ~ tutorialhint

```blocks

let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)

game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
        animation.runImageAnimation(
        myHammer,
        assets.animation`hammerAnimation`,
        50,
        false
        )
})

```



## {3. Player 2}

**Allow player 2 to move the mole**

- :tree: From the ``||controller: Controller||`` category, drag <br/>

```blocks
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
```

into **an empty area** of your workspace.


~hint Show me how! 🕵🏽

![Add a block so a second player can control the mole](/static/skillmap/mole/player2.gif "Add a second player with the controller bundle")

hint~

Now, when player 2 presses their A button (or the **U key** on the keyboard) the mole will hop to a new location.



#### ~ tutorialhint

```blocks
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
```


## {4. Playing Chicken}

**Give player 2 a point for being fearless.**

Now that player 2 moves the mole, we don't need to have it happen automatically.


- :mouse pointer: From the <br/>
``||game(noclick): on game update every [1000] ms||``
<br/>container already in the workspace, **delete**
```block
    simplified.moveToRandomHoleOnGrid(myMole)
```

~hint How do I delete a block? 💡

---

You can delete a block three ways:<br/>
1) Click the block to select, then press **delete** on your keyboard<br/>
2) Right-click the block and choose **Delete Blocks**<br/>
3) Drag the block back into the toolbox<br/>


hint~



~hint Click here to see how 🕵🏽

![Delete the block you don't need](/static/skillmap/mole/delete.gif "Delete the block that moves the mole automatically.")


hint~


#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {})
```



## {5. Add a point each second}

- :bolt: From ``||simplified:Simplified||``, drag
```block
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
```
into the newly **empty**  <br/>
``||game(noclick): on game update every [1000] ms||``
<br/>container already in the workspace.


~hint Click here to see how 🕵🏽

![Score points for staying still](/static/skillmap/mole/check-mole.gif "Add the block to check if the mole is still in the same spot.")


hint~


#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
    //@highlight
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
```





## {6. Multiplayer Win}


**Change to a multiplayer win screen.**

Now that we have two scores to judge, you need to change the game over screen to **multiplayer**.

- :mouse pointer: Find
```block
carnival.startCountdownGame(15, carnival.WinTypes.Score
```
inside the ``||loops(noclick):on start||`` container, and change **best score** to **multiplayer**.


~hint Show me how! 🕵🏽


![Change the type of win to multiplayer.](/static/skillmap/mole/multi.gif "Make your game multiplayer.")

hint~


#### ~ tutorialhint


```blocks
let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
let myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
//@highlight
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
```


## {7. Check Your Game Again!}



- :binoculars: Play your game in the game window!

Player 2 should be able to move the mole with the **U key** on the keyboard.

They should also get a point for every second they stay in the same spot.

**Play against someone.  Who wins?**



## {8. Fine Tune}


**Is your game too easy? Too hard?**

You can change your values to make your game exactly the way you like.


~hint Show me how! 🕵🏽

---

- If player 1 wins too much, change the hammer speed to **medium** or **slow** or change the number of milliseconds the mole must wait from **1000** to **500**.<br/>
- If player 2 wins too much, change the number of milliseconds they must wait from **1000** to **1500**.<br/>
- If you don't feel like you have long enough to play, change the countdown from **15** to **25** or **30** seconds. <br/>

---


![Customize your game by changing the values in your blocks](/static/skillmap/mole/custom.gif "You can make your game easier or harder.")

hint~



## {9. Add Instructions}


**Add some instructions to the beginning to let users know how to play!**


- :circle: From ``||game:Game||``, snap
```block
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press A to move the mole.", DialogLayout.Center)
```
into the **top of** the ``||loops(noclick):on start||`` container.

You can change the instructions to whatever you want them to be.


~hint Show me how! 🕵🏽


![Add rules.](/static/skillmap/mole/rules.gif "Add some text so users know the rules.")

hint~


#### ~ tutorialhint


```blocks
let myMole: Sprite = null
//@highlight
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press B to move the mole.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
let myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
```


## {10. Play your finished game}



- :binoculars: Play your finished game in the game window!

You should see the instructions before the game starts.  Press the A button to clear them.

**Start a Whack-the-Mole tournament? Who gets best 2 out of 3?**



## {11. Finale}

**🎡 You've done it! 🎡**

You've finished your Whack-the-Mole game!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/mole/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap to claim your badge and share your game with friends and family.





```blockconfig.global
let myHammer: Sprite = null
animation.runImageAnimation(
myHammer,
[img`.`],
50,
false
)
myHammer = sprites.create(img`.`, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
        animation.runImageAnimation(
        myHammer,
        [img`.`],
        50,
        false
        )
})
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
game.onUpdateInterval(1000, function () {
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press A to move the mole.", DialogLayout.Center)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
simplified.moveToRandomHoleOnGrid(myMole)
```


```package
carnival=github:microsoft/arcade-carnival#v0.0.7
mole-images=github:microsoft/arcade-tutorial-extensions/mole-images#v0.0.11
```


```template

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
        animation.runImageAnimation(
        myHammer,
        assets.animation`hammerAnimation`,
        50,
        false
        )
})
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)

game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})

```


```ghost

controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press A to move the mole.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
game.onUpdateInterval(1000, function () {
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})

```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"Qv@;p79@e|(fGBFKaJ@[\": {\n        \"data\": \"hwQQABAAAAAAAO7u7u7u7gDg7u7u7u7uAO7u7u7u7u4A7u7u7u7v7gDu7v7u7v7uAO7u7u/v/u4A7v/u8+7+7gDu7u4z7v7uAO7u7jPu/u4A7v/u8+7+7gDu7u7v7/7uAO7u/u7u/u4A7u7u7u7v7gDu7u7u7u7uAODu7u7u7u4AAO7u7u7u7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mole\"\n    },\n    \"/LJ4HDC9/+6j@JGvC7#:\": {\n        \"data\": \"hwSgAHgAAABmZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d397u7u8t/d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3f3v7u7u8z8f3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3e/u7u7y8zM/3d3d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3e/u7u7y8zM/Hd3d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d7+7u7vLzMzMzMx/d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d397u7u7vLzMzMzMx/d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d7+7u7vLzMzMzPx3d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d/e7u7u7zMzMzPx3d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3e/u7u7zMzM/Hd3d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3f3u7u7y8zM/3d3d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3f3v7u7y8z8f3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d397u7u8t8d3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"grid\"\n    },\n    \"Oag!`vsg+~Y,+WT2meT;\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNwNAAAAAAAAAAAAAAAAAMDcDQAAAAAAAAAAAAAAAMDcvQsAAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAAMDcvQsAAAAAAABABAAAAMDcvQsAAAAAAAAAQAQAAADA3L0LAAAAAAAAQCTiDgDA3L0LAAAAAAAAAEAk4g4AwNy9CwAAAAAAAEAk4u7uzty9CwAAAAAAAABAJOLu7s7cvQsAAAAAAABAJOLu7u7evQsAAAAAAAAAQCTi7u7u3r0LAAAAAAAAACTi7u7u7u7uDgAAAAAAAAAk4u7u7u7u7g4AAAAAAAAA4O7u7u7u7u7uDgAAAAAAAODu7u7u7u7u7g4AAAAAAAAA4O7u7u7u7o5oBgAAAAAAAODu7u7u7u6OaAYAAAAAAAAA4O7u7u6OaAYAAAAAAAAAAODu7u7ujmgGAAAAAAAAAAAA4O7ujmgGAAAAAAAAAAAAAODu7o5oBgAAAAAAAAAAAAAA4I5oBgAAAAAAAAAAAAAAAOCOaAYAAAAAAAAAAAAAAAAAYAYAAAAAAAAAAAAAAAAAAGAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hammer\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDQwMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDA1MDA1MDAwMDAwNTBlZWVlZWVlZWVlZWUwNWUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUwMDAwNTAwMDAwMDAwMDUwMDUwMDAwMDUwMDAwMDAwNTA1MDAwMDUwMDAwMDAwNTA1MDAwMDA1MDA1MDA1MDA1MDUwMDAwMDAwMDAwMDAwMDAwZWVlZWVlZWVlZWVlMDBlMGVlZWVlZWVlZWVlZTBlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZWVlZWZlZWVlZWVlZWVmZTMzMzNlZmVlZWVlZWVlZWUzZmYzZWVlZWVlZWVlZWZlZWVlZWVmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZWVlZWVlZmVlMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDUwMDAwMDAwMDAwNTAwMDAwMDA1MDAwMDAwNTAwMDAwMDAwNTAwMDA1MDUwMDAwMDUwMDAwMDAwMDUwMDA1MDA1MDAwMDAwMDUwNTAwMDAwMDAwMDAwMDA1NTAwMDAwMDAwMDAwMDAwMDAwMGVlZWVlZWVlZWVlZTAwZTBlZWVlZWVlZWVlZWUwZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVmZWVlZWVlZWVlZmUzMzMzZWZlZWVlZWVlZWVlM2ZmM2VlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlZWVlZWVlZWVlZWUwMGUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU=\",\n        \"displayName\": \"moleAnimation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MzIwMDIwMDAyMDAwMDcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVjMGNjY2NjY2NjY2NjY2NjY2NjY2VjZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWViMGJiYmJiYmJiYmJiYmJiYmJiYmViZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlYzBjY2NjY2NjY2NjY2NjY2NjY2NlY2VlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlYjBiYmJiYmJiYmJiYmJiYmJiYmJlYmVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWMwY2NjY2NjY2NjY2NjY2NjY2NjZWNlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWIwYmJiYmJiYmJiYmJiYmJiYmJiZWJlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2VkZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmRlYmVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDBlMDhlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"displayName\": \"hammerAnimation\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Qv@;p79@e|(fGBFKaJ@[\":\n            case \"mole\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`;\n            case \"/LJ4HDC9/+6j@JGvC7#:\":\n            case \"grid\":return img`\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n77777777777777777777fffffffffffffffff777777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"Oag!`vsg+~Y,+WT2meT;\":\n            case \"hammer\":return img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"moleAnimation\":\n            case \"anim1\":return [img`\n. . . . . . . 5 . . . . . . . . \n. . . . . . . 5 5 . . . . . . . \n. 5 e e e e e e e e e e e e 5 . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`, img`\n. . . . . 5 . . . . . . . . . 5 \n5 . . . . . 5 . . . . . . . 5 . \n5 . . . . . . 5 . . . . . . . 5 \n. 5 . . . . . 5 5 . . . . 5 5 . \n5 . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \n`, img`\n. . . . . . 5 . . . . . . . . . \n. . . . . . . 5 . . . . . . . . \n5 . . . . . . . 5 . . . . . . . \n. 5 . . . . . . 5 . . . . . . 5 \n. 5 . . . . . 5 . . . . . . 5 . \n. . 5 . . . . 5 . . . . . . . 5 \n. 5 . . . . . . . . . . . . 5 5 \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`];\n            case \"hammerAnimation\":\n            case \"anim2\":return [img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\".{RX=%Dh$6newpr[9[I^\">myHammer</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"run_image_animation\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\".{RX=%Dh$6newpr[9[I^\">myHammer</field></block></value><value name=\"frames\"><block type=\"animation_editor\"><field name=\"frames\">[img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`]</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":null}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\"><field name=\"on\">false</field></shadow></value></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Whackem2 - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"custom.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n"
}
```