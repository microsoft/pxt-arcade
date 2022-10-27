# Target Practice

### @explicitHints true

## Create a Target Game @showdialog

![Make your own Target Practice Game](/static/skillmap/target/target3.gif "This is what we'll be making today.")



## {2. Read Instructions}


**🎡 Watch the Video 🎡**

This video will show you what to do.

Watch the video and follow along!

![Balloon Bursting Carnival Intro](youtube:ttlam7rkh1U)



```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling/
```


```template

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    carnival.startTimer()
})
// game.onGameOverExpanded(winTypes.Multi)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.setScore(0)
    info.player1.setScore(10)
    carnival.onGameOverExpanded(carnival.WinTypes.Timed)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let theTarget: Sprite = null
let throwBall: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
let statusbar = statusbars.create(120, 6, StatusBarKind.Health)
statusbar.setColor(5, 10)
statusbar.setBarBorder(1, 1)
statusbar.setPosition(80, 113)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
carnival.startTimer()
myBall.controlBallWithArrowKeys(true)
myBall.setIter(10)
myBall.setTraceMulti(carnival.Tracers.Cross)
myBall.variablePower(statusbar, 30, 50, 100)
forever(function () {
    theTarget = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
    theTarget.bottom = 56
    theTarget.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})


```

```ghost

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    carnival.startTimer()
})
// game.onGameOverExpanded(winTypes.Multi)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.setScore(0)
    info.player1.setScore(10)
    // game.onGameOverExpanded(winTypes.Timed)
    carnival.customGameOverExpanded("Spooky!", effects.confetti, music.magicWand, scoreTypes.HTime, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let theTarget: Sprite = null
let throwBall: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
let statusbar = statusbars.create(120, 6, StatusBarKind.Health)
statusbar.setColor(5, 10)
statusbar.setBarBorder(1, 1)
statusbar.setPosition(80, 113)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
carnival.startTimer()
myBall.controlBallWithArrowKeys(true)
myBall.setIter(10)
myBall.setTraceMulti(tracers.Cross)
myBall.variablePower(
statusbar,
30,
50,
100
)
forever(function () {
    theTarget = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
    theTarget.bottom = 56
    theTarget.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})



```


