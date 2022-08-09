# Mole Hunt
### @explicitHints true


## {Video Intro @showdialog}

![Whack-em-All Carnival Intro](youtube:ow6P7wTs3Uk)



## {2. Read Instructions}

**🕳️ Start with Instructions 🕳️**

- :comment: This is the **instruction panel**. It has directions
on what to do.


- :lightbulb: Don't miss anything! Scroll down to the **double lines** before moving to the next instruction.


- :mouse pointer: When you're done reading, click **Next** to move to the next instruction.

---
---


## {3. Tips and Tricks}

**Tips and Tricks**

Be on the lookout for secret information!


~hint Click here to reveal hidden info 🕵🏽

<br/>
Look for clues like this when you read instructions.

Each one gives extra info, tips, or tricks.

hint~



- :mouse pointer: Once you see the double lines, you can click **Next** to move to the next instruction.

---
---


## {4. Your First Block}

**Ready to start coding?**

Let's place the image of a grid in the background where the mole can hide!


- :tree: From the ``||scene: Scene||`` category **in the toolbox**, grab <br/>
```block
scene.setBackgroundImage(img`.`)
```
and snap it inside the empty ``||loops: on start||`` block already in the workspace.


~hint Click here to see how 🕵🏽

![Look under Controller for the block](/static/skillmap/mole/add-bg-block.gif "Drag out the controller block to use later.")

- :lightbulb: The panel with the colorful category names is called the
 **toolbox**. <br/>
 Click ``||controller: Controller||`` to find the event block you need.

hint~

---
---


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`.`)
```


## {5. Choose the Grid BG}


Select the grid from the **My Assets** library by clicking on the square in the block.


- :mouse pointer: Click the empty square in the<br/>
``||scene: set background image to []||``.<br/>
block that's already in your workspace. <br/><br/>
The image editor will open automatically.<br/><br/>

- :mouse pointer: Click the **My Assets** tab at the top of the image editor to see the sprite assets for this tutorial.

- :mouse pointer: Select the **grid** background <br/>
![Choose the background that looks like a grid full of holes.](/static/skillmap/mole/grid.png "Select the grid from My Assets.")
and click **Done**.



~hint Show me how! 🕵🏽


![Choose the background that looks like a grid full of holes.](/static/skillmap/mole/choose-bg.gif "Add your block to the `on start` container.")

hint~

---
---

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
```




## {6. Check Your Game!}

Now it's time to try your game!

- :binoculars: Click the mini **game window** in the bottom corner to open the **bigger game window**!

You should see a green box with 9 purple holes for the mole to hide in.


~hint Click here to see how 🕵🏽

![Look for the game window in the lower right](/static/skillmap/mole/game.gif "Click the mini game window to pop open the bigger game window.")

hint~




---
---




## {7. Add the Sprite}


Now we'll add the **mole** sprite to our game.

~hint What's a sprite? 💡

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our mole will be a sprite, too.

hint~

- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab <br/>

```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```

and snap it inside at **the bottom** of the ``||loops: on start||`` block already in the workspace.


~hint Show me how! 🕵🏽


![Add the sprite block.](/static/skillmap/mole/add-sprite.gif "Add a sprite to your game.")

hint~

---
---

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```



## {8. Add the Mole}


- :mouse pointer: Click the **empty square** to open the image editor, then click the **My Assets** tab at the top to see the sprites for this tutorial.

- :mouse pointer: Select the **mole** sprite <br/>
![Choose the image that looks like a mole head.](/static/skillmap/mole/mole.png "Select the mole from My Assets.")
and click **Done**.

- :mouse pointer: Click the kind ``||sprites: Player||`` and change it to  ``||sprites: Enemy||`` so we know the sprite isn't on our side!



~hint Show me how! 🕵🏽


![Choose the image that looks like a mole head.](/static/skillmap/mole/choose-mole.gif "Add a mole to your game.")

hint~

---
---

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
let mySprite = sprites.create(assets.image`mole`, SpriteKind.Enemy)
```


## {9. Make the Mole Move}

Let's get the mole jumping from hole to hole every second.

- :circle: From the ``||game: Game||`` category **in the toolbox**, grab

```blocks
game.onUpdateInterval(500, function () {
})
```
and snap it into **an empty area** of the workspace.

- :mouse pointer: Click the number **500** and change it to **1 second** (which will show up as 1000 ms.)

This is an **EVENT** block and it will cause an action to happen each time a second passes.

~hint Tell me about events! 💡

Events are special things that can happen while the code is running.  A player might press a button, a timer might run out, or one sprite might overlap with another.

Each of those things is an event that you can assign a special action to in Arcade.

