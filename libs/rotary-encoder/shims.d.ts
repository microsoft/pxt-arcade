// Auto-generated. Do not edit.


    /**
     * Rotary and other encoders
     */

declare namespace encoders {

    /**
     * Create a new rotary encoder connected to given pins
     */
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
    //% weight=80 blockGap=8 help=encoders/on-changed shim=RotaryEncoderMethods::onChanged
    onChanged(body: () => void): void;

    /**
     * Get current encoder position.
     */
    //% blockNamespace="encoders"
    //% blockId=rotaryencoderposition block="%this position"
    //% weight=79 blockGap=8 help=encoders/position shim=RotaryEncoderMethods::position
    position(): int32;
}

// Auto-generated. Do not edit. Really.
