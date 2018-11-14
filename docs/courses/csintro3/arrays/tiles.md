# Activity: Tiles

``||scene:Tile maps||`` allow for an easy way to design and structure maps that the player can explore.

``||scene:Wall collision||`` events and ``||scene:Tiles||`` allow for further control over how developers can interact with the individual ``||scene:tiles||`` that make up the ``||scene:tile map||``.

## Concept: On Hit Tile Events

The ``||scene:scene.onHitTile||`` event occurs when a sprite of the given ``||sprites:Kind||`` collides with a given ``||scene:Tile||`` that is a ``||scene:Wall||``.

```sig
scene.onHitTile(0, 0, null);
```

## Example #1: Rock Collector

1. Review the code below
2. Identify how the ``||scene:scene.onTileHit||`` event is used to make the sprite interact with the scene
3. How does the ``||variables:tile||`` parameter in the ``||scene:on hit tile||`` event correspond to the type of tile that is used?

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 f 7 
7 7 7 f 7 7 7 f 7 7 
7 7 7 7 7 7 7 f 7 7 
7 7 7 7 7 7 7 7 7 7 
`);

scene.setBackgroundColor(6);
scene.setTile(7, sprites.castle.tileDarkGrass1);
scene.setTile(15, sprites.castle.rock0, true);

scene.onHitTile(SpriteKind.Player, 15, function (sprite: Sprite) {
    sprite.say("Ooh! A rock!", 1000);
});
```

## Student Task #1: Collect More

1. Start with the code from example #1
2. Create at least **one** more tile that is **not** a wall, and add it to the ``||scene:tile map||``
3. Create at least **one** more type of ``||scene:wall||``, and add it to the ``||scene:tile map||``. Make the image be of something that looks like a "portal"
4. Add an ``||scene:on hit tile||`` event that occurs when ``||variables:mySprite||`` hits the new type of ``||scene:wall||``
5. In the new event, set ``||variables:mySprite||`` to a random new ``||sprites:x||`` and ``||sprites:y||`` position

## Concept: Tiles

A ``||scene:tile map||`` is made up of tiles of type ``||scene:tiles.Tile||``. This type is defined in the ``||scene:tiles||`` namespace.

The ``||scene:scene.getTile||`` and ``||scene:scene.setTileAt||`` functions can be used to get and modify the individual ``||scene:Tiles||`` in the ``||scene:tile map||``.

```sig
scene.getTile(0, 0);
```

```sig
scene.setTileAt(null, 0);
```

## Example #2: Draw a Red Line

1. Review the code below
2. Identify how it **gets** a specific tile and stores it in variable
3. Identify how a specific tile is **set** to be a different color

```typescript
scene.setTileMap(img`
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
f f f f f f f f f f
`);
for (let i = 0; i < 8; i++) {
    let currentTile: tiles.Tile = scene.getTile(i, i);
    scene.setTileAt(currentTile, 2);
    pause(250);
}
```

## Student Task #2: Random Tiles

1. Create a **10 x 8** ``||scene:tile map||``
2. Create an ``||game:on update interval||`` event that runs every 2000 ms
3. Inside the event, get a random tile by selecting a random row (between 0 and 7) and column (between 0 and 9)
4. Set this tile to be the color blue (``8``)

## Concept: Placing Sprites

The ``||scene:place||`` function can be used to set a ``||sprites:sprite||`` to be centered on a given ``||scene:tile||``. This makes it easy to place ``||sprites:sprites||`` in different locations around the map.

## Example #3: Place Some Flowers

1. Review the code below
2. Identify how and where the ``||variables:flower||`` sprite is ``||scene:placed||`` on ``||variables:myTile||``
3. Identify where the ``||variables:player||`` can be placed on the ``||scene:tile map||``. Can it be placed in between two tiles?

```typescript
enum SpriteKind {
    Player,
    Flower
}
scene.setTileMap(img`
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
`);

let player: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
let flower: Sprite = sprites.create(sprites.castle.tileDarkGrass2, SpriteKind.Flower);

let myTile: tiles.Tile = scene.getTile(1, 1);
myTile.place(flower);

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    myTile = scene.getTile(Math.randomRange(0, 9), Math.randomRange(0, 7));
    myTile.place(player);
});
```

## Student Task #3: Place a House

1. Start with the code from example #3
2. Create a type of tile that is the color orange (``4``), and add it somewhere on the ``||scene:tile map||``
3. Create a new sprite, ``||variables:house||``, that represents a house. Use the image of a blue house (``||sprites:sprites.castle.houseBlue||``)
4. Use ``||scene:place||`` to place ``||variables:house||`` on top of the ``||scene:tile||`` that was orange in the ``||scene:tile map||``

## Concept: Tiles by Type

Placing ``||sprites:sprites||`` on top of ``||scene:tiles||`` may not be extremely exciting to start, but becomes more useful when ``||scene:tiles||`` are created in other ways.

The function ``||scene:scene.getTilesByType||`` returns an array of all of the tiles in the ``||scene:tile map||`` of the color specified. This can be very useful to help set up levels, by placing characters and items in specific locations on the screen.

```sig
scene.getTilesByType(0);
```

## Example #4: Flower Town

1. Review the code below
2. Identify how it is different from example #3
3. Identify how the 

```typescript
enum SpriteKind {
    Player,
    Flower
}

scene.setTileMap(img`
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
7 6 7 6 7 6 7 6 7 6 
6 7 6 7 6 7 6 7 6 7 
`);

let flowerTiles: tiles.Tile[] = scene.getTilesByType(6);
for (let i = 0; i < flowerTiles.length; i++) {
    let flower: Sprite = sprites.create(sprites.castle.tileDarkGrass2, SpriteKind.Flower);
    flower.setFlag(SpriteFlag.Ghost, true);
    flowerTiles[i].place(flower);
}

let player: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
scene.cameraFollowSprite(player);
```

## Student Task #4: Fill in the Neighborhood

1. Start with the code from example #4
2. Expand the ``||scene:tile map||`` to be **16 x 16**, and add orange (``4``) tiles on the map
3. Use ``||scene:scene.getTilesByType||`` to obtain an array of all orange ``||scene:Tiles||``
4. Use a loop to create a ``||sprites:sprite||`` representing houses for every orange ``||scene:Tile||``. ``||scene:Place||`` the houses on top of the orange ``||scene:Tiles||``.

## What did we learn?

1. What does a ``||scene:on hit tile||`` event allow you to do?
2. What is the relationship between ``||scene:Tiles||`` and ``||scene:tile maps||``?
3. How can ``||scene:scene.getTilesByType||`` allow ``||sprites:Sprites||`` to be placed in different locations on the screen more easily?