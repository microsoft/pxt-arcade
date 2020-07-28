// This is the last thing executed before user code

game.setWaitAnyButton(controller.pauseUntilAnyButtonIsPressed)
// force first game engine
game.eventContext()

game.eventContext().registerFrameHandler(scene.UPDATE_SCREEN_PRIORITY + 1, () => {
    multiplayer.postImage(screen)
})
// [1 byte]        [1 byte]     [2 bytes]       [2 bytes]       [2 bytes]
// magic number    bb           width           height          buffer
let imageHeader: number[] = [0x87, 0x04, 0x00, 0xA0, 0x00, 0x78, 0x00, 0x00];

multiplayer.addImageHandler(multiplayerImageHandler);
function multiplayerImageHandler(img: number[]) {
    if (img.length != 160 * 120) {
        return; // Not a valid image buffer.
    }
    let packetBytes = imageHeader.concat(img);
    let packetBuffer = Buffer.fromArray(packetBytes);

    scene.setBackgroundImage(image.ofBuffer(packetBuffer)); // combination of header buffer and data buffer
}