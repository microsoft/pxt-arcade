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

---

Let's create a turkey sprite and get it moving before we do anything else.


- :paper plane: From the ``||sprites:Sprites||`` category,
grab <br/>
```block
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```
<br/>and snap it inside and at **the end** of the ``||loops(noclick):on start||``
container already in the workspace.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our turkey will be a sprite, too.

hint~


#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```


## {3. We need a Turkey}

Choose the big turkey...

---

- :paint brush: Click the empty grey box,
then switch to **Gallery** and click the turkey in the first box.

![Pick player from My Assets](/static/skillmap/turkey/pick-player.gif "Toggle to Gallery and choose player")

#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
```



## {4. Control the Player}

**Time to get the player moving**

---

- :game: From the ``||controller:Controller||`` category, grab<br/>
```block
controller.moveSprite(bigTurkey, 100, 0)
```
<br/>and drag it into **the end** of the <br/>
``||loops(noclick):on start||``
<br/>container.

This block is set in a way that lets you move the turkey left and right, but not up or down.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
// @highlight
controller.moveSprite(bigTurkey, 100, 0)
```


## {5. Try It}


- :binoculars: Test your project in the game window!

You should be able to move your sprite with the joypad or arrow keys on your keyboard.

![Look for the game window in the lower right](/static/skillmap/turkey/game.png)




## {6. Add gravity}

**To make the game playable, it needs gravity.**

For that, we'll add acceleration.

---

- :paper plane:  From the ``||sprites:Sprites||`` category, grab
```block
let bigTurkey: Sprite = null
bigTurkey.ay = 500
```
and snap it inside at **the end** of the
``||loops(noclick):on start||`` container.


~hint What is acceleration?💡

---

Acceleration controls how speed changes in a direction.

We need to play with the turkey's speed in the vertical (up & down) direction.

hint~


#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
// @highlight
bigTurkey.ay = 500
```

## {7. Follow with Camera}

**Oops!  The turkey falls off-screen!**

---

- :tree:  To keep the turkey in sight, go to ``||scene:Scene||`` and drag<br/>
```block
scene.cameraFollowSprite(bigTurkey)
```
<br/>to **the end** of the
``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
// @highlight
scene.cameraFollowSprite(bigTurkey)

```


## {8. Look Again}


- :binoculars: Check your project in the game window!

Your turkey should land on a platform,
then you should be able to move it with the joypad or arrow keys on your keyboard.




## {9. Start at the Bottom}

**The turkey landed, but it's already near the top of the tilemap!**

Let's move it to a special tile on the ground.

---

- :tree: From ``||scene:Scene||``, drag
```block
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency17`)
```
into **the end** of the
``||loops(noclick):on start||`` container.



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency17`)
```

## {10. Start at the Bottom}


- :mouse pointer: Click the checkered square and select the **start** tile,
which looks like a purple line at the bottom of the square.
![The start tile for the turkey](/static/skillmap/turkey/start-tile.png "Choose the first non-empty tile.")



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
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

## {12. Play your game!}


- :binoculars: Test your game!

Give your game a try using the arrow keys and A button (or space bar.)

Can you get your turkey to the top of the screen?



## {Finale}

When you're finished playing your game, click **Done**
to return to the main skillmap.

Continue to the next level to find out how to rescue your turkey friends 
from their cages!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right 
corner for the share button.

![Share your card](/static/skillmap/turkey/share.gif )

hint~




```blockconfig.global
let bigTurkey = sprites.create(img`a`, SpriteKind.Player)

tiles.placeOnRandomTile(bigTurkey, img`.`)

scene.cameraFollowSprite(bigTurkey)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
turkey_imgs=github:kiki-lee/turkey_imgs
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})

let bigTurkey: Sprite = null

bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
tiles.placeOnRandomTile(bigTurkey, turkey_imgs.start)
bigTurkey.ay = 500
controller.moveSprite(bigTurkey, 100, 0)
scene.cameraFollowSprite(bigTurkey)

```


```customts
scene.setBackgroundColor(9)
tiles.setTilemap(turkey_imgs.level1)

