# About Save the Forest!

**A page for Educators & Parents**

The **Save the Forest!** map uses basic code blocks and extensions in MakeCode Arcade to implement simple game concepts.

In this short set of activities, students code a scenario where players fly fire planes across a burning forest in an urgent effort to douse the flames. This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 18, this experience contains a total of 6 tutorials (approximating 54 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| Prepare Your Plane | 7 | Intro | movement, creation |
| Burning Issues | 8 | Maze | events, game score |
| Fire Fighting | 10 | Maze | events, game score, timer |
| Spreads Like Wildfire | 10 | Maze | events, game score, timer |
| Head's Up! | 9 | Maze | events, game score, timer |
| Keep Going | 10 | Maze | events, game score, timer |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing Save the Forest, students will have gained exposure to computer science and game design elements using MakeCode Arcade.

Specifically, they will experience the following topics:

- Loops
- Events
- Variables
- Tilemaps
- Movement
- Collisions
- Projectiles
- Strength/Life Mechanics


### Projects

As students progress through these projects, they will progressively build a game where their plane shoots water at flames to weaken them until they eventually extinguish.

```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```

#### 1. Prepare Your Plane
| Activity | Prepare Your Plane (7 min) |
|---|---|
| ![Prepare Your Plane thumbnail](/static/skillmap/rockstar/rockstar1.gif) | Set up your plane to make sure you can get everywhere you need to be!  |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Prepare Your Plane Project](https://makecode.com/_FM1DbPhEia87) |

#### 2. Burning Issues
| Activity | Burning Issues (8 min) |
|---|---|
| ![Burning Issues thumbnail](/static/skillmap/rockstar/rockstar2.gif) | Use loops to add random fires to your map!  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.over(true)]`` |
| Solution option | [Burning Issues Project](https://makecode.com/_aE3eYm23wad3) |

#### 3. Fire Fighting
| Activity | Fire Fighting (10 min) |
|---|---|
| ![Fire Fighting! thumbnail](/static/skillmap/rockstar/rockstar3.gif) | Add a water hose to your plane so you can keep your fires under control.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Fire Fighting Project](https://makecode.com/_dW115JWAR2d0) |