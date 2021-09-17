# About 80's Rockstar Maze!

**A page for Educators & Parents**

The **80's Rockstar Maze!** map uses very basic code blocks in MakeCode Arcade to implement some simple game concepts.

In this short set of activities, students set up a backstage rockstar that needs to collect instruments and avoid fans after a show. This guide is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 14, this experience contains a total of 3 tutorials (approximating 16 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| Trapped Backstage | 5 | Intro | movement, creation |
| Gather Your Gear | 6 | Maze | events, game score |
| Enemies Attack! | 5 | Maze | events, game score, timer |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing 80's Rockstar Maze!, students will have gained exposure to a few game design elements using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events

#### Game Design Concepts

- Movement
- Creation
- Game Score
- Timer

### Projects

As students progress through these projects, they will progressively build their game. They will help their rockstar navigate around backstage, gain points when collecting instruments, and lose those points when running into an avid fan.

```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```

#### 1. Trapped Backstage
| Activity | Trapped Backstage (5 min) |
|---|---|
| ![Trapped Backstage thumbnail](/static/skillmap/rockstar/rockstar1.gif) | Create a rockstar backstage after the show and keep an eye on them as they navigate the set. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Trapped Backstage Project](https://makecode.com/_FM1DbPhEia87) |

#### 2. Gather Your Gear
| Activity | Gather Your Gear (6 min) |
|---|---|
| ![Gather Your Gear thumbnail](/static/skillmap/rockstar/rockstar2.gif) | Give your rockstar the ability to collect points while grabbing instruments and a way to finish the game. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.over(true)]`` |
| Solution option | [Gather Your Gear Project](https://makecode.com/_aE3eYm23wad3) |

#### 3. Enemies Attack!
| Activity | Enemies Attack! (X min) |
|---|---|
| ![Enemies Attack! thumbnail](/static/skillmap/rockstar/rockstar3.gif) | Add functionality for some crazed fans who will steal points as souvenirs unless the rockstar can avoid them. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Enemies Attack! Project](https://makecode.com/_dW115JWAR2d0) |