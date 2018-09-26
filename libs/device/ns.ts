//% color=#8854d0
namespace game {
    /**
     * Returns the time since the game started in milliseconds
     */
    //% blockId=arcade_game_runtime block="time since start (ms)"
    //% group="Gameplay" weight=11
    //% help=game/runtime
    export function runtime(): number {
        return control.millis();
    }

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
