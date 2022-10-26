# First Exhibit: By Land


## 1. Make an Animal

**Your very first exhibit!**  
Exciting, huh?

Hm... it does look a little empty.  
Well, what's your favorite animal? Let's invite them over!

---

- :paper plane:  From the ``||sprites:Sprites||`` category, drag  
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``   
into ``||loops:on start||``. 

- :paint brush:  Click the grey box in the new block and draw your animal using the **image editor**!

- :mouse pointer:  Click **> Next** when you're ready for the next step.

```blocks
//@highlight
let mySprite = sprites.create(img`
    . . . . . . 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 4 4 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 4 4 4 4 5 5 5 5 . . . . 
    . 5 5 4 f 4 4 4 4 5 4 5 . . . . 
    . 5 5 4 4 4 f 4 4 5 4 5 4 4 4 . 
    . 5 3 4 4 4 4 4 4 5 5 5 4 4 4 . 
    . 5 4 4 4 4 4 4 5 5 5 5 4 4 4 4 
    . 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 
    . . . 5 5 5 5 5 5 5 5 4 4 4 4 4 
    . . . . 5 5 5 5 5 5 4 4 4 4 4 4 
    . . . . . . 4 4 4 4 4 4 4 4 4 4 
    . . . . . 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 . . . . 4 4 4 . 4 . 
    . . . . 4 4 . . . . 4 4 . . . 4 
    `, SpriteKind.Player)
```

## 2. Move Around 

**Take your animal for a walk!**
🐆 🦓
---

- :paper plane: From ``||sprites:Sprites||``, grab  
``||sprites:set [mySprite] velocity to vx [50] vy [50]||``  
and drag it into the **end** of the ``||loops:on start||`` container. 

Your animal friend should start moving! 

- :mouse pointer:  Try changing the numbers next to **vx** and **vy**
and watch the game screen to see what happens!

```blocks
let mySprite = sprites.create(img`
    . . . . . . 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 4 4 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 4 4 4 4 5 5 5 5 . . . . 
    . 5 5 4 f 4 4 4 4 5 4 5 . . . . 
    . 5 5 4 4 4 f 4 4 5 4 5 4 4 4 . 
    . 5 3 4 4 4 4 4 4 5 5 5 4 4 4 . 
    . 5 4 4 4 4 4 4 5 5 5 5 4 4 4 4 
    . 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 
    . . . 5 5 5 5 5 5 5 5 4 4 4 4 4 
    . . . . 5 5 5 5 5 5 4 4 4 4 4 4 
    . . . . . . 4 4 4 4 4 4 4 4 4 4 
    . . . . . 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 . . . . 4 4 4 . 4 . 
    . . . . 4 4 . . . . 4 4 . . . 4 
    `, SpriteKind.Player)
    //@highlight
mySprite.setVelocity(50, 50)
```

## 3. Random Mosey

The same old path gets boring after a while.  
**Let's add some randomness!**

---

- :calculator:  Go to the ``||math:Math||`` category and grab two   
``||math:pick random [0] to [10]||``   
value blocks. 

- :mouse pointer:  Use the two **random** value blocks to replace the numbers next to the **vx** and **vy**. 

- :mouse pointer:  Change the numbers inside the **random** blocks to see different kinds of movement each time you reload!

_💡 Don't forget to try negative numbers!_


```blocks
let mySprite = sprites.create(img`
    . . . . . . 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 4 4 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 4 4 4 4 5 5 5 5 . . . . 
    . 5 5 4 f 4 4 4 4 5 4 5 . . . . 
    . 5 5 4 4 4 f 4 4 5 4 5 4 4 4 . 
    . 5 3 4 4 4 4 4 4 5 5 5 4 4 4 . 
    . 5 4 4 4 4 4 4 5 5 5 5 4 4 4 4 
    . 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 
    . . . 5 5 5 5 5 5 5 5 4 4 4 4 4 
    . . . . 5 5 5 5 5 5 4 4 4 4 4 4 
    . . . . . . 4 4 4 4 4 4 4 4 4 4 
    . . . . . 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 . . . . 4 4 4 . 4 . 
    . . . . 4 4 . . . . 4 4 . . . 4 
    `, SpriteKind.Player)
    //@highlight
mySprite.setVelocity(randint(-50, 50), randint(-50, 50))
```

## 4. Bounce 

**When the animal hits the edge of the enclosure it stops moving!**

Let's fix that. 

---

- :paper plane:  Open the ``||sprites:Sprites||`` category, then grab  
``||sprites:set [mySprite] bounce on wall <ON>||``  
to snap in at the **end** of the program.


Now your animal can explore the entire exhibit!


