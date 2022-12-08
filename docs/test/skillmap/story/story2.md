# Bigger Greeting
### @explicitHints true


## {Introduction @showdialog}

You've created a card, now let's make it extra special!

![Send our love](/static/skillmap/story/story-activity-2.gif "Why do tropical fish like saltwater?" )


## {Step 2}

The code for a simple card is already in the workspace.
⭐⭐⭐

---

- :mouse pointer:  You can keep adding to this card or change it to be something completely different.


💡 **Tip:** _If your code isn't working and you can't figure out why, click "Replace my code" to replace the blocks in your workspace with new starter code._



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(storySprites.world)
effects.confetti.startScreenEffect()
music.startSong(assets.song`birthday`, false)
```



## {Step 3}

Try adding text that
shows up when the **A button** is pressed.

---

- :game:  From the ``||controller: Controller||`` category, drag

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
})
```

into **an empty area** of the workspace.

- :mouse pointer:  Change the message to make sense for your card.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~


``` blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
})
```

#### ~ tutorialhint
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
})
```




## {Step 4}

**Give it a try.**

- :binoculars: Take a look at the game window and press the **A button** (or space bar) to see your text.





## {Step 5}

**What a nice surprise**

Add a second message to show you care.

---

- :mouse pointer:  From ``||game:Game||`` grab

```block
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
```

and snap it into **the bottom** of the<br/>
``||controller(noclick):on [A] button [pressed]||``<br/>
container.

- :mouse pointer:  Change this message to make sense with the rest of your project.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~

```blockconfig.local
game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
```

#### ~ tutorialhint
``` blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
})

```


## {Step 6}

**🎨 Make it POP 🎨**
Customize the text frame to bring it all together.

---

- :mouse pointer:  From ``||game:Game||``, grab

```block
game.setDialogFrame(sprites.dialog.mediumLeaf1)
```

and snap it in at **the top** of the<br/>
``||controller(noclick):on [A] button [pressed]||``<br/>
container that is already in your workspace.

- :mouse pointer:  Choose a design by clicking on the box in the<br/>
``||game(onclick):set dialog frame to [ ]||``<br/>
block and switching to the **Gallery**.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~


#### ~ tutorialhint
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogFrame(sprites.dialog.mediumLeaf1)
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
})

```



## {Step 8}

**Try it again.**

- :binoculars: Take a look at the game window and press the
**A button** (or space bar) to see your text. Press the button again to see the next message.





## {Step 9}

**The final touch 🎀**

Change the color of the text so it works with your background.

---

- :circle:  From ``||game:Game||``, grab

```block
game.setDialogTextColor(1)
```

and snap it into the top of the<br/>
``||on [A] button [pressed]||``<br/>
block in your workspace.

- :mouse pointer:  **Click the box** and choose a color that looks good with your message.  <br/><br/>
It's okay if you need to change it a few times before your text
is just right.


~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~


#### ~ tutorialhint
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(sprites.dialog.mediumLeaf1)
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
})
```



## {Step 10}

**Look at your final card.**

- :binoculars: Take a look at the game window and press the
**A button** (or space bar) to see how your text looks now.
<br/><br/>Press the button another time to see the next message.





## {Finale}

**🎊 Congrats 🎊**

Now you have a card that any friend would be excited to get!

Click **Done** to return to the main skillmap to move on to the next level where you will create a joke!


```blockconfig.global
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
game.showLongText("Happy Earth Day", DialogLayout.Bottom)
game.setDialogFrame(sprites.dialog.mediumLeaf1)
game.setDialogTextColor(1)
```


```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
```


```template
scene.setBackgroundImage(storySprites.world)
effects.confetti.startScreenEffect()
music.startSong(assets.song`birthday`, false)
```


```assetjson

{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"song2\": {\n        \"data\": \"0078000408060107001c00020a006400f401640000040000000000000000000000000000000000a80000000200012504000600012508000c0001270e001000012514001800012a18001e00012920002200012524002600012528002c0001272e003000012534003800012c38003e00012a40004200012544004600012548004c0001314c005000012e50005200012a52005400012a54005600012956005800012958005a0001275a006200012762006600013068006c0001306e007400012e76007c00012a7e008000012c82008400012a\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"birthday\"\n    },\n    \"song1\": {\n        \"data\": \"0078000408020202001c00010a006400f40164000004000000000000000000000000000500000077000000040002423c0400080002413a08000c00023f380c001000023d3610001400023c3514001800023d3618001c00023f381c002000023c3522002400023d3624002600023f382600280002413a28002a00023d362a002e00023f3830003200023d3632003400023c3536003800023a333a004000023c3507001c00020a006400f401640000040000000000000000000000000000000000660000000200013004000600012e08000a00012c0c000e00012a10001200012914001600012a18001a00012c1c001e00012922002400012a24002600012c26002800012e28002a00012a2a002c00012c30003200012a3200340001293600380001273a003c000129\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"Noel Halls\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"song2\":\n            case \"birthday\":return hex`0078000408060107001c00020a006400f401640000040000000000000000000000000000000000a80000000200012504000600012508000c0001270e001000012514001800012a18001e00012920002200012524002600012528002c0001272e003000012534003800012c38003e00012a40004200012544004600012548004c0001314c005000012e50005200012a52005400012a54005600012956005800012958005a0001275a006200012762006600013068006c0001306e007400012e76007c00012a7e008000012c82008400012a`;\n            case \"song1\":\n            case \"Noel Halls\":return hex`0078000408020202001c00010a006400f40164000004000000000000000000000000000500000077000000040002423c0400080002413a08000c00023f380c001000023d3610001400023c3514001800023d3618001c00023f381c002000023c3522002400023d3624002600023f382600280002413a28002a00023d362a002e00023f3830003200023d3632003400023c3536003800023a333a004000023c3507001c00020a006400f401640000040000000000000000000000000000000000660000000200013004000600012e08000a00012c0c000e00012a10001200012914001600012a18001a00012c1c001e00012922002400012a24002600012c26002800012e28002a00012a2a002c00012c30003200012a3200340001293600380001273a003c000129`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Untitled - Copy - Copy - Copy\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"carnival\": \"github:microsoft/arcade-carnival#v0.0.3\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.21\",\n        \"tag\": \"v1.11.21\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5fb4210ecb70e5d405aa1a5701b4408b5bfe9094\",\n        \"target\": \"1.11.21\",\n        \"pxt\": \"8.4.15\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}

```