# Button tester

To verify the button assignments on your hardware, you can use this button tester script. An indicator on the screen will show which buttons are currently pressed.

```sim
game.onPaint(function () {
    screen.print("PLAYER 1", 5, 3, 1)
    drawButtonState("A", controller.A.isPressed(), 10, 5)
    drawButtonState("B", controller.B.isPressed(), 25, 5)
    drawButtonState("UP", controller.up.isPressed(), 40, 5)
    drawButtonState("RIGHT", controller.right.isPressed(), 55, 5)
    drawButtonState("DOWN", controller.down.isPressed(), 70, 5)
    drawButtonState("LEFT", controller.left.isPressed(), 85, 5)
    drawButtonState("MENU", controller.menu.isPressed(), 100, 5)

    screen.print("PLAYER 2", 85, 3, 1)
    drawButtonState("A", controller.player2.A.isPressed(), 10, 85)
    drawButtonState("B", controller.player2.B.isPressed(), 25, 85)
    drawButtonState("UP", controller.player2.up.isPressed(), 40, 85)
    drawButtonState("RIGHT", controller.player2.right.isPressed(), 55, 85)
    drawButtonState("DOWN", controller.player2.down.isPressed(), 70, 85)
    drawButtonState("LEFT", controller.player2.left.isPressed(), 85, 85)
})

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {

})

const height = 10;
const bWidth = 30;
const tWidth = 40;

function drawButtonState(id: string, pressed: boolean, top: number, left: number) {
    top += 6;
    screen.fillRect(left, top, bWidth + tWidth, height, 1)
    screen.fillRect(left + tWidth + (pressed ? 0 : -8), top + 1, bWidth - 1, height - 2, pressed ? 8 : 7)
    screen.print(id, left + 1, top + 1, 15)
} 
```

## Code

This script lets you test the buttons of your arcade.

```typescript
game.onPaint(function () {
    screen.print("PLAYER 1", 5, 3, 1)
    drawButtonState("A", controller.A.isPressed(), 10, 5)
    drawButtonState("B", controller.B.isPressed(), 25, 5)
    drawButtonState("UP", controller.up.isPressed(), 40, 5)
    drawButtonState("RIGHT", controller.right.isPressed(), 55, 5)
    drawButtonState("DOWN", controller.down.isPressed(), 70, 5)
    drawButtonState("LEFT", controller.left.isPressed(), 85, 5)
    drawButtonState("MENU", controller.menu.isPressed(), 100, 5)

    screen.print("PLAYER 2", 85, 3, 1)
    drawButtonState("A", controller.player2.A.isPressed(), 10, 85)
    drawButtonState("B", controller.player2.B.isPressed(), 25, 85)
    drawButtonState("UP", controller.player2.up.isPressed(), 40, 85)
    drawButtonState("RIGHT", controller.player2.right.isPressed(), 55, 85)
    drawButtonState("DOWN", controller.player2.down.isPressed(), 70, 85)
    drawButtonState("LEFT", controller.player2.left.isPressed(), 85, 85)
})

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {

})

const height = 10;
const bWidth = 30;
const tWidth = 40;

function drawButtonState(id: string, pressed: boolean, top: number, left: number) {
    top += 6;
    screen.fillRect(left, top, bWidth + tWidth, height, 1)
    screen.fillRect(left + tWidth + (pressed ? 0 : -8), top + 1, bWidth - 1, height - 2, pressed ? 8 : 7)
    screen.print(id, left + 1, top + 1, 15)
} 
```