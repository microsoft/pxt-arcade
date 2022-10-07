# First Exhibit: By Sea

## 1. Welcome

**🐙 Welcome to the aquarium! 🐙**  
We're so excited to have you designing this exhibit.

---

- :paper plane:  To start, go to the ``||sprites:Sprites||`` category and drag
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
into the ``||loops:on start||`` container.

- :paint brush:  Click the grey box and use the **image editor** to
draw your favorite sea animal.

- :mouse pointer:  Click **Next** when you're ready for the next step.

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 4
    . . . . . . 4 4 4 4 4 4 1 f 4 4
    . . . . 4 4 4 4 4 4 4 4 1 1 4 4
    4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
    . 4 . . . . . . 4 4 4 4 . . . .
    4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```

## 2. Move It

**Just keep swimming!**

---

- :paper plane:  In ``||sprites:Sprites||``, find  
``||sprites:set [mySprite] [x] to [0]||``  
and drag it into the **end** of the ``||loops:on start||`` container.

- :mouse pointer:  Click **x** then choose ** vx (velocity x)** from the dropdown menu.

- :mouse pointer:  Try changing the **0** in the textbox to something else
*(either positive or negative)*.

You should see your fishy friend start to move on the game screen.

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 4
    . . . . . . 4 4 4 4 4 4 1 f 4 4
    . . . . 4 4 4 4 4 4 4 4 1 1 4 4
    4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
    . 4 . . . . . . 4 4 4 4 . . . .
    4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    //@highlight
mySprite.vx = 50
```

## 3. Bounce

**Let's teach our fishy friend to do a flip!**

---

- :paper plane:  Open ``||sprites:Sprites||``, then snap  
``||sprites:set [mySprite] bounce on wall <ON>||``  
to the end of the program and check out your exhibit on the game screen!

```blocks

let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 4
    . . . . . . 4 4 4 4 4 4 1 f 4 4
    . . . . 4 4 4 4 4 4 4 4 1 1 4 4
    4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
    . 4 . . . . . . 4 4 4 4 . . . .
    4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.vx = 50
//@highlight
mySprite.setBounceOnWall(true)
```


## 4. Random

**Let's make the aquarium more exciting with some** **_randomness_**.

---

- :paper plane:  Grab a **new**  
``||sprites:set [mySprite] [x] to [0]||``  
block and drag it to the end of the ``||loops:on start||`` container.

- :mouse pointer:  Replace **x** with **y** using the dropdown menu.

This will change the position of the fish in the up/down direction.


```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 4
    . . . . . . 4 4 4 4 4 4 1 f 4 4
    . . . . 4 4 4 4 4 4 4 4 1 1 4 4
    4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
    . 4 . . . . . . 4 4 4 4 . . . .
    4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.vx = 50
mySprite.setBounceOnWall(true)
//@highlight
mySprite.y = 0
```

## 5. Replace Values

- :calculator:  From the ``||math:Math||`` category, grab a  
``||math:pick random [0] to [10]||``   
value block and
use it to replace the **0** next to ``||sprites:y||``.

- :mouse pointer:  Try replacing **0** and **10** with larger numbers
to see how they affect your new friend!


_💡 The screen height only goes from **0** to **120** so numbers outside
that range will hide your aquatic animal._


```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 4
    . . . . . . 4 4 4 4 4 4 1 f 4 4
    . . . . 4 4 4 4 4 4 4 4 1 1 4 4
    4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
    . 4 . . . . . . 4 4 4 4 . . . .
    4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.vx = 50
mySprite.setBounceOnWall(true)
//@highlight
mySprite.y = randint(10, 110)
```

## 6. Try It

**Check the Game Window**  

Watch your friend swim!



## 7. Add More

**This is awesome...**but it's looking a little lonely in that aquarium. Let's give your sea critter a few friends!

---

- :redo:  In ``||loops:Loops||``, find the  
``||loops:repeat [4] times||``  
loop container and snap it into the **top** of the  
``||loops:on start||`` container.

