# Here comes trouble!

## Introduction @showdialog

**Intergalactic travel is dangerous!**

Let's add some enemies for your ship to avoid.

![Fighting enemies](/static/skillmap/space/spacet3.gif "Here, enemy ship. Have one of mine.")


## 2. Enemy Rain

**Feel like making enemies rain from the sky?**  
👾👾👾  

Let's add some code that will drop an enemy toward the ship every couple of seconds.

---

- :circle: Add an  
``||game:on game update every [500] ms||``  
container to the workspace.

- :mouse pointer: Change the number value to **2000** [__*ms*__](#millis "milliseconds...aka 1/1000 of a second")
(or pick **2 second** from the dropdown)



```blocks
game.onUpdateInterval(2000, function () {
})
```

## 3. Rename the Variable

- :paper plane: Find the  
``||variables(sprites):set [projectile2] to projectile [ ] from side with vx [50] vy [50]||``   
block and drag it into the new **on game update** container.

- :mouse pointer: Click on the ``||variables(noclick):[projectile2]||`` value inside the new block and select "Rename variable..." .

- :mouse pointer: Change the variable name to ``||variables(noclick):myEnemy||`` so we know these are the baddies.



```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.createProjectileFromSide(img`
. . . .
. . . .
. . . .
. . . .
`, 50, 50)
})
```

## 4. Straight Down

**Let's get the enemies moving in the right direction**

---

- :paint brush: Click the grey square in the new block and toggle to **My Assets** to grab **Spider**.

- :mouse pointer: Play with the **vx** and **vy** values of **myEnemy** until
your new sprites are falling straight down the side of the screen.

💡 Are the enemies all falling down to the left of the screen? Don't worry, we'll handle that in the next step!



```blocks

game.onUpdateInterval(2000, function () {
    let myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)
})

```

## 5. So Random

Enemies aren't likely to hit the ship if they're off to the side. Let's add an element of surprise using [__*random numbers*__](#randos "numbers appearing seemingly without a predictable pattern") .

---

- :paper plane: Snap a  
``||sprites:set [mySprite] [x] to [0]||``  
block into the end of the  
``||game:on game update every [2000] ms||``  
container.

- :mouse pointer: To make sure we're acting on the right sprites, use the dropdown in the new block to change ``||variables(noclick):mySprite||`` to ``||variables(noclick):myEnemy||``.

```blocks
game.onUpdateInterval(2000, function () {
    let myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)
    myEnemy.x = 0
})
```

## 6. Horizontal

- :calculator: Set a random [__*x*__](#setX "horizontal location")
for the enemies using a  
``||Math:pick random [0] to [10]||`` block.  
Connect it to replace the **0** in the  
``||sprites:set [myEnemy] [x] to [0]||``  
block.

- :mouse pointer: Finally, update the minimum argument of the  
``||Math:pick random [0] to [10]||``  
block to **5** and the maximum argument to **155**.

---

_💡 The Arcade screen is 160px wide,
so you could make your enemies fall anywhere between 0 and 160
and still be able to see a piece of them._

```blocks
game.onUpdateInterval(2000, function () {
    let myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)
    myEnemy.x = randint(5, 155)
})
```


## 7. Enemy Kind

We now have two different kinds of projectiles. Let's make sure the computer knows they're different by setting this one to an
"**Enemy**" [__*kind*__](#withClass "a label you give a particular group so you can refer to it later").

---

- :paper plane: Snap a  
``||sprites:set [mySprite] kind to [Player]||``  
block into the bottom of the **on game update** container.

- :mouse pointer: Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):myEnemy||``, then choose ``||sprites(noclick):Enemy||`` as the kind.



```blocks
game.onUpdateInterval(2000, function () {
    let myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})
```


## 8. Collision

**Time to create some enemy behavior**

To add excitement to the game, let's make something happen when an enemy
collides with our ship.

---

- :paper plane: Drag an  
``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||``  
container into the workspace.

- :mouse pointer: Change the last value from ``||sprites:Player||`` to ``||sprites:Enemy||``.

---

_💡 Don't try to change "sprite" → "mySprite" or "otherSprite" → "myEnemy".
The variable "sprite" is the **Player** sprite (our Rocket) and the "otherSprite" variable is the specific **Enemy** sprite that our **Player** overlapped with._

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {

})
```

## 9. Fewer Lives

When the enemy collides with the ship,
we want it to subtract a life...then disappear.

---

- :id card: Grab the  
``||info:change life by [-1]||``  
block and snap it into the **on player overlaps enemy** container. That removes a life from the player every time it's hit by an enemy!

- :paper plane: Find the  
``||sprites:destroy [mySprite] ⊕||``  
block and snap it below the previous block.

```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.destroy()
})
```

## 10. Destroy

- :mouse pointer: To tell the **destroy** block that you want it to affect the overlapping enemy, click on the ``||variables(noclick):otherSprite||`` value from the top of the **overlaps** container and drag it down to replace the
``||variables(noclick):mySprite||`` value inside  
``||sprites:destroy [mySprite] ➕||``.

![Grabbing variable from block](/static/skillmap/space/give-var.gif "So that's how you do that!")

---

_💡 Click the __➕__ on the  
``||sprites:destroy [otherSprite] ➕||``  
block to get a menu of effects to display upon your enemy's demise!_

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
```

