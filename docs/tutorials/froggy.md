# Time Flies
### @explicitHints true

## {Introduction @showdialog}

Are you ready to make a quick, fun game that uses a timer?

Let's get to it!

![Animated picture of a frog trying to catch a fly](/static/tutorials/froggy/frog.gif "Can you help the frog catch the fly?" )


## {2. Add Background}

**Before you add a frog, it's going to need a place to sit 🐸**

---

- :tree: From the ``||scene:Scene||`` category, grab<br/>
``||scene: set background image to [ ]||``<br/>
and snap it into the<br/>
``||loops(noclick):on start||`` container already in the workspace.

- :paint brush: Click the empty grey box to open the **image editor**.

_💡 You can draw a background or you can switch to the **Gallery** tab at the top and choose one that has already been created._

- :mouse pointer: Click **Next** when you're ready for the next instruction.

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(flies_imgs.background)
```

## {3. Add a Sprite}

**Time for a hero!**

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables:set [frog] to sprite [ ] of kind [Player]||``<br/>
into **the end** of the<br/>
``||loops(noclick):on start||`` container.

- :paint brush: Click the empty grey box ito open the **image editor**.

_💡 Switch to the **Gallery** tab to choose the same frog we use, or draw one of your own!_

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(flies_imgs.background)
//@highlight
let frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
```

## 4. Try It

**Take a look at your Game Window in the bottom right corner.**

---

Is your frog sitting where you want it?  If not, you can fix it in the next step.


## {5. Set Position}

- :paper plane: If you don't like where your sprite has ended up, snap a<br/>
``||sprites:set [frog] position to x [80] y [60]||``<br/>
block into **the end** of the<br/>
``||loops(noclick):on start||`` container.


- :mouse pointer: Play with the **x** (horizontal) and/or **y** (vertical) positions until your sprite appears where you want it.


```validation.local
# BlocksExistValidator
* Enabled: false
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
//@highlight
frog.setPosition(85, 80)
```

## {6. Add a Fly}

**😋 It's snack time** <br/>
The frog needs something to eat.

---

- :paper plane: Snap a <br/>
``||variables(sprites):set [fly] to sprite [ ] of kind [Player]||``<br/>
block into **the end** of the<br/>
``||loops(noclick):on start||`` container.

- :paper plane: Click the empty grey box to open the image editor and draw a flying insect.

_💡 Or switch to the **Gallery** tab at the top and choose a fly that has already been created._

- :mouse pointer: The **kind** of the fly should be **Food**.

```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
//@highlight
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {7. Get It Moving}

**😴 There's no challenge if the fly just sits there**

---

- :paper plane: To get the fly moving, snap a <br/>
``||sprites:set [fly] velocity to vx [50] vy [50]||`` <br/>
into the  **the end** of the <br/>
``||loops(noclick):on start||`` container.

- :mouse pointer: Add some excitement by choosing larger numbers for both velocity directions (**vx** and **vy**).

_💡 Anything between 100 and 200 is entertaining._


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
//@highlight
fly.setVelocity(200, 100)
```



## {8. Try It}

**👀 Try your game again**

---

Does it do what you expected? Did the fly leave the screen too fast for you to see?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {9. Bounce}

**🕐 That didn't last long**

To give the frog a fighting chance, we'll want to keep the fly on screen.

---

- :paper plane: From ``||sprites:Sprites||``, grab a <br/>
``||sprites:set [fly] bounce on wall <on>||`` <br/>
block and snap it into the  **the end** of the <br/>
``||loops(noclick):on start||`` container. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
//@highlight
fly.setBounceOnWall(true)
```


## {10. Press the Button}

**We want to press the button to catch the fly!**

---

- :game: From ``||controller:Controller||``, drag <br/>
``||controller:on [A] button [pressed]||`` <br/>
out into **an empty spot** in the workspace. <br/>

- :random: Inside the new<br/>
``||controller(noclick):on [A] button [pressed]||``<br/>
 container, drop a<br/>
``||logic:if <true> then / else||``<br/>
block (from the ``||logic:Logic||`` category).


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    if (true) {
    } else {
    }
})
```

## {11. Get It?}

- :paper plane: From ``||sprites:Sprites||``, grab <br/>
``||sprites:<[frog] overlaps with [fly]>||`` <br/>
and drop it in to replace **`<true>`** in the <br/>
``||logic(noclick):if <true> then / else||`` block. <br/>


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
if (frog.overlapsWith(fly)) {
    } else {
    }
})
```


## {12. Check for Flies}

When we press the Ⓐ button, one of two things could be happening:
- The fly will be overlapping the frog and we win the game with a snack
- The fly will not be overlapping the frog and our player will lose a life

---

- :circle: To create the first case, drag<br/>
``||game:game over <WIN>||``<br/>
into the top (**if**) section of the<br/>
``||logic:if <frog overlaps with fly> then / else||``<br/>
block.

- :id card: For the second case, drag<br/>
``||info:change life by -1||``<br/>
into the bottom (**else**) section of the<br/>
``||logic:if <frog overlaps with fly> then / else||`` block.


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        //@highlight
        game.over(true)
    } else {
        //@highlight
        info.changeLifeBy(-1)
    }
})
```


## {Step 13}

**👀 Try your game in the simulator**

---

How is it shaping up? Do you lose a life if the fly isn't over the frog when you press (A)? Do you win the game if it is?


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


## {Step 14}

**⌚ Don't be late**

Add a sense of urgency by including a countdown timer.

---

- :id card:  From ``||info:Info||``, grab<br/>
``||info:start countown [10]s||``<br/>
and drag it to the end of the<br/>
``||loops:on start||`` container.<br/>

Now you have exactly 10 seconds to catch the fly before the game ends!


```blockconfig.local
let fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
```


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)
//@highlight
info.startCountdown(10)

```



## {Step 15}

**🎉 Congratulations**

---

You've made a game that tests your timing!

When you're finished coding, click **Done** to share with family and friends, or
look at the challenges below for suggestions on modding your game.

---

- :question:  Try adding a block to change the number of lives you start with.

- :question:  Instead of only one fly, start with three and have one disappear each time you lose a life.

- :question:  Change the theme so that instead of a frog catching flies, it's something entirely different!


```validation.global
# BlocksExistValidator
```

```blockconfig.global
let fly: Sprite = null
let frog = sprites.create(img`.`, SpriteKind.Player)
frog.setPosition(80, 60)
info.startCountdown(10)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
frog.overlapsWith(fly)
if (false) { } else { }
game.over(true)

let list = sprites.allOfKind(SpriteKind.Food)
list.pop().destroy()
for (let index = 0; index <= 4; index++) {

}
for (let index = 0; index < 4; index++) {

}
```


```package
flies_imgs=github:kiki-lee/flies_imgs#v0.0.3
```

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        game.over(true)
    } else {
        info.changeLifeBy(-1)
    }
})
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(85, 80)
info.startCountdown(10)
info.setLife(3)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(200, 100)
fly.setBounceOnWall(true)

list = sprites.allOfKind(SpriteKind.Food)
    list.pop().destroy()
    for (let index = 0; index <= 4; index++) {

    }
    for (let index = 0; index < 4; index++) {

    }
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041e0000000400012a04000800012708000c00012410001400012218001c000120`), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)

```
