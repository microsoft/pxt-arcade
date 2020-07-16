# Activity: Tiles

``||scene:Tilemaps||`` allow for an easy way to design and structure maps
that the player can explore.

``||scene:Wall collision||`` events and ``||scene:Tiles||`` allow for further
control over how developers can interact with the individual ``||scene:tiles||``
that make up the ``||scene:tilemap||``.

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

## Concept: On Hit Tile Events

The ``||scene:scene.onHitTile||`` event occurs when a sprite of the given
``||sprites:Kind||`` collides with a given ``||scene:Tile||`` that is a ``||scene:Wall||``.

```sig
scene.onHitTile(0, 0, null);
```

## Example #1: Rock Collector

![Animation of tile collision](/static/courses/csintro3/arrays/animation-of-tile-collision.gif)

1. Review the code below
2. Identify how the ``||scene:scene.onTileHit||`` event is used to make the
sprite interact with the scene
3. How does the ``||variables:tile||`` parameter in the ``||scene:on hit tile||``
event correspond to the type of tile that is used?

```typescript
let mySprite: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);
controller.moveSprite(mySprite, 100, 100);

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
2. Create at least **one** more tile that is **not** a wall,
and add it to the ``||scene:tilemap||``
3. Create at least **one** more type of ``||scene:wall||``,
and add it to the ``||scene:tilemap||``. Make the image be of
something that looks like a "portal"
4. Add an ``||scene:on hit tile||`` event that occurs when ``||variables:mySprite||``
hits the new type of ``||scene:wall||``
5. In the new event, set ``||variables:mySprite||`` to a random new
``||sprites:x||`` and ``||sprites:y||`` position

## Concept: Tiles

A ``||scene:tilemap||`` is made up of tiles of type ``||scene:tiles.Tile||``.
This type is defined in the ``||scene:tiles||`` namespace.

The ``||scene:scene.getTile||`` and ``||scene:scene.setTileAt||`` functions
can be used to get and modify the individual ``||scene:Tiles||`` in the
``||scene:tilemap||``.

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

1. Create a **10 x 8** ``||scene:tilemap||``
2. Create an ``||game:on update interval||`` event that runs every 2000 ms
3. Inside the event, get a random tile by selecting a random row (between 0 and 7)
and column (between 0 and 9)
4. Set this tile to be the color blue (``8``)

## Concept: Placing Sprites

The ``||scene:place||`` function can be used to set a ``||sprites:sprite||``
to be centered on a given ``||scene:tile||``.
This makes it easy to place ``||sprites:sprites||``
in different locations around the map.

## Example #3: Place Some Flowers

1. Review the code below
2. Identify how and where the ``||variables:flower||`` sprite is
``||scene:placed||`` on ``||variables:myTile||``
3. Identify where the ``||variables:player||`` can be placed on the
``||scene:tilemap||``. Can it be placed in between two tiles?

```typescript
namespace SpriteKind {
    export const Flower = SpriteKind.create();
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
    myTile = scene.getTile(randint(0, 9), randint(0, 7));
    myTile.place(player);
});
```

## Student Task #3: Place a House

1. Start with the code from example #3
2. Create a type of tile that is the color orange (``4``),
and add it somewhere on the ``||scene:tilemap||``
3. Create a new sprite, ``||variables:house||``, that represents a house.
Use the image of a blue house (``||sprites:sprites.castle.houseBlue||``)
4. Use ``||scene:place||`` to place ``||variables:house||`` on top of the
``||scene:tile||`` that was orange in the ``||scene:tilemap||``

## Concept: Tiles by Type

Placing ``||sprites:sprites||`` on top of ``||scene:tiles||`` may not be
extremely exciting to start, but becomes more useful when ``||scene:tiles||``
are created in other ways.

The function ``||scene:scene.getTilesByType||`` returns an array of all of the
tiles in the ``||scene:tilemap||`` of the color specified.
This can be very useful to help set up levels,
by placing characters and items in specific locations on the screen.

```sig
scene.getTilesByType(0);
```

## Example #4: Flower Town

1. Review the code below
2. Identify how it is different from example #3
3. Identify how the ``||scene:Tile||`` ``||arrays:array||`` is created
4. Identify how the ``||scene:Tile||`` ``||arrays:array||`` is used

```typescript
namespace SpriteKind {
    export const Flower = SpriteKind.create();
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
controller.moveSprite(player, 100, 100);
scene.cameraFollowSprite(player);
```

## Student Task #4: Fill in the Neighborhood

![Animation of player moving around map with house](/static/courses/csintro3/arrays/place-houses.gif)

1. Start with the code from example #4
2. Expand the ``||scene:tilemap||`` to be **16 x 16**,
and add orange (``4``) tiles on the map
3. Use ``||scene:scene.getTilesByType||`` to obtain an array
of all orange ``||scene:Tiles||``
4. Use a loop to create a ``||sprites:sprite||`` representing houses
for every orange ``||scene:Tile||``.
``||scene:Place||`` the houses on top of the orange ``||scene:Tiles||``.

## What did we learn?

1. What does a ``||scene:on hit tile||`` event allow you to do?
2. What is the relationship between ``||scene:Tiles||`` and ``||scene:tilemaps||``?
3. How can ``||scene:scene.getTilesByType||`` allow ``||sprites:Sprites||``
to be placed in different locations on the screen more easily?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/arrays/tiles-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Recharge Rate Up

Add a new type of PowerUp, which makes the ``ships`` energy recharge faster.

In the current game, you have the energy recharge based off an
``||game:on game update interval||`` event, which occurs every 750ms.
It may seem like this is an easy change, by just using a ``||variables:variable||``
for the interval instead of a specific time, but this doesn't quite work.
The ``||game:game.onUpdateInterval||`` function takes in an **interval in milliseconds**
and an **event handler** function, and causes the **event handler** to occur on the interval

To fix this, you will need to change the ``||game:on game update interval||``
event in the ``ship`` namespace to an ``||game:on game update||`` event,
and keep track of the time yourself. The ``||game:game.runtime||`` function
is useful for this, as it gives the time since the game game was started,
in milliseconds.

First, create two new variables in the ``ship`` namespace:
``||variables:rechargeDelay||`` and ``||variables:lastRecharge||``.
``||variables:rechargeDelay||`` should keep track of the current delay between recharges,
and should start at 750ms (like the previous ``||game:on game update interval||``).
``||variables:lastRecharge||`` should keep track of the last time that the ship's
``currentCharge`` was incremented.

In the ``||game:on game update||`` event, get the current time,
and check if the time that has passed since the ``||variables:lastRecharge||``
is greater than or equal to the ``||variables:rechargeDelay||``.
If it is, update ``||variables:lastRecharge||`` to the current time,
and increment ``||variables:currentCharge||`` if it is less than ``||variables:maxCharge||``.

Finally, add the new ``RechargeRateUp`` ``PowerUp`` to the game.
In the ``||sprites:overlap event||`` between ``Player`` and ``PowerUp``,
decrement the ``||variables:ship.rechargeDelay||`` by **20** if the ``PowerUp``
is of type ``RechargeRateUp``.
Set the ``response`` for this ``PowerUp`` to "Faster Charge!".

### Solution

```typescript-ignore
enum PowerUpType {
    Health,
    Score,
    EnergyUp,
    RechargeRateUp
}

namespace ship {
    export let rechargeDelay = 750;
    let lastRecharge = 0;