## 11. Fire!

**Time to save the world**
🌍 🌍 🌍 

Another **overlap** container will help the projectiles
destroy our enemies on impact.

---


- :paper plane: Drag another  
``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||``  
container into the workspace.

- :mouse pointer: Change the first kind to ``||sprites:Enemy||`` and the second kind to
``||sprites:Projectile||``.

- :paper plane: Inside, add two  
``||sprites:destroy [mySprite] ⊕||``   
blocks, then change the arguments
so that one destroys the enemy (``||variables(noclick):sprite||``) and the other
destroys your projectile (``||variables(noclick):otherSprite||``).

---

_💡 Don't forget to hit that __➕__ button on the **destroy** block to get
some spectacular effects when your projectile makes contact!_

```blocks
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy()
})
```

## 12. Add Points

**Finally, let's add a point for each enemy destroyed**

---

- :id card: Drag  
``||info:change score by [1]||``  
into **the end** of the **on enemy overlaps projectile** container.

```blocks
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
```

## 13. Finale

**Congratulations**

---

Now you have a bunch of enemies to combat.  
Don't forget to play with your project in the game screen before you go.

Once you're happy, click **Done** to return to the main skillmap where you can carry on to add some drama with an animated ship!





```package
arcade-background-scroll=github:microsoft/arcade-background-scroll#926e12eefffd09d453c7cde73f8d6ebd0e666d9d/
pxt-status-bar=github:jwunderl/pxt-status-bar
```

```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, mySprite, 0, -150)
    projectile.startEffect(effects.fire, 100)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
mySprite = sprites.create(assets.image`Rocket`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)

```