- :mouse pointer:  Grab the first block of code beneath the new loop and use it to drag the whole chunk of code up into the empty **repeat** container.

```blocks
//@highlight
for (let index = 0; index < 4; index++) {
    let mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 4 4
        . . . . . . 4 4 4 4 4 4 1 f 4 4
        . . . . 4 4 4 4 4 4 4 4 1 1 4 4
        4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . .
        . 4 . . . . . . 4 4 4 4 . . . .
        4 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
    mySprite.vx = 50
    mySprite.setBounceOnWall(true)
    mySprite.y = randint(10, 110)
}
```

## 8. What's Up? @showdialog

**🌟 Great work 🌟**

Those fish look as happy as clams.

Now it's feeding time, so let's
get over to — **OH NO! What's this?**


## 9. WooWoo @showdialog

![A rotating red siren](/static/skillmap/zoo/siren.gif)

**An alarm?**

What's going on? Hold on, we're getting a report from the penguin department — the
penguins did *what*?

## Finale
**You better click "Done" and get over there!**  
🚨 🚨 




```customts
tiles.setTilemap(tilemap`level3`)
effects.bubbles.startScreenEffect()
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"small_tilemap_editor\"><field name=\"tilemap\">tilemap`level3`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level3\"}}</data><next><block type=\"particlesStartScreenAnimation\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><field name=\"effect\">effects.bubbles</field></block></next></block></statement></block><block type=\"tilemap_editor\" disabled=\"true\" x=\"250\" y=\"630\"><field name=\"tilemap\">tilemap`level4`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level4\"}}</data></block></xml>",
  "main.ts": "tiles.setTilemap(tilemap`level3`)\neffects.bubbles.startScreenEffect()\n",
  "pxt.json": "{\n    \"name\": \"zoo-exhibit\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.36\",\n        \"tag\": \"v1.3.36\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/53389e906336460d06f337a21664ec615586f762\",\n        \"target\": \"1.3.36\",\n        \"pxt\": \"6.8.26\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "test.ts": "namespace tiles {\n    //% blockId=small_tilemap_editor block=\"set 8x8 tilemap to $tilemap\"\n    //% weight=200 blockGap=8\n    //% tilemap.fieldEditor=\"tilemap\"\n    //% tilemap.fieldOptions.decompileArgumentAsString=\"true\"\n    //% tilemap.fieldOptions.filter=\"tile\"\n    //% tilemap.fieldOptions.taggedTemplate=\"tilemap\"\n    //% tilemap.fieldOptions.tileWidth=8\n    //% blockNamespace=\"scene\" group=\"Tiles\" duplicateShadowOnDrag\n    //% help=tiles/set-tile-map\n    export function setSmallTilemap(tilemap: TileMapData) {\n        scene.setTileMapLevel(tilemap);\n    }\n}",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAADd3d3dfd3d3d3X3Xdt133Xd3Z9dmdnfXZmZmZmZmZmZmZ2h2ZmdodmZmdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmdmhmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZndoZmZmZmZmZmZmZmdmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile8\"\n    },\n    \"tile8\": {\n        \"data\": \"hwQQABAAAADd3d19Z2ZmZt3X3WdmZmZmd3Z9ZmZmZmZmZmZmZmZmZmZ2h2ZmdodmZmdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmdmhmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZndoZmZmZmZmZmZmZmdmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZndoZmZ3aGZ2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaHZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ2h2ZmZmZmZmZmdmZmZtdnd2fXZ3Zn3Xfdfd19133d3d3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile0\"\n    },\n    \"tile9\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZndoZmZ3aGZ2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaHZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ2h2ZmZmZmZmZmZmZmZtdnd2ZmZmZm3XfdZ2ZmZmbd3d13ZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAADd3d3dZ2ZmZt3d3X1mZmZm3d3b3Xdmdmgd0d3dbWdmZh3R3d1nZmZm3d3dfWZmZmbd3d3dZ2ZmZt3d3d1tdmZm3d3d3WdmZmbd3bt9ZmZmZt3du91nZmZm3d3d3W1mZmbd3d3dfWZmdr3d3d1nZmZm3d3d3X1mZmbd3d3dfWZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile10\"\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile\"\n    },\n    \"transparency8\": {\n        \"data\": \"hwQIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile6\": {\n        \"data\": \"hwQIAAgAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAAAMLO7y8zMAAAz3d0zM7sMMNPdPT3Du8yw3d09M8O7y9vd3T07w7vL293d3TM9vMw73d3TPTPDzDvd3d29083MM93dPT3TvczT3R3dMzO7y9Pd3T09w7vL293dPTPDu8uw3d09O8O7zDDT3d0zPbzMADPd0z0zwwwAMLu7y8zMAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile7\"\n    },\n    \"tile11\": {\n        \"data\": \"hwQIAAgAAADd3b3T3T090x3dMzPdPT2z3T0zs909O7Pd3TM93dM9Mw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile0\"\n    },\n    \"tile12\": {\n        \"data\": \"hwQIAAgAAADb3d09293d3Tvd3dM73d3dM93dPdPdHd3T3d3d293d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile1\"\n    },\n    \"level2\": {\n        \"id\": \"level2\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\"\n        ],\n        \"displayName\": \"level2\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDA2MDQwNDA0MDQwNDA0MDQwNDA2MDIwMTAxMDEwMTAxMDEwMTAxMDUwMjAxMDEwMTAxMDEwMTAxMDEwNTAyMDEwMTAxMDEwMTAxMDEwMTA1MDIwMTAxMDEwMTAxMDEwMTAxMDUwMjAxMDEwMTAxMDEwMTAxMDEwNTA5MDMwMzAzMDMwMzAzMDMwMzA4MDYwNzA3MDcwNzA3MDcwNzA3MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tilePath5\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\",\n            \"myTiles.tile5\",\n            \"sprites.castle.tileDarkGrass1\",\n            \"myTiles.tile1\",\n            \"myTiles.tile8\",\n            \"myTiles.tile9\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"level4\": {\n        \"id\": \"level4\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile4\"\n        ],\n        \"displayName\": \"level4\"\n    },\n    \"level3\": {\n        \"id\": \"level3\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MDgxNDAwMGYwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency8\",\n            \"myTiles.tile6\",\n            \"myTiles.tile11\",\n            \"myTiles.tile12\"\n        ],\n        \"displayName\": \"level3\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile9 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile11 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile12 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level2\":\n            case \"level2\":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a0008000604040404040404040602010101010101010105020101010101010101050201010101010101010502010101010101010105020101010101010101050903030303030303030806070707070707070706`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.castle.tileDarkGrass1,myTiles.tile1,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);\n            case \"level4\":\n            case \"level4\":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`, [myTiles.transparency16,myTiles.tile4], TileScale.Sixteen);\n            case \"level3\":\n            case \"level3\":return tiles.createTilemap(hex`14000f00010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030303030303030303030303030303030202020202020202020202020202020202020202`, img`\n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . . . . . \n`, [myTiles.transparency8,myTiles.tile6,myTiles.tile11,myTiles.tile12], TileScale.Eight);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"tile8\":\n            case \"tile5\":return tile5;\n            case \"tile8\":return tile8;\n            case \"tile0\":\n            case \"tile2\":return tile2;\n            case \"tile9\":return tile9;\n            case \"tile10\":\n            case \"tile3\":return tile3;\n            case \"tile\":\n            case \"tile1\":return tile1;\n            case \"transparency8\":return transparency8;\n            case \"myTile\":\n            case \"tile6\":return tile6;\n            case \"tile7\":\n            case \"tile4\":return tile4;\n            case \"myTile0\":\n            case \"tile11\":return tile11;\n            case \"myTile1\":\n            case \"tile12\":return tile12;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
