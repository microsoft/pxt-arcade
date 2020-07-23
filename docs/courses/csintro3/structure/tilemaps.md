# Activity: Tilemaps

``||scene:Tilemaps||`` allow developers to easily create maps for sprites to traverse.

Well designed maps can serve as a world for the player to explore,
and can be easily populated with distinct images for each tile that
make the world more visually appealing.

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

## Concept: Creating a Tilemap

The ``||scene:scene.setTileMap||`` function is used to create a tilemap.

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

This function accepts an ``||images:Image||``,
and initializes the ``||scene:tilemap||`` based off this image.

By default, the image will be shown on the screen,
with each pixel corresponding to a **16 x 16** square of the same color.

Using the ``||scene:setTile||`` function,
this behavior can be changed to instead display an image in place of the color.

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
scene.setTile(1, sprites.castle.tileGrass1, false);
```

This function accepts an ``index`` of a color,
and a **16 x 16** ``||images:Image||`` to replace the color in the ``||scene:tilemap||``.

![Image of the tilemap created in the previous snippet](/static/courses/csintro3/structure/first-tilemap.png)

## Example 1: Beach Day

1. Review the code below
2. Identify where the ``||scene:tilemap||`` is defined
3. Identify where the different colors of the ``||scene:tilemap||``
are assigned a different ``||images:Image||``
4. Move the character around the screen;
notice that the player cannot leave the ``||scene:tilemap||``

```typescript
let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.moveSprite(mySprite, 100, 100);
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
`, false);
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
`, false);
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
`, false);
```

## Student Task #1: Starter Scene

1. Create a new project. Create a new sprite,
and set it to be a ``||controller:controlled sprite||``
2. Create a new ``||scene:tilemap||``.
Use at least **three** different colors
3. Create a design for each color used in the ``||scene:tilemap||``.
For at least one of the tile images,
make the image something the player should **not** be able to walk on,
like water or a large rock

### ~hint

Here are some examples of ``||scene:tilemaps||`` for this task.

![Examples of Tilemaps](/static/courses/csintro3/structure/example-tile-maps.png)

You can try to replicate one of these, or create one entirely of your own design.

### ~

## Concept: Walls

Tiles can be set to be ``||scene:walls||``,
which sprites usually won't be able to move through.
This allows maps to be interactive,
and set boundaries for the players to explore.

### ~hint

If you do not want a sprite to be confined to the ``||scene:tilemap||``
or blocked by ``||scene:walls||``, the ``||sprites:Ghost||`` flag can be set.
``||sprites:Ghosts||`` can go through walls, and escape the ``||scene:tilemap||``.

### ~

## Example #2: Town Walls

![Examples of a large tilemap](/static/courses/csintro3/structure/large-tilemap.gif)

1. Review the code below
2. Identify which ``||scene:tiles||`` are ``||scene:walls||``
3. Explore the "town" by moving around the screen

```typescript
let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
scene.cameraFollowSprite(mySprite);
controller.moveSprite(mySprite, 100, 100);
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
scene.setTile(7, sprites.castle.tileGrass1, false);
```

### ~hint

Note that the ``||scene:cameraFollowSprite||`` function was used to make
the camera follow ``||variables:mySprite||``;
if you have a large ``||scene:tilemap||``,
you will have to modify the camera to see different parts of it.

### ~

## Student Task #2: Interactive Scene

1. Start with the code from task #1
2. In your scene, set the tile that the player should **not**
be able to walk on to be a ``||scene:wall||``
3. Use ``||scene:cameraFollowSprite||`` to make the camera follow the player sprite
4. Expand the ``||scene:tilemap||`` image to **16 x 16**,
and fill it in to make a larger ``||scene:tilemap||`` for the player to explore
5. **Challenge:** create at least **two** other types of ``||scene:Tiles||``,
and use them in your ``||scene:tilemap||``.
Make at least one of them be a different type of ``||scene:Wall||``

## What did we learn?

1. What is the behavior of a tile if no ``||images:image||`` is set to that color?
2. How do ``||scene:tilemaps||`` help make a level feel more personalized?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/tilemaps-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Creating an Enemy

``||scene:Tilemaps||`` will not be used in the example case study game.
Instead, this section will include another ``||sprites:Sprite||`` that
needs to be created: an ``||sprites:Enemy||``!

Create a sprite of ``||sprites:Kind||`` ``||sprites:Enemy||``.
Set their ``||sprites:x||`` position to be the **same** as the
``||variables:player||``s ``||sprites:x||`` position, and it's
``||sprites:y||`` position to 20. Create a unique image for your new enemy.

Set the ``||variables:enemy||`` to have a ``||sprites:vy||`` of 10,
so that it moves down the screen slowly.

### Solution

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let name: string = "Captain ";
let playerName: string = game.askForString("What is your name?");

if (playerName == "myName!") {
    playerName += " 2";
}

name += playerName;

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

for (let i = 0; i < 10; i++) {
    sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    pause(250);
}

let player = sprites.create(img`
    . . . . 8 . . . .
    . . . 8 8 8 . . .
    . . . 8 1 8 . . .
    . . 2 8 1 8 2 . .
    . 2 2 8 8 8 2 2 .
    2 2 2 8 8 8 2 2 2
    . . . 5 . 5 . . .
`, SpriteKind.Player);

controller.moveSprite(player, 80, 30);
player.x = screen.width / 2;
player.y = screen.height - 20;

let enemy = sprites.create(img`
    5 5 . . . . 5 5
    7 7 7 7 7 7 7 7
    . 9 9 7 7 9 9 .
    . 7 7 7 7 7 7 .
    . . . 9 9 . . .
`, SpriteKind.Enemy);
enemy.x = player.x;
enemy.y = 20;
enemy.vy = 10;
```

### ~