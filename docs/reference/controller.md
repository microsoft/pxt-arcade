# Controller

Respond to game controller buttons.

## ~ hint

Controller buttons have key assignments when an @boardname@ game is played on a device with a keyboard. On a keyboard that has the **QWERTY** format, the keys assigned to controller buttons for a single player are shown in the diagram for **Player #1**. When two players are using the same device, the keys labeled for **Player #2** are used.

![Keyboard to button key assignments](/static/hardware/key-assign.jpg)

## ~

## Single player

```cards
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
controller.A.isPressed()
controller.moveSprite(null, 0, 0)
controller.dx(100)
controller.dy(100)
```

## Multiplayer

```cards
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.moveSprite(null)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.dx()
controller.player2.dy()
```

## Configuration

* [Button Repeat Interval](/reference/controller/button/repeat-interval)
* [Button Repeat Delay](/reference/controller/button/repeat-delay)

## See also

[on event](/reference/controller/button/on-event),
[is pressed](/reference/controller/button/is-pressed),
[on button event](/reference/controller/button/on-buttonevent),
[move sprite](/reference/controller/move-sprite),
[dx](/reference/controller/dx),
[dy](/reference/controller/dy)
