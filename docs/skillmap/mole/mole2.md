# Hammer Time
### @explicitHints true


## {Intro @showdialog}

Your code from the last activity is already in the workspace.

Let's use **SPRITES** and **EVENTS** to add a rubber hammer.


![Whack-the-Mole](/static/skillmap/mole/mole2.gif "Let's add a hammer to make our game more exciting." )




## {2. Play Your Game}


**Look at the game window.**

- :binoculars: Look at your project in the game window to see what we're starting with.

You should see a mole changing spots every second.


💡 **Tip:** _If your code isn't working and you can't figure out why, click "Replace my code" to replace the blocks in your workspace with new starter code._






## {3. Add the Hammer}

Let's add another **SPRITE** for our rubber hammer.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab

```block
let myHammer = sprites.create(img`.`, SpriteKind.Player)
```

and snap it inside and at the very **end** of the
``||loops(noclick): on start||``
block container that's already in your workspace.

- :mouse pointer: Click the empty square and when the image editor opens, switch to **My Assets** <br/>
![Switch to My Assets](/static/skillmap/mole/my-assets.gif "Change from the Editor to My Assets and select the grid.")
<br/>to select the **hammer** sprite.<br/>
![Choose the image that looks like a hammer.](/static/skillmap/mole/hammer.png "Select the rubber hammer from My Assets.")
<br/>Then click **Done**.



~hint Show me how! 🕵🏽

![Choose the hammer from My Assets](/static/skillmap/mole/choose-hammer.gif "Change from the Editor to My Assets and select the hammer.")

hint~




#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
//@highlight
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
```


## {4. Move the Hammer}

We need to be able to move the hammer around the screen to chase the mole.


- :controller: From the ``||controller: Controller||`` category, grab <br/>
```block
controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)
```
and snap it in at **the end** of the ``||loops(noclick): on start||`` block already in the workspace.


~hint Click here to see how 🕵🏽

![Look under Controller for the block](/static/skillmap/mole/add-controller.gif "Drag out the controller block to use later.")


hint~





#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
//@highlight
controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)
```



## {5. Check Your Game!}

- :binoculars: Test your project in the game window to see how it works!

Try using the on-screen joypad (or the arrow keys on your keyboard) to move the hammer around the screen.







## {6. Add the Overlap}


Did you notice that nothing happened when the hammer overlapped the mole?

That's because we haven't created an **EVENT** for that yet!


- :paper plane: From the ``||sprites: Sprites||`` category, grab <br/>

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {  info.changeScoreBy(1) })
```

and drag it to an **empty** area of the workspace.


~hint Show me how! 🕵🏽


![Add an overlap block.](/static/skillmap/mole/add-overlap.gif "On sprite of kind Player overlaps otherSprite of kind Enemy")

hint~




#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { info.changeScoreBy(1) })
```




## {7. Check Your Game Again!}


- :binoculars: Play with your project in the game window!


When your rubber hammer overlaps the mole, you should see points start to show up in the top-right corner.





## {8. Too Many Points}

Did you notice that the points added up really quickly when the rubber hammer stayed above the mole? Let's fix that.


- :paper plane: From the ``||sprites: Sprites||`` category, grab <br/>

```block
    sprites.move_to_random_hole_on_grid(myMole)
```

and snap it into **the end** of the ``||sprites(noclick): on sprite overlaps otherSprite||`` block container already in the workspace.

Now, when the rubber hammer overlaps the mole, the mole will quickly dash away!


~hint Show me how! 🕵🏽

![Move the mole.](/static/skillmap/mole/overlap-move.gif "Add another move myMole to random area block to the project")

hint~




#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
//@highlight
    sprites.move_to_random_hole_on_grid(myMole)
})
```




## {9. Timer}

Finally, let's add a timer to keep the game exciting.


- :id card: From the ``||info: Info||`` category, grab <br/>

```block
info.startCountdownGame(15, winTypes.Score)
```

and snap it into **the end** of the <br/>
``||loops(noclick): on start||`` <br/>
block container already in the workspace.


~hint Show me how! 🕵🏽

![Add timer.](/static/skillmap/mole/countdown.gif "start countdown 15 (s) and game over high score")

hint~




#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)
//@highlight
info.startCountdownGame(15, winTypes.Score)
```




## {10. Play your game!}


- :binoculars: Play your game in the game window.

You should get one point each time you overlap the mole with the rubber hammer, then the mole should hop to another spot. Time should run out after 15 seconds and your high score should display!

