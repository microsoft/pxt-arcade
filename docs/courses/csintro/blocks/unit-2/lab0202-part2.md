# Lab 2.2 Part 2: How Many Items?

## How many items? @showdialog

Let's look at another way that we can use variables.

In this project, we will use a variable to keep track of how many sprites
are on the screen.

## Let's find a hero!

First, let's create a hero for our story.

Create your hero sprite. Add block to your project so that your hero:

-    Has an appropriate variable name.
-    Has an image assigned to it.
-    Is controlled by the player with the directional pad.
-    Stays on the screen.

Check the hint if you need help and to verify your code.

```blocks
let heroSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
```

## Add some sprites!

Now, let's add a sprite to the screen whenever the player wants one.

Add an event handler to your project so that, whenever the player
presses the **A** button, a new sprite appears. Make sure the new sprite:

-    Has an appropriate variable name.
-    Has an image assigned to it.
-    Has a kind assigned to it (anything except *Player*).
-    Appears at a random location on the screen.

Run your project to see if it works as you expect it to.
Check the hint if you need help.

```blocks
let foodSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodSprite = sprites.create(sprites.food.smallStrawberry, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```

## Story time!

Let's create a simple story for your project.

-    Who is your hero?
-    What are the objects that your hero is adding to the screen?
-    Add an appropriate splash screen at the start of your game
that explains your story.

When you have added a story to your game, move on to the next step.

## Count 'em up!

Now, let's keep track of how many items the player has added to the screen.

1.   Make a new variable for your project. This variable will store
the number of sprites that the player has created. Give the variable
an appropriate name.
1.   Add a block to your   
``||loops(noclick):on start||``   
container that sets
the value of the variable to zero.
1.   In your event handler for the **A** button, add a block that changes
the value of your variable by **1**.

~hint What is a increment?
When we increase the value of a variable by one, we often say that we are
"incrementing" the variable.
hint~

We've created the variable, but we aren't using it yet. We'll do that next!

```blocks
let foodSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodSprite = sprites.create(sprites.food.smallStrawberry, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
    // @highlight
    foodCount += 1
})
```

## You don't say!

Let's show a message whenever the player wants to know how many sprites
are on the screen.

Add an event handler for the **B** button to your workspace.
In your event handler:

-    Use a   
``||game:splash||``   
block or a   
``||sprites:say||``   
block to display the value of your variable.
-    Feel free to use a   
**join** block to make your message more interesting!

Run your project to see if it works as expected.
Check the hint if you need some help.

```blocks
let foodCount = 0
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("I see " + foodCount + " strawberries!")
})
```

## Pick up after yourself!

Now, let's say that the player can pick up objects, too.

1.   Add an   
``||sprites:on overlap||``   
event handler to your workspace.
1.   Change the block so that it runs when the player collides with another sprite.
1.   In the event handler, destroy the sprite when the player touches it.
1.   Remember to update your counting variable!

Run your project to see if it works as expected.
Check the hint if you need some help.

~hint What is a decrement?
When we decrease the value of a variable by one, we often say that we are
"decrementing" the variable.
hint~

```blocks
let foodCount = 0
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    foodCount += -1
})
```

## Complete! @showdialog

Good work! You have learned a few ways to use variables!

Submit your project to your instructor if requested to do so.

```ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("I see " + foodCount + " strawberries!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodSprite = sprites.create(sprites.food.smallStrawberry, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
    foodCount += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    foodCount += -1
})
let foodSprite: Sprite = null
let foodCount = 0
foodCount = 0
let heroSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
heroSprite.say("Hi!")
```