```customts


namespace SpriteKind {
    //% isKind
    export const Ball = SpriteKind.create()
    //% isKind
    export const Booth = SpriteKind.create()
    //% isKind
    export const Mouse = SpriteKind.create()
    //% isKind
    export const Crosshair = SpriteKind.create()
    //% isKind
    export const Moon = SpriteKind.create()
}


/**
* An extension full of carnival goodness
*/
//% weight=100 color=#b70082 icon="\uf3ff"
//% groups='["Ball", "Timer", "Countdown", "Game", "Scene"]'
namespace carnival {


    let textSprite: TextSprite = null
    //let fanfare: effects.BackgroundEffect = undefined; // <-- I don't think this is needed anymore
    //let winStyle="WinTypes.Score"  // <-- Pretty sure this isn't needed anymore

    // Get array of player info
    // let players: info.PlayerInfo[]; // <-- I don't think I use this



    export enum WinTypes {
        //% block="win game"
        Win,
        //% block="lose game"
        Lose,
        //% block="best score"
        Score,
        //% block="best time"
        Timed,
        //% block="multiplayer"
        Multi,
        //% block="custom" blockHidden
        Custom
    }

    export enum ScoreTypes {
        //% block="high score"
        HScore,
        //% block="low score"
        LScore,
        //% block="high time"
        HTime,
        //% block="low time"
        LTime,
        //% block="none"
        None
    }


    export enum Areas {
        //% block="top"
        Top,
        //% block="middle"
        Mid,
        //% block="bottom"
        Bottom
    }

    export enum Tracers {
        //% block="full"
        Full,
        //% block="partial"
        Part,
        //% block="pointer"
        Pointer,
        //% block="crosshair"
        Cross,
        //% block="off"
        Off
    }





    /**
    * Adds text to the top, middle, or bottom
    * of screen as defined by games
    */
    //% group="Scene"
    //% blockId=add_label_to
    //% block="add label $myLabel to $myPosition of window || $myColor"
    //% myLabel.defl="Whack-the-Mole"
    //% myColor.shadow="colorindexpicker"
    //% myColor.defl=4
    //% myPosition.defl=Areas.Bottom
    //% inlineInputMode=inline
    //% help=github:carnival/docs/add_label_to
    export function addLabelTo(myLabel: string, myPosition: Areas, myColor?: number) {
        if (myColor == undefined)
            myColor = 4;

        textSprite = textsprite.create(myLabel, 0, myColor)
        if (myPosition == Areas.Bottom) textSprite.setPosition(80, 110);
        if (myPosition == Areas.Mid) textSprite.setPosition(80, 50);
        if (myPosition == Areas.Top) textSprite.setPosition(80, 20);
    }



    // Formerly of the Info Category -----

    let countdownInitialized = false;
    let countUpInitialized = false;

    class TimerState {
        public playerStates: info.PlayerState[];
        public visibilityFlag: number;

        //public timerElapsed: number;
        public bgColor: number;
        public borderColor: number;
        public fontColor: number;

        constructor() {
            this.visibilityFlag = info.Visibility.Hud;
            this.bgColor = screen.isMono ? 0 : 1;
            this.borderColor = screen.isMono ? 1 : 3;
            this.fontColor = screen.isMono ? 1 : 3;
        }
    }

    let timerState: TimerState = undefined;

    let timerStateStack: {
        state: TimerState,
        scene: scene.Scene
    }[];


    /**
     * Adds timer to game
     */
    //% color="#b70082"
    //% group="Timer"
    //% blockId=start_count_up_game
    //% block="start timer"
    //% inlineInputMode=inline
    //% help=github:carnival/docs/start_count_up_game
    export function startTimer() {
        control.timer1.reset();
        updateFlag(info.Visibility.Countdown, true);
        timerHUD();

    }

    /**
     * Set whether timer should be displayed
     * @param on if true, countdown is shown; otherwise, countdown is hidden
     */
    //% color="#b70082"
    //% group="Timer"
    //% blockId=show_timer
    //% block="show timer $on"
    //% inlineInputMode=inline
    //% on.shadow=toggleOnOff
    //% on.defl=true
    //% help=github:carnival/docs/show_timer
    export function showTimer(on: boolean) {
        updateFlag(info.Visibility.Countdown, on);
    }

    /**
     * Return the current value of the count-up timer
     */
    //% color="#b70082"
    //% group="Timer"
    //% blockId=get_timer
    //% block="timer value"
    //% inlineInputMode=inline
    //% help=github:carnival/docs/get_timer
    export function getTimerValue(): number {
        return control.timer1.millis();
    }


    function updateFlag(flag: info.Visibility, on: boolean) {
        timerHUD();
        if (on) timerState.visibilityFlag |= flag;
        else timerState.visibilityFlag = ~(~timerState.visibilityFlag | flag);
    }

    function drawTimer(millis: number) {
        if (millis < 0) millis = 0;
        millis |= 0;

        const font = image.font8;
        const smallFont = image.font5;
        const seconds = Math.idiv(millis, 1000);
        const width = font.charWidth * 5 - 2;
        let left = (screen.width >> 1) - (width >> 1) + 1;
        let color1 = timerState.fontColor;
        let color2 = timerState.bgColor;

        screen.fillRect(left - 3, 0, width + 6, font.charHeight + 3, timerState.borderColor)
        screen.fillRect(left - 2, 0, width + 4, font.charHeight + 2, color2)

        if (seconds < 60) {
            const top = 1;
            const remainder = Math.idiv(millis % 1000, 10);

            screen.print(formatDecimal(seconds) + ".", left, top, color1, font)
            const decimalLeft = left + 3 * font.charWidth;
            screen.print(formatDecimal(remainder), decimalLeft, top + 2, color1, smallFont)
        }
        else {
            const minutes = Math.idiv(seconds, 60);
            const remainder = seconds % 60;
            screen.print(formatDecimal(minutes) + ":" + formatDecimal(remainder), left, 1, color1, font);
        }
    }

    function formatDecimal(val: number) {
        val |= 0;
        if (val < 10) {
            return "0" + val;
        }
        return val.toString();
    }

    function timerHUD() {
        if (timerState) return;

        timerState = new TimerState();

        scene.createRenderable(
            scene.HUD_Z,
            () => {

                // show timer
                if (timerState.visibilityFlag & info.Visibility.Countdown) {
                    const scene = game.currentScene();
                    //const elapsed = scene.millis();
                    const elapsed = control.timer1.millis();
                    drawTimer(elapsed);
                    let t = elapsed / 1000;
                    if (t <= 0) {
                        t = 0;

                    }
                }
            }
        );
    }



    /**
     * Adds game end style to countdown
     */
    //% color="#b70082"
    //% group="Countdown"
    //% blockId=start_countdown_game
    //% block="start countdown $myTime (s) and game over $winType || effect $winEffect"
    //% myTime.defl=15
    //% winType.defl=WinTypes.Score
    //% winEffect.defl=effects.confetti
    //% inlineInputMode=inline
    //% help=github:carnival/docs/start_countdown_game
    export function startCountdownGame(myTime: number, winType: WinTypes, winEffect?: effects.BackgroundEffect) {
        if (!winType)
            winType = WinTypes.Win;
        if (!winEffect && winType != WinTypes.Lose) {
            winEffect = effects.confetti;
        }
        else { winEffect = effects.melt; }

        init(winType, winEffect);
        info.startCountdown(myTime);

    }

    function saveLowScore(newLow: number) {
        const curr = settings.readNumber("low-score")
        if (curr == undefined || newLow < curr) {
            settings.writeNumber("low-score", newLow);
        }
    }



    function newGameOver(winStyle: WinTypes, fanfare: effects.BackgroundEffect, winSound?: music.Melody, scoreType?: ScoreTypes, message?: string, customScore?: number) {

        // Prep default variables for different win types
        let winnerNumber = [1];  // Which players have the high scores?
        let thisBest = info.score(); // Who has the best score this round?
        let newBest = false; // Is thisBest the newBest for all games?
        let bestScore = info.highScore(); // What is the bestScore of all time?

        // Save number of seconds passed during game
        const thisScene = game.currentScene();
        //let timeElapsed = roundOff(thisScene.millis() / 1000, 2); //Can't get points to match timer perfectly
        let timeElapsed = Math.floor(thisScene.millis() / 1000);

        if (control.timer1.millis() >= 0) {
            timeElapsed = Math.floor(control.timer1.millis() / 1000);
            // timeElapsed = roundOff(control.timer1.millis() / 1000, 2);  //Can't get points to match timer perfectly

        }

        /*
        // Save all scores as relevant to the game.
            info.saveAllScores(); // This is throwing an error for some reason
        */


        // Initialize thisBest if customScore wasn't included
        if (customScore === undefined) {
            thisBest = info.player1.getState().score;
        }

        // Initialize the messaging / fanfare based on winStyle
        if (winStyle == WinTypes.Custom) {
            if (!scoreType) { scoreType = ScoreTypes.HScore; }
            if (!message) { message = "Game Over!"; }
            if (!fanfare) { fanfare = effects.confetti; }


        } else if (winStyle == WinTypes.Win) {
            scoreType = ScoreTypes.HScore;
            message = "You Win!";
            if (!fanfare) { fanfare = effects.confetti; }

        } else if (winStyle == WinTypes.Score) {
            scoreType = ScoreTypes.HScore;
            message = "Great Score!";
            if (!fanfare) { fanfare = effects.confetti; }

        } else if (winStyle == WinTypes.Timed) {
            scoreType = ScoreTypes.LTime;
            message = "Great Time!";
            if (!fanfare) { fanfare = effects.confetti; }

        } else if (winStyle == WinTypes.Multi) {
            scoreType = ScoreTypes.HScore;
            if (!fanfare) { fanfare = effects.confetti; }

            // Find winner of multiplayer
            const scoreInfo1 = info.player1.getState();
            const scoreInfo2 = info.player2.getState();
            const scoreInfo3 = info.player3.getState();
            const scoreInfo4 = info.player4.getState();
            const allScores = [scoreInfo1.score, scoreInfo2.score, scoreInfo3.score, scoreInfo4.score];


            // Find player with highest score in Multi
            thisBest = -Infinity; // Make sure there's no false tie
            for (let i = 0; i < 4; i++) {
                if (allScores[i] != undefined && allScores[i] > thisBest) {
                    thisBest = allScores[i];
                    winnerNumber = [i + 1];
                } else if (allScores[i] != undefined && allScores[i] == thisBest) {
                    winnerNumber.push(i + 1);
                }
            }

            // Construct string for one winner
            if (!message && winnerNumber.length <= 1) {
                message = "Player " + winnerNumber[0] + " Wins!";
            } else {
                //Construct string for ties
                message = "Players ";

                for (let i = 0; i < winnerNumber.length - 1; i++) {
                    message += winnerNumber[i] + " & ";
                }

                // remove the last ampersand and the trailing space
                message += winnerNumber[(winnerNumber.length) - 1] + " Tied!";
            }

        } else {
            if (!scoreType) { scoreType = ScoreTypes.None; }
            if (!message) { message = "Game Over!"; }
            if (!fanfare) { fanfare = effects.melt; }
        }

        // Overwrite current game score if something was passed in
        if (customScore != undefined) {
            thisBest = customScore;
        }

        // Set bestScore and newBest based on score and scoreType
        if (scoreType == ScoreTypes.HScore) {
            if (thisBest > bestScore) {
                newBest = true;
                bestScore = thisBest;
                info.setScore(thisBest);
                info.saveHighScore();
            }

        } else if (scoreType == ScoreTypes.LScore) {
            bestScore = settings.readNumber("low-score");
            if (bestScore == undefined) { bestScore = Infinity; }
            if (thisBest < bestScore) {
                newBest = true;
                bestScore = thisBest;
                info.setScore(thisBest);
                saveLowScore(thisBest);
            }

        } else if (scoreType == ScoreTypes.HTime) {

            // Set thisBest to timeElapsed if no customScore
            if (!customScore) {
                thisBest = timeElapsed;
            }

            if (thisBest > bestScore) {
                newBest = true;
                bestScore = thisBest;
                info.setScore(thisBest);
                info.saveHighScore();
            }

        } else if (scoreType == ScoreTypes.LTime) {
            bestScore = settings.readNumber("low-score");
            if (bestScore == undefined) { bestScore = Infinity; }

            // Set thisBest to timeElapsed if no customScore
            if (!customScore) {
                thisBest = timeElapsed;
            }

            if (thisBest < bestScore) {
                newBest = true;
                bestScore = thisBest;
                info.setScore(thisBest);
                saveLowScore(thisBest);
            }

        } else {

            // Score judging type must be "None"
            thisBest = undefined;
            bestScore = undefined;
            newBest = false;
        }

        // Make sure there's a sound to playe
        if (!winSound) { winSound = music.powerUp; }

        // releasing memory and clear fibers. Do not add anything that releases the fiber until background is set below,
        // or screen will be cleared on the new frame and will not appear as background in the game over screen.
        game.popScene();
        game.pushScene();
        scene.setBackgroundImage(screen.clone());

        winSound.play();

        fanfare.startScreenEffect();

        pause(400);

        const overDialog = new GameOverDialog(true, message, thisBest, bestScore, newBest);
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

    function roundOff(thisNum: number, toPlace: number): number {
        const x = Math.pow(10, toPlace);
        return Math.round(thisNum * x) / x;
    }

    function init(winStyle: WinTypes, fanfare: effects.BackgroundEffect) {
        if (countdownInitialized) return;
        countdownInitialized = true;

        info.onCountdownEnd(function () {

            //Handling manually to include number of seconds passed
            /*
            if (winStyle == WinTypes.Win) {
                game.over(true, fanfare)
            } else */ if (winStyle == WinTypes.Lose) {
                game.over(false, fanfare)
            } else {
                newGameOver(winStyle, fanfare);
            }
        })
    }

    export class GameOverDialog extends game.BaseDialog {
        protected cursorOn: boolean;
        protected isNewbestScore: boolean;

        constructor(
            protected win: boolean,
            protected messageText: string,
            protected score?: number,
            protected best?: number,
            protected newBest?: boolean
        ) {
            super(screen.width, 46, img`
        1 1 1
        f f f
        1 1 1
        `);
            this.cursorOn = false;

            /* Since best time is lower, need to do this elsewhere
            this.isNewbestScore = this.score > this.bestScore;
            */
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

            this.image.printCenter(
                this.messageText,
                titleHeight,
                screen.isMono ? 1 : 5,
                image.font8
            );


            if (this.score != undefined) {
                const scoreHeight = 23;
                const bestScoreHeight = 34;
                const scoreColor = screen.isMono ? 1 : 2;

                this.image.printCenter(
                    "Score:" + this.score,
                    scoreHeight,
                    scoreColor,
                    image.font8
                );

                if (this.newBest == true) {
                    this.image.printCenter(
                        "New Best Score!",
                        bestScoreHeight,
                        scoreColor,
                        image.font5
                    );
                } else {
                    this.image.printCenter(
                        "Best:" + this.best,
                        bestScoreHeight,
                        scoreColor,
                        image.font8
                    );
                }
            }
        }
    }

    // End Info

    // Formerly namespace Game


    /**
     * Adds additional end game styles
     */
    //% color="#b70082"
    //% group="Game"
    //% blockId=on_game_over_expanded
    //% block="game over $winStyle || with effect $winEffect"
    //% winType.defl=WinTypes.Win
    //% winEffect.defl=effects.confetti
    //% inlineInputMode=inline
    //% help=github:carnival/docs/on_game_over_expanded
    export function onGameOverExpanded(winStyle: WinTypes, winEffect?: effects.BackgroundEffect) {

        if (winEffect == undefined) {
            if (winStyle == WinTypes.Lose) { winEffect = effects.melt; }
            else { winEffect = effects.confetti; }
        }

        if (winStyle == WinTypes.Lose) {
            game.over(false, winEffect)
        } else {
            newGameOver(winStyle, winEffect);
        }
    }

    /**
     * Adds custom end game styles
     */
    //% color="#b70082"
    //% group="Game"
    //% blockId=on_game_over_custom_expanded
    //% block="game over $message || with $winEffect and $gameSound judged as $scoring using score $score"
    //% message.defl="Great Job!"
    //% scoring.defl=ScoreTypes.None
    //% winEffect.defl=effects.confetti
    //% gameSound.defl=music.powerUp
    //% inlineInputMode=inline
    //% help=github:carnival/docs/on_game_over_custom_expanded
    export function customGameOverExpanded(message: string, winEffect?: effects.BackgroundEffect, gameSound?: music.Melody, scoring?: ScoreTypes, score?: number) {
        if (!winEffect) { winEffect = effects.confetti; }
        if (!scoring) { scoring = ScoreTypes.HScore; }
        if (score == undefined) { info.score(); }
        if (!gameSound) { gameSound = music.powerUp; }
        game.setGameOverSound(true, gameSound);
        newGameOver(WinTypes.Custom, winEffect, gameSound, scoring, message, score);
    }


    // Formerly namespace Ball



    /**
     * Creates a new throwable from an image and kind
     * @param img the image for the sprite
     * @param kind the kind to make the throwable
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 110
     */
    //% blockId=throw_create block="ball $img of kind $kind || at x $x y $y"
    //% weight=100
    //% color="#b70082"
    //% group="Ball"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=myBall
    //% img.shadow="screen_image_picker"
    //% kind.shadow=spritekind
    //% help=github:carnival/docs/throw_create
    export function create(img: Image,
        kind: number,
        x: number = 10,
        y: number = 110): Ball {
        return new Ball(img, kind, x, y);
    }



    /**
   * Create a new ball with a given speed that starts from the location of another sprite.
   * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
   */
    //% group="Ball"
    //% color="#b70082"
    //% weight=99
    //% blockId=spritescreateprojectileballfromparent block="ball projectile $img based on $parentBall || of kind $kind"
    //& kind.defl=1
    //% blockSetVariable=myBall
    //% parentBall.shadow=variables_get
    //% parentBall.defl=myBall
    //% img.shadow=screen_image_picker
    //% kind.shadow=spritekind
    //% inlineInputMode=inline
    //% help=github:carnival/docs/create_projectile_ball
    export function createProjectileBallFromSprite(img: Image, parentBall: Ball, kind?: number): Ball {
        let vx = xComponent(parentBall.angle, parentBall.pow);
        let vy = carnival.yComponent(parentBall.angle, parentBall.pow);
        let ay = parentBall.gravity;
        let ax = parentBall.wind;
        let p = parentBall.pow;
        if (!kind) { kind = SpriteKind.Projectile; }
        return createProjectileBall(img, vx, vy, ax, ay, p, kind, parentBall);
    }

    /**
     * Create a new sprite with given speed, and place it at the edge of the screen so it moves towards the middle.
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    //% group="Ball"
    //% color="#b70082"
    //% blockId=spritescreateprojectileball block="ball $img vx $vx vy $vy of kind $kind ||based on $parentBall"
    //% blockSetVariable=myBall
    //% img.shadow=screen_image_picker
    //% kind.shadow=spritekind
    //% parentBall.shadow=variables_get
    //% parentBall.defl=myBall
    //% inlineInputMode=inline
    //% expandableArgumentMode=toggle
    //% help=github:carnival/docs/spritescreateprojectileball
    function createProjectileBall(img: Image, vx: number, vy: number, ax: number, ay: number, power: number, kind?: number, parentBall?: Ball) {
        const s = carnival.create(img, kind || SpriteKind.Projectile);
        const sc = game.currentScene();

        if (parentBall) {
            s.setPosition(parentBall.x, parentBall.y);
            s.vx = xComponent(parentBall.angle, parentBall.pow);
            s.vy = carnival.yComponent(parentBall.angle, parentBall.pow);
            s.ay = parentBall.gravity;
            s.ax = parentBall.wind;
            s.pow = parentBall.pow;
        } else {
            // put it at the edge of the screen so that it moves towards the middle
            // If the scene has a tile map, place the sprite fully on the screen
            const xOff = sc.tileMap ? -(s.width >> 1) : (s.width >> 1) - 1;
            const yOff = sc.tileMap ? -(s.height >> 1) : (s.height >> 1) - 1;
            const cam = game.currentScene().camera;

            let initialX = cam.offsetX;
            let initialY = cam.offsetY;

            if (vx < 0) {
                initialX += screen.width + xOff;
            } else if (vx > 0) {
                initialX += -xOff;
            }

            if (vy < 0) {
                initialY += screen.height + yOff;
            } else if (vy > 0) {
                initialY += -yOff;
            }

            s.setPosition(initialX, initialY);
        }

        s.moon.destroy();
        s.flags |= sprites.Flag.AutoDestroy | sprites.Flag.DestroyOnWall;

        return s;
    }



    /**
     * Convert degrees to radians
     * @param degree to convert
     * @return converted value in radians
     */
    function degreeToRadian(degree: number): number {
        return degree * Math.PI / 180;
    }

    /**
     * Evaluate the x component of a given vector
     * @param degree angle of vector
     * @param magnitude magnitude of vector
     * @return x component of vector
     */
    //% color="#b70082"
    export function xComponent(degree: number, magnitude: number): number {
        return magnitude * Math.cos(degreeToRadian(degree));
    }

    /**
     * Evaluate the y component of a given vector
     * @param degree angle of vector
     * @param magnitude magnitude of vector
     * @return y component of vector
     */
    //% color="#b70082"
    export function yComponent(degree: number, magnitude: number): number {
        return -magnitude * Math.sin(degreeToRadian(degree));
    }
}

/**
 * A throwable
 **/

//% blockNamespace=carnival color="#b70082" blockGap=8
class Ball extends sprites.ExtendableSprite {
    private renderable: scene.Renderable;

    private controlKeys: boolean;
    private trace: boolean;

    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="angle"
    //% weight=8
    public angle: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="power"
    //% weight=8
    public pow: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="tracing time (seconds)"
    //% weight=8
    public iter: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="trace color"
    //% weight=8
    public traceColor: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="gravity"
    //% weight=8
    public gravity: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="wind"
    //% weight=8
    public wind: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="angle adjust rate"
    //% weight=8
    public angleRate: number;
    //% group="Ball" blockSetVariable="myBall"
    //% blockCombine block="wind"
    //% weight=8
    public powerRate: number;
    //% group="Ball" blockSetVariable="myBall"
    //% weight=8
    public moon: Sprite;


    public constructor(img: Image,
        kind: number,
        x: number,
        y: number) {
        super(img);
        this.setKind(kind);
        this.x = x;
        this.y = y;

        this.gravity = 20;
        this.pow = 50;
        this.angle = 10;
        this.angleRate = 3;
        this.powerRate = 3;
        this.iter = .4;
        this.wind = 0;
        this.moon = sprites.create(assets.image`crosshair`, SpriteKind.Moon);
        this.moon.setFlag(SpriteFlag.Invisible, true);

        this.renderable = scene.createRenderable(-0.5, (target, camera) => {
            let xComp = carnival.xComponent(this.angle, this.pow);
            let yComp = carnival.yComponent(this.angle, this.pow);
            let xOffset = camera.offsetX;
            let yOffset = camera.offsetY;

            for (let i: number = 0.1; i < this.iter; i += i / 5) {
                let x = this.x + i * xComp + (i ** 2) * this.wind / 2;
                let y = this.y + i * yComp + (i ** 2) * this.gravity / 2;
                target.setPixel(
                    x - xOffset,
                    y - yOffset,
                    this.traceColor
                );
            }
        }, () => !this.ay && this.trace);

        this.controlKeys = false;
        this.trace = false;
        this.traceColor = 1;
    }

    /**
     * Gets the throwables's sprite
     */
    get sprite(): Sprite {
        return this;
    }

    /**
     * Set how to show the trace for the estimated path
     * @param on whether to turn on or off this feature, eg: true
     */
    //% blockId=setTraceMulti block="trace $this path estimate $traceWay"
    //% weight=80
    //% color="#b70082"
    //% group="Ball"
    //% traceWay.defl="carnival.Tracers.Full"
    //% this.defl=myBall
    //% help=github:carnival/docs/set_trace_multi
    public setTraceMulti(traceWay: carnival.Tracers): void {

        if (traceWay == carnival.Tracers.Full) {
            this.moon.setFlag(SpriteFlag.Invisible, true);
            this.iter = 3;
            this.trace = true;
        } else if (traceWay == carnival.Tracers.Part) {
            this.moon.setFlag(SpriteFlag.Invisible, true);
            this.iter = .3;
            this.trace = true;
        } else if (traceWay == carnival.Tracers.Pointer) {
            this.moon.setFlag(SpriteFlag.Invisible, true);
            this.iter = .2;
            this.trace = true;
        } else if (traceWay == carnival.Tracers.Cross) {
            this.trace = false;
            this.moon.setFlag(SpriteFlag.Invisible, false);
        } else {
            this.trace = false;
            this.moon.setFlag(SpriteFlag.Invisible, false);
        }
    }


    /**
     * Set the crosshairs to distance away from center of
     * ball in direction ball will travel
     */

    public updateCrosshair(dist?: number) {
        if (dist == undefined) { dist = 3; }
        spriteutils.placeAngleFrom(
            this.moon,
            this.angle * Math.PI / -180,
            Math.max(this.width + dist, this.height + dist),
            this
        )
    }

    /**
     * Set the trace length for the estimated path in percent
     */
    //% weight=50
    //% color="#b70082"
    //% group="Ball""
    //% blockId=set_trace_iter block="set $this trace length to $len \\%"
    //% len.defl=50
    //% this.defl=myBall
    //% help=github:carnival/docs/set_trace_iter
    public setIter(len: number): void {
        // Make 100 percent distance = 3
        this.iter = 3 * (len / 100);
    }

    /**
     * Throw the throwable with the current settings
     */
    //% weight=70
    //% color="#b70082"
    //% group="Ball"
    //% blockId=throw_it block="toss $this"
    //% this.defl=myBall
    //% help=github:carnival/docs/throw_it
    public throwIt(): void {
        this.vx = carnival.xComponent(this.angle, this.pow);
        this.vy = carnival.yComponent(this.angle, this.pow);
        this.ay = this.gravity;
        this.ax = this.wind;
    }

    /**
     * Stop the throwable at the current location
     */
    //% color="#b70082"
    //% weight=70
    //% group="Ball"
    //% blockId=stop_it block="stop $this"
    //% this.defl=myBall
    //% help=github:carnival/docs/stop_it
    public stopIt(): void {
        this.ay = 0;
        this.ax = 0;
        this.vx = 0;
        this.vy = 0;
    }

    /**
     * Set whether to control the throwable with the arrow keys; left and right
     * to adjust the angle, and up and down to increase / decrease power
     * @param on whether to turn on or off this feature, eg: true
     */
    //% color="#b70082"
    //% weight=80
    //% group="Ball"
    //% blockId=control_ball_keys block="control $this with arrow keys || $on"
    //% this.defl=myBall
    //% on.shadow=toggleOnOff
    //% inlineInputMode=inline
    //% help=github:carnival/docs/control_ball_keys
    public controlBallWithArrowKeys(on: boolean = true): void {
        this.controlKeys = on;

        game.onUpdate(() => {
            if (this.controlKeys) {
                this.angle -= controller.dx() * this.angleRate / 2;
                this.pow -= controller.dy() * this.powerRate / 2;
            }
        })
    }

    /**
  * Changes power from min to max with sin-like cycle
  */
    //% blockId=variable_power block="vary $this power using $status from $minNum \\% to $maxNum \\% || speed $thisSpeed"
    //% weight=2
    //% color="#b70082"
    //% group="Ball"
    //% status.shadow=variables_get
    //% status.defl=statusbar
    //% minNum.defl=30
    //% maxNum.defl=60
    //% this.defl=myBall
    //% inlineInputMode=inline
    //% help=github:carnival/docs/variable_power
    public variablePower(status: StatusBarSprite, minNum: number, maxNum: number, thisSpeed?: number): void {
        if (thisSpeed == undefined) { thisSpeed = 100; }
        if (minNum < 0) { minNum = 0; }
        if (maxNum > 100) { maxNum = 100; }
        game.onUpdate(() => {
            status.value = minNum + Math.abs(Math.sin(game.runtime() / (90000 * (1 / thisSpeed))) * (maxNum - minNum))
            this.pow = status.value;
            this.updateCrosshair();
        })
    }

}


```



