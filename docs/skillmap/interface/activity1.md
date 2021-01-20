# Get to Know MakeCode Arcade

### @explicitHints true

## Introduction @unplugged

![Psyched Monkey](/static/skillmaps/interface/interface/monkey.png "Psyched Monkey is Ready!" )

*Are you ready to start coding your own games?* 

Complete this deck to learn how to:
- follow tutorial prompts
- find blocks in the toolbox
- build code in the workspace
- run your game on the built-in simulator 

Before you know it, you'll have an arcade game of your very own!

## Following Tutorials

**⭐Welcome⭐**

You've just figured out the most important part of following a tutorial — reading instructions!

This box is where you'll find information for each step. If you don't find 
all of the info you need, 
click on the lightbulb to the right for an extra hint.

When you're ready to move to the next step, click the [ > ] arrow to continue.


>>*Tip: If the instructions block too much of the workspace,
click the* <br />
**[^ Less...]** <br />
*button below to close them up.*

#### ~ tutorialhint 
```
**You found the hints!**
```

## Using the workspace

Now let's talk about your [__*workspace*__](#workIt "The area where you build code").

Your workspace is the area below the instructions where you'll connect blocks to build your program. 
Not all blocks will connect with one another, but we'll talk more about that later.
<hr/>

**Try:** Click inside the text area of the ``||game:splash "___"||`` block 
and change the current sentence to something a little more exciting.

<hr/>

>>*Tip: Did you notice that the first use of the word __workspace__ had a special look? 
From time to time, we'll enhance important words. Roll your mouse over them to see a definition.*

#### ~ tutorialhint 
```blocks
game.splash("I like bananas!")
```

```template
game.splash("These blocks are in your workspace!")

```

## Meet the Blocks  @unplugged

Blocks can be dragged out from the toolbox, connected, duplicated, and deleted.

Keep going to learn more about blocks.

![Block Animation](/static/skillmaps/interface/interface/use_blocks.gif "Blocks appear, duplicate, and delete." )



## Your Toolbox

The blocks you need won't always be in the workspace when you start. 

In the instructions, block descriptions will often be highlighted 
in the same color as the category where they live. As an example, we might use the shorthand ``||game:splash "___"||`` when 
we want you to find this:
```block
game.splash(" ")
```

<hr/>

**Try:** Let's see how this works. Can you find the ``||scene:set background color to [ ]||`` block and add it into the ``||loops:on start||`` block?

#### ~ tutorialhint 
```blocks
scene.setBackgroundColor(0)
game.splash("My monkey is better than yours")
```

## The Exception

Every rule has an exception, so let's look at a couple of blocks 
that don't share the same color as the category where they live.

The ``||variables:set my sprite to [ ]||`` and ``||variables:set my projectile to [ ]||`` blocks
are both red, but they live inside the ``||sprites:Sprites||`` category.

<hr/>

**Try:** Bring a ``||variables:set [my sprite] to [ ] of kind [player]||`` into the ``||loops:on start||`` block and 
play around with it until your [__*sprite*__](#sprote "A 2-D image that moves on the screen") shows on the screen.

>>*Tip: Drag the ``||game:splash "___"||`` out of the ``||loops:on start||`` block
and drop it back into the toolbox to delete it so your sprite will be revealed!

#### ~ tutorialhint
```blocks
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
scene.setBackgroundColor(5)
```


## Container Blocks

Now let's look at the different types of blocks and how to use them. 

First, there are [__*container blocks*__](#blockIt "Blocks that hold other blocks"). 
Container blocks have an edge at both the the top and bottom with an open space
in the middle that allows other blocks to snap inside. Container blocks control 
*when* the code inside runs. Here is an example:

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
```
<hr/>
**Try:** Find an ``||controller:on [A] button pressed ||`` container 
block and drag it into the workspace. You will add to it in the next step.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
})
```

## Standard Blocks

```ghost
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```


Next, there are [__*standard blocks*__](#sBlockIt "Single line blocks that make up the majority of most programs"). 
Standard blocks are single-line blocks with notches at the top and bottom that
allow them to click-in between other pieces. These blocks run in order from top 
to bottom within the container that they're placed.

Here is an example of a standard block:

```block
let mySprite: Sprite = null;
mySprite.startEffect(effects.spray)
```

<hr/>
**Try:** Find a ``||sprites:[mySprite] start [spray] effect ||``  
block and drag it into ``||controller:on [A] button pressed ||``, then choose your own effect!

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti)
})
```



## Argument Blocks

Finally, we have [__*argument blocks*__](#aBlockIt "special pieces that add information to other blocks"). 
Argument blocks are special pieces that add information to other
blocks. Sometimes they're pointy, sometimes they're rounded,
but they always need another block to snap into. Argument blocks look something like this:

![Argument Blocks](/static/skillmaps/interface/interface/parameter-blocks.png "This is what the shape of an argument block looks like" )

<hr/>
**Try:** Snap a ``||sprites:[mySprite] say [" "] ||`` block into the 
``||controller:on [A] button pressed ||`` container, <br/>
then find the ``||game: ask for number [" "] ||`` argument to pop inside.

<hr/>

>>*Tip: Parameter blocks have different shapes 
depending on what kind of information they add. Each parameter will only
fit in certain types of spaces. 

#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say(game.askForNumber(""))
})
```

## Putting it Together

Now take a look at all of the blocks provided here in the categories
and add some more to your project.  It's okay if you don't know what they all do.
Play around with them and see how they affect your game.
<hr/>

>>*Tip: You can test your game whenever you want using the simulator
to the left!  Use the refresh button (🔄) to reload it, and play your
game using the buttons you've programmed!



## Conclusion @unplugged

🎈 Congratulations 🎈 

You've learned everything you need to know to graduate to a new skill deck.

Now you can move on to the next deck and learn even more tricks for
creating games with MakeCode Arcade!
