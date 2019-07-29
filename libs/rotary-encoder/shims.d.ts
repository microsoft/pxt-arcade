// Auto-generated. Do not edit.


    /**
     * Rotary and other encoders
     */

declare namespace encoders {

    /**
     * Create a new rotary encoder connected to given pins
     */
    //% blockId=inputCreateRotaryEncoder block="create rotary encoder with pins $pinA and B $pinB"
    //% weight=99 shim=encoders::createRotaryEncoder
    function createRotaryEncoder(pinA: DigitalInOutPin, pinB: DigitalInOutPin): RotaryEncoder;
}



    //% noRefCounting fixedInstances
declare interface RotaryEncoder {
    /**
     * Do something when a rotary encoder changes position
     */
    //% blockNamespace="encoders"
    //% blockId=rotaryencoderonchaned block="on %this changed"
    //% weight=80 blockGap=8 shim=RotaryEncoderMethods::onChanged
    onChanged(body: () => void): void;

    /**
     * Get current encoder position.
     */
    //% blockNamespace="encoders"
    //% blockId=rotaryencoderposition
    //% property
    //% weight=79 blockGap=8 shim=RotaryEncoderMethods::position
    position: int32;
}

// Auto-generated. Do not edit. Really.
