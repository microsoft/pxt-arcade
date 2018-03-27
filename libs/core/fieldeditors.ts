namespace fieldeditors {
    /**
     * A shim to render a boolean as a down/up toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleDownUp block="%down"
    //% down.fieldEditor=toggledownup
    //% down.fieldOptions.decompileLiterals=true
    export function __downUp(down: boolean): boolean {
        return down;
    }

    /**
     * A shim to render a boolean as a high/low toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleHighLow block="%high"
    //% high.fieldEditor=togglehighlow
    //% high.fieldOptions.decompileLiterals=true
    export function __highLow(high: boolean): boolean {
        return high;
    }

    /**
     * A shim to render a boolean as a on/off toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleOnOff block="%on"
    //% on.fieldEditor=toggleonoff
    //% on.fieldOptions.decompileLiterals=true
    export function __onOff(on: boolean): boolean {
        return on;
    }
}
