# Game Loop

A ``game loop`` is part of the core flow of a game. It manages the order of actions and responses to changes in state during the game.
In MakeCode @boardname@, the main game loop is defined by the active ``||scene:Scene||``.

### ~hint

#### Loop Behavior

MakeCode @boardname@ is under active development, so minor details in the game loop may change during updates.
This page describes the game loop in version v1.3.42 of the editor.

If you are editing a file in another version, and find that things are not working exactly as you expect, you can see the exact implementation in the ``scene.ts`` file under ``game``, or see the current file on [GitHub](https://github.com/microsoft/pxt-common-packages/blob/master/libs/game/scene.ts).

### ~

## Scene Game Loop

The Scene game loop sequences all the actions and updates to the game scene based on physics set for and events occuring to the game objects. The loop frame interval is timed internally to provide frequent enough updates for smooth scene transitions. The loop yields long enough for servicing of other fibers related to the game.

In each frame, the following steps will occur (in order):

1. The controller state is updated, identifying whether buttons are pressed, released, or held down.
2. ``||sprites:Sprites||`` controlled with ``||controller:controller.moveSprite||`` will be moved depending on which buttons are pressed.
3. Sprites that are 'following' other sprites have their speed adjusted as necessary.
4. Physics are applied to the sprites, moving them around the screen and calculating collisions. See [the description of the physics step](#physics) for more details.
5. All ``||game:on game update interval||`` events are run if it has been long enough since the last time that event was run.
6. All ``||game:on game update||`` events are run.
7. Pre-render events are run
    1. The camera is updated to center on any sprite that is currently being followed.
8. The current state of the game is rendered to the screen. See [the description of the game render step](#render) for more details.
9. Any diagnostics are rendered to the screen, if enabled.
10. The screen is updated and shown to the user.

It is also possible to register code to run between these events using `game.currentScene().eventContext.registerFrameHandler`.
The first parameter to that function is an 'order', which specifies where in the game loop the event should run.
The priorities for all portions of the default game loop are defined as constants in scene.ts, and all end in `_PRIORITY`.

### Physics Step #physics

This is the step where sprites are moved around the screen using the current velocity and acceleration set for them, and any ``||scene:collisions||`` and ``||sprites:overlaps||`` are calculated.
The movements in this step are interpolated into small increments for fast moving ``||sprites:sprites||``.
This keeps these ``||sprites:sprites||`` from moving through walls or missing ``||sprites:sprite overlap events||``.

1. Each sprite in the scene has it's velocity updated by it's acceleration and the maximum set speed for the current physics engine. These velocities are then split up into small steps that will be taken one at a time, and stored for each sprite.
2. Obstacles are cleared from each sprite that is moving.
3. Each sprite is moved one step:
    1. The stored velocities are compared to the sprite's current velocities, in case some event has caused the sprite to turn around. If the sprite has turned around, the movement is adjusted so that the sprite doesn't move in the wrong direction.
    2. The sprite is moved a few pixels according to it's speed.
    3. If the sprite can collide with walls, the sprite is checked for collisions with the tilemap. If it has hit something, the sprite may be stopped and a collision event with that type of wall is run.
    4. If the sprite can overlap with tile locations, the tiles underneath the sprite are checked and any matching event is run.
    5. If the sprite has not finished moving, it is stored to move again in future steps.
4. After all the sprites have moved, sprite overlaps are checked, and any overlap events between sprites that are not currently running are set to run [independent from the game loop](#fibers).
5. If there are sprites that still need to move, step 3 is repeated to continue moving the sprites. Otherwise, the physics movement is complete for this frame.

### Game Render Step #render

Rendering elements to the screen is handled by drawing different elements depending on their ``z index``. Elements with lower ``z indices`` are drawn to the screen before elements with higher ``z indices``. A tie in ``z index`` equivalency is resolved by using creation order - newer elements are drawn on top of older elements when they are at the same ``z index``.

1. The background is drawn to the screen, clearing anything else on the screen. This can be either a color or an image. This is always done first.
    1. The `scene.Flag.SeeThrough` flag can be set on a scene to allow the scene below it to be renderered *below* the current scene as a background. This is currently used for text dialogs.
2. ``z index -20``: ``on paint`` events are run and applied to the screen.
3. ``z index -1``: the ``tilemap`` is rendered to the screen.
4. ``z index 0``: sprites are rendered at this index by default, unless they are reassigned a new ``z index``.
5. ``z index 80``: ``on shade`` events are run and applied to the screen.
6. ``z index 100``: ``HUD`` elements, such as ``life`` and ``score``, are drawn onto the screen.

## Independent Fibers #fibers

It's possible to run things independently from the ``||scene:Scene||`` game loop. This can be done in a variety of ways - for example:

* ``||control:control.runInParallel||`` will run the function that is passed a single time independent of the game loop.
* ``||loops:forever||`` loops will run only when the ``||scene:Scene||`` they are created in is active, but will continue independently while running; this means that they could occur more or less than once per frame.
* ``||sprites:sprite overlap events||`` are created within game loop, but run independently after they are created. For example, you can play a series of ``||music:melodies||`` when the player touches a piano sprite, without causing the entire game to stop.

Because these run outside of the core game loop, they are not necessarily bound to a particular ``||scene:Scene||`` while running; after the event starts, it will continue until it is complete, even if the scene changes. This can be confusing at times if you have multiple things running; for example, if you have an ``||sprites:on overlap||`` event with a delay, it may happen in another scene:

```typescript
sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player);
sprites.create(img`
    . . . . . . . . . . b b b . . .
    . . . . . . . . b e e 3 3 b . .
    . . . . . . b b e 3 2 e 3 a . .
    . . . . b b 3 3 e 2 2 e 3 3 a .
    . . b b 3 3 3 3 3 e e 3 3 3 a .
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
    b 3 3 3 d d d d 3 3 3 3 3 d d a
    b b b b b b b 3 d d d d d d 3 a
    b d 5 5 5 5 d b b b a a a a a a
    b 3 d d 5 5 5 5 5 5 5 d d d d a
    b 3 3 3 3 3 3 d 5 5 5 d d d d a
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a
    b b b 3 d 5 5 5 5 5 5 5 d d b a
    . . . b b b 3 d 5 5 5 5 d d 3 a
    . . . . . . b b b b 3 d d d b a
    . . . . . . . . . . b b b a a .
`, SpriteKind.Enemy);
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, (sprite, otherSprite) => {
    pause(3000);
    game.splash("you touched an enemy 3 seconds ago!");
});
```

In this case, the two sprites overlap immediately, so the ``||game:splash screen||`` will show up after three seconds, even if you open the menu. If you want to wait until the player leaves the menu to create the ``||game:splash screen||``, one option is to store a reference to the current scene and wait until the player returns to that screen.

```typescript
const myMainScene = game.currentScene();
sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player);
sprites.create(img`
    . . . . . . . . . . b b b . . .
    . . . . . . . . b e e 3 3 b . .
    . . . . . . b b e 3 2 e 3 a . .
    . . . . b b 3 3 e 2 2 e 3 3 a .
    . . b b 3 3 3 3 3 e e 3 3 3 a .
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
    b 3 3 3 d d d d 3 3 3 3 3 d d a
    b b b b b b b 3 d d d d d d 3 a
    b d 5 5 5 5 d b b b a a a a a a
    b 3 d d 5 5 5 5 5 5 5 d d d d a
    b 3 3 3 3 3 3 d 5 5 5 d d d d a
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a
    b b b 3 d 5 5 5 5 5 5 5 d d b a
    . . . b b b 3 d 5 5 5 5 d d 3 a
    . . . . . . b b b b 3 d d d b a
    . . . . . . . . . . b b b a a .
`, SpriteKind.Enemy);
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, (sprite, otherSprite) => {
    pause(3000);
    pauseUntil(() => myMainScene === game.currentScene());
    game.splash("you touched an enemy 3 seconds ago!");
});
```

It is generally better to avoid doing this whenever possible though, as it can make it much harder to keep track of the game state in your program code.
