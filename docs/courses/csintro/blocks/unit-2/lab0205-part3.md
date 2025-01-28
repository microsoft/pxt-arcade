# Lab 2.5 Part 3: Magic Four Ball!

## Magic four ball! @showdialog

Some people need help making big decisions.
You can help them by making a magic four ball.
It's like a magic eight ball, but with only four answers! 

## Ask me anything (again)!

Let's set the scene so that the player has a character to talk to.

1.  In your   
``||loops(noclick):on start||``   
container, create a sprite that represents
the fortune teller.
    -   Give the sprite variable an appropriate name.
    -   Give the sprite an appropriate image.
    -   Make the sprite say something like,
        "Think of a question, then press the A button."

Run your program and see if it behaves as expected.
Check the hint if you need some help.

```blocks
let fortuneTellerSprite: Sprite = null
scene.setBackgroundColor(9)
fortuneTellerSprite = sprites.create(sprites.builtin.villager1WalkFront1, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```

## The future is ... anything!

Now, let's respond to the player's question with a random response.

1.  Add a   
``||controller:on (A) button (pressed)||``   
container to your
workspace. All of the following blocks will go in this container.
1.  Create a new variable called **answer**.
1.  Set this new variable to a random number from 1 to 4.
Remember that the   
``||math:pick random||`` block is in the
``||math:Math||`` drawer.
1.  Now, add an   
``||logic:if (true) then [] else []||``   
block.
1.  Select the **(+)** plus sign to add enough branches to your   
``||logic(noclick):if||``   
block to handle four different options.
1.  Add blocks to your   
``||logic(noclick):if||``   
block to make each branch say
something like   
``||logic(noclick):if||`` ``||variables(noclick):answer||``
``||logic(noclick): = (1) then||``
1.  In each branch of the   
``||logic(noclick):if||``   
block, make the fortune teller say a different message.
    -   Make each message unique.
    -   Be creative!
    -   Try to have an equal number of positive and negative responses.

Run your program and see if it behaves as expected.
Check the hint if you need some help.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    option = randint(1, 4)
    if (option == 1) {
        fortuneTellerSprite.sayText("Signs look good!")
    } else if (option == 2) {
        fortuneTellerSprite.sayText("Not very likely.")
    } else if (option == 3) {
        fortuneTellerSprite.sayText("Could be!")
    } else {
        fortuneTellerSprite.sayText("Try again later.")
    }
})
let option = 0
let fortuneTellerSprite: Sprite = null
scene.setBackgroundColor(9)
fortuneTellerSprite = sprites.create(sprites.builtin.villager1WalkFront1, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```

## Complete @showdialog

Good work! What are some other ways that you could use conditional statements?

```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    option = randint(1, 4)
    if (option == 1) {
        fortuneTellerSprite.sayText("Signs look good!")
    } else if (option == 2) {
        fortuneTellerSprite.sayText("Not very likely.")
    } else if (option == 3) {
        fortuneTellerSprite.sayText("Could be!")
    } else {
        fortuneTellerSprite.sayText("Try again later.")
    }
})
let option = 0
let fortuneTellerSprite: Sprite = null
scene.setBackgroundColor(9)
fortuneTellerSprite = sprites.create(sprites.builtin.villager1WalkFront1, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```
