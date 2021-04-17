### @flyoutOnly true

# Quail Hatching

## Step 1

It's quail hatching season! The quail are laying eggs left 
and right; let's catch them and put them back into the 
quail coop. 

First, check out the code in the workspace. We create a 
quail-catching glove and move it with the buttons. But right 
now it doesn't do anything to catch the quail.

## Step 2

Let's catch some birds! 

Drag an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container into the workspace. Click on the **second** ``||sprites:Player||`` dropdown and 
change it to ``||sprites:Quail||``.

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quail, function (sprite, otherSprite) {
})
```

## Step 3
When you grab the quail, we want it to start following you. 

Now drag a ``||sprites:set [myEnemy] follow [mySprite] ⊕||`` block into 
the **overlaps** container. Then click on the ``||variables:otherSprite||`` 
variable from the top of the **overlaps** container and drag it down to replace the 
``||variables:myEnemy||`` argument.

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
let mySprite: Sprite = null;
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quail, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
```

## Step 5
Finally, we need to put the quail back into the coop.

This time, go into the ``||scene:Scene||`` category and drag out a 
``||scene:on [sprite] of kind [Player] overlaps [ ] at [location]||`` container.
Change **Player** to **Quail**, and change the empty tile to the **coop** tile.

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Quail, assets.tile`myTile`, function (sprite, location) {

})
```


## Step 6
Next, grab a ``||sprites:destroy [mySprite] ⊕||`` block and put it in the 
overlaps container. 

Click on the ``||variables:sprite||`` variable from the top of the 
**overlaps** container and drag it down to replace the 
``||variables:mySprite||`` argument.

Drag some quail over to the coop and see what happens!

```blocks
namespace SpriteKind {
    export const Quail = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Quail, assets.tile`myTile`, function (sprite, location) {
    sprite.destroy()
})
```

## Step 7
Almost done--now you just have to deal with the pesky leftover quail eggs.

Right-click on your ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Quail]||`` 
container and select **Duplicate**. Then change the second 
argument from **Quail** to **Egg**.

Use the simulator to see how fast you can clear out the quail!

```blocks
namespace SpriteKind {
    export const Egg = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Egg, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
})
```

```template
let mySprite = sprites.create(img`
. . . . . 8 8 . 8 6 . 8 6 . . . 
. . . . 8 6 6 8 6 7 8 6 7 6 . . 
. . . . 8 7 7 8 6 6 8 6 7 6 . . 
. . . . 8 6 6 8 6 6 8 6 6 8 f . 
. . . . 8 7 7 f 7 7 f 7 7 f 7 6 
. . . . f 7 7 f 7 7 f 7 7 f 7 6 
. . 8 8 f 6 6 f 6 6 f 6 6 f 7 6 
. 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8 
. 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8 
. f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
. f 6 6 6 6 6 6 6 6 6 6 6 6 7 f 
. . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
. . . f 7 7 7 7 7 7 7 7 7 7 f . 
. . . f 8 7 7 7 7 7 7 7 7 6 f . 
. . . . f 8 6 6 6 6 6 6 6 6 8 . 
. . . . . f f f f 8 8 8 8 8 . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"_IBKL^~yT2$W1U3D6v*s\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\";Xcb7$zV,_oi)g;tJQUQ\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"TNqB.-5qY@-1s=+VW{di\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"4/GGbI3A]We^*Uu4WtMK\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"#m652-$Asb--@{r,wN,t\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"VhqsXNXdC!%Oo*#$v7G2\">Quail</variable><variable type=\"KIND_SpriteKind\" id=\"F!}fL6;/Lo_ov,p,H@1,\">Egg</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Quail = SpriteKind.create()\n    export const Egg = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level1`)\n",
  "pxt.json": "{\n    \"name\": \"Quail Hatching\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.4.28\",\n        \"tag\": \"v1.4.28\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/9569656def042c35d28e981045e67afaa1feed7c\",\n        \"target\": \"1.4.28\",\n        \"pxt\": \"6.12.9\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAC3zMzMzMz//6u7u6vMu7vLvLu7u/qZud+8u7u7+pm537y7u7v6mbnfvLu7u/qZud+8u7u7+pm537y7u7v6mbnfvLu7u/qZsd+8u7u7+hm537y7u7v6kbnfvLu7u/qZsd+8u7u7+hmx37y7u7v6Ebnfq7u7q8y7u8u3zMzMzMz//w==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwYTAwMDgwMDAxMDIwMjAyMGEwMjAyMDIwMjAzMDcwOTA5MDkwOTA5MDkwOTA5MDgwNzA5MDkwOTA5MDkwOTA5MDkwODA3MDkwOTA5MDkwOTA5MDkwOTA4MDcwOTA5MDkwOTA5MDkwOTA5MDgwNzA5MDkwOTA5MDkwOTA5MDkwODA3MDkwOTA5MDkwOTA5MDkwOTA4MDUwNjA2MDYwNjA2MDYwNjA2MDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tilePath1\",\n            \"sprites.castle.tilePath2\",\n            \"sprites.castle.tilePath3\",\n            \"sprites.castle.tilePath9\",\n            \"sprites.castle.tilePath7\",\n            \"sprites.castle.tilePath8\",\n            \"sprites.castle.tilePath4\",\n            \"sprites.castle.tilePath6\",\n            \"sprites.castle.tilePath5\",\n            \"myTiles.tile1\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`0a000800010202020a020202020307090909090909090908070909090909090909080709090909090909090807090909090909090908070909090909090909080709090909090909090805060606060606060604`, img`\n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n. . . . . . . . . . \n`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"myTile\":\n            case \"tile1\":return tile1;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

