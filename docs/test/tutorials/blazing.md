# Blazing Glory
### @explicitHints true


## Blazing Glory Intro @showdialog

In this tutorial, we'll show you how to create a multiplayer dodging game.

![Play Blazing Glory](/static/tutorials/blazing/blaze.gif " ")




## {2. Your First Block}

**Ready to start coding?**

Let's add an array of images that we'll use when we set up our players later.

---

- :function: Click **Advanced** to open the
``||function:Function||`` category and drag the<br/>
``||function:set_up_for_players [1]||`` <br/>
block into **the end** of the <br/>
``||loops(noclick): on start||``<br/>
container already in the workspace.


- :mouse pointer: Change the number to reflect the number of players you want for your game.



#### ~ tutorialhint

```blocks
let list: Image[] = []
list = [
assets.image`p1`,
assets.image`p2`,
assets.image`p4`,
assets.image`p3`
]
scene.setBackgroundImage(assets.image`bg`)
//@highlight
set_up_for_players(2)

//@hide
function set_up_for_players (num: number) {
}
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







## {6. Move the Horses}

**Make the horses move when you press the A button.**

- :users: Open the ``||mp:Multiplayer||`` category and drag the <br/>
``||mp:on [A] button [pressed] for [player]||`` <br/>
bundle into **an empty** area of the workspace. <br/>

Now, when any player presses their (A) button, their horse will move 1.5 pixels to the right.

```block
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        let locations: tiles.Location[] = []
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
```


#### ~ tutorialhint

```blocks
//@highlight
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).x += 1.5
})
```



## {7. Add the Finish Line}

**Add an Finish Line!**

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||variables: set [finish] to sprite of kind [Finish]||``
<br/>block into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty grey square and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the background called **finish**.
![Choose the background](/static/tutorials/horse/finish.png " ")



#### ~ tutorialhint

```blocks
let list: Image[] = []
list = [
assets.image`p1`,
assets.image`p2`,
assets.image`p4`,
assets.image`p3`
]
scene.setBackgroundImage(assets.image`bg`)
set_up_for_players(2)
//@highlight
    let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)

//@hide
function set_up_for_players (num: number) {
}
```




## {8. Move the Finish Line}

**Move the finish line to the end.**

- :paper plane: Open the ``||sprites:Sprites||`` category and drag<br/>
``||sprites: set [finish] position to x [150] y [50]||``
<br/>into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
//@hide
function set_up_for_players (num: number) {
}

    let list: Image[] = []
    list = [
    assets.image`p1`,
    assets.image`p2`,
    assets.image`p4`,
    assets.image`p3`
    ]
    scene.setBackgroundImage(assets.image`bg`)
    set_up_for_players(2)
    let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
//@highlight
    finish.setPosition(150, 50)
```



## {9. Check Your Game!}


- :binoculars: Play your game.

You should see the red horse move when you press the **(A) button**.

You can make **player 2** move by pressing the **U key** on your keyboard, or your can click the multiplayer icons to test any player with the space bar.

![Play with the emulator buttons](/static/tutorials/horse/multi.png " ")


## {10. Overlap Finish Line}

**We need a winner when someone reaches the finish line.**

- :users: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||sprites:on [sprite] of kind [Player] overlaps||``
<br/>bundle into **an empty** area of the workspace.


This event will call a custom "game over" screen, passing through the information of the player that touched the line first.



#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    carnival.customGameOverExpanded("Player " + mp.getPlayerProperty(mp.getPlayerBySprite(sprite), mp.PlayerProperty.Number) + " Wins!", effects.confetti, music.powerUp, carnival.ScoreTypes.LTime)
})
```




## {11. Play Again!}


- :binoculars: Go for the win!

Play your game against yourself using the **space bar** and **U key** on your keyboard.  You should win when you get to the finish line.



## {12. Add the finishing touches!}

Let's add a screen that keeps the game from starting until everyone is ready.

We can also add a label, and a tone to let everyone know when it's time to play!

- :suitcase: Open the ``||game:Game||`` category and drag the <br/>
 ``||game:finishing touches||``
<br/>bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
//@hide
function set_up_for_players (num: number) {
}

    let list: Image[] = []
    list = [
    assets.image`p1`,
    assets.image`p2`,
    assets.image`p4`,
    assets.image`p3`
    ]
    scene.setBackgroundImage(assets.image`bg`)
    set_up_for_players(2)
    let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
    finish.setPosition(150, 50)

game.wrap(function () {
//@highlight
    carnival.addLabelTo("Horse Race", carnival.Areas.Bottom)
//@highlight
    game.showLongText("P1, press the A button to Start", DialogLayout.Bottom)
//@highlight
    music.bigCrash.playUntilDone()
})
```



## {13. Play Game!}


- :binoculars: Play your finished game!

You can play against someone else on the same keyboard using the **space bar** for player 1 and **U key** for player 2.

![Play on the same keyboard](/static/tutorials/arrows/key.png " ")





## {14. Finale}

**🎉 Way to Go 🎉**

You have finished your very own Horse Race!

When you're ready, sign-in and click **Done** to challenge a friend to a multiplayer race online!






```blockconfig.global

let finish = sprites.create(img`.`, SpriteKind.Finish)
finish.setPosition(150, 50)
let projectile = sprites.createProjectileFromSide(img`.`, -75, 0)

let playerImages = [img`.`, img`.`, img`.`]

bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        let locations: tiles.Location[] = []
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})

```




```ghost
namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).vy = -100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let playerImages = [img`.`, img`.`, img`.`]
for (let index = 0; index <= 2; index++) {
    let locations: tiles.Location[] = []
    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
}
let finish = sprites.create(img`.`, SpriteKind.Finish)
finish.x = 0
info.setLife(5)
game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(img`.`, -75, 0)
    projectile.y = randint(0, 120)
})


```


```package
multiplayer
```

```customts
namespace SpriteKind {
    //% isKind
    export const Finish = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="create players"  weight=300
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
