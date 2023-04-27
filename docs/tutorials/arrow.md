# Arrow Battle
### @explicitHints true


## Arrow Battle Intro @showdialog

In this tutorial, we'll show you how to create your own Arrow Battle game.

![Play Arrow Battle](/static/tutorials/arrows/battle.gif "This is how you play Arrow Battle")




## {2. Your First Block}

**Ready to start coding?**

Let's set a background for both players.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab
```block
scene.setBackgroundImage(img`.`)
```
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty grey square inside the <br/>
``||scene(noclick):set background image to [ ]||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the colorful image called **2pbg**.
![Choose the color-blocked background](/static/tutorials/arrows/2pbg.png " ")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`2pbg`)
```


## {3. Set player 1}

**Add Player 1**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
```
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty grey square inside the <br/>
``||mp(noclick):set player 1||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the red duck called **p1**.
![Choose the red duck](/static/tutorials/arrows/p1.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`2pbg`)
//@highlight
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
```




## {4. Set player 2}

**Add Player 2**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
```
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty grey square inside the <br/>
``||mp(noclick):set player 2||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the blue duck called **p2**.
![Choose the blue duck](/static/tutorials/arrows/p2.png " ")


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
   mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
//@highlight
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
```


## {5. Check Your Game!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should see your background color with a red duck on the left and a blue duck on the right.


~hint Click here to see how 🕵🏽

![Look for the game window in the lower right](/static/skillmap/mole/game1.png "Click the mini game window to pop open the bigger game window.")

hint~



## {6. Add the Arrow}

**Add an Arrow!**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap3(function () {
    let arrow: Sprite = null
    let arrow_list = [
    img`.`
    img`.`,
    img`.`,
    img`.`
    ]
    arrow = sprites.create(img`.`, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
```
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click each empty grey square inside the <br/>
``||variables(noclick):set [arrow_list] to||`` <br/>
block and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Add each of the arrows in this order.

```block
    let arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
```


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
   mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
//@highlight

