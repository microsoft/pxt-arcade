# Blazing Glory
### @explicitHints true


## Blazing Glory Intro @showdialog

In this tutorial, we'll show you how to create a multiplayer fire-dodging game.

![Play Blazing Glory](/static/tutorials/blazing/blazing.gif " ")




## {2. Your First Block}

**Choose your characters**

We've prepared an array of characters in the workspace.

---

- :mouse pointer: Click on each character and change it to whatever you would like.



#### ~ tutorialhint

```blocks
//@highlight
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



## {3. Set players}

**Add Player 1**

- :suitcase: Open the ``||bundles:Bundles||`` category and drag the <br/>
``||bundles:create players||``<br/>
bundle into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
//@highlight
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
```


## {4. What Did I Do?}

**Read this to learn what each block does...**

Scroll to the bottom to move on to the next instruction.

---

```block
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```
This block creates an array of images that we'll use when setting up players.

---


```block
for (let index = 0; index <= 2; index++) { }
```
This is a `for loop`. It will run three times, setting the value of `index` to 0, 1, & 2. We'll use that to our advantage as we set up each player.

---

```block
mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
```
Each time through the loop, this sets the correct player to its corresponding image from the array.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
```
After all three iterations of our loop, this will set all three players to the proper location on the screen (using some custom math that relies on the index from the `for loop`.)

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
```
This sets each sprite's vertical acceleration to 600, mimicking gravity.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
```
This makes sure that each sprite doesn't drop off the screen once gravity is applied.




## {5. Check Your Game!}


- :binoculars: Look at your project in the game window to see what your code has done.

You should three sprites all in a row.


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our players will be sprites, too.

hint~




## {6. JUMP}

**Help each player jump when they press the (A) button.**

- :game: From the ``||mp:Multiplayer||`` category and drag the <br/>
``||mp:on [A] button [pressed] for [player]||`` <br/>
bundle into **an empty** area of the workspace. <br/>

Now, when any player presses their (A) button, their sprite will temporarily defy gravity.



#### ~ tutorialhint

```blocks
//@highlight
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
```



## {7. Add Projectiles}

**Let the fire fly!**

- :circle: Open the ``||game:Game||`` category and drag the<br/>
``||game: on game update every [900] ms||``<br/>
bundle into **an empty** area of the workspace.


- :mouse pointer: Click the empty grey square to select a projectile image.
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Switch to the **My Assets** library to choose the fireball.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(900, function () {
    let projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
```



## {8. Add the Finish Line}

**Add an end point**

We need to know when the projectiles reach the left side of the screen so the players can get a point.

---

- :paper plane: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||variables(sprites): set [finish] to sprite of kind [Finish]||``
<br/>block into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


- :mouse pointer: Click the empty image square and switch to the **My Assets** library.<br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
Choose the tall black line called **finish**.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
//@highlight
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)

```




## {9. Move the Finish Line}

**Move the finish line to the left.**

- :paper plane: Open the ``||sprites:Sprites||`` category and drag<br/>
``||sprites: set [finish] [x] to [0]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
//@highlight
    finish.x = 0
```



## {10. Take a look}


- :binoculars: Take another look at your game.

The first player should jump when you press the **(A) button** or space bar.

You can make **player 2** jump by pressing the **U key** on your keyboard<br/>
(or your can click the multiplayer icons to test any player with your space bar.)

![Play with the emulator buttons](/static/tutorials/assets/multi.png " ")



## {11. Add points}

**Add points when the projectiles reach the line.**

- :users: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||sprites:on [sprite] of kind [Projectile] overlaps||``
<br/>bundle into **an empty** area of the workspace.


This event will add a point when the fireball projectiles touch the finish line.


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```




## {12. Add lives}

**Set lives for the group.**

- :id card: Open the ``||info:Info||`` category and drag<br/>
``||info: set life to [5]||``<br/>
into **the end** of the<br/>
``||loops(noclick): on start||`` <br/>
container already in the workspace.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
    finish.x = 0
    //@highlight
    info.setLife(5)
```




## {13. Remove lives}