```blocks
let mySprite = sprites.create(img`
    . . . . . . 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 4 4 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 4 4 4 4 5 5 5 5 . . . . 
    . 5 5 4 f 4 4 4 4 5 4 5 . . . . 
    . 5 5 4 4 4 f 4 4 5 4 5 4 4 4 . 
    . 5 3 4 4 4 4 4 4 5 5 5 4 4 4 . 
    . 5 4 4 4 4 4 4 5 5 5 5 4 4 4 4 
    . 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 
    . . . 5 5 5 5 5 5 5 5 4 4 4 4 4 
    . . . . 5 5 5 5 5 5 4 4 4 4 4 4 
    . . . . . . 4 4 4 4 4 4 4 4 4 4 
    . . . . . 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 . . . . 4 4 4 . 4 . 
    . . . . 4 4 . . . . 4 4 . . . 4 
    `, SpriteKind.Player)
mySprite.setVelocity(randint(-50, 50), randint(-50, 50))
//@highlight
mySprite.setBounceOnWall(true)
```

## 5. Try It

**Check the Game Window**

Watch your animal move around!



## 6. Something's Happening @showdialog

![A clipboard with a checklist. One item is checked off](/static/skillmap/zoo/zoo-clipboard.png)

**This exhibit looks awesome!**

The other kids at the zoo are going to 
love it...WHOA! What's that sound?

## 7. WooWoo @showdialog

![A rotating red siren](/static/skillmap/zoo/siren.gif)

**An alarm?**

What's going on? Hold on, we're getting a report from the penguin department — the
penguins did *what*? 

## Finale
**🚨 OH NO🚨**

You better click **Done** and get over there!



