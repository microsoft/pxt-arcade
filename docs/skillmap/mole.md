# Whack-the-Mole
* name: Whack-the-Mole
* description: Create your own mole whacking carnival game. Double-click the first level to start.
* infoUrl: skillmap/educator-info/mole-map-info
* bannerUrl: /static/skillmap/mole/mole3.gif
* backgroundurl: /static/skillmap/backgrounds/mole-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #82cd54
* completednodecolor: #604c4e
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## whack-the-mole
* layout: manual


### mole1
* allowcodecarryover: false

* name: Mole Hunt
* type: tutorial
* description: Learn to use MakeCode Arcade and add a sneaky mole sprite to your project.
* tags: easy, sprite, random
* next: mole2
* url: /skillmap/mole/mole1
* imageUrl: /static/skillmap/mole/mole1.gif
* position: -1 1



### mole2
* name: Hammer Time
* type: tutorial
* description: Add a rubber hammer to tag the mole and earn points! How many points can you get before time runs out?
* tags: easy, sprite, overlap, points
* next: mole3
* url: /skillmap/mole/mole2
* imageUrl: /static/skillmap/mole/mole2.gif
* position: 0 1


### mole3
* name: Get Animated
* type: tutorial
* description: Finish your game by adding a thrilling carnival sound and real frame-by-frame animations!
* tags: easy, clicker, sprite, buttons
* next: mole4
* url: /skillmap/mole/mole3
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 1



### mole4
* name: Play with Friends
* type: tutorial
* description: Want to play with friends? A few simple changes will have you playing chase in no time!
* tags: easy, clicker, multiplayer, buttons
* next: mole-cert
* url: /skillmap/mole/mole4
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 0


### mole-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/mole-cert.pdf
* imageUrl: /static/skillmap/certificates/mole-cert.png
* showMultiplayerShare: true
* position: 2 0
* actions:
    * map: [Try Burstin' Balloons](/skillmap/balloon)
    * editor: [Open in Creative Mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/mole-cert.pdf
        * preview: /static/skillmap/certificates/mole-cert.png
    * completion-badge:
        * image: /static/badges/badge-mole.png
        * name: Whack-the-Mole
