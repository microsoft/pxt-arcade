# Dino Hoard
### @explicitHints true


## {Intro @showdialog}

Ready to save the day?

Let's create a game where you help Mama Dino rescue her hoard of babies!

![Code a Collector Game](/static/skillmap/collector/collectort1.gif "Grab the baby before it runs away!" )




## {Step 2}

**Set the background**

---

- :tree:  From the ``||scene:Scene||`` category in the toolbox,
grab
```block
scene.setBackgroundImage(img`.`)
```
and drag it into the empty<br/>
``||loops(noclick):on start||``<br/>
container in the workspace.

~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/dino/dino-scene.gif "Toggle between editor and gallery" )
hint~

---

- :right arrow: Click **Next** to move on to the next step.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```




## {Step 3}


- :paint brush:  Click the empty grey square inside
```block
scene.setBackgroundImage(img`.`)
```
to open the **image editor**. <br/><br/>
You can draw your own background or choose the freeway from the **Gallery**.
<!-- ![This is where the gallery is located](/static/skillmap/assets/gallery.png "You can switch over to the gallery or make your own image." ) -->
![Choose the freeway from My Assets gallery](/static/skillmap/dino/freeway.png " " )


~hint Click here to see how 🕵🏽

---

![The background gallery](/static/skillmap/dino/choose-bg.gif "Toggle between editor and gallery" )
hint~


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(sprites.background.cityscape2)
```




## {Step 4}

**Look at your project**

- :binoculars: Take a look at the game window. <br/><br/>
Do you see the background you chose?


![Look for the game window in the lower right](/static/skillmap/assets/game-window.png "Click the mini game window to pop open the bigger game window.")





## {Step 5}


**Add a Mama Dino sprite**<br/>

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our dino will be a sprite, too.

hint~

---

- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab
```block
let mamaDino = sprites.create(img`.`, SpriteKind.Player)
```
and snap it in at **the bottom** of the ``||loops(noclick): on start||`` block already in the workspace.

---

~hint Show me how! 🕵🏽


![Add the sprite block.](/static/skillmap/dino/dino1-5.gif "Add a sprite to your game.")

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sprites.background.cityscape2)
//@highlight
let mamaDino = sprites.create(img`.`, SpriteKind.Player)
```



## {Step 6}

- :paint brush: Click the empty image box inside
```block
let mamaDino = sprites.create(img`.`, SpriteKind.Player)
```
to open the
image editor and click the **My Assets** tab.


![My Assets tab](/static/skillmap/assets/my-assets-three.png )


- :mouse pointer: Choose **Mama** and click **Done**.

![Choose mama dino from My Assets gallery](/static/skillmap/dino/mama-dino.png " " )


~hint Click here to see how 🕵🏽

---

![Look in My Assets for Mama Dino](/static/skillmap/dino/dino1-6.gif )

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sprites.background.cityscape2)
//@highlight
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
```

## {7. Look at Your Game}


**Look at the game window.**

- :binoculars: Look at your project again.

You should see Mama Dino in the middle of the screen.



## {Step 8}

**Mama Dino needs to be able to move up and down on the screen.**


- :game: From the ``||controller: Controller||`` category, grab
```block
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
```
and snap it in at **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.


~hint Click here to see how 🕵🏽

---

![Look under Controller for the block](/static/skillmap/dino/dino1-7.gif "Drag out the controller block to use later.")

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sprites.background.cityscape2)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
//@highlight
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)

```


## {Step 9}

**Give it a try!**

- :binoculars: Bring your mouse over to the game screen.

Try moving Mama Dino up and down with the joypad,
arrow keys, or **W** and **S** keys.



## {Step 10}

**Add movement to the scene**

Make it look like the dino is walking along the road.

---

- :arrows alternate:  Go to ``||scroller:Scroller||`` and drag
```block
scroller.scrollBackgroundWithSpeed(-50, 0)
```
into **the end**
of the ``||loops(noclick):on start||`` container.


~hint Click here to see how 🕵🏽

---

![Add a scroller block](/static/skillmap/dino/dino1-8.gif )

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`Freeway`)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
//@highlight
scroller.scrollBackgroundWithSpeed(-50, 0)
```



## {Step 11}

- :binoculars: Take a look at the game screen again.

Your background should move right-to-left across the screen on its own,
and you should be able to move your dino up and down with the joypad or arrow keys.



## {Step 12}

Let's add some baby dinos for Mama to rescue 💚

---

- :redo:  From ``||loops:Loops||``, grab the
```block
forever(function () {
    let babyDino = sprites.createProjectileFromSide(img`.`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})
```
bundle and drag it into an empty spot on the workspace.


- :paint brush:  Click the **empty image square** and switch to **My Assets** to choose the **Baby** sprite image.
![Choose the baby dino from My Assets gallery](/static/skillmap/dino/baby.png " " )

This will create a new baby dino every second (1000ms) at a random starting height (y).


~hint Click here to see how 🕵🏽

---

![Add baby dinos](/static/skillmap/dino/dino1-10.gif )

hint~


```blockconfig.local
forever(function () {
    let babyDino = sprites.createProjectileFromSide(img`.`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})
```

#### ~ tutorialhint

```blocks
//@highlight
forever(function () {
    let babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
})

```




## {Step 13}

- :binoculars: Take a look at the game screen again.

You should see a hoard of baby dinos running toward their mama.

Right now, nothing happens when they overlap. You'll need to move on to **Level 2** if you want that code!




## {Finale}

**🦖 Congrats 🦖**

---

You've built the start of a great game.

~hint How do I share my project?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/dino/share.gif )

hint~

Click **Done** to return to the main map so you can keep going to add points and a game timer!


```blockconfig.global
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
let babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
scroller.scrollBackgroundWithSpeed(-50, 0)
babyDino.y = 0
```



```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
```


