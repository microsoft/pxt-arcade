# Collect the Clovers
### @explicitHints true

### ~button /#tutorial:/tutorials/collect-the-clovers

Try this tutorial!

### ~

## {Introduction @showdialog}

Create a garden game to collect 4-leaf clovers and avoid the bees!

![Collect the Clovers game in action](/static/tutorials/collect-the-clovers/collect-clovers-sim.gif)



## {Step 1 - Set the Background image}


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




## {Step 2}

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




## {Step 3}

**Take a look at the game window**

Do you see the background you chose?

![The game window is in the lower-left.](/static/skillmap/mole/game1.png " ")



## {Step 4}

**Choose your hero!**<br/>
⭐ ⭐ ⭐

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





## {Step 5}

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




## {Step 6 - Keep the Player in the screen}


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


## {Step 7 - Game Update}

Every 5 seconds, we want a clover and a bee to appear in our game.

- :circle: From the ``||game:Game||`` category, grab

```block
game.onUpdateInterval(200, function () {

})
```

and snap it into an **empty area** of the workspace.

- :mouse pointer: Click on the **200 ms** value and change it to **5 seconds**
(which is 5000 milliseconds).


#### ~ tutorialhint

```blocks
game.onUpdateInterval(5000, function () {

})
```

## {Step 7 - Add a Clover Projectile}

A Projectile is a Sprite that moves on its own. From the ``||sprites:Sprites||`` Toolbox drawer, drag a
``||variables(sprites):set projectile to||`` ``||sprites:projectile from side||`` block and drop into the
``||game:on game update on every||`` block. Click on the grey oval to open the sprite
image editor and draw an image of a 4-leaf Clover.

#### ~ tutorialhint

```blocks
let projectile: Sprite = null
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, 50, 50)
})
```

## {Step 8 - Add Random Movements}

Notice how our Clovers are always coming from the top right in a diagonal direction. Let’s add some random
movements by setting the **X** and **Y** velocity values. From the ``||math:Math||`` Toolbox drawer, drag out 2
``||math:pick random||`` blocks onto the workspace. Drop one into the **vx** value and drop the other into
the **vy** value of the ``||variables(sprites):set projectile to||`` ``||sprites:projectile from side||`` block. In each of the
``||math:pick random||`` blocks, change the minimum and maximum values to `-50` and `50`.

#### ~ tutorialhint

```blocks
let projectile: Sprite = null
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
})
```

## {Step 9 - Add Bee Projectile @fullscreen}

Now let’s add a Bee projectile. Right-click on the ``||variables(sprites):set projectile to||`` ``||sprites:projectile from side||``
clover block that we just created and select **Duplicate**. Drop the copied block after the existing clover
projectile block, click on the ``||variables(noclick):projectile||`` variable name drop-down, and select **New variable**. Name this
variable **"bee"**. Then click on the grey oval to open the sprite image editor and draw an image of a bee.

![Create the bee projectile](/static/tutorials/collect-the-clovers/bee-projectile.png)



```blockconfig.local

bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks
let projectile: Sprite = null
let bee: Sprite = null
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
})
```

## {Step 10 - Set the Bee to Enemy}

To make the Bee an enemy sprite, we need to set its kind. From the ``||sprites:Sprites||`` Toolbox drawer,
under the **Overlaps** category, drag a ``||sprites:set sprite kind||`` block and drop after the
``||variables:set bee to||`` ``||sprites:projectile||`` block. Click on the ``||variables(noclick):hero||`` variable
drop-down menu and select the **bee** variable. Click on the ``||sprites:Player||`` kind drop-down menu and select
``||sprites:Enemy||`` sprite kind.

#### ~ tutorialhint

```blocks
let projectile: Sprite = null
let bee: Sprite = null
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
```

## {Step 11 - Add Overlaps behavior}

Now let’s add code that will increment our score when the ``||sprites:Player||`` collects a clover.
From the ``||sprites:Sprites||`` Toolbox drawer, in the **Overlaps** section, drag an
``||sprites:on sprite overlaps||`` block and drop on the Workspace (you can place this anywhere).
Click on the last ``||sprites:Player||`` kind drop-down menu and select ``||sprites:Projectile||`` sprite kind.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {

})
```

## {Step 12 - Destroy Clover}

From the ``||sprites:Sprites||`` Toolbox drawer, drag a ``||sprites:destroy sprite||`` block and drop in the ``||sprites:on sprite overlaps||`` block.
In the ``||sprites:on sprite overlaps||`` block, drag the ``||sprites:otherSprite||`` local variable (representing the specific overlapping clover) into the ``||sprites:destroy sprite||`` block replacing ``||sprites:hero||``.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## {Step 13 - Add Effect @fullscreen}

In the ``||sprites:destroy sprite||`` block, click on the Plus **(+)** icon to expand.
Click on the ``spray effect`` drop-down menu and select an effect that you want to display when your ``||sprites:Player||`` collects a Clover.
Click on the ``500 ms`` drop-down menu and select ``100 ms`` for the duration of your effect.

![Choose a destroy effect](/static/tutorials/collect-the-clovers/destroy-effect.png)

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
})
```

## {Step 14 - Play a Sound}

From the ``||music:Music||`` Toolbox drawer, drag a ``||music:play sound||`` block, and drop after
the ``||sprites:destroy sprite||`` block.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
})
```

## {Step 15 - Change Score}

From the ``||info:Info||`` Toolbox drawer, drag a ``||info:change score||`` block and drop after
the ``||music:play sound||`` block.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```

## {Step 16 - Add Overlaps behavior for Bee @fullscreen}

Now let’s add behavior for when our ``||sprites:Player||`` runs into a bee.
Right-click on the the ``||sprites:on sprite overlaps||`` block that we were just working on,
and select **Duplicate** to make a copy of this chunk of code. Don’t worry if it looks disabled, we’ll fix that.
In the copied ``||sprites:on sprite overlaps||`` block, click on the ``||sprites:Projectile||`` kind drop-down
menu and select ``||sprites:Enemy||`` for the kind.

![Duplicate the overlap event for the enemy](/static/tutorials/collect-the-clovers/overlaps-enemy.png)

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```

## {Step 17 - Change effects and sounds}

In the ``||sprites:destroy||`` enemy block, select a different effect when your player runs into a bee.
In the ``||music:play sound||`` block, select a different sound when your player runs into a bee.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeScoreBy(1)
})
```

## {Step 18 - Lose a life}

Instead of adding a score, let’s change the code to lose a life when our player runs into a bee.
Delete the ``||info:change score||`` block.
From the ``||info:Info||`` Toolbox drawer, drag a ``||info:change life||`` block and drop after
the ``||music:play sound||`` block.

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
```

## {Step 19 - Play your Game!}

That’s it! Now try playing your game in the full screen simulator. You can also try downloading
your game to a hardware device, or Share your game with others!





```blockconfig.global
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
})

scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)

game.onUpdateInterval(200, function () {

})

 projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))

```


```package
clover=github:kiki-lee/clover-images
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
