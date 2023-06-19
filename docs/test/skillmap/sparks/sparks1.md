# Pile of Sticks
### @explicitHints true


## prehistoric (adjective) @showdialog


_prē-(h)i-ˈstȯr-ik_

: from a time before human records were kept

---

This tutorial will help you create your own game set near prehistoric Mount Carmel in Israel, with the goal of lighting a fire before the wind blows away your sparks.



## {2. Your First Block}

**Ready to start coding?**

We need a place for the mole to hide.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab <br/>

```block
scene.setBackgroundImage(img`.`)
```

then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.


~hint Click here to see how 🕵🏽


- :lightbulb: The panel with the colorful category names is called the
 **toolbox**. <br/>
 Click ``||scene: Scene||`` to find the block you need.

![Look under Scene for the block you need](/static/skillmap/mole/add-bg-block.gif "Drag out the background block to fill later.")


hint~





#### ~ tutorialhint


```blocks
scene.setBackgroundImage(img`.`)
```


## {3. Choose the grid}

**Choose the grassy grid.**

- :mouse pointer: Click the empty square inside the background block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/mole/my-assets.gif "Change from the Editor to My Assets and select the grid.")
<br/>Choose the **grid** background.<br/>
![Choose the background that looks like a grid full of holes.](/static/skillmap/mole/grid.png "Select the grid from My Assets.")
<br/>Then click **Done**.




~hint Click here to see how 🕵🏽

![Switch to My Assets to select the grid](/static/skillmap/mole/choose-bg.gif "Click the grassy grid background.")

hint~





#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
```


## {4. Check Your Game!}


- :binoculars: Look at your project in the game window to see how it has changed!

You should see a green background with 9 holes where the moles can hide.


~hint Click here to see how 🕵🏽

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")

hint~







## {5. Add the Sprite}


Now we'll add the mole **SPRITE** to our game.

~hint What's a sprite? 💡

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our mole will be a sprite, too.

hint~

<br/>

- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab <br/>

```block
let myMole = sprites.create(img`.`, SpriteKind.Enemy)
```

and snap it inside at **the bottom** of the ``||loops(noclick): on start||`` block already in the workspace.


~hint Show me how! 🕵🏽


![Add the sprite block.](/static/skillmap/mole/add-sprite.gif "Add a sprite to your game.")

hint~




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
//@highlight
let myMole = sprites.create(img`.`, SpriteKind.Enemy)
```



## {6. Choose the Mole}


- :mouse pointer: Click the empty square inside the new block and switch to the **My Assets** library.

![Switch to My Assets](/static/skillmap/mole/my-assets.gif "Change from the Editor to My Assets and select the grid.")

- :mouse pointer: Select the **mole** sprite <br/>
![Choose the image that looks like a mole head.](/static/skillmap/mole/mole.png "Select the mole from My Assets.")
and click **Done**.

~hint Show me how! 🕵🏽

![Choose the image that looks like a mole head.](/static/skillmap/mole/choose-mole.gif "Add a mole to your game.")


hint~




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
//@highlight
let myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
```



## {7. Make the Mole Move}

Let's get the mole jumping from hole to hole every second.

- :circle: From the ``||game: Game||`` category **in the toolbox**, grab <br/>
```blocks
game.onUpdateInterval(1000, function () {
    let mySprite: Sprite = null
    simplified.moveToRandomHoleOnGrid(myMole)
})
```
<br/>and drop it onto **an empty area** of the workspace.


The is an **EVENT** block and it will cause the **ACTION** inside to happen each time a second passes.

~hint Tell me about events! 💡

---

Events are things that might or might not happen while the code is running.  A player might press a button, a timer might run out, or one sprite might overlap with another.

Each of those things is an event that you can assign a special action to in Arcade.

hint~

~hint Show me how! 🕵🏽

![Add an on game update bundle.](/static/skillmap/mole/game-update.gif "This adds and event block with an action inside.")

hint~




#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
```



## {8. Check Your Game!}


- :binoculars: Take a look at the game window to see your project!

You should see the mole changing spots every second.





## {9. Finale}

