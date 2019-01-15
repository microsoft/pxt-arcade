# Button tester

A simple game to see which button is being pressed. This game is helpful for testing button assignments when adding support for new hardware. The buttons are represented visually on the screen so that you can relate them to he button locations on the controller.

## Code

```typescript
function createButton(name: string, b: controller.Button, x: number, y: number) {
    const n = 24;
    const img = image.create(n, n);
    img.fill(6)
    img.printCenter(name, n / 2 - image.font8.charHeight / 2, 0, image.font8);
    const imgPressed = image.create(n, n);
    imgPressed.fill(7)
    imgPressed.printCenter(name, n / 2 - image.font8.charHeight / 2, 0, image.font8);

    const sprite = sprites.create(b.isPressed() ? imgPressed : img);
    sprite.setPosition(x, y);
    b.onEvent(ControllerButtonEvent.Pressed, function () {
        sprite.setImage(imgPressed);        
    })
    b.onEvent(ControllerButtonEvent.Released, function () {
        sprite.setImage(img);
    })
    b.onEvent(ControllerButtonEvent.Repeated, function () {
        sprite.say("repeat", 200)
    })
}

scene.setBackgroundColor(8)
createButton("A", controller.A, 145, 30)
createButton("B", controller.B, 115, 60)
createButton("L", controller.left, 15, 60)
createButton("U", controller.up, 45, 30)
createButton("D", controller.down, 45, 90)
createButton("R", controller.right, 75, 60)
```