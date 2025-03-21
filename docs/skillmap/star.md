# Talent Show
* name: Talent Show
* description: Learn to create a clicker game and quickly rack up the points as you applaud the most talented animals.
* infoUrl: skillmap/educator-info/star-map-info
* bannerUrl: /static/skillmap/star/star4-trimmed.gif
* backgroundurl: /static/skillmap/backgrounds/star-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #17001d
* completednodecolor: #4d3740
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials


## talent-show
* layout: manual


### star-activity1
* allowcodecarryover: false

* name: Welcome to the Show
* type: tutorial
* description: Make a simple clicker game talent show starring your favorite animals!
* tags: easy, clicker, points
* next: star-activity2
* url: /skillmap/star/star1
* imageUrl: /static/skillmap/star/star1-trimmed.gif
* position: 0 0



### star-activity2
* name: Join the Audience
* type: tutorial
* description: Add an audience that applauds as you click!
* tags: easy, clicker, game, events
* next: star-activity3
* url: /skillmap/star/star2
* imageUrl: /static/skillmap/star/star2-trimmed.gif
* position: 1 0


### star-activity3
* name: The Biggest Star
* type: tutorial
* description: Add code to create a spray of stars with each click!
* tags: easy, clicker, projectiles
* next: star-activity4
* url: /skillmap/star/star3
* imageUrl: /static/skillmap/star/star3-trimmed.gif
* position: 1 -1


### star-activity4
* name: Coming Up Roses
* type: tutorial
* description: Toss a mix of stars and roses at the stage as you learn about arrays!
* tags: easy, clicker, projectiles, arrays
* next: star-cert
* url: /skillmap/star/star4
* imageUrl: /static/skillmap/star/star4-trimmed.gif
* position: 2 -1


### star-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/star-cert.pdf
* imageUrl: /static/skillmap/certificates/star-cert.png
* position: 3 -1
* actions:
    * map: [Try Mama Dino](/skillmap/dino)
    * editor: [Edit in creative mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/star-cert.pdf
        * preview: /static/skillmap/certificates/star-cert.png
    * completion-badge:
        * image: /static/badges/badge-star.png
        * name: Star of the Stage



