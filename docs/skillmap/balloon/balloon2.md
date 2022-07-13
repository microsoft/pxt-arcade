# Burst Your Balloon

### @explicitHints true


## {Intro @showdialog}

The code for a basic clicker is already in the workspace.

Let's turn our game into a carnival!

![Click away](/static/skillmap/balloon/balloon2.gif "Let's add images to make our game more exciting." )




## {2. Play Your Game}


**Play the clicker game!**

If your code isn't working and you can't figure out why, click "Replace my code" to replace the blocks in your workspace with new starter code.

~hint How to open your game console 🕵️

![Look for the game window in the lower right](/static/skillmap/balloon/game.gif "Click the mini game window to pop open the playable console.")

hint~

Press the (A) button as fast as you can.  You should see the score go up with each click and the timer should be counting down from 30 seconds.

---
---


## {3. Set the Scene}

**Set the scene...**

- :tree: From the ``||scene: Scene||`` category in the toolbox, grab <br/>

```block
scene.setBackgroundColor(0)
```

and snap it inside and at the very **top** of the
``||loops: on start||``
block container that's already in your workspace.

- :mouse pointer: Click the filled oval and change the color to something light - like white or yellow.

~hint Show me how! 🕵️

![Open the Scene category to find the block that changes the background color](/static/skillmap/balloon/bg-color.gif "Set the background color to white." )

hint~

---
---

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(1)
info.startCountdown(30)
```


## {4. Add Balloon}

**Add a balloon sprite!**

In Arcade, each character or item that does something is called a sprite. Let's add one now.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>

```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```

and snap it inside and at the very **bottom** of the
``||loops: on start||``
block container that's already in your workspace.

- :mouse pointer: Click the empty square and when the image editor opens, switch to **My Assets** to select the red balloon sprite.

~hint Show me how! 🕵️

![Choose the red balloon from My Assets](/static/skillmap/balloon/choose-sprite.gif "Change from the Editor to My Assets and select the red balloon.")

hint~

💡 _Don't forget to look at the game window to see how things are shaping up!_


---
---

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(1)
info.startCountdown(30)
let mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
```


## {5. Move Balloon}

**Excellent!**

Let's move the balloon down to give it room to grow.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>

```block
let mySprite: Sprite = null
mySprite.setPosition(0, 0)
```

and snap it inside at the **bottom** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Change the **x** value to **80** and the **y** value to **93**.

~hint Why use 80 and 93? 💡


The width of the screen is 160 pixels, so an **x** value of **80** will place the balloon in the middle of the screen from left to right.

The **y** value of **93** will put the balloon near the bottom of the screen because the screen height is 120 pixels.

These numbers were carefully selected to put the balloon in the right place for the next several steps...but you can also play around with the values to see what happens when you make them larger or smaller.

hint~

~hint Show me how! 🕵️

![Choose the red balloon from My Assets](/static/skillmap/balloon/move-sprite.gif "Change from the Editor to My Assets and select the red balloon.")

hint~

---
---

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(1)
info.startCountdown(30)
let mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
mySprite.setPosition(80, 93)
```




## {6. Blow Up Balloon}

Now we need to make the balloon bigger each time (A) is pressed.


- :up-down: From the ``||scaling: Scaling||`` category in the toolbox, grab

```block

scaling.scaleByPixels_defl(mySprite, 2, ScaleDirection.Uniformly, ScaleAnchor.Bottom)

```
and snap it into the **bottom** of the <br/>
``||controller: on [A] button [pressed]||`` <br/>
block already in the workspace.


~hint Show me how! 🕵️

![Snap the scale block in after the change score block.](/static/skillmap/balloon/scale.gif "This block will make your balloon grow as you press the A button.")

hint~

---
---

#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels_defl(mySprite, 2, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
```



## {7. Check Your Game!}

**Try your game now!**

- :mouse pointer: Click the mini **game window** in the bottom corner to open the playable console!

Press the (A) button as fast as you can.  You should see the balloon get bigger each time you click!

---
---




