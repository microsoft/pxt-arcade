# 3 in a Row - Part 2

## 👀 Review your code

- :computer: In the last tutorial we set up our 𖣯 game board.

- :computer: In this tutorial we will add the ability to 🕹️ **move the cursor** around the screen and create a function to 🔎 **scan for** matching tiles.

Your code from the last activity is already in the workspace.

Take a moment to review what this code does before moving on to the next step.

If your code isn't working, you can select **Replace my code** below to use some default starter code.

## 🕹️ Move the cursor sprite

Now that we have our board set up, let's make the rectangle cursor move around the screen with the joystick or arrow keys!

---

- :game: From the ``||controller:Controller||`` Toolbox drawer, drag the ``||controller:on up button pressed||`` group of blocks into an empty area of the Workspace

💡 _Each tile is 16x16 pixels, so we move 16 pixels at a time. Moving ⬆️ UP means subtracting from the **y** (or vertical) axis_

- :game: From ``||controller:Controller||``, drag three more ``||controller:on up button pressed||`` group of blocks onto the Workspace. You may notice they turn grey and disabled. We'll fix this next!

- :mouse pointer: For each of these groups of blocks, change the direction from up to **down**, **right**, and **left**

- :mouse pointer: In the ``||controller:on down button pressed||`` block change the **y** value to positive **16**

💡 _Moving ↔️ Right and Left means changing the value of the **x** (or horizontal) axis_

- :mouse pointer: In the ``||controller:on right button pressed||`` block change the **y** to **x** and the value to positive **16**

- :mouse pointer: In the ``||controller:on left button pressed||`` block change the **y** to **x** and leave the value at -16

~hint Confused about x and y? 💡

---

- **x** is the horizontal position (left/right)
  - Negative (➖) value = move to the left ⬅️
  - Positive (➕) value = move to the right ➡️
- **y** is the vertical position (up/down)
  - Negative (➖) value = move up ⬆️
  - Positive (➕) value = move down ⬇️

hint~

```blocks
let cursor: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -16
})
```

## 🧪 Test cursor movement!

- :binoculars: Try moving your cursor around the grid with the 🕹️ joystick or arrow keys!

The cursor should snap from tile to tile, moving exactly ☐ one square at a time.

## 💞 Create the match-checking function

Now let's create a function that 🔎 finds and 🚫 clears matching tiles!

---

- :function: Open the ``||functions:Functions||`` category in the Toolbox and click on **Make a Function...**

- :mouse pointer: Name it **_clearMatches_** and click **Done**

```blocks
function clearMatches () {
	
}
```

## Track if matches were found

We need to know if any matches were cleared, so to do this we'll use a ✅❌ boolean variable.

---

- :variables: Open the ``||variables:Variables||`` category and click on **Make a Variable...** 

- :mouse pointer: Type in **_cleared_** for the name and click **Done**

- :variables: From the  ``||variables(noclick):Variables||`` menu, drag a ``||variables:set cleared to 0||`` block into the ``||functions(noclick):clearMatches||`` function

- :random: From ``||logic:Logic||``, drag a ``||logic:<false>||`` block into the ``||variables(noclick):set cleared||`` block replacing the **0**

This sets ``||variables(noclick):cleared||`` to **false** at the start of each check.

~hint What is a boolean? 💡

---
A boolean variable holds the value of either ✅ **true** or ❌ **false**, and can be useful in controlling different actions in a program.

hint~

```blocks
let cleared = false
function clearMatches () {
    // @highlight
    cleared = false
}
```

## 🔄 Loop through each symbol type

We need to check for matches of each 🟩🟠🔷 symbol separately.

---

- :loops: From ``||loops:Loops||``, drag a ``||loops:for element value of list||`` block into the ``||functions(noclick):clearMatches||`` function and after the  ``||variables(noclick):set cleared||`` block.

- :mouse pointer: In the ``||loops(noclick):for element||`` block, click on the ``||variables(noclick):value||`` drop down and select **Rename variable...** 

- :mouse pointer: Type in **_gem_** as the variable name and then click Ok

