# Dino Hoard
### @explicitHints true


## {Intro @showdialog}

Ready to test your agility?

Let's create a game where Harry the Hawk speeds through the cones to get to the hoop.

![Code a Game](/static/tutorials/hawk/hawk.gif "Harry the Hawk takes it to the hoop!" )



## {Step 2}


**Start by adding the Harry the Hawk sprite to your game!**<br/>
🏀 🏀 🏀

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our hawk will be a sprite, too.

hint~



- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab <br/>

```block
let harry = sprites.create(img`.`, SpriteKind.Player)
```

and snap it inside the empty<br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.

~hint Show me how! 🕵🏽


![Add the sprite block.](/static/skillmap/mole/add-sprite.gif "Add a sprite to your game.")

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
image editor and then click the **My Assets** tab.


![My Assets](/static/skillmap/assets/my-assets-three.png "Toggle to see the images for this game" )


- :mouse pointer: Choose **Harry the Hawk** and click **Done**.

![Choose Harry the Hawk from My Assets gallery](/static/tutorials/hawk/mama.png " " )




#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
```

## {3. Look at Your Game}


**Look at the game window.**

- :binoculars: Look at your project in the game window to see what your code is doing.

You should see Harry the Hawk in the middle of the screen.

![Look at the game window](/static/skillmap/mole/game1.png " ")



## {Step 4}

**Harry the Hawk needs to be able to move up and down on the screen.**


- :game: From the ``||controller: Controller||`` category, grab

```block
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
```

and snap it in at **the end** of the ``||loops(noclick): on start||`` block already in the workspace.


~hint Click here to see how 🕵🏽

---

![Look under Controller for the block](/static/skillmap/mole/add-controller.gif "Drag out the controller block to use later.")

hint~

#### ~ tutorialhint

```blocks
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
//@highlight
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)

```


## {Step 4}

**🎮  Try your project using the game screen**

Make sure Harry the Hawk moves up and down with the joypad,
arrow keys, or **W** and **S** keys.



## {Step 6}

**Let's set the scene**<br/>
⛹🏽 ⛹🏽 ⛹🏽

---

- :paper plane:  From ``||scene:Scene||``, grab

```block
scene.setBackgroundImage(img`.`)
```

and snap it into **the top**
of the ``||loops(noclick):on start||`` container.

- :paint brush:  Click the **grey square** and switch to **My Assets** to choose the **BB Court** background

![Choose the freeway from My Assets gallery](/static/tutorials/hawk/freeway.png " " )

<!-- This is how you add the blocks that show up in the lightbulb hint -->

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`Freeway`)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
```
<!------------------ End lightbulb hint -------------------------------->

## {Step 7}

**Add movement to the scene**

---

- :arrows alternate:  To make it look like the dino is walking along the road,
go to ``||scroller:Scroller||`` and drag

```block
scroller.scrollBackgroundWithSpeed(-50, 0)
```

into **the end**
of the ``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
//@highlight
scroller.scrollBackgroundWithSpeed(-50, 0)
```



## {Step 8}

**🎮  Take a look at the game screen 🎮**

Your background should move right-to-left across the screen on its own,
and you should be able to move your dino up and down with the joypad or arrow keys.



## {Step 9}

**The sprite needs something to collect!**
Let's add some baby dinos for the mama dinosaur to rescue 💚

---

- :redo:  From ``||loops:Loops||``, grab the

```block
forever(function () {
    let babyDino = sprites.createProjectileFromSide(img`.`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})
```
loop container and drag it into an empty spot on the workspace.
This will create a new baby dino every second at a random starting height.

- :paint brush:  Click the **grey square** in the ``||sprites:projectile [ ] from side||`` block for ``||variables(noclick):babyDino||`` and toggle to **My Assets** to choose the **Baby** sprite image.

```blockconfig.local
forever(function () {
    let babyDino = sprites.createProjectileFromSide(img`.`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})
```

#### ~ tutorialhint

```blocks
forever(function () {
    //@highlight
    let babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})

```




## {Step 2}

**Play the game in the workspace before you begin** <br/>
🎮 🎮 🎮

Can you move Harry the Hawk around the screen? Do baby dinos walk toward you?



## {Step 3}

**We're off to a great start!!**
Let's add some code that tells the game what to do when mama reaches her baby.

---

- :paper plane:  From ``||sprites:Sprites||``, grab the

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```
container and drop it into an empty area of the workspace.

- :paper plane: To show that mama collected her baby, we want the baby dino to go off the screen when they reach each other. The ``||variables(noclick):sprite||`` variable is a ``||sprites:Player||`` sprite, or **harry**, and ``||variables(noclick):otherSprite||`` is the ``||variables(noclick):projectile||`` sprite which is a **babyDino**.

```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```


## {Step 5}

**🏆 Keeping score 🏆**

Let's add a point to your score each time you save a baby.

---

- :id card:  From ``||info:Info||``, grab

```block
info.changeScoreBy(1)
```
and snap it into **the bottom** of
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Projectile]||``.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    //@highlight
    info.changeScoreBy(1)
})
```


## {Step 6}

**Now try it out on the game screen** <br/>
🎮 🎮 🎮

How do you like your game so far?

When Harry the Hawk overlaps with the babies, you should see them disappear and have a point get added to your score.  If something doesn’t look right, check your work by clicking on the hint.

#### ~ tutorialhint

```blocks

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})

let babyDino: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)

forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})
```





## {Step 7}

**Does this game feel long to you?**<br/>
🕔 🕔 🕔

We haven't added a way to win or lose.
Let's do that now by adding a countdown timer.

---

- :id card:  From ``||info:Info||``,  choose the
```block
info.startCountdown(15)
```
and snap it into the end of the
``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)
//@highlight
info.startCountdown(15)
```


## {Step 8}

**🥇 Everyone's a winner**

Right now, when time runs out, you lose the game. We can change that!

---

- :id card:  From ``||info:Info||``,  grab the

```block
info.onCountdownEnd(function () {
    game.over(true)
})
```
container and drop it into a blank area of the workspace.

```blockconfig.local
info.onCountdownEnd(function () {
    game.over(true)
})
```

#### ~ tutorialhint

```blocks
info.onCountdownEnd(function () {
    game.over(true)
})
```





## {Step 3}

Let's add a new kind of projectile, an ``||sprites:Enemy||``!

---

- :paper plane:  Grab the
``||loops:forever||``
loop container and drop it into an empty area of the workspace.

```block
forever(function () {
    let tourist = sprites.createProjectileFromSide(img`.`, -90, 0)
    tourist.setKind(SpriteKind.Enemy)
    pause(2100)
})
```

- :paint brush:  Click the empty grey box in the ``||sprites:projectile [ ] from side||`` block for ``||variables(noclick):tourist||`` and toggle to **My Assets** to select the blue car.

