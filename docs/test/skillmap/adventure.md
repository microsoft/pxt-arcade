# Text-Adventure
* name: Your Big Adventure
* description: Code your own text-based adventure inspired by the movie Dungeons & Dragons: Honor Among Thieves
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: https://media.giphy.com/media/oPp3DLbHzo8jSLyXYW/giphy.gif
* backgroundurl: https://github.com/kiki-lee/beg-split/blob/master/adventure-comp1.png?raw=true
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #b1dcef
* completednodecolor: #2f484d
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: creative, intermediate, conditionals


## adventure
* layout: manual


### adventure1
* allowcodecarryover: false

* name: Rolling Dice
* type: tutorial
* description: Code your own 20-sided die to begin your adventure.
* tags: random, text
* next: adventure2
* url: /test/skillmap/adventure/adventure1
* imageUrl: https://media.giphy.com/media/XbidWpczmwrmtnJ01e/giphy.gif
* position: 0 2



### adventure2
* name: Start Your Journey
* type: tutorial
* description: Use a roll of the die to figure out what adventures your player will have.
* tags: random, conditionals
* next: adventure3
* url: /test/skillmap/adventure/adventure2
* imageUrl: https://media.giphy.com/media/5Ur2TK63wEciypxyHG/giphy.gif
* position: 1 2


### adventure3
* name: Get Animated
* type: tutorial
* description: Finish your game by adding a thrilling carnival sound and real frame-by-frame animations!
* tags: easy, clicker, sprite, buttons
* next: adventure4
* url: /test/skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 1



### adventure4
* name: Play with Friends
* type: tutorial
* description: Want to play with friends? A few simple changes will have you playing chase in no time!
* tags: easy, clicker, multiplayer, buttons
* next: adventure-cert
* url: /test/skillmap/adventure/adventure4
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 2 1


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
        * name: Code Adventure
