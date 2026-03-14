# 3 in a Row - Part 1

## Introduction @showdialog

Welcome to **3 in a Row**! 🟡🟢🟣

In this skillmap, you'll create a fun 🧩 puzzle game where you swap tiles to match 3 or more of the same symbol in a row! 🩵🩵🩵

![Match 3 game concept](/static/skillmap/3-in-a-row/match3.gif)

Move a ☐ cursor around the game board, ↔️ swap tiles, and make matches to score points. ⚠️ But be careful — if your swap doesn't create a match, it's game over!

## 🎨 Set the background color

Let's create a ⬜ light background color for our game.

---

- :tree: From the ``||scene:Scene||`` category in the **Toolbox**, drag a ``||scene:set background color||`` block into the ``||loops(noclick):on start||`` container on the Workspace

💡 _A light background makes the 🌈 colorful tiles easier to see!_

```blocks
// @highlight
scene.setBackgroundColor(13)
```

## Create a selector sprite

Now we need to create a 👾 sprite that acts as a cursor to show which tiles are ☑️ selected on the grid.

---

- :paper plane: From the ``||sprites:Sprites||`` category, drag a ``||variables(sprites):set cursor to sprite of kind Player||`` block into the end of the ``||loops(noclick):on start||`` container

~hint What is a sprite? 💡

---

A **sprite** in a game represents an object that has properties and behaviors. It can be a player 😊, an enemy 👿, or anything ⭐ that can move or do something.

hint~

```blockconfig.local
let cursor: Sprite = null
cursor = sprites.create(img`
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
```

```blocks
scene.setBackgroundColor(13)
// @highlight
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
```

## 📌 Position the cursor

Let's put the cursor in the middle of the 💻 screen to start.

---

- :paper plane: From ``||sprites:Sprites||``, drag the ``||sprites:set cursor position||`` block into the end of the ``||loops(noclick):on start||`` container

💡 _The screen is 160 pixels wide and 120 pixels tall. Putting the cursor at **(80, 56)** places it near the center!_

```blocks
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
// @highlight
cursor.setPosition(80, 56)
```

## 📱 Set up the tilemap

Now let's create the 𖣯 game board using a tilemap!

---

- :tree: From the ``||scene:Scene||`` Toolbox category, drag a ``||scene:set tilemap to tilemap||`` block into the end of the ``||loops(noclick):on start||`` container

- :mouse pointer: Click the grey box to open the **Tilemap Editor**

- :mouse pointer: In the bottom left corner, set the tilemap size to **10 columns** wide by **7 rows** tall and then click **Done**

- :lightbulb: **Don't draw anything** on the tilemap yet — we'll fill it with code!

~hint What's a tilemap? 💡

---

A 📱 tilemap is a grid where each cell can hold a 16x16 pixel tile image. It's perfect for puzzle games like this one!

Our game board will be 10 tiles wide × 7 tiles tall.

hint~

```blocks
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
// @highlight
tiles.setCurrentTilemap(tilemap`level1`)
```

## 💎 Create an array of gems

Let's add an array of 🟩🟠🔷 symbols or shiny gems to populate our game board.

- :arrays: Under the **Advanced** section of the Toolbox, open the ``||arrays:Arrays||`` category and drag a ``||variables:set symbols to array of||`` block and drop it at the end of the ``||loops(noclick):on start||`` block

- :mouse pointer: Click on the empty grey square tiles in the ``||arrays(noclick):array||`` block and select a different gem for each one

~hint What's an array? 💡

---

An array is a collection of values of the same type. You can think of an array like a row of mailboxes 📫📫📫 that each holds a different piece of ✉️ mail.

hint~

```blockconfig.local
let symbols: Image[] = []
symbols = [
assets.tile`Gem1`,
assets.tile`Gem2`,
assets.tile`Gem3`,
assets.tile`Gem4`,
assets.tile`Gem5`,
assets.tile`Gem6`,
]
```

```blocks
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
// @highlight
let symbols = [assets.tile`Gem1`, assets.tile`Gem2`, assets.tile`Gem3`, assets.tile`Gem4`, assets.tile`Gem5`, assets.tile`Gem6`]
```

## 📥 Create a function to fill empty tiles

Let's make a function that fills all empty spaces on the board with random symbols! 🌈➡️⬜

---

- :function: Click ``||functions:Functions||`` in the **Advanced** section of the Toolbox and then click the **Make a Function...** button

- :mouse pointer: Name the function **_fillEmptyTiles_** and click **Done**

This creates a new function block in your workspace.

```blocks
function fillEmptyTiles () {
	
}
```

## 🔄 Add a loop to find empty tiles

Now let's add code to find all the ⬜ empty spaces on the game board.

---

- :loops: From ``||loops:Loops||``, drag ``||loops:for element value of list||`` into the ``||functions(noclick):fillEmptyTiles||`` function

- :mouse pointer: Click on the ``||variables(noclick):value||`` drop down and select **Rename variable...** 

- :mouse pointer: Type in **_emptyTile_** as the variable name and then click Ok

- :tree: From the ``||scene:Scene||`` Toolbox category, drag an ``||scene:array of all [tile] locations||`` block and drop it in the ``||loops(noclick):for element||`` block replacing the ``||variables(noclick):list||`` variable

~hint What does this do? 💡

---

This loop finds every empty (transparent) tile location on the game board. We'll then fill each one with a gem!

hint~

```blocks
function fillEmptyTiles () {
    // @highlight
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
    }
}
```

## Fill empty tiles with random symbols

Inside the loop, let's place a 🎲 random gem from our symbols array at each empty location.

---

- :tree: From the ``||scene:Scene||`` category, drag a ``||scene:set [get random value] at emptyTile||`` block inside the ``||loops(noclick):for element||`` loop

```blockconfig.local
let symbols: Image[] = []
tiles.setTileAt(emptyTile, symbols._pickRandom())
```

```blocks
let symbols: Image[] = []
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        // @highlight
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
```

## 📢 Call the fill function

Now let's call our function to 📲 fill the board when the game starts!

---

- :function: From the ``||functions:Functions||`` Toolbox category, drag a ``||functions:call fillEmptyTiles||`` block into the end of the ``||loops(noclick):on start||`` block

```blocks
// @hide
function fillEmptyTiles () {}

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
// @highlight
fillEmptyTiles()
```

## 📶 Add the score

Let's start the score at 0. We'll add a point for each match we find.

---

- :id card: From ``||info:Info||``, drag the ``||info:set score to 0||`` block into the end of the ``||loops(noclick):on start||`` container.

```blocks
// @hide
function fillEmptyTiles () {}

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
// @highlight
info.setScore(0)
```

## Test your game!

- :binoculars: Look at the game window.

You should see:
- ✅ A grid filled with random colorful symbols
- ✅ A cursor (black square outline) in the middle
- ✅ A score displaying 0 in the top right corner

If something doesn't look right, go back and check your code!

Click **Done** to move on to the next tutorials to learn how to 🕹️ move your cursor around the screen and ↔️ swap tiles.

```blocks
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
scene.setBackgroundColor(13)
let cursor: Sprite = null
cursor.setPosition(80, 56)
function fillEmptyTiles () {}
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