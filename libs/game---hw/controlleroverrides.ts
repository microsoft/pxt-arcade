namespace controller {
    //% fixedInstance whenUsed block="A"
    export const A = new Button(ControllerButton.A, input.buttonA.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="B"
    export const B = new Button(ControllerButton.B, input.buttonB.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="left"
    export const left = new Button(ControllerButton.Left, input.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="up"
    export const up = new Button(ControllerButton.Up, input.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="right"
    export const right = new Button(ControllerButton.Right, input.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="down"
    export const down = new Button(ControllerButton.Down, input.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="menu"
    export const menu = new Button(7, input.buttonMenu.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);

    //% fixedInstance whenUsed block="player 2"
    export const controller2 = new Controller(8);
    //% fixedInstance whenUsed block="player 3"
    export const controller3 = new Controller(16);
    //% fixedInstance whenUsed block="player 4"
    export const controller4 = new Controller(24);
    //% fixedInstance whenUsed block="player 1"
    export const controller1 = new Controller(-1, [left, up, right, down, A, B, menu]);
}