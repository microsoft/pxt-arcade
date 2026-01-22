# Space Adventure
### @explicitHints true

## Introduction @showdialog

Welcome, Space Captain! 🚀

In this tutorial, you'll create an exciting space adventure game where you pilot a spaceship, dodge asteroids, collect power-ups, and try to survive as long as possible!

![Space Adventure Game](/static/tutorials/chase-the-pizza/chasing.gif)

## {Step 1}

**Let's start with the background**

First, we need to set the scene for our space adventure.

---

- :tree: Open the ``||scene:Scene||`` category and drag<br/>
``||scene:set background color to [ ]||``<br/>
into **the empty** ``||loops(noclick):on start||`` container already in your workspace.

- :mouse pointer: Choose a dark color like black or dark blue to represent space.

💡 _Space is dark, so a black background will make your game look more realistic!_

#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundColor(15)
```

## {Step 2}

**Create your spaceship sprite**

Every space captain needs a spaceship!

---

- :paper plane: Open ``||sprites:Sprites||`` and drag<br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

- :mouse pointer: Click on the empty grey square to open the **Sprite Editor**.

- :mouse pointer: Draw your spaceship or click the **Gallery** tab to choose a pre-made spaceship design.

~hint What should my spaceship look like? 🤷

---

Your spaceship can be anything! Try drawing a classic rocket shape, a futuristic spacecraft, or even a UFO. Make it colorful so it stands out against the dark space background.

hint~

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(15)
// @highlight
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . 2 2 . . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . 2 2 2 1 1 1 1 2 2 2 . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 . . . . . . . . 2 2 . .
. . 2 . . . . . . . . . . 2 . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Step 3}

**Make your spaceship controllable**

Now let's make your spaceship move with the game controls!

---

- :game: Open ``||controller:Controller||`` and drag<br/>
``||controller:move [mySprite] with buttons||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

~hint What does this do? 💡

---

This block allows you to control your spaceship using:
- **Arrow keys** on your keyboard
- **D-pad** on the game controller in the simulator

You can move up, down, left, and right!

hint~

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . 2 2 . . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . 2 2 2 1 1 1 1 2 2 2 . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 . . . . . . . . 2 2 . .
. . 2 . . . . . . . . . . 2 . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## {Step 4}

**Keep your spaceship on screen**

We don't want our spaceship to fly off into deep space!

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:set [mySprite] stay in screen <ON>||``<br/>
into **the end of** the ``||loops(noclick):on start||`` container.

This will keep your spaceship within the boundaries of the game screen.

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . 2 2 . . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . 2 2 2 1 1 1 1 2 2 2 . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 . . . . . . . . 2 2 . .
. . 2 . . . . . . . . . . 2 . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
mySprite.setStayInScreen(true)
```

## {Step 5}

**Test your game!**

---

- :binoculars: Look at the game window in the bottom right corner.

Try moving your spaceship around with the arrow keys or controller. Does it move smoothly? Does it stay on the screen?

![Look for the game window](/static/tutorials/chase-the-pizza/game.png)

## {Step 6}

**Add some asteroids!**

What's a space adventure without obstacles? Let's add asteroids that your spaceship needs to dodge.

---

- :circle: From ``||game:Game||``, drag<br/>
``||game:on game update every [500] ms||``<br/>
into **an empty area** of the workspace.

- :mouse pointer: Change **500** to **1000** so asteroids appear every second.

~hint What does this do? 💡

---

The ``||game:on game update every||`` block runs the code inside it repeatedly at the interval you set. We'll use this to create asteroids at regular intervals!

hint~

#### ~ tutorialhint
```blocks
// @highlight
game.onUpdateInterval(1000, function () {

})
```

## {Step 7}

**Create asteroid sprites**

Now let's actually create the asteroids!

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables(sprites):set [projectile] to sprite [ ] of kind [Projectile]||``<br/>
into the ``||game:on game update every 1000 ms||`` container.

- :mouse pointer: Click on the empty sprite and draw an asteroid. Try using grey and brown colors to make it look rocky!

~hint Drawing tip 🎨

