# About Save the Galaxy in Arcade Games

**A page for Educators & Parents**

**Save the Galaxy** provides students with instruction for block-based game development. This skillmap walks through beginner/intermediate game development concepts, teaching them in a beginner-friendly way.

In this set of activities, students will use the power of coding to create a Galaga-style space game. NASA needs your help to update satellites. Can you update 20 of them before asteroids take out your ship?

Our step-by-step instructions are written to be friendly towards those with little coding experience, but are meant for those who are comfortable with reading.

Designed for students between the ages of 12 & 18, this experience contains a total of 3 tutorials (approximating 60 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Session 1**           |          |           |              |
| Prepare Your Ship | 25 | Intro | velocity, movement |
| Communication is Key! | 15 | Projectile | events, projectiles, collisions |
| Here Comes Trouble! | 20 | Projectile | events, randomization, animation, game score, lives |

\* Minutes are approximate, based on instructions as written. They do not include time spent designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives

As students go through Save the Galaxy, they will build a galactic environment in which they can transmit projectiles of information, navigate around asteroids, gain points, and lose lives. Throughout these experiences, they will be using various computer science and game design concepts.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Loops
- Events
- Variables

#### Game Design Concepts

- Velocity
- Projectiles
- Effects
- Randomization
- Game Score
- Destruction
- Animation
- Positioning
- Text Display
- Sprite Design



#### 1. Prepare Your Ship

| Activity | Prepare Your Ship (25 min) |
|---|---|
| ![Prepare Your Ship thumbnail](/static/skillmap/galaxy/galaxy1.gif) | Set up your spaceship and galactic backdrop. |
| Blocks used | ``[scene.setBackgroundImage(img`.`)]``<br/>``[scroller.scrollBackgroundWithSpeed()]``<br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; mySprite.setStayInScreen(true)]``|
| Solution option | [Prepare Your Ship Project](https://makecode.com/_RbcKJ1Lo2LmT) |

#### 2. Communication is Key!

| Activity | Communication is Key! (15 min) |
|---|---|
| ![Communication is Key! thumbnail](/static/skillmap/galaxy/galaxy2.gif) | Equip your ship with projectiles and special effects. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect(effects.fire, 100)]`` <br/>``[info.changeLifeBy()]`` |
| Solution option | [Communication is Key! Project](https://makecode.com/_gU3XY18mw6k9) |

#### 3. Here Comes Trouble

| Activity | Here Comes Trouble (20 min) |
|---|---|
| ![Here Comes Trouble thumbnail](/static/skillmap/galaxy/galaxy3.gif) | Add enemies, enemy functionality, and enemy destruction into your game. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect()]``<br/>``[sprites.onOverlap()]``<br/>``[let sprite: Sprite=null; sprite.destroy(effects.ashes, 0)]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeScoreBy()]`` |
| Solution option | [Here Comes Trouble Project](https://makecode.com/_VuJha6i1FeWT) |



##### Game Mod Ideas

After students complete the last level, they can head back to the skillmmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox.  Here are some modifications they can try:

- Add code to destroy satellites if they're hit by an asteroid
- Add another type of enemy
- Add a health bar extension (lives, hp) to display on start
- Add another level to the game


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
pxt-status-bar=github:jwunderl/pxt-status-bar
```

