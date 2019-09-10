// Auto-generated. Do not edit.
declare namespace keyboard {

    /**
     * Send a sequence of keystrokes to the keyboard
     */
    //% blockId=keyboardType block="keyboard type %text"
    //% blockGap=8 weight=100
    //% text.shadowOptions.toString=true
    //% help=keyboard/type shim=keyboard::type
    function type(text: string): void;

    /**
     * Send a key command
     */
    //% blockId=keyboardStandardKey block="keyboard key %key|%event"
    //% blockGap=8 weight=99
    //% help=keyboard/key shim=keyboard::key
    function key(key: string, event: KeyboardKeyEvent): void;

    /**
     * Send a media key command
     */
    //% blockId=keyboardMediaKey block="keyboard media key %key|%event"
    //% blockGap=8
    //% help=keyboard/media-key shim=keyboard::mediaKey
    function mediaKey(key: KeyboardMediaKey, event: KeyboardKeyEvent): void;

    /**
     * Send a function key command
     */
    //% blockId=keyboardFunctionKey block="keyboard function key %key|%event"
    //% blockGap=8
    //% help=keyboard/function-key shim=keyboard::functionKey
    function functionKey(key: KeyboardFunctionKey, event: KeyboardKeyEvent): void;
}

// Auto-generated. Do not edit. Really.
