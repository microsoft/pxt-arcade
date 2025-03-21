# Prepare Your Ship
### @explicitHints true

## Introduction @showdialog

Some of the satellites used in the Azure Space program have mysteriously gone offline
and they need to be updated. In order to help, you have to be in their direct line of
sight so you can transmit data to fix them.

Before any of that, you must code the program that will let you SAVE THE GALAXY!

![Flying through space](/static/skillmap/galaxy/galaxy1.gif "Blasting through space")

<!--
---

Age: 12+<br/>
Exp: 🔴🔴⭕⭕⭕<br/>

---
-->


## {2. Set the scene}
**Giving Space**
🌏 🪐 🌕

Set a background to make your project beautiful.

---

- :tree: From the  ``||scene:Scene||`` category, drag
``||scene:set background image to [ ]||``<br/>
into the empty <br/>
``||loops(noclick):on start||``<br/>
container already in the workspace.


- :paint brush: Click the empty box and switch to **Gallery**
![Toggle to Gallery](/static/skillmap/assets/gallery.png "toggle to the Gallery Window")
to choose the **galaxy** background, then click **Done**.
![Choose the galaxy background](/static/skillmap/galaxy/galaxy-bg.png " ")



#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(galaxyimgs.Galaxy)
```




## {Step 3}

**Look at your project**

- :binoculars: Take a look at the game window. <br/><br/>
Do you see the background you chose?


![Look for the game window in the lower right](/static/skillmap/assets/game-window.png "Click the mini game window to pop open the bigger game window.")





## {4. Make it fly}
**🌟 Move It 🌟**

---

- :arrows alternate:  From ``||scroller:Scroller||``, grab <br/>
``||scroller:scroll background with vx [-50] vy [-50]||`` <br/>
and drop it in to **the end** of the
``||loops(noclick):on start||`` container.


- :mouse pointer: To keep the background from scrolling sideways, change **vx** to **0**.

- :mouse pointer: To set a nice, slow vertical pace, change **vy** to **10**.

~hint What are vx and vy?💡

---

![Illustration of VX, VY as directions in Arcade](/static/skillmap/galaxy/vxvy.png " ")

In MakeCode Arcade, **vx** stands for the "velocity in the direction of x" — which is a
complicated way of saying "the speed from side to side."

- The larger your **vx** value is, the faster something will travel to the right.
- The lower your **vx**, the faster it will travel to the left.
- If your **vx** is 0, the item won't move from side to side at all.


Similarly, **vy** stands for the "velocity in the direction of y" — which is a
complicated way of saying "the speed from top to bottom."

- The larger your **vy** value is, the faster something will travel downward.
- The lower your **vy**, the faster it will travel upward.
- If your **vy** is 0, the item won't move either up or down.


hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
// @highlight
scroller.scrollBackgroundWithSpeed(0, 10)
```


## {5. Choose your ship}
**Pick your ship!**

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables(sprites):set [myShip] to sprite [ ] of kind [Player]||``<br/>
to **the end** of the
``||loops:on start||`` container.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our space ship will be a sprite, too.

hint~


- :paint brush: Click the empty box in the middle of the <br/>
 ``||variables(sprites):set [myShip] to sprite [ ] of kind [Player]||``<br/>
 block, then switch to **Gallery** and choose a space ship.
![Choose a ship](/static/skillmap/galaxy/bowie.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
// @highlight
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
```



## {6. Control your ship}

 **🚀 Time to Fly 🚀**

---

- :game: From ``||controller: Controller||``, drag<br/>
``||controller:move [myShip] with buttons||``<br/>
into **the end** of the
``||loops(noclick):on start||`` container.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
// @highlight
controller.moveSprite(myShip)
```



## {Step 7}

**Give it a try!**

- :binoculars: Click the game screen.

Try moving your ship with the joypad,
arrow keys, or **W** and **S** keys.

What happens when you hold one arrow down for a long time?



## {8. Stay on Screen}

**Uh-oh, if you move off screen, your ship disappears!**

---

- :paper plane: To keep your ship from exploring beyond the edges, go to ``||sprites:Sprites||`` and drag<br/>
 ``||sprites:set [myShip] stay in screen <on>||`` <br/>
 into **the end** of the ``||loops(noclick):on start||`` container.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(galaxyimgs.Galaxy)
scroller.scrollBackgroundWithSpeed(0, 10)
let myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
// @highlight
myShip.setStayInScreen(true)


```


## {9. Test It}

**Great Job!**

---

- :binoculars: Test your project again!

Your ship should be able to move all around without leaving the screen.

Is everything how you want it so far?
You can always go back and edit your code if you want it to work differently.



## {10. Finale}

** ☄️ Success! ☄️**

You've finished your first steps!

~hint How do I share my project?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/galaxy/share.gif )

hint~

Click **Done** to return to the main skillmap and keep going to
discover how to send information through space!


```blockconfig.global
let myShip = sprites.create(img`.`, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
```


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```


```ghost
let myEnemy: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip)
myShip.setStayInScreen(true)
myShip.y = 100

```

```customts
    namespace SpriteKind {
      //% isKind
        export const Satellite = SpriteKind.create()
    }
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF92BA",
        "#993648",
        "#FF8135",
        "#FFF76B",
        "#0BA6B1",
        "#FFB5AF",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#C0C0C0",
        "#180A42",
        "#001E57"
    ]
}
```