```blockconfig.local
forever(function () {
    let tourist = sprites.createProjectileFromSide(img`.`, -90, 0)
    tourist.setKind(SpriteKind.Enemy)
    pause(2100)
})
```

#### ~ tutorialhint

```blocks
forever(function () {
//@highlight
    let tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.setKind(SpriteKind.Enemy)
    pause(2100)
})
```


## {Step 4}

**Our new enemy isn't quite ready.**
We still have to set the vertical positions on the screen.

---

- :paper plane:  Wwe'll need to grab

```block
let tourist: Sprite = null
tourist.y = randint(15, 115)
```
and snap it in **below** the projectile block. This causes our tourist ``||sprites:Enemy||`` sprites to start at a different height each time.

#### ~ tutorialhint

```blocks
forever(function () {
    let tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    //@highlight
    tourist.y = randint(15, 115)
    tourist.setKind(SpriteKind.Enemy)
    pause(2100)
})
```

## {Step 6}


**🎮 Now try your game on the game screen 🎮**

How is it working?



## {Step 8}

**😈 Wicked 😈**

Now the program knows the car is an enemy.
What are we going to do about it?

---


- :paper plane:  Since tourist cars are now enemies, grab from ``||sprites:Sprites||`` the

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```
block. This has code to reduce our life points when Mama gets hit by a tourist.

```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    //@highlight
    info.changeLifeBy(-1)
})
```


## {Step 9}

**What an amazing creation!**

This game has it all...drama, enemies, winning, and losing!  Play it through before moving along.

When you're done, click **Done** to return to the main page where you can share your game with family and friends!





## {Step 3 @showdialog}

Let's animate Harry the Hawk!

---

![Select an animation from the gallery](/static/tutorials/hawk/select-anigif.gif "Or use My Assets" )




## {Step 4}


- :chevron down:  In the toolbox, click **Advanced** to reveal the
``||animation:Animation||`` category.

- :sync:  Drag

```block
animation.runImageAnimation(harry, [img`.`], 100, true)
```
into **the bottom** of the
``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
info.startCountdown(15)
//@highlight
animation.runImageAnimation(harry, [img`.`], 100, true)
```


## {Step 5}

**🎥 Let's get animating 🎥**

---

- :paint brush:  To select an animation, click the grey box in
``||animation:animate [harry]||`` and toggle to **My Assets**.

- :mouse pointer:  Select **Mama Moving** and click **Done**.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
info.startCountdown(15)
animation.runImageAnimation(harry, assets.animation`Mama Moving`, 100, true)
```

## {Step 6}

**Watch your speed!**

---

- :mouse pointer:  You can make your animation faster by changing the
**interval** to a lower number. Try using **100** or **200**.

- :mouse pointer:  If you'd like to slow your animation down,
choose a longer **interval**.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
info.startCountdown(15)
//@highlight
animation.runImageAnimation(harry, assets.animation`Mama Moving`, 500, true)
```

## {Step 7}


**Now try your game on the game screen**<br/>
🎮 🎮 🎮

How cool is that?!?



## {Step 8}

**Let's do it again**

You can follow the same steps to animate the baby.

---

- :sync:  Drag

```block
animation.runImageAnimation(babyDino, [img`.`], 100, true)
```
into the ``||loops:forever||`` loop where your main ``||variables(noclick):babyDino||`` is created,
and snap it **just above** the ``||loops:pause [1000]||`` block.

- :mouse pointer:  Choose the **Animated Baby** animation and select the interval.

```blockconfig.local
animation.runImageAnimation(babyDino, img`.`, 100, true)
```

#### ~ tutorialhint

```blocks
forever(function () {
   let babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(0, 120)
    //@highlight
    animation.runImageAnimation(
projectile,
assets.animation`Animated Baby`,
100,
true
)
    pause(1000)
})

```


## {Step 9}


**Try your project on the game screen!**
🎮 🎮 🎮

Looking good!



## {Step 10}

**😈 Wicked 😈**

Now you can do the same thing for your enemy sprite!

---

- :sync:  Drag

```block
animation.runImageAnimation(tourist, img`.`, 100, true)
```
into the ``||loops:forever||`` loop where ``||variables(noclick):tourist||`` is created, and snap it **just above** the ``||loops:pause [2100]||`` block.

- :mouse pointer:  Choose the **Animated Tourist** and select the interval.

```blockconfig.local
animation.runImageAnimation(tourist, img`.`, 100, true)
```

#### ~ tutorialhint

```blocks
forever(function () {
    let tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.y = randint(0, 120)
    tourist.setKind(SpriteKind.Enemy)
    //@highlight
    animation.runImageAnimation(
tourist,
assets.animation`Animated Tourist`,
100,
true
)
    pause(2100)
})
```



## {Step 8}

**Now that's an exciting game!**

Play through your game a few times to appreciate how much you've done!

When you're ready, click **Done** to return to the main page where you can share your game with family and friends!


```blockconfig.global
animation.runImageAnimation(harry, [img`.`], 500, true)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})
let harry = sprites.create(assets.image`Mama`, SpriteKind.Player)
let babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
babyDino.y = 0
babyDino.destroy()
game.over(true)
controller.moveOnlyOnscreenWithArrows(harry, controller.Speeds.Fast)
let tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
tourist.y = randint(15, 115)
tourist.destroy()
tourist.setKind(SpriteKind.Enemy)
```




