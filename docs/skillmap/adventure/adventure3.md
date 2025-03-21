# Lives and Gold
### @explicitHints true


## {Intro @showdialog}


Let's add some rewards to your quest.

The code for your adventure is already in the workspace. <br/>
We can keep adding to it.

![Let's go on an adventure!](/static/skillmap/adventure/adventure3.gif " " )




## {Step 2}

**Set a starting number of lives**<br/>
❤️ ❤️ ❤️

Instead of ending the game when things go poorly, you can take away a life.

---


- :id card: From ``||info: Info||``, drag <br/>
``||info: set life to [5]||`` <br/>
into **the top of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
//@hide
function quest1(){}

//@highlight
info.setLife(5)
quest1()

```




## {Step 3}

**Duplicate** another quest to create an option for when the player chooses (B) that first time.

---

- :mouse pointer: Right click on <br>
``||functions(noclick): quest2||`` and choose
**Duplicate** from the dropdown menu.

- :binoculars: You have created a third function called ``||function: quest3||``!

- :mouse pointer: Change the music, images, and text inside to create a new adventure!



#### ~ tutorialhint

```blocks
//@highlight
function quest3 () {
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`drago`)
    adventure.addToTextlog("A dragon hovers above. The flap of his wings is threatening.")
    adventure.addToTextlog("Press (A) stand and watch.")
    adventure.addToTextlog("Press (B) to hide.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("That was a really bad idea.")
        adventure.addToTextlog("The dragon meets your gaze and sweeps down to grab you.")
        game.over(true)

    } else {
        adventure.addToTextlog("You hide behind a large tree with a cavern in the trunk.")
        adventure.addToTextlog("Inside, you see something glimmer.  It's a treasure chest!")
        game.over(false)

    }
}
```



## {Step 4}

**Too many functions?**

---

Are your functions taking up too much of the workspace?  Try collapsing them!

![Collapse your functions](/static/skillmap/adventure/collapse.gif)


~hint Other space-saving options 💡

---

There's more to the workspace than what you see.

Try clicking an empty area of the workspace to **drag it around**, or scroll up and down or left to right.

You can also **zoom the workspace** in and out using the plus and minus buttons.

![Zoom the workspace](/static/skillmap/adventure/zoom.gif)


hint~


#### ~ tutorialhint

```blocks
//@collapsed
function quest3 () {
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`drago`)
    adventure.addToTextlog("A dragon hovers above. The flap of his wings is threatening.")
    adventure.addToTextlog("Press (A) stand and watch.")
    adventure.addToTextlog("Press (B) to hide.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("That was a really bad idea.")
        adventure.addToTextlog("The dragon meets your gaze and sweeps down to grab you.")
        game.over(true)

    } else {
        adventure.addToTextlog("You hide behind a large tree with a cavern in the trunk.")
        adventure.addToTextlog("Inside, you see something glimmer.  It's a treasure chest!")
        game.over(false)

    }
}
```




## {Step 4}

Instead of ending the game as a loss
when the user presses (B) in **quest1**, you can remove a life and send the player on
a different quest.

---


- :binoculars: Look inside of <br>
``||functions(noclick): quest1||`` <br/>
for the <br/>
``||game(noclick): game over <LOSE> +||`` <br/>
block, and delete it.


- :id card: From ``||info:Info||`` , drag <br/>
``||info: change life by [-1]||`` <br/>
into  ``||functions(noclick): quest1||`` <br/>
under **else**, where <br/>
``||game(noclick): game over <LOSE> +||`` <br/>
used to be.


- :function: From the ``||function: Functions||`` category, add
``||functions(noclcik):call quest3||`` <br/>
right below <br/>
``||info: change life by [-1]||``. <br/>



```blockconfig.local
info.onLifeZero(function () {
    game.over(false)
})
```

#### ~ tutorialhint

```blocks
//@hide
function quest2(){}
//@hide
function quest3(){}

function quest1 () {
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`strum`)
    adventure.addToTextlog("A traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        quest2()
    } else {
        adventure.addToTextlog("Bad luck has found you." )
        //@highlight
        info.changeLifeBy(-1)
        //@highlight
        quest3()
    }
}

```



## {5. Check Your Game!}

**Take a look at your adventure!**

- :binoculars: Look at your project in the game window to see how it has changed!

💡 _You may need to turn the sound on beside the game window to hear the music you added._




## {6. Add variety}

**Shake it up!**

Go through your functions and move things around.  Sometimes (A) should have a good outcome,
but other times it should be the worst choice.

💡 _These stories might start to get confusing as you go.  Try mapping the plot on paper
so you know exactly how many possibilities you want to create._




```blockconfig.local
info.onLifeZero(function () {
    game.over(false)
})
```


## {7. End Game}

**End the game when you run out of lives.**

---

- :id card: From ``||info:Info||`` drag the<br>
``||info: on life zero||`` <br/>
bundle out into **an empty area** of the workspace.<br/>

Now, when the player runs out of lives, the game will end as a loss.


```blockconfig.local
info.onLifeZero(function () {
    game.over(false)
})
```

#### ~ tutorialhint

```blocks
//@highlight
info.onLifeZero(function () {
    game.over(false)
})
```




## {8. Add Gold}

**Add gold.**

Just like you removed lives from the bad choices,
try adding gold for the good choices.

---

- :binoculars: Look inside of <br>
``||functions(noclick): quest1||`` <br/>
for the <br/>
``||functions(noclick): call quest2||`` <br/>
block.


- :compass: From ``||adventure:Adventure||`` , drag <br/>
``||adventure: change [coins] by [5]||`` <br/>
in **just above** the <br/>
``||functions(noclick): call quest2||`` <br/>
block.


#### ~ tutorialhint

```blocks

//@hide
function quest2(){}
//@hide
function quest3(){}

