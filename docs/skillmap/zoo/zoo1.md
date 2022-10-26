# First Day


## Welcome @showdialog

![A banner saying "ZOO" with a giraffe looking up at it](static/skillmap/zoo/zoo-welcome.png)

Hello there rookie! First day on the job, huh?

No worries,
we'll show you the zookeeper ropes. First things first,
click that green **OK** button to see the **Keeper's Hut**.


## 2. Make a Sprite

**🏠 Home sweet home 🏠**   
Let's get you set up in your new place!

---

- :paper plane:  From the ``||sprites:Sprites||`` category, drag the  
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``   
block into the ``||loops:on start||`` container.

- :paint brush:  Click the grey box to open the **image editor** and draw yourself in your best zookeeper outfit!

- :mouse pointer:  Click **Next** when you're ready to see the next step.

```blocks
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f .
    f f f f f c c c c f f f f f
    f f f f b c c c c b f f f f
    f f f c 3 c c c c 3 c f f f
    . f 3 3 c c c c c c 3 3 f .
    . f c c c c 4 4 c c c c f .
    . f f c c 4 4 4 4 c c f f .
    . f f f b f 4 4 f b f f f .
    . f f 4 1 f d d f 1 4 f f .
    . . f f d d d d d d f f . .
    . . e f e 4 4 4 4 e f e . .
    . e 4 f b 3 3 3 3 b f 4 e .
    . 4 d f 3 3 3 3 3 3 c d 4 .
    . 4 4 f 6 6 6 6 6 6 f 4 4 .
    . . . . f f f f f f . . . .
    . . . . f f . . f f . . . .
    `, SpriteKind.Player)
```

## 3. Move Around

**🕰 Time to get move 🕰**  

---

- :game:  From the ``||controller:Controller||`` category, drag  
``||controller:move [mySprite] with buttons ⊕||``  
into the bottom of the ``||loops:on start||`` container.

---

This will allow you to move your sprite around the screen.


```blocks
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f .
    f f f f f c c c c f f f f f
    f f f f b c c c c b f f f f
    f f f c 3 c c c c 3 c f f f
    . f 3 3 c c c c c c 3 3 f .
    . f c c c c 4 4 c c c c f .
    . f f c c 4 4 4 4 c c f f .
    . f f f b f 4 4 f b f f f .
    . f f 4 1 f d d f 1 4 f f .
    . . f f d d d d d d f f . .
    . . e f e 4 4 4 4 e f e . .
    . e 4 f b 3 3 3 3 b f 4 e .
    . 4 d f 3 3 3 3 3 3 c d 4 .
    . 4 4 f 6 6 6 6 6 6 f 4 4 .
    . . . . f f f f f f . . . .
    . . . . f f . . f f . . . .
    `, SpriteKind.Player)
    //@highlight
controller.moveSprite(mySprite)
```

## 4. Try It

**Check the Game Window**  

Try moving around the game screen!  Your zookeeper will move with the joypad or the arrow keys on your keyboard.



## 5. Look About

**Take a look around the room**  
👀 

---

- :tree:  From the ``||scene:Scene||`` category, drag  
``||scene:camera follow sprite [mySprite]||``  
into the bottom of the ``||loops:on start||`` container and use the arrow keys to
check out the hut!

```blocks
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f .
    f f f f f c c c c f f f f f
    f f f f b c c c c b f f f f
    f f f c 3 c c c c 3 c f f f
    . f 3 3 c c c c c c 3 3 f .
    . f c c c c 4 4 c c c c f .
    . f f c c 4 4 4 4 c c f f .
    . f f f b f 4 4 f b f f f .
    . f f 4 1 f d d f 1 4 f f .
    . . f f d d d d d d f f . .
    . . e f e 4 4 4 4 e f e . .
    . e 4 f b 3 3 3 3 b f 4 e .
    . 4 d f 3 3 3 3 3 3 c d 4 .
    . 4 4 f 6 6 6 6 6 6 f 4 4 .
    . . . . f f f f f f . . . .
    . . . . f f . . f f . . . .
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
//@highlight
scene.cameraFollowSprite(mySprite)
```

