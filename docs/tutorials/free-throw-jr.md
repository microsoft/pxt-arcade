# Basketball Free Throw
### @explicitHints true
### @flyoutOnly true

## {1. Introduction @showdialog}

Let's code a free-throw game!

![Free throw shot from player](/static/tutorials/free-throw/freethrow.gif)



## {2. Your First Block}

First, add the court!

---


```block
freethrow.setCourt()
```

---

![Free throw shot from player](/static/tutorials/free-throw/court.gif)


#### ~ tutorialhint

```blocks
//@highlight
freethrow.setCourt()
```




## {3. Look at the game window}


- :binoculars: Look at the game window!

You should see a basketball court.

![Look for the game window in the lower right](/static/tutorials/free-throw/game.png)






## {4. Create the Player Character}

**Pick your player!**<br/>
⛹🏾 ⛹🏼‍♀️ ⛹🏿‍♂️

---

```block
freethrow.addPlayer(throw_imgs.dunk)
```

---

![Free throw shot from player](/static/tutorials/free-throw/dunk.gif)

---

💡 _You can click the image of the player to make changes._



#### ~ tutorialhint
```blocks
freethrow.setCourt()
//@highlight
freethrow.addPlayer(throw_imgs.dunk)
```



## {5. Look at the game window again}


- :binoculars: Look at the game window again!

---

![Free throw shot from player](/static/tutorials/free-throw/moving.gif)

---

You should see the athlete moving across the court.






## {6. Create the Basketball Hoop}

**Add the hoop!**

---

```block
freethrow.addHoop()
```

---

![Free throw shot from player](/static/tutorials/free-throw/hoop.gif)

---

#### ~ tutorialhint
```blocks
freethrow.setCourt()
freethrow.addPlayer(throw_imgs.dunk)
//@highlight
freethrow.addHoop()

```



## {7. Use (A) Button to Toss}

**Make (A) toss the ball**

---

```blocks
freethrow.onA(function () {
    freethrow.throwBall()
})
```

---

![Free throw shot from player](/static/tutorials/free-throw/toss.gif)

---


#### ~ tutorialhint
```blocks
//@highlight
freethrow.onA(function () {
    freethrow.throwBall()
})
```





## {8. Test it Out}


- :binoculars: Try your game!

---

![Free throw shot from player](/static/tutorials/free-throw/test.gif)

---

When you press (A) or the space bar, the player should throw the ball.


~hint It isn't working 🤷‍♂️ 

---

Does you have all of this code?


```blocks

freethrow.onA(function () {
    freethrow.throwBall()
})
freethrow.setCourt()
freethrow.addPlayer(throw_imgs.dunk)
freethrow.addHoop()
```

hint~



## {9. Points when we get a basket}


**Add points for each basket**

---

```blocks
freethrow.onOverlapHoop(function () {
    freethrow.changeScoreAddPoint(1)
    freethrow.destroyBall()
})
```

---

![Free throw shot from player](/static/tutorials/free-throw/points.gif)

---

#### ~ tutorialhint
```blocks
//@highlight
freethrow.onOverlapHoop(function () {
    freethrow.changeScoreAddPoint(1)
    freethrow.destroyBall()
})
```



## {10. Look at the game window again, again}


- :binoculars: Play again!

---

![Free throw shot from player](/static/tutorials/free-throw/pointstest.gif)

---

You should get a point every time your basketball overlaps the hoop!



## {16. Add a time limit}

** Add a timer**

---

```block
freethrow.gameCountdown(30)
```

---

![Free throw shot from player](/static/tutorials/free-throw/addtimer.gif)


#### ~ tutorialhint
```blocks
freethrow.setCourt()
freethrow.addPlayer(throw_imgs.dunk)
freethrow.addHoop()
//@highlight
freethrow.gameCountdown(30)
```



## {11. Finale}

**🏀 Well Done! 🏀**

---

