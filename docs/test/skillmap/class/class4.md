<!-- Level #4 of Kiki's Class Skillmap -->

# Get Animated
### @explicitHints true


<!-- ***************************************************
//           STEP ONE
// **************************************************** -->
## Getting Animated @showdialog

<!-- This is the text that shows up in the instruction -->
Let's add some extra movement!

<!-- This is how you add an image in markdown -->
![A moving image showing an animated student](/static/skillmap/class/class4.gif "This is what your final game should look like.")




<!-- ***************************************************
//                      STEP TWO
// **************************************************** -->

## {Step 2}

**Try what you have so far.**

---

- :binoculars: Test the project that's in your workspace.

~hint My game doesn't work ⚠️

---

<!-- This only happens in the first non-modal instruction of levels
// that have starter code defined--------------------------------->

If your code isn't working and you can't figure out why, click
<!-- the following line contains an empty link for no other reason
// than to make the text blue so it resembles the actual link that
// we are referring to ------------------------------------------>
<br/>[Replace my code](#)<br/>
to replace the blocks in your workspace with new starter code.

hint~



<!-- ***************************************************
//                      STEP THREE
// **************************************************** -->

## {Step 3}

**Up, Down, Left, and Right**

Let's animate our student as they walk through the maze. 

---

- :video: From the ``||characterAnimations:Character||`` category, drag the big<br/>
``||characterAnimations:[mySprite] loop frames [ ]...||``<br/>
block into **the end** of the<br/>
``||loops(noclick):on start||`` container already in the workspace.

- :mouse pointer: To choose an animation for moving right, click on <br/>
``||characterAnimations:moving||``<br/>
and choose<br/>
``||characterAnimations:moving right||``<br/>
from the dropdown.



#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
stopwatch.startTimer(stopwatch.TimerType.Tens)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})
//@highlight
characterAnimations.loopFrames(
mySprite,
assets.animation`right`,
100,
characterAnimations.rule(Predicate.MovingRight)
)

```



<!-- ***************************************************
//                      STEP FOUR
// **************************************************** -->

## {Step 4}

Next, you can either choose an animation from the gallery, 
or create your own by adding frames in the **Animation Editor**.

---

- :mouse pointer: Click the grey square inside of <br/>
``||characterAnimations:[mySprite] loop frames [ ]...||``<br/>
to open the **Animation Editor**.  

- :mouse pointer: Select **Gallery** to choose the animation of a character walking to the right, like this one:
 ![The image of a student facing right with a camera in the lower left corner](/static/skillmap/class/student-right.png "Choose the animation of the student walking to the right.")

Then click **Done**.


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
stopwatch.startTimer(stopwatch.TimerType.Tens)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})
//@highlight
characterAnimations.loopFrames(
mySprite,
class_img.right,
100,
characterAnimations.rule(Predicate.MovingRight)
)

```




<!-- ***************************************************
//                      STEP FIVE
<!-- *************************************************-->

## {Step 5}

**Try your game.**

---

- :binoculars: Move your student through the maze. What happens when you move to the right?
What happens when you move in any other direction?




<!-- ***************************************************
//                      STEP SIX
// **************************************************** -->

## {Step 6}

Now we can add animations for all of the other directions.

---


- :video: Snap three more<br/>
``||characterAnimations:[mySprite] loop frames [ ]...||``<br/>
block into **the end** of the<br/>
``||loops(noclick):on start||`` container already in the workspace.

