# Stack'em Smurfs
### @explicitHints true

## Intro @showdialog

Something smurfy is going on around here! 

![Code a game starring The Smurfs](https://makecode.com/api/_cYJ8zvdaC9Tp/thumb "An animated image of Smurfs falling from the sky in a sample game.")

This tutorial will show you how to code your very own retro-style arcade game, featuring The Smurfs!




## {2. Your First Block}

**Ready to start coding?**

Let's add a Smurf at ground-level to get things started. 


---


- :sun: Open the ``||smurfy: Smurfy||`` category **in the toolbox** and grab <br/>
``||smurfy:set first Smurf||``.<br/>
Snap it into the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.


💡 _You can click on the image of the Smurf if you want to pick a different one!_

---


~hint What does this mean? 🤷🏽

---

When giving instructions, we'll color some text to give you a better idea of what you are looking for.

For example, when we suggest the <br/>
``||smurfy:set first Smurf||``<br/>
block, we are pointing you toward <br/>

```block
smurfy.set_first_smurf(new_smurf_imgs.jump)
```

hint~



#### ~ tutorialhint

```blocks
//@highlight
smurfy.set_first_smurf(new_smurf_imgs.jump)
```




## {3. Check Your Screen!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should see a Smurf sitting on the ground.

![The game window is in the lower left corner](/static/tutorials/smurfs/game.jpg "Your game will automatically load in this window after every step.")


---

## {4. Add Some Color}

It's a little dark. Let's add some color!

---

- :tree: From the `||scene:Scene||` category, drag<br/>
`||scene:set background color to||`<br/>
into the `||loops(noclick):on start||` block.

💡 _You can click the color box within the block to choose a new background color,
if you like._



#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(new_smurf_imgs.jump)
//@highlight
scene.setBackgroundColor(13)
```


## {5. The More, The Merrier}

Now we need a Smurf to stack!

---

-  :sun: From the `||smurfy:Smurfy||` category, drag<br/>
`||smurfy:new floating Smurf||`<br/>
and snap it into **the end** of the `||loops(noclick):on start||` container.



~hint Why the end? 🤷🏽‍♂️

---

The code we're writing will run from top to bottom within the container where we place it. 
Since the falling Smurf will need another Smurf to land on, we need to make sure this block
comes **after** the block where we set the first Smurf. 

hint~


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(new_smurf_imgs.jump)
scene.setBackgroundColor(13)
//@highlight
smurfy.add_floating_smurf()
```



## {6. Ready to Drop?}

We have a floating Smurf, now we need to let the computer know when to drop it!

---

- :game: From the `||controller:Controller||` category, grab<br/>
`||controller:on A button pressed||`<br/>
and drop it into **an empty area** of the workspace. 

- :sun: Now, go to `||smurfy:Smurfy||` and drag<br/>
`||smurfy:drop Smurf||`<br/>
into the empty<br/>
`||controller(noclick):on A button pressed||`<br/>
container that's now in the workspace. 

---

Give your game a try!  You should be able to drop your Smurf by pressing the (A) button
in the game window, or pressing the **space bar** on your keyboard. 


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    smurfy.drop_smurf()
})
```



## {7. Add Some Drama}

Let's make an impact with sound effects!

---

- :headphones: From the `||music:Music||` category, find any block that interests you and
drop it in anywhere inside the<br/>
`||controller(noclick):on A button pressed||`<br/>
container that's already in your workspace. 


- :mouse pointer: If your block has an<br/>
`||music(noclick):until done||`<br/>
option, click on it to open a dropdown menu, then choose<br/>
`||music(noclick):in background||`

---

~hint What should I pick? 🤷🏽‍♂️

---

You can decide if you want a sound effect each time your (A) button is pressed, 
or if you want to play music, but our example uses a **water drop** sound effect from the 
sound effects **Gallery**. 

```block
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
```

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
})
```


---

## {8. Make It Challenging}

You now have a complete game! Can you believe it?

But the game is pretty easy to win. Let's make it more challenging.

---

- :id card: From the `||info:Info||` category, drag<br/>
`||info:start countdown (10) seconds||`<br/>
into **the end** of your <br/>
`||loops(noclick):on start||` container.


- :id card: You'll want to drag another <br/>
`||info:start countdown (10) seconds||`<br/>
block into **the end** of your <br/>
`||controller(noclick):on A button pressed||` container.


#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(new_smurf_imgs.jump)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
//@highlight
info.startCountdown(10)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    smurfy.drop_smurf()
    //@highlight
    info.startCountdown(10)
})
```



## {9. When Time Runs Out}

This is great, but when time runs out, the game just ends.  Let's give the player 
more chances to make a tall tower.

---

- :id card: From the `||info:Info||` category, drag the<br/>
`||info:on countdown end||`<br/> 
container into **an empty area** of the workspace. 


- :id card: Go back to the `||info:Info||` category, and drag<br/>
`||info:change life by [-1]||`<br/> 
into **the empty** <br/>
`||info(noclick):on countdown end||`<br/> 
container that's now in your workspace. 


- :id card: Finish this part by dragging a new<br/>
`||info:start countdown (10) seconds||`<br/>
block into **the end of** the <br/>
`||info(noclick):on countdown end||`<br/> 
container in your workspace. 

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(10)
})
```


## {10. Increase Lives}

If you want to give your player more chances to win, you can increase the number 
of lives they start with.

---

- :id card: From the `||info:Info||` category, drag<br/>
`||info:set life to (5)||`<br/>
into the `||loops(onclick):on start||` container.

---

That's it!  Now play your game and see if you can make it to the top!

#### ~ tutorialhint

```blocks
smurfy.set_first_smurf(new_smurf_imgs.jump)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.startCountdown(10)
//@highlight
info.setLife(5)
```