---

Asteroids are space rocks! They're usually:
- Round or irregular shaped
- Grey, brown, or dark colored
- Bumpy looking (not perfectly smooth)

hint~

#### ~ tutorialhint
```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    // @highlight
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . b b b b b . . . . . .
. . . b b b b c c b b b . . . .
. . b b b c c c c c b b b . . .
. b b b c c c c c c c b b b . .
. b b c c c b b b c c c b b . .
. b b c c b b b b b c c b b . .
. b c c b b b b b b b c c b . .
. b c c b b b b b b b c c b . .
. b b c c b b b b b c c b b . .
. b b c c c b b b c c c b b . .
. b b b c c c c c c c b b b . .
. . b b b c c c c c b b b . . .
. . . b b b b c c b b b . . . .
. . . . . b b b b b . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
})
```

## {Step 8}

**Make asteroids move toward the player**

Static asteroids aren't much of a challenge! Let's make them fly through space.

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:set [projectile] position to x [0] y [0]||``<br/>
into the ``||game:on game update every 1000 ms||`` container, after creating the projectile.

- :mouse pointer: Change the **x** value to ``||math:pick random [0] to [160]||`` from ``||math:Math||``.

This will make asteroids appear at random horizontal positions at the top of the screen!

~hint Show me 🔍

---

The screen width is 160 pixels, so picking a random number between 0 and 160 means asteroids can appear anywhere across the top.

hint~

#### ~ tutorialhint
```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . b b b b b . . . . . .
. . . b b b b c c b b b . . . .
. . b b b c c c c c b b b . . .
. b b b c c c c c c c b b b . .
. b b c c c b b b c c c b b . .
. b b c c b b b b b c c b b . .
. b c c b b b b b b b c c b . .
. b c c b b b b b b b c c b . .
. b b c c b b b b b c c b b . .
. b b c c c b b b c c c b b . .
. b b b c c c c c c c b b b . .
. . b b b c c c c c b b b . . .
. . . b b b b c c b b b . . . .
. . . . . b b b b b . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
    // @highlight
    projectile.setPosition(randint(0, 160), 0)
})
```

## {Step 9}

**Set asteroid velocity**

Now let's make the asteroids move down the screen!

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:set [projectile] velocity vx [0] vy [0]||``<br/>
into the ``||game:on game update every||`` container.

- :mouse pointer: Change **vy** to **50** to make asteroids move downward.

💡 _vx controls horizontal speed (left/right) and vy controls vertical speed (up/down). Positive vy makes sprites move down!_

#### ~ tutorialhint
```blocks
let projectile: Sprite = null
game.onUpdateInterval(1000, function () {
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . b b b b b . . . . . .
. . . b b b b c c b b b . . . .
. . b b b c c c c c b b b . . .
. b b b c c c c c c c b b b . .
. b b c c c b b b c c c b b . .
. b b c c b b b b b c c b b . .
. b c c b b b b b b b c c b . .
. b c c b b b b b b b c c b . .
. b b c c b b b b b c c b b . .
. b b c c c b b b c c c b b . .
. b b b c c c c c c c b b b . .
. . b b b c c c c c b b b . . .
. . . b b b b c c b b b . . . .
. . . . . b b b b b . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
    projectile.setPosition(randint(0, 160), 0)
    // @highlight
    projectile.setVelocity(0, 50)
})
```

## {Step 10}

**Try your game again!**

---

- :binoculars: Watch the game window.

You should see asteroids appearing at the top of the screen and moving downward. But what happens when your spaceship touches an asteroid? Nothing yet! Let's fix that in the next step.

## {Step 11}

**Add collision detection**

When an asteroid hits your spaceship, something should happen!

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``<br/>
into **an empty area** of the workspace.

- :mouse pointer: Change the second kind from **Player** to **Projectile**.

This event will run whenever your spaceship (Player) touches an asteroid (Projectile)!

#### ~ tutorialhint
```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {

})
```

## {Step 12}

**Lose a life when hit**

Getting hit by an asteroid should cost you a life!

---

