# Start Your Journey
### @explicitHints true


## {Intro @showdialog}


Are you ready to create an adventure?

Follow the steps of this tutorial to create your own text-based adventure game.

![Let's go on an adventure!](https://media.giphy.com/media/fYru9bLqxEeTqyBmRg/giphy.gif "Image of owlbear raging at red mage" )



## {2. Explain the Issue}

**We need a quest!**<br/>


~hint What am I doing? 🤷🏽‍♂️

---

**We are coding a game!**

Modeled after an old-school text-based adventure, you're about to code a game using your own artwork, theme music, and storyline!

But first, you need to learn how MakeCode Arcade works.

We will use the formatted text:<br/>
``||adventure: add ["A traveling..."] to text log||``


To tell you to grab the block:
```block
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
```

So you can snap it inside the <br/>
``||loops(noclick):on start||`` <br/>
container in the workspace and start your program.

```blocks
//@highlight
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
```


![Drag the block from the toolbox in the workspace](/static/skillmap/adventure/how-to-adventure.gif)

hint~


- :compass: Open the <br/>
``||adventure: Adventure||``<br/>
category in the toolbox and grab<br/>
``||adventure: add ["A traveling..."] to text log||`` <br/>
to connect inside the empty<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to set up the problem that your player will face.

---

- :arrow right: When you're ready to move to the next step, click the **Next** button.



#### ~ tutorialhint

```blocks
//@highlight
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")

```




## {3. Check Your Project}

Take a look at what you have so far.

- :binoculars: Look at your project in the game window to see what happens!

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")


```blockconfig.local
adventure.addToTextlog("Press (A) to join the fun." )
```




## {4. Give option A}

**Time for a decision!**

What options do you want to give the player?  Make sure that one option turns out well, and one turns out poorly.

- :compass: From ``||adventure: Adventure||``, drag the<br/>
``||adventure: add ["Press (A)..."] to text log||`` <br/>
block into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to let the player know the story will have a good outcome if they press the (A) button (or space bar).


```blockconfig.local
adventure.addToTextlog("Press (A) to join the fun." )
```


#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
//@highlight
adventure.addToTextlog("Press (A) to join the fun." )
```




## {5. Give option B}

**Option B...**

Add your second option. <br/>
(This one won't turn out as well.)

- :compass: From ``||adventure: Adventure||``, drag the<br/>
``||adventure: add ["Press (B)..."]to text log||`` <br/>
block into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to hint that the story will take a bad turn if they press the (B) button (or enter key).

💡 _Not sure if you have all the right blocks? **Click the lightbulb button below** the instructions to see what should have happened in this step._


```blockconfig.local
adventure.addToTextlog("Press (B) to turn and run." )
```



#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
//@highlight
adventure.addToTextlog("Press (B) to turn and run." )
```




## {6. Wait}

**Wait for an answer.**

Add code to wait for the players decision.

- :redo: From ``||loops: Loops||``, drag<br/>
``||loops: pause until <true>||`` <br/>
into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :game: From ``||controller: Controller||``, drag<br/>
``||controller: <is [any] button pressed>||`` <br/>
in to replace **`<true>`** in the<br/>
``||loops(noclick):pause until <true>||`` <br/>
block already in the workspace.



```blockconfig.local
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
```



#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
//@highlight
pauseUntil(() => controller.anyButton.isPressed())
```






## {7. Results}

**Choose a path.**

Now it's time to add a conditional to handle the path that was chosen.

~hint What's a conditional? 💡

---

A **conditional** is a piece of code that runs only when a **condition** is met.

We are going to add an **if/else** statement that runs the
code inside the **if** section only if the player **presses (A)**.

Otherwise, it will run the code inside the **else** section.

```block
if (controller.A.isPressed()) { } else { }
```


hint~

- :shuffle: From ``||logic: Logic||``, drag<br/>
``||logic: if <true> then / else||`` <br/>
into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :game: From ``||controller: Controller||``, drag<br/>
``||controller: <is [A] button pressed>||`` <br/>
in to replace **`<true>`** in the<br/>
``||logic(noclick):if <true> then||`` <br/>
part of the block already in the workspace.



```blockconfig.local
adventure.addToTextlog("Press (B) to turn and run." )
controller.A.isPressed()
```



#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
//@highlight
if (controller.A.isPressed()) { } else { }

```


## {8. Outcomes A}

**The good...**

For now, we'll end the game as a **win** when the user chooses (A).


- :compass: From ``||adventure: Adventure||``, drag<br/>
``||adventure:add ["Great Choice..."] to text log||`` <br/>
into top section of the empty<br/>
``||logic(noclick):if <is [A] button pressed> then||`` <br/>
container in your code.

- :circle: From ``||game: Game||``, drag<br/>
``||game: game over <WIN>||`` <br/>
into the same <br/>
``||logic(noclick):if <is [A] button pressed> then||`` <br/>
container, **right below** the new line of text.


```blockconfig.local
adventure.addToTextlog("Great choice! Enjoy your adventure." )
controller.A.isPressed()
```


#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    //@highlight
    adventure.addToTextlog("Great choice! Enjoy your adventure." )
    //@highlight
    game.gameOver(true)
    } else {


```



## {9. Outcomes B}

**The bad...**

For now, we'll end the game as **lose** when the user chooses (B).


- :compass: From ``||adventure: Adventure||``, drag<br/>
``||adventure:add ["Your adventure..."] to text log||`` <br/>
into the empty bottom section of the<br/>
``||logic(noclick):else||`` <br/>
container in your code.

- :circle: From ``||game: Game||``, drag<br/>
``||game: game over <LOSE> +||`` <br/>
into the same<br/>
``||logic(noclick):else||`` <br/>
container, **right below** the new line of text.


```blockconfig.local
adventure.addToTextlog("Your adventure is over before it has even begun." )
controller.A.isPressed()
```


#### ~ tutorialhint

```blocks
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
adventure.addToTextlog("Press (A) to join the fun." )
adventure.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    adventure.addToTextlog("Great choice! Enjoy your adventure." )
    game.gameOver(true)
    } else {
    //@highlight
    adventure.addToTextlog("Your adventure is over before it has even begun." )
    //@highlight
    game.over(false)
}

```




## {10. Check Your Project}

**Check out your adventure!**

- :binoculars: Look at your project in the game window and choose a path!

You should win the adventure if you press the (A) buttonn and lose the adventure if you press the (B) button.

💡 _You can also use the **space bar** on your keyboard instead of the (A) button and the **enter key** instead of the (B) button!_


## {Finish}

**Congratulations, you've created the beginning of a text-based adventure!**<br/>
🥳 🥳 🥳

~hint How do I share my story?💡

---

**Want to share your adventure?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/adventure/share.gif )

hint~

Click **Done** to return to the main skillmap and get ready to create music and images for your project.


```blockconfig.global
music.setVolume(20)
info.setLife(20)
pauseUntil(() => controller.anyButton.isPressed())
adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    if (controller.A.isPressed()) { } else { }
controller.anyButton.isPressed()
```



```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.12
adventure_imgs=github:kiki-lee/adventure_imgs
```



```ghost
adventure.clearTextLog()
info.setLife(3)
info.changeLifeBy(-1)
info.setScoreOverride(100)
scene.setBackgroundColor(1)
adventure.changeLogColors(2, 6)
info.changeScoreOverride(1)
adventure.setScoreOverride(adventure.Currency.Coins, 100)
adventure.changeScoreOverride(adventure.Currency.Coins, 1)
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