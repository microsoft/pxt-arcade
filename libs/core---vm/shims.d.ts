// Auto-generated. Do not edit.
declare namespace control {

    /**
     * Announce that an event happened to registered handlers.
     * @param src ID of the Component that generated the event
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction.
     */
    //% weight=21 blockGap=12 blockId="control_raise_event"
    //% block="raise event|from %src|with value %value" blockExternalInputs=1
    //% help=control/raise-event shim=control::raiseEvent
    function raiseEvent(src: int32, value: int32): void;

    /**
     * Allocates the next user notification event
     */
    //% help=control/allocate-notify-event shim=control::allocateNotifyEvent
    function allocateNotifyEvent(): int32;

    /** Write data to DMESG debugging buffer. */
    //% shim=control::dmesg
    function dmesg(s: string): void;
}
declare namespace serial {

    /** Send DMESG debug buffer over serial. */
    //% shim=serial::writeDmesg
    function writeDmesg(): void;
}

// Auto-generated. Do not edit. Really.
