# Basketball Free Throw
### @explicitHints true

## {1. Introduction @showdialog}

Line up your shot and see if you can slam dunk this Basketball free throw game!

![Free throw shot from player](/static/tutorials/free-throw/freethrow.gif)



## {2. Your First Block}

**Ready to start coding?**

Let's add a basketball court as the background.

---


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab <br/>
``||scene:set background image to [ ]||``<br/>
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.



~hint What does that mean? 🤷🏽

---

When giving instructions, we'll highlight some text to give you a better idea of what you are looking for.

For example, when we suggest the <br/>
``||scene:set background image to [ ]||``<br/>
block, we are pointing you toward <br/>

```block
scene.setBackgroundImage(img`.`)
```

which is located in the ``||scene:Scene||`` category in the Toolbox.

hint~

- :paint brush: Click the empty grey box in the background block to draw a basketball court <Br/>
(or switch to the **Gallery** to pick the one that we created.)

<!--
<br/><br/>
💡 _The court image should be preloaded in the block, but you are welcome to edit the image if you like._
-->



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(throw_imgs.court)
```




## {3. Look at the game window}


- :binoculars: Look at your project in the game window!

You should see the court background that you just added.

![Look for the game window in the lower right](/static/tutorials/free-throw/game.png)






## {4. Create the Player Character}

**Pick your player!**<br/>
⛹🏾 ⛹🏼‍♀️ ⛹🏿‍♂️

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables(sprites):set [athlete] to sprite [ ] of kind [Player]||``<br/>
to **the end** of the
``||loops(noclick):on start||`` container.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our athlete will be a sprite, too.

hint~


- :paint brush: Click the empty grey box in the sprite block to draw your player <Br/>
(or switch to the **Gallery** to pick one that we created.)



<!-- 

<br/><br/>
💡 _The athlete image should be preloaded in the block, but you are welcome to edit the image if you like._
-->

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
//@highlight
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)

```

## {5. Position the Player Character at the bottom of the screen}


Let's move the athlete down to give it room to grow.

---

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||sprites: set [athlete] position to x [80] y [90]||`` <br/>
and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.


~hint Why use 80 and 90? 💡

---

The width of the screen is 160 pixels, so an **x** value of **80** will place the athlete in the middle of the screen from left to right.

The **y** value of **90** will put the athlete near the bottom of the screen because the screen height is 120 pixels.

These numbers were carefully selected to put the athlete in the right place for the next several steps...but you can also play around with the values to see what happens when you make them larger or smaller.

hint~




#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
//@highlight
athlete.setPosition(80, 90)
```





## {6. Set the player’s velocity (movement)}

In this game, your player will be moving back and forth.

---

- :paper plane:  From ``||sprites:Sprites||``, drag<br/>
``||sprites:set [athelete] velocity to vx [50] vy [0]||``<br/>
to **the end** of the <br/>
``||loops(onclick):on start||`` container.


~hint What are vx and vy?💡

---

In MakeCode Arcade, **vx** stands for the "velocity in the direction of x" — which is a complicated way of saying "the speed from side to side."

- The larger your **vx** value is, the faster something will travel to the right.
- The lower your **vx**, the faster it will travel to the left.
- If your **vx** is 0, the item won't move from side to side at all.


Similarly, **vy** stands for the "velocity in the direction of y" — which is a
complicated way of saying "the speed from top to bottom."

- The larger your **vy** value is, the faster something will travel downward.
- The lower your **vy**, the faster it will travel upward.
- If your **vy** is 0, the item won't move either up or down.

hint~


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
//@highlight
athlete.setVelocity(50, 0)
```



## {7. Look at the game window again}


- :binoculars: Look at your project in the game window!

You should see the athlete start running forward.




## {8. Make the player bounce off walls}

**The athlete ran away!** <br/>
Let's add a block to keep them inside the court.

---

- :paper plane: From ``||sprites:Sprites||``, grab a <br/>
``||sprites:set [athlete] bounce on wall <on>||`` <br/>
block and snap it into the  **the end** of the <br/>
``||loops(noclick):on start||`` container. <br/>



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
//@highlight
athlete.setBounceOnWall(true)

```




## {9. Create the Basketball Hoop}


Using what you learned when adding the athlete, add a hoop to the scene then position it against the backboard.

---

~hint Remind me 🤨

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables(sprites):set [hoop] to sprite [ ] of kind [Goal]||``<br/>
to **the end** of the
``||loops(noclick):on start||`` container, then select the hoop from the Gallery.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||sprites: set [hoop] position to x [80] y [35]||`` <br/>
and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
//@highlight
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
//@highlight
hoop.setPosition(80, 35)
```



## {10. Use (A) Button to Toss}


Let's code the athlete to shoot basketballs when the (A) button is pressed.