You've made a free-throw game!

**Can you get 20 points before time runs out?**

When you've finished playing, click **Done** so you can share your tutorial with family and friends!






#### ~ tutorialhint
```blocks
freethrow.onOverlapHoop(function () {
    freethrow.changeScoreAddPoint(1)
    freethrow.destroyBall()
})
freethrow.onA(function () {
    freethrow.throwBall()
})
freethrow.setCourt()
freethrow.addPlayer(throw_imgs.dunk)
freethrow.addHoop()
freethrow.gameCountdown(30)

```


```blockconfig.global
freethrow.gameCountdown(30)

freethrow.addPlayer(throw_imgs.dunk)

freethrow.onA(function () {
    freethrow.throwBall()
})

freethrow.onOverlapHoop(function () {
    freethrow.changeScoreAddPoint(1)
    freethrow.destroyBall()
})

```


```package
throw_imgs=github:kiki-lee/throw_imgs
arcade-block-icons=github:kiki-lee/arcade-block-icons#v0.0.13
arcade-text=github:microsoft/arcade-text#v1.3.0
```



```ghost
freethrow.onOverlapHoop(function () {
    freethrow.changeScoreAddPoint(1)
    freethrow.destroyBall()
})
freethrow.onA(function () {
    freethrow.throwBall()
})
freethrow.setCourt()
freethrow.addPlayer(throw_imgs.dunk)
freethrow.addHoop()

```



