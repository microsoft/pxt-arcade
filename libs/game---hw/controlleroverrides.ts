namespace controller {
    //% fixedInstance whenUsed block="A"
    export const A = new Button(ControllerButton.A);
    //% fixedInstance whenUsed block="B"
    export const B = new Button(ControllerButton.B);
    //% fixedInstance whenUsed block="left"
    export const left = new Button(ControllerButton.Left);
    //% fixedInstance whenUsed block="up"
    export const up = new Button(ControllerButton.Up);
    //% fixedInstance whenUsed block="right"
    export const right = new Button(ControllerButton.Right);
    //% fixedInstance whenUsed block="down"
    export const down = new Button(ControllerButton.Down);
    //% fixedInstance whenUsed block="menu"
    export const menu = new Button(6);

    //% fixedInstance whenUsed block="player 2"
    export const controller2 = new Controller(8);
    //% fixedInstance whenUsed block="player 3"
    export const controller3 = new Controller(16);
    //% fixedInstance whenUsed block="player 4"
    export const controller4 = new Controller(24);
    //% fixedInstance whenUsed block="player 1"
    export const controller1 = new Controller(-1, [left, up, right, down, A, B, menu]);
}