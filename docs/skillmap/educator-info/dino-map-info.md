# About the Mama Dino Skillmap

**A page for Educators & Parents**

The **Mama Dino Skillmap** introduces the most common types of code blocks used throughout MakeCode Arcade.

In this set of activities, students will create a collector style game where Mama Dino avoids traffic to rescue her babies.  This guide is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 11 & 15, this experience contains a total of 4 tutorials (approximating 105 minutes of instruction) spread over 3 sessions.  At the end of each learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Dino Hoard      | 20       | Collector | loops, projectiles, random numbers |
| Save the Baby Dinos | 25   | Collector | collisions, variables, timer |
| **Day 2**  |          |           |              |
| Traffic Dodger | 30 | Collector | projectiles, random numbers, variables |
| **Day 3**  |          |           |              |
| Animate It! | 30 | Collector | art design, loops |

\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing the Mama Dino Skillmap, students will have gained exposure to all the elements they need to successfully create their own arcade games using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events and program control flow
- User input
- Loops
- Variables
- Events

#### Game Design Concepts

- Sprites and Projectiles
- Design, Sounds, and Effects
- Velocity
- Game Score
- Win/Lose Criteria
- Randomization
- Animation


### Game Path

Students will work with sprite controller blocks, variables, and conditional statements to build a game where Mama Dino rushes to collect as many of her babies as possible while avoiding traffic.

#### 1. Dino Hoard

| Activity | Dino Hoard (10 min) |
|---|---|
| ![Dino Hoard thumbnail](/static/skillmap/map-info/dino-hoard.png) | Set an animated background for your hero sprite to travel as they search for baby dinos. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(sprites.create(img`.`), 0, 100)]``<br/>``[let random = randint(0, 10)]``<br/>``[let projectile = sprites.createProjectileFromSide(img`.`, 0, 100)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})]``<br/>``[forever(function () {})]``<br/>``[sprites.create(img`.`).destroy()]`` |
| Solution option | [Dino Hoard Project](https://arcade.makecode.com/00050-04644-99185-20758) |


#### 2. Save the Baby Dinos!

| Activity | Save the Baby Dinos! (12 min) |
|---|---|
| ![Save the Baby Dinos thumbnail](/static/skillmap/map-info/save-baby-dinos.png) | Build on the previous activity to add points to your game as you collect dinos. |
| Blocks used | ``[scene.setBackgroundColor(0)]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.blizzard.startScreenEffect()]``<br/>``[sprites.create(img`.`).setStayInScreen(true)]``|
| Solution option | [Save the Baby Dinos Project](https://arcade.makecode.com/21438-61170-25811-66074) |

#### 3. Traffic Dodger

| Activity | Traffic Dodger (14 min) |
|---|---|
| ![Traffic Dodger thumbnail](/static/skillmap/map-info/traffic-dodger.png) | Take your game further with cars that subtract a life if you run into them. |
| Blocks used | ``[sprites.create(img`.`).setKind(SpriteKind.Enemy)]``<br/>``[sprites.create(img`.`).y = 0]``|
| Solution option | [Traffic Dodger Project](https://arcade.makecode.com/76596-99011-88241-42675) |

#### 4. Animate It!

| Activity | Animate It! (20 min) |
|---|---|
| ![Animate It! thumbnail](/static/skillmap/map-info/animate-it.png) | Polish your game using animation to make your characters come to life! |
| Blocks used | ``[info.changeLifeBy(1)]``|
| Solution option | [Animate It Project](https://arcade.makecode.com/20377-15271-69070-26521) |

##### Game Mod Ideas

After students complete Animate It! they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox.  Here are some modifications they can try:

- Make the camera shake when the dino runs into a car
- Add another sprite that gives more time when collected
- Add a sprite that gives more lives when collected
- Change the scene from a dino on the street to a shark in the ocean

### What’s Next?

After completing the Mama Dino Skillmap, students move on to the following activities:

* [Turkey Day](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)
* [Jungle Jump](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle)
