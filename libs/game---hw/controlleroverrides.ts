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
    export const player2 = new Controller(2, undefined);
    //% fixedInstance whenUsed block="player 3"
    export const player3 = new Controller(3, undefined);
    //% fixedInstance whenUsed block="player 4"
    export const player4 = new Controller(4, undefined);
}