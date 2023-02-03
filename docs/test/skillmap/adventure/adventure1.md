# Dungeons & Dragons: Honor Among Thieves - Your Adventure
### @explicitHints true


## {Intro @showdialog}

This activity will show you how to make your own text-based adventure inspired by the movie Dungeons & Dragons: Honor Among Thieves

![Let's go on an adventure!](https://media.giphy.com/media/XbidWpczmwrmtnJ01e/giphy.gif "Image of trunk trying to eat Barbarian" )



## {Step 2}

**Let's get rolling!**<br/>

First, we'll code a 20-sided die that we'll call a **d20**.

---

- :justify:  Open the ``||variables:Variables||`` category in the toolbox,
and click <br/>
"Make a Variable..."


- :mouse pointer: Enter **`roll`** as the new variable name, then click **Ok**.


~hint What is a variable? 💡

---

A variable is a placeholder for information that might change later.

Our game will use a number that changes every turn.
Since we don't know what that number will be ahead of time,
we need a placeholder to stand-in for the mystery number, otherwise we
won't be able to keep writing our program.

From now on, whenever we want to use the number that we get when the user rolls the d20,
we'll access it using the word **roll**.

hint~

- :mouse pointer: Click **Next** to move on to the next step.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```




## {3. Set Roll}


- :list: From the ``||sprites: Sprites||`` category in the toolbox, grab

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













## {Finish}

**Congratulations, you've finished your greeting card!**<br/>
🥳 🥳 🥳

Click **Done** to return to the main skillmap page where you can keep going to make an even more detailed card.


```blockconfig.global
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
loggr.addImageToTextLog(img`.`)
music.setVolume(20)
info.setLife(20)
```



```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
dd=github:kiki-lee/dnd-sprite-pack
```



```ghost

function rollDie () {
    loggr.addToTextlog(loggr.rollTextForLog(roll))
}

function enounter1 () {
    loggr.addToTextlog("You quickly turn the corner and are startled by a gelatinous cube in your path")
    loggr.addToTextlog("Press (A) to roll and see what happens next!")
    pauseUntil(() => controller.A.isPressed())
    rollOnButton(1, 20)
    if (roll >= 10) {
        loggr.addToTextlog("Your roll was high enough to help you dodge the cube.")
        info.changeLifeBy(1)
        info.changeScoreBy(10)
    } else {
        loggr.addToTextlog("That roll was too low to escape unharmed.")
        loggr.addToTextlog("You don't see the cube in time and it slowly starts absorbing your arm.")
        loggr.addToTextlog("The pain is intense, but you're able to pull away and run to freedom.")
        loggr.addToTextlog("Phew! That was a close one!")
    }
}
function rollOnButton (lo: number, hi: number) {
    roll = randint(lo, hi)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    loggr.addToTextlog("You roll " + roll + "!")
    return roll
}
function AorB () {
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.right.isPressed()) {
        loggr.addToTextlog("You decide to keep going")
    } else if (controller.left.isPressed()) {
        loggr.addToTextlog("You try to turn and run")
    } else {
        loggr.addToTextlog("You didn't listen")
    }
}
info.onLifeZero(function () {
    game.over(false)
})
let roll = 0
roll = 0
music.play(music.createSong(hex`0078000408020200001c00010a006400f4016400000400000000000000000000000000050000042a0000000400012504000800012708000c0001250c001000012210001400011e18002000011624003000011904001c00100500640000041e000004000000000000000000000000000a0400041e000000080003131e250800100003162025100020000310191e200030000116`), music.PlaybackMode.InBackground)
loggr.addImageToTextLog(assets.image`gelatenousCube`)
music.setVolume(20)
info.setLife(20)
enounter1()


```

```customts

music.setVolume(20);


//% color=#888888 icon="\uf036"
//% block="Text Log"
namespace loggr {

    let stateStack: TextLogState[];
    const padding = 5;
    const pauseTime = 1500;

    class LogEntry {
        constructor(public isTextEntry: boolean) {
        }
    }

    class TextEntry extends LogEntry {
        text: sprites.RenderText;

        constructor(text: string) {
            super(true);
            this.text = new sprites.RenderText(text, screen.width - (padding << 1));
        }
    }

    class ImageEntry extends LogEntry {
        constructor(public image: Image) {
            super(false);
        }
    }

    class SpriteEntry extends LogEntry {
        constructor(public sprite: Sprite) {
            super(false);
        }
    }

    class TextLogState {
        log: LogEntry[];
        printIndex: number
        finishedPrinting: boolean;
        printingTimer = 0;

        constructor() {
            this.log = [];

            scene.createRenderable(10, () => this.draw())
            this.printIndex = 0;
        }

        draw() {
            let top = screen.height - padding;

            this.printIndex++
            for (let i = 0; i < this.log.length; i++) {
                const entry = this.log[this.log.length - 1 - i]

                if (entry.isTextEntry) {
                    const text = (entry as TextEntry).text;

                    if (i === 0) {
                        top -= text.calculatePartialHeight(0, this.printIndex);
                        text.drawPartial(screen, padding, top, 7, this.printIndex);

                        if (!this.finishedPrinting) {
                            if (this.printIndex > text.printableCharacters()) {
                                if (this.printingTimer <= 0) {
                                    this.printingTimer = pauseTime
                                }
                                else {
                                    this.printingTimer -= game.eventContext().deltaTimeMillis

                                    if (this.printingTimer <= 0) {
                                        this.finishedPrinting = true;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        top -= text.height + padding;

                        if (top + text.height < 0) {
                            this.log = this.log.slice(this.log.length - 1 - i);
                            break;
                        }
                        text.draw(screen, padding, top, 11, 0);
                    }
                }
                else {
                    const image = (entry as ImageEntry).image;
                    top -= image.height + padding
                    screen.drawTransparentImage(image, padding, top);

                    if (i === 0 && !this.finishedPrinting) {
                        this.printingTimer -= game.eventContext().deltaTimeMillis

                        if (this.printingTimer <= 0) {
                            this.finishedPrinting = true;
                        }
                    }
                }
            }
        }

        appendToLog(text: string) {
            this.log.push(new TextEntry(text));
            this.printIndex = 0;
            this.finishedPrinting = false;
        }

        appendImageToLog(image: Image) {
            this.log.push(new ImageEntry(image));
            this.printIndex = 0;
            this.finishedPrinting = false;
            this.printingTimer = pauseTime
        }
    }

    function init() {
        if (stateStack) return;

        stateStack = [new TextLogState()]

        game.addScenePushHandler(() => {
            stateStack.push(new TextLogState())
        })

        game.addScenePopHandler(() => {
            stateStack.pop();
            if (!stateStack.length) stateStack.push(new TextLogState());
        })
    }

    function state() {
        init();
        return stateStack[stateStack.length - 1];
    }

    //% blockId=dnd_add_to_text_log
    //% block="add $text to text log"
    export function addToTextlog(text: string) {
        state().appendToLog(text)
        pauseUntil(() => state().finishedPrinting)
    }

    //% blockId=dnd_add_image_to_text_log
    //% block="add $image to text log"
    //% image.shadow=screen_image_picker
    export function addImageToTextLog(image: Image) {
        state().appendImageToLog(image)
        pauseUntil(() => state().finishedPrinting)
    }

    //% color=#AAAAAA
    //% blockId=log_roll
    //% block="“You rolled $rolled !”"
    //% inlineInputMode=inline
    export function rollTextForLog(rolled:number):string {
        return ("You rolled " + rolled.toString() + "!");
    }
}



```