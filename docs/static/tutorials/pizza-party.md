# Pizza Party
### @explicitHints true


## Pizza Party Intro @showdialog

Are you ready to code a Pizza Party for Donatello, Michelangelo, Leonardo, and Raphael?

Follow this tutorial to create your own multiplayer experience inspired by the movie
Teenage Mutant Ninja Turtles: Mutant Mayhem, in theatres August 2.




![Play Pizza Party](/static/tutorials/pizza-party/tmnt.png "Teenage Mutant Ninja Turtles: Mutant Mayhem, in theatres August 2")




## {2. Your First Block}

**Meet the Cast!**

We've already loaded the images of each character into an array.

This is how the program wil know which image
to assign to each player.


~hint What is an array?🕵🏽

---

In computer science, an **array** is an ordered list of items.

We give this list a name, so that we can ask for items from this list later.

For example, the list in our program is called **characters**.
If we want to use the first image from this list, we can add a block
like this to our program:


```block
//@hide
let characters: Image[] = []
characters[1]
```

hint~


```blocks
//@highlight
let characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
```


#### ~ tutorialhint

```blocks
//@highlight
let characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
```




## {3. Set the Scene}

**Let's decide where the action happens.**

- :tree: Open the ``||scene:Scene||`` category and drag <br/>
``||scene:set background image to [ ]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.

- :paint brush: Click the empty square in the background block to choose an image.
![Switch to the My Assets tab](/static/skillmap/assets/my-assets-three.png " ")
Switch to the **My Assets** window to select a simple background.




#### ~ tutorialhint

```blocks
let characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
scene.setBackgroundImage(assets.image`Lab`)
```




## {4. Set players}

**Add Player 1**

- :suitcase: Open the ``||pizza:Pizza||`` category and drag <br/>
``||pizza:set game for [1] player(s) with [characters]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.



#### ~ tutorialhint

```blocks
let characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
scene.setBackgroundImage(assets.image`Lab`)
pizza.setPlayersWith (characters, 1)
```



## {5. Check Your Game!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should see a single sprite in the game window that looks like the first image in your array.

**Hover over the game window and try moving your sprite using the arrow keys or joypad.**


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our players will be sprites, too.

hint~




## {6. Add more}

**Add more players.**

- :game: From the ``||mp:Multiplayer||`` category, drag the <br/>
``||mp:on [thisPlayer][connected]||`` <br/>
bundle into **an empty** area of the workspace. <br/>

Now, when other players join, more sprites will appear in the game window.

**Test it out by clicking the player icons to the left of the game window.**

![Test with the player buttons to the left of the game window](/static/tutorials/pizza-party/players.png "An image highlighting the player icons")



#### ~ tutorialhint

```blocks
//@highlight
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(player2, mp.PlayerProperty.Number))
})
```



## {7. Add Pizza}

**Let the Pizza Fly!**

- :circle: Open the ``||game:Game||`` category and drag the<br/>
``||game: on game update every [500] ms||``<br/>
bundle into **an empty** area of the workspace.


- :mouse pointer: Click the empty grey square inside the bundle to select an image.
Switch to the **My Assets** to choose the **pizza**.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})
```




## {8. Take a look}


- :binoculars: Take another look at your project.

You should see pizza flying every which way!

~hint Why is this happening? 🤷🏽‍♂️

---

Let's take a look at the blocks you just added.

---

<br/>
This **event** block triggers an action every 500 milliseconds. (That means, every  half second, the code inside of this container will run.)


```block
game.onUpdateInterval(500, function () { })
```

---

<br/>
This block launches the ** projectile** of your choosing from the side of the screen with a **velocity** that's randomly assigned each time the code runs.


```block
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))

```


hint~


~hint Tell me about events! 🕵🏿‍♂️

---

Events are things that might or might not happen while the code is running.
A player might press a button, a timer might run out, or one sprite might overlap with another.

Each of those things is an event that you can assign a special action to in Arcade.

hint~


~hint What are projectiles? 🕵️

---

In MakeCode Arcade, projectiles are sprites that move on their own,
often in large quantities.

Projectiles have extra properties that normal sprites don't have.
For example, they destroy themselves once they leave the screen so
the user's computer doesn't get overwhelmed.

hint~


~hint What is velocity? 🕵🏻‍♀️

---

**Velocity** is the speed that something is moving in a certain direction.

In MakeCode, we have velocity in two directions, **vx** and **vy**.

The field **vx** is for the velocity going side to side.<br/>

_Velocity in the x (horizontal) direction_

- A **vx** greater than 0 will send something moving right.
- A **vx** less than 0 will send something moving left.
- A **vx** of 0 will not change its position.


The field **vy** is for the velocity going up and down.<br/>

_Velocity in the y (vertical) direction_

- A **vy** greater than 0 will send something moving down.
- A **vy** less than 0 will send something moving up.
- A **vy** of 0 will not change its position.

hint~



## {9. Add points}

**Add points when a player overlaps with a projectile.**

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||sprites:on [sprite] of kind [Player] overlaps...||``
<br/>bundle into **an empty** area of the workspace.


~hint What does this bundle do? 🤷🏽‍♂️

---

Let's take a look at the blocks you just added.

---

<br/>
This **event** block triggers an action every time one of your Player sprites overlaps one of the projectile sprites. (Whenever a turtle overlaps the pizza.)

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) { })
```

---

<br/>
This block deletes the pizza sprite (otherSprite) which was overlapped. It also
adds a special disintigrate effect to the image while it's happening.

```block
    sprites.destroy(otherSprite, effects.disintegrate, 100)
```


---

<br/>
This block adds one point to the score of the Player that overlapped the pizza.

```block
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```




## {10. Test!}


- :binoculars: Test your project!

Use the multiplayer icons to test your game with each player.

Each character should get a point when they overlap pizza.





## {11. First to 20 Wins!}

**First to 20 wins!**

- :users: Open the ``||mp:Multiplayer||`` category and drag the<br/>
``||mp:on score [20] for [thisPlayer]||``
<br/>bundle into **an empty** area of the workspace.


~hint What does this bundle do? 🤷🏽‍♂️

---

Let's take a look at the blocks you just added.

---

<br/>
This **event** block triggers an action when a player's score reaches 20. (It even has the potential to tell which player reached that score, though we won't use that feature.)

```block
mp.onScore(20, function (thisPlayer) { })
```

---

<br/>
This block signals that the game should immediatedly end in a win.

```block
    game.gameOver(true)
```


hint~


#### ~ tutorialhint

```blocks
//@highlight
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
```





## {12. Shake it up!}

**Let's shake things up!**

Let's make things a little more competitive by allowing sprites to bump one another out of the way.

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||sprites:on sprite of kind [Player] overlaps...||``
<br/>bundle into **an empty** area of the workspace.


~hint What does this bundle do? 🤷🏽‍♂️

---

Let's take a look at the blocks you just added.

---

<br/>
This **event** block triggers an action whenever two Players (turtles) overlap.

```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {  })
```

---

<br/>
This block checks to see **if** the first player is holding down their (A) button. If so, the code inside will run.

```block
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {}
```

---

<br/>
This code makes it look like the camera is shaking around by 4 pixels for half a second.

```block
        scene.cameraShake(4, 500)
```

---

<br/>
This is a custom block made for this tutorial. It bumps the other sprite to the opposite side of the screen from where the first sprite is located.

```block
        pizza.bumpSprite(sprite, otherSprite)
```

---

<br/>
This block takes a point away from the other sprite.

```block
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
```


hint~


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(sprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
})
```

```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(sprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
})
```





## {13. Test!}


- :binoculars: Test your project again.

Try holding down the (A) button (or space bar) and running into another player.  What happens?







## {14. Again}

What if the other player is holding down _their_ (A) button?  Let's add code to that event that reverses the whammy.

- :mouse pointer: Right click on the ``||logic(noclick):if||`` statement and when the dropdown menu appears, select **Duplicate**.

- :mouse pointer: Grab the deactivated ``||logic(noclick):if||`` statement and snap it in beneath the original.

- :mouse pointer: Swap all of the ``||variables(noclick):sprite||`` and  ``||variables(noclick):otherSprite||`` variables within the second ``||logic(noclick):if||`` statement.


![Duplicated the if-statement and swap sprite variables](/static/tutorials/pizza-party/duplicate.gif "Duplicate the if-statement and swap the sprite variables.")


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(sprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
    if (mp.isButtonPressed(mp.getPlayerBySprite(otherSprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(otherSprite, sprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -1)
    }
})
```

```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(sprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
    if (mp.isButtonPressed(mp.getPlayerBySprite(otherSprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(otherSprite, sprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -1)
    }
})
```




## {15. NOOP}

The game won't be fun if everyone holds (A) the whole time! Let's make it so players only get a point if they're **not** holding the (A) button.

- :binoculars: Find the **Player/Projectile** ``||sprites(noclick):on overlap||`` event:

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```


- :random: from the``||logic:Logic||`` category, grab an empty <br/>
``||logic:if <true> then||`` statement and snap it in **above** the <br/>
``||sprites(noclick):destroy [otherSprite]...||`` block in your workspace.


- :random: from the``||logic:Logic||`` category, grab<br/>
``||logic:not < >||`` and snap it into the <br/>
``||logic(noclick):if <true> then||`` statement to replace ``||logic(noclick):<true>||``



#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (!(mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A))) {  }
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```




## {16. NOOP Cont.}


- :mouse pointer: Right click on the
```block
let sprite: Sprite = null
mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A
```
block already in the workspace and choose **Duplicate**.
Drag the copy into the empty area inside <br/> ``||logic(noclick):not < > ||``.


- :mouse pointer: Drag both of the blocks that were connected below the empty<br/>
``||logic(noclick):if||`` statement and move them inside.


