namespace keys {
    export class Key {
        id: number
        private _pressed: boolean
        private checked: boolean

        constructor(id: number) {
            this.id = id
            this._pressed = false
            this.checked = false
            control.on("_keyup", id, () => {
                if (this._pressed) {
                    this._pressed = false
                    control.raiseEvent("keyup", id)
                }
            })
            control.on("_keydown", id, () => {
                if (!this._pressed) {
                    this._pressed = true
                    this.checked = false
                    control.raiseEvent("keydown", id)
                }
            })
        }

        onPressed(f: () => void) {
            control.on("keydown", this.id, f)
        }

        onReleased(f: () => void) {
            control.on("keyup", this.id, f)
        }

        isPressed() {
            return this._pressed
        }

        wasPressed() {
            if (!this.checked) {
                this.checked = true
                return this._pressed
            }
            return false
        }
    }

    export const Left = new Key(1)
    export const Up = new Key(2)
    export const Right = new Key(3)
    export const Down = new Key(4)
    export const A = new Key(5)
    export const B = new Key(6)

    export function dx(step = 1) {
        if (keys.Left.isPressed())
            if (keys.Right.isPressed()) return 0
            else return -step
        else if (keys.Right.isPressed()) return step
        else return 0
    }

    export function dy(step = 1) {
        if (keys.Up.isPressed())
            if (keys.Down.isPressed()) return 0
            else return -step
        else if (keys.Down.isPressed()) return step
        else return 0
    }

}