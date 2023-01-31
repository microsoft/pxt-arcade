# Collect the Clovers
### @explicitHints true

### ~button /#tutorial:/tutorials/collect-the-clovers

Try this tutorial!

### ~

## {Introduction @showdialog}

Create a garden game to collect 4-leaf clovers and avoid the bees!

![Collect the Clovers game in action](/static/tutorials/collect-the-clovers/collect-clovers-sim.gif)



## {Step 2 - Set the Background image}


Start by setting the scene.


- :tree: Open the ``||scene:Scene||`` category and drag
```block
scene.setBackgroundImage(img`.`)
```
into the ``||loops(noclick):on start||``<br/>
container that's already in the workspace.


<!-- Removing until anigifs are ready>

~hint Click here to see how 🕵🏽

![Grab background block](/static/skillmap/star/set-bg.gif "Pull in the block to set the background image." )

hint~

------------>

- :mouse pointer: When you're done, click **Next** to see the next step.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```




## {Step 3}

**Choose your background!**<br/>
🖼 🖼 🖼

---


- :mouse pointer: Click the grey box inside<br/>
```block
scene.setBackgroundImage(img`.`)
```
to open the image editor.


- :paint brush: Draw a nice grassy background, or choose an image from the **gallery**.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
```




## {Step 4}

**Check the game window 🎮**

Do you see the background you chose?

![The game window is in the lower-left.](/static/skillmap/mole/game1.png " ")



## {Step 5}

**⭐ Choose your hero ⭐**<br/>

Do you want a rabbit? A princess? A warrior?


- :paper plane: From ``||sprites: Sprites||``, drag
```block
let hero = sprites.create(img`.`, SpriteKind.Player)
```
into **the end** of the ``||loops(noclick): on start||`` container.


- :paint brush: Click the empty grey box and switch to the **gallery** to
 select a character for your project.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
//@highlight
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
```





## {Step 6}

**The hero needs to be able to move around the screen.**


- :game: From the ``||controller: Controller||`` category, grab
```block
controller.moveSprite(hero)
```
and snap it in at **the end** of the ``||loops(noclick): on start||`` block already in the workspace.




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
//@highlight
controller.moveSprite(hero)
```




## {Step 7 - Keep the Player in the screen}


**The hero can leave the screen if things get crazy.**

Let's fix that.


- :paper plane: From the ``||sprites: Sprites||`` category, grab
```block
let hero: Sprite = null
hero.setStayInScreen(true)
```
and snap it in at **the end** of the ``||loops(noclick): on start||`` block already in the workspace.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
//@highlight
hero.setStayInScreen(true)
```



## {Step 8}

**Check the game window 🎮**

You should be able to move your hero around with the joypad or arrow keys.

Your hero should stay on the screen at all times.



## {Step 9 - Game Update}

Every 5 seconds, we want more clovers and bees to appear in our game.

- :circle: From the ``||game:Game||`` category, grab
```blocks
game.onUpdateInterval(200, function () { })
```
and snap it into an **empty area** of the workspace.


- :mouse pointer: Click on the **200 ms** value and change it to **5 seconds**
(which is 5000 milliseconds).


#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(5000, function () {

})
```




## {Step 10}

**The hero needs something to collect!**

Let's add some clovers 🍀

---

- :paper plane:  From ``||sprites:Sprites||``, grab the
```block
    let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
```
and drag it into the empty ``||game(noclick):on game update [5000]ms||`` container that's already in your workspace.


- :paint brush:  Click the **grey square** and draw a clover (or choose one from the **gallery**).



#### ~ tutorialhint


```blocks
let projectile: Sprite = null
game.onUpdateInterval(5000, function () {
    //@highlight
    clover = sprites.createProjectileFromSide(assets.image`collect`, 50, 50)
})
```

## {Step 11 - Add Random Movements}

Our clovers are always coming from the top right and dropping to the bottom left.

Let’s add variety using random numbers.



- :calculator:  From the ``||math:Math||`` category, drag two
```block
randint(-50, 50)
```
blocks into the workspace.


- :mouse pointer: Drop one ``||math:pick random||`` block in to replace each of the **vx** and **vy** values of the <bbr/>
``||variables:set clover to projectile||`` <br/>
block.


~hint What are random numbers? 💡

---

**Random** numbers are numbers that don't appear to have a predictable pattern. Using our `random` block, you'll be given a number between the minimum and maximum that you set, but you won't know which number will be chosen beforehand.

This number is rechosen every time the block runs, and each time you may randomly end up with a number that is either the same or different than the last.

hint~


~hint What are vx and vy? 💡

---

The field **vx** is for the **velocity** of the item from side to side.<br/>
The velocity of an item is the speed that it travels in a direction.

_Velocity in the x (horizontal) direction_

- A **vx** greater than 0 will send something moving right.
- A **vx** less than 0 will send something moving left.
- A **vx** of 0 will not change its position.

_Velocity in the y (vertical) direction_

- A **vy** greater than 0 will send something moving down.
- A **vy** less than 0 will send something moving up.
- A **vy** of 0 will not change its position.

hint~


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {

//@highlight
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
})
```

