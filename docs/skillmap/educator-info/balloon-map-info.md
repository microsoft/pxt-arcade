# Burstin' Balloons

**A page for Educators & Parents**

The **Burstin' Balloons** skillmap introduces simple game design and computer science concepts through the creation of a competetive balloon bursting game.

In this set of activities, students will create a simple clicker with MakeCode Arcade.  This map is intended for students who are new to MakeCode with little previous coding experience.

Designed for students between the ages of 10 & 15, this experience contains a total of 3 main tutorials (approximating 50 minutes of instruction) and one optional tutorial  (approximating 30 minutes of instruction).  At the end of level 3, students receive a certificate of completion and a badge.

|                 | Minutes* |  Key Concepts |
| --------------- | -------- |  ------------ |
| Create a Clicker    |15  |  events, pints, timer |
| Burst Your Balloon   |15 |  sprites, scale, events |
| Pump it Up   |20  |  animation, events |
| Two Player Party   |30  |  review |


\* Minutes are approximate, based on time to follow instructions as written. Providing extra time for creativity and debugging is encouraged. Note that intermediate users and older students are likely to move through nearly twice as fast.

### Objectives

After completing **Burstin' Balloons**, students will have gained exposure to all the elements they need to successfully create their own clicker game using MakeCode Arcade.

Specifically, they will experience the following topics:

#### Computer Science Concepts

- Events and program control flow
- User input
- Variables


#### Game Design Concepts

- Sprites
- Scaling
- Game Score
- Win/Loss Criteria
- Animation



controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(mySprite2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    info.player2.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myMouse.setImage(assets.image`mouse1-down`)


})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    game.over(true)
})

scene.setBackgroundColor(1)
let booth = sprites.create(assets.image`booth`, SpriteKind.Booth)
mySprite = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
mySprite2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)






#### 1. Create a Clicker

| Activity | Create a Clicker (15 min) |
|---|---|
| ![Create a Clicker thumbnail](/static/skillmap/balloon/balloon1.gif) | Learn to use MakeCode Arcade and create a simple clicker game. |
| Blocks used | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.startCountdown(10)]``<br/>``[info.player1.changeScoreBy(1)]``|
| Solution option | [Create a Clicker Project](https://makecode.com/_d6TdD8VYPX1U) |

#### 2. Burst Your Balloon

| Activity | Burst Your Balloon (15 min) |
|---|---|
| ![Burst Your Balloon thumbnail](/static/skillmap/balloon/balloon2.gif) | Add a balloon that inflates as you click! You'll be shocked to see how full it gets before time runs out. |
| Blocks used | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> `` [let myMouse: Sprite = null; myMouse.setPosition(50, 93)]`` <br/> ``[scaling.scaleByPixels(mySprite, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)]`` <br/>``[game.over(true)]`` |
| Solution option | [Burst Your Balloon Project](https://makecode.com/_WY823cfoyTwj) |

#### 3. Pump it Up

| Activity | Pump it Up (20 min) |
|---|---|
| ![Pump it Up thumbnail](/static/skillmap/balloon/balloon3.gif) | Add a carnival character to pump up your balloon! Can you beat the clock? |
| Blocks used | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution option | [Pump it Up Project](https://makecode.com/_3gs2oWTCHXuw) |


#### 4. Two Player Party

| Activity | Two Player Party (30 min) |
|---|---|
| ![Two Player Party thumbnail](/static/skillmap/balloon/balloon4.gif) | Remove your timer and add a second player to create a real-life competition! |
| Blocks used | ``[let projectile = sprites.createProjectileFromSprite([img`.`, img`.`]._pickRandom(), clapping, randint(-100, 100), randint(-50, -100))]`` |
| Solution option | [Two Player Party Project](https://makecode.com/_aK1XDbamoH20) |


##### Game Mod Ideas

After students complete **Burstin' Balloons** they can head back to the skillmap and click "SAVE TO MY PROJECTS", which will open the game in a window with a full-featured toolbox. Here are some modifications they can try:

- Change the animals pumping up the balloons to something new.
- Make the balloons get bigger even faster for a quicker game.
- Add a sound-effect each time the balloon gets bigger.


### What's Next?

After completing Burstin' Balloons, students can move on to the following activities:

* [Build a Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space)
* [Monster Racer](https://arcade.makecode.com/--skillmap#docs:/skillmap/racer)


```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
`