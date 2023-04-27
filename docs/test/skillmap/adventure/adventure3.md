# Lives and Gold
### @explicitHints true


## {Intro @showdialog}


Let's add some rewards to your quest.

The code for your adventure is already in the workspace. <br/>
We can keep adding to it.

![Let's go on an adventure!](https://media.giphy.com/media/zRW20g1KJpzQg8rbcE/giphy.gif "Image of mimic giving Holga a tongue lashing" )

_© 2023 Paramount Pictures. Hasbro, Dungeons &
Dragons and all related characters are trademarks of
Hasbro. © 2023 Hasbro._


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
info.setLife(4)
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
function quest3() {

    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`mimic`)
    adventure.addToTextlog("You pass up a treasure that appears to be just out of grasp.")
    adventure.addToTextlog("Press (A) to turn around and go after the chest." )
    adventure.addToTextlog("Press (B) to continue walking out of the forest." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("The treasure is a mimic and it attacks without warning." )
        game.gameOver(true)
    } else {
        adventure.addToTextlog("You reach the edge of the forest and something shiny catches your eye." )
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
//@highlight
function quest3() {

    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`mimic`)
    adventure.addToTextlog("You pass up a treasure that appears to be just out of grasp.")
    adventure.addToTextlog("Press (A) to turn around and go after the chest." )
    adventure.addToTextlog("Press (B) to continue walking out of the forest." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("The treasure is a mimic and it attacks without warning." )
        game.gameOver(true)
    } else {
        adventure.addToTextlog("You reach the edge of the forest and something shiny catches your eye." )
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

function quest1() {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun." )
    adventure.addToTextlog("Press (B) to turn and run." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure." )
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun." )
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

function quest1() {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun." )
    adventure.addToTextlog("Press (B) to turn and run." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure." )
        //@highlight
       adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun." )
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
quest1()

function quest1() {

    music.play(music.createSong( ), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun." )
    adventure.addToTextlog("Press (B) to turn and run." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure." )
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun." )
        game.over(false)
    }

}
function quest2() {
    music.play(music.createSong( ), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`owlBear`)
    adventure.addToTextlog("Out of the darkness, an Owlbear leaps toward your party.")
    adventure.addToTextlog("Press (A) to back away slowly." )
    adventure.addToTextlog("Press (B) to attack." )
    pauseUntil(() => controller.anyButton.isPressed())
   if (controller.A.isPressed()) {
    adventure.addToTextlog("The group begins to laugh." )
    adventure.addToTextlog("That's just Doric. She won't hurt you." )
    game.gameOver(true)
    } else {
        adventure.addToTextlog("The group surrounds you with weapons drawn." )
        adventure.addToTextlog("You're going to regret attacking Doric!" )
        game.over(false)
    }
}

```


```ghost
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
  "assets.json": "",
  "images.g.jres": "{\n    \"song1\": {\n        \"data\": \"0078000408080200001c00010a006400f401640000040000000000000000000000000005000004120060006c0001116c007800010c78008000010506001c00010a006400f4016400000400000000000000000000000000000000025a0000000800012908000c0001240c001400012914001800012418002000012920002400012c24002c0001ab2c003000012730003c0001243c00400001204000440001224400480001a348005000012450005400012054008000011d\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"going_on_an_adventure\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song3\": {\n        \"data\": \"0078000408080200001c00010a006400f4016400000400000000000000000000000000050000048a0000000400011904000800011808001800011618002400011124002800011628003800011838004800011148005800011858006400011964006800011668008400011d84009000011e90009c00011b9c00a000011da000a400011ea400b000011db000bc000116bc00c0000118c000c4000119c400d0000118d000dc000111dc00e4000118e4000001011606001c00010a006400f401640000040000000000000000000000000000000002e70010001200011614001600011618001a00011620002200011124002600011628002a00011830003200011834003600011838003a00011140004200011144004600011648004a00011850005200011854005600011858005a00011964006600011668007000011d7000780002111d780084000311181d84009000011e90009c00010f9c009e000111a000a2000112a400a6000111a800aa000112ac00ae000111b000b200010db400b600010abc00be00010cc000c200010dc400c600010cc800ca00010dcc00ce00010cd000d2000108d400d6000105dc00de000108e000e200010ce4000001010a\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"quest_from_the_king\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song4\": {\n        \"data\": \"0096000408080305001c000f0a006400f4010a0000040000000000000000000000000000000002600000001000011410002000011420003000011630004000011640005000010c50006000010c60007000011970008000011980009000011b9000a000011ba000b000011db000c000011dc000d000011ed000e000011ee000f0000114f0000001011406001c00010a006400f401640000040000000000000000000000000000000002c00000000800012008001000012010001800012218002000012020002800011e28003000011e30003800012038004000012240004800012448005000012450005800012558006000012460006800012268007000012270007800012078008000011e80008800011d88009000011d90009800011e9800a0000120a000a8000122a800b0000122b000b8000124b800c0000125c000c8000127c800d0000127d000d8000129d800e0000127e000e8000125e800f0000125f000f8000124f8000001012207001c00020a006400f401640000040000000000000000000000000000000003600000000800011d08001000011d10001800011e18002000011d40004800012048005000012050005800012258006000012080008400011988008c00011990009400011b98009c00011dc000c4000124c800cc000124d000d4000125d800dc000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"to_the_ballroom\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"song2\": {\n        \"data\": \"0078000408080400001c00010a006400f401640000040000000000000000000000000005000004600000001000010f10002000010f20003000010f30004000010f40005000010f50006000010f60007000011170008000011180009000010f9000a000010fa000b000010fb000c000010fc000d000010fd000e000010fe000f0000111f0000001011101001c000f05001202c102c20100040500280000006400280003000006000004b4000000080001200800100001241000180001271800200001242000280001202800300001243000380001273800400001254000480001204800500001245000580001275800600001246000680001256800700001257000800001258000880001208800900001249000980001279800a0000124a000a8000120a800b0000124b000b8000127b800c0000125c000c8000120c800d0000124d000d8000127d800e0000124e000e8000120e800f0000120f000fc00012006001c00010a006400f401640000040000000000000000000000000000000002780000001000030c0f1210002000030c0f1220003000030c0f1230004000030c0f1240005000030c0f1250006000030c0f1260007000011170008000011180009000030c0f129000a000030c0f12a000b000030c0f12b000c000030c0f12c000d000030c0f12d000e000030c0f12e000f0000111f0000001011107001c00020a006400f401640000040000000000000000000000000000000003440100000400010804000800010808000c0001050c001000010510001400010814001800010818001c0001051c002000010520002400010824002800010828002c0001052c003000010530003400010834003800010838004000010540004400010844004800010848004c0001064c005000010650005400010554005800010558005c0001065c006000010660006400010864006800010668008000010580008400010884008800010888008c0001058c009000010590009400010894009800010898009c0001059c00a0000105a000a4000108a400a8000108a800ac000105ac00b0000105b000b4000108b400b8000108b800c0000105c000c4000108c400c8000108c800cc000105cc00d0000105d000d4000108d400d8000108d800dc000105dc00e0000105e000e4000108e400e8000108e800ec000106ec00f0000106f00000010106\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"a_fairy_and_an_ogre\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"song1\":\n            case \"going_on_an_adventure\":return hex`0078000408080200001c00010a006400f401640000040000000000000000000000000005000004120060006c0001116c007800010c78008000010506001c00010a006400f4016400000400000000000000000000000000000000025a0000000800012908000c0001240c001400012914001800012418002000012920002400012c24002c0001ab2c003000012730003c0001243c00400001204000440001224400480001a348005000012450005400012054008000011d`;\n            case \"song3\":\n            case \"quest_from_the_king\":return hex`0078000408080200001c00010a006400f4016400000400000000000000000000000000050000048a0000000400011904000800011808001800011618002400011124002800011628003800011838004800011148005800011858006400011964006800011668008400011d84009000011e90009c00011b9c00a000011da000a400011ea400b000011db000bc000116bc00c0000118c000c4000119c400d0000118d000dc000111dc00e4000118e4000001011606001c00010a006400f401640000040000000000000000000000000000000002e70010001200011614001600011618001a00011620002200011124002600011628002a00011830003200011834003600011838003a00011140004200011144004600011648004a00011850005200011854005600011858005a00011964006600011668007000011d7000780002111d780084000311181d84009000011e90009c00010f9c009e000111a000a2000112a400a6000111a800aa000112ac00ae000111b000b200010db400b600010abc00be00010cc000c200010dc400c600010cc800ca00010dcc00ce00010cd000d2000108d400d6000105dc00de000108e000e200010ce4000001010a`;\n            case \"song4\":\n            case \"to_the_ballroom\":return hex`0096000408080305001c000f0a006400f4010a0000040000000000000000000000000000000002600000001000011410002000011420003000011630004000011640005000010c50006000010c60007000011970008000011980009000011b9000a000011ba000b000011db000c000011dc000d000011ed000e000011ee000f0000114f0000001011406001c00010a006400f401640000040000000000000000000000000000000002c00000000800012008001000012010001800012218002000012020002800011e28003000011e30003800012038004000012240004800012448005000012450005800012558006000012460006800012268007000012270007800012078008000011e80008800011d88009000011d90009800011e9800a0000120a000a8000122a800b0000122b000b8000124b800c0000125c000c8000127c800d0000127d000d8000129d800e0000127e000e8000125e800f0000125f000f8000124f8000001012207001c00020a006400f401640000040000000000000000000000000000000003600000000800011d08001000011d10001800011e18002000011d40004800012048005000012050005800012258006000012080008400011988008c00011990009400011b98009c00011dc000c4000124c800cc000124d000d4000125d800dc000124`;\n            case \"song2\":\n            case \"a_fairy_and_an_ogre\":return hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004600000001000010f10002000010f20003000010f30004000010f40005000010f50006000010f60007000011170008000011180009000010f9000a000010fa000b000010fb000c000010fc000d000010fd000e000010fe000f0000111f0000001011101001c000f05001202c102c20100040500280000006400280003000006000004b4000000080001200800100001241000180001271800200001242000280001202800300001243000380001273800400001254000480001204800500001245000580001275800600001246000680001256800700001257000800001258000880001208800900001249000980001279800a0000124a000a8000120a800b0000124b000b8000127b800c0000125c000c8000120c800d0000124d000d8000127d800e0000124e000e8000120e800f0000120f000fc00012006001c00010a006400f401640000040000000000000000000000000000000002780000001000030c0f1210002000030c0f1220003000030c0f1230004000030c0f1240005000030c0f1250006000030c0f1260007000011170008000011180009000030c0f129000a000030c0f12a000b000030c0f12b000c000030c0f12c000d000030c0f12d000e000030c0f12e000f0000111f0000001011107001c00020a006400f401640000040000000000000000000000000000000003440100000400010804000800010808000c0001050c001000010510001400010814001800010818001c0001051c002000010520002400010824002800010828002c0001052c003000010530003400010834003800010838004000010540004400010844004800010848004c0001064c005000010650005400010554005800010558005c0001065c006000010660006400010864006800010668008000010580008400010884008800010888008c0001058c009000010590009400010894009800010898009c0001059c00a0000105a000a4000108a400a8000108a800ac000105ac00b0000105b000b4000108b400b8000108b800c0000105c000c4000108c400c8000108c800cc000105cc00d0000105d000d4000108d400d8000108d800dc000105dc00e0000105e000e4000108e400e8000108e800ec000106ec00f0000106f00000010106`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```