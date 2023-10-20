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

- :mouse pointer: Cick the **empty gray box*** inside the background block.

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

Now, it's time to create the **opening scene** of our project. 💫

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

_💡 Use the name of ONE of these players : **Torch**, **WHAM**, **TNT**, **Cheese**, **JET**, or **Hotshot**._



  #### ~ tutorialhint
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hotshot = sprites.create(img`.`, SpriteKind.Player)
```


## {10. Pick the player image}

Now that our sprite has a **name**, we need to add the matching **image**.

---

- :mouse pointer: Click the empty gray image box, and select **Gallery**.


- :paint brush: From the **Gallery**, choose the player you want to use. 

**The image that you choose must match your variable. For example, if you called your variable Hotshot, you should choose the image of `hotshot`. **


_💡If you hover your cursor over the images, you can see the actual name of each player_


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
// @highlight
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
```


## {11. Pick the player image}


🌟 Great Work! 🌟


** CODE CHECK:** Let's make sure your code looks like this

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
//@highlight
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
```

If not, you can fix it now!


## {12. Pick the player image}

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
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
//@highlight
controller.moveSprite(Hotshot, 100, 0)
```




## {13. Review your code again}

**You are doing fantastic! **

- :binoculars: Take a look at your game window!<br/>
Does your player move back and forth
with the arrow keys?

Your code should look something like this: 
```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
```

If not, you can fix it now!



## {14. cameraFollowSprite}

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
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
//@highlight
scene.cameraFollowSprite(Hotshot)
```




## {15. Set NPC}

Let's add some NPCs (non-playing characters).

These are the characters that will be asking the trivia questions.

---

- :basketball: Open ``||globetrotters:Globetrotters||`` and drag
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
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
scene.cameraFollowSprite(mySprite)
//@highlight
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
//@highlight
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
//@highlight
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
//@highlight
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)

```




## {16. Animate mySprite}

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


- :mouse pointer: Click ``||variables(noclick):mySprite||`` and choose your sprite name from the dropdown menu of each block.


