# Atlanta Hawks & Microsoft Coded Dunk Challenge
### @explicitHints true


## {Intro @showdialog}

Ready to test your agility?

Let's create a game where Harry the Hawk speeds through the cones to get to the hoop.

![Code a Game](/static/tutorials/hawk/step-16-harry-animated.gif "Harry the Hawk takes it to the hoop!" )



## {Step 2}


**Start by adding
Harry the Hawk
to your game!**<br/>
🏀 🏀 🏀


- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab <br/>

```block
let harry = sprites.create(img`.`, SpriteKind.Player)
```

and snap it inside the empty<br/>
``||loops(noclick): on start||``<br/>
block already in the workspace.

~hint Show me how! 🕵🏽


![Add the sprite block.](/static/tutorials/hawk/step-2.gif "Add a sprite to your game.")

hint~


#### ~ tutorialhint

```blocks
//@highlight
let harry = sprites.create(img`.`, SpriteKind.Player)
```

## {Step 3}

- :paint brush: Click the grey box inside
```block
let harry = sprites.create(img`.`, SpriteKind.Player)
```
to open the
image editor and then click the<br/>
gallery tab.

<!-- This is how you add the thumbnail image -->

![My Assets](/static/skillmap/assets/gallery.png "Toggle to see the images for this game" )

<!-- --------------------------------------- -->

- :mouse pointer: Choose **Harry the Hawk** and click **Done**.

![Choose Harry the Hawk from My Assets gallery](/static/tutorials/hawk/hth.png " " )


#### ~ tutorialhint

```blocks
//@highlight
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
```
<!--  The image in this block comes from the gallery, not the extension    -->





## {Step 4}


**Look at the game window.**

- :binoculars: Look at your project in the game window to see what your code is doing.

You should see Harry the Hawk in the middle of the screen.

![Look at the game window](/static/skillmap/mole/game1.png " ")



## {Step 5}

**Harry the Hawk needs to be able to move up and down on the screen.**


- :game: From the ``||controller: Controller||`` category, grab

```block
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
```

and snap it in at **the end** of the<br/>
``||loops(noclick): on start||``<br/>
block already in the workspace.


<!-- Put anigifs inside the hints -->


~hint Click here to see how 🕵🏽

---

![Look under Controller for the block](/static/tutorials/hawk/step-5-fast-speed.gif "Drag out the controller block to use later.")

hint~

<!-- --------------------------- -->


#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
//@highlight
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)

```


## {Step 6}

**🎮  Try your project using the game screen**

Make sure Harry the Hawk moves up and down with the **joypad** or
**arrow keys**.



## {Step 7}

**Let's set the scene**<br/>
⛹🏽 ⛹🏽 ⛹🏽

---

- :tree:  From ``||scene:Scene||``, grab

```block
scene.setBackgroundImage(img`.`)
```

and snap it in at **the end** of the<br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.

- :paint brush:  Click the **grey square** and switch to **My Assets** to choose the **Court** background

![Choose the court from My Assets gallery](/static/tutorials/hawk/court.png " " )

<!-- This is how you add the blocks that show up in the lightbulb hint -->

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
//@highlight
scene.setBackgroundImage(assets.image`court`)
```
<!------------------ End lightbulb hint -------------------------------->

## {Step 8}

**Add movement to the scene**

---

- :arrows alternate:  To make it look like Harry the Hawk is running along the court, go to ``||scroller:Scroller||`` and drag

```block
scroller.scrollBackgroundWithSpeed(-90, 0)
```

into **the end** of the<br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
//@highlight
scroller.scrollBackgroundWithSpeed(-90, 0)
```



## {Step 9}

**Take a look at the game screen**
🎮  🎮  🎮

Your background should move right-to-left across the screen
and you should be able to move Harry the Hawk up and down with the joypad or arrow keys.




## {Step 10}

Let's add some cones to dodge!

---

- :redo:  From the ``||loops:Loops||`` category, grab the<br/>

```block
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
```

bundle and drop it into an empty area of the workspace. This will spawn random cones on the court until the timer is up.

- :paint brush:  Click the empty grey box in the<br/>
``||variables:set [cone] to projectile [ ] from side||`` <br/>
block and switch to the gallery to select the orange cone.

![Choose the cone from My Assets gallery](/static/tutorials/hawk/cone.png " " )



#### ~ tutorialhint

```blocks
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
```





## {Step 11}

**The cones won't show up until the countdown clock starts. **

---


- :id card:  From ``||info:Info||``,  choose
```block
info.startCountdown(30)
```
and snap it in **at the end** of the
``||loops(noclick):on start||`` container that's already in the workspace.

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
scroller.scrollBackgroundWithSpeed(-90, 0)
//@highlight
info.startCountdown(30)
```

