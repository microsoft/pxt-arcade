# Two Player

### @explicitHints true


## {Intro @showdialog}

This tutorial will help you turn your game into a two-player event!

![Use what you've learned to add a second player](/static/skillmap/balloon/balloon4.gif "We can add a second mouse and balloon." )




## {2. Play Your Game}


**Play the game!**

- :mouse pointer: Click the mini **game window** in the bottom corner to open the playable console!

Press the (A) button as fast as you can.  You should see a mouse pumping up a balloon that gets bigger and bigger until it crosses the line and wins the game.

~hint What if it doesn't work? 💡

If your code doesn't work, start by looking to see if you can figure out what is going wrong.  Make sure each block is in the correct event container.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(mySprite, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    game.over(true)
})

let myMouse: Sprite = null
let mySprite: Sprite = null
info.startCountdown(20)
scene.setBackgroundColor(1)
mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
mySprite.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)
```

If those steps don't solve your problem, click "Replace my code" to replace the blocks in your workspace with new starter code.

hint~

---
---


## {3. Add Second Player}

Follow the steps from previous levels to add a second player that reacts to the (B) button!

- :lightbulb: Can you figure out what to do by yourself?

**Don't forget to try your game after each step!**

---
---


## {4. Add a Second Button Event}

- :lightbulb: Start by adding an <br/>
``||controller:on [B] button [Pressed]||`` <br/>
block to the workspace, then add a point for **player 2** each time it's clicked.


~hint What does that mean? 💡

In harder tutorials, we won't be showing you the exact block you need any more.

Instead, we'll give you the _name_ of what you need, and highlight it in the same color as the block you will find in the toolbox.

For example, this text: </br>
``||controller:on [A] button [Pressed]||``<br/>
is trying to direct you toward this block:<br/>

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

And this text <br/>
``||info:change player [1] score by [1]||``<br/>
is trying to direct you toward this block:<br/>

```block
    info.player1.changeScoreBy(1)
})
```


hint~

~hint Remind me... 🕵️


![Balloon Bursting Carnival Final Level - Add B](youtube:ow6P7wTs3Uk)

hint~



---
---

#### ~ tutorialhint
```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
})
```


## {5. Add the Balloon}

- :lightbulb: Can you figure out how to add the second balloon for the second player?

_(You'll need to move player 1 to the left, and set player 2 further right.)_


~hint Tell me more... 🕵️

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||variables: set [mySprite2] to sprite [ ] of kind [Player]||`` <br/>
and snap it inside at the **end** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Select the image of the blue balloon.

- :mouse pointer: Duplicate your <br/>
``||sprites: set [mySprite] position to x [80] y [93]||`` <br/>
block and snap the copy inside at the **end** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Change ``||variables:mySprite||`` to ``||variables:mySprite2||`` and change the x value from 80 to **110**.

- :mouse pointer: Change the positions for **mySprite** and **myMouse** to each have an x value of **50**.


hint~

~hint Show me! 🕵️


![Balloon Bursting Carnival Final Level - Add Balloon](youtube:ow6P7wTs3Uk)

hint~

---
---

#### ~ tutorialhint
```blocks
let mySprite2: Sprite = null
let myMouse: Sprite = null
let mySprite: Sprite = null
info.startCountdown(20)
scene.setBackgroundColor(1)
mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
mySprite.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
mySprite2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
mySprite2.setPosition(110, 93)
```

---
---



## {6. Add the Mouse}

- :lightbulb: Now it's time to add the second mouse in front of the second balloon!


~hint Tell me more... 🕵️

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||variables: set [mySprite3] to sprite [ ] of kind [Player]||`` <br/>
and snap it inside at the **end** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Rename the sprite **myMouse2**, select the **mouse2-up** image, and set the kind to **Mouse**.

- :mouse pointer: Duplicate your <br/>
``||sprites: set [mySprite2] position to x [110] y [93]||`` <br/>
block and snap the copy inside at the **end** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Change ``||variables:mySprite2||`` to ``||variables:myMouse2||``.

hint~

~hint Show me! 🕵️


![Balloon Bursting Carnival Final Level - Add Mouse](youtube:ow6P7wTs3Uk)

hint~

---
---

#### ~ tutorialhint
```blocks
let mySprite2: Sprite = null
let myMouse: Sprite = null
let mySprite: Sprite = null
let myMouse2: Sprite = null
info.startCountdown(20)
scene.setBackgroundColor(1)
mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
mySprite.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
mySprite2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
mySprite2.setPosition(110, 93)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
```

---
---


## {7. Push Mouse 2}

You're almost there!

- :lightbulb: Make the second mouse look like it's pushing and releasing the handle when the (B) button is pushed and released.


~hint Tell me more... 🕵️

- :game: From the ``||controller: Controller||`` category in the toolbox, grab <br/>
``||controller:on [A] button [Pressed]||``<br/>
and drop it into an empty area of the workspace.

- :mouse pointer: Change  ``||controller:A||``  to  ``||controller:B||`` and change<br/>
``||controller:pressed||`` to ``||controller:released||``.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab two <br/>
``||sprites: set [mySprite] image to [ ]||`` <br/>
blocks and snap each into the <br/>
``||controller: on [B] button||`` <br/>
blocks already in your workspace.

- :mouse pointer: Change  ``||variable:mySprite||``  to  ``||variable:myMouse2||`` in both places.

- :mouse pointer: Choose the correct **mouse2** image for each block.

hint~

~hint Show me! 🕵️


![Balloon Bursting Carnival Final Level - Move Mouse](youtube:ow6P7wTs3Uk)

hint~

---
---


#### ~ tutorialhint
```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let myMouse2: Sprite = null

    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
})

