# Monster Racer
* name: Monster Racer
* description: Create a side-scrolling monster truck racing game so you can jump obstacles and get your monster truck to the finish line.
* infoUrl: skillmap/educator-info/racer-map-info
* backgroundurl: /static/skillmap/backgrounds/racer-comp.gif
* bannerurl: /static/skillmap/racer/racer3.gif

* primarycolor: #fa8033
* secondarycolor: #fdf60c
* tertiarycolor: #000000
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #504c52

## Monster Racer
* name: Monster Racer
* layout: manual

### racer1
* name: Ready, Set, Go!
* type: tutorial
* description: Get your monster truck moving and try to make it to the end of your cave.
* url: /test/skillmap/racer/racer1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Over and Under
* type: tutorial
* description: Code actions to help your racer survive the pits and perils of the cave.
* url: /test/skillmap/racer/racer2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/racer/racer2.gif
* next: racer-finish
* position: 2 -1



### racer-finish
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/racer-cert.png
* url: /static/skillmap/certificates/racer-cert.pdf
* next: racer3
* position: 3 0
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/racer-cert.pdf
        * preview: /static/skillmap/certificates/racer-cert.png
    * completion-badge:
        * image: /static/badges/badge-racer.png
        * name: Monster Truck




### racer3
* name: Going Further (Optional)
* type: tutorial
* description: Customize your game and make it your own by adding animations and changing your tilemap.
* url: /test/skillmap/racer/racer3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/racer/racer3.gif
* position: 4 0
