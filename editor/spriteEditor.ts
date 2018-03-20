/// <reference path="../sim/svg.ts" />
/// <reference path="./grid.ts" />
/// <reference path="./bitmap.ts" />
/// <reference path="./tools.ts" />
/// <reference path="./toolbar.ts" />

namespace mkcd {
    import svg = svgUtil;

    const MARGIN = 8;
    const CELL_WIDTH = 10;
    const BG_WIDTH = 6;

    // Border around paint surface
    const paintSurfaceBorderWidth = 0;

    // Border around color palette
    const paletteBorderWidth = 2;

    // Spacing between palette and screen (discounting borders)
    const palettePaintMargin = 2;

    export class SpriteEditor implements ToolbarHost {
        private palette: ColorPalette;
        private paintSurface: BitmapImage;
        private preview: BitmapImage;
        private toolbar: Toolbar;

        private group: svg.Group;
        private root: svg.SVG;
        private debugText: svg.Text;

        private state: Bitmap;
        private displayState: Bitmap;

        private edit: Edit;
        private activeTool: PaintTool = PaintTool.Normal;

        private undoStack: Bitmap[] = [];
        private redoStack: Bitmap[] = [];

        private columns: number = 16;
        private rows: number = 16;
        private colors: string[];

        private width: number;
        private height: number;

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
            this.displayState = bitmap.copy();

            this.root = new svg.SVG();
            this.group = this.root.group();
            this.makeTransparencyFill();

            this.palette = new mkcd.ColorPalette({
                rowLength: 2,
                emptySwatchDisabled: false,
                emptySwatchFill: 'url("#alpha-background")',
                outerMargin: paletteBorderWidth,
                columnMargin: 1,
                rowMargin: 1,
                backgroundFill: "black",
                colors: this.colors
            });

            this.paintSurface = new mkcd.BitmapImage({
                cellWidth: CELL_WIDTH,
                cellHeight: CELL_WIDTH,
                outerMargin: paintSurfaceBorderWidth,
                backgroundFill: "white",
                cellClass: "pixel-cell"
            }, this.displayState, ['url("#alpha-background")'].concat(this.colors));

            this.paintSurface.drag((col, row) => {
                if (this.activeTool !== PaintTool.Fill) {
                    this.debug("gesture (" + PaintTool[this.activeTool] + ")");
                    this.setCell(col, row, this.palette.selected, false);
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
                    this.setCell(col, row, this.palette.selected, false);
                }
            });

            this.group.appendChild(this.paintSurface.getView());
            this.group.appendChild(this.palette.getView());

            this.toolbar = new Toolbar(this.group.group(), {
                height: 25,
                width: this.paintSurface.outerWidth()
            }, this);
            this.palette.setSelected(1);

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
                if (!this.edit) {
                    this.edit = this.newEdit(color);
                    this.edit.start(col, row);
                }
                this.edit.update(col, row);
                this.paintEdit(this.edit);
            }
        }

        render(el: HTMLElement): void {
            this.root.attr({ "width": "95%", "height": "95%" });
            el.appendChild(this.root.el);
            this.layout();
        }

        layout(): void {
            if (!this.root) {
                return;
            }

            const toolbarHeight = this.toolbar.outerHeight() + 10;
            this.toolbar.translate(MARGIN, MARGIN);

            const paletteScale = this.paintSurface.outerHeight() / this.palette.outerHeight();
            this.palette.scale(paletteScale);

            this.palette.translate(MARGIN, MARGIN + toolbarHeight);

            const paintLeft = MARGIN + this.palette.outerWidth() * paletteScale - paletteBorderWidth - paintSurfaceBorderWidth + palettePaintMargin;
            this.paintSurface.translate(paintLeft, MARGIN + toolbarHeight);

            this.width = paintLeft + this.paintSurface.outerWidth() + MARGIN;
            this.height = this.paintSurface.outerHeight() + MARGIN * 2 + toolbarHeight;

            if (this.debugText) {
                this.debugText.at(paintLeft, this.paintSurface.outerHeight() + MARGIN * 2);
            }
        }

        outerWidth() {
            return this.width;
        }

        outerHeight() {
            return this.height;
        }

        setPreview(preview: BitmapImage) {
            this.preview = preview;
        }

        rePaint() {
            this.paintSurface.repaint();
            if (this.preview) {
                this.preview.repaint();
            }
        }

        setActiveTool(tool: PaintTool) {
            this.activeTool = tool;
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
                this.pushState(true);
                this.paintEdit(this.edit);
                this.state.apply(this.displayState);
                this.edit = undefined;
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
                case PaintTool.Normal: return new PaintEdit(this.columns, this.rows, color);
                case PaintTool.Rectangle: return new RectangleEdit(this.columns, this.rows, color);
                case PaintTool.Outline: return new OutlineEdit(this.columns, this.rows, color);
                case PaintTool.Line: return new LineEdit(this.columns, this.rows, color);
                case PaintTool.Circle: return new CircleEdit(this.columns, this.rows, color);
                case PaintTool.Erase: return new PaintEdit(this.columns, this.rows, 0);

                // TODO: Doesn't really need to be a special case
                case PaintTool.Fill: return undefined;
            }
        }

        private fill(col: number, row: number) {
            const color = this.palette.selected;
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
                    .units(svg.PatternUnits.objectBoundingBox);

                p.draw("rect")
                    .at(0, 0)
                    .size(11, 11)
                    .fill("white")
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