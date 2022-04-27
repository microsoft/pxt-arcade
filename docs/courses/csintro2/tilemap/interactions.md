# Activity: Interactions

Tilemaps can be used for more than just a nice way to create a background. In this activity, students will implement their own game of 'mini golf' using the darts extension, similar to the game shown below

![Mini golf example game](/static/courses/csintro2/tilemap/mini-golf.gif)

In this activity, students will use:

* ``||scene:set tile to||``
* ``||scene:on sprite of kind hits wall||``
* ``||scene:set tilemap to||``

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

## Example #1: Creating a course

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/ZPMexvC1BfY)

1. Make a new project (name it "Golf Course")
2. Review the code below
3. Import the darts extension
4. Copy the code below into your project and run it

```blocks
namespace SpriteKind {
    export const GolfBall = SpriteKind.create();
    export const Hole = SpriteKind.create();
}
let golfBall: Dart = null
scene.setTileMap(img`
e e e e e e e e e e
e . . . . . . . . e
e . . . . . . . . e
e . . . . . . . . e
e . . . . . . . . e
e . . . . . e . . e
e . . . . . e . . e
e e e e e e e e e e
`)
scene.setBackgroundColor(7)
golfBall = darts.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . 1 1 1 . . . . . .
. . . . . . 1 1 d 1 1 . . . . .
. . . . . . 1 1 1 1 1 . . . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . . . 1 1 . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.GolfBall, 25, 105)
golfBall.setTrace()
golfBall.controlWithArrowKeys()
```

### ~hint

Be sure to place the ``||scene:set background color to||`` block **before** any ``||darts:dart||`` blocks in the ``||loops:on start||``, as that will take control of the background.

### ~

## Student Task #1: Implement mini golf

1. Start with the code from example #1
2. Add an ``||controller:on A button pressed||`` event that ``||darts:throws||`` the golfBall, and increases score by 1
3. Add a ``||scene:set tile to||`` block so that the brown tiles are walls
4. Create a sprite that is a flag, and place it at `x=120` and `y=105` - this will position it right behind the wall
5. Add an ``||sprites:overlap||`` event between the ball and the flag that ``||game:splashes||`` a congratulation message containing their score, then causes a ``||game:game over||``

Play around with the game for a bit - what happens when the ball hits a wall? Try and land on top of the wall that is blocking the flag. What happens?

## Golf Ball Momentum

The golf ball will keep on moving! For example, if the wall is below the ball, it will still move horizontally and maintain it's speed.

When the ball hits a wall, it should stop, so that it can be hit again.

This behavior can be fixed using the ``||scene:on sprite of kind hits wall||`` block, which is an event that occurs whenever the given sprite touches the given wall tile.

## Student Task #2: Make it stop

1. Start with the code from task #1
2. Create an ``||scene:on sprite of kind hits wall||`` between the golf ball (kind ``||sprites:GolfBall||``) and the brown wall
3. Inside of that event, use the ``||darts:stop golfBall||`` to force the golf ball to stop in it's current position
4. Verify that the golf ball now correctly stops when it touches a wall

## Student Task #3: Make a real course

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/VBzh-vZeWKs)

Now that we have a functioning game of mini golf, we should make an interesting course for players to try to make it through. To do so, we will need to create a larger tilemap.

1. Start with the code from task #2
2. Remove the walls that are currently on the right side of the image
3. Open the image from the ``||scene:set tilemap to||`` block, increase the size of the image to `64x8`, and add brown walls to create your own unique mini golf course
4. Move the flag's ``||sprites:x||`` coordinate to `960` - this will be closer to the end of this new tilemap
5. Use the ``||scene:camera follow sprite||`` and ``||darts:myDart sprite||`` blocks to make it so the camera follows the golf ball as it moves across the screen
6. **Challenge**: add ``||scene:set tile||`` blocks to add new types of tiles that act as decorations (wall off) or obstacles (wall on)

```package
darts
```

## What did we learn?

1. Describe how a tile in a tilemap differs from a pixel in a sprite image.
2. Make a hypothesis of how we would make ``||darts:dart||`` objects (like the golf ball) bounce off of tilemap walls.

### [Teacher Material](/courses/csintro2/about/teachers)
