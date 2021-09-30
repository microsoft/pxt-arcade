# About Save the Forest!

**A page for Educators & Parents**

The **Save the Forest!** map uses basic code blocks and extensions in MakeCode Arcade to implement simple game concepts.

In this short set of activities, students code a game that recreates the conditions for a forest fire, and then code a fire-fighting airtanker plane to spray water and put out the flames! This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 18, this experience contains a total of 6 tutorials (approximating 54 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| Prepare Your Plane | 7 | Intro | movement, sprites |
| Burning Issues | 8 | Maze | events, loops, random |
| Fire Fighting | 10 | Maze | events, projectiles |
| Spreads Like Wildfire | 10 | Maze | events, variables, collisions |
| Head's Up! | 9 | Maze | displays, customization |
| Keep Going | 10 | Maze | animations, sounds |

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
- Animation
- Sounds
- Strength/Life Mechanics


### Projects

As students progress through these projects, they will progressively build a game where their plane shoots water at flames to weaken them until they eventually extinguish.

```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```

#### 1. Prepare Your Plane
| Activity | Prepare Your Plane (7 min) |
|---|---|
| ![Prepare Your Plane thumbnail](/static/skillmap/forest/forest1.gif) | Set up your plane to make sure you can get everywhere you need to be!  |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Prepare Your Plane Project](https://makecode.com/_0CbLhcf6TW1W) |

#### 2. Burning Issues
| Activity | Burning Issues (8 min) |
|---|---|
| ![Burning Issues thumbnail](/static/skillmap/forest/forest2.gif) | Use loops to add random fires to your map!  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.over(true)]`` |
| Solution option | [Burning Issues Project](https://makecode.com/_EdjVbU6eMTPW) |

#### 3. Fire Fighting
| Activity | Fire Fighting (10 min) |
|---|---|
| ![Fire Fighting! thumbnail](/static/skillmap/forest/forest3.gif) | Add a water hose to your plane so you can keep your fires under control.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Fire Fighting Project](https://makecode.com/_9p32WzfzX1uv) |

#### 4. Spreads Like Wildfire
| Activity | Spreads Like Wildfire (10 min) |
|---|---|
| ![Spreads Like Wildfire thumbnail](/static/skillmap/forest/forest4.gif) | Conditions in the weather and environment such as drought, winds, vegetation density and dryness can cause fires to spread more quickly.  Let’s simulate these conditions in our game.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Spreads Like Wildfire Project](https://makecode.com/_ifR6pigEHKP7) |

#### 5. Head's Up!
| Activity | Head's Up! (9 min) |
|---|---|
| ![Head's Up!](/static/skillmap/forest/forest5.gif) | Computer science is more important to firefighting than ever before. Let's add a heads-up-display (HUD) to help the pilot get information from their fire database in real-time.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Head's Up Project](https://makecode.com/_77cLwx4b120o) |

#### 4. Keep Going
| Activity | Keep Going (10 min) |
|---|---|
| ![Keep Going thumbnail](/static/skillmap/forest/forest6.gif) | Add more to your game! Experiment with sounds and animation to make your game truly unique.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution option | [Keep Going Project](https://makecode.com/_0kzFyAgPMa4A) |

##### Game Mod Ideas

As students work on **Keep Going**, we encourage them to plan out ways they can dive even deeper using the full editor after opening their game using the [SAVE TO MY PROJECTS] button. 

- What other environment could my plane explore? Neighborhoods? The desert?
- What could pop-up randomly instead of fires? Fish? Mice? Snowmen?
- What could you move around instead of an airplane? A boat? A magnifying glass?

##### What's Next?

When students are finished with **Save the Forest!** consider graduating them to another map to work on skills further.

- [Try the Beginner Skillmap](/skillmap/beginner)
- [Try the Jungle Monkey Skillmap](/skillmap/jungle)
- [Try the Space Explorer Map](/skillmap/space)
- [Try our Time Flies Tutorial](/tutorials/froggy)
