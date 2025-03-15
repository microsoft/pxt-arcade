# Lab 2.5 Part 3: Magic Four Ball!
### @explicitHints true

## Magic four ball! @showdialog

Some people need help making big decisions.
You can help them by making a magic four ball.
It's like a magic eight ball, but with only four answers! 

![Lab 2.5.3](https://arcade.makecode.com/api/_59T26bVHiHV8/thumb)

## Ask me anything (again)!

Let's set the scene so that the player has a character to talk to.

---


1.  In your <br/>
``||loops(noclick):on start||`` <br/>
container, create a sprite that represents
the fortune teller.
    -   Give the sprite variable an appropriate name
    -   Give the sprite an appropriate image
    -   Make the sprite say something like,
        "Think of a question, then press the A button."

---


Run your program and see if it behaves as expected.

Check the hint if you need some help.

#### ~ tutorialhint

```blocks
let fortuneTellerSprite: Sprite = null
scene.setBackgroundColor(1)
fortuneTellerSprite = sprites.create(lab2imgs.crystal_ball, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```

## The future is ... anything!

Now, let's respond to the player's question with a random response.

---


Add an <br/>
``||controller:on (A) button (pressed)||`` <br/>
container to your
workspace. All of the following blocks will go in this container.
1.  Create a new variable called **answer**.
1.  Set this new variable to a random number from 1 to 4.
Remember that the <br/>
``||math:pick random||`` block is in the
``||math:Math||`` drawer.
1.  Add an <br/>
``||logic:if (true) then [] else []||`` <br/>
container.
1.  Select the **(+)** plus sign to add enough branches to your <br/>
``||logic(noclick):if / else||`` <br/>
container to handle four different options.
1.  Add enough conditionals from the ``||logic(noclick):Logic||`` drawer to your <br/>
``||logic(noclick):if / else||`` container to make the branches say
something like <br/>
``||logic(noclick):if < answer = (1) > then||``
1.  In each branch of the <br/>``||logic(noclick):if / else||`` container, make the fortune teller say a different message.
    -   Make each message unique
    -   Be creative!
    -   Try to have an equal number of positive and negative responses

---


Run your program and see if it behaves as expected.

Check the hint if you need some help.

#### ~ tutorialhint

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
scene.setBackgroundColor(1)
fortuneTellerSprite = sprites.create(lab2imgs.crystal_ball, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```

## Complete @showdialog

Great work!   
🎈 🎈 🎈

What are some other ways that you could use conditional statements?




```package
lab2imgs=github:kiki-lee/lab2imgs#v0.0.2
```

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
scene.setBackgroundColor(1)
fortuneTellerSprite = sprites.create(lab2imgs.crystal_ball, SpriteKind.Player)
fortuneTellerSprite.sayText("Think of a question, then press the A button.")
```
