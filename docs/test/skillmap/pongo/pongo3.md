# Multiplayer


## Welcome @showdialog

Add welcome text here.





## 2.  

text



```template



sprites.onOverlap(SpriteKind.Ball, SpriteKind.RightPaddle, function (sprite, otherSprite) {
    sprites.bounce(sprite)
    info.player2.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.WallRight, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.LeftPaddle, function (sprite, otherSprite) {
    sprites.bounce(sprite)
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.WallLeft, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.player2.changeScoreBy(1)
})

let wall: Sprite = null
let ball = sprites.create(assets.image`ball`, SpriteKind.Ball)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
let left_paddle = sprites.create(assets.image`left paddle`, SpriteKind.LeftPaddle)
left_paddle.left = 0
left_paddle.setStayInScreen(true)
controller.player1.moveSprite(left_paddle, 0, 150)
info.player1.setScore(0)
let right_paddle = sprites.create(assets.image`right paddle`, SpriteKind.RightPaddle)
right_paddle.right = 160
right_paddle.setStayInScreen(true)
controller.player2.moveSprite(right_paddle, 0, 150)
info.player2.setScore(0)

for (let index = 0; index <= 9; index++) {
    wall = sprites.create(assets.image`wall`, SpriteKind.WallLeft)
    wall.z = -5000
    wall.top = index * 12
    wall.left = 0
}
for (let index = 0; index <= 9; index++) {
    wall = sprites.create(assets.image`wall`, SpriteKind.WallRight)
    wall.z = -5000
    wall.top = index * 12
    wall.right = 160
}


game.onUpdate(function () {
    logic.checkForWinner(sprites.spritesOfKindGone(SpriteKind.WallLeft) || sprites.spritesOfKindGone(SpriteKind.WallRight))
})
```



