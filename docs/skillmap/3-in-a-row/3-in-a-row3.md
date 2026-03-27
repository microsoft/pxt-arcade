# 3 in a Row - Part 3

## 👀 Review your code

- :computer: In the 1st tutorial we set up our **tilemap** game board and filled it with 💎 **random symbols**.

- :computer: In the 2nd tutorial we added the ability to 🕹️ **move the cursor** around the screen and created a function to 🔎 **scan for and clear** 3-in-a-row matching tiles.

- :computer: In this last tutorial we will add the logic to ↔️ **swap tiles** in the cursor.

Your code from the previous activities is already in the workspace.

Take a moment to review what this code does before moving on to the next step.

If your code isn't working, you can select **Replace my code** below to use some default starter code.

## Create the A button swap

Now for the last part of our game, let's make the A button swap tiles!

---

- :game: From ``||controller:Controller||``, drag a ``||controller:on A button pressed||`` block into an empty area of the Workspace.

```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## Create variables for swapping

We need to create a few different 🔤 variables to keep track of the tiles we're swapping.

---

- :variables: In the ``||variables:Variables||`` Toolbox, click the **Make a Variable...** button three times to create 3 different variables named: **locationRight**, **locationLeft**, and **swapImage**.

``||variables(noclick):locationRight||`` - will hold the right tile in the cursor<br/>
``||variables(noclick):locationLeft||`` - will hold the left tile in the cursor<br/>
``||variables(noclick):swapImage||`` - is temporary storage for swapping tile images

- :variables: And now from the ``||variables:Variables||`` Toolbox, drag three of these ``||variables:set variable||`` blocks out into the ``||controller(noclick):on A button pressed||`` block, making sure to select the variable names as **locationRight**, **locationLeft** and **swapImage**

```blocks
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = 0
    locationLeft = 0
    swapImage = 0
})
```

## Get the cursor's 👉 right tile location

The tile that is under the center of a sprite is considered the sprite’s tilemap 📍 location. In this case, the cursor's location is going to be on the right tile.

---

- :tree: From ``||scene:Scene||``, drag the ``||scene:tilemap location of cursor||`` block into the ``||variables(noclick):set locationRight||`` block replacing **0**

```blockconfig.local
let cursor: Sprite = null
cursor.tilemapLocation()
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    locationRight = cursor.tilemapLocation()
    locationLeft = 0
    swapImage = 0
})
```

## Get the cursor's 👈 left tile location

Now let's find the tile that's on the left side in the cursor.

---

- :tree: From ``||scene:Scene||``, drag the ``||scene:tilemap location left of locationRight||`` block into the ``||variables(noclick):set locationLeft||`` block replacing **0**

This gets the location one tile to the left!

```blockconfig.local
let locationRight: tiles.Location = null
locationRight.getNeighboringLocation(CollisionDirection.Left)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    // @highlight
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = 0
})
```

## Save the right tile's image

Now that we have both the right and left tile cursor locations, before swapping them, we need to save one of the tile 🖼️ images temporarily.

---

- :tree: From the ``||scene:Scene||`` Toolbox, drag a ``||scene:tile image at locationRight||`` block and drop it into the ``||variables(noclick):swapImage||`` block replacing the **0**

```blockconfig.local
tiles.tileImageAtLocation(locationRight)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    // @highlight
    swapImage = tiles.tileImageAtLocation(locationRight)
})
```

## Perform the swap!

Now let's actually ↔️ swap the two tiles!

---

- :tree: From ``||scene:Scene||``, drag the ``||scene:set tile image at locationLeft at locationRight||`` block out and drop at the end of the ``||controller(noclick):on A button pressed||`` block

This puts the Left tile image in the Right tile location!

```blockconfig.local
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    // @highlight
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
})
```

## Complete the swap

Now we need to put the temporarily saved right tile 🖼️ image in the 👈 left position!

---

- :tree: From ``||scene:Scene||``, drag the ``||scene:set swapImage at locationLeft||`` block out and drop at the end of the ``||controller(noclick):on A button pressed||`` block

Now both tiles have traded places!

```blockconfig.local
let locationLeft: tiles.Location = null
let swapImage: Image = null
tiles.setTileAt(locationLeft, swapImage)
```

```blocks
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
    // @highlight
    tiles.setTileAt(locationLeft, swapImage)
})
```

## ✅ Check for matches after swapping

After each swap, this is where we call our **clearMatches** function to check if it created any matches on our game board.

---

- :function: From ``||functions:Functions||``, drag a ``||functions:call clearMatches||`` block to the end of the ``||controller(noclick):on A button pressed||`` event

```blocks
// @hide
function clearMatches () {}
let cursor: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let swapImage: Image = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationRight = cursor.tilemapLocation()
    locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)
    swapImage = tiles.tileImageAtLocation(locationRight)
    tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))
    tiles.setTileAt(locationLeft, swapImage)
    // @highlight
    clearMatches()
})
```

## 🎉 Congratulations!

You've created a **3 in a Row** puzzle game!

---

**How to play:**
- ➡️ Use the **arrow keys** or **joystick** to move your cursor around the grid
- 🟢 Press **A** to swap the tiles under the cursor
- 3️⃣ Create matches of 3 or more identical symbols in a row (horizontally or vertically)
- ❌ If your swap doesn't create a match, the game ends

**Challenge ideas:**
- ⏱️ Add a timer for extra pressure
- 🔊 Add background music for the game
- 💎 Add special power-up gems worth more points
- 💥 Add a chain reaction when new tiles create matches
- 🔄 Create a way to rotate the cursor and do vertical swaps
- 🎞️ Add animations
- ❤️ Allow a certain number of non-matching swaps

Click **Done** to return to the skillmap. Claim your badge and share your game with others!

```template
let cleared = false
let symbols: Image[] = []
let cursor: Sprite = null
scene.setBackgroundColor(13)
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
cursor.setPosition(80, 56)
tiles.setCurrentTilemap(tilemap`level1`)
symbols = [
assets.tile`Gem1`,
assets.tile`Gem2`,
assets.tile`Gem3`,
assets.tile`Gem4`,
assets.tile`Gem5`,
assets.tile`Gem6`
]
fillEmptyTiles()
info.setScore(0)
function fillEmptyTiles () {
    for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(emptyTile, symbols._pickRandom())
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 16
})
function clearMatches () {
    cleared = false
    for (let gem of symbols) {
        for (let location of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(gem), 3)) {
            let myTilemap = 0
            tileScanner.setTileAtLocations(location, assets.tile`transparency16`)
            cursor.startEffect(effects.confetti, 500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            cleared = true
            info.changeScoreBy(1)
        }
    }
    fillEmptyTiles()
    if (!(cleared)) {
        game.gameOver(false)
    }
}
```

```blockconfig.global
function clearMatches () {}
function fillEmptyTiles () {}
cursor.startEffect(effects.confetti, 500)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
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
