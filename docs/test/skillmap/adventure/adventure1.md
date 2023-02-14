# Start Your Journey
### @explicitHints true


## {Intro @showdialog}


Are you ready to create an adventure?


![Let's go on an adventure!](https://media.giphy.com/media/q6X5yJOC1nupZmKdo9/giphy.gif "Image of Bard" )



## {2. Explain the Issue}

**We need a quest!**<br/>

Start by creating some drama.  What issue is the player facing?


- :align left: From ``||loggr: Text Log||``, drag the<br/>
``||loggr: add [" "] to text log||`` <br/>
block into the empty<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to set up the problem that your player will face.


#### ~ tutorialhint

```blocks
//@highlight
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")

```




## {3. Check Your Project}

Take a look at what you have so far.

- :binoculars: Look at your project in the game window to see what happens!

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")


```blockconfig.local
loggr.addToTextlog("Press (A) to join the fun." )
```




## {4. Give option A}

**Time for a decision!**

What options do you want to give the player?  Make sure that one option turns out well, and one turns out poorly.

- :align left: From ``||loggr: Text Log||``, drag the<br/>
``||loggr: add ["Press (A)..."] to text log||`` <br/>
block into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to let the user know the option they get
by pressing the (A) button on the console.


```blockconfig.local
loggr.addToTextlog("Press (A) to join the fun." )
```


#### ~ tutorialhint

```blocks
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
//@highlight
loggr.addToTextlog("Press (A) to join the fun." )
```




## {5. Give option B}

**Option B...**

Add your second option. <br/>
(This one won't turn out as well.)

- :align left: From ``||loggr: Text Log||``, drag the<br/>
``||loggr: add ["Press (B)..."]to text log||`` <br/>
block into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Change the text to let the user know the option they get
by pressing the (B) button on the console.


```blockconfig.local
loggr.addToTextlog("Press (B) to turn and run." )
```



#### ~ tutorialhint

```blocks
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
loggr.addToTextlog("Press (A) to join the fun." )
//@highlight
loggr.addToTextlog("Press (B) to turn and run." )
```




## {6. Wait}

**Wait for an answer.**

Add code to wait for the players decision.

- :redo: From ``||loops: Loops||``, drag<br/>
``||loops: pause until <true>||`` <br/>
into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :game: From ``||controller: Controller||``, drag<br/>
``||controller: <is [any] button pressed>||`` <br/>
in to replace **`<true>`** in the<br/>
``||loops(noclick):pause until <true>||`` <br/>
block already in the workspace.



```blockconfig.local
loggr.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
```



#### ~ tutorialhint

```blocks
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
loggr.addToTextlog("Press (A) to join the fun." )
loggr.addToTextlog("Press (B) to turn and run." )
//@highlight
pauseUntil(() => controller.anyButton.isPressed())
```






## {7. Results}

**Choose a path.**

Now it's time to add the conditional that handles the path that was chosen.

~hint What's a conditional? 💡

---

A **conditional** is a piece of code that runs only when a **condition** is met.

We are going to add an **if/else** statement that runs the
code inside the **if** container only if the player **presses (A)**.

Otherwise, it will run the code inside of the **else** container.

```block
if (controller.A.isPressed()) { } else { }
```


hint~

- :shuffle: From ``||logic: Logic||``, drag<br/>
``||logic: if <true> then / else||`` <br/>
into the **end of** the<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :game: From ``||controller: Controller||``, drag<br/>
``||controller: <is [A] button pressed>||`` <br/>
in to replace **`<true>`** in the<br/>
``||logic(noclick):if <true> then||`` <br/>
part of the block already in the workspace.



```blockconfig.local
loggr.addToTextlog("Press (B) to turn and run." )
controller.A.isPressed()
```



#### ~ tutorialhint

```blocks
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
loggr.addToTextlog("Press (A) to join the fun." )
loggr.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
//@highlight
if (controller.A.isPressed()) { } else { }

```


## {8. Outcomes}

**The good and the bad...**

For now, we'll end the game as a **win** when the user chooses (A)
and end the game as a **lose** when the user chooses (B).


- :circle: From ``||game: Game||``, drag<br/>
``||game: game over <WIN>||`` <br/>
into the empty<br/>
``||logic(noclick):if <true> then||`` <br/>
container that's already in your code.

- :circle: From ``||game: Game||``, drag<br/>
``||game: game over <LOSE>||`` <br/>
into the empty<br/>
``||logic(noclick):else||`` <br/>
container that's already in your code.


```blockconfig.local
loggr.addToTextlog("Press (B) to turn and run." )
controller.A.isPressed()
```


#### ~ tutorialhint

```blocks
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
loggr.addToTextlog("Press (A) to join the fun." )
loggr.addToTextlog("Press (B) to turn and run." )
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    //@highlight
    game.gameOver(true)
    } else {
    //@highlight
    game.over(false)}

```



## {Finish}

**Congratulations, you've created the beginning of a text-based adventure!**<br/>
🥳 🥳 🥳

Click **Done** to return to the main skillmap page where you can
continue on to add more levels.


```blockconfig.global
music.setVolume(20)
info.setLife(20)
pauseUntil(() => controller.anyButton.isPressed())
loggr.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    if (controller.A.isPressed()) { } else { }
controller.anyButton.isPressed()
```



```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
dd=github:kiki-lee/dnd-sprite-pack
```



```ghost
function quest1 () {
    music.play(music.createSong(assets.song`Merry Merry`), music.PlaybackMode.InBackground)
    dnd.addImageToTextLog(assets.image`lute`)
    dnd.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    dnd.addToTextlog("Press (A) to join the fun.")
    dnd.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        dnd.addToTextlog("You join the bard and are ready for a merry adventure. ")
        quest2()
    } else {
        dnd.addToTextlog("Your game ends before it has even begun!")
        game.gameOver(false)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`Suspense`), music.PlaybackMode.InBackground)
    dnd.addImageToTextLog(assets.image`owlBear`)
    dnd.addToTextlog("Out of the darkness, an Owlbear leaps toward your party.")
    dnd.addToTextlog("Press (A) to flee.")
    dnd.addToTextlog("Press (B) to attack.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        dnd.addToTextlog("You scream and leap backward, stumbling to your feet before you turn and run.")
        dnd.addToTextlog("The rest of the party breaks into laughter as the Owlbear transforms into Doric, the druid.")
        dnd.addToTextlog("You continue to back away until the team offers you $20 to continue on the quest.")
        info.changeScoreBy(20)
    } else {
        dnd.addToTextlog("You leap forward with your sword in hand, only to find yourself surrounded by the rest of the group.")
        dnd.addToTextlog("They grab you and tie your hands.  How dare you attack their favorite druid, Doric?")
        info.changeLifeBy(-1)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
music.setVolume(20)
info.setLife(20)
quest1()

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

    class AnimEntry extends LogEntry {
        constructor(public anim: Image[]) {
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

        appendAnimToLog(anim: Image[]) {
            this.log.push(new AnimEntry(anim));
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

/*
    //% blockId=dnd_add_anim_to_text_log
    //% block="add $anim to text log"
    //% anim.shadow=animation_editor
    export function addAnimToTextLog(anim: Image[]) {
        state().appendAnimToLog(anim)
        pauseUntil(() => state().finishedPrinting)
    }
*/

    //% color=#AAAAAA
    //% blockId=log_roll
    //% block=""You rolled $rolled !""
    //% inlineInputMode=inline
    export function rollTextForLog(rolled: number): string {
        return ("You rolled " + rolled.toString() + "!");
    }

}


```