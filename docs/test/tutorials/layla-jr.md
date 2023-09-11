# Pickle Party
### @explicitHints true


## Pickle Party Intro @showdialog

Are you ready to code a pickle party?

Follow this tutorial to create your own multiplayer experience that you can play online together with family and friends!



## {Finale}

**🥒 Excellent 🥒**

You have finished your multiplayer experience!

When you're ready, sign-in, then select **Done** to start an online multiplayer session with up to three friends.

**Who will be the first to score 20 points?**



```template
sprites.step_right()
let characters: Image[] = []

characters = [
lyla_imgs.lyla,
lyla_imgs.everett,
lyla_imgs.stu
]

```



```package
multiplayer
lyla_imgs=github:kiki-lee/lyla_imgs#v0.0.2
```


```customts

namespace sprites {

    //% block="`lyla_imgs.stu`"
    export function step_right() {
        pause(500)
    }

}


//% color=#29a320 icon="\uf192"
namespace pickle {

    // Make sure not to remove later player when earlier player tested
    export let playersConnected=0;


    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters
    export function setPlayersWith(list: Image[], num: number) {
        if(num >= pickle.playersConnected){
            pickle.playersConnected = num;
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            let xloc = [
            40,
            120,
            40,
            120
            ]
            let yloc = [
            30,
            30,
            90,
            90
            ]
            for (let index = 0; index <= num - 1; index++) {
                mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                mp.moveWithButtons(mp.getPlayerByIndex(index))
            }
        }
    }

}

namespace logic{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wralyla(handler: () => void) {
        handler();
    }
}


//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wralyla(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="create finish line"  weight=300
    //% handlerStatement=1
    export function wraeverett(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="create players"  weight=300
    //% handlerStatement=1
    export function wrastu(handler: () => void) {
        handler();
    }




}

```

```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#D26A9E",
        "#F9C890",
        "#FDFF70",
        "#8E2EC4",
        "#408325",
        "#135847",
        "#10CCE5",
        "#95D6B1",
        "#A4839F",
        "#693C16",
        "#E5CDC4",
        "#A46C46",
        "#000000"
    ]
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT_Music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
