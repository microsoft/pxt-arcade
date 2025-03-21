<!-- See this tutorial in action at aka.ms/kikisClass -->

<!-- If you found this in the github, copy the raw file located at
// aka.ms/kikisClassRaw and paste it into the tutorial tool
// located at https://makecode.com/tutorial-tool then run it from the
// Arcade editor to see your edits as you go -->




# Trapped in the Halls
### @explicitHints true
<!-- ***************************************************
// Use the single hash to name the tutorial, and the
// double hash to name the step. Triple hashes set
// custom flags that change the way the tutorial works
// https://makecode.com/writing-docs/tutorials
// @explicitHints true cues the tutorial not to add hints
// automatically, but to let you tell it when you want hints
// ****************************************************-->



<!-- ***************************************************
//           STEP ONE
<!-- ***************************************************
// Step #1 is usually a modal (pop-up) that sets the scene
// The @showdialog tag makes it pop out
// **************************************************** -->
## Welcome to Miss Kiki's Class @showdialog

<!-- This is the text that shows up in the instruction -->
This is Miss Kiki's Class. Nothing ever feels quite normal in this school.

<!-- This is how you add an image in markdown -->
![This text is for the screen reader](/static/skillmap/class/class1.gif "This text shows on rollover.")





<!-- ***************************************************
//                      STEP TWO
<!-- ***************************************************
// This step's title is inside curly braces. That hides it
// from the viewer, because step titles are pretty huge
// and obnoxious
// **************************************************** -->
## {Step 2}

<!-- This text will be bold -->
**Ready to start coding?**

Our main character is called a sprite. Let's create a student sprite and get them moving before we do anything else.

<!----------------------------------------------------------->
<!-- This is how you create a clue within the instruction -->
<!-- vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->

~hint What's a sprite? 💡

<!-- The dashes below make a divider line -->

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our "student" character will be a sprite, too.

You create a sprite using a block like this:

<!-- https://makecode.com/writing-docs/snippets#block
// This will embed a block directly into the instructions
-->
```block
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
```

hint~

<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
<!------------------------ End Clue --------------------------->
<!----------------------------------------------------------->


<!-- This next part of the instruction uses a couple of different
// formats to guide students. 
// https://makecode.com/writing-docs/snippets#namespace-coloring
//
// The -:paper plane: text adds an icon to the side of the instruction 
// that corresponds to the category used in the step (this one adds the sprite icon)
//
// Next, the ``||sprites:Sprites||`` text creates a highlighted word that
// opens the category it points to when clicked (here, it's the Sprites category.)
//
// Want the formatted text to link to a different category than the color
// sends it to by default, use a different category in parentheses
// ``||variables(sprites):set [mySprite]||`` makes a red block that
// goes to the blue Sprites category.
//
// ``||loops(noclick):on start||`` makes the text green but doesn't
// open any category
// --------------------------------------------------------------->

- :paper plane: From the ``||sprites:Sprites||`` category, drag <br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
to **the end** of the ``||loops(noclick):on start||`` container.

- :mouse pointer: Click on the empty grey square to open the image editor, then
switch to the **Gallery** tab to choose a student image.
![Toggle to Gallery](/static/skillmap/assets/gallery.png "Click the Gallery tab to choose a character")


<!-- This section will add blocks to the answer key.
// https://makecode.com/writing-docs/tutorials/basics#using-blocks
// tutorialhint tells the tutorial that we're adding a hint now. 
// Include all of the blocks that students will see within
// the code segment that they're working on. 
//  
// Use //@highlight to highlight the instruction from this step 
// https://makecode.com/writing-docs/snippets#highlight -->

#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
//@highlight
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
```



<!-- ***************************************************
//                      STEP THREE
<!-- ***************************************************
// Occasionally remind students to look at what they've done
// so they can make sure things are working. You might be
// surprised at how often they soldier on without taking
// time to play with their creations.
// **************************************************** -->

## {Step 3}


**Look at the game window.**

---

- :binoculars: Look at your project in the game window to see what your code is doing.

You should see your player hanging out in the middle of the maze.




<!-- ***************************************************
//                      STEP FOUR
<!-- ***************************************************
// Keep adding instructions and hints to guide students
// toward the steps they need to take. Tutorials work best
// when you "complete a thought" before moving on to the next thing.
// Add a sprite, position it, get it moving, follow with the camera,
// THEN you can move on to the maze mechanics.
// **************************************************** -->
## {Step 4}

**Your student should appear at the stairs when the game starts.**

---

- :tree: From the ``||scene:Scene||`` category, drag<br/>
``||scene: place [mySprite] on top of random [ ]||`` <br/>
to **the end** of the <br/>
``||loops(noclick):on start||`` container.

<!-- Make sure to leave several line breaks between each bullet point -->
- :mouse pointer: Click the checkered tile and select the
stairs from the image grid.


<!-- This will create an italicized tip for the user-->
_💡 Don't forget to play with your project after each step to see the changes your code has made._


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
//@highlight
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
```