- :id card: From ``||info:Info||``, drag<br/>
``||info:change life by [-1]||``<br/>
into the ``||sprites:on sprite overlaps||`` container.

- :paper plane: Also from ``||sprites:Sprites||``, drag<br/>
``||sprites:destroy [otherSprite]||``<br/>
right after the change life block.

~hint Why destroy the asteroid? 💡

---

We destroy the asteroid after it hits you so it doesn't take away multiple lives. Each asteroid should only cause damage once!

hint~

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    // @highlight
    info.changeLifeBy(-1)
    // @highlight
    otherSprite.destroy()
})
```

## {Step 13}

**Set starting lives**

Let's give the player 3 lives to start with!

---

- :id card: From ``||info:Info||``, drag<br/>
``||info:set life to [3]||``<br/>
into the ``||loops:on start||`` container, at the end.

Now you'll start with 3 lives. The game will end when you lose all your lives!

#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . 2 2 . . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . 2 2 2 1 1 1 1 2 2 2 . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 . . . . . . . . 2 2 . .
. . 2 . . . . . . . . . . 2 . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
// @highlight
info.setLife(3)
```

## {Step 14}

**Add power-ups for extra points!**

Let's add collectible stars that give you points!

---

- :circle: Create another ``||game:on game update every||`` block, but this time set it to **2000** ms (2 seconds).

This will create power-ups less frequently than asteroids.

#### ~ tutorialhint
```blocks
// @highlight
game.onUpdateInterval(2000, function () {

})
```

## {Step 15}

**Create star sprites**

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||variables(sprites):set [star] to sprite [ ] of kind [Food]||``<br/>
into the new ``||game:on game update every 2000 ms||`` container.

- :mouse pointer: Draw a bright yellow star or choose one from the Gallery.

~hint Star drawing tip ⭐

---

Stars are shiny and bright! Use yellow, gold, or white colors to make them stand out against the dark space background.

hint~

#### ~ tutorialhint
```blocks
let star: Sprite = null
game.onUpdateInterval(2000, function () {
    // @highlight
    star = sprites.create(img`
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . . . 5 5 5 5 5 . . . . . .
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
. . . . . 5 5 5 5 5 . . . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
`, SpriteKind.Food)
})
```

## {Step 16}

**Make stars move**

Just like asteroids, stars should move down the screen.

---

- :paper plane: Add<br/>
``||sprites:set [star] position to||`` and<br/>
``||sprites:set [star] velocity||``<br/>
blocks just like you did for asteroids.

- :mouse pointer: Use ``||math:pick random [0] to [160]||`` for x position and **50** for vy velocity.

#### ~ tutorialhint
```blocks
let star: Sprite = null
game.onUpdateInterval(2000, function () {
    star = sprites.create(img`
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . . . 5 5 5 5 5 . . . . . .
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
. . . . . 5 5 5 5 5 . . . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
`, SpriteKind.Food)
    // @highlight
    star.setPosition(randint(0, 160), 0)
    // @highlight
    star.setVelocity(0, 50)
})
```

## {Step 17}

**Collect stars for points!**

When you collect a star, you should get points!

---

- :paper plane: From ``||sprites:Sprites||``, drag another<br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite]||``<br/>
into an empty area.

- :mouse pointer: Change the second kind to **Food**.

- :id card: From ``||info:Info||``, drag<br/>
``||info:change score by [1]||``<br/>
into this new overlap event.

- :mouse pointer: Change **1** to **10** to give 10 points per star!

- :paper plane: Also add ``||sprites:destroy [otherSprite]||`` so the star disappears when collected.

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
    info.changeScoreBy(10)
    // @highlight
    otherSprite.destroy()
})
```

## {Step 18}

**Add some effects!**

Let's make collecting stars more exciting with effects!

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:start [confetti] effect on [otherSprite]||``<br/>
into the overlap event, right before destroying the star.

- :mouse pointer: Click **confetti** and try different effects like **spray**, **fire**, or **hearts**!

~hint Try different effects! 🎨

---

Effects add visual feedback when you collect items. Try a few and see which one you like best!

hint~

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    // @highlight
    otherSprite.startEffect(effects.spray)
    otherSprite.destroy()
})
```