## {Step 12 - Add Bee Projectile @fullscreen}

Now we can add the bee 🐝

---

- :paper plane:  From ``||sprites:Sprites||``, grab
```block
    let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
```
and drag it into **the end** of the ``||game(noclick):on game update [5000]ms||`` container that's already in your workspace.


- :paint brush:  Click the **grey square** and draw a bee (or choose one from the **gallery**).


- :calculator:  From ``||math:Math||``, drag more
```block
randint(-50, 50)
```
blocks into the **vx** and **vy** for <br/>
``||variables:set bee to projectile||``</br> block.



```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
//@highlight
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
})
```

## {Step 13 - Set the Bee to Enemy}


To make the bee dangerous, we need to change its **kind** to **Enemy**.

---

- :paper plane:  From ``||sprites:Sprites||``, grab
```block
    let bee: Sprite = null
     bee.setKind(SpriteKind.Enemy)
```
and drag it into **the end** of the ``||game(noclick):on game update [5000]ms||`` container that's already in your workspace.


```blockconfig.local


let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
//@highlight
    bee.setKind(SpriteKind.Enemy)
})
```

## {Step 14 - Add Overlaps behavior}

Time to add the code that will give a point when the hero overlaps the clover.

- :paper plane:  From ``||sprites:Sprites||``, grab
```blocks
   sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {  })
```
and drag it into **an empty** area of the workspace.


~hint What's a sprite? 💡

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our mole will be a sprite, too.

hint~


~hint Why use "sprite" and "othersprite"? 💡

---

You might think the overlap should use the names "hero" and "clover", but that would cause problems later.

Every clover is named "clover", so if you choose to delete "clover" on overlap, it will always delete the last one created, **not** just the one you overlapped with!

This is why the overlap event uses the terms "sprite" and "othersprite". That way, you have nicknames you can use to access the _exact_ sprites that overlapped one another.


hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {  })
```



## {Step 15 - Destroy Clover}

When the clover is collected, it needs to disappear.


- :paper plane:  From ``||sprites:Sprites||``, grab the

```block
    let otherSprite: Sprite = null
    otherSprite.destroy()
```
container and drop it into the empty<br/>
``||sprites(noclick):on sprite overlaps||``<br/>
container already in the workspace.


~hint Why call the clover "othersprite"? 💡

---

You might think the overlap should use the names "hero" and "clover", but that would cause problems later.

Every clover is named "clover", so if you choose to delete "clover" on overlap, it will always delete the last one created, **not** just the one you overlapped with!

This is why the overlap event uses the terms "sprite" and "othersprite". That way, you have nicknames you can use to access the _exact_ sprites that overlapped one another.



hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
//@highlight
    otherSprite.destroy()
})
```



## {Step 16}

**Check the game window 🎮**

You should be able to move your hero around with the joypad or arrow keys.

When your hero overlaps a clover, the clover shoud disappear.


## {Step 17 - Add Effect @fullscreen}


- :binoculars: Look for the
```block
    let otherSprite: Sprite = null
    otherSprite.destroy()
```
block that's already in the workspace.


- :mouse pointer: Click the plus **(+)** icon to expand the block, then click the **spray effect** drop-down menu and choose whatever you like.


- :mouse pointer: Click the **500 ms** drop-down and choose **100 ms** so the time stays nice and short.

![Choose a destroy effect](/static/tutorials/collect-the-clovers/destroy-effect.png)


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

```validation.local
# BlocksExistValidator
    * Enabled: false
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
//@highlight
    otherSprite.destroy(effects.confetti, 100)
})
```


## {Step 18 - Play a Sound}


**Add sound effects**


- :headphones: From the ``||music:Music||`` category, grab
```block
    music.baDing.play()
```
and drag it into **the end** of the <br/>
``||sprites(noclick):on sprite overlaps||`` <br/>
container that's already in your workspace.


