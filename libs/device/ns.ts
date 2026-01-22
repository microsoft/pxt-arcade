//% color=#8854d0
namespace game {
    /**
     * Reset the current game. This is usually equivalent to pressing
     * the reset button to restart the current program
     */
    //% blockId=arcade_game_reset block="reset game"
    //% group="Gameplay" weight=10
    //% help=game/reset
    export function reset() {
        control.reset();
    }
}

//% color="#4b6584"
namespace scene {
    /**
     * Stop the camera from following any sprite.
     * This is equivalent to calling scene.cameraFollowSprite(null).
     */
    //% blockId=scene_camera_unfollow_sprite
    //% block="camera stop following sprite"
    //% group="Camera"
    //% weight=90
    //% help=scene/camera-unfollow-sprite
    export function cameraUnfollowSprite() {
        scene.cameraFollowSprite(null);
    }
}

//% color="#cf6a87"
namespace info {

}

//% color=#E30FC0
namespace music {

}

//% color=#B09EFF
namespace player {

}

//% color=#FF5722 weight=90 advanced=true
namespace control {

}
