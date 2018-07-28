/// <reference path="./svg.ts" />

namespace pxsim {
    import s = svgUtil;

    const COMPONENT_WIDTH = 60;
    const DRAW_UNIT = COMPONENT_WIDTH / 3;
    const PADDING = 20;

    const D_PAD_COLOR = "#6B4F76";
    const D_PAD_DOWN_COLOR = "#f4b342";

    const BUTTON_COLOR = "#FE8C4F";
    const BUTTON_DOWN_COLOR = "#DE5F26";

    const aspectRatio = 2; // width / height

    export interface KeyBinding {
        el: Element;
        key: Key;
        isDown?: boolean;
        dist?: number;
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

        protected keys: KeyBinding[] = [];

        constructor(parent: Element) {
            this.dPadRoot = new s.SVG(parent);
            this.buttonsRoot = new s.SVG(parent);
            this.buildDom();

            const clearBtns = () => {
                for (let k of this.keys) {
                    if (k.isDown) {
                        k.isDown = false
                        board().handleKeyEvent(k.key, k.isDown)
                    }
                }
            }

            svg.buttonEvents(parent, ev => this.btnEvent(ev), ev => this.btnEvent(ev), clearBtns)
        }

        private btnEvent(ev: MouseEvent) {
            let inside: KeyBinding = null
            let close: KeyBinding[] = []

            if (!document.hasFocus()) window.focus();

            const x = ev.pageX
            const y = ev.pageY

            const inRect = (r: ClientRect) => {
                return (r.left <= x && ev.pageX <= r.right &&
                    r.top <= y && y <= r.bottom)
            }

            for (let k of this.keys) {
                const r = k.el.getBoundingClientRect();
                if (inRect(r)) {
                    inside = k
                }
                const dx = (r.left + r.right) / 2 - x
                const dy = (r.top + r.bottom) / 2 - y
                const d = dx * dx + dy * dy
                k.dist = d

                if (d < r.width * r.width * 3) {
                    close.push(k)
                }
            }

            if (inside) close = [inside]
            if (close.length > 2) {
                close.sort((a, b) => a.dist - b.dist)
                close = close.slice(0, 2)
            }

            if (close.length == 0) {
                if (inRect(board().canvas.getBoundingClientRect()))
                    close = this.keys.filter(k => k.key == Key.A)
            }

            for (let k of this.keys) {
                const isDown = close.indexOf(k) >= 0
                if (isDown != k.isDown) {
                    k.isDown = isDown
                    board().handleKeyEvent(k.key, k.isDown)
                }
            }

            ev.preventDefault();
        }

        public mirrorKey(key: Key, down: boolean, realEvent?: boolean) {
            switch (key) {
                case Key.Up:
                    this.setDpadState(this.up, down);
                    break;
                case Key.Right:
                    this.setDpadState(this.right, down);
                    break;
                case Key.Down:
                    this.setDpadState(this.down, down);
                    break;
                case Key.Left:
                    this.setDpadState(this.left, down);
                    break;
                case Key.A:
                    this.setButtonState(this.primary, down);
                    break;
                case Key.B:
                    this.setButtonState(this.secondary, down);
                    break;
            }
        }

        moveDPad(left: number, top: number, width: number) {
            this.dPadRoot.el.style.position = "absolute";
            this.dPadRoot.el.style.left = left + "px";
            this.dPadRoot.el.style.top = top + "px";
            this.dPadRoot.setAttribute("height", width).setAttribute("width", width);

            const scale = width / (COMPONENT_WIDTH + PADDING * 2);
            this.dPad.scale(width / (COMPONENT_WIDTH + PADDING * 2));
            this.dPad.translate(PADDING * scale, PADDING * scale);
        }

        moveButtons(left: number, top: number, width: number) {
            this.buttonsRoot.el.style.position = "absolute";
            this.buttonsRoot.el.style.left = left + "px";
            this.buttonsRoot.el.style.top = top + "px";
            this.buttonsRoot.setAttribute("height", width).setAttribute("width", width);

            const scale = width / (COMPONENT_WIDTH + PADDING * 2);
            this.buttons.scale(width / (COMPONENT_WIDTH + PADDING * 2));
            this.buttons.translate(PADDING * scale, PADDING * scale);
        }

