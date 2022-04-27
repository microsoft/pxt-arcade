# Turkey Day!
* name: Turkey Day!
* description: It's time to break out! Help your turkey free all of its friends and climb to freedom in this fast-paced vertical platformer.
* infoUrl: /skillmap/educator-info/turkey-map-info
* backgroundurl: /static/skillmap/backgrounds/turkey-comp.png
* bannerurl: /static/skillmap/turkey/turkey2.gif
* primarycolor: #e77038
* secondarycolor: #fdf60c
* tertiarycolor: #77dc52
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## turkey-day
* name: Turkey Day
* layout: manual

### turkey0
* name: Get to Know Make Code
* type: tutorial
* description: Learn to use MakeCode Arcade, then create a main player for your game!
* url: /skillmap/turkey/turkey0
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/turkey/turkey1.gif
* next: turkey1a
* position: 0 -1

### turkey1a
* name: Get Moving
* type: tutorial
* description: Help your turkey move around the tilemap and jump from platform to platform!
* url: /skillmap/turkey/turkey1a
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/turkey/turkey1.gif
* next: turkey2
* position: 1 -1

### turkey2
* name: Gather a Crowd
* type: tutorial
* description: Write the code that lets your turkey free its friends from their cages. But watch out!  You're sure to gather a crowd.
* url: /skillmap/turkey/turkey2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/turkey/turkey2.gif
* next: turkey3
* position: 2 0

### turkey3
* name: Win or Lose
* type: tutorial
* description: Set a timer and challenge yourself to free the turkeys and fly the coop as quickly as possible!
* url: /skillmap/turkey/turkey3
* tags: easy, overlap, timer
* imageUrl: /static/skillmap/turkey/turkey3.gif
* next: turkey-finish
* position: 3 0


### turkey-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/turkey-cert.pdf
* imageUrl: /static/skillmap/certificates/turkey-cert.png
* position: 3 1
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/turkey-cert.pdf
        * preview: /static/skillmap/certificates/turkey-cert.png
    * completion-badge:
        * image: /static/badges/badge-turkey.png
        * name: Turkey Day

