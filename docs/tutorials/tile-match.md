# Tile Match Game
### @explicitHints true

## Introduction @showdialog

Welcome! In this tutorial, you'll create a tile-matching game similar to Candy Crush! 

Move a cursor around a grid of colored tiles, swap tiles to make matches of 3 or more in a row, and watch them disappear. Keep matching to score points!

## {Step 1}

**Create a cursor sprite**

First, we need a cursor to select tiles on the grid.

---

- :paper plane: Open ``||sprites:Sprites||`` and drag<br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
into **the empty** ``||loops(noclick):on start||`` container.

- :mouse pointer: Click on the grey box and draw a simple square outline for your cursor.

💡 _A white or yellow square outline works well to see which tile you're selecting!_

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
// @highlight
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
```

## {Step 2}

**Set up the tilemap**

Now let's create a grid for our tiles.

---

- :tree: From ``||scene:Scene||``, drag<br/>
``||scene:set tilemap to||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

- :mouse pointer: Click the grey box to open the tilemap editor.

- :mouse pointer: In the **Tiles** section, click the **+** to create a new tile. Make it a solid color (like red).

- :mouse pointer: Repeat to create 6 different colored tiles total (red, blue, green, yellow, purple, orange).

- :mouse pointer: Don't draw anything on the tilemap yet - leave it empty. We'll fill it with code!

~hint What's a tilemap? 💡

---

A tilemap is a grid made up of tiles. Each square in the grid can contain a tile image. This is perfect for our match-3 game board!

hint~

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
// @highlight
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
```

## {Step 3}

**Create a list of tile types**

We need to keep track of our colored tiles so we can randomly place them.

---

- :variables: From ``||variables:Variables||``, drag<br/>
``||variables:set [list] to array of [ ]||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

- :mouse pointer: Change the variable name from ``||variables:list||`` to ``||variables:tiles2||``.

- :mouse pointer: In the array, you'll need to add your 6 tile images. Click each empty slot and select the colored tiles you created.

~hint How do I add tiles to the array? 🔍

---

1. Click on the empty slot in the array
2. Choose **Tiles** from the dropdown
3. Select one of your colored tiles
4. Click the **+** to add more slots
5. Repeat for all 6 tiles

hint~

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let tiles2: Image[] = []
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
// @highlight
tiles2 = [
assets.tile`myTile0`,
assets.tile`myTile1`,
assets.tile`myTile2`,
assets.tile`myTile3`,
assets.tile`myTile4`,
assets.tile`myTile5`
]
```

## {Step 4}

**Create a function to fill empty tiles**

Let's create a function that fills empty spaces with random tiles.

---

- :function: From ``||functions:Functions||``, click **Make a Function** and name it ``||functions:fillEmptyTiles||``.

This creates an empty function block in your workspace.

#### ~ tutorialhint
```blocks
function fillEmptyTiles () {
	
}
```

## {Step 5}

**Fill the function with code**

Now let's add the logic to fill empty tiles.

---

- :circle: From ``||loops:Loops||``, drag a<br/>
``||loops:for element [value] of [list]||``<br/>
into the ``||functions:fillEmptyTiles||`` function.

- :tree: From ``||scene:Scene||``, drag<br/>
``||scene:get tiles by type||``<br/>
and drop it to replace ``||variables:list||`` in the for loop.

- :mouse pointer: In the ``||scene:get tiles by type||`` block, click the grey box and select a transparent/empty tile.

#### ~ tutorialhint
```blocks
function fillEmptyTiles () {
    // @highlight
    for (let value of tiles.getTilesByType(assets.tile`transparency8`)) {
    }
}
```

## {Step 6}

**Set random tiles at empty locations**

---

- :tree: Inside the for loop, drag<br/>
``||scene:set tile at [location]||``<br/>
from ``||scene:Scene||``.

- :mouse pointer: Drop ``||variables:value||`` (from the for loop) into the location slot.

- :variables: From ``||variables:Variables||``, drag the ``||variables:tiles2||`` variable and drop it in the tile slot.

- :calculator: From ``||arrays:Arrays||`` (under Advanced), drag<br/>
``||arrays:get random value from [array]||``<br/>
and wrap it around ``||variables:tiles2||``.

~hint What does this do? 💡

---

This loop goes through every empty tile location and fills it with a random tile from our ``||variables:tiles2||`` array!

hint~

#### ~ tutorialhint
```blocks
let tiles2: Image[] = []
function fillEmptyTiles () {
    for (let value of tiles.getTilesByType(assets.tile`transparency8`)) {
        // @highlight
        tiles.setTileAt(value, tiles2._pickRandom())
    }
}
```

## {Step 7}

**Call the function to fill the grid**

---

- :function: From ``||functions:Functions||``, drag<br/>
``||functions:call fillEmptyTiles||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

Now when the game starts, the grid will fill with random colored tiles!

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let tiles2: Image[] = []
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
tiles2 = [
assets.tile`myTile0`,
assets.tile`myTile1`,
assets.tile`myTile2`,
assets.tile`myTile3`,
assets.tile`myTile4`,
assets.tile`myTile5`
]
// @highlight
fillEmptyTiles()
```

