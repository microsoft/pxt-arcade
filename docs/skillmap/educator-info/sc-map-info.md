# About Shang-Chi and the Legend of the Ten Rings Project

**A page for Educators & Parents**

The **Shang-Chi and the Legend of the Ten Rings** map introduces a number of MakeCode Arcade game design elements.

In this set of activities, students will create their very own platformer game with MakeCode Arcade. This map is intended for students who are new to MakeCode with little or no previous coding experience. Through step-by-step instructions, students will create an amazing adventure based on the movie Shang-Chi and the Legend of the Ten Rings! Guided by an intro-level tutorial, they will use code to train Shang-Chi or Xialing to build magic platforms, seek out mystical rings, and battle assassins from the Ten Rings organization.

Designed for students between the ages of 11 & 18, this experience contains a total of 10 tutorials (approximating 88+ minutes of instruction) spread over 2 sessions.  At the end of this learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Session 1** | **50** |  |  |
| Opening Scene | 10 | Intro | movement, acceleration, user input, gravity |
| Know Your Surroundings | 9 | Platformer | events, game score |
| Martial Arts Training | 9 | Platformer | user input, creation |
| Power Kick | 12 | Platformer | user input, projectiles, animation, events, destruction |
| Animated Characters | 10 | Platformer | animation |
| **Session 2** | **38+** |  |  |
| Here Comes Trouble | 12 | Platformer | creation, animation, movement, acceleration |
| Packs a Punch | 10 | Platformer | events, movement, life bar, animation, destruction |
| Smarter Assassins | 6 | Platformer | animation, artificial intelligence |
| On Another Level | 10 | Platformer | events, levels, animation, text display |
| Bigger and Better | N/A | Platformer | game modification |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing Shang-Chi and the Legend of the Ten Rings, students will have gained exposure to multiple arcade platformer game concepts using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- User Input
- Events
- Artificial Intelligence

#### Game Design Concepts

- Movement
- Acceleration
- User Input
- Gravity
- Game Score
- Creation
- Projectiles
- Animation
- Destruction
- Creation
- Life Bar
- Levels
- Text Display

### Session 1

During this session, students will dive into the Marvel Cinematic Universe in the form of Shang-Chi or Xialing. By the end of this session, students will help their main character develop from a simple sprite to an animated superhero who can run, jump, create blocks, and destroy blocks.

```package
customts=github:anzhou5/customts
pxt-tilemaps=github:microsoft/pxt-tilemaps/
arcade-premium-life=github:jwunderl/arcade-premium-life/
pxt-characterAnimations=github:microsoft/arcade-character-animations/
```

