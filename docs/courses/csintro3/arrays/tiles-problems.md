# Problem Set: Tiles

This section contains a number of selected problems for the Tiles section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

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

## Problem #1: Road Building

Create a small, rectangular road with the ``||scene:tilemap||`` below.
This will require six different colors of tiles: one for each **corner** of the road,
and one for each **direction** of the road (that is, horizontal and vertical segment).

```typescript
scene.setTileMap(img`
    . . . . . . . . . .
    . a 7 7 7 7 7 7 b .
    . 6 . . . . . . 6 .
    . 6 . . . . . . 6 .
    . 6 . . . . . . 6 .
    . 6 . . . . . . 6 .
    . c 7 7 7 7 7 7 d .
    . . . . . . . . . .
`);
```

## Problem #2: Forest Development

Create a ``||scene:tilemap||`` that represents the paths in a forest -
include tiles that look like grass, flowers, and dirt paths.

Once your ``||scene:tilemap||`` has been created, create three sprites that
represent **trees**. Use ``||scene:scene.getTile||`` and ``||scene:place||``
to place the trees on the following ``||scene:Tiles||``:

| Column    | Row   |
| :-------- | :---: |
| 2         | 3     |
| 6         | 6     |
| 7         | 2     |

Create two sprites that represent **cherries**. Place these cherries on the
following ``||scene:Tiles||``:

| Column    | Row   |
| :-------- | :---: |
| 1         | 1     |
| 5         | 4     |


## Problem #3: Hold the Wall

In the snippet below, there is a wall (of ``||scene:Wall||``s) on the right
side of the ``||scene:tilemap||``.

```typescript
scene.setTileMap(img`
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
    . . . . . . . . d .
`);
scene.setTile(13, img`
    f e e e e e e e . . . . . . . .
    e e e e e e e e . . . . . . . .
    e e e e d e e e . . . . . . . .
    f e e e d e e e . . . . . . . .
    e e e e d e e e . . . . . . . .
    e e e e d e e e . . . . . . . .
    f e e e e e e e . . . . . . . .
    e d e e e e e e . . . . . . . .
    e d e e e e e e . . . . . . . .
    f d e e e e e e . . . . . . . .
    e d e e e e e e . . . . . . . .
    e d e e e d e e . . . . . . . .
    f e e e e d e e . . . . . . . .
    e e e e e d e e . . . . . . . .
    f e e e e e e e . . . . . . . .
    f e e e e e e e . . . . . . . .
`, true);
```

Create a scene of enemies storming the ``||scene:walls||`` (and failing).
To do this, you should do the following:

* Create ``||sprites:Sprites||`` in an ``||game:on update interval||`` event
* Set each of these ``||sprites:Sprites||`` to start in a ``||math:random||``
position on the **left** side of the screen, and move to the **right**
* Create an ``||game:on sprite of kind hits wall||`` event between the
``||sprites:Sprites||`` in the ``||game:on update interval||`` event and the
``||scene:Wall||`` in the ``||scene:tilemap||``, that ``||sprites:destroy||``s
the given ``||sprites:Sprite||``

## Problem #4: Candy Cornucopia

The ``||scene:tilemap||`` below is the start of a "candy cornucopia";
it's up to you to fill it!

```typescript
scene.setTileMap(img`
    d d d d d d d d d d
    e d d 9 b 9 d 2 e d
    d 2 d d d d b d d d
    d e d 2 d b 9 d d d
    d d d d e d d d 2 d
    d b d b d d d 2 e d
    d d 9 d 9 d e d d d
    d d d d d d d d d d
`);
```

Use ``||sprites:array of all tiles||`` to fill each of the given types of
``||scene:Tiles||`` with the type of candy or sweet listed below!

| Tile Type         | Candy or Sweet    |
| :---------------- | :---------------: |
| Brown (``0xE``)   | Cake              |
| Red (``0x2``)     | Strawberry        |
| Purple (``0xB``)  | Ice Cream         |
| Blue (``0x9``)    | Donut             |

## Problem #5: Fire Hazard

You've decided to add a fire hazard to your game;
fire will be projected from the floor,
and the player needs avoid being hit by it.

To implement this behavior, start with the code snippet below.

```typescript
namespace SpriteKind {
    export const Flame = SpriteKind.create();
}

let fire: Image = img`
    . 2 . . . . . . . . . . . . . .
    4 2 . . 2 . . . . 2 . . . . . .
    4 2 . . 2 . . 4 4 . . 4 4 2 . .
    . 4 4 4 . . 4 4 4 . . 4 4 4 . .
    4 4 4 4 . 4 4 2 4 4 4 2 4 4 . .
    4 4 4 4 4 4 2 2 4 2 2 2 4 4 . .
    . 4 4 4 2 2 2 2 2 5 2 2 4 4 . .
    . 4 4 2 2 2 2 2 5 5 2 2 2 4 . .
    4 4 4 2 2 2 2 5 5 5 2 2 2 4 . .
    4 4 4 2 2 5 5 5 5 2 2 2 4 4 . .
    . 4 4 2 5 5 5 2 2 2 2 4 4 4 . .
    . 4 4 2 2 2 2 2 2 2 4 4 4 4 . .
    . 4 4 4 2 2 2 2 2 4 4 4 4 4 . .
    . . 4 4 4 2 2 4 4 4 4 4 4 . . .
    . . 4 4 4 4 4 4 4 4 4 . . . . .
    . . . . 4 4 4 4 4 . . . . . . .
`

scene.setTileMap(img`
    1 1 1 1 1 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 f 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1
`);

forever(function () {

});
```

This contains the three things you need to get started:
an ``||images:image||`` of fire, a ``||scene:tilemap||`` with a row
of black tiles set for the trap, and a ``||loops:forever||`` loop.

The ``||loops:forever||`` at the end will run in the background, forever.
This is where the trap will be implemented.

In ``||loops:forever||``, use ``||scene:scene.getTilesByType||`` to obtain
an array of all the black ``||scene:tiles||``.
Iterate over each of these in a loop.
In this loop,

* Create a ``||sprites:Sprite||`` with an image of ``||variables:fire||``
* Set the ``||sprites:Sprite||``'s ``||sprites:lifespan||`` property to 1000 ms
* Place the ``||sprites:Sprite||`` on top of the current ``||scene:Tile||``
* ``||loops:pause||`` for 250 ms

**After** the loop, ``||loops:pause||`` for another 750 ms,
to let most of the fire go away.
