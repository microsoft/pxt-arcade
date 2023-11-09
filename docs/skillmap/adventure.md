# Text-Adventure
* name: Code an Adventure
* description: Code your own text-based adventure complete with its own theme song!
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: /static/skillmap/adventure/adventure3.gif
* backgroundurl: /static/skillmap/backgrounds/adventure-comp.png
* primarycolor: #faeece
* secondarycolor: #8c281d
* tertiarycolor: #004b87
* completednodecolor: #202c1b
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: creative, intermediate, conditionals


## adventure
* layout: manual


### adventure1
* allowcodecarryover: false

* name: Start Your Journey
* type: tutorial
* description: Create a text-based adventure using conditionals!
* tags: conditionals, text
* next: adventure2
* url: /skillmap/adventure/adventure1
* imageUrl: /static/skillmap/adventure/adventure1.gif
* position: 0 -2



### adventure2
* name: Make it Spectacular
* type: tutorial
* description: Create your own music and images to enhance your adventure!
* tags: music, functions
* next: adventure3
* url: /skillmap/adventure/adventure2
* imageUrl: /static/skillmap/adventure/adventure2.gif
* position: 1 -2


### adventure3
* name: Lives and Gold
* type: tutorial
* description: Finish your game by adding more quests — including danger and rewards!
* tags: lives, score, functions
* next: adventure-cert
* url: /skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 -1




### adventure-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/adventure-cert.pdf
* imageUrl: /static/skillmap/certificates/adventure-cert.png
* showMultiplayerShare: false
* position: 2 -1
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