```customts

namespace SpriteKind {
    //% isKind
    export const Goal = SpriteKind.create()
}


info.onCountdownEnd(function () {
    game.gameOver(true)
})


//% color=#f84c08
namespace freethrow {

    export let projectile: Sprite = null
    export let athlete: Sprite = null
    export let mostRecent: Sprite = null
    export let scoreText = textsprite.create("", 15, 1)
    scoreText.setFlag(SpriteFlag.RelativeToCamera, true)

    /**
     * Run code when the play button is pressed
     * (Like on start, but jr)
     */
    //% color=#a62e08
    //% help=game/on-start-simple 
    //% weight=99 
    //% afterOnStart=false
    //% blockId=on_start_simple 
    //% block="on `ICON.play`"
    //% blockAllowMultiple=0
    export function onStartSimple(a: () => void): void {
        a();
    }


    /**
    * Play music in background
    */
    //% blockId=play_music
    //% block="`ICON.arrow-play-white` $thisSong"
    //% thisSong.shadow=music_song_field_editor
    //% help=github:docs/play_music
    export function playSong(thisSong: music.Playable) {
        music.play(thisSong, music.PlaybackMode.InBackground)
    }

    /**
    * Repeat music in background
    */
    //% blockId=repeat_music
    //% block="`ICON.arrow-repeat-white` $thisSong"
    //% thisSong.shadow=music_song_field_editor
    //% help=github:docs/repeat_music
    export function repeatSong(thisSong: music.Playable) {
        music.play(thisSong, music.PlaybackMode.LoopingInBackground)
    }


    /**
    * Play soundeffect in background
    */
    //% blockId=play_sef
    //% block="`ICON.arrow-play-white` $thisSound"
    //% thisSound.shadow=soundExpression_createSoundEffect
    //% help=github:docs/play_sef
    export function playSound(thisSound: music.Playable) {
        music.play(thisSound, music.PlaybackMode.InBackground)
    }


    /**
    * Set Court
    */
    //% blockId=set_court
    //% block="add `ICON.court`"
    //% help=github:docs/set_court
    export function setCourt() {
        scene.setBackgroundImage(throw_imgs.court)
    }


    /**
    * Player throw basketball
    */
    //% blockId=throw_ball
    //% block="throw `ICON.bball`"
    //% help=github:docs/throw_ball
    export function throwBall() {
        freethrow.projectile = sprites.createProjectileFromSprite(throw_imgs.ball, freethrow.athlete, 0, -100)
    }

   

    /**
      * Make the turkey appear to jump
      */
    //% blockId=destroy_ball
    //% block="destroy `ICON.bball`"
    //% help=github:docs/destroy_ball
    export function destroyBall() {
        sprites.destroy(mostRecent)
    }



    /**
    * Add the player and mechanics to the game
    */
    //% blockId=add_player
    //% block="⛹🏻 = $thisImg"
    //% thisImg.shadow=screen_image_picker
    //% help=github:docs/add_player
    export function addPlayer(thisImg:Image) {
        freethrow.athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
        freethrow.athlete.setPosition(76, 90)
        freethrow.athlete.setVelocity(50, 0)
        freethrow.athlete.setBounceOnWall(true)
    }

    /**
    * Add the hoop and mechanics to the game
    */
    //% blockId=add_hoop
    //% block="place `ICON.hoop`"
    //% help=github:docs/add_hoop
    export function addHoop() {
        let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
        hoop.setPosition(80, 35)
    }


    /**
    * Start the game timer
    */
    //% blockId=game_countdown
    //% block="`ICON.clock-white` $thisSec (s)"
    //% thisSec.defl = 30
    //% help=github:docs/game_coundown
    export function gameCountdown(thisSec:number) {
        info.startCountdown(thisSec)
    }



    /**
     * Register code run when a controller event occurs
    * @param event
    * @param handler
    */
    //% weight=99 blockGap=8
    //% blockId=ctrlonA block="on `ICON.a-button-white-invert`"
    //% color=#a62e08
    //% help=docs/on-a
    export function onA(handler: () => void) {
        controller.A.onEvent(ControllerButtonEvent.Pressed, handler)
    }



    /**
     * Runs code when ball overlaps net
    * @param event
    * @param handler
    */
    //% weight=99 blockGap=8
    //% blockId=on-overlap-hoop
    //% block="`ICON.bball` `ICON.point-right-white` `ICON.hoop`"
    //% color=#a62e08
    //% help=docs/on-overlap-hoop
    export function onOverlapHoop(handler: () => void) {
        if (!handler) return;
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
            freethrow.mostRecent = sprite;
            handler();
        })
    }


    /**
    * Overrides the normal score UI with an iconified version
    */
    //% blockId=set_hoop_override
    //% block="set `ICON.hoop` to $thisScore"
    //% thisScore.defl=0
    //% help=github:docs/set_hoop_override
    export function setScoreOverride(thisScore: number) {
        info.setScore(thisScore)
        freethrow.scoreText.setText(" x " + convertToText(info.score()))
        scoreText.setIcon(img`
. . 3 4 4 4 4 3 . . 
. 3 4 1 . . 1 4 4 . 
3 4 . 1 . . . . 4 3 
4 3 1 1 1 1 . 1 4 4 
. 4 4 4 4 4 4 4 4 . 
. 1 . 1 . . 1 . 1 . 
. 1 . 1 . . 1 . 1 . 
. 1 . . 1 1 . . 1 . 
. 1 1 1 1 1 . 1 1 . 
. 1 . 1 . . 1 . 1 . 
`)

        scoreText.setBorder(1, 3, 1)
        scoreText.setMaxFontHeight(9)
        scoreText.right = 160
        scoreText.top = 1
        scoreText.update()
        info.showScore(false)
    }


    /**
    * Changes the score 
    */
    //% blockId=change_score_jr
    //% block="`ICON.hoop` + $thisMuch"
    //% thisMuch.defl=1
    //% help=github:docs/change_score_jr
    export function changeScoreAddPoint(thisMuch:number) {
        info.changeScoreBy(thisMuch)
        freethrow.setScoreOverride(info.score())
    }

}

freethrow.setScoreOverride(0)
```



```simtheme
{
    "palette": [
       "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FF93C4",
        "#FF8135",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#E3A591",
        "#A4839F",
        "#5F5F5F",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```
