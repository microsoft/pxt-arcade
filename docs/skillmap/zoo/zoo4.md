# Feed the Panda

## Step 1  

**🎋 It's feeding time! 🎋**

Everyone's favorite panda is hungry, so let's 
write some code to feed it some tasty bamboo. 

---

► Take a look at the code in your workspace. 
It should look familiar. Can you remember what it does?


## Step 2

**First, you'll need to grab some bamboo.**

---

► From ``||controller:Controller||``, drag an ``||controller:on [A] button pressed ||`` container into the workspace.

► Snap a new ``||variables:set [mySprite] to sprite [ ] of kind [Player]||`` block inside it. 

► Make sure to change the kind to ``||sprites:Food||``, then click on 
the grey square and draw a delicious piece of bamboo in the **image editor**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . . 
        . . 7 . . . . . . 6 7 . . . . . 
        . . 7 7 . . . . . 6 6 . . . . . 
        . . 7 7 . . 6 . . 8 8 . . . . . 
        . . 7 7 . . 6 . . 6 7 7 . . . . 
        . . 6 7 6 . 6 . . 6 7 7 . . . . 
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 . 
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . . 
        . . 7 7 7 6 . 6 . 6 6 7 6 . . . 
        . . . 8 6 6 . 6 . 8 7 8 8 . . . 
        . . . 6 6 6 . 6 . 6 7 7 6 . . . 
        . . . 6 6 7 . . 6 . 7 7 . 7 . . 
        . . . 6 6 6 6 6 6 . 7 6 7 . . . 
        . . . . 8 8 8 . . . 6 6 . . . . 
        . . . . 6 7 6 . 7 7 6 6 . . . . 
        . . . . 6 6 6 . . 7 6 . . . . . 
        `, SpriteKind.Food)
})
```


## Step 3  @showdialog

**Press the Ⓐ button**

---

Look at your game screen to see what happens.


## Step 4

**Time to scatter the bamboo around the panda enclosure!**

---

► From ``||sprites:Sprites||``, get a ``||sprites:set [mySprite] position to x [0] y [0]||``
block and place it at the **end** of the ``||controller:on [A] button pressed ||`` container.

► From ``||math:Math||``, grab two ``||math:pick random [0] to [10]||`` value blocks and 
use them to replace the **x** and **y** values in the new **set position** block. 

► Try some different numbers to see how they affect the way the bamboo is **randomly** placed on the screen.


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . . 
        . . 7 . . . . . . 6 7 . . . . . 
        . . 7 7 . . . . . 6 6 . . . . . 
        . . 7 7 . . 6 . . 8 8 . . . . . 
        . . 7 7 . . 6 . . 6 7 7 . . . . 
        . . 6 7 6 . 6 . . 6 7 7 . . . . 
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 . 
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . . 
        . . 7 7 7 6 . 6 . 6 6 7 6 . . . 
        . . . 8 6 6 . 6 . 8 7 8 8 . . . 
        . . . 6 6 6 . 6 . 6 7 7 6 . . . 
        . . . 6 6 7 . . 6 . 7 7 . 7 . . 
        . . . 6 6 6 6 6 6 . 7 6 7 . . . 
        . . . . 8 8 8 . . . 6 6 . . . . 
        . . . . 6 7 6 . 7 7 6 6 . . . . 
        . . . . 6 6 6 . . 7 6 . . . . . 
        `, SpriteKind.Food)
        //@highlight
    mySprite.setPosition(randint(10, 150), randint(10, 110))
})
```


## Step 5 

**Press the Ⓐ button (or click the space bar)** to place food for the panda.


## Step 6

**Aw, the panda isn't very good at finding the food...let's help it out!** 

---

► Open ``||sprites:Sprites||`` and drag a
``||sprites:set [myEnemy] follow [mySprite]||`` block out into the **end**
of the ``||controller:on A button pressed||`` container. 

► Change the first variable value to ``||variables:panda||``, then try your code 
on the game screen.

