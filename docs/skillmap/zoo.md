# A Zookeeper's Adventure!
* name: A Zookeeper's Adventure!
* description: Ever wonder what it takes to be a zookeeper? The answer may surprise you...
* infoUrl: skillmap/educator-info/zookeeper-map-info
* bannerurl: /static/skillmap/zoo/zoo-welcome.png
* backgroundurl: /static/skillmap/backgrounds/zookeeper-bg.png
* primarycolor: #2EA9B0
* secondarycolor: #fff609
* tertiarycolor: #78DC52
* highlightcolor: #FFFFFF
* completednodecolor: #c1aba3
* tags: easy, entertainment

## zookeeper
* name: Zookeeper Certification
* layout: manual

### zoo-activity1
* allowcodecarryover: false
* name: First Day
* type: tutorial
* next: zoo-activity2, zoo-activity2-2
* description: It's time to start your new job as a zookeeper.  What could go wrong?
* url: /skillmap/zoo/zoo1
* imageurl: /static/skillmap/zoo/zoo1.gif
* tags: easy, sprite edit, controller, camera
* position: 0 0

### zoo-activity2
* allowcodecarryover: false
* name: By Land
* type: tutorial
* description: Set up a zoo exhibit! Let's take a stroll to the mammal enclosures and get your first exhibit all set up.
* url: /skillmap/zoo/zoo2
* imageurl: /static/skillmap/zoo/zoo2.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 0

### zoo-activity2-2
* allowcodecarryover: false
* name: By Sea
* type: tutorial
* description: It's aquarium time! Let's go to the ocean exhibits and design some sea creatures.
* url: /skillmap/zoo/zoo2a
* imageurl: /static/skillmap/zoo/zoo2a.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 1
* edges: 2 1, 2 0

### zoo-activity3
* allowcodecarryover: false
* name: Penguins
* type: tutorial
* description: It's penguin pandimonium! Can you help contain the creatures before you carry on with your day?
* url: /skillmap/zoo/zoo3
* imageurl: /static/skillmap/zoo/zoo3.gif
* tags: easy, positioning, debugging
* next: zoo-activity4
* position: 2 0

### zoo-activity4
* allowcodecarryover: false
* name: Feed the Panda
* type: tutorial
* description: It's feeding time! Grab your bucket of bamboo and head over to the panda enclosure.
* url: /skillmap/zoo/zoo4
* imageurl: /static/skillmap/zoo/zoo4.gif
* tags: easy, overlaps, events
* next: zoo-activity5
* position: 3 0

### zoo-activity5
* allowcodecarryover: false
* name: Quail Hatching
* type: tutorial
* description: Quail! Everywhere! Use code to catch these speedy birds!
* url: /skillmap/zoo/zoo5
* imageurl: /static/skillmap/zoo/zoo5.gif
* tags: intermediate, overlaps, destroy
* next: zoo-complete
* position: 4 0

### zoo-complete
* allowcodecarryover: false
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/zookeeper-license.pdf
* imageurl: /static/skillmap/zoo/zookeeper-license.png
* position: 5 0
* actions:
    * map: [Try Beginner Skillmap](/skillmap/beginner)
    * editor: [Edit Your Project with a Full Toolbox](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/zookeeper-license.pdf
        * preview: /static/skillmap/zoo/zookeeper-license.png
    * completion-badge:
        * image: /static/badges/badge-zoo.png
        * name: Zookeeper's Day