- :game: From ``||controller:Controller||``, drag the<br/>
``||controller:on [A] button pressed ||``<br/>
container into **an empty area** of the workspace.



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```




## {11. Shoot the Basketballs}

**Add the basketball projectiles.**


~hint What are projectiles?💡

---

In MakeCode Arcade, projectiles are sprites that move on their own,
often in large quantities.

Projectiles have extra properties that normal sprites don't have.
For example, they destroy themselves once they leave the screen so
the user's computer doesn't get overwhelmed.

hint~

---


- :paper plane: Snap <br/>
``||variables(sprites):set [projectile] to projectile [ ] from [athlete] with vx [0] vy [-100]||`` <br/>
inside **the empty** <br/>
``||controller(noclick):on [A] button pressed ||``<br/>
container.


- :paint brush: Click the empty grey box in the projectile block to draw a basketball <br/>
(or switch to the **Gallery** to pick the one that we created.)


<!--
💡 _The projectile is a basketball, but you can click the ball and change it to whatever you like._
-->



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})
```




## {12. Test it Out}


- :binoculars: Look at your game!

Your player should be moving back and forth on the court.

When you press the (A) button (or space bar) the player should shoot a basketball toward the top of the screen.


💡 _We will add points in the next step._


~hint Mine isn't working 🤷‍♂️ 

---

Take a look at the blocks below to see if your code is missing anything:


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})


scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```




## {13. Points when we get a basket}


**Run code when the ball overlaps the hoop!**

---


- :paper plane: From ``||sprites:Sprites||``, drag the<br/>
``||sprites:on [sprite] of kind [Projectile] overlaps [othersprite] of kind [Goal]||``<br/>
container into **an empty area** of the workspace.


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {

})
```



## {14. Win when we get a basket}

**Add a point and destroy the ball.**

---


- :id card: From ``||info:Info||``, grab <br/>
``||info:change score by [1]||``  <br/>
and snap it into **the empty**  <br/>
``||sprites(noclick):on [sprite] of kind [Projectile] overlaps...||``<br/>
containter already in the workspace.


- :paper plane: From ``||sprites:Sprites||``, grab <br/>
``||sprites:destroy [sprite]||`` <br/>
and snap it into **the end** of the <br/>
``||sprites(noclick):on [sprite] of kind [Projectile] overlaps...||``<br/>
containter in the workspace.


~hint Why destroy "sprite"? 💡

---

You may think we should destroy **projectile** or even **ball** to get rid of the 
basketball that overlapped the hoop, but this overlap container requires you to 
choose either <br/>
``||variables:sprite||`` or ``||variables:otherSprite||``<br/> 
when you want to select one of the **exact** items that touched.

hint~



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
```



## {15. Look at the game window again, again}


- :binoculars: Look at your project in the game window!

You should get exactly one point every time your basketball overlaps the hoop!



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


## {16. Add a time limit}

**Does this game feel long to you?**<br/>
🕔 🕔 🕔

We haven't added a way to win.
Let's add a countdown timer.

---

- :id card:  From ``||info:Info||``,  grab<br/>
 ``||info:start countdown [30] (s)||``<br/>
and snap it in at **the end of** the <br/>
``||loops(noclick):on start||`` container.

---

🎮 **Play your game and see how many points you can get in 30 seconds!**



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
```


<!--## You did a great job!!! @showdialog


### What did you think of this tutorial?

### 😍  😑  ☹️

Would you like to tell us more?

(Yes)  (No)

-->



## {18. Finale}

**🏀 Well Done 🏀**

---

You've coded an amazing game!

**Can you get 20 points before the counter gets down to zero?**

When you've finished playing, click **Done** so you can share your tutorial with family and friends!











#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
//@highlight
info.startCountdown(30)

```


```blockconfig.global
namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)

athlete.setBounceOnWall(true)
info.startCountdown(30)
sprites.destroy(sprite)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) { })
projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)

scene.setBackgroundImage(img`.`)
```


```package
throw_imgs=github:kiki-lee/throw_imgs
```

```customts
namespace SpriteKind {
    //% isKind
    export const Goal = SpriteKind.create()
}

info.onCountdownEnd(function () {
    game.gameOver(true)
})
```


```ghost

    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ball`, athlete, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let athlete: Sprite = null
scene.setBackgroundImage(throw_imgs.court)
athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
info.onCountdownEnd(function () {
    game.gameOver(true)
})

game.setGameOverEffect(true, effects.confetti)
game.setGameOverMessage(true, "GAME OVER!")
game.setGameOverScoringType(game.ScoringType.HighScore)
```


```simtheme
{
    "palette": [
       "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FF93C4",
        "#FF8135",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#E3A591",
        "#A4839F",
        "#5F5F5F",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```