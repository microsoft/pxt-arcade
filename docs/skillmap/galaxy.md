# Save the Galaxy
* name: Save the Galaxy
* description: Make a Galaga-style game by following this short series of tutorials. You will create a rocket that transmits information to satellites, dodge asteroids, create amazing animations, and MORE!  What are you waiting for?  Double-click the first level to begin!
* infoUrl: skillmap/educator-info/galaxy-map-info
* bannerUrl: /static/skillmap/galaxy/galaxy3.gif
* backgroundurl: /static/skillmap/backgrounds/galaxy-comp1.png
* primarycolor: #ffa000
* secondarycolor: #ff07d9
* tertiarycolor: #001122
* highlightcolor: #ffffff
* completednodecolor: #31125d
* tags: space, projectiles
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md


## galaxy
* name: Save the Galaxy
* layout: manual

### galaxy1
* name: Prepare Your Ship
* type: tutorial
* description: Get your spaceship ready for an adventure!
* tags: easy, sprites, scroller
* next: galaxy2
* url: /skillmap/galaxy/galaxy1
* imageUrl: /static/skillmap/galaxy/galaxy1.gif
* position: 0 1

### galaxy2
* name: Communication is Key!
* type: tutorial
* description: Equip your ship with projectiles to update satellites.
* tags: easy, projectiles, kinds, overlaps
* next: galaxy3
* url: /skillmap/galaxy/galaxy2
* imageUrl: /static/skillmap/galaxy/galaxy2.gif
* position: 0 3

### galaxy3
* name: Here Comes Trouble
* description: Make sure to transmit the information you need to send, but don't get hit by asteroids.
* type: tutorial
* tags: intermediate, collisions, kinds, animations
* next: galaxy-cert-1
* url: /skillmap/galaxy/galaxy3
* imageUrl: /static/skillmap/galaxy/galaxy3.gif
* position: 4 3



### galaxy-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/galaxy-cert.png
* url: /static/skillmap/certificates/galaxy-cert.pdf
* position: 4 1
* actions:
    * map: [Try 80s Rockstar Maze](/skillmap/rockstar)
    * map: [Try Jungle Jump](/skillmap/jungle)
    * editor: [Mod This Project](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/galaxy-cert.pdf
        * preview:  /static/skillmap/certificates/galaxy-cert.png
    * completion-badge:
        * image: /static/badges/badge-galaxy.png
        * name: Save the Galaxy