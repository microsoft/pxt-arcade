# Tell a Story
* name: Tell a Story
* description: Show off your creative side with greeting cards, jokes, and short stories.
* infoUrl: skillmap/educator-info/story-map-info
* bannerUrl: /static/skillmap/story/muffins.gif
* backgroundurl: /static/skillmap/backgrounds/story-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #000000
* completednodecolor: #4d3740
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials



## story-activities
* layout: manual

### story1
* allowcodecarryover: false

* name: Greeting Card
* type: tutorial
* description: Make an amazing greeting card in minutes!
* url: /test/skillmap/story/story1
* imageUrl: /static/skillmap/story/story-comp.png
* tags: easy, story, creative, card
* next: story-activity2
* position: 0 0


### story2
* name: Bigger Greeting
* type: tutorial
* description: Add to your greeting card for a gift that keeps on giving!
* url: /test/skillmap/story/story2
* imageUrl: /static/skillmap/story/story-activity-2.gif
* tags: easy, card, creative, art
* reqired: 1 story
* next: story-activity3
* position: 1 0


### story3
* name: Joking Around
* allowcodecarryover: false
* type: tutorial
* description: Create your first Arcade story using a two-line joke!
* url: /test/skillmap/story/story3
* imageUrl: /static/skillmap/story/muffins.gif
* tags: easy, story, joke, share
* next: story4
* position: 2 0


### story4
* name: The Shortest Story
* allowcodecarryover: false
* type: tutorial
* description: Code your own short story in MakeCode Arcade!
* url: /test/skillmap/story/story4
* imageUrl: /static/skillmap/story/story-activity-4.gif
* tags: easy, story, share
* next: beginner-cert-1
* position: 2 1


### beginner-cert-1
* name: Congrats!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-01.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-01.png
* position: 3 1
* actions:
    * map: [Try Talent Show](/skillmap/star)
    * editor: [Edit in Creative Mode](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-01.pdf
        * preview: /static/skillmap/certificates/beginner-cert-01.png
    * completion-badge:
        * image: /static/badges/badge-story.png
        * name: Greetings





