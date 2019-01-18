/// <reference path="./svg.ts" />

namespace pxsim {
    import s = svgUtil;

    const COMPONENT_WIDTH = 60;
    const PADDING = 5;

    const D_PAD_SVG_WIDTH = 23.813;
    const BUTTON_SVG_WIDTH = 13.533;
    export const MENU_RESET_ASPECT_RATIO = 45 / 120;

    export class KeyBinding {
        dist?: number;
        pointerIds: number[] = [];

        get isDown(): boolean {
            return !!this.pointerIds.length;
        }

        updatePointer(ev: MouseEvent, down: boolean) {
            const b = board();
            let id = 0;
            const pev = ev as PointerEvent;
            if (pev && pev.pointerId)
                id = pev.pointerId;
            const idx = this.pointerIds.indexOf(id);
            if (down && idx < 0) {
                this.pointerIds.push(id);
                console.log(`key ${this.key} down pointer ${idx} ${this.pointerIds.length}`)
                if (b && this.pointerIds.length == 1) { // first touch event
                    b.handleKeyEvent(this.key, true);
                }
            }
            else if (!down && idx > -1) {
                this.pointerIds.splice(idx, 1);
                console.log(`key ${this.key} up pointer ${idx} ${this.pointerIds.length}`)
                if(b && !this.pointerIds.length) // last touch event
                    b.handleKeyEvent(this.key, false);
            }
        }

        constructor(public el: Element,
            public key: Key,
            public closenessFactor: number) {
        }
    }

    export class ControlPad {
        dPadRoot: s.SVG;
        buttonsRoot: s.SVG;

        protected dPad: s.Group;
        protected buttons: s.Group;

        protected up: s.Rect;
        protected down: s.Rect;
        protected left: s.Rect;
        protected right: s.Rect;

        protected primary: s.Circle;
        protected secondary: s.Circle;

        protected reset: s.SVG;
        protected menu: s.SVG;

        protected keys: KeyBinding[] = [];

        constructor(protected parent: Element) {
            this.dPadRoot = new s.SVG(parent);
            this.buttonsRoot = new s.SVG(parent);

            this.reset = new s.SVG(parent);
            this.menu = new s.SVG(parent);

            this.buildDom();
            svg.buttonEvents(parent, ev => this.btnEvent(ev), ev => this.btnEvent(ev), ev => this.handleStopEvent(ev))
        }

        private handleStopEvent(ev: MouseEvent) {
            this.keys.forEach(k => k.updatePointer(ev, false));

            // don't need to release pointer capture,
            // since pointer is already being destroyed

            //ev.preventDefault();
            //return false;
            return true;
        }

        private btnEvent(ev: MouseEvent) {
            // IE bug: it seems that IE does not maintain the focus state properly
            //         harmless to request focus on each keystroke
            //if (!document.hasFocus()) {
            window.focus();
            //}

            // tell the browser to point this pointer on the parent
            const pev = ev as PointerEvent;
            if (pev && pev.pointerId && this.parent.setPointerCapture)
                this.parent.setPointerCapture(pev.pointerId);

            let inside: KeyBinding = null
            let close: KeyBinding[] = []

            const x = ev.pageX
            const y = ev.pageY

            const inRect = (r: ClientRect) => {
                return (r.left <= x && ev.pageX <= r.right &&
                    r.top <= y && y <= r.bottom)
            }

            if (inRect(board().canvas.getBoundingClientRect()))
                close = this.keys.filter(k => k.key == Key.A)

            if (!close.length)
                for (let k of this.keys) {
                    const r = k.el.getBoundingClientRect();
                    if (inRect(r)) {
                        inside = k
                    }
                    const dx = (r.left + r.right) / 2 - x
                    const dy = (r.top + r.bottom) / 2 - y
                    const d = dx * dx + dy * dy
                    k.dist = d

                    if (d < r.width * r.width * k.closenessFactor) {
                        close.push(k)
                    }
                }

            if (inside) close = [inside]
            if (close.length > 2) {
                close.sort((a, b) => a.dist - b.dist)
                close = close.slice(0, 2)
            }

            // update all keys
            this.keys.forEach(k => k.updatePointer(ev, close.indexOf(k) > -1));

            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }

        public mirrorKey(key: Key, down: boolean, realEvent?: boolean) {
            switch (key) {
                case Key.Up:
                    this.setOverlayState(this.up, down);
                    break;
                case Key.Right:
                    this.setOverlayState(this.right, down);
                    break;
                case Key.Down:
                    this.setOverlayState(this.down, down);
                    break;
                case Key.Left:
                    this.setOverlayState(this.left, down);
                    break;
                case Key.A:
                    this.setOverlayState(this.primary, down);
                    break;
                case Key.B:
                    this.setOverlayState(this.secondary, down);
                    break;
                default:
                    break;
            }
        }

        setVisible(visible: boolean) {
            this.dPadRoot.setVisible(visible)
            this.buttonsRoot.setVisible(visible);
            this.menu.setVisible(visible);
            this.reset.setVisible(visible);
        }

