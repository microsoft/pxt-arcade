namespace keys {
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

    const eventNames = [
        "keydown",
        "keyup"
    ];

    function raiseKeyEvent(event: KeyEvent, id: number): void {
        control.raiseEvent(eventNames[event], id);
    }

    function onKeyEvent(event: KeyEvent, id: number, handler: () => void): void {
        control.onEvent(eventNames[event], id, handler);
    }

    function pauseUntilKeyEvent(event: KeyEvent, id: number): void {
        control.waitForEvent(eventNames[event], id);
    }   
}