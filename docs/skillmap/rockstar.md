# 80's Rockstar Maze!
* name: 80's Rockstar Maze!
* description: Create a fast-paced maze game by programming a rockstar to move through the crowded backstage area to collect all of their gear before they're mobbed by fans!
* backgroundurl: /static/skillmap/backgrounds/rockstar.png
* bannerurl: /static/skillmap/rockstar/rockstar4.gif
* primarycolor: #ff93c4
* secondarycolor: #87f2ff
* tertiarycolor: #5c406c
* strokecolor: #5c406c
* highlightcolor: #fff609

## rockstar
* name: 80's Rockstar Maze
* layout: manual

### rockstar1
* name: Trapped Backstage
* type: tutorial
* description: Create a rockstar backstage after the show, then create a door for them to escape through!
* url: /skillmap/rockstar/rockstar1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/rockstar/rockstar1.gif
* next: rockstar2
* position: 0 3

### rockstar2
* name: Gather Your Gear
* type: tutorial
* description: Write the code to give your rockstar points for gathering all their gear before they head out on tour.
* url: /skillmap/rockstar/rockstar2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/rockstar/rockstar2.gif
* next: rockstar3
* position: 1 2

### rockstar3
* name: Enemies Attack!
* type: tutorial
* description: Program crazed fans who steal points as souveniers unless the rockstar can avoid them!
* url: /skillmap/rockstar/rockstar3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/rockstar/rockstar3.gif
* next: rockstar-finish, rockstar3a
* position: 2 1

### rockstar3a
* name: New Location
* type: tutorial
* description: Edit your game to make it your own.  You can change all the images to completely customize your maze!
* url: /skillmap/rockstar/rockstar3a
* tags: easy, asset editor, art
* imageUrl: /static/skillmap/rockstar/rockstar3a.gif
* next: rockstar2
* position: 3 2


### rockstar-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/rockstar-game.pdf
* position: 3 0
