# Activity: Tilemaps and arrays

Creating interactive and compelling levels relies on the proper placement of both enemies and resources. Interacting with individual tiles allows for easier and more consistent set up of levels, and provides an easy way to form multiple scenes

In this activity, students will:
* Use tilemap ``||scene:tiles||`` features
* Set up a level using the tilemap
* Create a 'trap room'
* Create a series of multiple levels

### ~hint

#### Color Coded Tilemap

This section uses the color coded tilemap in some of the examples.

These were the original style of tilemaps, that got replaced with new blocks prior to the release of arcade.
The new blocks show the tilemap in full as you draw it, allow more tiles at once, and let you set tiles as walls without changing the image.

If you open any example using the edit button, the extension will be automatically added to the project.

If you wish to use these blocks in another project, they can be added using the `color-coded-tilemap` extension.

### ~

```package
color-coded-tilemap
```

## Concept: Tiles

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-tile1)

## Example #1: Getting and Using Tiles

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Get Out Of Jail Free Button")

```blocks
let myTile: tiles.Tile = null
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myTile = scene.getTile(0, 0)
    myTile.place(mySprite)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . . . . . . . . . . . . .
. f f . . . . . . . . f f . . .
. . f . . . . . . . . f . . . .
. . f f . . . . . . f f . . . .
. . . . f f f f f f . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1
1 2 2 2 2 2 2 2 2 1
1 2 5 5 5 5 5 5 2 1
1 2 5 3 3 3 3 5 2 1
1 2 5 3 3 3 3 5 2 1
1 2 5 5 5 5 5 5 2 1
1 2 2 2 2 2 2 2 2 1
1 1 1 1 1 1 1 1 1 1
`)
scene.setTile(2, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 . . . . . . . . . . 2 2 2
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
2 2 2 . . . . . . . . . . 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
```

In this example, there are two new blocks being used: ``||scene:tile col 0 row 0||`` and ``||scene: on top of myTile place mySprite||``.

The ``||scene:tile col 0 row 0||`` block obtains the tile at the given column and row in the tilemap, starting from 0. This corresponds to the individual pixels in the map itself - opening the image editor and hovering over a pixel will show it's column and row next the dimensions, in the form `column, row`.

![Finding column and row](/static/courses/csintro2/arrays/finding-col-row.gif)

The ``||scene:on top of myTile place mySprite||`` allows for sprites to be placed centered on top of a tile. In the ``||controller:on A button pressed||`` event, this is used to teleport ``||variables:mySprite||`` out of the walls that it is trapped within.

## Student Task #1: Placing Sprites

1. Start with the code from example #1
2. Create 3 new sprites
3. Placing them in the upper right, bottom left, and bottom right corners of the screen using the ``||scene:on top of myTile place mySprite||`` block

## Example #2a: Setting Tiles

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Random Maze")

```blocks
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
scene.setTileMap(img`
    1 1 1 1 1 1 1 1 1 1
    f f f f f f f f f f
    1 1 1 1 1 1 1 1 1 1
    f f f f f f f f f f
    1 1 1 1 1 1 1 1 1 1
    1 f f f f f f f f 1
    1 1 1 f 7 7 7 f 1 1
    1 1 1 f 1 1 1 f 1 1
`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . f . . . . f . . . . . .
    . . . . . . . . . . . . . . . .
    . f f . . . . . . . . f f . . .
    . . f . . . . . . . . f . . . .
    . . f f . . . . . . f f . . . .
    . . . . f f f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(15, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 . . . . . . . . . . 2 2 2
    2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
    2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
    2 2 2 . . . . . . . . . . 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
scene.getTile(5, 0).place(mySprite)
scene.setTileAt(scene.getTile(randint(0, 9), 1), 1)
scene.setTileAt(scene.getTile(randint(0, 9), 3), 1)
if (Math.percentChance(50)) {
    scene.setTileAt(scene.getTile(3, 7), 1)
} else {
    scene.setTileAt(scene.getTile(7, 7), 1)
}
```

This example sets two random tiles from the first two rows of walls to be tiles with ``||scene:wall off||``, allowing the player to move through them freely. Because there are only two 'entrances' to the goal, it chooses between those two entrances with a fifty percent chance and removes the chosen wall.

## Example #2b: ``||scene:array of all tiles||``

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "set up")

```blocks
namespace SpriteKind {
    export const Pizza = SpriteKind.create();
}
let pizza: Sprite = null
let tile_list: tiles.Tile[] = []
let mySprite: Sprite = null
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
f f f f f f f f f f f f f f f f
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
f f f f f f f f f f f f f f f f
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 f f f f f 1 1 1 1 1 1 1 1
1 1 1 f 7 7 7 f 1 1 1 1 1 1 1 1
1 1 1 f 1 1 1 f 1 1 1 1 1 1 2 1
1 1 1 f 1 1 1 f 1 1 1 1 1 2 1 1
1 1 1 f 9 9 9 f 1 1 1 1 1 1 1 1
1 1 2 2 1 1 1 2 2 1 2 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 2 1 1 1 2 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1
1 1 2 1 1 1 1 2 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . f . . . . f . . . . . .
. . . . . . . . . . . . . . . .
. f f . . . . . . . . f f . . .
. . f . . . . . . . . f . . . .
. . f f . . . . . . f f . . . .
. . . . f f f f f f . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
scene.setTile(15, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 . . . . . . . . . . 2 2 2
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2
2 2 2 . . . . . . . . . . 2 2 2
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
scene.setTileAt(scene.getTile(randint(0, 15), 1), 1)
scene.setTileAt(scene.getTile(randint(0, 15), 3), 1)
scene.getTile(5, 0).place(mySprite)
tile_list = scene.getTilesByType(9)
for (let value of tile_list) {
    pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Pizza)
    value.place(pizza)
}
```

## Student Task #2: Spawning Enemies

1. Start with the code from example #2b
2. Add an ``||scene:array of all tiles||`` block to create an ``||arrays:array||`` of all of the red tiles
3. Use a ``||loops:for element value in||`` loop to loop through each tile and place an 'enemy' on top of each red tile
4. Add an ``||sprites:on overlap||`` event between the enemies and the player that causes the game to be over
5. **Challenge:** add another row of walls, and pick one at random to change into a non-wall tile. Are there any rows in which choosing randomly might make the game impossible, or too easy?

## Concept: Multiple Levels

Using the concepts from tasks #1 and #2, the development of multi-level games becomes much easier. This is can be done by creating an array of tilemaps and transitioning through the levels, while using the blocks discussed earlier in this activity to help set up and move through the levels.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-tile2)

## Example #3: Multiple Tilemaps

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "move levels")

```blocks
let player: Sprite = null
let nextLevel = 0
let levels: Image[] = []
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
function buildLevel() {
    if (nextLevel == levels.length) {
        game.over(true)
    }
    scene.setTileMap(levels[nextLevel])
    for (let value of scene.getTilesByType(4)) {
        value.place(player)
    }
    nextLevel += 1
}
levels = [img`
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f 4 f f f f f f 7 f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
`, img`
9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9
9 4 9 9 9 9 9 9 7 9
9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9
`, img`
3 3 3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3 3 3
3 4 3 3 3 3 3 3 7 3
3 3 3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3 3 3
`]
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 f 7 7 7 7 7 7 7 7 f f 7 7 7
7 7 7 f f 7 7 7 7 7 7 f 7 7 7 7
7 7 7 7 f f 7 7 7 7 f f 7 7 7 7
7 7 7 7 7 f f f f f f 7 7 7 7 7
7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, true)
nextLevel = 0
player = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . 2 2 2 2 2 . . . . . . . .
. . 2 2 . . . 2 2 . . . . . . .
. . 2 . 7 . 7 . 2 . . . . . . .
. . 2 2 . . . 2 2 . . . . . . .
. . . 2 2 2 2 2 . . . . . . . .
. . . . . 2 . . . . . . . . . .
. . . . . 2 . . . . . . . . . .
. . . 2 2 2 2 2 . . . . . . . .
. . . . . 2 . . . . . . . . . .
. . . . . 2 . . . . . . . . . .
. . . . 2 2 2 . . . . . . . . .
. . . 2 2 . 2 2 . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
buildLevel()
```

In this example, the ``||functions:buildLevel||`` function is used to move from one level in the ``||variables:levels||`` array to another, until the player reaches the last level and wins. The player is placed on top of the orange tile each time, and the ``||variables:nextLevel||`` counter is incremented as well, so that the levels change each time ``||functions:buildLevel||`` is called.

## Student Task #3: Fill out levels

1. Start with the code from example #3
2. For each level in the ``||variables:levels||`` array, add in obstacles to prevent the player from finishing - without making the level impossible (hint: if you want to place enemies each time a level is created, add to the ``||functions:buildLevel||`` function. If you do place enemies, remember to destroy them using ``||sprites:array of sprites of kind||`` before moving to the next level!)
3. **Challenge:** try adding new levels to the array. What happens if you don't place an orange tile? Does anything else need to be changed when a level is added?

## What did we learn?

1. How do the tilemap blocks introduced in this lesson make it easier to set up a level?
2. In this lesson, were there any times in which a level accidentally became too hard or impossible to complete? Explain how this might happen when adding randomness to levels.

### [Teacher Material](/courses/csintro2/about/teachers)