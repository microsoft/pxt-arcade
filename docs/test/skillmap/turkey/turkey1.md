# Move the Turkey
### @explicitHints true


## Welcome @showdialog

Happy **Turkey Day!**

This activity will show you how to make a jumpy
platform game.

![An anigif of the game we're about to build](/static/skillmap/turkey/turkey1.gif "Look what we're about to do today!")

Click "Ok" to get started.




## {2. We need a HERO}

**Where's the turkey??**

Let's create a turkey sprite and get it moving before we do anything else.

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our turkey will be a sprite, too.

hint~

- :paper plane: From the ``||sprites:Sprites||`` category,
grab <br/>
```block
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```
<br/>and snap it inside and at **the end** of the ``||loops:on start||`` container.



#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```


## {3. We need a Turkey}


- :paint brush: To choose the image of the big turkey, click the empty grey box,
then switch to **My Assets** and click the turkey named **player**.

![Pick player from My Assets](/static/skillmap/turkey/pick-player.gif "Toggle to My Assets and choose player")

#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
```



## {4. Control the Player}

**Time to get the player moving**

---

- :game: From the ``||controller:Controller||`` category, grab<br/>
```block
controller.moveSprite(bigTurkey, 100, 0)
```
<br/>and drag it into **the end** of the <br/>
``||loops:on start||``
<br/>container.

This block is set in a way that lets you move the turkey left and right, but not up or down.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
// @highlight
controller.moveSprite(bigTurkey, 100, 0)
```


## Try It

**Check the Game Window**

The turkey should move left when you click the left arrow and move right with the right arrow.


## {6. Add gravity}

**To make the game playable, it needs gravity.**

For that, we'll add acceleration.

~hint What is acceleration?💡

---

Acceleration controls how speed changes in a direction.

We need to play with the turkey's speed in the vertical (up & down) direction.

hint~

- :paper plane:  From the ``||sprites:Sprites||`` category, grab <br/>

```block
let bigTurkey: Sprite = null
bigTurkey.ay = 500
```

<br/>and snap it inside at **the end** of the
``||loops:on start||`` container.


#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
// @highlight
bigTurkey.ay = 500
```

## {7. Follow with Camera}

**Oops!  The turkey falls off-screen!**

---

- :tree:  To keep the turkey in sight go to ``||scene:Scene||`` and drag<br/>
```block
scene.cameraFollowSprite(bigTurkey)
```
<br/>to **the end** of the
``||loops:on start||`` container.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
// @highlight
scene.cameraFollowSprite(bigTurkey)

```


## Look Again

🕹️ 🕹️ 🕹️
**Look at your game to make sure you can see the turkey land on a platform.**



## {9. Start at the Bottom}

**The turkey landed, but it's already near the top of the tilemap!**

Let's move it to a special tile on the ground.

---

- :tree: From ``||scene:Scene||``, drag <br/>

```block
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
```

<br/>into **the end** of the
``||loops:on start||`` container.



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency16`)
```

## {10. Start at the Bottom}


- :mouse pointer: Click the checkered square and select the **start** tile,
which looks like a purple line at the bottom of the square.
![The start tile for the turkey](/static/skillmap/turkey/start-tile.png "Choose the first non-empty tile.")



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
```

## {11. Jump}

Now that the turkey is on the ground,
we need to make it jump using the **A** button!

---

- :game: From ``||controller:Controller||``, drag<br/>
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let bigTurkey: Sprite = null
    bigTurkey.vy = -300
})
```
<br/>into **an empty area** of the workspace.

This bundle of code will change the velocity of the turkey for a moment each time you press the A button (or space bar on your keyboard.)

~hint What is velocity? 💡

---

Velocity is the speed that something is traveling in a specific direction.

In this step, we're changing the speed that the turkey moves in the up/down direction.

hint~

#### ~ tutorialhint

```blocks
let bigTurkey: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

## Play your game!

Give your game a try using the arrow keys and A button (or space bar.)

Can you get your turkey to the top?



## Finale

When you're finished playing your game, click **Done**
to return to the main skillmap and continue to find out how to rescue your turkey friends from their cages!



```blockconfig.global
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)

tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)

scene.cameraFollowSprite(bigTurkey)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

