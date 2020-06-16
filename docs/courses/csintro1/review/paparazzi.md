# Review: Paparazzi

Paparazzi are freelance photographers that focus on getting pictures of stars. In this game, the player will control a Paparazzo who misunderstood their job description, and is taking pictures of a night sky instead of the latest celebrity.

![Paparazzi Game](/static/courses/csintro1/review/paparazzi.gif)

## Student Task #1: Camera

Create a sprite for the camera the player will control

1. Create a **32 x 32** sprite of a camera
2. Name the sprite ``||variables:camera||``
3. Make the sprite be of ``||sprites:kind||`` ``Camera``
4. When the game starts, make ``||variables:camera||`` ``||sprites:say||`` something (for example, "I'm ready to play!") for **1000 ms**

## Student Task #2: Manual Motion

Manually add custom motion for the Camera

1. Move the ``||variables:camera||`` to the top left corner, by setting both the ``||sprites:x||`` and ``||sprites:y||`` coordinates to 30
2. Use the ``||controller:on left button pressed||`` and ``||controller:on right button pressed||`` blocks to make ``||variables:camera||`` move left and right, by using the ``||sprites:change x by||`` block. Make the camera move **5** pixels in the direction specified each time the button is pressed
3. Use the ``||controller:on up button pressed||`` and ``||controller:on down button pressed||`` blocks to make ``||variables:camera||`` change the y velocity by 2 in the specified direction when up or down is pressed. 
4. In the ``||loops:on start||`` block, set the ``||variables:camera||`` ``||sprites:ay||`` value to 2. This represents the camera **acceleration**, or how fast it increases in velocity, to make it fall if the player doesn't press anything
5. **Challenge:** set the ``||variables:camera||`` to have an acceleration of 2 in the x direction as well; how long can you keep it on screen? Revert this change before moving on to the next task

## Student Task #3: A Star is Born

Create a star for the player to photograph

1. Create a sprite with ``||sprites:sprite of kind Star||`` inside of an ``||game:on game update every 500 ms||`` event to create a new sprite twice per second.
2. Add an ``||sprites:on created sprite of kind Star||`` event. Inside of that, use ``||sprites:set sprite image to||`` to set the ``||sprites:Star||``s image to a drawing of a star
3. Set the created sprite's ``||sprites:x||`` and ``||sprites:y||`` positions so it appears somewhere on the screen at random
4. Set the created sprite's ``||sprites:z||`` index to -1, so that all ``Star``s will show up behind the ``||variables:camera||``
5. Set the created sprite's ``||sprites:lifespan||`` to 5000, so that it will be destroyed after 5 seconds (``||sprites:lifespan||`` is a property found in the drop-down list of the ``||sprites:x||`` block)

## Student Task #4: Photograph the Stars

Flash on the screen when the player snaps a picture of a star

1. Create an ``||sprites:on overlaps||`` event between the `Camera` and a `Star`
2. In the ``||sprites:overlap||``, create a projectile from the ``||variables:camera||`` sprite. Give the projectile sprite an image of a flash of light. Set the projectile ``||sprites:kind||`` to `Flash`
3. After creating the `Flash`, destroy the `Star` that is overlapped, and add one point to the score
4. Make the `Flash` projectile have a ``||sprites:lifespan||`` of 400 ms

## Student Task #5: Gameplay Elements

Add polish to the gameplay

1. Create a ``||info:start countdown||`` block with a time of 30 seconds
2. Add a ``||game:splash||`` message in the ``||loops:on start||`` section with a basic description of the game (for example, "catch the stars before time runs out!"). Does the placement of the ``||game:splash||`` affect how the game plays?

## Debugging

In the following examples, identify what part of the provided code is causing the behavior to be different from the expected behavior. All of the examples are small segments of code similar to what you made above, so looking at your game might help in identifying the bugs.

### Student 1: Bill

Bill decided he wanted to make a simple game where a timer counts down to 5. After making the countdown, he decides that it's not very helpful without telling the player that that is what is going to happen, so he adds in a splash screen to tell the player - unfortunately, the game now starts at some number less than 5, and occasionally is already over when he closes the splash screen. What is going wrong with this code, and how can it be fixed?

```blocks
info.startCountdown(5)
game.splash("Hello! This will count down from 5 for you!")
```

### Student 2: Emma

Emma decides that she does not like the Stars being destroyed when the ``||variables:camera||`` overlap them, so she removes the ``||sprites:destroy||`` block so that the ``Star``s remain. However, this makes the game score behave weirdly, and no longer represent the number of stars that have been overlapped. What went wrong? (**Challenge:** can you fix it?)

```blocks
namespace SpriteKind {
    export const Camera = SpriteKind.create();
    export const Star = SpriteKind.create();
}
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Star, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```

### Student 3: Collette

Collette wants to add in a splash screen that shows the score the player reached before ending the game, so she uses the ``||info:on countdown end||`` block to add in this behavior, and then end the game. This block allows you to change the behavior of the countdown ending from the normal "game over" sequence to something different.

```blocks
info.onCountdownEnd(function () {
    game.splash("")
    game.over(false)
})
```

Everything seems like it's working fine to start, until they try to add in the score to the splash screen, as shown in the animation below. What is going wrong, and how can they fix it?

![Adding score to splash screen](/static/courses/csintro1/review/score-to-splash.gif)