- :mouse pointer: Click the **ba ding** dropdown to choose a sound that you like best.


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
//@highlight
    music.baDing.play()
})
```

## {Step 19 - Change Score}


**Add points when a clover is collected**


- :id card: From the ``||info:Info||`` category, grab
```block
    info.changeScoreBy(1)
```
and drag it into **the end** of the <br/>
``||sprites(noclick):on sprite overlaps||`` <br/>
container that's already in your workspace.


```blockconfig.local
let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
//@highlight
    info.changeScoreBy(1)
})
```

## {Step 20 - Add Overlaps behavior for Bee @fullscreen}

**We need an overlap behavior for the bee**

- :mouse pointer: Right-click on the the<br/>
``||sprites(noclick):on sprite overlaps||`` <br/>
container that's already in your workspace.
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```
and choose **duplicate**.

_Don’t worry if it looks disabled, we’ll fix that._


## {Step 20 - Add Overlaps behavior for Bee @fullscreen}

**We need an overlap behavior for the bee**

- :mouse pointer: Right-click on the the<br/>
``||sprites(noclick):on sprite overlaps||`` <br/>
container that's already in your workspace.
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```
and choose **duplicate**.

_Don’t worry if it looks disabled, we’ll fix that._


- :mouse pointer: In the copied <br/>
``||sprites(noclick):on sprite overlaps||`` <br/>
block, click the kind ``||sprites:Projectile||`` and change it to ``||sprites:Enemy||``.

![Duplicate the overlap event for the enemy](/static/tutorials/collect-the-clovers/overlaps-enemy.png)


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```

## {Step 21 - Change effects and sounds}


Let's choose some better sounds and effects for the bee.

- :binoculars: Look for the
```block
    let otherSprite: Sprite = null
    otherSprite.destroy(effects.disintegrate, 100)
```
block inside the  <br/>
``||sprites(noclick):on sprite overlaps [Enemy]||`` <br/>
in your workspace and change the effect to something less jolly.



- :binoculars: Look for the
```block
    music.baDing.play()
```
block inside the  <br/>
``||sprites(noclick):on sprite overlaps [Enemy]||`` <br/> container that's already in the workspace and change the sound to something that better matches getting tagged by a bee.



```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeScoreBy(1)
})
```

## {Step 22 - Lose a life}

Instead of adding a score, our player should lose a life when they run into a bee.


- :binoculars: Look for the
```block
    info.changeScoreBy(1)
```
block inside the  <br/>
``||sprites(noclick):on sprite overlaps [Enemy]||`` <br/> container that's already in the workspace and **delete it**.



~hint How do I delete a block? 💡

---

You can delete a block three ways:<br/>
1) Click the block to select, then press **delete** on your keyboard<br/>
2) Right-click the block and choose **Delete Blocks**<br/>
3) Drag the block back into the toolbox<br/>

hint~

- :id card: From the ``||info:Info||`` category, grab
```block
    info.changeLifeBy(-1)
```
And drop it in at **the end** of the  <br/>
``||sprites(noclick):on sprite overlaps [Enemy]||`` <br/> container that's already in the workspace.


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
//@highlight
    info.changeLifeBy(-1)
})
```


## {Step 23 - Play your Game!}

**That’s it!**
🎉 🎉 🎉

Now try playing your finished game in the full screen simulator.

Click **Done** to share your game with family and friends!


```validation.global
# BlocksExistValidator
```


```blockconfig.global
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) { })
let otherSprite: Sprite = null
info.changeLifeBy(-1)
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
otherSprite.destroy()
game.onUpdateInterval(200, function () {

})

