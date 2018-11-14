# Activity: Tile Maps

``||scene:Tile maps||`` allow developers to easily create maps for sprites to traverse.

Well designed maps can serve as a world for the player to explore, and can be easily populated with distinct images for each tile that make the world more visually appealing.

## Concept: Creating a Tile Map

The ``||scene:scene.setTileMap||`` function is used to create a tile map.

```sig
scene.setTileMap(null);
```

```typescript
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`);
```

This function accepts an ``||images:Image||``, and initializes the ``||scene:tile map||`` based off this image.

By default, the image will be shown on the screen, with each pixel corresponding to a **16 x 16** square of the same color.

Using the ``||scene:setTile||`` function, this behavior can be changed to instead display an image in place of the color.

```sig
scene.setTile(0, null, false);
```

```typescript
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 1 . 1 . . . . 
. . . 1 . 1 . . . . 
. . . . . . . . . . 
. . 1 . . . 1 . . . 
. . . 1 1 1 . . . . 
. . . . . . . . . . 
`);
scene.setTile(1, sprites.castle.tileGrass1);
```

This function accepts an ``index`` of a color, and a **16 x 16** ``||image:Image||`` to replace the color in the ``||scene:tile map||``.

## Example 1: Beach Day

1. Review the code below
2. Identify where the ``||scene:tile map||`` is defined
3. Identify where the different colors of the ``||scene:tile map||`` are assigned a different ``||image:Image||``
4. Move the character around the screen; notice that the player cannot leave the ``||scene:tile map||``

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 d 
5 5 5 5 5 5 5 5 d 8 
5 5 5 5 5 5 5 d 8 8 
5 5 5 5 5 5 d 8 8 8 
5 5 5 5 5 d 8 8 8 8 
5 5 5 5 d 8 8 8 8 8 
5 5 5 d 8 8 8 8 8 8 
5 5 d 8 8 8 8 8 8 8 
`);
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`);
scene.setTile(13, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
5 f 5 5 5 5 5 5 5 5 5 5 5 5 8 8 
5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 
5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 9 
5 5 5 8 8 8 5 5 5 8 8 8 8 9 9 9 
5 5 8 8 8 8 8 8 8 8 8 9 9 9 6 6 
5 8 8 8 8 8 8 8 8 9 9 9 6 6 8 8 
5 8 8 8 8 8 8 9 9 9 6 6 8 8 8 8 
8 8 8 8 9 9 9 9 6 6 6 8 8 8 8 8 
8 8 8 9 9 6 8 6 6 8 8 8 8 8 8 8 
8 8 8 9 6 6 8 8 8 8 8 8 8 8 8 8 
8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
`);
scene.setTile(8, img`
8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 6 8 8 8 8 8 8 8 8 
8 8 8 9 9 6 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 6 6 8 8 8 9 8 8 8 8 8 8 8 
9 9 9 6 8 8 8 9 9 9 8 8 8 8 8 8 
9 6 6 8 8 8 9 9 6 8 8 8 8 8 8 8 
6 8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 6 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 6 8 8 8 8 8 9 9 6 8 
8 8 8 9 9 6 8 8 8 8 8 8 9 6 8 8 
8 8 8 9 6 8 8 8 8 8 8 9 6 8 8 8 
8 8 9 6 8 8 8 8 8 8 9 9 6 8 8 8 
8 8 6 8 8 8 8 8 8 8 9 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`);
```

## Student Task #1: Starter Scene

1. Create a new project. Create a new sprite, and set it to be a ``||controller:controlled sprite||``
2. Create a new ``||scene:tile map||``. Use at least **three** different colors
3. Create a design for each color used in the ``||scene:tile map||``. For at least one of the tile images, make the image something the player should **not** be able to walk on, like water or a large rock

### ~hint

Here are some examples of ``||scene:tile maps||`` for this task.

![Examples of Tile Maps](/static/courses/csintro3/structure/example-tile-maps.png)

You can try to replicate one of these, or create one entirely of your own design.

### ~

## Concept: Walls

Tiles can be set to be ``||scene:walls||``, which sprites usually won't be able to move through. This allows maps to be interactive, and set boundaries for the players to explore.

### ~hint

If you do not want a sprite to be confined to the ``||scene:tile map||`` or blocked by ``||scene:walls||``, the ``||sprites:Ghost||`` flag can be set. ``||sprites:Ghosts||`` can go through walls, and escape the ``||scene:tile map||``.

### ~

## Example #2: Town Walls

1. Review the code below
2. Identify which ``||scene:tiles||`` are ``||scene:walls||``
3. Explore the "town" by moving around the screen

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
scene.cameraFollowSprite(mySprite);
controller.controlSprite(mySprite, 100, 100);
scene.setBackgroundColor(7);
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 f 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 f 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 f 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`);
scene.setTile(15, sprites.castle.rock0, true);
scene.setTile(7, sprites.castle.tileGrass1);
```

### ~hint

Note that the ``||scene:cameraFollowSprite||`` function was used to make the camera camera follow ``||variables:mySprite||``; if you have a large ``||scene:tile map||``, you will have to modify the camera to see different parts of it.

### ~

## Student Task #2: Interactive Scene

1. Start with the code from task #1
2. In your scene, set the tile that the player should **not** be able to walk on to be a ``||scene:wall||``
3. Use ``||scene:cameraFollowSprite||`` to make the camera follow the player sprite
4. Expand the ``||scene:tile map||`` image to **16 x 16**, and fill it in to make a larger ``||scene:tile map||`` for the player to explore
5. **Challenge:** create at least **two** other types of ``||scene:Tiles||``, and use them in your ``||scene:tile map||``. Make at least one of them be a different type of ``||scene:Wall||``

## What did we learn?

1. What is the behavior of a tile if no ``||images:image||`` is set to that color?
2. How do ``||scene:tile maps||`` help make a level feel more personalized?