bundles.wrap3(function () {
    let arrow: Sprite = null
    let arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
    arrow = sprites.create(img`.`, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
```




## {7. Switch the Arrow}

**Switch the Arrow Quickly**

- :suitcase: Open the ``||game:Game||`` category and drag the
```block
    let arrow: Sprite = null
    const arrow_list = []
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
```
bundle into **an empty** area of the workspace.



#### ~ tutorialhint

```blocks
game.onUpdateInterval(500, function () {
    let arrow: Sprite = null
    const arrow_list = []
    arrow.setImage(arrow_list._pickRandom())
})
```


## {8. Check Your Game!}


- :binoculars: Take a look at your game now.

You should see your arrow switching quickly at the top of your game window.





## {9. Arrow Choice 1}

**Try to keep up!**

- :users: Open the ``||mp:Multiplayer||`` category and drag the
```block
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with **up arrows** from **My Assets**.


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```




## {10. Arrow Choice 2}

**To the Left!**

- :users: Open the ``||mp:Multiplayer||`` category and drag the
```block
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with **left arrows** from **My Assets**.


```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {

    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```

#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```




## {11. Arrow Choice 3}

**Try to keep up!**

- :users: Open the ``||mp:Multiplayer||`` category and drag the
```block
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with **right arrows** from **My Assets**.

```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```

#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```




## {12. Arrow Choice 4}

**Try to keep up!**

- :users: Open the ``||mp:Multiplayer||`` category and drag the
```block
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with **down arrows** from **My Assets**.

```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
```



## {13. Check Your Game!}


- :binoculars: Try playing your game!

Your player should change to whichever arrow you're pressing, and you should get points when your arrow matches the arrow at the top.




## {14. Add the finishing touches!}

To finish your game, let's add a game screen that keeps the game from starting until everyone is ready.  Also, we'll add a countdown timer and a tone that lets everyone know it's time to play!

- :suitcase: Open the ``||bundles:Bundles||`` category and scroll down until you see the
```block
bundles.wrap4(function () {
    game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(15, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
```
bundle. Drag it into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
   mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
bundles.wrap3(function () {
    let arrow: Sprite = null
    let arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
    arrow = sprites.create(img`.`, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
//@highlight
bundles.wrap4(function () {
    game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(15, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
```



## {15. Play Game!}


- :binoculars: Play your finished game!

You can play against someone else on the same keyboard using the arrow keys for player 1 and **I, J, K, L** for **player 2**.

![Play on the same keyboard](/static/tutorials/arrows/key.png " ")





## {11. Finale}

**✨ Way to Go ✨**

You have finished your very own Arrow Battle!

When you're ready, sign-in and click **Done** to challenge a friend to a multiplayer battle online!






```blockconfig.global
    let arrow: Sprite = null
    const arrow_list = []


game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})

bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})

bundles.wrap3(function () {
    arrow_list = [
    img`.`
    img`.`,
    img`.`,
    img`.`
    ]
    arrow = sprites.create(img`.`, SpriteKind.Player)
    arrow.setPosition(80, 30)
})

mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})

bundles.wrap4(function () {
game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(15, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})

```

```ghost
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list = [
assets.image`0`,
assets.image`1`,
assets.image`2`,
assets.image`3`
]
arrow = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
arrow.setPosition(80, 30)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
game.showLongText("Be the quickest to match the arrow directions to win!", DialogLayout.Bottom)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
game.splash("Be the quickest to match", "arrow directions to win!")
scene.setBackgroundImage(img`
    .
    `)
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})


```


```package
multiplayer
sprite-scaling
arcade-carnival=github:microsoft/arcade-carnival#v0.0.7
arrow-images=github:microsoft/arcade-tutorial-extensions/arrow-images#v0.0.11
```

```customts

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

    /**
    * just run the code
    */
    //% block="create arrow"  weight=100
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="finishing touches"
    //% handlerStatement=1
    export function wrap4(handler: () => void) {
        handler();
    }
}

```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image5\": {\n        \"data\": \"hwQSABIAAAAAAAAAEBEBAAAAAAAAAAAAscscAAAAAAAAAAAQS0vLAQAAAAAAAAAQS8REHAAAAAAAABARSyJMywEAAAAAALG7tCLExAEAAAAAELsisiLCxAEAAAAAsSsiQiuyxAEAAAAAsUJBIkJLxAEAAAAAsRL/IiIixAEAAAAQu/K/UiIiwgEAAACxsiJCVSIiwgEAAAAhuyJEVSIisgEAAACxEUtVVSIiuwEAAAAQAPFcVStCGwAAAAAAABARtbG7AQAAAAAAAAAQGxARAAAAAAAAAAAAAQAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image7\": {\n        \"data\": \"hwSgAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"2pbg\"\n    },\n    \"image1\": {\n        \"data\": \"hwQSABIAAAAAAAAAzAAAAAAAAAAAAADAEQwAAAAAAAAAAAAcEQwAAAAAAAAAAMAREQwAAAAAAAAAABwRwQAAAAAAAAAAwBERDAAAAAAAAAAAHBHBzMzMzAAAAADAEREREREREQwAAAAcEREREREREcEAAAAcEREREREREcEAAADAEREREREREQwAAAAAHBHBzMzMzAAAAAAAwBERDAAAAAAAAAAAABwRwQAAAAAAAAAAAMAREQwAAAAAAAAAAAAcEQwAAAAAAAAAAADAEQwAAAAAAAAAAAAAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"0\"\n    },\n    \"image2\": {\n        \"data\": \"hwQSABIAAAAAAAAAzAAAAAAAAAAAAADAEQwAAAAAAAAAAAAcEcEAAAAAAAAAAMAREREMAAAAAAAAABwRERHBAAAAAAAAwBERERERDAAAAAAAHBERERERwQAAAADAEREcEcEREQwAAAAcEcEcEcEcEcEAAAAcEQwcEcHAEcEAAADAzAAcEcEAzAwAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAADAEQwAAAAAAAAAAAAAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"1\"\n    },\n    \"image3\": {\n        \"data\": \"hwQSABIAAAAAAAAAzAAAAAAAAAAAAADAEQwAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAAAAAAAcEcEAAAAAAADAzAAcEcEAzAwAAAAcEQwcEcHAEcEAAAAcEcEcEcEcEcEAAADAEREcEcEREQwAAAAAHBERERERwQAAAAAAwBERERERDAAAAAAAABwRERHBAAAAAAAAAMAREREMAAAAAAAAAAAcEcEAAAAAAAAAAADAEQwAAAAAAAAAAAAAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"2\"\n    },\n    \"image4\": {\n        \"data\": \"hwQSABIAAAAAAAAAzAAAAAAAAAAAAADAEQwAAAAAAAAAAADAEcEAAAAAAAAAAADAEREMAAAAAAAAAAAAHBHBAAAAAAAAAAAAwBERDAAAAAAAzMzMzBwRwQAAAADAEREREREREQwAAAAcEREREREREcEAAAAcEREREREREcEAAADAEREREREREQwAAAAAzMzMzBwRwQAAAAAAAAAAwBERDAAAAAAAAAAAHBHBAAAAAAAAAADAEREMAAAAAAAAAADAEcEAAAAAAAAAAADAEQwAAAAAAAAAAAAAzAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"3\"\n    },\n    \"image8\": {\n        \"data\": \"hwSgAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////9/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"4pbg\"\n    },\n    \"image9\": {\n        \"data\": \"hwSgAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////8vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi8v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////9PRERERERERERERERERERERERERERERERERERE9P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"3pbg\"\n    },\n    \"image10\": {\n        \"data\": \"hwQSABIAAAAAAAAAAQAAAAAAAAAAAAAQHBARAAAAAAAAAAARxMHMAQAAAAAQABFPRHxnHAAAAADBEWxERXd3zAEAAABxzHdmRHd3xwEAAADBx3dnRHd39wEAAAAQzPfPR3d39wEAAAAAwRf/d3d39gEAAAAAwWdhd2ds9gEAAAAAwXx3Z3zH9gEAAAAAEMx3x3f39gEAAAAAAMHMxnf29gEAAAAAABARbHdv/AEAAAAAAAAQbPZmHwAAAAAAAAAQbGz8AQAAAAAAAAAAwfwfAAAAAAAAAAAAEBEBAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p4\"\n    },\n    \"image6\": {\n        \"data\": \"hwQSABIAAAAAAAAAAQAAAAAAAAAAAAAQHBARAAAAAAAAAAARxMHMAQAAAAAQABFPRIyYHAAAAADBEZxERIiIzAEAAACBzIiZRIiIyAEAAADByIiYRIiI+AEAAAAQzPjPSIiI+AEAAAAAwRj/iIiI+QEAAAAAwZiRiJic+QEAAAAAwYyImIzI+QEAAAAAEMyIyIj4+QEAAAAAAMHMyYj5+QEAAAAAABARnIif/AEAAAAAAAAQnPmZHwAAAAAAAAAQnJz8AQAAAAAAAAAAwfwfAAAAAAAAAAAAEBEBAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"image11\": {\n        \"data\": \"hwQSABIAAAAAAAAAAQAAAAAAAAAAAAAQHBARAAAAAAAAAAARwsHMAQAAAAAQABEvIlxFHAAAAADBEUwiIlVVzAEAAABRzFVEIlVVxQEAAADBxVVFIlVV9QEAAAAQzPXPJVVV9QEAAAAAwRX/VVVV9AEAAAAAwUVBVUVM9AEAAAAAwVxVRVzF9AEAAAAAEMxVxVX19AEAAAAAAMHMxFX09AEAAAAAABARTFVP/AEAAAAAAAAQTPREHwAAAAAAAAAQTEz8AQAAAAAAAAAAwfwfAAAAAAAAAAAAEBEBAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p3\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image5\":\n            case \"p1\":return img`\n...........111....\n..........1b2b1...\n.......111b2b1....\n......1bbbbbb1....\n.....1bb22222b1...\n....1bb241f224f1..\n....1b221ff245c1..\n..111b224fb445511.\n.1bbb42222255555b1\n1b444bb42255555b1.\n1bb4222b222222b1..\n1c4c22224222222b1.\n1cb4c422b222222b1.\n.1c44ccb4222224b1.\n..1cb44444222bb1..\n...1ccccccccbb1...\n....1111111111....\n..................\n`;\n            case \"image7\":\n            case \"2pbg\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nfff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"image1\":\n            case \"0\":return img`\n........cc........\n.......c11c.......\n......c1111c......\n.....c111111c.....\n....c11111111c....\n...c1111111111c...\n..c111111111111c..\n.c1111c1111c1111c.\nc1111cc1111cc1111c\nc111c.c1111c.c111c\n.ccc..c1111c..ccc.\n......c1111c......\n......c1111c......\n......c1111c......\n......c1111c......\n......c1111c......\n.......c11c.......\n........cc........\n`;\n            case \"image2\":\n            case \"1\":return img`\n........cc........\n.......c11c.......\n......c111c.......\n.....c1111c.......\n....c1111c........\n...c1111c.........\n..c1111ccccccccc..\n.c11111111111111c.\nc1111111111111111c\nc1111111111111111c\n.c11111111111111c.\n..c1111ccccccccc..\n...c1111c.........\n....c1111c........\n.....c1111c.......\n......c111c.......\n.......c11c.......\n........cc........\n`;\n            case \"image3\":\n            case \"2\":return img`\n........cc........\n.......c11c.......\n.......c111c......\n.......c1111c.....\n........c1111c....\n.........c1111c...\n..ccccccccc1111c..\n.c11111111111111c.\nc1111111111111111c\nc1111111111111111c\n.c11111111111111c.\n..ccccccccc1111c..\n.........c1111c...\n........c1111c....\n.......c1111c.....\n.......c111c......\n.......c11c.......\n........cc........\n`;\n            case \"image4\":\n            case \"3\":return img`\n........cc........\n.......c11c.......\n......c1111c......\n......c1111c......\n......c1111c......\n......c1111c......\n......c1111c......\n.ccc..c1111c..ccc.\nc111c.c1111c.c111c\nc1111cc1111cc1111c\n.c1111c1111c1111c.\n..c111111111111c..\n...c1111111111c...\n....c11111111c....\n.....c111111c.....\n......c1111c......\n.......c11c.......\n........cc........\n`;\n            case \"image8\":\n            case \"4pbg\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nfff222222222222222222222222222222222222fff888888888888888888888888888888888888fff444444444444444444444444444444444444fff777777777777777777777777777777777777ffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"image9\":\n            case \"3pbg\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nfff222222222222222222222222222222222222222222222ffffff8888888888888888888888888888888888888888888888888ffffff444444444444444444444444444444444444444444444444fff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"image10\":\n            case \"p4\":return img`\n....111...........\n...1c7c1..........\n....1c7c111.......\n....1cccccc1......\n...1c77777cc1.....\n...1677f167cc1....\n..1f467ff177c1....\n.114466cf677c111..\n1c44544777776ccc1.\n.1c44444776cc666c1\n..1c777777c7776cc1\n.1c77777767777f6f1\n.1c777777c776f6cf1\n.1c6777776cff66f1.\n..1cc77766666cf1..\n...1ccffffffff1...\n....1111111111....\n..................\n`;\n            case \"image6\":\n            case \"p2\":return img`\n....111...........\n...1c8c1..........\n....1c8c111.......\n....1cccccc1......\n...1c88888cc1.....\n...1988f198cc1....\n..1f498ff188c1....\n.114499cf988c111..\n1c44444888889ccc1.\n.1c44444889cc999c1\n..1c888888c8889cc1\n.1c88888898888f9f1\n.1c888888c889f9cf1\n.1c9888889cff99f1.\n..1cc88899999cf1..\n...1ccffffffff1...\n....1111111111....\n..................\n`;\n            case \"image11\":\n            case \"p3\":return img`\n....111...........\n...1c5c1..........\n....1c5c111.......\n....1cccccc1......\n...1c55555cc1.....\n...1455f145cc1....\n..1f245ff155c1....\n.112244cf455c111..\n1c22222555554ccc1.\n.1c22222554cc444c1\n..1c555555c5554cc1\n.1c55555545555f4f1\n.1c555555c554f4cf1\n.1c4555554cff44f1.\n..1cc55544444cf1..\n...1ccffffffff1...\n....1111111111....\n..................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_MultiplayerState\" id=\"`:}X7rxf~YLhm7lwS,]h\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"VjPKYh4tqEx2t#niV(f.\">life</variable><variable id=\"yC5U=?NRTRcR%FkT0*8*\">player2</variable><variable id=\"YNZXH9q?xSHS5yAzrG!$\">arrow</variable><variable id=\"E|Gm]MyA:~CnrWH0FO^,\">arrow_list</variable><variable type=\"KIND_SpriteKind\" id=\"BdWDnn$s7R)RF|)PR:wA\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"%v1kYch{ZPK*QdjiLcaR\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"V{c/-/J9/QJM31:N})Bc\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"|x=(vL$)BO3R}ckDQ9o~\">Enemy</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Arrow-Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.17\",\n        \"tag\": \"v1.12.17\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/09d3f1e2b4272e6bee89fadd9a64254de01c8861\",\n        \"target\": \"1.12.17\",\n        \"pxt\": \"8.5.24\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"transparency18\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency18 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency18\":return transparency18;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```