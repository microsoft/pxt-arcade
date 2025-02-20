💡# Part 3: Points! Lives!
### @explicitHints true

## Scores and lives @showdialog

Your game has a player, an enemy, and some food to eat.
Now, let's track the player's score and lives.

## Get started!

Let's give the player a starting score and set of lives at the start of the game.

---

From the ``||info:Info||`` drawer, add the following blocks to your
``||loops(noclick):on start||`` container:

-    ``||info:set score to [0]||``
-    ``||info:set life to [3]||``

---

Feel free to change these values if you want the player to start with a
different score or a different number of lives.

#### ~ tutorialhint

```blocks
let heroSprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
let enemySprite = sprites.create(sprites.builtin.forestBat0, SpriteKind.Enemy)
enemySprite.setPosition(randint(8, 152), randint(8, 112))
enemySprite.setVelocity(randint(25, 50), randint(25, 50))
enemySprite.setBounceOnWall(true)
// @highlight
info.setScore(0)
// @highlight
info.setLife(3)
```

## Whoops!

Now, let's make the player lose a life when they collide with the enemy.

---

From the ``||info:Info||`` drawer, drag<br/>
``||info:change life by [-1]||`` <br/>
into the appropriate <br/>
``||sprites(noclick):on overlap||`` <br/>
container in your workspace.

---

Play your game and make sure you lose a life when you collide into the enemy.

---

**Question**

1.   What happens in the game when you run out of lives?

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(25, 50), randint(25, 50))
    // @highlight
    info.changeLifeBy(-1)
})
```

## What's the score?

Now, let's increase the player's score whenever they eat food.

---

From the ``||info:Info||`` drawer, drag <br/>
``||info:change score by [1]||`` <br/>
into the appropriate   
``||sprites(noclick):on overlap||`` <br/>
container.

---

Feel free to change the value in the
block to add different amount to the player's score
when they eat food.

**Play your game and make sure you earn points whenever you eat food.**

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    // @highlight
    info.changeScoreBy(1)
})
```

## Complete @showdialog

Good work! Now, make the game your own!

You can:

-    Make **both** the player **and** the enemy relocate when they collide
-    Have the player lose points if the enemy eats food
-    Play a sound when the enemy and player collide, and when the player eats food
-    Design your own sprites
-    Add a background

Can you think of anything else?




```template
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(25, 50), randint(25, 50))
})
let foodSprite: Sprite = null
let heroSprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
let enemySprite = sprites.create(sprites.builtin.forestBat0, SpriteKind.Enemy)
enemySprite.setPosition(randint(8, 152), randint(8, 112))
enemySprite.setVelocity(randint(25, 50), randint(25, 50))
enemySprite.setBounceOnWall(true)
game.onUpdateInterval(3000, function () {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```

```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(25, 50), randint(25, 50))
})
let foodSprite: Sprite = null
let heroSprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
let enemySprite = sprites.create(sprites.builtin.forestBat0, SpriteKind.Enemy)
enemySprite.setPosition(randint(8, 152), randint(8, 112))
enemySprite.setVelocity(randint(25, 50), randint(25, 50))
enemySprite.setBounceOnWall(true)
game.onUpdateInterval(3000, function () {
    foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```
