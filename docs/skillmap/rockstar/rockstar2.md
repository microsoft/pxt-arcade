# 80's Rockstar: Get Your Gear


## Welcome @showdialog

Jerry needs to gather all of the instruments before getting on the tour bus!

![Collect the instuments](/static/skillmap/rockstar/rockstar2.gif "Look what we're about to do today!")




## You Earned Points pt. 1

**🎸 Award points when Jerry grabs an instrument 🎸**   
When your sprite overlaps an instrument, we'll change the score.

---


► To detect an overlap, go open the ``||scene:Scene||`` category and drag an
``||scene:on [sprite] of kind [Player] overlaps [ ] at [location]||`` 
container into an empty area of the workspace.

► Change the checkerboard to the red guitar called **instrument1**.

► From ``||info:Info||``, snap a ``||info:change score by [1]||`` block into the new container. 


```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    info.changeScoreBy(1)
})
```

## Try It Too!

**🕹️ Try your maze and grab a guitar 🕹️**

---

Uh oh!  You get WAY too many points when you touch the guitar! We can fix that in the next step.


## 4. You Earned Points pt. 2

**Replace the instruments you collect with an empty tile.**

---

► From ``||scene:Scene||``, drag ``||scene:set [ ] at tilemap col [0] row [0]||`` into **the top** of the ``||scene:on [sprite] of kind [Player] overlaps [instrument1] at [location]||`` container.

► Replace ``||scene:tilemap col [0] row [0]||`` with the ``||variables:location||`` value from the top of the **Player overlaps ins** container.

![Share your location](/static/skillmap/assets/overlap-tile-location.gif "Grab the variable from the overlap container")

```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    //@highlight
    tiles.setTileAt(location, assets.tile`transparency16`)  
    info.changeScoreBy(1)
})
```

![Share your location](/static/skillmap/assets/overlap-tile-location.gif "Grab the variable from the overlap container")



## 5. Look Again

**🕹️ Try your maze in the game window 🕹️ **

---

You should get one point for every instrument you collect.  Can you make it to the door?


## 6. Out the Door

**🚪 Make it out the door 🚪**   
Let's finish the game with a WIN when Jerry overlaps the door!

---


► To detect an overlap, go open ``||scene:Scene||`` and drag an
``||scene:on [sprite] of kind [Player] overlaps [ ] at [location]||`` 
container into an empty area of the workspace.

► Change the checkerboard to the **door** tile.

► From ``||game:Game||``, snap a ``||game:game over <LOSE>||`` block into the new container. 

► Toggle **`<LOSE>`** to **`<WIN>`**.


```blocks
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.over(true)
})
```



## Done

🔥 **A-MAZE-ING** 🔥   

---

Grab your instruments and guide Jerry to the door, then click **Finish** to head back to the 
skillmap. In the next level we'll show you how to subtract points when Jerry runs into crazed fans!


```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```


```template
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
```

