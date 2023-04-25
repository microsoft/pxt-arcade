# The Shortest Story
### @explicitHints true


## {Introduction @showdialog}

Let's use what we've learned to make a short story to share with family and friends.

![Here's the story](/static/skillmap/story/story4.gif "Example of a page in our story." )


## {Step 2}

Before you start this lesson, you're going to need a story to tell.

You can either write a story of your own or use this one:

[**_Click here to copy lines from our story._**](#doc:/skillmap/story/story-example "Copy lines from our story here.")





## {Step 3}


Do you have your story?

**Design your first page!**  <br/>
📚 📖 📚

---

- :tree:  From ``||scene:Scene||``, snap
```block
scene.setBackgroundImage(img`.`)
```
into **the empty**<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.


- :paint brush:  **Click the empty image box** to draw a the first picture for your story.

💡 _Don't have a story in mind? You can use one of our backgrounds._


#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(img`
9 9 9 9
9 9 9 9
7 7 7 7
`)
```




## {Step 4}

**Take a look at the game screen.**

- :binoculars: How does your background look? Where do you plan to add the text? Top? Middle? Bottom?




## {Step 5}

**✨ Great ✨**

Give the reader a chance to enjoy your art before you cover it with text.

- :redo:  From ``||loops: Loops||``, drag
```block
pause(1000)
```
it into **the end** of the <br/>
``||loops(noclick):on start||``<br/>
container that's already in the workspace.


- :mouse pointer:  This pause block will stop the program for 1 second (1000ms) before moving to the next line. If you want more time, you can change it to a larger number.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
// @highlight
pause(1000)

```

## {Step 6}

Add  your first page of text.

---


- :circle:  From ``||game:Game||``, drag
```block
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```
into **the end** of the <br/>
``||loops(noclick):on start||``<br/>
container that's already in the workspace.


- :mouse pointer: Change the text to whatever works as the first line of your story. You can also change the location of your text from ``||game(noclick):bottom||`` to another area of the screen.


💡 _Did you find a different way to add text in another level that you like better? Feel free to use that instead!_




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
//@highlight
game.showLongText("Once upon a time...", DialogLayout.Bottom)
```


## {Step 7}

**Make another page!**

Add another set of blocks with a new picture and a new line from your story.

---

- :mouse pointer:  Keep adding sets of blocks until you get to the end.
```block
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Next door...", DialogLayout.Bottom)
```

💡 _You don't always need to add the blocks in the same order.  Want to show some pictures without text? Want to change the text without changing the picture?  Play around and see what works for you!_


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Once upon a time, there was a lizard who lived beneath a toadstool.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Next door, there lived a butterfly on a daisy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Every day, the butterfly would sweep past and taunt the lizard from the sky.", DialogLayout.Bottom)
    game.showLongText("\"Ha ha!\" He would say. \"Your house doesn't smell as good as mine.\"", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(2000)
    game.showLongText("She tried and tried, but she just couldn't get comfortable.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("No matter what she did, the fragrant flower didn't make her happy.", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    pause(1000)
    game.showLongText("The next day, the lizard moved back to her toadstool and lived happily ever after.", DialogLayout.Bottom)
    })
```


## {Step 8}

**Look at what you have.**

- :binoculars: Don't forget to click through your story as you build to make sure the timing feels right.




## {Step 9}

**Need more action?**<br/>
🎥 🎥 🎥

You can use what you learned in the last level to add sprites to your story.

---

- :paper plane:  From ``||sprites:Sprites||``, grab
```block
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```
and snap it in to the <br/>
``||loops(noclick):on start||``<br/>
container wherever it works best for your story.


- :mouse pointer: Choose your sprite, then check out the  ``||sprites:Sprites||`` category to find other blocks that
let you perfectly position your sprite or add movement.




#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
    //@highlight
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
    //@highlight
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)

```




## {Step 10}

**👏 Happily ever after 👏**

Want to do something special to end your story?

---

- :tree:  From ``||scene:Scene||``, grab
```block
effects.confetti.startScreenEffect()
```
and snap it into **the end** of the <br/>
``||loops(noclick):on start||``<br/>
container that's already in the workspace.


- :mouse pointer:  Change **confetti** to whatever works best for your story!


#### ~ tutorialhint

```blocks
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    //@highlight
    effects.bubbles.startScreenEffect()

```


## {Step 10}

**🎹 Sound Effects 🎹**

Does your story need a soundtrack?

---

- :mouse pointer:  From ``||music:Music||``, grab any of the <br/>
``||music: play [ ]||`` blocks <br/>
and add them to your project.


- :mouse pointer:  Experiment with the sounds and where to put them to create the biggest impact.

#### ~ tutorialhint

```blocks
    //@highlight
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
   let mySprite = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `, SpriteKind.Player)
mySprite.setPosition(80, 90)
    pause(1000)
    game.showLongText("...happily ever after", DialogLayout.Bottom)
    effects.bubbles.startScreenEffect()
})
```


## {Finale}

**🤣 Congrats 🤣**

You've written a story that you can be proud of!


~hint How do I share my story?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/assets/share.gif )

hint~


When you're done reading your story, click **Done** to return to the main page where you can share with everyone you know!

```blockconfig.global
pause(1000)
let mySprite: Sprite = null
carnival.addLabelTo(" ", carnival.Areas.Top)
game.showLongText("Once upon a time...", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
mySprite.setFlag(SpriteFlag.StayInScreen, true)

```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
arcade-storytelling=github:microsoft/arcade-storytelling/
arcade-animations=github:microsoft/arcade-character-animations
short-story-assets-2=github:kiki-lee/short-story-assets-2#v0.0.5
short-story-assets-1=github:kiki-lee/short-story-assets-1#v0.0.6
```

```ghost
music.stopAllSounds()
scene.setBackgroundColor(1)
pauseUntil(() => controller.anyButton.isPressed())
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Once upon a time", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
pause(1000)
game.showLongText("Finally, one day, the lizard decided to find a daisy of her own.", DialogLayout.Bottom)
scene.setBackgroundImage(img`
9 9 9 9 
9 9 9 9 
7 7 7 7 
`)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSong(hexhex`00780004080200`), music.PlaybackMode.InBackground)
let mySprite = sprites.create(img`.`, SpriteKind.Player)
story.printText(":)", 0, 0)
story.startCutscene(function () {
    story.spriteSayText(mySprite, ":)")
})
story.setPagePauseLength(1000, 1000)
story.printCharacterText("")
story.setSoundEnabled(false)
mySprite.sayText(" ")
game.splash("")
game.showLongText("", DialogLayout.Bottom)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Top)
mySprite.setPosition(0, 0)
story.cancelCurrentCutscene()
story.cancelSpriteMovement(mySprite)
story.spriteMoveToLocation(mySprite, 0, 0, 100)
music.setVolume(20)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
    animation.runImageAnimation(
mySprite,
[img`.`],
100,
true
)

characterAnimations.loopFrames(
mySprite,
[img`.`],
500,
characterAnimations.rule(Predicate.NotMoving)
)

mySprite.startEffect(effects.spray)
mySprite.setImage(img`.`)
scene.cameraShake(4, 500)
mySprite.setVelocity(-20, 0)
mySprite.x = 0
mySprite.setFlag(SpriteFlag.StayInScreen, false)
```