#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (!(mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A))) {
        sprites.destroy(otherSprite, effects.disintegrate, 100)
        mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    }
})
```




## {17. Ready, Set, Go}

Make sure everyone is prepared to play by adding a holding screen with sound effects at the beginning of the game.

- :circle: From the ``||game:Game||`` category, drag<br/>
``||game:splash ["Press (A) when everyone is"]...||`` into the end of the <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :headphones: From the ``||music:Music||`` category, drag<br/>
``||music:play [song ] [until done]||`` into the end of the <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.

- :mouse pointer: Click the empty square in the<br/>
``||music(noclick):play song...||`` block and switch to **My Assets** to choose the **countdown**.



#### ~ tutorialhint

```blocks
let characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
scene.setBackgroundImage(assets.image`Lab`)
pizza.setPlayersWith (characters, 1)
game.splash("Press (A) when everyone is", "ready to start the game")

music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)


```





## {18. Test It}


- :binoculars: Test your final experience.

You should be able to rack up points as you grab pizza until you press the (A) button, then the pizza should fly right by you.

For extra fun, login so you can play online with friends!






## {Finale}

**🍕 Cowabunga 🍕**

You have finished your multiplayer experience!

When you're ready, sign-in and select **Done** to start an online multiplayer session with up to four friends.

**Who will be the first to score 20 points?**




```blockconfig.global
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
        `, randint(-100, 100), randint(-100, 100))
})

let characters: Image[] = []
pizza.setPlayersWith(characters, 1)

mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})

mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)

mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})

game.splash("Press (A) when everyone is", "ready to start the game")

```




```template
let characters: Image[] = []

characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]


```



```ghost

scene.setBackgroundColor(1)

```


```package
multiplayer
```


```customts


//% color=#b79900 icon="\uf1ce"
namespace pizza {


    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters

    export function setPlayersWith(list: Image[], num: number) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        let xloc = [
        40,
        120,
        40,
        120
        ]
        let yloc = [
        30,
        30,
        90,
        90
        ]
        for (let index = 0; index <= num - 1; index++) {
            mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
            mp.moveWithButtons(mp.getPlayerByIndex(index))
        }
    }

    //% blockId=bump_sprite
    //% block="$thisSprite bump $thatSprite"
    //% thisSprite.shadow=variables_get
    //% thisSprite.defl=sprite
    //% thatSprite.shadow=variables_get
    //% thatSprite.defl=otherSprite
    export function bumpSprite(thisSprite: Sprite, thatSprite: Sprite) {
        thatSprite.setPosition((thisSprite.x + 80) % 160, thisSprite.y)
    }
}

namespace logic{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
}


//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="check if A button pressed"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="create finish line"  weight=300
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="create players"  weight=300
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }

}

```

```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF2121",
        "#DFDDDE",
        "#FF8135",
        "#FFF609",
        "#8E2EC4",
        "#408325",
        "#003FAD",
        "#87F2FF",
        "#EBF8F9",
        "#A4839F",
        "#F9F6E1",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```