- :mouse pointer: Set the **when** actions for the blocks to <br/>
``||characterAnimations:moving left||``<br/>
``||characterAnimations:moving up||``<br/>
``||characterAnimations:moving down||``<br/>


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
stopwatch.startTimer(stopwatch.TimerType.Tens)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})
characterAnimations.loopFrames(
mySprite,
img.right,
100,
characterAnimations.rule(Predicate.MovingRight)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
assets.animation`left`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
assets.animation`up`,
100,
characterAnimations.rule(Predicate.MovingUp)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
assets.animation`down`,
100,
characterAnimations.rule(Predicate.MovingDown)
)
```





<!-- ***************************************************
//                      STEP SEVEN
<!-- *************************************************-->

## {Step 7}

**Add animations to each of your new character blocks.**


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
stopwatch.startTimer(stopwatch.TimerType.Tens)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})
characterAnimations.loopFrames(
mySprite,
class_img.right,
100,
characterAnimations.rule(Predicate.MovingRight)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
class_img.left,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
class_img.up,
100,
characterAnimations.rule(Predicate.MovingUp)
)
//@highlight
characterAnimations.loopFrames(
mySprite,
class_img.down,
100,
characterAnimations.rule(Predicate.MovingDown)
)
```




<!-- ***************************************************
//                      STEP EIGHT
<!-- *************************************************-->

## {Step 8}

**🕹️ Try your finished game!**

---

Watch your student walk through the maze with animations!

Can you escape with a time less than 390?




<!-- ***************************************************
//                      FINALE
<!-- **************************************************-->

## Finale

💯 **You did great!** 💯

---

When you're finished playing your game, click **Done** to head back to the skillmap where you
can share your game or keep customizing it!

~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner
for the share button.

![Share your card](/static/skillmap/class/share.gif )

hint~







<!-- *************** End Tutorial Text Portion ******************//
// ---------------------------------------------------------------------------------//
// The following code sets up the images, blocks, and extensions //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-->



<!-- ***************************************************
//            BLOCKCONFIG - DEFAULT BLOCKS
// ****************************************************
// Blockconfig blocks can change from level to level
******************************************************-->
```blockconfig.global
    stopwatch.startTimer(stopwatch.TimerType.Tens)
    game.setGameOverMessage(true, "Way to go!")
    tiles.setTileAt(location, assets.tile`transparency16`)
    stopwatch.changeTimerBy(5000)

    loops.wrap1(function () {
        for (let value of tiles.getTilesByType(assets.tile`paper`)) {
            info.changeScoreBy(1)
        }
    })

    info.changeScoreBy(-1)
    info.onScore(0, function () { })
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.setGameOverScoringType(game.ScoringType.LowScore)

    characterAnimations.loopFrames(
    mySprite,
    class_img.left,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
```



<!-- ***************************************************
//            PACKAGE - IMPORT EXTENSIONS
// ****************************************************
// Make sure you import EXACTLY the same extensions in
// all levels of the same skillmap
******************************************************-->
```package
//These are extensions for some of the blocks we want to use
pxt-tilemaps=github:microsoft/pxt-tilemaps
arcade-character-animations=github:microsoft/arcade-character-animations
stopwatch=github:kiki-lee/stopwatch#v0.0.5

//This is the image pack for this tutorial
class_img=github:kiki-lee/class_img
```



<!-- ***************************************************
//            TEMPLATE - START WITH BLOCKS
// ****************************************************
// We'll start this level with the same blocks we added
// during the last level
******************************************************-->
```template

scene.onOverlapTile(SpriteKind.Player, assets.tile`teacher`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    stopwatch.changeTimerBy(5000)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.setGameOverMessage(false, "You left too early!")
    game.over(false)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`paper`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})

scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
stopwatch.startTimer(stopwatch.TimerType.Tens)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})

info.onScore(0, function () {
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.setGameOverScoringType(game.ScoringType.LowScore)
    game.gameOver(true)
})
```


