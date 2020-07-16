# Tale of Talagron

![Scrolling story text](/static/concepts/talagron.jpg)

Maybe you want to introduce your game with a text story line that slowly scrolls so the player can read multiple sentences of your game saga. The game dialogs provide a way display short interactive messages but for text with effects you need something else.

By creating an image, or possibly images for multiple paragraphs, you can have a text object that will scroll on the screen.

This example shows story text prior to the start of gameplay. The text scrolls from the bottom of the screen to the top. Button **A** will pause and resume scrolling. The up and down buttons will scroll the story one line at a time. The sprite containing the text is destroyed when it scrolls off the screen which triggers the start of the game.


```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create();
}

let ship: Sprite = null
let hyper = false
let star: Sprite = null
let scroll = false
let lineAdjust = 0
let sagaSprite: Sprite = null
let sagaImage: Image = null
let storyLines = [
    "TALE OF TALAGRON",
    "",
    "Once upon a time,",
    "like really long ago,",
    "a peaceful people lived",
    "happily on Planet Talagron.",
    "",
    "They used the rare mineral",
    "Xelantium for energy to",
    "power their planet.",
    "",
    "Dobanites raided Talagron",
    "and took all the known",
    "Xelantium from them. Not",
    "nice! Ugh! Err!",
    "",
    "Your mission is to help",
    "protect Talagron from the",
    "greedy Dobanites. So, on",
    "your way now and good luck!"
]
scroll = true
sagaImage = image.create(scene.screenWidth(), 10 * storyLines.length)
for (let i = 0; i <= storyLines.length - 1; i++) {
    sagaImage.printCenter(storyLines[i], i * 10, i > 0 ? 7 : 4)
}
sagaSprite = sprites.create(sagaImage, 0)
sagaSprite.top = scene.screenHeight() - 1
sagaSprite.setFlag(SpriteFlag.AutoDestroy, true)
sagaSprite.vy = -10
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!hyper) {
        sagaSprite.vy = scroll ? 0 : -10
        scroll = !(scroll)
    }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!hyper) {
        sagaSprite.vy = 0
        scroll = false
        lineAdjust = (sagaSprite.bottom + 1) % 10
        sagaSprite.bottom -= (lineAdjust > 0) ? lineAdjust : 10
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!hyper) {
        sagaSprite.vy = 0
        scroll = false
        lineAdjust = (sagaSprite.top + 1) % 10
        sagaSprite.top += 10 - lineAdjust
    }
})
game.onUpdate(function () {
    if (sagaSprite.bottom < 0) {
        sagaSprite.destroy()
    }
    if (Math.percentChance(25) || hyper) {
        star = sprites.create(img`1`, SpriteKind.Star)
        star.setFlag(SpriteFlag.AutoDestroy, true)
        star.setFlag(SpriteFlag.Ghost, true)
        star.x = randint(0, scene.screenWidth())
        star.y = randint(0, scene.screenHeight())
        star.vx = (star.x < scene.screenWidth() / 2) ? -2 : 2
        star.vy = (star.y < scene.screenHeight() / 2) ? -1 : 1
        if (hyper) {
            star.ax = star.vx * 1000
            star.ay = star.vy * 1000
            if (Math.percentChance(15)) {
                ship.x = randint(scene.screenWidth() / 2 - 5, scene.screenWidth() / 2 + 5)
                ship.y = randint(scene.screenHeight() / 2 - 2, scene.screenHeight() / 2 + 2)
            }
        }
    }
})
sagaSprite.onDestroyed(function () {
    ship = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . 7 4 . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . e e . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . 4 e e 4 . . . . . . . . . . . . . .
    . . . . . . . . . . . . e e e e e e e e . . . . . . . . . . . .
    . . . . . . . . . . . e e e e e e e e e e . . . . . . . . . . .
    . . . . . . . . . . e e e e 5 3 3 5 e e e e . . . . . . . . . .
    . . . . . . . . . 4 e e e 5 3 5 2 2 5 e e e 4 . . . . . . . . .
    . . . . . . . 7 7 e e e e 5 2 2 5 5 2 e e e e 7 7 . . . . . . .
    . . . . . . 7 e e e e e e 2 2 5 2 3 3 e e e e e e 7 . . . . . .
    . . . . 7 e e e e e e e e 5 2 2 2 5 2 e e e e e e e e 7 . . . .
    . . e e e e e e e e e e e e 3 5 5 2 e e e e e e e e e e e e . .
    . e e e e e e . . . 7 e e e e e e e e e e 7 . . . e e e e e e .
    e e e e 7 . . . . . . . e e e e e e e e . . . . . . . 7 e e e e
    e 7 . . . . . . . . . . . e e e e e e . . . . . . . . . . . 7 e
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
    ship.startEffect(effects.warmRadial)
    hyper = true
    for (let slowStar of sprites.allOfKind(SpriteKind.Star)) {
        slowStar.ax = slowStar.vx * 1000
        slowStar.ay = slowStar.vy * 1000
    }
})
```