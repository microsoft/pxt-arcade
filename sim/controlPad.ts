/// <reference path="./svg.ts" />

namespace pxsim {
    import s = svgUtil;

    const D_PAD_WIDTH = 60;
    const DRAW_UNIT = D_PAD_WIDTH / 3;
    const D_PAD_COLOR = "#dedede";
    const D_PAD_DOWN_COLOR = "#f4b342";

    const BUTTON_COLOR = "#66bb77";
    const BUTTON_DOWN_COLOR = "#225533";
    
    export class ControlPad {
        root: s.SVG;

        protected dPad: s.Group;
        protected buttons: s.Group;

        protected up: s.Rect;
        protected down: s.Rect;
        protected left: s.Rect;
        protected right: s.Rect;

        protected primary: s.Circle;
        protected secondary: s.Circle;

        constructor() {
            this.root = new s.SVG();
            this.buildDom();
        }

        public handleKey(key: Key, down: boolean) {
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
            }
        }

        protected buildDom() {
            this.drawDirectionalPad();
            this.drawButtonGroup();
            this.layout(100);
        }

        protected layout(width: number) {
            this.buttons.translate(D_PAD_WIDTH + 20, 0);
        }

        protected drawDirectionalPad() {
            this.dPad = this.root.group();
            
            this.dPad.draw("polygon")
                .at(0, 0)
                .fill(D_PAD_COLOR)
                .stroke("black", 2)
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

            // Draw the touch pads
            this.up = this.drawPad(DRAW_UNIT, 0);
            this.right = this.drawPad(2 * DRAW_UNIT, DRAW_UNIT);
            this.down = this.drawPad(DRAW_UNIT, 2 * DRAW_UNIT);
            this.left = this.drawPad(0, DRAW_UNIT);
        }

        protected drawPad(x: number, y: number) {
            const pad: s.Rect = this.dPad.draw("rect")
                .at(x, y)
                .fill(D_PAD_COLOR)
                .size(DRAW_UNIT, DRAW_UNIT)
                .onDown(() => this.setDpadState(pad, true))
                .onLeave(() => this.setDpadState(pad, false))
                .onUp(() => this.setDpadState(pad, false));
            return pad;
        }

        protected drawButtonGroup() {
            this.buttons = this.root.group();

            // Arranged inside the d-pad
            this.primary = this.drawButton("A", 2.5 * DRAW_UNIT, 1.5 * DRAW_UNIT);
            this.secondary = this.drawButton("B", 1.5 * DRAW_UNIT, 2.5 * DRAW_UNIT);
        }

        protected drawButton(symbol: string, cx: number, cy: number) {
            const button: s.Circle = this.buttons.draw("circle")
                .at(cx, cy)
                .radius(DRAW_UNIT / 2)
                .fill(BUTTON_COLOR)
                .stroke(BUTTON_DOWN_COLOR, 2)
                .onDown(() => this.setButtonState(button, true))
                .onLeave(() => this.setButtonState(button, false))
                .onUp(() => this.setButtonState(button, false));

            return button;
        }

        protected setDpadState(pad: s.Rect, down: boolean) {
            if (down) {
                pad.fill(D_PAD_DOWN_COLOR);
            }
            else {
                pad.fill(D_PAD_COLOR);
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

    function scale(points: { x: number, y: number } [], factor: number) {
        return points.map(({ x, y }) => ({ x: x * factor, y: y * factor }))
    }
}