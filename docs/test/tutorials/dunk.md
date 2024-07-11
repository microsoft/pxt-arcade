# Microsoft Coded Dunk Challenge
### @explicitHints true


## {Intro @showdialog}

Ready to test your agility?

Let's create a game where your player speeds through the cones to get to the hoop.


<!-- ![Code a Game](/static/tutorials/hawk/hawk.gif "Harry the Hawk takes it to the hoop!" ) -->



## {Step 2}


**Start by adding
your player
to the game!**<br/>
🏀 🏀 🏀


- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab
```block
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
```
and snap it inside the empty<br/>
``||loops(noclick): on start||``<br/>
block already in the workspace.





#### ~ tutorialhint

```blocks
//@highlight
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
```



## {Step 3}


**Look at the game window.**

- :binoculars: Look at your project in the game window to see what your code is doing.

You should see your player in the middle of the screen.

![Look at the game window](/static/tutorials/hawk/game.png)



## {Step 4}

**Your player needs to be able to move up and down on the screen.**


- :game: From the ``||controller: Controller||`` category, grab
```block
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
```
and snap it in at **the end** of the<br/>
``||loops(noclick): on start||``<br/>
block already in the workspace.



#### ~ tutorialhint

```blocks
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
//@highlight
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)

```


## {Step 5}


- :binoculars: Try your project using the game window.

Make sure your player moves up and down with the **joypad** or
**arrow keys**.



## {Step 6}

**Let's set the scene**<br/>
⛹🏽 ⛹🏽 ⛹🏽

---

- :tree:  From ``||scene:Scene||``, grab
```block
scene.setBackgroundImage(dunk_imgs.court_w_people)
```
and snap it in at **the end** of the<br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.


- :paint brush:  You can click the image of the basketball court and make edits if you like.



<!-- This is how you add the blocks that show up in the lightbulb hint -->

#### ~ tutorialhint

```blocks
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
//@highlight
scene.setBackgroundImage(dunk_imgs.court_w_people)
```
<!------------------ End lightbulb hint -------------------------------->

## {Step 7}

**Add movement to the scene**

---

- :arrows alternate:  To make it look like your player is running along the court, go to ``||scroller:Scroller||`` and drag
```block
scroller.scrollBackgroundWithSpeed(-90, 0)
```
into **the end** of the<br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.



#### ~ tutorialhint

```blocks
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scene.setBackgroundImage(dunk_imgs.court_w_people)
//@highlight
scroller.scrollBackgroundWithSpeed(-90, 0)
```



## {Step 8}

**Take a look at the game window**
🎮  🎮  🎮

Your background should move right-to-left across the screen
and you should be able to move your player up and down with the joypad or arrow keys.




## {Step 9}

Let's add some cones to dodge!

---

- :redo:  From the ``||loops:Loops||`` category, grab the<br/>

```block
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(dunk_imgs.pylon, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
```

bundle and drop it into an empty area of the workspace. This will spawn random cones on the court until the timer is up.





#### ~ tutorialhint

```blocks
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(dunk_imgs.pylon, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
```



## {Step 10}

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
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
scene.setBackgroundImage(dunk_imgs.court_w_people)
scroller.scrollBackgroundWithSpeed(-90, 0)
//@highlight
info.startCountdown(30)
```

## {Step 11}

**WOW!  That's TOO MANY CONES!**

Let's increase the pause to create some space.

---

- :redo:  Look inside the ``||loops(noclick):forever||`` loop that's already in your workspace to find the pause block and change the numbers to be larger.
```block
    pause(randint(500, 1000))
```
We recommend 500 and 1000, but you can adjust for difficulty!




#### ~ tutorialhint

```blocks
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(dunk_imgs.pylon, -90, 0)
        cone.y = randint(25, 115)
        //@highlight
        pause(randint(500, 1000))
    }
})
```




## {Step 12}


**🎮 Now try your game in the game window 🎮**

How is it working?



## {Step 13}

The cones look great, but nothing happens when your player runs into them.

---


- :paper plane:  To make the cones dangerous, open ``||sprites:Sprites||`` and grab the
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```
bundle and drag it into an **empty area** of the workspace.

This is the code that takes away a life when your player runs into a cone.





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






## {Step 14}

**🎮  Take a look at the game window 🎮**

You should be able to play your game!

Can you **avoid the cones** for **30 seconds**?





## {Step 15}

**Let's animate your player!**

---

- :chevron down:  In the toolbox, click **Advanced** to reveal the
``||animation:Animation||`` category.



- :sync:  Drag
```block
animation.runImageAnimation(player, [img`.`], 100, true)
```
into **the bottom** of the
``||loops(noclick):on start||`` container.




#### ~ tutorialhint

```blocks
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
scene.setBackgroundImage(dunk_imgs.court_w_people)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
//@highlight
animation.runImageAnimation(player, [img`.`], 100, true)
```


## {Step 16}

**🎥 Let's get animating 🎥**

---

- :paint brush:  To select an animation, click the empty grey box in
```block
animation.runImageAnimation(player, dunk_imgs.dribble, 100, true)
```
and switch to the gallery tab.


- :mouse pointer:  Choose the **dribble** animation and select **Done**.





#### ~ tutorialhint

