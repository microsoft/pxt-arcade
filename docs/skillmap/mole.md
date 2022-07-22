# Whack'em All
* name: Whack'em All
* description: Create your own 'Whack-a-Mole' style of carnival game.
* infoUrl: skillmap/educator-info/mole-map-info
* bannerUrl: /static/skillmap/mole/mole3.gif
* backgroundurl: /static/skillmap/backgrounds/mole-comp.png
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #bbeffe
* completednodecolor: #4a8397
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## whackem-all
* layout: manual


### mole1
* allowcodecarryover: false

* name: Mole Hunt
* type: tutorial
* description: Learn to use MakeCode Arcade and add a character sprite to your project.
* tags: intermediate, sprite, clicker
* next: mole2
* url: /skillmap/mole/mole1
* imageUrl: /static/skillmap/mole/mole1.gif
* position: -1 2



### mole2
* name: Whack'em
* type: tutorial
* description: Add a hammer to help you catch the mole!
* tags: intermediate, clicker, sprite, events
* next: mole3
* url: /skillmap/mole/mole2
* imageUrl: /static/skillmap/mole/mole2.gif
* position: 0 2


### mole3
* name: Get Animated
* type: tutorial
* description: Add sound and animation!
* tags: easy, clicker, sprite, buttons
* next: mole-cert
* url: /skillmap/mole/mole3
* imageUrl: /static/skillmap/backgrounds/mouse-comp.png
* position: 1 2




### mole-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/mole-cert.pdf
* imageUrl: /static/skillmap/certificates/mole-cert.png
* next: mole4
* position: 2 2
* actions:
    * map: [Finish the Last Level!](/skillmap/mole)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/mole-cert.pdf
        * preview: /static/skillmap/certificates/mole-cert.png
    * completion-badge:
        * image: /static/badges/badge-mole.png
        * name: Whack'em Mole




### mole4
* name: Fancy Booth
* type: tutorial
* description: Add extra decorations to your game to lure in carnival goers.
* tags: intermediate, clicker, sprite, buttons
* url: /skillmap/mole/mole4
* imageUrl: /static/skillmap/mole/mole4.gif
* position: 2 3