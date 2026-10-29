// @serial: tone done after 250 ms
const started = control.millis()
music.playTone(440, 250)
console.log("tone done after " + (control.millis() - started) + " ms")