function quest1 () {
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`strum`)
    adventure.addToTextlog("A traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure." )
        //@highlight
       adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest2()
    } else {
        adventure.addToTextlog("Bad luck has found you." )
        info.changeLifeBy(-1)
        quest3()
    }
}
```





## {9. Win Game}

**End the game when you get enough gold.**

---

- :id card: From ``||info:Info||`` drag the<br>
``||info: on score [20]||`` <br/>
bundle out into **an empty area** of the workspace.<br/>

Now, when the player reaches 20 gold, the game will end as a win.

Try changing the amount of gold needed to win or the number of lives the player starts with.




#### ~ tutorialhint

```blocks
//@highlight
info.onScore(20, function () {
    game.gameOver(true)
})
```



## {10. Check Your Game!}

**Take another look at your adventure!**

- :binoculars: Take a journey through all of your quests!  Is there more you want to say? More you want to do? <br/><br/>
Do you have enough quests for your user to lose all of their lives or **earn enough gold** for a win?

You can keep adding more quests or more text until you're happy with your adventure.




## {Finish}

**Way to go!**<br/>
💰 🧭 💰

~hint How do I share my game?💡

---

**Want to share your adventure?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/adventure/share.gif )

hint~

Once you're happy with your adventure, click **Done** to return to the main skillmap
where you can share your final game with family and friends.



```blockconfig.global

info.onLifeZero(function () {
    game.over(false)
})

info.onScore(20, function () {
    game.gameOver(true)
})
adventure.addImageToTextLog(img`.`)
adventure.changeScoreOverride(adventure.Currency.Coins, 5)
music.setVolume(20)
info.setLife(5)
adventure.addToTextlog("Oh no! There is a dragon in your path!")
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
```


```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.12
adventure_imgs=github:kiki-lee/adventure_imgs
```



```template
function quest1 () {
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`strum`)
    adventure.addToTextlog("A traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`to_the_ballroom`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`shipped`)
    adventure.addToTextlog("Out of the darkness, sails part the clouds.")
    adventure.addToTextlog("Press (A) to head back toward land.")
    adventure.addToTextlog("Press (B) to board the vessel.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("You only get a few steps before you hear a loud BOOM")
        adventure.addToTextlog("Shards of wood fly toward the shore from an explosion aboard the ship")
        adventure.addToTextlog("You run back toward the forest, so glad to be alive.")
        game.over(true)
    } else {
        adventure.addToTextlog("The crew of the ship surrounds you with weapons drawn.")
        adventure.addToTextlog("You immediately regret your choice.")
        game.over(false)
    }
}
quest1()

