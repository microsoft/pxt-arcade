// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
game.gameOverSound = () => music.wawawawaa.play();
// force first game engine
game.eventContext()
