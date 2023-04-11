# Create a Space Adventure
* name: Create a Space Adventure Game
* description: Make a Galaga-style game by following this short series of tutorials. You will create a rocket that fires projectiles at enemies, design your outerspace view, create amazing animations, and MORE!  What are you waiting for?  Double-click the first level to begin!
* infoUrl: skillmap/educator-info/space-map-info
* bannerUrl: /static/skillmap/space/spacet6.gif
* backgroundurl: /static/skillmap/backgrounds/space-comp.png
* primarycolor: #2EA9B0
* secondarycolor: #d6f7fa
* tertiarycolor: #5d416b
* highlightcolor: #FFFFFF
* completednodecolor: #504c52
* tags: intermediate, space, projectiles
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md


## space
* name: Design a Space Explorer
* layout: manual

### space-activity1
* name: Prepare Your Ship
* type: tutorial
* description: Get your spaceship ready for an adventure!
* tags: easy, sprites, scroller
* next: space-activity2
* url: /skillmap/space/space1
* imageUrl: /static/skillmap/space/spacet1.gif
* position: 0 2

### space-activity2
* name: Ready, Aim, Fire!
* type: tutorial
* description: Equip your ship with projectiles and special effects.
* tags: easy, projectiles, kinds
* next: space-activity3
* url: /skillmap/space/space2
* imageUrl: /static/skillmap/space/spacet2.gif
* position: 1 2

### space-activity3
* name: Here Comes Trouble!
* description: Watch out for danger! Add enemies and countdown lives in your game.
* type: tutorial
* tags: intermediate, enemies, kinds
* next: space-activity4a
* url: /skillmap/space/space3
* imageUrl: /static/skillmap/space/spacet3.gif
* position: 2 1

### space-activity4a
* name: All Shook Up
* type: tutorial
* description: Animate your ship
* tags: intermediate, animations
* next: space-activity4
* url: /skillmap/space/space4a
* imageUrl: /static/skillmap/space/spacet4a.gif
* position: 2 3
* edges: 4 3, 3 2

### space-activity4
* name: Fuel Up!
* type: tutorial
* description: Use an extension to add a fuel gauge to your ship. Make sure to refuel often!
* tags: intermediate, extensions
* next: space-activity5
* url: /skillmap/space/space4
* imageUrl: /static/skillmap/space/spacet4.gif
* position: 3 0


### space-activity5
* name: Level Up!
* type: tutorial
* description: Learn how to automatically switch to a new level when the player gains an achievement.
* tags: intermediate, forever
* next: space-activity6, space-cert-1
* url: /skillmap/space/space5
* imageUrl: /static/skillmap/space/spacet5.gif
* position: 4 0

### space-activity6
* name: The Art of Darts
* type: tutorial
* description: Use arrays to switch up the kinds of darts fired from your ship.
* tags: intermediate, arrays, lists
* next: space-cert-1
* url: /skillmap/space/space6
* imageUrl: /static/skillmap/space/spacet6.gif
* position: 5 1

### space-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/space-cert.png
* url: /static/skillmap/certificates/space-cert.pdf
* position: 5 0
* actions:
    * map: [Try 80s Rockstar Maze](/skillmap/rockstar)
    * map: [Try Jungle Jump](/skillmap/jungle)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/space-cert.pdf
        * preview:  /static/skillmap/certificates/space-cert.png
    * completion-badge:
        * image: /static/badges/badge-space.png
        * name: Space Explorer