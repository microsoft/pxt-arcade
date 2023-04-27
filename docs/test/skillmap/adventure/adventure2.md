# Make it Spectacular
### @explicitHints true


## {Intro @showdialog}


Are you ready to add some music?

The code for your first adventure is already in the workspace. <br/>
Let's make it pop with music and images!

![Animated image of the bard skipping and singing](https://media.giphy.com/media/q6X5yJOC1nupZmKdo9/giphy.gif "Image of Bard" )

_© 2023 Paramount Pictures. Hasbro, Dungeons &
Dragons and all related characters are trademarks of
Hasbro. © 2023 Hasbro._


## {Step 2}

**Add a visual!**<br/>
👀<br/>
Add an image to the scrolling log.

---


- :compass: From ``||adventure: Adventure||``, drag <br/>
``||adventure: add image [ ] to text log||`` <br/>
into the **top of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Click the empty grey box to draw an image that works well with your first adventure (or choose one from the **Gallery**).


#### ~ tutorialhint

```blocks
//@highlight
adventure.addImageToTextLog(assets.image`lute`)
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    adventure.addToTextlog("Great choice! Enjoy your adventure." )
    game.gameOver(true)
} else {
    adventure.addToTextlog("Your adventure is over before it has even begun." )
    game.over(false)
}

```



## {Step 3. Add Sounds}

**Make some noise!**<br/>
🎶<br/>
Add sound to set the mood.

---


- :headphones: From ``||music: Music||``, drag the<br/>
``||music: play song [ ] in background||`` <br/>
block into the **top of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Click the empty grey box to create some music that works well with your first adventure
(or choose music from **My Assets**).


💡 _Make sure that_ ``||music:in background||`` _is selected, or the rest of your game won't run until the music finishes._


#### ~ tutorialhint

```blocks
//@highlight
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
adventure.addImageToTextLog(assets.image`lute`)
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    adventure.addToTextlog("Great choice! Enjoy your adventure." )
    game.gameOver(true)
} else {
    adventure.addToTextlog("Your adventure is over before it has even begun." )
    game.over(false)
}

```


## {4. Check Your Game!}

**Take a look at your adventure!**

- :binoculars: Look at your project in the game window to see how it has changed!

💡 _You may need to turn the sound on beside the game window to hear the music you added._


![Don't forget to turn on the sound]( /static/skillmap/adventure/sound-on.gif "Image of the sound button to the right of the game window" )



## {5. Make it a function}

**Let's do more!**

It's time to link some adventures together...but
before we do, let's package this quest up into a **function** to make it easier to
copy and reuse.


~hint What's a Function? 💡

---

A **function** is a piece of code that has a name,
which allows you to create it in one place and use it from another.

The next few steps will show us how to move all of our code out of the ``||loops(noclick):on start||`` container
and into a function block called **quest1**.

```block
function quest1() {}
```

![Drag the block from the toolbox in the workspace](/static/skillmap/adventure/functions.gif)

hint~


- :function: Click **Advanced** in the toolbox to show the
``||function: Functions||`` category. <br/>

- :mouse pointer: Open the ``||function: Functions||`` category and click <br/>
**`Make a Function...`**

- :mouse pointer: Call your function **quest1** and click **Done**.

The **quest1** function block will appear in your workspace.


#### ~ tutorialhint

```blocks
//@highlight
function quest1() {}
```



## {6. Move the Code}

**Fill the function.**

- :mouse pointer: Drag all the code you
created out of the ``||loops(noclick):on start||`` container and into the empty <br/>
``||functions(noclick):function [quest1]||``<br/>
function.

💡 _To grab all of your code, make sure you click on the top block before you drag.
That way, all of the blocks beneath will follow._


~hint Show me 🕵🏽‍♀️

![Drag the block from the toolbox in the workspace](/static/skillmap/adventure/functions.gif)

hint~


#### ~ tutorialhint

```blocks
//@highlight
function quest1() {

    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun." )
    adventure.addToTextlog("Press (B) to turn and run." )
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure." )
        game.gameOver(true)
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun." )
        game.over(false)
    }

}
```



## {7. Call the Code}

**Did you notice that your adventure stopped showing in the log?**

That's because we aren't **calling** the function anywhere.

- :function: From the
``||function: Functions||`` category, drag
``||functions:call quest1||`` <br/>
into the empty <br/>
``||loops(noclick):on start||`` <br/>
container in the workspace.


Your adventure should start playing on your game screen again.


#### ~ tutorialhint

```blocks
//@hide
function quest1() {}
//@highlight
quest1()
```




## {8. Duplicate}

If we want to keep the adventure going when the player chooses option (A), we're going to need another quest!

---

- :mouse pointer: Right click on the <br>
``||functions(noclick): quest1||`` function in your workspace and choose
**Duplicate** from the dropdown menu.

- :binoculars: You have created a second function called ``||function: quest2||``!

- :mouse pointer: Change the music, images, and text inside to create a new adventure!

💡 _You can also add extra lines of text anywhere that makes sense for your story._


#### ~ tutorialhint

```blocks
function quest2() {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
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




## {9. Call Quest 2}

In ``||functions:quest1||``, Instead of ending the game as a win, let's run **quest2** when the (A) button is pressed.

---

- :binoculars: Go back to <br>
``||functions(noclick): quest1||`` <br/>
and look for the <br/>
``||game(noclick): game over <WIN>||`` <br/>
block, and delete it.

- :function: From the ``||function: Functions||`` category, add
``||functions:call quest2||`` <br/>
where <br/>
``||game(noclick): game over <WIN>||`` <br/>
used to be.

💡 _Now, when the user presses (A), they will go on to see your second quest._


~hint How do I delete a block? 💡

---

You can delete a block three ways:<br/>
1) Click the block to select, then press **delete** on your keyboard<br/>
2) Right-click the block and choose **Delete Blocks**<br/>
3) Drag the block into the toolbox<br/>


hint~


#### ~ tutorialhint

```blocks
//@hide
function quest2() {}
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
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun." )
        game.over(false)
    }

}
```



## {10. Check Your Game!}

**Try your adventure!**

- :binoculars: Try out your adventure! <br/><br/>
You should see two quests if you press the (A) button,
and only one if you press (B).

💡 _You may need to turn the sound on beside the game window to hear the music you added._





## {Finish}

**Now you have an adventure!**<br/>
🐲 🐲 🐲

~hint How do I share my story?💡

---

**Want to share your adventure?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/adventure/share.gif )

hint~

Click **Done** to return to the main skillmap page where you can
keep going to add lives and gold to your adventure!



```blockconfig.global
adventure.addImageToTextLog(img`.`)
music.setVolume(20)
info.setLife(20)
adventure.addToTextlog("Oh no! There is a dragon in your path!")
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
```



```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.12
dd=github:microsoft/arcade-tutorial-extensions/dnd-sprite-pack#v0.0.10
```



```template
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())


if (controller.A.isPressed()) {
    adventure.addToTextlog("Great choice! Enjoy your adventure." )
    game.gameOver(true)
} else {
    adventure.addToTextlog("Your adventure is over before it has even begun." )
    game.over(false)
}
```



```ghost
adventure.clearTextLog()
info.setLife(3)
info.changeLifeBy(-1)
adventure.setScoreOverride(adventure.Currency.Coins, 100)
adventure.changeScoreOverride(adventure.Currency.Coins, 1)
scene.setBackgroundColor(1)
adventure.changeLogColors(2, 6)
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