```customts
tiles.setTilemap(tilemap`level2`)
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"small_tilemap_editor\"><field name=\"tilemap\">tilemap`level2`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level2\"}}</data></block></statement></block></xml>",
  "main.ts": "tiles.setSmallTilemap(tilemap`level2`)\n",
  "pxt.json": "{\n    \"name\": \"zoo-exhibit\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.36\",\n        \"tag\": \"v1.3.36\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/53389e906336460d06f337a21664ec615586f762\",\n        \"target\": \"1.3.36\",\n        \"pxt\": \"6.8.26\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "test.ts": "namespace tiles {\n    //% blockId=small_tilemap_editor block=\"set 8x8 tilemap to $tilemap\"\n    //% weight=200 blockGap=8\n    //% tilemap.fieldEditor=\"tilemap\"\n    //% tilemap.fieldOptions.decompileArgumentAsString=\"true\"\n    //% tilemap.fieldOptions.filter=\"tile\"\n    //% tilemap.fieldOptions.taggedTemplate=\"tilemap\"\n    //% tilemap.fieldOptions.tileWidth=8\n    //% blockNamespace=\"scene\" group=\"Tiles\" duplicateShadowOnDrag\n    //% help=tiles/set-tile-map\n    export function setSmallTilemap(tilemap: TileMapData) {\n        scene.setTileMapLevel(tilemap);\n    }\n}",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"transparency8\": {\n        \"data\": \"hwQIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile12\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile1\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQIAAgAAADd3d3d3d3d3d3d290d0d3dHdHd3d3d3d3d3d3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"tile13\": {\n        \"data\": \"hwQIAAgAAADd3d3d3d273d3du93d3d3d3d3d3b3d3d3d3d3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile2\"\n    },\n    \"tile14\": {\n        \"data\": \"hwQIAAgAAADdHdHd3R3R3d3d3d3d3d3d3d3d3dvd3d3d3R3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile3\"\n    },\n    \"tile15\": {\n        \"data\": \"hwQIAAgAAADd3d3d3d3d3d3d3d3d3d3d3d3b3d3d3d3d3d293d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile4\"\n    },\n    \"tile17\": {\n        \"data\": \"hwQIAAgAAADd3d123d1td93d3Wbdvd193d3ddtvd3Wfb3d3d3d3dbQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile6\"\n    },\n    \"tile18\": {\n        \"data\": \"hwQIAAgAAADd3d3d3d3d3d3d0d3d3d3d3d3d1t12Z9dmZ2dnd3d3dw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile7\"\n    },\n    \"tile19\": {\n        \"data\": \"hwQIAAgAAAB3d3d3ZmdnZ912Z9fd3d3W3d3d3d3d0d3d3d3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile8\"\n    },\n    \"tile20\": {\n        \"data\": \"hwQIAAgAAADW3d3d3d3dvXbd3b1n3d3d193b3Wbd3d131t3dZ93d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile9\"\n    },\n    \"tile21\": {\n        \"data\": \"hwQIAAgAAADW3d3d3d3dvXbd3b1n3d3d193d1td2Z9dnZ2dnd3d3dw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile10\"\n    },\n    \"tile23\": {\n        \"data\": \"hwQIAAgAAAB3d3d3dnZ2dn12Z31t3d193d3ddtvd3Wfb3d3d3d3dbQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile12\"\n    },\n    \"tile11\": {\n        \"data\": \"hwQQABAAAAB3d3d3d3d3d3d2d3d3d3d3V2V3d3d3d3d3VXZ3d1V2d1V3d3d3d3d3V3V3d3d3d3d3V3V3d3d3d3dVdnd3d3d3d2V3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1dld3d3d3d3d3d3d1d3d3d3d3d3d3d3d3d3d3d3dw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile0\"\n    },\n    \"tile16\": {\n        \"data\": \"hwQIAAgAAAB3d3d3d2d3d3d3dnd3ZXd3d3d3d2V3d3d3d3dnd3d3dw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile5\"\n    },\n    \"tile24\": {\n        \"data\": \"hwQIAAgAAAB3d3d3ZmZ2bWfdbd123d3dd93d3Wbd3d3X3d3d1t292w==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile13\"\n    },\n    \"tile22\": {\n        \"data\": \"hwQIAAgAAAC929123d1td93d3Xbd3d133d3ddt3WbXdmZ2Z2d3d3dw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile11\"\n    },\n    \"level2\": {\n        \"id\": \"level2\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MDgxNDAwMGYwMDA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTBkMDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTBhMDUwNTA1MDUwODAxMDIwMTAxMDIwMTAxMDIwMTAxMDIwMTAxMDIwNzA1MDUwNTA1MDgwMzA0MDMwMzA0MDMwMzA0MDMwMzA0MDMwMzA0MDcwNTA1MDUwNTA4MDEwMjAxMDEwMjAxMDEwMjAxMDEwMjAxMDEwMjA3MDUwNTA1MDUwODAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwNzA1MDUwNTA1MDgwMTAyMDEwMTAyMDEwMTAyMDEwMjAxMDEwMjAxMDcwNTA1MDUwNTA4MDMwNDAzMDMwNDAzMDMwNDAzMDQwMzAzMDQwMzA3MDUwNTA1MDUwODAxMDIwMTAxMDIwMTAxMDIwMTAyMDEwMTAyMDEwNzA1MDUwNTA1MDgwMTAyMDEwMTAyMDEwMTAyMDEwMjAxMDEwMjAxMDcwNTA1MDUwNTA4MDMwNDAzMDMwNDAzMDMwNDAzMDQwMzAzMDQwMzA3MDUwNTA1MDUwYzA2MDYwNjA2MDYwNjA2MDYwNjA2MDYwNjA2MDYwYjA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTA1MDUwNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency8\",\n            \"myTiles.tile6\",\n            \"myTiles.tile13\",\n            \"myTiles.tile14\",\n            \"myTiles.tile15\",\n            \"myTiles.tile16\",\n            \"myTiles.tile17\",\n            \"myTiles.tile18\",\n            \"myTiles.tile19\",\n            \"myTiles.tile20\",\n            \"myTiles.tile21\",\n            \"myTiles.tile22\",\n            \"myTiles.tile23\",\n            \"myTiles.tile24\"\n        ],\n        \"displayName\": \"level2\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile12 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile13 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile14 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile15 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile17 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile18 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile19 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile20 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile21 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile23 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile11 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile24 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile22 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level2\":\n            case \"level2\":return tiles.createTilemap(hex`14000f000505050505050505050505050505050505050505050505050505050505050505050505050505050505050d09090909090909090909090909090a050505050801020101020101020101020101020705050505080304030304030304030304030304070505050508010201010201010201010201010207050505050802010201020102010201020102010705050505080102010102010102010201010201070505050508030403030403030403040303040307050505050801020101020101020102010102010705050505080102010102010102010201010201070505050508030403030403030403040303040307050505050c06060606060606060606060606060b050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`\n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n`, [myTiles.transparency8,myTiles.tile6,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24], TileScale.Eight);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"transparency8\":return transparency8;\n            case \"myTile1\":\n            case \"tile12\":return tile12;\n            case \"myTile\":\n            case \"tile6\":return tile6;\n            case \"myTile2\":\n            case \"tile13\":return tile13;\n            case \"myTile3\":\n            case \"tile14\":return tile14;\n            case \"myTile4\":\n            case \"tile15\":return tile15;\n            case \"myTile6\":\n            case \"tile17\":return tile17;\n            case \"myTile7\":\n            case \"tile18\":return tile18;\n            case \"myTile8\":\n            case \"tile19\":return tile19;\n            case \"myTile9\":\n            case \"tile20\":return tile20;\n            case \"myTile10\":\n            case \"tile21\":return tile21;\n            case \"myTile12\":\n            case \"tile23\":return tile23;\n            case \"myTile0\":\n            case \"tile11\":return tile11;\n            case \"myTile5\":\n            case \"tile16\":return tile16;\n            case \"myTile13\":\n            case \"tile24\":return tile24;\n            case \"myTile11\":\n            case \"tile22\":return tile22;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