## {Step 12}

**WOW!  That's TOO MANY CONES!**

Let's increase the pause to create some space.

---

- :redo:  Find the pause block
```block
    pause(randint(50, 100))
```
and change the numbers to be higher.

We recommend **500** to **1000**, but you can adjust for difficulty!


#### ~ tutorialhint

```blocks
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        cone.y = randint(25, 115)
        //@highlight
        pause(randint(500, 1000))
    }
})
```




## {Step 13}


**🎮 Now try your game on the game screen 🎮**

How is it working?



## {Step 14}

The cone is look great, but nothing happens when Harry the Hawk runs into them.

---


- :paper plane:  To make the cones dangerous, open ``||sprites:Sprites||`` and grab the
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```
bundle and drag it into an **empty area** of the workspace.

This is the code that takes away a life when Harry the Hawk runs into a cone.

```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```

#### ~ tutorialhint

```blocks
    //@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    //@highlight
    otherSprite.destroy()
    //@highlight
    info.changeLifeBy(-1)
})
```






## {Step 15}

**🎮  Take a look at the game screen 🎮**

You should be able to play your game!

Can you **avoid the cones** for **30 seconds**?





## {Step 16}

**Let's animate Harry the Hawk!**

---

- :chevron down:  In the toolbox, click **Advanced** to reveal the
``||animation:Animation||`` category.


- :redo:  Drag
```block
animation.runImageAnimation(harry, [img`.`], 100, true)
```
into **the bottom** of the
``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
//@highlight
animation.runImageAnimation(harry, [img`.`], 100, true)
```


## {Step 17}

**🎥 Let's get animating 🎥**

---

- :paint brush:  To select an animation, click the empty grey box in
```block
animation.runImageAnimation(harry, [img`.`], 100, true)
```
and switch to the gallery tab.


- :mouse pointer:  Select the first animation, **HarryDribble**, and click **Done**.

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
//@highlight
animation.runImageAnimation(harry,
assets.animation`HarryFrame`
, 100, true)
```



## {Step 18}

**🎮 Time for some tricks! 🎮**

---

- :game:  Let's program some tricks to the A and B buttons. From the ``||controller: Controller||`` category, grab the
```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})
```
bundle and drag it into an **empty area** of the workspace.


```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})
```

## {Step 19}

**🎥 Now for the visuals! 🎥**

---

- :paint brush:  First we need to select what trick we want Harry to perform. Click **the first** empty grey box in the bundle

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    animation.runImageAnimation(
    harry,
    assets.animation`HarryAroundBackFinal`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryDribble`,
    75,
    true
    )
})
```

and switch to the gallery tab.


- :mouse pointer:  Select **any of the trick animations** and click **Done**.

```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})
```

## {Step 20}

**🎥 Back to Running 🎥**

---

- :paint brush:  We need to make sure to include a block for Harry to start the running animation again. Otherwise he disappears! Click **the second** empty grey box in the bundle

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    false
    )
    pause(850)
    //@highlight
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})
```

and switch to the gallery tab.


- :mouse pointer:  Select **HarryDribble** and click **Done**.

```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    false
    )
    pause(850)
    //@highlight
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    true
    )
})
```

## {Step 21}

**⌛ Check pause time ⌛**

- :redo: Depending on which trick animation you choose, the animation may **get cut short** or **freeze** before the next one starts. Adjust the number in the
```block
pause(850)
```
pause block to match the timing of the animation. You may need to experiment to get it right. 🔬


```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    false
    )
    //@highlight
    pause(850)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    true
    )
})
```

## {Step 22}

**🎮 Want some variety? 🎮**

- :game: You can **add multiple tricks** by following the **same process**, but **adjusting which button is pressed**. Grab the

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})
```

bundle, and swap the **A** to **B**. After adding the animations, Harry will perform your chosen trick when **pressing the B button**!

```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
//@highlight
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryFrame`,
    75,
    true
    )
})
```

## {Step 23}

**🎮 Let's try some tricks! 🎮**

Now when you press the **A or B button**, Harry will perform the tricks you've chosen.

Try using some tricks while avoiding pylons for 30 seconds!

```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryAroundBackFinal`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryDribble`,
    75,
    true
    )
})

```

## {Step 24}

