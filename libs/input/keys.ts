enum KeyEvent {
    //% block="pressed"
    Pressed,
    //% block="released"
    Released
}

/**
 * Access to game keys
 */
//% weight=70 color="#5B0F4D" icon="\uf11b"
namespace keys {
    const eventNames = [
        "keydown",
        "keyup"
    ];

    //% fixedInstances
    export class Key {
        id: number
        private _pressed: boolean
        private checked: boolean

        constructor(id: number) {
            this.id = id
            this._pressed = false
            this.checked = false
            control.onEvent("_keyup", id, () => {
                if (this._pressed) {
                    this._pressed = false
                    control.raiseEvent("keyup", id)
                }
            })
            control.onEvent("_keydown", id, () => {
                if (!this._pressed) {
                    this._pressed = true
                    this.checked = false
                    control.raiseEvent("keydown", id)
                    control.raiseEvent("keydown", 0)
                }
            })
        }

        /**
         * Register code for a key event
         */
        //% weight=99
        //% blockId=keyonevent block="on %key **key** %event"
        onEvent(event: KeyEvent, handler: () => void) {
            control.onEvent(eventNames[event], this.id, handler);
        }

        /** 
         * Indicates if the key is currently pressed
        */
        //% blockId=keyispressed block="is %key **key** pressed"
        isPressed() {
            return this._pressed
        }

        /** 
         * Indicates if the key was pressed since the last call
        */
        //% blockId=keywaspressed block="was %key **key** pressed"
        wasPressed() {
            if (!this.checked) {
                this.checked = true
                return this._pressed
            }
            return false
        }

        /**
         * Pauses until a key is pressed or released
         */
        //% blockId=keypauseuntil block="pause until %key **key** is %event"
        pauseUntil(event: KeyEvent) {
            control.waitForEvent(eventNames[event], this.id)
        }
    }

    //% fixedInstance block="left"
    export const Left = new Key(1)
    //% fixedInstance block="up"
    export const Up = new Key(2)
    //% fixedInstance block="right"
    export const Right = new Key(3)
    //% fixedInstance block="down"
    export const Down = new Key(4)
    //% fixedInstance block="A"
    export const A = new Key(5)
    //% fixedInstance block="B"
    export const B = new Key(6)

    /**
     * Gets the horizontal movement, given the step and state of keys
     * @param step the distance, eg: 100
     */
    //% blockId=keysdx block="dx %step"
    export function dx(step: number) {
        if (keys.Left.isPressed())
            if (keys.Right.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.Right.isPressed()) return step * control.deltaTime
        else return 0
    }

    /**
     * Gets the vertical movement, given the step and state of keys
     * @param step the distance, eg: 100
     */
    //% blockId=keysdy block="dy %step"
    export function dy(step: number) {
        if (keys.Up.isPressed())
            if (keys.Down.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.Down.isPressed()) return step * control.deltaTime
        else return 0
    }

    /**
     * Pauses the program until a key is pressed
     */
    //% blockId=keypauseuntil block="pause until any key"
    export function pauseUntilAnyKey() {
        control.waitForEvent("keydown", 0)
    }
}