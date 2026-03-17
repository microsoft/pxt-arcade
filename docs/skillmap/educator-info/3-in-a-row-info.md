# About 3 in a Row

**A page for Educators & Parents**

The **3 in a Row** skillmap introduces intermediate game design and computer science concepts through the creation of a classic match-3 puzzle game.

In this set of activities, students will create a puzzle game where they swap tiles to match 3 or more of the same symbol in a row using MakeCode Arcade. This map is intended for students who have some familiarity with MakeCode and are ready to explore more advanced concepts like functions, arrays, and nested loops.

Designed for students between the ages of 11 & 14, this experience contains a total of 3 tutorials (approximating 45-60 minutes of instruction). At the end of this learning path, students receive a certificate of completion and a badge.

|                 | Minutes* | Key Concepts |
| --------------- | -------- | ------------ |
| **Session 1** | **45-60** |  |
| 3 in a Row - Part 1 | 15 | sprites, tilemaps, arrays, functions |
| 3 in a Row - Part 2 | 20 | movement, nested loops, functions, conditionals |
| 3 in a Row - Part 3 | 15 | variables, tile locations, game logic |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-acquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing **3 in a Row**, students will have gained exposure to multiple intermediate arcade game concepts using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- **Functions**: Creating and calling reusable blocks of code
- **Arrays**: Storing and accessing collections of data (gem symbols)
- **Nested Loops**: Using loops within loops to iterate through multiple data sets
- **Boolean Variables**: Tracking true/false states for game logic
- **Conditionals**: Making decisions based on game state
- **Events**: Responding to user input (button presses)
- **Variables**: Storing and manipulating data (tile locations, swap images)

#### Game Design Concepts

- **Tilemaps**: Using grid-based game boards
- **Sprites**: Creating visual game objects (cursor)
- **Movement**: Grid-based movement with precise pixel positioning
- **Pattern Matching**: Detecting matches in rows and columns
- **Game Score**: Tracking and displaying player points
- **Win/Loss Criteria**: Ending the game based on player performance
- **Sound Effects**: Adding audio feedback for matches
- **Visual Effects**: Using particle effects to celebrate matches

### Tutorials

Students will progressively build their puzzle game by advancing through 3 tutorials in the skillmap. They will start with a basic game board and cursor, add match detection logic, and finally implement the tile-swapping mechanic that brings the game to life.

#### Part 1

| Activity | 3 in a Row - Part 1 (15 min) |
|---|---|
| ![Part 1 thumbnail](/static/skillmap/3-in-a-row/3-in-a-row1.png) | Set up the tilemap game board, create a cursor sprite, build an array of gem symbols, and create a function to fill empty tiles with random gems. |
| Blocks used | ``[scene.setBackgroundColor(13)]``<br/>``[let cursor = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[cursor.setPosition(80, 56)]``<br/>``[tiles.setCurrentTilemap(tilemap`level1`)]``<br/>``[let symbols = [assets.tile`Gem1`, assets.tile`Gem2`]]``<br/>``[function fillEmptyTiles () {}]``<br/>``[for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {}]``<br/>``[tiles.setTileAt(emptyTile, symbols._pickRandom())]``<br/>``[info.setScore(0)]`` |
| Solution option | [3 in a Row - Part 1 Project](https://makecode.com/_fhYPxPb9j7K9) |

#### Part 2

| Activity | 3 in a Row - Part 2 (20 min) |
|---|---|
| ![Part 2 thumbnail](/static/skillmap/3-in-a-row/3-in-a-row2.png) | Add cursor movement with arrow keys, create a function to scan for and clear 3-in-a-row matches using the Tile Scanner extension, add sound effects and visual feedback. |
| Blocks used | ``[controller.up.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[cursor.y += -16]``<br/>``[function clearMatches () {}]``<br/>``[let cleared = false]``<br/>``[for (let gem of symbols) {}]``<br/>``[for (let location of tileScanner.scanForLines()) {}]``<br/>``[tileScanner.setTileAtLocations(location, assets.tile`transparency16`)]``<br/>``[cursor.startEffect(effects.confetti, 500)]``<br/>``[music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)]``<br/>``[info.changeScoreBy(1)]``<br/>``[if (!(cleared)) { game.gameOver(false) }]`` |
| Solution option | [3 in a Row - Part 2 Project](https://makecode.com/_9ocWr34CCciR) |

#### Part 3

| Activity | 3 in a Row - Part 3 (15 min) |
|---|---|
| ![Part 3 thumbnail](/static/skillmap/3-in-a-row/3-in-a-row3.png) | Create tile-swapping logic using the A button, get tile locations, save and swap tile images, and call the match-checking function after each swap. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[locationRight = cursor.tilemapLocation()]``<br/>``[locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)]``<br/>``[swapImage = tiles.tileImageAtLocation(locationRight)]``<br/>``[tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))]``<br/>``[tiles.setTileAt(locationLeft, swapImage)]``<br/>``[clearMatches()]`` |
| Solution option | [3 in a Row - Part 3 Project](https://makecode.com/_AreWAHeJFUxt) |

### Game Modification Ideas

After students complete the last tutorial, on the skillmap page they can click **"Save To My Projects"**, which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- **Add a timer**: Create extra pressure by adding a countdown timer
- **Add background music**: Make the game more engaging with ambient music
- **Create special power-up gems**: Add gems worth bonus points or with special abilities
- **Implement chain reactions**: When new tiles fall and create matches, trigger additional clears
- **Add vertical swapping**: Create a way to rotate the cursor for vertical swaps
- **Add animations**: Animate the gems when they appear or are cleared
- **Allow multiple non-matching swaps**: Give players a life bar that decreases with bad swaps
- **Design new gem artwork**: Replace the default gems with custom designs

### What's Next?

After completing 3 in a Row, students can continue their MakeCode Arcade journey with these activities:

* [Jungle Jump Platformer](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle) - Create a platformer game with jumping and obstacle mechanics
* [Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space) - Build a space-themed adventure game
* [Monster Racer](https://arcade.makecode.com/--skillmap#docs:/skillmap/racer) - Design a racing game with monster trucks

```package
tileScanner=github:riknoll/arcade-tile-scanner
```
