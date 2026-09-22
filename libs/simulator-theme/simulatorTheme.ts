/** Change the simulator case, not the game's screen palette. */
//% color="#6554C0" icon="\uf108" block="Simulator Theme"
namespace simulatorTheme {
    export enum Preset {
        //% block="default"
        Default,
        //% block="retro"
        Retro,
        //% block="junior"
        Junior,
        //% block="zune"
        Zune,
        //% block="high contrast"
        HighContrast,
        //% block="red"
        Red,
        //% block="blue"
        Blue,
        //% block="orange"
        Orange,
        //% block="green"
        Green,
        //% block="purple"
        Purple,
        //% block="brown"
        Brown,
        //% block="bubblegum"
        Bubblegum,
        //% block="microcode"
        Microcode
    }

    export enum Layout {
        //% block="default"
        Default,
        //% block="retro"
        Retro,
        //% block="junior"
        Junior,
        //% block="zune"
        Zune,
        //% block="high contrast"
        HighContrast
    }

    /** Set the simulator's colors and layout. Does nothing on hardware. */
    //% blockId=simulator_theme_set block="set simulator theme to $preset"
    //% weight=100 help=simulator-theme
    export function setTheme(preset: Preset): void {
        const names = ["", "retro", "junior", "zune", "high-contrast", "red", "blue",
            "orange", "green", "purple", "brown", "bubblegum", "microcode"];
        if (preset >= 0 && preset < names.length) _setTheme(names[preset]);
    }

    /** Change the simulator layout while keeping its current colors. */
    //% blockId=simulator_theme_layout block="set simulator layout to $layout"
    //% weight=95 help=simulator-theme
    export function setLayout(layout: Layout): void {
        const names = ["default", "retro", "junior", "zune", "high-contrast"];
        if (layout >= 0 && layout < names.length) _setLayout(names[layout]);
    }

    /** Pick a common color part, or type the name of a layout-specific part. */
    //% blockId=simulator_theme_part block="$value" blockHidden=true shim=TD_ID
    //% value.fieldEditor="textdropdown" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.values="background-color,button-stroke,text-color,button-fill,dpad-fill,joystick-handle-stroke,button-a-fill,button-b-fill,console-border,screen-side-border,screen-top-bottom-border"
    //% value.defl="background-color"
    export function partName(value: string): string {
        return value;
    }

    /** Change one simulator color without changing the other colors or layout.
     * @param part color property without the --sim- prefix, eg: "background-color"
     * @param color RGB number from the color picker
     */
    //% blockId=simulator_theme_color block="set simulator $part color to $color"
    //% part.shadow=simulator_theme_part
    //% color.shadow=simulator_theme_color_picker
    //% weight=90 help=simulator-theme
    export function setColor(part: string, color: number): void {
        let hex = "#";
        for (let shift = 20; shift >= 0; shift -= 4) {
            hex += "0123456789abcdef".charAt((color >> shift) & 0xf);
        }
        _setColor(part, hex);
    }

    /** Choose a color using the built-in RGB, HSV, HSL, CMYK or HEX picker. */
    //% block blockId=simulator_theme_color_picker builtinBlockId=makecode_color_picker
    //% blockHidden=true duplicateShadowOnDrag=true
    //% value.fieldOptions.format=hex value.defl=0x7f3fbf
    //% color="#6554C0" weight=85
    export function __colorPicker(value: number): number {
        return value;
    }

    /** Restore the simulator theme selected when this run started. */
    //% blockId=simulator_theme_reset block="reset simulator theme"
    //% weight=80 help=simulator-theme
    export function reset(): void {
        _reset();
    }
}