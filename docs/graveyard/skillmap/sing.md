# Sing 2 - The Big Stage
* name: Sing 2 - The Big Stage
* description: Learn to create a clicker game and quickly rack up the points as you applaud your favorite stars from Sing 2.
* infoUrl: skillmap/educator-info/star-map-info
* bannerUrl: /static/skillmap/star-sing2/star4.gif
* backgroundurl: /static/skillmap/backgrounds/star-comp-2.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #02010b
* completednodecolor: #442532
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials


## Sing 2 - The Big Stage
* layout: manual


### star-activity1
* allowcodecarryover: false

* name: Welcome to the Show
* type: tutorial
* description: Make a simple clicker game starring the characters from Sing 2!
* tags: easy, clicker, points
* next: star-activity2
* url: /graveyard/skillmap/star-sing2/star1
* imageUrl: /static/skillmap/star-sing2/star1.gif
* position: 0 0



### star-activity2
* name: Join the Audience
* type: tutorial
* description: Add an audience that applauds as you click!
* tags: easy, clicker, game, events
* next: star-activity3
* url: /graveyard/skillmap/star-sing2/star2
* imageUrl: /static/skillmap/star-sing2/star2.gif
* position: 1 0


### star-activity3
* name: The Biggest Star
* type: tutorial
* description: Add code to create a spray of stars with each click!
* tags: easy, clicker, projectiles
* next: star-activity4
* url: /graveyard/skillmap/star-sing2/star3
* imageUrl: /static/skillmap/star-sing2/star3.gif
* position: 1 1


### star-activity4
* name: Coming Up Roses
* type: tutorial
* description: Toss a mix of stars and roses at the stage as you learn about arrays!
* tags: easy, clicker, projectiles, arrays
* next: star-cert
* url: /graveyard/skillmap/star-sing2/star4
* imageUrl: /static/skillmap/star-sing2/star4.gif
* position: 2 1


### star-cert
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/star-cert.pdf
* imageUrl: /static/skillmap/certificates/star-cert.png
* position: 3 1
* actions:
    * map: [Try Space Explorer](/skillmap/space)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/star-cert.pdf
        * preview: /static/skillmap/certificates/star-cert.png
    * completion-badge:
        * image: /static/badges/badge-star.png
        * name: Star of the Stage

