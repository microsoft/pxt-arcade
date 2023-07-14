# MakeCode Jr. (v2)


## Welcome @showdialog

Gather all the bubbles!


## Excercise 1

Build a **sequence** of code to help the dino collect both bubbles.


```blocks
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.step_right()
    sprites.step_right()
    sprites.step_right()
})
```




## Excercise 2

Build a **sequence** of code to help the dino collect both bubbles.


```blocks
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.step_right()
    sprites.step_right()
    sprites.step_right()
    sprites.step_right()
})
```




```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
pxt-characterAnimations=github:microsoft/arcade-character-animations/
pxt-block-icons=github:jwunderl/arcade-block-icons/
makecodejr-assets=github:kiki-lee/makecodejr-assets#v0.0.2
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
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(makecodejrassets.dino, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, makecodejrassets.start)
characterAnimations.loopFrames(
mySprite,
assets.animation`walk left`,
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`walk right`,
500,
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
}

```


```template
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```


```ghost
  controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.step_left()
})
```



