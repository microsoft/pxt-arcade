# Get into the game
### @explicitHints true

## GET INTO THE GAME! @showdialog

**Backgrounds, Sprites, Movement, and Animation**

![Level 1 splash image](/static/skillmap/globetrotters/level1-splash.jpg)

In this first lesson, you will create the opening scene of the game.
You will set the game background, show a welcome message, and bring a
player onto the court.

## {2. Get background block}

- :paper plane: From the ``||scene:Scene||`` category,
grab <br/>
```block
scene.setBackgroundImage(img`.`)
```
<br/>and snap it inside and at **the end** of the ``||loops(noclick):on start||`` container.

#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundImage(img`.`)
```

## {3. Set the background image}

- :paper plane: Edit the part of the background to
the Harlem Globetrotter’s Basketball
court by clicking on [gray box]
- :paper plane: Select **Gallery**
- :paper plane: Choose the image called "audience"

#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundImage(globe_img.audience)
```

## {4. Opening greeting}

Now, it’s time to create the opening
scene of our game. It should have a
clear objective.

Level one is all about getting our
character to move.

Maybe we’ll write something like...

_"Get a Harlem Globetrotter into
the game! Help them move around
and dribble the ball! Press A to
begin."_

## {5. Code the opening greeting}

**Okay, let’s code it!**

~hint Purple Game text blocks 🎨

---

Remember, the purple commands
are the texts that will appear on the
opening screen.

hint~

- :paper plane: In the ``||game:Game||`` category
- :paper plane: Select<br/>
```block
game.showLongText("", DialogLayout.Full)
```
- :paper plane: Type your opening line inside the quotation marks - **(" ")**.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
// @highlight
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
```

## {6. Add the Scroller extension}

Okay, now we want to add a
really cool effect. It’s called
**Scroller** and it’s going to make
your background move!

- :paper plane: This isn’t in your Toolbox list,
so head to **Extensions** over in the Toolbox
- :paper plane: In the search bar, type "Scroll"
and click "Arcade-Background-Scroll"

**Scroller** should now be in your
Toolbox list now.

## {7. Add the scroller}

**Bring out the Scroller!**

- :paper plane: Click on **Scroller** and grab the<br/>
```block
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
```
- :paper plane: Set the numbers for `vx` to **-50** and leave `vy` at **0**

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
// @highlight
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
```

## {7. Check your code now}

Take a look at your code. I should look like this.

```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
```

## {8. Bring in a sprite}

Now, let's put in sprite for our player.

- :paper plane: Go to ``||sprites:Sprites||`` and get a<br/>
```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```
<br/>and drag it out onto your Workspace under the last block.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```

## {9. Rename your player sprite}

Now, let’s rename the variable to the
Harlem Globetrotter you plan to
choose. You can choose **Torch**,
**Whan**, **TNT**, **Cheese**, **Het**, or **Hotshot**.

- :paper plane: Click on the variable name in the sprite block. Choose "Rename variable" and name your
Sprite after the Harlem Globetrotter you plan to use, from the list above.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hotshot = sprites.create(img`.`, SpriteKind.Player)
```

## {10. Pick the player image}

- :paper plane: In the sprite block, click in the
the gray box to display the **Image Editor**.

- :paper plane: Click on the **Gallery** tab to see some images to choose from.
Choose the player you want to use.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
```

## {11. Pick the player image}

Your code should now look like this.

```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
```

## {12. Pick the player image}

- :paper plane: Go to the ``||controller:Controller||`` category and get the<br/>
```block
controller.moveSprite(Hotshot)
```
<br/>block and put it at the end of the other blocks.
- :paper plane: Press the **(+)** symbol and change `vx`
to **100** and `vx` to **0**.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
// @highlight
controller.moveSprite(Hotshot, 100, 0)
```

## {13. Review your code again}

Take a look at your code one more time. It should look like this.

```blocks
scene.setBackgroundImage(globe_img.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
```



```blockconfig.global
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
```




```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    globetrotters.askQuestion(otherSprite)
    controller.moveSprite(mySprite, 100, 0)
    if (globetrotters.NPCNumberOf(otherSprite) >= 4) {
        if (info.score() >= 30) {
            effects.confetti.startScreenEffect(500)
            play_next_level()
        } else {
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
            game.showLongText("TRY AGAIN!                You need 31 points to get to the basketball court.                    YOU GOT THIS!!!", DialogLayout.Full)
            game.reset()
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    globetrotters.tossBall(assets.image`ball`)
})
function play_next_level () {
    globetrotters.setLevel2(assets.image`tnt`)
    game.showLongText("Press B to shoot the basketballs. You must get to 200 points!", DialogLayout.Bottom)
    info.startCountdown(45)
}
info.onCountdownEnd(function () {
    game.showLongText("Keep practicing!", DialogLayout.Top)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bucket, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(sprite)
})
info.onScore(200, function () {
    game.showLongText("You could become a Harlem Globetrotter!!!", DialogLayout.Top)
    game.gameOver(true)
})
let mySprite: Sprite = null
scene.setBackgroundImage(globe_imgs.audience)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
mySprite = sprites.create(assets.image`tnt`, SpriteKind.Player)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. Press A to begin.", DialogLayout.Full)
mySprite.ay = 275
controller.moveSprite(mySprite, 120, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
characterAnimations.loopFrames(
mySprite,
assets.animation`tnt_standing`,
200,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`tnt_dribble`,
200,
characterAnimations.rule(Predicate.MovingRight)
)

```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
globe_imgs=github:kiki-lee/globe_imgs
globe_animations=github:kiki-lee/globe_animations
globe_ext=github:kiki-lee/globe_ext

```