namespace SpriteKind {
    //% isKind
    export const Rescued = SpriteKind.create()
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" id=\"EY`vhO:h*%a^dk.UR446\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"turkey_tiles\",\n    \"version\": \"0.0.1\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"testFiles\": [],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.46\",\n        \"tag\": \"v1.12.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/e66fb08db35df2249cd64300195259c64d497106\",\n        \"target\": \"1.12.46\",\n        \"pxt\": \"8.5.57\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#FF93C4\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#249CA3\",\n        \"#78DC52\",\n        \"#B86F6F\",\n        \"#87F2FF\",\n        \"#8E2EC4\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ],\n    \"assetPack\": true\n}\n",
  "tilemap.g.jres": "{\n    \"transparency17\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAuwAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAA2wAAAAAAAADbAAAAAAAAANsAAAAAAAAAuw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"start\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzNzd3d3d3d3N3LBLtLAiu8vcALtEuyK7xMzMzMzMzMzM3N3d3dzd3M3cKyKy3O7czdy7u7Lc7tzM3ACwu9zu3M3MzMzM3O7cztzd3d3c7tzO3Lvu7ty+3Mvc6x3t3O7cztzr8e/c7tzOzMzMzMz8zMzc3d3d3f3dzQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"cage\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwYTAwMDAyMDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzAxMDIwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNjAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjA5MDAwMDAwMDAwMDA1MDQwNDA0MDQwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDkwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDQwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjA2MDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDUwNDA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMTAyMDAwMDAwMDAwMDAwMDkwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDUwNDA2MDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNDA2MDEwMjAwMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNjAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDYwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDQwNDA0MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA2MDAwMTAyMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDUwNDA0MDQwNjAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNDA0MDEwMjAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwNTA2MDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDQwNjAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAxMDIwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA2MDAwMDAwMDAwMDA1MDYwMDAwMDkwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDQwNjAxMDIwMDAwMDAwNTA0MDYwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwNTA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA0MDYwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNTA0MDYwMTAyMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDA5MDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDA1MDQwNDA2MDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1MDYwMDAxMDIwMDAwMDkwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDA1MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDUwNDA2MDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDUwNDA2MDAwMDA5MDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDUwNDA0MDYwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwNTA0MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwOTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwNDA0MDYwMDAwMDAwMDAwMDUwNDA2MDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDIwMDAwMDAwMDA1MDQwNjAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDAwMDAwMTAyMDAwMDAwMDAwMDAwMDAwMDAwMDUwNjAwMDAwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAyMDAwNTA0MDQwNjAwMDAwMDA1MDQwNDA0MDYwMDAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMjAwMDAwMDAwMDAwMDA4MDAwMDAwMDAwMDAwMDAwMTAyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDAwMDAwMDAyMDIyMjIwMjAwMDAyMDIyMjIyMjIyMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjAyMDAwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMDIwMDIwMDAwMjAwMjAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjIyMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAyMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIyMDAwMDAwMDAyMjIyMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMjIwMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMjAwMjAwMDAwMDAwMjAwMjIwMjIyMjIyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMDIyMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjIyMDIwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjIwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMDAwMDAwMjAwMjAwMDAyMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjIwMjAwMjIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDIyMDAwMDAwMDAyMDAyMDAyMDIyMDIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMDIwMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDIyMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIyMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIwMDIyMjAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDIyMjIwMjIwMDIwMDAwMDAwMDAwMDAyMDIyMjIyMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDIwMDIwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMjIyMjIwMjIyMDIwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAyMjAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAyMDIyMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIwMjIwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIwMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMDIwMDAwMjIwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIwMjIyMjAyMDAyMjAyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjIwMDIwMDAwMDAwMDIwMDIwMDAwMjAyMjAyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAyMjIyMjIyMjAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjIyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMjIyMDAyMDAwMDIwMjIwMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMDAyMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDIyMDIwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMjAyMjAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMjAyMjIyMDIwMDAwMDAwMDAwMDAyMDAyMDAyMjIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDIyMjIwMDAwMjAyMjAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAyMDIyMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDIyMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIyMjIyMDAyMDIyMjIyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency17\",\n            \"sprites.skillmap.islandTile3\",\n            \"sprites.skillmap.islandTile5\",\n            \"sprites.skillmap.islandTile1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.swamp.swampTile16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency17 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`1000a00002070707070707070707070707070701020707070707070707070707070707010200000000000000000000000000000102000000000000000000000000000001020600000000000000000005040406010209000000000005040404040404060102000000000000000000000000000001020504060000000000000000000000010200000000000000000000000000000102000000000000050600000000000001020000000000000000000000000000010200000000000000000000000000000102000504060000000000000504040601020000000000000000000000000000010200000000000005060000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000050404060000000102000000000000050600000000090001020000000000000000000005040406010200000000000000000000000000000102040404040600000000000000000001020000000000000000000000000000010200000000000000000504060000000102000000000000000000000000000001020000000000000000000000000000010200000000000504040600000000000102000000050600000000000000000001020000000000000000000000000000010206000000000000000000050600000102000000000000000000000000000001020900000000000000000000000000010200050600000000000000000504060102000005060000000000000000000001020000000000000000000000000000010200000005040600000000000000000102000000000000000000000000000001020000000000000000050600000000010200000000000000000000050600000102050404040600000000000000000001020000000000000000000000000000010200000000000000000000000005060102000000000000090000050600000001020000000000000000000000000000010200000000000504060000000000000102000000000000000000000000000001020000000000000000000005040406010200050406000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000005040600000000000102000000000000000000000000000001020000000000000000000000000000010200000000000000000005060000000102000000000000000000000000000001020504060000000000000000000000010200000000000005040600000000000102000000090000000000000000000001020000000000000000000005040406010200000005060000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000050600000000000000000001020000000005040406000000000000010200000000000000000000000000000102050406000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000000000005060000000504040601020000000000000000000000000000010200000000000000000000000000000102000005040404040406000000000001020000000000000000000000000000010200000000000000000000050600000102000000000000000000000000000001020000000000000009000000000000010200000000000000000000000000050102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000506000102000504060000000000000000000001020000000000000000000000000000010200000000000000050600000000000102000000000000000000000000000001020000000000000000000000000000010200000900000000050404040600000102000000000000000000000000000001020504040406000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000506000000000000010200000000000506000000000000000102000000000000000000000000000001020000000000000000000504040404010200050406000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000000000506000000090000000102000000000000000000000000000001020000000000000000000005040600010200000000000000000000000000000102000000000504060000000000000001020504040600000000000000000000010200000000000000000000000000000102000000000000000000050406000001020000000000000000000000000000010200000000000000000000000000000102000000000005040600000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200090000000000000000000000000102000000000000000000000000000001020406000000000005060000090000010200000000000000000000000000000102000000000000000000000504040601020000000504060000000000000000010200000000000000000000000000000102000000000000000000000000000001020000000000000000000000000000010200000506000000000000000000000102000000000000050404060000000001020000000000000000000000000000010200000000000000000000000504060102050406000000000000000000000001020000000000000009000000000000010200000000000000000000000000000102000000000005040406000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000000000000005060001020000090000000504040600000000010200000000000000000000000000000102000005060000000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000050406000000000000000001020000000000000000000000000000010200000000000000000000000000000102000000000000050406000009000001020000000000000000000000000000010200000000000000000000050404060102000000000000000000000000000001020000000504040600000000000000010200000900000000000000000000000102000000000000000000000000000001020404060000000000050406000000010200000000000000000000000000000102000000000000000000000000000001020000000005040600000000000000010200000000000000000000090000000102000000000000000000050600000001020000000000000000000000000000010200000000000000000000000000000102000504040600000005040404060001020000000000000000000000000000010200000000000008000000000000000102030303030303030303030303030303`, img`\n2..............2\n2..............2\n2..............2\n2..............2\n22.........22222\n2......222222222\n2..............2\n2222...........2\n2..............2\n2......22......2\n2..............2\n2..............2\n2.222......22222\n2..............2\n2......22......2\n2..............2\n2..............2\n2.......2222...2\n2......22......2\n2..........22222\n2..............2\n222222.........2\n2..............2\n2........222...2\n2..............2\n2..............2\n2.....2222.....2\n2...22.........2\n2..............2\n22.........22..2\n2..............2\n2..............2\n2.22........2222\n2..22..........2\n2..............2\n2...222........2\n2..............2\n2........22....2\n2..........22..2\n222222.........2\n2..............2\n2............222\n2.........22...2\n2..............2\n2.....222......2\n2..............2\n2..........22222\n2.222...22.....2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..............2\n2.........22...2\n2..............2\n2222...........2\n2......222.....2\n2..............2\n2..........22222\n2...22.........2\n2..............2\n2..............2\n2..22..........2\n2...22.........2\n2....2222......2\n2..............2\n2222......22...2\n2..............2\n2..............2\n2.....22...22222\n2..............2\n2..............2\n2..2222222.....2\n2..............2\n2..........22..2\n2..............2\n2..............2\n2.............22\n2.....2222.....2\n2..............2\n2...........22.2\n2.222..........2\n2..............2\n2.......22.....2\n2..............2\n2..............2\n2.......22222..2\n2..............2\n222222.........2\n2..............2\n2..............2\n2......22......2\n2.....22.......2\n2..............2\n2.........222222\n2.222..........2\n2..............2\n2..............2\n2.....22.......2\n2..............2\n2..........222.2\n2..............2\n2....222.......2\n22222..........2\n2..............2\n2.........222..2\n2..............2\n2..............2\n2.....222......2\n2..............2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2..............2\n222.....22.....2\n2..............2\n2..........22222\n2...222........2\n2..............2\n2..............2\n2..............2\n2..22..........2\n2......2222....2\n2..............2\n2...........2222\n2222...........2\n2..............2\n2..............2\n2.....2222.....2\n2..............2\n2..............2\n2...........22.2\n2......2222....2\n2..............2\n2..22..........2\n2..............2\n2..............2\n2...222........2\n2..............2\n2..............2\n2......222.....2\n2..............2\n2..........22222\n2..............2\n2...2222.......2\n2..............2\n2..............2\n2222.....222...2\n2..............2\n2..............2\n2....222.......2\n2..............2\n2.........22...2\n2..............2\n2..............2\n2.2222...22222.2\n2..............2\n2..............2\n2222222222222222\n`, [myTiles.transparency17,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.swamp.swampTile16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency17\":return transparency17;\n            case \"start\":\n            case \"tile1\":return tile1;\n            case \"cage\":\n            case \"tile2\":return tile2;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}

```