## {Step 19}

**Add asteroid destruction effects too!**

When asteroids hit your ship, let's add an explosion effect!

---

- :paper plane: In your asteroid overlap event, add<br/>
``||sprites:start [fire] effect on [otherSprite]||``<br/>
before destroying the asteroid.

- :mouse pointer: Try the **fire** or **disintegrate** effect for explosions!

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    // @highlight
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy()
})
```

## {Step 20}

**Make the game more challenging!**

As time goes on, let's make asteroids appear faster!

---

- :circle: From ``||game:Game||``, drag<br/>
``||game:on game update every [500] ms||``<br/>
into an empty area.

- :mouse pointer: Change **500** to **5000** (5 seconds).

- :circle: From ``||game:Game||``, drag<br/>
``||game:change game speed by [0]||``<br/>
into this container.

- :mouse pointer: Change **0** to **5** to gradually increase the difficulty.

~hint What does game speed do? 💡

---

Increasing game speed makes the entire game run faster over time, making asteroids appear more quickly and move faster. This keeps the game challenging!

hint~

#### ~ tutorialhint
```blocks
game.onUpdateInterval(5000, function () {
    // @highlight
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
```

## {Finale}

**🎉 Congratulations, Space Captain! 🎉**

You've created an awesome Space Adventure game!

---

**Your game includes:**
- ✨ A spaceship you can control
- 💫 Asteroids to dodge
- ⭐ Stars to collect for points
- 💥 Cool visual effects
- ❤️ Lives system
- 📈 Score tracking
- 🎮 Increasing difficulty

---

**Try these challenges:**

💡 Make asteroids move at random speeds (use ``||math:pick random||`` for velocity)

💡 Add more types of power-ups with different point values

💡 Create a countdown timer with ``||info:start countdown [30] (s)||``

💡 Make your spaceship shoot projectiles when you press a button!

💡 Add background music from the ``||music:Music||`` category

---

When you're ready to share, click **Done** to show your game to friends and family!

```blockconfig.global
let star: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null

scene.setBackgroundColor(15)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)
info.changeLifeBy(-1)
info.changeScoreBy(10)

game.onUpdateInterval(1000, function () {})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})

projectile.setPosition(randint(0, 160), 0)
projectile.setVelocity(0, 50)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
otherSprite.destroy()
otherSprite.startEffect(effects.spray)
```

```ghost
let star: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null

scene.setBackgroundColor(15)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . 2 2 . . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . . 2 2 2 2 . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . . 2 1 1 1 1 2 . . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . . 2 2 1 1 1 1 2 2 . . . .
. . . 2 2 2 1 1 1 1 2 2 2 . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 . . . . . . . . 2 2 . .
. . 2 . . . . . . . . . . 2 . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)

game.onUpdateInterval(1000, function () {
    projectile = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . b b b b b . . . . . .
. . . b b b b c c b b b . . . .
. . b b b c c c c c b b b . . .
. b b b c c c c c c c b b b . .
. b b c c c b b b c c c b b . .
. b b c c b b b b b c c b b . .
. b c c b b b b b b b c c b . .
. b c c b b b b b b b c c b . .
. b b c c b b b b b c c b b . .
. b b c c c b b b c c c b b . .
. b b b c c c c c c c b b b . .
. . b b b c c c c c b b b . . .
. . . b b b b c c b b b . . . .
. . . . . b b b b b . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
    projectile.setPosition(randint(0, 160), 0)
    projectile.setVelocity(0, 50)
})

game.onUpdateInterval(2000, function () {
    star = sprites.create(img`
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . . . 5 5 5 5 5 . . . . . .
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
. . . . . 5 5 5 5 5 . . . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
. . . . . . . 5 5 . . . . . . .
`, SpriteKind.Food)
    star.setPosition(randint(0, 160), 0)
    star.setVelocity(0, 50)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.startEffect(effects.spray)
    otherSprite.destroy()
})

game.onUpdateInterval(5000, function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
```