<!-- ***************************************************
//                      STEP FIVE
<!-- *************************************************-->

## {Step 5}

**Your student needs to be able to move around on the screen.**

---

- :game: From the ``||controller: Controller||`` category, grab <br/>
``||controller: move [mySprite] with buttons||`` <br/>
and snap it in at **the end** of the<br/>
``||loops(noclick): on start||``<br/>
block already in the workspace.


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
//@highlight
controller.moveSprite(mySprite)
```




<!-- ***************************************************
//                      STEP SIX
<!-- *************************************************-->

## {Step 6}

**Keep your student in sight...**

---

- :tree: From the ``||scene:Scene||`` category, drag <br/>
``||scene:camera follow sprite [mySprite]||``<br/>
to **the end** of the <br/>
``||loops(noclick):on start||`` container.


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(13)
let mySprite = sprites.create(class_img.stand, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`stairs`)
controller.moveSprite(mySprite)
//@highlight
scene.cameraFollowSprite(mySprite)
```




<!-- ***************************************************
//                      STEP SEVEN
<!-- *************************************************-->

## {Step 7}

**🕹️ Try your project in the game window**

---

You should be able to see your student as they move around the school.
Can you make it to the exit?

<!-- Notice that the game playimg steps don't contain answer keys.>



<!-- ***************************************************
//                      NOTE
<!-- ***************************************************
// Students usually max out somewhere between 10-15 steps.
// If you can wrap-up the tutorial in this amount of time,
// then it makes sense to use a single tutorial for the game.
// Otherwise, consider creating a skillmap. Directions for
// turning tutorials into skillmaps can be found at
// aka.ms/make-a-skillmap
// **************************************************** -->


<!-- ***************************************************
//                      FINALE
<!-- **************************************************-->

## Finale

🔥 **Well done!** 🔥

---

Take a look at all of the papers and teachers hidden in the maze,
then click **Done** to head to the next level of the
skillmap where we'll add timers and overlap events!







<!-- **************************** End Tutorial Text Portion *************************//
// ---------------------------------------------------------------------------------//
// The following code sets up the images, blocks, and extensions                   //
// see https://makecode.com/writing-docs/tutorials/control-options#special-blocks //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-->



<!-- ***************************************************
//            BLOCKCONFIG - DEFAULT BLOCKS
// ****************************************************
// This is how you add default settings to blocks
// in the toolbox
******************************************************-->
```blockconfig.global
stopwatch.startTimer(stopwatch.TimerType.Tens)
```



<!-- ***************************************************
//            PACKAGE - IMPORT EXTENSIONS
// ****************************************************
// https://makecode.com/writing-docs/snippets#package
// This is how you import extensions into your tutorial
******************************************************-->
```package
//These are extensions for some of the blocks we want to use
pxt-tilemaps=github:microsoft/pxt-tilemaps
arcade-character-animations=github:microsoft/arcade-character-animations
stopwatch=github:kiki-lee/stopwatch#v0.0.5

//This is the image pack for this tutorial
class_img=github:kiki-lee/class_img#v0.0.1
```



<!-- ***************************************************
//            TEMPLATE - START WITH BLOCKS
// ****************************************************
// https://makecode.com/writing-docs/tutorials/control-options#special-blocks
// This is how you start with code in the workspace
******************************************************-->
```template
scene.setBackgroundColor(13)
```


<!-- ***************************************************
// GHOST - ADD BLOCKS EVEN IF THEY'RE NOT YET IN TUTORIAL
// ****************************************************
// https://makecode.com/writing-docs/tutorials/control-options#ghost-blocks
// This is how you add blocks to the toolbox, even
// if the tutorial doesn't use them
// I've preloaded this with all of the code for our game.
// Note that the blocks won't show up prefilled in the toolbox
// unless you also add them to a blockconfig section.
******************************************************-->
```ghost

scene.onOverlapTile(SpriteKind.Player, assets.tile`teacher`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    stopwatch.changeTimerBy(5000)
})

scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)

stopwatch.startTimer(stopwatch.TimerType.Tens)
```


<!-- ***************************************************
//            CUSTOMTS - BEHIND THE SCENES
// ****************************************************
// https://makecode.com/writing-docs/tutorials/control-options#custom-code
// This is how you add code "behind the scenes"
// This code is hidden from the user so it's a good way
// to hide confusing steps or add custom functions
******************************************************-->
```customts
tiles.setTilemap(tilemap`school_1`)


// This is a custom block created to be put in the "Loops" category.
// We've done this here to let us bind some blocks together in the
// toolbox to make a complicated step less tricky.
// You won't actually see this section until a later level

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
// https://makecode.com/writing-docs/tutorials/resources#assetjson
// This imports items into 'My Assets". This is important for things
// like music and tilemaps that don't have a gallery.
// You get this from saving a project containing only assets
// from the url
// https://arcade.makecode.com/?saveTemplate=1#editor
// and pasting the result between the ticks
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