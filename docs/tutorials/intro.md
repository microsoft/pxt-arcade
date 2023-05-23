# Intro to MakeCode Arcade
### @explicitHints true

## {Introduction @unplugged}

![Psyched Monkey](/static/skillmap/interface/monkey.png "Psyched Monkey is Ready!" )

**Are you ready to start coding your own games?**

Complete this tutorial to find out how to:
- follow tutorial prompts
- find blocks in the toolbox
- build code in the workspace
- run your project on the built-in game screen

Before you know it, you'll have an arcade game of your very own!


## {step 1}

**⭐Welcome⭐**

You've just discovered the most important part of following a tutorial — **reading instructions**!

- :info: Sometimes you'll need to scroll to read all of the instructions.

- :arrow right: When you're ready to move to the next step, click **Next** to continue.



## {step 2}

We like to hide extra info in "clue boxes" to shorten the instructions.

- :mouse pointer: Click the clue box below to see what's inside.

~hint Click here to see a clue 🕵🏽

---

**Congrats!**

You found a clue!

hint~


Sometimes, we like to show you recommended blocks for a step.

- :mouse pointer: Click the round lightbulb button below to see an example.




#### ~ tutorialhint
```blocks
game.splash("You found me!")
```



## {Using the workspace}

Your [__*workspace*__](#workIt "The area where you build code")
is the area where you'll connect code blocks to build your program.

---

- :mouse pointer:  Click inside the ``||game(noclick):splash " "||`` block that's already in the workspace
and **change the sentence** to something more exciting.

~hint What's a workspace? 🕵🏽

---

![The Workspace](/static/tutorials/interface/workspace.png " " )

The **workspace** is the area to the right of the toolbox where you build your program.

Only blocks connected in the workspace will be run by the computer.

hint~


#### ~ tutorialhint
```blocks
game.splash("I like bananas!")
```


## {Meet the Blocks  @unplugged}

Blocks can be dragged out from the  [__*toolbox*__](#tools "The strip to the left of your workspace that lists block categories."),

connected, duplicated, and deleted.

Keep going to learn more about blocks.

![Block Animation](/static/skillmap/interface/use_blocks.gif "Blocks appear, duplicate, and delete." )



## {Your Toolbox}

**Blocks don't always start in the workspace.**

When you need to add a block, we will either suggest it using an image like this:
```block
game.splash(" ")
```
or with highlighted text, like this:<br/>
 ``||game:splash " "||``<br/>



~hint Wanna see something cool? 🕵🏽

---

When you need to find a block in the toolbox and we use the highlighted instruction, you can click the block and it will automatically open the toolbox category you need.

Try it now by clicking the block below!<br/>

``||game:splash " "||``<br/>

hint~



## {Your Toolbox 2}

**Let's see how this works**

- :tree:  Find the<br/>
``||scene:set background color to [ ]||``<br/>
block and snap it **at the top of**
the<br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.

- :paint brush:  Click the empty square to set the background to your favorite color.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {The Exception}

If you can't find the block you need, click the highlighted text and the correct category will open for you.

- :paper plane:  Snap
<br/>``||variables(sprites):set [my sprite] to sprite [ ] of kind [Player]||``<br/>
into **the end** of the <br/>
``||loops(noclick):on start||`` container.


- :paint brush:  Click the empty box to draw a [__*sprite*__](#sprote "A 2-D image that moves on the screen")
 or switch to the **Gallery** to pick one of ours.


 ~hint What's a sprite? 🕵🏽

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(5)
game.splash("My monkey is better than yours")
let mySprite = sprites.create(img`
. . . . . f f f f f . . . . . .
. . . . f e e e e e f . . . . .
. . . f d d d d d d e f . . . .
. . f d f f d d f f d f f . . .
. c d d d e e d d d d e d f . .
. c d c d d d d c d d e f f . .
. c d d c c c c d d d e f f f f
. . c d d d d d d d e f f b d f
. . . c d d d d e e f f f d d f
. . . . f f f e e f e e e f f f
. . . . f e e e e e e e f f f .
. . . f e e e e e e f f f e f .
. . f f e e e e f f f f f e f .
. f b d f e e f b b f f f e f .
. f d d f f f f d d b f f f f .
. f f f f f f f f f f f f f . .
`, SpriteKind.Player)


```




## {Game Window}

Make sure to keep checking your [__*game window*__](#gamez "game simulator that shows the result of the code you have written") as you go.

- :binoculars: Take a look at the game window. <br/>
Do you see the sprite you chose?


![Look for the game window in the lower right](/static/skillmap/assets/game-window.png "Click the mini game window to pop open the bigger game window.")






## Container Blocks  @showdialog

This is a [__*container block*__](#blockIt "Block that holds other blocks").


Container blocks have a flat edge at the the top and bottom with an open space
in the middle where other blocks connect. Container blocks control when the code inside runs.

Here is an example:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
```

_(This block runs code when the A button is pressed.)_





## {Use a container block}

- :game:   Find the<br/>
``||controller:on [A] button pressed ||`` <br/>
container and drag it into **an empty area of** the workspace.



#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```



## Standard Blocks  @showdialog

Next, there are [__*standard blocks*__](#sBlockIt "Single line blocks that make up the majority of most programs").

Standard blocks are single-line blocks with notches at the top and bottom that
allow them to attatch to other pieces. These blocks run in order from top
to bottom in the container where they're placed.

Here is an example of a standard block:

```block
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```

_(This block sends water spraying from the center of your sprite.)_




## {Standard Blocks 2}

- :paper plane:   Find a <br/>
``||sprites:[mySprite] start [spray] effect ⊕||``<br/>
block and snap it into the  <br/>
``||controller(noclick):on [A] button pressed||``<br/>
container...then choose your own effect!

- :mouse pointer:   Click the **+** to the right of the new block to pop open an
extra option.



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, 500)
})
```



## Value Blocks  @showdialog

Finally, we have [__*value blocks*__](#aBlockIt "special pieces that provide values for other blocks").
Value blocks are special pieces that add information to other
blocks. Sometimes they're pointy, sometimes they're rounded,
but they always need another block to snap into. Value blocks look something like this:

![Value Blocks](/static/skillmap/interface/parameter-blocks.png "This is what the shape of an value block looks like" )

_💡 Value blocks have different shapes
depending on what kind of information they add. Each value will only
fit in certain types of spaces._




## {Value Blocks 2}


- :calculator:   From the ``||math:Math||`` category, grab a <br/>
``||math: pick random [0] to [10]||``<br/>
value block and snap it in to replace **500**.

- :mouse pointer:   Change the random range to pick between **100** and **600**.



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
  mySprite.startEffect(effects.confetti, randint(100,600))
}
```






## {Play Time}

**🕹️ Time to play 🕹️**

- :binoculars: Take a look at the game window. <br/>

Click the **Ⓐ** button (or space bar) to clear your splash screen message.

Click **Ⓐ** over and over again to see your effects!





## {Putting it Together}

**🎨 Now get creative 🎨**

Take a look at all of the extra blocks we've added in the toolbox.

It's okay if you don't know what they all do.
Play around with them to see what happens!

---

_💡 Test your game after every couple of steps to make sure
it's behaving the way you want it to!_




## {Finale}

**🎈 Congratulations 🎈**

You've completed the **"Intro to MakeCode Arcade"** tutorial!

When you're ready, click **Done** to share your game with family and friends.




```ghost
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("The little unicorn walked into the meadow.", DialogLayout.Top)
    scene.cameraShake(4, 500)
})
scene.setBackgroundColor(9)
scene.setBackgroundImage()
mySprite.x += 0
effects.confetti.startScreenEffect()
effects.confetti.endScreenEffect()
mySprite.setPosition(70, randint(100, 600))
for (let index = 0; index < 4; index++) {
    controller.moveSprite(mySprite)
    music.setVolume(20)
    music.playMelody("- - - - - - - - ", 120)
}
game.onUpdateInterval(5000, function () {
    if (game.askForString("Continue?") == "Y" || game.askForString("Continue?") == "y") {
        mySprite.say(":)")
    }
    game.splash("")
})
music.setVolume(20)

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`into_forever_album_cover`)
    thisSong = music.createSong(assets.song`into_the_forever`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(thisSong, music.PlaybackMode.LoopingInBackground)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`perfect_society_album_cover`)
    thisSong = music.createSong(assets.song`perfectSociety`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`once_more_album_art`)
    thisSong = music.createSong(assets.song`once_more`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`i_am_groot_album_cover`)
    thisSong = music.createSong(assets.song`i_am_groot`)
})
let thisSong: music.Playable = null
scene.setBackgroundImage(assets.image`Zune`)

    if (thisSong) {
        music.play(thisSong, music.PlaybackMode.LoopingInBackground)
    }
```


```template
game.splash("These blocks are in your workspace!")

```