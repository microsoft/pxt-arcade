# Get to the Beach Ball


## Get to the beach ball! @showdialog



![How to win](/static/mkj/goal/goal1-1.gif "Walk forward to get to the ball!")



## {One Step}

![How to build](/static/mkj/goal/how1-1.gif "Add three right arrows")


<!--
## {How to run}

![How to Check](/static/mkj/goal/check1-1.gif "Click the A button on the game window")

-->


```blocks
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.step_right()
})
```




## Great Job! @showdialog


 [![Level 2](/static/mkj/assets/next.png)](https://arcade.makecode.com/beta#recipe:/test/mkj/goal1/goal1-2)



```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
pxt-characterAnimations=github:microsoft/arcade-character-animations/
pxt-block-icons=github:jwunderl/arcade-block-icons/
makecodejr-assets=github:kiki-lee/makecodejr-assets#v0.0.3/
```

```simtheme
{
    "theme": "junior",
    "palette": [
            "#000000",
            "#FFFFFF",
            "#FF2121",
            "#FF93C4",
            "#FF8135",
            "#FFF609",
            "#249CA3",
            "#78DC52",
            "#AAAAAA",
            "#87F2FF",
            "#8E2EC4",
            "#A4839F",
            "#5C406c",
            "#DA9E96",
            "#91463d",
            "#000000"
        ]
}
```





```customts
// can't use controller events because it would override
// the user's controller handlers. this works okay but
// it's a little glitchy in the grid layout
let debounce = 100
control.runInParallel(function () {
    while (true) {
        controller.pauseUntilAnyButtonIsPressed();
        if (controller.A.isPressed()) {
            onAButtonPressed();
            pause(debounce);
        }
    }
})

function onAButtonPressed () {
    aPressed = 1
}

let mySprite: Sprite = null
let stillWalking = 0
let aPressed = 0

scene.setBackgroundImage(makecodejrassets.bg1)
scene.setBackgroundColor(1)
tiles.setTilemap(makecodejrassets.goal1)
mySprite = sprites.create(makecodejrassets.dino, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, makecodejrassets.gstart)
characterAnimations.loopFrames(
mySprite,
assets.animation`walkleft`,
70,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`walkright`,
70,
characterAnimations.rule(Predicate.MovingRight)
)
game.onUpdateInterval(1000, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.NotMoving)) && stillWalking <= 0) {
        if (mySprite.tileKindAt(TileDirection.Center, makecodejrassets.ball)) {
            game.over(true)
        } else if (aPressed == 1) {
            game.over(false)
        }
    }
    stillWalking += -1
})


namespace sprites {


    //% block="`ICON.arrow-right-white`"
    export function step_right () {
          stillWalking = 2
        for (let index = 0; index < 8; index++) {
            mySprite.x += 2
            pause(50)
        }
        pause(500)
    }

    //% block="`ICON.arrow-left-white`"
    export function step_left () {
          stillWalking = 2
        for (let index = 0; index < 8; index++) {
            mySprite.x -= 2
            pause(50)
        }
        pause(500)
    }



    //% block="`ICON.arrow-up-white`"
    export function step_up () {
          stillWalking = 2
        for (let index = 0; index < 8; index++) {
            mySprite.y -= 2
            pause(50)
        }
        pause(500)
    }

    //% block="`ICON.arrow-down-white`"
    export function step_down () {
          stillWalking = 2
        for (let index = 0; index < 8; index++) {
            mySprite.y += 2
            pause(50)
        }
        pause(500)
    }
}

```


```template
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```




```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"anim3\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim3\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NGIwMDEwMDAxMDAwMDUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwY2NjY2NjY2MwYzAwMDBjY2JiYmJiYmJiY2MwMGMwYmNiYmJiYmJiYmNiMGNjMGJiYmJiYmJiYmJiYjBjYzBiYmJiYmZmYmJiYmIwY2MwYmJiYmJiYmJiYmJiMGNjMGJiYmJmYmJmYmJiYjBjYzBiYmJiODg4OGJiYmIwY2MwYmJiYjFiYjFiYmJiMGNjMGJiYmJiYmJiYmJiYjBjZTBlZGRlZWVlZWRlZGUwY2RlZWVlZWVkZWVlZGVlZWQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwY2NjY2NjY2NjYzAwMDBjMGJjYmJiYmJiY2IwYzAwY2NiYmJiYmJiYmJiY2MwMGJjYmJiYmJiYmJiYmNiMDBiY2JiZmJiYmJmYmJjYjAwYmNiYmJiYmJiYmJiY2IwMGJjYmJiYmZmYmJiYmNiMDBiY2JiOGI4OGI4YmJjYjAwYmNiYmJiMTFiYmJiY2IwMGUwZWRkZWVlZWVkZWRlMGNkZWVlZWVlZGVlZWRlZWVkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjY2NjY2NjMGMwMDAwY2NiYmJiYmJiYmNjMDBjMGJjYmJiYmJiYmJjYjBjYzBiYmJiYmJiYmJiYmIwY2MwYmJiYmJiYmJiYmJiMGNjMGJiYmJiYmJiYmJiYjBjYzBiYmJiZmJiZmJiYmIwY2MwYmJiYjg4ODhiYmJiMGNlMGVkZGVlZWVlZGVkZTBjZGVlZWVlZWRlZWVkZWVlZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjY2NjY2NjY2MwMDAwYzBiY2JiYmJiYmNiMGMwMGNjYmJiYmJiYmJiYmNjMDBiY2JiYmJiYmJiYmJjYjAwYmNiYmZiYmJiZmJiY2IwMGJjYmJiYmJiYmJiYmNiMDBiY2JiYmJmZmJiYmJjYjAwYmNiYjhiODhiOGJiY2IwMGJjYmJiYjExYmJiYmNiZTBlZGRlZWVlZWRlZGUwY2RlZWVlZWVkZWVlZGVlZWQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjY2NjY2NjMGMwMDAwY2NiYmJiYmJiYmNjMDBjMGJjYmJiYmJiYmJjYjBjYzBiYmJiYmJiYmJiYmIwY2MwYmJiYmJmZmJiYmJiMGNjMGJiYmJiYmJiYmJiYjBjYzBiYmJiZmJiZmJiYmIwY2MwYmJiYjg4ODhiYmJiMGNjMGJiYmIxYmIxYmJiYjBjYzBiYmJiYmJiYmJiYmIwY2UwZWRkZWVlZWVkZWRlMGNkZWVlZWVlZGVlZWRlZWVk\",\n        \"displayName\": \"bob\"\n    },\n    \"qI^uwMNMG-:YnGH:|Srt\": {\n        \"namespace\": \"myImages\",\n        \"id\": \"qI^uwMNMG-:YnGH:|Srt\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDQwMDAwMDAwMDAwMDAwMDAwMDAwMGMwY2NjYzBjMDAwMDAwMDBjYzU1NTVjNTAwMDAwMGMwNTU1NTU1NTUwYzAwMDBjMDU1YjViYmJiY2IwMDAwMDBjY2JiYjFiYmNiMDAwMDAwYzAxMWIxMWJjMTAwMDAwMGMwMTFiMTExMTEwYzAwY2NiYjExYjExMTExMGMwMDVjNTViMWIxMTFkMWNjMDA1Y2JiYjExMWMxZDFjYzAwNWNmYmIxMTExMWQxY2QwY2NjZjBiYjFiMTExMWRkZmQwMDVmNTViYjExZjFmZmZmMDA1ZjU1NTVmZjBmMDAwMDAwZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGNjY2MwMDAwMDAwMDAwNWM1NTU1Y2MwMDAwMDBjMDU1NTU1NTU1MGMwMDAwYzA1NWI1YmJiYmNiMDAwMDAwY2NiYmIxMWJjMTAwMDAwMGMwMTFiMTFiMTEwYzAwY2NjMDExYjExMTExMGMwMDVjYmIxMWIxMTFkMTBjMDA1YzU1YjFiMWMxZDFjYzAwNWNiYmIxMTExMWQxY2QwY2NjZjBiMTFiMTExMWRkZmQwMGYwYmIxYjExMTFmMWZmMDA1ZmI1YmIxMWYxMGYwMDAwNWY1NTU1ZmYwZjAwMDAwMGZmZmZmZjAwMDAwMDAwMDBjY2NjMGMwMDAwMDAwMGMwNWM1NWM1Y2MwMDAwMDBjMDU1NTU1NTU1Y2MwMDAwYzA1NWI1YmJiYmNiMDAwMDAwY2NiYmIxMWIxMTBjMDBjY2MwMTFiMTExMTEwYzAwNWNjYjExYjExMWQxMGMwMDVjYmIxMWIxYzFkMWNjMDA1YzU1YjFiMTExZDFjZGNjY2NiYmIxMTExMTExZGRmZDAwZjBiMTFiMTExMWYxMGYwMGYwYmIxYjExMTEwZjAwMDBmMDU1YmIxMWZmMDAwMDAwZjA1NTU1ZjUwMDAwMDAwMGYwZmZmZjBmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBjY2NjMDAwMDAwMDAwMDVjNTU1NWNjMDAwMDAwYzA1NTU1NTU1NTBjMDAwMGMwNTViNWJiYmJjYjAwMDAwMGNjYmJiMTFiYzEwMDAwMDBjMDExYjExYjExMGMwMGNjYzAxMWIxMTExMTBjMDA1Y2JiMTFiMTExZDEwYzAwNWM1NWIxYjFjMWQxY2MwMDVjYmJiMTExMTFkMWNkMGNjY2YwYjExYjExMTFkZGZkMDBmMGJiMWIxMTExZjFmZjAwNWZiNWJiMTFmMTBmMDAwMDVmNTU1NWZmMGYwMDAwMDBmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"displayName\": \"swimmy-fish\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"ZjQwMTEwMDAxMDAwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjY2MwMDAwMDAwMDAwY2M1NTU1Y2MwMDAwMDBjMDU1NTU1NTU1MGMwMDAwNWM1NTFmNTU1NWM1MDBjMDU1NTVmZjU1NTVjNTAwYzA1NTU1NTU1NTU1YzUwMGRjNTU1NTU1MWJiYmNjMDBkY2RkNTU1NTM1MzNjNTAwZGNkZDU1NTU1NTU1MGJjMGRjZGRiZDU1YmNjYjAwZGNkY2RkYmQ1YmM1YmIwY2RjZGRkZGRkY2RjY2NjMGNjMGRkYmQ1NWNkY2MwYzAwMDBjY2JjNTVjYmNjY2MwMDAwMDBiYzU1Y2RiYmNiMDAwMDAwMDBjMGNjY2MwMDAwMDAwMDAwNWM1NTU1Y2MwMDAwMDBjMDU1MWY1NTU1MGMwMDAwNWM1NWZmNTU1NWM1MDBjMDU1NTU1NTU1NTVjNTAwYzA1NTU1NTUxYmJiY2MwMGRjNTU1NTU1MzUzM2M1MDBkY2RkNTU1NTM1MzNjNTAwZGNkZDU1YjU1NTU1MGMwMGRjZGRiZDU1YmNjYjAwY2NkY2RkYmQ1YmM1YmIwY2RjZGRkZGRkY2RjY2NjMGNjMGRkYmQ1NWNiY2MwMDAwMDBjY2JjNWJkNTBjMDAwMDAwMDBjMGNjY2NjYzAwMDAwMDAwMDBjMGJiY2IwMDAwMDAwMDAwYzBjY2NjMDAwMDAwMDAwMDVjNTU1NWNjMDAwMDAwYzA1NTFmNTU1NTBjMDAwMDVjNTVmZjU1NTVjNTAwYzA1NTU1NTU1NTU1YzUwMGMwNTU1NTU1MWJiYmNjMDBkYzU1NTU1NTM1MzNjNTAwZGNkZDU1NTU1NTU1YzUwMGRjZGQ1NWI1NTU1NTBjMDBkY2RkYmQ1NWJjY2IwMGNjZGNkZGJkNWJjNWJiMGNkY2RkZGRkZGNkY2NjYzBjYzBkY2RkNWJiNWNjMDAwMDAwYzBjY2JiNTVjZDAwMDAwMDAwYzBjY2NjY2MwMDAwMDAwMDAwYzBiYmNiMDAwMDAwMDAwMGMwY2NjYzAwMDAwMDAwMDA1YzU1NTVjYzAwMDAwMGMwNTUxZjU1NTUwYzAwMDA1YzU1ZmY1NTU1YzUwMGMwNTU1NTU1NTU1NWM1MDBjMDU1NTU1NTFiYmJjYzAwZGM1NTU1NTUzNTMzYzUwMGRjZGQ1NTU1NTU1NWM1MDBkY2RkNTViNTU1NTUwYzAwZGNkZGJkNTViY2NiMDBjMGRjZGRiZDViYzViYjBjY2NkZGRkZGRiYmNjY2MwY2RjZGRkZDU1NWJjNTBjMDBjY2NjY2NiYjU1Y2IwMDAwMDAwMDAwY2NjY2NjMDAwMDAwMDAwMGJjYmIwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjY2NjMDAwMDAwMDAwMGNjNTU1NWNjMDAwMDAwYzA1NTU1NTU1NTBjMDAwMDVjNTUxZjU1NTVjNTAwYzA1NTU1ZmY1NTU1YzUwMGMwNTU1NTU1MWJiYmNjMDBkYzU1NTU1NWJiMzNjYzAwZGNkZDU1NTUzNTMzYzUwMGRjZGQ1NTU1NTU1NTBiMDBkY2RkYmQ1NWJjY2IwMGNjZGNkZGJkNWJjNWJiMGNkY2RkZGRkZGNkY2NjYzBjY2NkZGJkNTVjZGNjMGMwMDAwY2NiYzU1Y2JiYzBjMDAwMDAwYzA1YmQ1Y2MwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwY2NjYzAwMDAwMDAwMDBjYzU1NTVjYzAwMDAwMGMwNTU1NTU1NTUwYzAwMDA1YzU1MWY1NTU1YzUwMGMwNTU1NWZmNTU1NWM1MDBjMDU1NTU1NTU1NTVjNTAwZGM1NTU1NTUxYmJiY2MwMGRjZGQ1NTU1MzUzM2M1MDBkY2RkNTU1NTU1NTUwYjAwZGNkZGJkNTViY2NiMDBjY2RjZGRiZDViYzViYjBjZGNkZGRkZGRjZGNjY2MwY2MwZGNiZDU1Y2RjYzBjMDAwMGMwYmM1NWNjYmNjYjAwMDAwMGMwNTVjZGNjY2MwMA==\",\n        \"displayName\": \"walkright\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"ZjQwMTEwMDAxMDAwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwY2NjYzAwMDAwMDAwMDBjYzU1NTVjYzAwMDAwMGMwNTU1NTU1NTUwYzAwMDA1YzU1NTVmMTU1YzUwMDAwNWM1NTU1ZmY1NTU1MGMwMDVjNTU1NTU1NTU1NTBjMDBjY2JiYjE1NTU1NTVjZDAwNWMzMzUzNTU1NWRkY2QwMGIwNTU1NTU1NTVkZGNkMDAwMGJjY2I1NWRiZGRjZDBjYzBiYjVjYjVkYmRkY2RjZGMwY2NjY2RjZGRkZGRkY2QwMGMwY2NkYzU1ZGJkZDBjMDBjY2NjYmM1NWNiY2MwMDAwYmNiYmRjNTVjYjAwMDAwMDAwY2NjYzBjMDAwMDAwMDBjYzU1NTVjNTAwMDAwMGMwNTU1NWYxNTUwYzAwMDA1YzU1NTVmZjU1YzUwMDAwNWM1NTU1NTU1NTU1MGMwMGNjYmJiMTU1NTU1NTBjMDA1YzMzNTM1NTU1NTVjZDAwNWMzMzUzNTU1NWRkY2QwMGMwNTU1NTViNTVkZGNkMDAwMGJjY2I1NWRiZGRjZDAwYzBiYjVjYjVkYmRkY2RjY2MwY2NjY2RjZGRkZGRkY2QwMDAwY2NiYzU1ZGJkZDBjMDAwMGMwNWRiNWNiY2MwMDAwMDBjY2NjY2MwYzAwMDAwMDAwYmNiYjBjMDAwMDAwMDAwMGNjY2MwYzAwMDAwMDAwY2M1NTU1YzUwMDAwMDBjMDU1NTVmMTU1MGMwMDAwNWM1NTU1ZmY1NWM1MDAwMDVjNTU1NTU1NTU1NTBjMDBjY2JiYjE1NTU1NTUwYzAwNWMzMzUzNTU1NTU1Y2QwMDVjNTU1NTU1NTVkZGNkMDBjMDU1NTU1YjU1ZGRjZDAwMDBiY2NiNTVkYmRkY2QwMGMwYmI1Y2I1ZGJkZGNkY2NjMGNjY2NkY2RkZGRkZGNkMDAwMGNjNWJiNWRkY2QwYzAwMDBkYzU1YmJjYzBjMDAwMDAwY2NjY2NjMGMwMDAwMDAwMGJjYmIwYzAwMDAwMDAwMDBjY2NjMGMwMDAwMDAwMGNjNTU1NWM1MDAwMDAwYzA1NTU1ZjE1NTBjMDAwMDVjNTU1NWZmNTVjNTAwMDA1YzU1NTU1NTU1NTUwYzAwY2NiYmIxNTU1NTU1MGMwMDVjMzM1MzU1NTU1NWNkMDA1YzU1NTU1NTU1ZGRjZDAwYzA1NTU1NWI1NWRkY2QwMDAwYmNjYjU1ZGJkZGNkMDBjMGJiNWNiNWRiZGRjZDBjYzBjY2NjYmJkZGRkZGRjYzAwYzA1Y2I1NTVkZGRkY2QwMDAwYmM1NWJiY2NjY2NjMDAwMGNjY2NjYzAwMDAwMDAwMDBjMGJiY2IwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGNjY2MwMDAwMDAwMDAwY2M1NTU1Y2MwMDAwMDBjMDU1NTU1NTU1MGMwMDAwNWM1NTU1ZjE1NWM1MDAwMDVjNTU1NWZmNTU1NTBjMDBjY2JiYjE1NTU1NTUwYzAwY2MzM2JiNTU1NTU1Y2QwMDVjMzM1MzU1NTVkZGNkMDBiMDU1NTU1NTU1ZGRjZDAwMDBiY2NiNTVkYmRkY2QwMGMwYmI1Y2I1ZGJkZGNkY2NjMGNjY2NkY2RkZGRkZGNkMDBjMGNjZGM1NWRiZGRjYzAwYzBjYmJjNTVjYmNjMDAwMGMwY2M1ZGI1MGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjY2NjMDAwMDAwMDAwMGNjNTU1NWNjMDAwMDAwYzA1NTU1NTU1NTBjMDAwMDVjNTU1NWYxNTVjNTAwMDA1YzU1NTVmZjU1NTUwYzAwNWM1NTU1NTU1NTU1MGMwMGNjYmJiMTU1NTU1NWNkMDA1YzMzNTM1NTU1ZGRjZDAwYjA1NTU1NTU1NWRkY2QwMDAwYmNjYjU1ZGJkZGNkMDBjMGJiNWNiNWRiZGRjZGNjYzBjY2NjZGNkZGRkZGRjZDAwYzBjY2RjNTVkYmNkMGMwMGJjY2JjYzU1Y2IwYzAwMDBjY2NjZGM1NTBjMDAwMA==\",\n        \"displayName\": \"walkleft\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"bob\":\n            case \"anim3\":return [img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . c c c c c c c c c c . . . \n. . c c b b b b b b b b c c . . \n. c c b b b b b b b b b b c c . \n. c b b b b b b b b b b b b c . \n. c b b b b f b b f b b b b c . \n. c b b b b b b b b b b b b c . \n. c b b b b b f f b b b b b c . \n. c b b b b 8 8 8 8 b b b b c . \n. c b b b b b 1 1 b b b b b c . \n. c b b b b b b b b b b b b c . \n. e d e e d e e e e e d e d c . \ne d e e e e d e e e d e e e d e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . c c c c c c c c c c . . . . \n. c c b b b b b b b b c c . . . \nc c b b b b b b b b b b c c . . \nc b b b b b b b b b b b b c . . \nc b b b b f b b f b b b b c . . \nc b b b b b b b b b b b b c . . \nc b b b b b f f b b b b b c . . \nc b b b b 8 8 8 8 b b b b c . . \nc b b b b b 1 1 b b b b b c . . \n. e d e e d e e e e e d e d c . \ne d e e e e d e e e d e e e d e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . c c c c c c c c c c . . . \n. . c c b b b b b b b b c c . . \n. c c b b b b b b b b b b c c . \n. c b b b b b b b b b b b b c . \n. c b b b b b b b b b b b b c . \n. c b b b b b b b b b b b b c . \n. c b b b b b f f b b b b b c . \n. c b b b b 8 8 8 8 b b b b c . \n. e d e e d e e e e e d e d c . \ne d e e e e d e e e d e e e d e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . c c c c c c c c c c . . \n. . . c c b b b b b b b b c c . \n. . c c b b b b b b b b b b c c \n. . c b b b b b b b b b b b b c \n. . c b b b b f b b f b b b b c \n. . c b b b b b b b b b b b b c \n. . c b b b b b f f b b b b b c \n. . c b b b b 8 8 8 8 b b b b c \n. . c b b b b b 1 1 b b b b b c \n. e d e e d e e e e e d e d c . \ne d e e e e d e e e d e e e d e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . c c c c c c c c c c . . . \n. . c c b b b b b b b b c c . . \n. c c b b b b b b b b b b c c . \n. c b b b b b b b b b b b b c . \n. c b b b b f b b f b b b b c . \n. c b b b b b b b b b b b b c . \n. c b b b b b f f b b b b b c . \n. c b b b b 8 8 8 8 b b b b c . \n. c b b b b b 1 1 b b b b b c . \n. c b b b b b b b b b b b b c . \n. e d e e d e e e e e d e d c . \ne d e e e e d e e e d e e e d e \n`];\n            case \"swimmy-fish\":\n            case \"qI^uwMNMG-:YnGH:|Srt\":return [img`\n. . . . . . . . . . . . . . . . \n. . . c c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \n. c 5 5 5 b b b b b b c . . . . \n. . c c b b 1 b b b b c . . . . \n. . . c 1 1 1 b b 1 1 c . . . . \n. . . c 1 1 1 b 1 1 1 1 c . . . \nc c b b 1 1 1 b 1 1 1 1 c . . . \nc 5 5 5 1 b 1 b 1 1 1 d c c . . \nc 5 b b 1 b 1 1 1 c 1 d c c . . \nc 5 b f 1 b 1 1 1 1 1 d d c c . \nc c . f b b b 1 1 1 1 1 d d d f \n. . f 5 5 5 b b 1 1 1 f f f f f \n. . f 5 5 5 5 5 f f f . . . . . \n. . f f f f f f . . . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . c c c c c . . . . . . . . \n. . c 5 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \n. c 5 5 5 b b b b b b c . . . . \n. . c c b b 1 b b 1 1 c . . . . \n. . . c 1 1 1 b b 1 1 1 c . . . \nc c . c 1 1 1 b 1 1 1 1 c . . . \nc 5 b b 1 1 1 b 1 1 1 d c . . . \nc 5 5 5 1 b 1 b 1 c 1 d c c . . \nc 5 b b 1 b 1 1 1 1 1 d d c c . \nc c . f 1 b b 1 1 1 1 1 d d d f \n. . . f b b b 1 1 1 1 1 1 f f f \n. . f 5 5 b b b 1 1 1 f f . . . \n. . f 5 5 5 5 5 f f f . . . . . \n. . f f f f f f . . . . . . . . \n`, img`\n. . c c c c c . . . . . . . . . \n. c c 5 5 5 5 c c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c c . . . . \n. c 5 5 5 b b b b b b c . . . . \n. . c c b b 1 b b 1 1 1 c . . . \nc c . c 1 1 1 b 1 1 1 1 c . . . \nc 5 b c 1 1 1 b 1 1 1 d c . . . \nc 5 b b 1 1 1 b 1 c 1 d c c . . \nc 5 5 5 1 b 1 b 1 1 1 d d c c c \nc c b b 1 b 1 1 1 1 1 1 d d d f \n. . . f 1 b b 1 1 1 1 1 1 f f . \n. . . f b b b 1 1 1 1 1 f . . . \n. . . f 5 5 b b 1 1 f f . . . . \n. . . f 5 5 5 5 5 f . . . . . . \n. . . f f f f f f . . . . . . . \n. . . . . . . . . . . . . . . . \n`, img`\n. . . c c c c c . . . . . . . . \n. . c 5 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \n. c 5 5 5 b b b b b b c . . . . \n. . c c b b 1 b b 1 1 c . . . . \n. . . c 1 1 1 b b 1 1 1 c . . . \nc c . c 1 1 1 b 1 1 1 1 c . . . \nc 5 b b 1 1 1 b 1 1 1 d c . . . \nc 5 5 5 1 b 1 b 1 c 1 d c c . . \nc 5 b b 1 b 1 1 1 1 1 d d c c . \nc c . f 1 b b 1 1 1 1 1 d d d f \n. . . f b b b 1 1 1 1 1 1 f f f \n. . f 5 5 b b b 1 1 1 f f . . . \n. . f 5 5 5 5 5 f f f . . . . . \n. . f f f f f f . . . . . . . . \n. . . . . . . . . . . . . . . . \n`];\n            case \"walkright\":\n            case \"anim1\":return [img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . c c c c . . . . \n. . . . . . c c 5 5 5 5 c c . . \n. . . . . c 5 5 5 5 5 5 5 5 c . \n. . . . c 5 5 5 f 1 5 5 5 5 5 c \n. . . c 5 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 5 5 5 5 5 c \n. . c d 5 5 5 5 5 5 b 1 b b c c \n. . c d d d 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 5 5 5 b . \n. c c d d d d b 5 5 c b b c . . \nc d c d d d d b b 5 5 c b b c . \nc d d d d d d d d c c c c c c . \n. c d d d b 5 5 d c c c c . . . \n. . c c c b 5 5 b c c c c c . . \n. . . . c b 5 5 d c b b b c . . \n`, img`\n. . . . . . . c c c c c . . . . \n. . . . . . c 5 5 5 5 5 c c . . \n. . . . . c 5 5 f 1 5 5 5 5 c . \n. . . . c 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 b 1 b b c c \n. . c d 5 5 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 b 5 5 5 5 c . \n. . c d d d d b 5 5 c b b c . . \nc c c d d d d b b 5 5 c b b c . \nc d d d d d d d d c c c c c c . \n. c d d d b 5 5 b c c c . . . . \n. . c c c b b 5 5 d c . . . . . \n. . . . . c c c c c c c . . . . \n. . . . . . . c b b b c . . . . \n`, img`\n. . . . . . . c c c c c . . . . \n. . . . . . c 5 5 5 5 5 c c . . \n. . . . . c 5 5 f 1 5 5 5 5 c . \n. . . . c 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 b 1 b b c c \n. . c d 5 5 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 5 5 5 5 c \n. . c d d d 5 5 5 b 5 5 5 5 c . \n. . c d d d d b 5 5 c b b c . . \nc c c d d d d b b 5 5 c b b c . \nc d d d d d d d d c c c c c c . \n. c c d d d b 5 5 b c c . . . . \n. . . c c c b b 5 5 d c . . . . \n. . . . . c c c c c c c . . . . \n. . . . . . . c b b b c . . . . \n`, img`\n. . . . . . . c c c c c . . . . \n. . . . . . c 5 5 5 5 5 c c . . \n. . . . . c 5 5 f 1 5 5 5 5 c . \n. . . . c 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 b 1 b b c c \n. . c d 5 5 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 5 5 5 5 c \n. . c d d d 5 5 5 b 5 5 5 5 c . \n. . c d d d d b 5 5 c b b c . . \n. c c d d d d b b 5 5 c b b c . \nc c d d d d d d b b c c c c c . \nc d d d d d 5 5 b 5 5 c c . . . \nc c c c c c b b 5 5 b c . . . . \n. . . . . . c c c c c c . . . . \n. . . . . . c b b b c . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . c c c c . . . . \n. . . . . . c c 5 5 5 5 c c . . \n. . . . . c 5 5 5 5 5 5 5 5 c . \n. . . . c 5 5 5 f 1 5 5 5 5 5 c \n. . . c 5 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 b 1 b b c c \n. . c d 5 5 5 5 5 5 b b 3 3 c c \n. . c d d d 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 5 5 5 b . \n. . c d d d d b 5 5 c b b c . . \nc c c d d d d b b 5 5 c b b c . \nc d d d d d d d d c c c c c c . \nc c d d d b 5 5 d c c c c . . . \n. . c c c b 5 5 b c c b c . . . \n. . . . . c b 5 5 d c c c . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . c c c c . . . . \n. . . . . . c c 5 5 5 5 c c . . \n. . . . . c 5 5 5 5 5 5 5 5 c . \n. . . . c 5 5 5 f 1 5 5 5 5 5 c \n. . . c 5 5 5 5 f f 5 5 5 5 5 c \n. . . c 5 5 5 5 5 5 5 5 5 5 5 c \n. . c d 5 5 5 5 5 5 b 1 b b c c \n. . c d d d 5 5 5 5 5 3 3 3 5 c \n. . c d d d 5 5 5 5 5 5 5 5 b . \n. . c d d d d b 5 5 c b b c . . \nc c c d d d d b b 5 5 c b b c . \nc d d d d d d d d c c c c c c . \n. c c d d b 5 5 d c c c c . . . \n. . . c c b 5 5 c c c b b c . . \n. . . . . c 5 5 d c c c c c . . \n`];\n            case \"walkleft\":\n            case \"anim2\":return [img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c c . \n. c b b c 5 5 b b d d d d c d c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d d c . \n. . c c c c c b 5 5 b c c c . . \n. . c b b b c d 5 5 b c . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . . c c c b 5 5 b d d d c . \n. . . . . c d 5 5 b b c c c . . \n. . . . c c c c c c c . . . . . \n. . . . c b b b c . . . . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 5 5 5 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . . c c b 5 5 b d d d c c . \n. . . . c d 5 5 b b c c c . . . \n. . . . c c c c c c c . . . . . \n. . . . c b b b c . . . . . . . \n`, img`\n. . . . c c c c c . . . . . . . \n. . c c 5 5 5 5 5 c . . . . . . \n. c 5 5 5 5 1 f 5 5 c . . . . . \nc 5 5 5 5 5 f f 5 5 5 c . . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc 5 3 3 3 5 5 5 5 5 5 5 d c . . \nc 5 5 5 5 5 5 5 5 5 d d d c . . \n. c 5 5 5 5 b 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c . \n. c c c c c b b d d d d d d c c \n. . . c c 5 5 b 5 5 d d d d d c \n. . . . c b 5 5 b b c c c c c c \n. . . . c c c c c c . . . . . . \n. . . . . c b b b c . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 c . . . \nc c 3 3 b b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d d c c \n. . . c b c c b 5 5 b c c c . . \n. . . c c c d 5 5 b c . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . c c c c . . . . . . . . \n. . c c 5 5 5 5 c c . . . . . . \n. c 5 5 5 5 5 5 5 5 c . . . . . \nc 5 5 5 5 5 1 f 5 5 5 c . . . . \nc 5 5 5 5 5 f f 5 5 5 5 c . . . \nc 5 5 5 5 5 5 5 5 5 5 5 c . . . \nc c b b 1 b 5 5 5 5 5 5 d c . . \nc 5 3 3 3 5 5 5 5 5 d d d c . . \n. b 5 5 5 5 5 5 5 5 d d d c . . \n. . c b b c 5 5 b d d d d c . . \n. c b b c 5 5 b b d d d d c c c \n. c c c c c c d d d d d d d d c \n. . . c c c c d 5 5 b d d c c . \n. . c b b c c c 5 5 b c c . . . \n. . c c c c c d 5 5 c . . . . . \n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\",AA6;Hu%%-oc`N[]NA96\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"wkAZ%ent9y;u}m4?n.yA\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"7w-(,WXPkRjEm/pQt,I9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"S)*kJ?SI%h{DVwI;TA=`\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"NdHDIp}lF-]V5VV)vqK%\">Enemy</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"MakeCodeJr-Anims\",\n    \"version\": \"0.0.1\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.12.32\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"theme\": \"junior\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#FF93C4\",\n        \"#FF8135\",\n        \"#FFF609\",\n        \"#249CA3\",\n        \"#78DC52\",\n        \"#AAAAAA\",\n        \"#87F2FF\",\n        \"#8E2EC4\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#DA9E96\",\n        \"#91463d\",\n        \"#000000\"\n    ],\n    \"assetPack\": true\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
