# Problem Set: Tilemaps

This section contains a number of selected problems for the Tilemaps section.

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

## Problem #1: Say Hi!

Using only ``||scene:scene.setTileMap||``, create an **8 x 8** ``||scene:tilemap||``
that looks like it is saying "Hi!". Make the "H" **red**,
the "i" **blue**, and the "!" **green**.

## Problem #2: Create a Garden

Create an **8 x 8** garden like the example below.

![Example Garden](/static/courses/csintro3/structure/example-garden.png)

Set at least **three** of the different color ``||scene:tiles||``
to have a custom image - either a flower that you drew yourself,
or one of the types of flowers or grass included in the gallery.

## Problem #3: Build a Road

Create a **16 x 16** with a ``||scene:tilemap||`` of a race track for cars.
Use at least **three** different types of ``||scene:tiles||`` for roads.

Create a ``||sprites:Sprite||`` with an ``||images:image||`` of a car.
Make it move with the ``||controller:controller||``,
and make the ``||scene:camera follow||`` the ``||sprites:Sprite||``.

The ``||images:images||`` of a race track can be found at under
``||sprites:sprites.vehicle||``, and all start with ``||sprites:road||``;
for example, ``||sprites:sprites.vehicle.roadIntersection1||``.
Make any ``||scene:tiles||`` on the map that are **not** roads into
``||scene:Walls||``, so the cars cannot drive on them.

## Problem #4: Build a Maze

Create a **16 x 16** maze using the ``||scene:tilemap||`` like the example below.

![Example Maze](/static/courses/csintro3/structure/example-maze.png)

Create a ``||sprites:Sprite||`` for the player,
that moves with the ``||controller:controller||``.
Make the ``||scene:camera follow||`` the ``||sprites:Sprite||``.
Set the player to spawn in the **top left** corner of the screen.

Set the tile for the walls in your maze (in the example above, the black tiles)
to be ``||scene:Walls||`` so that the players cannot cross them.
