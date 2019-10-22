# Moving from Touch Develop to MakeCode

This page is primarily for users who previously used [Touch Develop](http://www.touchdevelop.com)
and the [Creative Computing for Games and Apps](http://www.touchdevelop.com/ccga) course. 

## Your Scripts

Touch Develop supported logins and stored your scripts in the cloud. MakeCode
does **not** support logins nor cloud storage. MakeCode stores your scripts in
browser-local storage on your machine and provides two other ways
to store and retrieve your scripts:
- each time you press the **Download** button and save your compiled program to the
  Downloads folder (as `.png` file) your original script text 
  is embedded inside this file -- simply drag-and-drop or import the file into the
  web app to retrieve your original script;
- use the **Share** link on the upper left of the MakeCode editor to obtain
  an anonymized URL that you can use to later retrieve your encrypted script
  from the cloud; do not lose this URL, as it is the only way to retrieve
  your script text

## Languages and Editors

Touch Develop used a specially designed language particular to that project,
as well as a specially designed editor for editing Touch Develop programs
using touch interfaces.

MakeCode provides two code editors: a drag-and-drop block programming editor, 
based on Google's [Blockly](https://developers.google.com/blockly/) and a text programming editor using the [TypeScript](http://www.typescriptlang.org) language and the Microsoft's [Monaco](https://github.com/microsoft/monaco-editor) editor.

TypeScript language, which is a superset of JavaScript; TypeScript compiles to plain JavaScript, a standards-based
language supported on all modern web browsers.  

## Game Engines

Both Touch Develop and MakeCode have sprite-based 2D game engines, with some minor differences. 
Both include a simple 2D game engine with basic physics, sprites, sounds, scoring, and keyboard control.

### Coordinates

The coordinates are the same. Positions on the screen are based on pixels. The origin of the grid is the top left corner (the x-axis is horizontal, the y-axis is vertical). Sprite positions refer to the center of the sprite, i.e., the halfway point of its width and height before any rotation is applied. Speed and acceleration are measured in pixels/second and pixels/second^2.

Unlike Touch Develop where the game size would vary with the screen, the MakeCode game engine supports 
a single ``160``x``120`` screen with a palette of 16 colors.

### Sprite

Sprites are 2D bitmaps that are drawn directly to the screen. While Touch Develop supported sound and image upload, MakeCode lets you paint your own sprites
with a built-in editor. Here's a simple example of creating a sprite:

```blocks
let sprite: Sprite = null
sprite = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
```

In TypeScript, the image is rendered as text where each character is the index of the color in the color palette **in hexadecimal** (from ``0`` to ``f``).

```typescript
let sprite: Sprite = null
sprite = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
```

### Input

Touch Develop supports various inputs from mouse or touch. 
MakeCode restricts inputs
to a set of 6 buttons: ``A``, ``B`` and 4 directional buttons.

The keys event can be used to register code that runs when a key is pressed;
or key state (pressed, released) can be queried in the game update loop.

```blocks
let sprite: Sprite = null
sprite = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x += -1;
})
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        sprite.x += 1;
    }
})
```

### Moving the sprites

Similarly to Touch Develop, you can set the position (``x``, ``y``), velocity (``vx``, ``vy``)
and acceleration of any sprite (``ax``, ``ay``) and depth (``z``). The physics engine will move the sprite accordingly.
Unlike Touch Develop, sprites in the MakeCode game engine do not rotate.

```blocks
let monster: Sprite = null
monster = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
monster.ay = 200;
controller.any.onEvent(ControllerButtonEvent.Pressed, function () {
    monster.vy = -100;
})
```

The block ``dx`` and ``dy`` from keys provide a helper to convert directional key presses into a horizontal
or vertical value.

```blocks
let sprite: Sprite = null
sprite = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
game.onUpdate(function () {
    sprite.x += controller.dx(100)
    sprite.y += controller.dy(100)
})
```

### Life and score

Similarly to Touch Develop, the game engine provides basic support for life and score management.
The MakeCode game engine also stores a highscore but no cloud-based leaderboards are supported.

```blocks
let monster: Sprite = null
monster = sprites.create(img`
3 2 2 2 . . . . 
4 3 2 2 . 2 2 . 
. 4 3 2 2 2 2 . 
. . 4 2 2 2 . . 
. 4 3 2 2 2 2 2 
. 4 3 3 4 3 2 2 
. . 4 4 . 4 3 2 
. . . . . . 4 3 
`)
monster.ay = 200;
controller.any.onEvent(ControllerButtonEvent.Pressed, function () {
    monster.vy = -100;
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (monster.y > screen.height) {
        info.changeLifeBy(-1)
    }
})
```

### Splash

The ``game.splash`` block pops a modal dialog 

```blocks
game.splash("Get Ready!", "Game on")
```
