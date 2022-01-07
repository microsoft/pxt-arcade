# Activity: Reducing Redundancy using Functions

Besides simplifying long sections of code, functions are also regularly used to reduce redundancy in code, similar to loops.

Using functions, we can take code that is repeated in multiple locations, and keep it in one centralized location. That way, when there are changes needed or bugs found, the code can be updated in a single place, instead of in several (or a hundred different) locations.

In this activity, students will:

* reduce redundancy using functions

## Example #1a: Movement

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/LGDwglUEb_8))

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "moveSprite")

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 2 . . . . 2 . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 2 . . . . 2 . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.setPosition(20, 20)
mySprite.say("Hello!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("Hi!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("I'm here!")
pause(1000)
mySprite.x += 10
mySprite.y += 10
music.playTone(262, music.beat(BeatFraction.Half))
mySprite.say("Bye!")
pause(2000)
mySprite.destroy()
```

This code may seem like it's easy to simplify using loops at first, but there is a problem with that approach; each ``||sprites:say||`` block says something different!

In this case, it is easier to use ``||functions:functions||`` to reduce redundancy; that way, we can capture the portions of the code **that are repeated**, without losing the details that are actually different.

In this case, the ``||loops:pause||``, ``||sprites:movement||``, and ``||music:tone||`` all happen in the same order throughout the code, so putting those pieces into a function reduces that redundancy. If it is later decided that playing a tone of ``||music:Middle E||`` works better, then only one block needs to be changed in one location, instead of 3 different blocks.

## Example #1b: Movement using Functions

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "moveSpriteUsingFunctions")

```blocks
let mySprite: Sprite = null
function move() {
    pause(1000)
    mySprite.x += 10
    mySprite.y += 10
    music.playTone(262, music.beat(BeatFraction.Half))
}
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 2 . . . . 2 . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 2 . . . . 2 . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.setPosition(20, 20)
mySprite.say("Hello!")
move()
mySprite.say("Hi!")
move()
mySprite.say("I'm here!")
move()
mySprite.say("Bye!")
pause(2000)
mySprite.destroy()
```

## Student Task #1: Simplification

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/MXQTc9At7Ts)

1. Review the code below
2. Create the sample code and run the code
3. Create a function to replace the series of blocks that are repeated each time a projectile is made *(hint: The function should include 4 blocks that appear in the same order 3 separate times)*
4. Reduce the redundancy in the code using your newly created function, without changing the behavior of the game
5. **Challenge:** change the behavior of the game by making the projectiles move at twice the rate in the horizontal direction (from -20 to -40), and by making the ``||music:play tone||`` block play a ``||music:Middle A||``

```blocks
let projectile: Sprite = null
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . 5 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 2 5 5 5 5 2 5 5 5 . . .
. . 5 2 5 5 5 5 2 5 5 5 5 . . .
. . 2 2 2 2 5 2 2 2 2 5 5 . . .
. . 5 2 5 5 5 5 2 5 5 5 5 . . .
. . 5 5 2 5 5 5 5 2 5 5 5 . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . 5 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 f 5 f 5 f 5 f 5 5 . . .
. . 5 5 f 5 f 5 5 5 f 5 5 . . .
. . 5 5 f f f 5 f 5 5 5 5 . . .
. . 5 5 f 5 f 5 f 5 f 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . 5 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 2 5 5 5 5 2 5 5 5 . . .
. . 5 5 5 2 5 5 5 5 2 5 5 . . .
. . 5 2 2 2 2 5 2 2 2 2 5 . . .
. . 5 5 5 2 5 5 5 5 2 5 5 . . .
. . 5 5 2 5 5 5 5 2 5 5 5 . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, -20, 0, SpriteKind.Player)
projectile.y += -30
pause(500)
music.playTone(262, music.beat(BeatFraction.Half))
pause(500)
pause(2000)
game.over(false)
```

## Student Task #2: Events

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/46mdlB941Yo)

1. Review the code below
2. Create the sample code and run the code
3. Create a function called "buttonPress" and copy over the behavior from the ``||controller:on A button pressed||`` event
4. Replace the contents of both the ``||controller:on A button pressed||`` and ``||controller:on B button pressed||`` blocks with a single ``||functions:call function buttonPress||``
5. **Challenge:** add in both a ``||sprites:set projectile ax to||`` and a ``||sprites:set projectile ay to||`` to ``||functions:function buttonPress||``, and set the newly created projectile to have random accelerations between -50 and 50

```blocks
let projectile: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . 2 . . . 2 . . . . . . . .
. . . . 2 3 2 . . . . . . . . .
. . . . 3 2 3 . . . . . . . . .
. . . . 2 3 2 . . . . . . . . .
. . . 2 . . . 2 . . . . . . . .
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
`, randint(-100, 100), randint(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . .
. . . 2 . . . 2 . . . . . . . .
. . . . 2 3 2 . . . . . . . . .
. . . . 3 2 3 . . . . . . . . .
. . . . 2 3 2 . . . . . . . . .
. . . 2 . . . 2 . . . . . . . .
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
`, randint(-100, 100), randint(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```

## What did we learn?

1. Does the use of a function to capture repeated code make it easier or harder to make changes to those repeated sections in the future?
2. Are there any possible downsides to moving repeated code into a function?

### [Teacher Material](/courses/csintro2/about/teachers)