```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"]-{;fUb\": {\n        \"data\": \"hwQSABAAAAAAAAAAcHcHAAAAICJ3d3cAAAAnInJ3dwcAcCIicnd/BwB3IiFyd38HcHci8XL38Qdwdy4ScncfB3B35yJ3dx8HcHd3Ind3Hwdwd+cid3f3B3B3LvFyd/cHcHciEXJ3dwcAdyIhcnd3BwBwIiJyd3cHAAAnInJ3dwcAACAid3d3AAAAAABwdwcAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Raphael\"\n    },\n    \"image2\": {\n        \"data\": \"hwQSABAAAAAAAAAAcHcHAAAAgIh3d3cAAACXiHh3dwcAcImIeHd3BwB3iIh4d38HcHeI8Xj3dwdwd4gYeHd/B3B3h4h3d38HcHd3iHd3fwdwd4eId3d/B3B3iPF4d38HcHeIGHh3dwcAd4iIeHd3BwBwiYh4d3cHAACXiHh3dwcAAICId3d3AAAAAABwdwcAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Leonardo\"\n    },\n    \"image1\": {\n        \"data\": \"hwQSABAAAAAAAAAAcHcHAAAA8P93d3cAAAD3Zn93dwcAcPZmb3d3BwB39hZvd3cHcHf28W93dwdwd/YWb3d/B3B392Z/d38HcHd3/3d3fwdwd/dmf3d/B3B39hZvd38HcHf28W/3dwcAd/YWb3d3BwBw9mZvd3cHAAD3Zn93dwcAAPD/d3d3AAAAAABwdwcAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Donatello\"\n    },\n    \"image3\": {\n        \"data\": \"hwQSABAAAAAAAAAAcHcHAAAAUER3d3cAAABHRHR3dwcAcEREdP93BwB3REF0/3cHcHdE8XQffwdwd0VEdPd/B3B3V0R39/EHcHd3RHf38Qdwd1dEd/fxB3B3RER0938HcHdE8XQffwcAd0RBdP93BwBwRER0/3cHAABHRHR3dwcAAFBEd3d3AAAAAABwdwcAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Michelangelo\"\n    },\n    \"image6\": {\n        \"data\": \"hwSgAHgAAACZmZmpmZmZqZqZqZqZqhqqqqqqqqqqqqqqqqqqqqqqqqqqmpmpmpmZmZmZmpmpmZmZmpmqqpmZmZmZmZmZmZmZqZqZqZmZmqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqaqZqamqmZqZmamaqZmZqZmZmZqpmZmZmZmZmZmZmZmZmZmpmpqaqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqmqqZmpqaqqqqmpmampmZmZqpqZmZmZqaqZmZmZmZqpmZmaqaqqqqo6o6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpmpmaqqqpmpmZmZmamqmZmZqZmqmamZqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqjqqqamqmZmpmZmamamZmZqamamZqpqqqqqjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqozqqo6qqqqqqqqqpmamamZmZmZmqqaqZmqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6o6M6qqo6qqqqqqqpmZmaqZmZqpmaqZmamqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqjOqOqOqqqqqqpqamamZqZmamZqZmaqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqozozqjqqqqqpqZmZmZqZmaqamZqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqOjqqqqqqqZmZmZmamZmpqpqqqqqjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqOqo6qqqqqaqZmamamZmpqpqqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqOqqqM6qqqqqamZmZmZqpqZmqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqOqqqOqqqqqqqmZmZmaqpmqmqqqqqo6qqqqqqqqqqqjozM6Oqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqOqo6qqOqqqqqmqmZmpqpmqqqqqo6qqqqqqqqqqqqGqOqqjozM6Oqqqqqqqqqqqqqqqqqqqqjqqqqqqqqo6qqo6OqqqqqmamZmpqaqqqqqqozqqqqqqqqqqoaMaGqqqqqqjozM6qqqqqqqqqqqqqqqqqjqqqqqqqqo6qqOjqjqqqqmZmpmZqqqqqqqjqqqqqqqqqqqqoRo6qqqqqqqqqqqjMzM6qqqqqqqqqqqqqjqqqqqqqqo6qqOqqjqqqqmZmpqZmaqaqqqqOqqqqqqqqqqhExqqqqqqqqqqqqqqqqqjMzM6qqqqqqqqqjqqqqqqo6qqqqqqOjqqqqqpmaqamZqqqqqqOqqqqqqqqqGqqjqqqqqqqqqqqqqqqqqqqqqqOqqqqqqjqqqqqqqqo6qqqqqqM6qqqqmpqaqamZqqqqOqqqqqqqqqqqoTqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqo6qqqqqjqqM6qqqqqqqampqqqqo6qqqqqqqqoRoaOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqjqqOqqqqqmpmqmqqqo6qqqqqqqqqhoRMaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqqjqqqqqjqqqqOqqpqpmpqqqqozqqqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqjqqqqqqqjqjqjqpqpmaqqqqqjqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqjqqqqqqqqo6qqqjqqqpmqqqqjqqqqqqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqjqqqqqqqqo6M6o6qqqZmqqqqqOqqqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqjqqqqqqqqqqM6o6qqqpmaqqOqqqqqqqqqoRERMRqqqqqqqqqqqqqjMzMzOqqqqqqqqqqqqqqqOqqqqqqqOqqqqqqqqqo6o6qqqpmaqqo6qqqqqqqhEROqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqOqqqqqqqqqo6o6qqqpmao6o6qqqqqqGhGho6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqOqqqqqqqo6qqo6qqqpmaozqqqqqqqqGhE6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqOqqqqqqqqqo6qqqjo6qpmaqjqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqOqqqqqqqqqqjqqqjo6qpqaqjqqqqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqqqqqqqjqqqjo6qpqTqqqqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqqqqqjqqqqqjo6qpqTqqqqqqqqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqqqjqqqqqjOqqZqTqqqqqqqqqqOhqqqqqqqqqqqqqqqqqqGqGqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqqjqqqqo6OqqZqjqqqqqqqqqqoxGqqqqqqqqqqqqqGhERMaOqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqOqqqo6OqqZqjqqqqqqqqo6qhGqqqqqqqqqqqoRERERoaqqqqqqqqqqqqqqOqqqqqqqqqo6qqqqqqqqqqOqqqo6OqqZqjqqqqqqGqGjGhGqqqqqqqqqqqEaERGhqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqOqqqqqo6qqOZqqOqqqqqGjqqERGqqqqqqqqhGhERERGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqOqqqqqqqo6OZqqOqqqqqqqMaEaGqqhGhqhoREREREaGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqo6qqqqqqo6qZqqOqqqqqOqoREaqqoaqqqhEREREREaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqo6qqqqqqo6qZqqOqqqoaoxoRoaqhoRoRERERERERoaqqqqqqqqqqqqqqqhGhqqqqqqqqqqqqqjqqqqo6qqqqqqqqo6qpqaOqqqo6qhERERERERERERERERGhqqqqqqqqqqqqqqqqqqoRoaqqqqqqqqqqqqqjqqo6qqqqqqqqqqqZqaOqqqqjGhERERERERERqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaqqqqqqqqqqqqo6qqqqqqqqqqqqOqqZqqOqqjqqEaGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqo6qpOqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqqo6qqqpOaqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqqqqjqqqpOaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqjqqqqqZOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGqqqoaqqqqqqqqqqqqqjqqqqqqqjqqqqqZOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhqhqqqqqqqqqqqqqqqqqqqjqqqqqqOqqqqpOqqqqqqqqqqqqqqqqqqqqhqqqqqqqqqqqqoaqqqqqqqqqhqhoaqqqqqqqqqqqqqqqqqqqqqqOqqqqqqZOqqqqqqqqqqqqqqqqqqqqqqhqqqqqqqqqqoaqqqqqqqqqhqhoaqqqqqqqqqqqqqqqqqqqqqqo6qqqqqpOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRqqqqGqqqqqoaEaqqqqqqqqqqqqqqqqqqqqo6qqqqqqqpOqqqqqqqqqqqqqqqqqqqqhGqqqqqqqqhGhGhqhoREaGqqqoREaGqqqqqqqqqqqqqqqqqqqqqqqqqqqqpo6qqqqqqqhERERERoaqqERGqqqqqqhqhGhERqqoRoaGqqqqqEaGqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqqqqqhoREREREaqqqqoaEaGqqqoaoRGhERERqqoaERqqqqoaERGqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqqqqqhqhqqqqqqqqqqoaGqGqqqGhqhGqERERqhqhERGhqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaqqqqqqqqqqqqqqqqqhoRGqGqGhqqqhEaERGhqqqqEaERoaqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqaqqqqqqqqqqqqqqqqqqoREaqqGhqqEaERERGhqqoaEaERoaGqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqoaERERqqEaEaqqEaqqGqERERGqGqqqEREaEaqhqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqqqhERoaGqqhqhqhGhEaqqoaGqEaERERGqGqqqGhEREaqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqqqhERERERqqqqERERoaqqqqoaERoRERGqqqqqqhEaoRqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqoRoaqqqqqqERoRERGhqqqqqqqhGqGqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqoaERoaoaqqqqoaoRERERGhqqGqqqqqGqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqhoaEREaoaqqqqoRoRERERGhEaqqoRGqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqGqoREREREREREaGqqqqqqqoaqhERERERERERERGqqqqqqqqqqqqqqqqqqqoaqqqqo6qqqqqqqqo6qqqqEaqqqqqqqqqqqqqqqqqqqhoRqhERERERERERERGqGqGqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qjozMzMzMzMzMzMzMzMzMzMzo6oRqhoRERERERERERqqGhqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqhqhqqoaEREREREREREaERGhqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqqqGhERERERoRGhqqoaERERERERERERERERoaqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqqqqqEaERERERGhqqoREREREREREREREREREaqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqqqGhGqGhERERGhqqoREREREREREREREREREaGqoaqqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqqqqqqqGqGhERERGhqqoREREREREREREREREREREREaqqqqqqGqqqoaqqo6qqqqqqqqo6qqqqqqqqqqoRERGhERGhERERERGhqqoREREREREREREREREREREREaqqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqqqqqERERGhERERERERoRGhqhoREREREREREREREREREREREaqqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqGhERERERERERoRGhqqoREREREREREREREREREREREaGqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqoRoaoRERERERERERERoRGhqhoREREREREREREREREREREREaGqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqoREaoRERERERERERERoRGhqhoREREREREREREREREREREREaGqqqqqGqqqqqqqo6qqqqqqqqo6qqqqqqoRqhoRERERERERERERoRGqqhEREREREREREREREREREREREaGqqqqqqqqqoaqqo6qqqqqqqqo6qqqqqqoRoRoRERERERERERERoRGqqhoREREREREREREREREREREREaGqqqqqqqqqoaqqo6qqqqqqqqo6qqqqqqoRERERERERERERERERoRGqqhEREREREREREREREREREREREaGqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqERoRERERERERERERoRGqqhEREREREREREREREREREREREaqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqhoRERERERERERERoRGqqhEREREREREREREREREREREREaqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqhoRERERERERERERoRGqqhEREREREREREREREREREREREaqqqqqqqqGqqqqqo6qqqqqqqqo6qqqqqqqhqhoRERERERERERERoRGqqhEREREREREREREREREREREREaqqqqqqqqGqqqqqo6qqqqqqqqo6qqqqqqqqqhoRERERERERERERoRGqGhEREREREREREREREREREREREaqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqoaERERERERERERoRGqqhERERERERERERERERERERERoaqqqqqqqqGqqqqqo6qqqqqqqqo6qqqqqqqqqqqqERERERERERERoRGqqhoRERERERERERERERERERERqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqERERERERERERoRGqqhERERERERERERERERERERERqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqqqqqERERERERERERoRGqqhERERERERERERERERERERERqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqqqEaEaERERERERERERoRGqqhERERERERERERERERERERGhqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqqoaGqoaERERERERERERoRGqqhERERERERERERERERGhqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqo6qqqqqhoREaoaoaoaERERERERoRGqqhoRERERERERERERERGhGhERERGqqqqqqqqqqqqqo6qqqqqqqqqjqqqqqhoRERGqoaoaERERERERqhGqqhERERERERERERERERGqGhERERqqqqqqqqqqqqqqo6qqqqqqqqqjqqqqqhqhGqGqqqqqGhERERERGhEaqhoRERERERERERERERGqqhGqGhoRqqqqqqqqqqqqo6qqqqqqqqqjqqqqqhqqqqqqqqqqERERERERGhGqqhoREREREREREREREaGqqhEaEaGqqqqqqqqqqqqqo6qqqqqqqqqjqqqqqqqqqqqqqqqqERERERERGhqqqhoRERERoaoaERERERGqGhERERGhqqqqqqqqqqqqo6qqqqqqqqqjqqqqqqqqqqqqqqqhGhEREao6qqGqqhoRERGhqqqqERERERGqGqERERGhoaqqqqqqqqqqo6qqqqqqqqqjqqqqqqqqqqqqqqGhEaOqMzOjGqqqqhqhEaGqGhGqGhERERGqERERERERqqqqqqqqqqqqo6qqqqqqqqqjqqqqqqqqqqoREaqqqjMzqqqqqqqqqqoRqqGhqqqhGhEREaqqqqqqGhoRoaqqqqqqqqqqo6qqqqqqqqqjqqqqqqoaEaGqqjozM6qqqhoRoaGqqqoaEaGhqqqhqhERoaqqqqqqGhERoaqqqqqqqqqqo6qqqqqqqqqjqqqqqqqqqqo6M6OqqhoREREREaGqqqqqGhGhqqqqqhERoaqqqqqqERERqqqqqqqqqqqqo6qqqqqqqqqjqqqqOqOqMzOjqhEREREREaqhoaoRqqqhGqGqqqqqqhEREaqqqqqqGhGhqqqqqqqqqqqqo6qqqqqqqqqjqqqqqjMzqhERoRoRoaqqqhoRqqGhqqoRGqqqqqqqqqGqqqqqqqqqERGqqqqqqqqqqqqqo6qqqqqqqqqjqjozM6oaEaqqqqqqqqqhqhqqGqGqoaoaoaqqqqqqGqGqqqqqqqoaERGqqqqqqqqqqqqqo6qqqqqqqqqjqqqqERGqqqqqqqqqoaqqGqGqGhGhEaqqqqGqqqqqGqqqqqqqqqoaEaGqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqqqqqqqqhEREaqqGqqqGqqqqqqqqqqqoaqqqqqqqqoREaoRGhGqqqqqqqqqM6qqqqqqqqqjqqqqqqqqqqqqqqoREaGqqqqqqqGqGqqqqqqqoaoaqqqqqqqqqqoRERERqqqqqqqqqqo6qjOqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqGqEREaqqqqqqGhGhqqqqqqqqqhoRoaERGqGqqqqqqqo6qqqjqqqqqqqjqqqqqqqqqqqqqqqqGqqqqhERERGhEaGqqqqqqhGhqqqqqqqqqqqqGhEREaqqqqqqqqqjqqo6o6qqqqqqqqqqGqGqqqqqqqqqqqoRERERoaqqGhGqqqEaoaGqqqqqqqqqqhERqqqqqqqqqqqqqqqjqqqqOqqqqqqqqqqqqqqqqqqqqqoaEREREaqqqqqhGqGqqhERqqGqqqqqqqqqqhGhqqqqqqqqqqqqqjqqqqqqqqOqqqqqqqqqqqqqqqqqqqoaoaqqqqqqqqoaqhGqqhEREaGqqqqqqqqqGhGqqqqqqqqqqqqqqqOqqqqqqjqjqqqqqqqqqhGhqqqqqqqqqqqqqqoaERGqqhGqqqoREaGqqqqqqqqqERGqqqqqqqqqqqqqOqqqqqqqqqo6qqqqqqqqGhGhqqqqqqqqqqqqGhGhqqqqqhqhqqqqqqGqqqqqqqqqoaqqqqqqqqqqqqqqo6qqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqhoRqqqqqqqqqqoRqqqqqqqqqqqqqqoaEaqqqqqqqqqqqqo6qqqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaoaqqqqqqqqqqqqoREaqqqqqqqqqqqqqjqqqqqqqqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERGqEaqqqqqqqqqqqqoRoaqqqqqqqqqqqjqqqqqqqqqqqqo6qqqqqqqqqqGqqqqqqqqqqqqqqqoRERERERGhGqGqqqqqqqqqqhoRqqqqqqqqqqqqqqM6qqqqqqqqqqo6qqqqqqqqqqGqqqqqqqqqqqqqERERERGqqhoRoRGhqqqqqqqqqhGhqqqqqqGqqqqqqqOqo6qqqqqqqqqjOqqqqqqqqqGqqqqqqqqqqhGqqhERqqqqqhEREaoREaqqqqqqGhGhqqqqqqqqqqqqOqqqOqqqqqqqqqqjOqqqqqqqqqqqqqqqqhqhqqqqqqGqqqqqqqoREaEaERGqqqoaERGqqqqqqqqqqqqqo6qqOqqqqqqqqjqqo6qqqqqqqqqqqqqqoaqqqqqqEaqqqqqqoaoaERGhqqqqqqoREaqqqqqqqqqqqqo6qqqqqqOqqqqqqjqqo6qqqqqqqqqqqhqqqqqqqqoaqqqqqqqqqqGqERERoaqqqhqhqqqqqqqqqqqqqqqjqqqqqjqqqqqqqjo6qqqqqqqqqqoRqqqqqqoaqqqqEaGqqqqqqhqqqhERoaqqGhGqqqqqqqqqqqqqqjqqqqqqqqqjqqqqqqM6qqqqqqqqqqqqqqqqqqqqERERERGqqqqqqqqqqhqhqqqqEaGqqqqqqqqqqqqqqqOqqqqqqqo6qqqqqqM6qqqqqqqqqqoaGqGqqqozMzMzM6qqqqqqqqqqqqqqqqoRoaqqqqqqqhqqqqqqOqqqqqqqqqqqo6qqOqqjqqo6o6qqqqqqERoaoaqjqqqqqqoaqqqqqqqqqqqqqqoRoaqqqqqqqqqqqqqqozqqqqqqqqqqo6qqOqqjqqqqo6qqqqqqGhEREaqjqqqqqqqqoaqqqqqqqqqqqqqqoaqqqqqqqqqqqqo6qqqjqqqqqqqqOqqqozqqqqqqM6qqqqqqqhEREaqjqqqqqqqqqqqqqqqqqqqqqqqhqqqqqqqqqqqqqqqjqqqjqqqqqqqqqqOqozqqqqqqqqOqqqqqqhoREaqjqqqqqqqqqqqqqqqqqqqqqqqhqqqqqqqqqqqqqjqqqqo6qqqqqqqqqqqqo6OqqqqqqqOqqqqqqqoREaqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqo6qqqqqqqqqqo6qqOqqqqqqjqqqqqqqqoaETqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqo6qqqqqqqqo6qqOqqpqpqqqjqqqqqqoaETqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOqqqqqqqo6qqqqqqqqqjOqqqqpqpqqo6qqqqqqqqETqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqOqqqqqqqqqqjOqqqqpqpqqo6qqqqqqqqGjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqOqqqqqqqqjqqo6qqqqmpqqqqo6qqqqqqGjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqOqqqqqqjOqo6qqqqmZqqqqo6qqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjqqqqqqqqqqqqOqqqqqOqo6qqqqqpmpqqqqOqqqqqqqqjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqjqqqqqqo6qjqqqqqqmpqaqqOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqjqqqqqqozqqqqqqmpmpqaqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqjqqo6qjqqqqqqmZqpqaqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqjqqqjqqOqqqqqmZmpqaqqqjqqqqqqqqqqqqqqqhoRqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqo6qjqqOqqqqqqqqZmZmqqqqjqqqqqqqqqqqhERqhqhqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqjqqo6qqqqqpmZqZmqqqqqqjqqqqqqqqqhqhqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqqqqqOqo6qqqqqamZqaqaqqqqqjqqqqqqqqqqoRqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqqozOqo6qqqqqpqZmZmamaqqqqo6qqqqqqqqqqoaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqqjOqqqqjqqqqqqmpmZmamaqqqqo6qqqqqqqqqqqqERqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqqqM6qqqjOqqqqqqpmZmamqmamqqqqqo6qqqqqqqqqqqhGhqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqqozqqo6M6qqqqqqmqmpmZmqmamqqqqqo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqqjOqqjqjqqqqqqqqmZmZmZmqmZmqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqqqM6qqOqOqqqqqqqqqqZmZmZmqmamqqqqqOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqozqqo6o6qqqqqqqpqZmZmZmZmamqmqqqqqqqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qjOqqjOjqqqqqqqamZmqmZmqmZmamqmqqqqqqjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6OqqqM6qqqqqampqpqZqZmamZmZmaqZqpmamqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo6qqo6qqqqqqqpqpmpmZmpmZmZmamqmampmZmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqpqpqqmZmZqpqZmZmZmaqqmamZmpmpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqaqZmqqpmZmZmamamamamZmZmZmZmZmZmqmqmZqZqZqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmpmqqpqaqamZmqmaqamZmZqZqpmamZmZmZmZmZmqmqmZmamZqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmqmamqqZqaqqqpqqmpqpqZmpmZmZmZmZmZmZmZmqqqqamamZmZmpqqqqqqqqqqqqqqqqqqqqqqqqqqqqmpmZmaqqqqqqmZmZqZmZmpmZmZmZmZmZmZmZmao=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Lab\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAACqqqqqqqqqqqqqqqqqERERERERzMzMzMzMzMzMzDwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEaERERERERwczMzMzMzMzMzDMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERzMHBzMzMzMzMzDM8MzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERzMzMzMzMzMzMzDw8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERHBzMzMzMzMzDMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERETEzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERHBzDzDMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERHBzDzDMzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERHBHMEczDwzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERHBzMzMzDwzMzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERHBHMwczDwzMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERzMzMzDwzMzMzMzMzMzMzMzOjM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRGhERERERERERzMHMzDwzPMPDMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERoRERERERERERHMHMzDwzMzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERzMHMzMzMzMzMzDMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERzMHMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaoRERERERERERERERzMzMzMzMzMwzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERoREREREREREczMzMzMzMzMzMzDMzw8MzMzMzOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREaERERERERERwczMzMzMzMzMzMzDMzw8MzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERzMwcwczMzMzMzMwzMzM8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERzBwczMzMzMzMzMwzzDM8MzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERERzMzMzMzMzMzMzMwzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERwRwczMzMzMzMzMzMPDMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqEREREREREREREREREREREcHMzMzMzDMzMzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERERERERzMzMPDMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERERERERzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERERERERzMzMwczMzMzMzMwzMzM8wzwzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERERERHBzMzMzMzMzMzMzDwzMzPMMzyjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREREREREREREREcHMzMzMzMzMzMzMzMzMMzPMMzwzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERERHBzMzMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERERERzMzMzMzMzMzMzDwzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREREREREREREREREREcHMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERERERERHBzMzMzMzMzMzMMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERERERERERERERERERERERERMTPDMzM8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaEREaEREREREREREREcHMzMzMPDMzMzMzMzMzMzOqM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqEaEREREREREREREREcHMzMzMPDMzMzMzMzMzPMOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERERERHMzMzMPDPDMzM8MzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoREREREREREREREcHMzMzMPDMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREREREREREREREcEczMzMzMw8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREREczMzMzMzMzMzMMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREcHMzMzMzMzMzMzMMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERHMzMzMzMzMzDMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERHMwczMzMzMzDPDwzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRoaoRERHMwczMzMzMMzPDMzMzPDMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERHMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHMzMzMzMzMzDMzMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhGhERHMzMzMzMzMzDMzMzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhHMHMzBwczMzMzMzMzMzMzMPDMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhHMzMzMzMzMzMzMzMzMzMzMPDMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREcHMzMzMzMzMzMzMzMzMPDOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERHBzMzMzMw8MzMzMzMzMzOjM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHBzMzMzMzMzMw8MzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERHBwRwczMw8MzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERHBwRwczDMzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERHBzMw8MzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERERERHBHME8MzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERERERHBzMzMMzMzMzMzMzMzMzMzMzOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaEREREREREczMzDMzMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEaEREREcHMzMzMzMw8MzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhGqEREREczMzMzMzMzMzMw8MzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERHBzMzMzMzMMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERHBzMwczBE8w8MzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERHMzMwcwRw8MzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERwcwcwRzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERHBzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERHMzMzMzMzMzMzMzMzMMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERHBzMzMzMzMzMwzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERwczMzMw8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRGhEREczMwcwczMzMzMwzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREczMzMzMzMzMzMwzPDM8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREczMzMzMzMzMHMwxMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREczMwcwczMzMzMw8wzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREczMzMzMzMzMzMw8MzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERzMzMzMzMzMw8zDMzMzMzMzOqM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERwczMzMw8wzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERwczMzMw8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsrMzMzMzMzMzMzMPDMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsHMwcHMzMzMzMzMPDMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwczMwczMHMzMzMzMMzMzMzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqyszMzMzMzMzMzMw8Mzw8MzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqyszMzMzMzMzMzMw8MzPDMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqEcHMzMzMzMzMzMzMMzw8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEaEcHMzMzMzMzMzMzMzMzMzDMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREczMzMzMzMw8MzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREczMzMzMzMw8MzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREREREczMzDMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERzMzMzMzMzMwzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERzMzMzMzMzDMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERzMzMzMzMzMzMzDMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREcHMzMzMzMzMzMzMzMw8MzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERzMzMzMzMzMzMzMzMzMzMzDMzMzMzMzOjM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERzMzMzMzMzMzMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERwczMzMzMzMzMzMzMzMzMzMzMzMzMMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRGhEREcHMzMzMzMzMzMzMzMzMzMw8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERoRERERERzMzMzMzMzMzMzMzMzDM8wzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERzMzMzMzMzMzMzDwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERwczMzMzMzMzMzDw8MzMzMzOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaoRERERERERERERERzMHBzMzMzMzMzDM8MzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERoRERERERERERERzMzMzMzMzMzMzDMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREaERERERERERERERERHBzMzMzMzMzDMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERERERERHBzDwzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERERERERERETEzMzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERERERERERHBzDzDMzMzMzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERERzMzMzDwzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERHBzMzMzDzDMzwzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERHBHMwczDwzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERERERERERERERERERERzMzMzDwzPDPDMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERERERERzMHMzDwzPMPDMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERERERERzMzMzDwzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERERERERERERHMHMzDwzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERERERzMHMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERERERzMzMzMzMzMwzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREREREREREREREczMzMzMzMzMzMzDMzw8MzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoREREREREREREREczMzMzMzMzMzMzDMzw8MzMzMzOqM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERERERERERERwczMzMzMzMzMzMwzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaEREaERERERERzBwczMzMzMzMzMwzzDM8MzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqEaERERERERERzMzMwczMzMzMzMwzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERwRwczMzMzMzMzMwzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoREREREREREREREcHMzMzMzDMzMzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERERERERzMzMzDMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERERERERzMzMzMzMzMzMMzM8MzwzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREREREcHMzMzMzMzMzMwzMzM8wzwzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERERHBzMzMzMzMzMzMzMwzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREREREREREcHMzMzMzMzMzMzMzMzMMzPMMzwzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRoaoREREREcHMzMzMzMzMzMzMzMwzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERERERERzMzMzMzMzMzMzDwzMzzMPDOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREREcHMzMzMzMzMzMwzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERERHBzMzMzMzMzMw8MzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhGhERERERERERERERERwTwzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERERzMzMPDMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREREREcEczMHMPDMzMzMzMzMzPDOjM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERERERHMzMzMPDMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREREczMzMPDMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhEREREREcEczMzMzDwzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREREREcHMzMzMzMw8MzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREREREcHMzMzMzMzMzMzMMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqERHMzMzMzMzMzMzMzMzMzMzMMzMzMzOqOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERHMzMzMzMzMzDMzMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERHMwczMzMzMzDMzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoaERHMzMzMzMzMMzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEaERHMwRzMzMw8MzMzwzw8MzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhGqERHMzMzMzMzMzDMzMzMzPDPDMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHMHMzMwczMzDMzMzMzMzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHMHMzBwczMzDMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHMzMzMzMzMzMzMzMzMzMzMPDMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhERERHMzMzMzMzMzMzMzMzMzMzMzMwzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERERHBzMzMzMw8MzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERHBzMzMzMzMzMw8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERHBwRwczMw8MzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhoRERERERHBwRwczDMzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRGhERERHBzMw8MzMzMzMzMzMzMzMzMzMzM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHBHME8MzMzMzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHBzMw8MzMzMzMzMzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqGhERERHBzMzMzDMzMzMzMzMzMzMzMzOqM6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhEREcHMzMzMzMw8MzMzMzMzMzMzMzOjqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoREcHMzMzMzMw8MzMzMzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERERwcwczBw8MzMzMzMzMzMzo6qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERHBzMwczBE8MzMzMzMzMzMzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoRERERERHBzMzMzMw8MzMzMzMzMzOjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"City\"\n    },\n    \"eS_u}}}Ipo%bm5\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAC7RAAAAAAAu11NAAAAALsjU00AAAC7XSJSTQAAu11XI10EALA9MlVV1QS7SyUiVVfVBEu7NTJVVUUAS7RVVSNTTQBLtFRXIlJNALBES1UjU00AAEvkVFXVBAAAsETuVd0EAAAAS+Te7QAAAACw5O5OAAAAAADu7gQAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"pizza\"\n    },\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"]-{;fUb\":\n            case \"Raphael\":return img`\n. . . . . . . . . . . . . . . . . . \n. . . . . 7 7 7 7 7 7 7 . . . . . . \n. . . . 7 7 7 7 7 7 7 7 7 . . . . . \n. . . 7 7 7 7 7 7 7 7 7 7 7 . . . . \n. . 7 2 2 2 e 7 7 7 e 2 2 2 7 . . . \n. 2 2 2 2 2 2 e 7 e 2 2 2 2 2 2 . . \n. 2 2 2 1 1 2 2 2 2 1 1 1 2 2 2 . . \n. 2 2 2 2 f 1 2 2 2 f 1 2 2 2 2 . . \n. 7 2 2 2 2 2 7 7 7 2 2 2 2 2 7 . . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 f f 1 f f f 7 7 7 7 7 7 7 7 . \n. 7 7 7 7 f 1 1 1 f f 7 7 7 7 7 . . \n. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . \n. . . . . . . . . . . . . . . . . . \n`;\n            case \"image2\":\n            case \"Leonardo\":return img`\n. . . . . . . . . . . . . . . . . . \n. . . . . 7 7 7 7 7 7 7 . . . . . . \n. . . . 7 7 7 7 7 7 7 7 7 . . . . . \n. . . 7 7 7 7 7 7 7 7 7 7 7 . . . . \n. . 7 9 8 8 8 7 7 7 8 8 8 9 7 . . . \n. 8 9 8 8 8 8 8 7 8 8 8 8 8 9 8 . . \n. 8 8 8 8 1 8 8 8 8 1 8 8 8 8 8 . . \n. 8 8 8 8 f 1 8 8 8 f 1 8 8 8 8 . . \n. 7 8 8 8 8 8 7 7 7 8 8 8 8 8 7 . . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 f 7 f f f f f 7 7 7 7 7 7 . \n. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . \n. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . \n. . . . . . . . . . . . . . . . . . \n`;\n            case \"image1\":\n            case \"Donatello\":return img`\n. . . . . . . . . . . . . . . . . . \n. . . . . 7 7 7 7 7 7 7 . . . . . . \n. . . . 7 7 7 7 7 7 7 7 7 . . . . . \n. . . 7 7 7 7 7 7 7 7 7 7 7 . . . . \n. . 7 6 6 6 6 7 7 7 6 6 6 6 7 . . . \n. f f f f f f f 7 f f f f f f f . . \n. f 6 6 6 1 6 6 f 6 6 1 6 6 6 f . . \n. f 6 6 1 f 1 6 f 6 1 f 1 6 6 f . . \n. 7 f f f f f f 7 f f f f f f 7 . . \n7 7 7 6 6 6 6 7 7 7 6 6 6 6 7 7 7 . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 . \n7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 . \n. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . \n. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . \n. . . . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"Michelangelo\":return img`\n. . . . . . . . . . . . . . . . . . \n. . . . . 7 7 7 7 7 7 7 . . . . . . \n. . . . 7 7 7 7 7 7 7 7 7 . . . . . \n. . . 7 7 7 7 7 7 7 7 7 7 7 . . . . \n. . 7 4 4 4 5 7 7 7 4 4 4 4 7 . . . \n. 5 4 4 4 4 4 5 7 5 4 4 4 4 4 5 . . \n. 4 4 4 1 1 4 4 4 4 4 1 1 4 4 4 . . \n. 4 4 4 4 f 4 4 4 4 4 f 4 4 4 4 . . \n. 7 4 4 4 4 4 7 7 7 4 4 4 4 4 7 . . \n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . \n7 7 7 f f f 7 7 7 7 7 f f f 7 7 7 . \n7 7 7 f f 1 f f f f f 1 f f 7 7 7 . \n7 7 7 7 7 f f 1 1 1 f f 7 7 7 7 7 . \n. 7 7 7 7 7 7 f f f 7 7 7 7 7 7 . . \n. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . \n. . . . . . . . . . . . . . . . . . \n`;\n            case \"image6\":\n            case \"Lab\":return img`\n9999aa99999a999999aaa999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333aaaaaaaaaaaaaaaaaaaaaaa999999999999aaaaaaaaaaaaaaa\n9999a99999999999aa99aaaaa9aaaaaaaa99999999a99aaa99a9aaaaa99aaaa333333333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaa9aaaaa99999aaaa999aaaaa\n99999999999999aa99999aa9aa999999999aaaaaaa99aa99aaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaa9999aa9999999aa999aaa\n99999999aa9999999aaaa9999999999aaaaaaaaaaaaaa333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaa99a99999999a9999a\n9999999a9999aaaaa99999aaaaaaaaaaaaaaaa3333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaa999999a9999a\n9999999999aa9a9999aaaa9aaaaaaaaa333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaa9aaa9aaaaa\n99999999aa99999aaa999aaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa99999a\na999999a9999aaa9a999aaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaa9999\n999999a999aa9aaaa9aaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa13aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa31aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaa99a999\n9a99aa999a99a99aaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaa113aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3a31aaaa1aaa1aaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaa999a99\n9a9a99aaa9aa99aaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaa11aaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33a1aaaa1aa11aaa111aaaaaaaaaaaaaaaaaa333aaaaaaaaaaaa999a99\n99999aaa9a999aaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa3aaaaaaaaaa11aaa11aaaaa3aaaaaaaaaaaaaaaaaaaaaaaa1111aaaaaaa3a1aaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaa999aa\n9999aaa99999aaaaaaaaaa33aaaaaaaaaaaaaaaaaaa3aaaaaaaaaaa11aaa11aaa1a3aaaaaaaa11111aaa1aaaaaaa111aaaaaaaa3aaaaaaaaa11aaaaaaaaa1aaaaaaaaaaaaaaaaaaa33aaaaaaaaaa9999\n999aa99999aaaaaaaaaaa33aaaaaaaaaaaaaaaaaa13aaaaaaaaaaaa1aaaa11aaa1a3aaaaaaaa11111aaaaaaaaaa111aaaaaa1aa31aaaaaaaaaaaaaaaaaaa1a1aaaaaaaaaaaaaaaaaaa33aaaaaaaaa999\n99a999999aaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa3aa1aaaaaaaaaa1aaaa11aaa1a3aaaaaaaa11a111aaaaaaaa1a11aaaaaa1a3a1aaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaa33aaaaaaaaa9\naa9999a99aaaaaaaaaa3aaaaaaaaaaaaaaaaa11a3aa11aaaaaaaaaa1aaaaa1aaa1a3aaaaaaaaa1aa11aaaaaaaa11111aaaaa1a3a1aaaaaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaaaa33aaaaaaa9\na9999a99aaaaaaaaa33aaaaaaaaaaaaaaaaaa1a3aa111aaaaaaaaa11aaaa11aaa1a3aaaaaa1aaaaa1aaaaaaaaa1aa11aaaaa1a31aaaaaaaaaaaaaaaaaaaaaa1a11aaaaaaaaaaaaaaaaaaaaa333aaaaa9\n9999a99aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aa111aaaaaaaaaa11aaaaa1aaa1a3aaaaaaaaaa11111111aaaaaaa1aaaaaaaa31aaaaaaaaaaaaaaaaaaa1aaa1111aaaaaaaaaaaaaaaaaaaaaa3aaaaa9\n999a99aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aa1111aaaaaaaaaa11aaaaa1aaa1a3aaaaa11a1111111111aaaaaaaaaaaaa1aa31aaaaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaa9\n99a99aaaaaaaaa33aaaaaaaaaaaaaaaaaaaa3aa11111aaaaaaaaaa11aaa1a1aaa1a3aaaaa11a11111111111aaa111aaaaaa1a3a1aaaaaaaaaaaaaaaaaaaaaaa1111111aaaaaaaaaaaaaaaaaaaaaaaaaa\n9a99aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aa111111aaaaaaaaaa11aaa1aaaaa1a3aaaaa11a111111111111111111aaaaa1a3a1aaaaaaaaaaaaaaaaaa1aaaa11111111aaaaaaaaaaaaaaaaaaaaaaaaa\na9aaaaaaaaaa3aaaaaaaaaaaaaaa11aaaa3aa1111a11aaaaaaaaaa11aaa1aaaaa1a3aaaaa1111111111111111111aaaaaaa1a3aaaaaaaaaaaaaaaaaaaaaaaaaa111111111aaaaaaaaaaaaaaaaaaaaaaa\na9aaaaaaaa33aaaaaaaaaaaaaaa111aaa3a11111aa11aaaaaaaaaa1aaaa1aaaaa1a3aaaaa1111111111111111111aaaaaa1aa31aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n9aaaaaaaaa3aaaaaaaaaaaaaaaa111aa3a11111aaa11aaaaaaaaaa1aaaa11aaa11a3aaaaa1111111111111111111aaaaaaaa3a11aaaaaaaaaaaaaaaaa1aaaaaaaaaa3333333aaaaaaaaaaaaaaaaaaaaa\n9aaaaaaaa3aaaaaaaaaaaaaaaa111aa3aaaaaaaaa111aaaaaaaaaa1aaaa11aaaa1a3aaaaa1111111111111111111aaaaa11a3a11aaa1aaaaaaaaaaaaa1aaaa333333aaaaaaaaaaaaaaaaaaaaaaaaaaaa\n9aaaaaaa3aaaaaaaaaaaaaaaaa11a33aaaaaaaaaaa11aaaaaaaaaa1aaaa1aaa111a3aaaaaaa1111111111111111111aaaaaa3a11aaa1aaa11aaaaaaaaaaa1a3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaa3aaaaaaaaaaaaaaaaaa1a3aaaaaaaaaaa1111aaaaaaaaaa1aaaaaa1a111a3aaaaa111111111111111111111a11a1a3a11a1a1aaa11aaaaaaaaaaaa13aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaa3aaaaaaaaaaaaaaaaaaa13aaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaa1a111a3a1a1a11111111111111111111111111a3a1aaaa1a1a1aaaaaaaaaaaaa13aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaa3aaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaa1aa11aaaaaaaaaaaaaaa111aa11a3a1111111111111111111111111111133aa1aaa11aaa1aaaaaaaa1aaaa13aaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaa\n1aaaa3aaaaaaaaaaaaaaa1aaa31aaaaaaaaaaaa1a111aaaaaaaaaaaaa1aa11a11aa3a1a1a1111111111111111111111111a3a11aaa1aaaa1aaa1aaaa1aaaa13aaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaa\naaaa3aaaaaaaaaaaaaaa11aa3a1aaaaaaaaaaaa1a111aaaaaaaaaaaaa11a111aaaa3a1aaa1111111111111111111111111a3a11a1a1aaa11aaa1aaaaaaaaa13aaaaaaaaaaaaaaaa111aaaaaaaaaaaaaa\naaa3aaaaaaaaaaaaaaaa11a3aa1aaaaaaaaaaaaaa111aaaaaaaaaaa11111a1111aa3a11aaa111111111111111111111111a3a11aaa1aaa11aaa1aaaaaaa1a13aaaaaaaaaaaaaaaa1a11aaaaaaaaaaaaa\naa33aaaaaaaaaaaaaaa1113aaaaaaaaaaaaaaaaaa11aaaaaaaaaaa11aa1111111aa3a11aa11111111111111111111111113aa11aaa1aaa11aaaaaaa1aa1a113aaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaa\naaaaaaaaaaaaaaaaaa1aa3aaaaaaaaaaaaaaaaaaa11aaaaaaaaaaa1111111aaaaaa3a111111111111111111111111111113aa11aa11aaa11aa1aaaa1aa1a113aaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaa\naaaaaaaaaaaaaaaaa1aa3aaaaaaaaaaaaaaaaaaa111aaaaaaaaaa11111aaaaaaaaa3a1111111111111111111111111111a3aa1aaa1aaa11aaa1aaaa111aa11aaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaa\naaaaaaaaaaaaaaaaa1a3aaaaaaaaaaaaaaaaaaa1111aaaaaaa1aa11aaaaaaaaaaaa3a1111111111111111111111111111a3a11a11aaaa11aaa1aaaa11aaaa1aaaaaaaaaaaaaaaa11aaa11aaaaaaaaaaa\naaaaaaaaaaaaaaaa113aaaaaaaaaaaaaaaaaaa11111aaaaaaaa1aaaaaaaaaaaaaaa3a1111111111111111111111111111a3a1111aaaaa11aaa1aaa111aaaaaaaaaaaaaaaaaaaaa11aaaa1aaaaaaaaaaa\naaaaaaaaaaaaaaa113aaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaa3a11111111111111111111111111113aa11a1aaaaa11aa1aaaa111aaaaaa1aaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa13aaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaa11aaaaaa3a111111111111111111111111aaaaaaa111aaaaaa11aa1aaaa11aaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa13aaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaa111aaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaa111a1aa1aa111a11aaa1aaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa31aaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaa1aaa1aaaaaaaa111111111111111111111111111a1aa11a111a111aaa1aaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaa11aaaaaaa1a11111111111111111111111111111aaaaaaaa1aaa1aaa1aaa111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa1a11111aaaaaaaaaaaaa1aaaaaaa1a111111111111aaaaaaaaaaaaaaaaaaaaaaaa11a1aa11a1aaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaa1aaaaa1a11111aaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaa1aaaaa1aaa1aaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaa1aa1a11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11aa11aaaaaaa11aaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaa1111111aaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaa111111aa1111aaaaaaaaaaa1a1111111a1111a1aaaaaaaaaaaaaaa11111aaa11a1aa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaa1111aaa1111111aaaaaa1a11111111111111111111111aaaaaaaaaaa1a111aa1111aaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaa111aa1111111111aa111111111111111111111111111111aa11aaaaaaaaaa11aa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111a11aa11aaaaaaaaaa11aa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111a1aaa1aaaaaaaaaaa11a11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa13aaaaaaaaaaaaaaaaa1111111111111111111111111111111111111111111111a1111aaaaaaaaaaaaa11a1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaa3aaaaaaaaaaa3aaaaaaa13aaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111111111aa1aaaa111aaaaa11a1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa3aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111aaa1aaaaaaaaa11aaaaaa1aa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa3aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaa1111111aaa111111111111111111111111111111111111a111aaaaaaaaa111aaaaa11a1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa3aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaa111a111aaaaaaaa11111111111111111111111111111111aaaaaaaaaaaaa1111aaaaaa11a11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa3aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111aaaaaaaaaa1aa1a11aaaaaa11a11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaa3aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11aaa11111111111111111111111111111111aa1aaaaaaaaa1aaa11aaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1a1111111111111111111111111111111aa1aaaaaaaaa1111111aaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaa1aa1aaaaaaaa1111111111111111111111111111111aa1aaaaaaaaa11aaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11a1aaaaaaaa1111111111111111111111111111111aaa11aaaaaaa11aaaaaaaaaaaaaaaa11a11aaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111aa1aaaaaa11111111111111111111111111111111aaaaaaaaaa1aaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111aaaa1111111111111111111111111111111111aaaaaaaa1aaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11a111111aaaa11111111111111111111111111111111111aaaa11aaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999\naaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11a111111aa111a1111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999\naaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11aa111aa111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9a9\naaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111a1a1aaaaaa1111111111111111111111111111111111aaaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9\na9aaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaa11111111111111111111111111111111111aaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99\na9aaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaa11111111111111111111111111111111111aaaaaaaaaaaaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9\n9aaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11a11aa1111111111111111111111111111111111aa1aaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99\n9a9aaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa1aaaaaa1aaaaaaaaa1aaa1aaa1a1111111111111111111111111111111aaaaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n99aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaa111aaaaaaaaa1aaaaa1111111111111111111111111111a111aaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99aa\n9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11aaaaaa111a1aaaaa1aaaaaaaa1111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9a\na9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaa11a1aaaaaaaaaaaaa1111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999a\naa9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11aaaaaa111111aaaaaaaaaaaaa1111111111111111111111aaaaaaa1aaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999a\n99aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaa1111aaaaaaaaaaaaaa111111111111111111111a11aa111aaaaaaaaaaaaa11a11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111aaaaaaaaaaaaaaa11111111111111111111a1111111aaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99aa\n9a9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaa1111111111111111111a11111a1aaaaaaaaa1a1111aaaaaaaaaaaa1aaaaaaaaaa3aaaaaaaaaaaaaaaaaa9aaa\n999aaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111a11aa111aaaaaaa111a11aaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa9aa\n99aaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaa111111111111111111aa11a1111aaaaa11111a1aaaaaaaaaaaaaaaaaaaaaaaa3aa33333333333333333aa9aa\n999aaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111aaaaa11a1111aa1a111111aaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaa9\n9aaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111aaaaaa1111111111111111a1aaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa3aaa9a9\n99aaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaa1aa1111a111111a111aaaaaaaaa1aaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaa3aaa99a9\n99aaaaaaaaaaaaaaaa33aaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111a111111111aa1a1aaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaa3aaa9a99\n9aaaaaaaaaaaaa3333aaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1a1111111aaa1111aaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aaaa9aa9\n99aaaaaaaa3333aaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaa1111aaaa1111aaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa3aa3a99a9\na9aaaa3333aaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1a11aaaaaaaa1aaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaa3aa3aa99a9\n99aa33aaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1a11aaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaa3aa3aa9a9a\n9a9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1a1aaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaa3aa3aaa99a9\n9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaa3aa3aaaaaaaaaaaaaaaaaaaaa3aa3aa99a99\n999aa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaa33aaaaaaaaaaaaaaaaaa3aaa3aa9a999\na9aaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaa33aaaaaaaaaaaaaaaa3aa3aaaa99a9\n999aaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaa33aaaaaaaaaaaaa3aaa3aaaa999a\n999aaa3aaaaaaaaaaaaaaaaaaaaaa33aaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaa33aaaaaaaaaaa3aa3aaaaa99a9\n9a99aaa3aaaaaaaaaaaaaaaaaa333aaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11a1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaa33aaaaaaaa3aaa3aaaaa9a99\n99a9aaa3aaaaaaaaaaaaaaa333aaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaa33aaaaaa3aa3aaaaa9a999\n99993aaa3aaaaaaaaaaa333aaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaa33aaa3aaa3aaaa9aa999\n99aaa3aa3aaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aa3aaaaaaaaaaaaaaaaaaaaaaa3aa3aa3aaaa9aa99a9\na999aa3a3aaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaa99a99\n9999aaa3aaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaa33aaaaaaaaaaaaaaaaaaaaaaa3aa3aaaa9a99a99\n999aaaa3a33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aa3aaaaaa999999\n999aaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaa3aaaaaaaaaaaaaaaaaa33aaa3aaaaa999a999\na99aaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaa3aaaaaaaaaaaaaaaa3aaaa3aaaaaa9999a99\na99a9aaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaa3aaaaaaaaaaaaaa3aaaa3aaaaaa9aa99999\naaaaaaaaaa33aa3aaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaa333333333333333333333333333333333333333333333333a3aaaaaaaaaaaaaaaaaaa33aaaaaaaaaa33aaa33aaaaaaa999a9999\naaaa9aaaaaa33aa33aaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aaaaaaaa3aaaa3aaaaaaaaa9a9a9999\n99a99aaaaaaaa33aa33aaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa3aaaaaa3aaaa3aaaaaaaaaa9a9a9999\n9999aaaaaaaaaaa3aaa333aaaaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaa33aa33aaaaaaaaaa999999999\n99999aaaaaaaaaa333aaaa3aaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaa33aaa3aaaaaaaaaaaa9a9999999\n999a9aaaaaaaaaaaaa3aaaa33aaa33aaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa33aaaa3aaaaaaaaaaaaa9a9a99999\n9999aaaaaaaaaaaaaaa3aaaa3333aaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaa333aaaa33aaaaaaaaaaaa99999999999\n99999aaaaaaaaaaaaaa33aaa33aaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaa33aaaaa33aaaaaaaaaaaaa99a999999999\n9999999aaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaa33aaaa333aaaaaaaaaaaaa99999999999999\n999999999aaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaa333aaaa33aaaaaaaaaaaaaaa9a9a9999a999999\n99999a9a99aaaaaaaaaaaa33aaaaa33333aaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaa33aaaaa33aaaaaaaaaaaaaaa9a9999999a9999999\n999999999999aaaaaaaaaaaa33333aaaaa3333aaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaa33aaaa333aaaaaaaaaaaaaaaaaa99a9a999a9999999\n9999999999999a999aaaaaaaaaaaa3333aaaaa3333aa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa33aaaaaaaaaaaaaaaaa99999999999999999999\n99a9999999a999999a9aaaaaaaaaaaaaa3333aaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaa999a99999999999999999\n99a999a99999999999aa9aaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999a99aa9999999999a999a\n99aaaaaa99999aa9999aa99aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999aa9a99999999a999999aa999a\n`;\n            case \"image4\":\n            case \"City\":return img`\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaa111111aa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111aa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaa111111111a11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111a11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaa1111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa1111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa11111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaa1111111111111111111aaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111aaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa1111a111111111111111111aa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111a111111111111111111aa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaa111111a1111111111111111aaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111a1111111111111111aaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaa1111111111111111111111a111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111a111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaa11111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaa1111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naa111aaaa1111a11111111111111111111111111111aa11aaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaa111aaaa1111a11111111111111111111111111111aa11aaaaaaaaaaaaa1111aaaaaaaaaaaaaa\na11111aa11111111111111111111111111111111111a1111aaaaaaaaaaa111111aaaaaaaaaaaaaaaaaa11111aa11111111111111111111111111111111111a1111aaaaaaaaaaa111111aaaaaaaaaaaaa\na11111a111111111111111111111111111111111111a1111aaaaaaaaaaa111111a111aaaaaaaaaaaaaa11111a111111111111111111111111111111111111a1111aaaaaaaaaaa111111a111aaaaaaaaa\naa1111111111111111111111111111111111111111111111aaaaaaaaaaaaa111111111aaaaaaaaaaaaaa1111111111111111111111111111111111111111111111aaaaaaaaaaaaa111111111aaaaaaaa\na1111111111111111111111111111111111111111111111aaaaaaaaa1111a111111111aaaaaaaaaaaaa1111111111111111111111111111111111111111111111aaaaaaaaa1111a111111111aaaaaaaa\n111111111111111111111111111111111111111111111111aaaaaaa11111111111111aaaaaaaaaa1aa111111111cc1111111111111111111111111111111111111aaaaaaa11111111111111aaaaaaaaa\n1111111111111111111111111111111111111111111111111a111aa111111111111111111aaaaaaccc111111111ccc1111111111111111111111111111111111111a111aa111111111111111111aaaaa\n11111111111111111111111111111111111111111111111111111111111111111111111111aaaa1ccc111111111ccc11111111111111111111111111111111111111111111111111111111111111aaaa\n11111111111111111111111111111111111111111111111111111111111111111111111111aaaccccccc111111ccccc1111111111111111111111111111111111111111111111111111111111111aaaa\n11111111111111111111111111111111111111111ccccccccc111111111111111111111111111ccccccc111111ccccc111111111111111111111111111111111111111111cccccccccc1111111111111\n11111111111111111111111111111111111111111ccccccccc111111111111111111111111111ccccccc111111ccccc111111111111111111111111111111111111111111cccccccccc1111111111111\n1111111111111111111ccc1111111111111111111c11cccccc111111111111111111111111111c11cccc11111ccccccc11111111111111111111cc1111111111111111111cc1c1ccccc1111111111111\n111111111111111111ccccc111111111111111111ccccccc1c111111111111111111111111111ccccccc11111ccccccc1111111111111111111cccc111111111111111111cccccc11cc1111111111111\n11111111111111111cccccc111111111111111111ccccccccc1111111111c11111111ccccc111c1ccccc11111ccccccc11111111111111111cccccc111111111111111111cccccccccc1111111111111\n11111111111111111ccc1c111111c111111111111ccccccccc111111111cc11111111ccccc111ccccccc11111ccccccc11111111111111111ccc1c111111cc11111111111cccc1ccccc11111111cc111\n11111111111111111cccccc11111c111111111111ccccccc1c111111111cc11111111ccccc111ccccccc11111ccccccc11111111111111111cccccc11111cc11111111111ccccccc1cc11111111cc111\n11111111ccc111111cc11c11111ccc11111111111ccccccccc11cccccc1cc11111111ccccc111ccccccc11111ccccccc111111111cc111111ccc1c11111ccc11111111111cccccccccc1ccccccccc111\nc1cc1111ccccccccccc1ccc111ccccc1111111111ccccccc1c11c11ccc1cc111111111cc1cc11ccccccc111cccccccccc1cc1111ccccccccccccc1c1111cccc1111111111cccccc11cc1c11cccccc111\ncccc11111c1cc1ccccccccc111ccccc1111111111ccccccccc11cccc1c1cc11111111cccccc11cc1cccc111ccccccccccccc1111cc1ccc1cccccccc1111cccc1111111111cccccccccc1cccc1cccc111\ncc1c11111ccc1111ccccccc111ccccc1111111111ccccccccc11cccc1cccc11111111cccccc11ccccccc111ccccccccccc1c1111cccc1c11ccccccc1111cccc1111111111cccccccccc1cccc1cccc111\ncccc1111cccccccccccccccc11cccccc11cc1cc1ccccccccccc1c11cccccc11111111cccccc11ccccccc111ccccccccccccc1111cccccccccccccccc11cccccc111c11ccccccccccccc1c11cccccc111\ncc1c1111cccccccccccccccc11cccccc11ccccccccccccccccc1ccccccccc11c11c11cccccc11ccccccc111ccccccccccc1c1111cccccccccccccccc11cccccc111cccccccccccccccc1ccccccccc111\nccccc1cc1c1ccccccccccccc11ccccccc1cccc11ccccccccccccc1133ccccccc1ccc11cc1cc11ccccccc111ccccccccccccccc1ccc1ccccccccccccc11ccccccc111c11cccccc3ccccccc11333ccc1cc\nccccc1cccccccccccccccccccc1cccccc1ccccccccc333ccccccccc333cccccc1ccc1cccccc11ccccccc111ccccccccccccccc1cccccccccccccccccccccccccc1cccccccccc33ccccccccc333ccc1cc\nccccc1ccccccccccccccccccccccccccc1ccccccccc333ccccccccc333cccccccccccccccccccccccccc111ccccccccccccccc1cccccccccccccccccccccccccc1cccccccccc33ccccccccc333cccccc\nccccc1ccccccccccccccccccccccccccc1ccccccc3333333cccccc33333ccccccccccccccccccccccccccc1ccccccccccccccc1cccccccccccccccccccccccccc1c1cccccc3333333ccccc33333ccccc\nccccc333333333ccccccccccccccccccc1ccccccc3333333cccccc33333ccccccccccccccccccccccccccc1cccccccccccccc3333333333cccccccccccccccccc1cccccccc3333333ccccc33333ccccc\nccccc333333333ccccccccccccccccccc1ccccccc3333333cccccc33333ccccccccccccccccccccccccccc1cccccccccccccc3333333333cccccccccccccccccc1cccccccc3333333ccccc33333ccccc\nccccc3cc333333ccccccccccccccccccc1ccccccc3cc3333ccccc3333333cc111ccccccccccccccc33cccc1cccccccccccccc33c3c33333cccccccccccccccccc1cccccccc3333333cccc3333333311c\nccccc3333333c3ccccccccccccccccccc1ccccccc3333333ccccc3333333ccc11cccccccccccccc3333ccc1cccccccccccccc333333cc33cccccccccccccccccc1cccccccc3333333cccc33333333ccc\nccccc333333333cccccccccc3cccccccc33333ccc3c33333ccccc3333333ccccccccccc1ccccc333333ccc1cccccccccccccc3333333333ccccccccccccccccccc3333cccc333c333cccc33333333ccc\nccccc333333333ccccccccc33cccccccc33333ccc3333333ccccc3333333cc1cccccccccccccc333c3cccccc33ccccccccccc3333c33333cccccccc33ccccccccc3333cccc333c333cccc33333333c1c\nccccc3333333c3ccccccccc33cccccccc33333ccc3333333ccccc3333333cc111cccccccccccc333333ccccc33ccccccccccc3333333c33cccccccc33cccccccc333333ccc3333333cccc3333333311c\nccccc333333333cc333333c33cccccccc33333ccc3333333ccccc3333333ccccccccc331ccccc333c3ccccc333ccccccccccc3333333333c333333333cccccccc333333ccc333c333cccc33333333ccc\nccccc3333333c3cc3cc333c33ccccccccc33c33cc3333333ccc3333333333c33cccc3333333333333c3cccc3333cccccccccc333333cc33c3cc333333cccccccc3333333cc3333333cc3333333333333\nccccc333333333cc3333c3c33cccccccc333333cc33c3333ccc3333333333333cccc33c333c33333333cccc3333cccccccccc3333333333c3333c3333cccccccc3333333cc3333c33cc3333333333333\nccccc333333333cc3333c3333cccccccc333333cc3333333ccc33333333333c3cccc3333c3cc3333333cccc3333cccccccccc3333333333c3333c3333cccccccc3333333cc3333333cc3333333333333\nc33c33333333333c3cc333333cccccccc333333cc3333333ccc3333333333333cccc3333333333333333cc333333ccc3cc3333333333333c3cc333333cccccccc3333333cc3333333cc3333333333333\n333333333333333c333333333cc3cc3cc333333cc3333333ccc33333333333c3cccc3333333333333333cc333333ccc3333333333333333c333333333ccccc3cc3333333cc3333333cc3333333333333\n33cc3333333333333cccc3333333c333cc33c33cc3333333ccc333333333333333c333c3333333333333cc3333333ccc3cc33333333333333cc3c3333c33c333c3333333cc3333333cc3333333333333\n3333333333333333333333333333c333c333333cc3333333ccc333333333333333c33333333333333333333333333c333333333333333333333333333c33c33333333333cc3333c33cc3333333333333\n333333333333333333333333333333333333333333333333ccc333333333333333c33333333333333333333333333c333333333333333333333333333333333333333333333333333cc3333333333333\n33333333333333333333333333333333333333333333333333c333333333333333c33333333333333333333333333c3c33333333333333333333333333333333333333333333333333c3333333333333\n33333333333333333333333333333333333333333333333333c333333333333333c33333333333333333333333333c33333333333333333333333333333333c3333333333333333333c3333333333333\n33333333333333333333333333333333333333333333333333c333333333333333c33333333333333333333333333c3333333333333333333333333333333333333333333333333333c3333333333333\n33333333333333333333333333ccc333333333333333333333c333333333333333c33333333333333333333333333c333333333333333333333333333cc3c3c333333333333333333333333333333333\n333333333333333333333333333cc333333333333333333333c333333333333333c33333333333333333333333333c333333333333333333333333333333c3c333333333333333333333333333333333\n33333333333333333333333333333333333c33333333333333c333333333333333333333333333333333333333333333333333333333333333333333333333c3333c3333333333333333333333333333\n33333333333333333333333333c33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333c3333333333333333333333333333333333333\n33333333333333333333333333ccc33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333cc3c33333333333333333333333333333333333\n33333333333333333333333333333333333c3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n33333333333333333a3333333333333333a3333333333333333333333a3333333333333333a3333333333333333333333a3333333333333333a3333333333333333333333a3333333333333333a33333\n333333a333aa33333aa3333a333a3333a3aa333a333333a333aa33333aa3333a333a3333a3aa333a333333a333aa33333aa3333a333a3333a3aa333a333333a333aa33333aa3333a333a3333a3aa333a\n33a333aa3aa33a333aa333aa333aa333a33aa3aa33a333aa3aa33a333aa333aa333aa333a33aa3aa33a333aa3aa33a333aa333aa333aa333a33aa3aa33a333aa3aa33a333aa333aa333aa333a33aa3aa\n33aa33aa3aa33aa333aa3aa3333aa3a3aa3aaaa333aa33aa3aa33aa333aa3aa3333aa3a3aa3aaaa333aa33aa3aa33aa333aa3aa3333aa3a3aa3aaaa333aa33aa3aa33aa333aa3aa3333aa3a3aa3aaaa3\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n`;\n            case \"eS_u}}}Ipo%bm5\":\n            case \"pizza\":return img`\n. . . . . . b b b b . . . . . . \n. . . . . . b 4 4 4 b . . . . . \n. . . . . . b b 4 4 4 b . . . . \n. . . . . b 4 b b b 4 4 b . . . \n. . . . b d 5 5 5 4 b 4 4 b . . \n. . . . b 3 2 3 5 5 4 e 4 4 b . \n. . . b d 2 2 2 5 7 5 4 e 4 4 e \n. . . b 5 3 2 3 5 5 5 5 e e e e \n. . b d 7 5 5 5 3 2 3 5 5 e e e \n. . b 5 5 5 5 5 2 2 2 5 5 d e e \n. b 3 2 3 5 7 5 3 2 3 5 d d e 4 \n. b 2 2 2 5 5 5 5 5 5 d d e 4 . \nb d 3 2 d 5 5 5 d d d 4 4 . . . \nb 5 5 5 5 d d 4 4 4 4 . . . . . \n4 d d d 4 4 4 . . . . . . . . . \n4 4 4 4 . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"FYZr@.A$rvN+8LAu/_$h\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":x9Q1i5{znaav46Y1~,x\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"8?=r?1s$%!|AR+tf7xhO\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"k;xtmP}{Hv8/XJ4JfmDy\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"puO5l3FbJBWQ5r:v.SFZ\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"rqrZnC|Ly643G5Xj;3Kh\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"1:,xBs$=yz,5EBRM;^{.\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"-wYv[`!q~SM,o+^P@sIF\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"!uwdEu29lQNP1EOAR;vi\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"la/jdCwimN=V^:,%UZ0a\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"fL~@5nmZB#3Y()i{17,`\">Moon</variable><variable type=\"KIND_MultiplayerState\" id=\"4aX]Tag}almSu1Yh#8Y=\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"nq=+2BtO@:,/Mrxd`(.|\">life</variable><variable id=\"T^uPUb:rM1`*KXuDUK3c\">locations</variable><variable id=\"JS!BfWA8,N#*@#}3vHAw\">projectile</variable><variable id=\"sqUr3drqXd6o;h|zkI_$\">characters</variable><variable id=\"FVI~Q$-s??nIKC-CPr/|\">index</variable><variable id=\"vx~4_DS4tc2BE;Y^dEC.\">mySprite</variable><variable id=\"2$bvHnUD|Gf%IKIk|w(b\">myBall</variable><variable id=\"mKX7Jy~^SYAp6|Fxv{vl\">x-loc</variable><variable id=\"_dgCA+xg+vE.z_lmer$%\">y-loc</variable><variable id=\"C;y/-#PAqdSa80Uk-a}F\">list</variable><variable id=\"A-8gX8[k4p~V1+h$f@Ih\">number</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT-Multi-Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```