```package
simple-blocks=github:kiki-lee/carnival
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})

let bigTurkey: Sprite = null

bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
bigTurkey.ay = 500
controller.moveSprite(bigTurkey, 100, 0)
scene.cameraFollowSprite(bigTurkey)

```


```customts
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)

namespace SpriteKind {
    //% isKind
    export const Rescued = SpriteKind.create()
}
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQYABgAAAAAAAC7AAC7CwAAAAAAALC7uwAruwAAAAAAALBLtAsrsrALAAAAAAC7RAsrsrsLAAAAAACwS7QrsksLAAAAsLu7u7QrS0QLAAAAsCIisksrRL28AAAAsLsiIksrRNy9CwAAALC7K0vk7s69uwAAAAAAK0Lk7t7cvAAAAAAAsCLi7u7MvAsAAAAAAOvs7u7LzAsAALC7vczu7u7NzAsAALvu7rvu7u7ezAsAsOvu7u7u7u7szAsAsN7R7u7uzszszAsAsB7/7u7u7u7uvgsAu/6/Ti7u7u7uvgSwvu7eRCLu7u7uvgTgu+7dRCLu7u7uuwCwANtERC677u6+CwAAAPBMRAsAu7u7AAAAAAAAtAAAAAAAAAAAAAAACwAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"player\"\n    },\n    \"image1\": {\n        \"data\": \"hwQeABQAAAAAAAC7AAC7CwAAAAAAALC7uwAruwAAAAAAALBLtAsrsrALAAAAAAC7RAsrsrsLAAAAAACwS7QrsksLAAAAsLu7u7Qru8wLAAAAsCIisksr7r0MAAAAsLsiItvr7tzNAAAAALC7K9vt7s69AAAAAAAAu9vu7t7cAAAAAACwu73u7u7cAAAAAAC77r7u7u7bAAAAALDr7u7uu73dAAAAALDe0e7u7u7eAAAAALAe/+7u7u7uAAAAALv+v07u7u7uAAAAsL7u3kTi7u7uAAAA4Lvu3UTi7u5OAAAAsADbRESwu7tNAAAAAADwTEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"turkey\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"player\":return img`\n........................\n..................beb...\n.................beb....\n.....bbb......bbbbbb....\n.....b2b.....bbeeeeeb...\n.bb..b2bb...bbed1feedf..\nbbbb.b22b...bee1ffed4c..\nbb4bbb22b...beedfbdd44..\n.b44bb22bb..deeeee44444b\n.bb44bb222b.beeee44444b.\n..bb44bbb22bcbeeee22eb..\n....bb44442ecbeee2222...\nbbbbbbbb442ceeeeeeeeb...\nb2222222eeeeeeeeeeeeb...\nbb222b44eeeeeeeeeeeeeb..\n.bbbb444eeeeeeeceeeeeb..\n...bb4dceeeeeeeceeeeeb..\n..bb44bdcdeeeeeceeeeeb..\n..bbbbcddccbdecceeeeeb..\n......bbbdcccdeeeeeebb..\n.......bbccccccceeebb...\n........bbbcccccbbbb....\n..........bbbbbbb44.....\n........................\n`;\n            case \"image1\":\n            case \"turkey\":return img`\n..............................\n..............................\n..............................\n.....bbb........beb...........\n.....b2b.......beb............\n.bb..b2bb...bbbbbb............\nbbbb.b22b..bbeeeeeb...........\nbb4bbb22b.bbed1feedf..........\n.b44bb22bbbee1ffed4c..........\n.bb44bb22bbeedfbdd44..........\n..bb44bbbbdeeeee44444.........\n....bb4dddbbeee44444..........\nbbbbbbbbdeeeeeee22............\nb222222eeeeeeeeeeeb...........\nbb222beeeeeebeeeeeb...........\n.bbbbbeeeeeebeeeeeb...........\n...bbcdceeeedeeeeeb...........\n..bb4cbdcdeebeeeeeb...........\n..bbbbcddccbdeeeeed...........\n.......cbdddddeee44...........\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"9ecw?uPtb)o)0#+E^u,1\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":ML9S)E@KgRhXE/x{A`9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\";B^Y[cZd;E_DnD.5{J@R\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"wsNPniHJ[)XHrQ;3T)#=\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"H;j``voP]Rgjc1sSe+-(\">Turkey</variable><variable id=\"gcUpn%0~ykX#(O:!pNmV\">bigTurkey</variable><variable id=\"r5?^Ib{kgL!.xn|uBAI,\">followTurkey</variable><variable id=\"S|~*(#7WP05%3gUAO?Yz\">myEnemy</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"turkey day assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.6.24\",\n        \"tag\": \"v1.6.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5bea1575ea693e0648a647cbd86cda9776d58f48\",\n        \"target\": \"1.6.24\",\n        \"pxt\": \"7.2.25\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAuwAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAAuw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"start\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzNzd3d3d3d3N3LBLtLAiu8vcALtEuyK7xMzMzMzMzMzM3N3d3dzd3M3cKyKy3O7czdy7u7Lc7tzM3ACwu9zu3M3MzMzM3O7cztzd3d3c7tzO3Lvu7ty+3Mvc6x3t3O7cztzr8e/c7tzOzMzMzMz8zMzc3d3d3f3dzQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cage\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwYTAwMDAyMDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzAxMDIwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNjAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjA5MDAwMDAwMDAwMDA1MDQwNDA0MDQwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDkwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDQwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjA2MDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDUwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMTAyMDAwMDAwMDAwMDAwMDkwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDUwNDA2MDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDYwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDQwNDA0MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA2MDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDUwNDA0MDQwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNDA0MDEwMjAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNjAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA2MDAwMDAwMDAwMDA1MDYwMDAwMDkwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAxMDIwMDAwMDkwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDA5MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA0MDYwMDAwMDAwMDAwMDUwNDA2MDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDQwNjAwMDAwMDA1MDQwNDA0MDYwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMTAyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDAwMDAwMDAyMDIyMjIwMjAwMDAyMDIyMjIyMjIyMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjAyMDAwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjIyMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAyMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIyMDAwMDAwMDAyMjIyMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMjIwMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMjAwMjAwMDAwMDAwMjAwMjIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMDIyMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjIyMDIwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMjIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAyMDIyMDIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDIyMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIyMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIwMDIyMjAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMjIwMDIwMDAwMDAwMDAwMDAyMDIyMjIyMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDIwMDIwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMjIyMjIwMjIyMDIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIwMjIwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDIwMDAwMjIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIwMjIyMjAyMDAyMjAyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDAwMjAyMjAyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIyMjIyMjAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMjIyMDAyMDAwMDIwMjIwMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIyMDIwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAyMjIyMDIwMDAwMDAwMDAwMDAyMDAyMDAyMjIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMjAyMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjIyMDAyMDIyMjIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.skillmap.islandTile3\",\n            \"sprites.skillmap.islandTile5\",\n            \"sprites.skillmap.islandTile1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.swamp.swampTile16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`1000a00002070707070707070707070707070701020707070707070707070707070707010200000000000000000000000000000102000000000000000000000000000001020600000000000000000005040406010209000000000005040404040404060102000000000000000000000000000001020504060000000000000000000000010200000000000000000000000000000102000000000000050600000000000001020000000000000000000000000000010200000000000000000000000000000102000504060000000000000504040601020000000000000000000000000000010200000000000005060000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000050404060000000102000000000000050600000000090001020000000000000000000005040406010200000000000000000000000000000102040404040600000000000000000001020000000000000000000000000000010200000000000000000504060000000102000000000000000000000000000001020000000000000000000000000000010200000000000504040600000000000102000000050600000000000000000001020000000000000000000000000000010206000000000000000000050600000102000000000000000000000000000001020900000000000000000000000000010200050600000000000000000504060102000005060000000000000000000001020000000000000000000000000000010200000005040600000000000000000102000000000000000000000000000001020000000000000000050600000000010200000000000000000000050600000102050404040600000000000000000001020000000000000000000000000000010200000000000000000000000005060102000000000000090000050600000001020000000000000000000000000000010200000000000504060000000000000102000000000000000000000000000001020000000000000000000005040406010200050406000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000005040600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000000005060000000102000000000000000000000000000001020504060000000000000000000000010200000000000005040600000000000102000000090000000000000000000001020000000000000000000005040406010200000005060000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000050600000000000000000001020000000005040406000000000000010200000000000000000000000000000102050406000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000000000005060000000504040601020000000000000000000000000000010200000000000000000000000000000102000005040404040406000000000001020000000000000000000000000000010200000000000000000000050600000102000000000000000000000000000001020000000000000009000000000000010200000000000000000000000000050102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000506000102000504060000000000000000000001020000000000000000000000000000010200000000000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000900000000050404040600000102000000000000000000000000000001020504040406000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000506000000000000010200000000000506000000000000000102000000000000000000000000000001020000000000000000000504040404010200050406000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000506000000090000000102000000000000000000000000000001020000000000000000000005040600010200000000000000000000000000000102000000000504060000000000000001020504040600000000000000000000010200000000000000000000000000000102000000000000000000050406000001020000000000000000000000000000010200000000000000000000000000000102000000000005040600000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200090000000000000000000000000102000000000000000000000000000001020406000000000005060000090000010200000000000000000000000000000102000000000000000000000504040601020000000504060000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000000000050404060000000001020000000000000000000000000000010200000000000000000000000504060102050406000000000000000000000001020000000000000009000000000000010200000000000000000000000000000102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000005060001020000090000000504040600000000010200000000000000000000000000000102000005060000000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000050406000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000050406000009000001020000000000000000000000000000010200000000000000000000050404060102000000000000000000000000000001020000000504040600000000000000010200000900000000000000000000000102000000000000000000000000000001020404060000000000050406000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200000000000000000000090000000102000000000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000504040600000005040404060001020000000000000000000000000000010200000000000008000000000000000102030303030303030303030303030303`, img`\n2..............2\n2..............2\n2..............2\n2..............2\n22.........22222\n2......222222222\n2..............2\n2222...........2\n2..............2\n2......22......2\n2..............2\n2..............2\n2.222......22222\n2..............2\n2......22......2\n2..............2\n2..............2\n2.......2222...2\n2......22......2\n2..........22222\n2..............2\n222222.........2\n2..............2\n2........222...2\n2..............2\n2..............2\n2.....2222.....2\n2...22.........2\n2..............2\n22.........22..2\n2..............2\n2..............2\n2.22........2222\n2..22..........2\n2..............2\n2...222........2\n2..............2\n2........22....2\n2..........22..2\n222222.........2\n2..............2\n2............222\n2.........22...2\n2..............2\n2.....222......2\n2..............2\n2..........22222\n2.222...22.....2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..............2\n2.........22...2\n2..............2\n2222...........2\n2......222.....2\n2..............2\n2..........22222\n2...22.........2\n2..............2\n2..............2\n2..22..........2\n2...22.........2\n2....2222......2\n2..............2\n2222......22...2\n2..............2\n2..............2\n2.....22...22222\n2..............2\n2..............2\n2..2222222.....2\n2..............2\n2..........22..2\n2..............2\n2..............2\n2.............22\n2.....2222.....2\n2..............2\n2...........22.2\n2.222..........2\n2..............2\n2.......22.....2\n2..............2\n2..............2\n2.......22222..2\n2..............2\n222222.........2\n2..............2\n2..............2\n2......22......2\n2.....22.......2\n2..............2\n2.........222222\n2.222..........2\n2..............2\n2..............2\n2.....22.......2\n2..............2\n2..........222.2\n2..............2\n2....222.......2\n22222..........2\n2..............2\n2.........222..2\n2..............2\n2..............2\n2.....222......2\n2..............2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2..............2\n222.....22.....2\n2..............2\n2..........22222\n2...222........2\n2..............2\n2..............2\n2..............2\n2..22..........2\n2......2222....2\n2..............2\n2...........2222\n2222...........2\n2..............2\n2..............2\n2.....2222.....2\n2..............2\n2..............2\n2...........22.2\n2......2222....2\n2..............2\n2..22..........2\n2..............2\n2..............2\n2...222........2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..........22222\n2..............2\n2...2222.......2\n2..............2\n2..............2\n2222.....222...2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2.........22...2\n2..............2\n2..............2\n2.2222...22222.2\n2..............2\n2..............2\n2222222222222222\n`, [myTiles.transparency16,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.swamp.swampTile16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"start\":\n            case \"tile1\":return tile1;\n            case \"cage\":\n            case \"tile2\":return tile2;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
