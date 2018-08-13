# Making and Using Extensions

When writing code, software developers often want to avoid spending time "reinventing the wheel." Previous sections have shown how a single developer might do this using functions, but not how developers can share code amongst others.

In this activity, students will:
* Import an extension
* Write a small extension
* Share their extension with other students

## Using Shared Code

As a starting point, take a look at the editor. Now that you have experience writing your own functions, you might notice something different about the blocks you've been using - almost all of them are already functions! These are provided to you by default to make your coding experience easier.

We are not stuck with only the functions provided when you first open MakeCode. Using extensions allows you to use functions and other code written by other software developers in your own games. You can even make your own packages in order to share code that you have written with others, or to reuse the same code in multiple games.

## Example #1: Using a package

1. Open a new project (name it "soccer")
2. Using the extensions menu, search for "darts" (or the full package location at github.com/jwunderl/pxt-darts). Notice how a new section is added to the menu, above ``||game:Game||``
3. Review the example code below, and either recreate it or build something similar

![Finding Dart Extension](/static/courses/csintro1/functions/finding-darts.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Soccer_Ball,
    Goal
}
let mySprite: Sprite = null
let myDart: Dart = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = Darts.create(img`
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
`, SpriteKind.Soccer_Ball)
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
darts=github:jwunderl/pxt-darts#master
```

Using extensions can reduce the number of things you have to worry about while writing your own game. In this case, you do not have to worry as much about algebra or calculus to be able to calculate and display the path a sprite will take; the extension **abstracts away** portions of the code that you may not be an expert in (but still want in order to make interesting games)

## Student Task #1: Build an Obstacle Course

1. Start with the code from example #1
2. Add at least 3 new sprites of kind ``||sprites:Obstacle||``
3. Place the sprites in different positions on the screen so that they are in between the ``||sprites:Soccer_Ball||`` and the ``||sprites:Goal||`` (or equivalent)
4. Add a new ``||sprites:on overlap||`` event between the ball and the obstacles, so that hitting an obstacle causes a ``||game:game over||``
5. **Challenge:** add a controller event so that pressing the ``||controller:B||`` button stops the ball in it's current location

## Sharing Code

Example #1 focused on using shared code, but it's important to be able to share your own code as well. In this example, we will create code that runs separate from the project it is loaded into, and allow it to be imported into other projects.

### ~hint

Creating new blocks like the ones in example #1 requires the use of JavaScript or C++, which are not covered in detail in this unit of the course.

### ~

## Example #2: Spawn a single bird

1. Review the code below, and load it into a new project (name it "birdie")
2. Press share (and confirm) to create a link to this code
3. Open a new project in another window
4. Under extensions, enter the link you generated into the search bar and press the search icon; a single extension should come up (with the name "birdie") - add that to your current project
5. The bird will fly across the screen as soon as the game is loaded, even though the new project only has the initial blocks
6. **Challenge:** open the JavaScript tab, and open the explorer below the simulator. Find where the code that was imported was added into your project

### ~hint

Do any of the names of the tabs in the explorer look similar to the name of the project you shared?

### ~

```blocks
enum SpriteKind {
    Player,
    Enemy
}
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

## Student Task #2: Making the stars go by

1. Create a new project (name it "starryNight")
2. Add an ``||game:on game update every 500ms||`` block
3. Inside of ``||game:on game update every 500ms||`` block, create a new projectile with 1 or 2 pixels colored in white or yellow - this will be a single star in the sky
4. Set the projectile to have a a random ``||sprites:vx||`` between -90 and -30, so that they move across the screen to the left
5. Set the projectile to have a random ``||sprites:y||`` position between 0 and ``||scene:screen height||``, and ``||sprites:set projectile ghost on||``
6. Create a shareable link using the "Share Project" button
7. Load the this extension into another project by entering the link created in step 6 into the search bar of the extensions menu
8. **Challenge:** every 2000 ms, spawn a meteor that moves across the screen. Make sure to set a random ``||sprites:vertical position||`` for it as well

## What did we learn?

1. How could sharing and importing projects help manage a group project with four or more students?
2. What is one benefit to importing code from a project versus just copying the code into the project? You might find it useful to discuss task #2 in your response to this question.