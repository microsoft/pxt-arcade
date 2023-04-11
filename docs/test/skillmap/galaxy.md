# Save the Galaxy
* name: Save the Galaxy
* description: Make a Galaga-style game by following this short series of tutorials. You will create a rocket that transmits information to satellites, design your outerspace view, create amazing animations, and MORE!  What are you waiting for?  Double-click the first level to begin!
* infoUrl: skillmap/educator-info/galaxy-map-info
* bannerUrl: /static/skillmap/galaxy/galaxy6.gif
* backgroundurl: /static/skillmap/backgrounds/space-comp.png
* primarycolor: #ffa000
* secondarycolor: #ff07d9
* tertiarycolor: #ffffff
* highlightcolor: #ff0081
* completednodecolor: #31125d
* tags: intermediate, space, projectiles
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
* url: /test/skillmap/galaxy/galaxy1
* imageUrl: /static/skillmap/galaxy/galaxy1.gif
* position: 0 0

### galaxy2
* name: Ready, Aim, Fire!
* type: tutorial
* description: Equip your ship with projectiles and special effects.
* tags: easy, projectiles, kinds
* next: galaxy3
* url: /test/skillmap/galaxy/galaxy2
* imageUrl: /static/skillmap/galaxy/galaxy2.gif
* position: 0 3

### galaxy3
* name: Communication is Key!
* description: Make sure to transmit the information you need to send, but don't get hit by rogue satellites.
* type: tutorial
* tags: intermediate, collisions, kinds
* next: galaxy4
* url: /test/skillmap/galaxy/galaxy3
* imageUrl: /static/skillmap/galaxy/galaxy3.gif
* position: 2 3

### galaxy4
* name: All Shook Up
* type: tutorial
* description: Animate your ship
* tags: intermediate, animations
* next: galaxy-cert-1
* url: /test/skillmap/galaxy/galaxy4a
* imageUrl: /static/skillmap/galaxy/galaxy4a.gif
* position: 4 3




### galaxy-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/galaxy-cert.png
* url: /static/skillmap/certificates/galaxy-cert.pdf
* position: 4 0
* actions:
    * map: [Try 80s Rockstar Maze](/skillmap/rockstar)
    * map: [Try Jungle Jump](/skillmap/jungle)
    * editor: [Mod This Project](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/space-cert.pdf
        * preview:  /static/skillmap/certificates/space-cert.png
    * completion-badge:
        * image: /static/badges/badge-space.png
        * name: Space Explorer