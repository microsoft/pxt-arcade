# Bubble Stacking with Joy
### @explicitHints true


## Intro @showdialog

Are you ready to try something new with Joy and the rest of the emotions from <br/>
Disney and Pixar's Inside Out 2? Click **Next** to make your own game!


![Play Bubble Stacking with Joy](/static/tutorials/bubbles/io2_title.jpg "How many memories can you store?")


![ ](https://code.org/api/hour/begin_bubble_popping.png) 



## {2. Your First Block}

**Ready to start coding?**

Let's set the scene by adding "core memories" to the game window.


---


- :dot circle: Open the ``||bubble: Bubble||`` category **in the toolbox** and grab <br/>
``||bubble:create board||``<br/>
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.

---


~hint What does that mean? 🤷🏽

---

When giving instructions, we'll color some text to give you a better idea of what you are looking for.

For example, when we suggest the <br/>
``||bubble:create board||``<br/>
block, we are pointing you toward <br/>

```block
bubble.createBoard()
```

hint~



#### ~ tutorialhint

```blocks
//@highlight
bubble.createBoard()
```




## {3. Check Your Screen!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should see two rows of memory bubbles lining the top of the game window. 

![The game window is in the lower left corner](/static/tutorials/bubbles/game.png "Your game will automatically load in this window after every step.")



## {4. Add Bubble}

**Let's add a memory bubble to aim.**

---


- :dot circle: Open the ``||bubble: Bubble||`` category **in the toolbox** and grab <br/>
``||bubble:load new bubble||``<br/>
then snap it inside at **the end of** the <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.

---

~hint ⁉️ No bubbles showing?

---

This game relies on setting the scene before you add your main bubble.  If you don't see anything loaded in your game window, you may have instructions in the wrong order.  

Check to see that your code looks like this:

```blocks
bubble.createBoard()
//@highlight
bubble.load_bubble()
```

hint~


#### ~ tutorialhint

```blocks
bubble.createBoard()
//@highlight
bubble.load_bubble()
```



## {5. Gaming with Joy}

**Add your emotion!**

To do this, we'll need to add a **sprite** to the bottom of the screen.

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our characters will be sprites, too.

hint~

- :paper plane: Open the ``||sprites:Sprites||`` category and drag <br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
into the **end of** the <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.

💡 _To change sprites, click the character in the box and look under the **Gallery** tab._


#### ~ tutorialhint

```blocks
bubble.createBoard()
bubble.load_bubble()
//@highlight
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
```



## {6. Check Your Game!}


- :binoculars: Take a look at the game window again.

Your sprite should be in the middle of the screen.  

In the next step, we'll move it to a location that makes it look like it's aiming the bubble.





## {7. Gaming with Joy}

**Move your sprite.**

Let's add a block to make sure that the top of the sprite is right below the memory bubble. 


- :paper plane: Open the ``||sprites:Sprites||`` category and drag <br/>
``||sprites:set [mySprite] [top] to [102]||``<br/>
into the **end of** the <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.

---

~hint Why 102? 🤷🏽‍♀️

---

The coordinates of our screen go from **0** at the top to **120** at the very bottom. 

Since we want just a little bit of our character peeking up from below, we'll set the top of our character to **102** so it rests just below the bubble that we will be aiming. 


hint~


#### ~ tutorialhint

```blocks
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
//@highlight
mySprite.top = 102

```




## {8. Aim the Bubble Right}

**Now that everything is on screen, it's time to aim your shot.**

- :game: Open the ``||controller:Controller||`` category and drag the<br/>
``||controller:on [right] button [repeat]||``<br/>
bundle into **an empty area** of the workspace. <br/>

---

You should be able to aim your bubble further to the right. 


#### ~ tutorialhint

```blocks

//@highlight
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
```



## {9. Aim the Bubble Left}

- :game: Open the ``||controller:Controller||`` category and drag another<br/>
``||controller:on [right] button [repeat]||``<br/>
bundle into **an empty area** of the workspace. <br/>


- :mouse pointer: Change both **right** options to say **left**. <br/>


~hint There's another way 💡

---

Did you know that you can also right-click to duplicate code that's already in the workspace? Try it with the<br/>
``||controller:on [right] button [repeat]||``<br/>
container and make your edits to turn it into a <br/>
``||controller:on [left] button [repeat]||``<br/>
container with a <br/>
``||bubble: change angle [left]||``<br/>
block inside. 


hint~


You should now be able to aim your bubble further to the left. 


#### ~ tutorialhint

```blocks

//@highlight
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
```



## {10. Time to Toss}

**Time to toss!**

- :game: Open the ``||controller:Controller||`` category and drag the<br/>
``||controller:on [A] button [pressed]||``<br/>
bundle into **an empty area** of the workspace. <br/>


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
})
```

#### ~ tutorialhint

```blocks

