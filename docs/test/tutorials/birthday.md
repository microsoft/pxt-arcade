# Birthday Bow Battle
### @explicitHints true


## Birthday Bow Battle Intro @showdialog

In this tutorial, we'll show you how to create your own Birthday Bow Battle.

![Play Birthday Bow Battle](/static/tutorials/holiday/bbb.gif "This is how you play Birthday Bow Battle")




## {2. Your First Block}

**Ready to start coding?**

Let's set a background.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab
```block
scene.setBackgroundImage(img`.`)
```
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.




#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```


## {3. Your First Block}


- :mouse pointer: Click the empty grey square inside the <br/>
``||scene(noclick):set background image to [ ]||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the birthday background called **bday_bg**.
![Choose the birthday background](/static/tutorials/holiday/bbd.png " ")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`bday_bg`)
```


## {4. Set player 1}

**Add Player 1**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
//@highlight
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```




## {5. Set player 1}

- :mouse pointer: Click the empty grey square inside the <br/>
``||mp(noclick):set player 1||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the red/orange present called **p1**.
![Choose the red present](/static/tutorials/holiday/p1.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    //@highlight
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```





## {6. Check Your Game!}


- :binoculars: Look at your project in the game window to see what your code has done.

~hint Click here to see how 🕵🏽

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")

hint~

You should see your background image with a red/orange present on the left.

When you hover over the game window, the present should move up and down with the arrow keys, but should not move left or right.





## {7. What Did I Do?}

**Read this to learn what each block does...**

Scroll to the bottom to move on to the next instruction.


- :tree:  ---
```block
scene.setBackgroundImage(assets.image`bday_bg`)
```
This block sets the background of the game window to the image that you chose.


- :users: ---
```block
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
```
This block creates a **sprite** assigned to "player1" and sets its **kind** to "Player". It also assigns it the image of a red present.


- :users:  ---
```block
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
```
This block allows the first player to move the sprite for "player1" with the arrow keys. The value of **vx** is set to **0** so that the buttons don't allow the user to move the present from side to side.



- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
```
This block makes sure that the sprite belonging to "player1" doesn't leave the screen when the buttons are pressed for too long.


- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
```
This block sets the leftmost pixels of the sprite belonging to "player1" to be 15 pixels away from the left edge of the screen.





## {8. Set player 2}

**Add Player 2**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty grey square inside the <br/>
``||mp(noclick):set player 2||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the blue present called **p2**.
![Choose the blue present](/static/tutorials/holiday/p2.png " ")



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
//@highlight
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```


## {9. Check Your Game!}


- :binoculars: Look at your project in the game window again.

You should see your background with a red/orange present on the left and a blue present on the right.

You can move the blue present up and down with the **I** and **K** keys on your keyboard.




## {10. Launch Bow}

**Toss a bow into the game!**

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the
```block
sprites.launchBow()
```
block into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.




#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

//@highlight
sprites.launchBow()

```



## {9. Add Points}

**Add points for each bow!**

Let's add an overlap event to detect when a player catches a bow.

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```
bundle into **an empty area** of the workspace.


Now, every time a bow overlaps with a player, the bow will disappear in a burst of confetti, the player will get a point, and a new bow will spawn into the game window.



#### ~ tutorialhint

```blocks

//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```



## {10. Play Game!}


- :binoculars: Play your game again!

You should be able to move both players up and down (using the arrow keys and **I**, **K** on the keyboard.)

Players should each get points when they catch a bow!




## {12. End Game}

Finally, add a countdown timer so the game knows when to declare a winner.

- :ticket: Open the ``||carnival:Carnival||`` category and drag the
```block
carnival.startCountdownGame(60, carnival.WinTypes.Multi)
```
block into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


Now, the game will announce the winner after 60 seconds!

Can you figure out how to make the game longer or shorter?



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})


//@highlight
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```




## {11. Finale}

**🎉 Way to Go 🎉**

You have finished your very own Birthday Bow Battle!

When you're ready, sign-in and click **Done** to challenge a friend to a multiplayer battle online!






```blockconfig.global

scene.setBackgroundImage(img`.`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})

bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```


```package
multiplayer
arcade-carnival=github:microsoft/arcade-carnival#v0.0.7
```

```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
sprites.launchBow()
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```





```customts
namespace SpriteKind {
    //% isKind
    export const Bow = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * just run the code
    */
    //% block="create player 1"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="create player 2"  weight=200
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }
}

