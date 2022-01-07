# Pongo
* name: Pongo
* description: Add a new take to the classic game of Pong when you follow this tutorial to build Pongo!
* infoUrl: skillmap/educator-info/pongo-map-info
* backgroundurl: /static/skillmap/backgrounds/pongo-comp.png
* bannerurl: /static/skillmap/pongo/pongo2.gif
* primarycolor: #ff93c4
* secondarycolor: #fdf60c
* tertiarycolor: #161112
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## pongo
* name: Pongo
* layout: manual

### pongo1
* name: Paddle / Ball
* type: tutorial
* description: Add a paddle and ball to start your game of Pongo
* url: /skillmap/pongo/pongo1
* tags: easy, sprites, movement
* imageUrl: /static/skillmap/pongo/pongo1.gif
* next: pongo2
* position: 1 -1

### pongo2
* name: Hit the Wall
* type: tutorial
* description: Add bricks to the back of the wall. When the bricks are gone, it's game over!
* url: /skillmap/pongo/pongo2
* tags: easy, sprites, events
* imageUrl: /static/skillmap/pongo/pongo2.gif
* next: pongo3
* position: 2 -1

### pongo3
* name: Multiplayer
* type: tutorial
* description: A few simple changes will turn this into a game you can play with friends.
* url: /skillmap/pongo/pongo3
* tags: easy, multiplayer
* imageUrl: /static/skillmap/pongo/pongo3.gif
* next: pongo-finish
* position: 3 0


### pongo-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/pongo-cert.pdf
* imageUrl: /static/skillmap/certificates/pongo-cert.png
* position: 4 0
* actions:
    * map: [Try Save the Forest](/skillmap/forest)
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)

