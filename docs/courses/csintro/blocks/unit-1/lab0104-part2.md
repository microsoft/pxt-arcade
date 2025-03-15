# Part 2: Eat it all!
### @explicitHints true

## We need a hero! @showdialog

In this lab, we will write a game where the player must eat all the food
which appears—while avoiding an enemy which bounces around the screen!

## Hero time!

Let's add a hero sprite who will collect the food on the screen.

---

1. Make sure there is an empty<br/>
``||loops:on start||`` <br/>
container in the workspace. 
1.   Add a <br/>
``||variables(sprites):set [mySprite] to sprite [] of kind [Player]||`` <br/>
to the<br/>
``||loops(noclick):on start||`` <br/>
container.
1.   Give the variable an appropriate name.
1.   Give your hero sprite an appropriate image.
1.   Add blocks to<br/>
``||loops(noclick):on start||`` <br/>
so that the hero sprite:
     -    Starts somewhere other than the middle of the screen
     -    Moves with the d-pad buttons
     -    Stays on the screen as it moves


---

Check the hint to see the finished code for this step.


#### ~ tutorialhint

```blocks
//@highlight
let heroSprite: Sprite = sprites.create(sprites.castle.princessFront2, SpriteKind.Player)
//@highlight
heroSprite.setPosition(40, 80)
//@highlight
controller.moveSprite(heroSprite)
//@highlight
heroSprite.setStayInScreen(true)

game.onUpdateInterval(3000, function () {
    let foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```

## What is that?

Time to add an enemy sprite that the hero needs to avoid.

---

1.   Add another   <br/>
``||variables(sprites):set [mySprite] to sprite [] of kind [Player]||`` <br/>
to your <br/>
``||loops(noclick):on start||`` <br/>
container to represent the enemy.
1.   Give the variable an appropriate name.
1.   Give the enemy sprite an appropriate image.
1.   Add blocks to <br/>
``||loops(noclick):on start||``  <br/>
so that the enemy sprite:
     -    Starts in a random location
     -    Moves with a random velocity
     -    Bounces off of the edges of the screen


---

Check the hint to see the finished code for this step.



#### ~ tutorialhint

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

We need something to happen when your enemy sprite touches your hero sprite.

---

1.   From the ``||sprites:Sprites||`` drawer, add <br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||`` <br/>
to your workspace.
1.   Change the kind for <br/>
``||variables(noclick):otherSprite||`` <br/>
to  <br/>
``||sprites(noclick):Enemy||``.
1.   Read the text in this block out loud. It should now say:   
``||sprites(noclick):on sprite of kind Player overlaps otherSprite of kind Enemy||``.
1.   Check the hint to make sure your block looks correct.

---

This type of container block is called an **event handler**. You will learn more
about these kinds of blocks in another lab.


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
```

## Jump out of the way!

Let's make the enemy sprite jump to a new location on the screen whenever it
collides with our hero sprite.

---

1.   In the ``||sprites(noclick):on overlap||`` container that you just added to
the workspace, add blocks that:
     * Move the enemy to a random location.
     * Move the enemy with a new, random velocity.


Play your game in the simulator to see what happens when the enemy sprite
collides with your hero!

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(8, 152), randint(8, 112))
    otherSprite.setVelocity(randint(25, 50), randint(25, 50))
})
```

## Eat the fruit

Now, let's make the fruit disappear when the hero eats it.

---

1.    Refer to the previous step to add a new ``||sprites:on overlap||``
block to your workspace.
1.    Change the block so that it says the following:   
``||sprites(noclick):on sprite of kind Player overlaps otherSprite of kind Food||``.
1.    In your new 
``||sprites(noclick):on overlap||`` 
container, add a block that
destroys the food sprite with some sort of effect.
1. Drag the
``||variables(noclick):otherSprite||``
 value from the title of the new
``||sprites(noclick):on overlap||`` 
container in to become the new variable name for the  
``||sprites(noclick):destroy||`` 
block.


![Using a local variable from a function header.](/static/courses/csintro/othersprite-lab1-4-3.gif)



~hint Wait! Why didn't we do that before?

---

Sometimes, you only have one sprite with a given name. In this game, that's true for your enemy.

Because you only have one enemy sprite in this game, you know exactly which sprite will be affected when you
tell the computer to move ``||variables(noclick):enemySprite||`` around. 

In this game, we have dozens of instances of ``||variables(noclick):foodSprite||``! 
So how is the computer to know which one to destroy? 

The ``||sprites(noclick):on overlap||`` block gives us a very clever way to make sure
that the computer is picking the _**exact**_ Food that overlapped with the Player. It assigns it a new name!

By dragging out the ``||variables(noclick):othersprite||`` value, you now have a way to 
make sure that only the exact Food that overlapped the Player is affected.  Pretty cool, huh?


hint~



#### ~ tutorialhint

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
```


## Play!  @showdialog

Play your game, eat some fruit, and avoid the enemy!



## Complete

Good work! In Part 3, we will begin to keep track of score and lives.


```template


game.onUpdateInterval(3000, function () {
    let foodSprite = sprites.create(sprites.food.smallApple, SpriteKind.Food)
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
