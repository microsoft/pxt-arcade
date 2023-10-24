# Get into the game
### @explicitHints true


## GET INTO THE GAME! @showdialog
**Backgrounds, Sprites, Movement, and Animation**
![Level 1 splash image](/static/skillmap/globetrotters/level1-splash.jpg)

Welcome to the 2D Pixelated World of the Harlem Globetrotters, where the magic of the basketball
court meets the excitement of game creation!
In this tutorial, we're going to take you on an adventure where you'll get to create your very own
sprites, design a cool background, and even teach your sprites to shoot three-pointers like the
Harlem Globetrotters!

If you've never coded before, don't you worry! We've got your back. Just follow our step-by-step tutorial, and by the end of it, you'll proudly say you've made your very **FIRST GAME!!!**

Are you ready to dribble into the world of fun and coding? Let's get started!



## {2. Get background block}

- :paper plane: From the ``||scene:Scene||`` category, grab
```block
scene.setBackgroundImage(img`.`)
```
and snap it into **the empty** ``||loops(noclick):on start||`` container already in the workspace.

🏀 🏀 🏀


#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundImage(img`.`)
```


## {3. Set the background image}

 Now, we need to add our **background**. 

 ___

- :mouse pointer: Cick the **empty gray box** inside the background block.

- :mouse pointer: Select the **Gallery**
![Toggle to Gallery](/static/skillmap/assets/gallery.png "Click the Gallery tab to choose a character")


- :paint brush: Choose the image called **audience** (it's the image without the hoop.) 
![Choose the audience image](/static/tutorials/globetrotters/audience.png "Choose the audience, then click Done.")

- :mouse pointer: Click the **Done** button.

*💡 If you hover your cursor over an image in the Gallery, the name will show up after a couple of seconds.*


#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundImage(globe_imgs.audience)
```


## {4. Opening greeting}

**Opening Scene:**

Now, it's time to create the **opening screen** of our project. 💫

These are the instructions that tell the player about the game.




## {5. Code the opening greeting}


- :paper plane: From the ``||game:Game||`` category, select
```block
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
```
and drag it into**the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


~hint About Game Text Blocks 📝

---

These blocks: 
```block
game.showLongText("")
```
create the text that will appear on the
opening screen.

Do you see the '\n' in the text? It will start a new line!

hint~


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
// @highlight
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
```


## {6. Add the scroller}

**Bring out the Scroller!**


- :paper plane: From ``||scroller:Scroller||`` drag
```block 
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections) 
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
// @highlight
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
```



## {7. Check your code now}

** CODE CHECK:** 

Let's make sure your code looks like this

---


```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
```


## {8. Bring in a sprite}


Now, you get to select your player **sprite**!

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our player character will be a sprite, too.

You create a sprite using a block like this:

```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```

hint~

---


- :paper plane: From ``||sprites:Sprites||``, drag
```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.

*💡 Make sure your block snaps together with the other blocks in the workspace.*


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```


## {9. Rename your player sprite}

**Rename the Variable:**

---

- :mouse pointer: Click ``||variables(noclick):mySprite||`` to open the dropdown.

- :mouse pointer: Select ``||variables(noclick):Rename variable||`` and name your
sprite after the Harlem Globetrotter you want to select.

_💡 Use the name of ONE of these players : **Torch**, **WHAM**, **TNT**, **Cheese**, **JET**, or **Hot Shot**._



  #### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hot_Shot = sprites.create(img`.`, SpriteKind.Player)
```


## {10. Pick the player image}

Now that our sprite has a **name**, we need to add the matching **image**.

---

- :mouse pointer: Click the empty gray image box, then select the **Gallery**.


- :paint brush: From the **Gallery**, choose the player you want to use. 

**The image that you choose should match your variable. For example, if you called your variable Hot_Shot, you should choose the image of `hot_shot`. **


_💡If you hover your cursor over the images, you can see the actual name of each player_


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
```




## {11. Position the player}

**Let's add gravity.**  

To keep the sprite running along the floor, set the sprite's acceleration to 300.

---

- :paper plane: From the ``||sprites:Sprites||`` category, drag
```block
let mySprite: Sprite = null
mySprite.ay = 300
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


- :mouse pointer: Click ``||variables(noclick):mySprite||`` and choose your sprite name from the dropdown menu.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
// @highlight
Hot_Shot.ay = 300

```




## {12. Code Check}


**🌟 Great Work! 🌟**

- :binoculars: Take a look at the game window. Once you clear the message, you should see your sprite drop to the ground. 


** CODE CHECK:** Let's make sure your code looks like this

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300

```

If not, you can fix it now!


## {13. Pick the player image}

