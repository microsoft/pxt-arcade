// Auto-generated from simulator. Do not edit.
declare namespace screen {
    /**
     * Set a pixel
     * @param x 
     * @param y 
     * @param c 
     */
    //% block
    //% shim=screen::set
    function set(x: number, y: number, c: number): void;

    /**
     * Fill a rectangle
     * @param x 
     * @param y 
     * @param w 
     * @param h 
     * @param c 
     */
    //% block
    //% shim=screen::rect
    function rect(x: number, y: number, w: number, h: number, c: number): void;

    /**
     * Get the width of the screen in pixels
     */
    //%
    //% shim=screen::width
    function width(): number;

    /**
     * Get the height of the screen in pixels
     */
    //%
    //% shim=screen::height
    function height(): number;

    /**
     * 
     */
    //%
    //% shim=screen::drawImage
    function drawImage(x: number, y: number, img: Buffer): void;

}
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
     * Runs code every frame.
     * @param body the code to repeat
     */
    //% block
    //% shim=loops::frame
    function frame(body: () => void): void;

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

    /**
     * Generate an event
     */
    //%
    //% shim=control::queue
    function queue(ev: string, arg: number): void;

}

// Auto-generated. Do not edit. Really.
