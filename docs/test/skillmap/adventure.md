# Text-Adventure
* name: Your Big Adventure
* description: Code your own text-based adventure based on the movie Dungeons & Dragons: Honor Among Thieves
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: /static/skillmap/adventure/adventure3.gif
* backgroundurl: /static/skillmap/backgrounds/adventure-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #82cd54
* completednodecolor: #604c4e
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: creative, intermediate, conditionals


## adventure
* layout: manual


### adventure1
* allowcodecarryover: false

* name: Rolling Dice
* type: tutorial
* description: Use a roll of the die to figure out what adventures your player will have.
* tags: random, conditionals
* next: mole2
* url: /test/skillmap/adventure/adventure1
* imageUrl: /static/skillmap/adventure/adventure1.gif
* position: -1 1



### adventure2
* name: Rolling Dice
* type: tutorial
* description: Use a roll of the die to figure out what adventures your player will have.
* tags: random, conditionals
* next: mole3
* url: /test/skillmap/adventure/adventure2
* imageUrl: /static/skillmap/adventure/adventure2.gif
* position: 0 1


### adventure3
* name: Get Animated
* type: tutorial
* description: Finish your game by adding a thrilling carnival sound and real frame-by-frame animations!
* tags: easy, clicker, sprite, buttons
* next: mole4
* url: /test/skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 1



### adventure4
* name: Play with Friends
* type: tutorial
* description: Want to play with friends? A few simple changes will have you playing chase in no time!
* tags: easy, clicker, multiplayer, buttons
* next: mole-cert
* url: /test/skillmap/adventure/adventure4
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 0


### adventure-cert
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
