// Auto-generated. Do not edit.


    declare const enum Dimension {
    //% block=x
    X = 0,
    //% block=y
    Y = 1,
    //% block=z
    Z = 2,
    //% block=strength
    Strength = 3,
    }


    declare const enum Rotation {
    //% block=pitch
    Pitch = 0,
    //% block=roll
    Roll = 1,
    }


    declare const enum AcceleratorRange {
    /**
     * The accelerator measures forces up to 1 gravity
     */
    //%  block="1g"
    OneG = 1,
    /**
     * The accelerator measures forces up to 2 gravity
     */
    //%  block="2g"
    TwoG = 2,
    /**
     * The accelerator measures forces up to 4 gravity
     */
    //% block="4g"
    FourG = 4,
    /**
     * The accelerator measures forces up to 8 gravity
     */
    //% block="8g"
    EightG = 8,
    }


    declare const enum Gesture {
    /**
     * Raised when shaken
     */
    //% block=shake
    Shake = 11,  // ACCELEROMETER_EVT_SHAKE
    /**
     * Raised when the device tilts up
     */
    //% block="tilt up"
    TiltUp = 1,  // ACCELEROMETER_EVT_TILT_UP
    /**
     * Raised when the device tilts down
     */
    //% block="tilt down"
    TiltDown = 2,  // ACCELEROMETER_EVT_TILT_DOWN
    /**
     * Raised when the screen is pointing left
     */
    //% block="tilt left"
    TiltLeft = 3,  // ACCELEROMETER_EVT_TILT_LEFT
    /**
     * Raised when the screen is pointing right
     */
    //% block="tilt right"
    TiltRight = 4,  // ACCELEROMETER_EVT_TILT_RIGHT
    /**
     * Raised when the screen faces up
     */
    //% block="face up"
    FaceUp = 5,  // ACCELEROMETER_EVT_FACE_UP
    /**
     * Raised when the screen is pointing up and the board is horizontal
     */
    //% block="face down"
    FaceDown = 6,  // ACCELEROMETER_EVT_FACE_DOWN
    /**
     * Raised when the board is falling!
     */
    //% block="free fall"
    FreeFall = 7,  // ACCELEROMETER_EVT_FREEFALL
    /**
     * Raised when a 3G shock is detected
     */
    //% block="3g"
    ThreeG = 8,  // ACCELEROMETER_EVT_3G
    /**
     * Raised when a 6G shock is detected
     */
    //% block="6g"
    SixG = 9,  // ACCELEROMETER_EVT_6G
    /**
     * Raised when a 8G shock is detected
     */
    //% block="8g"
    EightG = 10,  // ACCELEROMETER_EVT_8G
    }

// Auto-generated. Do not edit. Really.
