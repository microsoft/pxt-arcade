// Auto-generated. Do not edit.
declare namespace pins {

    /**
     * Get a pin by configuration id (DAL.CFG_PIN...)
     */
    //% shim=pins::pinByCfg
    function pinByCfg(key: int32): DigitalInOutPin;

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% shim=pins::createBuffer
    function createBuffer(size: int32): Buffer;

    /**
     * Get the duration of the last pulse in microseconds. This function should be called from a
     * ``onPulsed`` handler.
     */
    //% help=pins/pulse-duration blockGap=8
    //% blockId=pins_pulse_duration block="pulse duration (µs)"
    //% weight=19 shim=pins::pulseDuration
    function pulseDuration(): int32;
}


declare interface AnalogInPin {
    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     * @param name pin to write to
     */
    //% help=pins/analog-read weight=53
    //% blockId=device_get_analog_pin block="analog read|pin %name" blockGap="8"
    //% blockNamespace=pins
    //% parts="photocell" trackArgs=0
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=AnalogInPinMethods::analogRead
    analogRead(): int32;
}


declare interface AnalogOutPin {
    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param name pin name to write to
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
    //% help=pins/analog-write weight=52
    //% blockId=device_set_analog_pin block="analog write|pin %name|to %value" blockGap=8
    //% blockNamespace=pins
    //% parts="analogled" trackArgs=0
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% value.min=0 value.max=1023 shim=AnalogOutPinMethods::analogWrite
    analogWrite(value: int32): void;
}


declare interface DigitalInOutPin {
    /**
     * Read a pin or connector as either 0 or 1
     * @param name pin to read from
     */
    //% help=pins/digital-read weight=61
    //% blockId=device_get_digital_pin block="digital read|pin %name" blockGap=8
    //% parts="slideswitch" trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=DigitalInOutPinMethods::digitalRead
    digitalRead(): boolean;

    /**
     * Set a pin or connector value to either 0 or 1.
     * @param name pin to write to
     * @param value value to set on the pin
     */
    //% help=pins/digital-write weight=60
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value=toggleHighLow"
    //% parts="led" trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=DigitalInOutPinMethods::digitalWrite
    digitalWrite(value: boolean): void;

    /**
     * Make this pin a digital input, and create events where the timestamp is the duration
     * that this pin was either ``high`` or ``low``.
     */
    //% help=pins/on-pulsed weight=16 blockGap=8
    //% blockId=pins_on_pulsed block="on|pin %pin|pulsed %pulse"
    //% blockNamespace=pins
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=4
    //% parts="slideswitch" trackArgs=0
    //% deprecated=1 hidden=1 shim=DigitalInOutPinMethods::onPulsed
    onPulsed(pulse: PulseValue, body: () => void): void;

    /**
     * Register code to run when a pin event occurs. 
     */
    //% help=pins/on-event weight=20 blockGap=8
    //% blockId=pinsonevent block="on|pin %pin|%event"
    //% blockNamespace=pins
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=4
    //% parts="slideswitch" trackArgs=0 shim=DigitalInOutPinMethods::onEvent
    onEvent(event: PinEvent, body: () => void): void;

    /**
     * Return the duration of a pulse in microseconds
     * @param name the pin which measures the pulse
     * @param value the value of the pulse (default high)
     * @param maximum duration in micro-seconds
     */
    //% blockId="pins_pulse_in" block="pulse in (µs)|pin %name|pulsed %high||timeout %maxDuration (us)"
    //% weight=18 blockGap=8
    //% help="pins/pulse-in"
    //% blockNamespace=pins
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=4 maxDuration.defl=2000000 shim=DigitalInOutPinMethods::pulseIn
    pulseIn(value: PulseValue, maxDuration?: int32): int32;

    /**
     * Set the pull direction of this pin.
     * @param name pin to set the pull mode on
     * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
     */
    //% help=pins/set-pull weight=17 blockGap=8
    //% blockId=device_set_pull block="set pull|pin %pin|to %pull"
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=DigitalInOutPinMethods::setPull
    setPull(pull: PinPullMode): void;
}


declare interface PwmPin {}


declare interface PwmOnlyPin {
    /**
     * Set the Pulse-width modulation (PWM) period of the analog output. The period is in
     * **microseconds** or `1/1000` milliseconds.
     * If this pin is not configured as an analog output (using `analog write pin`), the operation has
     * no effect.
     * @param name analog pin to set period to
     * @param micros period in micro seconds. eg:20000
     */
    //% help=pins/analog-set-period weight=51
    //% blockId=device_set_analog_period block="analog set period|pin %pin|to (µs)%period"
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=PwmOnlyPinMethods::analogSetPeriod
    analogSetPeriod(period: int32): void;

