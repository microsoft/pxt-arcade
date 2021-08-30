# Save the Forest Level 5


## Welcome @showdialog

**Time to Level Up!**  

This activity will show you how to add a HUD.

![Add a head's up display](/static/skillmap/forest/forest1.gif "Let's take this to the next level!")



## Step 2 - Try It!

**🕹️ Test out your project so far 🕹️**

---

Can you remember which chunk of code creates each action?



## Finished

**🥳 Congratulations 🥳**
You did it!!  Can you follow the experience all the way to the end?

---

When you're done playing with your project, click **Finish** to return to the main page for your certificate and the option to customize your final project!





```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
arcade-premium-life=github:jwunderl/arcade-premium-life/
pxt-characterAnimations=github:microsoft/arcade-character-animations/
pxt-data=github:microsoft/arcade-sprite-data/
pxt-story=github:microsoft/arcade-storytelling/
arcade-sprite-util=github:jwunderl/arcade-sprite-util/

```


```template
namespace SpriteKind {
    export const Fire = SpriteKind.create()
    export const Burnt = SpriteKind.create()
}

sprites.set_strength_of_wind(5)
sprites.set_health_of_trees(6)
sprites.set_dryness_of_grass(4)

let mySprite: Sprite = null

tiles.setTilemap(tilemap`level1`)

mySprite = sprites.create(assets.image`firePlane`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

for (let index = 0; index < 4; index++) {
    newFire = sprites.create(assets.image`fire`, SpriteKind.Fire)
    tiles.placeOnRandomTile(newFire, assets.tile`trees`)
}

sprites.onCreated(SpriteKind.Fire, function (sprite) {
    sprites.set_flame_strength(sprite, 10)
    sprite.startEffect(effects.fire)
})

controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(mySprite, "difference")
})

```




```customts

let mySprite2 = sprites.create(assets.image`q1`, SpriteKind.Player)
mySprite2.setPosition(8, 8)

let spreadOptions: number[] = []

let windSpeed = 5
let tinder = 4
let dryGrass = 5
let spreadTimeBase = 2000
let hoseDirection = 270
let facing = 0
let changeRate = 7

forever(function () {
    spreadTimeBase = 4500 - (250 * windSpeed + 250 * dryGrass - 100 * tinder)
    mySprite2.setPosition(scene.cameraProperty(CameraProperty.X) - 70, scene.cameraProperty(CameraProperty.Y) - 50)
    mySprite2.z = 9000
})

sprites.onCreated(SpriteKind.Fire, function (sprite) {
    sprites.setDataNumber(sprite, "spreadTime", game.runtime() + randint(spreadTimeBase, spreadTimeBase + 1000))
})

namespace sprites {
    //% block="set strength of wind to $num"
    //% num.defl=4
    export function set_strength_of_wind (num: number) {
        windSpeed = num
    }

    //% block="set health of trees to $num"
    //% num.defl=6
    export function set_health_of_trees (num: number) {
        tinder = num
    }

    //% block="set dryness of grass to $num"
    //% num.defl=4
    export function set_dryness_of_grass (num: number) {
        dryGrass = num
    }

    //% block="set strength of $thisSprite to $num"
    //% num.defl=10
    export function set_flame_strength (thisSprite: Sprite, num: number) {
        sprites.setDataNumber(thisSprite, "life", num)
    }

    //% block="spray from $thisSprite=variables_get(mySprite) using $text"
    export function spray (thisSprite: Sprite, text: string) {
        if (controller.up.isPressed()) {
            if (controller.left.isPressed()) {
                facing = 225
            } else if (controller.right.isPressed()) {
                facing = 315
            } else if (controller.down.isPressed()) {
                
            } else {
                facing = 270
            }
        } else if (controller.left.isPressed()) {
            if (controller.right.isPressed()) {
                
            } else if (controller.down.isPressed()) {
                facing = 135
            } else {
                facing = 180
            }
        } else if (controller.right.isPressed()) {
            if (controller.down.isPressed()) {
                facing = 45
            } else {
                facing = 0
            }
        } else if (controller.down.isPressed()) {
            facing = 90
        }
  
        if (Math.abs(facing - hoseDirection) < 180) {
        if (facing < hoseDirection) {
            hoseDirection += 0 - changeRate
        } else {
            hoseDirection += changeRate
        }
        } else{
            if (facing < hoseDirection) {
                hoseDirection += changeRate
            } else {
                hoseDirection += 0 - changeRate
            }
            if (hoseDirection < 0) {
                hoseDirection += 360
            } else if (hoseDirection > 360) {
                hoseDirection += -360
            }
            hoseDirection = hoseDirection % 360
        }
        let waterProj = sprites.createProjectileFromSprite(assets.image`water`, thisSprite,  150 * Math.cos(spriteutils.degreesToRadians(hoseDirection)), 150 * Math.sin(spriteutils.degreesToRadians(hoseDirection)))

    }
    

}
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"a5zAhGKtmEx`ww9FE(zZ\": {\n        \"data\": \"hwQEAAQAAACQCQAAmZkAAJmZAACQCQAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"water\"\n    },\n    \"image1\": {\n        \"data\": \"hwQQABAAAACZmZmZmZmZmRkRERERERGRGRRBEREREZEZQRQRERERkRlBFBERERGRGRRBEREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZGZmZmZmZmZmQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"q1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQYABAAAAAAAPAPAAAAAAAA8PsAAAAAAAC86w8AAAAAALy7DwAAAP/Aubv+AAAA/88Zu/4AAAC/vxi7/gAAAL+MGLv+AAAAz4ybu/4MAADPjJu7/g8AAPC8u7v+AAAAAL+7u/wMAAAAv7uL/w8AAAC/u4z4AAAAAMDLu4gPAAAAwMu7i/wAAADAzLu7/gAAAMzMvLv+AADAjMj8u/4AAMyIyw+//gAAjLjLD8D8AAD8/+8PAAAAAAAA4A8AAAAAAADwDwAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"firePlane\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAACZmZmZmZmZmRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkUQRERERGRGUEUEREREZEZQRQRERERkRkUQRERERGRGREREREREZGZmZmZmZmZmQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"q2\"\n    },\n    \"image5\": {\n        \"data\": \"hwQQABAAAACZmZmZmZmZmRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERFEGRGRERERFBFJEZEREREUEUkRkRERERFEGRGREREREREZGZmZmZmZmZmQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"q4\"\n    },\n    \"image6\": {\n        \"data\": \"hwQQABAAAACZmZmZmZmZmRkRERERERGRGREREREUQZEZEREREUEUkRkRERERQRSRGREREREUQZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZEZERERERERkRkRERERERGRGREREREREZGZmZmZmZmZmQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"q3\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAIAAAAAAAAAJAIABAAAAABAJUIEAAAAANBVRQAAAAAAVFUEAAAAAEBVVQIAAAAARERUJAAAAAAAAEBEAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"fire\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"a5zAhGKtmEx`ww9FE(zZ\":\n            case \"water\":return img`\n. 9 9 . \n9 9 9 9 \n9 9 9 9 \n. 9 9 . \n`;\n            case \"image1\":\n            case \"q1\":return img`\n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 4 1 1 4 1 1 1 1 1 1 1 1 1 9 \n9 1 1 4 4 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 4 4 1 1 1 1 1 1 1 1 1 1 9 \n9 1 4 1 1 4 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n`;\n            case \"image2\":\n            case \"firePlane\":return img`\n....ffffff.........ccc..\n....ffbbccf.......cc8f..\n.....ffccccfff...cc88f..\n....ccb888bbbbcccc88bf..\n..cc9988bbbbbbbbcc8bbf..\nffbbb11199bbbbccccccceef\nfbbbbbbbbbbbbcbbbccfffff\n.febbbbbbbbb88bbbbf.....\n..ffeeeeeeecf88bbbbf....\n....ffffffffff88bbbbc...\n........cf.cf.fceeeec...\n...............ffffff...\n........................\n........................\n........................\n........................\n`;\n            case \"image4\":\n            case \"q2\":return img`\n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 4 1 1 4 1 9 \n9 1 1 1 1 1 1 1 1 1 1 4 4 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 4 4 1 1 9 \n9 1 1 1 1 1 1 1 1 1 4 1 1 4 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n`;\n            case \"image5\":\n            case \"q4\":return img`\n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 4 1 1 4 1 9 \n9 1 1 1 1 1 1 1 1 1 1 4 4 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 4 4 1 1 9 \n9 1 1 1 1 1 1 1 1 1 4 1 1 4 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n`;\n            case \"image6\":\n            case \"q3\":return img`\n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 1 4 1 1 4 1 1 1 1 1 1 1 1 1 9 \n9 1 1 4 4 1 1 1 1 1 1 1 1 1 1 9 \n9 1 1 4 4 1 1 1 1 1 1 1 1 1 1 9 \n9 1 4 1 1 4 1 1 1 1 1 1 1 1 1 9 \n9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 \n9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \n`;\n            case \"image3\":\n            case \"fire\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . 4 . . . . . \n. . . . 2 . . . . 4 4 . . . . . \n. . . . 2 4 . . 4 5 4 . . . . . \n. . . . . 2 4 d 5 5 4 . . . . . \n. . . . . 2 5 5 5 5 4 . . . . . \n. . . . . . 2 5 5 5 5 4 . . . . \n. . . . . . 2 5 4 2 4 4 . . . . \n. . . . . . 4 4 . . 2 4 4 . . . \n. . . . . 4 4 . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": " ",
  "main.ts": "namespace SpriteKind {\n    export const Fire = SpriteKind.create()\n    export const Burnt = SpriteKind.create()\n}\n",
  "pxt.json": "{\n    \"name\": \"Save the Forest HoC - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"tilemaps\": \"github:microsoft/pxt-tilemaps#v1.11.0\",\n        \"arcade-sprite-data\": \"github:microsoft/arcade-sprite-data#v0.1.0\",\n        \"arcade-sprite-util\": \"github:jwunderl/arcade-sprite-util#v0.2.4\",\n        \"arcade-story\": \"github:microsoft/arcade-storytelling#v1.0.2\",\n        \"arcade-minimap\": \"github:microsoft/arcade-minimap#v0.6.1\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.5.46\",\n        \"tag\": \"v1.5.46\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/4f3f29bef862bcab766a47e42db2d3ed6b0060b1\",\n        \"target\": \"1.5.46\",\n        \"pxt\": \"7.1.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile8\": {\n        \"data\": \"hwQQABAAAADu7u4O4O7u7gDg7gDgAA7gAAAAAAAAAO4AAAAAAAAA4AAAAAAAAADuDgAAAAAAAO7uAAAAAADu7u4AAAAAAAAADgAAAAAAAAAOAAAAAAAAAA4AAAAAAAAADgAOAAAAAOAO7g4AAO7u4O4OAAAAAO7g7g4ADgAAAO7uDgDuAADg7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"smoulder\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"wall\"\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAABmZmZmZmZmZmbGZmZmZmZmZndsbmZ2bG52d+duZlfnbmZ1Z25mdmVuZnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmdmdmZmZmZnZ3fOZmZmZmV3d37mZmZmZ2dXfmZmZmZmZ2Z2ZmZmZmZmZmZmZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"trees\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAABmZma8zGxmZmZmxsu7bGZmZma268zMbGZmZsXsxrtsZmZmzETCy2xmZmbL7sTMZmZmZcZOzrzMZmZmTOTkvMtmZma8VOTMzGZmZrwuzstsZmZmy07Cy2xmZmZL5MbMbGZmZsblvMxmZmZmxsu8zGZmZmZmzMtmZmZmZma8bGZmZg==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"firePit\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMjAwMTIwMDAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile8 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`12001200030303030303030303030303030303030303030101010101010101010101010101010103030101010101010101010101010101010103030102010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030101010101010101010101010101010103030303030303030303030303030303030303`, img`\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n..................\n`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"smoulder\":\n            case \"tile8\":return tile8;\n            case \"wall\":\n            case \"tile3\":return tile3;\n            case \"trees\":\n            case \"tile1\":return tile1;\n            case \"firePit\":\n            case \"tile2\":return tile2;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

