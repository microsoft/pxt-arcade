# 80's Rockstar Maze!
* name: 80's Rockstar Maze!
* description: Create a fast-paced maze game by programming a rockstar to move through the crowded backstage area and collect all of their gear before they're mobbed by fans!
* infoUrl: skillmap/educator-info/rockstar-map-info
* backgroundurl: /static/skillmap/backgrounds/rockstar-comp.png
* bannerurl: /static/skillmap/rockstar/rockstar2.gif
* primarycolor: #ff93c4
* secondarycolor: #fdf60c
* tertiarycolor: #161112
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## rockstar
* name: 80's Rockstar Maze
* layout: manual

### rockstar1
* name: Trapped Backstage
* type: tutorial
* description: Create a rockstar backstage after the show, then keep an eye on them as they navigate the path!
* url: /skillmap/rockstar/rockstar1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/rockstar/rockstar1.gif
* next: rockstar2
* position: 1 -1

### rockstar2
* name: Gather Your Gear
* type: tutorial
* description: Write the code to give your rockstar points for gathering all their gear before they head out on tour.
* url: /skillmap/rockstar/rockstar2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/rockstar/rockstar2.gif
* next: rockstar3
* position: 2 -1

### rockstar3
* name: Avoid the Fans!
* type: tutorial
* description: Code some crazed fans who will steal points as souveniers unless the rockstar can avoid them!
* url: /skillmap/rockstar/rockstar3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/rockstar/rockstar3.gif
* next: rockstar-finish
* position: 3 0


### rockstar-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/rockstar-cert.pdf
* imageUrl: /static/skillmap/certificates/rockstar-cert.png
* position: 4 0
* actions:
    * map: [Try our Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate: /static/skillmap/certificates/rockstar-cert.pdf
    * completion-badge: /static/badges/badge-rockstar.png

