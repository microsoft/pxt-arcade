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
    //% shim=control::raiseEvent
    function raiseEvent(ev: string, arg: number): void;

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //%
    //% shim=control::createBuffer
    function createBuffer(size: number): Buffer;

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=control/millis weight=50
    //% blockId=control_running_time block="millis (ms)"
    //% shim=control::millis
    function millis(): number;

    /**
     * Restarts the console.
     */
    //% block
    //% shim=control::reset
    function reset(): void;

}
    /**
     * Represents an indexed-color image
     */
    //%
    declare class Image {
        /**
         * Get the width of the image
         */
        //%
        //% shim=.width
        public width(): number;

        /**
         * Get the height of the image
         */
        //%
        //% shim=.height
        public height(): number;

        /**
         * Set pixel color
         */
        //%
        //% shim=.set
        public set(x: number, y: number, c: number): void;

        /**
         * Get a pixel color
         */
        //%
        //% shim=.get
        public get(x: number, y: number): number;

        /**
         * Fill a rectangle
         */
        //%
        //% shim=.fillRect
        public fillRect(x: number, y: number, w: number, h: number, c: number): void;

        /**
         * Return a copy of the current image
         */
        //%
        //% shim=.clone
        public clone(): Image;

        /**
         * Flips (mirrors) pixels horizontally in the current image
         */
        //%
        //% shim=.flipX
        public flipX(): void;

        /**
         * Flips (mirrors) pixels vertically in the current image
         */
        //%
        //% shim=.flipY
        public flipY(): void;

        /**
         * Stretches the image horizontally by 100%
         */
        //%
        //% shim=.doubleX
        public doubleX(): void;

        /**
         * Stretches the image vertically by 100%
         */
        //%
        //% shim=.doubleY
        public doubleY(): void;

        /**
         * Stretches the image in both directions by 100%
         */
        //%
        //% shim=.double
        public double(): void;

        /**
         * Draw given image on the current image
         */
        //%
        //% shim=.drawImage
        public drawImage(from: Image, x: number, y: number): void;

        // Image format:
        //  byte 0: magic 0xf4 - 4 bit color; 0xf0 is monochromatic
        //  byte 1: width in pixels
        //  byte 2...N: data 4 bits per pixels, high order nibble printed first, lines aligned to byte
        //  byte 2...N: data 1 bit per pixels, low order bit printed first, lines aligned to byte
        /**
         * Draw an icon (monochromatic image) using given color
         */
        //%
        //% shim=.drawIcon
        public drawIcon(icon: Buffer, x: number, y: number, color: number): void;

    }
declare namespace screen {
    /** Internal. */
    //%
    //% shim=screen::_setSpriteHandler
    function _setSpriteHandler(h: () => void): void;

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
     * Get a pixel
     * @param x 
     * @param y 
     */
    //% block
    //% shim=screen::get
    function get(x: number, y: number): number;

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
     * Draw a color image on the screen.
     */
    //%
    //% shim=screen::drawImage
    function drawImage(x: number, y: number, img: Buffer): void;

    /**
     * Draw a monochromatic image on the screen.
     */
    //%
    //% shim=screen::drawIcon
    function drawIcon(x: number, y: number, img: Buffer, color: number): void;

    /**
     * Return image flipped (mirrored) horizontally
     * @param buf 
     */
    //%
    //% shim=screen::flippedX
    function flippedX(buf: Buffer): Buffer;

    /**
     * Return the image (mono or color) where each pixel is replaced by 4
     * @param buf 
     */
    //%
    //% shim=screen::doubledImage
    function doubledImage(buf: Buffer): Buffer;

}

// Auto-generated. Do not edit. Really.
