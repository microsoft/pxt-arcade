# Shark Splash
* name: Shark Splash
* description: The deep sea is a fascinating place! This skillmap will guide you through the ocean as a shark on a journey to find food and avoid crabby sealife.
* backgroundurl: static/skillmap/backgrounds/shark-attack-bg.png
* bannerurl: static/skillmap/shark/shark.gif
* primarycolor: #ff93c4
* secondarycolor: #87f2ff
* tertiarycolor: #5c406c
* strokecolor: #5c406c
* highlightcolor: #fff609

## shark
* name: Shark Splash

### shark1
* name: Set the Scene
* type: tutorial
* description: Create a main character that FIRES LASERS!
* url: skillmap/shark/shark1
* tags: easy, sprites, projectiles
* imageUrl: /static/skillmap/shark/shark1.gif
* next: shark1a, shark2

### shark1a
* name: Beware the Enemy
* type: tutorial
* description: Crabs might be little,  but they're fierce!  Learn how to spawn enemies for your shark to avoid.
* url: skillmap/shark/shark1a
* tags: easy, design, background
* imageUrl: /static/skillmap/shark/shark1a.gif
* next: shark1b

### shark1b
* name: Enemies Attack!
* type: tutorial
* description: Turn your project into a game by adding damage every time a crab catches your shark.
* url: skillmap/shark/shark1b
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/shark/shark1b.gif
* next: shark1c

### shark1c
* name: Add Enemies
* type: tutorial
* description: An enemy appears! Fight!
* url: skillmap/shark/shark1c
* tags: easy, enemies
* imageUrl: /static/skillmap/shark/shark1b.gif
* next: shark1d

### shark1d
* name: Moving Enemies
* type: tutorial
* description: Uh-oh, these enemies are on the go. Learn how to code enemy movement!
* url: skillmap/shark/shark1d
* tags: easy, enemies, movement
* imageUrl: /static/skillmap/shark/shark1b.gif
* next: shark2

### shark2
* name: Food, Not Friends
* type: tutorial
* description: A shark's gotta eat!  Learn to make fish appear all over the ocean.
* url: skillmap/shark/shark2
* tags: easy, spawn, sprites
* imageUrl: /static/skillmap/shark/shark2.gif
* next: shark3


### shark3
* name: Eat Up!
* type: tutorial
* description: Add points for each fish you catch in 15 seconds!
* url: skillmap/shark/shark3
* tags: easy, enemies, overlaps
* imageUrl: /static/skillmap/shark/shark3.gif
* next: shark4


### shark4
* name: A Whole New World
* type: tutorial
* description: Decorate your shark's surroundings with an ocean background and seaweed.
* url: skillmap/shark/shark4
* tags: easy, background, decorations
* imageUrl: /static/skillmap/shark/shark4.gif
* next: shark-finish

### shark-finish
* kind: completion
* type: certificate
* url: static/skillmap/certificates/collector-game.pdf