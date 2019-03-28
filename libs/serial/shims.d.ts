// Auto-generated. Do not edit.
declare namespace serial {

    /**
     * Opens a Serial communication driver
     */
    //% shim=serial::internalCreateSerialDevice
    function internalCreateSerialDevice(tx: DigitalInOutPin, rx: DigitalInOutPin, id: int32): SerialDevice;
}


declare interface SerialDevice {
    /**
     * Sets the size of the RX buffer in bytes
     */
    //% shim=SerialDeviceMethods::setRxBufferSize
    setRxBufferSize(size: uint8): void;

    /**
     * Sets the size of the TX buffer in bytes
     */
    //% shim=SerialDeviceMethods::setTxBufferSize
    setTxBufferSize(size: uint8): void;

    /**
    Set the baud rate of the serial port
     */
    //% shim=SerialDeviceMethods::setBaudRate
    setBaudRate(rate: BaudRate): void;

    /**
     * Reads a single byte from the serial receive buffer. Negative if error, 0 if no data.
     */
    //% shim=SerialDeviceMethods::read
    read(): int32;

    /**
     * Read the buffered received data as a buffer
     */
    //% shim=SerialDeviceMethods::readBuffer
    readBuffer(): Buffer;

    /**
     * Send a buffer across the serial connection.
     */
    //% shim=SerialDeviceMethods::writeBuffer
    writeBuffer(buffer: Buffer): void;

    /**
     */
    //% shim=SerialDeviceMethods::redirect
    redirect(tx: DigitalInOutPin, rx: DigitalInOutPin, rate: BaudRate): void;

    /**
     * Register code when a serial event occurs
     */
    //% shim=SerialDeviceMethods::onEvent
    onEvent(event: SerialEvent, handler: () => void): void;

    /**
     * Registers code when a delimiter is received
     **/
    //% shim=SerialDeviceMethods::onDelimiterReceived
    onDelimiterReceived(delimiter: Delimiters, handler: () => void): void;
}

// Auto-generated. Do not edit. Really.
