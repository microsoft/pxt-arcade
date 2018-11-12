
## Concept: On Hit Tile Events

The ``scene.onHitTile`` event is a helpful event that runs code when a sprite of a specific ``||sprites:SpriteKind||`` (e.g. Player, Enemy, etc.) collides with a wall of a specific color. 

![On Hit Tile Event](/static/courses/csintro3/arrays/tile-maps/on-tile-hit-event.gif)

## Example #2: Cold Water

1. Observe the example below
2. Identify how it uses a ``scene.onTileHit`` event to make the sprite interact with the scene

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 d 
5 5 5 5 5 5 5 5 d 8 
5 5 5 5 5 5 5 d 8 8 
5 5 5 5 5 5 d 8 8 8 
5 5 5 5 5 d 8 8 8 8 
5 5 5 5 d 8 8 8 8 8 
5 5 5 d 8 8 8 8 8 8 
5 5 d 8 8 8 8 8 8 8 
`)
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
`)
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
`)
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
`, true)

scene.onHitTile(SpriteKind.Player, 8, function (sprite: Sprite) {
    sprite.say("Ooh! Too Cold!", 1000);
})
```

## Student Task #2: Scene Interaction

1. Create a quick game with that allows you to control a sprite and move around the screen
2. Add in a tile map with at least **2** different colors
3. Have at least **1** color set to be a wall
4. Add an ``scene.onHitTile`` event that makes the sprite say something when they hit the wall

## Concept: Tiles

A tile map is made up of several individual tiles of type ``tiles.Tile``. This is a type just like ``||sprites:Sprite||`` or ``||images:Image||`` except it is defined in the ``tiles`` namespace so it needs to be typed as ``tiles.Tile``. 

Some of the helpful functions for getting a tile and setting a tile are:
``scene.getTile`` and ``scene.setTileAt``. The first returns the tile at the specified position and the latter takes a tile and a color index as parameters and set that tile to that color.


## Example #3: Swipe Down

1. Observe the example below
2. Identify how it **gets** a specific tile
3. Identify how it **sets** a specific tile

```typescript
scene.setTileMap(img`
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
`)
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 10; col++) {
        let currentTile: tiles.Tile = scene.getTile(col, row);
        scene.setTileAt(currentTile, 8);
        pause(100);
    }
}
```

## Student Task #3: Random Tiles

1. Create a basic tile map
2. Create an ``game.onUpdateInterval`` event that runs every 1000 ms (1 sec)
3. Inside the event, get a random tile by selecting a random row and column
4. Set this tile to be the color blue (`8`)


## Concept: Placing Sprites on a Color

The function ``scene.getTilesByType`` will return an array of all of the tiles in the tile map of the color specified.

Each tile also has the function ``place`` which takes in a ``||sprites:sprite||`` as a parameter and places that sprite on top of the tile.

Using these two together allows for the ability to go through the array of tiles and place a sprite on top of each one.



## Example #4: Flower Storm

1. Look at the example below
2. Identify how it gets an array of tiles
3. Recognize how it goes through an array
4. Identify how it places a ``||sprites:sprite||`` on top of each tile

```typescript
enum SpriteKind {
    Player,
    Enemy
}
scene.setTileMap(img`
7 7 7 7 e 7 7 7 7 7 
7 e 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 e 7 7 
7 7 7 7 7 e 7 7 7 7 
7 7 7 e 7 7 7 7 7 7 
7 7 7 e 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 e 7 
7 7 7 e 7 7 7 7 7 7 
`);

scene.setTile(14, img`
5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 
7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7 
7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7 
7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7 
7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7 
7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7 
7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7 
7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7 
7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7 
7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7 
7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1 
7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d 
7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6 
7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
`);

game.onUpdateInterval(2000, function () {
    let tileList: tiles.Tile[] = scene.getTilesByType(14);
    for (let i = 0; i < tileList.length; i++) {
        let projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . 3 a a a 3 . . . . . . 
. . . 3 3 a b b b a 3 3 . . . . 
. . 3 3 a b 5 5 5 b a 3 3 . . . 
. 3 3 3 a b 5 5 5 b a 3 3 3 . . 
. . 3 3 a b 5 5 5 b a 3 3 . . . 
. . . 3 3 a b b b a 3 3 . . . . 
. . . . . 3 a a a 3 . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Player);
        tileList[i].place(projectile);
    }
})
```

## Student Task #4: Garden

1. Create a tile map that looks like a garden with one color designated for tiles that plants can grow on
2. Create a ``||controller:controller||`` event that runs code when the ``||controller:A||`` button is pressed.
3. Inside this code, get the array of tiles of the color designated
4. Select a random tile from the array and place a plant ``||sprites:sprite||`` sprite on top of that tile
5. **Challenge** Use the ``||sprites:lifespan||`` property to have the plants disappear after time

## What did we learn?
1. What is the proper syntax for an ``onHitTile`` event?
2. What is the relationship between tiles and tile maps?
3. What is one way to place a sprite on a specific tile?