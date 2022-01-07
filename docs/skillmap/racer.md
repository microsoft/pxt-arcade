# Monster Racer
* name: Monster Racer
* description: Create a side-scrolling monster truck racing game so you can jump obstacles and get your monster truck to the finish line.
* backgroundurl: /static/skillmap/racer/backgrounds/racer-comp.png
* bannerurl: /static/skillmap/racer/racer3.gif

* primarycolor: #ff93c4
* secondarycolor: #fdf60c
* tertiarycolor: #161112
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## Monster Racer
* name: Monster Racer
* layout: manual

### racer1
* name: Ready, Set, Go!
* type: tutorial
* description: Get your monster truck moving and try to make it to the end of your tilemap.
* url: /skillmap/racer/racer1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Over and Under
* type: tutorial
* description: Code actions to help your racer survive the pits and perils of the cave.
* url: /skillmap/racer/racer2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/racer/racer2.gif
* next: racer3
* position: 2 -1

### racer3
* name: Going Further
* type: tutorial
* description: Customize your game and make it your own by adding animations and changing your tilemap.
* url: /skillmap/racer/racer3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/racer/racer3.gif
* next: racer-finish
* position: 3 0


### racer-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/racer-cert.pdf
* position: 4 0
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate: /static/skillmap/certificates/racer-game.pdf
    * completion-badge: /static/badges/badge-racer.png

