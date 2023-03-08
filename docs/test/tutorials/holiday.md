# Holiday Bow Battle
### @explicitHints true


## Bow Battle Intro @showdialog

In this tutorial, we'll show you how to create your own Holiday Bow Battle.

![Play Holiday Bow Battle](/static/tutorials/holiday/hbb.gif "This is how you play Holiday Bow Battle")




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
Choose the winter background called **background**.
![Choose the soft, wintery background](/static/tutorials/holiday/bgd.png " ")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
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
scene.setBackgroundImage(assets.image`background`)
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
``||variables(noclick):set player 1||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the red/orange box called **p1**.
![Choose the red box](/static/tutorials/holiday/p1.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
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
scene.setBackgroundImage(assets.image`background`)
```
This block sets the background of the game window to the image that you chose.


- :users: ---
```block
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
```
This block creates a **sprite** assigned to "player1" and sets its **kind** to "Player". It also assigns it the image of a red box.


- :users:  ---
```block
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
```
This block allows the first player to move the sprite for "player1" with the arrow keys. The value of **vx** is set to **0** so that the buttons don't allow the user to move the box from side to side.



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
``||variables(noclick):set player 2||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the blue box called **p2**.
![Choose the blue box](/static/tutorials/holiday/p2.png " ")



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`background`)

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

You should see your background with a red/orange box on the left and a blue box on the right.

You can move the blue box up and down with the **I** and **K** keys on your keyboard.




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

scene.setBackgroundImage(assets.image`background`)

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

scene.setBackgroundImage(assets.image`background`)

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

You have finished your very own Holiday Bow Battle!

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
scene.setBackgroundImage(assets.image`background`)
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
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQZABkAAAAAu7u7CwAAAAAAAAAAAAAAAOvu7ru7u7u7uwAAAAAAAADr7u6+IiIiIiILAAAAAAAAu+7uviIiIiIiuwAAAAAAsEvu7u4rIiIiIrIAAAAAALBE6+7uKyIiIiIiCwAAAACwRLS7u7siIiIiIrIAAAAAsES0IiKyu7u7u7u7AAAAALBERCsiskREREREtAAAAACwREQrIrJERERERLQAAAAAsEREKyKyRERERES0AAAAALBERCsiskREREREtAAAAACwRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAsES0IiJLREREREQLAAAAALBEtCKyRERERES0AAAAAAAAS7QiskREREREtAAAAAAAALC7IrJERERERLQAAAAAAACwKyKyu7u7u7u7AAAAAAAAACsisgAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQZABkAAAAAAGtmtgAAAAAAAAAAAAAAALBrZra7u7u7u7sAAAAAAACwu2a2mZmZmZm5AAAAAAAAm7lmtpmZmZmZuQAAAAAAsJm5ZraZmZmZmbkAAAAAALCZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACwmblmZpuZmZmZmQsAAAAAsJmZa2a2mZmZmZm5AAAAALCZmWtmtpmZmZmZuQAAAACwmZlrZraZmZmZmbkAAAAAsJmZa2a2mZmZmZm5AAAAALCZuWZmtru7u7u7uwAAAACwmbm7u7tmZmZmZrYAAAAAsJmLiIhrZmZmZmYLAAAAALCbiIiIa2ZmZma2AAAAAAAAu4iIuGZmZmZmuwAAAAAAAIuIiLhmZmZmZgsAAAAAAACLiIi7u7u7u7sAAAAAAAAAu7u7CwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"image3\": {\n        \"data\": \"hwSgAHgAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0dEdERER3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0REdERER3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERER0RHdERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERHRHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0dERERERERERERERER0d3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d0RERHRHREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REd3d3d3d3R0dHREREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3d3dHREdERERERER3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3dHREdEREREREd3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REREREdHd3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dER0d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEREdEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERER0REdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3R0RERERERERHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3R0RERERERHdHRHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3R0RERERERERHdERHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3REREREREREdHdERHREd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdEdERHR0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3dEdHREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERERER0RERER3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0R0RERER3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0RERER0R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdERERER0REdHd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3REdEREdHR0R3dHd3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3d3dHdHRERER3d3d3d3d3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dEdHd3d3d3d0dHRERERERHR3R3d3d3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dHd3d3d3d3REdEREREREdHRHR0d3d3dHd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREdHREREdHR3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEd0RERERER3RERERHREd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REdERER0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERHR0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dEREREd0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERERHd0RERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d0dERER3dEdERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0dEdERER3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0REdERER3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERER0RHdERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERHRHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0dERERERERERERERER0d3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d0RERHRHREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REd3d3d3d3R0dHREREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3d3dHREdERERERER3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3dHREdEREREREd3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REREREdHd3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dER0d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEREdEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERER0REdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3R0RERERERERHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3R0RERERERHdHRHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3R0RERERERERHdERHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3REREREREREdHdERHREd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdEdERHR0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3dEdHREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERERER0RERER3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0R0RERER3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0RERER0R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdERERER0REdHd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3REdEREdHR0R3dHd3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3d3dHdHRERER3d3d3d3d3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dEdHd3d3d3d0dHRERERERHR3R3d3d3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dHd3d3d3d3REdEREREREdHRHR0d3d3dHd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREdHREREdHR3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEd0RERERER3RERERHREd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REdERER0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERHR0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dEREREd0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERERHd0RERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d0dERER3dEdERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0dEdERER3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0REdERER3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERER0RHdERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERHRHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0dERERERERERERERER0d3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d0RERHRHREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REd3d3d3d3R0dHREREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3d3dHREdERERERER3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3dHREdEREREREd3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REREREdHd3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dER0d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEREdEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERER0REdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3R0RERERERERHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3R0RERERERHdHRHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3R0RERERERERHdERHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3REREREREREdHdERHREd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdEdERHR0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3dEdHREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERERER0RERER3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0R0RERER3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0RERER0R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdERERER0REdHd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3REdEREdHR0R3dHd3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3d3dHdHRERER3d3d3d3d3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dEdHd3d3d3d0dHRERERERHR3R3d3d3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dHd3d3d3d3REdEREREREdHRHR0d3d3dHd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREdHREREdHR3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEd0RERERER3RERERHREd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REdERER0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERHR0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dEREREd0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERERHd0RERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d0dERER3dEdERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0dEdERER3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERER0REdERER3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERER0RHdERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER3d3d3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERERERHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERHRHRERER0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0dERERERERERERERER0d3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d0RERHRHREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REd3d3d3d3R0dHREREREREREREd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3d3dHREdERERERER3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3dHREdEREREREd3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REREREdHd3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dER0d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEREdEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERER0REdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3R0RERERERERHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHR3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3R0RERERERHRHRHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdHd3d3d3R0RERERERHdHRHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3R0RERERERERHdERHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3REREREREREdHdERHREd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdEdERHR0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3dEdHREREREREd0RERER0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERERER0RERER3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0R0RERER3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHRERERER0RERER0R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEdERERER0REdHd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3REdEREdHR0R3dHd3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHd3d3d3d3d3dHdHRERER3d3d3d3d3d3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dEdHd3d3d3d0dHRERERERHR3R3d3d3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d3dHd3d3d3d3REdEREREREdHRHR0d3d3dHd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREdHREREdHR3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEd0RERERER3RERERHREd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3REdERER0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERHR0R0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dEREREd0RERER0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERERHd0RERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d3d3d3d3d3d0dERER3dEdERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"background\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAsLsLAAAAAACw1b3MzAAAALBVvVvFDACwu1W7VdUMALu1u1VbvQywXbVVVbXLALBVtVVV1csAsFW1VVXVywCwXbURVbXLAAC7GxtVu70MALDbsbtb1QwAALBVvVXFDAAAsNW9zMwAAACwuwsAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bow\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"p1\":return img`\n.............bbbbbb......\n....bbbbbbbbb444444bb....\nbbbbb4444444444444444b...\nbeeb444444444444444444bb.\nbeeeeb4444444444444444bbb\nbeeeeebb4444bbbbbbbbbbb22\nbeeeeeb2bbbb2222222222222\nbeeeeeb222222222222222222\nbbeeeeb222222222222222222\n.bbbeeb2222222222222bbbbb\n.b22bbb22222bbbbbbbb444b.\n.b2222bbbbbb44444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n..bb222b444444444444444b.\n...bb22b444444444444bbbb.\n.....b2b4444bbbbbbbb.....\n......bbbbbb.............\n.........................\n`;\n            case \"image2\":\n            case \"p2\":return img`\n......bbbbbb.............\n....bb999999bbbbbbbbb....\n...b9999999999999999bbbbb\n.bb999999999999999999b88b\nbbb9999999999999999b8888b\n66bbbbbbbbbbb9999bb88888b\n6666666666666bbbb6b88888b\n666666666666666666b88888b\n666666666666666666b8888bb\nbbbbb6666666666666b88bbb.\n.b999bbbbbbbb66666bbb66b.\n.b99999999999bbbbbb6666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b666bb..\n.bbbb999999999999b66bb...\n.....bbbbbbbb9999b6b.....\n.............bbbbbb......\n.........................\n`;\n            case \"image3\":\n            case \"background\":return img`\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11ddddddd\nddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11ddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddd1ddddddddddddddddddddddd1ddddddddddddddd1ddddddddddddddddddddddd1ddddddddddddddd1ddddddddddddddddddddddd1ddddddddddddddd1ddddddddddddddddddddddd1\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddd1dddddd1dddddddddddddddddddddddddddddddd1dddddd1dddddddddddddddddddddddddddddddd1dddddd1dddddddddddddddddddddddddddddddd1dddddd1dddddddd\ndddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddddd\nddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1dddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddd\ndddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddd\ndddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddd\nddddddd111ddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddd\nddddddd1d1ddddddddddddddddddddddddddddddddddddd1d1ddddddddddddddddddddddddddddddddddddd1d1ddddddddddddddddddddddddddddddddddddd1d1dddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd1dddddd\nddddddddddddddddddddddddddddddddd1ddd1ddddddddddddddddddddddddddddddddddd1ddd1ddddddddddddddddddddddddddddddddddd1ddd1ddddddddddddddddddddddddddddddddddd1ddd1dd\nddddddddddddddddddd1ddddddddddddd1ddddddddddddddddddddddddd1ddddddddddddd1ddddddddddddddddddddddddd1ddddddddddddd1ddddddddddddddddddddddddd1ddddddddddddd1dddddd\ndddddddddddddddddd111dddddddddddd1dddddddddddddddddddddddd111dddddddddddd1dddddddddddddddddddddddd111dddddddddddd1dddddddddddddddddddddddd111dddddddddddd1dddddd\nddddddddddddddddddd1dddddddddddd111dddddddddddddddddddddddd1dddddddddddd111dddddddddddddddddddddddd1dddddddddddd111dddddddddddddddddddddddd1dddddddddddd111ddddd\ndddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddd\ndddddddddddddddddddddd1dddddddddd1dddddddddddddddddddddddddddd1dddddddddd1dddddddddddddddddddddddddddd1dddddddddd1dddddddddddddddddddddddddddd1dddddddddd1dddddd\ndddddd1ddddddddddddddd1dddddddd1111ddddddddddd1ddddddddddddddd1dddddddd1111ddddddddddd1ddddddddddddddd1dddddddd1111ddddddddddd1ddddddddddddddd1dddddddd1111ddddd\ndddddd11ddddddddddddd111dddddddd111ddddddddddd11ddddddddddddd111dddddddd111ddddddddddd11ddddddddddddd111dddddddd111ddddddddddd11ddddddddddddd111dddddddd111ddddd\ndddddd1ddddddddddddddd1dddddd11111dddddddddddd1ddddddddddddddd1dddddd11111dddddddddddd1ddddddddddddddd1dddddd11111dddddddddddd1ddddddddddddddd1dddddd11111dddddd\nddddd111dddddddddddddd111ddddd111111ddddddddd111dddddddddddddd111ddddd111111ddddddddd111dddddddddddddd111ddddd111111ddddddddd111dddddddddddddd111ddddd111111dddd\ndddddd111dddddddddddd111ddddddd11111dddddddddd111dddddddddddd111ddddddd11111dddddddddd111dddddddddddd111ddddddd11111dddddddddd111dddddddddddd111ddddddd11111dddd\nddddd111dddddddddddd1111ddddd111111dddddddddd111dddddddddddd1111ddddd111111dddddddddd111dddddddddddd1111ddddd111111dddddddddd111dddddddddddd1111ddddd111111ddddd\n11dddd111ddddddddddddd111dddddd11111111111dddd111ddddddddddddd111dddddd11111111111dddd111ddddddddddddd111dddddd11111111111dddd111ddddddddddddd111dddddd111111111\n1111111ddddddddddddd1111dddd1111111111111111111ddddddddddddd1111dddd1111111111111111111ddddddddddddd1111dddd1111111111111111111ddddddddddddd1111dddd111111111111\n11111111111dddddddddd111111111111111111111111111111dddddddddd111111111111111111111111111111dddddddddd111111111111111111111111111111dddddddddd1111111111111111111\n11111111111111dddddd1111111111111111111111111111111111dddddd1111111111111111111111111111111111dddddd1111111111111111111111111111111111dddddd11111111111111111111\n111111111111dd11111111111111dd1111111111111111111111dd11111111111111dd1111111111111111111111dd11111111111111dd1111111111111111111111dd11111111111111dd1111111111\n111111111dd111111111111111111111dd111111111111111dd111111111111111111111dd111111111111111dd111111111111111111111dd111111111111111dd111111111111111111111dd111111\n1111111d1111111111111111111111111111d1111111111d1111111111111111111111111111d1111111111d1111111111111111111111111111d1111111111d1111111111111111111111111111d111\n11111d111111111111111111111111ddddd111dd11111d111111111111111111111111ddddd111dd11111d111111111111111111111111ddddd111dd11111d111111111111111111111111ddddd111dd\nddd111111111d11111111111111111d111ddd11dddd111111111d11111111111111111d111ddd11dddd111111111d11111111111111111d111ddd11dddd111111111d11111111111111111d111ddd11d\n111111111111d11111111111111111dd111dddd1111111111111d11111111111111111dd111dddd1111111111111d11111111111111111dd111dddd1111111111111d11111111111111111dd111dddd1\nd11111111111dd111111111111111dd111111dddd11111111111dd111111111111111dd111111dddd11111111111dd111111111111111dd111111dddd11111111111dd111111111111111dd111111ddd\nddd11111111ddd1111111111111111d11111111dddd11111111ddd1111111111111111d11111111dddd11111111ddd1111111111111111d11111111dddd11111111ddd1111111111111111d11111111d\n11dddd111111d1111111111111111dddd111111111dddd111111d1111111111111111dddd111111111dddd111111d1111111111111111dddd111111111dddd111111d1111111111111111dddd1111111\n11111111111ddd1111111111111111dd1111111111111111111ddd1111111111111111dd1111111111111111111ddd1111111111111111dd1111111111111111111ddd1111111111111111dd11111111\n111111111111ddd11111111111ddddddd1111111111111111111ddd11111111111ddddddd1111111111111111111ddd11111111111ddddddd1111111111111111111ddd11111111111ddddddd1111111\n11111111111dd1111111111dddd11dddd111111111111111111dd1111111111dddd11dddd111111111111111111dd1111111111dddd11dddd111111111111111111dd1111111111dddd11dddd1111111\n11111111111ddd1111111dddd11111dddd11111111111111111ddd1111111dddd11111dddd11111111111111111ddd1111111dddd11111dddd11111111111111111ddd1111111dddd11111dddd111111\n1111111111ddddd1111dddd11111ddddd11111111111111111ddddd1111dddd11111ddddd11111111111111111ddddd1111dddd11111ddddd11111111111111111ddddd1111dddd11111ddddd1111111\n11111111111ddd11dddddd1111111dddddd1111111111111111ddd11dddddd1111111dddddd1111111111111111ddd11dddddd1111111dddddd1111111111111111ddd11dddddd1111111dddddd11111\ndddd11111ddddddddddd11111111dddddd1111dddddd11111ddddddddddd11111111dddddd1111dddddd11111ddddddddddd11111111dddddd1111dddddd11111ddddddddddd11111111dddddd1111dd\nddddddd11ddddd1111111111111111dddd1dddddddddddd11ddddd1111111111111111dddd1dddddddddddd11ddddd1111111111111111dddd1dddddddddddd11ddddd1111111111111111dddd1ddddd\ndddddddddddddddd11111111111ddddd1ddddddddddddddddddddddd11111111111ddddd1ddddddddddddddddddddddd11111111111ddddd1ddddddddddddddddddddddd11111111111ddddd1ddddddd\nddddddddddddddd1111111111111ddd1ddddddddddddddddddddddd1111111111111ddd1ddddddddddddddddddddddd1111111111111ddd1ddddddddddddddddddddddd1111111111111ddd1dddddddd\ndddddddddddddddd111111111111d1dddddddddddddddddddddddddd111111111111d1dddddddddddddddddddddddddd111111111111d1dddddddddddddddddddddddddd111111111111d1dddddddddd\nddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111dddddddddddd\nddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddd1111ddddddddddddddd\nddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111dddddddddddddddddd\nddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddd11111dd\n1dddddddddddddddddddddddddddddd11ddddd111dddddddddddddddddddddddddddddd11ddddd111dddddddddddddddddddddddddddddd11ddddd111dddddddddddddddddddddddddddddd11ddddd11\n1111dddddddddddddddddddddddd111ddddddddd1111dddddddddddddddddddddddd111ddddddddd1111dddddddddddddddddddddddd111ddddddddd1111dddddddddddddddddddddddd111ddddddddd\ndd1111dddddddddddddddddddd11dddddddddddddd1111dddddddddddddddddddd11dddddddddddddd1111dddddddddddddddddddd11dddddddddddddd1111dddddddddddddddddddd11dddddddddddd\ndddd11111dddddddddddddd111dddddddddddddddddd11111dddddddddddddd111dddddddddddddddddd11111dddddddddddddd111dddddddddddddddddd11111dddddddddddddd111dddddddddddddd\ndddddd1111111ddddddddd1ddddddddddddddddddddddd1111111ddddddddd1ddddddddddddddddddddddd1111111ddddddddd1ddddddddddddddddddddddd1111111ddddddddd1ddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n`;\n            case \"image4\":\n            case \"bow\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . b b b b . . . . . . \n. . . . . b d 5 5 d b . . . . . \n. . . . b b 5 5 5 5 b b . . . . \n. . . . b 5 5 5 5 5 b b . . . . \n. b b b b b b b b b 1 d b b b . \n. b 5 5 5 b 5 5 5 1 b 1 5 5 b . \n. b d 5 5 b 5 5 5 1 1 b 5 d b . \n. b d d b 5 5 5 5 5 5 b d d b . \n. . b b b 5 5 5 5 5 5 b b b . . \n. . c b 5 b 5 5 5 5 b b 5 c . . \n. . c 5 5 5 b d d b b 5 5 c . . \n. . c 5 5 d b b b b d 5 5 c . . \n. . c c d b c c c c b d c c . . \n. . . c c c . . . . c c c . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_MultiplayerState\" id=\"-ZC+lz=c_AXHv!:)~pvM\">Score</variable><variable type=\"KIND_MultiplayerState\" id=\"ZofwVLKU_EylEx$I(7.!\">Lives</variable><variable id=\"Wz_nj/6IVPvg{syI.w$X\">bow</variable><variable id=\",dddnum_7$A1y:^k5#mp\">player_1</variable><variable id=\"Rceb^1E*6sc!PaCR0CUm\">player_2</variable><variable id=\"fz{KgoYP#-JS+6Is5uBt\">index</variable><variable id=\"onVrwafD5]G-LH%{zJ0h\">wall1</variable><variable id=\"Ys8b]J69]C9=_xAi09cD\">wall2</variable><variable type=\"KIND_SpriteKind\" id=\"9m|6;!RFH-xxFlCrmO+Y\">Player1</variable><variable type=\"KIND_SpriteKind\" id=\"P43lgreD$rcaG,=Qqo*s\">Player2</variable><variable type=\"KIND_SpriteKind\" id=\"G4Zc7_*1827#onUTuw:K\">Player</variable><variable type=\"KIND_SpriteKind\" id=\")cFh{}tr:FLH9+]**[n|\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"YA+YiD-tv4S5E8(V6H1A\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"K)AXH23.q.Vc-WExjbyl\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\":*ZnOk4Qb31)At/^(n:6\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"jeDwvWaDeP,DGFb?p/:F\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"tWl`ecSJQu;lFGY2|H44\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"xYj2+1MG%%LG[z]Gb`o8\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"C5{Qj}Kn(+k`qGm[yRgU\">Moon</variable><variable type=\"KIND_SpriteKind\" id=\"s!_.~@^m0;QRvQ:!VPIJ\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"ztRO%J4tCGUvNux+BqJ)\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"U*z^kPwat^5jk{Kt1[9K\">Bow</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`background`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\",dddnum_7$A1y:^k5#mp\">player_1</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`p1`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image1\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player1</field></shadow></value></block></value><next><block type=\"mp_moveWithButtons\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><value name=\"player\"><shadow type=\"mp_playernumber\"><field name=\"num\">mp.PlayerNumber.One</field></shadow></value><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\",dddnum_7$A1y:^k5#mp\">player_1</field></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">150</field></shadow></value><next><block type=\"spritesetsetstayinscreen\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\",dddnum_7$A1y:^k5#mp\">player_1</field></block></value><value name=\"on\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.left@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\",dddnum_7$A1y:^k5#mp\">player_1</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">15</field></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"Rceb^1E*6sc!PaCR0CUm\">player_2</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`p2`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image2\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player2</field></shadow></value></block></value><next><block type=\"mp_moveWithButtons\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><value name=\"player\"><shadow type=\"mp_playernumber\"><field name=\"num\">mp.PlayerNumber.Two</field></shadow></value><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"Rceb^1E*6sc!PaCR0CUm\">player_2</field></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">150</field></shadow></value><next><block type=\"spritesetsetstayinscreen\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"Rceb^1E*6sc!PaCR0CUm\">player_2</field></block></value><value name=\"on\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.right@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"Rceb^1E*6sc!PaCR0CUm\">player_2</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">145</field></shadow></value><next><block type=\"function_call\"><mutation name=\"launch_bow\" functionid=\"3$_x+@=KUWyLqHEz_O|R\"></mutation><next><block type=\"start_countdown_game\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"winType\">carnival.WinTypes.Multi</field><field name=\"winEffect\">effects.confetti</field><value name=\"myTime\"><shadow type=\"math_number\"><field name=\"NUM\">60</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"728\" y=\"0\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player1</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Bow</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><field name=\"effect\">effects.confetti</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">200</field></shadow></value><next><block type=\"mp_changePlayerStateBy\"><value name=\"player\"><shadow type=\"mp_playernumber\"><field name=\"num\">mp.PlayerNumber.One</field></shadow></value><value name=\"state\"><shadow type=\"mp_multiplayerstate\"><field name=\"MEMBER\">Score</field></shadow></value><value name=\"deltaValue\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><next><block type=\"function_call\"><mutation name=\"launch_bow\" functionid=\"3$_x+@=KUWyLqHEz_O|R\"></mutation></block></next></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"1480\" y=\"0\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player2</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Bow</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"2\" _input_init=\"true\"></mutation><field name=\"effect\">effects.confetti</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">200</field></shadow></value><next><block type=\"mp_changePlayerStateBy\"><value name=\"player\"><shadow type=\"mp_playernumber\"><field name=\"num\">mp.PlayerNumber.Two</field></shadow></value><value name=\"state\"><shadow type=\"mp_multiplayerstate\"><field name=\"MEMBER\">Score</field></shadow></value><value name=\"deltaValue\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><next><block type=\"function_call\"><mutation name=\"launch_bow\" functionid=\"3$_x+@=KUWyLqHEz_O|R\"></mutation></block></next></block></next></block></statement></block><block type=\"function_definition\" x=\"50\" y=\"690\"><mutation name=\"launch_bow\" functionid=\"3$_x+@=KUWyLqHEz_O|R\"></mutation><field name=\"function_name\">launch_bow</field><statement name=\"STACK\"><block type=\"variables_set\"><field name=\"VAR\" id=\"Wz_nj/6IVPvg{syI.w$X\">bow</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`bow`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image4\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Bow</field></shadow></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"Wz_nj/6IVPvg{syI.w$X\">bow</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"><field name=\"index\">80</field></shadow></value><value name=\"y\"><shadow type=\"positionPicker\"><field name=\"index\">90</field></shadow></value><next><block type=\"spritesetvel\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"Wz_nj/6IVPvg{syI.w$X\">bow</field></block></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"></shadow><block type=\"array_pickRandom\"><value name=\"list\"><block type=\"lists_create_with\"><mutation items=\"2\" horizontalafter=\"3\"></mutation><value name=\"ADD0\"><shadow type=\"math_number\"><field name=\"NUM\">-150</field></shadow></value><value name=\"ADD1\"><shadow type=\"math_number\"><field name=\"NUM\">150</field></shadow></value></block></value></block></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"></shadow><block type=\"array_pickRandom\"><value name=\"list\"><block type=\"lists_create_with\"><mutation items=\"2\" horizontalafter=\"3\"></mutation><value name=\"ADD0\"><shadow type=\"math_number\"><field name=\"NUM\">75</field></shadow></value><value name=\"ADD1\"><shadow type=\"math_number\"><field name=\"NUM\">-75</field></shadow></value></block></value></block></value><next><block type=\"spritesetsetbounceonwall\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"Wz_nj/6IVPvg{syI.w$X\">bow</field></block></value><value name=\"on\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value></block></next></block></next></block></next></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Holiday_2022_Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"carnival\": \"github:microsoft/arcade-carnival#v0.0.7\",\n        \"arcade-mp\": \"github:riknoll/arcade-mp#v0.1.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```