## {8. Add a Booth}

**Let's add a booth!**

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>

```block
let mySprite2 = sprites.create(img`.`, SpriteKind.Player)
```

and snap it into the **bottom** of the
``||loops: on start||``
block already in your workspace.

- :mouse pointer: Click ``||variables: mySprite2||`` and choose **Rename variable...** from the menu. <br/>
Change the name to **myBooth**.

- :mouse pointer: Click the grey square and when the image editor opens, switch to **My Assets** to select the **booth** sprite.

- :mouse pointer: Click the kind ``||sprites: Player||`` and change it to ``||sprites: Booth||``.


~hint Show me how! 🕵️

![Choose the booth from My Assets](/static/skillmap/balloon/booth.gif "Change from the Editor to My Assets and select the booth.")

hint~

💡 _Don't forget to keep your eye on the game window to see how things are shaping up!_


---
---

#### ~ tutorialhint
```blocks
scene.setBackgroundColor(1)
info.startCountdown(30)
let mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
```




## {9. Win on Overlap}

Let's make our game even more fun by adding a way to **"win"** when the balloon reaches the line!

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) { })
```

and drop it into an **empty area** in the workspace.


- :mouse pointer: Change the last kind from ``||sprites: Player||`` to ``||sprites: Booth||``.


~hint Show me how! 🕵️

![Drop an `on overlap` event in the workspace](/static/skillmap/balloon/overlap.gif "Make sure to change the last kind to Booth.")

hint~

---
---

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
})
```




## {10. Game Over Win}

- :circle: From the ``||game: Game||`` category in the toolbox, grab <br/>

```block
game.over(false)
```

and snap it into the empty

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) { })
```

container already in the workspace.


- :mouse pointer: Toggle **`<LOSE>`** to **`<WIN>`**.


~hint Show me how! 🕵️

![Snap a game over block into the on overlap container](/static/skillmap/balloon/win.gif "Toggle the option to <WIN>")

hint~

---
---

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    game.over(true)
})
```


## {11. Play Your Game}


**Win your game!**

Open the game console and press the (A) button as fast as you can.

Can you get the balloon to reach the line before time runs out?

~hint Why does this work? 💡

You added an event that watches for the Player (balloon) to overlap the Booth (any part of the booth image.)

When the balloon crosses the line that's part of the booth image, the overlap event triggers and runs the
``||game: game over <WIN>||`` code, allowing you to win the game!

hint~

---
---

## {12. Finale}

**🎈 FANTASTIC 🎈**

You have started your very own clicker game!
Try it in the console and see if you can get more than **40 points**.

When you're finished, click **Done** to return to the skillmap and continue building your amazing **🎈carnival game🎈**!


```customts

namespace SpriteKind {
    //% isKind
    export const Booth = SpriteKind.create()
    //% isKind
    export const Mouse = SpriteKind.create()
}

namespace info {
        /**
         * Change the score of a player
         * @param value
         * but with default player 1
         */
    //% color="#cf6a87"
    //% help=github:carnival/docs/player_score_deflt1
    //% blockId=pichangescore-defl1
    //% block="change %player score by %value"
    //% value.defl=1
    //% player.defl=info.player1
    export function changeScoreBy_defl1(player: info.PlayerInfo, value: number) {
        player.setScore(player.score() + value);
    }

}

namespace scaling {

    //% blockId=sprite_scale_by_pixels_ex_defl
    //% block="change $sprite=variables_get(mySprite) scale by $value pixels $direction anchor $anchor || proportional $proportional"
    //% expandableArgumentMode=enabled
    //% inlineInputMode=inline
    //% value.defl=2
    //% direction.defl=ScaleDirection.Uniformly
    //% anchor.defl=ScaleAnchor.Bottom
    //% proportional.defl=0
    //% help=sprites/scaling/scale-by-pixels
    export function scaleByPixels_defl(sprite: Sprite, value: number, direction?: ScaleDirection, anchor?: ScaleAnchor, proportional?: boolean): void {
        direction = direction || ScaleDirection.Uniformly;
        anchor = anchor || ScaleAnchor.Bottom;

        if (proportional == null) proportional = direction === ScaleDirection.Uniformly;

        let sx: number;
        let sy: number;

        if (direction & ScaleDirection.Horizontally) {
            const imgW = sprite.image.width;
            const newW = sprite.width + value;
            sx = newW / imgW;
        }

        if (direction & ScaleDirection.Vertically) {
            const imgH = sprite.image.height;
            const newH = sprite.height + value;
            sy = newH / imgH;
        }

        sprite.setScaleCore(sx, sy, anchor, proportional);
    }
}

```

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
})


