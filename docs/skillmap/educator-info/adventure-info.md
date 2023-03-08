# Code an Adventure

**A page for Educators & Parents**

The **Code an Adventure** skillmap introduces simple game design and computer science concepts through a fun, retro text-based adventure game.

In this set of activities, students will create a text-based adventure with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.

Designed for students between the ages of 12 & 16, this experience contains a total of 3 tutorials (approximating 75 minutes of instruction).  At the end of the learning path, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Start Your Journey    |20  |  conditionals, events |
| Make it Spectacular   |25 |  music, images, functions |
| Lives and Gold   |30  |  functions, storytelling |

\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged.


### Objectives

After completing Code an Adventure, students will have gained exposure to all the elements they need to successfully create their own text-based adventure game using MakeCode Arcade, including:

#### Computer Science Concepts

- Sequencing and algorithms
- Events
- User input
- Conditionals
- Functions


#### Game Design Concepts

- Win/Loss Criteria
- Music & Sound Effects
- Image Design
- Story Design



#### 1. Start Your Journey

| Activity | Start Your Journey (20 min) |
|---|---|
| ![Start Your Journey thumbnail](/static/skillmap/mole/mole1.gif) | Learn to use MakeCode Arcade and add a moving character sprite to your project. |
| Blocks used |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Enemy)]`` <br/> ``[game.onUpdateInterval(1000, function () {}]``|
| Solution option | [Start Your Journey Project](https://makecode.com/_4WPAes5LMe9z) |

#### 2. Make it Spectacular

| Activity | Make it Spectacular (25 min) |
|---|---|
| ![Make it Spectacular thumbnail](/static/skillmap/mole/mole2.gif) | Add a rubber hammer to tag the mole and earn points! |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[sprites.move_to_random_hole_on_grid(mySprite)]`` <br/> ``[controller.move_only_onscreen_with_arrows(myHammer, speeds.Fast)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {})]`` <br/> ``[info.startCountdownGame(20, winTypes.Score, effects.confetti)]`` <br/> ``[info.changeScoreBy(1)]`` <br/> ``[sprites.move_to_random_hole_on_grid(mySprite)]`` |
| Solution option | [Make it Spectacular Project](https://makecode.com/_3kzWrvbA51PL) |

#### 3. Lives and Gold

| Activity | Lives and Gold (30 min) |
|---|---|
| ![Lives and Gold thumbnail](/static/skillmap/mole/mole3.gif) | Add sound and animation to polish your game! |
| Blocks used | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimationHammer(myHammer,[img`.`],100,false)]`` <br/>``[scene.add_label_to("Code an Adventure", areas.Bottom)]`` |
| Solution option | [Lives and Gold Project](https://makecode.com/_PCKW94TVLMpA) |







##### Game Mod Ideas

After students complete Code an Adventure they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the mole to a different character. Try a monster, an alien, or a star!
- Animate your character each time it's tagged by the rubber hammer.
- Add background music.


### What's Next?

After completing Code an Adventure, students can move on to the following activities:

* [Burstin' Balloons](https://arcade.makecode.com/--skillmap#docs:/skillmap/balloon)
* [Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space)