```blocks
let player = sprites.create(assets.image`Harry the Hawk`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
scene.setBackgroundImage(dunk_imgs.court_w_people)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
//@highlight
animation.runImageAnimation(player, [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`], 100, true)
```



## {Step 17}

**🎮 Time for some tricks! 🎮**

---

- :game:  Let's program some tricks to the A and B buttons. From the ``||controller: Controller||`` category, grab the

```block
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```

bundle and drag it into an **empty area** of the workspace.






#### ~ tutorialhint

```blocks
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```

```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```




## {Step 18}

**🎥 Now for the visuals! 🎥**

---

- :paint brush:  First we need to select what trick we want your player to perform. Click **the first** empty grey box in the bundle

```block
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```

and switch to the gallery tab.

- :mouse pointer:  Select **any of the trick animations** and click **Done**.





#### ~ tutorialhint

```blocks
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
    dunk_imgs.dribble,
    75,
    true
    )
})
```



```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```



## {Step 19}

**🎥 Back to Running 🎥**

---

- :paint brush:  We need to make sure to include a block for your player to 
restart the dribble animation, otherwise the player disappears! 

Click **the second** empty grey box in the bundle
```block
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    false
    )
    pause(850)
    //@highlight
    animation.runImageAnimation(
    player,
    dunk_imgs.dribble,
    75,
    true
    )
})

})
```
and switch to the gallery tab.


- :mouse pointer:  Choose the **dribble** animation and select **Done**.



#### ~ tutorialhint

```blocks
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    true
    )
})
```


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```





## {Step 20}

**⌛ Check pause time ⌛**

- :sync: Depending on which trick animation you choose, the animation may 
**stop early** or **pause**. Adjust the number in the pause block
```block
pause(850)
```
to match the timing of the animation. 
You may need to experiment to get it right. 🔬


#### ~ tutorialhint

```blocks
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    false
    )
    //@highlight
    pause(850)
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    true
    )
})
```

## {Step 21}

**🎮 Want variety? 🎮**

- :game: You can **add multiple tricks** by following the **same process**, 
but **adjusting which button is pressed**. Grab another
```block
let player: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
[img`.`,img`.`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
[img`.`,img`.`],
    75,
    true
    )
})
```
bundle, and swap the **A** to **B**. 

After adding animations, your player will perform your chosen trick when **pressing the B button**!





#### ~ tutorialhint

```blocks
let player: Sprite = null

//@highlight
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
    [img`
...........ffffff.......
.........fffffffff......
.........ffffffcfff.....
........ffffcfffcfff....
........fcffccfffccff...
........fccffffefffff...
........fffffffeefff....
........ffeefbfeefff....
........ffe4e1f44ff.....
.........fe4e4444f......
.........f4444444f......
........cffffffff.......
.......cfffffffffc......
.......cffb44fffffc.....
.......cffb44fffffc.....
.......cfffb4411cf4ccc..
.......cffffc111cf411c..
.......dfffffcccffb1fff.
........dffffffffccf4f4f
.......c22222222bc.fffff
.......c2222222bc..f4f4f
.......c2222bbb2c...fff.
......c2222bcb22c.......
......cfffffccfffc......
`],
    75,
    true
    )
})
```


```blockconfig.local
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
dunk_imgs.spin,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
dunk_imgs.dribble,
    75,
    true
    )
})
```


## {Step 22}

**🎮 Let's try some tricks! 🎮**

When you press the **A or B button**, your player will perform the tricks 
you've chosen.

Try doing some tricks while avoiding pylons for 30 seconds!



## {Finale}

**Now make it your own! **<br/>
🏀 🏀 🏀

You can customize any of the animations by drawing new frames. 

Try remixing some of the tricks and see how many you can do while avoiding the pylons.

When you're ready, click **Done** to share your game!





<!---- Be careful touching anything after this point ---->



```blockconfig.global
animation.runImageAnimation(player, dunk_imgs.dribble, 100, true)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})
let player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
game.over(true)
scene.setBackgroundImage(dunk_imgs.court_w_people)
controller.moveOnlyOnscreenWithArrows(player, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(30)
cone.destroy()
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(dunk_imgs.pylon, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})

info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    player,
    [img`.`,img`.`],
    75,
    false
    )
})
```




```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
dunk_imgs=github:kiki-lee/dunk_imgs#v0.0.3
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
    player,
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
let player: Sprite = null
player = sprites.create(dunk_imgs.dribble_stand, SpriteKind.Player)
scene.setBackgroundImage(dunk_imgs.court_w_people)
player.setStayInScreen(true)
info.setLife(5)
scroller.scrollBackgroundWithSpeed(-90, 0)
info.startCountdown(3)
animation.runImageAnimation(
player,
assets.animation`HarryDribblingFinal`,
100,
true
)
forever(function () {
    while (info.countdown() > 0) {
        let cone = sprites.createProjectileFromSide(dunk_imgs.pylon, -90, 0)
        cone.y = randint(25, 115)
        pause(randint(50, 100))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    assets.animation`HarrySomersaultFinal`,
    75,
    false
    )
    pause(1500)
    animation.runImageAnimation(
    player,
    assets.animation`HarryDribblingFinal`,
    75,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    assets.animation`HarryAroundBackFinal`,
    75,
    false
    )
    pause(850)
    animation.runImageAnimation(
    player,
    assets.animation`HarryDribblingFinal`,
    75,
    true
    )
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.runImageAnimation(
    player,
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
    //% block="move $thisSprite=variables_get(player) up or down with speed $mySpeed"
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