        moveDPad(left: number, top: number, width: number) {
            this.dPadRoot.el.style.position = "absolute";
            this.dPadRoot.el.style.left = left + "px";
            this.dPadRoot.el.style.top = top + "px";
            this.dPadRoot.setAttribute("height", width).setAttribute("width", width);
            const scale = width / (D_PAD_SVG_WIDTH + PADDING * 2);
            this.dPad.scale(scale);
            this.dPad.translate(PADDING * scale, PADDING * scale);
        }

        moveButtons(left: number, top: number, width: number) {
            this.buttonsRoot.el.style.position = "absolute";
            this.buttonsRoot.el.style.left = left + "px";
            this.buttonsRoot.el.style.top = top + "px";
            this.buttonsRoot.setAttribute("height", width).setAttribute("width", width);

            const scale = width / ((BUTTON_SVG_WIDTH * 2) + PADDING * 2);
            this.buttons.scale(scale);
            this.buttons.translate(PADDING * scale, PADDING * scale);
        }

        moveReset(left: number, top: number, width: number) {
            this.reset.el.setAttribute("width", width + "px");
            this.reset.el.setAttribute("height", (width * MENU_RESET_ASPECT_RATIO) + "px");
            this.reset.el.style.position = "absolute";
            this.reset.el.style.left = left + "px";
            this.reset.el.style.top = top + "px";
        }

        moveMenu(left: number, top: number, width: number) {
            this.menu.el.setAttribute("width", width + "px");
            this.menu.el.setAttribute("height", (width * MENU_RESET_ASPECT_RATIO) + "px");
            this.menu.el.style.position = "absolute";
            this.menu.el.style.left = left + "px";
            this.menu.el.style.top = top + "px";
        }

        protected buildDom() {
            this.drawDirectionalPad();
            this.drawButtonGroup();
            this.drawMenuReset(this.reset, svg.resetButton);
            this.drawMenuReset(this.menu, svg.menuButton);

            this.reset.el.addEventListener("click", () => {
                pxsim.Runtime.postMessage(<pxsim.SimulatorCommandMessage>{
                    type: "simulator",
                    command: "restart"
                })
            });
            this.bindPadEvents(this.menu, Key.Menu, 0.25);

            this.moveDPad(0, 0, COMPONENT_WIDTH)
            this.moveButtons(0, 0, COMPONENT_WIDTH);
        }

        protected drawMenuReset(parent: s.SVG, el: SVGSVGElement) {
            parent.el.appendChild(el.cloneNode(true));

            const overlay = parent.draw("rect")
                .setClass("controller-button-overlay")
                .width(100, s.LengthUnit.percent)
                .height(100, s.LengthUnit.percent)
                .fill("black", 0)
                .corners(10, 10);
        }

        protected drawDirectionalPad() {
            this.dPad = this.dPadRoot.group();
            this.dPad.el.appendChild(svg.dPad.cloneNode(true));

            // Draw the real touch pads
            const unit = D_PAD_SVG_WIDTH / 3;
            this.up = this.drawTouchPad(this.dPad, unit, 0, unit, unit);
            this.bindPadEvents(this.up, Key.Up);

            this.right = this.drawTouchPad(this.dPad, 2 * unit, unit, unit, unit);
            this.bindPadEvents(this.right, Key.Right);

            this.down = this.drawTouchPad(this.dPad, unit, 2 * unit, unit, unit);
            this.bindPadEvents(this.down, Key.Down);

            this.left = this.drawTouchPad(this.dPad, 0, unit, unit, unit);
            this.bindPadEvents(this.left, Key.Left);
        }

        protected drawTouchPad(parent: s.Group, x: number, y: number, width: number, height: number) {
            const pad: s.Rect = parent.draw("rect")
                .setClass("controller-button-overlay")
                .at(x, y)
                .corners(1, 1)
                .fill("black", 0)
                .size(width, height);
            return pad;
        }

        protected bindPadEvents(pad: s.Rect | s.Circle | s.SVG, target: Key, closenessFactor: number = 3) {
            this.keys.push(new KeyBinding(pad.el, target, closenessFactor))
        }

        protected drawButtonGroup() {
            this.buttons = this.buttonsRoot.group();

            const unit = BUTTON_SVG_WIDTH * 2 / 3;

            this.primary = this.drawButton("A", 2.25 * unit, unit, Key.A);
            this.secondary = this.drawButton("B", 0.75 * unit, 2.25 * unit, Key.B);
        }

        protected drawButton(symbol: string, cx: number, cy: number, key: Key) {
            let r = (BUTTON_SVG_WIDTH * 2 / 3) * 0.75;

            const buttonDom = symbol === "A" ? svg.aButton.cloneNode(true) : svg.bButton.cloneNode(true);
            const buttonG = this.buttons.group();
            buttonG.el.appendChild(buttonDom);

            const overlay = buttonG.draw("circle")
                .setClass("controller-button-overlay")
                .at(r, r)
                .radius(r)
                .fill("black", 0);

            buttonG.translate(cx - r, cy - r);
            this.bindPadEvents(overlay, key);

            return overlay;
        }

        protected setOverlayState(overlay: s.Rect | s.Circle, down: boolean) {
            if (down) {
                overlay.setClass("controller-button-overlay pressed");
            }
            else {
                overlay.setClass("controller-button-overlay");
            }
        }
    }
}