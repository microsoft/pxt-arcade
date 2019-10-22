export const DRAG_RADIUS = 3;

export function hasPointerEvents(): boolean {
    return typeof window != "undefined" && !!(window as any).PointerEvent;
}

export function isTouchEnabled(): boolean {
    return typeof window !== "undefined" &&
        ('ontouchstart' in window                              // works on most browsers
            || (navigator && navigator.maxTouchPoints > 0));       // works on IE10/11 and Surface);
}

export enum MapTools {
    Pan,
    Stamp,
    Erase
}

export class Bitmask {
    protected mask: Uint8Array;

    constructor(public width: number, public height: number) {
        this.mask = new Uint8Array(Math.ceil(width * height / 8));
    }

    set(col: number, row: number) {
        const cellIndex = col + this.width * row;
        const index = cellIndex >> 3;
        const offset = cellIndex & 7;
        this.mask[index] |= (1 << offset);
    }

    get(col: number, row: number) {
        const cellIndex = col + this.width * row;
        const index = cellIndex >> 3;
        const offset = cellIndex & 7;
        return (this.mask[index] >> offset) & 1;
    }
}

export interface IPointerEvents {
    up: string,
    down: string[],
    move: string,
    enter: string,
    leave: string
}

export const pointerEvents: IPointerEvents = (() => {
    if (hasPointerEvents()) {
        return {
            up: "pointerup",
            down: ["pointerdown"],
            move: "pointermove",
            enter: "pointerenter",
            leave: "pointerleave"
        }
    } else if (isTouchEnabled()) {
        return {
            up: "mouseup",
            down: ["mousedown", "touchstart"],
            move: "touchmove",
            enter: "touchenter",
            leave: "touchend"
        }
    } else {
        return {
            up: "mouseup",
            down: ["mousedown"],
            move: "mousemove",
            enter: "mouseenter",
            leave: "mouseleave"
        }
    }
})();

export interface ClientCoordinates {
    clientX: number;
    clientY: number;
}

export function clientCoord(ev: PointerEvent | MouseEvent | TouchEvent): ClientCoordinates {
    if ((ev as TouchEvent).touches) {
        const te = ev as TouchEvent;
        if (te.touches.length) {
            return te.touches[0];
        }
        return te.changedTouches[0];
    }
    return (ev as PointerEvent | MouseEvent);
}

export async function loadImageAsync(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const el = document.createElement("img");

        el.onload = () => resolve(el);
        el.onerror = () => reject('');

        el.src = src;
    })
}

export interface GestureTarget {
    onClick(coord: ClientCoordinates): void;
    onDragStart(coord: ClientCoordinates): void;
    onDragMove(coord: ClientCoordinates): void;
    onDragEnd(coord: ClientCoordinates): void;
}

export class GestureState {
    startX: number;
    startY: number;

    currentX: number;
    currentY: number;

    isDrag: boolean;

    constructor(protected target: GestureTarget, coord: ClientCoordinates) {
        this.startX = coord.clientX;
        this.startY = coord.clientY;

        this.currentX = coord.clientX;
        this.currentY = coord.clientY;
    }

    update(coord: ClientCoordinates) {
        this.currentX = coord.clientX;
        this.currentY = coord.clientY;

        if (!this.isDrag && this.distance() > DRAG_RADIUS) {
            this.isDrag = true;
            this.target.onDragStart(coord);
        }
        else if (this.isDrag) {
            this.target.onDragMove(coord);
        }
    }

    end(coord?: ClientCoordinates) {
        if (coord) {
            this.update(coord);
        }

        coord = coord || { clientX: this.currentX, clientY: this.currentY };

        if (this.isDrag) {
            this.target.onDragEnd(coord);
        }
        else {
            this.target.onClick(coord);
        }
    }

    distance() {
        return Math.sqrt(Math.pow(this.currentX - this.startX, 2) + Math.pow(this.currentY - this.startY, 2));
    }
}

export function bindGestureEvents(el: HTMLElement, target: GestureTarget) {
    let state: GestureState;

    let upHandler = (ev: MouseEvent) => {
        endGesture(ev);

        ev.stopPropagation();
        ev.preventDefault();
    };

    let leaveHandler = (ev: MouseEvent) => {
        endGesture(ev);

        ev.stopPropagation();
        ev.preventDefault();
    };

    let moveHandler = (ev: MouseEvent) => {
        if (state) state.update(clientCoord(ev));

        ev.stopPropagation();
        ev.preventDefault();
    };

    let startGesture = (ev: MouseEvent | PointerEvent | TouchEvent) => {
        if (state) state.end();

        state = new GestureState(target, clientCoord(ev));

        document.addEventListener(pointerEvents.move, <EventListener>moveHandler);
        document.addEventListener(pointerEvents.up, <EventListener>upHandler);

        if (isTouchEnabled() && !hasPointerEvents()) {
            document.addEventListener("touchend", <EventListener>upHandler);
            document.addEventListener("touchcancel", <EventListener>leaveHandler);
        }
        else {
            document.addEventListener(pointerEvents.leave, <EventListener>leaveHandler);
        }
    }

    let endGesture = (ev: MouseEvent | PointerEvent | TouchEvent) => {
        if (state) state.end(clientCoord(ev));

        state = undefined;

        document.removeEventListener(pointerEvents.move, <EventListener>moveHandler);
        document.removeEventListener(pointerEvents.up, <EventListener>upHandler);
        document.removeEventListener(pointerEvents.leave, <EventListener>leaveHandler);

        if (isTouchEnabled() && !hasPointerEvents()) {
            document.removeEventListener("touchend", <EventListener>upHandler);
            document.removeEventListener("touchcancel", <EventListener>leaveHandler);
        }
        else {
            document.removeEventListener(pointerEvents.leave, <EventListener>leaveHandler);
        }
    }

    pointerEvents.down.forEach(evId => {
        el.addEventListener(evId, <EventListener>startGesture);
    });
}