        protected buildDom() {
            this.drawDirectionalPad();
            this.drawButtonGroup();

            this.moveDPad(0, 0, COMPONENT_WIDTH)
            this.moveButtons(0, 0, COMPONENT_WIDTH);
        }

        protected drawDirectionalPad() {
            this.dPad = this.dPadRoot.group();

            this.dPad.draw("polygon")
                .at(0, 0)
                .fill(D_PAD_COLOR)
                .stroke("#412C3D", 2)
                .setAttribute("stroke-linejoin", "round")
                .with(scale([
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 2, y: 1 },
                    { x: 3, y: 1 },
                    { x: 3, y: 2 },
                    { x: 2, y: 2 },
                    { x: 2, y: 3 },
                    { x: 1, y: 3 },
                    { x: 1, y: 2 },
                    { x: 0, y: 2 },
                    { x: 0, y: 1 },
                    { x: 1, y: 1 }
                ], DRAW_UNIT));

            // Draw the real touch pads
            this.up = this.drawTouchPad(this.dPad, DRAW_UNIT, 0);
            this.bindPadEvents(this.up, Key.Up);

            this.right = this.drawTouchPad(this.dPad, 2 * DRAW_UNIT, DRAW_UNIT);
            this.bindPadEvents(this.right, Key.Right);

            this.down = this.drawTouchPad(this.dPad, DRAW_UNIT, 2 * DRAW_UNIT);
            this.bindPadEvents(this.down, Key.Down);

            this.left = this.drawTouchPad(this.dPad, 0, DRAW_UNIT);
            this.bindPadEvents(this.left, Key.Left);
        }

        protected drawTouchPad(parent: s.Group, x: number, y: number, width = DRAW_UNIT, height = DRAW_UNIT) {
            const pad: s.Rect = parent.draw("rect")
                .at(x, y)
                .fill(D_PAD_COLOR, 0)
                .size(width, height);
            return pad;
        }

        protected bindPadEvents(pad: s.Rect, target: Key) {
            this.keys.push({ el: pad.el, key: target })
        }

        protected drawButtonGroup() {
            this.buttons = this.buttonsRoot.group();

            this.primary = this.drawButton("A", 2.5 * DRAW_UNIT, DRAW_UNIT, Key.A);
            this.secondary = this.drawButton("B", 0.75 * DRAW_UNIT, 2.5 * DRAW_UNIT, Key.B);
        }

        protected drawButton(symbol: string, cx: number, cy: number, key: Key) {
            let r = DRAW_UNIT * 0.75;

            const button: s.Circle = this.buttons.draw("circle")
                .at(cx, cy)
                .radius(r)
                .fill(BUTTON_COLOR)
                .stroke(BUTTON_DOWN_COLOR, 2);

            this.buttons.draw("text")
                .at(cx, cy)
                .text(symbol)
                .fill("white")
                .anchor("middle")
                .alignmentBaseline("middle");

            r *= 0.6; // the actual radius is bigger, see btnEvent() above
            this.bindPadEvents(this.drawTouchPad(this.buttons, cx - r, cy - r, r * 2, r * 2), key);

            return button;
        }

        protected setDpadState(pad: s.Rect, down: boolean) {
            if (down) {
                pad.fill(D_PAD_DOWN_COLOR, 1);
            }
            else {
                pad.fill(D_PAD_COLOR, 0);
            }
        }

        protected setButtonState(button: s.Circle, down: boolean) {
            if (down) {
                button.fill(BUTTON_DOWN_COLOR).stroke(BUTTON_COLOR);
            }
            else {
                button.fill(BUTTON_COLOR).stroke(BUTTON_DOWN_COLOR);
            }
        }
    }

    function scale(points: { x: number, y: number }[], factor: number) {
        return points.map(({ x, y }) => ({ x: x * factor, y: y * factor }))
    }
}