```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
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
  "README.md": " \n\n\n> Open this page at [https://blaizep.github.io/wip-hawks-dunk-challenge-demo/](https://blaizep.github.io/wip-hawks-dunk-challenge-demo/)\n\n## Use as Extension\n\nThis repository can be added as an **extension** in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **New Project**\n* click on **Extensions** under the gearwheel menu\n* search for **https://github.com/blaizep/wip-hawks-dunk-challenge-demo** and import\n\n## Edit this project ![Build status badge](https://github.com/blaizep/wip-hawks-dunk-challenge-demo/workflows/MakeCode/badge.svg)\n\nTo edit this repository in MakeCode.\n\n* open [https://arcade.makecode.com/](https://arcade.makecode.com/)\n* click on **Import** then click on **Import URL**\n* paste **https://github.com/blaizep/wip-hawks-dunk-challenge-demo** and click import\n\n## Blocks preview\n\nThis image shows the blocks code from the last commit in master.\nThis image may take a few minutes to refresh.\n\n![A rendered view of the blocks](https://github.com/blaizep/wip-hawks-dunk-challenge-demo/raw/master/.github/makecode/blocks.png)\n\n#### Metadata (used for search, rendering)\n\n* for PXT/arcade\n<script src=\"https://makecode.com/gh-pages-embed.js\"></script><script>makeCodeRender(\"{{ site.makecode.home_url }}\", \"{{ site.github.owner_name }}/{{ site.github.repository_name }}\");</script>\n",
  "assets.json": "",
  "images.g.jres": "{\n    \"Bx$o-u1n\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAzMwMAAAAAMAiIsIAAAAAwCIiIgwAAADAIiIiwgAAAAAsIiLCAAAAACwiIiIMAAAAwCIiIsIAAAAsIiIiDAAAACwiIsIAAADAIiIiwgAAAMAiIiIMAAAAwCIiwgAAAAAAzMwMAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Extra Life\"\n    },\n    \":-%p!6dsfn@Cn4?(/f-u\": {\n        \"data\": \"hwQQABAAAAAAAAAA/wAAAAAAAPBE/wAAAAAAT0REDwAAAPD0/0QPAAAA/08RT/QAAPAfQRTxRA/wT0QRRBFPD09ERBFEEU/0T0REEUQRT/TwT0QRRBFPDwDwH0EU8UQPAAD/TxFP9AAAAPD0/0T0AAAAAE9ERA8AAAAA8ET0AAAAAAAA/w8AAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Pylon\"\n    },\n    \"image2\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAAAAAADMzNzAzFIAAADADMD///8tIlIAAMwswvz///8vIlIAwP8iIv+/+/8vIlIAzC8iIv8vsv8vIlvA/y8iIvIvIvwvsszA/yIiIvL/L8EvssvA/yIhIiL/H8EvslIA/PIRUlX/H8EvK1IA/PLxUl/1z/y/zFwAwCIvUv/1///MAMAAwCIiVf/FLLIMAAAAACxSX1/FwBEMAAAAACxSVVXMwMEAAAAAAMAiVcwMwAwAAAAAAAAsVQwAAAAAAAAAAADAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Harry the Hawk\"\n    },\n    \"image3\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAAAAAADMzNzAzFIAAADADMD///8tIlIAAMwswvz///8vIlIAwP8iIv+/+/8vIlIAzC8iIv8vsv8vIlvA/y8iIvIvIvwvsszA/yIiIvL/L8EvssvA/yIhIiL/H8EvslIA/PIRUlX/H8EvK1IA/PLxUl/1z/y/zFwAwCIvUv/1///MAMAAwCIiVf/FLLIMAAAAACxSX1/FwBEMAAAAACxSVVXMwMEAAAAAAMAiVcwMwAwAAAAAAAAsVQwAAAAAAAAAAADAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Harry the Hawk0\"\n    },\n    \"image1\": {\n        \"data\": \"hwSgAHgAAADbvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34//////+P/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34//////+P/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34///////4/////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d2P/////4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34///////4/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34///////4/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34/////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3//////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34/////4///////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34///////4/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34//////+P/////y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34///////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BB Court\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAA8P////8PAABPRPRPRPQA8P9E9E9E/w9P9E/0T/RP9E9E/////0T0T0T0//9PRPRPRET0T0RE9P////////////////////9PRET0T0RE9E9E9P//T0T0T0T/////RPRP9E/0T/RP9PD/RPRPRP8PAE9E9E9E9AAA8P////8PAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Bball\"\n    },\n    \"image5\": {\n        \"data\": \"hwSgAHgAAADbvd37ERHdvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3b/RHB/N3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3b/RHBEd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////8bEf///y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/////////H/H//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////BERER/y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RsRERESHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RMbERESHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RERERESHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///x8RHBEdYSHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////x8REbFtFiHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////x8REbEdESbS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/////88REd/dESbS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/x8R/90c8f/bsSHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34/7wR/xHx///dESHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34HxEcERER8f/fESHS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34HxHMERERZhHLESvS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2PHxE8sRERERG7HCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/GBwRERERZhG7uyzS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d0RHxERERERZrG7uyvS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3BGBERvGEREbG7yyzS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3B/xHBEREREbHczSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3R//8fERHMHMHdHSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3b//8REcExERwRHCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3N//8RERExERwRESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d0RsbsR/x8xGxEcwSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d0fEdER/x8RERHMwSHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34EdH//x8TEcERESHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2PH93//x8xEcERHCHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///x8TERwRHCHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RERwcESHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3///////8Rwc0RwSHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/////8Y///xvMwSHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///8f8Y///x3BESHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///8R3P/4/x+xES/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///+x3P+P///RESzS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd2x0d/bvd3fHCHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd0fsfHbvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd37ERHdvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3b/RHB/N3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3b/RHBEd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvf0bEd/bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3/H/HbvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3////////BERER/y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////x8RsRERESHS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////x8RMbERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////x8RERERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////x8RHBEdYSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////x8REbFtFiHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3/+P///x8REbEdESbS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P/////88REd/dESbS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34/x8R/90c8f/bsSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34/7wR/xHx///dESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34HxEcERER8f/fESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34HxHMERERZhHLESvS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34HxE8sRERERG7HCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d34HxwRERERZhG7uyzS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d0RHxERERERZrG7uyvS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3BGBERvGEREbG7yyzS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3B/xHBEREREbHczSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R+P8fERHMHMHdHSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b//8REcExERwRHCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3N//8RERExERwRESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RsbsR/x8xGxEcwSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0fEdER/x8RERHMwSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34EdH//x8TEcERESHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34H93//x8xEcERHCHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////x8TERwRHCHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////x8RERwcESHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P////8Rwc0RwSHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///xvMwSHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/////8Y///x3BESHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///8f8Y///x+xES/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///8R3I/////RESzS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///+x3P/4///fHCHS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd2x0d/bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd0fsfHbvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd37ERHdvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3b/RHB/N3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3b/RHBEd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvf0bEd/bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3/H/HbvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3////////BERER/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////x8RsRERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////x8RMbERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////x8RERERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////x8RHBEdYSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////x8REbFtFiHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3/+P///x8REbEdESbS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2P/////88REd/dESbS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34/x8R/90c8f/bsSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34/7wR/xHx///dESHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34HxEcERER8f/fESHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34HxHMERERZhHLESvS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34HxE8sRERERG7HCHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34HxwRERERZhG7uyzS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RHxERERERZrG7uyvS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3BGBERvGEREbG7yyzS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3B/xHBEREREbHczSHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R+P8fERHMHMHdHSHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b//8REcExERwRHCHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3N//8RERExERwRESHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RsbsR/x8xGxEcwSHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0fEdER/x8RERHMwSHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34EdH//x8TEcERESHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34H93//x8xEcERHCHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34/////x8TERwRHCHS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d2P/////x8RERwcESHS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3/+P////8Rwc0RwSHS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///xvMwSHS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4///x3BESHS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3/////8Y///x+xES/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3///8f8Y/////RESzS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3///8R3P/4///fHCHS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd2x3N3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd2x0d/bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd0fsfHbvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd37ERHdvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3b/RHB/N3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3b/RHBEd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvf0bEd/bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/////////H/H//y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////BERER/y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RsRERESHS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RMbERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RERERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////x8RHBEdYSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///x8REbFtFiHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////x8REbEdESbS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34/////88REd/dESbS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34/x8R/90c8f/bsSHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34/7wR/xHx///dESHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34HxEcERER8f/fESHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34HxHMERERZhHLESvS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34HxE8sRERERG7HCHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/HxwRERERZhG7uyzS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d0RGBERERERZrG7uyvS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3BHxERvGEREbG7yyzS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3B+BHBEREREbHczSHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3R//8fERHMHMHdHSHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3b//8REcExERwRHCHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3N//8RERExERwRESHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d0RsbsR/x8xGxEcwSHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d0fEdER/x8RERHMwSHS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34EdH//x8TEcERESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34H93//x8xEcERHCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P/////x8TERwRHCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///x8RERwcESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////8Rwc0RwSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///xvMwSHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///x3BESHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4///x+xES/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4///RESzS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P///fHCHS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BB Court w Fans\"\n    },\n    \"image6\": {\n        \"data\": \"hwSgAHgAAADbvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+PgYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4gYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/f3Y+IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/d3Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/9/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/d/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/9/Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXd3Y2IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34ZvZVVYXf3Y+IiCjS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1ob2ZVVVX4gYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1oZm9VVVWFgYj//y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1oZm9VVVWF/////y/S3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d1ob2ZVVVX4/0RERCTS3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34ZvZVVYXvTkRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXuTvRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+3k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+3k5ERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//8iIoLuTvRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34qvoiIoLvTkRERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2or6oiIiL4/0RERCTS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2oqq8iIiKC/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2oqq8iIiKC//+ZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2or6oiIiL4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d34qvoiIoI/M5+Z/y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d2P//8iIoIzP5OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////48z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/z85OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3d3d3d3d3//////48zP5OZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////48/M5+Z/y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P//+ZmSnS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3////////4/2ZmZibS3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49PZGZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49EZPZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////4/01GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3//////49E9GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3/+P///4/01GRmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P//8zM4NEZPZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d343f0zM4NPZGZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y390zMzP4/2ZmZibS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y3d8zMzOD/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y3d8zMzOD//8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3Y390zMzP4//8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d343f0zM4OfmS8i/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d2P//8zM4OZnykiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/5+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4+Z+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/5+SkiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIyZnykiIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34d/fMzIyfmS8iIiLS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14f3fMzMz4LSLy/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14d3/MzMyMLSL//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14d3/MzMyM//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d14f3fMzMz4//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34d/fMzIzv7r+7/y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIzu7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/+7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u7r67uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/v7r+7/y/S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//+7uyvS3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3///////+P///u7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3////////4///u7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49vZu/u/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49mb+bu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////4/29ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3//////49m9ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d3/+P///4/29ubu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d2P//9ERIRmb+bu7i7S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d34M/NERIRvZu/u/y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3d3d3d3d3d3d04PzNERET4///u7i7S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04Mz9ERESE///u7i7S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04Mz9ERESEdHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d04PzNERET4dHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34M/NERIRfVX93dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9ERIRVVXV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/19XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49V9XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/19XV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//+IiIhVVXV3dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34IvKIiIhfVX93dyfS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0oLyKIiIj4dHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oIi+IiIiIdHf//y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oIi+IiIiI//+ZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d0oLyKIiIj4//+ZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d34IvKIiIi/u5+Z/y/S3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d2P//+IiIi7v5uZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3/+P///4/7+5uZmSnS3d3d3d3d3d3d3e3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+7+5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4/7+5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+7v5uZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3//////4+/u5+Z/y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3////////4//+ZmSnS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3t3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P//8zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4//8zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/v7j8z/y/S3d3d3d3d3d3d3d3d3d3d3d3d3e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u7z4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/+/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/u/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/+/j4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P//9VVYXu7z4zMyPS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d34mflVVYXv7j8zMyPS3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2Yn5lVVVX4PTP//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2YmZ9VVVWFPTP//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2YmZ9VVVWF///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2Yn5lVVVX4///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d34mflVVYV/d9/d/y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P//9VVYV3d9fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4/399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3//////49399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3/+P///4/399fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d2P///MzIx3d9fd3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d343f3MzIx/d9/d/y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y393MzMz4///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y3d/MzMyM///d3S3S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y3d/MzMyMpar//y/S3d3t3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d7d3d3d3d3d3d3d3d3d3Y393MzMz4par//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d343f3MzIxPRK+qqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2P///MzIxERKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/+P///4/0RKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49E9KSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////4/0RKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49ERKSqqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3//////49PRK+qqirS3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4par//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+Ppar//y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3///////+P/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3////////4/////y/S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bvd3bvd3bvd3bvS3S3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BB Court w Audience\"\n    },\n    \"image7\": {\n        \"data\": \"hwQQABAAAAD//////wAAAA8AAADwAAAADwAAAPAAAAAPABER8UAEAA8AAQDxBEEADwABAEEQEAQPAAEAQQEBQQ8AAQBBEBBADwABAEEBAUEPAAEAQRAQQA8AAQBBAQEEDwABAPEUQAAPABER8UAEAA8AAADwAAAADwAAAPAAAAD//////wAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BBall Hoop\"\n    },\n    \"anim4\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim4\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDE4MDAxODAwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMGMwMjIyMjIyMjJjYjAwMDAwMDAwMDAwMGMwMjIyMjIyYjIwYzAwMDAwMDAwMDAwMGMwMjIyMmJiMmIwYzAwMDAwMDAwMDAwMDJjMjJiMmJjMjIwYzAwMDAwMDAwMDAwMDVjNTU1NWNjNTVjNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMGMwMjIyMjIyMjJjYjAwMDAwMDAwMDAwMDJjMjIyMjIyYjIwYzAwMDAwMDAwMDAwMDJjMjJiMmJiMmIwYzAwMDAwMDAwMDAwMDVjNTU1NWJjMjIwYzAwMDAwMDAwMDAwMDAwMDAwMGNjNTVjNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMDAwMmMyMjIyMjJjYjAwMDAwMDAwMDAwMDAwYzAyMjIyYjIwYzAwMDAwMDAwMDAwMDAwMmMyMmIyMmIwYzAwMDAwMDAwMDAwMDAwNWM1NTU1YzIwMDAwMDAwMDAwMDAwMDAwMDAwMDVjNTUwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMDAwMmMyMjIyMjJjYjAwMDAwMDAwMDAwMDAwYzAyMjIyMjIwYzAwMDAwMDAwMDAwMDAwMDBjYzIyMjIwYzAwMDAwMDAwMDAwMDAwMDBjMDU1NTVjNTAwMDAwMDAwMDAwMDAwMDA1YzU1MGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMDAwMmMyMjIyMjJjYjAwMDAwMDAwMDAwMDAwYzAyMjIyMjIwYzAwMDAwMDAwMDAwMDAwMDBjYzIyMjIwYzAwMDAwMDAwMDAwMDAwMDBjMDIyMjJjMjAwMDAwMDAwMDAwMDAwMDBjMGM1NTU1NTBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTIyMjIwYzAwMDAwMDAwMmMyMjIyMTIyZjUyMjVjMjAwMDAwMDAwMmMyMjIyMjIyMmY1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZmZmYzUwYzAwMDAwMDAwZmNmZmZmNTJmNTVmYzUwMDAwMDAwMGMwZmZmZmZmZmY1NTU1Y2MwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMGMwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMDAwMmMyMjIyMjJjYjAwMDAwMDAwMDAwMDAwYzAyMjIyMjIwYzAwMDAwMDAwMDAwMDAwMDAyYzIyYjIwYzAwMDAwMDAwMDAwMDAwMDAyYjIyY2IwMDAwMDAwMDAwMDAwMDAwMDA1YzU1YzUwMDAwMDAwMA==\",\n        \"displayName\": \"HarryAnimated\"\n    },\n    \"anim5\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim5\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDE4MDAxODAwMDkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMGMwMjIyMjIyMjJjYmYwZmZmZjAwMDAwMGMwMjIyMjIyYjIwY2YwZjRmNDAwMDAwMGMwMjIyMmJiMmIwYzAwZmYwZjAwMDAwMDJjMjJiMmJjMjIwYzAwMDAwMDAwMDAwMDVjNTU1NWNjNTVjNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjZmYwZjAwMDAwMGMwMjIyMjIyMjJjYmYwZjRmNDAwMDAwMDJjMjIyMjIyYjIwY2YwZmZmZjAwMDAwMDJjMjJiMmJiMmIwY2YwZjRmNDAwMDAwMDVjNTU1NWJjMjIwYzAwZmYwZjAwMDAwMDAwMDAwMGNjNTVjNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjMDAwMDAwMDAwMDAwMmMyMjIyMjJjYjAwZmYwZjAwMDAwMDAwYzAyMjIyYjIwY2YwZjRmNDAwMDAwMDAwMmMyMmIyMmIwY2YwZmZmZjAwMDAwMDAwNWM1NTU1YzIwMGYwZjRmNDAwMDAwMDAwMDAwMDVjNTUwYzAwZmYwZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiMGMwMDAwMDAwMDAwZmRmZmZmZmZjZmNjZmYwZjAwMDAwMDAwMmMyMjIyMjJjYmYwZjRmNDAwMDAwMDAwYzAyMjIyMjIwY2YwZmZmZjAwMDAwMDAwMDBjYzIyMjIwY2YwZjRmNDAwMDAwMDAwMDBjMDU1NTVjNTAwZmYwZjAwMDAwMDAwMDA1YzU1MGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMDAwMmMyMjIyMjJjYmYwZmZmZjAwMDAwMDAwYzAyMjIyMjIwY2YwZjRmNDAwMDAwMDAwMDBjYzIyMjIwYzAwZmYwZjAwMDAwMDAwMDBjMDIyMjJjMjAwMDAwMDAwMDAwMDAwMDBjMGM1NTU1NTBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMDAwMmMyMjIyMjJjYmYwZmZmZjAwMDAwMDAwYzAyMjIyMjIwY2YwZjRmNDAwMDAwMDAwMDAyYzIyYjIwYzAwZmYwZjAwMDAwMDAwMDAyYjIyY2IwMDAwMDAwMDAwMDAwMDAwMDA1YzU1YzUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMDAwMmMyMjIyMjJjYmYwZmZmZjAwMDAwMDAwY2MyMjIyMjIwY2YwZjRmNDAwMDAwMGMwMjUyYzIyYjIwYzAwZmYwZjAwMDAwMDAwNWMyYjIyY2IwMDAwMDAwMDAwMDAwMDAwYzA1YzU1YzUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmZmZmZmZjBjMDAwMDAwMDAwMGMwZmYyYjIyZmZmZmMyY2MwMDAwMDAwMGMwZmZiZjEyZjFmZjEyYzEwMDAwMDAwMGQwZmZmZjFiZjFmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMDAwMmMyMjIyMjJjYmYwZmZmZjAwMDAwMDAwY2MyMjIyMjJjYmYwZjRmNDAwMDAwMGMwMjUyYzIyY2MwYzAwZmYwZjAwMDAwMDAwNWMyMmMyMDAwMDAwMDAwMDAwMDAwMDAwYzA1NTU1MGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwMDBjMGZmY2YwYzAwMDAwMDAwMDAwMDAwMDBjY2ZmZmZjZjBjMDAwMDAwMDAwMDAwYzBmZjJmMjIyMmMyMGMwMDAwMDAwMDAwYzAyZjIyZjIyZjIyYzIwMDAwMDAwMDAwYzAyMjIyMTFmMTUyNTUwYzAwMDAwMDAwMmMyMjIyMTIyZjUyNTVjNTAwMDAwMDAwMmMyMjIyMjIyMjU1NTVjNTAwMDAwMDAwYzAyMjIyNTI1NTU1NTVjNTAwMDAwMDAwYzBmZjIyNTJmZjVmY2NjNTAwMDAwMDAwZmNmZmZmNTJmNTU1Y2MwYzAwMDAwMGMwZmZmZmZmZmY1NWM1MGMwMDAwMDAwMGMwZmYyYmYyZmZmZmNjMDAwMDAwMDAwMGMwZmYyYmYyZmZmZjBjMDAwMDAwMDAwMGMwZmZiZjIyMTFmY2MyY2MwMDAwMDAwMGMwZmZmZjFjMTFmYzEyYzEwMDAwMDAwMGQwZmZmZmNmY2NmZjFiZmYwZjAwMDAwMDAwZmRmZmZmZmZjZmZjZjRmNDAwMDAwMDAwMmMyMjIyMjJjYmYwZmZmZjAwMDAwMDAwYmMyMjIyYzJjYmYwZjRmNDAwMDAwMDAwNWMyMmMyY2MwYzAwZmYwZjAwMDAwMDAwMmMyMmNjMDAwMDAwMDAwMDAwMDAwMDAwNWM1NWM1MGMwMDAwMDAwMA==\",\n        \"displayName\": \"HarrywBall\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Bx$o-u1n\":\n            case \"Extra Life\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . c c c . . . . . c c c . . . \n. c 2 2 2 c c . c c 2 2 2 c . . \n. c 2 2 2 2 2 c 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. . c 2 2 2 2 2 2 2 2 2 c . . . \n. . . c 2 2 2 2 2 2 2 c . . . . \n. . . . c c 2 2 2 c c . . . . . \n. . . . . . c 2 c . . . . . . . \n. . . . . . . c . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \":-%p!6dsfn@Cn4?(/f-u\":\n            case \"Pylon\":return img`\n. . . . . . . f f . . . . . . . \n. . . . . . f 4 4 f . . . . . . \n. . . . . . f 4 4 f . . . . . . \n. . . . . f 4 4 4 4 f . . . . . \n. . . . f f 4 4 4 4 f f . . . . \n. . . f f 1 4 4 4 4 1 f f . . . \n. . f 4 f 1 1 1 1 1 1 f 4 f . . \n. f 4 f 4 4 1 1 1 1 4 4 f 4 f . \nf 4 4 f 1 4 4 4 4 4 4 1 f 4 4 f \nf 4 4 f 1 1 4 4 4 4 1 1 f 4 4 f \n. f 4 4 f 1 1 1 1 1 1 f 4 4 4 f \n. f 4 4 4 f 1 1 1 1 f 4 4 4 f . \n. . f f 4 4 f f f f 4 4 4 f . . \n. . . . f 4 4 4 4 4 4 f f . . . \n. . . . . f f 4 4 f f . . . . . \n. . . . . . . f f . . . . . . . \n`;\n            case \"image2\":\n            case \"Harry the Hawk\":return img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n.......c22222222bc......\n.......c2222222bc.......\n.......c2222bbb2c.......\n......c2222bcb22c.......\n......c55555cc555c......\n`;\n            case \"image3\":\n            case \"Harry the Hawk0\":return img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n.......c22222222bc......\n.......c2222222bc.......\n.......c2222bbb2c.......\n......c2222bcb22c.......\n......c55555cc555c......\n`;\n            case \"image1\":\n            case \"BB Court\":return img`\nbbbffffffff888888fffff888888ffffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888ffffffffffbbbb\ndddfffffff8ffffff8fff8ffffff8fffffffdddddddfffffff8ffffff8fff8ffffff8ffffffdddddddfffffff8ffffff8fff8ffffff8ffffffdddddddfffffff8ffffff8fff8ffffff8fffffffffdddd\ndddffffff8ffffffff8f8ffffffff8ffffffdddddddffffff8ffffffff8f8ffffffff8fffffdddddddffffff8ffffffff8f8ffffffff8fffffdddddddffffff8ffffffff8f8ffffffff8ffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\ndddff8888888ffff8888888ffff8888888ffdddddddff8888888ffff8888888ffff8888888fdddddddff8888888ffff8888888ffff8888888fdddddddff8888888ffff8888888ffff8888888ffffdddd\nbbbf8fffffff8ff8fffffff8ff8fffffff8fbbbbbbbf8fffffff8ff8fffffff8ff8fffffff8bbbbbbbf8fffffff8ff8fffffff8ff8fffffff8bbbbbbbf8fffffff8ff8fffffff8ff8fffffff8ff8bbbb\nddd8fffffffff88fffffffff88fffffffff8ddddddd8fffffffff88fffffffff88fffffffffddddddd8fffffffff88fffffffff88fffffffffddddddd8fffffffff88fffffffff88fffffffff88fdddd\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\nbbbfffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffbbbb\ndddfffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffdddd\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\neeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n            case \"image4\":\n            case \"Bball\":return img`\n. . . f f f f f f f f f f . . . \n. . f 4 4 4 4 f f 4 4 4 4 f . . \n. f f 4 4 4 4 f f 4 4 4 4 f f . \nf 4 f f 4 4 4 f f 4 4 4 f f 4 f \nf 4 4 f f 4 4 f f 4 4 f f 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf f f f f f f f f f f f f f f f \nf f f f f f f f f f f f f f f f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 4 f f 4 f f 4 f f 4 4 4 f \nf 4 4 f f 4 4 f f 4 4 f f 4 4 f \nf 4 f f 4 4 4 f f 4 4 4 f f 4 f \n. f f 4 4 4 4 f f 4 4 4 4 f f . \n. . f 4 4 4 4 f f 4 4 4 4 f . . \n. . . f f f f f f f f f f . . . \n`;\n            case \"image5\":\n            case \"BB Court w Fans\":return img`\nbbbffffffff888888ff1111bd1f8ffffffffbbbbbbbffffffff8888881111bd1f888fffffffbbbbbbbffffffff8888881111bd1f888fffffffbbbbbbbffffffff888888f1111bd1f88ffffffffffbbbb\ndddfffffff8ffffff8f1ccddc11f8fffffffdddddddfffffff8ffffff1ccddc11fff8ffffffdddddddfffffff8ffffff1ccddc11fff8ffffffdddddddfffffff8fffffff1ccddc11ff8fffffffffdddd\ndddffffff8ffffffff8f8ffff111f8ffffffdddddddffffff8ffffffff8f8ff111fff8fffffdddddddffffff8ffffffff8f8ff111fff8fffffdddddddffffff8ffffffff8f8fff111ff8ffffffffdddd\nbbbffffffffffff111111ffffb111fffffffbbbbbbbffffffffff111111ffffb111ffffffffbbbbbbbffffffffff111111ffffb111ffffffffbbbbbbbfffffffffff111111ffffb111ffffffffffbbbb\ndddfffffffffffc111c111fffb11dfffffffdddddddfffffffffc111c111fffb11dffffffffdddddddfffffffffc111c111fffb11dffffffffdddddddffffffffffc111c111fffb11dffffffffffdddd\ndddffffffffff1b1111111fffbdddfffffffdddddddffffffff1b1111111fffbdddffffffffdddddddffffffff1b1111111fffbdddffffffffdddddddfffffffff1b1111111fffbdddffffffffffdddd\nbbbffffffffff11ccc1111f1111fffffff111fbbbbbffffffff11ccc1111f1111ffffffff111fbbbbbffffffff11ccc1111f1111fffffffff111fbbbbfffffffff11ccc1111f1111ffffffffffffbbbb\nfddffffffffff111c3111c11111ffffff11bb1fddddffffffff111c3111c11111fffffff11bb1fddddffffffff111c3111c11111ffffffff11bb1fdddfffffffff111c3111c11111ffffffffffffdddd\n1ddffffffffffff11111c1111fffffff11cc111ddddffffffffff11111c1111ffffffff11cc111ddddffffffffff11111c1111fffffffff11cc111dddfffffffffff11111c1111ffffffffffffffdddd\n1ffffffffffffff11b11b1111fffffffffdddb1ffbbffffffffff11b11b1111ffffffffffdddb1ffbbffffffffff11b11b1111fffffffffffdddb1ffbfffffffffff11b11b1111ffffffffffffffbbbb\n111ffffffffffd11111111111ffffffffffff1111ddffffffffd11111111111fffffffffffff1111ddffffffffd11111111111ffffffffffffdf1111dfffffffffd11111111111ffffffffffffffdddd\n111fff111111cd111111611c1111111f88ffdf111fdf111111cd111111611c1111111f8888fdf111fdf111111cd111111611c1111111f8888fddf111fff111111cd111111611c1111111f888ffffdddd\nd11bf11111111c11111111c111131311ff8fbbd11bf11111111c11111111c111131311ffff8bbd11bf11111111c11111111c111131311ffff8bbbd11bf11111111c11111111c111131311fff8ff8bbbb\ndcc1fc11111111f1111111c333113111fff8dddcc1fc11111111f1111111c333113111fffffdddcc1fc11111111f1111111c333113111fffffddddcc1fc11111111f1111111c333113111ffff88fdddd\ndc11f1111c1111f1616611c11b111111ffffdddc11f1111c1111f1616611c11b111111fffffdddc11f1111c1111f1616611c11b111111fffffddddc11f1111c1111f1616611c11b111111fffffffdddd\nbf1111b311111fff616611111111111cffffbbbf1111b311111fff616611111111111cfffffbbbf1111b311111fff616611111111111cfffffbbbbf1111b311111fff616611111111111cfffffffbbbb\ndddf11111111ffff1111111cc1111ccdbdffdddddf11111111ffff1111111cc1111ccdbdfffdddddf11111111ffff1111111cc1111ccdbdfffddddddf11111111ffff1111111cc1111ccdbdfffffdddd\ndddff11b11bbdfff111bbbc1111cc11c111fddddddf11b11bbdfff111bbbc1111cc11c111ffddddddf11b11bbdfff111bbbc1111cc11c111ffdddddddf11b11bbdfff111bbbc1111cc11c111ffffdddd\nbbbff1111ddddbdfbbbbbcd11cc111c1c111fbbbbbb1111ddddbdfbbbbbcd11cc111c1c111fbbbbbbb1111ddddbdfbbbbbcd11cc111c1c111fbbbbbbbf1111ddddbdfbbbbbcd11cc111c1c111fffbbbb\ndddff1111161ddddcbbbbdd111c11111ccbdddddddd1111161ddddcbbbbdd111c11111ccbddddddddd1111161ddddcbbbbdd111c11111ccbdddddddddf1111161ddddcbbbbdd111c11111ccbddffdddd\ndddfff11116111111cbbbddc1111cc111111cddddddf11116111111cbbbddc1111cc111111cdddddddf11116111111cbbbddc1111cc111111cdddddddff11116111111cbbbddc1111cc111111cffdddd\nbbbfff1116111b1111bbcc111cc1111cc1111bbbbbbf1116111b1111bbcc111cc1111cc1111bbbbbbbf1116111b1111bbcc111cc1111cc1111bbbbbbbff1116111b1111bbcc111cc1111cc1111ffbbbb\ndddfff1111166111b1cbc1111111111111fc1ddddddf1111166111b1cbc1111111111111fc1dddddddf1111166111b1cbc1111111111111fc1dddddddff1111166111b1cbc1111111111111fc1ffdddd\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\neeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n            case \"image6\":\n            case \"BB Court w Audience\":return img`\nbbbffffffff888888fffff888888ffffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888fffffffbbbbbbbffffffff888888fffff888888ffffffffffbbbb\ndddfffffff8f6666f8fff8faaaaf8fffffffdddddddfffffff8fddddf8fff8f7777f8ffffffdddddddfffffff8f3333f8fff8f2222f8ffffffdddddddfffffff8f9999f8fff8fddddf8fffffffffdddd\ndddffffff8f6f66f6f8f8fafaafaf8ffffffdddddddffffff8fdfddfdf8f8f7f77f7f8fffffdddddddffffff8f3f33f3f8f8f2f22f2f8fffffdddddddffffff8f9f99f9f8f8fdfddfdf8ffffffffdddd\nbbbffffffff666666fffffaaaaaaffffffffbbbbbbbffffffffddddddfffff777777fffffffbbbbbbbffffffff333333fffff222222fffffffbbbbbbbffffffff999999fffffddddddffffffffffbbbb\ndddffffffff66ff66fffffaaffaaffffffffdddddddffffffffddffddfffff77ff77fffffffdddddddffffffff33ff33fffff22ff22fffffffdddddddffffffff99ff99fffffddffddffffffffffdddd\ndddfffffffff6666fffffffaaaafffffffffdddddddfffffffffddddfffffff7777ffffffffdddddddfffffffff3333fffffff2222ffffffffdddddddfffffffff9999fffffffddddfffffffffffdddd\nbbbfffffff55555555fff22222222fffffffbbbbbbbfffffff33333333fffccccccccffffffbbbbbbbfffffff44444444fff88888888ffffffbbbbbbbfffffff55555555fffccccccccfffffffffbbbb\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\nbbbfffffff55555555fff22222222fffffffbbbbbbbfffffff33333333fffccccccccffffffbbbbbbbfffffff44444444fff88888888ffffffbbbbbbbfffffff55555555fffccccccccfffffffffbbbb\ndddfffffff55555555fff22222222fffffffdddddddfffffff33333333fffccccccccffffffdddddddfffffff44444444fff88888888ffffffdddddddfffffff55555555fffccccccccfffffffffdddd\ndddff88888885555888888822228888888ffdddddddff888888833338888888cccc8888888fdddddddff88888884444888888888888888888fdddddddff888888855558888888cccc8888888ffffdddd\nbbbf8fdddddf8558feeeeef8228f33333f8fbbbbbbbf8f44444f8338f99999f8cc8feeeeef8bbbbbbbf8f66666f8448f55555f8888fbbbbbf8bbbbbbbf8feeeeef8558f77777f8cc8f44444f8ff8bbbb\nddd8fddfdfddf88feefefeef88f33f3f33f8ddddddd8f44f4f44f88f99f9f99f88feefefeefddddddd8f66f6f66f88f55f5f55f88fbbfbfbbfddddddd8feefefeef88f77f7f77f88f44f4f44f88fdddd\nddd11ddddddd11ffeeeeeeeffff3f333f3ffdddddddff4444444ffff9f999f9ddffeeeeeeefdddddddff6f666f6ff44555555544ffbfbbbfbfdddddddffefeeefeddff7777777ff55444444455ffdddd\nbbb88ddfffdd88ff44dfd44ffff33fff33ffbbbbbbbff66dfd66ffff99fff9922ffeeefeeefbbbbbbbff66fff66ff7755fff5577ffbbfffbbfbbbbbbbffeefffee33ff77fff77ffaa444f444aaffbbbb\nddd88fdddddf88f444eee444ffff33333fffdddddddf666444666ffff99999f22fffeeeeeffdddddddfff66666fff77f55555f77fffbbbbbffdddddddfffeeeeef33fff77777fffaaf44444faaffdddd\nddd88888888888f44f444f44fff9999999ffdddddddf66f666f66fff222222222ffbbbbbbbfdddddddffeeeeeeeff77777777777ff9999999fdddddddff333333333ffdddddddffaaaaaaaaaaaffdddd\nbbbff8888888fff444444444f99999999999bbbbbbbf666666666f2222222222fbbbbbbbbbbbbbbbbbeeeeeeeeeeeff7777777ff9999999999bbbbbbb333333333ffdddddddddddffaaaaaaaffffbbbb\ndddff8888888fff444444444f99999999999dddddddf666666666f222222222ffbbbbbbbbbbdddddddeeeeeeeeeeeff7777777ff9999999999ddddddd333333333ffdddddddddddffaaaaaaaffffdddd\ndddff8888888fff444444444f99f99999f99dddddddf666666666f22f222222ffbbfbbbbbfbdddddddeefeeeeefeeff7777777ff99f99999f9ddddddd33f333333ffddfdddddfddffaaaaaaaffffdddd\nbbbff8888888fff444444444f99f99999f99bbbbbbbf666666666f22f222222ffbbfbbbbbfbbbbbbbbeefeeeeefeeff7777777ff99f99999f9bbbbbbb33f333333ffddfdddddfddffaaaaaaaffffbbbb\ndddff8888888fff444444444f99f99999f99dddddddf666666666f22f222222ffbbfbbbbbfbdddddddeefeeeeefeeff7777777ff99f99999f9ddddddd33f333333ffddfdddddfddffaaaaaaaffffdddd\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\n2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\neeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n            case \"image7\":\n            case \"BBall Hoop\":return img`\nf f f f f f f f f f f f f f f f \nf . . . . . . . . . . . . . . f \nf . . . . . . . . . . . . . . f \nf . . . . . . . . . . . . . . f \nf . . 1 1 1 1 1 1 1 1 1 1 . . f \nf . . 1 . . . . . . . . 1 . . f \nf . . 1 . . . . . . . . 1 . . f \nf . . 1 . . . . . . . . 1 . . f \nf . . 1 1 1 1 1 1 1 1 1 1 . . f \nf f f f f 4 4 4 4 4 4 f f f f f \n. . . . 4 . 1 . 1 . 1 4 . . . . \n. . . 4 . 1 . 1 . 1 . 1 4 . . . \n. . . 4 1 . 1 . 1 . 1 . 4 . . . \n. . . . 4 1 . 1 . 1 . 4 . . . . \n. . . . . 4 1 . 1 . 4 . . . . . \n. . . . . . 4 4 4 4 . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"HarryAnimated\":\n            case \"anim4\":return [img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n.......c22222222bc......\n.......c2222222bc.......\n.......c2222bbb2c.......\n......c2222bcb22c.......\n......c55555cc555c......\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1c...\n........dffffffffccc....\n.......c22222222bc......\n......c22222222bc.......\n......c2222bbbb2c.......\n......c55555cb22c.......\n............cc555c......\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n........c2222222bc......\n.........c22222bc.......\n........c2222bb2c.......\n........c555552c........\n............c555c.......\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1c...\n........dffffffffccc....\n........c2222222bc......\n.........c222222c.......\n..........cc2222c.......\n...........c55555c......\n..........c555c.........\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n........c2222222bc......\n.........c222222c.......\n..........cc2222c.......\n...........c22222c......\n...........c5c5555c.....\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2222c.\n........c2222221f225522c\n........c2222222225f555c\n.........c2222255555555c\n.........cff2225ffff5cc.\n........cfffff255ff55c..\n.......cffffffff5555cc..\n.......cffb22fffffccc...\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1c...\n........dffffffffccc....\n........c2222222bc......\n.........c222222c.......\n..........c2222bc.......\n..........b222bc........\n..........c5555c........\n`];\n            case \"HarrywBall\":\n            case \"anim5\":return [img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1fff.\n........dffffffffccf4f4f\n.......c22222222bc.fffff\n.......c2222222bc..f4f4f\n.......c2222bbb2c...fff.\n......c2222bcb22c.......\n......c55555cc555c......\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1c...\n........dffffffffcccfff.\n.......c22222222bc.f4f4f\n......c22222222bc..fffff\n......c2222bbbb2c..f4f4f\n......c55555cb22c...fff.\n............cc555c......\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1c...\n........dffffffffccc....\n........c2222222bc..fff.\n.........c22222bc..f4f4f\n........c2222bb2c..fffff\n........c555552c...f4f4f\n............c555c...fff.\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1c...\n........dffffffffcccfff.\n........c2222222bc.f4f4f\n.........c222222c..fffff\n..........cc2222c..f4f4f\n...........c55555c..fff.\n..........c555c.........\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1fff.\n........dffffffffccf4f4f\n........c2222222bc.fffff\n.........c222222c..f4f4f\n..........cc2222c...fff.\n...........c22222c......\n...........c5c5555c.....\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1fff.\n........dffffffffccf4f4f\n........c2222222bc.fffff\n.........c222222c..f4f4f\n..........c2222bc...fff.\n..........b222bc........\n..........c5555c........\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1fff.\n........dffffffffccf4f4f\n........c2222222bc.fffff\n........cc222222c..f4f4f\n.......c52c2222bc...fff.\n........c5b222bc........\n.........cc5555c........\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb2ffffffc.....\n.......cffb222ffff2ccc..\n.......cfffb211fff211c..\n.......dffffb11fffb1fff.\n........dffffffffccf4f4f\n........c2222222bc.fffff\n........cc222222bc.f4f4f\n.......c52c222ccc...fff.\n........c5222c..........\n.........c5555c.........\n`, img`\n........................\n............ccc.........\n...........cfffcc.......\n..........ccfffffcc.....\n.........cfff222222cc...\n.........cf2222ff2222c..\n.........c2222111f2555c.\n........c2222221f225555c\n........c22222222255555c\n.........c2222255555555c\n.........cff2225fff5cc5c\n........cfffff255f55ccc.\n.......cffffffff555cc...\n.......cffb22fffffcc....\n.......cffb22fffffc.....\n.......cfffb2211cf2ccc..\n.......cffffc111cf211c..\n.......dfffffcccffb1fff.\n........dffffffffccf4f4f\n........c2222222bc.fffff\n........cb22222cbc.f4f4f\n........c5222cccc...fff.\n........c222cc..........\n........c5555cc.........\n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"c=O*|o.=U6~{t$H=qjo,\">Hoop</variable><variable type=\"KIND_SpriteKind\" id=\"R.t(cIL/Wn-8_wGN30IW\">Player</variable><variable type=\"KIND_SpriteKind\" id=\")*rSs|KvPxD^}V(_@zj3\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"Dh60do)|X/g_LAe2reMi\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"j9kLorXXNIOZ?)B:-CFB\">Enemy</variable><variable id=\"2eudk6u1`Y4lk1@[r}8S\">Cone</variable><variable id=\"%=BID~iQ#6ZDs@N#V?D*\">projectile</variable><variable id=\"sI4/*s5+;fE~{uSc!!av\">HarryDunk</variable><variable id=\"=1BL.Xz]TQt|d_km83G?\">Harry</variable><variable id=\"lQ|]]t+GPl@mDMUXxJ~J\">BBall Hoop</variable><variable id=\"fyNFL3=Q$z~wU:caz=VA\">Basketball</variable></variables></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Hoop = SpriteKind.create()\n}\n",
  "pxt.json": "{\n    \"name\": \"hawk assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"arcade-background-scroll\": \"github:microsoft/arcade-background-scroll/\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.11.37\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