```blocks
let panda:Sprite = null;
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite = sprites.create(img`
        . . . . . . . . . 6 7 . . . . . 
        . . 7 . . . . . . 6 7 . . . . . 
        . . 7 7 . . . . . 6 6 . . . . . 
        . . 7 7 . . 6 . . 8 8 . . . . . 
        . . 7 7 . . 6 . . 6 7 7 . . . . 
        . . 6 7 6 . 6 . . 6 7 7 . . . . 
        . . 6 6 7 . 6 . . 6 7 7 6 7 7 . 
        7 7 8 8 7 6 6 . . 6 7 7 7 7 . . 
        . . 7 7 7 6 . 6 . 6 6 7 6 . . . 
        . . . 8 6 6 . 6 . 8 7 8 8 . . . 
        . . . 6 6 6 . 6 . 6 7 7 6 . . . 
        . . . 6 6 7 . . 6 . 7 7 . 7 . . 
        . . . 6 6 6 6 6 6 . 7 6 7 . . . 
        . . . . 8 8 8 . . . 6 6 . . . . 
        . . . . 6 7 6 . 7 7 6 6 . . . . 
        . . . . 6 6 6 . . 7 6 . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(10, 150), randint(10, 110))
    //@highlight
    panda.follow(mySprite)
})
```

## Step 7

**😋 Munch time 😋**

We can help the panda find snacks by running code when the 
panda **overlaps** the bamboo. 

---

► From ``||sprites:Sprites||``, pull out an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container and drop it in the workspace. 

► Click on the second ``||sprites:Player||`` dropdown menu 
and select **Food**. 

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
})
```

## Step 8

► Next, grab a ``||sprites:destroy [mySprite] ⊕||`` block from ``||sprites:Sprites||``
and put it in the **on overlaps** container. 

► See the oblong value block in the header of the **on overlaps** container called 
``||variables:otherSprite||``? 
Grab it and drag it down to replace **mySprite** in the **destroy** block.

► Press the plus icon on the block to add an effect that will play when the 
panda starts munching. Both **spray** and **disintegrate** work well here!  



```blocks

}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    //@highlight
    otherSprite.destroy(effects.spray, 500)
})
```

## step 9

**Way to go!**

That panda's getting a full meal!

Give your game a try using the game screen, and when you're done, 
click **Finish** to continue your zoo journey.  




```customts
tiles.setTilemap(tilemap`level1`)
```

```template
let panda = sprites.create(img`
    . f f f . . . . f f f . . . . . 
    f c c c f f f f c c c f . . . . 
    f c a d 1 1 1 1 d a c f . . . . 
    f a d 1 1 1 1 1 1 d f . . . . . 
    . f c c c 1 1 c c c d f . . . . 
    . f c f c 1 1 c f c d f f f . . 
    . f c c 1 c c 1 c c f d c c f . 
    . f d 1 1 f f 1 1 d f 1 1 c c f 
    . . f d d d d d d a c 1 1 1 c f 
    . . f c 1 1 1 1 1 c c 1 1 1 c f 
    . . f c 1 1 1 1 1 c c 1 1 1 c f 
    . . f c f f f f f c c 1 1 c c f 
    . . f c f . . . f c f f f f c f 
    . . f f . . . . f f . . . . f f 
    `, SpriteKind.Player)
panda.setVelocity(randint(20, 50), randint(40, 60))
panda.setBounceOnWall(true)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"*(U`8Cz%UdX%QVrRLAj]\">Player</variable><variable type=\"KIND_SpriteKind\" id=\",p#pZ[t5Tx3AJuLMboP?\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"YMZp[xD?jgxk5yDV=q;C\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"M;=(qFqSV|s///LTH|kZ\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"s%O)x$i~/?,4ZPs%k;E5\">Animal</variable><variable id=\"|2r#YO`9Pls^yzC3lc4/\">panda</variable><variable id=\"A)F#HAC#}PGF8r].R!k@\">bamboo</variable><variable id=\"sd/oyN~_[Y/M*O1?~z[U\">mySprite</variable><variable id=\"lvyeJH`H_zT4C_`*RWL`\">myEnemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Animal = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level1`)\n",
  "pxt.json": "{\n    \"name\": \"Feed the Panda\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.49\",\n        \"tag\": \"v1.3.49\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/cc243b20c0547dd26f27296be900f62d5c04211b\",\n        \"target\": \"1.3.49\",\n        \"pxt\": \"6.8.37\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tileGrass1\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
