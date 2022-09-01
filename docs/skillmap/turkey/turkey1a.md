# Get Moving


## Introduction @showdialog

Time to get your turkey moving and jumping!

![An anigif of the game we're about to build](/static/skillmap/turkey/turkey1.gif "Look what we're about to do today!")


## 2. Check Your Code

**Your code from the last activity should be in your workspace.**

If you don't see any code in your workspace, or if the code in your workspace
doesn't show a turkey on your screen, you can replace the existing code with ours
by clicking **"Replace my code"** at the bottom of the instruction panel.


---

- :mouse pointer: Click **Next** to see how to control your player!


## 3. Control the Player

**Let's make your turkey move using the arrow buttons!**<br/>
_(Don't forget to keep scrolling until you reach the bottom of this instruction.)_

---

- :game: From the ``||controller: Controller||`` category in the toolbox, drag <br/>


```block
controller.moveSprite(mySprite, 100, 0)
```

```blockconfig.local
controller.moveSprite(mySprite, 100, 0)
```

to **the end** of the ``||loops:on start||`` container that's already in the workspace.


- :mouse pointer: Press the **+** button to the right of the block and change
the
[__*vy*__](#whatVY "vertical velocity") (up/down speed)
argument to **0** so that the player won't hover up or down when you use the joypad.


~hint  What is **vy**?

In short, **vy** stands for "the **velocity** along the **y** axis," which refers
to the rate of change of the sprite from top to bottom. By setting this value to **0**,
the sprite will not be able to move up or down.
hint~


~hint  Show me how to complete these steps.


![Move with controls](/static/skillmap/turkey/move-sprite.gif "Add the move sprite block")
hint~

- :mouse pointer: Click **Next** when you're ready to try your game.


```blocks
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite, 100, 0)
```


## 4. Try It

**Click the Game Console **

The turkey should move left when you click the left arrow and move
right with the right arrow, but it should not move up or down.

~hint  How do I get to the game console?

![Here's where to look for the game window](/static/skillmap/turkey/game.gif "The workspace is on the right.")
hint~

- :mouse pointer: Click **Next** when you're ready to add gravity.



## 5. Add gravity

**To make the game playable, the world needs gravity.**

For that, add [__*acceleration*__](#accel "increased speed in a direction")
to "pull down" on the sprite.

---

- :paper plane:  From the ``||sprites:Sprites||`` category in the toolbox, drag <br/>
``||sprites:set [mySprite] [x] to [0]||`` <br/>
to **the end** of the <br/>
``||loops:on start||`` container in the workspace.

- :mouse pointer: Click the dropdown to change ``||sprites:x||`` to
``||sprites:ay (acceleration y)||``.

- :mouse pointer: To pull the sprite quickly toward the ground,
replace **0** with something large, like **500**.


~hint  What is **ay**?

In short, **ay** stands for "the **acceleration** along the **y** axis," which refers
to the change in speedfrom top to bottom. <br/>
By setting this value
to **500**, the sprite will be pulled from the top of the screen to the bottom, with an above average strength.
hint~


~hint  Show me how to complete these steps.

![Move with controls](/static/skillmap/turkey/acceleration.gif "Add the move sprite block")
hint~

- :mouse pointer: Click **Next** when you're ready to follow your turkey off-screen.


```blocks
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
// @highlight
mySprite.ay = 500
```

## 6. Follow with Camera

**Oops!  The turkey falls below the bottom of the screen!**

---

- :tree:  To keep the turkey in sight, open ``||scene: Scene||``, then drag <br/>
``||scene:camera follow sprite [mySprite]||`` <br/>
to **the end** of the <br/>
``||loops:on start||`` container.


- :mouse pointer: Click **Next** to see what happens now!


```blocks
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
// @highlight
scene.cameraFollowSprite(mySprite)

```


## 7. Look Again

🕹️ 🕹️ 🕹️

**Look at the game window to make sure you can see the turkey land on the platform.**



## 8. Start at the Bottom

The turkey has landed, but it's already near the top of the play area!
Let's start it on a special tile on the ground.

---

- :tree: From the ``||scene:Scene||`` category, drag the <br/>
``||scene:place [mySprite] on top of random [ ]||`` <br/>
block into **the end** of the <br/>
``||loops:on start||`` container.

- :mouse pointer: Click the checkered square and select the **start** tile,
which looks like a purple line at the bottom of the square.

![the start tile](/static/skillmap/turkey/start-tile.png "the tile where the turkey should start")


~hint  What is a tile?

A tile is a special 16px x 16px image square
that can be used as a part of the background scene.
Several of these tile squares are put together into one large **tilemap** that acts as the
backdrop for this game!
hint~


~hint  Show me how to complete these steps.

![Start the turkey on a tile](/static/skillmap/turkey/start-tile.gif "Choose the tile where the turkey should start")
hint~

- :mouse pointer: Click **Next** when you're ready make the turkey jump!

```blocks
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
//@highlight
tiles.placeOnRandomTile(mySprite, assets.tile`start`)
```

## 9. Jump

Now that the turkey is at the bottom of the game,
we need to make it jump using the **A** button!

---

- :game: From ``||controller:Controller||``, drag the <br/>
``||controller:on [A] button [pressed]||`` <br/>
container into an empty area of the workspace.

- :paper plane: Inside of the <br/>
``||controller:on [A] button [pressed]||`` <br/>
container, add <br/>
``||sprites:set [mySprite] [x] to [0]||``.

- :mouse pointer: Change ``||sprites:[x]||`` to ``||sprites:[vy (velocity y)]||``
so you can temporarily change the direction the turkey is traveling.

- :mouse pointer: Change **0** to **-300** to send the turkey upward with each press of the (A) button!



~hint  Show me how to complete these steps.

![Add a jump on A press](/static/skillmap/turkey/jump.gif "Here's how to send the turkey upward")
hint~

- :mouse pointer: Click **Next** when you're ready to give your game a try!

```blocks
let mySprite: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
```

## Finale

🔥 **That's it! Now try playing your game!** 🔥
Can you get the turkey to the top?

---

Take a spin through the level, then click **Done**
to return to the main skillmap and go on to the next
activity where we'll show you how to rescue the other turkeys from their cages!


```template
namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}

let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
```


```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})

let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)

```



```customts

scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)

```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQYABgAAAAAAAC7AAC7CwAAAAAAALC7uwAruwAAAAAAALBLtAsrsrALAAAAAAC7RAsrsrsLAAAAAACwS7QrsksLAAAAsLu7u7QrS0QLAAAAsCIisksrRL28AAAAsLsiIksrRNy9CwAAALC7K0vk7s69uwAAAAAAK0Lk7t7cvAAAAAAAsCLi7u7MvAsAAAAAAOvs7u7LzAsAALC7vczu7u7NzAsAALvu7rvu7u7ezAsAsOvu7u7u7u7szAsAsN7R7u7uzszszAsAsB7/7u7u7u7uvgsAu/6/Ti7u7u7uvgSwvu7eRCLu7u7uvgTgu+7dRCLu7u7uuwCwANtERC677u6+CwAAAPBMRAsAu7u7AAAAAAAAtAAAAAAAAAAAAAAACwAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"player\"\n    },\n    \"image1\": {\n        \"data\": \"hwQeABQAAAAAAAC7AAC7CwAAAAAAALC7uwAruwAAAAAAALBLtAsrsrALAAAAAAC7RAsrsrsLAAAAAACwS7QrsksLAAAAsLu7u7Qru8wLAAAAsCIisksr7r0MAAAAsLsiItvr7tzNAAAAALC7K9vt7s69AAAAAAAAu9vu7t7cAAAAAACwu73u7u7cAAAAAAC77r7u7u7bAAAAALDr7u7uu73dAAAAALDe0e7u7u7eAAAAALAe/+7u7u7uAAAAALv+v07u7u7uAAAAsL7u3kTi7u7uAAAA4Lvu3UTi7u5OAAAAsADbRESwu7tNAAAAAADwTEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"turkey\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"player\":return img`\n........................\n..................beb...\n.................beb....\n.....bbb......bbbbbb....\n.....b2b.....bbeeeeeb...\n.bb..b2bb...bbed1feedf..\nbbbb.b22b...bee1ffed4c..\nbb4bbb22b...beedfbdd44..\n.b44bb22bb..deeeee44444b\n.bb44bb222b.beeee44444b.\n..bb44bbb22bcbeeee22eb..\n....bb44442ecbeee2222...\nbbbbbbbb442ceeeeeeeeb...\nb2222222eeeeeeeeeeeeb...\nbb222b44eeeeeeeeeeeeeb..\n.bbbb444eeeeeeeceeeeeb..\n...bb4dceeeeeeeceeeeeb..\n..bb44bdcdeeeeeceeeeeb..\n..bbbbcddccbdecceeeeeb..\n......bbbdcccdeeeeeebb..\n.......bbccccccceeebb...\n........bbbcccccbbbb....\n..........bbbbbbb44.....\n........................\n`;\n            case \"image1\":\n            case \"turkey\":return img`\n..............................\n..............................\n..............................\n.....bbb........beb...........\n.....b2b.......beb............\n.bb..b2bb...bbbbbb............\nbbbb.b22b..bbeeeeeb...........\nbb4bbb22b.bbed1feedf..........\n.b44bb22bbbee1ffed4c..........\n.bb44bb22bbeedfbdd44..........\n..bb44bbbbdeeeee44444.........\n....bb4dddbbeee44444..........\nbbbbbbbbdeeeeeee22............\nb222222eeeeeeeeeeeb...........\nbb222beeeeeebeeeeeb...........\n.bbbbbeeeeeebeeeeeb...........\n...bbcdceeeedeeeeeb...........\n..bb4cbdcdeebeeeeeb...........\n..bbbbcddccbdeeeeed...........\n.......cbdddddeee44...........\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"9ecw?uPtb)o)0#+E^u,1\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":ML9S)E@KgRhXE/x{A`9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\";B^Y[cZd;E_DnD.5{J@R\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"wsNPniHJ[)XHrQ;3T)#=\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"H;j``voP]Rgjc1sSe+-(\">Turkey</variable><variable id=\"gcUpn%0~ykX#(O:!pNmV\">mySprite</variable><variable id=\"r5?^Ib{kgL!.xn|uBAI,\">followTurkey</variable><variable id=\"S|~*(#7WP05%3gUAO?Yz\">myEnemy</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"turkey day assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.6.24\",\n        \"tag\": \"v1.6.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5bea1575ea693e0648a647cbd86cda9776d58f48\",\n        \"target\": \"1.6.24\",\n        \"pxt\": \"7.2.25\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAuwAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAAuw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"start\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzNzd3d3d3d3N3LBLtLAiu8vcALtEuyK7xMzMzMzMzMzM3N3d3dzd3M3cKyKy3O7czdy7u7Lc7tzM3ACwu9zu3M3MzMzM3O7cztzd3d3c7tzO3Lvu7ty+3Mvc6x3t3O7cztzr8e/c7tzOzMzMzMz8zMzc3d3d3f3dzQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cage\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwYTAwMDAyMDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzAxMDIwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNjAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjA5MDAwMDAwMDAwMDA1MDQwNDA0MDQwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDkwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDQwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjA2MDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDUwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMTAyMDAwMDAwMDAwMDAwMDkwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDUwNDA2MDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDYwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDQwNDA0MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA2MDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDUwNDA0MDQwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNDA0MDEwMjAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNjAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA2MDAwMDAwMDAwMDA1MDYwMDAwMDkwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAxMDIwMDAwMDkwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDA5MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA0MDYwMDAwMDAwMDAwMDUwNDA2MDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDQwNjAwMDAwMDA1MDQwNDA0MDYwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMTAyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDAwMDAwMDAyMDIyMjIwMjAwMDAyMDIyMjIyMjIyMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjAyMDAwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjIyMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAyMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIyMDAwMDAwMDAyMjIyMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMjIwMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMjAwMjAwMDAwMDAwMjAwMjIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMDIyMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjIyMDIwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMjIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAyMDIyMDIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDIyMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIyMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIwMDIyMjAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMjIwMDIwMDAwMDAwMDAwMDAyMDIyMjIyMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDIwMDIwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMjIyMjIwMjIyMDIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIwMjIwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDIwMDAwMjIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIwMjIyMjAyMDAyMjAyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDAwMjAyMjAyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIyMjIyMjAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMjIyMDAyMDAwMDIwMjIwMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIyMDIwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAyMjIyMDIwMDAwMDAwMDAwMDAyMDAyMDAyMjIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMjAyMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjIyMDAyMDIyMjIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.skillmap.islandTile3\",\n            \"sprites.skillmap.islandTile5\",\n            \"sprites.skillmap.islandTile1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.swamp.swampTile16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`1000a00002070707070707070707070707070701020707070707070707070707070707010200000000000000000000000000000102000000000000000000000000000001020600000000000000000005040406010209000000000005040404040404060102000000000000000000000000000001020504060000000000000000000000010200000000000000000000000000000102000000000000050600000000000001020000000000000000000000000000010200000000000000000000000000000102000504060000000000000504040601020000000000000000000000000000010200000000000005060000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000050404060000000102000000000000050600000000090001020000000000000000000005040406010200000000000000000000000000000102040404040600000000000000000001020000000000000000000000000000010200000000000000000504060000000102000000000000000000000000000001020000000000000000000000000000010200000000000504040600000000000102000000050600000000000000000001020000000000000000000000000000010206000000000000000000050600000102000000000000000000000000000001020900000000000000000000000000010200050600000000000000000504060102000005060000000000000000000001020000000000000000000000000000010200000005040600000000000000000102000000000000000000000000000001020000000000000000050600000000010200000000000000000000050600000102050404040600000000000000000001020000000000000000000000000000010200000000000000000000000005060102000000000000090000050600000001020000000000000000000000000000010200000000000504060000000000000102000000000000000000000000000001020000000000000000000005040406010200050406000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000005040600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000000005060000000102000000000000000000000000000001020504060000000000000000000000010200000000000005040600000000000102000000090000000000000000000001020000000000000000000005040406010200000005060000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000050600000000000000000001020000000005040406000000000000010200000000000000000000000000000102050406000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000000000005060000000504040601020000000000000000000000000000010200000000000000000000000000000102000005040404040406000000000001020000000000000000000000000000010200000000000000000000050600000102000000000000000000000000000001020000000000000009000000000000010200000000000000000000000000050102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000506000102000504060000000000000000000001020000000000000000000000000000010200000000000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000900000000050404040600000102000000000000000000000000000001020504040406000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000506000000000000010200000000000506000000000000000102000000000000000000000000000001020000000000000000000504040404010200050406000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000506000000090000000102000000000000000000000000000001020000000000000000000005040600010200000000000000000000000000000102000000000504060000000000000001020504040600000000000000000000010200000000000000000000000000000102000000000000000000050406000001020000000000000000000000000000010200000000000000000000000000000102000000000005040600000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200090000000000000000000000000102000000000000000000000000000001020406000000000005060000090000010200000000000000000000000000000102000000000000000000000504040601020000000504060000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000000000050404060000000001020000000000000000000000000000010200000000000000000000000504060102050406000000000000000000000001020000000000000009000000000000010200000000000000000000000000000102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000005060001020000090000000504040600000000010200000000000000000000000000000102000005060000000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000050406000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000050406000009000001020000000000000000000000000000010200000000000000000000050404060102000000000000000000000000000001020000000504040600000000000000010200000900000000000000000000000102000000000000000000000000000001020404060000000000050406000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200000000000000000000090000000102000000000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000504040600000005040404060001020000000000000000000000000000010200000000000008000000000000000102030303030303030303030303030303`, img`\n2..............2\n2..............2\n2..............2\n2..............2\n22.........22222\n2......222222222\n2..............2\n2222...........2\n2..............2\n2......22......2\n2..............2\n2..............2\n2.222......22222\n2..............2\n2......22......2\n2..............2\n2..............2\n2.......2222...2\n2......22......2\n2..........22222\n2..............2\n222222.........2\n2..............2\n2........222...2\n2..............2\n2..............2\n2.....2222.....2\n2...22.........2\n2..............2\n22.........22..2\n2..............2\n2..............2\n2.22........2222\n2..22..........2\n2..............2\n2...222........2\n2..............2\n2........22....2\n2..........22..2\n222222.........2\n2..............2\n2............222\n2.........22...2\n2..............2\n2.....222......2\n2..............2\n2..........22222\n2.222...22.....2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..............2\n2.........22...2\n2..............2\n2222...........2\n2......222.....2\n2..............2\n2..........22222\n2...22.........2\n2..............2\n2..............2\n2..22..........2\n2...22.........2\n2....2222......2\n2..............2\n2222......22...2\n2..............2\n2..............2\n2.....22...22222\n2..............2\n2..............2\n2..2222222.....2\n2..............2\n2..........22..2\n2..............2\n2..............2\n2.............22\n2.....2222.....2\n2..............2\n2...........22.2\n2.222..........2\n2..............2\n2.......22.....2\n2..............2\n2..............2\n2.......22222..2\n2..............2\n222222.........2\n2..............2\n2..............2\n2......22......2\n2.....22.......2\n2..............2\n2.........222222\n2.222..........2\n2..............2\n2..............2\n2.....22.......2\n2..............2\n2..........222.2\n2..............2\n2....222.......2\n22222..........2\n2..............2\n2.........222..2\n2..............2\n2..............2\n2.....222......2\n2..............2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2..............2\n222.....22.....2\n2..............2\n2..........22222\n2...222........2\n2..............2\n2..............2\n2..............2\n2..22..........2\n2......2222....2\n2..............2\n2...........2222\n2222...........2\n2..............2\n2..............2\n2.....2222.....2\n2..............2\n2..............2\n2...........22.2\n2......2222....2\n2..............2\n2..22..........2\n2..............2\n2..............2\n2...222........2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..........22222\n2..............2\n2...2222.......2\n2..............2\n2..............2\n2222.....222...2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2.........22...2\n2..............2\n2..............2\n2.2222...22222.2\n2..............2\n2..............2\n2222222222222222\n`, [myTiles.transparency16,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.swamp.swampTile16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"start\":\n            case \"tile1\":return tile1;\n            case \"cage\":\n            case \"tile2\":return tile2;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
