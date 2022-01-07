# About Turkey Day

**A page for Educators & Parents**

**Turkey Day** introduces MakeCode Arcade game design elements.

In this set of activities, students will create their own jumpy platformer with
MakeCode Arcade.  This map is intended for students who are new to MakeCode with little or no previous coding experience.
Through step-by-step instructions, students will
build a game where they guide their turkey to freedom, rescuing friends along the way.

Designed for students between the ages of 10 & 16, this experience contains a total of 3 tutorials (approximating 25 minutes of instruction.)
At the end of this learning path, students receive a certificate of completion.

|                 | Minutes* | Key Concepts |
| --------------- | -------- | ------------ |
| Move the Turkey | 10 | movement, acceleration, events, gravity |
| Gather a Crowd | 10 | overlap, game score |
| Win or Lose | 5 | timers, win conditions |

\* Minutes are approximate, based on time to follow instructions as written. Times do not include time spent on designing elements or re-aquainting with previously-written code. Providing extra time for creativity and debugging is encouraged.

### Objectives

After completing Turkey Day, students will have gained exposure to multiple arcade platformer game concepts using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events
- User Input

#### Game Design Concepts

- Movement
- Acceleration
- Gravity
- Asset Creation
- Projectiles

### Projects

As students progress through these projects, they will progressively build their game. They will witness the turkey's evolution from a simple creature that can only move around
to a jump _master_ who rescues fellow birds for points.

#### 1. Move the Turkey

| Activity | Move the Turkey (10 min) |
|---|---|
| ![Move the Turkey thumbnail](/static/skillmap/turkey/turkey1.gif) | Set up your turkey's side-to-side and jump movements. |
| Blocks used | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite, 0, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 0]``<br/>``[scene.cameraFollowSprite(mySprite)]``<br/>``[controller.A.onEvent()]`` |
| Solution option | [Move the Turkey Project](https://makecode.com/_awyEh4E58XEK) |

#### 2. Gather a Crowd

| Activity | Gather a Crowd (10 min) |
|---|---|
| ![Gather a Crowd thumbnail](/static/skillmap/turkey/turkey2.gif) | Earn points and save turkeys from their cages. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[info.changeScoreBy()]`` <br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` <br/>``[let turkey: Sprite=null;tiles.placeOnTile(turkey, location)]``  <br/>``[let turkey: Sprite=null;turkey.follow(mySprite)]``|
| Solution option | [Gather a Crowd](https://makecode.com/_eH5FKDRqV9Dd) |

#### 3. Win or Lose

| Activity | Win or Lose (5 min) |
|---|---|
| ![Win or Lose thumbnail](/static/skillmap/turkey/turkey3.gif) | Add win and loss conditions. |
| Blocks used | ``[scene.onOverlapTile()]``<br/>``[game.over(true)]``<br/>``[info.onCountdownEnd()]`` <br/>``[info.startCountdown(120)]`` |
| Solution option | [Win or Lose Project](https://makecode.com/_3a81pJ6t1dHX) |



##### Game Mod Ideas

As students complete the skillmap, we encourage them to plan out how they want to modify
this game to best suit their interests. Consider the following questions:

- What kind of world would I want to explore? Redesign the scene with your chosen environment!
- What is an animal or creature that would fit in to this world? Replace the turkey with your chosen creature!
- What kinds of objects would my character collect? How can I creatively build them in?