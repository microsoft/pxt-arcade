// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
// force first game engine
game.eventContext()

game.eventContext().registerFrameHandler(199, () => {
    if (multiplayer.getOrigin() === "client") {
        const im: Image = multiplayer.getCurrentImage();
        scene.setBackgroundImage(im);
    }
})