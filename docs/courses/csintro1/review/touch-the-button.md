# Review: Touch the Button

In the [info](/courses/csintro1/intro/info) section of the orientation, the game "touch the button 15 times" had a very basic problem - no matter what, when the game was over, the same screen was shown, with the only difference being the score.

This can be changed using two using two blocks: ``||info:on life zero||`` and ``||info:on countdown end||``. These blocks are used to **override** (change) the standard behavior for running out of lives and time running out for a countdown.

![Touch the Button](/static/courses/csintro1/review/touch-the-button.gif)

## Initial Game:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.setLife(15)
info.startCountdown(2)
```

## Student Task #1: Using ``||info:on countdown end||``

Modify the behavior of the countdown ending to add a penalty for running out of time.

1. Add in the ``||info:on countdown end||`` block
2. Inside the ``||info:on countdown end||`` block, use the ``||info:change score by||`` block to subtract 10 points from the score
3. After subtracting 10 from the score in the ``||info:on countdown end||``, use the ``||game:game over||`` block to end the game

## Student Task #2: Using ``||info:on life zero||``

Give the player a bonus when they touch the button enough, and then continue the game.

1. Add in the ``||info:on life zero||`` block
2. Add in a ``||info:stop countdown||`` block into the ``||info:on life zero||`` block to end the countdown
3. Add a ``||game:splash||`` screen after the countdown is stopped that tells the player that they are moving onto the next level
4. Copy the two blocks from the ``||loops:on start||`` block into the ``||info:on life zero||`` block after the ``||game:splash||``, so that the lives and countdown both 'reset'
5. Use the ``||info:set score to||`` block to set the score to two times the current score in the ``||info:on life zero||`` block using the ``||math:x||`` and ``||info:score||`` blocks
