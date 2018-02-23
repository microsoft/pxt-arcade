// Auto-generated from simulator. Do not edit.
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
declare namespace control {
    /**
     * Listen to a event
     */
    //%
    //% shim=control::on
    function on(ev: string, arg: number, f: () => void): void;

}
declare namespace image {
    /**
     * Internal
     */
    //%
    //% shim=image::_show
    function _show(img: any): void;

    /**
     * Internal
     */
    //%
    //% shim=image::_stats
    function _stats(s: string): void;

}

// Auto-generated. Do not edit. Really.
