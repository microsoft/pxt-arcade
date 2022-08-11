# Whack-em-Mole

**A page for Educators & Parents**

The **Whack-em-Mole** skillmap introduces simple game design and computer science concepts through a fun, relatable carnival interface.

In this set of activities, students will create a simple mole-chasing game with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 8 & 13, this experience contains a total of 3 tutorials (approximating 45 minutes of instruction).  At the end of the learning path, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Mole Hunt    |18  |  sprites, events, timer |
| Hammer Time   |12 |  sprites, overlaps, events |
| Get Animated   |15  |  sound, text, animations |


\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing Whack-em-Mole, students will have gained exposure to all the elements they need to successfully create their own Whack-em-Mole game using MakeCode Arcade, including:

#### Computer Science Concepts

- Sequencing and algorithms
- Events
- User input


#### Game Design Concepts

- Sprites
- Design, Sounds, and Effects
- Collision / overlap
- Countdown timers
- Game Score
- Win/Loss Criteria
- Animation



#### 1. Mole Hunt

| Activity | Mole Hunt (18 min) |
|---|---|
| ![Mole Hunt thumbnail](/static/skillmap/mole/mole1.gif) | Learn to use MakeCode Arcade and add a moving character sprite to your project. |
| Blocks used |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Enemy)]`` <br/> ``[game.onUpdateInterval(1000, function () {}]``|
| Solution option | [Mole Hunt Project](https://makecode.com/_4WPAes5LMe9z) |

#### 2. Hammer Time

| Activity | Hammer Time (12 min) |
|---|---|
| ![Hammer Time thumbnail](/static/skillmap/mole/mole2.gif) | Add a rubber hammer to tag the mole and earn points! |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[sprites.move_to_random_hole_on_grid(mySprite)]`` <br/> ``[controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {})]`` <br/> ``[info.startCountdownGame(20, winTypes.Score, effects.confetti)]`` <br/> ``[info.changeScoreBy(1)]`` <br/> ``[sprites.move_to_random_hole_on_grid(mySprite)]`` |
| Solution option | [Hammer Time Project](https://makecode.com/_3kzWrvbA51PL) |

#### 3. Get Animated

| Activity | Get Animated (15 min) |
|---|---|
| ![Get Animated thumbnail](/static/skillmap/mole/mole3.gif) | Add sound and animation to polish your game! |
| Blocks used | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimationHammer(myHammer,[img`.`],100,false)]`` <br/>``[scene.add_label_to("Whack-em-Mole", areas.Bottom)]`` |
| Solution option | [Get Animated Project](https://makecode.com/_PCKW94TVLMpA) |







##### Game Mod Ideas

After students complete Whack-em-Mole they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the mole to a different character. Try a monster, an alien, or a star!
- Animate your character each time it's tagged by the rubber hammer.
- Add background music.


### What's Next?

After completing Whack-em-Mole, students can move on to the following activities:

* [Burstin' Balloons](https://arcade.makecode.com/--skillmap#docs:/skillmap/balloon)
* [Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space)
