# About the Beginner’s Guide to Arcade Games

**A page for Educators & Parents**

The **Beginner’s Guide to Arcade Games** introduces the most common types of code blocks used throughout MakeCode Arcade.

In this set of activities, students will create their very first set of digital games with MakeCode Arcade.  This guide is intended for students who are new to MakeCode with little or no previous coding experience.  Through step-by-step instructions, students will focus on projects from 3 different categories: [Storytelling](#storytelling-path), [Clicker Games](#clicker-game-path), and [Collector Games](#collector-game-path).

Designed for students between the ages of 11 & 15, this experience contains a total of 11 tutorials (approximating 145 minutes of instruction) spread over 5 sessions.  At the end of each learning path, students receive a certificate of completion.

|                 | Minutes* | Game Type | Key Concepts |
| --------------- | -------- | --------- | ------------ |
| **Day 1**           |          |           |              |
| Get to Know Arcade (optional) | 12 | Intro | interface tutorial, basic blocks, events |
| Make a Greeting Card | 10 | Story | art design, music |
| Bigger Greeting | 10 | Story | art design, music, events |
| **Day 2**           |          |           |              |
| Joking Around   |30 | Story | storytelling, events |
| **Day 3**           |          |           |              |
| Clicker Game    |10  | Clicker | events, score, timer |
| Grand Clicker   |10 | Clicker | animation, arguments, events |
| Super Clicker   |7  | Clicker | projectiles, random numbers, events |
| **Day 4**           |          |           |              |
| Dino Hoard      | 10       | Collector | loops, projectiles, random numbers |
| Save the Baby Dinos | 12   | Collector | collisions, variables, timer |
| **Day 5**  |          |           |              |
| Traffic Dodger | 14 | Collector | projectiles, random numbers, variables |
| Animate It! | 20 | Collector | art design, loops |

\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives 

After completing the Beginner’s Guide to Arcade Games, students will have gained exposure to all the elements they need to successfully create their own arcade games using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events and program control flow
- User input
- Loops
- Variables
- Events

#### Game Design Concepts

- Storytelling
- Sprites and Projectiles
- Design, Sounds, and Effects
- Coordinates
- Velocity
- Game Score
- Win/Lose Criteria
- Randomization
- Animation

### Storytelling Path

In this learning path, students will learn how to use background images, music, and dialog boxes to build creative projects that send a message, tell a joke, or illustrate their thoughts. 

#### 1. Greeting Card

| Activity | Greeting Card (10 min) |
|---|---|
| ![Greeting Card thumbnail](/static/skillmap/map-info/greeting-card.png) | Design a simple greeting card to send to friends and family. |
| Blocks used | **[On Start](/blocks/on-start)** <br/><br/> ``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.confetti.startScreenEffect()]``<br/> ``[music.playMelody("", 120)]``|
| Solution option | [Greeting Card Project](https://arcade.makecode.com/14885-64298-31361-79978) |

#### 2. Bigger Greeting

| Activity | Bigger Greeting (10 min) |
|---|---|
| ![Bigger Greeting thumbnail](/static/skillmap/map-info/bigger-greeting.png) | This activity builds off the previous Greeting Card activity.<br/>Students will add text that is revealed with the press of a &nbsp;<br/>button. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[game.setDialogFrame(img`.`)]``<br/>``[game.setDialogTextColor(0)]``<br/>``[game.showLongText("", DialogLayout.Bottom)]`` |
| Solution option | [Bigger Greeting Project](https://arcade.makecode.com/42444-68014-69780-79234) |

#### 3. Joking Around

| Activity | Joking Around (30 min) |
|---|---|
| ![Joking Around thumbnail](/static/skillmap/map-info/joking-around.png) | This activity introduces students to characters and dialog,<br/>as they bring short jokes to life. |
| Blocks used | ``[music.baDing.play()]``<br/>``[music.setVolume(20)]``<br/>``[game.splash("")]``<br/>``[sprites.create(img`.`).setPosition(0, 0)]``<br/>``[sprites.create(img`.`).startEffect(effects.spray)]``<br/>``[sprites.create(img`.`).setImage(img`.`)]``<br/>``[scene.cameraShake(4, 500)]`` |
| Solution option | [Joking Around Project](https://arcade.makecode.com/87828-03702-46750-80177) |

##### Game Mod Ideas

After students complete Joking Around they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try: 

- Add a second sprite for a joke with more interaction 
- Move sprites or change backgrounds each time the (A) button is pressed 
- Modify your project to illustrate a poem 
- Use what you’ve learned to illustrate a longer joke or story

### Clicker Game Path

In this path, students will use event containers, sprites, and projectiles to create a simple “clicker” game that takes in user input and performs an action.  Here, the user is challenged to click the (A) button as quickly as possible before time runs out. 

#### 1. Clicker Game

| Activity | Clicker Game (10 min) |
|---|---|
| ![Clicker Game thumbnail](/static/skillmap/map-info/clicker-game.png) | Create a game that adds points for each click. |
| Blocks used | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.over(true)]``|
| Solution option | [Clicker Game Project](https://arcade.makecode.com/12273-78408-58405-09625) |

#### 2. Button Clicker

| Activity | Button Clicker (10 min) |
|---|---|
| ![Button Clicker thumbnail](/static/skillmap/map-info/button-clicker.png) | This game builds off the last level, adding an animated sprite<br/>that toggles as you press and release the (A) button. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let power = 2]``|
| Solution option | [Button Clicker Project](https://arcade.makecode.com/77414-66317-99137-92560) |

#### 3. Clicking Superstar

| Activity | Clicking Superstar (7 min) |
|---|---|
| ![Clicking Superstar thumbnail](/static/skillmap/map-info/clicking-superstar.png) | Building off the previous project, this level adds projectiles that<br/>take the form of stars spraying from the button with each press. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution option | [Clicking Superstar Project](https://arcade.makecode.com/24852-02760-23597-83909) |

##### Game Mod Ideas

After students complete Clicking Superstar they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try: 

- Move the A button to the lower left and add a B Button to the lower right 
- Add a new sprite to the pedestal, make it something special! 
- Change the theme from stars on the stage to birds in a tree 

### Collector Game Path

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

After completing the Beginner’s Guide to Arcade Games, students move on to the following activities:

* Build a Space Explorer
* Scrolling Platformer
