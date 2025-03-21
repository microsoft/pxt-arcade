# Lyla and Stu's Snack Chase
### @explicitHints true
### @flyoutOnly true
### @hideDone true


## Lyla and Stu's Snack Chase @showdialog

**Let's code a video game with Lyla, Everett, Luke and Stu!**

![Lyla intro](youtube:43Pp_KVsFIc)

![ ](https://code.org/api/hour/begin_snack_chase.png) 

## {Step 2}

**We need snacks to chase!**

---

Snap the 
```block
sprites.sendFlying(lyla_imgs.picklechip, 1)
```
block into the workspace. 

---

![Add a flying pickle with a new block](/static/tutorials/lyla/pickle.gif "Choose the pickle from the gallery" )



#### ~ tutorialhint

```blocks
//@highlight
sprites.sendFlying(lyla_imgs.picklechip, 1)
```



## {Step 3}

**Set the scene!**

---

![Use the set scene block](/static/tutorials/lyla/bg.gif "Use the set scene block" )

---

The background in the block is Loops Lunch! Click on the image to draw your own background.



#### ~ tutorialhint

```blocks
sprites.sendFlying(lyla_imgs.picklechip, 1)
//@highlight
scene.setBG(lyla_imgs.diner)
```




## {Step 4}

**Try your game!**

![Lyla intro](youtube:d8f-PtWSuKk?start=53)

---

Press A (or the space bar) to clear the message, then use the arrow keys to
catch the snacks.




## {Step 5}

**Add a timer!**

---

![Grab the timer block](/static/tutorials/lyla/timer.gif "The timer will count down from 45 to 0." )

---

How many snacks can you catch before time runs out? 

If the game is too hard, add more seconds to the timer. If it's too easy, try taking time away.




#### ~ tutorialhint

```blocks
sprites.sendFlying(lyla_imgs.picklechip, 1)
scene.setBG(lyla_imgs.diner)
//@highlight
game.gameCountdown(30)
```



## 🥒 You did it! 🥒





You made a video game!

![You finished your game!](/static/tutorials/lyla/finish.gif "You finished your game")




## Play with Friends @showdialog


You can play your game with one other friend using the same keyboard.

![Picture of keys to use to play game](/static/tutorials/lyla/key.png "Key for keyboard keys")

---

~hint Parents, click here for more ways to share.

---

![Sharing Multiplayer](youtube:dGaG_b2y33I)

hint~



## {Finale}

**Want to keep working?**

---

Add more blocks!
You can change players, change snacks, or add music!

![Add something special](/static/tutorials/lyla/more.gif "Add something special")

---



#### ~ tutorialhint....

```blocks
sprites.sendFlying(lyla_imgs.picklechip, 1)
scene.setBG(lyla_imgs.diner)
game.gameCountdown(30)
sprites.assignPlayerImgs(lyla_imgs.lyla, lyla_imgs.stu, lyla_imgs.everett, lyla_imgs.luke)
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.InBackground)
```



```blockconfig.global
scene.setBG(lyla_imgs.diner)
game.gameCountdown(30)
sprites.sendFlying(lyla_imgs.picklechip, 1)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
```


```ghost
scene.setBG(lyla_imgs.diner)
game.gameCountdown(30)
sprites.sendFlying(lyla_imgs.picklechip, 1)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)

```



```package
multiplayer
arcade-text=github:microsoft/arcade-text#v1.3.0
lyla_imgs=github:kiki-lee/lyla_imgs#v0.0.7
arcade-block-icons=github:kiki-lee/arcade-block-icons#v0.0.10
```


```customts

//% color=#b79900 icon="\uf1ce"
namespace pickle {
    /* Code to set up Lyla game only */
    // Make sure not to remove later player when earlier player selected
    export let playersConnected = 0;
    // Keep count to delete old splash when new splash arrives
    export let pickles_to_get = 7;
    export let characters = [lyla_imgs.lyla, lyla_imgs.everett, lyla_imgs.stu, lyla_imgs.luke];
    // Create textsprite for score
    export let scoreText = textsprite.create("");
    export let theseThings = " snacks";

    game.setGameOverMessage(false, "Try Again!")
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.createSong(lyla_imgs.lose), false)
    game.setGameOverMessage(true, "You did it!")
    game.setGameOverPlayable(true, music.createSong(lyla_imgs.winner), false)


    control.raiseEvent(3241, 1)

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
        sprites.destroy(otherSprite, effects.disintegrate, 100)
        pickle.changeScoreOverride(1)
    })
    info.onCountdownEnd(function () {
        game.simpleGame()
    })

    // Workaround for game in play mode (vs edit mode where it worked fine)
    info.setScore(0)


    // Add characters and message when new players join
    mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
        if (mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number) <= characters.length) {
                pickle.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
        }
        else {
            game.splashMP("Not enough characters on team!")
        }
    })



    /********/
    //% blockId=set_players
    // block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters
    export function setPlayersWith(list: Image[], num: number) {
        
        if (num > playersConnected) {
            playersConnected = num;
            pickles_to_get = 7 * num;
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            let xloc = [
                40,
                120,
                40,
                120
            ]
            let yloc = [
                30,
                30,
                90,
                90
            ]
            for (let index = 0; index <= num - 1; index++) {
                mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                mp.moveWithButtons(mp.getPlayerByIndex(index))
                
            }
            game.splashMP("Catch " + pickles_to_get + theseThings + " to win!")
         }
    }
    //% blockId=bump_sprite
    // block="$thisSprite bump $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=otherSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }
    /**
    * Overrides the normal score UI with an iconified version
    */
    //% blockId=set_score_override
    //% block="set `ICON.pickle` to $thisScore"
    //% thisScore.defl=0
    //% color="#b70082"
    //% group="Info"
    //% help=github:docs/mp_set_score_override
    export function setScoreOverride(thisScore: number) {
        let thisIcon = img`
            . . . . . . . . . . . . . . . . 
. . . . . 7 7 a 8. . . . . . . 
. . . . 7 7 a 8 7 7 a 8 7. . . 
. . . 7 7 a 8 7 7 a 8 7 7 7. . 
. . 7 7 a 8 7 7 a 8 7 7 7 a 8. 
. . 7 a 8 7 7 a 8 7 7 7 a 8 7. 
. 7 a 8 7 7 a 8 7 7 7 a 8 7. . 
.a 8 7 7 a 8 7 7 7 a 8 7 7 7. 
. . 7 7 a 8 7 7 a 8 8 7 7 7 7. 
. . 7 a 8 7 7 a 8 7 7 7 7 7 a. 
. . . 8 7 7 a 8 7 7 7 7 7 a 8. 
. . . 7 7 a 8 7 7 7 7 a a 8. . 
. . . .a 8 7 7 7 7 a 8 7. . . 
. . . . . . 7 7 7 a 8 7. . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . .
`
        info.setScore(thisScore)
        pickle.scoreText.setText(" x " + convertToText(info.score()))
        scoreText.setIcon(thisIcon)
        scoreText.setBorder(1, 3, 1)
        scoreText.setMaxFontHeight(9)
        scoreText.right = 160
        scoreText.top = 1
        scoreText.update()
        info.showScore(false)
    }
    /**
    * Changes the score and overrides the traditional UI
    * with an iconified version
    */
    //% blockId=mp_change_score_override
    //% block="change `ICON.pickle` by $thisScore"
    //% thisScore.defl=1
    //% color="#b70082"
    //% help=github:docs/mp_change_score_override
    //% group="Info"
    export function changeScoreOverride(thisScore: number) {
        info.changeScoreBy(thisScore)
        pickle.setScoreOverride(info.score())
    }
}
namespace loops {
    /**
     * Run code when the play button is pressed
     * (Like on start, but jr)
     */
    //% color=#488898
    //% help=game/on-start-simple 
    //% weight=99 
    //% afterOnStart=false
    //% blockId=on_start_simple 
    //% block="on `ICON.play`"
    //% blockAllowMultiple=0
    export function onStartSimple(a: () => void): void {
        a();
    }
}
namespace music {
    /**
     * Simplified block to play a song
     */
    //% help=game/simple-song
    //% blockId=playThis 
    //% block="play $thisSong"
    //% thisSong.shadow=music_song_field_editor
    export function simpleSong(thisSong: Playable) {
        music.play(thisSong, music.PlaybackMode.UntilDone)
    }
}
//% weight=200
namespace game {
    /**
    * Start the game timer
    */
    //% blockId=game_countdown
    //% block="`ICON.clock-white` $thisSec (s)"
    //% thisSec.defl = 30
    //% help=github:docs/game_coundown
    export function gameCountdown(thisSec: number) {
        info.startCountdown(thisSec)
    }
    /**
     * Run code on an interval of time. This executes before game.onUpdate()
     * @param body code to execute
     */
    //% help=game/on-update-interval weight=99 afterOnStart=true
    //% blockId=gameinterval3 
    //% weight=100
    //% block="every $period second(s)"
    //% period.defl=1
    //% blockAllowMultiple=1
    export function onUpdateInterval3(period: number, a: () => void): void {
        period = period * 1000;
        if (!a || period < 0) return;
        let timer = 0;
        game.eventContext().registerFrameHandler(scene.UPDATE_INTERVAL_PRIORITY, () => {
            const time = game.currentScene().millis();
            if (timer <= time) {
                timer = time + period;
                a();
            }
        });
    }
    //% blockId=hold_text 
    //% weight=200
    //% block="show $thisText"
    //% thisText.defl="Press (A) to play"
    export function holdText(thisText: string) {
        game.showLongText(thisText, DialogLayout.Full)
    }
    /**
    * Special lose sequence
    */
    //% blockId=set_lyla_lose
    //% block="game over `ICON.frown-open-white`"
    //% help=github:docs/set_simple_lose
    export function simpleLoss() {
        game.gameOver(false)
    }
    /**
    * Special win sequence
    */
    //% blockId=set_lyla_win
    //% block="game over `ICON.smile-beam-white`"
    //% weight=300
    //% help=github:docs/set_simple_win
    export function simpleWin() {
        game.gameOver(true)
    }
    /**
    * Special win sequence
    */
    //% blockId=set_lyla_g_o
    //% block="game over"
    //% weight=300
    //% help=github:docs/set_simple_g_o
    export function simpleGame() {
        if (info.score() >= pickle.pickles_to_get) {
            game.simpleWin()
        } else {
            game.simpleLoss()
        }
    }
    /**
     * Show a title and an optional subtitle menu
     * Can be dismissed by any player
     * @param title
     * @param subtitle
     */
    //% weight=90 help=game/splashMP
    //% blockId=gameSplashMP block="splash %title||%subtitle"
    //% title.shadow=text
    //% subtitle.shadow=text
    //% group="Prompt"
    export function splashMP(title: any, subtitle?: any) {
        title = console.inspect(title);
        subtitle = subtitle ? console.inspect(subtitle) : subtitle;
        controller._setUserEventsEnabled(false);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        const dialog = new SplashDialog(screen.width, subtitle ? 42 : 35);
        dialog.setText(title);
        if (subtitle) dialog.setSubtext(subtitle);
        const s = sprites.create(dialog.image, -1);
        let pressed = true;
        let done = false;
        let connected = false;
        mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
            connected = true;
        })

        game.onUpdate(() => {
            dialog.update();
            const currentState = ( connected ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.B)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.B)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.B)) ||
                (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.B))
            )
            if (currentState && !pressed) {
                connected = false;
                pressed = true;
                scene.setBackgroundImage(null); // GC it
                game.popScene();
                done = true;
            }
            else if (pressed && !currentState) {
                pressed = false;
                connected = false;
            }
        })
        pauseUntil(() => done);
        controller._setUserEventsEnabled(true);
    }
}

//% weight=100
namespace sprites {
    export enum Plyrs {
        //% block="Player 1"
        One = 0,
        //% block="Player 2"
        Two = 1,
        //% block="Player 3"
        Three = 2,
        //% block="Player 4"
        Four = 3
    }
    /**
     * Creates a moving sprite with the image that you choose
     */
    //% blockId=send_flying 
    //% weight=1000
    //% block="add $thing every $interval `ICON.clock-white`"
    //% thing.shadow=screen_image_picker
    //% thing.defl=lyla_imgs.picklechip
    //% interval.defl=1
    export function sendFlying(thing: Image, interval:number) {
        // Only calls them pickles if they are the default pickle
        /*if (thing.equals(lyla_imgs.picklechip)) {
            pickle.theseThings = " pickles";
        }*/
        game.onUpdateInterval(interval*1000, function () {
            let foodFight = sprites.createProjectileFromSide(thing, randint(-100, 100), randint(-100, 100))
        })
    }
    /**
     * Assign images to players by array
     */
    //% blockId=assign_player_images
    //% block="team = $img1 $img2 $img3 $img4"
    //% img1.shadow=screen_image_picker
    //% img2.shadow=screen_image_picker
    //% img3.shadow=screen_image_picker
    //% img4.shadow=screen_image_picker
    //% img1.defl=lyla_imgs.lyla
    //% img2.defl=lyla_imgs.stu
    //% img3.defl=lyla_imgs.everett
    //% img4.defl=lyla_imgs.luke
    //% inlineInputMode=inline
    //% weight=1200
    export function assignPlayerImgs(img1: Image, img2: Image, img3: Image, img4: Image) {
        pickle.characters[0] = img1;
        pickle.characters[1] = img2;
        pickle.characters[2] = img3;
        pickle.characters[3] = img4;
    }
}
//% weight=250
namespace info {
    /**
     * Runs code once each time a player's score reaches a given value.
     * @param score The score to check for, eg: 100
     * @param handler The code to run when the score is reached
     */
    //% blockId=onScore2
    //% block="after $score `ICON.pickle`"
    //% score.defl=20
    //% blockGap=8
    //% help=docs/on-score
    //% group="Info"
    export function onScore2(score: number, handler: () => void) {
        info.onScore(score, handler);
    }
}
//% weight=100
namespace scene {
    /**
     * Sets the background with fewer words
     */
    //% blockId=set_bg
    //% block="set scene $thisBG"
    //% thisBG.shadow=lyla_bg_image_picker
    //% help=docs/set_bg
    //% group="Scene"
    export function setBG(thisBG: Image) {
        scene.setBackgroundImage(thisBG)
    }
}
namespace images {
    //% blockId=lyla_bg_image_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.sizes="-1,-1"
    //% img.fieldOptions.filter="lylabg"
    //% weight=100 group="Create"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _screenImageLylaBG(img: Image) {
        return img
    }
}

```

```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#D26A9E",
        "#F9C890",
        "#FDFF70",
        "#8E2EC4",
        "#408325",
        "#4166D8",
        "#10CCE5",
        "#95D6B1",
        "#A4839F",
        "#693C16",
        "#E5CDC4",
        "#A46C46",
        "#000000"
    ]
}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT_Music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

