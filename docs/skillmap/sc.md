# Shang-Chi and the Legend of the Ten Rings
* name: Shang-Chi and the Legend of the Ten Rings
* description: Create your own amazing adventure based on the movie Shang-Chi and the Legend of the Ten Rings! Guided by an intro-level tutorial, you'll use code to train Shang-Chi or Xialing to build magic platforms, seek out mystical rings, and battle the Mandarin's goons.
* infoUrl: skillmap/educator-info/int-map-info
* bannerUrl: /static/skillmap/sc/sc6.gif
* backgroundurl: /static/skillmap/backgrounds/sc-comp.png
* primarycolor: #ffffff
* secondarycolor: #b32027
* tertiarycolor: #000000
* highlightcolor: #fcd34b
* completednodecolor: #352125


## Shang-Chi and the Legend of the Ten Rings
* name: Shang-Chi and the Legend of the Ten Rings
* layout: manual

### sc1
* allowcodecarryover: false
* name: Opening Scene
* type: tutorial
* description: Add your player to the screen and make it move with arrow keys. Also add jump.
* url: /skillmap/sc/sc1
* imageUrl: /static/skillmap/sc/sc1.gif
* tags: easy
* next: sc2
* position: 0 1

### sc2
* name: Know Your Surroundings
* type: tutorial
* description: Add dangerous tiles, an end goal, and the rings to the scene
* url: /skillmap/sc/sc2
* imageUrl: /static/skillmap/sc/sc2.gif
* tags: easy, tiles, tilemaps
* next: sc3
* position: 0 2

### sc3
* name: Martial Arts Training
* type: tutorial
* description: Give your player the ability to add blocks to the scene so you can get past obstacles
* url: /skillmap/sc/sc3
* imageUrl: /static/skillmap/sc/sc3.gif
* tags: easy, events
* next: sc4
* position: 1 2

### sc4
* name: Power Kick
* type: tutorial
* description: Give your character the ability to destroy walls with an animated power kick
* url: /skillmap/sc/sc4
* imageUrl: /static/skillmap/sc/sc4.gif
* tags: easy, events, overlap
* next: sc5
* position: 1 3

### sc5
* name: Animated Characters
* type: tutorial
* description: Now that we've learned to animate, let's animate the rest of the main character's actions
* url: /skillmap/sc/sc5
* imageUrl: /static/skillmap/sc/sc5.gif
* tags: easy, animations
* next: sc6
* position: 2 3

### sc6
* name: Here Comes Trouble
* type: tutorial
* description: Add goons to the scene, animate them, and make them chase the hero
* url: /skillmap/sc/sc6
* imageUrl: /static/skillmap/sc/sc6.gif
* tags: easy, events, overlap, lives
* next: sc6a, sc7
* position: 3 3


### sc6a
* name: Packs a Punch
* type: tutorial
* description: Add the code for goons to take hit points, and for your kick to destroy them
* url: /skillmap/sc/sc6a
* imageUrl: /static/skillmap/sc/sc6a.gif
* tags: easy, animations
* next: sc6b
* position: 3 4

### sc6b
* name: Smarter Goons
* type: tutorial
* description: Ten Rings goons wouldn't be stopped by a simple roadblock! Give them the ability to know when something is in their way so they can try to jump it
* url: /skillmap/sc/sc6b
* imageUrl: /static/skillmap/sc/sc6b.gif
* tags: easy, animations
* next: sc7
* position: 4 4




### sc7
* name: On Another Level
* type: tutorial
* description: There's only five rings in the first level!  Let's add Level 2 so your player can collect all 10 rings!
* url: /skillmap/sc/sc7
* imageUrl: /static/skillmap/sc/sc7.gif
* tags: easy, levels, tilemaps
* next: sc-cert-1
* position: 4 3


### sc8
* name: Bigger and Better
* type: tutorial
* description: (Optional) Not ready to stop? Keep going with these three prompts.  Can you figure out how to make them happen on your own?
* url: /skillmap/sc/sc8
* imageUrl: /static/skillmap/sc/sc8.gif
* tags: intermediate, art, assets
* position: 6 1


### sc-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/platformer-cert.png
* url: /static/skillmap/certificates/learn-to-make-a-platformer.pdf
* next: sc8
* position: 5 2
* edges: 6 2




