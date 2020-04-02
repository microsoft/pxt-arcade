# Activity: Level Design and the Corgio Extension

The design of the area the player is in can make or break a game. If the play area is too sparse, the game can become boring and uninteresting, and if it is overly filled with objects, the game can become to hard too hard to follow.

In this activity, students will use the ``||corgio:corgio||`` extension (based on the corgiodog breed) to make several sprite actions easy to implement. Using ``||corgio:corgio||`` allows us to focus on the design and structure of the game play without getting bogged down in some of the complex functionality that corgio handles for us.

In this activity, students will:
* Use a new extension
* Design their own levels using a ``||scene:tilemap||``
* Implement a platformer game

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

## Using the corgio package

``||corgio:corgio||`` allows you to create a sprite who can jump, run, and fall with only a few blocks in the ``||loops:on start||``.

To add the corgio extension to your project, open the extensions tab and look for "corgio" - it should be the first result.

After adding corgio to your project, a new tab titled ``||corgio:Corgio||`` will appear in the toolbox, above ``||game:Game||``; this contains the blocks necessary to create and interact with the Corgio.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-tilemap-corgio)

## Student Task #1: Making your first corgio

1. Open a new project, and import the corgio extension (name the project "myPlatformer")
2. Create your first Corgio; to do this, add the ``||variables:set myCorg to||`` block in the ``||corgio:Create||`` category to ``||loops:on start||`` block. If you press the **+** button on the corgio block, you can also set the initial location for the corgio to be created
3. Add the ``||corgio:make myCorg move left and right with arrow keys||`` block from the ``||corgio:Movement||`` category, as well as the ``||corgio:change image when myCorg is moving||``. Try adding one without the other; what changes?
4. Finally, add the ``||corgio:make myCorg jump if up arrow key is pressed||`` block; try pressing the ``||controller:up||`` button multiple times before you hit the ground, or jumping away from a wall that you are currently touching
5. **Challenge:** use the blocks in the ``||corgio:Speak||`` category to teach the corgio to say "hello", "goodbye", "jump", and "sit"; make the corgio ``||corgio:bark||`` when the user presses the ``||controller:A||`` button. Did it know any words before you taught it those four?

## Example #1: Corgio with tilemap

1. Open a new project (name it "myLevel")
2. Using the extensions menu, search for "corgio"
3. Review the example code below, and either recreate it or build something similar using a 64x8 tilemap
4. Notice how the corgio rests on top of the wall tiles, and that the jumps reset as if the corgio were touching the bottom of the screen

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player);
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
`)
scene.setTile(15, img`
e e e e e f f e e e e e e f f e
e e e e e f f e e e e e e f f e
e e e e e f f e e e e e e f f e
f f f f f f f f f f f f f f f f
f f e e e e e e e f f e e e e e
f f e e e e e e e f f e e e e e
f f e e e e e e e f f e e e e e
f f f f f f f f f f f f f f f f
e e e e e f f e e e e e e f f e
e e e e e f f e e e e e e f f e
e e e e e f f e e e e e e f f e
f f f f f f f f f f f f f f f f
f f e e e e e e e f f e e e e e
f f e e e e e e e f f e e e e e
f f e e e e e e e f f e e e e e
f f f f f f f f f f f f f f f f
`, true)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
```

## Student Task #2: Creating a side scroll game

1. Either start with the code from example #1, or add a tilemap to task #1
2. Add the ``||corgio:make camera follow myCorg left and right||`` block, so that the camera will follow the corgio while it moves across the tilemap
3. Open the tilemap in the image editor, and add a red wall that is 3 tiles tall in the middle of the map.
4. Set the red tile to be a wall, and give it a unique image

## Goals, Puzzles, and Hazards

Just having a single wall in your game does not make for a particularly challenging or fun experience; you need a bit more to make a game someone will actually want to try and play. To do so, we will introduce three things to the platformer:

1. An end goal for the player to try and get to
2. Walls that form a small puzzle to get through
3. Hazards that will add a possibility of failure to the game

## Student Task #3: Creating an Interesting Level

1. Start with the code from task #2
2. Add red walls to the map, so that they form a harder level to make your way through - try making an area that is only accessible by jumping past a series of tiles
3. Create a sprite of a new kind, and place it at the end of the level. Add an ``||sprites:overlap||`` event to congratulate the player and end the game (after a small pause) when the player reaches the sprite (note the dimensions of the tilemap when placing the sprite: each tile is 16 pixels tall and 16 pixels wide)
4. Create a green tile on the map, that is a wall (and looks ominous)
5. Add an ``||scene:on sprite of kind player hits wall||`` for your green tile, so that the game ends (and the player loses) when the tile is hit

## What did we learn?

1. How did using an extension impact the development of this platformer? What took up the most of your time while doing this activity?
2. How difficult was it to balance making your level interesting but still a game the user can complete? Were there any portions of the level that you had to change in order to make the game playable?

```package
corgio
```

### [Teacher Material](/courses/csintro2/about/teachers)
