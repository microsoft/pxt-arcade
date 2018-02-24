# TODO

* [ ] add SVG around the screen
* [ ] add buttons in SVG, especially for usage on a mobile phone
* [ ] scale the screen - need to first print on 128x128 canvas and then print this canvas scaled on the actual canvas - there's example in EV3
* [ ] implement `dx` in `scroll()`
* [ ] add splash-screen and instruction functions
* [ ] high score support (per-script in localStorage)
* [ ] add ellipse drawing (filled and empty)
* [x] add empty rectangle drawing (using lines)
* [ ] think about frame handler order (see `sprite.ts` for a list)
* [ ] think if we want to support devices with very low memory (eg SAMD21 has 32k and one screen is 8k; we need double buffering, and also some other random memory which leaves around 1 screen worth of memory for the user)
* [ ] nice design for GAME OVER - probably should avoid text - localization
* [ ] nice design for splash