info.startCountdown(30)


```


```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels_defl(mySprite, 2, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    info.player1.changeScoreBy(1)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    game.over(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
mySprite.setPosition(80, 93)
info.startCountdown(10)
scene.setBackgroundColor(1)
let booth = sprites.create(assets.image`booth`, SpriteKind.Booth)

```



```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "namespace SpriteKind {\n    //% isKind\n    export const Booth = SpriteKind.create()\n\n    //% isKind\n    export const Mouse = SpriteKind.create()\n}",
  "images.g.jres": "{\n    \"image7\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/DR3d3d3fS/MzO/u7v/u///TURERETyvzvzu7u7+/+/+01ERERE8vC7v7u7u7tPv/tN9P//RPIA/7+7+7+7T7/7TfT0RETyAAC/u7u7v0+/+030/0RE8gAAv7u7+79P//9NRERERPIAAL+7u7u/T7/7TURP9ETyAP+/u/u/u0+/+030//9E8vC7v7u7u7tPv/tNRET0RPK/O/O7u7v7/7/7TURERETyvzMzv7u7/7v//01ERERE8r87M/////C7D/AkIiIiIvLwu7sPAAAA/w8A//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-1\"\n    },\n    \"image8\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/vR3d3d3fS/MzO/u7sP/7/7TURERETyvzvzu7u7+7v7/01ERERE8vC7v7u7u7u/+/RN9P//RPIA/7+7+7+7v/v0TfT0RETyAAC/u7u7v7/79E30/0RE8gAAv7u7+7+/+/RNRERERPIAAL+7u7u/v/v0TURP9ETyAP+/u/u/u7/79E30//9E8vC7v7u7u7u/+/RNRET0RPK/O/O7u7v7u/v/TURERETyvzMzv7u7D/+/+01ERERE8r87M////wAAv/skIiIiIvLwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-2\"\n    },\n    \"image10\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/sREREREfm/MzO/u7sP/7/7kZmZmZn4vzvzu7u7+7v7/5GZmZmZ+PC7v7u7u7u/+/mR+f//mfgA/7+7+7+7v/v5kfn5mZn4AAC/u7u7v7/7+ZH5/5mZ+AAAv7u7+7+/+/mRmZmZmfgAAL+7u7u/v/v5kfmZ/5n4AP+/u/u/u7/7+ZH5+fmZ+PC7v7u7u7u/+/mRmZ/5mfi/O/O7u7v7u/v/kZmZmZn4vzMzv7u7D/+/+5GZmZmZ+L87M////wAAv/uJiIiIiPjwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-2\"\n    },\n    \"image9\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/AREREREfm/MzO/u7v/u///kZmZmZn4vzvzu7u7+/+/+5GZmZmZ+PC7v7u7u7ufv/uR+f//mfgA/7+7+7+7n7/7kfn5mZn4AAC/u7u7v5+/+5H5/5mZ+AAAv7u7+7+f//+RmZmZmfgAAL+7u7u/n7/7kfmZ/5n4AP+/u/u/u5+/+5H5+fmZ+PC7v7u7u7ufv/uRmZ/5mfi/O/O7u7v7/7/7kZmZmZn4vzMzv7u7/7v//5GZmZmZ+L87M/////C7D/CJiIiIiPjwu7sPAAAA/wAA//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-1\"\n    },\n    \"image6\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP8iIiL/AAAAAAAA8C8RISEiDwAAAAAA/xIRIREi8gAAAAAALxEiIiIiIg8AAADwEiEiIiIiIvLwAADwIiIiIiIiIiIvAADwIiIiIiIiIvLwAAAALyIiIiIiIg8AAAAA/yIiIiIi8gAAAAAA8C8iIiIiDwAAAAAAAP8iIiL/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-1\"\n    },\n    \"image11\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP+IiIj/AAAAAAAA8I8RgYGIDwAAAAAA/xgRgRGI+AAAAAAAjxGIiIiIiA8AAADwGIGIiIiIiPjwAADwiIiIiIiIiIiPAADwiIiIiIiIiPjwAAAAj4iIiIiIiA8AAAAA/4iIiIiI+AAAAAAA8I+IiIiIDwAAAAAAAP+IiIj/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-2\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAAARERERERERES8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREfEiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdEvIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdH///9ftf//////////////////////////////////////////////////////EREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiL///9ftf//////////////////////////////////////////////////////JCIiIiIkIiIi3S0iIvIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIkIiIiIiIiIi8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIiIiIiIiIi/yIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiI=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image7\":\n            case \"mouse1-1\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..ffffffffffffff.\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image8\":\n            case \"mouse1-2\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image10\":\n            case \"mouse2-2\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image9\":\n            case \"mouse2-1\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image6\":\n            case \"balloon-1\":return img`\n....................\n.........fff........\n.......ff222ff......\n......ff21222ff.....\n.....ff2112222ff....\n.....f211222222f....\n....f21122222222f...\n....f21122222222f...\n....f21122222222f...\n....f22222222222f...\n....f21122222222f...\n....f22122222222f...\n.....f222222222f....\n.....f222222222f....\n......f2222222f.....\n.......f22222f......\n........f222f.......\n.........f2f........\n..........f.........\n.........f2f........\n`;\n            case \"image11\":\n            case \"balloon-2\":return img`\n....................\n.........fff........\n.......ff888ff......\n......ff81888ff.....\n.....ff8118888ff....\n.....f811888888f....\n....f81188888888f...\n....f81188888888f...\n....f81188888888f...\n....f88888888888f...\n....f81188888888f...\n....f88188888888f...\n.....f888888888f....\n.....f888888888f....\n......f8888888f.....\n.......f88888f......\n........f888f.......\n.........f8f........\n..........f.........\n.........f8f........\n`;\n            case \"image4\":\n            case \"booth\":return img`\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444442\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd222\n111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n1111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f\n111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f\nf1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f2\n2fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f22\n22fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"xdO@[$nW`4LDKLg#s^bz\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"bU#zm0=UP]u:}b/slhf$\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"zAFx`|$CRYV(#oP.n0um\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"NSZT%yrFP/(yEppCW+,,\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"6,XcYCTZ$`~q!WN=ZLib\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"p^C#95SSLD{u`5KR)yI;\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"KDrdsHZeu6_]66c^Zqc8\">Mouse</variable><variable id=\"^Ja9]?}+=p;vbofy@HVc\">mouse2</variable><variable id=\"7D`plCR=oBiOlmy$llaz\">mySprite2</variable><variable id=\"/@$2f;zkY^{4IS;VP#R/\">mouse</variable><variable id=\"AAvaaW@7n2t{jE/(~.r~\">mySprite</variable><variable id=\"^Wf-N]+O=H?)Xxqr_?(I\">booth</variable><variable id=\",O8rw%td!O5y$|YYktLm\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"balloon race - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"simple-blocks\": \"github:microsoft/arcade-tutorial-extensions/simple-blocks#8267594819b733e5d5fe55c71fc21ea246e8319d\",\n        \"arcade-sprite-util\": \"github:jwunderl/arcade-sprite-util#v0.2.5\",\n        \"sprite-scaling\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\",\n        \"arcade-text\": \"github:microsoft/arcade-text#v1.3.0\",\n        \"Timers\": \"github:microsoft/arcade-timers#v1.1.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"custom.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

