# Pizza Party
### @explicitHints true


## Pizza Party Intro @showdialog

Are you ready to code a pizza party?

Follow this tutorial to create your own multiplayer experience that you can play online together with family and friends!



![Play Pizza Party](/static/tutorials/pizza-party/playtime.gif "You can play with up to 4 people!")





## {2. Your First Block}

**Meet the Cast!**

We've already loaded the images of each character into an array.

This is how the program will know which image
to assign to each player.


~hint What is an array?🕵🏽

---

In computer science, an **ARRAY** is an ordered list of items.

We give this list a name, so that we can ask for items from this list later.

For example, the list in our program is called **characters**.
If we want to flip the first image from this list, we can add a block
like this to our program:


```block
let characters: Image[] = []
characters[0].flipX()
```

hint~


#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
pizzaassets.P1,
pizzaassets.P2,
pizzaassets.P3,
pizzaassets.P4
]
```




## {3. Set the Scene}

**Let's decide where the action happens.**

- :tree: Open the ``||scene:Scene||`` category and drag <br/>
``||scene:set background image to [ ]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.

- :paint brush: Click the empty square in the background block and flip to the **Gallery** tab.
![Switch to the Gallery tab](/static/skillmap/assets/gallery.png " ")
then choose the first background image called **City**.




#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
pizzaassets.P1,
pizzaassets.P2,
pizzaassets.P3,
pizzaassets.P4
]

//@highlight
scene.setBackgroundImage(pizzaassets.City)
```




## {4. Set players}

**Add Player 1**

- :suitcase: Open the ``||pizza:Pizza||`` category and drag <br/>
``||pizza:set game for [1] player(s) with [characters]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


~hint Pizza category? 🍕

---

Within special tutorials, you'll sometimes see custom categories that we don't offer in our normal interface. These categories are **Extensions**.

When creating custom projects or tutorials, people can craft their own blocks that others can add into their toolbox as an extension.  Since we can't get to the **Extensions** gallery from a tutorial, the categories you need have been provided in the toolbox by default.

If you want to use the ``||pizza:Pizza||`` category in another tutorial someday, make sure to grab the share link for this finished project and you'll be able to import the blocks from this tutorial into another project!

hint~





#### ~ tutorialhint

```blocks
let characters: Image[] = []

characters = [
pizzaassets.P1,
pizzaassets.P2,
pizzaassets.P3,
pizzaassets.P4
]
scene.setBackgroundImage(pizzaassets.City)
//@highlight
pizza.setPlayersWith (characters, 1)
```



## {5. Check Your Game!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should see a single sprite in the game window that looks like the first image in your array.

**Click on the game window and try moving your _sprite_ using the arrow keys or joypad.**


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

![Test with the player buttons to the left of the game window](/static/tutorials/pizza-party/players1.png "An image highlighting the player icons")

📝 _Note: In actual game play, each player will join in order. To simulate this, make sure to test with **Player 1** first, then **Player 2**, then **Player 3**, etc._



#### ~ tutorialhint

```blocks
//@highlight
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
```



## {7. Add Pizza}

**Let the Pizza Fly!**

- :circle: Open the ``||game:Game||`` category and drag the<br/>
``||game: on game update every [500] ms||``<br/>
bundle into **an empty** area of the workspace.


- :mouse pointer: Click the image square inside the bundle if you want to choose a different pizza slice from the **Gallery**.



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

**EVENTS** are things that might or might not happen while the code is running.
A player might press a button, a timer might run out, or one sprite might overlap with another.

Each of those things is an event that you can assign a special action to in Arcade.

hint~


~hint What are projectiles? 🕵️

---

In MakeCode Arcade, **PROJECTILES** are sprites that move on their own,
often in large quantities.

Projectiles have extra properties that normal sprites don't have.
For example, they destroy themselves once they leave the screen so
the user's computer doesn't get overwhelmed.

hint~


~hint What is velocity? 🕵🏻‍♀️

---

**VELOCITY** is the speed that something is moving in a certain direction.

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
This **event** block triggers an action every time one of your Player sprites overlaps one of the projectile sprites. (Whenever a character overlaps the pizza.)

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
This **event** block triggers an action whenever two Players (characters) overlap.

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


- :binoculars: Test your project with two or more players.

As **Player 1**, try holding down the (A) button (or space bar) and running into another player.  What happens?


📝 _Note: At the moment, a player can only bump someone with a higher number. We'll fix that in the next step._







## {14. Again}

What if the other player is holding down _their_ (A) button?  Let's add code that reverses the whammy.

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

