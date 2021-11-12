# Monster Racer!
* name: Monster Racer
* description: Create a side-scrolling car racing game to jump over obstacles and get your monster truck to the finish line.
* backgroundurl: /static/skillmap/rockstar/backgrounds/rockstar-comp.png
* bannerurl: /static/skillmap/rockstar/rockstar3.gif
* primarycolor: #ff93c4
* secondarycolor: #fdf60c
* tertiarycolor: #161112
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## rockstar
* name: 80's Rockstar Maze
* layout: manual

### racer1
* name: Trapped Backstage
* type: tutorial
* description: Create a rockstar backstage after the show, then keep an eye on them as they navigate the path!
* url: /skillmap/rockstar/racer1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Gather Your Gear
* type: tutorial
* description: Write the code to give your rockstar points for gathering all their gear before they head out on tour.
* url: /skillmap/rockstar/racer2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/racer/racer2.gif
* next: racer3
* position: 2 -1

### racer3
* name: Avoid the Fans!
* type: tutorial
* description: Code some crazed fans who will steal points as souveniers unless the rockstar can avoid them!
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