```ghost
let babyDino: Sprite = null

scene.setBackgroundImage(assets.image`Freeway`)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)

forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(0, 120)
    pause(1000)
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
    //% block="move $thisSprite=variables_get(mamaDino) up or down with speed $mySpeed"
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
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"HSB#hx_+P`azBCey0vH4\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAMDMAAAAAAAAAAAAAMC9DAAAAAAAAAAAzMDdDAAAAAAAAMAMzMzdywAAAAAAAADMzLzdzQAAAADAzAC83d3dzQAAAADAzLvd3d3dvQwAAMwAvFXV3d3duwwAAMwMW1XV3d3du8wAAMC8VVXd3d3dvdsAAMBbVdXdu91V3d0AzMBVVVXdVdtV1V0AzMxVVVXdVcVdVV0AwFxVVVXdW7XbVVsAwFxVVVXVvVW8y9wAAFxVX1XVvVW8y8wAAFxV/7Vbvcy73AwAAFxV8bVbvbvL3QwAAFxVVRWzxczM2wwAAMBVVTUzxc0AvAwAAMBV1bUzxQwAzAwAAABcVbVVxQAAAAAAAADAVcXMDAAAAAAAAAAAzAwAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Mama\"\n    },\n    \"X4JB-Z#5z{GHg)(9D5!a\": {\n        \"data\": \"hwSgAHgAAACZmZmZ0d3dHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bsbu7y8u7u7u7u7u7u7u7u7vLvbu7u7uZmZmZEd3RHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7y8y7u7u7u7u7u7u7u7vLu7u7u7uZmZmZEd3RHMy8uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7zMy7u7u7u7u7u7u7u7u7vLu7u7uZmZmZ0d3dHNy9u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7HbvbvLvMu7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0dHRHNy9uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7EbvbvLu7u8u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7EbsbvLu7u8u7u7u7u7u7u7u7u7u7u7u7uZmZkR0d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7vLu7u7u7u7u7u7u7u7u7u7u7u7uZmZnR3d3dHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZnR3d3dHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZkRERERHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZmRndHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZERHdHNy9uxu9u7u7u7u7u7u7G727u7u7u7u7u7u727Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0d3dHMy8u9u9u8u7u7u7u7u7G7G7u7u7u7u7u7u7273bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZEd3dHBGxu9u9u7y7u7u7u7u7G7G7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0R3dHBGxuxu9u9y7u7u7u7u7G7G7u7u7u7u7u7u7G70bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0d3dHMy8uxuxu9y7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZERHdHNy9u9uxu7y7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbu7u7u7u7u7u7u7uZmZmZmRkRHNy9u9u9u8u7u7u7u7u72727u7u7u7u7u7u7G7Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZmZmRndHNy9uxu9u7u7u7u7u7u7u727u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7uZmZmZERHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0dHRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0dHRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0dHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHMy8uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHBGxuxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmRkR0d3dHBGxu9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmRHd3d3dHMy8u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u8u7uZGdHd3d3dHNy9u9u9u7u7u7u7u7u7u7u7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u8u7uZGd3dHd3dHNy9u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZGd0d3d3dHNy9uxu9u7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7vLu7uZGd3d3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7vLu7uZGdEd3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7vLvLuZmREREdHdHNy9uxuxu7u7u7u7u7u727u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7vLy7uZmZmZGRHRHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7vLzLuZmZmZERHRHNy9uxuxu7u7u7u7u7u7G727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7vbsbu7u7u7u7vLy7uZmZmZ0d0dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7vbvbu7u7u7u7vLu7yZmZkR0d3dHMy8uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7270bsbu7u7u7u7u7vLu7vbu7u7u7u7u8u7yZmZnR3d3dHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bsbu7u7u7u7vLu7u7u7u7u7u7u7u7u7uZmZkR0d3dHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7vLvbu7u7u7u7u7u7u7u7uZmZmZ0d3dHMy8uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7u7u7u7vLvbu7u7u7u7u7u7u7u7uZmZmZEdHdHNy9u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Hbvbu7u7u7u7vLu7u7u7u7u7u7u7u7u7uZmZmZGRHdHNy9uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7vLu7u7u7u7u7u7u7u7uZmZmZGRERHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGd0dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGd3dHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGdHdHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGd3dHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGd3RHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGdHRHNy9uxu9u7u7u7u7u7u7G727u7u7u7u7u7u727Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7sZEREREdHdHMy8u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7273bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7sZ3d3d3d3dHBGxu9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7sZ3dHd3d3dHBGxuxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7sZ3dHd3d3dHMy8uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7sZ3d3d3d3dHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbu7u7u7u7u7u7u7sZ3d3d3d3dHNy9u9u9u7u7u7u7u7u72727u7u7u7u7u7u7G7Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxu9u7u7u7u7u7u7u727u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ3R3dEd3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZEREREdHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZERHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZEd3RHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZEd3RHMy8uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3RHBGxuxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0dHRHBGxu9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZ0d3dHMy8u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZkREdHdHNy9u9u9u7u7u7u7u7u7u7u7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmRnR3d3dHNy9u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmRnd3d3dHNy9uxu9u7u7u7u7u7u7u7u7u7u8u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7uZmRkRERHdHNy9uxuxu7u7u7u7u7u7u7u7u8u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmRHdHNy9uxuxu7u7u7u7u7u7u7u7u8u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmdHdHNy9uxuxu7u7u7u7u7u727u7u8u8u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmRERHNy9uxuxu7u7u7u7u7u72727u7vLu7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmRHdHNy9uxuxu7u7u7u7u7u7G727u7vLvLu7u7u7G7Ebsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZmdHdHNy9uxuxu7u7u7u7u7u7G7G7u7u8vLu7u7u727Ebsbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZmZmRHdHMy8uxuxu7u7u7u7u7u7G7G7u8vLvLu7u7u7270bsbu7u7u7u7u7u7u7vbu7u7u7u7u7u7uZmRkRERERHBGxuxuxu7u7u7u7u7u7G7G7u8u8vLu7u7u7G70bsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRndHd3RHBGxuxuxu7u7u7u7u7u7G7G7u8u7vLu7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRnd3d3dHMy8uxu9u7u7u7u7u7u7G7G7u8u7y7u7u7u7G7Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRnd3d3dHNy9u9u9u7u7u7u7u7u7G7G7u7y7u7u7u7u7G7Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRndHd3RHNy9uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRnd3d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRkR0d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZEdHdHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmREREdHdHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmdHd3d3dHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZEdHd0d3dHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZ0d3d0dHdHNy9uxu9u7u7u7u7u7u7G727u7u7u7u7u7u727Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZ0d3d3d3dHMy8u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7273bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZ0d3d3d3dHBGxu9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZEdHd3d3dHBGxuxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmdHd3d3dHMy8uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRERERERHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbu7u7u7u7u7u7u7uZmZmZmZnRHNy9u9u9u7u7u7u7u7u72727u7u7u7u7u7u7G7Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZmZERERHNy9uxu9u7u7u7u7u7u7u727u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZkR0d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmRER3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u8u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZEdHd3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7y7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7y7u7u7u7u7u7u7u7u7u9y7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7y7u7u7u7u7u7u7u7u7u9y7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ0d3d3d3dHNy9uxuxu7y7u7u7u7u7u7u7u7u7u7y7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZEdHd3d3dHMy8uxuxu7y7u7u7u7u7u7u7u7u7u8u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmRER3d3dHBGxuxuxu8u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZkR0d3dHBGxu9uxu8y7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZEd3dHMy8u9uxu7y8u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZ0R3dHNy9u9u9y7u7u7u7u7u7u7u7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZmZ0d3dHNy9u9uxy7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZERHdHNy9uxu9y7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7uZmZmZmRndHNy9uxuxy7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmRkRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZERHdHNy9uxuxu7u7u7u7u7u727u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZ0d3dHNy9uxuxu7u7u7u7u7u7G727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7uZmZmZ0dHRHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZmZ0d3dHMy8uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7270bsbu7u7u7u7u7u7u7vbu7u7u7u7u7u7uZmZmZ0d3dHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0d3dHBGxuxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0dHdHMy8uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZ0d3dHNy9u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRkR0d3dHNy9uxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRnd3d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmRHd3d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZGdHd3d3dHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZGd0d3d3dHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZGd3dHd3dHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZGdEd3d3dHNy9uxuxu7u7u7u7u7u727G7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmREREdHdHNy9uxu9u7u7u7u7u7u7G727u7u7u7u7u7u727Ebvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGRHRHMy8u9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u7273bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZGRHRHBGxu9u9u7u7u7u7u7u7G7G7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZmZEdHdHBGxuxu9u7u7u7u7u7u7G7G7u7u7u7u7u7u7G70bvbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZkR0d3dHMy8uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7u7u7u7u7u7u7u7u7uZmZnR3d3dHNy9u9uxu7u7u7u7u7u727G7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbu7u7u7u7u7u7u7uZmZnR3d3dHNy9u9u9u7u7u7u7u7u72727u7u7u7u7u7u7G7Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7uZmZkR0d3dHNy9uxu9u7u7u7u7u7u7u727u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7uZmZmZEdHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGRHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZmRkRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u727Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGRHRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGd3RHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGdHdHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGdHRHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGd3RHMy8uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7uZmZmZGd3dHBGxuxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZEREREdHdHBGxu9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7sZ3d3d3d3dHMy8u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9u9u9u7u7u7u7u7u7u7u7u7u7u7u7u7u727Hbvbu7u7u7u7u7u7vbvbu7u7u7u7u7u7sZ3dHd3d3dHNy9u9uxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Hbsbu7u7u7u7u7u7vbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxu9u7u7u7u7u7u7u7u7u7u7u7u7u7u7G7Ebvbu7u7u7u7u7u7sbvbu7u7u7u7u7u7sZ3dEd3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7G70bsbu7u7u7u7u7u7sbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7u7u7u7u7u7u7u7u7u7u7u7u7u7270bsbu7u8u7u7u7u7sbsbu7u7u7u7u7u7sZ3R3dHd3dHNy9uxuxu7u7u7u7u7u727u7u7u7u7u7u7u7270bsbu7u8u7u7u7u7sbsbu7u7u7u7u7u7sZ3R3dEd3dHNy9uxuxu7u7u7u7u7u72727u7u7u7u7u7u7G70bsbu7u7y7u7u7u7sbsbu7u7u7u7u7u7sZ3d3d3d3dHNy9uxuxu7u7u7u7u7u7G727u7u7u7u7u7u7G7Ebsbu7u7y7u7u7u7vbsbu7u7u7vLu7u7sZ3d3d3d3dHNy9uxuxu7u7u7u7u7u7G7G7u7u7u7u7u7u727Ebsbu7u7y7u7u7u7vbvbu7u7vLu7u7u7sZERER0d3dHMy8u9uxu7u7u7u7u7u7G7G7u7u7u7u7u7u7273bsbu7y7y7u7u7u7u7vbu7u7vLvbu7u7s=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Freeway\"\n    },\n    \":-%p!6dsfn@Cn4?(/f-u\": {\n        \"data\": \"hwQQABAAAAAAAACIiIiIAAAAgGZmOIgIAABoZoYziAgAAGhmhoOIDwCImZmJiPi7gJiZmYuI+LyAdneGuIb4/Ghmd4e7hogPaGZ2h7uGiAhoZmaHu4aICGhmZoeIiIgPaGZmh7uG+LuAdneGuIb4vAC4mZmLiPj8AICbmbmIiA8AAIiIiIiIAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Tourist\"\n    },\n    \"IHAx{+JAVkkR7;45OS*f\": {\n        \"data\": \"hwQQABAAAAAAAMzMDAAAAADAVcW1wAwAAFxVtVO8DMwAXFW1U7vMvMBVVRVTy8y8wFVVtVVczLzAVfFVVVXMzMBV/1VVtd3bAFxVVVW7XVUAXFVVVd1dVQDAVVXd3b27AABcVd3d3cwAAMDc3d3dDAAAAMDMzN0MAAAAAADczQAAAAAAAMAMAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Baby\"\n    },\n    \"Bx$o-u1n\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAzMwMAAAAAMAiIsIAAAAAwCIiIgwAAADAIiIiwgAAAAAsIiLCAAAAACwiIiIMAAAAwCIiIsIAAAAsIiIiDAAAACwiIsIAAADAIiIiwgAAAMAiIiIMAAAAwCIiwgAAAAAAzMwMAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Extra Life\"\n    },\n    \";bp3BS6:4IVA7v,VAfR(\": {\n        \"namespace\": \"myImages.\",\n        \"id\": \";bp3BS6:4IVA7v,VAfR(\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDE4MDAxODAwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMDBjMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjMGMwMDAwMDAwMDAwMDAwMGMwMGMwMGNjY2NjYzBjMDAwMDAwMDAwMGMwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMDBjYjA1NTU1NTU1NTU1NTUwYzAwMDBjMGNjNWI1NTU1ZjUxZjU1NTVjNTAwMDBjMGJjNTU1NTU1NTVmZjU1NWRjNTAwMDAwMDViNTU1NTU1NTU1NTU1NTVjNTAwYzAwMDViNTU1ZDU1NTViYjMxYmIwYzAwYzBjYzVkZDVkZGRkNTViYjMzNTMwYzAwMDBiY2RkZGRkZGRkZGQ1NTNiNTMwYzAwY2NkY2RkZGQ1YmI1ZGRkZDU1NTUwYzAwY2NkY2RkZGQ1YjU1YmJiYmNjY2MwMDAwYzBkY2RkZGRiZDU1NTViY2RjMGMwMGNjY2NkYmRkZGRkZGJjNTViY2NjMDAwMGRjZGRkZGRkZGQ1NWJkY2NiYjBjMDAwMGJjZGRkZGRkZGQ1NWQ1YmJjYjBjMDAwMGMwYmNkZGJkZGI1ZDU1YmJkY2NiMGMwMDAwYzBjY2JiYmJkZDU1Y2NkZGJkMGMwMDAwMDAwMGNjYmNkZGJkY2NjY2NjMGMwMDAwMDAwMDAwZGM1ZDU1Y2QwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjMGMwMDAwMDAwMDAwMDAwMGMwY2MwMGNjY2NjYzBjMDAwMDAwMDAwMGMwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMDBjYjA1NTU1NTU1NTU1NTUwYzAwMDBjMGNjNWI1NTU1ZjUxZjU1NTVjNTAwMDAwMGJjNTU1NTU1NTVmZjU1NWRjNTAwMDAwMDViNTU1NTU1NTU1NTU1NTVjNTAwYzAwYzViNTVkZDU1NTViYjMxYmIwYzAwYzBjYzVkZDVkZGRkNTViNTMzNTMwYzAwMDBiMGRkZGRkZGRkZGQ1NTNiNTMwYzAwY2NkY2RkZGQ1YmI1ZGJkZDU1NTUwYzAwY2NkY2RkZGQ1YjU1YmJiYmNjY2MwMDAwYzBkY2RkZGRiZDU1NTViY2RjMGMwMGNjY2NkYmRkZGQ1ZGJjNTViY2NjMDAwMGRjZGRkZGRkZGQ1NTU1Y2NiYjBjMDAwMGMwZGRkZGRkZGI1ZDU1YmJjYjBjMDAwMDAwY2NkZGJkYmJkZDU1YmNkYzBjMDAwMDAwMDBjY2JiYmNkZGRkY2NkZGNkMGMwMDAwMDAwMGNjZGM1ZDU1Y2RjY2NjMGMwMDAwMDAwMDAwY2NjY2NjY2MwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwY2MwY2NjY2NjYzBjMDAwMDAwMDAwMDAwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMGNjYjA1NTU1ZjUxZjU1NTUwYzAwMDBjMGNjNWI1NTU1NTVmZjU1NTVjNTAwMDAwMGJjNTU1NTU1NTU1NTU1NWRjNTAwMDAwYzViNTU1NTU1NTViYjU1NTVjNTAwMDBjYzViNTVkZDVkNTViNTMxYmIwYzAwMDBjYzVkZDVkZGRkNTViNTMzNTMwYzAwMDBjMGRkZDVkZGRkZGQ1NTNiNTMwYzAwYzBiMGRkZGQ1YjU1YmJkYjU1YzUwMDAwYzBkY2RkZGRiYjU1NTViNWNjMGMwMDAwYzBkY2RkZGRkZGNjNTViNWNjMDAwMDAwYzBkY2RkZGRkZGJkY2NiY2NjY2MwMGMwYmNkZGRkZGQ1ZGQ1YmJiYjVjYzUwMGNjZGRkZGRkZGQ1ZDU1YmRjYjVjMGMwMGRjZGRkZGJkYmJkZDU1YjVjYmNjMDAwMGMwZGNkZGJkYmJkYjVkYjVjYzAwMDAwMDAwYzBjY2JiYmJkYmRkY2JkZGNjMDAwMDAwMDBjMGNjY2NkZDU1ZDVjY2NjMDAwMDAwMDAwMDAwMDBjY2NjY2MwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwY2MwY2NjY2NjYzBjMDAwMDAwMDAwMDAwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMGNjYjA1NTU1ZjUxZjU1NTUwYzAwMDBjMGNjNWI1NTU1NTVmZjU1NTVjNTAwMDAwMGJjNTU1NTU1NTU1NTU1NWRjNTAwMDAwYzViNTU1NTU1NTViYjU1NTVjNTAwMDBjYzViNTVkZDVkNTViNTMxYmIwYzAwMDBjYzVkZDVkZGRkNTViNTMzNTMwYzAwMDBjMGRkZDVkZGRkZGQ1NTNiNTMwYzAwYzBiMGRkZGQ1YjU1YmJkYjU1YzUwMDAwYzBkY2RkZGRiYjU1NTViNWNjMGMwMDAwYzBkY2RkZGRkZGNjNTViNWNjMDAwMGMwY2NkY2RkZGRkZGRkY2NiY2NjY2MwMGMwY2RkZGRkZGRkZDU1YmRiYjVjYzUwMGMwZGRkZGRkZGRkZDU1ZDVjYzVjMGMwMGMwZGJkZGJkYmJkYjVkNWQ1NWNjMDAwMDAwYmNkZGJkYmJiYmRkNTU1NTAwMDAwMDAwYzBjY2JiYmJiYjVkNTVjNTAwMDAwMDAwMDBjMGNjY2NjYzVjNTUwYzAwMDAwMDAwMDAwMDAwMDAwMGMwY2MwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwY2MwY2NjY2NjYzBjMDAwMDAwMDAwMDAwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMGNjYjA1NTU1ZjUxZjU1NTUwYzAwMDBjMGNjNWI1NTU1NTVmZjU1NTVjNTAwMDAwMGJjNTU1NTU1NTU1NTU1NWRjNTAwMDAwYzViNTU1NTU1NTViYjU1NTVjNTAwMDBjYzViNTVkZDVkNTViNTMxYmIwYzAwMDBjYzVkZDVkZGRkNTViNTMzNTMwYzAwMDBjMGRkZDVkZGRkZGQ1NTNiNTMwYzAwYzBiMGRkZGQ1YjU1YmJkYjU1YzUwMDAwYzBkY2RkZGQ1YjU1NTViNWNjMGMwMDAwY2NkY2RkZGRjZDVjNTViNWNjMDAwMGMwY2RkY2RkZGRkZGJkY2NiY2NjY2MwMGMwZGRkYmRkZGRkZGRkYmJiYjVjYzUwMGMwZGRkZGRkZGRkZDU1YmRiYjVjMGMwMGMwZGJkZGJkYmJkYjU1ZGRjYmNjMDAwMDAwYmNkZGJkYmJkYjU1ZDVjYzBjMDAwMDAwYzBjY2JiYmJiYmRkNWQ1NTBjMDAwMDAwMDBjMGNjY2NiYzVkNTU1NTBjMDAwMDAwMDAwMDAwMDBjMDVjNTVjNTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjMGMwMDAwMDAwMDAwMDAwMDAwY2MwMGNjY2NjYzBjMDAwMDAwMDAwMDAwY2NjYzVjNTU1NWM1MGMwMDAwMDAwMDAwY2M1YjU1NTU1NTU1YzUwMDAwMDBjMDBjYjA1NTU1NTU1NTU1NTUwYzAwMDBjMGNjNWI1NTU1ZjUxZjU1NTVjNTAwMDAwMGJjNTU1NTU1NTVmZjU1NWRjNTAwMDAwMDViNTU1NTU1NTU1NTU1NTVjNTAwYzAwYzViNTVkZDU1NTViYjMxYmIwYzAwYzBjYzVkZDVkZGRkNTViNTMzNTMwYzAwMDBjY2RkZDVkZGRkZGQ1NTNiNTMwYzAwMDBiMGRkZGQ1YmI1ZGRkZDU1NTUwYzAwY2NkY2RkZGQ1YmI1YmJiYmNjY2MwMGMwY2NkY2RkZGRiZDU1NTViY2NjY2MwMGMwY2RkY2RkZGRkZDVjNTViYzVjYzUwMGMwZGRkZGRkZGRkZGNkY2NiYjVjMGMwMGMwZGJkZGRkZGQ1NWJkYmJjYmNjMDAwMGMwYmNkZGRkZGQ1NWQ1YmJjYmNiMDAwMDAwY2NkY2JkYmI1ZDU1YmJjYzBjMDAwMDAwMDBjY2JiYmJkYjU1YzUwYzAwMDAwMDAwMDAwMGNjY2NkYmRkYmQwYzAwMDAwMDAwMDAwMDAwMDBkYzU1NTVjZDAwMDAwMA==\",\n        \"displayName\": \"Mama Moving\"\n    },\n    \"{$)z?}bfV-l)2pmioGXr\": {\n        \"namespace\": \"myImages.\",\n        \"id\": \"{$)z?}bfV-l)2pmioGXr\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDQwMDAwMDAwMDgwODg4ODAwMDAwMDAwODA2ODY2NjYwODAwMDAwMDg4NjY2NjY2ODYwMDAwMDA5ODY3NjY2NmI3MDgwMDg4OTk3NzY2NjY5NzhiODA2Njk5Nzc2NzY2OTc4OTY4NjY5OTc2Nzc3Nzk2ODk2ODY2OTk4ODg4ODg5ODg5Njg2NmI5YjhiYmI4Yjg4OTY4ODg4OGJiYmJiODhiOGI4ODMzODg2NjY2Njg4Njg4Mzg4Mzg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ZmY4Zjg4ZjhmZjg4ODBmOGNiZmM4OGJmY2MwZjAwMDBiYjBmMDBiMGZiMDAwMDAwMDA4MDg4ODgwMDAwMDAwMDgwNjg2NjY2MDgwMDAwMDA4ODY2NjY2Njg2MDAwMDAwOTg3NzY3NjZiNzA4MDA4ODk5Nzc3NzY2OTc4YjgwNjY5OTc3Nzc2Nzk3ODk2ODY2OTk3Njc3Nzc5Njg5Njg2Njk5ODg4ODg4OTg4OTY4NjZiOWI4YmJiOGI4ODk2ODg4ODhiYmJiYjg4YjhiODgzMzg4NjY2NjY4ODY4ODM4ODM4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OGZmOGY4OGY4ZmY4ODgwZjhmZmZiODhmZmJmMGYwMDAwYmMwYjAwYzBiYjAwMDAwMDAwODA4ODg4MDAwMDAwMDA4MDY4NjY2NjA4MDAwMDAwODg2NjY2NjY4NjAwMDAwMDk4Njc2Njc3YjcwODAwODg5OTY3NjY3Nzk3OGI4MDY2OTk3NzY2NzY5Nzg5Njg2Njk5NzY3Nzc3OTY4OTY4NjY5OTg4ODg4ODk4ODk2ODY2YjliOGJiYjhiODg5Njg4ODg4YmJiYmI4OGI4Yjg4MzM4ODY2NjY2ODg2ODgzODgzODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhmZjhmODhmOGZmODg4MGY4YmNmYjg4Y2ZiYjBmMDAwMGZmMGYwMGYwZmYwMDAwMDAwMDgwODg4ODAwMDAwMDAwODA2ODY2NjYwODAwMDAwMDg4NjY2NjY2ODYwMDAwMDA5ODY3NjY2NmI3MDgwMDg4OTk2NzY2NjY5NzhiODA2Njk5Nzc2NjY2OTc4OTY4NjY5OTc2Nzc3Nzk2ODk2ODY2OTk4ODg4ODg5ODg5Njg2NmI5YjhiYmI4Yjg4OTY4ODg4OGJiYmJiODhiOGI4ODMzODg2NjY2Njg4Njg4Mzg4Mzg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ZmY4Zjg4ZjhmZjg4ODBmOGJiZmM4OGJmY2IwZjAwMDBmYzBmMDBjMGZmMDA=\",\n        \"displayName\": \"Animated Tourist\"\n    },\n    \"]/cI@:JS;!+E)%*%^wDC\": {\n        \"namespace\": \"myImages.\",\n        \"id\": \"]/cI@:JS;!+E)%*%^wDC\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwY2NjYzAwMDAwMDAwMDBjYzU1NTVjYzAwMDAwMGMwNTU1NTU1NTUwYzAwMDA1YzU1NTVmMTU1YzUwMDAwNWM1NTU1ZmY1NTU1MGMwMDVjNTU1NTU1NTU1NTBjMDBjY2JiYjE1NTU1NTVjZDAwNWMzMzUzNTU1NWRkY2QwMGIwNTU1NTU1NTVkZGNkMDAwMGJjY2I1NWRiZGRjZDBjYzBiYjVjYjVkYmRkY2RjZGMwY2NjY2RjZGRkZGRkY2QwMGMwY2NkYzU1ZGJkZDBjMDBjY2NjYmM1NWNiY2MwMDAwYmNiYmRjNTVjYjAwMDAwMDAwY2NjYzBjMDAwMDAwMDBjYzU1NTVjNTAwMDAwMGMwNTU1NWYxNTUwYzAwMDA1YzU1NTVmZjU1YzUwMDAwNWM1NTU1NTU1NTU1MGMwMGNjYmJiMTU1NTU1NTBjMDA1YzMzNTM1NTU1NTVjZDAwNWMzMzUzNTU1NWRkY2QwMGMwNTU1NTViNTVkZGNkMDAwMGJjY2I1NWRiZGRjZDAwYzBiYjVjYjVkYmRkY2RjY2MwY2NjY2RjZGRkZGRkY2QwMDAwY2NiYzU1ZGJkZDBjMDAwMGMwNWRiNWNiY2MwMDAwMDBjY2NjY2MwYzAwMDAwMDAwYmNiYjBjMDAwMDAwMDAwMGNjY2MwYzAwMDAwMDAwY2M1NTU1YzUwMDAwMDBjMDU1NTVmMTU1MGMwMDAwNWM1NTU1ZmY1NWM1MDAwMDVjNTU1NTU1NTU1NTBjMDBjY2JiYjE1NTU1NTUwYzAwNWMzMzUzNTU1NTU1Y2QwMDVjNTU1NTU1NTVkZGNkMDBjMDU1NTU1YjU1ZGRjZDAwMDBiY2NiNTVkYmRkY2QwMGMwYmI1Y2I1ZGJkZGNkY2NjMGNjY2NkY2RkZGRkZGNkMDAwMGNjNWJiNWRkY2QwYzAwMDBkYzU1YmJjYzBjMDAwMDAwY2NjY2NjMGMwMDAwMDAwMGJjYmIwYzAwMDAwMDAwMDBjY2NjMGMwMDAwMDAwMGNjNTU1NWM1MDAwMDAwYzA1NTU1ZjE1NTBjMDAwMDVjNTU1NWZmNTVjNTAwMDA1YzU1NTU1NTU1NTUwYzAwY2NiYmIxNTU1NTU1MGMwMDVjMzM1MzU1NTU1NWNkMDA1YzU1NTU1NTU1ZGRjZDAwYzA1NTU1NWI1NWRkY2QwMDAwYmNjYjU1ZGJkZGNkMDBjMGJiNWNiNWRiZGRjZDBjYzBjY2NjYmJkZGRkZGRjYzAwYzA1Y2I1NTVkZGRkY2QwMDAwYmM1NWJiY2NjY2NjMDAwMGNjY2NjYzAwMDAwMDAwMDBjMGJiY2IwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjY2MwMDAwMDAwMDAwY2M1NTU1Y2MwMDAwMDBjMDU1NTU1NTU1MGMwMDAwNWM1NTU1ZjE1NWM1MDAwMDVjNTU1NWZmNTU1NTBjMDBjY2JiYjE1NTU1NTUwYzAwY2MzM2JiNTU1NTU1Y2QwMDVjMzM1MzU1NTVkZGNkMDBiMDU1NTU1NTU1ZGRjZDAwMDBiY2NiNTVkYmRkY2QwMGMwYmI1Y2I1ZGJkZGNkY2NjMGNjY2NkY2RkZGRkZGNkMDBjMGNjZGM1NWRiZGRjYzAwYzBjYmJjNTVjYmNjMDAwMGMwY2M1ZGI1MGMwMDAw\",\n        \"displayName\": \"Animated Baby\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"HSB#hx_+P`azBCey0vH4\":\n            case \"Mama\":return img`\n........................\n........................\n...........cc...........\n...........cccc.........\n.......cc...ccccccc.....\n.......cccccc555555cc...\n........ccb5555555555c..\n.....cc..b555555555555c.\n.....cccb555555ff155555c\n.....ccb55555555ff55d55c\n......b5555555555555555c\n...c..b555d55555bb13bbc.\n...cccd55ddddd55bb3335c.\n....cbdddddddddd55b335c.\n..cccdddddb55bdddd5555c.\n..cccdddddb555bbbbcccc..\n...ccddddddb5555cbcdc...\nccccbdddddddcb55cbcc....\ncddddddddd55dbccbbc.....\ncbdddddddd555dbbbcc.....\n.ccbdddbbdd555bbcdbcc...\n...cccbbbbdd55ccdddbc...\n......cccbdddbccccccc...\n........cdd555dc........\n`;\n            case \"X4JB-Z#5z{GHg)(9D5!a\":\n            case \"Freeway\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111\n99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1\n99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1\n9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1\n999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1\n99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1\n9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1\n1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1\nd11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd\ndddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd\nddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd\nd11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd\nddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc\n11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc\n11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d\n11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111\n111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd\nd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d\n11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\ncccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc\nbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc\nccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb\nbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb\nbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc\ndbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n`;\n            case \":-%p!6dsfn@Cn4?(/f-u\":\n            case \"Tourist\":return img`\n. . . . . . . 8 8 8 8 8 . . . . \n. . . . . 8 8 6 6 6 6 6 8 . . . \n. . . . 8 8 6 6 6 6 6 6 6 8 . . \n. . . . 8 9 7 6 6 6 6 6 7 b 8 . \n. . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 \n. 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 \n8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 \n8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 \n8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 \n8 6 8 8 8 8 b b b b 8 b b 8 b 8 \n8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 \n8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 f f f 8 8 8 8 f f f 8 8 \n. 8 8 f b c c f 8 8 f b c c f . \n. . . . b b f . . . . b b f . . \n`;\n            case \"IHAx{+JAVkkR7;45OS*f\":\n            case \"Baby\":return img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c c . \n. c b b c 5 5 b b d d d d c d c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d d c . \n. . c c c c c b 5 5 b c c c . . \n. . c b b b c d 5 5 b c . . . . \n`;\n            case \"Bx$o-u1n\":\n            case \"Extra Life\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . c c c . . . . . c c c . . . \n. c 2 2 2 c c . c c 2 2 2 c . . \n. c 2 2 2 2 2 c 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. c 2 2 2 2 2 2 2 2 2 2 2 c . . \n. . c 2 2 2 2 2 2 2 2 2 c . . . \n. . . c 2 2 2 2 2 2 2 c . . . . \n. . . . c c 2 2 2 c c . . . . . \n. . . . . . c 2 c . . . . . . . \n. . . . . . . c . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Mama Moving\":\n            case \";bp3BS6:4IVA7v,VAfR(\":return [img`\n........................\n........................\n...........cc...........\n...........cccc.........\n.......cc...ccccccc.....\n.......cccccc555555cc...\n........ccb5555555555c..\n.....cc..b555555555555c.\n.....cccb555555ff155555c\n.....ccb55555555ff55d55c\n......b5555555555555555c\n...c..b555d55555bb13bbc.\n...cccd55ddddd55bb3335c.\n....cbdddddddddd55b335c.\n..cccdddddb55bdddd5555c.\n..cccdddddb555bbbbcccc..\n...ccddddddb5555cbcdc...\nccccbdddddddcb55cbcc....\ncddddddddd55dbccbbc.....\ncbdddddddd555dbbbcc.....\n.ccbdddbbdd555bbcdbcc...\n...cccbbbbdd55ccdddbc...\n......cccbdddbccccccc...\n........cdd555dc........\n`, img`\n........................\n........................\n...........ccc..........\n...........cccc.........\n.......ccc..ccccccc.....\n.......cccccc555555cc...\n........ccb5555555555c..\n.....cc..b555555555555c.\n.....cccb555555ff155555c\n......cb55555555ff55d55c\n......b5555555555555555c\n...cc.b555dd5555bb13bbc.\n...cccd55ddddd555b3335c.\n.....bdddddddddd55b335c.\n..cccdddddb55bbddd5555c.\n..cccdddddb555bbbbcccc..\n...ccddddddb5555cbcdc...\nccccbdddddd5cb55cbcc....\ncddddddddd5555ccbbc.....\n.cddddddbdd555bbbcc.....\n..ccdddbbbdd55cbcdc.....\n....ccbbcbddddccdddcc...\n......cccdd555dcccccc...\n........cccccccc........\n`, img`\n........................\n............cc..........\n............ccc.........\n........ccc.ccccccc.....\n........ccccc555555cc...\n........ccb5555555555c..\n.....ccc.b55555ff15555c.\n.....cccb5555555ff55555c\n......cb555555555555d55c\n....c.b555555555bb55555c\n....ccb555ddd5555b13bbc.\n....ccd55ddddd555b3335c.\n.....cdd5ddddddd55b335c.\n...c.bddddb555bbbd555c..\n...ccdddddbb55555bccc...\n...ccdddddddcc555bcc....\n...ccddddddddbcccbcccc..\n.ccbddddddd55dbbbbc55c..\nccddddddddd555dbbcc5c...\ncddddddbbbdd555bbccc....\n.ccddddbbbbdd55bcc......\n...cccbbbbbdddbcddcc....\n.....cccccdd555dcccc....\n..........cccccc........\n`, img`\n........................\n............cc..........\n............ccc.........\n........ccc.ccccccc.....\n........ccccc555555cc...\n........ccb5555555555c..\n.....ccc.b55555ff15555c.\n.....cccb5555555ff55555c\n......cb555555555555d55c\n....c.b555555555bb55555c\n....ccb555ddd5555b13bbc.\n....ccd55ddddd555b3335c.\n.....cdd5ddddddd55b335c.\n...c.bddddb555bbbd555c..\n...ccdddddbb55555bccc...\n...ccdddddddcc555bcc....\n.ccccdddddddddcccbcccc..\n.cdcdddddddd55dbbbc55c..\n.cdddddddddd555dccc5c...\n.cbddddbbbbdd5d555cc....\n..cbdddbbbbbdd5555......\n...cccbbbbbbd5555c......\n.....cccccccc555c.......\n.............ccc........\n`, img`\n........................\n............cc..........\n............ccc.........\n........ccc.ccccccc.....\n........ccccc555555cc...\n........ccb5555555555c..\n.....ccc.b55555ff15555c.\n.....cccb5555555ff55555c\n......cb555555555555d55c\n....c.b555555555bb55555c\n....ccb555ddd5555b13bbc.\n....ccd55ddddd555b3335c.\n.....cdd5ddddddd55b335c.\n...c.bddddb555bbbd555c..\n...ccdddddb555555bccc...\n..cccddddddcc5555bcc....\n.cdccddddddddbcccbcccc..\n.cddbdddddddddbbbbc55c..\n.cdddddddddd55dbbbc5c...\n.cbddddbbbbd55ddbccc....\n..cbdddbbbbd555dccc.....\n...cccbbbbbbddd555c.....\n.....ccccccbd55555c.....\n...........cc5555c......\n`, img`\n........................\n............cc..........\n............ccc.........\n........cc..ccccccc.....\n........ccccc555555cc...\n........ccb5555555555c..\n.....cc..b555555555555c.\n.....cccb555555ff155555c\n......cb55555555ff55d55c\n......b5555555555555555c\n...cc.b555dd5555bb13bbc.\n...cccd55ddddd555b3335c.\n....ccdd5ddddddd55b335c.\n.....bddddb55bdddd5555c.\n..cccdddddb55bbbbbcccc..\n.ccccddddddb5555cbcccc..\n.cdccdddddddc555cbc55c..\n.cdddddddddddcccbbc5c...\n.cbddddddd55dbbbbccc....\n.ccbdddddd555dbbbcbc....\n..cccddbbbd555bbccc.....\n....ccbbbbbd555cc.......\n......ccccbddddbc.......\n..........cd5555dc......\n`];\n            case \"Animated Tourist\":\n            case \"{$)z?}bfV-l)2pmioGXr\":return [img`\n. . . . . . . 8 8 8 8 8 . . . . \n. . . . . 8 8 6 6 6 6 6 8 . . . \n. . . . 8 8 6 6 6 6 6 6 6 8 . . \n. . . . 8 9 7 6 6 6 6 6 7 b 8 . \n. . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 \n. 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 \n8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 \n8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 \n8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 \n8 6 8 8 8 8 b b b b 8 b b 8 b 8 \n8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 \n8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 f f f 8 8 8 8 f f f 8 8 \n. 8 8 f b c c f 8 8 f b c c f . \n. . . . b b f . . . . b b f . . \n`, img`\n. . . . . . . 8 8 8 8 8 . . . . \n. . . . . 8 8 6 6 6 6 6 8 . . . \n. . . . 8 8 6 6 6 6 6 6 6 8 . . \n. . . . 8 9 7 7 7 6 6 6 7 b 8 . \n. . 8 8 9 9 7 7 7 7 6 6 7 9 b 8 \n. 8 6 6 9 9 7 7 7 7 7 6 7 9 9 8 \n8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 \n8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 \n8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 \n8 6 8 8 8 8 b b b b 8 b b 8 b 8 \n8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 \n8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 f f f 8 8 8 8 f f f 8 8 \n. 8 8 f f f b f 8 8 f f f b f . \n. . . . c b b . . . . c b b . . \n`, img`\n. . . . . . . 8 8 8 8 8 . . . . \n. . . . . 8 8 6 6 6 6 6 8 . . . \n. . . . 8 8 6 6 6 6 6 6 6 8 . . \n. . . . 8 9 7 6 6 6 7 7 7 b 8 . \n. . 8 8 9 9 7 6 6 6 7 7 7 9 b 8 \n. 8 6 6 9 9 7 7 6 6 6 7 7 9 9 8 \n8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 \n8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 \n8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 \n8 6 8 8 8 8 b b b b 8 b b 8 b 8 \n8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 \n8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 f f f 8 8 8 8 f f f 8 8 \n. 8 8 f c b b f 8 8 f c b b f . \n. . . . f f f . . . . f f f . . \n`, img`\n. . . . . . . 8 8 8 8 8 . . . . \n. . . . . 8 8 6 6 6 6 6 8 . . . \n. . . . 8 8 6 6 6 6 6 6 6 8 . . \n. . . . 8 9 7 6 6 6 6 6 7 b 8 . \n. . 8 8 9 9 7 6 6 6 6 6 7 9 b 8 \n. 8 6 6 9 9 7 7 6 6 6 6 7 9 9 8 \n8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 \n8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 \n8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 \n8 6 8 8 8 8 b b b b 8 b b 8 b 8 \n8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 \n8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 \n8 8 8 8 f f f 8 8 8 8 f f f 8 8 \n. 8 8 f b b c f 8 8 f b b c f . \n. . . . c f f . . . . c f f . . \n`];\n            case \"Animated Baby\":\n            case \"]/cI@:JS;!+E)%*%^wDC\":return [img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c c . \n. c b b c 5 5 b b d d d d c d c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d d c . \n. . c c c c c b 5 5 b c c c . . \n. . c b b b c d 5 5 b c . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . . c c c b 5 5 b d d d c . \n. . . . . c d 5 5 b b c c c . . \n. . . . c c c c c c c . . . . . \n. . . . c b b b c . . . . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 5 5 5 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . . c c b 5 5 b d d d c c . \n. . . . c d 5 5 b b c c c . . . \n. . . . c c c c c c c . . . . . \n. . . . c b b b c . . . . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 5 5 5 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c . \n. c c c c c b b d d d d d d c c \n. . . c c 5 5 b 5 5 d d d d d c \n. . . . c b 5 5 b b c c c c c c \n. . . . c c c c c c . . . . . . \n. . . . . c b b b c . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc c 3 3 b b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d d c c \n. . . c b c c b 5 5 b c c c . . \n. . . c c c d 5 5 b c . . . . . \n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"*BrE]slk{%p[|_,[Blfb\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"MlJWwPbtZMs?R3WH[4w,\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"Ig-0z}DUvXe9^HJt@9!B\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"Sd:$Fd0Yk%OhFz-WL~G$\">Enemy</variable><variable id=\"i*xN?bKlVb*T^747`D6H\">projectile2</variable><variable id=\"yZPDc$#}T):iDkIa-%I3\">projectile</variable><variable id=\"BIvF;A%Av:nbCRJmLu8q\">mamaDino</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"dino - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"core\": \"*\",\n        \"arcade-background-scroll\": \"github:microsoft/arcade-background-scroll/\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.6.24\",\n        \"tag\": \"v1.6.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5bea1575ea693e0648a647cbd86cda9776d58f48\",\n        \"target\": \"1.6.24\",\n        \"pxt\": \"7.2.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```