hint~

~hint Show me how! 🕵🏽

![Add an on game update block.](/static/skillmap/mole/game-update.gif "Change 500ms to 1000ms.")

hint~

---
---

#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {

})
```


## {10. Make the Mole Move pt. 2}


- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab  <br/>
```block
sprites.move_to_random_hole_on_grid(mySprite)
```
and snap it into the ``||game: on game update every [1000] ms||`` block that's already in the workspace.



~hint Show me how! 🕵🏽

![Add the random area block](/static/skillmap/mole/game-update.gif "Make sure the new block connects inside the game update block.")

hint~

---
---

#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
    sprites.move_to_random_hole_on_grid(mySprite)
})
```




## {11. Check Your Game!}

Try your project again!

- :binoculars: Click the mini **game window** in the bottom corner to open the **bigger game window**!

You should see the mole jumping between the holes every second.


---
---




## {12. Finale}

**🎉 Way to Go 🎉**

You have started your very own Whack-em-Mole game.

When you're ready, click **Done** to return to the skillmap to add the rubber hammer that will let you tag the mole!

---
---




```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
```


```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.move_to_random_hole_on_grid(mySprite)
    music.knock.play()
    animation.runImageAnimation(
    myHammer,
    [assets.image`hammerAnimation`],
    200,
    false
    )
})
let mySprite: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
mySprite = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)
scene.add_text_to("Whack-em-Mole", areas.Bottom)
info.startCountdownGame(20, winTypes.Score, effects.confetti)
game.onUpdateInterval(1000, function () {
    sprites.move_to_random_hole_on_grid(mySprite)
})



```



