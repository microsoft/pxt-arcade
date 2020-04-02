# Review: Side Scroller

A "Side-scroller" is a common form of game based off the character primarily moving in the ``x`` direction, and is viewed from the side.

In this activity, you will build your own side-scrolling adventure where a car tries to escape a forest.

![Block Bouncer](/static/courses/csintro2/review/side-scroller.gif)

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

## Starter Code

Create a project with the code below - the images for the trees and car are available in the Gallery.

Make sure the tilemap you draw always has at least **two** clear tiles next to eachother in each column besides the beginning, so that the car can make it all the way through the forest.

```blocks
namespace SpriteKind {
    export const Car = SpriteKind.create();
}
let myCar: Sprite = null
myCar = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . 6 6 6 6 6 6 6 6 . . . .
. . . 6 9 6 6 6 6 6 6 c 6 . . .
. . 6 c 9 6 6 6 6 6 6 c c 6 . .
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6
. 6 6 8 b b 8 b b b 8 8 b 9 6 6
. 6 8 b b b 8 b b b b 8 6 6 6 6
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8
. 8 f f f f 8 8 8 8 f f f 8 8 8
. . f f f f f 8 8 f f f f f 8 .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Car)
scene.setTileMap(img`
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
a . . . . . . a . . . . . . . a . . . . . . . a . . . . . . . .
a . . . . . . a . . . . . . . a . . . . . . . a . . . . . . . .
a . . . . . . a . . . . . . . a . . . . . . . a . . . . . . . .
a . . a . . . . . . . a . . . . . . . a . . . . . . . a . . . .
a . . a . . . . . . . a . . . . . . . a . . . . . . . a . . . .
a . . a . . . . . . . a . . . . . . . a . . . . . . . a . . . .
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
`)
scene.setTile(10, img`
. . . . . . 6 6 6 6 . . . . . .
. . . . . c 6 7 7 6 c . . . . .
. . . . c 6 7 5 7 7 6 c . . . .
. . 6 6 c c 6 5 5 6 c c 6 6 . .
6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6
6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6
. c c c 6 6 7 6 6 5 7 6 c c 6 .
6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6
6 6 7 7 7 c c c c c c 7 7 7 6 6
6 7 7 7 6 6 c c c c 6 6 7 7 7 6
c 6 c c 6 7 6 c c 6 7 6 c c 6 c
. c c 5 5 7 6 7 7 6 7 5 5 c c .
. c 6 7 5 5 6 7 7 6 5 5 7 6 c .
. 6 6 7 7 6 6 5 5 6 6 7 7 6 6 .
. . 6 6 6 6 c 6 7 6 c 6 6 6 . .
. . . 6 6 c . 6 6 6 . c 6 . . .
`, true)
scene.getTile(1, 3).place(myCar)
```

## Student Task #1: Make the Car Move

Make ``||variables:myCar||`` move, and simulate random 'bumps' in the terrain

1. Give ``||variables:myCar||`` a velocity of 10 in the ``X`` direction
2. Give ``||variables:myCar||`` an acceleration of 3 in the ``X`` direction
3. Use ``||controller:move myCar with buttons vx 0 vy 30||`` to allow the player to move up and down
4. Create a ``||loops:forever||`` block
5. Inside the ``||loops:forever||``, make the player 'bump' up and down:
    * change ``||variables:myCar||``'s ``Y`` position by -2
    * ``||loops:pause||`` between 200 and 400 (at random) ms
    * change ``||variables:myCar||``'s ``Y`` position by 2 to 'end' the bump
    * ``||loops:pause||`` between 500 and 1000 (at random) ms

## Student Task #2: Terrain Clean Up

Make the terrain look nicer, and enjoy all of it

1. Use ``||scene:set background color to||`` to set the background color to tan or brown
2. Open the image editor for the ``||scene:tilemap||``, and fill the portions that are not trees with a tan color
3. Use ``||scene:set tile to||`` to set the tan tiles to an image of dirt from the gallery - make sure that it is **not** a ``||scene:wall||``
4. In ``||loops:on start||``, add ``||scene:camera follow sprite myCar||`` to make the camera follow ``||variables:myCar||``

## Student Task #3: Tree Crash

When the car hits a tree, it shouldn't keep accelerating: it should back up, and then continue moving.

1. Create a ``||scene:on sprite of kind Car hits wall||`` event, and select the color of the tree tile
2. Inside the ``||scene:on sprite of kind Car hits wall||`` event, set ``||variables:sprite||``'s ``vx`` to -5, and make ``||sprites:sprite||`` ``||sprites:say||`` "backing up!" for 500 ms

### ~hint

## Challenge: Winning and Losing

To add some possibility for failure (and success) to the game, we will make a horde of enemies 'chase' the car.

### Winning

1. Open the image editor for the ``||scene:tilemap||``, and fill the far right side with yellow tiles
2. Use ``||scene:set tile to||`` to set the yellow tiles to an image of a road from the gallery. Click the ``+`` and set ``||scene:wall||`` to ``on``
3. Create a ``||scene:on sprite of kind Car hits wall||`` event, and select the yellow tile
4. In this ``||scene:on sprite of kind Car hits wall||`` event, place a ``||game:game over||`` block with ``||game:win||`` set to ``true``

### Losing

1. In ``||loops:on start||``, create a variable ``||variables:column||``, and set it to 0
2. Create an ``||game:on game update every 3000 ms||`` event
3. In the ``||game:on game update every||`` event, create a ``||loops:for index from 0 to 7||`` loop
4. In the ``||loops:for index||`` loop, create a sprite named ``||variables:duck||`` of ``||sprites:kind||`` ``||sprites:Enemy||``. Make the duck get destroyed when it goes off the screen using ``||sprites:set duck auto destroy on||``
5. Get ``||variables:set myTile to||`` from ``||scene:Scene||``. Set ``||scene:col||`` to ``||variables:column||``, and ``||scene:row||`` to ``||variables:index||``
6. Get ``||scene:on top of myTile place mySprite||``, and replace ``||variables:myTile||`` with ``||variables:duck||``
7. After the loop, ``||variables:change column by 1||``
8. Create an ``||sprites:on overlap||`` event between ``||sprites:Car||`` and ``||sprites:Enemy||``, and make it cause a ``||game:game over||`` with ``||game:win||`` set to ``false``

### ~
