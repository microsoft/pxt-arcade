# About A Zookeeper's Adventure in Arcade Games

**A page for Educators & Parents**

**A Zookeeper's Adventure** is an introduction to block-based coding for young students. This guide teaches basic storytelling design actions for games, like: movement, randomness, positioning, and destroying elements.

In this set of activities, students will use the power of coding to help manage a zoo. This guide is friendly for students who are new to MakeCode with little or no previous coding experience.  Through step-by-step instructions, students will focus on projects from 2 different categories: [Movement](#movement-path) and [Interaction](#interaction-path).

Designed for students between the ages of 11 & 15, this experience contains a total of 6 tutorials (approximating 36 minutes of instruction) spread over 2 sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Zookeeper Hut | 3 | Intro | sprite design, movement, navigation |
| By Land | 6 | Story | sprite design, movement, random numbers |
| By Sea | 6 | Story | sprite design, movement, random numbers, loops |
| Penguins | 5 | Story | debugging, positioning |
| **Day 2**           |          |           |              |
| Feed the Panda |10 | Story | events, random numbers, movement, destroying elements |
| Quail Hatching | 6 | Story | events, destroying elements, duplication |

\* Minutes are approximate, based on time to follow instructions as written. They do not include time spent on sprite design. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing A Zookeeper's Adventure, students will have learned how to use coding concepts creatively. As they create their own zookeeper sprite, design animal exhibits, and take care of animals, they will be learning computer science and game design concepts.

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

### Movement Path

In this learning path, students will learn how to use art, math, and physics to spawn and move sprites around.

#### 1. Zookeeper Hut

| Activity | Zookeeper Hut (3 min) |
|---|---|
| ![Zookeeper Hut thumbnail](/static/skillmap/zoo/activity1.png) | Design your zookeeper sprite and learn how to move it around. |
| Blocks used | ``[sprites.setBackgroundImage(img`.`)]``<br/>``[controller.moveSprite(mySprite)]``<br/> ``[scene.cameraFollowSprite(mySprite)]``|
| Solution option | [Zookeeper Hut Project](https://makecode.com/_UrRYAkLCjTW7) |

#### 2. By Land

| Activity | By Land (6 min) |
|---|---|
| ![By Land thumbnail](/static/skillmap/zoo/activity2.png) | Design an animal enclosure on land zoo exhibit. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player)]``<br/>``[mySprite.setVelocity(randint(-50, 50), randint(-50, 50))]``<br/>``[mySprite.setBounceOnWall(true)]`` |
| Solution option | [By Land Project](https://makecode.com/_TeKEE8W21eXa) |

#### 3. By Sea

| Activity | By Sea (6 min) |
|---|---|
| ![By Sea thumbnail](/static/skillmap/zoo/activity2-2.png) | Design an aquatic zoo exhibit with multiple of the same creature. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player)]``<br/>``[mySprite.vx = 50]``<br/>``[mySprite.setBounceOnWall(true)]``<br/>``[mySprite.y = randint(10, 110)]``<br/><br/>**[For Loop](/blocks/loops/for)** |
| Solution option | [By Sea Project](https://makecode.com/_6111H164u1WP7) |

#### 4. Penguins

| Activity | Penguins (5 min) |
|---|---|
| ![Penguins thumbnail](/static/skillmap/zoo/activity3.png) | This activity teaches how to debug locational errors in code. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.mySprite)]``<br/>``[mySprite.x = 0]`` |
| Solution option | [Penguins Project](https://makecode.com/_7FETiTYJiKq8) |

##### Game Mod Ideas

After students complete Penguins, they can head back to the skillmap and click "SAVE TO MY PROJECTS" for By Land or By Sea. This will open the respective game in a window with a full-featured toolbox. Here are some modifications they can try: 

- Add another sprite that also has a movement pattern 
- Modify sprites' moving speeds so each has a different one
- Have the sprites flip around when they hit a wall

### Interaction Path

In this path, students will use event containers, sprite positioning, and destruction to create and visualize interaction between sprites. 

#### 1. Feed the Panda

| Activity | Feed the Panda (10 min) |
|---|---|
| ![Feed the Panda thumbnail](/static/skillmap/zoo/activity4.png) | Create bamboo and guide the panda to eat it. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[mySprite.setPosition(randint(10, 150), randint(10, 110))]``<br/>``[mySprite.follow(mySprite)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})]``<br/>``[otherSprite.destroy(effects.disintegrate, 500)]``|
| Solution option | [Feed the Panda Project](https://makecode.com/_VYw5V8hfaWcC) |

#### 2. Quail Hatching

| Activity | Quail Hatching (6 min) |
|---|---|
| ![Quail Hatching thumbnail](/static/skillmap/zoo/activity5.png) | Use code to corral all the quails and their eggs into the coop. |
| Blocks used | ``[sprites.onOverlap(, , function () {})]``<br/>``[otherSprite.follow(mySprite)]``<br/>``[scene.onOverlapTile(, assets.tile`myTile`, function () {})]``<br/>``[sprite.destroy()]`` |
| Solution option | [Quail Hatching Project](https://makecode.com/_UC93YfEEVEgq) |

##### Game Mod Ideas

After students complete Quail Hatching, they can head back to the skillmap and click "SAVE TO MY PROJECTS" for Feed the Panda or Quail Hatching, which will open the game in a window with a full-featured toolbox. Here are some modifications they can try: 

- [Feed the Panda] Have the panda continue moving after eating
- [Feed the Panda] Create another panda
- [Quail Hatching] Make it easier to beat the game (ex. by having the glove move faster)

### What’s Next?

After completing A Zookeeper's Adventure, students move on to the following activities:

* TBD