- :mouse pointer: Now click on the ``||variables(noclick):list||`` drop down and select the ``||variables(noclick):symbols||`` array.

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    // @highlight
    for (let gem of symbols) {
    }
}
```

## 🔎 Use the Tile Scanner to find matches

Now we'll use a special extension called 🔎 **Tile Scanner** to find 3-in-a-row matches!

---

- :loops: From ``||loops:Loops||``, drag another ``||loops:for element value of list||`` block and place it inside the existing ``||loops(noclick):for element||`` loop.

- :mouse pointer: In this ``||loops(noclick):for element||`` block, click on the ``||variables(noclick):value||`` drop down and select **Rename variable...** 

- :mouse pointer: Type in **_location_** as the variable name and then click Ok

💡 _Loops inside other loops are called 🪺 "Nested Loops"_

- :binoculars: From the ``||tileScanner:Tile Scanner||`` Toolbox category, drag the ``||tileScanner:scan for horizontal or vertical lines that match tile||`` block into the ``||loops(noclick):for element location||`` block replacing the ``||variables(noclick):list||`` variable

~hint What does this do? 💡

---

This block scans for any ↔️ horizontal or ↕️ vertical lines where there are 🔷🔷🔷 3 matching tiles in a row and will return the results as an array of locations.

hint~

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        // @highlight
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
        }
    }
}
```

## 🚫 Clear the matched tiles

When we find a match, let's clear those tiles!

---

- :tile scanner: From ``||tileScanner:Tile Scanner||``, drag a ``||tileScanner:set tile at myLocations||`` block out and drop into the inner ``||loops(noclick):for element||`` loop

- :mouse pointer: Drag out the ``||variables(noclick):location||`` variable from the ``||loops(noclick):for element||`` block and drop in the ``||tileScanner(noclick):set tile||`` block replacing ``||variables(noclick):myLocations||``

This erases the matched tiles! ⛔⛔⛔

```blocks
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            // @highlight
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
        }
    }
}
```

## ♫ Add music and effects!

Let's celebrate the match with a ♫ sound and 🎉 effects!

---

Inside the inner ``||loops(noclick):for||`` loop add the following blocks:

- :paper plane: From ``||sprites:Sprites||``, drag a ``||sprites:cursor start confetti effect||`` block and drop after the ``||tileScanner(noclick):set tile||`` block

- :headphones: From ``||music:Music||``, drag a ``||music:play sound||`` block out and drop after the ``||sprites(noclick):start effect||`` block

```blockconfig.local
let cursor: Sprite = null
cursor.startEffect(effects.confetti)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
```

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            // @highlight
            cursor.startEffect(effects.confetti, 500)
            // @highlight
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        }
    }
}
```

## 🥇 Set cleared to true and add a point

Now that we've found a match, we should change the **cleared** boolean variable to ✅ true and add a point to our 📝 score.

---

- :variables: From the ``||variables:Variables||`` Toolbox drawer, drag a ``||variables:set||`` block out and drop after the ``||music(noclick):play sound||`` block

- :mouse pointer: In the ``||variables(noclick):set||`` block, click on the variable drop down and select the ``||variables(noclick):cleared||`` variable

- :random: From ``||logic:Logic||``, drag a ``||logic:<true>||`` block into the ``||variables(noclick):set cleared||`` block replacing the **0**

- :id card: From ``||info:Info||``, drag a ``||info:change score by 1||`` block out and drop after the ``||variables(noclick):set cleared||`` block

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            // @highlight
            cleared = true
            // @highlight
            info.changeScoreBy(1)
        }
    }
}
```

## 🫗 Refill empty tiles after clearing

After clearing the matches, we need to fill the empty spaces with new 🟩🟠🔷 symbols - luckily we already have a function for that!

---

- :function: From the ``||functions:Functions||`` Toolbox, drag a ``||functions:call fillEmptyTiles||`` block after both for loops end (but still inside ``||functions(noclick):clearMatches||`` function)

```blocks
let cursor: Sprite = null
let symbols: Image[] = []
let cleared = false
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    // @highlight
    fillEmptyTiles()
}
```

## ❌ Game over if no matches

After going through the nested loop to scan for matches for each 🔷 gem, if we haven't cleared any tiles, then we lose the game. 😞

---

- :random: From ``||logic:Logic||``, drag an ``||logic:if <true> then||`` block out and drop it after the ``||functions(noclick):fillEmptyTiles||`` call

- :random: From ``||logic:Logic||``, drag a ``||logic:not < >||`` block and drop into the ``||logic(noclick):if <true> then||`` block replacing ``||logic(noclick):<true>||``

- :variables: From ``||variables:Variables||``, drag a ``||variables:cleared||`` variable inside the ``||logic(noclick):not||`` block

- :circle: From the ``||game:Game||`` menu, drag a ``||game:game over||`` block inside the ``||logic(noclick):if <not cleared> then||`` block and move the toggle to **LOSE**

~hint What does this code do? 💡

---

If ``||variables(noclick):cleared||`` is still ❌ **false** (not cleared) at the end of our loops, that means no matches were found. The game ends because the player made a swap that didn't result in a match 🥺

hint~

```blocks
let symbols: Image[] = []
let cleared = false
let cursor: Sprite = null
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    fillEmptyTiles()
    // @highlight
    if (!(cleared)) {
        // @highlight
        game.gameOver(false)
    }
}
```

