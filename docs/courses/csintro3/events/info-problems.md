# Problem Set: Info

This section contains a number of selected problems for the Info section.

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

## Problem #1: Dodge to Win

Create a game where the player must avoid asteroids for 30 seconds to win.

First, create a ``||sprites:sprite||`` of kind ``Player`` that
``||controller:moves with buttons||``.
Set the ``||sprites:stay in screen||`` flag to ``||logic:on||``.

Use an ``||game:on game update interval||`` event that creates asteroid
``||sprites:projectiles||`` every **500 ms** that move across the screen
with ``||math:random||`` velocities (both positive and negative should be possible,
so they come from all directions).

If the ``Player`` overlaps with one of the ``projectiles``,
end the game as a **loss** for the player.

Start a 30 second ``||info:countdown||``.
When the ``||info:countdown||`` ends,
end the game as a **win** for the player.

### ~hint

By default,
a ``||info:countdown||`` ending will end in a loss for the player,
not a win.
You will need to change this behavior using an ``||info:on countdown end||``.

### ~

## Problem #2: Timed Maze

Create a maze for a player to escape using a ``||scene:tilemap||``.
Make the maze a large ``||images:image||`` -
the example below is **32x8** -
and leave an empty ``||scene:tile||`` on the leftmost column as a goal
for the player to reach.

![Example of a maze that players can escape](/static/courses/csintro3/events/timed-maze.png)

After designing your ``||scene:tilemap||``,
set the walls in your maze to be ``||scene:Wall||`` ``||scene:tiles||``.

Create a ``Player`` ``||sprites:sprite||``,
and make them ``||controller:move with buttons||``.
Get a non-``||scene:Wall||`` ``||scene:Tile||`` from the right side of the maze,
and then ``||scene:place||`` the ``||sprites:sprite||`` there as a starting point.
Make the ``||scene:camera follow||`` the ``||sprites:sprite||``,
so it will remain on screen.

Use an ``||game:on game update||`` event to detect when the player has reached
the left side of the maze (when the left side of the sprite is at or below 0),
and ends the game as a win when that becomes the case.

Make the game more challenging by adding a time limit:
create a ``||info:countdown||`` based off how long it takes you to solve your
own maze (about 20 seconds is a good start).

After adding the time limit,
give the player **three chances** to complete the maze.
Set their ``||info:life||`` to 3 initially,
and add an ``||info:on countdown end||`` event that restarts the game
and takes away a ``||info:life||``. This should:

* ``||game:splash||`` a message to tell the player to try again
* ``||scene:place||`` the player back where they started
* Restart the ``||info:countdown||`` back where it started
* Take away 1 ``||info:life||``

### ~hint

The game will not be very interesting if there is no solution to the maze,
but verifying a solution exists might be hard as mazes get more and more complex.

One way to verify it works uses the fill tool (paint bucket) in the image editor:
if you have a maze with two colors (one for walls,
and one for accessible locations),
use the fill tool on the starting location with a new color,
and see if that color reaches the exit.
If it does, then there has to be a path to get there!

### ~

## Problem #3: Limited Lasers

The example below is a simple space game,
where the player can ``||controller:move||`` a spaceship back and forth
and fire lasers at oncoming asteroids.

```typescript
let mySprite: Sprite = sprites.create(img`
    . . . . . . . 5 . . . . . . .
    . . . . . . 5 4 5 . . . . . .
    . . . . . 5 4 4 4 5 . . . . .
    . . . . 5 4 4 4 4 4 5 . . . .
    . . . 5 5 4 2 4 2 4 5 5 . . .
    . . 5 5 4 4 2 4 2 4 4 5 5 . .
    . 5 5 4 4 4 4 4 4 4 4 4 5 5 .
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`, SpriteKind.Player);
controller.moveSprite(mySprite, 100, 0);
mySprite.y = 100;
mySprite.setStayInScreen(true);

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectile(img`1`, 0, -60, SpriteKind.Projectile, mySprite);
});

game.onUpdateInterval(1000, function () {
    let myAsteroid: Sprite = sprites.createProjectile(sprites.space.spaceAsteroid0,
        0, 40, SpriteKind.Enemy);
    myAsteroid.x = randint(0, screen.width);
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    game.over();
});

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy();
    otherSprite.destroy();
});
```

Use ``||info:life||`` and ``||info:score||`` to make the game more interesting
by making the lasers cost one point from the ``||info:score||``,
and adding ``||info:lives||``.

* Start with 3 ``||info:lives||`` and a ``||info:score||`` of 5
* When the player tries to fire a laser,
check if the ``||info:score||`` is greater than 0;
``||logic:if||`` it is, fire the laser and decrement the score, otherwise do nothing
* Make an ``||sprites:overlap||`` between ``Player`` and ``Enemy`` remove
one ``||info:life||`` and ``||sprites:destroy||`` the ``Enemy`` instead of ending the game
* To replenish ``||info:score||``,
add one point when a ``Projectile`` ``||sprites:overlaps||`` an ``Enemy``,
and add two points every 3 seconds

## Problem #4: Collectathon

Create a small game where the player ``||controller:moves||`` a
``||sprites:sprite||`` around the screen,
collecting coins or food before they disappear and avoiding enemies.
You can start with the example below,
or create your own from scratch.

```typescript
let mySprite: Sprite = sprites.create(sprites.castle.princess2Front, SpriteKind.Player);
controller.moveSprite(mySprite);

game.onUpdateInterval(1000, function () {
    let myFruit: Sprite = sprites.create(sprites.food.smallStrawberry, SpriteKind.Food);
    myFruit.x = randint(0, screen.width);
    myFruit.y = randint(0, screen.height);
    myFruit.lifespan = 2500;
});

game.onUpdateInterval(2000, function () {
    let myEnemy: Sprite = sprites.createProjectile(sprites.castle.skellyAttackFront2,
                                                    randint(-100, 100),
                                                    randint(-100, 100),
                                                    SpriteKind.Enemy);
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy();
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over();
});
```

Next, modify the game to use ``||info:life||``,
``||info:score||``, and a ``||info:countdown||``.

* Start the player with three ``||info:life||``,
and take away one when the ``Player`` ``||sprites:overlaps||``
an ``Enemy``, rather than immediately ending the game
* Start a 5 second ``||info:countdown||``,
to force the player to move quickly when collecting the fruit
* When the ``||info:countdown ends||``,
take away one ``||info:life||`` and restart the ``||info:countdown||``
* Whenever the player collects a collectable item,
add one to their ``||info:score||``,
and restart the ``||info:countdown||``
* **Challenge:** for every **tenth** item the player collects,
reward them with an extra life
