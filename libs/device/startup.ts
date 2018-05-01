// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
