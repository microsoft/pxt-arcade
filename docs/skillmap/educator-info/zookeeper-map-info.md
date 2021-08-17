# About A Zookeeper's Adventure in Arcade Games

**A page for Educators & Parents**

**A Zookeeper's Adventure** is an introduction to block-based coding for young students. This guides students through basic storytelling design actions for games, including: movement, randomness, positioning, and the creation and destruction of elements.

In this set of activities, students will use the power of coding to help manage a zoo. This skillmap is friendly for students who are new to MakeCode with little or no previous coding experience.  Through step-by-step instructions, students will focus on projects that involve movement and interaction.

Designed for students between the ages of 11 & 15, this experience contains a total of 6 tutorials (approximating 49 minutes of instruction) that can be spread over 1 or two sessions.  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| Zookeeper Hut | 5 | Intro | sprite design, movement, navigation |
| By Land | 8 | Story | sprite design, movement, random numbers |
| By Sea | 8 | Story | sprite design, movement, random numbers, loops |
| Penguins | 9 | Story | debugging, positioning |
| Feed the Panda | 9 | Story | events, random numbers, movement, destroying elements |
| Quail Hatching | 10 | Story | events, destroying elements, duplication |

\* Minutes are approximate, based on time to follow instructions as written. They do not include time spent on sprite design. Providing extra time for creativity and debugging is encouraged.

### Objectives 

As students go through A Zookeeper's Adventure, they will create their own zookeeper sprite, design exhibits, and take care of animals. Throughout these experiences, they will use computer science and game design concepts, such as:

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
- Effects

#### 1. Zookeeper Hut

| Activity | Zookeeper Hut (3 min) |
|---|---|
| ![Zookeeper Hut thumbnail](/static/skillmap/zoo/activity1.png) | Design your zookeeper sprite and move it around. |
| Key blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/> ``[scene.cameraFollowSprite(mySprite)]``|
| Solution option | [Zookeeper Hut Project](https://makecode.com/_UrRYAkLCjTW7) |

#### 2. By Land

| Activity | By Land (6 min) |
|---|---|
| ![By Land thumbnail](/static/skillmap/zoo/activity2.png) | Design an animal enclosure on land zoo exhibit. |
| Key blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.setVelocity(randint(), randint())]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]`` |
| Solution option | [By Land Project](https://makecode.com/_TeKEE8W21eXa) |

#### 3. By Sea

| Activity | By Sea (6 min) |
|---|---|
| ![By Sea thumbnail](/static/skillmap/zoo/activity2-2.png) | Design an aquatic zoo exhibit with multiple of the same creature. |
| Key blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.vx = 0]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]``<br/>``[let mySprite: Sprite=null; mySprite.y = randint()]``<br/>``[for (let index = 0; index < 4; index++) {}]`` |
| Solution option | [By Sea Project](https://makecode.com/_beDHXiLcj8dk) |

#### 4. Penguins

| Activity | Penguins (5 min) |
|---|---|
| ![Penguins thumbnail](/static/skillmap/zoo/activity3.png) | This activity teaches how to debug locational errors in code. |
| Key blocks used | ``[let penguin = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.x = 0]`` |
| Solution option | [Penguins Project](https://makecode.com/_7FETiTYJiKq8) |

#### 5. Feed the Panda

| Activity | Feed the Panda (10 min) |
|---|---|
| ![Feed the Panda thumbnail](/static/skillmap/zoo/activity4.png) | Create bamboo and guide the panda to eat it. |
| Key blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let mySprite: Sprite=null; mySprite.setPosition(randint(), randint())]``<br/>``[let panda: Sprite=null; panda.follow(mySprite)]``<br/>``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy(effects.disintegrate, 0)]``|
| Solution option | [Feed the Panda Project](https://makecode.com/_8AoUX74TK1Rr) |

#### 6. Quail Hatching

| Activity | Quail Hatching (6 min) |
|---|---|
| ![Quail Hatching thumbnail](/static/skillmap/zoo/activity5.png) | Use code to corral all the quails and their eggs into the coop. |
| Key blocks used | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.follow(mySprite)]``<br/>``[scene.onOverlapTile())]``<br/>``[let sprite: Sprite=null; sprite.destroy()]`` |
| Solution option | [Quail Hatching Project](https://makecode.com/_UC93YfEEVEgq) |

##### Game Mod Ideas

After students complete Quail Hatching, they can head back to the skillmap and click "SAVE TO MY PROJECTS" for any of the modules. This will open the respective game in a window with a full-featured toolbox. Here are some modifications they can try:

- _[By Land/By Sea]_ Add another sprite with its own movement pattern 
- _[By Sea]_ Modify sprite speeds so each moves at a different rate
- _[By Sea]_ Have the sprites flip when they hit a wall
- _[Feed the Panda]_ Have the panda continue moving after eating
- _[Feed the Panda]_ Create another panda
- _[Quail Hatching]_ Make it easier to beat the game (ex. by having the glove move faster)