    game.onUpdate(function () {
        let currentTime = game.runtime();
        if (currentTime - lastRecharge >= rechargeDelay) {
            lastRecharge = currentTime;
            if (currentCharge < maxCharge) {
                currentCharge++;
            }
        }
    });
}

namespace powerups {
    let availablePowerUps = [
        PowerUpType.Health,
        PowerUpType.Score,
        PowerUpType.EnergyUp,
        PowerUpType.RechargeRateUp
    ];

    export let responses: string[] = [];
    responses[PowerUpType.Health] = "Got health!";
    responses[PowerUpType.Score] = "Score!";
    responses[PowerUpType.EnergyUp] = "More Energy!";
    responses[PowerUpType.RechargeRateUp] = "Faster Charge!";
}

namespace overlapevents {
    // When a player hits a powerup, apply the bonus for that powerup
    sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite: Sprite, otherSprite: Sprite) {
        let powerUp: number = powerups.getType(otherSprite);
        otherSprite.destroy();
        sprite.say(powerups.responses[powerUp], 500);
        if (powerUp == PowerUpType.Health) {
            info.changeLifeBy(1);
        } else if (powerUp == PowerUpType.Score) {
            info.changeScoreBy(15);
        } else if (powerUp == PowerUpType.EnergyUp) {
            ship.maxCharge++;
        } else if (powerUp == PowerUpType.RechargeRateUp) {
            ship.rechargeDelay -= 20;
        }
    });
}
```

### ~