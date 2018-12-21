namespace controller {
    //% fixedInstance whenUsed block="A"
    export const A = new Button(ControllerButton.A, input.buttonA.id());
    //% fixedInstance whenUsed block="B"
    export const B = new Button(ControllerButton.B, input.buttonB.id());
    //% fixedInstance whenUsed block="left"
    export const left = new Button(ControllerButton.Left, input.buttonLeft.id());
    //% fixedInstance whenUsed block="up"
    export const up = new Button(ControllerButton.Up, input.buttonUp.id());
    //% fixedInstance whenUsed block="right"
    export const right = new Button(ControllerButton.Right, input.buttonRight.id());
    //% fixedInstance whenUsed block="down"
    export const down = new Button(ControllerButton.Down, input.buttonDown.id());
    //% fixedInstance whenUsed block="menu"
    export const menu = new Button(7, input.buttonMenu.id());

    //% fixedInstance whenUsed block="player 2"
    export const controller2 = new Controller(8, undefined);
    //% fixedInstance whenUsed block="player 3"
    export const controller3 = new Controller(16, undefined);
    //% fixedInstance whenUsed block="player 4"
    export const controller4 = new Controller(24, undefined);
    //% fixedInstance whenUsed block="player 1"
    export const controller1 = new Controller(-1, [left, up, right, down, A, B, menu]);
}