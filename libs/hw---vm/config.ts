
namespace config {
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 120;
}

control.internalOnEvent(INTERNAL_KEY_DOWN, 100, () => control.reset())