## 🤩 Great Job!

👏 Good progress on your game so far!

Click **Done** to move on to the final part of the skillmap where you will code the logic to ↔️ swap tiles.

```template
scene.setBackgroundColor(13)
let cursor = sprites.create(img`
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ff............................ff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
cursor.setPosition(80, 56)
tiles.setCurrentTilemap(tilemap`level1`)
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
fillEmptyTiles()
info.setScore(0)
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
```

```blockconfig.global
let cursor: Sprite = null
function fillEmptyTiles () {}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
let gem: Image = null
tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)
```

```package
tileScanner=github:riknoll/arcade-tile-scanner
```

```assetjson
{
  "README.md": " \n\n\n> Open this page at [https://jaqster.github.io/gems/](https://jaqster.github.io/gems/)\n\n## Use as Extension\n\nThis repository can be added as an **extension** in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **New Project**\n* click on **Extensions** under the gearwheel menu\n* search for **https://github.com/jaqster/gems** and import\n\n## Edit this project\n\nTo edit this repository in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **Import** then click on **Import URL**\n* paste **https://github.com/jaqster/gems** and click import\n\n#### Metadata (used for search, rendering)\n\n* for PXT/arcade\n<script src=\"https://makecode.com/gh-pages-embed.js\"></script><script>makeCodeRender(\"{{ site.makecode.home_url }}\", \"{{ site.github.owner_name }}/{{ site.github.repository_name }}\");</script>\n",
  "assets.json": "",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Gems\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"2.0.63\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\",\n    \"assetPack\": true\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"tile1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAACIiIiIiIgAYIaIiIiIiAhgdnd3d3eHCGB2d3d3d4cIYHZ3d3d3hwhgdnd3d3eHCGB2EXd3d4cIYHYRd3d3hwhgdhF3d3eHCGB2ERF3d4cIYHYREXd3hwhgdnd3d3eHCGB2d3d3d4cIAGZmZmZmZgAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem1\"\n    },\n    \"tile2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAADu7gAAAAAAAO7uAAAAAO7uIu4AAAAA7u4i7gAA7u4iIiLuAADu7iIiIu7u7iIiIiIi7u7uIiIiIiLuREQiESIiIu5ERCIRIiIi7gAAREQiIiLuAABERCIiIu4AAAAAREQi7gAAAABERCLuAAAAAAAAREQAAAAAAABERA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem2\"\n    },\n    \"tile3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAzMzMzAAAAMyqqqqqzAAAzKqqqqrMALCqqqqqqqoMsKqqqqqqqgywqqqqqqqqDLCqqqqqqqoMsKoRqqqqqgywqhGqqqqqDLCqqhGqqqoMsKqqEaqqqgwAu6qqqqq7AAC7qqqqqrsAAAC7u7u7AAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem3\"\n    },\n    \"tile4\": {\n        \"data\": \"hwQQABAAAAAAAACIiAAAAAAAAIiIAAAAAACImZmIAAAAAIiZmYgAAACImZmZmYgAAIiZmZmZiABmmZmZmZmZiGaZmZmZmZmIZpkRmZmZmYhmmRGZmZmZiABmmRGZmWYAAGaZEZmZZgAAAGaZmWYAAAAAZpmZZgAAAAAAZmYAAAAAAABmZgAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem4\"\n    },\n    \"tile5\": {\n        \"data\": \"hwQQABAAAAAAAADu7u4AAAAAAO7u7gAAAADuVVVV7gAAAO5VVVXuAADuVVVVVVXuAO5VVVVVVe5EVVVVVVVV7kRVVVVVVVXuRFURVVVVVe5EVRFVVVVV7gBEVRFVVVXuAERVEVVVVe4AAERVVVVEAAAARFVVVUQAAAAAREREAAAAAABEREQAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem5\"\n    },\n    \"tile6\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAADAzMwMAAAAAMzMzMwAAADMMzMzM8wAADwzMzMzwwC7MzMzMzMzzLszMzMzMzPMuzMRMzMzM8y7MxEzMzMzzAA7MxEzM7MAALszETMzuwAAALu7u7sAAAAAsLu7CwAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"Gem6\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile2 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile3 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile4 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile5 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile6 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Gem1\":\n            case \"tile1\":return tile1;\n            case \"Gem2\":\n            case \"tile2\":return tile2;\n            case \"Gem3\":\n            case \"tile3\":return tile3;\n            case \"Gem4\":\n            case \"tile4\":return tile4;\n            case \"Gem5\":\n            case \"tile5\":return tile5;\n            case \"Gem6\":\n            case \"tile6\":return tile6;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
