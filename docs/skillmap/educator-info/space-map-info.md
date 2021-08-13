# About Design a Space Explorer in Arcade Games

**A page for Educators & Parents**

**Design a Space Explorer** provides students with instruction for block-based game development. This guide walks through intermediate game development concepts and teaches them in a beginner-friendly way.

In this set of activities, students will use the power of coding to create a space fighter. Equipped with missiles, refillable fuel canisters, and a creative mix of bullet types, students' ships will have everything they need to defend the galaxy from enemies. We recommend that students using this guide already have familiarity with basic MakeCode elements, but our step-by-step instructions are written to be friendly towards those with little coding experience as well.

Designed for students between the ages of 13 & 16, this experience contains a total of 7 tutorials (approximating ___ minutes of instruction) spread over 2 sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Session 1**           |          |           |              |
| Prepare Your Ship | 5 | Intro | velocity, movement |
| Ready, aim, fire! | 8 | Collector | events, projectiles, effects, velocity |
| Here comes trouble! | 15 | Collector | events, velocity, randomization, life bar, effects, game score, destruction |
| All Shook Up | 6 | Collector | effects, animation |
| **Session 2**           |          |           |              |
| Fuel Up! | 12 | Collector | status bar, positioning, events, destruction, velocity, randomization, game score |
| Level Up! | 9 | Collector | variables, conditional statements, game score, text display, velocity |
| The Art of Darts | 8 | Modification | arrays, randomization, sprite design |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

As students go through A Zookeeper's Adventure, they will create their own zookeeper sprite, design animal exhibits, and take care of animals. Throughout these experiences, they will be using computer science and game design concepts.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- User input
- Loops
- Events

#### Game Design Concepts

- Sprite Design
- Coordinates
- Velocity
- Game Score
- Randomization
- Animation
- Effects

#### 1. Zookeeper Hut

| Activity | Zookeeper Hut (3 min) |
|---|---|
| ![Zookeeper Hut thumbnail](/static/skillmap/zoo/activity1.png) | Design your zookeeper sprite and move it around. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/> ``[scene.cameraFollowSprite(mySprite)]``|
| Solution option | [Zookeeper Hut Project](https://makecode.com/_UrRYAkLCjTW7) |

#### 2. By Land

| Activity | By Land (6 min) |
|---|---|
| ![By Land thumbnail](/static/skillmap/zoo/activity2.png) | Design an animal enclosure on land zoo exhibit. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.setVelocity(randint(), randint())]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]`` |
| Solution option | [By Land Project](https://makecode.com/_TeKEE8W21eXa) |

#### 3. By Sea

| Activity | By Sea (6 min) |
|---|---|
| ![By Sea thumbnail](/static/skillmap/zoo/activity2-2.png) | Design an aquatic zoo exhibit with multiple of the same creature. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.vx = 0]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]``<br/>``[let mySprite: Sprite=null; mySprite.y = randint()]``<br/>``[for (let index = 0; index < 4; index++) {}]`` |
| Solution option | [By Sea Project](https://makecode.com/_beDHXiLcj8dk) |

#### 4. Penguins

| Activity | Penguins (5 min) |
|---|---|
| ![Penguins thumbnail](/static/skillmap/zoo/activity3.png) | This activity teaches how to debug locational errors in code. |
| Blocks used | ``[let penguin = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.x = 0]`` |
| Solution option | [Penguins Project](https://makecode.com/_7FETiTYJiKq8) |

#### 5. Feed the Panda

| Activity | Feed the Panda (10 min) |
|---|---|
| ![Feed the Panda thumbnail](/static/skillmap/zoo/activity4.png) | Create bamboo and guide the panda to eat it. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let mySprite: Sprite=null; mySprite.setPosition(randint(), randint())]``<br/>``[let panda: Sprite=null; panda.follow(mySprite)]``<br/>``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy(effects.disintegrate, 0)]``|
| Solution option | [Feed the Panda Project](https://makecode.com/_8AoUX74TK1Rr) |

#### 6. Quail Hatching

| Activity | Quail Hatching (6 min) |
|---|---|
| ![Quail Hatching thumbnail](/static/skillmap/zoo/activity5.png) | Use code to corral all the quails and their eggs into the coop. |
| Blocks used | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.follow(mySprite)]``<br/>``[scene.onOverlapTile())]``<br/>``[let sprite: Sprite=null; sprite.destroy()]`` |
| Solution option | [Quail Hatching Project](https://makecode.com/_UC93YfEEVEgq) |

##### Game Mod Ideas

After students complete Quail Hatching, they can head back to the skillmap and click "SAVE TO MY PROJECTS" for any of the modules. This will open the respective game in a window with a full-featured toolbox. Here are some modifications they can try:

- _[By Land/By Sea]_ Add another sprite that also has a movement pattern 
- _[By Sea]_ Modify sprites' moving speeds so each has a different one
- _[By Sea]_ Have the sprites flip around when they hit a wall
- _[Feed the Panda]_ Have the panda continue moving after eating
- _[Feed the Panda]_ Create another panda
- _[Quail Hatching]_ Make it easier to beat the game (ex. by having the glove move faster)