# Joking Around
### @explicitHints true


## {Introduction @showdialog}

Everyone loves a good joke.
Let's build one we can share with friends.

Making a joke (or a short story) in Arcade is a lot like creating a greeting card.
You can use a background and text to convey a sense of emotion and
add style.

![Here's the story](/static/skillmap/story/story3.gif )


## {Step 2}

To prepare for the next steps,<br/>
[__*click here to choose a joke from our list*__](#doc:/skillmap/story/joke-examples "Find a good two line joke here.")
<br/>...or create your own!

#### ~ tutorialhint
Q: Why do tropical fish swim in saltwater?
A: Because pepper makes them sneeze!




## {Step 3}


Do you have a joke?

**Design your scene**  <br/>
🎨 🎨 🎨

---

- :tree:  From ``||scene:Scene||``, snap
```block
scene.setBackgroundImage(img`.`)
```
into **the empty**<br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.


- :paint brush:  **Click the empty box** to draw a background that shows where your joke takes place. <br/>
Is it the ocean? The sky? A kitchen?





#### ~ tutorialhint

```blocks
// @highlight
scene.setBackgroundImage(assets.image`aquatank`)
```



## {Step 4}

**✨ Great ✨**

Think about the characters at the heart of your joke. <br/>
Who will the reader
expect to see?  A fish? A sky diver? Two muffins?

We can add these characters as **sprites**.

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our main characters will be sprites, too.

hint~

---

- :paper plane:  From ``||sprites: Sprites||``, drag
```block
let mySprite = sprites.create(img`.`, SpriteKind.Player)
```
it into **the end** of the<br/>
 ``||loops(noclick):on start||`` <br/>
 container.


- :mouse pointer:  Create the perfect character for your joke by clicking the empty grey box so you can draw something in the image editor.

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`aquatank`)
// @highlight
let mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)

```



## {Step 5}

**Take a look at the game screen.**

- :binoculars: How does it look? Can you imagine how the joke is going to come together?





## {Step 6}

Use a controller block to let the reader control the flow of the joke.

---


- :game:  From ``||controller:Controller||``, drag
```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```
into **an empty area** of the workspace.



#### ~ tutorialhint

```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```


## {Step 7}

Add the first line of the joke.

---


- :circle:  From ``||game:Game||``, drag
```block
game.showLongText("", DialogLayout.Bottom)
```
into **the empty** <br/>
``||controller(noclick):on [A] button [pressed]||`` <br/>
container that you just added to the workspace.


- :mouse pointer: Add the first line of your joke into the empty text area.

💡 _You can also change where your text shows up by clicking_ ``||game: bottom||`` _and switching that to a different area._



#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
game.showLongText("Knock, knock...", DialogLayout.Bottom)
})
```


## {Step 8}

No matter how you split your joke, you're likely to get the biggest laugh if
your punchline is presented separately at the end.

---

- :pencil:  Write your joke on paper and circle the punchline. It's usually
the last line, and it's the part that makes people laugh.

- :mouse pointer:  Break the rest of the joke up into small sentences. How many text blocks will you need?






## {Step 9}

Add whatever blocks you need into the  <br/>
``||controller(noclick):on [A] button [pressed]||``</br>
container already in the workspace.

You can use <br/>``||game:show long text " "||`` <br/>blocks, or switch it up with some other options.

~hint What are my text options? 💡

---

There are lots of ways you can add text to your project.

---

``||sprites:Sprites||``

```block
    let mySprite: Sprite = null
    mySprite.sayText("What's a punchline?")
```
This the best way to make it look like your character is speaking. Use this block to have text appear as a bubble coming from the sprite.


---

``||carnival:Carnival||``

```block
carnival.addLabelTo(" ", carnival.Areas.Top)
```
This is a great way to add "permanent" text to the top, middle, or bottom of the screen.  The problem is, there's not a way to remove the label if you want to change it.

---


``||game:Game||``

```block
game.splash("")
```
```block
game.showLongText("", DialogLayout.Bottom)
```
Both of these are fantastic options, and they will each go away with another press of the (A) button.

---


hint~


- :mouse pointer:  Experiment with different text blocks to create a joke that flows.

It might take a few tries to discover a layout that makes you laugh, so don't give up!


#### ~ tutorialhint

``` block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
//@highlight
    game.showLongText("If at first you don't succeed...", DialogLayout.Top)
//@highlight
    game.showLongText("...Maybe you shouldn't try skydiving!", DialogLayout.Top)
})
```




## {Step 10}

**Take a minute to look at your joke on the game screen!**

Is it funny?  Does the text overlap anything important on the screen?

---

- :mouse pointer:  If the blocks you're using have options, try different text positions.

Will the text flow better somewhere else?

#### ~ tutorialhint

``` block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("If at first you don't succeed...", DialogLayout.Top)
//@highlight
    game.showLongText("...Maybe you shouldn't try skydiving!", DialogLayout.Bottom)
})
```

## {Step 11}

**🎹 Sound Effects 🎹**

Consider adding sounds or music for more drama.

---

- :mouse pointer:  From ``||music:Music||``, grab any of the <br/>
``||music: play [ ]||`` blocks <br/>
and add them to your project.


