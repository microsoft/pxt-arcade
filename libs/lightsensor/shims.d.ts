// Auto-generated. Do not edit.
declare namespace input {

    /**
     * Register an event that runs when light conditions (darker or brighter) change.
     * @param condition the condition that event triggers on
     */
    //% help=input/on-light-condition-changed
    //% blockId=input_on_light_condition_changed block="on light %condition"
    //% parts="lightsensor"
    //% weight=84 blockGap=12 shim=input::onLightConditionChanged
    function onLightConditionChanged(condition: LightCondition, handler: () => void): void;

    /**
     * Read the light level applied to the LED screen in a range from 0 (dark) to 255 (bright).
     */
    //% help=input/light-level
    //% blockId=device_get_light_level block="light level"
    //% parts="lightsensor"
    //% weight=30 blockGap=8 shim=input::lightLevel
    function lightLevel(): int32;

    /**
     * Set the threshold value for the light condition event.
     */
    //% help=input/set-light-threshold
    //% blockId=lightsensor_set_threshold block="set %condition| light threshold to %value"
    //% parts="lightsensor"
    //% value.min=1 value.max=255
    //% group="More" weight=13 blockGap=8 shim=input::setLightThreshold
    function setLightThreshold(condition: LightCondition, value: int32): void;
}

// Auto-generated. Do not edit. Really.