**🏀 Time to dunk! 🏀**

It's time for the **big finale!**

- :id card: From ``||info:Info||``, grab the

```block
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
})
```

bundle from the Info category and drag it into an **empty area** of the workspace.

This code will remove any pylons, stop Harry from moving across the court, and begin the dunk animation.

```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
})
```

## {Step 25}

**🎥 Let's get animating 🎥**

---

- :paint brush:  Let's start by selecting the default dunk animation. Click the **empty grey box** in the bundle
```block
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    //@highlight
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
})
```
and switch to the gallery tab.


- :mouse pointer:  Select **either the regular or trampoline dunk animation**.


```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    //@highlight
    animation.runImageAnimation(
    harry,
    assets.animation`DunkFrame`,
    75,
    false
    )
})
```

## {Step 26}


**Play your game until time is out **<br/>
🎮 🎮 🎮

How cool is that?!?




## {Finale}

**🏀 Make it your own! 🏀**

You can customize any of the animations to make the game your own. Try remixing some of the tricks, and create a new dunk animation!

When you're ready, click **Done** to share your game!



```blockconfig.local

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    true
    )
})

```




<!---- Be careful touching anything after this point ---->



```blockconfig.global
animation.runImageAnimation(harry, [img`.`], 100, true)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})
let harry = sprites.create(img`,`, SpriteKind.Player)
game.over(true)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
cone.destroy()
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(img`.`, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})

info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    harry,
    [img`.`],
    75,
    false
    )
})
```




```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
hawks-imgs=github:kiki-lee/hawks-imgs/

```


```ghost
namespace SpriteKind {
    export const Hoop = SpriteKind.create()
    export const Animation = SpriteKind.create()
}
info.onCountdownEnd(function () {
    scroller.scrollBackgroundWithSpeed(0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    animation.runImageAnimation(
    harry,
    assets.animation`DunkAnimationFinal`,
    50,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let cone: Sprite = null
let Harry: Sprite = null
Harry = sprites.create(assets.image`HarrytheHawk`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`BB Court w Audience`)
Harry.setStayInScreen(true)
info.setLife(5)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(3)
animation.runImageAnimation(
harry,
assets.animation`HarryDribble`,
100,
true
)
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(assets.image`Pylon`, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarrySomersaultFinal`,
    75,
    false
    )
    pause(1500)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryDribble`,
    75,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    harry,
    assets.animation`HarryAroundBackFinal`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    harry,
    assets.animation`HarryDribble`,
    75,
    true
    )
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    harry,
    assets.animation`ShortDunkAnimationFinal`,
    75,
    false
    )
})
```



