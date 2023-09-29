# Sparks Flying

**A page for Educators & Parents**

The **Sparks Flying** skillmap introduces simple game design and computer science concepts through a simple and fun "clicker" style arcade game.

In this set of activities, students will create a 5-level clicker game with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.

* [See Teacher Lesson Plan](https://1drv.ms/w/s!AqsgsTyHBmRBoCHZ8rm2BKsISKS1?e=5xrAQl)
* [See Slides](https://1drv.ms/p/s!AqsgsTyHBmRBn2pQnnku4yb7iYfa?e=tsFXRo)
* [Visit Resources on OneDrive](https://1drv.ms/f/s!AqsgsTyHBmRBn2mMdQSkzSMTSCJg?e=pnPxYg)





Designed for students between the ages of 10 & 16, this experience contains a total of 3 tutorials (approximating 45 minutes of instruction).  At the end of the learning path, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Pile of Sticks    |18  |  sprites, events, effects |
| Win Some, Lose Some   |22 |  sprites, win, lose |
<!--| Get Animated   |15  |  sound, text, animations | -->


\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing Sparks Flying, students will have gained exposure to all the elements they need to successfully create their own clicker game using MakeCode Arcade, including:

#### Computer Science Concepts

- Sequencing and algorithms
- Events
- User input

<!--
- Functions
- Conditionals
- Variables
-->


#### Game Design Concepts

- Sprites
- Design, Sounds, and Effects
- Timers
- Game Score
- Win/Loss Criteria



#### 1. Pile of Sticks

| Activity | Pile of Sticks (18 min) |
|---|---|
| ![Pile of Sticks thumbnail](/static/skillmap/sparks/sparks1.gif) | Learn to use MakeCode Arcade and add fire pit sprite to your project. |
| Blocks used |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let kindling = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.changeScoreBy(1)]`` <br/> ``[let kindling: Sprite = null; kindling.startEffect(effects.fire, 500)]``|
| Solution option | [Pile of Sticks Project](https://makecode.com/_PXrdTU93ig45) |

#### 2. Win Some, Lose Some

| Activity | Win Some, Lose Some (12 min) |
|---|---|
| ![Win Some, Lose Some thumbnail](/static/skillmap/sparks/sparks2.gif) | Add win and loss conditions to your game using events. |
| Blocks used | <br/> ``[game.onUpdateInterval(1000, function () {}]`` <br/>``[info.changeScoreBy(1)]`` <br/> ``[info.onScore(30, function () {})]`` <br/> ``[game.setGameOverScoringType(game.ScoringType.LowScore) ]`` <br/> ``[info.setScore(0)]`` <br/> ``[game.gameOver(true)]``|
| Solution option | [Win Some, Lose Some Project](https://makecode.com/_KkM6gg0fEevk) |


<!--
#### 3. Get Animated

| Activity | Get Animated (15 min) |
|---|---|
| ![Get Animated thumbnail](/static/skillmap/sparks/sparks3.gif) | Add sound and animation to polish your game! |
| Blocks used | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimation(myHammer,assets.animation`hammerAnimation`,50,false)})]`` <br/>``[carnival.addLabelTo("Sparks Flying", carnival.Areas.Bottom))]`` |
| Solution option | [Get Animated Project](https://makecode.com/_PCKW94TVLMpA) |


#### 4. Play with Friends

| Activity | Get Animated (15 min) |
|---|---|
| ![Play with Friends thumbnail](/static/skillmap/sparks/sparks4.gif) | A few simple changes will have you playing chase in no time! |
| Blocks used | ``[game.showLongText(" ", DialogLayout.Center)]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Multi)]`` <br/>``[simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)]`` |
| Solution option | [Play with Friends Project](https://makecode.com/_Hvte8pVtoDft) |

-->




##### Game Mod Ideas

After students complete Sparks Flying they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the scene to something new.  Try making a water fountain in Greece or a raining cloud
- Make it a two player game where one person plays as a fire and the other as a sprinkler
- Add sound effects and/or background music


### What's Next?

After completing Sparks Flying, students can move on to the following activities:

* [Save the Galaxy](https://arcade.makecode.com/--skillmap#docs:/skillmap/galaxy)
* [Turkey Day](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```