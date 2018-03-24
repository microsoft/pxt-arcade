/// <reference path="../sim/svg.ts" />
/// <reference path="./grid.ts" />
/// <reference path="./bitmap.ts" />
/// <reference path="./tools.ts" />
/// <reference path="./toolbar.ts" />

namespace mkcd {
    import svg = svgUtil;

    // Absolute editor height
    const TOTAL_HEIGHT = 350;

    // Editor padding on all sides
    const PADDING = 8;

    // Height of toolbar (the buttons above the canvas)
    const TOOLBAR_HEIGHT = 55;

    // Spacing between the toolbar and the canvas
    const TOOLBAR_CANVAS_MARGIN = 5;

    // Total allowed height of paint surface
    const CANVAS_HEIGHT = TOTAL_HEIGHT - TOOLBAR_HEIGHT - TOOLBAR_CANVAS_MARGIN - PADDING * 2;

    // Border width between palette swatches
    const PALETTE_INNER_BORDER = 2;

    // Border width around the outside of the palette
    const PALETTE_OUTER_BORDER = 3;

    // Spacing between palette and paint surface
    const PALETTE_CANVAS_MARGIN = 0;

    export class SpriteEditor implements ToolbarHost {
        private group: svg.Group;
        private root: svg.SVG;
        private debugText: svg.Text;

        private palette: ColorPalette;
        private paintSurface: BitmapImage;
        private preview: BitmapImage;
        private toolbar: Toolbar;

        private state: Bitmap;

        // When changing the size, keep the old bitmap around so that we can restore it
        private cachedState: Bitmap;

        private edit: Edit;
        private activeTool: PaintTool = PaintTool.Normal;
        private toolWidth = 1;
        private color = 1;

        private undoStack: Bitmap[] = [];
        private redoStack: Bitmap[] = [];

        private columns: number = 16;
        private rows: number = 16;
        private colors: string[];

        private width: number;
        private height: number;
        private previewWidth: number;

        constructor(bitmap: Bitmap) {
            this.colors =  [
                "#ffffff", // white
                "#33e2e4", // teal
                "#05b3e0", // blue
                "#3d30ad", // violet
                "#b09eff", // light violet
                "#5df51f", // green
                "#6a8927", // dollar green
                "#65471f", // brown
                "#98294a", // bordowy
                "#f80000", // red
                "#e30ec0", // pink
                "#ff9da5", // light pink
                "#ff9005", // orange
                "#efe204", // yellow
                "#000000", // black
            ];

            this.columns = bitmap.width;
            this.rows = bitmap.height;

            this.state = bitmap.copy()

            this.root = new svg.SVG();
            this.group = this.root.group();
            this.makeTransparencyFill();

            this.palette = new mkcd.ColorPalette({
                rowLength: 2,
                emptySwatchDisabled: false,
                emptySwatchFill: 'url("#alpha-background")',
                outerMargin: PALETTE_OUTER_BORDER,
                columnMargin: PALETTE_INNER_BORDER,
                rowMargin: PALETTE_INNER_BORDER,
                backgroundFill: "black",
                colors: this.colors
            });

            this.paintSurface = new mkcd.BitmapImage({
                outerMargin: 0,
                backgroundFill: 'url("#alpha-background")',
                cellClass: "pixel-cell"
            }, this.state.copy(), [null].concat(this.colors), this.root);

            this.paintSurface.drag((col, row) => {
                if (this.activeTool !== PaintTool.Fill) {
                    this.debug("gesture (" + PaintTool[this.activeTool] + ")");
                    this.setCell(col, row, this.color, false);
                }
            });

            this.paintSurface.up((col, row) => {
                if (this.activeTool !== PaintTool.Fill) {
                    this.debug("gesture end (" + PaintTool[this.activeTool] + ")");
                    this.commit();
                }
            });

            this.paintSurface.down((col, row) => {
                if (this.activeTool === PaintTool.Fill) {
                    this.fill(col, row);
                }
                else {
                    this.setCell(col, row, this.color, false);
                }
            });

            this.paintSurface.move((col, row) => {
                this.drawCursor(col, row);
            });

            this.paintSurface.leave(() => {
                if (this.edit) {
                    this.paintSurface.repaint();
                }
                if (this.edit.isStarted) {
                    this.commit();
                }
            });

            this.group.appendChild(this.paintSurface.getView());
            this.group.appendChild(this.palette.getView());

            this.toolbar = new Toolbar(this.group.group(), {
                height: TOOLBAR_HEIGHT,
                width: CANVAS_HEIGHT,
                buttonMargin: 5,
                optionsMargin: 3,
                rowMargin: 5
            }, this);
            this.palette.setSelected(this.color);
            this.palette.onColorSelected(color => {
                this.setActiveColor(color);
            });
            this.setActiveColor(this.color);

            // this.debugText = this.group.draw("text").attr({ "font-family": "segoe ui" });

            document.addEventListener("keydown", ev => {
                if (ev.key === "Undo" || (ev.ctrlKey && ev.key === "z")) {
                    this.undo();
                }
                else if (ev.key === "Redo" || (ev.ctrlKey && ev.key === "y")) {
                    this.redo();
                }
            });
        }