```customts

namespace controller{

    export enum Speeds {
        //% block="fast"
        Fast,
        //% block="medium"
        Med,
        //% block="slow"
        Slow
    }


    /**
    * Combines a simple "move with arrows"
    * and stay in screen
    */
    //% color="#d54322"
    //% blockId=move_only_onscreen_with_arrows
    //% block="move $thisSprite=variables_get(harry) up or down with speed $mySpeed"
    //% mySpeed.defl=Speeds.Fast
    //% inlineInputMode=inline
    export function moveOnlyOnscreenWithArrows(thisSprite: Sprite, mySpeed: Speeds) {
        thisSprite.setStayInScreen(true)
        if (mySpeed == Speeds.Fast) {
            controller.moveSprite(thisSprite, 0, 225)
        } else if (mySpeed == Speeds.Med) {
            controller.moveSprite(thisSprite, 0, 175)
        } else {
            controller.moveSprite(thisSprite, 0, 100)
        }
    }

}
```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \":-%p!6dsfn@Cn4?(/f-u\": {\n        \"data\": \"hwQQABAAAAAAAAAA/wAAAAAAAPBE/wAAAAAAT0REDwAAAPD0/0QPAAAA/08RT/QAAPAfQRTxRA/wT0QRRBFPD09ERBFEEU/0T0REEUQRT/TwT0QRRBFPDwDwH0EU8UQPAAD/TxFP9AAAAPD0/0T0AAAAAE9ERA8AAAAA8ET0AAAAAAAA/w8AAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Pylon\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAA8P////8PAABPRPRPRPQA8P9E9E9E/w9P9E/0T/RP9E9E/////0T0T0T0//9PRPRPRET0T0RE9P////////////////////9PRET0T0RE9E9E9P//T0T0T0T/////RPRP9E/0T/RP9PD/RPRPRP8PAE9E9E9E9AAA8P////8PAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Bball\"\n    },\n    \"image2\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAAAAAADMzNzAzFIAAADADMD///8tIlIAAMwswvz///8vIlIAwFUiIv+/+/8vIlIAzCUiIv8vsv8vIlvAVSUiIvIvIvwvsszAVSIiIvL/L8EvssvAVSIhIiL/H8EvslIAXPIRUlX/H8EvK1IAXPLxUl/1z/y/zFwAwCIvUv/1///MAMAAwCIiVV/FLLIMAAAAACxVVVXMwBEMAAAAACxVVczMwMEAAAAAAMBVVcwMwAwAAAAAAABcVcUAAAAAAAAAAADAzAwAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"HarrytheHawk\"\n    },\n    \"image6\": {\n        \"data\": \"hwSgAHgAAADbvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+PgYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4gYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/f3Y+IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/d3Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/9/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/d/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/9/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXd3Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34ZvZVVYXf3Y+IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1ob2ZVVVX4gYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1oZm9VVVWFgYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1oZm9VVVWF/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1ob2ZVVVX4/0RERCTS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34ZvZVVYXvTkRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXuTvRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+3k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+3k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//8iIoLuTvRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34qvoiIoLvTkRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2or6oiIiL4/0RERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2oqq8iIiKC/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2oqq8iIiKC//+ZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2or6oiIiL4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34qvoiIoI/M5+Z/y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//8iIoIzP5OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////48z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////48zP5OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////48/M5+Z/y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3////////4/2ZmZibS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49PZGZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49EZPZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4/01GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49E9GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3/+P///4/01GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P//8zM4NEZPZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d343f0zM4NPZGZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y390zMzP4/2ZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y3d8zMzOD/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y3d8zMzOD//8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y390zMzP4//8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d343f0zM4OfmS8i/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P//8zM4OZnykiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/5+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4+Z+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/5+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIyZnykiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34d/fMzIyfmS8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14f3fMzMz4LSLy/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14d3/MzMyMLSL//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14d3/MzMyM//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14f3fMzMz4//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34d/fMzIzv7r+7/y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIzu7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/+7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/v7r+7/y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3///////+P///u7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3////////4///u7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49vZu/u/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49mb+bu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4/29ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49m9ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3/+P///4/29ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2P//9ERIRmb+bu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34M/NERIRvZu/u/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d04PzNERET4///u7i7S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04Mz9ERESE///u7i7S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04Mz9ERESEdHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04PzNERET4dHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34M/NERIRfVX93dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9ERIRVVXV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/19XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49V9XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/19XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//+IiIhVVXV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34IvKIiIhfVX93dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0oLyKIiIj4dHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oIi+IiIiIdHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oIi+IiIiI//+ZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oLyKIiIj4//+ZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34IvKIiIi/u5+Z/y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d2P//+IiIi7v5uZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3/+P///4/7+5uZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+7+5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4/7+5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+7v5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+/u5+Z/y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3////////4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P//8zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//8zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/v7j8z/y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u7z4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/+/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXu7z4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34mflVVYXv7j8zMyPS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2Yn5lVVVX4PTP//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2YmZ9VVVWFPTP//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2YmZ9VVVWF///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2Yn5lVVVX4///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34mflVVYV/d9/d/y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P//9VVYV3d9fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4/399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3//////49399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4/399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P///MzIx3d9fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d343f3MzIx/d9/d/y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y393MzMz4///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y3d/MzMyM///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y3d/MzMyMpar//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y393MzMz4par//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d343f3MzIxPRK+qqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIxERKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/0RKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49E9KSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/0RKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49ERKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49PRK+qqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4par//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+Ppar//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Court\"\n    },\n    \"anim5\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim5\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDE4MDAxODAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMDU1YzUwYzAwMDAwMDAwMDAwMDAwMDBjYzU1NTVjNTBjMDAwMDAwMDAwMDAwYzA1NTI1MjIyMmMyMGMwMDAwMDAwMDAwYzAyNTIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMGMwMjIyMjIyMjJjYmYwZmZmZjAwMDAwMGMwMjIyMjIyYjIwY2YwZjRmNDAwMDAwMGMwMjIyMmJiMmIwYzAwZmYwZjAwMDAwMDJjMjJiMmJjMjIwYzAwMDAwMDAwMDAwMDVjNTU1NWNjNTVjNTAwMDAwMA==\",\n        \"displayName\": \"HarryFrame\"\n    },\n    \"anim6\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim6\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NGIwMDEwMDAwYzAwMDEwMGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==\",\n        \"displayName\": \"DunkFrame\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \":-%p!6dsfn@Cn4?(/f-u\":\n            case \"Pylon\":return img`\n. . . . . . . f f . . . . . . . \n. . . . . . f 4 4 f . . . . . . \n. . . . . . f 4 4 f . . . . . . \n. . . . . f 4 4 4 4 f . . . . . \n. . . . f f 4 4 4 4 f f . . . . \n. . . f f 1 4 4 4 4 1 f f . . . \n. . f 4 f 1 1 1 1 1 1 f 4 f . . \n. f 4 f 4 4 1 1 1 1 4 4 f 4 f . \nf 4 4 f 1 4 4 4 4 4 4 1 f 4 4 f \nf 4 4 f 1 1 4 4 4 4 1 1 f 4 4 f \n. f 4 4 f 1 1 1 1 1 1 f 4 4 4 f \n. f 4 4 4 f 1 1 1 1 f 4 4 4 f . \n. . f f 4 4 f f f f 4 4 4 f . . \n. . . . f 4 4 4 4 4 4 f f . . . \n. . . . . f f 4 4 f f . . . . . \n. . . . . . . f f . . . . . . . \n`;\n            case \"image4\":\n            case \"Bball\":return img`\n. . . f f f f f f f f f f . . . \n. . f 4 4 4 4 f f 4 4 4 4 f . . \n. f f 4 4 4 4 f f 4 4 4 4 f f . \nf 4 f f 4 4 4 f f 4 4 4 f f 4 f \nf 4 4 f f 4 4 f f 4 4 f f 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 f f 4 4 f f 4 4 f f 4 4 f \nf 4 f f 4 4 4 f f 4 4 4 f f 4 f \n. f f 4 4 4 4 f f 4 4 4 4 f f . \n. . f 4 4 4 4 f f 4 4 4 4 f . . \n. . . f f f f f f f f f f . . . \n`;\n            case \"image2\":\n            case \"HarrytheHawk\":return img`\n........................\n............ccc.........\n...........c555cc.......\n..........cc55555cc.....\n.........c555222222cc...\n.........c52222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555ccc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n.......c22222222bc......\n.......c2222222bc.......\n.......c2222bbb2c.......\n......c2222bcb22c.......\n......c55555cc555c......\n`;\n            case \"image6\":\n            case \"Court\":return img`\nbbbffffffff888888fffff888888ffffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888ffffffffffbbbb\ndddfffffff8f6666f8fff8faaaaf8fffffffdddddddfffffff8fddddf8fff8f7777f8ffffffdddddddfffffff8f3333f8fff8f2222f8ffffffdddddddfffffff8f9999f8fff8fddddf8fffffffffdddd\ndddffffff8f6f66f6f8f8fafaafaf8ffffffdddddddffffff8fdfddfdf8f8f7f77f7f8fffffdddddddffffff8f3f33f3f8f8f2f22f2f8fffffdddddddffffff8f9f99f9f8f8fdfddfdf8ffffffffdddd\nbbbffffffff666666fffffaaaaaaffffffffbbbbbbbffffffffddddddfffff777777fffffffbbbbbbbffffffff333333fffff222222fffffffbbbbbbbffffffff999999fffffddddddffffffffffbbbb\ndddffffffff66ff66fffffaaffaaffffffffdddddddffffffffddffddfffff77ff77fffffffdddddddffffffff33ff33fffff22ff22fffffffdddddddffffffff99ff99fffffddffddffffffffffdddd\ndddfffffffff6666fffffffaaaafffffffffdddddddfffffffffddddfffffff7777ffffffffdddddddfffffffff3333fffffff2222ffffffffdddddddfffffffff9999fffffffddddfffffffffffdddd\nbbbfffffff55555555fff22222222fffffffbbbbbbbfffffff33333333fffccccccccffffffbbbbbbbfffffff44444444fff88888888ffffffbbbbbbbfffffff55555555fffccccccccfffffffffbbbb\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\nbbbfffffff55555555fff22222222fffffffbbbbbbbfffffff33333333fffccccccccffffffbbbbbbbfffffff44444444fff88888888ffffffbbbbbbbfffffff55555555fffccccccccfffffffffbbbb\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\ndddff88888885555888888822228888888ffdddddddff888888833338888888cccc8888888fdddddddff88888884444888888888888888888fdddddddff888888855558888888cccc8888888ffffdddd\nbbbf8fdddddf8558feeeeef8228f33333f8fbbbbbbbf8f44444f8338f99999f8cc8feeeeef8bbbbbbbf8f66666f8448f55555f8888fbbbbbf8bbbbbbbf8feeeeef8558f77777f8cc8f44444f8ff8bbbb\nddd8fddfdfddf88feefefeef88f33f3f33f8ddddddd8f44f4f44f88f99f9f99f88feefefeefddddddd8f66f6f66f88f55f5f55f88fbbfbfbbfddddddd8feefefeef88f77f7f77f88f44f4f44f88fdddd\nddd11ddddddd11ffeeeeeeeffff3f333f3ffdddddddff4444444ffff9f999f9ddffeeeeeeefdddddddff6f666f6ff44555555544ffbfbbbfbfdddddddffefeeefeddff7777777ff55444444455ffdddd\nbbb88ddfffdd88ff44dfd44ffff33fff33ffbbbbbbbff66dfd66ffff99fff9922ffeeefeeefbbbbbbbff66fff66ff7755fff5577ffbbfffbbfbbbbbbbffeefffee33ff77fff77ffaa444f444aaffbbbb\nddd88fdddddf88f444eee444ffff33333fffdddddddf666444666ffff99999f22fffeeeeeffdddddddfff66666fff77f55555f77fffbbbbbffdddddddfffeeeeef33fff77777fffaaf44444faaffdddd\nddd88888888888f44f444f44fff9999999ffdddddddf66f666f66fff222222222ffbbbbbbbfdddddddffeeeeeeeff77777777777ff9999999fdddddddff333333333ffdddddddffaaaaaaaaaaaffdddd\nbbbff8888888fff444444444f99999999999bbbbbbbf666666666f2222222222fbbbbbbbbbbbbbbbbbeeeeeeeeeeeff7777777ff9999999999bbbbbbb333333333ffdddddddddddffaaaaaaaffffbbbb\ndddff8888888fff444444444f99999999999dddddddf666666666f222222222ffbbbbbbbbbbdddddddeeeeeeeeeeeff7777777ff9999999999ddddddd333333333ffdddddddddddffaaaaaaaffffdddd\ndddff8888888fff444444444f99f99999f99dddddddf666666666f22f222222ffbbfbbbbbfbdddddddeefeeeeefeeff7777777ff99f99999f9ddddddd33f333333ffddfdddddfddffaaaaaaaffffdddd\nbbbff8888888fff444444444f99f99999f99bbbbbbbf666666666f22f222222ffbbfbbbbbfbbbbbbbbeefeeeeefeeff7777777ff99f99999f9bbbbbbb33f333333ffddfdddddfddffaaaaaaaffffbbbb\ndddff8888888fff444444444f99f99999f99dddddddf666666666f22f222222ffbbfbbbbbfbdddddddeefeeeeefeeff7777777ff99f99999f9ddddddd33f333333ffddfdddddfddffaaaaaaaffffdddd\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\neeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"HarryFrame\":\n            case \"anim5\":return [img`\n........................\n............ccc.........\n...........c555cc.......\n..........cc55555cc.....\n.........c555222222cc...\n.........c52222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1fff.\n........dffffffffccf4f4f\n.......c22222222bc.fffff\n.......c2222222bc..f4f4f\n.......c2222bbb2c...fff.\n......c2222bcb22c.......\n......c55555cc555c......\n`];\n            case \"DunkFrame\":\n            case \"anim6\":return [img`\nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"~ZG({o~F1N6%y:MiOj1g\">Harry</variable><variable id=\"U2}cxdJF{vJHYU0iIlt2\">Cone</variable><variable id=\"CK!kmhRinqy=O4SWNh+F\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"8hcoQF27i$uQ@N7=1~U`\">Hoop</variable><variable type=\"KIND_SpriteKind\" id=\"H?52372-HtS)3Jtn/Bx:\">Animation</variable><variable type=\"KIND_SpriteKind\" id=\"X/1Gt3]7G/y|3!(r%Z7*\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"6Y=@q^;M/lxC$LY6OriW\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"~SoTguoioMm8{7Msz4rU\">Food</variable><variable type=\"KIND_SpriteKind\" id=\":C7T1*e}Bvp7^lB3Bds]\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"27Xo/LYDzKW}s(-)~Ch$\">GameOver</variable></variables></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Hawks-assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"testFiles\": [],\n    \"targetVersions\": {\n        \"target\": \"1.12.18\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#FF93C4\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#249CA3\",\n        \"#78DC52\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#757575\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
