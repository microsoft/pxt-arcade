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

_💡 You can draw a background or you can switch to the **My Assets** tab at the top and choose one that has already been created._

- :mouse pointer: Click **Next** when you're ready for the next instruction.

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`Background`)
```

## {3. Add a Sprite}

**Time for a hero!**

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables:set [frog] to sprite [ ] of kind [Player]||``<br/>
into **the end** of the<br/>
``||loops(noclick):on start||`` container.

- :paint brush: Click the empty grey box ito open the **image editor**.

_💡 Switch to the **My Assets** tab to choose the same frog we use, or draw one of your own!_

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Background`)
//@highlight
let frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
```

## 4. Try It

**Take a look at the Game Window (Bottom Right)**
![Go to the Game Window in the editor.](/static/skillmap/assets/game-win-tab.png "Don't forget to look at your game!")

---

Is your frog sitting where you want it?  If not, you can fix it in the next step.


## {5. Set Position}

- :paper plane: If you don't like where your hero has ended up, snap a<br/>
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
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
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

_💡 Or switch to the **My Assets** tab at the top and choose a fly that has already been created._

- :mouse pointer: The **kind** of the fly should be **Food**.

```blockconfig.local
let fly = sprites.create(img`.`, SpriteKind.Food)
```

#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
frog.setPosition(85, 80)
//@highlight
fly = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
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

#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
//@highlight
fly.setVelocity(200, 100)
```



## {8. Try It}

**👀 Try your game in the simulator**

---

Does it do what you expected? Did the fly leave the screen too fast for you to see?



## {9. Bounce}

**🕐 That didn't last long**

To give the frog a fighting chance, we'll want to keep the fly on screen.

---

- :paper plane: From ``||sprites:Sprites||``, grab a <br/>
``||sprites:set [fly] bounce on wall <on>||`` <br/>
block and snap it into the  **the end** of the <br/>
``||loops(noclick):on start||`` container. <br/>


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
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



## {Step 14}

**⌚ Don't be late**

Add a sense of urgency by including a countdown timer.

---

- :id card:  From ``||info:Info||``, grab<br/>
``||info:start countown [10]s||``<br/>
and drag it to the end of the<br/>
``||loops:on start||`` container.<br/>

Now you have exactly 10 seconds to catch the fly before the game ends!


#### ~ tutorialhint