```ghost
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})

let mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
info.startCountdown(60)
info.setScore(0)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"HR6MQZ`+AH8fF_EGjDHy\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAADw////DwAA8P/v7u5CAAD/7//k/v8AAP/ustEuUv8A7+7y3yRS/wDv7kLdJFIPAO/u8t8kUv8A/+6y0S5S/wD/7//k/v8AAPD/7+7uQgAAAPD///8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"rockstar\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"HR6MQZ`+AH8fF_EGjDHy\":\n            case \"rockstar\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . f f f f f f f . . . . . \n. . . f f f e e e f f f . . . . \n. . . f f e e e e e f f . . . . \n. . f f e e e e e e e f f . . . \n. . f f f 2 2 2 2 2 f f f . . . \n. . f e f b f 4 f b f e f . . . \n. . f e 4 1 f d f 1 4 e f . . . \n. . f e e d d d d d e e f . . . \n. . f e e e 4 4 4 e e e f . . . \n. . f e f 2 2 2 2 2 f e f . . . \n. . f 2 f 2 2 2 2 2 f 2 f . . . \n. . . 4 f 5 5 5 5 5 f 4 . . . . \n. . . . . f f f f f . . . . . . \n. . . . . f f . f f . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"80s Rockstar - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"tilemaps\": \"github:microsoft/pxt-tilemaps#v1.11.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.5.46\",\n        \"tag\": \"v1.5.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/4f3f29bef862bcab766a47e42db2d3ed6b0060b1\",\n        \"target\": \"1.5.46\",\n        \"pxt\": \"7.1.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQERERERERADk7u7u7u7uQO7u7uTu7u7g7u7u7u7u7uTu7u7u7u7u7+7u7u7u7u7g7u7u7u7u7vDu7u7u7u7uAO/u7u7u7u4A8P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"door\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8//////////zu7u7u7u7+/P7u7v/u/v787u7+u+/u/vzu7r/M++7+/O7uv8z77v787u7+u+/u/vz+7u7/7v7+/O7u7u7u7v78/////////8zMzMzMzMzMzMzMzMzMzAwAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"instrument3\"\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAAAAwBEREQwAAADAETMRDAAAAMARMRMMAAAAwBEzEQwAAADAERERDAAAAMD87s8MAAAAAPDuwQAAAAD///8RDADA8O/v7h7LDM/P7+///xGM/8/s7vEvEWb///zu8SIRhgD//P7u7v9m/8/8/u7+7o//wP/v7v/uD88A////D/8AwA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"fan1\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQQABAAAAAAwBEREQwAAADAETMRDAAAAMARMRMMAAAAwBEzEQwAAADAERERDAAAAAD/RMwMAAAA8P9EwQAAAAD//7wRDADA8L9PRBvLDM/Pv0/u7hGM/8+8S+EuEWb//8xL4SIRhgD//PtEtMxm/8/8+/S/RIj/wP+7/89EDM8A////D8wAwA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"fan2\"\n    },\n    \"tile7\": {\n        \"data\": \"hwQQABAAAAAAwBEREQwAAADAETMRDAAAAMARMRMMAAAAwBEzEQwAAADAERERDAAAAMDM3cwMAAAAAMDdwQAAAAD7/88RDADA0LXf3RvLDM8dtdzu7hGM/x3R2+EuEWb/XVHb4SIRhgBdUcvdvbtm/x1R+9293Yj/EFW13cvdC88AXVXPDLsAwA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"fan3\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAAAAA/+4AAAAAAPDu7g4AAAAA4G4i4gAAAADwJiIiDgDw7/8mzCLiAP/u/yLcLOIA7yIiIrHN4gAuIiISEcziAC4C8BMRIeIA7gDvPhEiDgAA8O4u4+4AAADvDi7iAADw/+4AIuIAAO/kDgDuDgAAT+QAAAAAAADvDgAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"instrument1\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAAAAA/+8AAAAAAPD/7g4AAAAA8G5E5AAAAADwRkREDgAA8P9GRETkAAD/L0TuROQAAO9GRORO5AAAb0T+Qk7kAABuRP9PROQAAOBE8k5EDgAA/09EJO4AAPDv7kTkAADw/+4A7g4AAO/kDgAAAAAAT+QAAAAAAADvDgAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"instrument2\"\n    },\n    \"tile8\": {\n        \"data\": \"hwQQABAAAAAAALALsAsAAAAA27u7vQAAAAC7HdG9DgAAsB0RsfvrALDbEd0R+78O2xvR3RHr/uu7Hd3d0dvuv7AR3R2x3ev+sBEREbu+3e67vRG96yLS7du9u9suIiLtsPvv3SsiIg4Avu++LSIiDgDg++7dIuIAAAC+797tDgAAAOD77g4AAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"instrument0\"\n    },\n    \"tile9\": {\n        \"data\": \"hwQQABAAAAAAAAAAy8wMAAAAALDb280AAAAA+xHbzQAAALD7G73dDAAA+/0fsd0MALD727/R280A+/3fzBHbzbD727/RHbHMsP3fzBEd3c2w3b/RHbHLDADbzBEd3c0AANvRHbHLDAAAsBEd3c0AAACwHbHLDAAAAAAb3c0AAAAAALvLDAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"instrument4\"\n    },\n    \"tile10\": {\n        \"data\": \"hwQQABAAAAAAwMz8////AAC8LLLMzPwAwLss0sy7/AC8u9zdvMzLD7y7u93f37wPvLvL3dv/vA+8u8vdzf2/D8C7y9v93Pv/wLu73L3////Au7vcvf///MC7u8zMzMz8ALy7MzMzM/sAvDuzu7u7DAC8M7u7u8sAADyzu7u7DAAAwMzMzMwAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"camera\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDA4MDgwODA4MDgwODA4MDgwODA4MDgwODA4MDgwODA4MDgwMDAwMDAwMDAwMDAwODAwMDAwMDAwMDAwMDAwMDgwMTAwMDgwODAwMDgwNzA4MDAwODAwMDgwMDA4MDAwODA4MDAwODA4MDAwODA4MDgwMDA4MDAwODAwMDgwMDA4MDgwMDAwMDAwODA4MDQwODAwMDgwMDA4MDAwODAwMDgwODAwMDgwODA4MDgwMDA4MDAwODAwMDAwMDA4MDAwODA4MDAwMDAwMDAwMDAwMDAwMDA4MGMwODAwMDgwMDA4MDgwMDBhMDgwODA4MDgwODAwMDgwODA4MDAwODAwMDgwODAwMDAwMDA4MDAwNjAwMDAwODBiMDgwMDA4MDAwODA4MDAwODA4MDgwMDA4MDgwODA4MDAwODAwMDgwMDA4MDgwMDAwMDAwMDAwMDgwMDAwMDAwMDAwMDAwODAwMDgwODAwMDgwODA4MDgwODA4MDgwODA4MDgwOTA4MDAwODA4MDAwMDAwMDAwNTA4MDAwMDAwMDAwMDAwMDgwMDA4MDgwMDA4MDgwODA4MDgwODA4MDgwODA4MDgwODAwMDgwODA5MDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjA4MDgwODA4MDgwODA4MDgwODA4MDgwODA4MDgwODAzMjIyMjIyMjIyMjIyMjIyMjAyMDAwMDIwMDAwMDAwMjAwMDIyMjAyMDAwMjAwMDIwMDIyMjIwMjIyMDIwMjAyMDAyMDAyMjIwMjAwMDIwMjAwMjIyMjIwMDIwMDAyMDIwMDIwMDAwMDAyMDIwMjAyMDAyMjAyMjIyMjAyMjIwMjAwMjAwMDIwMDIwMjAyMDIwMDIyMjAyMjIyMjAwMjAyMDAyMDAwMDAyMDAwMDIwMjAwMjIwMjIyMjIyMjIyMDIwMDIwMDAwMDIwMDAwMjAyMDAyMjIyMjIyMjIyMjIyMDAwMjAyMDAwMDAwMDAwMDAwMjIyMjIyMjIyMjIyMjIwMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.dungeon.stairLarge\",\n            \"myTiles.tile1\",\n            \"sprites.castle.tileGrass2\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\",\n            \"myTiles.tile5\",\n            \"sprites.swamp.swampTile16\",\n            \"myTiles.tile6\",\n            \"myTiles.tile7\",\n            \"myTiles.tile8\",\n            \"myTiles.tile9\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile7 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile9 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile10 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`10001000080808080808080808080808080808080800000000000008000000000000000801000808000807080008000800080008080008080008080800080008000800080800000008080408000800080008000808000808080800080008000000080008080000000000000000080c080008000808000a08080808080008080800080008080000000800060000080b080008000808000808080008080808000800080008080000000000080000000000000800080800080808080808080808080908000808000000000508000000000000080008080008080808080808080808080800080809080000000000000000000000000208080808080808080808080808080803`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 . . . . . . 2 . . . . . . . 2 \n. . 2 2 . 2 . 2 . . . 2 . . . 2 \n2 . 2 2 . 2 2 2 . 2 . 2 . 2 . 2 \n2 . . . 2 2 . 2 . 2 . . . 2 . 2 \n2 . 2 2 2 2 . . . 2 . . . 2 . 2 \n2 . . . . . . . . 2 . 2 . 2 . 2 \n2 . . 2 2 2 2 2 . 2 2 2 . 2 . 2 \n2 . . . 2 . . . . 2 . 2 . 2 . 2 \n2 . 2 2 2 . 2 2 2 2 . . . 2 . 2 \n2 . . . . . 2 . . . . . . 2 . 2 \n2 . . 2 2 2 2 2 2 2 2 2 . 2 . 2 \n2 . . . . . 2 . . . . . . 2 . 2 \n2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . \n2 . 2 . . . . . . . . . . . . . \n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . \n`, [myTiles.transparency16,sprites.dungeon.stairLarge,myTiles.tile1,sprites.castle.tileGrass2,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.swamp.swampTile16,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"door\":\n            case \"tile1\":return tile1;\n            case \"instrument3\":\n            case \"tile4\":return tile4;\n            case \"fan1\":\n            case \"tile5\":return tile5;\n            case \"fan2\":\n            case \"tile6\":return tile6;\n            case \"fan3\":\n            case \"tile7\":return tile7;\n            case \"instrument1\":\n            case \"tile2\":return tile2;\n            case \"instrument2\":\n            case \"tile3\":return tile3;\n            case \"instrument0\":\n            case \"tile8\":return tile8;\n            case \"instrument4\":\n            case \"tile9\":return tile9;\n            case \"camera\":\n            case \"tile10\":return tile10;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