## Finale

**🐯 Fantastic! 🐯**

---

You're all ready for your first task.

Click on the **Done** button to head out to the **Zoo**!




```customts
tiles.setTilemap(tilemap`level2`)
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"image\"\n    },\n    \"image2\": \"hwQOABAAAADw/wAAAAAAAP////8P4EQA///D//9OTQD/z8P89P//APA7zLzRvmP/z8zM9N80Y//PzExE3TRjD8/MTETdNGMPz8zM9N80Y//wO8y80b5j///Pw/z0//wA///D//9OTQD/////D+BEAPD/AAAAAAAA\",\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"image\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image2\":return img`\n. f f f . f f f f . f f f . \nf f f f f c c c c f f f f f \nf f f f b c c c c b f f f f \nf f f c 3 c c c c 3 c f f f \n. f 3 3 c c c c c c 3 3 f . \n. f c c c c 4 4 c c c c f . \n. f f c c 4 4 4 4 c c f f . \n. f f f b f 4 4 f b f f f . \n. f f 4 1 f d d f 1 4 f f . \n. . f f d d d d d d f f . . \n. . e f e 4 4 4 4 e f e . . \n. e 4 f b 3 3 3 3 b f 4 e . \n. 4 d f 3 3 3 3 3 3 c d 4 . \n. 4 4 f 6 6 6 6 6 6 f 4 4 . \n. . . . f f f f f f . . . . \n. . . . f f . . f f . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"}RH%AHf.=#:HX-=+X^~(\">mySprite</variable><variable id=\"jXjCvY*S;:Y(k7yn]4eQ\">myHat</variable><variable type=\"KIND_SpriteKind\" id=\"L=$:DJSDk/8w?sX/Igd;\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"`hI}Ij0#qRr1jDK;j.Lp\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"ryyq4/$Nx_5{aB}eMDW!\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"gaCtK-|0`}1)NJtMKZb0\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"=_XY=/`0t4F2Nl(%_BJ}\">Hat</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"tilemap_editor\"><field name=\"tilemap\">tilemap`level2`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level2\"}}</data><next><block type=\"variables_set\"><field name=\"VAR\" id=\"}RH%AHf.=#:HX-=+X^~(\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n. f f f . f f f f . f f f . \nf f f f f c c c c f f f f f \nf f f f b c c c c b f f f f \nf f f c 3 c c c c 3 c f f f \n. f 3 3 c c c c c c 3 3 f . \n. f c c c c 4 4 c c c c f . \n. f f c c 4 4 4 4 c c f f . \n. f f f b f 4 4 f b f f f . \n. f f 4 1 f d d f 1 4 f f . \n. . f f d d d d d d f f . . \n. . e f e 4 4 4 4 e f e . . \n. e 4 f b 3 3 3 3 b f 4 e . \n. 4 d f 3 3 3 3 3 3 c d 4 . \n. 4 4 f 6 6 6 6 6 6 f 4 4 . \n. . . . f f f f f f . . . . \n. . . . f f . . f f . . . . \n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image2\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"game_control_sprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"}RH%AHf.=#:HX-=+X^~(\">mySprite</field></block></value><next><block type=\"camerafollow\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"}RH%AHf.=#:HX-=+X^~(\">mySprite</field></block></value></block></next></block></next></block></next></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Hat = SpriteKind.create()\n}\ntiles.setTilemap(tilemap`level2`)\nlet mySprite = sprites.create(img`\n    . f f f . f f f f . f f f . \n    f f f f f c c c c f f f f f \n    f f f f b c c c c b f f f f \n    f f f c 3 c c c c 3 c f f f \n    . f 3 3 c c c c c c 3 3 f . \n    . f c c c c 4 4 c c c c f . \n    . f f c c 4 4 4 4 c c f f . \n    . f f f b f 4 4 f b f f f . \n    . f f 4 1 f d d f 1 4 f f . \n    . . f f d d d d d d f f . . \n    . . e f e 4 4 4 4 e f e . . \n    . e 4 f b 3 3 3 3 b f 4 e . \n    . 4 d f 3 3 3 3 3 3 c d 4 . \n    . 4 4 f 6 6 6 6 6 6 f 4 4 . \n    . . . . f f f f f f . . . . \n    . . . . f f . . f f . . . . \n    `, SpriteKind.Player)\ncontroller.moveSprite(mySprite)\nscene.cameraFollowSprite(mySprite)\n",
  "pxt.json": "{\n    \"name\": \"zookeeper-hut\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.36\",\n        \"tag\": \"v1.3.36\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/53389e906336460d06f337a21664ec615586f762\",\n        \"target\": \"1.3.36\",\n        \"pxt\": \"6.8.26\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7y8u7u7u7u7vLy7u7u7u7u8vLu7u7u7u7y8u7u7u7u7vLy7u7u7u7u8vLu7u7u7u7y8u7u7u7u7vLy7u7u7u7u8vLu7u7u7u7y8u7u7u7u7vLy7u7u7u7u8vLu7u7u7u7y8u7u7u7u7vLy7u7u7u7u8vLu7u7u7u7y8uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile0\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAADu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzszMzMzu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAADu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7OzMzMzO7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"floor\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQQABAAAADOzMzMzMzMzLzd3d3d3d3d3N3d3d3d3d3c3d3d3d3d3dzd3d3d3d3d3N3d3d3d3d3c3d3d3d3d3dzd3d3d3d3d3N3d3d3d3d3c3d3d3d3d3bzd3d3d3d3dvLu7u7u7u7u8u93d3d3d3c7Mu7u7u7u77u7OzMzu7s7u7u7M7O7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"table1\"\n    },\n    \"tile7\": {\n        \"data\": \"hwQQABAAAADMzMzMzM/M/N3d3d3Lu7v73d3d3c3PzM/d3d3dzbvszt3d3d3Nu+zO3d3d3c277M7d3d3dzbvszt3d3d3Nu+zO3d3d3c277M7d3d3dzbvszt3d3d3Lu+zOu7u7u8vPzM/d3d27y7u7+7u7u8zMz8z8zMzszu7u7s7OzO7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"table2\"\n    },\n    \"tile8\": {\n        \"data\": \"hwQQABAAAADu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzszMzMzu7u7OvLu7u+7u7s673d3d7u7uztvbvbvu7u7O29vdu+7u7s7bu9277u7uztu7u7vu7u7O27u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"rug1\"\n    },\n    \"tile9\": {\n        \"data\": \"hwQQABAAAADu7u7O27u7u+7u7s7bu7u77u7uztu73bvu7u7O29vdu+7u7s7b27277u7uztu7u7vu7u7Ou93d3e7u7s68u7u77u7uzszMzMzu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"rug2\"\n    },\n    \"tile10\": {\n        \"data\": \"hwQQABAAAAC7u9vL7+7uzru728vv7u7Ou93by+/u7s673d3L7+7uzrvb3cvv7u7Ou7vby+/u7s7d3b3L7+7uzru7u/zu7u7OzMzMz8zMzMzu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile11\": {\n        \"data\": \"hwQQABAAAADu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7OzMzMz+7u7s67u7v87u7uzt3dvcvv7u7Ou9vdy+/u7s673d3L7+7uzrvd28vv7u7Ou7vby+/u7s67u9vL7+7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile12\": {\n        \"data\": \"hwQQABAAAAC7u9vL7+7uzru728vv7u7Ou93by+/u7s673d3L7+7uzrvb3cvv7u7Ou7vby+/u7s67u9vL7+7uzru728vv7u7Ou7vby8/MzMy7u9vL7+7uzru728vv7u7Ou9vdy+/u7s673d3L7+7uzrvd28vv7u7Ou7vby+/u7s67u9vL7+7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile13\": {\n        \"data\": \"hwQQABAAAADu7u7O27u7u+7u7s7bu7u77u7uztu73bvu7u7O29vdu+7u7s7b27277u7uztu7u7vu7u7O27u7u+7u7s7bvbu77u7uztu9u7vu7u7O27u7u+7u7s7bu7u77u7uztvbvbvu7u7O29vdu+7u7s7bu9277u7uztu7u7vu7u7O27u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile14\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u927u7u73bu73b27u9vdu7vbvbu72727u7u72727u7vd3d3d3d3d3bu7u7u7u7u7zMzMzMzMzMzu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile15\": {\n        \"data\": \"hwQQABAAAADu7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7O7u7uzu7u7s7u7u7OzMzMzMzMzMy7u7u7u7u7u93d3d3d3d3du9u9u7vbvbu73b27u9vdu7vdu7u7u927u7u7u7u7u7u7u7u7u7u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"rugside\"\n    },\n    \"tile16\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u927u7u73bu73b27u9vdu7vbvbu72727u7u72727u7u7u7vd3bu7u7u7273bvbu7u7vbvdu9u7u7u7vd3bu7u7u7u9u9u7u7u9u9u7vbvbu73b27u9vdu7vdu7u7u927u7u7u7u7u7u7u7u7u7u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile18\"\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAADLzMzMzMz/v7zd3d29u7vL3N3d3bvNzLzc3d3du727vNzd3d27vbu83N3d3bu9u7zc3d3du828vNzd3d27vc283N3d3bu9zbzc3d3du828vNzd3d27vbu83N3d3bu9u7zc3d3du727vNzd3d27zcy8vN3d3b27u8vLzMzMzMz/vw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile17\"\n    },\n    \"tile17\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzN3d3d3d3cvLmZmZmZmZzcuZmZmZmZnNy5mZmZmZmc3LmZmZmZmZzcuZmZmZmZnNy5mZmZmZmc3LmZmZmZmZzcuZmZmZmZnNy5mZmZmZmcvLzMzMzMzMzMuZmZmZmZnLy5mZmZmZmc3L3d3d3d3dy8vMzMzMzMzMzA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile19\"\n    },\n    \"tile19\": {\n        \"data\": \"hwQQABAAAAAAAGZgZgwAAAAAZsx2xmwAAGB2bHfMZgYAYHVsd1x3ZgDMdWZnVnVmwMZVZmx3ZcZmZ3ZnzGZmDHZVZ8bMfFdmdld1xsx8V2dmZ1ZlzGZmZsDGVWdsd2UMAMx1ZmdWdcYAYHdsd1x3ZgBgdmx3zGYGAAB2xnbGbAAAAGZgZgwAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile20\"\n    },\n    \"tile18\": {\n        \"data\": \"hwQQABAAAADuiIiO7u7uzo5nZ4jm7u7OjlaHaGbu7s6Odod1Z8bMz452ZlVnxrz8jnZ2V2bIvPuOZmhmhsy7++6Idndlxrv77oh3d3XGu/uOdmhmZsa7+452dleGvLv7jnZmVWfIu/yOdod1Z8bMz45Wh2hm7u7OjmdniObu7s7uiIiO7u7uzg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile21\": {\n        \"data\": \"hwQQABAAAADMzERUVURVxd3NTl5FRFTFmclEVEVEVMWZye5URURUxZnJRFRVRFTFmclEVFVVVcWZyURUVVVVxJlMRFRVREXEmUxEVFVERcSZ7O5VVVVFxJlMREVEVUXMzOzkRURVVcyZTFRFRFXFzZlMVFVVVcXN3d3d3d3dy8vMzMzMzMzMzA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile22\"\n    },\n    \"tile27\": {\n        \"data\": \"hwQQABAAAAC7y0RUVVVVxbvLRFRVRUTFu7vuXlVERMS7y0RUVURExLvL7lRVRETEu8tEVFVERMS7y05UVUVExbvLRFRVVVXFu8tEVERUVcW7y0RURFRVxbvLRFRFVFXFu8tOXlVVRMW7y0RUVUVExbu77l5VRUTFu8tEVFVVVcW7y0RUVVVVxQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"tile28\": {\n        \"data\": \"hwQQABAAAAC7u7u7u1xVvLu7u7vLVVXFu7u7u8tVVcW7u7u7XFVVxbu7u8tUVUTFu7u7y1VVRMXLvLtMVcxVxUzEzETF8VzFTFTFRMURTMXLVVVVVcxExbvMVVVVRETFu8y8W1VERMXLVVVVVUVUxcs1M1NEVVXFu1xVVURVVcW7y8xcVVVVxQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile0\"\n    },\n    \"tile23\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u8vMuw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"tile24\"\n    },\n    \"level4\": {\n        \"id\": \"level4\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\",\n            \"myTiles.tile5\",\n            \"myTiles.tile2\",\n            \"myTiles.tile1\",\n            \"myTiles.tile6\",\n            \"myTiles.tile7\"\n        ],\n        \"displayName\": \"level4\"\n    },\n    \"level2\": {\n        \"id\": \"level2\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAwZjAwMDkwMDA0MTEwNDA0MDQxMTA0MDQwNDExMTYxNTE0MTMwNDAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAxMDIwMTAyMDEwMjAxMDIwZjA1MGUxMjAxMDIwMjAxMDIwODBkMGQwOTAxMDIwYjBjMGEwMjAxMDIwMjA2MDIwZjEwMTAwZTAxMDIwMTAyMDEwMjAxMDIwMjA3MDIwZjEwMTAwZTAxMDIwMTAyMDEwMjAxMDIwMjAxMDIwYjBjMGMwYTAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTEyMDIwMTAyMDEwMjAxMDIwMTAyMDExMjAxMDIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\",\n            \"myTiles.tile5\",\n            \"myTiles.tile6\",\n            \"myTiles.tile7\",\n            \"myTiles.tile8\",\n            \"myTiles.tile9\",\n            \"myTiles.tile10\",\n            \"myTiles.tile11\",\n            \"myTiles.tile12\",\n            \"myTiles.tile13\",\n            \"myTiles.tile14\",\n            \"myTiles.tile15\",\n            \"myTiles.tile16\",\n            \"myTiles.tile17\",\n            \"myTiles.tile18\",\n            \"myTiles.tile21\",\n            \"myTiles.tile27\",\n            \"myTiles.tile28\",\n            \"myTiles.tile23\"\n        ],\n        \"displayName\": \"level2\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile7 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile9 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile10 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile11 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile12 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile13 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile14 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile15 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile17 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile19 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile18 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile21 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile27 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile28 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile23 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level4\":\n            case \"level4\":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile2,myTiles.tile1,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);\n            case \"level2\":\n            case \"level2\":return tiles.createTilemap(hex`0f00090004110404041104040411161514130403030303030303030303030303030301020102010201020f050e120102020102080d0d0901020b0c0a0201020206020f10100e01020102010201020207020f10100e01020102010201020201020b0c0c0a010201020102010201010201020102010201020102010201120201020102010201020112010202`, img`\n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile21,myTiles.tile27,myTiles.tile28,myTiles.tile23], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"tile\":\n            case \"tile3\":return tile3;\n            case \"tile0\":\n            case \"tile4\":return tile4;\n            case \"tile2\":return tile2;\n            case \"floor\":\n            case \"tile1\":return tile1;\n            case \"table1\":\n            case \"tile6\":return tile6;\n            case \"table2\":\n            case \"tile7\":return tile7;\n            case \"rug1\":\n            case \"tile8\":return tile8;\n            case \"rug2\":\n            case \"tile9\":return tile9;\n            case \"tile10\":return tile10;\n            case \"tile11\":return tile11;\n            case \"tile12\":return tile12;\n            case \"tile13\":return tile13;\n            case \"tile14\":return tile14;\n            case \"rugside\":\n            case \"tile15\":return tile15;\n            case \"tile18\":\n            case \"tile16\":return tile16;\n            case \"tile17\":\n            case \"tile5\":return tile5;\n            case \"tile19\":\n            case \"tile17\":return tile17;\n            case \"tile20\":\n            case \"tile19\":return tile19;\n            case \"tile18\":return tile18;\n            case \"tile22\":\n            case \"tile21\":return tile21;\n            case \"myTile\":\n            case \"tile27\":return tile27;\n            case \"myTile0\":\n            case \"tile28\":return tile28;\n            case \"tile24\":\n            case \"tile23\":return tile23;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
