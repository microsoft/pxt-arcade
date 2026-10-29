// @serial: exists true
// @serial: read 42
// @serial: exists after remove false
settings.writeNumber("score", 42)
console.log("exists " + settings.exists("score"))
console.log("read " + settings.readNumber("score"))
settings.remove("score")
console.log("exists after remove " + settings.exists("score"))
