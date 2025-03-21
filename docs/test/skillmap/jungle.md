# Jungle Jump Platformer
* name: Jungle Jump Platformer
* description: Create a wild sidescroller called Jungle Jump! In these activities, you'll code your monkey, add magic platforms, toss explosives, and collect valuables throughout a pair of customizable level maps.
* infoUrl: skillmap/educator-info/jungle-map-info
* bannerUrl: /static/skillmap/jungle/jungle6.gif
* backgroundurl: /static/skillmap/backgrounds/jungle-bg.png
* primarycolor: #2EA9B0
* secondarycolor: #F392BD
* tertiarycolor: #83C252
* highlightcolor: #FAED28
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md



## Build a Platformer Game!
* name: Jungle Jump Platformer
* layout: manual

### jungle1
* allowcodecarryover: false
* name: Moving Monkey
* type: tutorial
* description: Make your player jump and move around!
* url: /skillmap/jungle/jungle1
* imageUrl: /static/skillmap/jungle/jungle1.gif
* tags: easy
* next: jungle2
* position: 0 2

### jungle2
* name: Game Over
* type: tutorial
* description: Add poisonous plants and valuable baubles to your game!
* url: /skillmap/jungle/jungle2
* imageUrl: /static/skillmap/jungle/jungle2.gif
* tags: easy, tiles, tilemaps
* next: jungle3
* position: 1 2

### jungle3
* name: Leaps and Bounds
* type: tutorial
* description: Add the code to spawn platforms with the touch of a button!
* url: /skillmap/jungle/jungle3
* imageUrl: /static/skillmap/jungle/jungle3.gif
* tags: easy, events
* next: jungle4
* position: 1 3

### jungle4
* name: Blown Away
* type: tutorial
* description: Use dynamite to clear platforms!
* url: /skillmap/jungle/jungle4
* imageUrl: /static/skillmap/jungle/jungle4.gif
* tags: easy, events, overlap
* next: jungle5
* position: 2 3

### jungle5
* name: Watch Out!
* type: tutorial
* description: Make your dynamite just a little dangerous.
* url: /skillmap/jungle/jungle5
* imageUrl: /static/skillmap/jungle/jungle5.gif
* tags: easy, events, overlap, lives
* next: jungle6
* position: 2 2


### jungle6
* name: Animations
* type: tutorial
* description: Animate your monkey!
* url: /skillmap/jungle/jungle6
* imageUrl: /static/skillmap/jungle/jungle6.gif
* tags: easy, animations
* next: jungle7
* position: 2 1


### jungle7
* name: Extra Levels
* type: tutorial
* description: Add another level to the end of your game for more fun!
* url: /skillmap/jungle/jungle7
* imageUrl: /static/skillmap/jungle/jungle7.gif
* tags: easy, levels, tilemaps
* next: jungle8, platformer-cert-1
* position: 3 1


### jungle8
* name: Make it Your Own
* type: tutorial
* description: Change your images and tilemaps to make a game of your own!
* url: /skillmap/jungle/jungle8
* imageUrl: /static/skillmap/jungle/jungle8.gif
* tags: intermediate, art, assets
* position: 4 0


### platformer-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/jungle-cert.png
* url: /static/skillmap/certificates/jungle-cert.pdf
* position: 4 1
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
        * certificate:
            * url: /static/skillmap/certificates/jungle-cert.pdf
            * preview: /static/skillmap/certificates/jungle-cert.png
        * completion-badge:
            * image: /static/badges/badge-jungle.png
            * name: Jungle Jump