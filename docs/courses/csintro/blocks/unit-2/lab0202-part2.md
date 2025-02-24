# Lab 2.2 Part 2: How Many Items?
### @explicitHints true

## How many items? @showdialog

Let's look at another way that we can use variables.

In this project, we will use a variable to keep track of how many sprites
are on the screen.

![Lab 2.2.2](https://arcade.makecode.com/api/_LoRf3w2ruPUc/thumb)

## Let's find a hero!

First, let's create a hero for our story.

---

Create your hero sprite using an appropriate name and image. 

Add blocks to your project so that your hero:

-    Is controlled by the player with the directional pad
-    Stays on the screen at all times

---


Check the hint if you need help and to verify your code.

#### ~ tutorialhint

```blocks
let heroSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
```

## Add some sprites!

Now, let's add more sprites to the screen whenever the player to.


---

Add an event handler to your project so that, whenever the player
presses the **A** button, a new sprite appears. Make sure each new sprite:

-    Has an appropriate variable name
-    Has an image assigned to it
-    Has a kind other than _Player_ assigned to it
-    Appears at a random location on the screen

---


Run your project to see if it works as you expect it to.
Check the hint if you need help.

#### ~ tutorialhint

```blocks
let foodSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    foodSprite = sprites.create(sprites.food.smallStrawberry, SpriteKind.Food)
    foodSprite.setPosition(randint(8, 152), randint(8, 112))
})
```

## Story time!

Let's create a simple story for your project.

---

Add a splash screen at the start of your game
that explains your story.

-    Who is your hero?
-    What are the objects that your hero is adding to the screen?
-    Why is that happening?

---


When you have added a story to your game, move on to the next step.

#### ~ tutorialhint

```blocks

game.splash("I'm a hungry duck who needs strawberries so I can fuel up for my long flight!")
let heroSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
```

## Count 'em up!

Now, let's keep track of how many items the player has added to the screen.

---


1.   Make a new variable for your project. This variable will store
the total number of sprites the player has created. Give the variable
an appropriate name.
1.   Add a block to your <br/>
``||loops(noclick):on start||`` <br/>
container that sets
the initial value of the variable to zero.
1.   In your event handler for the **A** button, add a block to increment your new variable.

---


~hint What's "increment" again?

---

When we increase the value of a variable by one, we often say that we are
"incrementing" the variable.

(Although, it's also possible to increment by 3, 5, 10, or even 1000.)

hint~

We've created the variable, but we aren't using it yet. We'll do that next!

#### ~ tutorialhint

```blocks
let foodCount = 0
let foodSprite: Sprite = null
game.splash("I'm a hungry duck who needs strawberries so I can fuel up for my long flight!")
let heroSprite = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(heroSprite)
//@highlight
foodCount = 0

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

---

Add an event handler for the **B** button to your workspace.

In your event handler:

-    Use a
``||game:splash||``
block or a
``||sprites:say||``
block to display the value of your variable.
-    Feel free to use a
``||text:join||`` block to make your message more interesting!

---


Run your project to see if it works as expected.
Check the hint if you need some help.

#### ~ tutorialhint

```blocks
let foodCount = 0
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("I see " + foodCount + " strawberries!")
})
```

## Pick up after yourself!

Now, let's say that the player can pick up objects, too.

---


1.   Add an <br/>
``||sprites:on overlap||`` <br/>
event handler to your workspace.
1.   Change the block so that it runs when the Player collides with your other sprite kind.
1.   In the event handler, destroy the other sprite when the player touches it.
1.   Remember to decrement your counting variable!

---


Run your project to see if it works as expected.
Check the hint if you need some help.

~hint What's "decrement" again?

---

When we decrease the value of a variable by one, we often say that we are
"decrementing" the variable.

(Though we _can_ decrement by other numbers, as well.)

hint~

#### ~ tutorialhint

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