namespace sprites{
    /**
    * Launches a new bow either to
    * the right or to the left
    */
    //% block="launch new bow"  weight=200
    export function launchBow () {
        let bow = sprites.create(assets.image`bow`, SpriteKind.Bow)
        bow.setPosition(80, 90)
        bow.setVelocity([-150, 150]._pickRandom(), [75, -75]._pickRandom())
        bow.setBounceOnWall(true)
    }
}

```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQZABkAAAAAu7u7CwAAAAAAAAAAAAAAAOvu7ru7u7u7uwAAAAAAAADr7u6+IiIiIiILAAAAAAAAu+7uviIiIiIiuwAAAAAAsEvu7u4rIiIiIrIAAAAAALBE6+7uKyIiIiIiCwAAAACwRLS7u7siIiIiIrIAAAAAsES0IiKyu7u7u7u7AAAAALBERCsiskREREREtAAAAACwREQrIrJERERERLQAAAAAsEREKyKyRERERES0AAAAALBERCsiskREREREtAAAAACwRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAsES0IiJLREREREQLAAAAALBEtCKyRERERES0AAAAAAAAS7QiskREREREtAAAAAAAALC7IrJERERERLQAAAAAAACwKyKyu7u7u7u7AAAAAAAAACsisgAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQZABkAAAAAAGtmtgAAAAAAAAAAAAAAALBrZra7u7u7u7sAAAAAAACwu2a2mZmZmZm5AAAAAAAAm7lmtpmZmZmZuQAAAAAAsJm5ZraZmZmZmbkAAAAAALCZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACwmblmZpuZmZmZmQsAAAAAsJmZa2a2mZmZmZm5AAAAALCZmWtmtpmZmZmZuQAAAACwmZlrZraZmZmZmbkAAAAAsJmZa2a2mZmZmZm5AAAAALCZuWZmtru7u7u7uwAAAACwmbm7u7tmZmZmZrYAAAAAsJmLiIhrZmZmZmYLAAAAALCbiIiIa2ZmZma2AAAAAAAAu4iIuGZmZmZmuwAAAAAAAIuIiLhmZmZmZgsAAAAAAACLiIi7u7u7u7sAAAAAAAAAu7u7CwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAsLsLAAAAAACw1b3MzAAAALBVvVvFDACwu1W7VdUMALu1u1VbvQywXbVVVbXLALBVtVVV1csAsFW1VVXVywCwXbURVbXLAAC7GxtVu70MALDbsbtb1QwAALBVvVXFDAAAsNW9zMwAAACwuwsAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bow\"\n    },\n    \"image3\": {\n        \"data\": \"hwSgAHgAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3dHd3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd0d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d0R0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dEd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsRERERERGx290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbG7290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbG7ERERERERu90d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0bERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxGxERERERsdsd3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxuxERERERsdsd3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b27GxERuxEREREREbsd3d3dEd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bsREbG7uxsRsREREREREbsd3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsbERERsRsRsRsREREREbEb3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbERERsbsREbsREREREbEb3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbEREREbEREbsREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERG7EREREbEbEbEREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1N0dERG7EREREbEbEbEbEREREREb3dHd3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dRN0dmRG7EREREbG7EbEbEREREREb3dHd3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3UTUXZSZmRGxERERERG7EREbEREREREbHd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URVWZSZmRGxGxERERG7EREbEREREREbHd3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2dkdERGxERERERG7EREbEREREREb0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTUQUERG5GxERERGxGxGxEREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVSVmZm5GxERERGxGxGxEREREREb3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RmZkZGxERERGxGxGxERERERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U3d3d2ZGRERGxERERGxGxGxGxERERER3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URUlZmZmRERuxERERGxGxGxERERERER3d3d3d0dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U1EldkRGRERuxERERGxGxGxEREREREb3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERGxERERERGxGxGxEREREb3d3d3RHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERuxERERERGxGxGxEREREb3d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZuxERERERGxGxGxERERER3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZGxERERERGxGxERERERER3d0d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1E3Z2ZmZERGxERERERGxGxEREREREb3d0R0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1UVZmZmRGxGxERERGxGxG7EREREREb3d3dEd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dVd0dmRGxGxERERGxGxG7EREREREb3d3dHdHd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3R3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERGxGxG7EREREREb3d3d3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERG7ERG7EREREREb3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dkRG7ERERERG7ERG7EREREREb3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVJSZmbEbEREREbG7ERG7EREREbEb3R3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVZ3ZmbEbEREREbEbEbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbsREbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsRERERsbsREbEbEREREbEbHd3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsRERERsRsREbsREREREbEb0d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsREbERuxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R2xGxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERsRsREREREbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERuxERERERsbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERGxGxERERERsdsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERG7ERERERERu90d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REbsbERERERERu90d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0Ru7sRERERERGx290d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3duxERERERERG73d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHREREREREbHb3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3RHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bday_bg\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"p1\":return img`\n.............bbbbbb......\n....bbbbbbbbb444444bb....\nbbbbb4444444444444444b...\nbeeb444444444444444444bb.\nbeeeeb4444444444444444bbb\nbeeeeebb4444bbbbbbbbbbb22\nbeeeeeb2bbbb2222222222222\nbeeeeeb222222222222222222\nbbeeeeb222222222222222222\n.bbbeeb2222222222222bbbbb\n.b22bbb22222bbbbbbbb444b.\n.b2222bbbbbb44444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n..bb222b444444444444444b.\n...bb22b444444444444bbbb.\n.....b2b4444bbbbbbbb.....\n......bbbbbb.............\n.........................\n`;\n            case \"image2\":\n            case \"p2\":return img`\n......bbbbbb.............\n....bb999999bbbbbbbbb....\n...b9999999999999999bbbbb\n.bb999999999999999999b88b\nbbb9999999999999999b8888b\n66bbbbbbbbbbb9999bb88888b\n6666666666666bbbb6b88888b\n666666666666666666b88888b\n666666666666666666b8888bb\nbbbbb6666666666666b88bbb.\n.b999bbbbbbbb66666bbb66b.\n.b99999999999bbbbbb6666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b666bb..\n.bbbb999999999999b66bb...\n.....bbbbbbbb9999b6b.....\n.............bbbbbb......\n.........................\n`;\n            case \"image4\":\n            case \"bow\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . b b b b . . . . . . \n. . . . . b d 5 5 d b . . . . . \n. . . . b b 5 5 5 5 b b . . . . \n. . . . b 5 5 5 5 5 b b . . . . \n. b b b b b b b b b 1 d b b b . \n. b 5 5 5 b 5 5 5 1 b 1 5 5 b . \n. b d 5 5 b 5 5 5 1 1 b 5 d b . \n. b d d b 5 5 5 5 5 5 b d d b . \n. . b b b 5 5 5 5 5 5 b b b . . \n. . c b 5 b 5 5 5 5 b b 5 c . . \n. . c 5 5 5 b d d b b 5 5 c . . \n. . c 5 5 d b b b b d 5 5 c . . \n. . c c d b c c c c b d c c . . \n. . . c c c . . . . c c c . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"bday_bg\":return img`\nd1dddddddddddddddddddddddddd1dddddddddddddddddddddddddddd11dddddddddddddddddddddddd1dddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddd1\nd11dddddddddddddddddddddddd11ddddddddddddddddddddddddddd1111dddddddddddddddddddddd11ddddddddddddddddddddddddd1111dddddddddddddddddddddddd11ddddddddddddddddddd11\nddd11dddddddddddddddddddddd111dddddddddddddddddddddddd11dddd11ddddddddddddddddddd1111dddddddddddddddddddddd11ddd1dddddddddddddddddddddd11d11ddddddddddddddddd11d\nddddd1dddddddddddddddddddd1dd11ddddddddddddddddddddd11ddddddd1dddddddddddddddddd1ddd11dddddddddddddddddddd1dddddd1dddddddddddddddddddd11ddd11ddddddddddddddd11dd\ndddddd1111dddddddddddddddd1ddd1dddddddddddddddddd111dddddddddd11ddddddddddddddd11dddd1ddddddddddddddddd111dddddddd1dddddddddddddddddd11dddd111ddddddddddddd11ddd\ndddddddddd111dddddddddddd1ddddd1ddddddddddddd1111ddddddddddddddd1dddddddddddddd1dddddd1dddddddddddddd11dddddddddddd11ddddddddddddddd1ddddddd1ddddddddddddd11dddd\nddddddddddddd1111ddddddd11dddddd11ddddddd1111dddddddddddddddddddd11ddddddddddd1ddddddd11dddddddddddd1dddddddddddddddd11ddddddddddd11ddddddddd1ddddddddddd11ddddd\nddddddddddddddddd1111dd1ddddddddd1ddd1111dddddddddddddddddddddddddd1ddddddddd11ddddddddd1dddddddd111ddddddddddddddddddd111ddddd111dddddddddddd1dddddddd11ddddddd\nddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddddd1111dddd11ddddddddddd11dddd11ddddddddddddddddddddddddd111111ddddddddddddddd1d111111ddddddddd\ndddddddddddddddddddddd1dddddddddddd11ddddddddddddddddddddddddddddddddddd111111111ddddddd1111111ddddddddddddddddddddddddddd1111dd11111111111111111ddddddddddddddd\ndddddddddddddddddddd11ddddddddddddddd11dddddddddddddddddddddddddddddddd111ddddddd1111111ddd1111ddddddddddddddddddddddddd111ddddddddddddddddddddd11dddddddddddddd\ndddddddddddddddddd11ddddddddddddddddddd11ddddddddddddddddddddddddddddd1dddddddddddddddddddddddd111111dddddddddddddddd111ddddddddddddddddddddddddd11ddddddddddddd\ndddddddddddddddd11ddddddddddddddddddddddd111ddddddddddddddddddddd11111ddddddddddddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddd111ddddddddddd\nddddddddddddddd1dddddddddddddddddddddddddddd11111dddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddd\ndddddddddddddd1dddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddd\nddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddd\ndddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dd\nddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11\nd111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ddddd444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd45dddddd44dddd44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddd54dddd45ddddd44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44d99ddddd55ddddd55dddd45ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd455dd44dd99dd44d55dddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd449d44dd99dd55d9ddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd45dd9ddd5599ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd451991119999ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd119911191991119999111119dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111199911199999119999911119911ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111999111991911199999111999111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111991111199111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb111111119911111999111111bbbbb1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1bbbbbb111199911111991111bbbbb1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bbbbbbbbb111111111bbbbbb111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111b1bbbbbbbbbbbbbbb111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111bb1bb11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111b11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddb111bb1111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bb111111111111111111111111111111111b111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bb11111111111111111111111111111111bb11111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111bbb1111111111111111111111111111bbb111111bb1dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111bbb111111111111111111111111111bbb111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1bb1111111bbbbb111111111111111111111bbbb1111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbb1111111bbbbbb1111111111111111bbbb11111111bb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbbbb1111111bbbbbbbbbbb11111bbbbbbb11111111bb1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11111bbb1111111111bbbbbbbbbbbbbbbb1111111111bb11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bbbb111111111111111111111111111111111bb111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111bbb1111111111111111111111111111bbbb1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111bbbbb1111111111111111111111bbbbbb11111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111bbbbbb11111111111bbbbbbbbbb11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111bbbbbbbbbbbbbbbbbbb11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111b11bbb11111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b111111111111111111111111111111111111111111111111bdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b11111111111111111111111111111111111111111111111bbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111111111111111111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111111111111bbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb1111111111111111111111111111111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb11111111111111111111111111111111bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbb11111111111111111111111bbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb111bbb11bbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\ndddddddd111dddddddddddddddd11dddddddddddddddddd11ddddddddddddddddddddd1dddddddddddddddddddddd1dddddddddddddddddddd1dddddddddddddddddd1ddddddddddddddddd1dddddddd\ndddddd11ddddddddddddddd1111dddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd1dddddddddddddddddddd1ddddddddddddddddd11ddddddddddddddddd1ddddddddd\nddd111dddddddddddddd111dddddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd11dddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1dddddddddd\nd11ddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddddd1ddddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1ddddddddddd\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"+L@37OtAh-@U(h02.~C$\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"@fwth9I9VWKqCr_!k|C9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"QPxgI^19#P;R}ei9=H2(\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"Ib.*;}fFz`nX|a@Cv;48\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"tcGjS24Brz2f(}-2+.XM\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"9.C(:PBLZKYxNFd,AKyu\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"OEG4MWTI*GLfJSeT.eKN\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\":Ea#$n1nPt))9F=Z/B8U\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"@TbO|viA(x*OE^l~VAg{\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"b?V9^K)TLR$a`X?r]10S\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"~`%]c#P#JSb~yB6]osqs\">Moon</variable><variable type=\"KIND_SpriteKind\" id=\"`?JC.+4w3G#`B^^UK3)w\">Player1</variable><variable type=\"KIND_SpriteKind\" id=\")_!+w|]NQZ!.O,ZS.xVL\">Player2</variable><variable type=\"KIND_SpriteKind\" id=\"~r#(!_OeEM1Z7FwJL$QR\">Bow</variable><variable type=\"KIND_MultiplayerState\" id=\"0#~~A-8S60wBa$/tC#P;\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"T5n~2=KNl^tW;jE`-$wd\">life</variable><variable id=\".epr(Ghbmrv^*wX6Mxo`\">player_1</variable><variable id=\";8}vvBtXl8A!el%7ZzR)\">player_2</variable><variable id=\"oVpxnQ_d;[r?R`8=k|a~\">mySprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Birthday Bow Battle Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.22\",\n        \"tag\": \"v1.12.22\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5a74c95efabdfb2d0d4e687bbbf662ac2532527d\",\n        \"target\": \"1.12.22\",\n        \"pxt\": \"8.5.32\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```