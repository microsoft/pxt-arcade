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
| ![Start Your Journey thumbnail](/static/skillmap/adventure/adventure1.gif) | Create an adventure story using conditionals! |
| Blocks used |  ``[adventure.addToTextlog(" ")]`` <br/> ``[pauseUntil(() => controller.anyButton.isPressed())]``  <br/> ``[if (controller.A.isPressed()) {}else{}]`` <br/> ``[game.gameOver(true)]``|
| Solution option | [Start Your Journey Project](https://makecode.com/_iEp94zKPD4VX) |

#### 2. Make it Spectacular

| Activity | Make it Spectacular (25 min) |
|---|---|
| ![Make it Spectacular thumbnail](/static/skillmap/adventure/adventure2.gif) | Create your own music and images to enhance out your adventure!|
| Blocks used | ``[function quest1() {} quest1()]`` <br/> ``[music.play( (music.createSong(hex`00780004080200`)), music.PlaybackMode.InBackground)]`` <br/> ``[ adventure.addImageToTextLog()]`` |
| Solution option | [Make it Spectacular Project](https://makecode.com/_LW6JyKFvJMuA) |

#### 3. Lives and Gold

| Activity | Lives and Gold (30 min) |
|---|---|
| ![Lives and Gold thumbnail](/static/skillmap/adventure/adventure3.gif) | Finish your game with functions by adding more quests — including danger and rewards! |
| Blocks used | ``[info.setLife(5)]`` <br/> ``[info.changeLifeBy(-1)]`` <br/>``[adventure.changeScoreOverride(adventure.Currency.Coins, 5)]`` |
| Solution option | [Lives and Gold Project](https://arcade.makecode.com/S86685-42080-20608-87423) |



##### Game Mod Ideas

After students complete Code an Adventure they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Add sound effects that happen when the player makes a good or bad choice
- Give your story more choices using the up, down, left, and right keys instead of A & B


### What's Next?

After completing Code an Adventure, students can move on to the following activities:

* [Burstin' Balloons](https://arcade.makecode.com/--skillmap#docs:/skillmap/balloon)
* [Turkey Day](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)


```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.10
```