- :game: Open ``||controller:Controller||`` and drag
```block
controller.moveSprite(mySprite, 100, 0)
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


- :mouse pointer: Click ``||variables(noclick):mySprite||`` and choose your sprite's new name from the dropdown menu.


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
//@highlight
controller.moveSprite(Hot_Shot, 100, 0)
```




## {14. Review your code again}

**You are doing fantastic! **

- :binoculars: Take a look at your game window!<br/>
Does your player move back and forth
with the arrow keys?

Your code should look something like this: 
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
controller.moveSprite(Hot_Shot, 100, 0)
```

If not, you can fix it now!



## {15. cameraFollowSprite}

Did you notice that your sprite runs off screen? We can fix that!

---

- :tree: Go to ``||scene:Scene||`` and drag
```block
scene.cameraFollowSprite(mySprite)
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


- :mouse pointer: Click ``||variables(noclick):mySprite||`` and choose your sprite name from the dropdown menu.

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
controller.moveSprite(Hot_Shot, 100, 0)
//@highlight
scene.cameraFollowSprite(Hot_Shot)
```




## {16. Set NPC}

Let's add some NPCs (non-playing characters).

These are the characters that will be asking the trivia questions.

---

- :basketball ball: Open ``||globetrotters:Globetrotters||`` and drag
```block
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


- :mouse pointer: Add three more of these blocks and change them so that you have NPCs with the numbers **1**, **2**, **3**, and **4**.<br/>
Make sure each one is represented by a different teammate, too!


_💡 Try not to have any of your NPCs be the same as your main sprite.  To change the NPC, just click ``||globetrotters:Wham||`` and choose a different name from the dropdown._


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
controller.moveSprite(Hot_Shot, 100, 0)
scene.cameraFollowSprite(Hot_Shot)
//@highlight
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
//@highlight
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
//@highlight
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
//@highlight
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)

```




## {17. Animate mySprite}

- :video: From ``||characterAnimations:Character||``, select **TWO**:
```block
characterAnimations.loopFrames(
mySprite,
assets.animation``,
200,
characterAnimations.rule(Predicate.NotMoving)
)
```
blocks and snap them both in at **the end** of the <br/>
``||loops(noclick):on start||`` container already in the workspace.


- :mouse pointer: Click ``||variables(noclick):mySprite||`` and choose your 
sprite name from the dropdown menu in each block.


- :paint brush: In the top block, click the empty box with green around it and choose the "standing" animation from the **Gallery** that belongs with your character.<br/> **(Example: If you chose Hot_Shot, you'll want to choose `hot_shot_standing`.)**


- :paint brush: In the bottom block, click the empty box with green around it and choose the "dribble" animation from the **Gallery** that belongs with your character.<br/> 
**(Example: If you chose Hot_Shot, you'll want to choose `hot_shot_dribble`.)**

- :mouse pointer: In the bottom block, click the ``||characterAnimations:not moving||`` option and change it to ``||characterAnimations:moving right||``.


_💡If you hover your cursor over the image, you can see the name of the player._


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
controller.moveSprite(Hot_Shot, 100, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
//@highlight
characterAnimations.loopFrames(mySprite,globe_animations.hot_shot_standing,200,characterAnimations.rule
(Predicate.NotMoving))
//@highlight
characterAnimations.loopFrames(mySprite,globe_animations.hot_shot_dribble,200,characterAnimations.rule(
Predicate.MovingRight))
```



## {18. Review your code again}

**Amazing! **

- :binoculars: Take a look at your game window!<br/><br/>
Does your player move back and forth
with the arrow keys?<br/><br/>
Do you see your four NPCs as you walk?

