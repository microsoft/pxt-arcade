# Get to Know MakeCode Arcade


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

```


```template
game.splash("These blocks are in your workspace!")

```

### @explicitHints true

## {Introduction @unplugged}

![Psyched Monkey](/static/skillmap/interface/monkey.png "Psyched Monkey is Ready!" )

**Are you ready to start coding your own games?**

Complete this tutorial to learn how to:
- follow tutorial prompts
- find blocks in the toolbox
- build code in the workspace
- run your project on the built-in game screen

Before you know it, you'll have an arcade game of your very own!

## {step 1}

**⭐Welcome⭐**

You've just discovered the most important part of following a tutorial — reading instructions!

Sometimes the instructions are long and you need to scroll to read them all. 

_💡 When you're ready to move to the next step, click **[Next]** to continue._



## {step 2}

This box is where you'll find information for each step.

If you don't find all of the info you need,
click the button with the lightbulb for an extra hint.


#### ~ tutorialhint
```
**You found the hints!**
```


## {Using the workspace}

Your [__*workspace*__](#workIt "The area where you build code") 
is the area where you'll connect code blocks to build your program.

---

- :mouse pointer:  Click in the ``||game:splash " "||`` block that's already in the workspace
and change the pre-loaded sentence to something more exciting.

_💡 Did you notice that the word __workspace__ in the first sentence had
a special look? Hover your mouse over it to see a definition._

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

**Blocks you need won't always be in the workspace to start.**

In the instructions, descriptions of the block you need will
often be highlighted in the same color as the toolbox
category where they live.

**For example:** We might use ``||game:splash " "||`` when
we want you to find this:

```block
game.splash(" ")
```

This block adds a [__*splash screen*__](#splasht "A full-screen message that shows while a program or level is loading") to your project.


## {Your Toolbox 2}

**Let's see how this works**

- :tree:  Find the
``||scene:set background color to [ ]||`` block and snap it at the top of
the **on start** container already in the workspace.

- :paint brush:  Click the grey box in the new block to set the background to your favorite color.

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(7)
game.splash("My monkey is better than yours")
```



## {The Exception}

Every rule has an exception, so let's look at a block
that doesn't match its category.

The ``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` block
is red, but it lives in the ``||sprites:Sprites||`` category.

In this case, you can look at the bubbles to the left of the instructions for the icon where you can find the block.

- :paper plane:  Snap ``||variables(sprites):set [my sprite] to sprite [ ] of kind [Player]||`` into the
end of the **on start** container.

- :paint brush:  Click the grey box in the new block and draw a main player [__*sprite*__](#sprote "A 2-D image that moves on the screen")
 or toggle to the **Gallery** to pick one of ours.


#### ~ tutorialhint

![Open image editor](/static/skillmap/misc/open-image-editor-small.gif "How to open the image editor." )

---



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


## {Container Blocks}

**Now let's look at different types of blocks and how to use them.**

This is a [__*container block*__](#blockIt "Block that holds other blocks").
Container blocks have a flat edge at both the the top and bottom with an open space
in the middle that allows other blocks to snap inside. Container blocks control
*when* the code inside runs. Here is an example:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```
---

- :game:   Find an ``||controller:on [A] button pressed ||`` container
block and drag it into the workspace. You will add to it in the next step.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```

## {Standard Blocks}

Next, there are [__*standard blocks*__](#sBlockIt "Single line blocks that make up the majority of most programs").
Standard blocks are single-line blocks with notches at the top and bottom that
allow them to click-in between other pieces. These blocks run in order from top
to bottom within the container that they're placed.

Here is an example of a standard block:

```block
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```

---

- :paper plane:   Find a ``||sprites:[mySprite] start [spray] effect ⊕||``
block and snap it into the  ``||controller:on [A] button pressed||``
container...then choose your own effect!

- :mouse pointer:   Click the **⊕** to the right of the new block to pop open an extra
[__*argument*__](#iArgue "Additional piece of information the block uses").

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, 500)
})
```



## {Value Blocks}

Finally, we have [__*value blocks*__](#aBlockIt "special pieces that provide values for other blocks").
Value blocks are special pieces that add information to other
blocks. Sometimes they're pointy, sometimes they're rounded,
but they always need another block to snap into. Value blocks look something like this:

![Value Blocks](/static/skillmap/interface/parameter-blocks.png "This is what the shape of an value block looks like" )

---

- :calculator:   From the ``||math:Math||`` category, grab a ``||math: pick random [0] to [10]||``
value block and snap it into the number field on the effect block.

- :mouse pointer:   Change the random range to pick between **100** and **600**.

---

_💡 Value blocks have different shapes
depending on what kind of information they add. Each value will only
fit in certain types of spaces._

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, randint(100,600))
}
```



## {Play Time}

**🕹️ Time to play 🕹️**

Check the Game Window.


Click the **Ⓐ** button to clear your splash screen message.
Click it again to launch your effects!





## {Putting it Together}

**🎨 Now get creative 🎨**

Feel free to take a look at the extra blocks we've added into the toolbox.

It's okay if you don't know what they all do.
Play around with them and see how they affect your game!

---

**Tip:** Test your game after every couple of steps to make sure
it's behaving the way you want it to!



## {Conclusion}

**🎈 Congratulations 🎈**

You've learned everything you need to know to graduate to a new tutorial.

Now you can click **Done** to continue on and create some games with MakeCode Arcade!

