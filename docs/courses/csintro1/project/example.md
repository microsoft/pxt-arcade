# Example Section Project

This is an example of an end of section project.

This was created for the [Motion Project](/courses/csintro1/motion/project), but the process applies throughout the course. It is written from the perspective of a group, but the projects can also be completely as a "group of one."

## Initial Ideas

After identifying three unique concepts for a game, we chose our favorite as a group: we decided to make a game in which a person jumps on trampolines to score points.

We discussed the idea for the game with another group. They thought it would be cool if the trampolines moved around, making it harder for the player to score points, and we agreed.

![Initial Drawing](/static/courses/csintro1/project/trampoline-drawing.jpg)

We create the following list of features that were the most **crucial** to implement in order to make this game fun:

* The player is constantly falling, but bounces on the trampoline
* The trampolines are placed randomly on the screen
* The score goes up when the player bounces on a trampoline

![Features of Game](/static/courses/csintro1/project/features.png)

## Round 1: Minimum Viable Product

For our MVP version of the game, we are going to start by focusing on making the player move around, and bounce on a single trampoline.

### ~hint

#### Build

We first break down our features into simple tasks for us to do

* We need to make a first draft of some basic sprites for the player and the trampoline
* The player sprite needs to fall due to gravity
* The player needs to be able to move left and right based on user input
* The player needs to "bounce" when they land on the trampoline

We started working on the game as a group, and created a simple version that had a quick implementation of the task items.

![MVP](/static/courses/csintro1/project/trampoline-mvp.gif)

When we were finished with this section, we created a share link to the game:

