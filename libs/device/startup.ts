// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
game.gameOverSound = function () { music.wawawawaa.play(); }
// force first game engine
game.eventContext()

scene.systemMenu.addEntry(
    function () { return "volume up" },
    function () {
        const v = music.volume();
        music.setVolume(v + 32);
        music.playTone(440, 500);
    }, true);
scene.systemMenu.addEntry(
    function () { return "volume down" },
    function () {
        const v = music.volume();
        music.setVolume(v - 32);
        music.playTone(440, 500);
    }, true);