# Turkey Day!
* name: Turkey Day!
* description: It's time to break out! Help your turkey free all of its friends and climb to freedom in this fast-paced vertical platformer. Double-click the first level to start.
* infoUrl: /skillmap/educator-info/turkey-map-info
* backgroundurl: /static/skillmap/backgrounds/turkey-comp.gif
* bannerurl: /static/skillmap/turkey/turkey2.gif
* primarycolor: #cda6cc
* secondarycolor: #ffffff
* tertiarycolor: #baefff
* strokecolor: #fdf60c
* highlightcolor: #fdf60c
* completednodecolor: #003457


## turkey-day
* name: Turkey Day
* layout: manual

### turkey1
* name: Move the Turkey
* type: tutorial
* description: Create a turkey and help it move around the tilemap!
* url: /skillmap/turkey/turkey1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/turkey/turkey1.gif
* next: turkey2
* position: 0 -1

### turkey2
* name: Gather a Crowd
* type: tutorial
* description: Write the code that lets your turkey free its friends from their cages. But watch out!  You're sure to gather a crowd.
* url: /skillmap/turkey/turkey2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/turkey/turkey2.gif
* next: turkey3
* position: 1 -1

### turkey3
* name: Win or Lose
* type: tutorial
* description: Set a timer and challenge yourself to free the turkeys and fly the coop as quickly as possible!
* url: /skillmap/turkey/turkey3
* tags: easy, overlap, timer
* imageUrl: /static/skillmap/turkey/turkey3.gif
* next: turkey-finish
* position: 2 0


### turkey-finish
* name: Congratulations!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/turkey-cert.pdf
* imageUrl: /static/skillmap/certificates/turkey-cert.png
* position: 3 0
* actions:
    * map: [Try Burstin' Balloons](/skillmap/balloon)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/turkey-cert.pdf
        * preview: /static/skillmap/certificates/turkey-cert.png
    * completion-badge:
        * image: /static/badges/badge-turkey.png
        * name: Turkey Day

