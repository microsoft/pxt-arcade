// @serial: countdown end at 1000 ms
// @serial: ticks 13
let ticks = 0
game.onUpdateInterval(100, function () {
    ticks++
})
info.onCountdownEnd(function () {
    console.log("countdown end at " + control.millis() + " ms")
})
info.startCountdown(1)
pause(1250)
console.log("ticks " + ticks)
