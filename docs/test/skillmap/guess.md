# Guess My Number
* name: Guess My Number
* description: Create a simple number guessing game. It might feel like magic...but it's code!
* infoUrl: skillmap/educator-info/puzzle-map-info
* bannerUrl: /static/skillmap/puzzle/puzzle3.gif
* backgroundurl: /static/skillmap/backgrounds/puzzle-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #96ecfd
* completednodecolor: #4a8397
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, numbers


## guess-my-number
* layout: manual


### guess1
* allowcodecarryover: false

* name: Create a Clicker
* type: tutorial
* description: Learn to use MakeCode Arcade and create a simple clicker game.
* tags: easy, intro, points, clicker
* next: balloon2
* url: /test/skillmap/balloon/balloon1a
* imageUrl: /static/skillmap/balloon/balloon1.gif
* position: -1 2



### guess1
* name: Burst Your Balloon
* type: tutorial
* description: Add a balloon that inflates as you click! You'll be shocked to see how full it gets before time runs out.
* tags: easy, clicker, sprite, events
* next: balloon3
* url: /test/skillmap/balloon/balloon2a
* imageUrl: /static/skillmap/balloon/balloon2.gif
* position: 0 2


### guess3
* name: Pump it Up
* type: tutorial
* description: Add a carnival character to pump up your balloon! Can you beat the clock?
* tags: easy, clicker, sprite, buttons
* next: balloon-cert
* url: /test/skillmap/balloon/balloon3a
* imageUrl: /static/skillmap/balloon/balloon3.gif
* position: 1 2




### guess-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/balloon-cert.pdf
* imageUrl: /static/skillmap/certificates/balloon-cert.png
* next: balloon4
* position: 2 2
* actions:
    * map: [Finish the Last Level](/skillmap/balloon)
    * editor: [Add More to This Game](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/balloon-cert.pdf
        * preview: /static/skillmap/certificates/balloon-cert.png
    * completion-badge:
        * image: /static/badges/badge-balloon.png
        * name: Balloon Race




### balloon4
* name: Two Player Party (Optional)
* type: tutorial
* description: Remove your timer and add a second player to create a real-life competition!
* tags: easy, clicker, sprite, buttons, multiplayer
* url: /test/skillmap/balloon/balloon4a
* imageUrl: /static/skillmap/balloon/balloon4.gif
* position: 2 3