## {Step 8}

**Test your game!**

---

- :binoculars: Look at the game window.

You should see a grid filled with randomly colored tiles! The cursor sprite should also be visible.

## {Step 9}

**Add cursor movement - Up**

Let's make the cursor move with the arrow keys!

---

- :game: From ``||controller:Controller||``, drag<br/>
``||controller:on [up] button [pressed]||``<br/>
into **an empty area** of the workspace.

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:change [mySprite] [y] by [0]||``<br/>
into the button event.

- :mouse pointer: Change **0** to **-8** to move up.

💡 _Moving up means decreasing the y coordinate!_

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
// @highlight
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -8
})
```

## {Step 10}

**Add remaining cursor movements**

Now add the other three directions!

---

Add three more button events for:
- **Down**: increase y by **8**
- **Left**: decrease x by **8**  
- **Right**: increase x by **8**

~hint Show me the code 🔍

---

Create separate button events for down, left, and right, changing the appropriate coordinate by 8 or -8.

hint~

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -8
})
// @highlight
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 8
})
// @highlight
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -8
})
// @highlight
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 8
})
```

## {Step 11}

**Test cursor movement!**

---

- :binoculars: Try moving your cursor around the grid with the arrow keys!

Your cursor should snap from tile to tile since we're moving 8 pixels at a time.

## {Step 12}

**Create the swap function**

Now for the fun part - swapping tiles! First, we need a function to find matches.

---

- :function: Create a new function called ``||functions:clearMatches2||``.

This will be our main matching function.

#### ~ tutorialhint
```blocks
function clearMatches2 () {
	
}
```

## {Step 13}

**Set up match detection**

We need to track if we cleared any matches.

---

- :variables: Create a new variable called ``||variables:didClear||``.

- :variables: Inside the ``||functions:clearMatches2||`` function, drag<br/>
``||variables:set [didClear] to [false]||``<br/>
at the start.

#### ~ tutorialhint
```blocks
let didClear = false
function clearMatches2 () {
    // @highlight
    didClear = false
}
```

## {Step 14}

**Loop through tile types**

We need to check each tile type for matches.

---

- :circle: From ``||loops:Loops||``, drag<br/>
``||loops:for element [value] of [list]||``<br/>
into the ``||functions:clearMatches2||`` function.

- :variables: Replace ``||variables:list||`` with ``||variables:tiles2||``.

- :mouse pointer: Change ``||variables:value||`` to ``||variables:tile||``.

#### ~ tutorialhint
```blocks
let tiles2: Image[] = []
let didClear = false
function clearMatches2 () {
    didClear = false
    // @highlight
    for (let tile of tiles2) {
    }
}
```

## {Step 15}

**Add the tile scanner**

