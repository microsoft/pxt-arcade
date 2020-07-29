// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
// force first game engine
game.eventContext()


namespace testtesttest {
    let lastSent = game.runtime();
    let throttle = 100; // ms
    game.eventContext().registerFrameHandler(scene.UPDATE_SCREEN_PRIORITY + 1, () => {
        if (multiplayer.getOrigin() == "server") {
            if (lastSent + throttle < game.runtime()) {
                lastSent = game.runtime() + throttle;
                multiplayer.postImage(screen, "broadcast-screen");
            }
        } else {
            const im: Image = multiplayer.getCurrentImage();
            scene.setBackgroundImage(im);
        }
    })

}