```assetjson

{
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwSgAHgAAAAiIiIiIiIiIiIiIiIiIiIiEYGIiIgYEREREREiIiIiERERERGBiIiIGBERERERISIiIhEREREREYGIiIgiIiIiIiIiIiIiIiIiIiIiERGIiIiIEREREREhIiIiEhERERERiIiIGBERERERESIiIhIRERERERGIiIgiIiIiIiIiIiIiIiIiIiIiERGBiIiIERERERERIiIiIhERERERgYiIiBERERERESIiIhIRERERERGIiIgiIiIiIiIiIiIiIiIiIiIiERERiIiIiBERERERISIiIhIREREREYiIiBgRERERESEiIiIRERERERERiIgiIiIiIiIiIiIiIiIiIiIiERERgYiIiBERERERESIiIiIREREREYiIiBgREREREREiIiISERERERERiIgiIiIiIiIiIiIiIiIiIiIiEREREYiIiBgRERERESEiIiISEREREYGIiIgREREREREhIiISERERERERgYgiIiIiIiIiIiIiIiIiIiIiEREREYGIiIgREREREREiIiISERERERGIiIgYEREREREhIiIiEREREREREYgiIiIiIiIiIiIiIiIiIiIiEREREYGIiIgYEREREREhIiIiEhERERGBiIgYERERERERIiIiEhEREREREYgiIiIiIiIiIiIiIiIiIiIiERERERGIiIiIEREREREhIiIiEhERERGBiIiIERERERERISIiEhEREREREYEiIiIiIiIiIiIiIiIiIiIiERERERGBiIiIERERERERISIiIhERERERiIiIERERERERISIiIhEREREREREiIiIiIiIiIiIiIiIiIiIiERERERERiIiIiBERERERISIiIhIRERERgYiIGBERERERESIiIhEREREREREiIiIiIiIiIiIiIiIiIiIiERERERERgYiIiBERERERESIiIiIRERERgYiIiBERERERESIiIhIREREREREiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiEYGIiIgYEREREREiIiIiERERERGBiIiIGBERERERISIiIhEREREREYGIiIgiIiIiIiIiIiIiIiIiIiIiERGIiIiIEREREREhIiIiEhERERERiIiIGBERERERESIiIhIRERERERGIiIgiIiIiIiIiIiIiIiIiIiIiERGBiIiIERERERERIiIiIhERERERgYiIiBERERERESIiIhIRERERERGIiIgiIiIiIiIiIiIiIiIiIiIiERERiIiIiBERERERISIiIhIREREREYiIiBgRERERESEiIiIRERERERERiIgiIiIiIiIiIiIiIiIiIiIiERERgYiIiBERERERESIiIiIREREREYiIiBgREREREREiIiISERERERERiIgiIiIiIiIiIiIiIiIiIiIiEREREYiIiBgRERERESEiIiISEREREYGIiIgREREREREhIiISERERERERgYgiIiIiIiIiIiIiIiIiIiIiEREREYGIiIgREREREREiIiISERERERGIiIgYEREREREhIiIiEREREREREYgiIiIiIiIiIiIiIiIiIiIiEREREYGIiIgYEREREREhIiIiEhERERGBiIgYERERERERIiIiEhEREREREYgiIiIiIiIiIiIiIiIiIiIiERERERGIiIiIEREREREhIiIiEhERERGBiIiIERERERERISIiEhEREREREYEiIiIiIiIiIiIiIiIiIiIiERERERGBiIiIERERERERISIiIhERERERiIiIERERERERISIiIhEREREREREiIiIiIiIiIiIiIiIiIiIiERERERERiIiIiBERERERISIiIhIRERERgYiIGBERERERESIiIhERERERERE=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth2\"\n    },\n    \"image7\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu7u7u7u7CwCw3d3d3d29ALDd3dLd3b0AsN0tLd3dvQCw3dLd0t29ALDdLS3d3b0AsN3d0t3dvQCw3d3d3d29ALu7u7u7uwsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"can\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhIREREREREREREREREREREREREREREREREREREhIhEREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIRAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiIiIiIiIiIiIiIiIiIiIiIhIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIiIiIiEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIhEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiIiIiIiIiIiIiIhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIhIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIhIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiIiIiEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIhEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiEQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIhEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiIiIiEhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiIiIiIhIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiISEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiIiIiIiIiEhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIhIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiIiIiIiIiIiIiIhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiIiIiIiIiIiIiIiIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIiEQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiIiIiIiIiIiIiIiIiIhEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiIiIiIiIiIiIiIiIiIiIiIiISAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhEREREiIiIiIiIiIiIiIiIiIiIiIiIiEhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiIiIiIiIiIiIiIiIiIiIiIiIiIhIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiISEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIhIREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiISEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhEREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiEhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIhIREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhIREREREREREREREREREREREREREREREREREREiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth\"\n    },\n    \"image9\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7u7u7u7u3d3d3d3d3d3d3WZmZmZmZmaGiN3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u3t3d3d3d3d3dZnZ3ZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u3t3d3d3d3d1tdmdmZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u3t3d3d3d3d12Z2ZmZmZmhoiIiN3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u3t3d3d3d3d1mZmZmZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u3t3d3d3d3d1mZmZmZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7d3d3d3d3d1mZmZmZmZmZmaIiN3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7d3d3d3d3d1mZmZmZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7e7d3d3d3d3d1mZmZmZmZmZmZmht3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7e3t3d3d3d3d1mZmZmZmZmZmZmZt3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7t7t3t3d3d3d3d1tZmZmZmaIiIiIiN3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7u7u7t7t3t3d3d3d3d3dZmZmZmZmZmZmZt3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7uxMzMzNzt3t3d3d3d3d3d3WZmZmZmZmZmZt3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+5OtLu7u9vt3t3d3d3d3d3d3d3d3W1mht3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+5ExLy7u9vt3t3d3d3d3d3d3d3d3WZmht3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u05EtLu7u9vu3d3d3d3d3d3d3d3dbWZm1t3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u0RExMvMzNzu3d3d3d3d3d3d3W1mZmZn3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5S0REtMtERNTu3d3d3d3d3d3d3W13Z3bX3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5RERExMtERNTu3d3d3d3d3d3d3W1mZmbd3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5REREtMtETNTu3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5RERExMvMzNzu3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRGRmZmZmZmZmZmZmZmZmZm5REREtLu7u9vu7d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRGRmZmZmZmZmZmZmZmZmZm5RERExMy7u9vu7d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRERmZmZmZmZmZmZmZmZmZm5REREtLu7u9vt7d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZGRERmZmZmZmZmZmZmZmZmZm5RERExLy7u9vt7d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkZERERmZmZmZmZmZmZmZmZmZm5S0REtLu7u9vt7d7d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkZERERmZmZmZmZmZmZmZmZmZm5u0RExMvMzNvd7d7d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkRERERkZmZmZmZmZmZmZmZmZm5u05EtMvJydvd7d7d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkRERERkZmZmZmZmZmZmZmZmZm5u+5ExMvMzNvd7d7d3d3d3d3t3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmRkRERHRkZmZmZmZmZmZmZmZmZm5u+5OtMvJydvd3d7d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmRkRERHRkZmZmZmZmZmZmZmZmZm5u+7uxMvMzNvd3d7d3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkRERHRkZmZmZmZmZmZmZmZmZm5u+7kvru7u9vd3d7t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkRERHRkZmZmZmZmZmZmZmZmZm5u+5E7sy7u9vd3d3t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkRERHRkZmZmZmZmZmZmZmZmZm5u+5E5Lu7u9vd3d3t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZkZERHRkZmZmZmZmZmZmZmZmZm5u+5ERMy8u9vd3d3t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZGRHRkZmZmZmZmZmZmZmZmZm5u+5ERLu7u9vd3d3t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZm5zMxERMzMu9vd3d3t3d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRERmZmZmZmZmZmZmZmZmZm5zMxERLu7u9vd3d3d7d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRGRmZmZmZmZmZmZmZmZmZm5u+5ERLu7u9zd3d3d7d3d3e3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmRGRmZmZmZmZmZmZmZmZmZm5u+5ORMzMzN3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7uRO7u3d3d3d3d7d3d7d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zuTu7u3d3d3d3d7e3d7d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3d3d3d3d3e3e7d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3d3d3d3d3e3e7t3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3d3d3d3d3e3d3t3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzOzu3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7O7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmRmRmZmZmZmZmZm5u+7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmRGRmZmZmZmZmZm5u8zMzMzs7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZGdERmZmZmZmZmZm5u+7u7u7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZGdERmZmZmZmZmZm5u+7u7u7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZEREdmZmZmZmZmZm5u8zMzMzu7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkREREdmZmZmZmZmZm5u+7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkREREdmZmZmZmZmZm5u+7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkREREdmZmZmZmZmZm5u+7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmRkREREdmZmZmZmZmZm5u8zM7O7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmRkREREdmZmZmZmZmZm5u+7u7u7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmRkREREdmZmZmZmZmZm5u+7u7u7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkREREdmZmZmZmZmZm5u8zs7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkZEdGRmZmZmZmZmZm5u+7u7u7u7u7u7u7u3t3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkZEdGRmZmZmZmZmZm5u8zMzMzu7u7u7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkZEdGRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t3d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkZEdGRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZkZERGRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZERGRmZmZmZmZmZm5u8zM7O7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmRGRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmRmRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmRmRmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzMzs7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u7u7u7u7u3t3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3t3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d2ZmZmZmRmRmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7e3d3d3d3d3d3d3d3d3d3d3d2ZmZmZERGRmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZERERmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZkZERERmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZkRERERmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZkREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmRkREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmREREdEdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmRkREdGRmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmRkREdERmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmRkREREdmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmRkRERHRkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7t7d3d3d3d3d3d3d3d3d3d3d3d2ZmZkRERHRkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d3d3d3d3d3d3d3d3d2ZmZmZERHRkZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7O7u7u7u7u7u7u7d3d3d3d293d3d3d3d3d3d3d2ZmZmZERHRkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7d3d3d3d273d3d3d3d3d3d3d2ZmZmZERHRkZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzOzu7u7u7u7u7u7d3d3d3d3b3d3d3d3d3d3d3d2ZmZmZERERkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7e3d3d3b3d3d3d3d3d3d3d3d2ZmZmZGRERkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7e3d3d3b3d3d3d3d3d3d3d3d2ZmZmZGRERkZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u7u3d3d3b3d3d3d3d3d3d3d3d2ZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7u7u7u7u7u7u7u673d3d3d3b3d3d3d3d3d3d3d2ZmZmZmRkRmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7u67293d3d3b3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7r67293d3d3b3e3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzOzu7u7u7u7u7r67293d3d293e7d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7u7ru7u93d3d297d7dvd3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u7uvru7u9vd3d3d2929293d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7u7uu7u7u9vd3d3d29293d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7u67u7u7u7vd3d3d293b3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7r67u7u7u7vM3d3d293b3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzO7u7u7u7ru7u7u7u8y73d29293b3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uvru7u7vLzLvL3d297e673d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uvru7u8u8u8vM3d3b3d293d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uu7u7y7y7zMzM3Lvd3d273d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7u7u7u7uu7u7vLvMzMzMzNvu3b3b3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uu7u7vMvMzMzMzN3t3rvd3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uu7u7y8vMzMzMzN3d3tvd3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zMzMzu7u7uvru7y8vMzMzMzNzdvd3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uvru7y7vMzMzMzNy7u93d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7zMzMzMzLzb3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7zMzMzMzMzd3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7O7u7u7u7ru7u7zMzMzMzMzd3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7zLzMzMzMzc3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u8vLzMzMzMzc3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7ru7u8vLzMzMu7u73N3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u8u7zLu7y8zM3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zM7O7u7u7u7ru7u7u8u8vMvLvb3d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7vMzLy7u7u73d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7u7u7u7u7u73d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zs7u7u7u7u7ru7u7u7u7u7u7u73d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7u7u7u7u7u73d3d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7u7ru7u7u7u7u7u7u7293d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u8zu7u7u7u7uvru7u7u7u7u7u7u7293d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uvru7u7u7u7u7u7u7293d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uu7u7u7u7u7u7u7u7293d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u7uu7u7u7u7u7u7u7u7u93d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u6+u7u7u7u7u7u7u7u7u93d3d3d3d3d3d2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u+7u7u7u7u6+u7u7u7u7u7u7u7u7u93d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"wildWest\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABgAAAAAERERERERALsAAAAQERERERERAbu7AAARISIiIiISEbu7zAwRIiIiIiIiEbu7/AwRIhEREREiEbu7zAwRIhEREREiEbu7AAARIhEiIhEiEbu7AAARIhEiIhEiEbu7AAARIhEiIhEiEbu7AAARIhEiIhEiEbu7AAARIhEREREiEbu7AAARIhEREREiEbu7zAwRIiIiIiIiEbu7/AwRISIiIiISEbu7zAwQERERERERAbu7AAAAERERERERALsAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"target\"\n    },\n    \"Oq:k:~,/OWH0jL-|Ycd7\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIAAAAAACAWIUIAAAAAIhlVogAAAAAWFZVhQAAAABYVlaFAAAAAIhVVYgAAAAAgFiFCAAAAAAAiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ball-yellow\"\n    },\n    \"image10\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIAAAAAACAmIkIAAAAAIhplogAAAAAmJaZiQAAAACYlpaJAAAAAIiZmYgAAAAAgJiJCAAAAAAAiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ball-blue\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"booth2\":return img`\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n811111111111.........................................................................................................................................81111111111\n881111111111.........................................................................................................................................88111111111\n888111111111.........................................................................................................................................88811111111\n888811111111.........................................................................................................................................88881111111\n888881111111.........................................................................................................................................88888111111\n888888111111.........................................................................................................................................88888811111\n888888881111.........................................................................................................................................88888888111\n888888888111.........................................................................................................................................88888888811\n188888888811.........................................................................................................................................18888888881\n111888888881.........................................................................................................................................11188888888\n111888888888.........................................................................................................................................11188888888\n111118888888.........................................................................................................................................11111888888\n111111888888.........................................................................................................................................11111188888\n111111188888.........................................................................................................................................11111118888\n111111118888.........................................................................................................................................11111111888\n111111111188.........................................................................................................................................11111111118\n111111111188.........................................................................................................................................11111111118\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n211111111111.........................................................................................................................................21111111111\n221111111111.........................................................................................................................................22111111111\n222111111111.........................................................................................................................................22211111111\n222211111111.........................................................................................................................................22221111111\n222221111111.........................................................................................................................................22222111111\n222222111111.........................................................................................................................................22222211111\n222222211111.........................................................................................................................................22222221111\n222222222111.........................................................................................................................................22222222211\n122222222111.........................................................................................................................................12222222211\n112222222221.........................................................................................................................................11222222222\n111222222222.........................................................................................................................................11122222222\n111122222222.........................................................................................................................................11112222222\n111112222222.........................................................................................................................................11111222222\n111111122222.........................................................................................................................................11111112222\n111111122222.........................................................................................................................................11111112222\n111111111222.........................................................................................................................................11111111122\n111111111122.........................................................................................................................................11111111112\n111111111112.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n811111111111.........................................................................................................................................81111111111\n881111111111.........................................................................................................................................88111111111\n888111111111.........................................................................................................................................88811111111\n888881111111.........................................................................................................................................88888111111\n888888111111.........................................................................................................................................88888811111\n888888811111.........................................................................................................................................88888881111\n888888888111.........................................................................................................................................88888888811\n888888888811.........................................................................................................................................88888888881\n118888888888.........................................................................................................................................11888888888\n111888888888.........................................................................................................................................11188888888\n111118888888.........................................................................................................................................11111888888\n111111888888.........................................................................................................................................11111188888\n111111118888.........................................................................................................................................11111111888\n111111111188.........................................................................................................................................11111111118\n111111111118.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n211111111111.........................................................................................................................................21111111111\n222111111111.........................................................................................................................................22211111111\n222211111111.........................................................................................................................................22221111111\n222221111111.........................................................................................................................................22222111111\n222222211111.........................................................................................................................................22222221111\n222222221111.........................................................................................................................................22222222111\n222222222211.........................................................................................................................................22222222221\n122222222222.........................................................................................................................................12222222222\n111222222222.........................................................................................................................................11122222222\n111122222222.........................................................................................................................................11112222222\n111111222222.........................................................................................................................................11111122222\n111111122222.........................................................................................................................................11111112222\n111111111222.........................................................................................................................................11111111122\n111111111112.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n111111111111.........................................................................................................................................11111111111\n811111111111.........................................................................................................................................81111111111\n888111111111.........................................................................................................................................88811111111\n888111111111.........................................................................................................................................88811111111\n888881111111.........................................................................................................................................88888111111\n888888111111.........................................................................................................................................88888811111\n888888881111.........................................................................................................................................88888888111\n888888888111.........................................................................................................................................88888888811\n`;\n            case \"image7\":\n            case \"can\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . b . . . . . . . b . . . . \n. . . b b b b b b b b b . . . . \n. . . b d d d d d d d b . . . . \n. . . b d d d d d d d b . . . . \n. . . b d d d 2 d d d b . . . . \n. . . b d d 2 d 2 d d b . . . . \n. . . b d 2 d d d 2 d b . . . . \n. . . b d d 2 d 2 d d b . . . . \n. . . b d d d 2 d d d b . . . . \n. . . b d d d d d d d b . . . . \n. . . b d d d d d d d b . . . . \n. . . b d d d d d d d b . . . . \n. . . b d d d d d d d b . . . . \n. . . . b b b b b b b . . . . . \n`;\n            case \"image4\":\n            case \"booth\":return img`\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222222222222222\n222222222222222222222222221..........................................................................................................122222222222222222222222222\n22222222222222222222222221...........................................................................................................112222222222222222222222222\n22222222222222222222222221............................................................................................................12222222222222222222222222\n22222222222222222222222221............................................................................................................12222222222222222222222222\n2222222222222222222222221..............................................................................................................1222222222222222222222222\n2222222222222222222222221..............................................................................................................1222222222222222222222222\n222222222222222222222221................................................................................................................122222222222222222222222\n222222222222222222222221................................................................................................................122222222222222222222222\n22222222222222222222221.................................................................................................................112222222222222222222222\n22222222222222222222221..................................................................................................................12222222222222222222222\n2222222222222222222221...................................................................................................................11222222222222222222222\n2222222222222222222221....................................................................................................................1222222222222222222222\n222222222222222222221.....................................................................................................................1122222222222222222222\n222222222222222222221......................................................................................................................122222222222222222222\n22222222222222222221.......................................................................................................................112222222222222222222\n22222222222222222221........................................................................................................................12222222222222222222\n22222222222222222221........................................................................................................................12222222222222222222\n2222222222222222221..........................................................................................................................1222222222222222222\n2222222222222222221..........................................................................................................................1222222222222222222\n222222222222222221............................................................................................................................122222222222222222\n222222222222222221............................................................................................................................122222222222222222\n22222222222222221..............................................................................................................................12222222222222222\n22222222222222221..............................................................................................................................12222222222222222\n2222222222222221................................................................................................................................1222222222222222\n2222222222222221................................................................................................................................1222222222222222\n222222222222221.................................................................................................................................1122222222222222\n222222222222221..................................................................................................................................122222222222222\n222222222222221..................................................................................................................................122222222222222\n22222222222221....................................................................................................................................12222222222222\n22222222222221....................................................................................................................................12222222222222\n2222222222221......................................................................................................................................1222222222222\n2222222222221......................................................................................................................................1222222222222\n222222222221........................................................................................................................................122222222222\n222222222221........................................................................................................................................122222222222\n22222222221..........................................................................................................................................12222222222\n22222222221..........................................................................................................................................12222222222\n2222222221............................................................................................................................................1222222222\n2222222221............................................................................................................................................1222222222\n2222222221............................................................................................................................................1122222222\n222222221..............................................................................................................................................122222222\n222222221..............................................................................................................................................112222222\n22222221................................................................................................................................................12222222\n22222221................................................................................................................................................12222222\n2222221..................................................................................................................................................1222222\n2222221..................................................................................................................................................1222222\n222221....................................................................................................................................................122222\n222221....................................................................................................................................................112222\n222211.....................................................................................................................................................12222\n22221......................................................................................................................................................11222\n22221.......................................................................................................................................................1222\n22219.......................................................................................................................................................1122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221.........................................................................................................................................................122\n2221..222...222...222...222...222...222...222...222...222ddd222ddd222...222...222...222..2222...222...222...222...222...222...222...222...222...222...222..22222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222122222122222122222122222222222222222222222222222222221222221222221222221222222222222222222222222222222222221222221222221222221222222222222222222222222222222\n2221112221112221112221112222222122222122222122222122222211122211122211122211122222221222221222221222221222222211122211122211122211122222212222212222212222212222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n2221112221112221112221112222221112221112221112221112222211122211122211122211122222211122211122211122211122222211122211122211122211122222111222111222111222111222\n`;\n            case \"image9\":\n            case \"wildWest\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111119999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111ddd1111111111199999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111ddddddddd11d111111111199999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111911ddddd1111199999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999991111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999999999999999999999999999111111ddddddd1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999991111111999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999911111111111111999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999911111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999\n999999999999999999999999999999999999999999999999999999999999999999911dd11111111dddd11111999999999999999999999999999999999999999999999999999999999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999991111dddddddd111111111999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbb4444444bbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\neeeeeeceececeeceeceeee44444444444eeeeeeeeecceeeceeeceeeceeeeceeeceeeceeceeeceececeeeceeeceeceeceeceeeceeceeceeceeceeececeeeceeceeceeceeeceeceeeceececeeceeceeeee\neeeeeeceececeeceeceee4444444444444eeeeeeeecceeeceeeceeeceeeeceeeceeeceeceeeceececeeeceeeceeceeceeceeeceeceeceeceeceeececeeeceeceeceeceeeceeceeeceececeeceeceeeee\neeeeeeceececeeceecee444444444444444ee44444444eeeeeeceeeceeeeceeeceeeceeceeeceececeeeceeeceeceeceeceeeceeceeceeceeceeececeeeceeceeceeceeeceeceeeceececeeceeeeeeee\neeeeeeceeeeceeeeece44444444444444444ee44444444eeeeeceeeceeeeceeeceeeceeceeeceeeeceeeceeeceeeeeceeeeeeceeeeeceeeeeceeececeeeceeceeeeeceeeceeceeeceeeeceeeeeeeeeee\neeeeeeeeeeeceeeeee4444444444444444444ee44444444eeeeceeeeeeeeceeeceeeceeceeeceeeeceeeceeeceeeeeceeeeeeceeeeeceeeeeceeececeeeeeeceeeeeceeeeeeceeeceeeeceeeeeeeeeee\neeeeeeeeeeeceeeeeecbcbcbcbcbcbcbcbcbcbee44444444eeeceeeeeeeeceeeeeeeceeceeeeeeeeceeeeeeeceeeeeceeeeeeceeeeeceeeeeceeeeeceeeeeeceeeeeceeeeeeceeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbcbbbbbbbcbcbbbbbbbcbcbcbbceeeeeceeeeeeeeeeeeeeeeceeceeeeeeeeceeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeceeeeeeeeeeeeceeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbcccccbcbbbcccccbcbcbcbbceeeeeeeeeeeeeeeeeeeeeeceeceeeeeeeeceeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbc444cbbbbbc9c9cbbbcbcbbceeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbc444cbbbbbcccccbbbbbcbbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbc44ccbbbbbc9c9cbbbbbbbbcddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbc444cbbbbbcccccbbbbbbbbcddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeecbbbc444cbbbbbbbbbbbbbbbbbcddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\nddddeeeeeeeeeeeedddddeeeeeeeeddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\ndddddeeeeeeeeeddeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb\ndddddddeeeeedddeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbeeeeeeeeeeeeeeeeebbbb\nddddddddddddeeeddddddddddddeeeeeeeeddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeebbbbbb\ndddddddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbccbbbbbbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbcbbcccbbbbbbbbbbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbcbbbbbccccbbbbbbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeedddddddddddeeeeeeeeebbbbbbbbbcbbcccbbbbbcccbbbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddddeedddddddddddddddddddddddddddddddddddddeeeeeeeeeeeedddddddddddddddddddddeeebbbbbbbbbbbcbccccccccbbbbccbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddebbbbbbbbbbcbbcccccccccccbbcbbbbbbbbbb\ndddddddddddddddddddddddddddddddddddddddddddddddddeedddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddddddddddddddbbbbbbbbbcbcccccccccccccbcbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbcbcccccccccccccbcbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbcbbccccccccccccbbcbbbbbbbbbb\nddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbcbcccccccccccccbcbbbbbbbbbbb\nddddddddd6666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbbcccccccccccccbcbbbbbbbbbbb\ndddddddd676666666ddddddddeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbccccccccccccccbcbbbbbbbbbbb\nddddddd66766666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccbbcbbbbbbbbbbb\nddddddd67666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccbcbbbbbbbbbbbb\ndddddd6676666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddcccccccbcbbbbbbbbbbbb\ndddddd6766666666666ddd666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddbdddddbccccbcbbbbbbbbbbbb\ndddddd6766666666666ddd676dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddbbbddddddddbdedddbbddccbcbbbbbbbbbbbb\ndddddd6766666666666ddd676ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddbbddddbbddeeddbdddddbcdbbbbbbbbbbb\ndddddd6666666666666ddd676dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddeedbdddddcddddddbbbbbbb\ndddddd6666666666666dd6666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddedddddbbddddddddddddddddbbb\ndddddd6666666666666d66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeedddddedddbbddddddddddddddddddddd\ndddddd6666666666666666676ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddeddbbdddddddddddddddddddddd\ndddddd666666666686666677ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdbbddddddddddddddddddddddd\ndddddd66666666668666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddbbbdddddddddddddddddddddddd\ndddddd6666666666866666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddd\ndddddd666866666686688ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddd\ndddddd6668666666866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddd6668666666866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddd6668668666866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddd8668668666866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddd8668668666866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddd8888888886866ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n            case \"image3\":\n            case \"target\":return img`\n..111111111111..\n.11111111111111.\n1112222222222111\n1122222222222211\n1122111111112211\n1122111111112211\n1122112222112211\n1122112222112211\n1122112222112211\n1122112222112211\n1122111111112211\n1122111111112211\n1122222222222211\n1112222222222111\n.11111111111111.\n..111111111111..\nbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbb\n.bbbbbbbbbbbbbb.\n.bbbbbbbbbbbbbb.\n..ccc......ccc..\n..cfc......cfc..\n..ccc......ccc..\n................\n`;\n            case \"Oq:k:~,/OWH0jL-|Ycd7\":\n            case \"ball-yellow\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . 8 8 8 8 . . . . . . \n. . . . . 8 8 5 5 8 8 . . . . . \n. . . . 8 8 5 6 6 5 8 8 . . . . \n. . . . 8 5 6 5 5 5 5 8 . . . . \n. . . . 8 5 6 5 6 5 5 8 . . . . \n. . . . 8 8 5 5 5 5 8 8 . . . . \n. . . . . 8 8 5 5 8 8 . . . . . \n. . . . . . 8 8 8 8 . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image10\":\n            case \"ball-blue\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . 8 8 8 8 . . . . . . \n. . . . . 8 8 9 9 8 8 . . . . . \n. . . . 8 8 9 6 6 9 8 8 . . . . \n. . . . 8 9 6 9 9 9 9 8 . . . . \n. . . . 8 9 6 9 6 9 9 8 . . . . \n. . . . 8 8 9 9 9 9 8 8 . . . . \n. . . . . 8 8 9 9 8 8 . . . . . \n. . . . . . 8 8 8 8 . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"project\",\n    \"description\": \"An asset pack for MakeCode Arcade\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.10.36\",\n        \"tag\": \"v1.10.36\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/3a5a7e13703edf0412c17bdb9b1469e282a5b31b\",\n        \"target\": \"1.10.36\",\n        \"pxt\": \"8.3.9\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "test.ts": "",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