```


```ghost
function quest3 () {
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`drago`)
    adventure.addToTextlog("A dragon hovers above. The flap of his wings is threatening.")
    adventure.addToTextlog("Press (A) stand and watch.")
    adventure.addToTextlog("Press (B) to hide.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("That was a really bad idea.")
        adventure.addToTextlog("The dragon meets your gaze and sweeps down to grab you.")
        info.changeLifeBy(-2)
    } else {
        adventure.addToTextlog("You hide behind a large tree with a cavern in the trunk.")
        adventure.addToTextlog("Inside, you see something glimmer.  It's a treasure chest!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 100)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`strum`)
    adventure.addToTextlog("A traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`to_the_ballroom`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`shipped`)
    adventure.addToTextlog("Out of the darkness, sails part the clouds.")
    adventure.addToTextlog("Press (A) to head back toward land.")
    adventure.addToTextlog("Press (B) to board the vessel.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("You only get a few steps before you hear a loud BOOM")
        adventure.addToTextlog("Shards of wood fly toward the shore from an explosion aboard the ship")
        adventure.addToTextlog("You run back toward the forest, so glad to be alive.")
        quest3()
    } else {
        adventure.addToTextlog("The crew of the ship surrounds you with weapons drawn.")
        adventure.addToTextlog("You immediately regret your choice.")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
scene.setBackgroundColor(1)
adventure.changeLogColors(3, 9)
quest1()


adventure.clearTextLog()
info.setLife(3)
info.changeLifeBy(-1)
scene.setBackgroundColor(1)
adventure.setScoreOverride(adventure.Currency.Coins, 100)
adventure.changeScoreOverride(adventure.Currency.Coins, 1)
adventure.changeLogColors(2, 6)
info.onScore(30, function () { })
```



```customts
music.setVolume(20);
```


```assetjson
{
  ".simstate.json": "{\"S/#run\":\"Rg==\",\"S/#scope\":\"YWR2ZW50dXJlX2pzb24=\"}",
  "assets.json": "",
  "images.g.jres": "{\n    \"image23\": {\n        \"data\": \"hwRAAEAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADu7k4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4N3V7kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeXR7tDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN3l4NHuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXQ4OHu4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADd4ODg4Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOUNDg7e7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQN7g4O3tDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4Q3e3t7uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABURO3t7e0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAA1d7e3u4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ7e3k7Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVTt7e7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDl7eTtDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANFO3t7uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOXt5O0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0U7e3u4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ5e3k7Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRTt7e7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDl7e3tDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANHe3t7uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEO3t7e0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0d7e3u7u7u7u7u7uAAAAAAAAAAAAAAAAAAAAAAAAAAAQ7e3t7e7u7u7u7u7uAAAAAAAAAAAAAAAAAAAAAAAAAADV3t7e3d3d3d3d7e7uAAAAAAAAAAAAAAAAAAAAAAAAAFDt7e3d3d3d3d3d7e4OAAAAAAAAAAAAAAAAAAAAAAAAANXe3t7d3d3d3d3d7e4AAAAAAAAAAAAAAAAAAAAAAAAAUO3t7d3d3dXd1d3d7g4AAAAAAAAAAAAAAAAAAAAAAABA3d7e3t3d3d3d3d3tDgAAAAAAAAAAAAAAAAAAAAAAAEDd7e3t7e7e3d3d3e3uAAAAAAAAAAAAAAAAAAAAAAAAQN3d3t5ORN7d3d3d3e4AAAAAAAAAAAAAAAAAAAAAAABA3d3t7eTM5N1d3d3d7g4AAAAAAAAAAAAAAAAAAAAAAEDd3d1Ozs5M7t3d3d3t7u4OAAAAAAAAAAAAAAAAAAAAQN3d7eTs7Mzk3d3d3d3t7u4OAAAAAAAAAAAAAAAAAABA3d3txM7OzuTd3d3d3d3d7u4OAAAAAAAAAAAAAAAAAEDd3e3E7Ozs5N3d3U3d3d3d7u4AAAAAAAAAAAAAAAAAQN3d7cTMzs7e3d3d3d3d3d3d7g4AAAAAAAAAAAAAAABQ3V3dTszs7O3d3V3d3d3d3d3t7gAAAAAAAAAAAAAAAFDd3d3tRETe3t7d3d3d3d3d3d3uDgAAAAAAAAAAAAAAUN3d3d3u7u3t7U3d3d3d3d3d3e3uAAAAAAAAAAAAAABQ3d3V3d3d3d7e3t3d3d3d3d3d3e4AAAAAAAAAAAAAAFDd3d1d3d3d7e3t3d3d3d3d3d3d7gAAAAAAAAAAAAAAANXd3d3d3d3d3t7e3d3d3d3d3d3uAAAAAAAAAAAAAAAAQd3d3d3d3V3t7e3d3d3d3d3d3e4AAAAAAAAAAAAAAABA3d3d3d3d1N3e3t7d3d3d3d3d7gAAAAAAAAAAAAAAABDU3d3d3d3d3e3t7d3d3d3d3d3uAAAAAAAAAAAAAAAAANTd3d3d1d3d3d7e3t3d3d3d3e4AAAAAAAAAAAAAAAAAQN3d3U3d3d3d7e3t393d3d3d7gAAAAAAAAAAAAAAAAAARN3d3d3d3d3d3v7e3d3d3d3uAAAAAAAAAAAAAAAAAAAARN3d3d3d3d3t793d3d3d3e4AAAAAAAAAAAAAAAAAAAAAVFXU3d3d3f3e3d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAA4N3d3d3d3d3d3d3d3e4OAAAAAAAAAAAAAAAAAAAAAADg3d3d3d3d3d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAAAODd3d3d3d3d3d3d3e4OAAAAAAAAAAAAAAAAAAAAAAAA4N7d3d3d3d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAAAAAA1d3d3d3d3d3d3e4OAAAAAAAAAAAAAAAAAAAAAAAAAABe3d3d3d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAAAAAAAFDV3d3d3d3d3e4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFXd3d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUN7d3d3d3e4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5d3d3d3t7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ5d3d3e4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVRETkDgAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"strum\"\n    },\n    \"image24\": {\n        \"data\": \"hwRPAFgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAMzMEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwQAAAAAAAAAAAAAAAADAEREbEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDBAAAAAAAAAAAAAAAAABC7y8zMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFEMAAAAAAAQAAAAAAAAsbG7y8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHMUAAAAAABAMAAAAABAbu7u7zMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcxQAAAAAAEMwAAAAAsVFVu7vLzAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzFAAAAAAABWwAAABBbtbtVu7vMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFEBAAAAELBbDAAAsbW7zBy1scvMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAURwAAAABvFvMAABRu8wAwFEbu8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBRzAEQEcy8W8wMELXMAAAAHLW7y8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFHMHMHMzLtbzMwMzAAAAAAQUbu8zAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAHMXMzMy8vFvMzAwAAAAAAAActcvMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcxczMzMy7W8zMzAAAAAAAABy1u8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzFzMzMvLxbzMzMzMzMzMAAELXLy8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFHMzMzMu1vMzMzMzMy7BQAQtbvMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUczMzLy8W8zMzMzLvFsAABC1y8vMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBRzMzMy7tbzMy8vLy7BQAAUbu7zMwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFHMzMy8u8XMzMu7u1sMAABRu8vMzAwAAAAAAAAAAAAAAAAAAAAAAAAAAADAUczMzMu7xczMvLy7xQwAAFG7ERHMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBRzMy8vLvFzMzLu1vMDAAAsREbGxEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzFzMy7W8zMvLxbxcwMABAcsbGxuwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHMXMvLxbzMzLW8XMzAwAwRy7u7u7HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcxczMu1vMvFXFzMzMDBDMsbu7u7u8DADAzBwBAAAAAAAAAAAAAAAAAAAAABzFzLu7xcxVzMzMzMvMwRy7u7u7u7vLwMzLyxsAAAAAAAAAAAAAAAAAAAAAwFHMvFvMXMzMzMy8zMy8u7u7u7u7u7vMzLy8vMwAAAAAAAAAAAAAAAAAAADAUcy7xczFzMzMy8zLzLy7u7u7u7u8vMvMzMzLGwwAzAAAAAAAAAAAAAAAAMBRzLzFXMzMzMy8vLzMzLu7uxsbu7vLu8zMzLy7wcwRDAAAAAAAAAAAAAAAABzFW8zFzMzMy8vLzMy8u7u7sbGxsby8y8zMzLsbG8sAAAAAAAAAAAAAAAAAHMVbXMzMzLy8vMzMzLy7uxsbEREby7u7zADAvLuxDAAAAAAAAAAAAAAAAAAcxVxVVcXMzMzMzFzMu7u7u7ERERGxu7zLAADAuxsAAAAAAAAAAAAAAAAAAMBRVRURUczMzMxVxby7u7u7GxsRERHLy8sAAAC8ywEAAAAAAAAAAAAAAAAAwFFVDAAQVVVVVczMvLu7u7u7EREREbG8ywAAAMCxHAAAAAAAAAAAAAAAAAAAHFUMAABRzMzMzMy7u7u7u7vLHBEREcvLAAAAABEMAAAAAAAAAAAAAAAAAADAEQwAABDFzLy8zLu7u7u7u7vLzByxuwwAAAAAEMwAAAAAAAAAAAAAAAAAAAAcwQAAAFHMzMu8u7u7u7u7u7u7ywDMAAAAAAAAwQAAAAAAAAAAAAAAAAAAAMARDADAFcXMzLy7u7u7u7u8u7u7zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwMALxbUczMvLu7u7G7y7u7u7u7y8sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAsbsVxcy8u7sbG7u7u7u7u8u8uxEREcHMAAAAAAAAAAAAAAAAAAAAAAAAAACxu1tRzMy7u7uxu7u8vLsRERERvLu7zLIMAAAAAAAAAAAAAAAAAAAAAAAAELW7uxXFzLy7Gxu7u8u7uxvFu7vLRLscEcsAAAAAAAAAAAAAAAAAAAAAAAAQtbu7W1HMvLu7sbG7vLu7u1G8u7tcv8vBvAwAAAC8zBsAAAAAAAAAAAAAABC1u7u7FcXMu7u7u8u7u8u7G8XLvMu0yxzMy8zLC8vLvBERAAAAAAAAAAAAELW7u7tbUby7u7u7u7u7vLy7UbzLvLy8y8GyzLy8vMscEQEAAAAAAAAAAAAQxbu7u7sVEbG7u7u7u8vLuxscxcvLu7y8HCHLzMu7u7wAAAAAAAAAAAAAABDFu7u7u7tVFRG7u7u7u8wcUcy7vLy8vLscHLvLvLu7HAEAAAAAAAAAAAAAAFG8uxu7u7tbVRERERERERG1xbvMzLzLzLzMIsvLu7sbEREAAAAAAAAAAAAAUcW7u7Gxu7tbVVVVVVVVzBzBu7y8vLy7HBy7y7y7uxsAAAAAAAAAAAAAAAAQVby7Gxu7u7u7y8zMzMy7u8zLy8u8vLwcIcvMzLsLAQEAAAAAAAAAAAAAAABRxbu7sbG7u7u7u7u7u7scHLXLzLu8y8EsywAAAAABEQAAAAAAAAAAAAAAABBVvLu7u7u7G7u8vLy8y1FRzMy8vMsczLLMAAAAEAEAAQAAAAAAAAAAAAAAAFHFu7u7u7Gxu8vLu7sRFcXLvMu0y8Esy7AAAAAQEAAAAAAAAAAAAAAAAAAAEFXMu7sbGxu7vLy7G1VRvLu7XL8cEbIMAAAAAAABAAAAAAAAAAAAAAAAAACwEVXMu7u7u7u7uxtRHMW7u8tEuxzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7EVXMu7u7u7sbUcVRvLu7u7u7y8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALC7EVXMu7vLEVHFvMvMzMy8u7uxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALu7EVVVVVVVxby7u7tRy8zMzAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsLu7EREREcy8y7y7EbXMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDAvLu7u7u7u7u7uxtRy8zMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABARwczMvLvLy7u8vLsbUbXMvLwLAAAAAAAAAAAAAAAAAAAAAAAAAAAQERERwczMzMzMu7u7y8u7G1G1AADLy7sAAAAAAAAAAAAAAAAAAAAAAAAAAMHMzMzMzMy8zMxcu7u7uxtRBQAAALC8uwsLAAAAAAAAAAAAAAAAAAAAAAAQFRERzMzMy8vLzMwREVVVVQUAAAAAALu7uwsAAAAAAAAAAAAAAAAAAAAAAFFVzMxczLzMzMwMAAAAAAAAAAAAAAAAALu7AQAAAAAAAAAAAAAAAAAAAAAQVVXMzMzFzAAAAAAAAAAAAAAAAAAAAAAAu7sRAAAAAAAAAAAAAAAAAAAAAFFVzMzLzFwMAAAAAAAAAAAAAAAAAAAAAACwuxERAAAAAAAAAAAAAAAAAAAQXMXMvLzMzAAAAAAAAAAAAAAAAAAAAAAAAAC7CwAAAAAAAAAAAAAAAAAAAMFVXMzLDADAAAAAAAAAAAAAAAAAAAAAAAAAELALAAAAAAAAAAAAAAAAAAAQXMXMxcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwEAAAAAAAAAAAAAAAAAALFczMzFDAAAAAAAAAAAAAAAAAAAAAAAAAAAALAQAQAAAAAAAAAAAAAAAAAAwcvMy1wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsBAAAAAAAAAAAAAAAAABC8zLzMXAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAEAAAAAAAAAAAAAAAAAwcvMzMzMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAABDLzMwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAELwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"drago\"\n    },\n    \"image25\": {\n        \"data\": \"hwRjAFMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAQCBFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYARYWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgBhhgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAaAGBCAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoAQYIEQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgGBhgBEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAZmGAYRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoBmaIBhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAZoYGFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAZohgYWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAZhgRCBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBoEWYBFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGhhZgEWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgaGhmARYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAD///8PAAAAAGBhCIgBBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAP/+/w8AAAAAYGiIiAYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/DwAAAAAAz//v/g8AAABgaGiIhhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM//DwAAAAAA/+/+DwAAAGBoaGiGFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8PAAAAAAD/v+v+DwAAYGhoaIYWAAAAAAAAAAAAAAAAAAAAAAAA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AAAACBaGCIYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8zM/O//AAAAAAAIhoZohgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQzMz87w8AAAAAAAgGgWiGBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/z/zvAAAAAAAAAGiBaIYWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDP/A8AAAAAAAAAaIBghhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/8DwAAAAAAAABogBCIEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8PAAAAAAAAAGCAYBgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8A8AAAAAAAAAYIFgERYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ADwAAAAAAAAAAgGCGFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAPAAAAAAAAAICAZmYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAABmZgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABYREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQGGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBERYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWFgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABARAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"shipped\"\n    },\n    \"song2\": {\n        \"data\": \"0078000408080200001c00010a006400f4016400000400000000000000000000000000050000048a0000000400011904000800011808001800011618002400011124002800011628003800011838004800011148005800011858006400011964006800011668008400011d84009000011e90009c00011b9c00a000011da000a400011ea400b000011db000bc000116bc00c0000118c000c4000119c400d0000118d000dc000111dc00e4000118e4000001011606001c00010a006400f401640000040000000000000000000000000000000002e70010001200011614001600011618001a00011620002200011124002600011628002a00011830003200011834003600011838003a00011140004200011144004600011648004a00011850005200011854005600011858005a00011964006600011668007000011d7000780002111d780084000311181d84009000011e90009c00010f9c009e000111a000a2000112a400a6000111a800aa000112ac00ae000111b000b200010db400b600010abc00be00010cc000c200010dc400c600010cc800ca00010dcc00ce00010cd000d2000108d400d6000105dc00de000108e000e200010ce4000001010a\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"quest_from_the_king\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"EVTl2%=W*N7WxeM(^ds4\": {\n        \"data\": \"0096000408080305001c000f0a006400f4010a0000040000000000000000000000000000000002600000001000011410002000011420003000011630004000011640005000010c50006000010c60007000011970008000011980009000011b9000a000011ba000b000011db000c000011dc000d000011ed000e000011ee000f0000114f0000001011406001c00010a006400f401640000040000000000000000000000000000000002c00000000800012008001000012010001800012218002000012020002800011e28003000011e30003800012038004000012240004800012448005000012450005800012558006000012460006800012268007000012270007800012078008000011e80008800011d88009000011d90009800011e9800a0000120a000a8000122a800b0000122b000b8000124b800c0000125c000c8000127c800d0000127d000d8000129d800e0000127e000e8000125e800f0000125f000f8000124f8000001012207001c00020a006400f401640000040000000000000000000000000000000003600000000800011d08001000011d10001800011e18002000011d40004800012048005000012050005800012258006000012080008400011988008c00011990009400011b98009c00011dc000c4000124c800cc000124d000d4000125d800dc000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"to_the_ballroom\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song3\": {\n        \"data\": \"0078000408080400001c00010a006400f401640000040000000000000000000000000005000004600000001000010f10002000010f20003000010f30004000010f40005000010f50006000010f60007000011170008000011180009000010f9000a000010fa000b000010fb000c000010fc000d000010fd000e000010fe000f0000111f0000001011101001c000f05001202c102c20100040500280000006400280003000006000004b4000000080001200800100001241000180001271800200001242000280001202800300001243000380001273800400001254000480001204800500001245000580001275800600001246000680001256800700001257000800001258000880001208800900001249000980001279800a0000124a000a8000120a800b0000124b000b8000127b800c0000125c000c8000120c800d0000124d000d8000127d800e0000124e000e8000120e800f0000120f000fc00012006001c00010a006400f401640000040000000000000000000000000000000002780000001000030c0f1210002000030c0f1220003000030c0f1230004000030c0f1240005000030c0f1250006000030c0f1260007000011170008000011180009000030c0f129000a000030c0f12a000b000030c0f12b000c000030c0f12c000d000030c0f12d000e000030c0f12e000f0000111f0000001011107001c00020a006400f401640000040000000000000000000000000000000003440100000400010804000800010808000c0001050c001000010510001400010814001800010818001c0001051c002000010520002400010824002800010828002c0001052c003000010530003400010834003800010838004000010540004400010844004800010848004c0001064c005000010650005400010554005800010558005c0001065c006000010660006400010864006800010668008000010580008400010884008800010888008c0001058c009000010590009400010894009800010898009c0001059c00a0000105a000a4000108a400a8000108a800ac000105ac00b0000105b000b4000108b400b8000108b800c0000105c000c4000108c400c8000108c800cc000105cc00d0000105d000d4000108d400d8000108d800dc000105dc00e0000105e000e4000108e400e8000108e800ec000106ec00f0000106f00000010106\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"a_fairy_and_an_ogre\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song1\": {\n        \"data\": \"0078000408040200001c00010a006400f401640000040000000000000000000000000005000004120060006c0001116c007800010c78008000010506001c00010a006400f4016400000400000000000000000000000000000000025a0000000800012908000c0001240c001400012914001800012418002000012920002400012c24002c0001ab2c003000012730003c0001243c00400001204000440001224400480001a348005000012450005400012054008000011d\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"going_on_an_adventure\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image23\":\n            case \"strum\":return img`\n...eddd5.4......................................................\n..edd5de4..4....................................................\n.edd5e.de14.....................................................\n.ed5e.e.de5.....................................................\n.e5e.e.e.d4.....................................................\n.ed1e.e.e.4.....................................................\n.eed1e.e.ed5....................................................\n.4eed1e.eded5...................................................\n4..eee1ededed5..................................................\n..4.eeedededed1.................................................\n.4....eededede51................................................\n.......eedede4ed1...............................................\n........eede4ede51..............................................\n.........eedede4ed1.............................................\n..........eede4ede51............................................\n...........eedede4ed1...........................................\n............eede4ede51..........................................\n.............eedede4ed1.........................................\n..............eede4eded1........................................\n...............eedededed1.......................................\n................eedededed5......................................\n.................eedededed5.....................................\n..................eedededed5....................................\n...................eedededed544444444455555.....................\n....................eededededdddddddddddddd51...................\n.....................eededededdddddddddddddd441.................\n......................eededededddddddddddddddd44................\n.......................eededededdddddd5ddddddddd4...............\n.......................eeddedededdddddddd5ddddddd4..............\n.......................eedddedededeeeeddddddddddd4..............\n.......................eeddddedede4444eddddddddddd4.............\n.......................eedddddede4eccc4edd5ddddddd4.............\n.......................eedddddde4ececcc4edddddddddd4............\n.......................eeddddde4ecececc4edddddddddd5............\n.......................eeddddde4cececec4edddddddddd5............\n.......................eeddddde4ccecece4eddddddd4dd5eeee........\n.......................eeddd5dee4ccececeddddddd5ddd4ddde5e......\n.......................eeddddddde4ccecededddddddddddddddd55.....\n.......................eedddddddde444edededdd4dddddddddddd55....\n.......................eeddddddddeeeedededed5dddddddddddddd55...\n.......................eeddd5ddddddddddedededddddddddddddddde5..\n.......................eeedddddd5dddddddedededddddddddddddddde5.\n........................eedddddddddddddddedededddddddddddddddd55\n........................eeeddddddddddddd4dedededdddddddddddddde5\n.........................eeddddddddddddddddedededdddddddddddddd4\n.........................eeedddddddddd5dddddedededddddddddddddd4\n..........................eeeddddddddddddddddedededdddddddddddd4\n...........................eeeeddddd4dddddddddededefddddddddddd4\n............................eeeeeddddddddddddddedefeddddddddddd4\n..............................eeeeddddddddddddddefedddddddddddde\n................................eeddddddddddddddfeddddddddddddee\n.................................eeddddddddddddddddddddddddddee.\n.................................eedddddddddddddddddddddddddeee.\n.................................eeddddddddddddddddddddddddeee..\n.................................eeeddddddddddddddddddddddeee...\n..................................eedddddddddddddddddddddeee....\n..................................eeedddddddddddddddddddeee.....\n...................................eeddddddddddddddddddeee......\n...................................eeeddddddddddddddddeee.......\n....................................eeeddddddddddddddeee........\n.....................................eeeddddddddddddeee.........\n......................................eeeddddddddddeee..........\n.......................................eeeeeeeeeeeeee...........\n........................................eeeeeeeeeeee............\n`;\n            case \"image24\":\n            case \"drago\":return img`\n..............................................................................1\n11.ccc.......................................................................1.\n..1111ccc...................................................................1c.\n...cc5111ccccc............................................................11cc.\n.....c5551111ccc.........................................................1bcc..\n......ccc5555111cccccc..................................................1ccbc..\n.........1ccc555111111cccc............................................11cbcc...\n..........1ccccc5555551111ccc........................................1bcbcc....\n...........1cccccccccc5555111ccc....................................1ccbccc....\n............1ccccccccccccc555111cc.................................1c55cccc....\n............1cccccccccccccccc55511c...............................1c55cccc.....\n...........1cccccccccccccccccccc551c.............................1555cccbc.....\n...........1cccccccccccccbcbcbbc5551c...........................1555cccbcc.....\n...........1cccccccccbcbcbbbb55555511c.........................1555c5ccccc.....\n..........1cccccccbcbcbcbbb55cc55ccc11c.......................1555ccc55ccc.....\n.........1.ccbcbcbcbcbbbbb5ccc551...c11c.....................1c155ccccc55c.....\n........1.ccbcbcbcbbbbbbb5ccc5c51....cc......................1c1ccccbcccccc....\n.....111.bbbbbbbbbbbbb555ccc5cc51............................1c1cccbcc.........\n......ccbbbbbbbbbbb555ccccc5ccc51............................1c1ccbcc..........\n.......c55555555555ccccccc5ccccc51.......111111..............1c1cccb...........\n.........cccccccccccccccc5ccccccc51...c1155555511............1cccccc...........\n..........ccccccccccccccb5ccccccc551.cbbbbbbbcc551...........1cc5ccc...........\n...........ccccccccccccb5cccccccc5c515bbbbbbbbbc551..........1ccc5cc...........\n............ccccccccccbc5cccccbcc5cc515bbbbbbbbbc551........1ccccc5cc..........\n............cccccccbcbcb5ccccbccc5ccc515bbbbbbbbbc551.......1cccccc............\n...........1..ccccbcbcb5ccccccbcc5cccc515bbbbbbbbbc551b.....1cccbc.............\n.........115c..ccccbcbb5cccbcbccc5ccccc515bbbbbbbbbc551b....1ccbc..............\n........1b5bc..cccbbbb5cccccbcbcc5cbcccc515bbbb1bbbbc51bb..1ccccc..............\n.......1b5bc...ccbcbbb5ccccccbcc5cccbcccc515bbbb1bbbbc51bb..cccbc..............\n......1b5bbc...cccbbb5ccccbcbccc5ccbcccccc515bbbb1bbbc51bbbcccbcc..............\n.....1b15bc....cccbb5ccccbcbcccc5cccccccccc515bb1b1bbbc51bbccccbc..............\n...c1b15bbc....ccbb5ccccccccbcc5ccccbbbbcccc51bbb1bbbbc51bbbccccc..............\n..c1b1b5bc.....cbb5cccccccccccccccbbbbbbbcccc15bbb1bbbbc51bbccccc..............\n..c1bbb5bc.....cb5.......cccccccbbbbbbbbbbbcb15bbbbbbbbc51bbbccc...............\n..c1bbbb5c......5........1cccccbbbbbbbbbbbbbb15bbbbbbbbbc51bbbcc...............\n..c1cbbb51c....c........1cbbcbbbbbbbbbbbbbbbbb15bbbbb1bbc51bbb5c...............\n..1bcbbbb51c...........1ccbbbbbbbbbbbbbbbbbbbb15bbbb1bbbb51bbbb1...............\n..11ccbbbb511.........1cc1bbbbbbbbbbbbb1b1bbbb155bbbb1bbb51bcbb1...............\n...1cccbb1b51cc...1111cc1bbbbbbbbbbbbb1b1b1bbbb15bbb1bbbb51bbbb1...............\n...1ccccbb1b511111555b11bbbbbbbbbbbbbbb1b1bbbbb15bb1b1bbb51bcbb1...............\n.....ccccbbbb55555bbb11bbbbbbbbbbbbbbbbbbb1bbbb15bbbbbbbb51bbbb5...............\n......ccccbbbbbbbbbbb1bbbbbbbb1bbbbbbbbbbbbbbbb15cbbbbbbc51bbcb5...............\n.......ccccbcbbbbbbb1b1bbbbbb1b1bbbbbbbbbbbbbbb15cbcbcbb15cbcbb5...............\n........ccccbcbcbcbc11bbbbbb1b1b1bbbbbcbbbbcbbb15cbbcbbb15cbbcb5...............\n..........cccccbcbcc1b1bbbbbb111b1bbbcbbcbcbbbb15cbcbcbb15cbcbb5...............\n...........ccccccccc11bbbbbb1b1111cbbbbbbcbbbbb15cbbcbb15cbbbb15...............\n..............ccccccc1bbbbbbb11111cbbbbbcbbbbbb15cbcbbb15cbbbb15...............\n...............cccccc1bbbbbbbb11111cbbbbbbbbbcb15cbbbb15cbcbb15................\n..................cccc1ccbbcb1b1111cbbbbbbbbcbc15cbcbb15cbcbb15................\n.......................1bbbbbb11111cbbbbbbbcbcc15cbbb15cbbbb15.................\n........................cbbcbcb1111cbbbb1bbbcbc1cbbb15c1bbbb15.................\n.........................cbbcbcb1111cbbb11bbbb11cbbc1515cbb15b.................\n..........................cbbcbbb111.cbb151bbb15cbc1515ccb115..................\n.........................cccbbbbcb1b.cbc1c51b15b1b1515cbcb15b..................\n.........................ccccbbcbcbbc.bc1bc51cc51cc15cbbc15bc..................\n........................ccccccbbcbcbc.cb1bbc51cccc15cbbbc5bcc..................\n........................cbcccccbbbbc..bb1bbbc5bbbb5cbbbbcbcccb.................\n........................ccbcccccccc...cb1bbcbcbbbcbccbbbccccbcb................\n........................cbcccc.........1cbbcbbcccbbccbbbcccccbcb...............\n........................1cbccc.........1bcbbccbcbcccbbcbbc.cbcbb...............\n........................1bcbcc.........1b4cbcbcccbccbc4bbc..bbbbbb.............\n.........................1bcbcc........1b45cbcbcbccbc54bbc...bbbbbb.1.b........\n..........................cbbbc........1bbf4cbccccbc4fbbbc....bbbbbb.b.b.......\n..........................c1bbbc.......1bbbbbbbbbbbbbbbbbc.....bbbbbb.11b......\n...........................c1bbbc......1ccbbcccbcccbbccb1c....bb111bb1111b.....\n............................c1bbbc.....cc1ccbbbcbbbcc11cb........11............\n............................cb1bb11....c211cbcbcbcbc11c2c.........1............\n............................c1b1cb11...cb1c1cbbcbbc1c1cc..........1............\n...........................c1bc.1ccc1...cbcc1ccccc1cc2c........................\n...........................c1c...1.cc....cbcc11b11cc2bc........................\n............................c.............cb21ccc1c2bc.........................\n...........................................cb21c122bc..........................\n...........................................ccbb2bbbc...........................\n...........................................cccb2bcccb..........................\n...........................................bccbbbc.............................\n...........................................cbccccc.............................\n...........................................bcbcbcc.............................\n............................................bcbcbc.............................\n..........................................cbcbbbbb.............................\n..........................................bcbbbbbb.............................\n..........................................cbbbbbbb.............................\n..........................................cccbbbb..11..........................\n..........................................bccccbb111.1.........................\n..........................................1b1b111...1..........................\n...........................................11.11.11............................\n...........................................11..1..1............................\n...........................................11..1...1...........................\n...........................................1...1...............................\n`;\n            case \"image25\":\n            case \"shipped\":return img`\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n................................................ff.................................................\n................................................ff.................................................\n...............................11111111111111111ff.................................................\n..............................222222222222222221ff.................................................\n................................................ff.................................................\n................................................ff.................................................\n................................................ff.................................................\n................................................ff.................................................\n................................................ff.................................................\n..........................................aaaa1111111...1111111111cc...............................\n..........................................a2222111111...1111221111ff...............................\n..........................................2222222222c...2222222222ff...............................\n...........................................dbdbbbccffccc..........ff...............................\n..........................................dddbdbbccffccc..........ff...............................\n............................................ddbbcccff.............ff...............................\n..........................................ccfffffffff...........ffff...............................\n..........................................ccfffffffff...........ffff...............................\n......................................fffffff...ff................fffff............................\n......................................fffffff...ff................fffff............................\n........................................fffff...ff................fffff............................\n........................................ffffffffffff.......dbfffccfffff............................\n........................................ccccccccccfff......ddfffccfffff............................\n..........................f.............dddddddddbffffc.....ddbbbcff...............................\n..........................ffffe4........dddddddddbcfffff....dddbccff...............................\n..........................ffffe4d.......ddddddbdbbccffff....dbddcbff...............................\n..........................fffce4d.......ddddddddbcccffff....dddbccff...............................\n...............fffff......ffeee4........ddddddbbccccffff....ddbbffff....bddc.......................\n...............fffcf......f.............ddddbbbdbcccffff...ddbbcffff....dbbbc......................\n.................ffffffffff.............dddddbbbccccffff...bbfffffff.....dbbdf.....................\n..................fffffffff.............ddddbdbccccccfff...bbfffffff......dbbbf....................\n..................fffffffff.............dbdbbbcccccfcfff...bbfffffff.......dbbfb...................\n....................dddddddffff.........dddbbccbcccfcfff..dddddbbbccfff....ddbbbbf.................\n....................ddbddbbfffff........dddbccccccccffff...dddbbdccccff.....dbbbbff................\n....................ddddbbcfcfff........ddbbccccccccffff....dddbbbcccff.....dbdcbccd...............\n....................dddbdbccffff........dbbbcbccccfcffff.....ddbbccccffff...dbbbcbccf..............\n....................dbdbbccfcfff........ddbccccccccfffff......dbbcbcccfff...dbbbbbccff.............\n....................ddbbcccccfff........ddbbccbccccfffff......dbbccccffff..ddbbbbbccffffffff.......\n....................ddbbcbcfcfff........dbdbcccccccff........ddbdccccff....dbdbbbccccccff..........\n....................ddbccccfcfff........dbbccffffffff.......dddbbbccfff....dbbbbbccccccf...........\n....................ddbcbccccfff........dbbccffffffff.......ddbbbcccfff...dbbbfffffffffff..........\n...............fff..ddbfccfcccff......fffffff...ff.........ddfffffff.....ddbbafffffffffffff........\n...............ffc..ddbfcccccfff......fffffff...ff........dddfffffff.....dbdbfaeeeeee..............\n...............fefffffffffffffffffff......d.....ff........cffddddddf...fffffffffffff...............\n...............fffffffffffffffffffff............ff........cff......ff..ffffffffffff................\n...............ffffffffffffffffffd..............ff........dff.....fff..ffffffff....................\n...............ffeebccccceeeeeeffffffff......ffffffff.............fffffffbbecff....................\n...............ffeebeeecceeeeeeffffffff......ffffffff.............fffffffbbeeff....................\n.................ffeebbccccccceeeeeeeeffffffffffeefffffffffffffffffcecbbbecff......................\n.................ffeebbceeeeccccccccccffffffffffeeffffffffffffffffceeeeebeeff......................\n...................ffeebbbbbceeeeeccccccccccccccccccccecccceecccccebbbbeeff........................\n...................ffeebbbbbbbcccceeeeeeeeeeeeeeeeeeeeeeeceeeeccebebbbbecff........................\n....................fffeeeeeebbbcccccceeeeeeeeccccccccccccccccccbbbeeeeffff........................\n....................fffeccceebbcccceeecccccccceeeeeeecccceeeeeeebbeeceeffff........................\n....1...............fffffffffeeebbbbbbbccbbbbbccbbbbbccbbbbbcbbbebeffffff..........................\n..1.................fffffffffeeebbbbbbbbcbbbbccbbbbbccbbbbbccbbbeeeffffff........888...............\n.1..................fffeeeeffffeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeffffffff888888888..................\n.18888888...........fffeccefffffeeecccceeecccccccccccceeeccccceeffffeee8866666616666888............\n..166666686888666666ffffffeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffccc888888888118.66666.8.1.1....\n..1111666.6688818888ffffffffff6886fffffffffffffffffffeffffffeffffffffff66616616166611...1.....11...\n...........666666666feeeeeeeef8886fffeeeecceeeeeeeeeeffeeecceeefeeeecce88888888888888888888..111.1.\n.1661666668811888888ffffffffff8886fffffffffffffffffffffffffffffffffffff666666.8888888.....66681161.\n18188..66661166.8666666666666666688886666666666666668888888888888888668888188811..66661666661116..1\n166888888661666888886666666666666666666666666668888866666666666666666666666666666666668816661.....1\n.111..118881666888666688888666668888888888888888886666666666666666666666666666688888888118661666611\n...661166668111166666668888888888888888888888888866668888888888888668886666688886666661.6611....11.\n.....1...........8888888.66666666666666............888....6666666666666666666.......111111..1111...\n.....111166666666666666668888.11111166666666666666666666611116666666...............................\n......111111111..111111......88888888888888866666.....888888.......................................\n..................................................6................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n...................................................................................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"song2\":\n            case \"quest_from_the_king\":return hex`0078000408080200001c00010a006400f4016400000400000000000000000000000000050000048a0000000400011904000800011808001800011618002400011124002800011628003800011838004800011148005800011858006400011964006800011668008400011d84009000011e90009c00011b9c00a000011da000a400011ea400b000011db000bc000116bc00c0000118c000c4000119c400d0000118d000dc000111dc00e4000118e4000001011606001c00010a006400f401640000040000000000000000000000000000000002e70010001200011614001600011618001a00011620002200011124002600011628002a00011830003200011834003600011838003a00011140004200011144004600011648004a00011850005200011854005600011858005a00011964006600011668007000011d7000780002111d780084000311181d84009000011e90009c00010f9c009e000111a000a2000112a400a6000111a800aa000112ac00ae000111b000b200010db400b600010abc00be00010cc000c200010dc400c600010cc800ca00010dcc00ce00010cd000d2000108d400d6000105dc00de000108e000e200010ce4000001010a`;\n            case \"EVTl2%=W*N7WxeM(^ds4\":\n            case \"to_the_ballroom\":return hex`0096000408080305001c000f0a006400f4010a0000040000000000000000000000000000000002600000001000011410002000011420003000011630004000011640005000010c50006000010c60007000011970008000011980009000011b9000a000011ba000b000011db000c000011dc000d000011ed000e000011ee000f0000114f0000001011406001c00010a006400f401640000040000000000000000000000000000000002c00000000800012008001000012010001800012218002000012020002800011e28003000011e30003800012038004000012240004800012448005000012450005800012558006000012460006800012268007000012270007800012078008000011e80008800011d88009000011d90009800011e9800a0000120a000a8000122a800b0000122b000b8000124b800c0000125c000c8000127c800d0000127d000d8000129d800e0000127e000e8000125e800f0000125f000f8000124f8000001012207001c00020a006400f401640000040000000000000000000000000000000003600000000800011d08001000011d10001800011e18002000011d40004800012048005000012050005800012258006000012080008400011988008c00011990009400011b98009c00011dc000c4000124c800cc000124d000d4000125d800dc000124`;\n            case \"song3\":\n            case \"a_fairy_and_an_ogre\":return hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004600000001000010f10002000010f20003000010f30004000010f40005000010f50006000010f60007000011170008000011180009000010f9000a000010fa000b000010fb000c000010fc000d000010fd000e000010fe000f0000111f0000001011101001c000f05001202c102c20100040500280000006400280003000006000004b4000000080001200800100001241000180001271800200001242000280001202800300001243000380001273800400001254000480001204800500001245000580001275800600001246000680001256800700001257000800001258000880001208800900001249000980001279800a0000124a000a8000120a800b0000124b000b8000127b800c0000125c000c8000120c800d0000124d000d8000127d800e0000124e000e8000120e800f0000120f000fc00012006001c00010a006400f401640000040000000000000000000000000000000002780000001000030c0f1210002000030c0f1220003000030c0f1230004000030c0f1240005000030c0f1250006000030c0f1260007000011170008000011180009000030c0f129000a000030c0f12a000b000030c0f12b000c000030c0f12c000d000030c0f12d000e000030c0f12e000f0000111f0000001011107001c00020a006400f401640000040000000000000000000000000000000003440100000400010804000800010808000c0001050c001000010510001400010814001800010818001c0001051c002000010520002400010824002800010828002c0001052c003000010530003400010834003800010838004000010540004400010844004800010848004c0001064c005000010650005400010554005800010558005c0001065c006000010660006400010864006800010668008000010580008400010884008800010888008c0001058c009000010590009400010894009800010898009c0001059c00a0000105a000a4000108a400a8000108a800ac000105ac00b0000105b000b4000108b400b8000108b800c0000105c000c4000108c400c8000108c800cc000105cc00d0000105d000d4000108d400d8000108d800dc000105dc00e0000105e000e4000108e400e8000108e800ec000106ec00f0000106f00000010106`;\n            case \"song1\":\n            case \"going_on_an_adventure\":return hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004120060006c0001116c007800010c78008000010506001c00010a006400f4016400000400000000000000000000000000000000025a0000000800012908000c0001240c001400012914001800012418002000012920002400012c24002c0001ab2c003000012730003c0001243c00400001204000440001224400480001a348005000012450005400012054008000011d`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"adventure_json\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\",\n        \".simstate.json\"\n    ],\n    \"testFiles\": [],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.25\",\n        \"tag\": \"v1.12.25\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/e2750e18d567167d5fc4f7c49e2a64cc55da9d18\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.36\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n\n}\n// Auto-generated code. Do not edit.\n"
}
```