# About Design a Space Explorer in Arcade Games

**A page for Educators & Parents**

**Design a Space Explorer** provides students with instruction for block-based game development. This skillmap walks through beginner/intermediate game development concepts, teaching them in a beginner-friendly way.

In this set of activities, students will use the power of coding to create a Galaga-style space fighter. Equipped with refillable fuel canisters and a creative mix of space lasers, students' will code everything they need to defend the galaxy from enemies. We recommend that students using this guide already have familiarity with basic MakeCode elements, but our step-by-step instructions are written to be friendly towards those with little coding experience as well.

Designed for students between the ages of 13 & 16, this experience contains a total of 7 tutorials (approximating 63 minutes of instruction) spread over 2 sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Session 1**           |          |           |              |
| Prepare Your Ship | 5 | Intro | velocity, movement |
| Ready, Aim, Fire! | 8 | Collector | events, projectiles, effects, velocity |
| Here Comes Trouble! | 15 | Collector | events, velocity, randomization, life bar, effects, game score, destruction |
| All Shook Up | 6 | Collector | effects, animation |
| **Session 2**           |          |           |              |
| Fuel Up! | 12 | Collector | status bar, positioning, events, destruction, velocity, randomization, game score |
| Level Up! | 9 | Collector | variables, conditional statements, game score, text display, velocity, level design |
| The Art of Darts | 8 | Modification | arrays, randomization, sprite design |

\* Minutes are approximate, based on instructions as written. They do not include time spent designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

As students go through Design a Space Explorer, they will build a galactic environment in which they can fire projectiles at enemy ships, level up the difficulty of the game, and customize projectile design, all while being cautious about their own health bars and refeuling needs. Throughout these experiences, they will be using various computer science and game design concepts.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Loops
- Events
- Conditional Statements
- Arrays

#### Game Design Concepts

- Velocity
- Projectiles
- Effects
- Randomization
- Hit Points
- Game Score
- Destruction
- Animation
- Status Bar
- Positioning
- Variables
- Text Display
- Level Design
- Sprite Design

### Session 1

During this session, students will set up the initial version of their game. These modules walk through spaceship setup, projectile shooting, enemy ship functionality, and animations.

#### 1. Prepare Your Ship

| Activity | Prepare Your Ship (5 min) |
|---|---|
| ![Prepare Your Ship thumbnail](/static/skillmap/space/spacet1.gif) | Set up your spaceship and galactic backdrop. |
| Blocks used | ``[scene.setBackgroundImage(img`.`)]``<br/>``[scroller.scrollBackgroundWithSpeed()]``<br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; mySprite.setStayInScreen(true)]``|
| Solution option | [Prepare Your Ship Project](https://makecode.com/_VkqHRMAkyV4m) |

#### 2. Ready, Aim, Fire!

| Activity | Ready, Aim, Fire! (8 min) |
|---|---|
| ![Ready, Aim, Fire! thumbnail](/static/skillmap/space/spacet2.gif) | Equip your ship with projectiles and special effects. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect(effects.fire, 100)]`` |
| Solution option | [Ready, Aim, Fire! Project](https://makecode.com/_eJPFdhWzA7LW) |

#### 3. Here Comes Trouble!

| Activity | Here Comes Trouble! (15 min) |
|---|---|
| ![Here Comes Trouble! thumbnail](/static/skillmap/space/spacet3.gif) | Add enemies, enemy functionality, and enemy destruction into your game. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect()]``<br/>``[sprites.onOverlap()]``<br/>``[let sprite: Sprite=null; sprite.destroy(effects.ashes, 0)]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeScoreBy()]``<br/>``[info.changeLifeBy()]`` |
| Solution option | [Here Comes Trouble! Project](https://makecode.com/_XrALAw82Y7Lc) |

#### 4. All Shook Up

| Activity | All Shook Up (6 min) |
|---|---|
| ![All Shook Up thumbnail](/static/skillmap/space/spacet4a.gif) | Animate your and your enemies' ships. |
| Blocks used | ``[scene.cameraShake()]``<br/>``[animation.runImageAnimation()]`` |
| Solution option | [All Shook Up Project](https://makecode.com/_0wriY3fq2XWF) |

### Session 2

During this session, students will amp up their game by building in additional game design elements. These modules will walk through adding the need to refuel, an extra level, and some design modifications.

#### 1. Fuel Up!

| Activity | Fuel Up! (12 min) |
|---|---|
| ![Fuel Up! thumbnail](/static/skillmap/space/spacet4.gif) | Add a fuel gauge to your ship and set fuel drops in your game. |
| Blocks used | ``[let statusbar: StatusBarSprite = null; statusbar = statusbars.create(20, 4, StatusBarKind.Energy)]``<br/>``[let statusbar: StatusBarSprite = null; statusbar.attachToSprite(mySprite, -30, 0)]``<br/>``[game.onUpdateInterval()]``<br/>``[let statusbar: StatusBarSprite = null; statusbar.value += -1]``<br/>``[sprites.onOverlap()]``<br/>``[let statusbar: StatusBarSprite = null; statusbar.value = 100]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[statusbars.onZero(StatusBarKind.Energy, function (status){})]``<br/>``[game.over(false)]``|
| Solution option | [Fuel Up! Project](https://makecode.com/_gsYg8Pdwa2oC) |

#### 2. Level Up!

| Activity | Level Up! (9 min) |
|---|---|
| ![Level Up! thumbnail](/static/skillmap/space/spacet5.gif) | Switch to a new level when the player gains an achievement. |
| Blocks used | ``[let enemySpeed = null]``<br/>``[myEnemy = sprites.createProjectileFromSide(img`.`, 0, enemySpeed)]``<br/>``[if (true) {}]``<br/>``[info.changeScoreBy()]``<br/>``[let mySprite: Sprite=null; mySprite.say("", 0)]``<br/>``[enemySpeed = 0]`` |
| Solution option | [Level Up! Project](https://makecode.com/_Hok9FKJxecLW) |

#### 3. The Art of Darts

| Activity | The Art of Darts (8 min) |
|---|---|
| ![The Art of Darts thumbnail](/static/skillmap/space/spacet6.gif) | Use arrays and randomization to switch up the kinds of darts fired from your ship. |
| Blocks used | ``[darts = [img`.`, img`.`, img`.`]]``<br/>``[let darts = [img`.`, img`.`, img`.`] ; darts._pickRandom()]`` |
| Solution option | [The Art of Darts Project](https://makecode.com/_D6g5zvFF7Rre) |

##### Game Mod Ideas

After students complete The Art of Darts, they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox.  Here are some modifications they can try: 

- Add another type of enemy
- Set the health bar (lives, hp) to display on start
- Add another level to the game
- Modify level-up design to include more reward elements
- Add automated, damage-inducing projectiles to enemy ships


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
pxt-status-bar=github:jwunderl/pxt-status-bar
```

