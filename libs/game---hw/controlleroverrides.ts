namespace controller {
    function idToBtnId(id: number): number {
        const btn = pxt.getButtonByPinCfg(id, DAL.BUTTON_ACTIVE_LOW_PULL_UP);
        return btn.id();
    }

    //% fixedInstance whenUsed block="player 2"
    export const controller2 = new Controller(8);
    //% fixedInstance whenUsed block="player 3"
    export const controller3 = new Controller(16);
    //% fixedInstance whenUsed block="player 4"
    export const controller4 = new Controller(24);
    //% fixedInstance whenUsed block="player 1"
    export const controller1 = new Controller(1, idToBtnId);
}