        setCell(col: number, row: number, color: number, commit: boolean): void {
            if (commit) {
                this.state.set(col, row, color);
                this.paintCell(col, row, color);
            }
            else {
                if (!this.edit.isStarted) {
                    this.edit.start(col, row);
                }
                this.edit.update(col, row);
                this.paintEdit(this.edit);
            }
        }

        render(el: HTMLElement): void {
            el.appendChild(this.root.el);
            this.layout();
            this.root.attr({ "width": this.outerWidth() + "px", "height": this.outerHeight() + "px" });
        }

        layout(): void {
            if (!this.root) {
                return;
            }

            const paintAreaTop = TOOLBAR_HEIGHT + TOOLBAR_CANVAS_MARGIN + PADDING;

            this.palette.setGridDimensions(CANVAS_HEIGHT);
            this.palette.translate(PADDING, paintAreaTop);

            const paintAreaLeft = PADDING + this.palette.outerWidth() + PALETTE_CANVAS_MARGIN;

            this.paintSurface.setGridDimensions(CANVAS_HEIGHT);
            const canvasLeft = paintAreaLeft + CANVAS_HEIGHT / 2 - this.paintSurface.outerWidth() / 2;
            this.paintSurface.translate(canvasLeft, paintAreaTop);

            this.width = paintAreaLeft + CANVAS_HEIGHT + PADDING;
            this.height = paintAreaTop + CANVAS_HEIGHT + PADDING;

            this.toolbar.translate(PADDING, PADDING);
            this.toolbar.setDimensions(this.width - PADDING * 2, TOOLBAR_HEIGHT);

            if (this.debugText) {
                this.debugText.at(paintAreaLeft, this.height - PADDING);
            }
        }

        setPreview(preview: BitmapImage, width: number) {
            this.preview = preview;
            this.previewWidth = width;
        }

        rePaint() {
            this.paintSurface.repaint();
            if (this.preview) {
                this.preview.repaint();
            }
        }

        setActiveColor(color: number) {
            this.color = color;
            this.edit = this.newEdit(this.color);
        }

        setActiveTool(tool: PaintTool) {
            this.activeTool = tool;
            this.edit = this.newEdit(this.color)
        }

        setToolWidth(width: number) {
            this.toolWidth = width;
            this.edit = this.newEdit(this.color);
        }

        undo() {
            if (this.undoStack.length) {
                this.debug("undo");
                const todo = this.undoStack.pop();
                this.pushState(false);
                this.restore(todo);
            }
        }

        redo() {
            if (this.redoStack.length) {
                this.debug("redo");
                const todo = this.redoStack.pop();
                this.pushState(true);
                this.restore(todo);
            }
        }

        resize(width: number, height: number) {
            if (!this.cachedState) {
                this.cachedState = this.state.copy();
                this.undoStack.push(this.cachedState)
                this.redoStack = [];
            }
            this.columns = width;
            this.rows = height;

            this.state = resizeBitmap(this.cachedState, width, height);
            this.paintSurface.restore(this.state, true);
            this.paintSurface.setGridDimensions(CANVAS_HEIGHT);
            this.paintSurface.showOverlay();
            this.preview.restore(this.state, true);
            this.preview.setGridDimensions(this.previewWidth);
            this.layout();
        }

