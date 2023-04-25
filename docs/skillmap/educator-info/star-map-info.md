# About the Talent Show Map

**A page for Educators & Parents**

The **Talent Show** introduces simple game design and computer science concepts.

In this set of activities, students will create a simple clicker with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 9 & 12, this experience contains a total of 4 tutorials (approximating 50 minutes of instruction).  At the end of the learning path, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Welcome to the Show    |15  |  events, timer |
| Join the Audience   |10 |  animation, events |
| The Biggest Star   |15  |  projectiles, random numbers, events |
| Coming Up Roses   |10  |  projectiles, random numbers, events |


\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing Talent Show, students will have gained exposure to all the elements they need to successfully create their own clicker game using MakeCode Arcade.

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
| ![Welcome to the Show thumbnail](/static/skillmap/star/star1.gif) | Create a game using talented animals and add points for each click. |
| Blocks used | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.over(true)]``|
| Solution option | [Welcome to the Show Project](https://makecode.com/_d6TdD8VYPX1U) |

#### 2. Join the Audience

| Activity | Join the Audience (10 min) |
|---|---|
| ![Join the Audience thumbnail](/static/skillmap/star/star2.gif) | This game builds off the last level, adding an animated audience sprite<br/>that toggles as you press and release the (A) button. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``|
| Solution option | [Join the Audience Project](https://makecode.com/_WY823cfoyTwj) |

#### 3. The Biggest Star

| Activity | The Biggest Star (15 min) |
|---|---|
| ![The Biggest Star thumbnail](/static/skillmap/star/star3.gif) | Building off the previous project, this level adds projectiles that<br/>take the form of stars spraying from the audience with each press of the button. |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution option | [The Biggest Star Project](https://makecode.com/_3gs2oWTCHXuw) |


#### 4. Coming Up Roses

| Activity | Coming Up Roses (15 min) |
|---|---|
| ![Coming Up Roses thumbnail](/static/skillmap/star/star4.gif) | Building off the previous project, this level utilizes an undercover array to shower the performer with both stars and roses. |
| Blocks used | ``[let projectile = sprites.createProjectileFromSprite([img`.`, img`.`]._pickRandom(), clapping, randint(-100, 100), randint(-50, -100))]`` |
| Solution option | [Coming Up Roses Project](https://makecode.com/_aK1XDbamoH20) |


##### Game Mod Ideas

After students complete Talent Show they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the animals in the audience to a row of clapping hands
- Add a new sprite to the stage. Who would your performer be?
- Add more things for the audience to throw, like confetti or hearts


### What's Next?

After completing Talent Show, students can move on to the following activities:

* [Mama Dino](https://arcade.makecode.com/--skillmap#docs:/skillmap/dino)
* [Jungle Jump](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle)