    /**
     * Write a value to the servo to control the rotation of the shaft. On a standard servo, this will
     * set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous
     * rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one
     * direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param name pin to write to
     * @param value angle or rotation speed
     */
    //% help=pins/servo-write weight=41 group="Servo"
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value=protractorPicker" blockGap=8
    //% parts=microservo trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% value.defl=90 shim=PwmOnlyPinMethods::servoWrite
    servoWrite(value?: int32): void;

    /**
     * Set the pin for PWM analog output, make the period be 20 ms, and set the pulse width.
     * The pulse width is based on the value it is given **microseconds** or `1/1000` milliseconds.
     * @param name pin name
     * @param duration pulse duration in micro seconds, eg:1500
     */
    //% help=pins/servo-set-pulse weight=40 group="Servo" blockGap=8
    //% blockId=device_set_servo_pulse block="servo set pulse|pin %value|to (µs) %duration"
    //% parts=microservo blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=PwmOnlyPinMethods::servoSetPulse
    servoSetPulse(duration: int32): void;
}
declare namespace control {

    /**
     * Announce that an event happened to registered handlers.
     * @param src ID of the MicroBit Component that generated the event
     * @param value Component specific code indicating the cause of the event.
     */
    //% weight=21 blockGap=12 blockId="control_raise_event"
    //% help=control/raise-event
    //% block="raise event|from %src|with value %value" blockExternalInputs=1 shim=control::raiseEvent
    function raiseEvent(src: int32, value: int32): void;

    /**
     * Determine the version of system software currently running.
     */
    //% blockId="control_device_dal_version" block="device dal version"
    //% help=control/device-dal-version shim=control::deviceDalVersion
    function deviceDalVersion(): string;

    /**
     * Allocates the next user notification event
     */
    //% help=control/allocate-notify-event shim=control::allocateNotifyEvent
    function allocateNotifyEvent(): int32;

    /** Write a message to DMESG debugging buffer. */
    //% shim=control::dmesg
    function dmesg(s: string): void;

    /** Write a message and value (pointer) to DMESG debugging buffer. */
    //% shim=control::dmesgPtr
    function dmesgPtr(str: string, ptr: Object): void;
}


declare interface I2C {
    /**
     * Read `size` bytes from a 7-bit I2C `address`.
     */
    //% repeat.defl=0 shim=I2CMethods::readBuffer
    readBuffer(address: int32, size: int32, repeat?: boolean): Buffer;

    /**
     * Write bytes to a 7-bit I2C `address`.
     */
    //% repeat.defl=0 shim=I2CMethods::writeBuffer
    writeBuffer(address: int32, buf: Buffer, repeat?: boolean): int32;
}
declare namespace pins {

    /**
     * Opens a Serial communication driver
     */
    //% help=pins/create-i2c
    //% parts=i2c shim=pins::createI2C
    function createI2C(sda: DigitalInOutPin, scl: DigitalInOutPin): I2C;
}
declare namespace pins {

    /**
     * Opens a SPI driver
     */
    //% help=pins/create-spi
    //% parts=spi shim=pins::createSPI
    function createSPI(mosiPin: DigitalInOutPin, misoPin: DigitalInOutPin, sckPin: DigitalInOutPin): SPI;
}


declare interface SPI {
    /**
     * Write to the SPI bus
     */
    //% shim=SPIMethods::write
    write(value: int32): int32;

    /**
     * Transfer buffers over the SPI bus
     */
    //% shim=SPIMethods::transfer
    transfer(command: Buffer, response: Buffer): void;

    /**
     * Sets the SPI clock frequency
     */
    //% shim=SPIMethods::setFrequency
    setFrequency(frequency: int32): void;

    /**
     * Sets the SPI bus mode
     */
    //% shim=SPIMethods::setMode
    setMode(mode: int32): void;
}
declare namespace light {

    /**
     * Send a programmable light buffer to the specified digital pin
     * @param data The pin that the light are connected to
     * @param clk the clock line if nay
     * @param mode the color encoding mode
     * @param buf The buffer to send to the pin
     */
    //% shim=light::sendBuffer
    function sendBuffer(data: DigitalInOutPin, clk: DigitalInOutPin, mode: int32, buf: Buffer): void;
}

// Auto-generated. Do not edit. Really.