```customts

namespace SpriteKind {

    //% isKind
    export const LeftPaddle = SpriteKind.create()

    //% isKind
    export const RightPaddle = SpriteKind.create()

    //% isKind
    export const Ball = SpriteKind.create()

    //% isKind
    export const Wall = SpriteKind.create()

    //% isKind
    export const WallRight = SpriteKind.create()

    //% isKind
    export const WallLeft = SpriteKind.create()
}



namespace sprites {


    /**
     * Returns true if all of kind is gone
     */
    //% block="all sprites of kind $thisSpriteKind destroyed"
    //% thisSpriteKind.shadow=spritekind
    export function spritesOfKindGone(thisSpriteKind:number): boolean {
        return (sprites.allOfKind(thisSpriteKind).length == 0)
    }

     /**
     * Sends sprite in direction of inverse from that point
     */
    //% block="bounce $thisSprite=variables_get(mySprite)"
   export function bounce (thisSprite: Sprite) {
        if (thisSprite.vx <= 0) {
            thisSprite.x = thisSprite.x + 5
        } else {
            thisSprite.x = thisSprite.x - 5
        }
        thisSprite.vx = thisSprite.vx * -1
    }

    /**
     * Returns the number of remaining sprites of a kind
     */
    //% block="number of sprites of kind $thisSpriteKind"
    //% thisSpriteKind.shadow=spritekind
    export function spritesOfKind(thisSpriteKind:number): number {
        return (sprites.allOfKind(thisSpriteKind).length)
    }


}



namespace logic {

    //% block="end game if $thisBool"
    //% thisBool.defl= false
    export function checkForWinner (thisBool: boolean) {
        if (thisBool) {
        
            let winner = ""
            if (info.player1.score() == info.player2.score()) {
                winner = "The game was a tie!"
            } else if (info.player1.score() > info.player2.score()) {
                winner = "Player 1 Wins!"
            } else {
                winner = "Player 2 Wins!"
            }
            game.splash("Game Over!", winner)
            effects.confetti.startScreenEffect(500)
            game.reset()
        }
    }
}


```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image4\": {\n        \"data\": \"hwQBAAwAAAAREREREREAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"wall\"\n    },\n    \"image1\": {\n        \"data\": \"hwQNAA0AAAAAYGZmAAAAAABm3W0GAAAAYNbd3W0AAABg3d3dbQAAAGbd3d1tBgAA1hHR3W0GAAARGRHRbQEAABGZEREdAQAAEJEZEREAAAAQEZkREQAAAAAREREBAAAAABAREQAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"ball\"\n    },\n    \"image2\": {\n        \"data\": \"hwQEABgAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"left paddle\"\n    },\n    \"image3\": {\n        \"data\": \"hwQEABgAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"right paddle\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image4\":\n            case \"wall\":return img`\n1 \n1 \n1 \n1 \n1 \n1 \n1 \n1 \n1 \n1 \n1 \n1 \n`;\n            case \"image1\":\n            case \"ball\":return img`\n. . . . 6 6 1 1 . . . . . \n. . 6 6 6 d 1 1 1 1 . . . \n. 6 6 d d 1 9 9 1 1 1 . . \n6 6 d d d 1 1 9 9 1 1 1 . \n6 d d d d 1 1 1 9 9 1 1 . \n6 d d d d d 1 1 1 9 1 1 . \n6 d d d d d 1 1 1 1 1 1 . \n6 6 d d d d d 1 1 1 1 1 . \n. 6 d d d d d d 1 1 1 . . \n. . 6 6 6 6 6 1 1 1 . . . \n. . . . 6 6 1 1 . . . . . \n. . . . . . . . . . . . . \n. . . . . . . . . . . . . \n`;\n            case \"image2\":\n            case \"left paddle\":return img`\n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n7 7 7 7 \n`;\n            case \"image3\":\n            case \"right paddle\":return img`\n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n5 5 5 5 \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"GY;xh:3E#-Q0`bQXH-=K\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"%](8L+$)iLXB(gr[q1VP\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"Z-!A#A{tscDOH2FpV`BK\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"@Cjqk^j=14Avc:Ldh@K4\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"7R;Ys`NElG]Jt0zjz3^y\">LeftPaddle</variable><variable type=\"KIND_SpriteKind\" id=\"4T[mYc_9GH~eMF3;J3Tq\">RightPaddle</variable><variable type=\"KIND_SpriteKind\" id=\"=R=0`*aWGgy)0^6Fpa8i\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\"V!B3aslyF5Nk,:D$xf:]\">Wall</variable><variable type=\"KIND_SpriteKind\" id=\"uL/=NuFX4AF;dXzq3Bu[\">WallRight</variable><variable type=\"KIND_SpriteKind\" id=\"k_pN[XcA0rUgy.f5a)R{\">WallLeft</variable><variable id=\"G;3kgL(o/K%$weq(nrQV\">ball</variable><variable id=\"T(VrroIqq.[9i1Kvx+9z\">left_paddle</variable><variable id=\"o]G/z11#=Tm4x]aYdmWN\">mySprite</variable><variable id=\"X5AbSi:TF@iPJF}p[?66\">right_paddle</variable><variable id=\"Ac!UHWV~7qD56)=U^Fp_\">myEnemy</variable><variable id=\"vH9lY,Bi#O3@m[8dNDf{\">index</variable><variable id=\"jOn=1LQzJzqV*M1v4Z^p\">wall</variable><variable id=\"lz;wc)j+0tf)BtlQt4|w\">list</variable><variable id=\"2F/F@vbT@4#t5BNzjL7)\">winner</variable></variables></xml>",
  "main.ts": "namespace SpriteKind {\n    export const LeftPaddle = SpriteKind.create()\n    export const RightPaddle = SpriteKind.create()\n    export const Ball = SpriteKind.create()\n    export const Wall = SpriteKind.create()\n    export const WallRight = SpriteKind.create()\n    export const WallLeft = SpriteKind.create()\n}\n",
  "pxt.json": "{\n    \"name\": \"pongo - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.6.24\",\n        \"tag\": \"v1.6.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5bea1575ea693e0648a647cbd86cda9776d58f48\",\n        \"target\": \"1.6.24\",\n        \"pxt\": \"7.2.25\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```