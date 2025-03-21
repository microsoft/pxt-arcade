# Sparks Flying
* name: Sparks Flying
* description: Set in prehistoric Israel, this tutorial will help you create a game that challenges you to light a fire to keep yourself warm, but be careful! It's not as easy as it sounds!  Double-click the first level to begin.
* infoUrl: skillmap/educator-info/spark-map-info
* bannerUrl: /static/skillmap/sparks/campfire.gif
* backgroundurl: /static/skillmap/backgrounds/sparks-comp.png
* primarycolor: #bebebe
* secondarycolor: #ffb200
* tertiarycolor: #0d1a36
* completednodecolor: #5f282a
* highlightcolor: #ffff00
* allowcodecarryover: true
* tags: prehistoric, educational, clicker


## sparks-flying
* layout: manual


### sparks1
* allowcodecarryover: false
* name: Pile of Sticks
* type: tutorial
* description: Learn to use MakeCode Arcade and add a classic firepit to the center of your clicker game.
* tags: easy, sprite, effects, events
* next: sparks2
* url: /skillmap/sparks/sparks1
* imageUrl: /static/skillmap/sparks/sparks1.gif
* position: 0 -2



### sparks2
* name: Win Some, Lose Some
* type: tutorial
* description: Add code to include some win and loss options to your amazing clicker game.
* tags: easy, events, win, loss
* next: sparks-cert
* url: /skillmap/sparks/sparks2
* imageUrl: /static/skillmap/sparks/sparks2.gif
* position: 1 -2

<!--
### sparks3
* name: Get Animated
* type: tutorial
* description: Finish your game by adding a thrilling carnival sound and real frame-by-frame animations!
* tags: easy, clicker, sprite, buttons
* next: sparks4
* url: /skillmap/sparks/sparks3
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 1



### sparks4
* name: Play with Friends
* type: tutorial
* description: Want to play with friends? A few simple changes will have you playing chase in no time!
* tags: easy, clicker, multiplayer, buttons
* next: sparks-cert
* url: /skillmap/sparks/sparks4
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 0
-->

### sparks-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/sparks-cert.pdf
* imageUrl: /static/skillmap/certificates/sparks-cert.png
* showMultiplayerShare: false
* position: 2 -2
* actions:
    * map: [Try Burstin' Balloons](/skillmap/balloon)
    * editor: [Open in Creative Mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/sparks-cert.pdf
        * preview: /static/skillmap/certificates/sparks-cert.png
    * completion-badge:
        * image: /static/badges/badge-sparks.png
        * name: Sparks Flying