- :binoculars: Find the **Player/Projectile** ``||sprites(noclick):on overlap||`` event that's **already in your workspace.**

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
    if (!(false)) {  }
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
```


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {  })
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

- :mouse pointer: Click the empty rectagle in the<br/>
``||music(noclick):play song...||`` block and switch to **My Assets** to choose the **countdown**.



#### ~ tutorialhint

```blocks
let characters = [
pizzaassets.P1,
pizzaassets.P2,
pizzaassets.P3,
pizzaassets.P4
]
scene.setBackgroundImage(pizzaassets.City)
pizza.setPlayersWith (characters, 1)
game.splash("Press (A) when everyone is", "ready to start the game")

music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)


```





## {18. Test It}


- :binoculars: Test your final experience.

You should be able to rack up points as you grab pizza until you press the (A) button, then the pizza should fly right by you.

**For extra fun, login so you can play online with friends!**






## {Finale}

**🍕 Cowabunga 🍕**

You have finished your multiplayer experience!

When you're ready, sign-in, then select **Done** to start an online multiplayer session with up to three friends.

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
pizzaassets.P1,
pizzaassets.P2,
pizzaassets.P3,
pizzaassets.P4
]


```



```ghost

scene.setBackgroundColor(1)

```



```package
multiplayer
pizza-assets=github:kiki-lee/pizza-assets#v0.0.4
```


```customts

//% color=#b79900 icon="\uf1ce"
namespace pizza {

    // Make sure not to remove later player when earlier player tested
    export let playersConnected=0;

    //% blockId=set_players
    //% block="set game for $num player(s) with $list"
    //% num.defl=1
    //% list.shadow=variables_get
    //% list.defl=characters

    export function setPlayersWith(list: Image[], num: number) {
        if(num >= pizza.playersConnected){
            pizza.playersConnected = num;
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
            for (let index = 0; index < num; index++) {
                if (mp.isConnected(mp.getPlayerByIndex(index)) && index + 1 <= list.length){
                    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(xloc.shift(), yloc.shift())
                    mp.getPlayerSprite(mp.getPlayerByIndex(index)).z = 1000
                    mp.moveWithButtons(mp.getPlayerByIndex(index))
                }
            }
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
  "images.g.jres": "{\n    \"EM~exxT809P9NBm_MJip\": {\n        \"data\": \"003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"countdown\",\n        \"namespace\": \"mySongs.\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"EM~exxT809P9NBm_MJip\":\n            case \"countdown\":return hex`003c000408010204001c00100500640000041e000004000000000000000000000000000a000004120000000400012408000c00012410001400012407001c00020a006400f401640000040000000000000000000000000000000003060018001c000124`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"FYZr@.A$rvN+8LAu/_$h\">Player</variable><variable type=\"KIND_SpriteKind\" id=\":x9Q1i5{znaav46Y1~,x\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"8?=r?1s$%!|AR+tf7xhO\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"k;xtmP}{Hv8/XJ4JfmDy\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"puO5l3FbJBWQ5r:v.SFZ\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"rqrZnC|Ly643G5Xj;3Kh\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"1:,xBs$=yz,5EBRM;^{.\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"-wYv[`!q~SM,o+^P@sIF\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"!uwdEu29lQNP1EOAR;vi\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"la/jdCwimN=V^:,%UZ0a\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"fL~@5nmZB#3Y()i{17,`\">Moon</variable><variable type=\"KIND_MultiplayerState\" id=\"4aX]Tag}almSu1Yh#8Y=\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"nq=+2BtO@:,/Mrxd`(.|\">life</variable><variable id=\"T^uPUb:rM1`*KXuDUK3c\">locations</variable><variable id=\"JS!BfWA8,N#*@#}3vHAw\">projectile</variable><variable id=\"sqUr3drqXd6o;h|zkI_$\">characters</variable><variable id=\"FVI~Q$-s??nIKC-CPr/|\">index</variable><variable id=\"vx~4_DS4tc2BE;Y^dEC.\">mySprite</variable><variable id=\"2$bvHnUD|Gf%IKIk|w(b\">myBall</variable><variable id=\"mKX7Jy~^SYAp6|Fxv{vl\">x-loc</variable><variable id=\"_dgCA+xg+vE.z_lmer$%\">y-loc</variable><variable id=\"C;y/-#PAqdSa80Uk-a}F\">list</variable><variable id=\"A-8gX8[k4p~V1+h$f@Ih\">number</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"TMNT_Music\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.30\",\n        \"tag\": \"v1.12.30\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/33228b1cc7e1bea3f728c26a6047bdef35fd2c09\",\n        \"target\": \"1.12.30\",\n        \"pxt\": \"8.5.41\"\n    },\n    \"preferredEditor\": \"tsprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#DFDDDE\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#8E2EC4\",\n        \"#408325\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#EBF8F9\",\n        \"#A4839F\",\n        \"#F9F6E1\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
