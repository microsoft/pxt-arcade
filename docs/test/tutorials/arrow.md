# Arrow Battle
### @explicitHints true


## Arrow Battle Intro @showdialog

In this tutorial, we'll show you how to create your own Arrow Battle game.

![Play Arrow Battle](/static/tutorials/arrow/arrow.gif "This is how you play Arrow Battle")




## {2. Your First Block}

**Ready to start coding?**

Let's set a nice background color.


- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab
```block
scene.setBackgroundColor(9)
```
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundColor(9)
```


## {3. Set player 1}

**Add Player 1**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(img`.`, SpriteKind.Player))
    mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(45, 90)
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



#### ~ tutorialhint

```blocks
scene.setBackgroundColor(9)
//@highlight
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(45, 90)
})
```




## {4. Set player 2}

**Add Player 2**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the
```block
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.PlayerNumber.Two, sprites.create(img`.`, SpriteKind.Player))
    mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(110, 90)
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


#### ~ tutorialhint

```blocks
scene.setBackgroundColor(9)
bundles.wrap1(function () {
   mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(45, 90)
})
//@highlight
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.PlayerNumber.Two, sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(110, 90)
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
    arrow.setPosition(80, 23)
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
scene.setBackgroundColor(9)
bundles.wrap1(function () {
    let player1 = sprites.create(assets.image`p1`, SpriteKind.Player)
    player1.setPosition(45, 90)
})
bundles.wrap2(function () {
    let player2 = sprites.create(assets.image`p2`, SpriteKind.Player)
    player2.setPosition(110, 90)
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
    arrow.setPosition(80, 23)
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
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with up arrows from **My Assets**.


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
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
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with left arrows from **My Assets**.


```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {

    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```

#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
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
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with up arrows from **My Assets**.

```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```

#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
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
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```
bundle into **an empty** area of the workspace.


- :mouse pointer: Replace both of the empty grey boxes with up arrows from **My Assets**.

```blockconfig.local
    let arrow: Sprite = null
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```


#### ~ tutorialhint

```blocks
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    let arrow: Sprite = null
    mp.getPlayerSprite(player).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
```



## {11. Finale}

**🎉 Way to Go 🎉**

You have started your very own Whack-the-Mole game.

When you're ready, click **Done** to return to the skillmap so you can add a rubber hammer!






```blockconfig.global
    let arrow: Sprite = null
    const arrow_list = []


game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(img`.`, SpriteKind.Player))
    mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(45, 90)
})

bundles.wrap2(function () {
    mp.setPlayerSprite(mp.PlayerNumber.Two, sprites.create(img`.`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(110, 90)
})

scene.setBackgroundColor(9)

bundles.wrap3(function () {
    arrow_list = [
    img`.`
    img`.`,
    img`.`,
    img`.`
    ]
    arrow = sprites.create(img`.`, SpriteKind.Player)
    arrow.setPosition(80, 23)
})

mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(img`.`)
    if (arrow.image.equals(img`.`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})

```

```ghost
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player, MultiplayerState.Score, 1)
    }
})
let arrow: Sprite = null
scene.setBackgroundColor(9)
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
arrow.setPosition(80, 23)
mp.setPlayerSprite(mp.PlayerNumber.One, sprites.create(assets.image`p1`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.One).setPosition(45, 90)
mp.setPlayerSprite(mp.PlayerNumber.Two, sprites.create(assets.image`p2`, SpriteKind.Player))
mp.getPlayerSprite(mp.PlayerNumber.Two).setPosition(110, 90)
game.showLongText("Be the quickest to match the arrow directions to win!", DialogLayout.Bottom)
carnival.startCountdownGame(15, carnival.WinTypes.Multi)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})


```


```package
arcade-mp=github:riknoll/arcade-mp
arcade-carnival=github:microsoft/arcade-carnival
```

```customts

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * just run the code
    */
    //% block="create player 1"  weight=200
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="create player 2"  weight=150
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="create arrow"
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }


}

```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzAAAAAAAAMBEDAAAAAAATMQAAAAAAMBEDAAAAAAATMTMzMwMAMBERERERMQAwERERERExAAATMTMzMwMAADARAwAAAAAAABMxAAAAAAAAMBEDAAAAAAAAMwAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"0\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAMAMAAAAAAAATMQAAAAAAMBERAwAAAAATERExAAAAMBETMREDAAATMRMxEzEAABMDEzEwMQAAMAATMQADAAAAABMxAAAAAAAAEzEAAAAAAAATMQAAAAAAABMxAAAAAAAAMAMAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"1\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAwAAAAAAABMxAAAAAAAAEzEAAAAAAAATMQAAAAAAABMxAAAAADAAEzEAAwAAEwMTMTAxAAATMRMxEzEAADAREzERAwAAABMRETEAAAAAMBERAwAAAAAAEzEAAAAAAAAwAwAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"2\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAAAAAADARAwAAAAAAABMxAAAAAAAAMBEDAAAwMzMzEzEAABMREREREQMAExERERERAwAwMzMzEzEAAAAAADARAwAAAAAAEzEAAAAAADARAwAAAAAAADMAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"3\"\n    },\n    \"image5\": {\n        \"data\": \"hwQQABAAAAAAAAAAu8wAAAAAALC0tAwAAAAAsERMxAAAAACwJMK0DAAAu0srQkwMALArIisiTAwAuyIitCJLDAArFCQitEQMACvxLyIiQgywK/8rJSIiDCsrIlQlIiIMsitCVCUiIgsLsFRVJSKyCwAAz1W1IrQAAAAAUAu7CwAAAACwAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image6\": {\n        \"data\": \"hwQQABAAAAAAAADAAAAAAAAAAEAMzAwAAADwRMSIxgAMwEZEhIjIDMiMaEaEiIgMjIyIRoSIiA/AjP+MhIiIDwCM8Y+IiGgPAIwWhojGZg8AzIiIxohsDwDAjIiMiG8PAADMbIxobw8AAADAhvjGDwAAAMBmb/YAAAAAwMbGDwAAAAAAzP8AAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"0\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . c c . . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . c 4 4 4 4 c . . . . . \n. . . . c 4 4 4 4 4 4 c . . . . \n. . . c 4 4 c 4 4 c 4 4 c . . . \n. . c 4 4 c c 4 4 c c 4 4 c . . \n. . c 4 c . c 4 4 c . c 4 c . . \n. . . c . . c 4 4 c . . c . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . . c c . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image2\":\n            case \"1\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . c c . . . . . . . . \n. . . . . c 4 4 c . . . . . . . \n. . . . c 4 4 c . . . . . . . . \n. . . c 4 4 c . . . . . . . . . \n. . c 4 4 c c c c c c c c . . . \n. c 4 4 4 4 4 4 4 4 4 4 4 c . . \n. c 4 4 4 4 4 4 4 4 4 4 4 c . . \n. . c 4 4 c c c c c c c c . . . \n. . . c 4 4 c . . . . . . . . . \n. . . . c 4 4 c . . . . . . . . \n. . . . . c 4 4 c . . . . . . . \n. . . . . . c c . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"2\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . c c . . . . . . \n. . . . . . . c 4 4 c . . . . . \n. . . . . . . . c 4 4 c . . . . \n. . . . . . . . . c 4 4 c . . . \n. . . c c c c c c c c 4 4 c . . \n. . c 4 4 4 4 4 4 4 4 4 4 4 c . \n. . c 4 4 4 4 4 4 4 4 4 4 4 c . \n. . . c c c c c c c c 4 4 c . . \n. . . . . . . . . c 4 4 c . . . \n. . . . . . . . c 4 4 c . . . . \n. . . . . . . c 4 4 c . . . . . \n. . . . . . . . c c . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image4\":\n            case \"3\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . c c . . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . c . . c 4 4 c . . c . . . \n. . c 4 c . c 4 4 c . c 4 c . . \n. . c 4 4 c c 4 4 c c 4 4 c . . \n. . . c 4 4 c 4 4 c 4 4 c . . . \n. . . . c 4 4 4 4 4 4 c . . . . \n. . . . . c 4 4 4 4 c . . . . . \n. . . . . . c 4 4 c . . . . . . \n. . . . . . . c c . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image5\":\n            case \"p1\":return img`\n. . . . . . . . . . b 2 b . . . \n. . . . . . . . . b 2 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 2 2 2 2 2 b . . . \n. . . . b b 2 4 1 f 2 2 4 f . . \n. . . . b 2 2 1 f f 2 4 5 c . . \n. . . . b 2 2 4 f b 4 4 5 5 . . \n. b b b 4 2 2 2 2 2 5 5 5 5 5 b \nb 4 4 4 b b 4 2 2 5 5 5 5 5 b . \nb b 4 2 2 2 b 2 2 2 2 2 2 b . . \nc 4 c 2 2 2 2 4 2 2 2 2 2 2 b . \nc b 4 c 4 2 2 b 2 2 2 2 2 2 b . \n. c 4 4 c c b 4 2 2 2 2 2 4 b . \n. . c b 4 4 4 4 4 2 2 2 b b . . \n. . . c c c c c c c c b b . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image6\":\n            case \"p2\":return img`\n. . . c 8 c . . . . . . . . . . \n. . . . c 8 c . . . . . . . . . \n. . . . c c c c c c . . . . . . \n. . . c 8 8 8 8 8 c c . . . . . \n. . . 6 8 8 f 1 6 8 c c . . . . \n. . f 4 6 8 f f 1 8 8 c . . . . \n. . 4 4 6 6 c f 6 8 8 c . . . . \nc 4 4 4 4 4 8 8 8 8 8 6 c c c . \n. c 4 4 4 4 4 8 8 6 c c 6 6 6 c \n. . c 8 8 8 8 8 8 c 8 8 8 6 c c \n. c 8 8 8 8 8 8 6 8 8 8 8 f 6 f \n. c 8 8 8 8 8 8 c 8 8 6 f 6 c f \n. c 6 8 8 8 8 8 6 c f f 6 6 f . \n. . c c 8 8 8 6 6 6 6 6 c f . . \n. . . c c f f f f f f f f . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_MultiplayerState\" id=\"=1xbc21ccB7NUhS(5`Ki\">Score</variable><variable type=\"KIND_MultiplayerState\" id=\"6-rlP@ewOQDtR;M@duE8\">Lives</variable><variable type=\"KIND_SpriteKind\" id=\";dijmdxVLjO~dLVL(}9y\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"Y-br7v.[i[8lDKr|eB(x\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"W.qCU3r3i;6;dQXv!/IG\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"9+i2dTY`pUfneLA2@sM@\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"`XQd7*{=*5wyvE*cO=GL\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"=or+x`]et9iR:p^1YW)+\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"2{FCq@Ui6+cs2H{_5([4\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"5R=_bw-sDzN@dP!kHULl\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"SG#%o38H:*fLb7MCzo|X\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"(jV%f~ywHn:|i-+An%Ht\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"jH3z`?7pP!cQ3*^oFcb=\">Moon</variable><variable id=\"X?K2NbsJyJ(Rfbim*a/.\">direction</variable><variable id=\"d%aqGf[M5%;g*:VSu~!`\">player2</variable><variable id=\"eM~W6VE4dc(EqK@t%?6*\">arrow</variable><variable id=\";Oq|iUwe18gsFcdd$6EQ\">arrow_list</variable><variable id=\"$/VX^4EW.%Pb7gH6w{7T\">mySprite</variable><variable id=\"=nV-EWxfErrCr/qPk1.`\">mySprite2</variable><variable id=\"djdrir#(xN;Y^]P,nOt3\">picture</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Arrow Battle - Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"carnival\": \"github:microsoft/arcade-carnival#v0.0.5\",\n        \"arcade-mp\": \"github:riknoll/arcade-mp#v0.0.2\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```