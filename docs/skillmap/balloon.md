# Balloon Race
* name: Balloon Race
* description: Create a simple carnival game where you shuffle three cups, then guess which cup is hiding the ball.
* infoUrl: skillmap/educator-info/cup-map-info
* bannerUrl: /static/skillmap/cups/cup3.gif
* backgroundurl: /static/skillmap/backgrounds/balloon-comp.png
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #ffffff
* completednodecolor: #a4839e
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## balloon-race
* layout: manual


### balloon1
* allowcodecarryover: false

* name: Let's Get Clicking
* type: tutorial
* description: Learn to use MakeCode Arcade before creating a thrilling clicker game.
* tags: easy, intro, points
* next: balloon2
* url: /skillmap/balloon/balloon1
* imageUrl: /static/skillmap/balloon/balloon1.gif
* position: 0 0



### balloon2
* name: Join the Audience
* type: tutorial
* description: Add an audience that applauds as you click!
* tags: easy, clicker, game, events
* next: balloon3
* url: /skillmap/balloon/balloon2
* imageUrl: /static/skillmap/balloon/balloon2.gif
* position: 1 0


### balloon3
* name: The Biggest Star
* type: tutorial
* description: Add code to create a spray of stars with each click!
* tags: easy, clicker, projectiles
* next: balloon-cert
* url: /skillmap/balloon/balloon3
* imageUrl: /static/skillmap/balloon/balloon3.gif
* position: 1 1




### balloon-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/balloon-cert.pdf
* imageUrl: /static/skillmap/certificates/balloon-cert.png
* position: 3 1
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/balloon-cert.pdf
        * preview: /static/skillmap/certificates/balloon-cert.png
    * completion-badge:
        * image: /static/badges/badge-balloon.png
        * name: Balloon Race



