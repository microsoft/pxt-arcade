# Maze

### ~button /#tutorial:/tutorials/maze

Try this tutorial!

### ~

## {Introduction @unplugged}

Welcome to @boardname@! Let's get started by creating a game where your player tries to get out of a maze while there's still time!

![Maze game playing](/static/tutorials/maze/maze-game.gif)

## {Step 1}

The first thing we'll do is make our player. Find the ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

```blocks
let mySprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Step 2 @fullscreen}

Click on the grey box in ``||variables(sprites):set mySprite to||`` and draw your player's image. It can be anything, solid block or a figure.

![Draw a figure for the sprite](/static/tutorials/maze/draw-sprite-figure.gif)

```blocks
let mySprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
```

## {Step 3}

Now, let's make our sprite figure move with the controller arrow keys. Get a ``||controller:move mySprite with buttons||`` from ``||controller:Controller||`` and put it under ``||variables(sprites):set mySprite to||``.

```blocks
let mySprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
```

## {Step 4}

Next, create a tilemap that will serve as your maze. Pull ``||scene:set tilemap to||`` from ``||scene:Scene||`` into ``||loops:on start||``.
Click on the gray box to open a tilemap, select tiles, and use the tools to draw your own maze.
Be sure to leave a path from the start to the end, so the user can escape.
Leave an empty tile in both the start and end location.

![Draw the maze tilemap](/static/tutorials/maze/draw-maze.gif)

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
```

## {Step 5}

Fill in the two empty spaces in the tilemap that you left in the previous step with two new tiles:
one that looks like something you can escape with (for example, a door or stairs),
and the other with something to mark the starting location (for example, a ladder).
Make sure these tiles aren't used anywhere else in the tilemap.

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
```

## {Step 6}

Find ``||scene:place mySprite on top of random||`` in ``||scene:Scene||``,
and drag it into the ``||loops:on start||`` after ``||scene:set tilemap to||``.
This will move the character you created to be on top of one of the selected tiles;
click on the checkered tile and select the tile you chose as the starting point for the player.

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
```

## {Step 7}

The player is now off the screen, which makes the game a bit too hard;
find ``||scene:camera follow sprite mySprite||`` in ``||scene:Scene||``,
and drag it to the end of the ``||loops:on start||``.
This will make the camera follow the players character as it moves around the screen.

```blocks
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
```

## {Step 8}

Find ``||scene:on sprite of kind player overlaps at location||`` in ``||scene:Scene||``.
This event will occur whenever the player is on top of a tile of the given type;
click the checkered box and change it to be the tile selected for the end of the maze.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {

})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
```

## {Step 9}

Find ``||game:game over lose||`` in ``||game:Game||``, and drag it into the ``||scene:on sprite of kind player overlaps at location||``.
Click ``LOSE`` to change it to ``WIN``.
This will make it so the player wins when they touch the exit.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
```

## {Step 10}

Find ``||info:start countdown 10 (s)||`` in ``||info:Info||``, and drag it into the ``||loops:on start||``.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
```

## {Step 11 @unplugged}

Now you have a game with a target, and a time crunch... but the player can move through all the walls!
Reopen the tilemap editor,
and use the ``Draw walls`` tool to draw walls over all the things that should block the player in the tilemap,
so they can't move through them.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
```

## {Complete}

Congratulations, your maze game is complete! You can now play your first game. See if you can escape the maze.

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcwMDBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjAwMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "myTiles.transparency16"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcxMzBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjFjMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "sprites.dungeon.stairLadder"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```