- :mouse pointer:  Experiment with the sounds and where to put them to create the biggest impact.

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Why do tropical fish swim in saltwater?", DialogLayout.Top)
    //@highlight
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
game.showLongText("Because, pepper makes them sneeze!", DialogLayout.Bottom)
    })
```


## {Step 12}

**👏 Now take a bow 👏**

End on a high note with confetti or a screen full of smiles.

---

- :mouse pointer:  From ``||scene:Scene||``, grab
```block
effects.confetti.startScreenEffect()
```
and snap it into **the end** of the <br/>
 ``||controller:on [A] button [pressed]||``<br/> container.


- :mouse pointer:  Change **confetti** to whatever gives your joke the biggest punch!

#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Why do tropical fish swim in saltwater?", DialogLayout.Top)
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
game.showLongText("Because, pepper makes them sneeze!", DialogLayout.Bottom)
//@highlight
    effects.bubbles.startScreenEffect()
})
```

## {Finale}

**🤣 Congrats 🤣**

Now you have a hysterical joke to share!


~hint How do I share my joke?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/assets/share.gif )

hint~

When you're done reviewing your joke on the game screen, click **Done** to return to the main page where you can share
with family and friends!

```blockconfig.global
let mySprite: Sprite = null
carnival.addLabelTo(" ", carnival.Areas.Top)
    mySprite.sayText("What's a punchline?")
pauseUntil(() => controller.anyButton.isPressed())
```

```package
carnival=github:microsoft/arcade-carnival#v0.0.7
arcade-animations=github:microsoft/arcade-character-animations
```

```ghost
pause(1000)
pauseUntil(() => controller.anyButton.isPressed())
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        .
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
    game.splash("")
    game.setDialogCursor(img`
        .
        `)
    game.setDialogFrame(img`
        .
        `)
    game.setDialogTextColor(0)
    mySprite.setStayInScreen(true)
    mySprite.setBounceOnWall(true)
    music.setVolume(20)
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Why do tropical fish swim in saltwater?", DialogLayout.Top)
    game.showLongText("Because, pepper makes them sneeze!", DialogLayout.Bottom)
    effects.bubbles.startScreenEffect()
    mySprite.setVelocity(-20, 0)
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`.`)
mySprite = sprites.create(img`.`, SpriteKind.Player)
mySprite.sayText(":)")
mySprite.startEffect(effects.spray)
mySprite.setImage(img`.`)
animation.runImageAnimation(
mySprite,
[img`
    .],
100,
true
)
carnival.addLabelTo("Press (A) for a joke", carnival.Areas.Top, 2)
scene.cameraShake(4, 500)
    mySprite.setVelocity(-20, 0)
