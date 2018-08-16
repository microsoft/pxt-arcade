# Activity: Level Design and the Corgio Extension

The design of the area the player is in can make or break a game: if it is too sparse, the game can become boring and uninteresting, whereas if it is overly filled in, the game can screech to an unbearable halt. In this activity, students will use an extension designed to make the development of 'platformer' style games easy, so that they are able to focus on the design and structure of their own levels without getting bogged down in make the gameplay fun.

In this activity, students will:
* Use a new extension
* Design their own levels using a ``||scene:tilemap||``
* Implement a platformer game

## Using the corgio package

To simplify the design process of the game, we will be using the corgio extension. This extension allows you to create a sprite who can jump, run, and fall with only a few blocks in the ``||loops:on start||``; many of these behaviors will continue to run in the background without further input.

To add the corgio extension to your project, open the extensions tab and search for "corgio" - it should be the first result. Alternatively, you can search using a direct link to the package, as follows: `github.com/jwunderl/pxt-corgio`.

After adding corgio to your project, a new tab titled ``||corgio:Corgi||`` will appear in the top of the toolbox, above ``||game:Game||``; this contains the blocks necessary to create and interact with the Corgi.

## Student Task #1: Making your first corgio

1. Open a new project, and import the corgio extension (name the project "myPlatformer")
2. Create your first Corgi; to do this, add the ``||variables:set myCorg to||`` block in the ``||corgio:Create||`` category to ``||loops:on start||`` block. If you press the **+** button on the corgi block, you can also set the initial location for the corgi to be created
3. Add the ``||corgio:make myCorg move left and right with arrow keys||`` block from the ``||corgio:Movement||`` category, as well as the ``||corgio:change image when myCorg is moving||``. Try adding one without the other; what changes?
4. Finally, add the ``||corgio:make myCorg jump if up arrow key is pressed||`` block; try pressing the ``||controller:up||`` button multiple times before you hit the ground, or jumping away from a wall that you are currently touching
5. **Challenge:** use the blocks in the ``||corgio:Speak||`` category to teach the corgio to say "hello", "goodbye", "jump", and "sit"; make the corgi ``||corgio:bark||`` when the user presses the ``||controller:A||`` button. Did it know any words before you taught it those four?

## Example #1: Corgi with tilemap

1. Open a new project (name it "myLevel")
2. Using the extensions menu, search for "corgio"
3. Review the example code below, and either recreate it or build something similar
4. Notice how the corgi rests on top of the the wall tiles, and that the jumps reset as if the corgi were touching the bottom of the screen

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = corgi.create(SpriteKind.Player);
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

## Student Task #2: Creating a side scroller

1. Start with the code from example #1
2. Add the ``||corgi:make camera follow myCorg left and right||`` block, so that the camera will follow the corgi while it moves across the tilemap
3. Open the tile map in the image editor, and add a red wall that is 3 tiles tall in the middle of the map. Make sure to set that tile to have a sprite and to be a wall
 
## Goals, Puzzles, and Hazards

Just having a single wall in your game does not make for a particularly challenging or fun experience; you need a bit more to make a game someone will actually want to try and play. To do so, we will introduce three things to the platformer: an end goal for the player to try and get to, walls that form a small puzzle to get through, and hazards that will add a possibility of failure to the game.

## Student Task #3: Creating an interesting level

1. Start with the code from task #2
2. Add red walls to the map, so that they form a harder level to make your way through - try making an area that is only accessible by jumping past a series of tiles
3. Create a sprite of a new kind, and place it at the end of the level. Add an ``||sprites:overlap||`` event to congratulate the player and end the game (after a small pause) when the player reaches the sprite

### ~hint

The tilemap we are using is 64 tiles wide and 8 tiles tall, with each tile being 16 pixels by 16 pixels

### ~

4. Create a green tile on the map, that is a wall (and looks ominous)
5. Add an ``||scene:on sprite of kind player hits wall||`` for your green tile, so that the game ends (and the player loses) when the tile is hit

## What did we learn?

1. How did using an extension impact the development of this platformer? What took up the most of your time while doing this activity?
2. How difficult was it to balance making your level interesting and completable? Where there any portions of the level that you had to change in order to make the game playable?

```package
corgio=github:jwunderl/pxt-corgio#v0.0.12
```