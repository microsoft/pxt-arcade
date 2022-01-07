# About Pongo

**A page for Educators & Parents**

The **Pongo** map uses basic code blocks in MakeCode Arcade to implement simple game concepts.

In this short set of activities, students create a paddle that they can move to hit a ball in an attempt to collect points. This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 16, this experience contains a total of 3 tutorials (approximating 22 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- | ------------ |
| Paddle / Ball | 7 | movement, sprites |
| Hit the Wall | 8 | events, game score |
| Multiplayer | 7 | events, multiplayer |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing ...

Specifically, they will experience the following topics:

- Events
- Movement
- Collisions
- Game Score


### Projects

As students progress through these projects, they will progressively build a game where ...


#### 1. Paddle / Ball
| Activity | Paddle / Ball (7 min) |
|---|---|
| ![Paddle / Ball thumbnail](/static/skillmap/rockstar/rockstar1.gif) | Description... |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Paddle / Ball Project](https://makecode.com/_FM1DbPhEia87) |

#### 2. Hit the Wall
| Activity | Hit the Wall (8 min) |
|---|---|
| ![Hit the Wall thumbnail](/static/skillmap/rockstar/rockstar2.gif) | Description... |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.over(true)]`` |
| Solution option | [Hit the Wall Project](https://makecode.com/_aE3eYm23wad3) |

#### 3. Multiplayer
| Activity | Multiplayer (7 min) |
|---|---|
| ![Multiplayer thumbnail](/static/skillmap/rockstar/rockstar3.gif) | Description... |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Multiplayer Project](https://makecode.com/_dW115JWAR2d0) |