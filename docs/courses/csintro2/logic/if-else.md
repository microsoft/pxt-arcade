# Activity: If and else comparisons

In our games we will often want to compare values, and take an action based on the result of the comparison.

> Example: Is my value smaller than a test value? If it is ``||logic:true||`` that my value (3) is smaller than the test value (5) then we will add to my value. Otherwise, we will subtract from the value.

We could do a comparison test to see:

* if player score is greater than the enemy score, then we gain points on overlap
* if the player has 0 lives left, then we set to game over
* if we have the secret key, then we can enter the room.

``||logic:if||`` and ``||logic:else||`` statements allow us to make our programs behave in different ways based on the state of the game.

In this activity, students will work with:
* ``||logic:if||``
* ``||logic:else||``
* ``||logic:else if||``

## Concept: ``||logic:if||`` and ``||logic:else||`` Statement

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/sMFHdR6KzPo)

We have seen in the previous lesson ``||logic:if||`` statements perform a test and if the logic test evaluates to true, then it will run code that is given.

```block
if (info.life() > 2) {
    game.splash("3 or more lives")
}
```

When we use an ``||logic:if||`` statement, we have the option to add an ``||logic:else||`` statement. An else block will only run in the event that the logic test given evaluates to false. In other words, if the test is true, then the ``||logic:if||`` block's code will run, else, the ``||logic:else||`` block's code will run.

To use an ``||logic:else||`` click on the plus sign of an existing ``||logic:if||`` block.

```block
if (info.highScore() > 5) {
    game.splash("Good Luck!")
} else {
    game.splash("Set High Score!")
}
```

## Concept: ``||logic:else if||`` Statement

Using an ``||logic:if||`` block with an ``||logic:else||`` block allows us to split all comparisons into two categories - either the comparison is ``||logic:true||`` or ``||logic:false||`` (not true).

What if we needed to split a comparison into three or four categories?

We can use the ``||logic:else if||`` block to add additional comparisons.

By clicking the plus sign of an ``||logic:if else||`` block, an ``||logic:else if||`` block will appear. This allows for another logic test that splits the cases after the original logic test evaluates to false.

We can compare the score with 3 possible results.

For example, consider the case where we want to split scores into three groups: beginner, intermediate, and expert.

>* if score greater than 100 "you are an expert"
>* or else if greater than 50 "you are intermediate"
>* or else, "you are a beginner"

```block
if (info.score() > 100) {
    game.splash("you are an expert!")
} else if (info.score() > 50) {
    game.splash("you are intermediate!")
} else {
    game.splash("you are a beginner!")
}
```

This code will first check if the high score for the game is greater than 100. If it is, then it will identify the player is an "expert" and skip the rest of the comparison tests.

If it is not greater than 100, then the second logic test is run to see if the score is greater than 50. If it is, then it will identify the player as "intermediate."

If it is not greater than 50, it will run the else section and rank the player a "beginner."

## Concept: Button Game

Make sprite alternate between saying "A" and "B"

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/FuABS3PVnAM)

For each example below,

1. Play the game
2. Review the code that uses comparisons
3. Identify how the behavior is different from the other examples

### Example #1a: Random Message

[Example #1a](https://makecode.com/_HXMRAzYY4YkU)

```blocks
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 4 4 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . e . . e . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 4 . 1 1 . 4 4 . . .
. . . . . . 4 4 4 4 4 4 . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

### Example #1b: Check the Button

[Example #1b](https://makecode.com/_LigLWHR00d74)

```blocks
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 4 4 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . e . . e . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 4 . 1 1 . 4 4 . . .
. . . . . . 4 4 4 4 4 4 . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

### Example #1c: Using ``||logic:else||``

[Example #1c](https://makecode.com/_FDoAgwhKdh1X)

```blocks
let mySprite: Sprite = null
let randomPick = 0
function generate() {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    } else {
        mySprite.say("push B")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 4 4 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . e . . e . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 . . . . . . 4 . . .
. . . . . 4 4 . 1 1 . 4 4 . . .
. . . . . . 4 4 4 4 4 4 . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
info.startCountdown(20)
generate()
```

## Student Task #1a: ``||logic:else||`` with an Incorrect Response

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/zW7JyNiJeKI)

Now that we have the basic functionality of our game, make it so that the player loses points when they press the wrong button.

1. Start with the code from example #1c above
2. Add ``||logic:else||`` statements in the button press events that run code when the player enters the wrong button
3. Decrease the players ``||info:score||`` by 1 when they press the wrong button

## Task #1b: End of Game Message

Now add a timer, and congratulate the player at the end of the game, giving them a specific message based on their ``||info:score||``.

1. Create an event for when the countdown ends by using the ``||info:on countdown end||`` block
2. Check to see if the player's ``||info:score||`` is less than `20`. If it is, use a splash block to say “Beginner score of " and then the player's ``||info:score||``
3. Use an ``||logic:else||`` block to do the same for if the player's ``||info:score||`` was greater than or equal to `20` but say "Pro score of " and then the player's ``||info:score||``
4. Use a game over block to let the game know that it is over and that the player won

    ### ~hint

    By clicking the plus sign of a game over block, you can let the game know whether or not the player won.

    This will change the dialog shown on the game over screen.

    ### ~

5. **Challenge:** make the sprite have a shake or bump effect each time it has a say so can see when letter updates even when it is the same as the previous time.

## What did we learn?

1. What is a case in which you use an ``||logic:if||`` but not an ``||logic:else||``?
2. For example #1c, we changed the ``||logic:if||`` - ``||logic:if||`` structure to an ``||logic:if else||`` structure. Why does it make sense to do this?
3. What is the same and what is different between the following code samples? Which one is easier to read? Explain.

```blocks
if (info.score() > 10) {
    game.splash("Case 1")
} else {
    if (info.score() > 5) {
        game.splash("Case 2")
    } else {
        game.splash("Case 3")
    }
}
```

```blocks
if (info.score() > 10) {
    game.splash("Case 1")
} else if (info.score() > 5) {
    game.splash("Case 2")
} else {
    game.splash("Case 3")
}
```

### [Teacher Material](/courses/csintro2/about/teachers)