<!-- ***************************************************
// GHOST - ADD BLOCKS EVEN IF THEY'RE NOT YET IN TUTORIAL
******************************************************-->
```ghost
scene.onOverlapTile(SpriteKind.Player, assets.tile`paper`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teacher`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    stopwatch.changeTimerBy(5000)
})
info.onScore(0, function () {
    info.setScore(stopwatch.getTimerValue(stopwatch.TimerGran.Tenths))
    game.setGameOverScoringType(game.ScoringType.LowScore)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.setGameOverMessage(false, "You left too early!")
    game.over(false)
})
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
assets.animation`right`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`left`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`bwd`,
100,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`fwd`,
100,
characterAnimations.rule(Predicate.MovingDown)
)
loops.wrap1(function () {
    for (let value of tiles.getTilesByType(assets.tile`paper`)) {
        info.changeScoreBy(1)
    }
})
stopwatch.startTimer(stopwatch.TimerType.Tens)
```


<!-- ***************************************************
//            CUSTOMTS - BEHIND THE SCENES
******************************************************-->
```customts
tiles.setTilemap(tilemap`school_1`)

namespace loops{
    /**
    * A wrapper to bundle complex instructions together
    */
    //% block="count assignments"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}
```



<!-- ***************************************************
//            ASSETJSON - ADD NON_EXTENSION ASSETS
// ****************************************************
// Make sure the assetjson is EXACTLY the same for all
// levels that are in the same skillmap
******************************************************-->

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"class_tiles\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.6.7\",\n        \"tag\": \"v1.6.7\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/df8cbfd31829508563fa67096db8a6fe6e1d06ec\",\n        \"target\": \"1.6.7\",\n        \"pxt\": \"7.2.12\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"assetPack\": true\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQERERERERADk7u7u7u7uQO7u7uTu7u7g7u7u7u7u7uTu7u7u7u7u7+7u7u7u7u7g7u7u7u7u7vDu7u7u7u7uAO/u7u7u7u4A8P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"door\"\n    },\n    \"tile9\": {\n        \"data\": \"hwQQABAAAAAAAAAAywwAAAAAALDbCwAAAAAAaxELAAAAALBrG70AAAAA220WsQAAALBr27bRCwAAa93RZhELALBr27ZhFrEMsG3WZhEWvQCw3bZhFrELAADbZhEWvQAAANthHbELAAAAsBEdvQAAAACwHbELAAAAAAAbvQAAAAAAALsLAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"paper\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQQABAAAAAAwIERGAwAAADAGBEYDAAAAMARgREMAAAAwIERGAwAAADAEREYDAAAAAD/RMwMAAAA8P9EwQAAAAD//7wRDADA8L9PRBvLDM/Av0/u7hGM/8C8S+EuEWb/8MxL4SIRhgDw/PtEtMxm/8D8+/S/RIj/AP+7/89EDM8A////D8wAwA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"teacher\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7uw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"brick\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAADMzMzMzMzMzMzMzMy7u7u9zMzMzLu7u73MzMzMu7u7vczMzMy7u7u9zMzMzMzMvLvMzLu7u9u7u8zMu7u727u7zMy7u7vbu7vMzLu7u9u7u8zMzMzMu7u7vLu7u9u7u7u8u7u727u7u7y7u7vbu7u7vLu7u9u7u7vMzMzMzMzMzA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"stairs\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAB1d3d3d3d3d3d30XZ3F3Z3dTcRY3dxcVd3EXbRdxd2d3cRdtF3d3d3dzcRY3d3d3d3d9F2F3Z3d3d3d3dxcXd3d3d3dxd2d3d3V2V3d3d3d3d3d1d1F213d3d3VXYTMXZ3YXdnF2EXfRcXd3cXYRd9d2F3d3cTMXZ3d3d3dxdtdw==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"outdoors\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwMDAwMDAwMDAwMDAwNDAwMDAwMDAwMDAwMDAwMDQwNTAwMDQwNDAwMDQwMjA0MDAwNDAwMDQwMDA0MDAwNDA0MDAwNDA0MDMwNDA0MDQwMDA0MDAwNDAwMDQwMDA0MDQwMDAwMDAwNDA0MDMwNDAwMDQwMDA0MDAwNDAwMDQwNDAwMDQwNDA0MDQwMDA0MDAwNDAwMDAwMDA0MDAwNDA0MDAwMDAwMDAwMDAwMDAwMDA0MDMwNDAwMDQwMDA0MDQwMDAzMDQwNDA0MDQwNDAwMDQwNDA0MDAwNDAwMDQwNDAwMDAwMDA0MDAwMzAwMDAwNDAzMDQwMDA0MDAwNDA0MDAwNDA0MDQwMDA0MDQwNDA0MDAwNDAwMDQwMDA0MDQwMDAwMDAwMDAwMDQwMzAwMDAwMDAwMDAwNDAwMDQwNDAwMDQwNDA0MDQwNDA0MDQwNDA0MDQwMjA0MDAwNDA0MDAwMDAwMDAwMzA0MDAwMDAwMDAwMDAwMDQwMDA0MDQwMDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDAwMDQwNDAyMDQwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMTA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA2MjIyMjIyMjIyMjIyMjIyMjAyMDAwMDIwMDAwMDAwMjAwMDAyMjAyMDAwMjAwMDIwMDIyMjIwMjIyMDIwMjAyMDAyMDAyMjIwMjAwMDIwMjAwMjIyMjIwMDIwMDAyMDIwMDIwMDAwMDAyMDIwMjAyMDAyMjAyMjAyMjAyMjIwMjAwMjAwMDIwMDIwMjAyMDIwMDIyMjAyMjIyMjAwMjAyMDAyMDAwMDAyMDAwMDIwMjAwMjIwMjIyMjIyMjIyMDIwMDIwMDAwMDIwMDAwMDAyMDAyMjIyMjIyMjIyMjIyMDAwMjAyMDAwMDAwMDAwMDAwMjIyMjIyMjIyMjIyMjIwMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"myTiles.tile1\",\n            \"myTiles.tile6\",\n            \"myTiles.tile9\",\n            \"myTiles.tile2\",\n            \"myTiles.tile3\",\n            \"myTiles.tile4\"\n        ],\n        \"displayName\": \"school_1\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile9 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"school_1\":\n            case \"level1\":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040000000000000400000000000000040500040400040204000400040004000404000404030404040004000400040004040000000404030400040004000400040400040404040004000400000004000404000000000000000004030400040004040003040404040400040404000400040400000004000300000403040004000404000404040004040404000400040004040000000000040300000000000400040400040404040404040404040204000404000000000304000000000000040004040004040404040404040404040400040402040000000000030000000000000104040404040404040404040404040406`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 . . . . . . 2 . . . . . . . 2 \n. . 2 . . 2 . 2 . . . 2 . . . 2 \n2 . 2 2 . 2 2 2 . 2 . 2 . 2 . 2 \n2 . . . 2 2 . 2 . 2 . . . 2 . 2 \n2 . 2 2 2 2 . . . 2 . . . 2 . 2 \n2 . . . . . . . . 2 . 2 . 2 . 2 \n2 . . 2 2 2 2 . . 2 2 2 . 2 . 2 \n2 . . . 2 . . . . 2 . 2 . 2 . 2 \n2 . 2 2 2 . 2 2 2 2 . . . 2 . 2 \n2 . . . . . 2 . . . . . . 2 . 2 \n2 . . 2 2 2 2 2 2 2 2 2 . 2 . 2 \n2 . . . . . 2 . . . . . . . . 2 \n2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . \n2 . 2 . . . . . . . . . . . . . \n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . \n`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile9,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"door\":\n            case \"tile1\":return tile1;\n            case \"paper\":\n            case \"tile9\":return tile9;\n            case \"teacher\":\n            case \"tile6\":return tile6;\n            case \"brick\":\n            case \"tile2\":return tile2;\n            case \"stairs\":\n            case \"tile3\":return tile3;\n            case \"outdoors\":\n            case \"tile4\":return tile4;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```