**Can you get 15 points before the timer runs out?**









## {11. Finale}

**🥳 You got it! 🥳**

You have made a Whack-the-Mole game.

When you're ready, click **Done** to return to the skillmap so you can add sound and animation to your game!





```blockconfig.global
let myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { info.changeScoreBy(1) })
```


```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
```


```template

let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)

game.onUpdateInterval(1000, function () {
    sprites.move_to_random_hole_on_grid(myMole)
})
```




```customts

enum winTypes {
    //% block="win game"
    Win,
    //% block="lose game"
    Lose,
    //% block="high score"
    Score,
    //% block="multiplayer"
    Multi
}

enum speeds {
    //% block="fast"
    Fast,
    //% block="medium"
    Med,
    //% block="slow"
    Slow
}

enum areas {
    //% block="top"
    Top,
    //% block="middle"
    Mid,
    //% block="bottom"
    Bottom
}

let textSprite: TextSprite = null
//let fanfare: effects.BackgroundEffect = undefined;
//let winStyle = winTypes.Score



namespace animation {
    /**
    * Prefills animation block with hammer items
    */
    //% color="#03aa74"
    //% blockId=run-image-animation-hammer
    //% block="animate $sprite=variables_get(myHammer) frames $frames=animation_editor interval (ms) $frameInterval=timePicker loop $loop=toggleOnOff"
    //% frameInterval.defl=100
    //% group="Animate"
    //% weight=100
    //% help=animation/run-image-animation-hammer
    export function runImageAnimationHammer(sprite: Sprite, frames: Image[], frameInterval?: number, loop?: boolean) {
        const anim = new ImageAnimation(sprite, frames, frameInterval || 100, !!loop);
        anim.init();
    }
}



namespace scene {
    /**
    * Adds text to the top, middle, or bottom
    * of screen as defined by circuis games
    */
    //% color="#4b6584"
    //% blockId=add_label_to
    //% block="add label $myLabel to $myPosition of window || $myColor"
    //% myLabel.defl="Whack-the-Mole"
    //% myColor.shadow="colorindexpicker"
    //% myColor.defl=4
    //% myPosition.defl=areas.Bottom
    //% inlineInputMode=inline
    export function add_label_to(myLabel: string, myPosition: areas, myColor?:number) {
        if (!myColor)
            myColor = 4;

        textSprite = textsprite.create(myLabel, 0, myColor)
        if (myPosition == areas.Bottom) textSprite.setPosition(80, 110);
        if (myPosition == areas.Mid) textSprite.setPosition(80, 50);
        if (myPosition == areas.Top) textSprite.setPosition(80, 20);
    }
}

namespace controller{

    /**
    * Combines a simple "move with arrows"
    * and stay in screen
    */
    //% color="#d54322"
    //% blockId=move_only_onscreen_with_arrows
    //% block="move $thisSprite=variables_get(myHammer) on screen with speed $mySpeed"
    //% mySpeed.defl=speeds.Fast
    //% inlineInputMode=inline
    export function move_only_onscreen_with_arrows(thisSprite: Sprite, mySpeed: speeds) {
        thisSprite.setStayInScreen(true)
        if (mySpeed == speeds.Fast) {
            controller.moveSprite(thisSprite, 225, 225)
        } else if (mySpeed == speeds.Med) {
            controller.moveSprite(thisSprite, 175, 175)
        } else {
            controller.moveSprite(thisSprite, 100, 100)
        }
    }

}

namespace sprites {

    /**
    * Randomly moves mole to one of the holes on grid
    */
    //% color="#4b7bec"
    //% blockId=move_to_random_hole_on_grid
    //% block="move sprite $thisSprite=variables_get(myMole) to random area"
    //% inlineInputMode=inline
    export function move_to_random_hole_on_grid(thisSprite: Sprite) {
        thisSprite.setPosition(simplified.chooseRandomNumber(28, 80, 130), simplified.chooseRandomNumber(21, 53, 85))
    }
}

namespace info {
    let countdownInitialized = false;
    /**
     * Adds game end style to countdown
     */
    //% color="#cf6a87"
    //% group=countdown
    //% blockId=start_countdown_game
    //% block="start countdown $myTime (s) and game over $winType || effect $winEffect"
    //% myTime.defl=15
    //% winType.defl=winTypes.Score
    //% winEffect.defl=effects.confetti
    //% inlineInputMode=inline
    export function startCountdownGame(myTime: number, winType: winTypes, winEffect?: effects.BackgroundEffect) {
        if (!winType)
            winType = winTypes.Win;
        if (!winEffect && winType != winTypes.Lose){
            winEffect = effects.confetti;
        }
        else { winEffect = effects.melt;}
        init(winType, winEffect);
        info.startCountdown(myTime)

    }

    export function newGameOver(winStyle: winTypes, fanfare: effects.BackgroundEffect) {

        // Prep default variables for different win types
        let winnerNumber = 1;
        let thisHigh = 0;

        // Save all scores as relevant to the game.
        info.saveAllScores();

        // collect the scores before popping the scenes
        const scoreInfo1 = info.player1.getState();
        const scoreInfo2 = info.player2.getState();
        const scoreInfo3 = info.player3.getState();
        const scoreInfo4 = info.player4.getState();
        const highScore = info.highScore();
        const allScores = [scoreInfo1.score, scoreInfo2.score, scoreInfo3.score, scoreInfo4.score];

        // Find player with highest score
        for (let i = 0; i < 4; i++) {
            if (allScores[i] > thisHigh) {
                thisHigh = allScores[i];
                winnerNumber = i+1;
            }
        }
        // If highest score is higher than saved high, replace
        if (thisHigh > highScore){
            info.saveHighScore(); }


        // releasing memory and clear fibers. Do not add anything that releases the fiber until background is set below,
        // or screen will be cleared on the new frame and will not appear as background in the game over screen.
        game.popScene();
        game.pushScene();
        scene.setBackgroundImage(screen.clone());

        music.powerUp.play();

        fanfare.startScreenEffect();

        pause(400);

        const overDialog = new GameOverDialog(true, thisHigh, highScore, winnerNumber, winStyle);
        scene.createRenderable(scene.HUD_Z, target => {
            overDialog.update();
            target.drawTransparentImage(
                overDialog.image,
                0,
                (screen.height - overDialog.image.height) >> 1
            );
        });
        pause(500); // wait for users to stop pressing keys
        overDialog.displayCursor();
        game.waitAnyButton();
        control.reset();

    }

    function init(winStyle: winTypes, fanfare: effects.BackgroundEffect) {
        if (countdownInitialized) return;
        countdownInitialized = true;

        info.onCountdownEnd(function () {
            if (winStyle == winTypes.Win) {
                game.over(true, fanfare)
            } else if (winStyle == winTypes.Lose) {
                game.over(false, fanfare)
            } else {
                newGameOver(winStyle, fanfare);
            }
        })
    }

    export class GameOverDialog extends game.BaseDialog {
        protected cursorOn: boolean;
        protected isNewHighScore: boolean;

        constructor(
            protected win: boolean,
            protected score?: number,
            protected highScore?: number,
            protected winnerNum?: number,
            protected winStyle?: winTypes
        ) {
            super(screen.width, 46, img`
        1 1 1
        f f f
        1 1 1
        `);
            this.cursorOn = false;
            this.isNewHighScore = this.score > this.highScore;
        }

        displayCursor() {
            this.cursorOn = true;
        }

        update() {
            this.clearInterior();
            this.drawTextCore();

            if (this.cursorOn) {
                this.drawCursorRow();
            }
        }

        drawTextCore() {
            const titleHeight = 8;
            if (this.winStyle == winTypes.Multi){
                this.image.printCenter(
                    "Player " + this.winnerNum + " wins!",
                    titleHeight,
                    screen.isMono ? 1 : 5,
                    image.font8
                );

                if (this.score !== undefined) {
                    const scoreHeight = 23;
                    const highScoreHeight = 34;
                    const scoreColor = screen.isMono ? 1 : 2;

                    this.image.printCenter(
                        "Score:" + this.score,
                        scoreHeight,
                        scoreColor,
                        image.font8
                    );

                    if (this.isNewHighScore) {
                        this.image.printCenter(
                            "New High Score!",
                            highScoreHeight,
                            scoreColor,
                            image.font5
                        );
                    } else {
                        this.image.printCenter(
                            "HI:" + this.highScore,
                            highScoreHeight,
                            scoreColor,
                            image.font8
                        );
                    }
                }
            }
            else {
                this.image.printCenter(
                    "Great Job!",
                    titleHeight,
                    screen.isMono ? 1 : 5,
                    image.font8
                );

                if (this.score !== undefined) {
                    const scoreHeight = 23;
                    const highScoreHeight = 34;
                    const scoreColor = screen.isMono ? 1 : 2;

                    this.image.printCenter(
                        "Score:" + this.score,
                        scoreHeight,
                        scoreColor,
                        image.font8
                    );

                    if (this.isNewHighScore) {
                        this.image.printCenter(
                            "New High Score!",
                            highScoreHeight,
                            scoreColor,
                            image.font5
                        );
                    } else {
                        this.image.printCenter(
                            "HI:" + this.highScore,
                            highScoreHeight,
                            scoreColor,
                            image.font8
                        );
                    }
                }
            }
        }
    }
}

namespace game {
    /**
     * Adds additional end game styles
     */
    //% color="#8854d0"
    //% group=Gameplay
    //% blockId=on_game_over_expanded
    //% block="game over $winStyle || add effect $winEffect"
    //% winType.defl=winTypes.Win
    //% winEffect.defl=effects.confetti
    //% inlineInputMode=inline
    export function onGameOverExpanded(winStyle: winTypes, winEffect?: effects.BackgroundEffect) {
        if (!winStyle)
            winStyle = winTypes.Win;
        if (!winEffect && winStyle != winTypes.Lose) {
            winEffect = effects.confetti;
        }
        else { winEffect = effects.melt; }

        if (winStyle == winTypes.Win) {
            game.over(true, winEffect)
        } else if (winStyle == winTypes.Lose) {
            game.over(false, winEffect)
        } else {
            info.newGameOver(winStyle, winEffect);
        }
    }
}

namespace simplified {
    /**
     * Randomly chooses one of the parameter numbers
     *
     * @param choice1 Numeric choice to appear in the list of player choices
     * @param choice2 Numeric choice to appear in the list of player choices
     * @param choice3 Numeric choice to appear in the list of player choices
     * @param choice4 Numeric choice to appear in the list of player choices
     * @param choice5 Numeric choice to appear in the list of player choices
     */

    //% group=Arrays
    //% color="#fa8f08"
    //% blockId=choose_random_num_from_array
    //% block="choose one of $choice1 $choice2 $choice3 || $choice4 $choice5"
    //% choice1.defl=28
    //% choice2.defl=80
    //% choice3.defl=130
    //% inlineInputMode=inline
    export function chooseRandomNumber(choice1: number, choice2: number, choice3: number, choice4?: number, choice5?: number) {
        let myList = [choice1, choice2];
        if (choice3) myList.push(choice3);
        if (choice4) myList.push(choice4);
        if (choice5) myList.push(choice5);
        return myList._pickRandom();
    }



}

```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"Qv@;p79@e|(fGBFKaJ@[\": {\n        \"data\": \"hwQQABAAAAAAAO7u7u7u7gDg7u7u7u7uAO7u7u7u7u4A7u7u7u7v7gDu7v7u7v7uAO7u7u/v/u4A7v/u8+7+7gDu7u4z7v7uAO7u7jPu/u4A7v/u8+7+7gDu7u7v7/7uAO7u/u7u/u4A7u7u7u7v7gDu7u7u7u7uAODu7u7u7u4AAO7u7u7u7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mole\"\n    },\n    \"/LJ4HDC9/+6j@JGvC7#:\": {\n        \"data\": \"hwSgAHgAAABmZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d397u7u8t/d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3f3v7u7u8z8f3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3e/u7u7y8zM/3d3d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3e/u7u7y8zM/Hd3d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d7+7u7vLzMzMzMx/d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d397u7u7vLzMzMzMx/d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d7+7u7vLzMzMzPx3d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d/e7u7u7zMzMzPx3d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3e/u7u7zMzM/Hd3d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3f3u7u7y8zM/3d3d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3f3v7u7y8z8f3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d397u7u8t8d3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"grid\"\n    },\n    \"Oag!`vsg+~Y,+WT2meT;\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNwNAAAAAAAAAAAAAAAAAMDcDQAAAAAAAAAAAAAAAMDcvQsAAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAAMDcvQsAAAAAAABABAAAAMDcvQsAAAAAAAAAQAQAAADA3L0LAAAAAAAAQCTiDgDA3L0LAAAAAAAAAEAk4g4AwNy9CwAAAAAAAEAk4u7uzty9CwAAAAAAAABAJOLu7s7cvQsAAAAAAABAJOLu7u7evQsAAAAAAAAAQCTi7u7u3r0LAAAAAAAAACTi7u7u7u7uDgAAAAAAAAAk4u7u7u7u7g4AAAAAAAAA4O7u7u7u7u7uDgAAAAAAAODu7u7u7u7u7g4AAAAAAAAA4O7u7u7u7o5oBgAAAAAAAODu7u7u7u6OaAYAAAAAAAAA4O7u7u6OaAYAAAAAAAAAAODu7u7ujmgGAAAAAAAAAAAA4O7ujmgGAAAAAAAAAAAAAODu7o5oBgAAAAAAAAAAAAAA4I5oBgAAAAAAAAAAAAAAAOCOaAYAAAAAAAAAAAAAAAAAYAYAAAAAAAAAAAAAAAAAAGAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hammer\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDQwMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDA1MDA1MDAwMDAwNTBlZWVlZWVlZWVlZWUwNWUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUwMDAwNTAwMDAwMDAwMDUwMDUwMDAwMDUwMDAwMDAwNTA1MDAwMDUwMDAwMDAwNTA1MDAwMDA1MDA1MDA1MDA1MDUwMDAwMDAwMDAwMDAwMDAwZWVlZWVlZWVlZWVlMDBlMGVlZWVlZWVlZWVlZTBlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZWVlZWZlZWVlZWVlZWVmZTMzMzNlZmVlZWVlZWVlZWUzZmYzZWVlZWVlZWVlZWZlZWVlZWVmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZWVlZWVlZmVlMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDUwMDAwMDAwMDAwNTAwMDAwMDA1MDAwMDAwNTAwMDAwMDAwNTAwMDA1MDUwMDAwMDUwMDAwMDAwMDUwMDA1MDA1MDAwMDAwMDUwNTAwMDAwMDAwMDAwMDA1NTAwMDAwMDAwMDAwMDAwMDAwMGVlZWVlZWVlZWVlZTAwZTBlZWVlZWVlZWVlZWUwZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVmZWVlZWVlZWVlZmUzMzMzZWZlZWVlZWVlZWVlM2ZmM2VlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlZWVlZWVlZWVlZWUwMGUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU=\",\n        \"displayName\": \"moleAnimation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MzIwMDIwMDAyMDAwMDcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVjMGNjY2NjY2NjY2NjY2NjY2NjY2VjZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWViMGJiYmJiYmJiYmJiYmJiYmJiYmViZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlYzBjY2NjY2NjY2NjY2NjY2NjY2NlY2VlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlYjBiYmJiYmJiYmJiYmJiYmJiYmJlYmVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWMwY2NjY2NjY2NjY2NjY2NjY2NjZWNlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWIwYmJiYmJiYmJiYmJiYmJiYmJiZWJlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2VkZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmRlYmVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDBlMDhlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"displayName\": \"hammerAnimation\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Qv@;p79@e|(fGBFKaJ@[\":\n            case \"mole\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`;\n            case \"/LJ4HDC9/+6j@JGvC7#:\":\n            case \"grid\":return img`\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n77777777777777777777fffffffffffffffff777777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"Oag!`vsg+~Y,+WT2meT;\":\n            case \"hammer\":return img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"moleAnimation\":\n            case \"anim1\":return [img`\n. . . . . . . 5 . . . . . . . . \n. . . . . . . 5 5 . . . . . . . \n. 5 e e e e e e e e e e e e 5 . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`, img`\n. . . . . 5 . . . . . . . . . 5 \n5 . . . . . 5 . . . . . . . 5 . \n5 . . . . . . 5 . . . . . . . 5 \n. 5 . . . . . 5 5 . . . . 5 5 . \n5 . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \n`, img`\n. . . . . . 5 . . . . . . . . . \n. . . . . . . 5 . . . . . . . . \n5 . . . . . . . 5 . . . . . . . \n. 5 . . . . . . 5 . . . . . . 5 \n. 5 . . . . . 5 . . . . . . 5 . \n. . 5 . . . . 5 . . . . . . . 5 \n. 5 . . . . . . . . . . . . 5 5 \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`];\n            case \"hammerAnimation\":\n            case \"anim2\":return [img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\".{RX=%Dh$6newpr[9[I^\">myHammer</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"run_image_animation\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\".{RX=%Dh$6newpr[9[I^\">myHammer</field></block></value><value name=\"frames\"><block type=\"animation_editor\"><field name=\"frames\">[img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`]</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":null}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\"><field name=\"on\">false</field></shadow></value></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Whackem2 - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"custom.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n"
}
```