// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonPressed)
game.gameOverSound = () => music.playSound(music.sounds(Sounds.Wawawawaa));
