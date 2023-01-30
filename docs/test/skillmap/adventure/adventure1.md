# Dungeons & Dragons: Honor Among Thieves - Your Adventure
### @explicitHints true


## {Intro @showdialog}

This activity will show you how to make your own text-based adventure inspired by the movie Dungeons & Dragons: Honor Among Thieves

![Let's go on an adventure!](https://media.giphy.com/media/XbidWpczmwrmtnJ01e/giphy.gif "Image of trunk trying to eat Barbarian" )



## {Step 2}

**Let's get rolling!**<br/>

First, we'll code a 20-sided die that we'll call a **d20**.

---

- :tree:  From the ``||scene:Scene||`` category in the toolbox,
grab

```block
scene.setBackgroundImage(img`.`)
```

and drag it into the ``||loops(noclick):on start||`` container that's already in the workspace.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~

- :mouse pointer: Click **Next** to move on to the next step.




#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```



## {Step 3}


- :paint brush:  Click the empty grey square inside

```block
scene.setBackgroundImage(img`.`)
```

to open the **image editor**. <br/><br/>
You can draw your own background or choose one from the **Gallery**.
![This is where the gallery is located](/static/skillmap/assets/gallery.png "You can switch over to the gallery or make your own image." )


~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(storySprites.halloween)
```





## {Step 4}

**Look at your card.**

- :binoculars: Take a look at the game window. <br/><br/>
Do you see the background you chose?




## {Step 5}

**Add a heartfelt greeting**<br/>
💛 💛 💛

---

- :ticket:  From the ``||carnival:Carnival||`` category, drag

```block
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```

into **the end** of the ``||loops(noclick):on start||`` container that's already in the workspace.

- :mouse pointer: Change the message to whatever you would like.


~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
//@highlight
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)

```




## {Step 6}

**Time for pizzazz**<br/>
🎉🎉🎉

---

- :tree:  Open the ``||scene:Scene||`` category and drag

```block
effects.confetti.startScreenEffect()
```

into **the end** of the ``||loops(noclick):on start||`` container that's already in the workspace.

- :mouse pointer: Change the effect to whatever you would like.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
//@highlight
effects.confetti.startScreenEffect()

```




## {Step 7}

**Look at your creation!**

- :binoculars: Take a look at the game window. Does the card look the way you want it to?  <br/><br/>
Feel free to change it until you are happy with it.





## {Step 8}

**Let's add a personal note**<br/>
🎵 🎵 🎵

---

- :headphones:  From the ``||music:Music||`` category, drag

```block
music.startSong(``, false)
```

into **the end** of the ``||loops(noclick):on start||`` container that's already in the workspace.


- :mouse pointer: **Click the empty rectangle** to open the music editor.<br/><br/>
You can write your own song or switch to **My Assets** to pick one
that we've written for you.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/story/story-bg-select.gif "Toggle between editor and gallery" )
hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
effects.confetti.startScreenEffect()
music.startSong(assets.song`birthday`, false)
```




## {Step 9}

**Celebrate your work!**

- :binoculars: Take a look at your finished card in the game window.<br/><br/>
Feel free to go back and make changes until you are happy with it.



## {Finish}

**Congratulations, you've finished your greeting card!**<br/>
🥳 🥳 🥳

Click **Done** to return to the main skillmap page where you can keep going to make an even more detailed card.


```blockconfig.global
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```



```package
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
dd=github:kiki-lee/dnd-sprite-pack
```




```template

function rollDie () {
    loggr.addToTextlog(loggr.rollTextForLog(roll))
}

```





```ghost
function enounter1 () {
    loggr.addImageToTextLog(assets.image`dd.gelatenousCube`)
    loggr.addToTextlog("You quickly turn the corner and are startled by a gelatinous cube in your path")
    loggr.addToTextlog("Press (A) to roll and see what happens next!")
    rollOnButton(1, 20)
    if (roll == 20) {
        loggr.addToTextlog("A nat-20! You see the cube and dodge it with plenty of time to carry-on with your mission...and you find $10 and a cheeseburger on the floor while doing it.")
        info.changeLifeBy(1)
        info.changeScoreBy(10)
    } else if (roll == 1) {
        loggr.addToTextlog("A nat-1! This is bad. By the time you see the cube, you're already fully inside of it.")
        loggr.addToTextlog("You've had sunburns before, but this is a whole other level.")
        loggr.addToTextlog("The world slowly fades away.")
        info.changeLifeBy(0 - info.life())
    } else if (roll >= 10) {
        loggr.addToTextlog("Your roll was high enough to help you dodge the cube.")
        loggr.addToTextlog("Phew! That was a close one!")
    } else {
        loggr.addToTextlog("That roll was too low to escape unharmed.")
        loggr.addToTextlog("You don't see the cube in time and it slowly starts absorbing your arm.")
        loggr.addToTextlog("The pain is intense, but you're able to pull away and run to freedom.")
        loggr.addToTextlog("Phew! That was a close one!")
    }
}
function rollOnButton (lo: number, hi: number) {
    while (!(controller.A.isPressed())) {
        pause(25)
    }
    roll = randint(lo, hi)
    loggr.addToTextlog(loggr.multiTextForLog("You roll " + roll + "!"))
    return roll
}
info.onLifeZero(function () {
    game.over(false)
})
function enounter2 () {
    loggr.addImageToTextLog(img`
        . . . . . c c c c c c c . . . .
        . . . . c 6 7 7 7 7 7 6 c . . .
        . . . c 7 c 6 6 6 6 c 7 6 c . .
        . . c 6 7 6 f 6 6 f 6 7 7 c . .
        . . c 7 7 7 7 7 7 7 7 7 7 c . .
        . . f 7 8 1 f f 1 6 7 7 7 f . .
        . . f 6 f 1 f f 1 f 7 7 7 f . .
        . . . f f 2 2 2 2 f 7 7 6 f . .
        . . c c f 2 2 2 2 7 7 6 f c . .
        . c 7 7 7 7 7 7 7 7 c c 7 7 c .
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . .
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . .
        . f 6 1 1 1 1 1 6 6 6 6 c . . .
        . . f f c c c c c c c c . . . .
        `)
    loggr.addToTextlog("A snake slithers into your path")
}
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