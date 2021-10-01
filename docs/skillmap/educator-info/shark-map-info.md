# About Shark Splash

**A page for Educators & Parents**

**Shark Splash** introduces a number of MakeCode Arcade game design elements.

In this set of activities, students will create a MakeCode Arcade game that involves protecting their shark from submarines while it hunts for food.  This activity is intended for students who are new to MakeCode with little to moderate previous coding experience.  Through step-by-step instructions, students will focus on game creation across 3 primary topics: destroying enemies, collecting food, and custom modification.

Designed for students between the ages of 11 & 17, this experience contains a total of 9 tutorials (approximating at least 78 minutes of instruction) spread over 2 sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Set the Scene | 7 | Intro | movement, events, projectiles |
| Beware the Enemy | 8 | Collector | events, positioning, random numbers |
| Enemies Attack! | 8 | Collector | movement, events, destruction, life bar |
| Laser Focus | 7 | Collector | events, destruction, effects, game score |
| **Day 2**           |          |           |              |
| Food not Friends | 7 | Collector | events, positioning, random numbers, movement |
| Eat Up! | 8 | Collector | events, destroying, game score |
| Under the Sea | 8 | Collector | loops, design, positioning, random numbers |
| Let's Get Animated! | 10+ | Design | art design, effects |
| A Whole New World! | 15+ | Design | art design, game modification |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing Shark Splash, students will have gained exposure to multiple classic arcade game concepts using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events
- Loops
- Variables

#### Game Design Concepts

- Movement
- Projectiles
- Positioning
- Randomization
- Effects
- Hit Points
- Game Score
- Velocity
- Art Design

### Day 1

On this day, students will use event containers, sprite positioning, physics, and destruction to build a basic, projectile-based game.

#### 1. Set the Scene

| Activity | Set The Scene (7 min) |
|---|---|
| ![Set the Scene thumbnail](/static/skillmap/shark/shark1.gif) | Set up your laser-firing ocean shark. |
| Blocks used | ``[scene.setBackgroundColor(0)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite = null; mySprite.setStayInScreen(true)]``<br>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite)]``|
| Solution option | [Set the Scene Project](https://makecode.com/_ghyiPCDsJLAC) |

#### 2. Beware the Enemy

| Activity | Beware the Enemy (8 min) |
|---|---|
| ![Beware the Enemy thumbnail](/static/skillmap/shark/shark1a.gif) | Building off the last level, spawn enemies for your laser-firing shark to avoid. |
| Blocks used | ``[game.onUpdateInterval()]``<br/>``[myEnemy = sprites.create(img`.`, SpriteKind.Enemy)]``<br/>``[let myEnemy: Sprite = null; let mySprite: Sprite = null; myEnemy.setPosition(0 + mySprite.x, randint())]`` |
| Solution option | [Beware the Enemy Project](https://makecode.com/_g8iaro9p4cCW) |

#### 3. Enemies Attack!

| Activity | Enemies Attack! (8 min) |
|---|---|
| ![Enemies Attack thumbnail](/static/skillmap/shark/shark1b.gif) | This game builds off the last level, adding gamification to your project by taking damage every time a submarine catches your shark. |
| Blocks used | ``[let myEnemy: Sprite = null; myEnemy.follow(mySprite, 0)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {})]``<br/>``[let otherSprite: Sprite = null; otherSprite.destroy()]``<br/>``[info.changeLifeBy()]``<br/>``[scene.cameraShake())]`` |
| Solution option | [Enemies Attack! Project](https://makecode.com/_RfAVJ0hfeW0e) |

#### 4. Laser Focus

| Activity | Laser Focus (7 min) |
|---|---|
| ![Laser Focus thumbnail](/static/skillmap/shark/shark1c.gif) | Adding on to the previous level, use your lasers to destroy enemies. |
| Blocks used | ``[sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {})]``<br/>``[let otherSprite: Sprite = null; otherSprite.destroy(effects.bubbles, )]``<br/>``[info.changeScoreBy()]`` |
| Solution option | [Laser Focus Project](https://makecode.com/_hzV9FWJupD5F) |

##### Game Mod Ideas

After students complete Laser Focus, they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try: 

- Have the laser get destroyed when it kills an enemy
- Add another type of enemy
- Set it so the health bar is displayed on start

### Day 2

On this day, students will use the same elements of event containers, sprite positioning, physics, and destruction to focus on another side of projectile games - ways to build life back up. Additionally, they will wrap up their experience with a creative customization project.

#### 1. Food not Friends

| Activity | Food not Friends (7 min) |
|---|---|
| ![Food not Friends thumbnail](/static/skillmap/shark/shark2.gif) | Back to an enemy-free ocean, this tutorial will go over spawing some food for your shark. |
| Blocks used | ``[game.onUpdateInterval()]``<br/>``[myFood = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let myFood: Sprite = null; let mySprite: Sprite = null; myFood.setPosition(0 + mySprite.x, randint())]``<br/>``[let myFood: Sprite = null; myFood.vx = 0]``|
| Solution option | [Food not Friends Project](https://makecode.com/_dLJHiifhR2ev) |

#### 2. Eat Up!

| Activity | Eat Up! (8 min) |
|---|---|
| ![Eat Up! thumbnail](/static/skillmap/shark/shark3.gif) | This game builds off the last level. Animate and gamify your shark's consumption of fish. |
| Blocks used | ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})]``<br/>``[let otherSprite: Sprite = null; otherSprite.destroy(effects.disintegrate,)]``<br/>``[info.changeScoreBy()]``<br/>``[info.startCountdown()]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.over(true)]``|
| Solution option | [Eat Up! Project](https://makecode.com/_WM31H3Uur331) |

#### 3. Under the Sea

| Activity | Under the Sea (8 min) |
|---|---|
| ![Under the Sea thumbnail](/static/skillmap/shark/shark4.gif) | Building off the previous level, this level mixes design with automated generation to create a unique sea environment for your shark. |
| Blocks used | ``[scene.setBackgroundImage(img`.`)]``<br/>``[for (let index = 0; index < 10; index++) {}]``<br/>``[myDecor = sprites.create(img`.`,)]``<br/>``[let myDecor: Sprite = null; myDecor.setPosition(randint())]`` |
| Solution option | [Under the Sea Project](https://makecode.com/_2D9JL6Rm36yC) |


#### 4. Let's Get Animated!

| Activity | Let's Get Animated! (15+) |
|---|---|
| ![Let's Get Animated! thumbnail](/static/skillmap/shark/shark4a.gif) | Animate your sprites for a more life-like game! |
| Blocks used | _None_ |
| Solution option | N/A |


#### 5. A Whole New World!

| Activity | A Whole New World! (15+) |
|---|---|
| ![A Whole New World! thumbnail](/static/skillmap/shark/shark4b.gif) | Put all the previous game elements together but redesign all of the individual components to create a new story! |
| Blocks used | _None_ |
| Solution option | N/A |

##### Game Mod Ideas

As students work on A Whole New World!, we encourage them to plan out how they want to modify this game to best suit their interests. Consider the following questions: 

- What is an activity that I really like?
- When I do this activity, what supplies do I need? Replace the fishy food with these supplies!
- When I do this activity, what gets in my way? Replace the submarine enemies with these blockers!
- What environment do I usually do this activity in? Replace the background with something similar!
