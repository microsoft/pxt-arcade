# Starter Project
### @explicitHints true

## GET INTO THE GAME! @showdialog

Let's create a trivia game starring the Globetrotters!

![Level 1 splash image](/static/skillmap/globetrotters/level1-splash.jpg)

Follow the instructions in your document to create a game of your own.






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