** CODE CHECK:** Let's make sure your code looks like this

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hot_Shot = sprites.create(globe_animations.hot_shot, SpriteKind.Player)
Hot_Shot.ay = 300
controller.moveSprite(Hot_Shot, 100, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
characterAnimations.loopFrames(mySprite,globe_animations.hot_shot_standing,200,characterAnimations.rule
(Predicate.NotMoving))
characterAnimations.loopFrames(mySprite,globe_animations.hot_shot_dribble,200,characterAnimations.rule(
Predicate.MovingRight))
```




## {19. onOverlap/ Interaction with NPC}

We can make the NPCs ask our player questions when they overlap!

---

- :paper plane: From ``||sprites:Sprites||`` drag<br/>
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})
```
into **an empty area** of the workspace.


_💡 This set of blocks will not click together with the rest of the blocks in your program._


#### ~ tutorialhint
```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})
```


```blockconfig.local
game.showLongText("Press B to shoot the basketballs. \\n You must get to 200 points!",
DialogLayout.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})
```



## {20. Set Second Level}

We need to change levels if the player has reached at least 30 points after talking to four NPCs. 

---

- :basketball ball: From ``||globetrotters:Globetrotters||``, drag
```block
 globetrotters.setLevel2(img`.`)
```
into **the end of** the<br/>
``||logic:if <player gets [30]> then ||``<br/>
container that's already in the workspace. 


- :mouse pointer: Click the empty gray square in the new block and choose a player 
from the **Gallery** to take the freethrows. 


**Play your game and see if you can get all of the questions right.  What happens?**


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    //@highlight
     globetrotters.setLevel2(globe_animations.hot_shot)
    }
})
```


```blockconfig.local
game.showLongText("Press B to shoot the basketballs. \\n You must get to 200 points!",
DialogLayout.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(assets.image`ball`)
})
```





## {21. Press B to tossBall}

You need to toss the ball to win the final round,
but the (B) button doesn't do anything.  Let's fix that!

---

- :game: From ``||controller:Controller||`` drag
```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(img`.`)
})
```
out into **an empty area** of the workspace. 


- :paint brush: Click the empty gray square and choose the **ball** from the gallery.


_💡 This bundle should not connect to any of the code that's already in the workspace._


#### ~ tutorialhint
```blocks
//@highlight
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(globe_imgs.ball)
})
```


```blockconfig.local
game.showLongText("Press B to shoot the basketballs. \\n You must get to 200 points!",
DialogLayout.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(assets.image`ball`)
})
```






## {22. Review your code again}

- :binoculars: **Play your finished game!**

If you answer 3 out of 4 questions correctly, you should end up in the second level making freethrows. 

Score 200 points to win!


** CODE CHECK:** If your code doesn't work, check that it matches this...

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
     globetrotters.setLevel2(globe_animations.hot_shot)
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(globe_imgs.ball)
})
```


## {Finale}

**💯 WAY TO GO 💯**

---

Great job on your trivia game!

Take a final look at your project in the game window. 
When you're finished playing, click **Done**, then share it with family and friends!





```blockconfig.global
let mySprite: Sprite = null

globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
game.showLongText("Get a Harlem Globetrotter into the game and help them score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
controller.moveSprite(mySprite, 100, 0)
characterAnimations.loopFrames(
mySprite,
assets.animation``,
200,
characterAnimations.rule(Predicate.NotMoving)
)
mySprite.ay = 300
info.startCountdown(45)
effects.confetti.startScreenEffect(500)

```


```customts
tiles.setCurrentTilemap(globe_imgs.court_floor)
game.setGameOverScoringType(game.ScoringType.None)


info.onCountdownEnd(function () {
    game.showLongText("Keep practicing!", DialogLayout.Top)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bucket, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(sprite)
})
info.onScore(200, function () {
    game.showLongText("You could become a Harlem Globetrotter!!!", DialogLayout.Top)
    game.gameOver(true)
})
```




```ghost

sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    globetrotters.askQuestion2(sprite, otherSprite)
    if (globetrotters.checkScore(30)) {
    }
})


  sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
  globetrotters.askQuestion2(sprite, otherSprite)
controller.moveSprite(mySprite, 100, 0)
if (globetrotters.NPCNumberOf(otherSprite) >= 4) {
if (info.score() >= 30) {
effects.confetti.startScreenEffect(500)
play_next_level()
} else {
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
game.showLongText("TRY AGAIN! You need 30 points to get to the basketball court. YOU GOT THIS!!!",
DialogLayout.Full)
game.reset()
}
if (globetrotters.check_player_passed(30)) {
        effects.confetti.startScreenEffect(500)
        play_next_level()
    }
}
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
globetrotters.tossBall(assets.image`ball`)
})
function play_next_level () {
globetrotters.setLevel2(assets.image`tnt`)
game.showLongText("Press B to shoot the basketballs. You must get to 200 points!",
DialogLayout.Bottom)
info.startCountdown(45)
}
info.onCountdownEnd(function () {
game.showLongText("Keep practicing!", DialogLayout.Top)
game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bucket, function (sprite, otherSprite) {
info.changeScoreBy(2)
sprites.destroy(sprite)
})
info.onScore(200, function () {
game.showLongText("You could become a Harlem Globetrotter!!!", DialogLayout.Top)
game.gameOver(true)
})
let mySprite: Sprite = null
scene.setBackgroundImage(globe_imgs.audience)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
mySprite = sprites.create(assets.image`tnt`, SpriteKind.Player)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
mySprite.ay = 275
controller.moveSprite(mySprite, 120, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)

  globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
characterAnimations.loopFrames(
mySprite,
assets.animation`tnt_standing`,
200,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`tnt_dribble`,
200,
characterAnimations.rule(Predicate.MovingRight)
)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
globe_imgs=github:kiki-lee/globe_imgs
globe_animations=github:kiki-lee/globe_animations#v0.0.3
globe_ext=github:kiki-lee/globe_ext#v0.0.17
```