Now we'll use a special extension to find matching tiles!

---

- :circle: Inside the for loop, add another for loop:<br/>
``||loops:for element [value] of [list]||``

- :jigsaw: From ``||tileScanner:Tile Scanner||`` (you may need to add this extension), drag<br/>
``||tileScanner:scanForLines||``<br/>
to replace ``||variables:list||``.

- :mouse pointer: In the scanner:
  - Set line type to **HorizontalOrVertical**
  - Set the condition to check if tile equals our current ``||variables:tile||``
  - Set minimum match to **3**

~hint Need the Tile Scanner extension? 🔌

---

Click on **Extensions** at the bottom of the toolbox and search for "tile scanner" to add it!

hint~

#### ~ tutorialhint
```blocks
let tiles2: Image[] = []
let didClear = false
function clearMatches2 () {
    didClear = false
    for (let tile of tiles2) {
        // @highlight
        for (let value of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(tile), 3)) {
        }
    }
}
```

## {Step 16}

**Clear matched tiles and update score**

When we find matches, let's clear them!

---

Inside the inner for loop, add these blocks:

- :jigsaw: From ``||tileScanner:Tile Scanner||``, drag<br/>
``||tileScanner:setTileAtLocations||``<br/>
Set it to place a transparent tile at the matched locations.

- :variables: Drag ``||variables:set [didClear] to [true]||``

- :id card: From ``||info:Info||``, drag<br/>
``||info:change score by [1]||``

#### ~ tutorialhint
```blocks
let tiles2: Image[] = []
let didClear = false
function clearMatches2 () {
    didClear = false
    for (let tile of tiles2) {
        for (let value of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(tile), 3)) {
            // @highlight
            tileScanner.setTileAtLocations(value, assets.tile`transparency8`)
            // @highlight
            didClear = true
            // @highlight
            info.changeScoreBy(1)
        }
    }
}
```

## {Step 17}

**Refill and check for game over**

After clearing, we need to refill and check if matches were made.

---

- :function: After the loops in ``||functions:clearMatches2||``, call<br/>
``||functions:fillEmptyTiles||``

- :random: From ``||logic:Logic||``, drag<br/>
``||logic:if <true> then||``<br/>
after the fillEmptyTiles call.

- :random: Replace ``||logic:<true>||`` with<br/>
``||logic:not <true>||``

- :variables: Inside the not block, put ``||variables:didClear||``

- :circle: From ``||game:Game||``, drag<br/>
``||game:game over <LOSE>||``<br/>
into the if block.

~hint What does this do? 💡

---

If no matches were cleared (didClear is false), the game ends! This happens when a swap doesn't create any matches.

hint~

#### ~ tutorialhint
```blocks
let didClear = false
function clearMatches2 () {
    didClear = false
    for (let tile of tiles2) {
        for (let value of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(tile), 3)) {
            tileScanner.setTileAtLocations(value, assets.tile`transparency8`)
            didClear = true
            info.changeScoreBy(1)
        }
    }
    // @highlight
    fillEmptyTiles()
    // @highlight
    if (!(didClear)) {
        // @highlight
        game.gameOver(false)
    }
}
```

## {Step 18}

**Add the swap button handler**

Now let's add the A button to swap tiles!

---

- :game: From ``||controller:Controller||``, drag<br/>
``||controller:on [A] button [pressed]||``<br/>
into an empty area.

We'll add the swap logic in the next steps!

#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```

## {Step 19}

**Get tile locations for swapping**

---

- :variables: Create three new variables:<br/>
``||variables:locationLeft||``, ``||variables:locationRight||``, and ``||variables:temp||``

Inside the A button event, add:

- :variables: Set ``||variables:locationLeft||`` to the cursor's tilemap location

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:[mySprite] tilemap location||``

- :variables: Set ``||variables:locationRight||`` to get the neighboring location to the left