```ghost
namespace SpriteKind {
    export const Gas = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, mySprite, 0, -150)
    projectile.startEffect(effects.ashes)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
mySprite = sprites.create(assets.image`Rocket`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)

mySprite.y = 100
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(assets.image`Fuel`, 0, 100)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.Gas)
})
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})

```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image6\": {\n        \"data\": \"hwQMABAAAAAAACBAAAAAAAAAAFJEAAAAAAAAQlQEAAAgAPhCRFQEAJDyGEQiIlIAAvlRVVVVVVYC+V9VVVVVVpDyWEQiIlIAIAD4QkRUBAAAAABCVAQAAAAAAFJEAAAAAAAgQAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Stealth\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABQAAAAAAABAmZaZlgAAAAAAAABAZmZm1gAAAAAAAAAAYNbd3QAAAAAAAAAAYGYAAAAAAAAAAAAAAGAGAAAAAAAAAGlmZmZmZgBpAAAAlmaZZplpaWBmAACZlmaZmWmZmZZpAACZZmZmZmZmZpZmAAAAlmZmZmZmZpBpAAAAAGZmZmZmZgBpAAAAAAAAAAAGAAAAAAAAAAAAAGYGAAAAAAAAAAAAYNbd3QAAAAAAAABAlpaZ1gAAAAAAAABAZmZmZgAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Blue Rocket\"\n    },\n    \"xlh}4fdz:|FpuFr9_v_b\": {\n        \"data\": \"hwQNAA0AAAAAsLsAuwsAAACbs7BVCwAAABu5sFELAAAAsLu7uwsAAAAAsFm7uwsAAACbPbVbCwCwu5s5tbsAABu5G5G7uwAAsAuwuzs5CwAAALsLm5ELAACwmQs7OQsAALCRCwC7AAAAALsAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fuel\"\n    },\n    \"image21\": {\n        \"data\": \"hwQDAAQAAABQKgAApQIAAFAqAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Dart1\"\n    },\n    \"image1\": {\n        \"data\": \"hwQGAAYAAAAAdwAAAHFwABFxBwARcQcAAHFwAAB3AAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Dart2\"\n    },\n    \"image3\": {\n        \"data\": \"hwQOABMAAAAAAAAAAACZDQAAAAAAAAAAAJlmAAAAAAAAAAAAmfb/AAAAAAAAAACR9v8PAEAAAAAAGRFh////AAQAAACQERYRERHxSlAAAAAZYcwRERHxWkQAAAAZocwRERHxWlQEAACQERoRERHxSlAAAAAAGRGh////AAQAAAAAAACR+v8PAEAAAAAAAAAAmfr/AAAAAAAAAAAAAJmqAAAAAAAAAAAAAACZCQAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Rocket\"\n    },\n    \"image7\": {\n        \"data\": \"hwQVAAwAAAAAAAAuAAAAAAAAAORSAAAAAABARC4AAAAAAEBFJAUAAAAAQETkAgAAAJmZREQCAACQmZhJRQIAAJmZiUlEAgAAmZmJSUQCAACZmZmZRAIAAJmZmZlEAgAAGZGZmUQCAAAZkZlJRAIAAJkRmUlEAgAAkBmRSUUCAAAAmZlERAIAAAAAQETkAgAAAABARSQFAAAAAEBELgAAAAAAAORSAAAAAAAALgAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"UFO\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMyMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMyMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIiMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzIyIiMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzIyIaMzMzMzMzMzMzMzMzMzMzMzMzMzMzszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzIiIZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjIiIZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjIiIZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMiIiIZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPz//4+IZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM/P///4+I9szMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzM//////+I9s/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8+/v///+I9v/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8+/u///+I9v/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/vPv//4+I9v/PzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u/+4+I9v/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7u4uI9v/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7u4xm9v/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7u4hm///PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzszMzMy/u7u7u4hm+/vPzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7u2i2vP/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7i2a2u//PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy/u7u7i2bIy/vPzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8u7u7a2bIzPvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8v7u7aGa7vP/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMuLu7aIbLu8/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM+L+LZoa7/8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMiPhvZvj/zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiIhoZsjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiIhmhszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiIhmxszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiGjGzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiGbGzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiMbMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMaMbMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxsZszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIiIjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjIj/j4iIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM+P////+PyMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyM////////iMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMz4//+Pj4//j8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz4+P///////8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz/+v//+P+P/8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyP+q///////8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyI+qb4j4j//8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyouvr/+G9m/8jMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIqqqqpoZo9sjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIqquqaoaIhsjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIqqqqaoaIxsjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz4aGqqqmarqsjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyM+Kqqq6qmiszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMiPpqqqaqyszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjI+KqqivzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzszMzMzMzMzMzMzIiIiIjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzszMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////MzMzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPz/////zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM/P///////8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM/////////8/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8///////////MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz8///////////MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz2///////////PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMz2////Zv/////PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxm9vav9q//9v/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxoZv9m9vb2b//GzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyGZmZmZvZvZv/PzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxoZmZmZmZmZvbPzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIZmZmZmZmiGbPzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyIZmaGZoZmZmbIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyPhmZmb2ZqaGbIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMhmZmpmZmZobMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMiIZoZmZmhobMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMiGhmhohoiMjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjIiIaGZmiMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzIiIyIiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxsiMjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOzMzMzMzMzMzMzMzMzMzMzMzMvMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM7MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzLzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Galaxy\"\n    },\n    \"image17\": {\n        \"data\": \"hwQPABIAAADyAgAAAAAAAAAAAADy/wIAAAAAAAAAAAAv/yIAAAAAAAAAAADw8i8CAAAAAAAAAAAAL/8i8v8CAAAAAAAA8PIv8rv/AgAAAAD/Ly8i8vv//wIAAAD/IiLyL/////8AAAD/Ly8i8vv//wIAAAAA8PIv8rv/AgAAAAAAL/8i8v8CAAAAAADw8i8CAAAAAAAAAAAv/yIAAAAAAAAAAADy/wIAAAAAAAAAAADyAgAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Spider\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image6\":\n            case \"Stealth\":return img`\n. . . . . 2 2 . . . . . \n. . . 2 9 . . 9 2 . . . \n. . . . 2 9 9 2 . . . . \n. . . . f f f f . . . . \n. . . 8 8 1 f 8 8 . . . \n2 . . f 1 5 5 5 f . . 2 \n. 2 2 2 4 5 5 4 2 2 2 . \n4 5 4 4 4 5 5 4 4 4 5 4 \n. 4 4 4 2 5 5 2 4 4 4 . \n. 4 5 4 2 5 5 2 4 5 4 . \n. . 4 4 2 5 5 2 4 4 . . \n. . . 5 2 5 5 2 5 . . . \n. . . 4 2 5 5 2 4 . . . \n. . . . 5 5 5 5 . . . . \n. . . . . 6 6 . . . . . \n. . . . . 5 5 . . . . . \n`;\n            case \"image2\":\n            case \"Blue Rocket\":return img`\n.......99.......\n.......99.......\n......6666......\n......9969......\n.....966666.....\n.....666666.....\n.....699666.....\n44...699666...44\n96...669666...66\n9666.669666..696\n6666.699666.6666\n96d66696666.6d96\n96d.669966666d96\n96d..669666..d96\n66d..699666..d66\n9dd..669666..dd6\n.......66.......\n......6999......\n.....969699.....\n.....666666.....\n`;\n            case \"xlh}4fdz:|FpuFr9_v_b\":\n            case \"Fuel\":return img`\n. . . . . . . b . . . . . \n. . . . . . b 1 b . . . . \n. b b . . . b 9 b . . . . \nb 9 1 b . . b b . . b b . \nb 3 9 b . b b b . b 9 1 b \nb b b b b 9 9 1 b b 9 9 b \n. . . b 9 d 9 1 b b b b . \n. b b b 5 3 3 9 b . . . . \nb 5 1 b b 5 5 b b b b . . \nb 5 5 b b b b b 3 9 3 . . \nb b b b b b b b 9 1 9 b . \n. . . . b 5 b b 3 9 3 b . \n. . . . b b . . b b b . . \n`;\n            case \"image21\":\n            case \"Dart1\":return img`\n. 5 . \n5 a 5 \na 2 a \n2 . 2 \n`;\n            case \"image1\":\n            case \"Dart2\":return img`\n. . 1 1 . . \n. . 1 1 . . \n7 1 1 1 1 7 \n7 7 7 7 7 7 \n. . 7 7 . . \n. 7 . . 7 . \n`;\n            case \"image3\":\n            case \"Rocket\":return img`\n. . . . . . 9 9 . . . . . . \n. . . . . 9 1 1 9 . . . . . \n. . . . 9 1 1 1 1 9 . . . . \n. . . . 1 1 6 a 1 1 . . . . \n. . . . 1 6 c c a 1 . . . . \n. . . . 1 1 c c 1 1 . . . . \n. . . 1 1 1 1 1 1 1 1 . . . \n. . . 9 6 1 1 1 1 a 9 . . . \n. . 9 6 f 1 1 1 1 f a 9 . . \n. . 9 f f 1 1 1 1 f f 9 . . \n. 9 6 f f 1 1 1 1 f f a 9 . \n. 9 f f f 1 1 1 1 f f f 9 . \n9 6 f f f 1 1 1 1 f f f a 9 \n9 6 f . f f f f f f . f a 9 \nd . . . . a a a a . . . . 9 \n. . . . . 4 5 5 4 . . . . . \n. . . . 4 . 4 4 . 4 . . . . \n. . . 4 . 5 4 5 5 . 4 . . . \n. . . . . . . 4 . . . . . . \n`;\n            case \"image7\":\n            case \"UFO\":return img`\n. . . . . . . 9 9 9 9 9 9 9 . . . . . . . \n. . . . . . 9 9 9 9 9 1 1 9 9 . . . . . . \n. . . . . 9 9 9 9 9 9 1 1 1 9 9 . . . . . \n. . . . . 9 9 9 9 9 9 9 9 1 1 9 . . . . . \n. . . . . 9 8 9 9 9 9 9 9 9 1 9 . . . . . \n. . 4 4 4 9 9 8 8 9 9 9 9 9 9 9 4 4 4 . . \ne 4 4 5 4 4 9 9 9 9 9 9 9 9 9 4 4 5 4 4 e \n2 e 4 4 4 4 4 4 4 9 9 9 4 4 4 4 4 4 4 e 2 \n. 2 e 4 4 4 5 4 4 4 4 4 4 4 5 4 4 4 e 2 . \n. 5 2 2 e 4 4 4 4 4 4 4 4 4 4 4 e 2 2 5 . \n. . . 5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 . . . \n. . . . . . . . . . . . . . . . . . . . . \n`;\n            case \"image4\":\n            case \"Galaxy\":return img`\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccbccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccffbbbbbbbbbffccc88888886ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccfbbcbbbbbbbbbf88888888886ccccccccccccccccccccccccccccccccccccccccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccffffbbbbbbbbbbbbf888888866ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccffbbbbbbbbbbbbbbf88888666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccffffffbbbbbbbbbbbbf88866cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccfffffffbbbbbbbbbbbf86666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccc\nccccccccccccccccccccffffbfbbbbbbbbbbb86666ccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccc8ffffffbbbbbbbbb8866666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccc888fffffffbbbbb886666668ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccc8888fffffffbc88866666688cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccc88888888fff8888886666688fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccc8888888888888886666688bbbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccc88888888888888888666bbccbcbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccc888886666666666666fbcbbccbfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccc88666666ffffffffffbbccbbfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccffffffffbffbbffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccccccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb8ccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66686888fcccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff668688888cccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffff6666666688ccccccccccccccccccccccc\nccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff6666688888cccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffff6f6666666888ccccccccccccccccccccc\ncccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff6666668688ccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff66666668688ccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffa666686666886cccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccfffffff6666666f666888cccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff6ff66666a686c8cccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff666666668688cccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffaff668666868ccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffff6f666a66868cccccccccccccccccbccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff6666666668ccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffff6f668686688cccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffff6668666888cccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffff6666668ccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffff66688cccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfff6fff88cccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccceccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ff888888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fff88a888f8ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8ff8aaaaaaa888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fffffffbaaa6f88ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccc8ffffff6aabaaaaf8ccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fffffaafaaa6af88cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fffffff8faaaaaaa8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fff8fffffaaaaa688cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fffff8ff86aaabaa8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ff8fff8fa66aaaa8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ffffff8f6666a688cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ff8fff868886aaa8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8fffffff6888b6af8cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88fff8ff6688aaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ffffff666aaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88ffffff8ca8ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888cccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\n`;\n            case \"image17\":\n            case \"Spider\":return img`\n2 2 f . . . f f f . . . f 2 2 \nf f 2 f . . f f f . . f 2 f f \n2 f f 2 f . f 2 f . f 2 f f 2 \n. f f f 2 f 2 2 2 f 2 f f f . \n. 2 2 f f 2 f 2 f 2 f f 2 2 . \n. . 2 2 f f 2 2 2 f f 2 2 . . \n. . . 2 2 f 2 2 2 f 2 2 . . . \n. . . . 2 2 2 f 2 2 2 . . . . \n. . . . 2 2 2 f 2 2 2 . . . . \n. . . . f f f 2 f f f . . . . \n. . . . f b b f b b f . . . . \n. . . . f b f f f b f . . . . \n. . . . 2 f f f f f 2 . . . . \n. . . . . f f f f f . . . . . \n. . . . . 2 f f f 2 . . . . . \n. . . . . . f f f . . . . . . \n. . . . . . 2 f 2 . . . . . . \n. . . . . . . f . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_StatusBarKind\" id=\"/K%{SpW+hL@|DfMDB(`;\">Health</variable><variable type=\"KIND_StatusBarKind\" id=\"SWldc^f:mw!,xwv@WL?p\">Energy</variable><variable type=\"KIND_StatusBarKind\" id=\"g3Cl-BCte^-mcd)xc*q^\">Magic</variable><variable type=\"KIND_StatusBarKind\" id=\"MhC?k3TZTR8usQHnzI-S\">EnemyHealth</variable><variable id=\"5.(o@)4??y0/k{XK-!y[\">projectile</variable><variable id=\"R7dik,CiE;B047o!sYUb\">mySprite</variable><variable id=\"h1[R_8P)$La{DBVGu]DJ\">myEnemy</variable><variable id=\"0EIjmPrHvl2fFOH-}hD5\">statusbar</variable><variable id=\"T}Ip%yy]AU9bxdT0UDp1\">myFuel</variable><variable id=\"b|;7Q4ozqLRbCLM6lKLe\">projectile2</variable><variable type=\"KIND_SpriteKind\" id=\"I5@$XtX9_FL^Y@!S(vgQ\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"UR$=z1+|70iPrvX+I!($\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"0zck@]Ye`{v[!uv;EmA%\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"BAZbTj.O~v5V3vIT`5M5\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"w@::)0lsX-)RjzLOGEpv\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"%9)/),)nyhcn(Cy:;g~}\">Gas</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`Galaxy`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image4\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Rocket`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"game_control_sprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field></shadow></value><value name=\"vx\"><shadow type=\"math_number\"><field name=\"NUM\">100</field></shadow></value><value name=\"vy\"><shadow type=\"math_number\"><field name=\"NUM\">100</field></shadow></value><next><block type=\"spritesetsetflag\"><field name=\"flag\">SpriteFlag.StayInScreen</field><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field></block></value><value name=\"on\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"0EIjmPrHvl2fFOH-}hD5\">statusbar</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"statusbars_create\"><value name=\"width\"><shadow type=\"math_number\"><field name=\"NUM\">20</field></shadow></value><value name=\"height\"><shadow type=\"math_number\"><field name=\"NUM\">4</field></shadow></value><value name=\"kind\"><shadow type=\"statusbars_kind\"><field name=\"MEMBER\">Energy</field></shadow></value></block></value><next><block type=\"statusbars_attachToSprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><value name=\"this\"><block type=\"variables_get\"><field name=\"VAR\" id=\"0EIjmPrHvl2fFOH-}hD5\">statusbar</field></block></value><value name=\"toFollow\"><block type=\"variables_get\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field></block></value><value name=\"padding\"><shadow type=\"math_number\"><field name=\"NUM\">-30</field></shadow></value><value name=\"offset\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">100</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"gameinterval\" x=\"707\" y=\"70\"><value name=\"period\"><shadow type=\"timePicker\"><field name=\"ms\">2000</field></shadow></value><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h1[R_8P)$La{DBVGu]DJ\">myEnemy</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Spider`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image17\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">50</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.x@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1[R_8P)$La{DBVGu]DJ\">myEnemy</field></block></value><value name=\"value\"><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">5</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">155</field></shadow></value></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1[R_8P)$La{DBVGu]DJ\">myEnemy</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Enemy</field></shadow></value></block></next></block></next></block></statement></block><block type=\"keyonevent\" x=\"1505\" y=\"70\"><field name=\"button\">controller.A</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"5.(o@)4??y0/k{XK-!y[\">projectile</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromsprite\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Dart1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image21\"}}</data></shadow></value><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"R7dik,CiE;B047o!sYUb\">mySprite</field></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">-150</field></shadow></value></block></value><next><block type=\"startEffectOnSprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.ashes</field><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"5.(o@)4??y0/k{XK-!y[\">projectile</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow></value></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"841\" y=\"405\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Enemy</field></shadow></value><statement name=\"HANDLER\"><block type=\"hudChangeLifeBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-1</field></shadow></value><next><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><field name=\"effect\">effects.disintegrate</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"30\" y=\"490\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Projectile</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Enemy</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><field name=\"effect\">effects.fire</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow></value><next><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.smiles</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value><next><block type=\"hudChangeScoreBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block></next></block></next></block></statement></block><block type=\"gameinterval\" x=\"540\" y=\"640\"><value name=\"period\"><shadow type=\"timePicker\"><field name=\"ms\">5000</field></shadow></value><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"T}Ip%yy]AU9bxdT0UDp1\">myFuel</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Fuel`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.xlh}4fdz:|FpuFr9_v_b\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">100</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.x@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"T}Ip%yy]AU9bxdT0UDp1\">myFuel</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">5</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">155</field></shadow></value></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"T}Ip%yy]AU9bxdT0UDp1\">myFuel</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Gas</field></shadow></value></block></next></block></next></block></statement></block><block type=\"gameinterval\" x=\"80\" y=\"740\"><value name=\"period\"><shadow type=\"timePicker\"><field name=\"ms\">300</field></shadow></value><statement name=\"HANDLER\"><block type=\"StatusBarSprite_blockCombine_change\"><field name=\"property\">StatusBarSprite.value@set</field><value name=\"statusbar\"><block type=\"variables_get\"><field name=\"VAR\" id=\"0EIjmPrHvl2fFOH-}hD5\">statusbar</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-1</field></shadow></value></block></statement></block><block type=\"spritesoverlap\" x=\"540\" y=\"920\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Gas</field></shadow></value><statement name=\"HANDLER\"><block type=\"StatusBarSprite_blockCombine_set\"><field name=\"property\">StatusBarSprite.value@set</field><value name=\"statusbar\"><block type=\"variables_get\"><field name=\"VAR\" id=\"0EIjmPrHvl2fFOH-}hD5\">statusbar</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">100</field></shadow></value><next><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></block></value></block></next></block></statement></block><block type=\"statusbars_onZero\" x=\"420\" y=\"1100\"><value name=\"kind\"><shadow type=\"statusbars_kind\"><field name=\"MEMBER\">Energy</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_status\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"StatusBarSprite\"/><field name=\"VALUE\">status</field></shadow></value><statement name=\"HANDLER\"><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">false</field></shadow></value></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Gas = SpriteKind.create()\n}\ncontroller.A.onEvent(ControllerButtonEvent.Pressed, function () {\n    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, mySprite, 0, -150)\n    projectile.startEffect(effects.ashes)\n})\nsprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {\n    statusbar.value = 100\n    otherSprite.destroy()\n})\nstatusbars.onZero(StatusBarKind.Energy, function (status) {\n    game.over(false)\n})\nsprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {\n    sprite.destroy(effects.fire, 100)\n    otherSprite.destroy()\n    info.changeScoreBy(1)\n})\nsprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {\n    info.changeLifeBy(-1)\n    otherSprite.destroy(effects.disintegrate, 500)\n})\nlet myEnemy: Sprite = null\nlet myFuel: Sprite = null\nlet projectile: Sprite = null\nlet statusbar: StatusBarSprite = null\nlet mySprite: Sprite = null\nscene.setBackgroundImage(assets.image`Galaxy`)\nmySprite = sprites.create(assets.image`Rocket`, SpriteKind.Player)\ncontroller.moveSprite(mySprite, 100, 100)\nmySprite.setFlag(SpriteFlag.StayInScreen, true)\nstatusbar = statusbars.create(20, 4, StatusBarKind.Energy)\nstatusbar.attachToSprite(mySprite, -30, 0)\nmySprite.y = 100\ngame.onUpdateInterval(5000, function () {\n    myFuel = sprites.createProjectileFromSide(assets.image`Fuel`, 0, 100)\n    myFuel.x = randint(5, 155)\n    myFuel.setKind(SpriteKind.Gas)\n})\ngame.onUpdateInterval(2000, function () {\n    myEnemy = sprites.createProjectileFromSide(assets.image`Spider`, 0, 50)\n    myEnemy.x = randint(5, 155)\n    myEnemy.setKind(SpriteKind.Enemy)\n})\ngame.onUpdateInterval(300, function () {\n    statusbar.value += -1\n})\n",
  "pxt.json": "{\n    \"name\": \"Fuel Up\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"pxt-status-bar\": \"github:jwunderl/pxt-status-bar\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.4.43\",\n        \"tag\": \"v1.4.43\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/d613fa29c3c700e4b7d90381ed39b7e65b0de04e\",\n        \"target\": \"1.4.43\",\n        \"pxt\": \"6.12.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```