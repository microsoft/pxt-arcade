namespace controller {
    //% fixedInstance whenUsed block="left"
    export const left = new Button(1, input.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="up"
    export const up = new Button(2, input.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="right"
    export const right = new Button(3, input.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="down"
    export const down = new Button(4, input.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);

    //% fixedInstance whenUsed block="A"
    export const A = new Button(5, input.buttonA.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance whenUsed block="B"
    export const B = new Button(6, input.buttonB.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);

    //% fixedInstance whenUsed block="menu"
    export const menu = new Button(7, input.buttonMenu.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
}