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
mySprite.setPosition(70, 80)
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

### @explicitHints true

## Introduction @unplugged

![Psyched Monkey](/static/skillmap/interface/monkey.png "Psyched Monkey is Ready!" )

**Are you ready to start coding your own games?**

Complete this tutorial to learn how to:
- follow tutorial prompts
- find blocks in the toolbox
- build code in the workspace
- run your game on the built-in simulator 

Before you know it, you'll have an arcade game of your very own!

## step 1 

**⭐Welcome⭐**

You've just discovered the most important part of following a tutorial — reading instructions!

If you can't see all of the instructions, click **[v More...]** to expand the box.

---

When you're ready to move to the next step, click **[ >  Next]** to continue.  


## step 2

This box is where you'll find information for each step. 

If you don't find all of the info you need, 
click the lightbulb to the right for an extra hint.


#### ~ tutorialhint 
```
**You found the hints!**
```


## Using the workspace

Now let's talk about your [__*workspace*__](#workIt "The area where you build code").

Your workspace is the area below the instructions where you'll connect blocks to build your program. 
Not all blocks will connect with one another, but we'll talk more about that later.

---

🔲 Click inside the text area of the ``||game:splash "___"||`` block 
and change the current sentence to something a little more exciting.

---

**Tip:** Did you notice that the first use of the word __workspace__ had a special look? 
From time to time, we'll enhance important words. Roll your mouse over them to see a definition.

#### ~ tutorialhint 
```blocks
game.splash("I like bananas!")
```

```template
game.splash("These blocks are in your workspace!")

```

## Meet the Blocks  @unplugged

Blocks can be dragged out from the  [__*toolbox*__](#tools "The strip to the left of your workspace that lists block categories."), 

connected, duplicated, and deleted.

Keep going to learn more about blocks.

![Block Animation](/static/skillmap/interface/use_blocks.gif "Blocks appear, duplicate, and delete." )



## Your Toolbox

**Blocks you need won't always be in the workspace to start.**

In the instructions, block descriptions for the block you need will 
often be highlighted in the same color as the toolbox 
category where they live. 

**For example:** We might use ``||game:splash "___"||`` when 
we want you to find this:

```block
game.splash(" ")
```



## Your Toolbox 2



**Let's see how this works**

🔲 Find the 
``||scene:set background color to [ ]||`` block and snap it at the top of 
the **on start** container already in the workspace. 

#### ~ tutorialhint 
```blocks
scene.setBackgroundColor(0)
game.splash("My monkey is better than yours")
```



## The Exception

Every rule has an exception, so let's look at one of the blocks
that doesn't share the same color as the category where it lives.

The ``||variables:set [mySprite] to sprite [ ] of kind [Player]||`` block
is red, but it lives inside the ``||sprites:Sprites||`` category.

---

<!-- **Tip:** If you can't find the block you're looking for, try -->


🔲 Snap ``||variables:set [my sprite] to sprite [ ] of kind [player]||`` into the
end of the **on start** container and 
play around with it until a [__*sprite*__](#sprote "A 2-D image that moves on the screen") shows on the screen.

---

**Tip:** Drag ``||game:splash "___"||`` out of the ``||loops:on start||`` container
and drop it back into the toolbox to delete it so your sprite will be revealed!

#### ~ tutorialhint

![Open image editor](/static/skillmap/misc/open-image-editor-small.gif "How to open the image editor." )

---



```blocks
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
```


## Container Blocks

**Now let's look at different types of blocks and how to use them.** 

First, there are [__*container blocks*__](#blockIt "Blocks that hold other blocks"). 
Container blocks have an edge at both the the top and bottom with an open space
in the middle that allows other blocks to snap inside. Container blocks control 
*when* the code inside runs. Here is an example:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```
---

🔲  Find an ``||controller:on [A] button pressed ||`` container 
block and drag it into the workspace. You will add to it in the next step.  

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```

## Standard Blocks

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

🔲  Find a ``||sprites:[mySprite] start [spray] effect ||``  
block and snap it into the  **on A button pressed** container...then 
choose your own effect!

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti)
})
```



## Value Blocks

Finally, we have [__*value blocks*__](#aBlockIt "special pieces that provide values for other blocks"). 
Value blocks are special pieces that add information to other
blocks. Sometimes they're pointy, sometimes they're rounded,
but they always need another block to snap into. Value blocks look something like this:

![Value Blocks](/static/skillmap/interface/parameter-blocks.png "This is what the shape of an value block looks like" )

---

🔲  Snap a ``||sprites:[mySprite] say [":)"] ||`` block into the end of the
**on A button pressed** container.

🔲  Find the ``||game: ask for number [" "] ||`` value block and pop it inside to replace **":)"**.

---

**Tip:** Value blocks have different shapes 
depending on what kind of information they add. Each value will only
fit in certain types of spaces. 

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say(game.askForNumber(""))
})
```

## Putting it Together

🎨 Now get creative 🎨

Feel free to take a look at the extra blocks we've added into the toolbox. 

It's okay if you don't know what they all do.
Play around with them and see how they affect your game!

---

**Tip:** You can test your game whenever you want using the simulator
to the left!  Use the refresh button (🔄) to reload it, and play your
game using the buttons you've programmed!  



## Conclusion 

🎈 Congratulations 🎈 

You've learned everything you need to know to graduate to a new tutorial.

Now you can continue on and learn even more tricks for
creating games with MakeCode Arcade!  