#### 1. Opening Scene
| Activity | Opening Scene (7 min) |
|---|---|
| ![Opening Scene thumbnail](/static/skillmap/sc/sc1.gif) | Set up your player and make them able to move and jump. |
| Blocks used | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let sprites: Sprite=null; sprites.add_profile()]``<br/>``[controller.moveSprite(mySprite, 100, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 500)]``<br/>``[controller.up.onEvent()]``<br/>``[let mySprite: Sprite=null; sprites.gravity_jump(mySprite)]`` |
| Solution option | [Opening Scene Project](https://makecode.com/_Lhg5WrHfdi6w) |

#### 2. Know Your Surroundings
| Activity | Know Your Surroundings (6 min) |
|---|---|
| ![Know Your Surroundings thumbnail](/static/skillmap/sc/sc2.gif) | Add ways to lose, ways to win, and collectable points to your game. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[game.over(true)]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(0)]`` |
| Solution option | [Know Your Surroundings Project](https://makecode.com/_2CxDbh65PhLK) |

#### 3. Martial Arts Training
| Activity | Martial Arts Training (5 min) |
|---|---|
| ![Martial Arts Training thumbnail](/static/skillmap/sc/sc3.gif) | Give your player the ability to add blocks to the scene so you can get past obstacles. |
| Blocks used | ``[controller.A.onEvent()]``<br/>``[tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)]``<br/>``[tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom))]`` |
| Solution option | [Martial Arts Training Project](https://makecode.com/_Motixg6bb5qu) |

#### 4. Power Kick
| Activity | Power Kick (9 min) |
|---|---|
| ![Power Kick thumbnail](/static/skillmap/sc/sc4.gif) | Give your player the ability to destroy walls with an animated power kick. |
| Blocks used | ``[controller.B.onEvent()]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 50, 50)]``<br/>``[let projectile: Sprite=null; projectile.setFlag(SpriteFlag.GhostThroughWalls, true)]``<br/>``[let projectile: Sprite=null; projectile.lifespan = 100]``<br/>``[animation.runImageAnimation()]``<br/>``[scene.onOverlapTile()]``<br/>``[tiles.setWallAt(location, false)]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Solution option | [Power Kick Project](https://makecode.com/_Eht4eM507Ecd) |

#### 5. Animated Characters
| Activity | Animated Characters (4 min) |
|---|---|
| ![Animated Characters thumbnail](/static/skillmap/sc/sc5.gif) | Animate all of your main character's movement. |
| Blocks used | ``[animation.loopFrames2()]`` |
| Solution option | [Animated Characters Project](https://makecode.com/_Hah20XFTtdya) |

### Session 2

During this session, students will take their games to the next level (literally). On top of level addition, these modules will walk students through adding in and battling pseudo-intelligent enemies. After students complete the core modules, they will unlock one final module that empowers them to modify their games using their own imaginations.

#### 1. Here Comes Trouble
| Activity | Here Comes Trouble (7 min) |
|---|---|
| ![Here Comes Trouble thumbnail](/static/skillmap/sc/sc6.gif) | Add assassins from the Ten Rings organization. |
| Blocks used | ``[tiles.createSpritesOnTiles())]``<br/>``[sprites.onCreated()]``<br/>``[animation.loopFrames2()]``<br/>``[let sprite: Sprite=null; let mySprite: Sprite=null; sprite.follow(mySprite, 0)]``<br/>``[let sprite: Sprite=null; sprite.ay = 0]`` |
| Solution option | [Here Comes Trouble Project](https://makecode.com/_4WTHHjTCxd15) |

#### 2. Packs a Punch
| Activity | Packs a Punch (9 min) |
|---|---|
| ![Packs a Punch thumbnail](/static/skillmap/sc/sc6a.gif) | Add enemy damage and the ability to defend yourself against them. |
| Blocks used | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; tiles.placeOnRandomTile(otherSprite, img`.`)]``<br/>``[info.changeLifeBy(-1)]``<br/>``[animation.runImageAnimation()]``<br/>``[let sprite: Sprite=null; sprite.destroy()]`` |
| Solution option | [Packs a Punch Project](https://makecode.com/_URX9MWagKayH) |

#### 3. Smarter Assassins
| Activity | Smarter Assassins (4 min) |
|---|---|
| ![Smarter Assassins thumbnail](/static/skillmap/sc/sc6b.gif) | Implement simple artificial intelligence to keep the enemy chasing you. |
| Blocks used | ``[animation.loopFrames2()]``<br/>``[scene.onHitWall()]``<br/>``[let sprites: Sprite=null; sprites.wall_jump(sprite)]`` |
| Solution option | [Smarter Assassins Project](https://makecode.com/_MHXEKafRKXx0) |

#### 4. On Another Level
| Activity | On Another Level (5 min) |
|---|---|
| ![On Another Level thumbnail](/static/skillmap/sc/sc7.gif) | Add another level to your game. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[tiles.setTilemap(tilemap`level2`)]``<br/>``[animation.runMovementAnimation()]``<br/>``[game.level_num(0)]`` |
| Solution option | [On Another Level Project](https://makecode.com/_UwAAYqVVCMty) |

#### 5. Bigger and Better
| Activity | Bigger and Better (15+ min) |
|---|---|
| ![Bigger and Better thumbnail](/static/skillmap/sc/sc8.gif) | Add your own flair to the game! |
| Blocks used | _None_ |
| Solution option | N/A |
