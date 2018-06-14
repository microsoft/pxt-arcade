# TODO

## Simulator

* [ ] add SVG around the screen
* [ ] add buttons in SVG, especially for usage on a mobile phone
* [ ] scale the screen - need to first print on 160x120 canvas and then print this canvas scaled on the actual canvas - there's example in EV3
* [ ] gray out the simulator and display big play button over it, when it has no focus - otherwise it cannot get key events

## APIs

* [ ] implement `dx` in `scroll()`
* [x] add splash-screen and instruction functions
* [ ] some menu system?
* [ ] high score storage support (per-script in localStorage)
* [ ] add ellipse drawing (filled and empty)
* [x] add empty rectangle drawing (using lines)
* [ ] think about frame handler order (see `sprites.ts` for a list)
* [ ] think if we want to support devices with very low memory (eg SAMD21 has 32k and one screen is 8k; we need double buffering, and also some other random memory which leaves around 1 screen worth of memory for the user)
* [ ] nice design for GAME OVER - probably should avoid text - localization
* [ ] nice design for splash
* [ ] better animations for sprites
* [ ] some rigid-body physics - make it easy for players to stop on platforms
* [ ] come up with a better color palette (we at least need gray)
* [ ] make palette swappable

## Saving as PNG

* [x] save screenshots during game play
* [x] encode LZMA compressed program sources in the screenshot and have it download on "Download" button
* [x] implement loading of such PNG files