**Take lives away when the players get hit.**


- :paper plane: Open the ``||sprites:Sprites||`` category and drag the<br/>
``||sprites: on sprite of kind [Projectile] overlaps ... [Player]||``<br/>
bundle into **an empty** area of the workspace.

This will remove a life from the group whenever a projectile overlaps a player.


```blockconfig.local
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```




## {14. Play!}


- :binoculars: Play your game!

Use the multiplayer icons to test your game with each player.

![Play with the emulator buttons](/static/tutorials/assets/multi.png " ")

You should lose a life when a fireball hits anyone on the team, but gain a point when all players avoid a fireball.




## {Finale}

**🔥 Way to Go 🔥**

You have finished your multiplayer game!

When you're ready, sign-in and select **Done** to work together with friends online to win your game.

**Can your team score 20 points before they're out of lives?**






```blockconfig.global


let finish = sprites.create(img`.`, SpriteKind.Finish)
let projectile = sprites.createProjectileFromSide(img`.`, -75, 0)

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})

bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        let locations: tiles.Location[] = []
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})

game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
finish.x = 0
info.setLife(5)

```

```template
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



```ghost
namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
for (let index = 0; index <= 2; index++) {
    let locations: tiles.Location[] = []
    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
}
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.x = 0
info.setLife(5)
game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -200
    } else if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -200
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).vy = -200
    }
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

