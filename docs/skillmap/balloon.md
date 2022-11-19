# Burstin' Balloons
* name: Burstin' Balloons
* description: Create a simple carnival game where you click quickly to try to burst a balloon before time runs out.
* infoUrl: skillmap/educator-info/balloon-map-info
* bannerUrl: /static/skillmap/balloon/balloon3.gif
* backgroundurl: /static/skillmap/backgrounds/mouse-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #96ecfd
* completednodecolor: #4a8397
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## burstin-balloons
* layout: manual


### balloon1
* allowcodecarryover: false

* name: Create a Clicker
* type: tutorial
* description: Learn to use MakeCode Arcade and create a simple clicker game.
* tags: easy, intro, points, clicker
* next: balloon2
* url: /skillmap/balloon/balloon1
* imageUrl: /static/skillmap/balloon/balloon1.gif
* position: -1 2



### balloon2
* name: Burst Your Balloon
* type: tutorial
* description: Add a balloon that inflates as you click! You'll be shocked to see how full it gets before time runs out. Double-click the first level to start.
* tags: easy, clicker, sprite, events
* next: balloon3
* url: /skillmap/balloon/balloon2
* imageUrl: /static/skillmap/balloon/balloon2.gif
* position: 0 2


### balloon3
* name: Pump it Up
* type: tutorial
* description: Add a carnival character to pump up your balloon! Can you beat the clock?
* tags: easy, clicker, sprite, buttons
* next: balloon4
* url: /skillmap/balloon/balloon3
* imageUrl: /static/skillmap/balloon/balloon3.gif
* position: 1 2



### balloon4
* name: Two Player Party
* type: tutorial
* description: Remove your timer and add a second player to create a real-life competition!
* tags: easy, clicker, sprite, buttons, multiplayer
* next: balloon-cert
* url: /skillmap/balloon/balloon4
* imageUrl: /static/skillmap/balloon/balloon4.gif
* position: 2 2


### balloon-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/balloon-cert.pdf
* imageUrl: /static/skillmap/certificates/balloon-cert.png
* showMultiplayerShare: true
* position: 2 3
* actions:
    * map: [Try Whack-the-Mole](/skillmap/mole)
    * editor: [Open in Creative Mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/balloon-cert.pdf
        * preview: /static/skillmap/certificates/balloon-cert.png
    * completion-badge:
        * image: /static/badges/badge-balloon.png
        * name: Balloon Race




