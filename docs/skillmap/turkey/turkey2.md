# Gather a Crowd


## Welcome @showdialog

**In this tutorial, we'll show you how to add code to rescue the turkeys in the cages.**

![Playing to rescue turkeys as you jump](/static/skillmap/turkey/turkey2.gif "Can you save them all?")



## 2. Try It!

**First, check the game you have so far.**<br/>
🕹️ 🕹️ 🕹️ 

---

You should be able to move your turkey from side to side and make it jump 
from platform to platform using the A button (or the space bar.)



## 3. Rescue the Others

**Turkey to the rescue!**<br/>
🦃 🦃 🦃

When the player overlaps a _cage_ tile, let's trigger some code.

---

- :tree: Drag the<br/>
``||scene:on [sprite] of kind [Player] overlaps [ ] at [location]||``<br/>
container into an empty area of the workspace.

- :paint brush: Click the checkerboard image and change it to the **cage** tile.

- :id card: To give the player a point for each turkey it saves, snap a<br/>
``||info:change score by [1]||``<br/>
block into the new container.


```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
})
```

## 4. Try It Again!

**Give it a try in the game window**

---

Guide your turkey over to a cage.  What happens when the two overlap?



## 5. Too Many Points

Uh oh!  You get WAY too many points when you overlap a cage. 

**We can fix that by replacing the cage with an empty tile once you reach it.**

---

- :tree: Drag<br/>
``||scene:set [ ] at tilemap col [0] row [0]||``<br/>
into **the end** of the<br/>
``||scene:on [sprite] of kind [Player] overlaps [cage] at [location]||``<br/>
container.

- :mouse pointer: Replace<br/>
``||scene:tilemap col [0] row [0]||``<br/>
with the ``||variables:location||``<br/>
value from the top of the **Player overlaps cage** container.

![Share your location](/static/skillmap/turkey/turkey-location.gif "Grab the variable from the overlap container")

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    //@highlight
    tiles.setTileAt(location, assets.tile`transparency16`)
})
```

![Share your location](/static/skillmap/turkey/turkey-location.gif "Grab the variable from the overlap container")


## 6. Play Again!

**Give it a try in the game window**

---

You should get one point for each cage you grab.  Can you find all 15? 



## 7. Gather an Army

You should have the start of a very nice game! 

**Each time you overlap a cage, let's make a new turkey follow you to freedom!**

---

- :paper plane: Drag<br/>
``||sprites:set [mySprite2] to sprite [ ] of kind [Player]||``<br/>
into **the end** of the<br/>
``||scene:on [sprite] of kind [Player] overlaps [cage] at [location]||``<br/>
container.

- :mouse pointer: Click<br/>
``||variables:mySprite2||``<br/>
and rename the variable **turkey**.

- :paint brush: Click the empty grey square and toggle to 
**MyAssets** to choose the little **turkey** sprite.

- :mouse pointer: Click<br/>
``||sprites:Player||``<br/>
and change it to ``||sprites:Rescued||``.


```blocks
namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    //@highlight
    let turkey = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
})
```


## 8. Appear

What good does it do to add the turkey if you can't see it?  
Let's set each new turkey to appear in the same place the cage disappeared from.

---

- :tree: Drag  
``||scene:place [mySprite] on top of tilemap col [0] row [0]||``<br/>
into **the end** of the<br/>
``||scene:on [sprite] of kind [Player] overlaps [cage] at [location]||``<br/>
container.

- :mouse pointer: Click<br/>
``||variables:mySprite||``<br/>
and select ``||variables:turkey||``.

- :mouse pointer: Replace<br/>
``||scene:tilemap col [0] row [0]||``<br/>
with the ``||variables:location||``<br/>
value from the top of the **Player overlaps cage** container.


```blocks
namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    let turkey = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
    //@highlight
    tiles.placeOnTile(turkey, location)
})
```


## 9. Play!

**Give it a try in the game window**

---

A little turkey should appear each time you overlap a cage.   

Keep following the instructions to find out how to get the little turkeys to follow you to freedom.



## 10. Be Free!


- :paper plane: Drag<br/>
``||sprites:set [myEnemy] follow [mySprite]||``<br/>
into **the end** of the<br/>
``||scene:on [sprite] of kind [Player] overlaps [cage] at [location]||``<br/>
container.

- :mouse pointer: Click<br/>
``||variables:myEnemy||``<br/>
and change to ``||variables:turkey||``.


```blocks
namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    let turkey = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
    tiles.placeOnTile(turkey, location)
    //@highlight
    turkey.follow(mySprite)
})
```



## Finale

**There you have it!**

Each turkey you rescue should follow you as you make your way to the top.

---

When you're finished playing your game, click **Done** to return to the 
main skillmap and keep going so we can show you how to end the game with a win!




```template
namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})

let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)

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

