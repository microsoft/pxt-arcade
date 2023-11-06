# Pile of Sticks
### @explicitHints true


## prehistoric (adjective) @showdialog


_prē-(h)i-ˈstȯr-ik_

: from a time before human records were kept

---

This tutorial will help you create your own game, set near prehistoric Mount Carmel in Israel, with the goal of lighting a fire before the wind blows away your sparks.

![Campfire Sparks](/static/skillmap/sparks/sparks1.gif "Let's create sparks")




## {2. Your First Block}

**Ready to start coding?**

Let's set the scene of a cave near the mountains.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab <br/>
``||scene:set background image to [ ]||``<br/>
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.



~hint What does that mean? 🤷🏽

---

When giving instructions, we'll highlight some text to give you a better idea of what you are looking for.

For example, when we suggest the <br/>
``||scene:set background image to [ ]||``<br/>
block, we are pointing you toward <br/>

```block
scene.setBackgroundImage(img`.`)
```

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`.`)
```


## {3. Choose the cave}

**Choose a cave background.**

- :paint brush: Click the empty box and switch to **Gallery**
![Toggle to Gallery](/static/skillmap/assets/gallery.png "toggle to the Gallery Window")
<br/>Choose one of the cave backgrounds.<br/>
![Choose the background that looks like a background full of holes.](/static/skillmap/sparks/cave.png "Select a cave from My Assets.")
<br/>Then click **Done**.





#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
```



## {4. Check Your Game!}


- :binoculars: Look at your project in the game window to see how it has changed!

You should see a cave background with an empty firepit in the middle.


![Look for the game window in the lower right](/static/skillmap/sparks/game.png "Click the mini game window to pop open the bigger game window.")








## {5. Add the Sprite}


Let's add a **SPRITE** to our game that looks like kindling.

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our firewood will be a sprite, too.

hint~

<br/>

- :paper plane: From the ``||sprites: Sprites||`` category **in the toolbox**, grab <br/>
``||variables(sprites):set [kindling] to sprite [ ] of kind [Player]||``<br/>
and snap it inside at **the bottom** of the ``||loops(noclick): on start||`` block already in the workspace.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(img`.`, SpriteKind.Player)
```



## {6. Choose the kindling}


- :mouse pointer: Click the empty square inside the new block and switch to the
**Gallery**.

![Toggle to Gallery](/static/skillmap/assets/gallery.png "toggle to the Gallery Window")

- :mouse pointer: Select **pile1** (which is the largest pile of sticks in the gallery) and click **Done**.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
```




## {7. Check Your Game!}


- :binoculars: Take a look at the game window to see your project!

You should see a pile of kindling flying above the ground.




## {8. Place the kindling}

Let's align the **kindling** with the rock firepit.

- :paper plane: From the ``||sprites:Sprites||`` category, grab <br/>
``||sprites:set [kindling] position to x [70] y [80]||`` <br/>
and snap it inside at **the bottom** of the ``||loops(noclick): on start||`` block already in the workspace.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
//@highlight
kindling.setPosition(70, 80)
```




## {9. Making Sparks}

🔥 **Make sparks** 🔥

- :game: From the ``||controller: Controller||`` category **in the toolbox**, grab <br/>
``||controller: on [A] button [pressed]||`` <br/>
and drop it into an empty area of the workspace.


The is an **EVENT** block and it will cause the **ACTION** inside to happen each time the (A) button is pressed.

~hint Tell me about events! 💡

---

Events are things that might or might not happen while the code is running.  A player might press a button, a timer might run out, or one sprite might overlap with another.

Each of those things is an event that you can assign a special action to in Arcade.

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```



## {10. Add Points}

Now we can add a point each time the (A) button is clicked.

This will be the **ACTION** that goes with our **EVENT**.


- :id card: From the ``||info: Info||`` category in the toolbox, grab <br/>
``||info: change score by [1]||`` <br/>
and snap it into the empty <br/>
``||controller(noclick): on [A] button [pressed]||`` <br/>
block that's already in the workspace.



#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    info.changeScoreBy(1)
})
```




## {11. Add Fire}

We can finish by adding spark effects with each click.


- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||sprites: [kindling] start [fire] effect||`` <br/>
and snap it anywhere inside the <br/>
``||controller(noclick): on [A] button [pressed]||`` <br/>
block that's already in the workspace.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
    kindling.startEffect(effects.fire)
})
```




## {12. Check Your Game!}


- :binoculars: Take a look at the game window to see your project!

You should see sparks ignite your kindling each time you click the (A) button. You should also get a point with each click.




## {13. Little bit softer now}

Right now, the sparks build too quickly. Let's fix that.

- :mouse pointer: Click the white plus sign to the right of the <br/>
``||sprites: [kindling] start [fire] effect||`` <br/>
block.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
        kindling.startEffect(effects.fire, 500)
})
```




## {14. Play!}

- :binoculars: Take a look at what you've made!

How many points can you get in twenty seconds?




## {15. Finale}

**🪵 Way to Go 🪵**

You have created a clicker game.


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/sparks/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap so you can add a way to win or lose!


```blockconfig.global
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)

```

```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        info.changeScoreBy(1)
        kindling.startEffect(effects.fire, 500)
})
info.onScore(30, function () {
    game.gameOver(true)
})
let kindling: Sprite = null
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```



```customts
namespace game {
    /**
     * This is a reporter block that returns
     * the number of seconds since the game started
     */
    //% block="time since start (tenths) "
    export function timeSinceStartSec(): number {
        return game.runtime()/100;
    }
}
```