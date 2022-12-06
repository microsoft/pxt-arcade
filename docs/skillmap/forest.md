# Save the Forest
* name: Save the Forest
* description: The last few summers have been some of the hottest on record and the forest service needs you to help keep fires under control. Use blocks to code your airtanker and set up tech so your ground team can help you save the forest! Double-click the first level to start.
* infoUrl: skillmap/educator-info/forest-map-info
* bannerUrl: /static/skillmap/forest/forest6.gif
* backgroundurl: /static/skillmap/backgrounds/forest-comp.png
* primarycolor: #b27ea3
* secondarycolor: #ffffff
* tertiarycolor: #249fa5
* highlightcolor: #fcd34b
* completednodecolor: #466849


## Save the Forest
* name: Save the Forest
* layout: manual

### forest1
* allowcodecarryover: false
* name: Prepare Your Plane
* type: tutorial
* description: Set up your airtanker to make sure you can get everywhere you need to be!
* url: /skillmap/forest_new/forest1
* imageUrl: /static/skillmap/forest/forest1.gif
* tags: easy, sprite, movement
* next: forest2
* position: 0 0

### forest2
* name: 🔥 Burning Issues 🔥
* type: tutorial
* description: Use loops to add random fires to your map!
* url: /skillmap/forest_new/forest2
* imageUrl: /static/skillmap/forest/forest2.gif
* tags: easy, loops, sprites
* next: forest3
* position: 1 0

### forest3
* name: Fire Fighting
* type: tutorial
* description: Add a water hose to your plane so you can keep your fires under control.
* url: /skillmap/forest_new/forest3
* imageUrl: /static/skillmap/forest/forest3.gif
* tags: easy, events, sprites
* next: forest4
* position: 1 1

### forest4
* name: Spreads Like Wildfire
* type: tutorial
* description: Lots of things affect how quickly fire spreads. In this activity, you'll add variables to change fire danger levels.
* url: /skillmap/forest_new/forest4
* imageUrl: /static/skillmap/forest/forest4.gif
* tags: easy, variables, overlaps
* next: forest5
* position: 2 1

### forest5
* name: Head's Up
* type: tutorial
* description: Computer science is more important to firefighting than ever before! Add some technology to keep your pilots updated!
* url: /skillmap/forest_new/forest5
* imageUrl: /static/skillmap/forest/forest5.gif
* tags: easy, custom
* next: forest-cert
* position: 2 2



### forest-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/forest-cert.pdf
* imageUrl: /static/skillmap/certificates/forest-cert.png
* next: forest6
* position: 3 2
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/forest-cert.pdf
        * preview: /static/skillmap/certificates/forest-cert.png
    * completion-badge:
        * image: /static/badges/badge-forest.png
        * name: Save the Forest
* actions:
    * map: [Try Jungle Jump](/skillmap/jungle)
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox] (/)


### forest6
* name: Keep Going!
* type: tutorial
* description: Add sounds and animations to customize your game.
* url: /skillmap/forest_new/forest6
* imageUrl: /static/skillmap/forest/forest6.gif
* tags: custom, animation, sounds
* position: 4 2