controller.B.onEvent(ControllerButtonEvent.Released, function () {
        let myMouse2: Sprite = null

    myMouse2.setImage(assets.image`mouse2-up`)
})
```


## {8. Inflate the Balloon}

Last step!

- :lightbulb: Time to make sure that the second balloon gets bigger with each step.


~hint Tell me more... 🕵️

- :up-down: From the ``||scaling: Scaling||`` category in the toolbox, grab <br/>
``||scaling: change [mySprite] scale by [1] pixels [uniformly] anchor [bottom]|| `` <br/>
and snap it into the <br/>
``||controller: on [B] button [pressed]||`` <br/>
block already in the workspace.

- :mouse pointer: Change **mySprite** to **mySprite2**.


hint~

~hint Show me! 🕵️


![Balloon Bursting Carnival Final Level - Inflate](youtube:ow6P7wTs3Uk)

hint~

---
---


#### ~ tutorialhint
```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let myMouse2: Sprite = null
    info.changeScoreBy_defl1(info.player1, 1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels_defl(mySprite, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})

controller.B.onEvent(ControllerButtonEvent.Released, function () {
        let myMouse2: Sprite = null

    myMouse2.setImage(assets.image`mouse2-up`)
})
```




## {8. Play Your Game!}

**Try your game!**

- :mouse pointer: Click the mini **game window** in the bottom corner to open the playable console!

Grab a friend and have them press the space bar while you press the 'x' key.  Who makes it to the top first?

💡 ** Tip:** _Now that you have someone to race against, you can right-click and choose "Delete Blocks" to delete_ <br/>
``||info: start countdown [20] (s)||``<br/>
_from_ ``||loops: on start||``.


---
---



## {10. Finale}

**🥳 You've done it 🥳**

You've finished the entire skillmap!

When you're ready, click **Done** to return to the skillmap and click the button in the side panel to share your game with friends!







```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling/
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "\n//% color=\"#d39a02\" icon=\"\\uf0e7\"\n//% block=\"Simplified\"\nnamespace simplified {\n\n    /**\n     * Allows your sprite to jump only if it's currently\n     * on a floor or without velocity.\n     * Expand the + to add jumping power.\n     */\n    //% group=Sprites\n    //% color=\"#3b6fe9\"\n    //% blockId=gravity_jump\n    //% block=\"make $thisSprite gravity jump || with power $velo\"\n    //% thisSprite.shadow=variables_get\n    //% thisSprite.defl=mySprite\n    //% velo.defl=-200\n    //% help=github:simple-blocks/docs/gravity-jump\n    export function gravity_jump(thisSprite: Sprite, velo?: number) {\n        if (velo == undefined) {\n            velo = -200;\n        }\n        if (thisSprite.vy == 0 || thisSprite.isHittingTile(CollisionDirection.Bottom) || (thisSprite.bottom >= (scene.cameraTop() + 120) && (thisSprite.flags & SpriteFlag.StayInScreen))) {\n            thisSprite.vy = -Math.abs(velo)\n        }\n    }\n\n\n    /**\n         * Moves center of sprite to a random location \n         * on the 160 x 120 screen with optional\n         * center point and range\n         */\n    //% group=Sprites\n    //% color=\"#3b6fe9\"\n    //% blockId=move_random\n    //% inlineInputMode=inline\n    //% block=\"move $thisSprite to random position || +/- $range px from x $xloc y $yloc\"\n    //% thisSprite.shadow=variables_get\n    //% thisSprite.defl=mySprite\n    //% range.defl=60\n    //% xloc.defl=80\n    //% yloc.defl=60\n    //% expandableArgumentMode=\"toggle\"\n    //% help=github:simple-blocks/docs/move-random\n    export function move_sprite_random(thisSprite: Sprite, range?: number, xloc?: number, yloc?: number) {\n        if (range == undefined) {\n            thisSprite.setPosition(randint(0, 160), randint(0, 120))\n        } else {\n            thisSprite.setPosition(xloc + randint(-range, range), yloc + randint(-range, range))\n        }\n    }\n\n\n\n\n    /**\n     * Randomly chooses one of the parameter images\n     *\n     * @param choice1 Image choice to appear in the list of player choices\n     * @param choice2 Image choice to appear in the list of player choices\n     * @param choice3 Image choice to appear in the list of player choices\n     * @param choice4 Image choice to appear in the list of player choices\n     * @param choice5 Image choice to appear in the list of player choices\n     */\n\n    //% group=Arrays\n    //% color=\"#fa8f08\"\n    //% blockId=choose_random_from_array\n    //% block=\"choose one of $choice1 $choice2 || $choice3 $choice4 $choice5\"\n    //% choice1.shadow=screen_image_picker\n    //% choice2.shadow=screen_image_picker\n    //% choice3.shadow=screen_image_picker\n    //% choice4.shadow=screen_image_picker\n    //% choice5.shadow=screen_image_picker\n    //% inlineInputMode=inline\n    //% help=github:simple-blocks/docs/choose-image\n    export function chooseRandomImage(choice1: Image, choice2: Image, choice3?: Image, choice4?: Image, choice5?: Image) {\n        let myList = [choice1, choice2];\n        if (choice3) myList.push(choice3);\n        if (choice4) myList.push(choice4);\n        if (choice5) myList.push(choice5);\n        return myList._pickRandom();\n    }\n\n\n    /**\n     * Randomly chooses one of the parameter images\n     *\n     * @param choice1 Numeric choice to appear in the list of player choices\n     * @param choice2 Numeric choice to appear in the list of player choices\n     * @param choice3 Numeric choice to appear in the list of player choices\n     * @param choice4 Numeric choice to appear in the list of player choices\n     * @param choice5 Numeric choice to appear in the list of player choices\n     */\n\n    //% group=Arrays\n    //% color=\"#fa8f08\"\n    //% blockId=choose_random_num_from_array\n    //% block=\"choose one of $choice1 $choice2 || $choice3 $choice4 $choice5\"\n\n    //% inlineInputMode=inline\n    //% help=github:simple-blocks/docs/choose-num\n    export function chooseRandomNumber(choice1: number, choice2: number, choice3?: number, choice4?: number, choice5?: number) {\n        let myList = [choice1, choice2];\n        if (choice3) myList.push(choice3);\n        if (choice4) myList.push(choice4);\n        if (choice5) myList.push(choice5);\n        return myList._pickRandom();\n    }\n\n    /**\n * Randomly chooses one of the parameter images\n *\n * @param choice1 String choice to appear in the list of player choices\n * @param choice2 String choice to appear in the list of player choices\n * @param choice3 String choice to appear in the list of player choices\n * @param choice4 String choice to appear in the list of player choices\n * @param choice5 String choice to appear in the list of player choices\n */\n\n    //% group=Arrays\n    //% color=\"#fa8f08\"\n    //% blockId=choose_random_string_from_array\n    //% block=\"choose one of $choice1 $choice2 || $choice3 $choice4 $choice5\"\n\n    //% inlineInputMode=inline\n    //% help=github:simple-blocks/docs/choose-string\n    export function chooseRandomString(choice1: string, choice2: string, choice3?: string, choice4?: string, choice5?: string) {\n        let myList = [choice1, choice2];\n        if (choice3) myList.push(choice3);\n        if (choice4) myList.push(choice4);\n        if (choice5) myList.push(choice5);\n        return myList._pickRandom();\n    }\n}\n",
  "images.g.jres": "{\n    \"Qv@;p79@e|(fGBFKaJ@[\": {\n        \"data\": \"hwQQABAAAAAAAO7u7u7u7gDg7u7u7u7uAO7u7u7u7u4A7u7u7u7v7gDu7v7u7v7uAO7u7u/v/u4A7v/u8+7+7gDu7u4z7v7uAO7u7jPu/u4A7v/u8+7+7gDu7u7v7/7uAO7u/u7u/u4A7u7u7u7v7gDu7u7u7u7uAODu7u7u7u4AAO7u7u7u7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mole\"\n    },\n    \"/LJ4HDC9/+6j@JGvC7#:\": {\n        \"data\": \"hwSgAHgAAABmZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d397u7u8t/d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3f3v7u7u8z8f3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3e/u7u7y8zM/3d3d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3e/u7u7y8zM/Hd3d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d7+7u7vLzMzMzMx/d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d397u7u7vLzMzMzMx/d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d7+7u7vLzMzMzPx3d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d/e7u7u7zMzMzPx3d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3e/u7u7zMzM/Hd3d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3f3u7u7y8zM/3d3d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3f3v7u7y8z8f3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d397u7u8t8d3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"grid\"\n    },\n    \"Oag!`vsg+~Y,+WT2meT;\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNwNAAAAAAAAAAAAAAAAAMDcDQAAAAAAAAAAAAAAAMDcvQsAAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAAMDcvQsAAAAAAABABAAAAMDcvQsAAAAAAAAAQAQAAADA3L0LAAAAAAAAQCTiDgDA3L0LAAAAAAAAAEAk4g4AwNy9CwAAAAAAAEAk4u7uzty9CwAAAAAAAABAJOLu7s7cvQsAAAAAAABAJOLu7u7evQsAAAAAAAAAQCTi7u7u3r0LAAAAAAAAACTi7u7u7u7uDgAAAAAAAAAk4u7u7u7u7g4AAAAAAAAA4O7u7u7u7u7uDgAAAAAAAODu7u7u7u7u7g4AAAAAAAAA4O7u7u7u7o5oBgAAAAAAAODu7u7u7u6OaAYAAAAAAAAA4O7u7u6OaAYAAAAAAAAAAODu7u7ujmgGAAAAAAAAAAAA4O7ujmgGAAAAAAAAAAAAAODu7o5oBgAAAAAAAAAAAAAA4I5oBgAAAAAAAAAAAAAAAOCOaAYAAAAAAAAAAAAAAAAAYAYAAAAAAAAAAAAAAAAAAGAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hammer\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDQwMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDA1MDA1MDAwMDAwNTBlZWVlZWVlZWVlZWUwNWUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUwMDAwNTAwMDAwMDAwMDUwMDUwMDAwMDUwMDAwMDAwNTA1MDAwMDUwMDAwMDAwNTA1MDAwMDA1MDA1MDA1MDA1MDUwMDAwMDAwMDAwMDAwMDAwZWVlZWVlZWVlZWVlMDBlMGVlZWVlZWVlZWVlZTBlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZWVlZWZlZWVlZWVlZWVmZTMzMzNlZmVlZWVlZWVlZWUzZmYzZWVlZWVlZWVlZWZlZWVlZWVmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZWVlZWVlZmVlMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDUwMDAwMDAwMDAwNTAwMDAwMDA1MDAwMDAwNTAwMDAwMDAwNTAwMDA1MDUwMDAwMDUwMDAwMDAwMDUwMDA1MDA1MDAwMDAwMDUwNTAwMDAwMDAwMDAwMDA1NTAwMDAwMDAwMDAwMDAwMDAwMGVlZWVlZWVlZWVlZTAwZTBlZWVlZWVlZWVlZWUwZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVmZWVlZWVlZWVlZmUzMzMzZWZlZWVlZWVlZWVlM2ZmM2VlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlZWVlZWVlZWVlZWUwMGUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU=\",\n        \"displayName\": \"moleAnimation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDIwMDAyMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2VkZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmRlYmVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDBlMDhlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwOGU2ODA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTA4ZTY4MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVkZWJkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWRlYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlY2VkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVjZWRjYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMDQwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkYzBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNlZGVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkZWJlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwZTA4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwNjAwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGJkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"hammerAnimated\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Qv@;p79@e|(fGBFKaJ@[\":\n            case \"mole\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`;\n            case \"/LJ4HDC9/+6j@JGvC7#:\":\n            case \"grid\":return img`\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n77777777777777777777fffffffffffffffff777777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"Oag!`vsg+~Y,+WT2meT;\":\n            case \"hammer\":return img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"moleAnimation\":\n            case \"anim1\":return [img`\n. . . . . . . 5 . . . . . . . . \n. . . . . . . 5 5 . . . . . . . \n. 5 e e e e e e e e e e e e 5 . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`, img`\n. . . . . 5 . . . . . . . . . 5 \n5 . . . . . 5 . . . . . . . 5 . \n5 . . . . . . 5 . . . . . . . 5 \n. 5 . . . . . 5 5 . . . . 5 5 . \n5 . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \n`, img`\n. . . . . . 5 . . . . . . . . . \n. . . . . . . 5 . . . . . . . . \n5 . . . . . . . 5 . . . . . . . \n. 5 . . . . . . 5 . . . . . . 5 \n. 5 . . . . . 5 . . . . . . 5 . \n. . 5 . . . . 5 . . . . . . . 5 \n. 5 . . . . . . . . . . . . 5 5 \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`];\n            case \"hammerAnimated\":\n            case \"anim2\":return [img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`, img`\n................................\n...........66...................\n...........66...................\n.........ee8866.................\n.........ee8866.................\n.......eeeeee8866...............\n.......eeeeee8866...............\n.....eeeeeeeeee8866.............\n.....eeeeeeeeee8866.............\n...eeeeeeeeeeeeee8866...........\n...eeeeeeeeeeeeee8866...........\n.eeeeeeeeeeeeeeeeee.............\n.eeeeeeeeeeeeeeeeee.............\n422eeeeeeeeeeeeee...............\n422eeeeeeeeeeeeee...............\n.4422eeeeeeeeddbb...............\n.4422eeeeeeeeddbb...............\n...4422eeeeeeccddbb.............\n...4422eeeeeeccddbb.............\n.....4422ee....ccddbb...........\n.....4422ee....ccddbb...........\n.......44........ccddbb.........\n.......44........ccddbb.........\n...................ccddbb.......\n...................ccddbb.......\n.....................ccddbb.....\n.....................ccddbb.....\n.......................ccddbb...\n.......................ccddbb...\n.........................ccdd...\n.........................ccdd...\n................................\n`, img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"ZJJ;OHEq3su{$thl?!cG\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"HuH?dfR@fk?i~Wozi$|z\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"GdiqjoI.c8wEY)L~tjJ+\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"kUea=yU.c/EQ4j+JPo6U\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"k_4in;^};cR]Q#@rCm6X\">Text</variable><variable id=\"JBYkLIm;eX8wM5;u*R8r\">mySprite2</variable><variable id=\"VFB/Y!.@bi;5(2y.}ew_\">mySprite</variable><variable id=\".q*Ucu{%0bW!szfNY2Ds\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Whackem2 - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"pxt-arcade-image-transform\": \"github:robo-technical-group/pxt-arcade-image-transform#v1.0.8\",\n        \"arcade-text\": \"github:microsoft/arcade-text#v1.3.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"custom.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```

