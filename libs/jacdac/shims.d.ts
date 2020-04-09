// Auto-generated. Do not edit.
declare namespace jacdac {

    /**
     * Gets the physical layer component id
     **/
    //% shim=jacdac::__physId
    function __physId(): int32;

    /**
     * Write a buffer to the jacdac physical layer.
     **/
    //% shim=jacdac::__physSendPacket
    function __physSendPacket(header: Buffer, data: Buffer): void;

    /**
     * Reads a packet from the queue. NULL if queue is empty
     **/
    //% shim=jacdac::__physGetPacket
    function __physGetPacket(): Buffer;

    /**
     * Returns the connection state of the JACDAC physical layer.
     **/
    //% shim=jacdac::__physIsConnected
    function __physIsConnected(): boolean;

    /**
     * Indicates if the bus is running
     **/
    //% shim=jacdac::__physIsRunning
    function __physIsRunning(): boolean;

    /**
     * Starts the JACDAC physical layer.
     **/
    //% shim=jacdac::__physStart
    function __physStart(): void;

    /**
     * Reads the diagnostics struct provided by the physical layer. Returns a buffer or NULL.
     **/
    //% shim=jacdac::__physGetDiagnostics
    function __physGetDiagnostics(): Buffer;

    /**
     * Stops the JACDAC physical layer.
     **/
    //% shim=jacdac::__physStop
    function __physStop(): void;
}

// Auto-generated. Do not edit. Really.
