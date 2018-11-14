// Auto-generated. Do not edit.
declare namespace jacdac {

    /**
     * Starts the JacDac protocol
     */
    //% shim=jacdac::start
    function start(): void;

    /**
     * Starts the JacDac protocol
     */
    //% shim=jacdac::stop
    function stop(): void;

    /**
     * Internal
     */
    //% shim=jacdac::__internalSendPacket
    function __internalSendPacket(buf: Buffer, deviceAddress: int32): int32;
}


declare interface JacDacDriverStatus {
    /**
     * Retrieves the serial number in use by this driver.
     *
     * @return the serial number
     **/
    //% property shim=JacDacDriverStatusMethods::serialNumber
    serialNumber: uint32;

    /** Check if device is paired. */
    //% property shim=JacDacDriverStatusMethods::isPaired
    isPaired: boolean;

    /** Check if device is pairable. */
    //% property shim=JacDacDriverStatusMethods::isPairable
    isPairable: boolean;

    /** Check if driver is virtual. */
    //% property shim=JacDacDriverStatusMethods::isVirtualDriver
    isVirtualDriver: boolean;

    /** Check if driver is paired. */
    //% property shim=JacDacDriverStatusMethods::isPairedDriver
    isPairedDriver: boolean;

    /** Check if driver is connected. */
    //% property shim=JacDacDriverStatusMethods::isConnected
    isConnected: boolean;

    /** Get device class. */
    //% property shim=JacDacDriverStatusMethods::driverClass
    driverClass: uint32;

    /** Get device class. */
    //% property shim=JacDacDriverStatusMethods::driverAddress
    driverAddress: uint8;

    /** Get device id for events. */
    //% property shim=JacDacDriverStatusMethods::id
    id: boolean;

    /** If paired, paired instance address */
    //% property shim=JacDacDriverStatusMethods::isPairedInstanceAddress
    isPairedInstanceAddress(address: uint8): uint32;
}

// Auto-generated. Do not edit. Really.
