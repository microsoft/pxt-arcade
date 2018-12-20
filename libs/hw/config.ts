namespace config {
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 120;
}

namespace controller {
    function setupControllers() {
        controller.player1.left.configureEventIds(input.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.up.configureEventIds(input.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.right.configureEventIds(input.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.down.configureEventIds(input.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.A.configureEventIds(input.buttonA.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.B.configureEventIds(input.buttonB.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
        controller.player1.menu.configureEventIds(input.buttonMenu.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    }
    setupControllers();
}