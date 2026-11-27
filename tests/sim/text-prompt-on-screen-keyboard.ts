// @serial: system keyboard false
// @serial: still running
// @serial: answer a
function press(button: controller.Button) {
    control.raiseEvent(INTERNAL_KEY_DOWN, button.id)
    pause(50)
    control.raiseEvent(INTERNAL_KEY_UP, button.id)
    pause(50)
}

console.log("system keyboard " + helpers._isSystemKeyboardSupported())
let answer = ""
control.runInParallel(function () {
    answer = game.askForString("name?")
})
pause(100)
console.log("still running")
press(controller.A)
press(controller.down)
press(controller.down)
press(controller.down)
press(controller.right)
press(controller.A)
console.log("answer " + answer)
