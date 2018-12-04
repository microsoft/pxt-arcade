# Which Button?

[Open this tutorial in the editor!](/#tutorial:concepts/which-button)

## Introduction @unplugged

### FINALE

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
info.setLife(3)
info.setScore(0)
info.startCountdown(10)
```