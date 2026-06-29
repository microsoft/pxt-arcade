declare namespace radio {
    /**
     * Sends an event over radio to neigboring devices
     */
    //% blockHidden=1 shim=radio::raiseEvent
    function raiseEvent(src: int32, value: int32): void;
}