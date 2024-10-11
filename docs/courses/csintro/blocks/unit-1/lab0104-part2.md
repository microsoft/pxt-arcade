# Part 2: Eat it all!

## We need a hero! @showdialog

In this lab, we will write a game where the player must eat all the food
which appears--while avoiding an enemy which bounces around the screen!

## Hero time!

Now, let's add a hero sprite who will collect the food on the screen.

1.   Add a   
``||variables(sprites):set my sprite to||``
``||sprites:sprite [] of kind Player||``   
to your   
``||loops(noclick):on start||``
container.
1.   Give the variable an appropriate name.
1.   Give your hero sprite an appropriate image.
1.   Add blocks to   
``||loops(noclick):on start||``   
so that the hero sprite:
     -    Starts in the middle of the screen.
     -    Stays on the screen.
     -    Moves with the d-pad buttons.

Check the hint to see the finished code.

```blocks
let heroSprite: Sprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
```

## What is that?

Now, let's add an enemy sprite that the hero needs to avoid.

1.   Add another   
``||variables(sprites):set my sprite to||``
``||sprites:sprite [] of kind Player||``   
to your   
``||loops(noclick):on start||``
container to represent the enemy.
1.   Give the variable an appropriate name.
1.   Give the enemy sprite an appropriate image.
1.   Add blocks to   
``||loops(noclick):on start||``   
so that the enemy sprite:
     -    Starts in a random location.
     -    Moves with a random velocity.
     -    Bounces off of the edges of the screen.

Check the hint to see the finished code.

```blocks
let heroSprite: Sprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
heroSprite.setStayInScreen(true)
controller.moveSprite(heroSprite)
// @highlight
let enemySprite: Sprite = sprites.create(sprites.builtin.forestBat0, SpriteKind.Enemy)
// @highlight
enemySprite.setPosition(randint(8, 152), randint(8, 112))
// @highlight
enemySprite.setVelocity(randint(25, 50), randint(25, 50))
// @highlight
enemySprite.setBounceOnWall(true)
```

## Run!

Now, we need something to happen when your enemy sprite touches your hero sprite.

1.   From the ``||sprites:Sprites||`` drawer, add an   
``||sprites:on||`` ``||variables(sprites):sprite||``
``||sprites:of kind (Player) overlaps||`` ``||variables(sprites):otherSprite||``
``||sprites:of kind (Player)||``   
to your workspace.
1.   Change the kind for   
``||variables(noclick):otherSprite||``   
to   
``||sprites(noclick):Enemy||``.
1.   Read the text in this block out loud. It should say:   
``||sprites(noclick):on sprite of kind Player overlaps otherSprite of kind Enemy||``.
1.   Check the hint to make sure your block looks correct.

This container block is called an **event handler**. You will learn more
about these kinds of blocks in another lab.

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
```

## Jump out of the way!

Let's make the enemy sprite jump to a new location on the screen whenever it
collides with our hero sprite.

1.   In the ``||sprites(noclick):on overlap||`` container that you just added to
the workspace, add blocks that:
     * Moves the enemy to a random location.
     * Moves the enemy with a new, random velocity.

In your new blocks, drag the   
``||variables(noclick):otherSprite||``   
block from the
top of the   
``||sprites(noclick):on overlap||``   
block to the blocks that change the
enemy sprite.

Use the hint to see a screenshot of this and to check your code.

Play your game in the simulator to see what happens when the enemy sprite
collides with your hero!

![Using a local variable from a function header.](https://alex-kulcsar.github.io/introcs-tutorials/assets/images/S01.L01.04.P02.function_use_local_variable.png)

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(25, 50), randint(25, 50))
})
```

## Eat the fruit

Now, let's make the fruit disappear when the hero eats it.

1.    Refer to the previous step to add a new ``||sprites:on overlap||``
block to your workspace.
1.    Change the block so that it says the following:   
``||sprites(noclick):on sprite of kind Player overlaps otherSprite of kind Food||``.
1.    In your new   
``||sprites(noclick):on overlap||``   
container,
add a block that
deletes the food sprite with some sort of effect.

Use the hint to check your code.

Play your game, eat some fruit, and avoid the enemy!

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
```

## Complete

Good work! Now, we need to keep track of score and lives.
Onward to Part 3!

```template
let foodSprite: Sprite = null
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
