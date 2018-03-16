enum KeyEvent {
    //% block="pressed"
    Pressed = KEY_DOWN,
    //% block="released"
    Released = KEY_UP
}

/**
 * Access to game keys
 */
//% weight=97 color="#5B0F4D" icon="\uf11b"
namespace keys {
    //% fixedInstances
    export class Key {
        id: number
        private _pressed: boolean
        private checked: boolean

        constructor(id: number) {
            this.id = id
            this._pressed = false
            this.checked = false
            control.onEvent(INTERNAL_KEY_UP, id, () => {
                if (this._pressed) {
                    this._pressed = false
                    control.raiseEvent(KEY_UP, id)
                    control.raiseEvent(KEY_UP, 0)
                }
            })
            control.onEvent(INTERNAL_KEY_DOWN, id, () => {
                if (!this._pressed) {
                    this._pressed = true
                    this.checked = false
                    control.raiseEvent(KEY_DOWN, id)
                    control.raiseEvent(KEY_DOWN, 0)
                }
            })
        }

        /**
         * Register code for a key event
         */
        //% weight=99 blockGap=8
        //% blockId=keyonevent block="on %key **key** %event"
        onEvent(event: KeyEvent, handler: () => void) {
            control.onEvent(event, this.id, handler);
        }

        /**
         * Pauses until a key is pressed or released
         */
        //% weight=98 blockGap=8
        //% blockId=keypauseuntil block="pause until %key **key** is %event"
        pauseUntil(event: KeyEvent) {
            control.waitForEvent(event, this.id)
        }

        /** 
         * Indicates if the key is currently pressed
        */
        //% weight=96 blockGap=8
        //% blockId=keyispressed block="is %key **key** pressed"
        isPressed() {
            return this._pressed
        }

        /** 
         * Indicates if the key was pressed since the last call
        */
        //% weight=95
        //% blockId=keywaspressed block="was %key **key** pressed"
        wasPressed() {
            if (!this.checked) {
                this.checked = true
                return this._pressed
            }
            return false
        }
    }

    //% fixedInstance block="any"
    export const Any = new Key(0);

    /**
     * Gets the horizontal movement, given the step and state of keys
     * @param step the distance, eg: 100
     */
    //% weight=50 blockGap=8
    //% blockId=keysdx block="dx %step"
    export function dx(step: number) {
        if (keys.left.isPressed())
            if (keys.right.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.right.isPressed()) return step * control.deltaTime
        else return 0
    }

    /**
     * Gets the vertical movement, given the step and state of keys
     * @param step the distance, eg: 100
     */
    //% weight=49
    //% blockId=keysdy block="dy %step"
    export function dy(step: number) {
        if (keys.up.isPressed())
            if (keys.down.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.down.isPressed()) return step * control.deltaTime
        else return 0
    }

    /**
     * Pauses the program until a key is pressed
     */
    //% weight=10
    //% blockId=keypauseuntilanykey block="pause until any key"
    export function pauseUntilAnyKey() {
        control.waitForEvent(KEY_DOWN, 0)
    }
}