> [`https://makecode.com/_79yVbeR8F33R`](https://makecode.com/_79yVbeR8F33R)

### ~

### ~hint

#### Test

We found another group to present our game to. We gave a short description of the portions of the game that would be completed in the future: moving trampolines, scoring, and so on.

After playing the MVP game, they had some feedback for us:

* The sprites could be improved
* The game is too easy
* There is not much going on in the game

### ~

### ~hint

#### Learn

We expected much of the feedback we got, as the portions they described were already on our list of things to do. However, sharing the game with the other group did let us know we were on the right track, and that they liked the idea of the game.

After getting this feedback, we decided that it was most important to add more of a challenge to the game. To do this, we decided to focus on making the trampolines move in the next round.

### ~

## Round 2: Moving Trampolines

### ~hint

#### Build

We knew that we wanted the trampoline to move back and forth across the screen, but we struggled to find a way to do this. We could set the velocity of the trampoline in the ``||loops:on start||`` block, but we had a difficult time finding a way to make the trampoline turn around when it was about to leave the screen.

We looked back at the lessons to see if we could find any way to implement this, and noticed that the [Sprite Overlap 2](/courses/csintro1/motion/overlap2.md) lesson showed us how to "bump" a sprite in the opposite direction when they overlapped with another sprite.

This helped us figure out a solution to the problem: we decided to add sprites to the left and right side of the screen, and reverse the velocity of the trampoline when it overlapped the sprite

![Version 2](/static/courses/csintro1/project/trampoline-v2.gif)

When we were finished with this section, we created a share link to the updated game:

> [`https://makecode.com/_96E8HxdCdEHP`](https://makecode.com/_96E8HxdCdEHP)

### ~

### ~hint

#### Test

We showed this version of game to another group.

They had some feedback on our new version of the game:

* They liked that the trampoline moved while they were playing
* They found the game to be too hard
* They suggested that it might be better if we made the trampoline bigger, or adding more trampolines to bounce on

### ~

### ~hint

#### Learn

We knew from the other group's feedback that we were on the right track. We decided to focus on fixing their feedback before moving onto other features, so that we could see what they thought after we made those changes. We also decided that we should make the trampolines be placed randomly on the screen, to make each game unique.

### ~

## Round 3: Bigger and Better Trampoline(s)

### ~hint

#### Build

The first step (making the trampoline bigger) was simple to complete by just changing the size of the sprite.

When we started working on making more sprites, we noticed that this seemed similar to the clouds from the [Create and On Create Sprites](/courses/csintro1/motion/create-on-create-sprites) lesson, so we decided to use that for making the trampolines.

We used ``||variables:set mySprite to||`` blocks to create trampolines, and decided to move the code for making the walls into an ``||sprites:on created||`` event. This way, no matter where the trampoline was made, the walls would be placed in the correct location.

To make the trampoline start in a random position, we used ``||math:pick random||`` in the ``||sprites:on created||`` event to pick a random starting position for the trampoline that was on the screen. The wall positions were already set based off the position of the trampoline, so nothing else was needed.

![Version 3](/static/courses/csintro1/project/trampoline-v3.gif)

When we were finished with this section, we created a share link to the updated game:

> [`https://makecode.com/_7eTTidTU4DvA`](https://makecode.com/_7eTTidTU4DvA)

### ~

### ~hint

#### Test

When we showed this to the other group, we got a lot of good feedback:

* They thought that the trampolines being randomly positioned on the screen was really cool
* The wider image for the trampoline made it easier to land on
* Having more than one trampoline made the game a lot more interesting to look at

However, not all their feedback was praise:

* They thought the game was now too random. Depending on the placement of the trampolines, it could be impossible for the player to make it to a trampoline
* If the game was not impossible, then you can just keep bouncing on the same trampoline. This made the game too easy and boring
* They found a bug with the moving trampolines. Sometimes, would start in a wall and not move across the screen

### ~

### ~hint

#### Learn

After thinking about this feedback as a group, we decided that there were too many issues with the trampolines moving. We decided to get rid of that feature for now, and possibly come back to it if we found out how to make it work better in a future lesson.

We also decided that we should make the trampolines disappear when the player bounces on them, and then create another one somewhere else to replace it. We already had the code to create a trampoline separate from the ``||loops:on start||``, so this wouldn't be that hard to implement.

### ~

## Round 4: Destroying and Replacing Trampolines

### ~hint

#### Build

To get rid of motion, we got rid of the walls and the portion that gave the trampoline a velocity.

To make the trampolines disappear and reappear when the player jumps on them, we added to the ``||sprites:overlap||`` event between the trampoline and the player to make it ``||sprites:destroy||`` the trampoline and then create a new trampoline.

We also changed the initial position of the player, so that it was more likely they would be able to hit one of the trampolines

![Version 4](/static/courses/csintro1/project/trampoline-v4.gif)

When we were finished with this section, we created a share link to the updated game:

> [`https://makecode.com/_gKuYPvJpWYvP`](https://makecode.com/_gKuYPvJpWYvP)

### ~

### ~hint

#### Test

We showed our build to the other group and they loved the changes! The main feedback were two things we were expecting:

* The sprites should have nicer images
* There should be some way for the player to gain score

### ~

### ~hint

#### Learn

From this feedback, we knew we were nearly done with the project. The gameplay was basically complete, we just needed to make it look nicer, and give the player a reason to keep jumping.

### ~

## Round 5: Polishing the Game

### ~hint

#### Build

We went through the game, and made sure the small "nice to have" features were done:

* We spent time making sure the sprites were nicer to look at and finalized.
* We changed the background color, to make it a little bit nicer to look at.
* We added a ``||info:change score by||`` block to adjust the score when the player hits a trampoline

![Final Result](/static/courses/csintro1/project/trampoline-game-final.gif)

When we were finished with this section, we created a share link to the updated game:

> [`https://makecode.com/_99X0r8adA1sg`](https://makecode.com/_99X0r8adA1sg)

### ~

### ~hint

#### Test

We showed this version of the game to another group, and they liked it.

The only suggestion they had was to end the game when the player fell to the bottom of screen.

### ~

### ~hint

#### Learn

The feedback we got was on how the game should end, which we agreed on.

Unfortunately, at this point, we could not figure out how to end the game based on the player's position, so we were not able to implement this feature. This is okay; it just means we'll have to learn a little more. We decided to keep this in mind while we went on to learn other topics, and that we would update the game when we figure out how to do this.

### ~

## Final Result

We came up with the following game to turn in for this project.

```blocks
namespace SpriteKind {
    export const Trampoline = SpriteKind.create();
    export const Wall = SpriteKind.create();
}
let player: Sprite = null
let trampoline: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trampoline, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    player.vy = -100
    otherSprite.destroy()
    trampoline = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Trampoline)
})
sprites.onCreated(SpriteKind.Trampoline, function (trampoline) {
    trampoline.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
. . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . .
. . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . .
. . . . . . . . 4 4 4 4 4 . . . . . . 4 4 4 4 4 . . . . . . . .
. . . . . 4 4 4 4 4 . . . . . . . . . . . . 4 4 4 4 4 . . . . .
. . . 4 4 4 4 . . . . . . . . . . . . . . . . . . 4 4 4 4 . . .
4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4
. 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 .
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . 4 4 4 4 4 . . . .
. . . . . . . 4 4 4 4 4 . . . . . . . . 4 4 4 4 4 . . . . . . .
. . . . . . . . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . . . . . . .
. . . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . . . . .
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`)
    trampoline.bottom = randint(trampoline.height, scene.screenHeight())
    trampoline.x = randint(0, scene.screenWidth())
})
player = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . e e e e e e . . . . . .
. . . e e e e e e e e . . . . .
. . . e f f d d f f d . . . . .
. . . d f 1 d d 1 f d . . . . .
. . . d d d d d d d d . . . . .
. . . d d f d d f d d . . . . .
. d d . d d f f d d . d d . . .
. 4 4 . . d d d d . . 4 4 . . .
. 4 4 4 4 4 4 4 4 4 4 4 4 . . .
. . 4 4 4 4 4 4 4 4 4 4 4 . . .
. . . 4 4 4 4 4 4 4 4 4 . . . .
. . . . 8 8 8 8 8 8 8 . . . . .
. . . . 8 8 8 . 8 8 8 . . . . .
. . . . 8 8 8 . 8 8 8 . . . . .
. . . . 8 8 8 . 8 8 8 . . . . .
`, SpriteKind.Player)
player.ay = 100
player.y = 0
scene.setBackgroundColor(9)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Trampoline)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Trampoline)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Trampoline)
game.onUpdate(function () {
    player.x += controller.dx()
})
```

We also had the following items that helped document how we got to the final result:

* The share links of the games throughout each round
* The drawings we made along the way
* The lists of suggestions, ideas, and tasks we had along the way

We also listed out the concepts we used from the **Concepts Learned** sections of the project:

* Sprites
* Sprite Position
* Controller
* Overlap Events
* Spawning Sprites
* Random
* Score
* Set Image

![Concepts Used](/static/courses/csintro1/project/concepts-used.png)
