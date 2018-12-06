// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
game.gameOverSound = () => music.wawawawaa.play();
// force first game engine
game.eventContext()

screen.systemMenu.addEntry(() => "volume up", function() {
    const v = music.volume();
    music.setVolume(v + 32);
    music.playTone(440, 500);
});
screen.systemMenu.addEntry(() => "volume down", function () {
    const v = music.volume();
    music.setVolume(v - 32);
    music.playTone(440, 500);
});