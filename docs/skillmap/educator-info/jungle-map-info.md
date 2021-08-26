# About Jungle Monkey Platformer

**A page for Educators & Parents**

**Jungle Monkey Platformer** introduces a number of MakeCode Arcade game design elements.

In this set of activities, students will create their very own platformer game with MakeCode Arcade.  This guide is intended for students who are new to MakeCode with little or no previous coding experience.  Through step-by-step instructions, students will bring to life a monkey friend in a world filled with dangerous obstacles and collectible baubles.

Designed for students between the ages of 11 & 15, this experience contains a total of 8 tutorials (approximating 42+ minutes of instruction) spread over 1 session.  At the end of this learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| Jungle Monkey Jump | 6 | Intro | movement, acceleration, user input, gravity |
| Game Over | 5 | Platformer | events, game score |
| Leaps and Bounds | 6 | Platformer | user input, creation |
| Blown Away | 9 | Platformer | user input, projectiles, animation, events, destruction |
| Watch Out! | 6 | Platformer | events, destruction, life bar |
| Animations | 6 | Platformer | events, animation |
| Extra Levels | 4 | Platformer | events, animation |
| Make it Your Own | N/A | Platformer | art design, game modification, level design |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing Jungle Monkey Platformer, students will have gained exposure to multiple arcade platformer game concepts using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events
- User Input

#### Game Design Concepts

- Movement
- Acceleration
- Gravity
- Creation
- Projectiles
- Animation
- Destruction
- Life Bar
- Levels
- Text Display
- Art Design
- Game Modification
- Level Design

### Projects

As students progress through these projects, they will progressively build up their game. They will accompany their monkey's evolution from a humble beginning as a simple creature that can move around to an animated jump and run master who can create their own platforms, blow up obstacles, and collect baubles across multiple worlds.

#### 1. Jungle Monkey Jump

| Activity | Jungle Monkey Jump (6 min) |
|---|---|
| ![Jungle Monkey Jump thumbnail](/static/skillmap/jungle/jungle1.gif) | Set up your monkey's side-to-side and jump movements. |
| Blocks used | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite, 0, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 0]``<br/>``[scene.cameraFollowSprite(mySprite)]``<br/>``[controller.up.onEvent()]``<br/>``[let mySprite: Sprite=null; sprites.gravity_jump(mySprite)]`` |
| Solution option | [Jungle Monkey Jump Project](https://makecode.com/_2cdMJY6x5F1U) |

#### 2. Game Over

| Activity | Game Over (5 min) |
|---|---|
| ![Game Over thumbnail](/static/skillmap/jungle/jungle2.gif) | Add winning, losing, and point-collecting functionality to your game. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[game.over(true)]``<br/>``[info.changeScoreBy()]`` |
| Solution option | [Game Over Project](https://makecode.com/_TPD1cCdtVD6i) |

#### 3. Leaps and Bounds

| Activity | Leaps and Bounds (6 min) |
|---|---|
| ![Leaps and Bounds thumbnail](/static/skillmap/jungle/jungle3.gif) | Make obstacles easier by spawning platforms under your monkey. |
| Blocks used | ``[controller.A.onEvent()]``<br/>``[tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)]``<br/>``[tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)]`` |
| Solution option | [Leaps and Bounds Project](https://makecode.com/_V5VcYsFw62h0) |

#### 4. Blown Away

| Activity | Blown Away (9 min) |
|---|---|
| ![Blown Away thumbnail](/static/skillmap/jungle/jungle4.gif) | Use dynamite to clear platforms. |
| Blocks used | ``[controller.B.onEvent()]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.setFlag(SpriteFlag.GhostThroughWalls, true)]``<br/>``[animation.runImageAnimation()]``<br/>``[scene.onOverlapTile()]``<br/>``[let tiles: Sprite=null; tiles.setWallAt(location, false)]``<br/>``[let tiles: Sprite=null; tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Solution option | [Blown Away Project](https://makecode.com/_dRsUjvEJj8K7) |

#### 5. Watch Out!

| Activity | Watch Out! (6 min) |
|---|---|
| ![Watch Out! thumbnail](/static/skillmap/jungle/jungle5.gif) | Make your dynamite more dangerous and destructive. |
| Blocks used | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeLifeBy(-1)]``<br/>``[scene.onOverlapTile()]`` |
| Solution option | [Watch Out! Project](https://makecode.com/_C4XbyuU4tV3y) |

#### 6. Animations

| Activity | Animations (6 min) |
|---|---|
| ![Animations thumbnail](/static/skillmap/jungle/jungle6.gif) | Animate your monkey! |
| Blocks used | ``[controller.left.onEvent()]``<br/>``[animation.runImageAnimation()]`` |
| Solution option | [Animations Project](https://makecode.com/_hU3ULXVvq02F) |

#### 7. Extra Levels

| Activity | Extra Levels (4 min) |
|---|---|
| ![Extra Levels thumbnail](/static/skillmap/jungle/jungle7.gif) | Add another level to your game. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[tiles.setTilemap()]``<br/>``[animation.runMovementAnimation()]``<br/>``[let mySprite: Sprite=null; mySprite.say("Level 2!", 500)]`` |
| Solution option | [Extra Levels Project](https://makecode.com/_2oiXEVKaK29s) |

#### 8. Make it Your Own

| Activity | Make it Your Own |
|---|---|
| ![Make it Your Own thumbnail](/static/skillmap/jungle/jungle8.gif) | Change your images and tilemaps to make a game of your own! |
| Blocks used | _None_ |
| Solution option | N/A |

##### Game Mod Ideas

As students work on Make it Your Own, we encourage them to plan out how they want to modify this game to best suit their interests. Consider the following questions: 

- What kind of world would I want to explore? Redesign the scene with your chosen environment!
- What is an animal or creature that would fit in to this world? Replace the monkey with your chosen creature!
- What kinds of obstacles would challenge my character? How can I creatively build them in?
- When I explore this world, what supplies do I need? Replace the baubles with these supplies!