## Extend "Touch The Button"

When we implemented "touch the button 15 times" way back in the info section in the orientation, there was a very basic problem with the game - no matter what, when the game was over, the same screen was shown, with the only difference being the score. We will attempt to make this better using two blocks: ``||info:on life zero||`` and ``||info:on countdown end||``. These blocks are used to override the default behavior of running out of lives and the count down running out - that is, they make it so that instead of the game just ending when either event occurs, whatever is inside those two blocks will occur instead.

## Base Game:

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.setLife(15)
info.startCountdown(2)
```

## Student Task: Improve "Touch the button 15 times"

1. Add in the ``||info:on life zero||`` and ``||info:on countdown end||`` blocks into your code.
2. Inside the ``||info:on countdown end||`` block, use the ``||info:change score by||`` block to subtract 10 from the score.
3. After subtracting 10 from the score in the ``||info:on countdown end||``, use the ``||game:game over||`` block to end the game.
4. Inside the ``||info:on life zero||`` block, we want to keep the game going. To do so, copy the two blocks in the ``||loops:on start||`` block into the ``||info:on life zero||`` block, so that the timer and the lives will "start over" when lives run out.
5. To give the player some indication that the game is moving on to the next level, we should say something to them. Before resetting the lives and countdown, add in a ``||game:splash||`` block with a message to the player telling them they're moving on to the next level.
6. To make sure that the game keeping track of the countdown correctly, add in a ``||info:stop countdown||`` block before the splash message, so that the countdown will not continue in the background.
7. We can also add a benefit to moving on to the next level by increasing the score more than normal. To do so, we will use the ``||info:set score to||`` block to set the score to two times the current score - to do this, you will need to use the ``||math:x||`` block and the ``||info:score||`` block.
