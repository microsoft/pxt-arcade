

export function isTouchEnabled(): boolean {
    return typeof window !== "undefined" &&
        ('ontouchstart' in window                              // works on most browsers
            || (navigator && navigator.maxTouchPoints > 0));       // works on IE10/11 and Surface);
}

export function hasPointerEvents(): boolean {
    return typeof window != "undefined" && !!(window as any).PointerEvent;
}

export function down(el: SVGElement, handler: () => void) {
    if (hasPointerEvents()) {
        el.addEventListener("pointerdown", handler);
    }
    else if (isTouchEnabled()) {
        el.addEventListener("mousedown", handler);
        el.addEventListener("touchstart", handler);
    }
    else {
        el.addEventListener("mousedown", handler);
    }
}

export function up(el: SVGElement, handler: () => void) {
    if (hasPointerEvents()) {
        el.addEventListener("pointerup", handler);
    }
    else if (isTouchEnabled()) {
        el.addEventListener("mouseup", handler);
    }
    else {
        el.addEventListener("mouseup", handler);
    }
}

export function enter(el: SVGElement, handler: (isDown: boolean) => void) {
    if (hasPointerEvents()) {
        el.addEventListener("pointerover", e => {
            handler(!!(e.buttons & 1))
        });
    }
    else if (isTouchEnabled()) {
        el.addEventListener("touchstart", e => {
            handler(true);
        });
    }
    else {
        el.addEventListener("mouseover", e => {
            handler(!!(e.buttons & 1))
        });
    }
}

export function leave(el: SVGElement, handler: () => void) {
    if (hasPointerEvents()) {
        el.addEventListener("pointerleave", handler);
    }
    else if (isTouchEnabled()) {
        el.addEventListener("touchend", handler);
    }
    else {
        el.addEventListener("mouseleave", handler);
    }
}

export function move(el: SVGElement, handler: () => void) {
    if (hasPointerEvents()) {
        el.addEventListener("pointermove", handler);
    }
    else if (isTouchEnabled()) {
        el.addEventListener("touchmove", handler);
    }
    else {
        el.addEventListener("mousemove", handler);
    }
}

export function click(el: SVGElement, handler: () => void) {
    el.addEventListener("click", handler);
}