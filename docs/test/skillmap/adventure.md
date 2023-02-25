# Text-Adventure
* name: Code an Adventure
* description: Code your own text-based adventure inspired by the movie Dungeons & Dragons: Honor Among Thieves
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: /static/skillmap/adventure/dd-logo.png
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

* name: Start Your Journey
* type: tutorial
* description: Create an adventure using conditionals
* tags: conditionals, text
* next: adventure2
* url: /test/skillmap/adventure/adventure1
* imageUrl: /static/skillmap/adventure/owlbear.png
* position: 1 2



### adventure2
* name: Make it Spectacular
* type: tutorial
* description: Create your own music and images to enhance out your adventure!
* tags: music, functions
* next: adventure3
* url: /test/skillmap/adventure/adventure2
* imageUrl: /static/skillmap/adventure/bard.png
* position: 1 1


### adventure3
* name: Lives and Gold
* type: tutorial
* description: Finish your game by adding more quests — including danger and rewards!
* tags: lives, score, functions
* next: adventure-cert
* url: /test/skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/mimic.png
* position: 2 1




### adventure-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/adventure-cert.pdf
* imageUrl: /static/skillmap/certificates/adventure-cert.png
* showMultiplayerShare: false
* position: 2 0
* actions:
    * map: [Try Burstin' Balloons](/skillmap/balloon)
    * editor: [Open in Creative Mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/adventure-cert.pdf
        * preview: /static/skillmap/certificates/adventure-cert.png
    * completion-badge:
        * image: /static/badges/badge-adventure.png
        * name: Code Adventure
