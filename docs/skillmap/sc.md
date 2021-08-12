# Shang-Chi and the Legend of the Ten Rings
* name: Shang-Chi and the Legend of the Ten Rings
* description: Create an amazing sidescroller based on the movie Shang-Chi and the Legend of the Ten Rings! Using code, you'll train Shang-Chi or Xialing to build magic platforms, seek out mystical rings, and battle the Mandarin's goons.
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
* description: Run and jump
* url: /skillmap/sc/sc1
* imageUrl: /static/skillmap/sc/sc1.gif
* tags: easy
* next: sc2
* position: 0 1

### sc2
* name: Know Your Surroundings
* type: tutorial
* description: Add rings and barriers
* url: /skillmap/sc/sc2
* imageUrl: /static/skillmap/sc/sc2.gif
* tags: easy, tiles, tilemaps
* next: sc3
* position: 0 2

### sc3
* name: Martial Arts Training
* type: tutorial
* description: Add the code to spawn platforms with the touch of a button!
* url: /skillmap/sc/sc3
* imageUrl: /static/skillmap/sc/sc3.gif
* tags: easy, events
* next: sc4
* position: 1 2

### sc4
* name: Power Kick
* type: tutorial
* description: Use martial arts to clear platforms!
* url: /skillmap/sc/sc4
* imageUrl: /static/skillmap/sc/sc4.gif
* tags: easy, events, overlap
* next: sc5
* position: 1 3

### sc5
* name: Here Comes Trouble
* type: tutorial
* description: Add goons from the Ten Rings organization
* url: /skillmap/sc/sc5
* imageUrl: /static/skillmap/sc/sc5.gif
* tags: easy, events, overlap, lives
* next: sc5a, sc6
* position: 2 3


### sc5a
* name: Packs a Punch
* type: tutorial
* description: Defend yourself against the enemy.
* url: /skillmap/sc/sc6
* imageUrl: /static/skillmap/sc/sc6.gif
* tags: easy, animations
* next: sc5b
* position: 2 4

### sc5b
* name: Smarter Goons
* type: tutorial
* description: Use simple AI to keep the enemy on the move.
* url: /skillmap/sc/sc6
* imageUrl: /static/skillmap/sc/sc6.gif
* tags: easy, animations
* next: sc6
* position: 3 4
* edges: 4 4

### sc6
* name: Animated Characters
* type: tutorial
* description: Bring your code to life with animation.
* url: /skillmap/sc/sc6
* imageUrl: /static/skillmap/sc/sc6.gif
* tags: easy, animations
* next: sc7
* position: 4 3


### sc7
* name: On Another Level
* type: tutorial
* description: Add another level to the end of your project!
* url: /skillmap/sc/sc7
* imageUrl: /static/skillmap/sc/sc7.gif
* tags: easy, levels, tilemaps
* next: sc-cert-1
* position: 5 3


### sc8
* name: Bigger and Better
* type: tutorial
* description: Your imagination is the limit!
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




