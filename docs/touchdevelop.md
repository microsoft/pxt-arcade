# Moving from Touch Develop to MakeCode

This page is primarily for users who previously used [Touch Develop](http://www.touchdevelop.com)
and the [Creative Computing for Games and Apps](http://www.touchdevelop.com/ccga) course. 

## Your Scripts

Touch Develop supported logins and stored your scripts in the cloud. MakeCode
does not support logins and cloud storage. MakeCode stores your scripts in
browser-local storage on your machine and provides two other ways
to store and retrieve your scripts:
- each time you press the download button and save your compiled program to the
  Downloads folder (as either a `.hex` or `.uf2` file) your original script text 
  is embedded inside this file -- simply drag-and-drop or import the file into the
  web app to retrieve your original script;
- use the `Share` link on the upper left of the MakeCode editor to obtain
  an anonymized URL that you can use to later retrieve your encrypted script
  from the cloud; do not lose this URL, as it is the only way to retrieve
  your (unecrypted) script text

## Languages and Editors

Touch Develop used a specially designed language particular to that project,
as well as a specially designed editor for editing Touch Develop programs
using touch interfaces.

MakeCode is based on the [TypeScript](http://www.typescriptlang.org) language, which
is a superset of JavaScript; TypeScript compiles to plain JavaScript, a standards-based
language supported on all modern web browsers.  

Furthermore, MakeCode uses
two robust and supported editors, Google's [Blockly](https://developers.google.com/blockly/) 
and Microsoft's [Monaco](https://github.com/Microsoft/monaco-editor).

## Game Engines

Both Touch Develop and MakeCode have sprite-based 2D game engines, with some minor differences. 
Both include a simple 2D game engine with basic physics, sprites, sounds, scoring, and keyboard control.
While Touch Develop supported sound and image upload, MakeCode lets you define your own sprites
with a built-in editor. Here are a few examples.

### Clouds across the sky

Here's a simple example that shows the creation of a "cloud" of sprites that move across the screen:

```typescript
let cloudImg = img`
 . 1 1 1 . . . . . . . . . 1 1
 1 2 2 2 1 . . 1 1 1 . . 1 2 2 1
 1 2 2 2 2 1 1 2 2 2 1 1 2 2 2 1
 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1
 . 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 `
 game.update(function () {
    if (Math.random() < 0.02) {
      let s = sprites.createProjectile(cloudImg, -45, 0)
      s.y = Math.randomRange(0, screen.height())
      s.z = -1
    }
 })
```









