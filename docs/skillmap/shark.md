# Shark Splash
* name: Shark Splash
* description: Design a survival game! We'll start by creating a hero that can throw projectiles, then you can customize the game with enemies, or a detailed setting.
* backgroundurl: static/skillmap/backgrounds/shark-attack-bg.png
* bannerurl: static/skillmap/shark/shark.gif
* primarycolor: #ff93c4
* secondarycolor: #87f2ff
* tertiarycolor: #5c406c
* strokecolor: #5c406c
* highlightcolor: #fff609

## shark
* name: Shark Splash

### shark-character
* name: Set the Scene
* type: tutorial
* description: Create a main character that shoots some projectiles
* url: skillmap/shark/shark1
* tags: easy, sprites, projectiles
* imageUrl: static/skillmap/shark/01-character.gif
* next: shark-enemies, shark-background

### shark-background
* name: Design a Background
* type: tutorial
* description: Draw a world for your hero to explore
* url: skillmap/shark/shark4
* tags: easy, design, background
* imageUrl: static/skillmap/shark/04-background.png
* next: shark-projectile

### shark-projectile
* name: Projectile Effects
* type: tutorial
* description: Let's give those projectiles some power!
* url: skillmap/shark/shark3
* tags: easy, projectiles, enemies
* imageUrl: static/skillmap/shark/03-projectiles.gif
* next: shark-enemies

### shark-enemies
* name: Add Enemies
* type: tutorial
* description: An enemy appears! Fight!
* url: skillmap/shark/shark-02
* tags: easy, enemies
* imageUrl: static/skillmap/shark/02-enemies.gif
* next: shark-enemies-moving

### shark-enemies-moving
* name: Moving Enemies
* type: tutorial
* description: Uh-oh, these enemies are on the go. Learn how to code enemy movement!
* url: skillmap/shark/shark2a
* tags: easy, enemies, movement
* imageUrl: static/skillmap/shark/02-A-enemies.gif
* next: shark-enemies-damage, shark-multiple-enemies

### shark-enemies-damage
* name: Taking Damage
* type: tutorial
* description: Watch out! Have the enemies damage the player if they do not dodge.
* url: skillmap/shark/shark2c
* tags: easy, enemies, overlaps
* imageUrl: static/skillmap/shark/02-C-enemies.gif
* next: shark-finish


### shark-multiple-enemies
* name: Multiple Enemies
* type: tutorial
* description: Let's add a little variety to this challenge. Add multiple types of enemies
* url: skillmap/shark/shark2b
* tags: easy, enemies, overlaps
* imageUrl: static/skillmap/shark/02-B-enemies.gif
* next: shark-finish

### shark-finish
* kind: completion
* type: certificate
* url: static/skillmap/certificates/collector-game.pdf