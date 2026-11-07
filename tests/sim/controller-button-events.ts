// @serial: A pressed true
// @serial: A released false
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("A pressed " + controller.A.isPressed())
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    console.log("A released " + controller.A.isPressed())
})
control.raiseEvent(INTERNAL_KEY_DOWN, controller.A.id)
pause(50)
control.raiseEvent(INTERNAL_KEY_UP, controller.A.id)
pause(50)
