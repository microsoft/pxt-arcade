# Shark Splash
* name: Shark Splash
* description: The deep sea is a fascinating place! This skillmap will guide you through the ocean as a shark on a journey to find food and avoid enemy submarines.
* infoUrl: skillmap/educator-info/shark-map-info
* backgroundurl: /static/skillmap/backgrounds/shark-attack-bg.png
* bannerurl: /static/skillmap/shark/shark4a.gif
* primarycolor: #ff93c4
* secondarycolor: #87f2ff
* tertiarycolor: #5c406c
* strokecolor: #5c406c
* highlightcolor: #fff609
* completednodecolor: #473c4d

## shark
* name: Shark Splash
* layout: manual

### shark1
* name: Swimming with Sharks
* type: tutorial
* description: First, we'll plop a shark into the vast ocean, then we'll give it lasers!
* url: /skillmap/shark/shark1
* tags: easy, sprites, projectiles
* imageUrl: /static/skillmap/shark/shark1.gif
* next: shark2, shark1a
* position: 0 0

### shark1a
* name: Beware the Enemy
* type: tutorial
* description: Spawn enemy submarines that track your shark!
* url: /skillmap/shark/shark1a
* tags: easy, design, background
* imageUrl: /static/skillmap/shark/shark1a.gif
* next: shark1b
* position: 0 2

### shark1b
* name: Enemies Attack!
* type: tutorial
* description: Turn your project into a game by adding damage every time a submarine catches your shark.
* url: /skillmap/shark/shark1b
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/shark/shark1b.gif
* next: shark1c
* position: 1 2

### shark1c
* name: Laser Focus
* type: tutorial
* description: You have enemies. You have lasers. Let's put them together!
* url: /skillmap/shark/shark1c
* tags: easy, enemies, points
* imageUrl: /static/skillmap/shark/shark1c.gif
* next: shark2
* position: 2 2
* edges: 2 1, 1 1



### shark2
* name: Food, Not Friends
* type: tutorial
* description: A shark's gotta eat!  Learn to make fish appear all over the ocean.
* url: /skillmap/shark/shark2
* tags: easy, spawn, sprites
* imageUrl: /static/skillmap/shark/shark2.gif
* next: shark3
* position: 1 0


### shark3
* name: Eat Up!
* type: tutorial
* description: Add points for each fish you catch in 15 seconds!
* url: /skillmap/shark/shark3
* tags: easy, enemies, overlaps
* imageUrl: /static/skillmap/shark/shark3.gif
* next: shark4
* position: 2 0


### shark4

* name: Under the Sea
* type: tutorial
* description: Decorate your shark's surroundings with an ocean background and seaweed.
* url: /skillmap/shark/shark4
* tags: easy, background, decorations
* imageUrl: /static/skillmap/shark/shark4.gif
* next: shark-finish, shark4a, shark4b
* position: 3 0

### shark4a

* name: Let's Get Animated
* type: tutorial
* description: Bring your game to life with custom animations for your characters.
* url: /skillmap/shark/shark4a
* tags: easy, animations
* imageUrl: /static/skillmap/shark/shark4a.gif
* position: 4 1

### shark4b

* name: A Whole New World
* type: tutorial
* description: Give your game a brand new theme and really make it yours!
* url: /skillmap/shark/shark4b
* tags: easy, background, decorations, asset editor
* imageUrl: /static/skillmap/shark/shark4b.gif
* position: 4 2


### shark-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/shark-cert.pdf
* imageUrl: /static/skillmap/certificates/shark-cert.png
* position: 4 0
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/shark-cert.pdf
        * preview: /static/skillmap/certificates/shark-cert.png
    * completion-badge:
        * image: /static/badges/badge-shark.png
        * name: Shark Splash