## {Finale}

**🥳 Great Job 🥳**

You have finished the tutorial!

When you're ready, click **Done** to share your game with family and friends!


```blockconfig.global
scene.setBackgroundColor(13)
info.setLife(5)
music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
```




```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    info.startCountdown(10)
    smurfy.drop_smurf()
})
info.onCountdownEnd(function () {
    info.startCountdown(10)
    info.changeLifeBy(-1)
})
smurfy.set_first_smurf(new_smurf_imgs.jump)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.setLife(3)
info.startCountdown(10)
music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004120000000400011d04000800012008000c000124`), music.PlaybackMode.InBackground)
music.baDing.play()
```



```package
new_smurf_imgs=github:kiki-lee/new_smurf_imgs
arcade-sprite-data=github:microsoft/arcade-sprite-data#v0.0.5
```



```customts
namespace SpriteKind {
    export const Mountain = SpriteKind.create()
    export const Smurf = SpriteKind.create()
}


//% weight=100 color=#3ea8b8 icon="\uf185"
namespace smurfy {

    let smurf_weight = 0
    let smurf: Sprite = null
    let moving_smurf: Sprite = null
    let current_smurf: Sprite = null
    let bottom_smurf: Sprite = null
    let center_of_gravity = 0
    let mountain_smurfs: Sprite[] = []
    let top_smurf: Sprite = null
    let smurf_fell_off = false
    let village: Image[] = []
    export let speed = 60

    village = [new_smurf_imgs.sit, new_smurf_imgs.squat, new_smurf_imgs.float, new_smurf_imgs.smurfette, 
    new_smurf_imgs.jump, new_smurf_imgs.ken, new_smurf_imgs.profile]

    scene.onOverlapTile(SpriteKind.Smurf, new_smurf_imgs.winCloud, function (sprite, location) {
        game.gameOver(true)
    })

    sprites.onOverlap(SpriteKind.Smurf, SpriteKind.Mountain, function (sprite, otherSprite) {
        sprite.vy = 0
        sprite.ay = 0
        sprite.setKind(SpriteKind.Mountain)
        smurf_fell_off = will_the_smurf_fall_off(sprite, otherSprite)
        if (smurf_fell_off) {
            sprite.startEffect(effects.fire)
        } else if (will_the_stack_fall_down()) {
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            explode_smurfs()
            pause(1000)
            game.over(false)
        } else {
            top_smurf = sprite
            scene.cameraFollowSprite(sprite)
            sprites.setDataSprite(otherSprite, "smurf on top of me", sprite)
            info.changeScoreBy(1)
        }
        add_floating_smurf()
    })




    // calculate new center of gravity
    function will_the_stack_fall_down() {
        mountain_smurfs = sprites.allOfKind(SpriteKind.Mountain)
        center_of_gravity = 0
        for (let value of mountain_smurfs) {
            center_of_gravity += value.x
        }
        if (center_of_gravity / mountain_smurfs.length < bottom_smurf.left || center_of_gravity / mountain_smurfs.length > bottom_smurf.right) {
            return true
        }
        return false
    }

    function explode_smurfs() {
        current_smurf = bottom_smurf
        while (current_smurf) {
            current_smurf.setFlag(SpriteFlag.Ghost, true)
            current_smurf.setVelocity(randint(-200, 200), randint(-200, 200))
            current_smurf = sprites.readDataSprite(current_smurf, "smurf on top of me")
            scene.cameraFollowSprite(null)
        }
    }

    /**
    * Sets Smurf falling
    */
    //% blockId=drop_smurf 
    //% block="drop Smurf"
    export function drop_smurf() {
        moving_smurf.ay = 300
        moving_smurf.vx = 0
        moving_smurf.setFlag(SpriteFlag.BounceOnWall, false)
    }


    /**
    * Places first Smurf on ground
    */
    //% blockId=first_smurf 
    //% block="set first Smurf $myImage"
    //% myImage.shadow=screen_image_picker
    //% myImage.defl=new_smurf_imgs.jump
    //% weight=200
    export function set_first_smurf(myImage: Image) {
        tiles.setTilemap(new_smurf_imgs.level2)
        smurf = sprites.create(myImage, SpriteKind.Mountain)
        smurf.ay = 300
        smurf.setPosition(80, 1225)
        scene.cameraFollowSprite(smurf)
        top_smurf = smurf
        smurf_weight = 22
        bottom_smurf = smurf
    }

    /**
    * Loads next Smurf into the air
    */
    //% blockId=add_smurf 
    //% block="new floating Smurf"
    export function add_floating_smurf() {
        speed = 60 + (info.score() * 3)
        moving_smurf = sprites.create(village[randint(0, village.length - 1)], SpriteKind.Smurf)
        if (moving_smurf.image.equals(top_smurf.image)) {
            sprites.destroy(moving_smurf)
            add_floating_smurf()
        } else {
            moving_smurf.bottom = top_smurf.top - 8
            moving_smurf.x = 80
            moving_smurf.setFlag(SpriteFlag.BounceOnWall, true)
            moving_smurf.vx = speed
        }
    }
    function will_the_smurf_fall_off(falling_smurf: Sprite, smurf_stack: Sprite) {
        if (falling_smurf.x > smurf_stack.right) {
            falling_smurf.setVelocity(50, -50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else if (falling_smurf.x < smurf_stack.left) {
            falling_smurf.setVelocity(-50, 50)
            falling_smurf.setFlag(SpriteFlag.Ghost, true)
            falling_smurf.setFlag(SpriteFlag.AutoDestroy, true)
            info.changeLifeBy(-1)
            return true
        } else {
            return false
        }
    }
    scene.onHitWall(SpriteKind.Smurf, function (sprite, location) {
        if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            game.over(false)
        }
    })
}


```
