# Simple Clicker Store

### @autoexpandOff true

```assetjson
{
  "README.md": " ",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQeABAAAAAAAAAAuwsAAAAAALsbuwAAAACwGxGxAAAAALsREbELAAAAGxEREQsAAAAbERERCwAAsBsREdELAAC73RER0bsAsBHRERHRvQu7ERERERERCxsRERERERG7GxEREREREbEbERERERERsbsRERERERGxsBEREREREbEAuxERERERsQCwGxHRERG7AAAbER0dsQsAABvREdGxAAAAGxEREbsAAAAbERERCwAAsBsRERG7AACwEREREbEAALAbERERsQAAALu7ERG7AAAAALAbEQsAAAAAALsRCwAAAAAAsLsLAAAAAAAAuwAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Cloud\"\n    },\n    \"image3\": \"hwQeABAAAAAAAAAAuwsAAAAAALsbuwAAAACwGxGxAAAAALsREbELAAAAGxEREQsAAAAbERERCwAAsBsREdELAAC73RER0bsAsBHRERHRvQu7ERERERERCxsRERERERG7GxEREREREbEbERERERERsbsRERERERGxsBEREREREbEAuxERERERsQCwGxHRERG7AAAbER0dsQsAABvREdGxAAAAGxEREbsAAAAbERERCwAAsBsRERG7AACwEREREbEAALAbERERsQAAALu7ERG7AAAAALAbEQsAAAAAALsRCwAAAAAAsLsLAAAAAAAAuwAAAAAAAAAAAAA=\",\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"Cloud\":return img`\n.........bbbbb................\n........bb111bb...............\n.......b1111111b..............\n......bb1111111bb....bbb......\n...bbbbd11111111bbbbbb1bb.....\n..bb111dd111111111111111b.....\n.bb111111111111111111111b.....\n.b1111111111111111d11111bb....\nbb111111111111111d1111111bb...\nb111111111111111d111111111bb..\nbb111111111111111d111111111bb.\n.bbb11ddd111111111d11111111bb.\n...bbbbbd1111111111bbb11bbbb..\n.......bb11111111bbb.bbbb.....\n........bbb11111bb............\n..........bbbbbbb.............\n`;\n            case \"image3\":return img`\n.........bbbbb................\n........bb111bb...............\n.......b1111111b..............\n......bb1111111bb....bbb......\n...bbbbd11111111bbbbbb1bb.....\n..bb111dd111111111111111b.....\n.bb111111111111111111111b.....\n.b1111111111111111d11111bb....\nbb111111111111111d1111111bb...\nb111111111111111d111111111bb..\nbb111111111111111d111111111bb.\n.bbb11ddd111111111d11111111bb.\n...bbbbbd1111111111bbb11bbbb..\n.......bb11111111bbb.bbbb.....\n........bbb11111bb............\n..........bbbbbbb.............\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"4B?GV*)eD5DUvikVNk$t\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"6j5)LMVdgl^XeJC*L.Dw\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"TJcarl[PVtMHvEjiAkQ=\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"l9d!xsEb8*84@?y9RWQJ\">Enemy</variable><variable id=\"OhzSzwl78,9[a~*FxDB+\">mySprite</variable><variable id=\"I?4@gJV,8)yi2RplwDBf\">power</variable><variable id=\"?SrrdKP|Z)`PL`-|XKVQ\">mySprite2</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundcolor\"><value name=\"color\"><shadow type=\"colorindexpicker\"><field name=\"index\">11</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"I?4@gJV,8)yi2RplwDBf\">power</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><next><block type=\"gamecountdown\"><value name=\"duration\"><shadow type=\"math_number\"><field name=\"NUM\">10</field></shadow></value><next><block type=\"gameSplash\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><value name=\"title\"><shadow type=\"text\"><field name=\"TEXT\">Press (A) to earn clicks!</field></shadow></value><value name=\"subtitle\"><shadow type=\"text\"><field name=\"TEXT\"/></shadow></value></block></next></block></next></block></next></block></statement></block><block type=\"keyonevent\" x=\"410\" y=\"10\"><field name=\"button\">controller.B</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"hudChangeScoreBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-20</field></shadow></value><next><block type=\"variables_change\"><field name=\"VAR\" id=\"I?4@gJV,8)yi2RplwDBf\">power</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><next><block type=\"game_show_long_text\"><field name=\"layout\">DialogLayout.Top</field><value name=\"str\"><shadow type=\"text\"><field name=\"TEXT\">You bought one extra click!</field></shadow></value></block></next></block></next></block></statement></block><block type=\"gamecountdownevent\" x=\"290\" y=\"270\"><statement name=\"HANDLER\"><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"1\" _input_init=\"true\"></mutation><field name=\"effect\">effects.confetti</field><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">true</field></shadow></value></block></statement></block><block type=\"keyonevent\" x=\"30\" y=\"410\"><field name=\"button\">controller.A</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"OhzSzwl78,9[a~*FxDB+\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n.........bbbbb................\n........bb111bb...............\n.......b1111111b..............\n......bb1111111bb....bbb......\n...bbbbd11111111bbbbbb1bb.....\n..bb111dd111111111111111b.....\n.bb111111111111111111111b.....\n.b1111111111111111d11111bb....\nbb111111111111111d1111111bb...\nb111111111111111d111111111bb..\nbb111111111111111d111111111bb.\n.bbb11ddd111111111d11111111bb.\n...bbbbbd1111111111bbb11bbbb..\n.......bb11111111bbb.bbbb.....\n........bbb11111bb............\n..........bbbbbbb.............\n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"startEffectOnSprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><field name=\"effect\">effects.spray</field><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"OhzSzwl78,9[a~*FxDB+\">mySprite</field></block></value><next><block type=\"hudChangeScoreBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"I?4@gJV,8)yi2RplwDBf\">power</field></block></value></block></next></block></next></block></statement></block></xml>",
  "main.ts": "controller.B.onEvent(ControllerButtonEvent.Pressed, function () {\n    info.changeScoreBy(-20)\n    power2 += 1\n    game.showLongText(\"You bought one extra click!\", DialogLayout.Top)\n})\ncontroller.A.onEvent(ControllerButtonEvent.Pressed, function () {\n    mySprite = sprites.create(img`\n        .........bbbbb................\n        ........bb111bb...............\n        .......b1111111b..............\n        ......bb1111111bb....bbb......\n        ...bbbbd11111111bbbbbb1bb.....\n        ..bb111dd111111111111111b.....\n        .bb111111111111111111111b.....\n        .b1111111111111111d11111bb....\n        bb111111111111111d1111111bb...\n        b111111111111111d111111111bb..\n        bb111111111111111d111111111bb.\n        .bbb11ddd111111111d11111111bb.\n        ...bbbbbd1111111111bbb11bbbb..\n        .......bb11111111bbb.bbbb.....\n        ........bbb11111bb............\n        ..........bbbbbbb.............\n        `, SpriteKind.Player)\n    mySprite.startEffect(effects.spray)\n    info.changeScoreBy(power2)\n})\ninfo.onCountdownEnd(function () {\n    game.over(true, effects.confetti)\n})\nlet mySprite: Sprite = null\nlet power2 = 0\nscene.setBackgroundColor(11)\npower2 = 1\ninfo.startCountdown(10)\ngame.splash(\"Press (A) to earn clicks!\")\n",
  "pxt.json": "{\n    \"name\": \"clicker-withTimer\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.2.16\",\n        \"tag\": \"v1.2.16\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/971a86b03314f200ceb1a951ad277d1d6b8c1e23\",\n        \"target\": \"1.2.16\",\n        \"pxt\": \"6.2.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

```template
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    power += 1
    game.showLongText("You bought one extra click!", DialogLayout.Center)
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


## {Introduction @showdialog}

What's more fun than pressing buttons?

**🛒 Buying things 🛒**

---

Let's modify our clicker game to offer a simple shop.

![Click away](/static/skillmap/clicker/clicker-activity-4.gif "Click and buy bigger clickers" )

## {Step 1}

**The code for a clicker game is already in the workspace.**

When you click **Ⓑ**, you get a super-clicker — but
what fun is it to get extra power for free? Let's add code to charge the player 10 points for the purchase.

---

► From the ``||info:Info||`` category, grab a ``||info:change score by [1]||``
block and snap it into the top of the **on B button pressed** container.

► Change the value in the new block from **1** to **-10**.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
        info.changeScoreBy(-10)
        power += 1
        game.showLongText("You bought one extra click!", DialogLayout.Center)
})
```


## {Step 2}

**💡 Now we're onto something 💡**

But what if the player doesn't have 10 points to spend?
Let's do a quick check of the player's score before we
upgrade the power.

---

► From ``||logic:Logic||``, choose the top
``||logic:if <true> then||`` container and drag it into the top of your
**on B button pressed** container already in the workspace.

► To compare values, open the ``||logic: Logic||``
category and grab a ``||logic: [0] [<] [0]||`` to replace **`<true>`**.



```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 < 0) {

    }
    info.changeScoreBy(-10)
    power += 1
    game.showLongText("You bought one extra click!", DialogLayout.Center)
})
```

## {Step 3}

We should check that score is greater than (or equal to) **10**
before we charge the player 10 points.

---

► To make sure the score is larger than (or equal to) 10, replace the first
**0** in ``||logic: [0] [<] [0]||`` with **10** and change **<**
to **≤**.

► Open the ``||info:Info||`` category and find the ``||info:score||`` value block.
Grab it and drop it in to replace the remaining **0** of the comparison argument.



```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score() {

    }
    info.changeScoreBy(-10)
    power += 1
    game.showLongText("You bought one extra click!", DialogLayout.Center)
})
```


## {Step 4}

Now if the player has a large enough score, you can charge them
10 points and give them their extra power.

---

► The code to adjust the score and power are already at the bottom of the
**on B button pressed** container.  Grab all of the code below and
drag it into the empty **if/then** container.


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score() {
        info.changeScoreBy(-10)
        power += 1
        game.showLongText("You bought one extra click!", DialogLayout.Center)
    }


})
```


## {Step 6 @showdialog}

**🎮 Give your game a try on the game screen 🎮**

It should do what you expect...as long as you have 10 points to spend!


## {Step 7}

Finally, we should let the player know if they don't have enough points to
buy the clicker.

---

► We already have a note that shows **if** the player has enough points.
Click the **⊕** at the bottom of the **if/then** container to create an **else** space
for code that runs when the **if** statement is not true.

► Now you have an **else** container.  Grab another
``||game:show long text [" "] [bottom]||`` and drag it into the empty **else**.

► Click into the textarea of the new block and write a message to let your
player know that they didn't have enough points for an auto-clicker.


```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (10 <= info.score()) {
        let mySprite: Sprite = null
        info.changeScoreBy(-10)
        power +=1
        game.showLongText("You bought one extra click!", DialogLayout.Bottom)
    }
    else {
        game.showLongText("Not enough points for an auto-clicker!", DialogLayout.Bottom)
    }
})
```

## {Finale}

**⚡️ Amazing ⚡️**

Now you have a clicker game with a simple shop.  Give it a try on the game screen.

Click **Done** to return to the main page where you can share your game
with family and friends!