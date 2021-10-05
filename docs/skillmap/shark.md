# Shark Splash
* name: Shark Splash
* description: The deep sea is a fascinating place! This skillmap will guide you through the ocean as a shark on a journey to find food!
* infoUrl: skillmap/educator-info/simple-shark-map-info
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
* next: shark2
* position: 0 0



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
* position: 1 1


### shark4

* name: Under the Sea
* type: tutorial
* description: Decorate your shark's surroundings with an ocean background and seaweed.
* url: /skillmap/shark/shark4
* tags: easy, background, decorations
* imageUrl: /static/skillmap/shark/shark4.gif
* next: shark4a
* position: 2 1

### shark4a

* name: Let's Get Animated
* type: tutorial
* description: Bring your game to life with custom animations for your characters.
* url: /skillmap/shark/shark4a
* tags: easy, animations
* imageUrl: /static/skillmap/shark/shark4a.gif
* next: shark-finish
* position: 2 0


### shark-finish
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/shark-cert.png
* url: /static/skillmap/certificates/shark-cert.pdf
* position: 3 0
* actions:
    * map: [Try Jungle Monkey Jump](/skillmap/jungle)
    * map: [Try our Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)

