# About the Sing 2 Map

**A page for Educators & Parents**

The **Sing 2** introduces simple game design and computer science concepts.

In this set of activities, students will create a simple clicker with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 10 & 12, this experience contains a total of 4 tutorials (approximating 50 minutes of instruction).  At the end the learning path, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Welcome to the Show    |15  |  events, timer |
| Join the Audience   |10 |  animation, events |
| The Biggest Star   |15  |  projectiles, random numbers, events |
| Coming Up Roses   |10  |  projectiles, random numbers, events |


\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing Sing 2, students will have gained exposure to all the elements they need to successfully create their own clicker game using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events and program control flow
- User input
- Variables
- Lists/Arrays


#### Game Design Concepts

- Sprites and Projectiles
- Design, Sounds, and Effects
- Game Score
- Win/Loss Criteria
- Randomization
- Animation



#### 1. Welcome to the Show

| Activity | Welcome to the Show (15 min) |
|---|---|
| ![Welcome to the Show thumbnail](/static/skillmap/star/star1.gif) | Create a game using characters from Sing 2 and add points for each click. |
| Blocks used | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.over(true)]``|
| Solution option | [Welcome to the Show Project](https://arcade.makecode.com/12273-78408-58405-09625) |

#### 2. Join the Audience

| Activity | Join the Audience (10 min) |
|---|---|
| ![Join the Audience thumbnail](/static/skillmap/star/star2.gif) | This game builds off the last level, adding an animated audience sprite<br/>that toggles as you press and release the (A) button. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``|
| Solution option | [Join the Audience Project](https://arcade.makecode.com/77414-66317-99137-92560) |

#### 3. The Biggest Star

| Activity | The Biggest Star (15 min) |
|---|---|
| ![The Biggest Star thumbnail](/static/skillmap/star/star3.gif) | Building off the previous project, this level adds projectiles that<br/>take the form of stars spraying from the audience with each press of the button. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution option | [The Biggest Star Project](https://arcade.makecode.com/24852-02760-23597-83909) |


#### 4. Coming Up Roses

| Activity | Coming Up Roses (15 min) |
|---|---|
| ![Coming Up Roses thumbnail](/static/skillmap/star/star4.gif) | Building off the previous project, this level shows students how to add items to an array, so the performer is showered with both stars and roses. |
| Blocks used | ``[let projectile = sprites.createProjectileFromSprite([img`.`, img`.`]._pickRandom(), clapping, randint(-100, 100), randint(-50, -100))]`` |
| Solution option | [Coming Up Roses Project](https://arcade.makecode.com/24852-02760-23597-83909) |


##### Game Mod Ideas

After students complete Sing 2 they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the animals in the audience to a row of clapping hands
- Add a new sprite to the stage. Who would your performer be?
- Add more things for the audience to throw, like confetti pieces or hearts


### What's Next?

After completing Sing 2, students can move on to the following activities:

* [Build a Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space)
* [Jungle Monkey Jump](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle)
