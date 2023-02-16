# Text-Adventure
* name: Your Big Adventure
* description: Code your own text-based adventure inspired by the movie Dungeons & Dragons: Honor Among Thieves
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: https://media.giphy.com/media/oPp3DLbHzo8jSLyXYW/giphy.gif
* backgroundurl: /static/skillmap/backgrounds/adventure-comp1.png
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
* imageUrl: https://media.giphy.com/media/fYru9bLqxEeTqyBmRg/giphy.gif
* position: 1 2


### adventure3
* name: Get Animated
* type: tutorial
* description: Finish your game by adding a thrilling carnival sound and real frame-by-frame animations!
* tags: easy, clicker, sprite, buttons
* next: adventure4
* url: /test/skillmap/adventure/adventure3
* imageUrl: https://media.giphy.com/media/zRW20g1KJpzQg8rbcE/giphy.gif
* position: 1 1




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
