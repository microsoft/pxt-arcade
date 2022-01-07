# Activity: Making and Using Extensions

When writing code, software developers often want to avoid spending time recreating code that already exists. Previous sections have shown how a single developer might do this using functions, but not how developers can share code amongst others.

In this activity, students will:

* Import an extension
* Write a small extension
* Share their extension with other students

## Using Shared Code

Now that we have experience writing functions, we might notice something different about the blocks you've been using - almost all of them are already functions! These functions are provided to you by default to make your coding experience easier. We call these "built in functions."

We are not stuck with only the functions provided when you first open @boardname@. Extensions, in the advanced menu, allow functions, and other code, to be included and used in our games. 

We can make even make our own packages of code to share or reuse in our games.

## Example #1: Using a Package

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/VVjxMS29jjU)

1. Open a new project (name it "football")
2. Using the extensions menu, look for "darts". Notice how a new section is added to the menu, above ``||game:Game||``
3. Review the example code below, and either recreate it or build something similar

![Finding Dart Extension](/static/courses/csintro2/functions/finding-darts.gif)

```blocks
namespace SpriteKind {
    export const Foot_Ball = SpriteKind.create();
    export const Goal = SpriteKind.create();
}
let mySprite: Sprite = null
let myDart: Dart = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Foot_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e . . . . 
. . . . . . e e e e d e e . . . 
. . . . . e e d d d d d e e . . 
. . . . e e d d d d d d d e . . 
. . . . e d d d d d d d d e . . 
. . . e e d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e e e d d d d d e e e . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Foot_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Goal)
mySprite.setPosition(150, 110)
```

```package
darts
```

Using extensions can reduce the number of things you have to worry about while writing your own game.

Using the darts extension package, we do not have to worry as much about algebra or calculus to be able to calculate and display the path a sprite will take. The darts extension **abstracts away** (hides) portions of the code that we may not yet have expertise or time to build ourself, but still want to use.

## Student Task #1: Build an Obstacle Course

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/HmhCPIvfKe8)

1. Start with the code from example #1
2. Add at least 3 new sprites of kind ``||sprites:Obstacle||``
3. Place the sprites in different positions on the screen so that they are in between the ``||sprites:Foot_Ball||`` and the ``||sprites:Goal||`` (or equivalent)
4. Add a new ``||sprites:on overlap||`` event between the ball and the obstacles, so that hitting an obstacle causes a ``||game:game over||``
5. **Challenge:** add a controller event so that pressing the ``||controller:B||`` button stops the ball at it's current location

## Sharing Code

Example #1 focused on using shared code, but it's important to be able to share your own code as well. In this example, we will create code that runs separate from the project it is loaded into, and allow it to be imported into other projects.

### ~hint

Creating new blocks like the ones in example #1 requires the use of JavaScript or C++, which are not covered in detail in this unit of the course.

### ~

## Example #2: Spawn a Single Bird

Follow these steps as shown in the video

1. Review the code below, and load it into a new project (name it "birdy")
2. Press share (and confirm) to create a link to this code
3. Open a new (empty) project in another window
4. Under extensions, enter the link you generated into the search bar and press the search icon; a single extension should come up (with the name "birdie") - add that to your current project
5. The bird will fly across the screen as soon as the game is loaded, even though the new project only has the initial blocks
6. Change the background color in the new project

![Sharing an Extension](/static/courses/csintro2/functions/adding-shared-project.gif)

### ~hint

**Challenge:** open the JavaScript tab, and open the explorer below the simulator. Find where the code that was imported was added into your project.

Do any of the names of the tabs in the explorer look similar to the name of the project you shared?

### ~

```blocks
let projectile: Sprite = null
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 . . 
. . . . . . . . . 1 . 1 f 1 1 . 
. . . . . . . . 1 9 1 1 1 1 . . 
. . . . . . . 1 9 9 1 1 1 . . . 
. . . . . . . . 1 1 1 1 . . . . 
. . . . . . . . 5 . . 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0, SpriteKind.Player)
```

## Student Task #2: Making the Stars go by

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/kZNYHZSdhdY)

1. Create a new project (name it "starryNight") that we will include in other projects
2. Add an ``||game:on game update every 500ms||`` block
3. Inside of ``||game:on game update every 500ms||`` block, create a new projectile with 1 or 2 pixels colored in white or yellow - this will be a single star in the sky
4. Set the projectile to have a random ``||sprites:vx||`` between -90 and -30, so it moves across the screen to the left
5. Set the projectile to have a random ``||sprites:y||`` position between 0 and ``||scene:screen height||``, and ``||sprites:set projectile ghost on||``
6. Share the game and load it into another project (name the project "use starryNight")
7. In your new project ("use starryNight")
    * Add a new ``||scene:background color||``
    * Add a ``||info:countdown||`` block so the game will eventually end
8. **Challenge:** create and add code to "use starryNight" so that a second type of projectile (a meteor) will spawn every 750 ms that moves across the screen
    * Save the updated "starryNight" code and get a share link.
    * Add the share link into a new game and save as "challenge starryNight" 
    * The challenge game should have updated background color and countdown timer

## What did we learn?

1. How could sharing and importing projects help manage a group project with four or more students?
2. What is one benefit to importing code from a project versus just copying the code into the project? You might find it useful to discuss task #2 in your response to this question.

### [Teacher Material](/courses/csintro2/about/teachers)
