# Debug Gobblio
### @explicitHints true


## Debugging Intro @showdialog

Let's walk through this game to see if we can figure out what's going wrong.



## {2. Look Aroud}

**Ready to start coding?**

We need a place for the mole to hide.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab <br/>

```block
scene.setBackgroundImage(img`.`)
```

then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.


~hint Click here to see how 🕵🏽

---

- :lightbulb: The panel with the colorful category names is called the
 **toolbox**. <br/>
 Click ``||scene: Scene||`` to find the block you need.

![Look under Scene for the block you need](/static/skillmap/mole/add-bg-block.gif "Drag out the background block to fill later.")

hint~


#### ~ tutorialhint


```blocks
scene.setBackgroundImage(img`.`)
```


## {4. Choose the grid}

**Choose the grassy grid.**

- :mouse pointer: Click the empty square inside the background block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/mole/my-assets.gif "Change from the Editor to My Assets and select the grid.")
<br/>Choose the **grid** background.<br/>
![Choose the background that looks like a grid full of holes.](/static/skillmap/mole/grid.png "Select the grid from My Assets.")
<br/>Then click **Done**.


~hint Click here to see how 🕵🏽

---

![Switch to My Assets to select the grid](/static/skillmap/mole/choose-bg.gif "Click the grassy grid background.")

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`grid`)
```



## {11. Finale}

**🎉 Way to Go 🎉**

You have started your very own Whack-the-Mole game.

When you're ready, click **Done** to return to the skillmap so you can add a rubber hammer!



```template
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    let badSprite: Sprite = null
    game.checkSize(mySprite, badSprite)
    info.setScore(sprite.width)
    otherSprite.destroy()
    if (sprite.width >= 30) {
        game.over(true)
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
controller.moveSprite(mySprite)
mySprite = sprites.create(img`
    . . . . . b b b b b b . . . . .
    . . . b b 9 9 9 9 9 9 b b . . .
    . . b b 9 9 9 9 9 9 9 9 b b . .
    . b b 9 d 9 9 9 9 9 9 9 9 b b .
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b .
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b
    . b 5 3 3 3 d 9 9 9 9 d d 5 b .
    . b d 5 3 3 3 3 3 3 3 d 5 b b .
    . . b d 5 d 3 3 3 3 5 5 b b . .
    . . . b b 5 5 5 5 5 5 b b . . .
    . . . . . b b b b b b . . . . .
    `, SpriteKind.Player)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . b b b b b b . . . . .
        . . . b b 7 7 7 7 7 7 b b . . .
        . . b b 7 7 7 7 7 7 7 7 b b . .
        . b b 7 d 7 7 7 7 7 7 7 7 b b .
        . b 7 d 7 7 7 7 7 1 1 1 7 7 b .
        b 7 d d 7 7 7 7 7 1 1 1 7 7 7 b
        b 7 d 7 7 7 7 7 7 1 1 1 7 7 7 b
        b 7 3 7 7 7 7 7 7 7 7 7 1 7 7 b
        b 5 3 d 7 7 7 7 7 7 7 7 7 7 7 b
        b 5 3 3 7 7 7 7 7 7 7 7 7 d 7 b
        b 5 d 3 3 7 7 7 7 7 7 7 d d 7 b
        . b 5 3 3 3 d 7 7 7 7 d d 5 b .
        . b d 5 3 3 3 3 3 3 3 d 5 b b .
        . . b d 5 d 3 3 3 3 5 5 b b . .
        . . . b b 5 5 5 5 5 5 b b . . .
        . . . . . b b b b b b . . . . .
        `, randint(-20, 20), randint(-20, 20))
    scaling.scaleToPixels(projectile, randint(5, 30), ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

```

```ghost
carnival.startCountdownGame(15, carnival.WinTypes.Score)
```


```package
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks
carnival=github:microsoft/arcade-carnival
```

```customts


namespace game {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=check_size
    //% block="check size of $thisSprite against $other"
    //% thisSprite.shadow=variables_get
    //% other.shadow=variables_get
    //% thisSprite.defl=mySprite
    //% other.defl=badSprite
    export function checkSize(thisSprite: Sprite, other: Sprite) {
        if (thisSprite.width >= other.width) {
            scaling.scaleByPixels(thisSprite, 2, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else {
            scaling.scaleToPercent(thisSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        }
    }

}

```

