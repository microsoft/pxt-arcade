# Peach Racer
* name: Peach Racer
* description: Create a side-scrolling racing game where you jump obstacles to get to the finish line.
* backgroundurl: /static/skillmap/backgrounds/peachtree-bg.png
* bannerurl: /static/skillmap/peachtree/peach3.gif

* primarycolor: #fa8033
* secondarycolor: #fdf60c
* tertiarycolor: #000000
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #504c52

## peach-racer
* name: Peach Racer
* layout: manual

### peach1
* name: Ready, Set, Go!
* type: tutorial
* description: Get your peach moving and try to make it to the end of the track.
* url: /skillmap/peachtree/peach1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/peachtree/peach1.gif
* next: peach2
* position: 1 -1

### peach2
* name: Over and Under
* type: tutorial
* description: Code actions to help your peach survive hurdles along the path.
* url: /skillmap/peachtree/peach2
* tags: easy, velocity, events
* imageUrl: /static/skillmap/peachtree/peach2.gif
* next: peach-finish
* position: 2 -1



### peach-finish
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/peachtree/peach-cert.png
* url: /static/skillmap/peachtree/peach-cert.pdf
* next: peach3
* position: 3 0
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Mod this Project](/)
* rewards:
    * certificate:
        * url: /static/skillmap/peachtree/peach-cert.pdf
        * preview: /static/skillmap/peachtree/peach-cert.png
    * completion-badge:
        * image: /static/skillmap/peachtree/badge-peach.png
        * name: Peachtree




### peach3
* name: Customize Your Racer
* type: tutorial
* description: Customize your game and make it your own by adding animations and changing your tilemap.
* url: /skillmap/peachtree/peach3
* tags: optional, tilemaps
* imageUrl: /static/skillmap/peachtree/peach3.gif
* position: 4 0
