# Task list:
![Final Product Example](/static/courses/csintro/review/final-review-game.gif)

## Sprite

1. Make a **32 x 32** sprite that has 3 circles filled with different colors
2. Name the sprite "circles"
3. Make the sprite be of kind "Circles"
4. When the game starts, make ``||variables:circles||`` ``||sprite:say||`` something (for example, "I'm ready to play!") for **1000 ms**

## Motion and Button Events:

1. Make the ``||variables:circles||`` spawn in the top left corner, by ``||sprites:setting||`` the ``||sprites:x||`` and ``||sprites:y||`` coordinates both to 30
2. Use the ``||controller:on left button pressed||`` and ``||controller:on right button pressed||`` blocks to make ``||variables:circles||`` move left and right, by using the ``||sprite:change x by||`` block. Make the circles move **5** in the direction specified each time the button is pressed (remember - moving in one direction )

### ~hint

Remember: moving in opposite directions is done by changing the value from positive to negative (or vice versa) - that means one button should change x by 5, and the other should change x by -5. When we use the short methods this is handled for us by the blocks.

### ~

3. Use the ``||controller:on up button pressed||`` and ``||controller:on down button pressed||`` blocks to make ``||variables:circles||`` change the y velocity by 2 in the specified direction when up or down is pressed. 

### ~hint

Changing the y velocity is done by changing the ``||variables:circles||`` ``||sprite:vy||``

How is changing a sprite's ``||sprite:x||`` value different from changing it's ``||sprite:vx||`` value?

### ~

4. In the ``||loops:on start||`` block, set the ``||variables:circles||`` ``||sprite:ay||`` value to 5. This represents the circles **acceleration**, or how fast it increases in velocity. Try to keep the ``||variables:circles||`` in the screen.
5. **Challenge:** set the ``||variables:circles||`` to have an acceleration of 2 in the x direction as well; how long can you keep it on screen? (Be sure to remove this when before moving on to the next task)

## Sprite Kinds and Info

1. Use the ``||sprites:create empty sprite of kind Stars||`` block from the ``||sprites:Lifecycle||`` category inside of an ``||games:on game update every 500 ms||`` block to create a new sprite of kind Star twice per second. You'll need to make a new kind (in particular, ``||sprite:Stars||``) to do this.
2. Now we can add some behavior to sprites of kind Stars. To do this, we need an ``||sprites:on created sprite of kind Stars||`` event. Inside of that, change the image of the sprite using the ``||sprites:set agent image to...||`` block, and dragging the sprite in place of the agent, as shown below. Make sure to make a nice image for your star!

![Using sprite parameter in on created event](/static/courses/csintro/review/use-sprite-parameter.gif)

3. Set the created sprite's ``||sprites:x||`` position to a random position on the screen, using the ``||scene:width||`` value in a ``||math:pick random between 0 and width||`` block.
4. Set the created sprite's ``||sprites:y||`` position the same as above, using the ``||scene:height||`` in place of ``||scene:width||``.
5. Set the created sprite's ``||sprites:z||`` index to -1, so that all ``||sprites:stars||`` will show up behind the ``||variables:circles||``.
6. Set the created sprite's ``||sprites:lifespan||`` to 100, so that it will be destroyed after 100 'tics'. (This corresponds to 100 game updates)

### ~hint

Both the ``||sprites:z||`` and ``||sprites:lifespan||`` can be assigned using the drop down, similar to how the ``||sprites:x||`` can be set.

### ~

7. Create a ``||sprites:on sprite of kind Circles overlaps otherSprite of kind Stars||`` block to handle interactions between the Circles and Stars in the background.
8. Inside of the ``||sprites:overlap||`` block, destroy the ``||sprites:Star||`` that is overlapped, and ``||info:change score by 1||`` to add one to the score each time the ``||variables:circles||`` pass over a ``||sprites:Star||``.
9. Create a ``||info:start countdown||`` block with a time of 30 seconds, so that the game will be done after time runs out.
10 Add a ``||game:splash||`` message in the ``||loops:on start||`` section with a basic description of the game (for example, "catch the stars before time runs out!"). Does the placement of the splash screen affect how the game runs?

## Debugging

In the following examples, identify what part of the provided code is causing the behavior to be different from the expected behavior. All of the examples are small segments of code similar to what you made above, so looking at your game might help in finding the bugs.

### Student 1: Bill

Bill decided he wanted to make a simple game where a timer counts down to 5. After making the countdown, he decides that it's not very helpful without telling the player that that is what is going to happen, so he adds in a splash screen to tell the player - unfortunately, the game now starts at some number less than 5, and occasionally is already over when he closes the splash screen. What is going wrong with this code, and how can it be fixed?

```blocks
info.startCountdown(5)
game.splash("Hello! This will count down from 5 for you!")
```

### Student 2: Emma

Emma decides that she does not like the Stars being destroyed when the ``||variables:circles||`` overlap them, so she removes the ``||sprite:destroy||`` block so that the ``||sprites:Stars||`` remain. However, this makes the game score behave weirdly, and no longer represent the number of stars that have been overlapped. What went wrong? (**Challenge:** can you fix it?)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
sprites.onOverlap(SpriteKind.Circles, SpriteKind.Stars, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```

### Student 3: Collette

Collette wants to add in a splash screen that shows the score the player reached before ending the game, so she uses the ``||info:on countdown end||`` block to add in this behavior, and then end the game. This block allows you to change the behavior of the countdown ending from the normal "game over" sequence to something different.

```blocks
info.onCountdownEnd(function () {
    game.splash("")
    game.over()
})
```

Everything seems like it's working fine to start, until he tries to add in the score to the splash screen, as shown in the animation below. What is going wrong, and how can he fix it?
![Adding score to splash screen](/static/courses/csintro/review/score-to-splash.gif)