```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAEQkAgAAAABE1VUtIAAAQF3VVUUiAgBAVRVR1SICAEQdEdHdJCQAVBVRFVEtJABUFVERUUUkAFTVVRFRRSQA1N0RVVVNJABAXREV0S0kAEBdVR3RJAIAQFRVXVUkAgBARNRdRQAAAAAARCQCAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"fireball\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMQMAAAAQARAM8QAAABAQzQzMwwAAEAiQzwzxAAARCQiwzPDAEAkQiLCM8MARCIiJEIzwwAkJCQyJDLDACRMLCIiIsNEJPJUIiIiwiIkUlUiIiLCRCRVVSIiIkIAQFVVIiIiRAAAXEUkIjIEAABQBEBERAAAAEAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"red duck\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuwiMsAAACwvYuIiAwAALBmuIyIywAAu2tmyIjIALBrtmbGiMgAu2Zma7aIyABra2vWa4bIAGu8bGZmZsi7a/ZLZmZmxmZr1kRmZmbGu2vdRGZmZrYAsEREZmZmuwAATLRrZtYLAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"blue duck\"\n    },\n    \"p7I@x)wGtLkpOtwZ\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuw3csAAACwvdvd3QwAALBVvdzdywAAu1tVzd3NALBbtVXF3c0Au1VVW7XdzQBbW1vVW9XNAFu8XFVVVc27W/VLVVVVxVVb1URVVVXFu1vdRFVVVbUAsEREVVVVuwAATLRbVdULAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"orange duck\"\n    },\n    \"image1\": {\n        \"data\": \"hwQCAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"finish\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"fireball\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . 4 4 4 4 4 . . . . . . \n. . . 4 4 4 5 5 5 d 4 4 4 4 . . \n. . 4 d 5 d 5 5 5 d d d 4 4 . . \n. . 4 5 5 1 1 1 d d 5 5 5 4 . . \n. 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . \n. 4 d d 1 1 5 5 5 1 1 5 5 d 4 . \n. 4 5 5 1 1 5 1 1 5 5 d d d 4 . \n. 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . \n. 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . \n. . 2 4 d d 5 5 5 5 d d 5 4 . . \n. . . 2 2 4 d 5 5 d d 4 4 . . . \n. . 2 2 2 2 2 4 4 4 2 2 2 . . . \n. . . 2 2 4 4 4 4 4 4 2 2 . . . \n. . . . . 2 2 2 2 2 2 . . . . . \n`;\n            case \"image3\":\n            case \"red duck\":return img`\n. . . . . . . . . 4 2 4 . . . . \n. . . . . . . . . 4 2 4 . . . . \n. . . . . . 4 4 4 4 4 4 . . . . \n. . . . . 4 4 2 2 2 2 2 4 . . . \n. . . . 4 4 2 4 c 2 2 5 5 c . . \n. 4 4 4 4 2 2 2 4 f 5 5 5 5 5 4 \n. 4 3 2 4 2 2 4 c 4 5 5 5 5 4 . \n. . 4 2 2 4 2 2 2 5 5 5 5 4 . . \n. . 4 3 2 2 4 2 2 2 2 2 2 4 . . \n. 4 3 4 2 2 2 3 2 2 2 2 2 2 4 . \n4 3 3 c 3 2 2 4 2 2 2 2 2 2 4 . \nc 3 3 3 c c 4 2 2 2 2 2 2 2 4 . \nc 4 3 3 3 3 3 2 2 2 2 2 2 2 4 . \n. c 3 3 3 3 3 3 2 2 2 2 2 3 4 . \n. . c 4 3 3 3 3 3 2 2 2 4 4 . . \n. . . c c c c c c c c 4 4 . . . \n`;\n            case \"image4\":\n            case \"blue duck\":return img`\n. . . . . . . . . b 6 b . . . . \n. . . . . . . . . b 6 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 6 6 6 6 6 b . . . \n. . . . b b 6 b c 6 6 d 4 c . . \n. b b b b 6 6 6 b f d d 4 4 4 b \n. b d 6 b 6 6 b c b 4 4 4 4 b . \n. . b 6 6 b 6 6 6 4 4 4 4 b . . \n. . b 8 6 6 b 6 6 6 6 6 6 b . . \n. b 8 b 6 6 6 d 6 6 6 6 6 6 b . \nb 8 8 c 8 6 6 b 6 6 6 6 6 6 b . \nc 8 8 8 c c b 6 6 6 6 6 6 6 b . \nc b 8 8 8 8 8 6 6 6 6 6 6 6 b . \n. c 8 8 8 8 8 8 6 6 6 6 6 d b . \n. . c b 8 8 8 8 8 6 6 6 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"p7I@x)wGtLkpOtwZ\":\n            case \"orange duck\":return img`\n. . . . . . . . . b 5 b . . . . \n. . . . . . . . . b 5 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 5 5 5 5 5 b . . . \n. . . . b b 5 b c 5 5 d 4 c . . \n. b b b b 5 5 5 b f d d 4 4 4 b \n. b d 5 b 5 5 b c b 4 4 4 4 b . \n. . b 5 5 b 5 5 5 4 4 4 4 b . . \n. . b d 5 5 b 5 5 5 5 5 5 b . . \n. b d b 5 5 5 d 5 5 5 5 5 5 b . \nb d d c d 5 5 b 5 5 5 5 5 5 b . \nc d d d c c b 5 5 5 5 5 5 5 b . \nc b d d d d d 5 5 5 5 5 5 5 b . \n. c d d d d d d 5 5 5 5 5 d b . \n. . c b d d d d d 5 5 5 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"image1\":\n            case \"finish\":return img`\nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"dcuHOE)w3Dy2ga(*,{/+\">playerImages</variable><variable id=\"9XsA+9Yp~ML+3fS2UxPk\">index</variable><variable id=\"Iu0IA-Q`Z6{q;AY6Pq~N\">locations</variable><variable id=\"+1[X;7m[URg[C#$iB]W}\">finish</variable><variable id=\"~RqTMBwD|[OkKCrcz@$=\">projectile</variable><variable id=\"RX5_{hl_iket8GKqRp_O\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"##QU.N~3_~jV,Az:bFcd\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"A84S$,NiW.X)*7t?i-(L\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"`lZ-0^Tql%66mA(dw1)`\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"=V6!#QIO]F:I#R`7|2*.\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"swEIFl7XM8#;:QqasIzT\">Finish</variable></variables></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Blazing Glory - Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.24\",\n        \"tag\": \"v1.12.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/89b1551216675ebebbbe889528fa9279c1a7bef3\",\n        \"target\": \"1.12.24\",\n        \"pxt\": \"8.5.35\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency18\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency18 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency18\":return transparency18;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```