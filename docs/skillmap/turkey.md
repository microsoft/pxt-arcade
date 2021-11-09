# Turkey Day!
* name: Turkey Day!
* description: It's time to break out! Help your turkey free all of its friends and climb to freedom in this fast-paced vertical platformer.
* infoUrl: skillmap/educator-info/turkey-map-info
* backgroundurl: static/backgrounds/turkey-comp.png
* bannerurl: /static/skillmap/turkey/turkey2.gif
* primarycolor: #e77038
* secondarycolor: #fdf60c
* tertiarycolor: #77dc52
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## Turkey
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
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/turkey-cert.pdf
* imageUrl: /static/skillmap/certificates/turkey-cert.png
* position: 3 0
* actions:
    * map: [Try our Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)