        canvasWidth() {
            return this.columns;
        }

        canvasHeight() {
            return this.rows;
        }

        outerWidth() {
            return this.width;
        }

        outerHeight() {
            return this.height;
        }

        private drawCursor(col: number, row: number) {
            if (this.edit) {
                this.paintSurface.repaint();
                this.edit.drawCursor(col, row, (c, r) => this.paintSurface.drawColor(c, r, this.edit.color));
            }
        }

        private paintEdit(edit: Edit) {
            this.paintSurface.restore(this.state);
            this.paintSurface.applyEdit(edit);

            if (this.preview) {
                this.preview.restore(this.state);
                this.preview.applyEdit(edit);
            }
        }

        private commit() {
            if (this.edit) {
                if (this.cachedState) {
                    this.cachedState = undefined;
                }
                this.pushState(true);
                this.paintEdit(this.edit);
                this.state.apply(this.paintSurface.image);
                this.edit = this.newEdit(this.color);
                this.redoStack = [];
            }
        }

        private pushState(undo: boolean) {
            const cp = this.state.copy();
            if (undo) {
                this.undoStack.push(cp);
            }
            else {
                this.redoStack.push(cp);
            }
        }

        private restore(bitmap: Bitmap) {
            this.state.apply(bitmap);
            this.paintSurface.restore(bitmap, true);

            if (this.preview) {
                this.preview.restore(bitmap, true);
            }
        }

        private paintCell(col: number, row: number, color: number) {
            this.paintSurface.writeColor(col, row, color);

            if (this.preview) {
                this.preview.writeColor(col, row, color);
            }
        }

        private newEdit(color: number) {
            switch (this.activeTool) {
                case PaintTool.Normal: return new PaintEdit(this.columns, this.rows, color, this.toolWidth);
                case PaintTool.Rectangle: return new RectangleEdit(this.columns, this.rows, color, this.toolWidth);
                case PaintTool.Outline: return new OutlineEdit(this.columns, this.rows, color, this.toolWidth);
                case PaintTool.Line: return new LineEdit(this.columns, this.rows, color, this.toolWidth);
                case PaintTool.Circle: return new CircleEdit(this.columns, this.rows, color, this.toolWidth);
                case PaintTool.Erase: return new PaintEdit(this.columns, this.rows, 0, this.toolWidth);

                // TODO: Doesn't really need to be a special case
                case PaintTool.Fill: return undefined;
            }
        }

        private fill(col: number, row: number) {
            const color = this.color;
            const replColor = this.state.get(col, row);
            if (replColor === color) {
                return;
            }

            this.pushState(true);
            this.redoStack = [];

            const mask = new mkcd.Bitmask(this.columns, this.rows);
            mask.set(col, row);
            const q = [[col, row]];
            while (q.length) {
                const [c, r] = q.pop();
                if (this.state.get(c, r) === replColor) {
                    this.setCell(c, r, color, true);
                    tryPush(c + 1, r);
                    tryPush(c - 1, r);
                    tryPush(c, r + 1);
                    tryPush(c, r - 1);
                }
            }

            function tryPush(x: number, y: number) {
                if (x >= 0 && x < mask.width && y >= 0 && y < mask.height && !mask.get(x, y)) {
                    mask.set(x, y);
                    q.push([x, y]);
                }
            }
        }

        private debug(msg: string) {
            if (this.debugText) {
                this.debugText.text("DEBUG: " + msg);
            }
        }

        private makeTransparencyFill() {
            this.root.define(defs => {
                const p = defs.create("pattern", "alpha-background")
                    .size(10, 10)
                    .units(svg.PatternUnits.userSpaceOnUse);

                p.draw("rect")
                    .at(0, 0)
                    .size(10, 10)
                    .fill("white");
                p.draw("rect")
                    .at(0, 0)
                    .size(5, 5)
                    .fill("#dedede");
                p.draw("rect")
                    .at(5, 5)
                    .size(5, 5)
                    .fill("#dedede");
            })
        }
    }
}