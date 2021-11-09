# About Save the Forest!

**A page for Educators & Parents**

The **Save the Forest!** map uses basic code blocks and extensions in MakeCode Arcade to implement simple game concepts.

In this short set of activities, students code a game that recreates the conditions for a forest fire, and then code a fire-fighting airtanker plane to spray water and put out the flames! This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 18, this experience contains a total of 6 tutorials (approximating 54 minutes of instruction).  At the end of the learning path, students receive a certificate of completion.

|                 | Minutes* | Key Concepts |
| --------------- | -------- | ------------ |
| Prepare Your Plane | 7  | movement, sprites |
| Burning Issues | 8  | events, loops, random |
| Fire Fighting | 10 | events, projectiles |
| Spreads Like Wildfire | 10 | events, variables, collisions |
| Head's Up! | 9 | displays, customization |
| Keep Going | 10 | animations, sounds |

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


#### 1. Prepare Your Plane
| Activity | Prepare Your Plane (7 min) |
|---|---|
| ![Prepare Your Plane thumbnail](/static/skillmap/forest/forest1.gif) | Set up your plane to make sure you can get everywhere you need to be!  |
| Blocks used | ``[tiles.setTilemap(tilemap`level1`)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution option | [Prepare Your Plane Project](https://makecode.com/_epJ1pWYYeVyY) |

#### 2. Burning Issues
| Activity | Burning Issues (8 min) |
|---|---|
| ![Burning Issues thumbnail](/static/skillmap/forest/forest2.gif) | Use loops to add random fires to your map!  |
| Blocks used | ``[for (let index = 0; index < 4; index++) {}]``<br/>``[sprites.create_spreading_fire(img`transparency16`, assets.tile`transparency16`)]``<br/>``[sprites.on_fire_created()]``<br/>``[scene.createParticleEffectAtLocation(location, effects.fire)]`` |
| Solution option | [Burning Issues Project](https://makecode.com/_Uq6C8RKcg5g4) |

#### 3. Fire Fighting
| Activity | Fire Fighting (10 min) |
|---|---|
| ![Fire Fighting! thumbnail](/static/skillmap/forest/forest3.gif) | Add a water hose to your plane so you can keep your fires under control.  |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Repeated, function () {})]``<br/>``[let mySprite: Sprite=null; sprites.spray(mySprite, img`.`)]``<br/>``[sprites.set_flame_strength(location, 5)]``<br/>``[scene.onOverlapTile(SpriteKind.Water, assets.tile`transparency16`, function (sprite, location))]``<br/>``[let sprite: Sprite=null; sprite.destroy()]``<br/>``[sprites.change_flame_strength_by(sprite, -1)]``<br/>``[sprites.on_fire_destroyed(function (location))]``<br/>``[scene.clearParticleEffectsAtLocation(location)]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Solution option | [Fire Fighting Project](https://makecode.com/_Vme4T0TkA1E3) |

#### 4. Spreads Like Wildfire
| Activity | Spreads Like Wildfire (10 min) |
|---|---|
| ![Spreads Like Wildfire thumbnail](/static/skillmap/forest/forest4.gif) | Conditions in the weather and environment such as drought, winds, vegetation density and dryness can cause fires to spread more quickly.  Let's simulate these conditions in our game.  |
| Blocks used | ``[game.set_health_of_trees(7)]``<br/>``[game.set_strength_of_wind(3)]``<br/>``[game.set_dryness_of_grass(3)]``<br/>``[game.onUpdate(function () {})]``<br/>``[sprites.random_spread()]``|
| Solution option | [Spreads Like Wildfire Project](https://makecode.com/_0MWamcehqV22) |

#### 5. Head's Up!
| Activity | Head's Up! (9 min) |
|---|---|
| ![Head's Up!](/static/skillmap/forest/forest5.gif) | Computer science is more important to firefighting than ever before. Let's add a heads-up-display (HUD) to help the pilot get information from their fire database in real-time.  |
| Blocks used | ``[hud.forest_hud(true)]``<br/>``[hud.danger_hud(true)]``<br/>``[hud.forest_hud(true)]`` |
| Solution option | [Head's Up Project](https://makecode.com/_b6Y46WUtkCeJ) |

#### 6. Keep Going
| Activity | Keep Going (10 min) |
|---|---|
| ![Keep Going thumbnail](/static/skillmap/forest/forest6.gif) | Add more to your game! Experiment with sounds and animation to make your game truly unique.  |
| Blocks used | ``[controller.left.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[animation.runImageAnimation()]``<br/>``[music.thump.play()]`` |
| Solution option | [Keep Going Project](https://makecode.com/_Y9PK4P2iF6D0) |

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


##### More Teacher Resources

Would you like a complete lesson plan for this activity?  Visit our Sharepoint folder to see more:

- [Teacher lesson Resources](https://1drv.ms/u/s!AqsgsTyHBmRBkjR0izvm6EQ2NqLp?e=YRsyz6)


```package
pxt-arcade-forest-fire=github:microsoft/arcade-forest-fire
```