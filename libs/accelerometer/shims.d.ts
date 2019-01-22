// Auto-generated. Do not edit.
declare namespace input {

    /**
     * Do something when a gesture happens (like shaking the board).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% help=input/on-gesture
    //% blockId=device_gesture_event block="on |%NAME"
    //% parts="accelerometer"
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=220
    //% gesture.fieldOptions.columns=3
    //% weight=92 blockGap=12 shim=input::onGesture
    function onGesture(gesture: Gesture, body: () => void): void;

    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up,
     * x=0, y=0 and z=-1023)
     * @param dimension TODO
     */
    //% help=input/acceleration
    //% blockId=device_acceleration block="acceleration (mg)|%NAME"
    //% parts="accelerometer"
    //% dimension.fieldEditor="gridpicker"
    //% dimension.fieldOptions.width=180
    //% dimension.fieldOptions.columns=2
    //% weight=42 blockGap=8 shim=input::acceleration
    function acceleration(dimension: Dimension): int32;

    /**
     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.
     * @param kind TODO
     */
    //% help=input/rotation
    //% blockId=device_get_rotation block="rotation (°)|%NAME"
    //% parts="accelerometer"
    //% group="More" weight=38 shim=input::rotation
    function rotation(kind: Rotation): int32;

    /**
     * Sets the accelerometer sample range in gravities.
     * @param range a value describe the maximum strengh of acceleration measured
     */
    //% help=input/set-accelerometer-range
    //% blockId=device_set_accelerometer_range block="set accelerometer|range %range"
    //% weight=5
    //% parts="accelerometer"
    //% group="More" weight=15 blockGap=8 shim=input::setAccelerometerRange
    function setAccelerometerRange(range: AcceleratorRange): void;
}

// Auto-generated. Do not edit. Really.
