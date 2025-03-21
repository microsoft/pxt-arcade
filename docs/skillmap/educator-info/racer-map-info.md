# About Monster Racer

**A page for Educators & Parents**

The **Monster Racer** map uses basic code blocks and extensions in MakeCode Arcade to implement simple game concepts.

In this short set of activities, ... This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 10 & 16, this experience contains a total of 3 tutorials (approximating 35 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- | ------------ |
| Ready, Set, Go! | 9 | movement, sprites |
| Over and Under | 11 | events, game over |
| Going Further | 15 | animation, tilemaps |


\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing Monster Racer, students will experience the following topics:

- Events
- Variables
- Tilemaps
- Movement
- Collisions
- Animation
- Sounds

### Projects

As students progress through these projects, they will progressively build a game where ...

```package
pxt-forest-special=github:kiki-lee/forest-special/
```

#### 1. Ready, Set, Go!
| Activity | Ready, Set, Go! (7 min) |
|---|---|
| ![Ready, Set, Go! thumbnail](https://makecode.com/api/_biY17aMhFFpJ/thumb) | Choose a truck and get moving.  |
| Blocks used | ``[let truck = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let truck: Sprite=null; truck.ay = 500]`` <br/> ``[let truck: Sprite=null;truck.vx = 100]``<br/>``[let truck: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Ready, Set, Go! Project](https://makecode.com/_biY17aMhFFpJ) |

#### 2. Over and Under
| Activity | Over and Under (8 min) |
|---|---|
| ![Over and Under thumbnail](https://makecode.com/api/_FYseeH2FhhHR/thumb) | Add the ability to jump, win, and lose.  |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[game.over(true)]`` |
| Solution option | [Over and Under Project](https://makecode.com/_FYseeH2FhhHR) |

#### 3. Going Further
| Activity | Going Further (10 min) |
|---|---|
| ![Going Further! thumbnail](https://makecode.com/api/_1yfTMtFAe5yC/thumb) | Add animation and sound to your project!  |
| Blocks used | ``[animation.runImageAnimation()]``<br/>``[music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)]`` |
| Solution option | [Going Further Project](https://makecode.com/_1yfTMtFAe5yC) |



##### Game Mod Ideas

As students work on **Keep Going**, we encourage them to plan out ways they can dive even deeper using the full editor after opening their game using the [SAVE TO MY PROJECTS] button. 

- What other tiles can you add to the cave?
- Could something chase you as you travel through the cave?
- How can you make your truck go faster or slower with the arrow keys?

##### What's Next?

When students are finished with **Monster Racer** consider graduating them to another map to work on skills further.

- [Try the Jungle Monkey Skillmap](/skillmap/jungle)
- [Try the Save the Galaxy Map](/skillmap/galaxy)
- [Try our Time Flies Tutorial](/tutorials/froggy)
