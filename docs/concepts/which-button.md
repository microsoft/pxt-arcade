# Which Button?

[Open this tutorial in the editor!](/#tutorial:/concepts/which-button)

## {Introduction @unplugged}

The ``||info:Info||`` category has a number of properties that help handle common behaviors in games. By default, these properties show up on screen as soon as they are set, allowing for an easy way to give the people playing your game information about how well they are doing.

## {Step 1 @fullscreen}

Find ``||info:set score to 0||`` in ``||info:Info||``, and drag it into ``||loops:on start||``.

This will set the initial score of the game to 0; notice how the score now appears in the top right corner of the screen.

```blocks
info.setScore(0)
```

## {Step 2 @fullscreen}

Find ``||info:set life to 3||`` in ``||info:Info||``, and drag it into ``||loops:on start||``. Change the 3 to 5.

This sets the amount of lives a player will start with. Lives show up in the top left corner of the screen, and if the player runs out of lives the game will end.

```blocks
info.setScore(0)
info.setLife(5)
```

## {Step 3 @fullscreen}

Find ``||info:start countdown 10 (s)||`` in ``||info:Info||``, and drag it into ``||loops:on start||``.

This will start a countdown of 10 seconds, after which the game is over. This also places a large timer at the top of the screen, so that the player knows they need to rush.

```blocks
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Step 4 @fullscreen}

Find ``||controller:on A button pressed||`` in ``||controller:Controller||``, and drag it into the workspace.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Step 5 @fullscreen}

Find ``||info:change score by 1||`` in ``||info:Info||``, and drag it into ``||controller:on A button pressed||``.

This will make it so that whenever the ``||controller:A||`` button is pressed, the player's score will increase by one. Try pressing the button multiple times, and see how high you can get the score.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Step 6 @fullscreen}

Get another ``||controller:on A button pressed||``, and drag it into the workspace. Change ``||controller:A||`` to ``||controller:B||``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Step 7 @fullscreen}

Find ``||info:change life by -1||`` in ``||info:Info||``, and drag it into ``||controller:on B button pressed||``.

This will make it so the player will lose life when they press the ``||controller:B||`` button. Try to press it multiple times, and see how the life is displayed as it goes down to 0.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Complete @fullscreen}

Congratulations, you have completed your game! This one may be simple - with the only way to lose life being to press the wrong button - but the blocks can be combined with others, like sprite overlap events, to make games where players are rewarded or punished based on their performance.