scene.setBackgroundColor(1)
```


```assetjson
 {"README.md":" ","assets.json":"","images.g.jres":"{\n    \"image4\": {\n        \"data\": \"hwQnACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADu3d3dDQAAAAAAAAAAAAAAAADQ7e7d3d3dAAAAAAAAAAAAAAAAAN3d3d3d3d0OAAAAAAAAAAAAAADd3d3d3d3d3Q4AAAAAAAAAAAAA0N3d3d3d3d3tDgAAAAAAAAAAAADQ3d3d3d3d3e0OAAAAAAAAAAAAAN3d3d3d3d3d7gAAAAAAAAAAAADQ3d3d3d3d3d3umQAAAAAAAAAAAODe3d3d3d3d3e6ZmQAAAAAAAAAA7t3d3e7d3d3d7ZaZmQkAAAAAAADu3d3t7t3d3d3uZpaZmZkAAAAA4N7d7e4R0d3d3d1mZmaZmQkAAADQ3d3uHhER0d3d3W5pZmaZCQAAAN3d3e4RERHR3d3tbpmZZmYJAAAA3d3d3RHhHtHd3e1umZmZZgkAAADd3d3dHeEe0d3d7W6ZmZmZCQAAAN3d3d3dERHd3d3tbmZmZpYJAAAA3d3d3d3d3d3d3e1mZmlmmQkAAADd3d3d3d3d3d3d7W5mmZmZCQAAANDd3d3d3d3d3d3ubmaZmZkJAAAA0N3d3d0d0d3d3e5uZmZmlgkAAADQ3d3dHRER3d3u7m5mZpaZCQAAANDd3d0R4R7R3e3ubmaZmZkJAAAA0N3d7hHhHtHd3e5mZplmlgkAAADQ7t3tHhER0d3d7WZmZmaZCQAAANDt3d3uERHd3d3tbmZmmQkAAAAAAO3d3e7e3d3d3e1uZpkJAAAAAAAA7d3d7d7d3d3d7W6WAAAAAAAAAADt3t3d3d3d3d3tbgYAAAAAAAAAAN3e3d3d3d3d3e1uAAAAAAAAAAAA0N3d3d3d3d3d7Q4AAAAAAAAAAADQ3d3d3d3d3d3tDgAAAAAAAAAAAADd3d3d3d3d3e0OAAAAAAAAAAAAANDd3d3d3d3d7Q4AAAAAAAAAAAAA0N3d3t3d3d3tAAAAAAAAAAAAAAAAAO3u0N3d7e4AAAAAAAAAAAAAAAAAAA7g0O3uDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"muffin1\"\n    },\n    \"image5\": {\n        \"data\": \"hwQkACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3d3dAAAAAAAAAAAAAAAAAAAAAO7d3d0NAAAAAAAAAAAAAAAAAADQ7d3d3d3uAAAAAAAAAAAAAAAAAN3d3d3d3e4AAAAAAAAAAAAAAADQ3d3d3d3d3Q4AAAAAAAAAAAAAANDd3d3d3d3d7gAAAAAAAAAAAAAA0N3d3d3d3d2emQAAAAAAAAAAAADd3d3d3d3d7W6WmQkAAAAAAAAAAO7d3RHd3d7tbpaZmZkAAAAAAADg3u0dEdHd7u5mZpmZmQAAAAAA4O7d7uEe0d3u7mZmZpmZCQAAAADg3t3u4R7R3e7uZpZmZpYJAAAAANDd3e4REdHd7e5mlpmZlgkAAAAA0N3d7hER0d3t7mZmZpmZCQAAAADQ3d3d3dHd3e3uZpZmlpkJAAAAANDd3d3d3d3d3e5mZmZmmQkAAAAA0N3d3d3d3d3d7mZmZmaZCQAAAADQ3d3d3RHd3d3uZpaZmZkJAAAAANDd3e7tHtHd3e5mZmZmmQkAAAAAAN293u0e0d3d7mZmZmaZCQAAAAAA3e3eERHR3d3uZmaWmZkJAAAAAADg7e4dEdHd3e1mlmlmmQkAAAAAAODe3h0R0d3d7W5mZpaZCQAAAAAA4N7d3RHd3d3tbmaWmZkAAAAAAAAA3t3d3d3d3e1mmZkJAAAAAAAAAADe3d3d3d3d7WaZAAAAAAAAAAAAAN3d3d3d3d3tAAAAAAAAAAAAAAAA3d3d3d3d3e4AAAAAAAAAAAAAAADQ3d3d3d3d7gAAAAAAAAAAAAAAAAAA3d3d3d0OAAAAAAAAAAAAAAAAAADQ3e3eAAAAAAAAAAAAAAAAAAAAAADQ7Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"muffin2\"\n    },\n    \"image6\": {\n        \"data\": \"hwQcACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAC7AAAAAMDMAAAAAAAAAACwuwAAAADAzAsAAAAAAAAAsMu8AAAAy8y7CwAAAAAAAACwuwsAAMy8y7wAAAAAzMAAALsLAACwu8y8CwAAwMzADAC7uwAAAMvMzLwAAMDMzAwAwLsLAMwMzMzMCwDAzMwMAMC8CwDMzMzMu7sAwMzMzADAvLsAzMy8u7u7C8DMvMsMAMy8ywDMu7u7ywwAzLu7DMD/zPzMu7u7y8wAALzLuwz7///8z7u7u8wAAAC8y7zMu7v/z8y7u8zMDAAAvLvMzLy7/8/Pu7vMzMwAAMzMzMz7z//PzLu7u7vLDADMzMzM8M+8zM+7u7u7ywwAwMzMDLC8zMzPzLu7u8wMAADADACwy8wAAADMvMzMAAAAAAAAu8sLAAAAAAAAAAAAAAAAsLvMAAAAAAAAAAAAAAAAALvLCwAAAAAAAAAAAAAAAAC7zAAAAAAAAAAAAAAAALC7vAwAAAAAAAAAAAAAAACwu7wAAAAAAAAAAAAAAAAAALsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"flyGirl\"\n    },\n    \"image2\": {\n        \"data\": \"hwQgABgAAAAAAAAAAAD/DwAAAAAAAAAAAPD//wAAAAAAAAAAAP+I/wAAAAAAAAAAAI+I+A8AAAAAAAAA8G+P+P8AAAAAAAAA8PaP+P8AAAAAAAAA/5mJiP8PAAAAAADw/2aGiG8PAAAAAADw9p9miPgPAAAAAADwZv9pj2gPAAAAALBvZpZmiIgGAAAAsKtqZpZmhm8PAAAAu6v6Zplm//8PAAAAu7D6lmlmbz8LAACwMwuqZplm9qq6CwCws7CqZpZm/7q7CwAAu7u7Zplm/7YLCwAAsAuqb5lm9g+7CwAAALujb2Zm/w+wCwAAALuqb5Zm/6oAAAAAALCr+pb5/6MAAAAAAACw+m9przMKAAAAAAAAAG9pDzoKAAAAAAAAAD+jugAAAAAAAAAAADOjugsAAAAAAAAAADOrqqoLAAAAAAAAsDOqqqoLAAAAAAAAsKO6OqoLAAAAAAAAsKq6MDO6AAAAAAAAsDO6ADMDAAAAAAAAAKq6ADADAAAAAAAAAKoLAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"myImage0\"\n    },\n    \"image3\": {\n        \"data\": \"hwQcABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACICAAAAAAAAAAAAACFBQAAAAAAAAAAAFVVRAAAAAAAAAAAUFVVRQAAAAAAAAAAVflVRQQAAAAAAABQVf9VVUQAAAAAAABQVVVVVURVAAAAAABVVf9fVURVAAAAAABV////X0VQAAAAAFBV////X0UAAAAAAFD1/////0UEAAAAAAD1/////0UEAAAAAFD1/////08EAAAAAFD1/////08EAAAAAFD//////18EAAAAAFD//////18EAAAAAFD/X1VV/18EAAAAAFAFUFVEVV8EAAAAAAAAVFVEAEUEAAAAAAAAVVVFAAAAAAAAAABQVVRFBAAAAAAAAABAVVVVBAAAAAAAAABARVVVBAAAAAAAAAAARVVUBAAAAAAAAAAAUFUFAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"myImage1\"\n    },\n    \"image1\": {\n        \"data\": \"hwSgAHgAAACIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIVYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIaIiIiIiIiIiIiIiIiIiIiGiIiIWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIaIaIiIiIiIiIiIiIiIiIiGhmiIiIiIiIiIiIiFiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIiIiIZoiIiIiIiIiIiIiIiIiIiIiGiIiIiIiIiIiIiFhViIiIiIiIiIiIiIiIiIiIiIi4i4iIiIiIiIiIiIiIhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIaFWFiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhViIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFiIiIWIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiFWIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVYiIiIiIWFWIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGhVhYiIiIiIVVWIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIhohoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVYiIiIiIWFWIiIiIiIiIiIiIiIiIuIuIiIiIiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiFWIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiGaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiIiIiIi4iIiIiIiIiIaIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIhohoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiIWIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIVYWIiIiIiIiIiFWIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiFVVhYiIiIiIiIiIiIiIiIiLiIiIiIiIiIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIVVVViIiIiIiIiIiIiIiIiLiIiIiIiIhmZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhVVVWFiIiIiIiIiIiIiIiIiLuIiIiIiGaGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIVVVViIiIiIiIiIiIiIiIiIuIiIiIZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFVVhYiIiIiIiIiIiIiIuLWIiGhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFWIiIiIiIiIiIiIiIiIi1W1W2WIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiIiIi4i1VVVYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4aFVVVYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiIiIiIiIiIiIiIhmVVVVtYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhVhYiIiIiIiFiIiIiIiIiIaGaLW1VVVYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFVVVYWIiIiIiIiIiIiIiGZmhruIiFtVVYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhVhYiIiIiIiIiIiIhoZoiIiIuIiFi1W4WIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhVVYiIiIiIiIiIZmaGiIiIuIiIiFiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFiIiIiIiIiIiIiIiIiIiIi4iIiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi7iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVVWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhVVYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIWFVVVYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhVVYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVVWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIu4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiLiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4i4iIZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIu4iIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIuIiIhoZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiGaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIhoZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIaGaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIuIiIiIiIhmhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLuIiIiIiIhoZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIaIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiGaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4i4iIiIiIiIhmhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIhoZoiIW4uIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIZoaIWLWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIaGaIWLVVVVVVVVVVtYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiGaIW7WIiIiIiIi4VYWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiGhWu4W1iIiIiIiIW7WIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIhWu7VVVVVVVVVVVVWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIiIhVu4W1iIiIiIiIWFWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLiIiIiIiIiIi1VYWIiIiIiIiIWLW1W4uIiIiIiIiIiIiIiIiIiIiIiIiIiIi7u7u7u7u7u7tbu1u7tVVVVVVVVVVVVbVbVYWIiIiIiIiIWLVVW1VVVVW7u4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi7iIiIiIiIiIi1VYWIiIiIiIiIWLW1W4uIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIiIhVW2W1iIiIiIiIWFWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4i4iIiIiIiIhYu7VVVVVVVVVVVVWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIiIiIiIhYu2W1iIiIiIiIW7WIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiIiIi4tYiIiIiIi4iIiIiIiIiIu4VmiIiIiIi4VYWIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVYhmiIiIiIiIiIiIVbuIiIiIu4iIiIiIiIiIW7VVVVVVVVVVtYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIZoiIiIiIiIiIVVtVVVVVVVVVi4iIiIiIWLVrhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGhmiIiIiIi4VYuIiIiIuIhbVYiIiIiIW4uIZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIZoaIiIi1W1iLiIiIuIu4VYuIiIiIiIiIZoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGhmhoi1W1tVVVVVVVVVVYWIiIiIiIiIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIZla1W1iLiIiIiIuIVYWIiIiIiIiIaIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhbVYaIiIiIiIuIVVu7tYiIiIiIiIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIhVVVVVVVVVVbtVVWZmhoiIiLuIVVu1VVVVVbW7i2aIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYhYiIiIiIiIiIiIiIiFhbVYiIZmaGiLiIVVu7tYiIiIiIiGaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVVWIiIiIiIiIiIiIiFi1VViLiGhmZraIVYWIiIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhVVYWIiIiIiIiIiIiIiIi1W1tVVVVVVVVVVYWIiIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIWFVVVYiIiIiIiIiIiIiIiIi1W1iLiIiIiLi2VYuIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFhVVYWIiIiIiIiIiIiIiIi4W4iIiIiIiIhbVWZmiIiIiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYVVWIiIiIiIiIiIiIiIi4VVtVVVVVVVVVi4hmZoiIiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYhYiIiIiIiIiIiIiIiIiIVbuIiIiIiIiLiIhba2aGiIiIiIhmiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiIiIiIiIiIi4tYiIiIiIiIiLiIhYtWtmhoiIiIhoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi7iIhYtVVVVVVVVVW1hoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiFiIiIiIiIiIiIiIiIiIiIiIiIiIi4iIhbtYiIiGaIiLhVhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhViIiIiIiIiIiIiIiIiIiIiIiIiIi4iFi7hbWIiGhmiIhbtYiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIiIhVWFWIiIiIiIiIiIiIiIiIiIiIiIi4iFi7tVVVVVVVVVVVVYiIiIiIiIiIiIiIiIiIiIhVhYiIiIiIiFhVVYWIiIiIiIiIiIiIiIiIiIiIiIi4iFW7hbWIiIiIaIZYVYiIiIiIiIiIiIiIiIiIiIhYiIiIiIiIWFVVVYiIiIiIiIiIiIiIiIiIiIiIiIiIiLVVhYiIiIiIiGZWtbVbi4iIiIiIiIiIiIiIiIiIiIiIiIhYVVVVhYi7u7u7u1u7W7u1VVVVVVVVVVVVtVtVhYiIiIiIiIhWtVVbVVVVVbu7iIiIiIiIiIiIiIiIiIiIWFVVVYiIiIiIiIiIiIiIiIiIiIiIiIiIi7VVhYiIiIiIiIhYtbVbi4iIiIiIiIiIiIhoiIiIiIiIiIiIiFhVVYWIiIiIiIiIiIiIiIiIiIiIiIiIi1VbhbWIiIiIiIhYVYiIiIiIiIiIiIiIiIhmZoaIiIiIiIiIiIhVWFWIiIiIiIiIiIiIiIiIiIiIiIiIi1i7tVVVVVVVVVVVVWaIiIiIiIiIiIiIiGZmZoiIiIWIiIiIiIhViIiIiIiIiIiIiIiIiIiIiIiIiIiIi1i7hbWIiIiIiIhbtWiGiIiIiIiIiIiIiGhmZoiIiFWIiIiIiIiFiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4i7hYiIiIiIiLhVhYiGiIiIiIiIiIiIiIhmZoaIiFVVhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIu4hbtVVVVVVVVVW1iIhoiIiIiIiIiIiIiIiGiIiIVVVViIiIiIiIiFiIiIiIiIiIiIiIiIiIiIiIiIiIu4hYtYuIiIiIiIiIiIiIhoiIiIiIiIiIiIiIiIhVVVWFiIiIiIiIiFWIiIiIiIiIiIiIiIiIiIiIiIiIuIhbi4iIiIiIiIiIiIiIZoiIiIiIiIiIiIiIiIiIVVVViIiIiIiIiFiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIaIaIiIiIiIiIiIiIiIiIiFVVhYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIaIiIiIiIiIiIiIiIiIiFWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiGiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIuIiIiIiIiIiIiIiIiIiIiIiGiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"aquatank\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}","images.g.ts":"// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image4\":\n            case \"muffin1\":return img`\n.......................................\n.......................................\n..............dddddd...................\n............edddddddddddddd............\n..........eeeddddddddddddeddddd........\n........deeedddddddddddddeeeeeddd......\n.......ddedddddddddddddddddddeeddd.....\n.....ddddddddddddddddddddddddddddddd...\n....dddddddddeedddddddddeddddddddddd...\n....ddddddddeeedddddddddeedddddddddd...\n...dddddddddee11ddddddd11eeeddddddddd..\n..dddddddddee1111ddddd1111eeeddddddde..\n..ddddddddee111111dddd11111eeddddddeee.\n..edddddddee111ee1ddd11ee11ddddddddde..\n.eeddddddddd111ee1ddd11ee11ddddddddd...\n.eedddddddddd11111dddd11111dddddddddde.\n.dddddddddddd1111dddddd111ddddddddddd..\n.ddddddddddddddddddddddddddddddddddddd.\n.ddddddddddddddddddddddddddddddddddddd.\n.dddddddddddddddddddddddddddddddddddde.\n.dddddddddddddddddddddedddddddddddddde.\n.dddddddddddddddddddddeeddddddddddddee.\n.ddddddeeededdddddddeeeeedddddddddddee.\n..dddeeeeeeeddeeeeeeeeeeeeeeeeeeeeeee..\n...eeee.99666eeeee6eeeee66eeeeeeeee....\n........99966666666666666666666........\n.........996699996666666666666.........\n.........99966999666666666669..........\n..........996699969996699669...........\n..........996699966996699669...........\n..........999669966996696699...........\n...........9966996699699669............\n...........9996696999699699............\n...........999669999999999.............\n............99999999999999.............\n.......................................\n`;\n            case \"image5\":\n            case \"muffin2\":return img`\n....................................\n....................................\n....................................\n............eeddddddd...............\n............eeddddddddd.............\n...........eeddddddddddeee..........\n.........deeddddddddddddeeeedd......\n......ddddeddddddddddbeeddddddd.....\n.....dddddddeeeeddddeeeeedddddd.....\n....dddddddeeeeeddddeddeddddddd.....\n...edddddddd1111dddddd1ddddddddd....\n...eedddddd1ee11ddddee111dddddddd...\n..dddddddd11ee111dd1ee1111ddddddd...\n..dddddddd111111ddd1111111dddddddd..\n..ddddddddd11111dddd11111ddddddddd..\n..ddddddddddddddddddddddddddddddee..\n..ddddddddddddddddddddddddddddddee..\n..ddddddddddddddddddddddddddddddd...\n...dddddddeeeedddddddddddddddddd....\n....dddddddeeeeeeddddddddddddddd....\n....eedddddeeeeeeeeeeeeddddddeee....\n....eedddeeeeeeeeeeeeeeeeeeeeee.....\n......eeeee6666666666666ee66........\n.......e96666666666666666666........\n........96666666666666666699........\n........99966996966966696699........\n.........999669666696669669.........\n.........999669666696696699.........\n.........999969966696696699.........\n..........9996999669669699..........\n..........9996699999999999..........\n..........9999999999999999..........\n............9999999999999...........\n....................................\n....................................\n....................................\n`;\n            case \"image6\":\n            case \"flyGirl\":return img`\n............................\n.......ccccc................\n......cccccccccccc..........\n......cccccccbbbccc.........\n........ccccbbbbccc.........\n......cccccbbccbcccc....bb..\n.......ccccbbbcccccc....bbb.\n...bb.....ccbbbcccc.....bbb.\n..bbb......cccccccc...bbcc..\n..bbcb........cccc...bbbbb..\n....cbbb.....bbcb...bbbcc...\n....bbbbccc.cfbbffbbbbcc....\n.....bbbbcccffbbffcbbcb.....\n.......bbbbcffbbccbccc......\n........bbbccffffcccb.......\n..........bbcffffbcc........\n...........bccfffcc.........\n...........cffccccc.........\n....bc..ccc.cfcfcff.........\n..ccccb.ccc.ccccccc.........\n.cccccbbccccbbbbbbc.........\n..cccbbc.cccbbbbbbc.........\n...bbbcccccbbbbbbbbc........\n....bcccccbbbbbbbbbc........\n....bcccccbbbbccbbbc........\n.....bbcccbbbbccbbbb........\n......bccbbbbcccbbbc........\n.......bcbbbccccbbbc........\n........bbbbc.ccbbcc........\n.........bbcc..ccccc........\n..........bc....ccc.........\n............................\n`;\n            case \"image2\":\n            case \"myImage0\":return img`\n................................\n..............bb................\n............bb33b...............\n...........bbb3bbb..............\n...........bb.b.bbbb............\n..........baab.bb.bbb...........\n..........faaaaaba3ab...........\n.......fff66ffaabaaaab..........\n......ff666666666fffaa..........\n....fffff66669666666ff....bbbb..\n..fff696ff66999699666fff3333a3aa\n.ff86f969f99969999699663333aa3aa\nff88ff9669666666666699933baaaaab\nff888888666666666666f66aaaabbbb.\nfff888888f86ff6ff6fffffaaaaa....\n.fffff888888f6fffffffa.bbaa33...\n...fffff888fffaa6ffa33a.baaa33..\n....fff6f686f3abb..aa33..aaa333.\n......ffff6ffbabbb...aa..bbba33.\n..............bb.bb.........b...\n..............bbbbb.............\n................................\n................................\n................................\n`;\n            case \"image3\":\n            case \"myImage1\":return img`\n............................\n............................\n............................\n............................\n............................\n...........55.555555........\n.........5555555fff5........\n.......55555fffffff...544...\n......5555fffffffff.455555..\n.....55555ffffffff555555445.\n....559f5fffffffff555545555.\n....55ff5fffffffff555555555.\n..8555555fffffffff544555545.\n..88555555ffffffff54444555..\n..85455555fffffffff5..4444..\n....44455555fffffff5........\n......44445555ffffff5.......\n.......44444444455554.......\n........55..444444444.......\n........555.................\n............................\n............................\n............................\n............................\n`;\n            case \"image1\":\n            case \"aquatank\":return img`\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888\n8888888888888888888888888888888888688888888888b88888888888888888888888888888888888888888888888888888888888888888888888b888888688888588888888888888b8888888888888\n888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888b888888888888888888888888888b888888688888588888888888888b8888888888888\n888888888888888888888888888888888868888888888b888888888888888888888888888888888888888888888888888888888888888888888888b888888888888588888888888888b8888888888888\n88888888888888888888888888888888886888888888b8888888888888888888888888888888888888888888888b88888888888888888888888888b888888868888588888888888888b8888888888888\n8888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888888888888888888888888888b888888868888588888888888888b8888888888888\n88888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888b8888888888888888888888888b888888868888588888888888888b8888888888888\n888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888\n88888888888888888888888888888888868888888b888888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888\n8888888888888888888888888888888868888888b88888888888888888888888888888888888888888888888888888b88888888888888888888888b888888886888588888888888888b8888888888888\n88888888888888888888888888888888688888bb8888888888888888888888888888888888888888888888888888888b8888888888888888888888b88888888868858888888888888858888888888888\n8888888888888888888888888888888868888bb88888888888888888888888888888888888888888888888888888888b8888888888888888888888b888888888688588888888888888b8888888888888\n888888888888888888888888888888886888bb8888888888888888888888888888888888888888888888888888888888b888888888888888888888b888888888688588888888888888b8888888888888\n88888888888888888888888888888888688b888888888888888888888888888888888888888888888888888888888888bb88888888888888888888b888888888668588888888888888b8888888888888\n8888888888888888888888888888888688b88888888888888888888888888888888888888888888888888888888888888bb8888888888888888888b88888888886858888888888888858888888888888\n88888888888888888888888888888886bb8888888888888888888888888888888888888888888888888888888888888888b8888888888888888888b888888888868b88888888888888b8888888888888\n88888888888888888888888888888886b888888888888888888888888888888888888888888888888888888888888886888b888888888888888888b888888888855b55888888888888b8888888888888\n8888888888888888888888888888886b88888888888888888888888888888888888888888888888888888888888888868888b88888888888888888b88888888555b5b555888888888858888888888888\n8888888888888888888888888888bb68888888888888888888888888888888888888888888888888888888888888888888888b888888888888888858888b88bbbb555bbbbb8b888888b8888888888888\n888888888888888888888888888bb85b8888888888888888888888888888888888888888888888888888888888888888688888b888888888888888b88885555bbb5555bbb55588888858888888888888\n88888888888888888888888888b8865588888888888888888888888888888888888888888888888888888888888888886888888bb8888888888888b8888b555555555555555b88888858888888888888\n888888888888888888888888bb555555b88888888888888888888888888888888888888888888888888888888888888888888888bb888888888888b88888bbb8b86688b88bb888888858888888888888\n88888888888888888888888bb8b55555555b888888888888888888888888888888888888888888888888888888888888868888888bb88888888888588888b5855586855585b888888858888888888888\n888888888888888888888bb88885555555b888888888888888888888888888888888888888888888888888888888888886888888888b8888888888b88888858b5b868b5b858888888858888888888888\n88888888888888888888b888888b55555b88888888888888888888888888888888888888888888888888888888888888886888888888bb88888888b88888858858868858858888888858888888888888\n888888888888888888bb8888888b55555b888888888888888888888888888888888888888888888888888888888888888868888888888bb8888888588888858858866858858888888858888888888888\n8888888888888888bb888888888555b55588888888888888888888888888888888888888888888888888888888888888886888888888888bb88888b88888858858886858858888888858888888888888\n888888888888888bb888888888855888558888888888888888888888888888888888888888888888888888888888888888868888888888888bb888588888858858886858858888888858888888888888\n8888888888888bb8888888888866888888888888888888888888888888888888888888888888888888888888888888888886888888888888888bb8588888858858886658858888888858888888888888\n8888888888bbb88888888888886888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888b5b8888858858886658858888888858888888888888\n888888888b8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888886688888888888888885bbb88858858888658858888888858888888888888\n88888888bb888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888588bbbb58858888658858888888858888888888888\n888888bb88888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888866888888888888888588888b5bb58888658858888888858888888888888\n8888bb8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888588888858b5bbb8658858888888858888888888888\nbbbb8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888885888888588588bbb5b858888888858888888888888\n888888888888888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888858888885b858888856b5bbb8888858888888888888\n8888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888588888855b5888885b5588bbbbb858888888888888\n88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888885888888b55555555555b888888885bbbbbbb888888\n88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888885888888855555555555888888888b88888bbbbbbbb\n8888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888588888888b55bbb55b6888888855b5588888888888\n8888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888588888888888555888688888555b5b555888888888\n8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888886688888888588888888888b5b88866b88bbbb555bbbbb8b88888\n8888888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888588888888888bbb888665555bbb5555bbb55588888\n888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888858888888888855588886b555555555555555b88888\n8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888588888888888b5b888866bbb8b88888b88bb888888\n8888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888588888888888858888886b5855588855585b888888\n8888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666888b88888888888858888886658b5b888b5b858888888\n8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886655b55888888888858888886658858888858858888888\n888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555b5b5558888888858888888658858888858858888888\n88888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88bbbb555bbbbb8b888858888888658858888858858888888\n888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555bbb5555bbb555888858888888858858888858858888888\n88888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b555555555555555b888858888888856858888858858888888\n888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8b88886b68bb88888b8888888856658888858858888888\n888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5855588855565b88888b8888888858658888858858888888\n888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858b5b888b5b65688888b8888888858658888858858888888\n88888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885666888b8888888858858888858858888888\n8888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588586666888888888858856888858858888888\n8888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588886666888888858856688858858888888\n888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858858888858858888886666888885b858688858b58888888\n8866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888666666855b5866885b558888888\n66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885888888888886666b55555555555b8888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888865555555555588888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888b55bbb55b888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888555868888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888b5b866888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888bbb886688888888\n88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885b858888858b588888888888888888888555888868888888\n888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855b5888885b5588888888888888888888b5b888886688888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55555555555b88888888888888888888858888888668888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888888888888888858888888866888\n888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55bbb55b8888888888888888888888858888888888668\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888866\n888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b8888888888888888888888888858888888888888\n888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8888888888888888888888888858888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888888\n888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b88888888888888888888888888b8888888888888\n88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888\n88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888\n88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888\n8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888\n8888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666668888888\n8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666688888888\n8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888\n8888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888\n8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688688888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888885888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888885888888\n8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888855588888\n8888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888\n8888858888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555588\n8888888888888868888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555888\n8888888888888858888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888\n8888888888885555588888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558558888\n8888888888888555888888888888885555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588858888\n8888888888888585888888888888888585888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888\n8888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888\n8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888\n8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888\n8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555888888588888888888888\n8888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555558888888588888888888888\n8888888886888888888888555888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888885558888888888888\n8888888885888888888555555555888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885585588888885558888888888888\n8888888555558888888855555558888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888885888588888855555888888888888\n8888888855588888888885555588888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888\n8888888858588888888885585588888888888888888885555555558888888888888888888888888888888888888888888888888888888888888888888885888888888888888885555555558888888888\n8888888888888858888885888588888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888855588888888888888888855555888888888888\n8888888888888555888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888555855588888888888\n8888888888855555558888888888888888888888888888855855888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558885588885888888\n8888888888885555588888888888885888888888888888858885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888588855588888\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n","main.blocks":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"w_Ih5#%40O2{51WR2Yca\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"tG9a?xtIhu`_4s,5U$OC\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"!_hr[lj%Tn2}DSxpz3%*\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"Z}w_T8QZ6ngTUrS/EO%x\">Enemy</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`aquatank`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image1\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`myImage1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"><field name=\"index\">0</field></shadow></value><value name=\"y\"><shadow type=\"positionPicker\"><field name=\"index\">0</field></shadow></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.x@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value><next><block type=\"startEffectOnSprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.spray</field><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</field></block></value><next><block type=\"spritesetimage\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"i)jj/g~IyqhQ-cFg2PL@\">mySprite</field></block></value><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"=AHSLffgtDJNXHDm8|[:\"}}</data></shadow></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><shadow type=\"math_whole_number\"><field name=\"NUM\">4</field></shadow></value><statement name=\"DO\"><block type=\"particlesStartScreenAnimation\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.confetti</field><next><block type=\"camerashake\"><value name=\"amplitude\"><shadow type=\"math_number_minmax\"><mutation min=\"1\" max=\"8\" label=\"Number\" precision=\"0\"></mutation><field name=\"SLIDER\">4</field></shadow></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"forever\" x=\"582\" y=\"0\"><statement name=\"HANDLER\"><block type=\"synth_set_volume\"><value name=\"volume\"><shadow type=\"math_number_minmax\"><mutation min=\"0\" max=\"255\" label=\"Number\" precision=\"0\"></mutation><field name=\"SLIDER\">20</field></shadow></value></block></statement></block><block type=\"keyonevent\" x=\"795\" y=\"0\"><field name=\"button\">controller.A</field><field name=\"event\">ControllerButtonEvent.Pressed</field><statement name=\"HANDLER\"><block type=\"gameSplash\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><value name=\"title\"><shadow type=\"text\"><field name=\"TEXT\"></field></shadow></value><next><block type=\"game_dialog_set_text_color\"><value name=\"color\"><shadow type=\"colorindexpicker\"><field name=\"index\">0</field></shadow></value><next><block type=\"game_dialog_set_frame\"><value name=\"frame\"><shadow type=\"dialog_image_picker\"><field name=\"img\">img`\n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . \n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"FaQx*JPgHS_LwsP0!XY{\"}}</data></shadow></value><next><block type=\"game_show_long_text\"><field name=\"layout\">DialogLayout.Bottom</field><value name=\"str\"><shadow type=\"text\"><field name=\"TEXT\"></field></shadow></value><next><block type=\"mixer_play_sound\"><field name=\"sound\">music.baDing</field><next><block type=\"playMelody\"><value name=\"melody\"><shadow type=\"melody_editor\"><field name=\"melody\">\"- - - - - - - - \"</field></shadow></value><value name=\"tempo\"><shadow type=\"math_number_minmax\"><mutation min=\"40\" max=\"500\" label=\"Number\" precision=\"0\"></mutation><field name=\"SLIDER\">120</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>","main.ts":"controller.A.onEvent(ControllerButtonEvent.Pressed, function () {\n    game.splash(\"\")\n    game.setDialogTextColor(0)\n    game.setDialogFrame(img`\n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        . . . . . . . . . . . . . . . \n        `)\n    game.showLongText(\"\", DialogLayout.Bottom)\n    music.baDing.play()\n    music.playMelody(\"- - - - - - - - \", 120)\n})\nscene.setBackgroundImage(assets.image`aquatank`)\nlet mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)\nmySprite.setPosition(0, 0)\nmySprite.x = 0\nmySprite.startEffect(effects.spray)\nmySprite.setImage(img`\n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    . . . . . . . . . . . . . . . . \n    `)\nfor (let index = 0; index < 4; index++) {\n    effects.confetti.startScreenEffect()\n    scene.cameraShake(4, 500)\n}\nforever(function () {\n    music.setVolume(20)\n})\n","pxt.json":"{\n    \"name\": \"story3\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.12.3\",\n        \"pxt\": \"8.5.1\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n","tilemap.g.jres":"{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}","tilemap.g.ts":"// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"}
```