```customts
namespace SpriteKind {
    //% isKind
    export const Quail = SpriteKind.create()
    //% isKind
    export const Egg = SpriteKind.create()
}
tiles.setTilemap(tilemap`level1`)
sprites.onDestroyed(SpriteKind.Egg, function (sprite) {
    quail = sprites.create(img`
        f f . . . . . . . . . . 
        . . f . . . . . . . . . 
        . c c c c . . . . . . . 
        . c 1 c c b . . . . . . 
        f c c c b d b . . . . . 
        . . b b b d d b . . . . 
        . . b b b d b d b . . . 
        . . b b b b b d d b b b 
        . . b b b b b b b b b b 
        . . . . b b b b b . . . 
        . . . . . 4 . 4 . . . . 
        . . . . . 4 . . . . . . 
        `, SpriteKind.Quail)
    quail.setPosition(sprite.x, sprite.y)
    quail.setVelocity(randint(80, 120), randint(80, 120))
    quail.setBounceOnWall(true)
    quail.z = 10
})

let quail_egg: Sprite = null
let quail: Sprite = null
for (let index = 0; index < randint(3, 5); index++) {
    quail = sprites.create(img`
        f f . . . . . . . . . . 
        . . f . . . . . . . . . 
        . c c c c . . . . . . . 
        . c 1 c c b . . . . . . 
        f c c c b d b . . . . . 
        . . b b b d d b . . . . 
        . . b b b d b d b . . . 
        . . b b b b b d d b b b 
        . . b b b b b b b b b b 
        . . . . b b b b b . . . 
        . . . . . 4 . 4 . . . . 
        . . . . . 4 . . . . . . 
        `, SpriteKind.Quail)
    quail.setVelocity(randint(-100, 100), randint(-100, 100))
    quail.setPosition(randint(10, 150), randint(10, 110))
    quail.setBounceOnWall(true)
    quail.z = 10
}
game.onUpdateInterval(2000, function () {
    if (sprites.allOfKind(SpriteKind.Quail).length < 80) {
        for (let value of sprites.allOfKind(SpriteKind.Quail)) {
            let following = game.currentScene().followingSprites;
            if (!following || !following.some(el => el.self == value)) {
                quail_egg = sprites.create(img`
                    . . . c c . . . 
                    . . c 1 1 c . . 
                    . c b 1 1 b c . 
                    c b 1 1 1 b b c 
                    c 1 1 1 1 1 1 c 
                    c 1 1 b 1 1 1 c 
                    . c 1 1 1 b c . 
                    . . c c c c . . 
                    `, SpriteKind.Egg)
                quail_egg.setPosition(value.x, value.y)
                quail_egg.lifespan = randint(2000, 3000)
            }
        }
    }
})
game.onUpdate(function() {
    if (sprites.allOfKind(SpriteKind.Quail).length == 0 && sprites.allOfKind(SpriteKind.Egg).length == 0) {
        game.over(true)
    }
})
```