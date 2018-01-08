namespace screen {
    export function clear(color: number = 0) {
        screen.rect(0, 0, width(), height(), color)
    }
}


/**
 * Tagged hex literal converter
 */
//% shim=@hex
function hex(lits: any, ...args: any[]): Buffer { return null }