**🎉 Way to Go 🎉**

You have started your very own Whack-the-Mole game.


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/mole/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap so you can add a rubber hammer!





```ghost
info.onScore(-5, function () {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inCutscene == false) {
        info.changeScoreBy(1)
        firePit.startEffect(effects.fire, 100)
    }
})
info.onScore(30, function () {
    bumpLevels()
})
function bumpLevels () {
    if (currentLevel == 5) {
        game.setGameOverScoringType(game.ScoringType.None)
        game.setGameOverMessage(true, "Great job, Fire Maker!")
        game.gameOver(true)
    }
    firePit.setImage(list[currentLevel])
    info.setScore(0)
    story.startCutscene(function () {
        inCutscene = true
        story.printCharacterText("Congrats! You started a fire! But...can you do it with fewer sticks?")
        story.printCharacterText("See if you can pass Level " + currentLevel + "!")
        inCutscene = false
    })
    currentLevel = currentLevel + 1
    textSprite.setText("Level " + currentLevel)
}
let textSprite: TextSprite = null
let firePit: Sprite = null
let currentLevel = 0
let list: Image[] = []
let inCutscene = false
story.startCutscene(function () {
    inCutscene = true
    story.printCharacterText("You are in Israel circa 100,000 B.C.")
    story.printCharacterText("It's getting cold. Press the (A) button as quickly as possible to light a fire that will keep you warm.")
    inCutscene = false
})
list = [
assets.image`level1`,
assets.image`level2`,
assets.image`level3`,
assets.image`level4`,
assets.image`level5`
]
currentLevel = 1
inCutscene = false
scene.setBackgroundImage(assets.image`background`)
firePit = sprites.create(assets.image`level1`, SpriteKind.Player)
firePit.setPosition(70, 80)
textSprite = textsprite.create("Level 1")
textSprite.setPosition(30, 10)
textSprite.setOutline(1, 6)
game.onUpdateInterval(1000, function () {
    if (inCutscene == false) {
        info.changeScoreBy(currentLevel * -1)
    }
})

```