```customts

enum winTypes {
    //% block="win game"
    Win,
    //% block="lose game"
    Lose,
    //% block="high score"
    Score,
    //% block="multiplayer"
    Multi
}

enum speeds {
    //% block="fast"
    Fast,
    //% block="medium"
    Med,
    //% block="slow"
    Slow
}

enum areas {
    //% block="top"
    Top,
    //% block="middle"
    Mid,
    //% block="bottom"
    Bottom
}

let textSprite: TextSprite = null
let fanfare: effects.BackgroundEffect = undefined;
let winStyle = winTypes.Score



info.onCountdownEnd(function () {
    if (winStyle == winTypes.Win) {
        game.over(true, effects.confetti)
    } else if (winStyle == winTypes.Lose) {
        game.over(false, effects.confetti)
    } else if (winStyle == winTypes.Score) {
        effects.confetti.startScreenEffect()
        game.splash("Displaying High Score")
        game.reset()
    } else if (winStyle == winTypes.Multi) {
        effects.confetti.startScreenEffect()
        game.splash("Displaying Multiplayer Win")
        game.reset()
    } else {
        effects.confetti.startScreenEffect()
        game.splash("Game Over")
        game.reset()
    }
})


namespace scene {
    /**
    * Adds text to the top, middle, or bottom
    * of screen as defined by circuis games
    */
    //% color="#4b6584"
    //% blockId=add_text_to
    //% block="add text $myLabel to $myPosition" of window
    //% myLabel.defl="Whack-em-Mole"
    //% myPosition.defl=areas.Bottom
    //% inlineInputMode=inline
    export function add_text_to(myLabel: string, myPosition: areas) {
        textSprite = textsprite.create(myLabel)
        if (myPosition == areas.Bottom) textSprite.setPosition(80, 110);
        if (myPosition == areas.Mid) textSprite.setPosition(80, 60);
        if (myPosition == areas.Top) textSprite.setPosition(80, 20);
    }
}

namespace controller{

    /**
    * Combines a simple "move with arrows"
    * and stay in screen
    */
    //% color="#d54322"
    //% blockId=move_only_onscreen_with_arrows
    //% block="move $thisSprite=variables_get(myHammer) on screen with speed $mySpeed"
    //% mySpeed.defl=speeds.Fast
    //% inlineInputMode=inline
    export function move_only_onscreen_with_arrows(thisSprite: Sprite, mySpeed: speeds) {
        thisSprite.setStayInScreen(true)
        if (mySpeed == speeds.Fast) {
            controller.moveSprite(thisSprite, 225, 225)
        } else if (mySpeed == speeds.Med) {
            controller.moveSprite(thisSprite, 175, 175)
        } else {
            controller.moveSprite(thisSprite, 100, 100)
        }
    }

}

namespace sprites {

    /**
    * Randomly moves mole to one of the holes on grid
    */
    //% color="#4b7bec"
    //% blockId=move_to_random_hole_on_grid
    //% block="move sprite $thisSprite=variables_get(mySprite) to random area"
    //% inlineInputMode=inline
    export function move_to_random_hole_on_grid(thisSprite: Sprite) {
        thisSprite.setPosition(simplified.chooseRandomNumber(28, 80, 130), simplified.chooseRandomNumber(21, 53, 85))
    }
}

namespace info {
    /**
     * Adds game end style to countdown
     */
    //% color="#cf6a87"
    //% group=countdown
    //% blockId=start_countdown_game
    //% block="start countdown $myTime (s) || and game over $winType effect $effect"
    //% myTime.defl=10
    //% winType.defl=winTypes.Score
    //% effect.defl=effects.confetti
    //% inlineInputMode=inline
    export function startCountdownGame(myTime: number, winType?: winTypes, effect?: effects.BackgroundEffect) {
        info.startCountdown(myTime)
        winStyle = winType
        fanfare = effect
    }
}


namespace simplified {
    /**
     * Randomly chooses one of the parameter numbers
     *
     * @param choice1 Numeric choice to appear in the list of player choices
     * @param choice2 Numeric choice to appear in the list of player choices
     * @param choice3 Numeric choice to appear in the list of player choices
     * @param choice4 Numeric choice to appear in the list of player choices
     * @param choice5 Numeric choice to appear in the list of player choices
     */

    //% group=Arrays
    //% color="#fa8f08"
    //% blockId=choose_random_num_from_array
    //% block="choose one of $choice1 $choice2 $choice3 || $choice4 $choice5"
    //% choice1.defl=28
    //% choice2.defl=80
    //% choice3.defl=130
    //% inlineInputMode=inline
    export function chooseRandomNumber(choice1: number, choice2: number, choice3: number, choice4?: number, choice5?: number) {
        let myList = [choice1, choice2];
        if (choice3) myList.push(choice3);
        if (choice4) myList.push(choice4);
        if (choice5) myList.push(choice5);
        return myList._pickRandom();
    }



}

```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"Qv@;p79@e|(fGBFKaJ@[\": {\n        \"data\": \"hwQQABAAAAAAAO7u7u7u7gDg7u7u7u7uAO7u7u7u7u4A7u7u7u7v7gDu7v7u7v7uAO7u7u/v/u4A7v/u8+7+7gDu7u4z7v7uAO7u7jPu/u4A7v/u8+7+7gDu7u7v7/7uAO7u/u7u/u4A7u7u7u7v7gDu7u7u7u7uAODu7u7u7u4AAO7u7u7u7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mole\"\n    },\n    \"/LJ4HDC9/+6j@JGvC7#:\": {\n        \"data\": \"hwSgAHgAAABmZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d397u7u8t/d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3f3v7u7u8z8f3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3e/u7u7y8zM/3d3d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3e/u7u7y8zM/Hd3d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d7+7u7vLzMzMzMx/d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d397u7u7vLzMzMzMx/d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d7+7u7vLzMzMzPx3d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d/e7u7u7zMzMzPx3d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3e/u7u7zMzM/Hd3d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3f3u7u7y8zM/3d3d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3f3v7u7y8z8f3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d397u7u8t8d3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"grid\"\n    },\n    \"Oag!`vsg+~Y,+WT2meT;\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNwNAAAAAAAAAAAAAAAAAMDcDQAAAAAAAAAAAAAAAMDcvQsAAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAAMDcvQsAAAAAAABABAAAAMDcvQsAAAAAAAAAQAQAAADA3L0LAAAAAAAAQCTiDgDA3L0LAAAAAAAAAEAk4g4AwNy9CwAAAAAAAEAk4u7uzty9CwAAAAAAAABAJOLu7s7cvQsAAAAAAABAJOLu7u7evQsAAAAAAAAAQCTi7u7u3r0LAAAAAAAAACTi7u7u7u7uDgAAAAAAAAAk4u7u7u7u7g4AAAAAAAAA4O7u7u7u7u7uDgAAAAAAAODu7u7u7u7u7g4AAAAAAAAA4O7u7u7u7o5oBgAAAAAAAODu7u7u7u6OaAYAAAAAAAAA4O7u7u6OaAYAAAAAAAAAAODu7u7ujmgGAAAAAAAAAAAA4O7ujmgGAAAAAAAAAAAAAODu7o5oBgAAAAAAAAAAAAAA4I5oBgAAAAAAAAAAAAAAAOCOaAYAAAAAAAAAAAAAAAAAYAYAAAAAAAAAAAAAAAAAAGAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hammer\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDQwMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDA1MDA1MDAwMDAwNTBlZWVlZWVlZWVlZWUwNWUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUwMDAwNTAwMDAwMDAwMDUwMDUwMDAwMDUwMDAwMDAwNTA1MDAwMDUwMDAwMDAwNTA1MDAwMDA1MDA1MDA1MDA1MDUwMDAwMDAwMDAwMDAwMDAwZWVlZWVlZWVlZWVlMDBlMGVlZWVlZWVlZWVlZTBlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZWVlZWZlZWVlZWVlZWVmZTMzMzNlZmVlZWVlZWVlZWUzZmYzZWVlZWVlZWVlZWZlZWVlZWVmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZWVlZWVlZmVlMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDUwMDAwMDAwMDAwNTAwMDAwMDA1MDAwMDAwNTAwMDAwMDAwNTAwMDA1MDUwMDAwMDUwMDAwMDAwMDUwMDA1MDA1MDAwMDAwMDUwNTAwMDAwMDAwMDAwMDA1NTAwMDAwMDAwMDAwMDAwMDAwMGVlZWVlZWVlZWVlZTAwZTBlZWVlZWVlZWVlZWUwZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVmZWVlZWVlZWVlZmUzMzMzZWZlZWVlZWVlZWVlM2ZmM2VlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlZWVlZWVlZWVlZWUwMGUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU=\",\n        \"displayName\": \"moleAnimation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDIwMDAyMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2VkZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmRlYmVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDBlMDhlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGUwOGU2ODA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTA4ZTY4MDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVkZWJkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWRlYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlY2VkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVjZWRjYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDQwMDQwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkYzBkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjMGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNlZGVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkZWJlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwZTA4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwNjAwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGJkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"displayName\": \"hammerAnimation\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Qv@;p79@e|(fGBFKaJ@[\":\n            case \"mole\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`;\n            case \"/LJ4HDC9/+6j@JGvC7#:\":\n            case \"grid\":return img`\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n77777777777777777777fffffffffffffffff777777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"Oag!`vsg+~Y,+WT2meT;\":\n            case \"hammer\":return img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"moleAnimation\":\n            case \"anim1\":return [img`\n. . . . . . . 5 . . . . . . . . \n. . . . . . . 5 5 . . . . . . . \n. 5 e e e e e e e e e e e e 5 . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`, img`\n. . . . . 5 . . . . . . . . . 5 \n5 . . . . . 5 . . . . . . . 5 . \n5 . . . . . . 5 . . . . . . . 5 \n. 5 . . . . . 5 5 . . . . 5 5 . \n5 . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \n`, img`\n. . . . . . 5 . . . . . . . . . \n. . . . . . . 5 . . . . . . . . \n5 . . . . . . . 5 . . . . . . . \n. 5 . . . . . . 5 . . . . . . 5 \n. 5 . . . . . 5 . . . . . . 5 . \n. . 5 . . . . 5 . . . . . . . 5 \n. 5 . . . . . . . . . . . . 5 5 \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`];\n            case \"hammerAnimation\":\n            case \"anim2\":return [img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`, img`\n................................\n...........66...................\n...........66...................\n.........ee8866.................\n.........ee8866.................\n.......eeeeee8866...............\n.......eeeeee8866...............\n.....eeeeeeeeee8866.............\n.....eeeeeeeeee8866.............\n...eeeeeeeeeeeeee8866...........\n...eeeeeeeeeeeeee8866...........\n.eeeeeeeeeeeeeeeeee.............\n.eeeeeeeeeeeeeeeeee.............\n422eeeeeeeeeeeeee...............\n422eeeeeeeeeeeeee...............\n.4422eeeeeeeeddbb...............\n.4422eeeeeeeeddbb...............\n...4422eeeeeeccddbb.............\n...4422eeeeeeccddbb.............\n.....4422ee....ccddbb...........\n.....4422ee....ccddbb...........\n.......44........ccddbb.........\n.......44........ccddbb.........\n...................ccddbb.......\n...................ccddbb.......\n.....................ccddbb.....\n.....................ccddbb.....\n.......................ccddbb...\n.......................ccddbb...\n.........................ccdd...\n.........................ccdd...\n................................\n`, img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"ZJJ;OHEq3su{$thl?!cG\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"HuH?dfR@fk?i~Wozi$|z\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"GdiqjoI.c8wEY)L~tjJ+\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"kUea=yU.c/EQ4j+JPo6U\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"k_4in;^};cR]Q#@rCm6X\">Text</variable><variable id=\"JBYkLIm;eX8wM5;u*R8r\">mySprite2</variable><variable id=\"VFB/Y!.@bi;5(2y.}ew_\">mySprite</variable><variable id=\".q*Ucu{%0bW!szfNY2Ds\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Whackem2 - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"custom.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n"
}
```