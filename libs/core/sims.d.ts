// Auto-generated from simulator. Do not edit.
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
    //% shim=control::internalOnEvent
    function internalOnEvent(ev: number, arg: number, f: () => void, flags: number): void;

    /**
     * Generate an event
     */
    //%
    //% shim=control::raiseEvent
    function raiseEvent(ev: number, arg: number): void;

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
    //% block async
    //% shim=control::reset
    function reset(): void;

}

// Auto-generated. Do not edit. Really.