//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
})
```


## {11. Test!}


- :binoculars: Test your game.

You should be able to toss a bubble in the direction it's aimed when you press either the (A) button or the **space bar**.

Give it a try!

💡 _Notice that your bubble doesn't properly stick where it hits, yet. There's also no option to throw another bubble. We'll fix both of those things in the steps that follow._


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
})
```



## {12. Connecting Bubbles}

**Time to make the memories stick!**

We want the bubbles to stick whenever they connect to the top wall or to another bubble.

---

- :tree: Open the ``||scene: Scene||`` category and grab the<br/>
``||scene:on [sprite] of kind [Bubble] ...||``<br/>
bundle and drop it into **an empty** area of the workspace. <br/>


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
})
```

#### ~ tutorialhint

```blocks
//@highlight
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
```




## {13. Check Your Screen!}


- :binoculars: Take a shot in the game window!

When your bubble hits a grouping at the top, it should stick! If that grouping has three or more of the same color, you should also get points as they pop.






## {14. Need a Refill?}

**Let's load a new bubble every time we toss the old one.**

---

- :dot circle: Open the ``||bubble: Bubble||`` category **in the toolbox** and grab <br/>
``||bubble:load new bubble||``<br/>
then snap it inside at **the end of** the <br/>
``||controller(noclick):on [A] button [pressed]||``<br/>
container already in the workspace.



```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
```



#### ~ tutorialhint

```blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
        //@highlight
    bubble.load_bubble()
})
```






## {15. Test It}


- :binoculars: **Time to play your finished game!**

Aim your bubble using the arrow keys, then toss with the (A) button or **space bar**.

Can you clear the board fast enough to get a bonus?

~hint Want to add more? 🫧

---

Feel like going above and beyond? There are enough blocks in the toolbox to make these customizations:

- Add music in the background
- Add a background color to the board
- Win the game by reaching a score instead of clearing the board
- Change your character with each new ball

hint~


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
```




## {Finale}

**🥳 Great Job 🥳**

You have finished the tutorial!

When you're ready, click **Done** to share your game with family and friends!





```blockconfig.global

let characters: Image[] = []
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
mySprite.top = 102
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.setBackgroundColor(14)

music.play(music.createSong(hex`0096000408080106001c00010a006400f401640000040000000000000000000000000000000002d80000000200011608000a00011110001200011618001a00011120002200011628002a00011130003200011638003a00011140004200011848004a00011150005200011858005a00011160006200011868006a00011170007200011878007a00011180008200011288008a00010d90009200011298009a00010da000a2000112a800aa00010db000b2000112b800ba00010dc000c2000118c400c6000118cc00ce000118d000d2000118d800da00011ddc00de00011de400e600011de800ea00011df000f2000120f400f6000120f800fa000120fc00fe000120`), music.PlaybackMode.LoopingInBackground)
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
mySprite.setImage(io2_images.fear)
characters = [io2_images.joy, io2_images.anger, io2_images.envy, io2_images.fear]
mySprite.setImage(characters[randint(0, characters.length - 1)])

```



```ghost

let characters: Image[] = []
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
info.onScore(100, function () {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.setGameOverMessage(true, "GAME OVER!")
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
scene.setBackgroundColor(14)
music.play(music.createSong(hex`0096000408080106001c00010a006400f401640000040000000000000000000000000000000002d80000000200011608000a00011110001200011618001a00011120002200011628002a00011130003200011638003a00011140004200011848004a00011150005200011858005a00011160006200011868006a00011170007200011878007a00011180008200011288008a00010d90009200011298009a00010da000a2000112a800aa00010db000b2000112b800ba00010dc000c2000118c400c6000118cc00ce000118d000d2000118d800da00011ddc00de00011de400e600011de800ea00011df000f2000120f400f6000120f800fa000120fc00fe000120`), music.PlaybackMode.LoopingInBackground)
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
mySprite.top = 102
mySprite.startEffect(effects.fountain)
bubble.createBoard()
bubble.load_bubble()
mySprite.setImage(io2_images.fear)
characters = [io2_images.joy, io2_images.anger, io2_images.envy, io2_images.fear]
mySprite.setImage(characters[randint(0, characters.length - 1)])

```



```package
multiplayer
io2_images=github:kiki-lee/io2_images#v0.0.1
bubble=github:kiki-lee/bubble_ext#v0.1.0
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#E40C0C",
        "#FF8FDB",
        "#FFF700",
        "#3AF2B5",
        "#0B9EF9",
        "#56E3F5",
        "#C4C3F4",
        "#E0E6E6",
        "#729280",
        "#A4839F",
        "#5C406c",
        "#f9cb84",
        "#8A0A0A",
        "#000000"
    ]
}
```

