# Monster Racer
* name: Monster Racer
* description: Create a side-scrolling monster truck racing game so you can jump obstacles and get your monster truck to the finish line.
* backgroundurl: /static/skillmap/rockstar/backgrounds/racer-comp.png
* bannerurl: /static/skillmap/rockstar/racer.gif
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
* name: Playing with Monsters
* type: tutorial
* description: Design characters for your own version of the Monster Racer game.
* url: /skillmap/rockstar/racer1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Ready, Set, Go!
* type: tutorial
* description: Get your monster truck moving and try to make it to the end of your tilemap.
* url: /skillmap/rockstar/racer2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/racer/racer2.gif
* next: racer3
* position: 2 -1

### racer3
* name: Avoid the Obstacles!
* type: tutorial
* description: Code actions to help your racer survive the pits and perils of the cave.
* url: /skillmap/rockstar/racer3
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

