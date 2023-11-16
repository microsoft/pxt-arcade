# Move the Turkey
### @explicitHints true


## Welcome @showdialog

Happy **Turkey Day!**

This activity will show you how to make a jumpy
platform game.

![An anigif of the game we're about to build](/static/skillmap/turkey/turkey1.gif "Look what we're about to do today!")

Click "Ok" to get started.




## {2. We need a HERO}

**Where's the turkey??**

---

Let's create a turkey sprite and get it moving before we do anything else.


- :paper plane: From the ``||sprites:Sprites||`` category,
grab <br/>
```block
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```
<br/>and snap it inside and at **the end** of the ``||loops(noclick):on start||``
container already in the workspace.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our turkey will be a sprite, too.

hint~


#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(img`.`, SpriteKind.Player)
```


## {3. We need a Turkey}

Choose the big turkey...

---

- :paint brush: Click the empty grey box,
then switch to **My Assets** and click the turkey named **player**.

![Pick player from My Assets](/static/skillmap/turkey/pick-player.gif "Toggle to My Assets and choose player")

#### ~ tutorialhint
```blocks

// @highlight
let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
```



## {4. Control the Player}

**Time to get the player moving**

---

- :game: From the ``||controller:Controller||`` category, grab<br/>
```block
controller.moveSprite(bigTurkey, 100, 0)
```
<br/>and drag it into **the end** of the <br/>
``||loops(noclick):on start||``
<br/>container.

This block is set in a way that lets you move the turkey left and right, but not up or down.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
// @highlight
controller.moveSprite(bigTurkey, 100, 0)
```


## {5. Try It}


- :binoculars: Test your project in the game window!

You should be able to move your sprite with the joypad or arrow keys on your keyboard.

![Look for the game window in the lower right](/static/skillmap/turkey/game.png)




## {6. Add gravity}

**To make the game playable, it needs gravity.**

For that, we'll add acceleration.

---

- :paper plane:  From the ``||sprites:Sprites||`` category, grab
```block
let bigTurkey: Sprite = null
bigTurkey.ay = 500
```
and snap it inside at **the end** of the
``||loops(noclick):on start||`` container.


~hint What is acceleration?💡

---

Acceleration controls how speed changes in a direction.

We need to play with the turkey's speed in the vertical (up & down) direction.

hint~


#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
// @highlight
bigTurkey.ay = 500
```

## {7. Follow with Camera}

**Oops!  The turkey falls off-screen!**

---

- :tree:  To keep the turkey in sight, go to ``||scene:Scene||`` and drag<br/>
```block
scene.cameraFollowSprite(bigTurkey)
```
<br/>to **the end** of the
``||loops(noclick):on start||`` container.

#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
// @highlight
scene.cameraFollowSprite(bigTurkey)

```


## {8. Look Again}


- :binoculars: Check your project in the game window!

Your turkey should land on a platform,
then you should be able to move it with the joypad or arrow keys on your keyboard.




## {9. Start at the Bottom}

**The turkey landed, but it's already near the top of the tilemap!**

Let's move it to a special tile on the ground.

---

- :tree: From ``||scene:Scene||``, drag
```block
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency16`)
```
into **the end** of the
``||loops(noclick):on start||`` container.



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, assets.tile`transparency16`)
```

## {10. Start at the Bottom}


- :mouse pointer: Click the checkered square and select the **start** tile,
which looks like a purple line at the bottom of the square.
![The start tile for the turkey](/static/skillmap/turkey/start-tile.png "Choose the first non-empty tile.")



#### ~ tutorialhint

```blocks

let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
//@highlight
tiles.placeOnRandomTile(bigTurkey, turkey_imgs.start)
```

## {11. Jump}

Now that the turkey is on the ground,
we need to make it jump using the **A** button!

---

- :game: From ``||controller:Controller||``, drag<br/>
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let bigTurkey: Sprite = null
    bigTurkey.vy = -300
})
```
<br/>into **an empty area** of the workspace.

This bundle of code will change the velocity of the turkey for a moment each time you press the A button (or space bar on your keyboard.)

~hint What is velocity? 💡

---

Velocity is the speed that something is traveling in a specific direction.

In this step, we're changing the speed that the turkey moves in the up/down direction.

hint~

#### ~ tutorialhint

```blocks
let bigTurkey: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

## {12. Play your game!}


- :binoculars: Test your game!

Give your game a try using the arrow keys and A button (or space bar.)

Can you get your turkey to the top of the screen?



## {Finale}

When you're finished playing your game, click **Done**
to return to the main skillmap.

Continue to the next level to find out how to rescue your turkey friends 
from their cages!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right 
corner for the share button.

![Share your card](/static/skillmap/turkey/share.gif )

hint~




```blockconfig.global
let bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)

tiles.placeOnRandomTile(bigTurkey, turkey_imgs.start)

scene.cameraFollowSprite(bigTurkey)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
turkey_imgs=github:kiki-lee/turkey_imgs
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})

let bigTurkey: Sprite = null

bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
tiles.placeOnRandomTile(bigTurkey, turkey_imgs.start)
bigTurkey.ay = 500
controller.moveSprite(bigTurkey, 100, 0)
scene.cameraFollowSprite(bigTurkey)

```


```customts
scene.setBackgroundColor(9)
tiles.setTilemap(turkey_imgs.level1)

namespace SpriteKind {
    //% isKind
    export const Rescued = SpriteKind.create()
}
```
