# About Shark Splash

**A page for Educators & Parents**

**Shark Splash** introduces a number of MakeCode Arcade game design elements.

In this set of activities, students will create a MakeCode Arcade game that involves protecting their shark from submarines while it hunts for food.  This activity is intended for students who are new to MakeCode with little to moderate previous coding experience.  Through step-by-step instructions, students will focus on game creation across 3 primary topics: destroying enemies, collecting food, and custom modification.

Designed for students between the ages of 10 & 16, this experience contains a total of 5 tutorials (approximating at least 32 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Set the Scene | 7 | Intro | movement, events, projectiles |
| Food not Friends | 7 | Collector | events, positioning, random numbers, movement |
| Eat Up! | 8 | Collector | events, destroying, game score |
| Under the Sea | 8 | Collector | loops, design, positioning, random numbers |
| Let's Get Animated! | 10+ | Design | art design, effects |


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
- Positioning
- Randomization
- Effects
- Game Score
- Velocity
- Art Design



#### 1. Set the Scene

| Activity | Set The Scene (7 min) |
|---|---|
| ![Set the Scene thumbnail](/static/skillmap/shark/shark1.gif) | Set up your laser-firing ocean shark. |
| Blocks used | ``[scene.setBackgroundColor(0)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite = null; mySprite.setStayInScreen(true)]``<br>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite)]``|
| Solution option | [Set the Scene Project](https://makecode.com/_ghyiPCDsJLAC) |




#### 2. Food not Friends

| Activity | Food not Friends (7 min) |
|---|---|
| ![Food not Friends thumbnail](/static/skillmap/shark/shark2.gif) | Back to an enemy-free ocean, this tutorial will go over spawing some food for your shark. |
| Blocks used | ``[game.onUpdateInterval()]``<br/>``[myFood = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let myFood: Sprite = null; let mySprite: Sprite = null; myFood.setPosition(0 + mySprite.x, randint())]``<br/>``[let myFood: Sprite = null; myFood.vx = 0]``|
| Solution option | [Food not Friends Project](https://makecode.com/_dLJHiifhR2ev) |

#### 3. Eat Up!

| Activity | Eat Up! (8 min) |
|---|---|
| ![Eat Up! thumbnail](/static/skillmap/shark/shark3.gif) | This game builds off the last level. Animate and gamify your shark's consumption of fish. |
| Blocks used | ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})]``<br/>``[let otherSprite: Sprite = null; otherSprite.destroy(effects.disintegrate,)]``<br/>``[info.changeScoreBy()]``<br/>``[info.startCountdown()]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.over(true)]``|
| Solution option | [Eat Up! Project](https://makecode.com/_WM31H3Uur331) |

#### 4. Under the Sea

| Activity | Under the Sea (8 min) |
|---|---|
| ![Under the Sea thumbnail](/static/skillmap/shark/shark4.gif) | Building off the previous level, this level mixes design with automated generation to create a unique sea environment for your shark. |
| Blocks used | ``[scene.setBackgroundImage(img`.`)]``<br/>``[for (let index = 0; index < 10; index++) {}]``<br/>``[myDecor = sprites.create(img`.`,)]``<br/>``[let myDecor: Sprite = null; myDecor.setPosition(randint())]`` |
| Solution option | [Under the Sea Project](https://makecode.com/_2D9JL6Rm36yC) |


#### 5. Let's Get Animated!

| Activity | Let's Get Animated! (15+) |
|---|---|
| ![Let's Get Animated! thumbnail](/static/skillmap/shark/shark4a.gif) | Animate your sprites for a more life-like game! |
| Blocks used | _None_ |
| Solution option | N/A |



##### Game Mod Ideas

After students work on "Let's Get Animated!", we encourage them to plan out how they want to modify this game to best suit their interests. Consider the following questions: 

- What is an activity that I really like? How does that tell me who my hero should be?
- When I do this activity, what supplies do I need? Replace the fishy food with these supplies!
- What environment do I usually do this activity in? Replace the background with something similar!

Don't forget to save this activity to projects and keep building!