```blocks
let frog: Sprite = null
let fly: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
frog.setPosition(85, 80)
fly = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
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
if () { } else { }
game.over(true)

list = sprites.allOfKind(SpriteKind.Food)
    list.pop().destroy()
    for (let index = 0; index <= 4; index++) {

    }
    for (let index = 0; index < 4; index++) {

    }


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
scene.setBackgroundImage(assets.image`Background`)
frog = sprites.create(assets.image`Hero`, SpriteKind.Player)
frog.setPosition(85, 80)
info.startCountdown(10)
info.setLife(3)
fly = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
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

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQKAAsAAAAAAP8PAAAAAADw//8AAAAAEAD/DxAAAAAB8f//AQEAABAf/x8fAAAAAfH//wEBAAAQH/8fHwAAAAHx//8BAQAAEAD/DxAAAAAAAPAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Bouncer\"\n    },\n    \"image3\": {\n        \"data\": \"hwQcABwAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAyAwAAAAAAAAAAAAAAAAAgMjMAAAAAAAAAAAAAICIiHjIzAAAAAAAAAAAAABYd3d3yMwAAAAAAAAAAACAiIiIh8fMAAAAAACAiAgAWHd3d3jIzAAAAACAeNeNgHV3d3d3x8wAAACIeDOH3Vh3d4h4eMjMAACAdXczh914d4fdjY3HzAAAWId4d4fdeHfX3d3dyMwAAHiHf3fY3Xh33d3d3c3MAAB4d3eH3d14193d3d3NzAAAgHd3h93deNfd3d3dzcwAAIB3d4fd3XjX3d3d3c3MAABYd3eH3d14193d3d3NzAAAeId4d9jdeHfd3d3dzcwAAHiHf3eH3Xh3193d3cjMAACAd3czh914d4fdjY3HzAAAAIh4M4fdWHd3iHh4yMwAAAAAgHjXjYB1d3d3d8fMAAAAAACIiAgAWHd3d3jIzAAAAAAAAAAAAICIiIiHx8wAAAAAAAAAAAAAWHd3d8jMAAAAAAAAAAAAAICIiHjIzAAAAAAAAAAAAAAAAACAyMwAAAAAAAAAAAAAAAAAAMgMAAAAAAAAAAAAAAAAAADAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Hero\"\n    },\n    \"[GbUocpt^e@h97~~1|{K\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZeWZmZru7u7u7u7u7Ztbd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmtru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlntru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZubu7u7u7u7u7a2bd3d2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2bX3X2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z33ZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z3d5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z3mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtru7u7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5l5mZZma7u7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmdndfZeZmXlmu7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtnuZmZmZmZmZmd3d3XeZmZl5Zra7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmd8Z8mZmZmZmZ2d3d3X2XmZmZaba7u7u7a2aZmZmZmWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZnfMnJmZmZmZ3d3d3d13mZmZabu7u7u7a2aZmZmZaWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZnbHzJmZmZmZ3d3d3d13mZmZabu7u7u7a2aZmZmZZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZ3zJyZmZnZ3d3d3d19l5mZtru7u7u7a2aZmZlpZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZ2xnyZmZnZ3d3d3d19l5mZtru7u7u7ZnaZmZlmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZ2Z8yZmZnd3d3d3d19l5lpu7u7u7u7ZpaZmZlmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZa2ZmZmZmZ8yXmZnd3d3d3d19l5lpu7u7u7u7ZpaZmZlrZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZ2ZmZmZmZsycmZnd3d3d3d19l5m2u7u7u7trZpeZmZlnZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZsx8mdnd3d3d3d19l5m2u7u7u7trZpmZmZlpZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZeWZmZmZmZsbMmdnd3d3d3d19l2m7u7u7u7tmdpmZmZl5ZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWtmZmZmZsbMmdnd3d3d3d19l2m7u7u7291mlpmZmZmZa2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZsbMmdnd3d3d3d19l7a7u7u72xHdd3eZmZmZaWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmcl8mblmZmZmZsbMmdnd3d3d3d19l7a7u7u72xHRfRGXuX2ZuWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWnMl5lmZmZmZsbMmdnd3d3d3d19l9e7u7u7ax0RfRGX2b2XmWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmzJdnZmZmZsbMmdnd3d3X3d19l9nd3d3dZh0R3RFx3d3Ml2eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmxsxnZmZmZsbMmdnd3d3X3d19l3nXERHR3d0R0RFx3d3GzGeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZsZsZmZmZsbMmdnd3d133d19l5nXERER0d0d0RFx3d1mxmyZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZsvMmdnd3d131919l5nZHREREd0d0RFx3XdtZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmu7tmdtnd3d131919l5mZ3REREdHdER1xfRfRZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZma2u7trZtbd3d19d919l5nZ3R0RERHdER3RdxHRZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZma7u7u7a2bd3d19d913mZnZ3d0dERHdHR3dFxHRZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZra7u7u7u2bW3d19d9d3md3d3d3dEd3dHR19ERFtZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmXlmZmZmZru7u7u7u2vW3d19d9d3mR0REd3dHR3d3d3dERFtZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmZru7u7u7u2tm3d3dd3mXmR0RERHR3R0R3d0dEdFmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmtru7u7u7u7tm3d3dd5mZmd0RERER0d0R0d0dEW1mZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlnZmZmtru7u7u7u7tm1t3dd5mZmdndHRER0d0REd3d3d1mZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmu7u7u7u7u7tm1t3dd5eZmdkd0R0RXVUdER3dEdFtZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5ZmZmu7u7u7u7u7tm1t3dfZeZmd0RERER3VUd0RHdERHRZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmu7u7u7u7u7trZt3dfZeZmR0RERHRXVXV0RHRERERbWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWa2u7u7u7u7u7trZt3dfZeZmd3dHRHRVVVV3RHRHRER0XaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWe2u7u7u7u7u7trZt3dfZeZmR0RERERXVXV0RHR3RER0XaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm5u7u7u7u7u7trZt3d3ZeZmd0RERER3V0V0RHd3d0R0XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7trZtfdfZmZmdkdERHR3VURER3d3d3dnXeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7trZnfdl5mZmdndERHd3d0REd3dcZeZmXeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7trZnd3mZmZmZnZ3RHR3d0R0d0dEZeZmXeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm7u7u7u7u7u7trZneZmZmZmZnZHRHR3R0R3d0dEXGZmXeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm2u7u7u7u7u7trZpmZmZmZmZndERHd3R3RHd0dEdGZmXaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZru7u7u7u7trZpmZmZmZmZkdEd3dEdHdHR3dERGdmWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZeWa7u7u7u7trZpmZmZmZmZnd3d0dERHdER3dERGdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmXlmtru7u7trZpmZmZmZmbZ72R0REdHdER3RFxF9mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlptru7u7trZpmZmZmZZne23REREd0d0R3RdxF9l5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpu7u7u7trZpmZmZlpZmbXHRER0d0d0RHRfRfdd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpu7u7u7trZpmZmZlmZmbWERER3d0R0RHR3dfdd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm2u7u7u7trZpmZmWlmZmbWERHd3d0R3RFx3dfdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm2u7u7u7tmdpmZmWZmZmbW3d3dmR0R3RF33dfdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWm7u7u7u7tmlpmZmWZmZmZmdmfM2RER3RHX19fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWm7u7u7u7tmlpmZmWtmZmZmZmfM1xHR3XHXd9fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmba7u7u7u2tml5mZmWdmZmZmZmbM3BHd3X3dfd3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmba7u7u7u2tmmZmZmWlmZmZmZmbM3NHd3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZabu7u7u7u2Z2mZmZmXlmZmZmZmbGzN3Z3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZabu7u7u7u2aWmZmZmZlrZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtru7u7u7a2aXmZmZmZlpZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtru7u7u7ZmaZmZnJfJm5ZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ2bu7u7trZpaZmZlpzJeZZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ2d27271mZpmZmZlpZsyXZ2ZmZmbGzJnZ3d3d193dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZedfd3WdmlpmZmZlpZsbMZ2ZmZmbGzJnZ3d3d193dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmXd3Z2ZmmZmZmZlpZmbGbGZmZmbGzJnZ3d3dd93dfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmaXmZmZmZlpZmZmZmZmZmbLzJnZ3d3dd9fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZru7ZnbZ3d3dd9fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmtru7a2bW3d3dfXfdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmu7u7u2tm3d3dfXfdd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZmZma2u7u7u7tm1t3dfXfXd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5ZmZmZma7u7u7u7tr1t3dfXfXd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZma7u7u7u7trZt3d3Xd5l5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZra7u7u7u7u7Zt3d3XeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZ2ZmZra7u7u7u7u7Ztbd3XeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZru7u7u7u7u7Ztbd3XeXmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZeWZmZru7u7u7u7u7Ztbd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmtru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlntru7u7u7u7u7a2bd3X2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZubu7u7u7u7u7a2bd3d2XmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2bX3X2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z33ZeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z3d5mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZu7u7u7u7u7u7a2Z3mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtru7u7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5l5mZZma7u7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmdndfZeZmXlmu7u7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtnuZmZmZmZmZmd3d3XeZmZl5Zra7u7u7a2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlmd8Z8mZmZmZmZ2d3d3X2XmZmZaba7u7u7a2aZmZmZmWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZnfMnJmZmZmZ3d3d3d13mZmZabu7u7u7a2aZmZmZaWaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZnbHzJmZmZmZ3d3d3d13mZmZabu7u7u7a2aZmZmZZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZ3zJyZmZnZ3d3d3d19l5mZtru7u7u7a2aZmZlpZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZ2xnyZmZnZ3d3d3d19l5mZtru7u7u7ZnaZmZlmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZ2Z8yZmZnd3d3d3d19l5lpu7u7u7u7ZpaZmZlmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZa2ZmZmZmZ8yXmZnd3d3d3d19l5lpu7u7u7u7ZpaZmZlrZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZ2ZmZmZmZsycmZnd3d3d3d19l5m2u7u7u7trZpeZmZlnZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZsx8mdnd3d3d3d19l5m2u7u7u7trZpmZmZlpZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZeWZmZmZmZsbMmdnd3d3d3d19l2m7u7u7u7tmdpmZmZl5ZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWtmZmZmZsbMmdnd3d3d3d19l2m7u7u7u7tmlpmZmZmZa2aZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmZmZsbMmdnd3d3d3d19l7a7u7u7u2tml5mZmZmZaWaZmZmZmZmZmZmZmZmZmZmZmZnZnZmZmcl8mblmZmZmZsbMmdnd3d3d3d19l7a7u7u7u2ZmmZmZyXyZuWaZmZmZmZmZmZmZmZmZmZmZmZkd3ZmZmWnMl5lmZmZmZsbMmdnd3d3d3d19l9e7u7u7a2aWmZmZacyXmWaZmZmZmZmZmZmZmZmZmZmZmZkd0Z3Zl2lnzJdnZmZmZsbMmdnd3d3X3d19l9ndu9u9ZmaZmZmZaWbMl2eZmZmZmZmZmZmZmZmZmZmZmZkdEd0dd3l3xsxnZmZmZsbMmdnd3d3X3d19l3nX3d1nZpaZmZmZaWbGzGeZmZmZmZmZmZmZmZmZmZmZmZkdEdEdcXl9ZsZsZmZmZsbMmdnd3d133d19l5l3d2dmZpmZmZmZaWZmxmyZmZmZmZmZmZmZmZmZmd3d3Z3ZEdEdcdd9ZmZmZmZmZrvMmdnd3d131919l5mZZmZml5mZmZmZaWZmZmaZmZmZmZmZmZmZmZmZmR0R0d3dHdEdEdd9ZmZmZmZmu7tmdtnd3d131919l5mZmZmZmZmZmZmZaWZmZmaZmZmZmZmZmZmZmZmZmR0REdHdHREdEd19bWZmZma2u7trZtbd3d19d919l5mZmZmZmZmZmZmZaWZmZmaZmZmZmZmZmZmZmZmZmd0RERHd3REdEd130WZmZma7u7u7a2bd3d19d913mZmZmZmZmZmZmZmZaWZmZmaZmZmZmZmZmZmZmZmZmdkdERHR3RHdEX0X0WZmZra7u7u7u2bW3d19d9d3mZmZmZmZmZmZmZmZaWZmZmaZmZmZmZmZmZmZmZmZmZndERER3R3REX0R0WZmZru7u7u7u2vW3d19d9d3mZmZmZmZmZmZmZmZeWZmZmaZmZmZmZmZmZmZmZmZ2d3d3RER0R3R0R0R0WZmZru7u7u7u2tm3d3dd3mXmZmZmZmZmZmZmZmZmWZmZmaZmZmZmZmZmZmZmZmZ2RHR3R0R3d3R0R0R0WZmtru7u7u7u7tm3d3dd5mZmZmZmZmZmZmZmZmZmWZmZmaZmZmZmZmZmZmZmZmZ2R0R0d3dEd3R3RERbWZmtru7u7u7u7tm1t3dd5mZmZmZmZmZmZmZmZmZmWdmZmaZmZmZmZmZmZmZmZmZmd0REd3dEdHd3RERZ2Zmu7u7u7u7u7tm1t3dd5eZmZmZmZmZmZmZmZmZmWlmZmaZmZmZmZmZmZmZmZmZmd0dEd3dHRHd3RFxZmZmu7u7u7u7u7tm1t3dfZeZmZmZmZmZmZmZmZmZmXlmZmaZmZmZmZmZmZmZmZmZ3R0R0d3dHRHR3R13ZmZmu7u7u7u7u7trZt3dfZeZmZmZmZmZmZmZmZmZmZlmZmaZmZmZmZmZmZmZmZmZ3REREd1dFRHR0d3d3d22u7u7u7u7u7trZt3dfZeZmZmZmZmZmZmZmZmZmZlpZnaZmZmZmZmZmZmZmZnZHREREdHdVREd0d3dHRG9u7u7u7u7u7trZt3dfZeZmZmZmZmZmZmZmZmZmZmZZ3aZmZmZmZmZmZmZmZnZEREREdFVVR0dEd0dERG9u7u7u7u7u7trZt3d3ZeZmZmZmZmZmZmZmZmZmZmZmXmZmZmZmZmZmZmZmZnZ3d0REV1VVdUdEd0RERG9u7u7u7u7u7trZtfdfZmZmZmZmZmZmZmZmZmZmZmZmXeZmZmZmZmZmZmZmZnZEREREd1VVR0dER0REdG7u7u7u7u7u7trZnfdl5mZmZmZmZmZmZmZmZmZmZmZmXeZmZmZmZmZmZmZmZnZHREREdFd1REd0R0REZ27u7u7u7u7u7trZnd3mZmZmZmZmZmZmZmZmZmZmZmZmXeZmZmZmZmZmZmZmZmZ3RHdEdFV1RHR0R0R3Zm7u7u7u7u7u7trZneZmZmZmZmZmZmZmZmZmZmZmZmZmXeZmZmZmZmZmZmZmZmZ3d0RERHdHRHR3d3dnZm2u7u7u7u7u7trZpmZmZmZmZmZmZmZmZmZmZmZmZmZmXaZmZmZmZmZmZmZmZnZHRERERHdHRHd3RHRmZlmZru7u7u7u7trZpmZmZmZmZmZmZmZmZmZmZmZeZeZmWaZmZmZmZmZmZmZmZnZEREREd3dEdHd3RERnZmZeWa7u7u7u7trZpmZmZmZmZmZmZmZmZmZmZnZ3X2XmZmZmZmZmZmZmZmZmZnZERHR3d3R0d3d3R0R0ZmZmXlmtru7u7trZpmZmZmZmbZ7mZmZmZmZmZnd3d13mZmZmZmZmZmZmZmZmZnZ3d3d3R3R3d3R0RcR0ZeZmZlptru7u7trZpmZmZmZZnfGfJmZmZmZmdnd3d19l5mZmZmZmZmZmZmZmZmZmd3d3RER0d3R0X0REX2ZmZlpu7u7u7trZpmZmZlpZmZ3zJyZmZmZmd3d3d3dd5mZmZmZmZmZmZmZmZmZmd3dERER0R3REX0XEX2ZmZlpu7u7u7trZpmZmZlmZmZ2x8yZmZmZmd3d3d3dd5mZmZmZmZmZmZmZmZmZmdcdERER3R3REdd3EX2XmZm2u7u7u7trZpmZmWlmZmZmd8ycmZmZ2d3d3d3dfZeZmZmZmZmZmZmZmZmZmd0RERHR3REdEdd9132XmZm2u7u7u7tmdpmZmWZmZmZmdsZ8mZmZ2d3d3d3dfZeZmZmZmZmZmZmZmZmZmR0RERHd3REdEdfd3X2XmWm7u7u7u7tmlpmZmWZmZmZmdmfMmZmZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmR0REd3dHREdEdfd3X2XmWm7u7u7u7tmlpmZmWtmZmZmZmfMl5mZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmd3d3Z3ZEdEdEdfd3X2Xmba7u7u7u2tml5mZmWdmZmZmZmbMnJmZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZnZEdEXcd3d3X2Xmba7u7u7u2tmmZmZmWlmZmZmZmbMfJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZkdEd0Xcd3d3X2Xabu7u7u7u2Z2mZmZmXlmZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZkd0d13193d3X2Xabu7u7u7u2aWmZmZmZlrZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3X2Xtru7u7u7a2aXmZmZmZlpZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3d3d3X2Xtru7u7u7ZmaZmZnJfJm5ZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3d3d3X2X17u7u7trZpaZmZlpzJeZZmZmZmbGzJnZ3d3d3d3dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3dfd3X2X2d27271mZpmZmZlpZsyXZ2ZmZmbGzJnZ3d3d193dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3dfd3X2Xedfd3WdmlpmZmZlpZsbMZ2ZmZmbGzJnZ3d3d193dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3Xfd3X2XmXd3Z2ZmmZmZmZlpZmbGbGZmZmbGzJnZ3d3dd93dfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3XfX3X2XmZlmZmaXmZmZmZlpZmZmZmZmZma7u5nZ3d3dd9fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3XfX3X2XmZmZmZmZmZmZmZlpZmZmZmZmZru7ZnbZ3d3dd9fdfZeZmZmZmZmZmZmZmZmZmZmZmZmZ2d3d3X133X2XmZmZmZmZmZmZmZlpZmZmZmZmtru7a2bW3d3dfXfdfZeZmZmZmZmZmZmZmZmZmZmZmZmZmd3d3X133XeZmZmZmZmZmZmZmZlpZmZmZmZmu7u7u2tm3d3dfXfdd5mZmZmZmZmZmZmZmZmZmZmZmZmZmdnd3X1313eZmZmZmZmZmZmZmZlpZmZmZma2u7u7u7tm1t3dfXfXd5mZmZmZmZmZmZmZmZmZmZmZmZmZmdnd3X1313eZmZmZmZmZmZmZmZl5ZmZmZma7u7u7u7tr1t3dfXfXd5mZmZmZmZmZmZmZmZmZmZmZmZmZmZnd3d13eZeZmZmZmZmZmZmZmZmZZmZmZma7u7u7u7trZt3d3Xd5l5mZmZmZmZmZmZmZmZmZmZmZmZmZmZnZ3d13mZmZmZmZmZmZmZmZmZmZZmZmZra7u7u7u7u7Zt3d3XeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZnZ3d13mZmZmZmZmZmZmZmZmZmZZ2ZmZra7u7u7u7u7Ztbd3XeZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZnZ3d13l5mZmZmZmZmZmZmZmZmZaWZmZru7u7u7u7u7Ztbd3XeXmZk=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Background\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"Bouncer\":return img`\n. . . 1 . 1 . 1 . . \n. . 1 . 1 . 1 . 1 . \n. . . 1 f 1 f 1 . . \n. f . f 1 f 1 f . . \nf f f f f f f f f . \nf f f f f f f f f f \nf f f f f f f f f . \n. f . f 1 f 1 f . . \n. . . 1 f 1 f 1 . . \n. . 1 . 1 . 1 . 1 . \n. . . 1 . 1 . 1 . . \n`;\n            case \"image3\":\n            case \"Hero\":return img`\n..........888..888..........\n.........8577885778.........\n........857777777778........\n........878877778878........\n........878f77778f78........\n.......87777777777778.......\n.......833777777773388......\n......8733778888773378......\n......877778dddd877778......\n......8d888dddddd888d8......\n......8dddddddddddddd8......\n.......8dddddddddddd8.......\n........888888888888........\n.......85777777777758.......\n......8577777777777758......\n.....8577777dddd7777758.....\n....8877777dddddd7777788....\n...8587778dddddddd8777858...\n...878778dddddddddd877878...\n...878778dddddddddd877878...\n...878778dddddddddd877878...\n...8787778dddddddd8777878...\n...877878dddddddddd878778...\n..87787778dddddddd87778778..\n.8888787878dddddd8787878888.\ncccccccccccccccccccccccccccc\n.cccccccccccccccccccccccccc.\n..cccccccccccccccccccccccc..\n`;\n            case \"[GbUocpt^e@h97~~1|{K\":\n            case \"Background\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd99dddd99999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd1d1dddd11d99999999999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd99dd11d11dd111d99999999999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99d1dddd111d111d111ddd7dddd9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d11dd9d11dd1111d111d111ddddd11d9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d111ddd111d1111111d1111dddd111d9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d1111ddd1111111111d111dddd1111d9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d11111dd11111111111111ddd11111d9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd1111ddd11d1111111111ddd11111d9999999999999999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd11111dddddd11dd1111ddd11111dd9999999999999999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd11111ddddddd5ddd11dd111111d99999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd9ddd1111dddddd555d5ddd111111dd99ddd999999999999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d1111ddddd111dddd5d55555ddddd111ddddd11d999999999999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd1111ddddd1d11dd5555555dd11d11dddd1111d999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd11111ddddd111115555dd111ddddddd1111dddddddddd9999999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd111111dddd11111d5d11111ddddd11111dddddddddddd999999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd11111ddd11111d11111dddd11111dddddddddddddddd9999\n999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd1111dd11ddddd11ddd1111dddd777ddddddddddddd999\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d111111ddddddddd11111ddddddddd1111117dddddddddddddddd\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977111111111dddd1111111dddd11111111117dddddddddddddddd\n99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977711111dddddddd111dddddddd11111177ddddddddddddddddd\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977dddddd111ddddddddd11d7dd77777dddddd77777dddddddd\n9999999999999999999999999c6666666667999999999999999999999999999999999999999999999999999999999999999999999c6677dddd77111111dddd111d111177ddddddddddddd7777777dddd\n9999999999999999999999999cc666666666667999999999999999999999999999999999999999999999999999999999999999999cc77dddd771111117ddd1111d1111177ddddddddddddd7777777777\n99999999999999999999999997c6666666666666799999999999999999999999999999999999999999999999999999999999999997c677777711111177dd11111dd1111177dddddddddddddd77777777\n9999999999999999966b7999997c66666666666666999999999999999999999999999999999999999999999999999999966b7999997c6666d11111d766dd1111dd9d111117dddddddddddddddd779997\n999999999999999966666679999cc666666666666669999999999999999999999999999999999999999999999999999966666679999cc6666ddddd6666d11111d999dd111ddddddddddddddddddd7999\n99999999999999966666666b9997c66666666666666799999999999999999999999999999999999999999999999999966666666b9997c6666666666666d1111d999997ddddddddddddddddddd7777999\n9999999999999966666666666b99cc666666666666669999999999999999999999999999999999999999999999999966666666666b99cc666666666666d111d999999977777777777777777777779999\n99999999999996666666666666677c666666666666669bbbb669999999999999999999999999999999999999999996666666666666677c6666666666666dddbbb6699999777777777777777779999999\n999999999999966666666666666666666666666666bbbbbbbb699999999999999999999999999999999999999999966666666666666666666666666666bbbbbbbb699999999999999999999999999999\n999999999999676666666666666666666666666bbbbbbbbbbb699999999999996699999999999999999999999999676666666666666666666666666bbbbbbbbbbb699999999999996679999999999999\n999999999999b766666666666666666666666bbbbbbbbbbbbb67999999999966bbdd799999999999999999999999b766666666666666666666666bbbbbbbbbbbbb67999999999966bbdd799999999999\n999999999999b6766666666666666666666bbbbbbbbbbbbbbbb69999999966bbbbbd779999999999999999999999b6766666666666666666666bbbbbbbbbbbbbbbb69999999966bbbbbd779999999999\n9999999999997c77666666666666666666bbbbbbbbbbbbbbbbb679999966bbbbbbbdd799999999999999999999997c77666666666666666666bbbbbbbbbbbbbbbbb679999966bbbbbbbdd79999999999\n9999999999999cc776666666666666666bbbbbbbbbbbbbbbbbbb699966bbbbbbbbbbd769999999999999999999999cc776666666666666666bbbbbbbbbbbbbbbbbbb699966bbbbbbbbbbd76999999999\n99999999999997cc7776666666666666bbbbbbbbbbbbbbbbbbbb6666bbbbbbbbbbbbd7699999999999999999999997cc7776666666666666bbbbbbbbbbbbbbbbbbbb6666bbbbbbbbbbbbd76999999999\n99999999999999ccc67766666666666bbbbbbbbbbbbbbbbbbbbb66bbbbbbbbbbbbbbd7699999999999999999999999ccc67766666666666bbbbbbbbbbbbbbbbbbbbb66bbbbbbbbbbbbbbd76999999999\n999999999999999ccc6666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66999999999999999999999999ccc6666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66999999999\n9999999999999999cccccc66666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd7669999999999999999999999999cccccc66666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd766999999999\n999999999999999997cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666999999999999999999999999997ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666999999999\n99999999999999999997ccccccccccc6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666799999999999999999999999999997ccccccccccc6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6667999999999\n9999999999999999999997ccccccccc66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666699999999999999999999999999999997ccccccccc66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66669999999999\n999999999999999999999999999999966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666699999999999999999999999999999999999999999966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666699999999999\n9999999999999999999999999999999766bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66669999999999999999999999999999999999999999999766bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666999999999999\n99999999999999999999999999999999666bbbbbbbbbbbbbbbbbbbbbbbbbbb66666999999999999999999999999999999999999999999999666bbbbbbbbbbbbbbbbbbbbbbbbbbb666669999999999999\n999999999999999999999dddddddddddd6666bbbbbbbbbbbbbbbbbbbbbbb66666699999999999999999999999999999999999dddddddddddd6666bbbbbbbbbbbbbbbbbbbbbbb66666699999999999999\n999999999999999999dddddddddddddddd6666666bbbbbbbbbbbbbbbb66666667999999999999999999999999999999999dddddddddddddddd6666666bbbbbbbbbbbbbbbb66666667999999999999999\n9999999999999999dddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999\n99999999999999dddddddddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999\n9999999999999dddddddddddddddddddddddddddd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999\n999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999\n99999999999ddddddddddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999\n99999999999dddddddddddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999\n99999999997dddddddddddddddddd7777777ddddddddddd799999999999999999c6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999c66666666679999\n99999999997ddddddddddddddddddd7777777777dddddd7999999999999999999cc666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999cc6666666666679\n799999999997dddddddddddddddddddd777777777777d799999999999999999997c6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997c6666666666666\n6699999999977ddddddddddddddddddddd7799977777799999999999966b7999997c6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997c666666666666\n66699999999977dddddddddddddddddddddd7999999999999999999966666679999cc6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999cc66666666666\n6667999999999777ddddddddddddddddd777799999999999999999966666666b9997c666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997c66666666666\n66669999999999777777777777777777777799999999999999999966666666666b99cc666666666666669999999999777777777777777777777799999999999999999966666666666b99cc6666666666\n66669bbbb669999977777777777777777999999999999999999996666666666666677c666666666666669bbbb669999977777777777777777999999999999999999996666666666666677c6666666666\n66bbbbbbbb699999999999999999999999999999999999999999966666666666666666666666666666bbbbbbbb6999999999999999999999999999999999999999999666666666666666666666666666\nbbbbbbbbbb699999999999996679999999dddd99ddddd9999999676666666666666666666666666bbbbbbbbbbb699999999999996679999999999999999999999999676666666666666666666666666b\nbbbbbbbbbb67999999999966bbdd799999d11dddd1d1ddd99999b766666666666666666666666bbbbbbbbbbbbb67999999999966bbdd799999999999999999999999b766666666666666666666666bbb\nbbbbbbbbbbb69999999966bbbbbd779999d111dd11d11dd99dddb6766666666666666666666bbbbbbbbbbbbbbbb69999999966bbbbbd779999999999999999999999b6766666666666666666666bbbbb\nbbbbbbbbbbb679999966bbbbbbbdddd9ddd111d111d111dddd1d7bdddd6666666666666666bbbbbbbbbbbbbbbbb679999966bbbbbbbdd799999999999999999999997c77666666666666666666bbbbbb\nbbbbbbbbbbbb699966bbbbbbbbbd11ddddd111d111d1111dd11d9dd11d666666666666666bbbbbbbbbbbbbbbbbbb699966bbbbbbbbbbd769999999999999999999999cc776666666666666666bbbbbbb\nbbbbbbbbbbbb6666bbbbbbbbbbbd111dddd1111d1111111d111ddd111d76666666666666bbbbbbbbbbbbbbbbbbbb6666bbbbbbbbbbbbd7699999999999999999999997cc7776666666666666bbbbbbbb\nbbbbbbbbbbbb66bbbbbbbbbbbbbd1111dddd111d1111111111ddd1111d7766666666666bbbbbbbbbbbbbbbbbbbbb66bbbbbbbbbbbbbbd7699999999999999999999999ccc67766666666666bbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbd11111ddd11111111111111dd11111d6666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66999999999999999999999999ccc6666666666666bbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbd11111ddd1111111111d11ddd1111ddcccc66666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd7669999999999999999999999999cccccc66666666bbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbdd11111ddd1111dd11dddddd11111ddcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666999999999999999999999999997ccccccccccccbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbb6d111111dd11ddd5ddddddd11111dd997ccccccccccc6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666799999999999999999999999999997ccccccccccb6bbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbddd66dd111111ddd5d555dddddd1111ddd9ddddccccccccc66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666699999999999999999999999999999997ccccccccb66bbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbd11ddddd111ddddd55555d5dddd111ddddd1111d9999999966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666699999999999999999999999999999999999999999966bbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbd1111dddd11d11dd5555555dd11d1ddddd1111dd99999999766bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66669999999999999999999999999999999999999999999766bbbbbb\nbbbbbbbbbbbbbbbbbbbbbb66d1111ddddddd111dd555511111ddddd11111dd9999999999666bbbbbbbbbbbbbbbbbbbbbbbbbbb66666999999999999999999999999999999999999999999999666bbbbb\nbbbbbbbbbbbbbbbbbbbb6666dd11111ddddd11111d5d11111dddd111111dddddddddddddd6666bbbbbbbbbbbbbbbbbbbbbbb66666699999999999999999999999999999999999dddddddddddd6666bbb\n6bbbbbbbbbbbbbbbb66666667ddd11111dddd11111d11111ddd11111dddddddddddddddddd6666666bbbbbbbbbbbbbbbb66666667999999999999999999999999999999999dddddddddddddddd666666\n666666666666666666666679777dddd1111ddd11ddddd11dd1111ddddddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd6666\n6666666666666666666679997111111ddddddddd11111ddddddddd111111dddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd66\nd6666666666666666799999971111111111dddd1111111dddd11111111177dddddddddddddddddddd6666666666666666799999999999999999999999999999999999ddddddddddddddddddddddddddd\nddddd7777999999999999999977111111dddddddd111dddddddd11111777ddddddddddddddddddddddddd77779999999999999999999999999999999999999999999dddddddddddddddddddddddddddd\ndddddd77799999999999999999977777dd7d11ddddddddd111dddddd77dddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddd\nddddddd79999999999999999999ddddd771111d111dddd11111177dddd77ddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777dddddddd\nddddddd799999999999999999bddddd7711111d1111ddd711111177dddd77dddddddd7777777ddddddddddd799999999999999999c6666666667999999999999997dddddddddddddddddd7777777dddd\ndddddd7999999999999999999ddddd7711111dd11111dd77111111777777dddddddddd7777777777dddddd7999999999999999999cc666666666667999999999997ddddddddddddddddddd7777777777\n7777d799999999999999999997bddd711111d6dd1111dd997d11111ddddddddddddddddd777777777777d799999999999999999997c6666666666666799999999997dddddddddddddddddddd77777777\n7777799999999999966b7999997c66d111dd666d11111d9999dddddddddddddddddddddddd7799977777799999999999966b7999997c6666666666666699999999977ddddddddddddddddddddd779997\n999999999999999966666679999cc66ddd666666d1111d99999977dddddddddddddddddddddd7999999999999999999966666679999cc6666666666666699999999977dddddddddddddddddddddd7999\n99999999999999966666666b9997c666666666666d111d9999999777ddddddddddddddddd777799999999999999999966666666b9997c666666666666667999999999777ddddddddddddddddd7777999\n9999999999999966666666666b99cc666666666666ddd999999999777777777777777777777799999999999999999966666666666b99cc66666666666666999999999977777777777777777777779999\n99999999999996666666666666677c6666666666666697777669999977777777777777777999999999999999999996666666666666677c66666666666666977776699999777777777777777779999999\n9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"Z,DM#7{9jV0}.ko?0F)^\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":}a0F)fZSn#89Z(GT6tI\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\")v$k]p}0v(7O6hHjb.iq\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"1.znz1g$35J=oTce7MVr\">Enemy</variable><variable id=\";}6j|s4238nr]T/85FsZ\">frog</variable><variable id=\"c5vFr`92Bk$%$C-N|nGK\">fly</variable><variable id=\"mWJjXO9Zj%!,a8ufR)^C\">otherSprite</variable><variable id=\"$Hrfa5}L5U*L/K$()knw\">frog3</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`Background`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.[GbUocpt^e@h97~~1|{K\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5vFr`92Bk$%$C-N|nGK\">fly</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Hero`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5vFr`92Bk$%$C-N|nGK\">fly</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"><field name=\"index\">85</field></shadow></value><value name=\"y\"><shadow type=\"positionPicker\"><field name=\"index\">80</field></shadow></value><next><block type=\"gamecountdown\"><value name=\"duration\"><shadow type=\"math_number\"><field name=\"NUM\">10</field></shadow></value><next><block type=\"hudSetLife\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">3</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\";}6j|s4238nr]T/85FsZ\">frog</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Bouncer`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image2\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"spritesetvel\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\";}6j|s4238nr]T/85FsZ\">frog</field></block></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">200</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">100</field></shadow></value><next><block type=\"spritesetsetbounceonwall\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\";}6j|s4238nr]T/85FsZ\">frog</field></block></value><value name=\"on\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"keyonevent\" x=\"690\" y=\"250\"><field name=\"button\">controller.A</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"controls_if\"><mutation else=\"1\"/><value name=\"IF0\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"spriteoverlapswith\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\";}6j|s4238nr]T/85FsZ\">frog</field></block></value><value name=\"other\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5vFr`92Bk$%$C-N|nGK\">fly</field></block></value></block></value><statement name=\"DO0\"><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">true</field></shadow></value></block></statement><statement name=\"ELSE\"><block type=\"hudChangeLifeBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-1</field></shadow></value></block></statement></block></statement></block></xml>",
  "main.ts": "controller.A.onEvent(ControllerButtonEvent.Pressed, function () {\n    if (frog.overlapsWith(fly)) {\n        game.over(true)\n    } else {\n        info.changeLifeBy(-1)\n    }\n})\nlet frog: Sprite = null\nlet fly: Sprite = null\nscene.setBackgroundImage(assets.image`Background`)\nfly = sprites.create(assets.image`Hero`, SpriteKind.Player)\nfly.setPosition(85, 80)\ninfo.startCountdown(10)\ninfo.setLife(3)\nfrog = sprites.create(assets.image`Bouncer`, SpriteKind.Player)\nfrog.setVelocity(200, 100)\nfrog.setBounceOnWall(true)\n",
  "pxt.json": "{\n    \"name\": \"time-reaction-game\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.4.40\",\n        \"tag\": \"v1.4.40\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6e7016f2daff5c7a6de3f15abd027b9f32fe5b28\",\n        \"target\": \"1.4.40\",\n        \"pxt\": \"6.12.22\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```
