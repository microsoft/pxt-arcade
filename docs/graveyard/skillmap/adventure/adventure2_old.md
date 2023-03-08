# Start Your Journey
### @explicitHints true


## {Intro @showdialog}


Are you ready to create an adventure?

The code for your d20 is already in the workspace. Let's add a reason to use it.

![Let's go on an adventure!](https://media.giphy.com/media/5Ur2TK63wEciypxyHG/giphy.gif "Image of trunk trying to eat Barbarian" )



## {Step 2}

**We need a quest!**<br/>

Start by creating a reason to roll.  What issue is the player facing?

Let's make another function to keep this first quest in.



- :function: Click **Advanced** in the toolbox to show the
``||function: Functions||`` category. <br/>

- :mouse pointer: Open the ``||function: Functions||`` category and click <br/>
**`Make a Function...`**

- :mouse pointer: Call your new function **quest_1** and click **Done**.





## {3. Add function}

- :function: Reopen the ``||functions: Functions||`` category and drag the empty<br/>
``||functions:function [quest_1]||``<br/>
container into **an empty** area of the workspace.


#### ~ tutorialhint

```blocks
//@highlight
function quest_1() {}
```




## {4. Create Conflict}

- :align left: From ``||loggr: Text Log||``, drag the<br/>
``||loggr: add [" "] to text log||`` <br/>
block into the empty<br/>
``||functions:function [quest_1]||`` <br/>
container already in the workspace.

- :mouse pointer: Add your own text that sets up the problem that your player will face.


#### ~ tutorialhint

```blocks
function quest_1() {
//@highlight
loggr.addToTextlog("Oh no! There is a dragon in your path!")
}
```




## {5. Read the Roll}

**What did you roll?**

The code to roll your number is in the workspace, but there's no way to see it.
Let's change that.

- :calculator: From ``||loggr: Text Log||``, drag <br/>
``||loggr:add ("You rolled [roll] !" to text log||`` <br/>
into **the end** of the  <br/>
``||loops(noclick):on start|`` <br/>
container already in the workspace.

This block will add your roll to the text log.


#### ~ tutorialhint

```blocks
let roll = 0
roll = randint(1,20)
//@highlight
loggr.addToTextlog(loggr.rollTextForLog(roll))
```




## {6. Check Your Game!}

Take a look at what you made!

- :binoculars: Look at your project in the game window to see how it has changed!

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")

Reload your game a few times and watch your number change over and over.



## {7. Make it a function}

**Let's make it reusable.**

We're going to want to roll the d20 over and over again.
Let's move it into a function so we can reuse the code we just wrote.



- :function: Click on **Advanced** in the toolbox to show the
``||function: Functions||`` category. <br/>

- :mouse pointer: Open the ``||function: Functions||`` category and click <br/>
**`Make a Function...`**

- :mouse pointer: Call your function **roll_d20** and click **Done**.


~hint What is a function? 💡

---

A function is a chunk of code that you can name.
Once it has a name, you can **call** it from other places in your program to run
you function as many times as you want without having to rewrite it in each location.


hint~


#### ~ tutorialhint

```blocks
//@highlight
function roll_d20() {}
```



## {8. Move the Code}

**Fill the function.**

- :mouse pointer: Now drag all of the code you
just wrote out of the ``||loops(noclick):on start||`` and into the empty <br/>
``||functions(noclick):function [roll_d20]||``<br/>
container.


#### ~ tutorialhint

```blocks
let roll = 0
//@highlight
function roll_d20() {
//@highlight
roll = randint(1,20)
//@highlight
loggr.addToTextlog(loggr.rollTextForLog(roll))}
```





## {9. Call the Code}

Did you notice that your roll stopped showing in the log?

That's because we aren't calling the function anywhere.

- :function: From the
``||function: Functions||`` category, drag
``||functions:call roll_d20||`` <br/>
into the empty <br/>
``||loops(noclick):on start||`` <br/>
container in the workspace.


You should see the results of your roll on your game screen again.


#### ~ tutorialhint

```blocks
//@hide
function roll_d20() {}
//@highlight
roll_d20()
```





## {Finish}

**Congratulations, you've created a d20!**<br/>
🥳 🥳 🥳

Click **Done** to return to the main skillmap page where you can
use that d20 to .


```blockconfig.global
let roll=20;
loggr.addImageToTextLog(img`.`)
music.setVolume(20)
info.setLife(20)
loggr.addToTextlog("Oh no! There is a dragon in your path!")
```



```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
dd=github:kiki-lee/dnd-sprite-pack
```



```template

let roll = 0
function roll_d20() {
roll = randint(1,20)
loggr.addToTextlog(loggr.rollTextForLog(roll))
}

roll_d20()
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


//% color=#656565 icon="\uf036"
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