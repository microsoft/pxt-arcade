// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
// force first game engine
game.eventContext()

game.eventContext().registerFrameHandler(scene.UPDATE_SCREEN_PRIORITY + 1, () => {
    multiplayer.postImage(screen, "broadcast-screen")
})