let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
let bee: Sprite = null
randint(-50, 50)
bee.setKind(SpriteKind.Enemy)
```


```package
clover=github:kiki-lee/clover-images
```


```ghost
info.setScore(0)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image5\": {\n        \"data\": \"hwQQABMAAAARAQAAAAAAAAABAAAREQEAAAAAEBEBAAAQMxEAAAAQ0REBAAAAMRMREAHQ57ELAAAAEDMRERF75+4NAAAAABDRHRH97O4NAAAAAADRHxv95+4NAAAAAAARMRF95+4NAAAAAADRHxt95+4NAAAAADHRHRH97+4NAAAAEDMRERH77O4NAAAAMRMNEAHw5+4NAAAQEdEAAABw57ELAAAQEQEAAAAQ0REBAAAAEQEAAAAAEBEBAAAAAAAAAAAAAAABAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hero\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAsAuwuwsAAAC7t7B1uwAAsHu2sHe3CwBbd7awd2cLAHt3Z3tnuwAAu7t3e7YAAAAAsHt3u7sLAACwe3drZrsLsLt3e7YLdgtbd2d7Z7tgC7t3trB3tgsAsHu2sHdnCwAAe7ewdbsAAACwC7C7CwAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"collect\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAD/DwAAAAAA8P39AAAAAAD///8PAAAAAP///w8AABEA8P//ABABCQlAVUUACQmRkFVVVZWQAQmR9f//lQEJkZBfVVWfkAEBmVVVVZUJAZmQ9P//lJAJAZFfVVWfAQGZCUBVRQCZCQAAAP8PAAAAAAAA8AAAAAAAAADwAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"avoid\"\n    },\n    \"image1\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3Fxd3d3d3d3Nzd3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3c3N3c3N3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3Nzd3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlxcXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3V1d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d1dXd3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dXV3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3cXF3d3d3d3dzc3d3Nzd3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3Fxd3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmVlZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3c3N3dzc3d3dxcXd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3Nzd3c3N3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3V1d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d1dXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3dxd3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmTk5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3Fxd3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZl5d3dxcXd3d3d3d3d3d3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZEZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZEZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"background\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image5\":\n            case \"hero\":return img`\n11..............\n111.........11..\n1131.......1111.\n.1331.....13111.\n.1133....133111.\n..1131...331d...\n...11111111d....\n...11dd1dd1.....\n....1df1fd1.....\n...111131111....\n...111b1b111....\n....1111111.....\n....bdddddb.....\n..1d7ff77fff71..\n..177c777fc771..\n.1deeeeeeeeeed1.\n.111eeeeeeee111.\n.11beeeeeeeeb11.\n111bddddddddb111\n`;\n            case \"image2\":\n            case \"collect\":return img`\n. . . b b b . . . b b . . . . . \n. . b 5 7 b . . b 5 b b . . . . \n. b b 7 7 b . . b 7 7 b b . . . \nb b 7 7 7 b b b b 7 7 7 7 b . . \nb 7 6 6 7 7 b b 7 7 6 6 7 b . . \n. b b b 6 7 7 7 7 6 b b b . . . \n. . . . b b 7 7 b b . . . . . . \nb b b b 7 7 7 7 7 7 b b b b . . \nb 5 7 7 7 6 b b 6 7 7 7 5 b . . \nb 7 7 7 6 b b 6 b 6 7 7 7 b . . \nb b 7 7 b . b 6 b b 6 7 b b . . \n. b b 6 b . b 6 . b b 6 b . . . \n. . b b . . b b 6 . b b . . . . \n. . . . . . . b 7 6 . . . . . . \n. . . . . . . b b b . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"avoid\":return img`\n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \nf d f f f 5 5 f 5 5 f 5 5 f . . \nf f f f f 5 5 f 5 5 f 5 5 f f f \nf d f f f 5 5 f 5 5 f 5 5 f . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image1\":\n            case \"background\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999911119999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999911111111119999999111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999199991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999991111111199999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111119999111111111111199999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111119999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111119999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999399999999999999999999999999\n9999999999999999999999999999199999999999999999999999999999999999999999999999999999959599999999999999999999999999999999999999999999993939999999999999999999999999\n7777777777777777777777777771717777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777377777777777777777777777777\n7777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775757777777777777777717777777777777\n7777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777773777777777777777777777777777777777577777777777777777171777777777777\n7777777777777777777777777777777777777777777777777777777777777777717177777777777777777777777737377777777777777777777777777777777777777777777777777717777777777777\n7777777777777777377777777777777777777777777777777777777777777777771777777777777777777777777773773777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777757577777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777575777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777771717777777777777777757777777777777777777777777777777773777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777777777777777777777777777777777777737377777777777777777777777717177777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777773773777777777777777777777777771777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777777777777777373777777777777777\n7777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777757577777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777377377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777177777777777777\n7777777777773737777377777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777771717777777777777\n7777777777777377773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777377377777777777777777777777777777777777177777777777777\n7777777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777775757777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777717777777777777777777777777773737777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777171777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777737377777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"pcoKae73BU`bxMH8)EPW\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"s00fY26[O8lQ._PjJwO*\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"7a86~(il_yrY+NfHdD)7\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"}$#8kE~1GrFf$iYM8n6Z\">Enemy</variable><variable id=\"rq-L^pbk[}}i0*M8IU16\">projectile</variable><variable id=\"W2UpOS%v{TCp}r.:_:FF\">bee</variable><variable id=\")XVxwBJSsl^l_|zg}K3)\">hero</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"clovers-assets-only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```