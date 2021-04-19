### @flyoutOnly true

# Feed the Panda

## Step 1

It's feeding time! 

Everyone's favorite panda is hungry, so let's 
write some code to feed them some tasty bamboo. Check out the code 
in your workspace first. Right now, we create a **panda** sprite.

## Step 2

First, you'll need to grab some bamboo.

Drag an ``||controller:on [A] button pressed ||`` container into the workspace
and snap a ``||variables:set [mySprite] to sprite [ ] of kind [Player]||`` 
block inside it. Make sure to change the kind to ``||sprites:Food||``, then click on 
the grey square and draw a delicious piece of bamboo.

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

## Step 3

Now, throw it into the panda enclosure! 

Grab a ``||sprites:set [mySprite] position to x [0] y [0]||``
block and place it in the ``||controller:on [A] button pressed ||`` container.

Then put a ``||math:pick random [0] to [10]||`` value block and 
use it to replace the **0**s next to **x** and **y**. Try out 
some numbers to see how this places your bamboo **randomly** on the screen.

Click on the simulator to the left and use the spacebar or the 
**A** button to drop some bamboo in!

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
    mySprite.setPosition(randint(10, 150), randint(10, 110))
})
```

## Step 4

Aw, the panda isn't very good at finding the food... let's help them out! 

Drag a 
``||sprites:set [myEnemy] follow [mySprite] ⊕||`` block into the bottom
of the ``||controller:on A button pressed||`` container. Change
the first variable to ``||variables:panda||`` and try your code out 
in the simulator.

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
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    panda.follow(mySprite)
})
```

## Step 5

Munch time! We're going to help the panda eat by running some code when the 
panda **overlaps** the bamboo. 

Drag an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container into the workspace. Click on the first ``||sprites:Player||`` dropdown menu 
and select **Animal**. Then click the **second** dropdown and select **Food**.

```blocks
namespace SpriteKind {
    export const Animal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Animal, SpriteKind.Food, function (sprite, otherSprite) {
})
```

## Step 6

Next, grab a ``||sprites:destroy [mySprite] ⊕||`` block and put it in the 
overlaps container. You can press the plus icon on the block to add an effect. 
Try out **fire** or **dissolve**.

Way to go! That panda's getting a full meal!

```blocks
namespace SpriteKind {
    export const Animal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Animal, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
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
`, SpriteKind.Animal)
```

```customts
namespace SpriteKind {
    //% isKind
    export const Animal = SpriteKind.create()
}
tiles.setTilemap(tilemap`level1`)

sprites.onCreated(SpriteKind.Animal, function (sprite) {
    sprite.setVelocity(70, 50)
    sprite.setBounceOnWall(true)
})
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