- :tree: From ``||scene:Scene||``, use<br/>
``||scene:get neighboring location||``<br/>
with direction set to **Left**

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    locationLeft = mySprite.tilemapLocation()
    // @highlight
    locationRight = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
})
```

## {Step 20}

**Swap the tiles**

Now let's actually swap the two tiles!

---

- :variables: Set ``||variables:temp||`` to store the current tile's image

- :tree: Use ``||scene:tile image at location||`` to get it

- :tree: Use ``||scene:set tile at||`` to swap them:
  1. Set the current location to the left neighbor's tile
  2. Set the left neighbor to the temp tile

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let temp: Image = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationLeft = mySprite.tilemapLocation()
    locationRight = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
    // @highlight
    temp = tiles.tileImageAtLocation(locationLeft)
    // @highlight
    tiles.setTileAt(locationLeft, tiles.tileImageAtLocation(locationRight))
    // @highlight
    tiles.setTileAt(locationRight, temp)
})
```

## {Step 21}

**Check for matches after swap**

---

- :function: At the end of the A button event, call<br/>
``||functions:clearMatches2||``

This will check if the swap created any matches!

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let temp: Image = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationLeft = mySprite.tilemapLocation()
    locationRight = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
    temp = tiles.tileImageAtLocation(locationLeft)
    tiles.setTileAt(locationLeft, tiles.tileImageAtLocation(locationRight))
    tiles.setTileAt(locationRight, temp)
    // @highlight
    clearMatches2()
})
```

## {Finale}

**🎉 Congratulations! 🎉**

You've created a tile-matching game!

---

**How to play:**
- Use **arrow keys** to move the cursor
- Press **A** to swap the selected tile with the tile to its left
- Match 3 or more tiles in a row (horizontal or vertical)
- Keep making matches to score points!
- If a swap doesn't create a match, game over!

**Try these challenges:**
- Add sound effects when tiles match
- Create more tile types (8 or 10 colors)
- Add a timer to make it more challenging
- Track high scores
- Add animations when tiles disappear

When you're ready to share, click **Done**!

```blockconfig.global
let tiles2: Image[] = []
let mySprite: Sprite = null
let didClear = false
let temp: Image = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null

tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
mySprite.y += -8
mySprite.x += 8
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
tiles.getTilesByType(assets.tile`transparency8`)
tiles.setTileAt(locationLeft, tiles.tileImageAtLocation(locationRight))
tiles2._pickRandom()
mySprite.tilemapLocation()
mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(assets.tile`myTile0`), 3)
tileScanner.setTileAtLocations([], assets.tile`transparency8`)
info.changeScoreBy(1)
game.gameOver(false)
```

```ghost
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -8
})
function fillEmptyTiles () {
    for (let value of tiles.getTilesByType(assets.tile`transparency8`)) {
        tiles.setTileAt(value, tiles2._pickRandom())
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    locationLeft = mySprite.tilemapLocation()
    locationRight = mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
    temp = tiles.tileImageAtLocation(locationLeft)
    tiles.setTileAt(locationLeft, tiles.tileImageAtLocation(locationRight))
    tiles.setTileAt(locationRight, temp)
    clearMatches2()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -8
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 8
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 8
})
function clearMatches2 () {
    didClear = false
    for (let tile of tiles2) {
        for (let value of tileScanner.scanForLines(tileScanner.LineType.HorizontalOrVertical, tileScanner.tileIs(tile), 3)) {
            tileScanner.setTileAtLocations(value, assets.tile`transparency8`)
            didClear = true
            info.changeScoreBy(1)
        }
    }
    fillEmptyTiles()
    if (!(didClear)) {
        game.gameOver(false)
    }
}
let didClear = false
let temp: Image = null
let locationRight: tiles.Location = null
let locationLeft: tiles.Location = null
let tiles2: Image[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
tiles2 = [
assets.tile`myTile0`,
assets.tile`myTile1`,
assets.tile`myTile2`,
assets.tile`myTile3`,
assets.tile`myTile4`,
assets.tile`myTile5`
]
fillEmptyTiles()
```