```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAA4A7w7gAAAAAAAAAAAAAAAOAO/v4AAAAAAAAAAAAAAADg7u/+AAAAAAAAAAAAAAAA8O7v/gAAAAAAAAAAAAAA4P7+4A8AAAAAAOAAAA4AAO4P/+4PAAAAAADw7gDgDuD+4O/gDwAAAAAAAO/uDvDvD/D/7g8AAAAAAADw7+7/7g/v7/4AAAAAAAAAAPDu7/7+7v7+AAAAAADg7u7u/+8P/u7w/gAAAAAA/v//7v//7u/g/v4AAAAAAAAA4A7g7/7uDv7+AAAAAAAAAAAA/uD/7/7g7wAAAAAAAAAA4A/+DvDu7u8AAAAAAAAAAAAA/gAA/+7vDgAAAAAAAAAA4A8AAADv7w4AAAAAAAAAAPAAAAAA/v4OAAAAAAAAAAAAAAAAAP7wDgAAAAAAAAAAAAAAAAD+AO8AAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"level1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAA4A7w7gAAAAAAAAAAAAAAAOAO/v4AAAAAAAAAAAAAAADg7u/+AAAAAAAAAAAAAAAA8O7v/gAAAAAAAAAAAAAA4P7+4A8AAAAAAAAAAA4AAO4P/+4PAAAAAAAAAADgDuD+4O/gDwAAAAAAAAAAAPDvD/D/7g8AAAAAAAAAAAD/7g/v7/4AAAAAAAAAAAAA7/7+7v7+AAAAAAAAAAAA/+8P/u7w/gAAAAAAAAAAAP//7u/g/v4AAAAAAAAAAADg7/7uDv7+AAAAAAAAAAAA/uD/7/7g7wAAAAAAAAAA4A/+DvDu7u8AAAAAAAAAAAAA/gAA/+7vDgAAAAAAAAAA4A8AAADv7w4AAAAAAAAAAPAAAAAA/v4OAAAAAAAAAAAAAAAAAP7wDgAAAAAAAAAAAAAAAAD+AO8AAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"level2\"\n    },\n    \"image3\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAADu7gAAAAAAAAAAAAAAAAAA7v4AAAAAAAAAAAAAAAAA4O7+AAAAAAAAAAAAAAAAAODv/gAAAAAAAAAAAAAAAADu7w8AAAAAAAAAAADgAADg/v4PAAAAAAAAAAAAAO4A7u/+DwAAAAAAAAAAAAAA//7w/w8AAAAAAAAAAAAA8O/+8P4AAAAAAAAAAAAAAPDu7+/gAAAAAAAAAAAAAPD//uAP/gAAAAAAAAAAAADw/+/+/uAAAAAAAAAAAAAAAP7u7+4OAAAAAAAAAAAAAOAP/v/u7wAAAAAAAAAAAAD+4O8A7+4AAAAAAAAAAAAAAOAPAPDvDgAAAAAAAAAAAAD+AADg/w4AAAAAAAAAAAAADwAA8O4OAAAAAAAAAAAAAAAAAPDgDgAAAAAAAAAAAAAAAADw4O8AAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"level3\"\n    },\n    \"image4\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAA4A7w7gAAAAAAAAAAAAAAAOAO/v4AAAAAAAAAAAAAAAAA7u/+AAAAAAAAAAAAAAAA8O7v8AAAAAAAAAAAAAAAAP7+4A8AAAAAAAAAAAAAAAAP/+4PAAAAAAAAAAAAAAAA4O/gDwAAAAAAAAAAAAAAAPD/7g8AAAAAAAAAAAAAAADv7/4AAAAAAAAAAAAAAAAA7v7+AAAAAAAAAAAAAAAAAO7w/gAAAAAAAAAAAAAAAADg/v4AAAAAAAAAAAAAAAAADv7+AAAAAAAAAAAAAAAAAP7g7wAAAAAAAAAAAAAAAADu7u8AAAAAAAAAAAAAAAAA/+7vDgAAAAAAAAAAAAAAAADvDw4AAAAAAAAAAAAAAAAADv4OAAAAAAAAAAAAAAAAAP7wDgAAAAAAAAAAAAAAAAD+AO8AAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"level4\"\n    },\n    \"image5\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAADw7gAAAAAAAAAAAAAAAAAO/v4AAAAAAAAAAAAAAAAA7u/+AAAAAAAAAAAAAAAAAODv8AAAAAAAAAAAAAAAAADw4A8AAAAAAAAAAAAAAAAA/+4PAAAAAAAAAAAAAAAAAODgDwAAAAAAAAAAAAAAAAAA7g8AAAAAAAAAAAAAAAAA4P4AAAAAAAAAAAAAAAAAAPD+AAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAP4AAAAAAAAAAAAAAAAAAPD+AAAAAAAAAAAAAAAAAADg7wAAAAAAAAAAAAAAAAAAAO8AAAAAAAAAAAAAAAAAAODvDgAAAAAAAAAAAAAAAADvDw4AAAAAAAAAAAAAAAAADv4OAAAAAAAAAAAAAAAAAP7wDgAAAAAAAAAAAAAAAAD+AO8AAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"level5\"\n    },\n    \"image6\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAEBEBAAAA4AAAAAAAAAAAABEREQAAAO4AAAAAAAAAAAAREREAAAAOAAAAAAAAAAAAERERAADgDgAAAAAAAAAAABER4QAA4AAAAAAAAAAAAAAREeEOAOAAAAAAAAAAAAAAAAAA7gAOAAAAAAAAAAAAAAAAAO4ADgAAAAAAAAAAAAAAAADgAA4AAAAAAAAAAAAAAAAA4ADuDu4OAAAAAAAAAAAAAODu7u4OAAAAAAAAAAAAAAAA7g4AAAAAAAAAAAAAAAAAAODuAAAAAAAAAAAAAAAAAADg4O4AAAAAAAAAAAAAAAAA4ADgDgAAAAAAAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAEBERAAAAAAAAAAAAAAAAABAREQAAAAAAAAAAAAAAAAAQEREBAAAAAAAAAAAAAAAAEBERAQAAAAAAAAAAAAAAABAREQAAAAAAAAAAAAAAAAAAEREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"right\"\n    },\n    \"-]2:@?f|8lKcA]-v]N!T\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBEBAAAAAAAAAAAAAAAAABEREQAAAAAAAAAAAAAAAAAREREAAAAAAAAAAAAAAAAAERERAAAAAAAAAAAAAAAAABER4QAAAAAAAAAAAAAAAAAREeEOAAAAAAAAAAAAAAAAAAAA7gAOAAAAAAAAAAAAAAAAAO4ADgAAAAAAAAAAAAAAAADgAA4AAAAAAAAAAAAAAAAA4ADuDu4OAAAAAAAAAAAAAODu7u4OAAAAAAAAAAAAAAAA7g4AAAAAAAAAAAAAAAAAAODuAAAAAAAAAAAAAAAAAADu4O4AAAAAAAAAAAAAAADgDgDgDgAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAA7gAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAQEREAAAAAAAAAAAAAAAAAEBERAAAAAAAAAAAAAAAAABAREQEAAAAAAAAAAAAAAAAQEREBAAAAAAAAAAAAAAAAEBERAAAAAAAAAAAAAAAAAAAREQAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"left\"\n    },\n    \"#Cfex371`H3/1uj5hyf]\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlplpmZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZplpmZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmZlmZplpaZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmaZlpZmZpaZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlplmZpZpZmZpaZZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlmaZZmZmZmZpZpZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmWZpZmaWlpZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZpZmZpaWaZZpZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlmlmZmZmZmaZZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmlplmlpZpZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmZmWlpZmlmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlplmlmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlplmlmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWaWZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWaWZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaZZmZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWlmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmaWZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWaWZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZpZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZpZmZmZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZlplmZpZmaWZmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZpaWaWlmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZpaWZmlmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmZZplmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmZZplmZmZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZpmWZpZmZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpmWaZZmZmZmZmZmZmZnZ3d3d3u3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3d3e7u3t3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3d3fHu7x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZnZ3d7fLzHx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZpZmZmZmZmZmZmZnZ3t7u7zMt3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZmZmZnZ3t7v7y8t3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZmZmZnZ3t8v/u7t3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmlmZmZmZmZmZmZnZ3t8u/u8t3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZmZmZmZnZ3d8z/vMx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZmZnZ3d7v/u8x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmaZZmZmZmZmZmZmZnZ3t7v8y8x7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZnZ3t8v7vrt7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZnZ3t8z7y7t7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZnZ3x7z7zLt7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZnZ3u7z/zMt7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZnZ3t7z/y8x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3x8zvu8x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3d8vsy8x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3u8z/y8t7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZnZ3t8z/zMt8d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZmZnZ3t8z8zLt8d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlpmZZmZmZmZmZmZmZmZnZ3d8v7u7t8d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWmZZmZmZmZmZmZmZmZmZnZ3d8y8zLt3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlpZmZmZmZmZmZmZmZmZnZ3d7zLzMx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmaWZmZmZmZmZmZmZnZ3d8vMu8t3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmaWZmZmZmZmZmZmZnZ3d8fMu3x3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmaWZpZmZmZmZmZmZnZ3d3e8zHx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmlmZpZmZpZmZmZmZmZmZnZ3d3fHzHx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmaWZpZmZmZpZmZmZmZmZmZnZ3d3d3zHx3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmaWZmZmZmZpZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmaWlmZmZmaZZmZmZmZmZmZnZ3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmlmZpZmZmaWZmZmZru7u7u7u3t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWmWZpZmZpaWZmZmu7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWmWZpZmZmaWZra7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZpZmZmaZtru7y7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZpaWlma7u7u7y7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaZaWlru7u7u7y7y7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZubu7u7u7u7y7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7y7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbm7u7u7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7u7vLu7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm8u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbm8u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu8u8u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u8u8u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbu7u8vMu7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7vMu7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmbm7u7u7u7vLu7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7vLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7vLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7zLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7u7u7u7u8zMzMzMzLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u7u7u7vLzMzMzMzMvLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmbm7u7u7u7u7u7u7u7u7u7u7u7vLzMzMzMzMzMzMzLu7d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7u7u7vMzMzM/P//////zMz8d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u7u7u8zM////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u7u7zPz/////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7vL/P//////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZu7u7u7u7u7u7u7u7u7u7u7vM////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u8v8////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u8v/////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u8v/////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u8v/////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u8z/////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u/z/////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm5u7u7u7u7u7u7u7u7u7u7u///////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7u7u///////////////////////d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7u7u//////////////////////3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZm7u7u7u7u7u7u7u7u7u7u7u//////////////////////3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbm7u7u7u7u7u7u7u7u7u7u7u//////////////////////3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbm7u7u7u7u7u7u7u7u7u7u7u//////////////////////3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbm7u7u7u7u7u7u7u7u7u7u7u/////////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcm7u7u7u7u7u7u7u7u7u7u7u/////////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmby7u7u7u7u7u7u7u7u7u7u7u/////////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcy7u7u7u7u7u7u7u7u7u7u7u/////////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcy7u7u7u7u7u7u7u7u7u7u7u/v///////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcy7u7u7u7u7u7u7u7u7u7u7u7v///////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcy7u7u7u7u7u7u7u7u7u7u7u7v///////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcy7u7u7u7u7u7u7u7u7u7u7u7v7//////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcu7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmcu7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu8u7u7u7u7u7u7u7u7u7u7u7u7+/////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu8u7u7u7u7u7u7u7u7u7u7u7u7u/////////////////9/d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu8u7u7u7u7u7u7u7u7u7u7u7u7u7v///////////////9/d7t7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7+/////////////9/t7u7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v//////////3t/t7u7d3d3d3d3d3d3d3eZmZmZmZmZmZmZmbu7u7u7u7u7u7u7u7u7u8u7u7u7u7u7u7u7u7u7u7u7u7t3t7u7d3d3d3d3d3d3d3eZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u8u7u7u7u7u7u7u7u7u7u7u7u7t3vLu7d3d3d3d3d3d3d3eZmZmZmZmZmZmZubzLu7u7u7u7u7u7u7u7u8u7u7u7zLy7u7u7u7u7u7u7u7vMvLu7e3d3d3d3d3d3d3eZmZmZmZmZmZmZubu7u7u7u7u7u7u7u7u7u8u7u7u7u8zMzLu7u7u7u7u7u7vMu7u7e3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"background\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"level1\":return img`\n................................\n................................\n................................\n................................\n.................e..............\n................ef..............\n................ef..............\n...........ef...ef..............\n............ef..ef..............\n............eef.efe.............\n.............ef.eee.............\n.............eefee..e...........\n...........e.eeeff.ef...........\n............e.eeffef..ef........\n............e.fffff.eef.........\n.............ffeefeeff..........\n.............feefeefe...........\n............eeef.eff............\n...........eeffeefef............\n..........eef..ffeeef...........\n..........ef..fee.eeef..........\n......eeeff.efeeee.fef..........\n......eeeeeffffe.ee.eefeee......\n........eeffefeffffeeeefff......\n.......eff.e.eeeeeeffffe........\n......ffeeeeeefffffeeeeff.......\n.....eeeeeffff.......eeeeff.....\n......efff...............ee.....\n................................\n................................\n................................\n................................\n`;\n            case \"image2\":\n            case \"level2\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....................e...........\n...........e....ff.ef...........\n............e...ffef..ef........\n............e.fffff.eef.........\n.............ffeefeeff..........\n.............feefeefe...........\n............eeef.eff............\n...........eeffeefef............\n..........eef..ffeeef...........\n..........ef..fee.eeef..........\n......eeeff.efeeee.fef..........\n......eeeeeffffe.ee.eefeee......\n........eeffefeffffeeeefff......\n.......eff.e.eeeeeeffffe........\n......ffeeeeeefffffeeeeff.......\n.....eeeeeffff.......eeeeff.....\n......efff...............ee.....\n................................\n................................\n................................\n................................\n`;\n            case \"image3\":\n            case \"level3\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....................e...........\n...........e....ff.ef...........\n............e...ffef..ef........\n............e.fffff.eef.........\n.............ffeefeeff..........\n.............feefeefe...........\n............eeef.eff............\n...........eeffeefef............\n..........eef..ffeeef...........\n........eeefeffe.feeefefff......\n......eeeffeefe.e.efeffe........\n......eeeeeffffefe.eeefeee......\n.....eeeeeffff.......eeeeff.....\n......efff...............ee.....\n................................\n................................\n................................\n................................\n`;\n            case \"image4\":\n            case \"level4\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n..........ef..fee.eeef..........\n......ee.ff.efeeee.fef..........\n......eeeeeffffe.ee.eefeee......\n........eeffefeffffeeee.ff......\n.......eff.e.eeeeeeffffe........\n......ffeeeeeefffffeee.ff.......\n.....eeee.ffff.......eeeeff.....\n......efff...............ee.....\n................................\n................................\n................................\n................................\n`;\n            case \"image5\":\n            case \"level5\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.......ee..f..........feee......\n........eeffe.ef..fe.ee.ff......\n.......eff.e.eeeeeeffffe........\n......ffeeeeeefffffeee.ff.......\n.....eeee.ffff.......eeeeff.....\n......efff...............ee.....\n................................\n................................\n................................\n................................\n`;\n            case \"image6\":\n            case \"right\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....11111.......................\n...111111.......................\n...111111.......................\n...111111.......................\n...111111.......................\n....111ee.............11111.....\n........eee...........111111....\n.........eeeee......ee111111....\n.............ee...ee..111111....\n.............eeeeee...111111....\n.........eeeeeee........11......\n......eee...ee.ee...............\n....eee.....ee..e...............\n..eee........e..ee..............\n............ee...e..............\n............e...................\n............e...................\n................................\n`;\n            case \"-]2:@?f|8lKcA]-v]N!T\":\n            case \"left\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....11111.......................\n...111111.................11111.\n...111111.................111111\n...111111...............ee111111\n...111111.............ee..111111\n....111ee............ee...111111\n........eee........ee.......11..\n.........eeeee...eee............\n.............ee.ee..............\n.............eeee...............\n.........eeeeeee................\n............ee.ee...............\n............ee..e...............\n.............e..ee..............\n............ee...e..............\n............e...................\n............e...................\n................................\n`;\n            case \"#Cfex371`H3/1uj5hyf]\":\n            case \"background\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbb\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ccccccbbbbbbbbbcb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbcbcccccccbbbbbbbbb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbcccbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999969999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999696699999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999666669999999999999999999999969999999999996699999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999966696666699999999999999999999969999999999966666999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999966699999999999999999999999666999999996666999999999999999999999999999999999996999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999666666999999999999999999999966699999999666666699999999999999999999999999999999699999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999999669696699999999999999999999696669999999666666999999999999999999999999999999996699999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999999666699999999999999999999966666999996666999999999999999999999999999999999996666999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999996696669999999999999999999666666699999969666666699999999999999999999999999996666699999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999966666666999999999999999999666666699999999666699999999999999999999999999999966699969999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999999669669999999999996999999666666666966666666666999999999999999999999999999996666666999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999666666669999999999666669999996666966999666666666666999999999999999999999999666966999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n9999966996996666699999966666996666666666666666666666699999999996999999999999966666666666669999999999999999999bcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc\n99999996666669999999999666666666666666666666666666666999999999966999999999999999666696666669999999999999999bccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99996666666966666999999966966666666666666666666666996666699996666999999999999696666666669999999999999999bbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999666666669966669999996666666666666666666666666666666699999966666699999999999666666666666669999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n99999996666666699999666666666666666666666666666666699999999996666669999999999966666666666666699999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n999999666666669996666666666666666666666666666666666666666999666666699999999996666666666666666999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffbbbbbbbbbbbbbbb\n99999999996999666666666666666666666666666666666666666666699966666669999999999966666966699999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccffffffffffffbbbbbbbbbbbbbb\n996999999969666666666666666666666666666666666666666666699999966666999999999966666666666666666999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffbbbbbbbbbbbb\n966999999666666666666666666666666666666666666666666666669996666666999999999966669996666666699999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffbbbbbbbbbbb\n9666666666666666666666666666666666666666666666666666666669966666666699999999666666666696666669bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffbbbbbbbcb\n666666666666666666666666666666666666666666666666666666666666666966669999666666666666666666699bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffbbbbbbcb\n66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffbbbbbcc\n66666666666666666666666666666666666666666666666666666666666666666666666666666666669999969666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffbbbbbbc\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffbbbbbc\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffbbbbbc\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffffffffbbbbbc\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffbbbbc\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffbbbbb\n66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffbbbbb\n66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffffffffffbbbb\n66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffbbbb\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffbbbb\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffbbbb\n7777777777777777777777777777777777777777777777777777777777777777777777b777b777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffffffffffffbbbb\n777777777777777777777777777777777777777777777777777777777777bbbb77bbbcbbc7bbb7777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccfffffffffffffffffffffffffffffffbbbb\n777777777777777777777777777777777777777777777777777777777777bbbbcbbbcccccbcccbccb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffbbbbb\n77777777777777777777777777777777777777777777777777777777777bbbcccbbccbbbcccccccbcc777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffff7bbbb\n777777777777777777777777777777777777777777777777777777777b7bbbffffcbbbfffcffcbcbccc777777bbbbbb77777bbbbbbbbbbbbbbbbbbbbbbbbcffffffffffff7777fffffffffffffff77cc\n777777777777777777777777777777777777777777777777777777777bccbffbffffffffeeffffbcccbc77777777777777777777bbbbbbbbbbbbbbbbbbbbfffffffffffffffff77777777777777777cc\n77777777777777777777777777777777777777777777777777777777bbbccbbbcbbebccbbbbccbccbbccc777777777777777777777777777777777777777777777777777777777777777777777777ccb\n77777777777777777777777777777777777777777777777777777777bbbcccbbbbcbccccbccccbccbbccc777777777777777777777777777777777777777777777777777777777777777777777bbbbbb\n777777777777777777777777777777777777777777777777777777777bccbbbbcccbbbbcccbbbbbcbcccc77777777777777777777777777777777777777777777777777777777777777777777bbbbbbb\n7777777777777777777777777777777777777777777777777777777777b7ccbccccbbbccccccbbbcc777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb\n777777777777777777777777777777777777777777777777777777777777777777bbbbb777bccc777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbb\n77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"D9mr0|%**-;-qv%mEsfQ\">firePit</variable><variable id=\"l=[}/)_P,jRg!8Db6Dik\">currentLevel</variable><variable id=\"@|L0b^vS5m$bSbw6X4oe\">inCutscene</variable><variable id=\"FP?=c+ASKW-sI0^@HmpL\">textSprite</variable><variable id=\"{Aqcpt6U;Ub@Ii*Yl8Z`\">mySprite</variable><variable id=\"7N3Wq)SI_mLL=oQQ??:!\">list</variable><variable type=\"KIND_SpriteKind\" id=\"$NE]2jQG+5m+(v*tY/9m\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"h(DXj=B]je:3+,@i1iqc\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"`!5xZ7*eGma}]9yF:d}I\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"m:o@g(dZ-S!oOt`pAg*Q\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"f-/G!*T#cY.PZPA35T{j\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"y[Y!u3%s)e$%4wO3w-6!\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"NYQaZZzr%6,ql0Zm#{dI\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"X`(;Xzd.nC=nAY:PK)GT\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"T%@WAAJ^{AoR0Mb$S`a-\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"6s^+s%`SR)c@Q0~T)7on\">Moon</variable><variable type=\"KIND_SpriteKind\" id=\"h-P3!QFGCi(!*U]o{MEI\">StatusBar</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Prehistoric-assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```