- :paint brush: In the top block, click the empty box with green around it and choose the "standing" animation from the **Gallery** that belongs with your character.<br/> **(Example: If you chose Hotshot, you'll want to choose `hotshot_standing`.)**


- :paint brush: In the bottom block, click the empty box with green around it and choose the "dribble" animation from the **Gallery** that belongs with your character.<br/> 
**(Example: If you chose Hotshot, you'll want to choose `hotshot_dribble`.)**

- :mouse pointer: In the bottom block, click the ``||characterAnimations:not moving||`` option and change it to ``||characterAnimations:moving right||``.


_💡If you hover your cursor over the image, you can see the name of the player._


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
//@highlight
characterAnimations.loopFrames(mySprite,globe_animations.hotshot_standing,200,characterAnimations.rule
(Predicate.NotMoving))
//@highlight
characterAnimations.loopFrames(mySprite,globe_animations.hotshot_dribble,200,characterAnimations.rule(
Predicate.MovingRight))
```



## {17. Review your code again}

**Amazing! **

- :binoculars: Take a look at your game window!<br/>
Does your player move back and forth
with the arrow keys?

** CODE CHECK:** Let's make sure your code looks like this

```blocks
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
scene.cameraFollowSprite(mySprite)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
characterAnimations.loopFrames(mySprite,globe_animations.hotshot_standing,200,characterAnimations.rule
(Predicate.NotMoving))
characterAnimations.loopFrames(mySprite,globe_animations.hotshot_dribble,200,characterAnimations.rule(
Predicate.MovingRight))
```



## {18. Press B to tossBall}
- :paper plane: Go to ``||Controller||`` and select: <br/>
```block
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
```
- :paper plane: Go to ``||Globetrotters|``and select: <br/>
```block
globetrotters.tossBall(assets.image`ball`)
```
- :paper plane: Click on the **gray box**, click **Gallery**, and select the basketball.


## {19. Add onCountdownEnd}
⬇💻

  - :paper plane: Let's add the **timer**, that will allow the game to end. It makes the game more challenging!
- :paper plane: Go to the ``||info||`` and select the<br/>
```block
info.onCountdownEnd(function () {
```


## {20. Keep adding to the onCountdownEnd}
- :paper plane: Go to ``||Game||`` and select the<br/>
```block
game.showLongText("Keep practicing!", DialogLayout.Top)
game.gameOver(false)
```
- :paper plane: In the **showLongText**, add the words *Keep practicing!** - :paper plane: In the **Game Over**, select the words *Lose**
This part is to make sure that the game ends, when the countdown is over AND it says
**Game Over.**


## {21. Add onScore}
Now, we need to have a way for the player to win
This will be similar to the previous steps.
- :paper plane: Go to ``||info||`` and get the<br/>
```block
info.onScore(200, function () {
```
- :paper plane: For the **showLongText** and **Game Over**, you can find the commands under the ``||Game||`` category.
- :paper plane: Make sure to add the words *You could become a Harlem Globetrotter!!!**


## {22. Keep adding to the onCountdownEnd}
- :paper plane: Go to ``||Game||`` and select the<br/>
```block
🎉

  game.showLongText("You could become a Harlem Globetrotter!!!", DialogLayout.Top)
game.gameOver(true)
```
- :paper plane: In the **showLongText**, add the words *You could become a Harlem Globetrotter!!!!**
- :paper plane: In the **gameOver**, select the words *Win**
This part is to make sure that the game ends, when the player scores *200 points**.


## {23. Add play_next_level}
Now, we will add Level 2. When the player, gets at least three questions correct,
player can go to Level 2!
- :paper plane: Go to``||function|`` and select the<br/>
```block
function play_next_level () {
```
Clarification: You have to select the **Create Function** to make your own block. Rename the block: play_next_level


## {24. Continue adding to the play_next_level}
Now, we will commands INSIDE the function. When the player, gets at least three questions correct,
player can go to Level 2!
- :paper plane: Go to the ``||Globetrotters||`` extension and select the<br/>
```block
globetrotters.setLevel2(assets.image`tnt`)
```
- :paper plane: Go to the ``||Game||`` and select the<br/>
```block
game.showLongText("Press B to shoot the basketballs. You must get to 200 points!",
DialogLayout.Bottom)
```
- :paper plane: Go to the ``||Info||`` and select the<br/>
```block
info.startCountdown(45)
```

  ## {25. Add points when Bucket hits basketball}
In this section, we are making sure that the player gets points when the ball
**overlaps** with the Bucket/Hoop. In other words, when the ball touches/bounces off the Bucket, player gets points.
- :paper plane: Go to the ``||Sprites||`` and select the<br/>
```block
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bucket, function (sprite, otherSprite) {
```
- :paper plane: Select **Projectile** after **on sprite of kind** and change the second "Player" to **Bucket**.


## {26. Continue- Add points when Bucket hits basketball}
Now, we will add the score to increase by 2 when the ball hits the Bucket AND
the ball/Sprite will be destroyed.
- :paper plane: Go to the ``||Info||`` and select the<br/>
```block
info.changeScoreBy(2)
```
- :paper plane: Go to the ``||Sprites||`` and select the<br/>
```block
sprites.destroy(sprite)
```


## {27. onOverlap/ Interaction with NPC}
- :paper plane: Go to the ``||Sprites||`` and get the<br/>
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
```
- :paper plane: Keep **Player** after "on sprite of kind" and change the second **Player** to **NPC**.


## {28. Continue the onOverlap/ Interaction with NPC}
Let's add commands for the inside of the NPC overlap.
- :paper plane: Go to the ``||controller:Controller||`` category and select the<br/>
```block

  controller.moveSprite(mySprite, 0, 0)
```
- :paper plane: Press the **(+)** symbol and change `vx` to **0** and `vy` to **0**.


## {29. NPC askQuestion}
- :paper plane: Go to the ``||Globetrotter’s||`` extension and select the<br/>
```block
globetrotters.askQuestion(otherSprite)
```
- :paper plane: Drag **otherSprite** from the first part of your block into the **askQuestion from** command.


## {30. moveSprite}
- :paper plane: Go to the ``||controller:Controller||`` category and select the<br/>
```block
controller.moveSprite(mySprite, 100, 0)
```
<br/>block and put it at the end of the previous blocks. - :paper plane: Press the **(+)** symbol and change `vx`
to **100** and `vy` to **0**.


## {31. Review your code again}
** CODE CHECK:** Let's make sure your code looks like this
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
controller.moveSprite(mySprite, 0, 0)
globetrotters.askQuestion(otherSprite)
controller.moveSprite(mySprite, 100, 0)
```


## {32. Challenge Time: Show your Knowledge}
**Challenge Time: Show your Knowledge**
⬇💻

  - :paper plane: For this section, use what you have learned to make
your code look like the commands BELOW.
For example, "get NPC number from otherSprite" is a **black command** so, find the block in the **Globetrotters** extension.
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
controller.moveSprite(mySprite, 0, 0)
globetrotters.askQuestion(otherSprite)
controller.moveSprite(mySprite, 100, 0)
if (globetrotters.NPCNumberOf(otherSprite) >= 4) {
if (info.score() >= 30) {
effects.confetti.startScreenEffect(500)
play_next_level()
} else {
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
game.showLongText("TRY AGAIN! You need 31 points to get to the basketball court. YOU GOT THIS!!!",
DialogLayout.Full)
game.reset()
}
}
})
```
- :paper plane: For the **IF** command, make sure you go to the **Logic** section. *💡 It is light blue.*





```blockconfig.global
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
``` 

```template
scene.setBackgroundImage(globe_imgs.audience)
game.showLongText("Get a Harlem Globetrotter into the game and help them to score. \\n Press A to begin.", DialogLayout.Full)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let Hotshot = sprites.create(globe_animations.hotshot, SpriteKind.Player)
controller.moveSprite(Hotshot, 100, 0)
scene.cameraFollowSprite(Hotshot)
globetrotters.setNPC(1, globetrotters.NPCnum.WHAM)
globetrotters.setNPC(2, globetrotters.NPCnum.CHEESE)
globetrotters.setNPC(3, globetrotters.NPCnum.JET)
globetrotters.setNPC(4, globetrotters.NPCnum.COACH)
characterAnimations.loopFrames(Hotshot, globe_animations.hotshot_standing, 200,characterAnimations.rule
(Predicate.NotMoving))
characterAnimations.loopFrames(Hotshot, globe_animations.hotshot_dribble, 200,characterAnimations.rule(
Predicate.MovingRight))

```


```ghost

  sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
controller.moveSprite(mySprite, 0, 0)
globetrotters.askQuestion(otherSprite)
controller.moveSprite(mySprite, 100, 0)
if (globetrotters.NPCNumberOf(otherSprite) >= 4) {
if (info.score() >= 30) {
effects.confetti.startScreenEffect(500)
play_next_level()
} else {
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
game.showLongText("TRY AGAIN! You need 31 points to get to the basketball court. YOU GOT THIS!!!",
DialogLayout.Full)
game.reset()
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
globe_animations=github:kiki-lee/globe_animations
globe_ext=github:kiki-lee/globe_ext#v0.0.8
```