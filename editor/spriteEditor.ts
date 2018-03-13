/// <reference path="./svg.ts" />
/// <reference path="./grid.ts" />
/// <reference path="./bitmap.ts" />
/// <reference path="./tools.ts" />

namespace mkcd {
    import svg = svgUtil;

    const MARGIN = 20;
    const CELL_WIDTH = 10;
    const BG_WIDTH = 6;

    export enum PaintTool {
        Normal = 0,
        Rectangle = 1,
        Outline = 2,
        Circle = 3,
        Fill = 4,
        Line = 5,
        Erase = 6,
    }

    export class SpriteEditor {
        private palette: ColorPalette;
        private paintSurface: Grid;
        private preview: Grid;

        private group: svg.Group;
        private root: svg.SVG;
        private debugText: svg.Text;
        
        private state: Bitmap;
        private displayState: Bitmap;
        
        private edit: Edit;
        private tool: PaintTool = PaintTool.Normal;

        private undoStack: Bitmap[] = [];
        private redoStack: Bitmap[] = [];
        
        private columns: number = 16;
        private rows: number = 16;
        private colors: string[];

        constructor() {
            this.colors = [
                "#000000",
                "#33e2e4",
                "#05b3e0",
                "#3d30ad",
                "#b09eff",
                "#5df51f",
                "#6a8927",
                "#65471f",
                "#98294a",
                "#f80000",
                "#e30ec0",
                "#ff9da5",
                "#ff9005",
                "#efe204",
                "#ffffff",
            ];

            this.root = new svg.SVG();

            // The classic checkerboard alpha background
            // this.root.define((defs) => {
            //     const unit = BG_WIDTH / 2;
            //     const bg = defs.create("pattern", "alpha-background")
            //         .size(BG_WIDTH, BG_WIDTH)
            //         .units(svg.PatternUnits.userSpaceOnUse);
                
            //     // Background
            //     bg.draw("rect")
            //         .size(BG_WIDTH, BG_WIDTH)
            //         .fill("white");
                
            //     // Checkerboard
            //     bg.draw("rect")
            //         .size(unit, unit)
            //         .fill("grey");
            //     bg.draw("rect")
            //         .size(unit, unit)
            //         .fill("grey")
            //         .at(unit, unit);
            // });

            this.root.define(defs => {
                const style = new svg.BaseElement<SVGStyleElement>("style");
                style.el.textContent = `
                .pixel-cell {
                    shape-rendering: crispedges;
                }
                `
                defs.el.appendChild(style.el);
            })

            this.group = this.root.group();
            this.palette = new mkcd.ColorPalette({
                rowLength: 2,
                emptySwatchDisabled: false,
                // emptySwatchFill: "url(#alpha-background)",
                colors: this.colors
            });

            this.paintSurface = new mkcd.Grid({
                rowLength: this.columns,
                numCells: this.columns * this.rows,
                cellWidth: CELL_WIDTH,
                cellHeight: CELL_WIDTH,
                cellClass: "pixel-cell"
                // backgroundFill: "url(#alpha-background)"
            });
            
            this.paintSurface.drag((col, row) => {
                if (this.tool !== PaintTool.Fill) {
                    this.debug("gesture (" + PaintTool[this.tool] + ")");
                    this.setCell(col, row, this.palette.selected, false);
                }
            });
            
            this.paintSurface.up((col, row) => {
                if (this.tool !== PaintTool.Fill) {
                    this.debug("gesture end (" + PaintTool[this.tool] + ")");
                    this.commit();
                }
            });
            
            this.paintSurface.down((col, row) => {
                if (this.tool === PaintTool.Fill) {
                    this.fill(col, row);
                }
            });
            
            // TODO: Figure out a different way to render the preview; using
            // a Grid creates a lot of SVG elements.
            this.preview = new mkcd.Grid({
                rowLength: this.columns,
                numCells: this.columns * this.rows,
                cellWidth: Math.ceil(CELL_WIDTH / 5),
                cellHeight: Math.ceil(CELL_WIDTH / 5),
                cellClass: "pixel-cell"
            });
            
            this.group.appendChild(this.palette.getView());
            this.group.appendChild(this.paintSurface.getView());
            this.group.appendChild(this.preview.getView());
            this.debugText = this.group.draw("text").attr({ "font-family": "segoe ui" });

            document.addEventListener("keydown", ev => {
                if (ev.key === "Undo" || (ev.ctrlKey && ev.key === "z")) {
                    this.undo();
                }
                else if (ev.key === "Redo" || (ev.ctrlKey && ev.key === "y")) {
                    this.redo();
                }
                else {
                    switch (ev.key) {
                        case "n":
                            this.setTool(PaintTool.Normal);
                            break;
                        case "r":
                            this.setTool(PaintTool.Rectangle);
                            break;
                        case "o":
                            this.setTool(PaintTool.Outline);
                            break;
                        case "c":
                            this.setTool(PaintTool.Circle);
                            break;
                        case "f":
                            this.setTool(PaintTool.Fill);
                            break;
                        case "l":
                            this.setTool(PaintTool.Line);
                            break;
                        case "e":
                            this.setTool(PaintTool.Erase);
                            break;
                    }
                }
            });
            this.init();
        }

        setCell(col: number, row: number, color: number, commit: boolean): void {
            if (commit) {
                this.displayState.set(col, row, color);
                this.state.set(col, row, color);
                this.paintCell(col, row, color);
            }
            else {
                if (!this.edit) {
                    this.edit = this.newEdit(color);
                    this.edit.start(col, row);
                }
                this.edit.update(col, row);
                this.displayState = this.state.copy();
                this.edit.apply(this.displayState);
                this.rePaint();
            }
        }
        
        render(el: HTMLElement): void {
            this.root.attr({ "width": "100%", "height": "100%" });
            el.appendChild(this.root.el);
            this.layout();
        }
        
        layout(): void {
            if (!this.root) {
                return;
            }
            const paletteScale = this.paintSurface.outerHeight() / this.palette.outerHeight();
            this.palette.scale(paletteScale);

            this.palette.translate(0, 0);
            
            const paintLeft = this.palette.outerWidth() * paletteScale + MARGIN;
            this.paintSurface.translate(paintLeft, 0);
            this.preview.translate(paintLeft + this.paintSurface.outerWidth() + MARGIN, 0);

            if (this.debugText) {
                this.debugText.at(paintLeft, this.paintSurface.outerHeight() + MARGIN);
            }
        }

        setTool(tool: PaintTool): void {
            this.tool = tool;
            this.debug("Set tool to " + PaintTool[tool]);
        }

        private rePaint() {
            for (let c = 0; c < this.columns; c++) {
                for (let r = 0; r < this.rows; r++) {
                    this.paintCell(c, r, this.displayState.get(c, r));
                }
            }
        }
        
        private commit() {
            if (this.edit) {
                this.undoStack.push(this.state);
                this.apply(this.edit);
                this.state = this.displayState.copy();
                this.edit = undefined;
                this.redoStack = [];
            }
        }

        private undo() {
            if (this.undoStack.length) {
                this.debug("undo");
                const todo = this.undoStack.pop();
                this.redoStack.push(this.state.copy());
                this.restore(todo);
            }
        }
        
        private redo() {
            if (this.redoStack.length) {
                this.debug("redo");
                const todo = this.redoStack.pop();
                this.undoStack.push(this.state.copy());
                this.restore(todo);
            }
        }

        private apply(edit: Edit) {
            edit.apply(this.displayState);
            this.rePaint();
        }

        private restore(bitmap: Bitmap) {
            this.state.apply(bitmap);
            this.displayState = this.state.copy();
            this.rePaint();
        }

        private paintCell(col: number, row: number, color: number) {
            this.paintSurface.setCellColor(col, row, this.palette.colorForIndex(color));
            this.preview.setCellColor(col, row, this.palette.colorForIndex(color));
        }
        
        private newEdit(color: number) {
            switch (this.tool) {
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

            this.undoStack.push(this.state.copy());
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

        private init() {
            this.state = new mkcd.Bitmap(this.columns, this.rows);
            this.displayState = new mkcd.Bitmap(this.columns, this.rows);
            this.undoStack = [];
            for (let c = 0; c < this.columns; c++) {
                for (let r = 0; r < this.rows; r++) {
                    this.setCell(c, r, 0, true);
                }
            }
        }

        private debug(msg: string) {
            if (this.debugText) {
                this.debugText.text("DEBUG: " + msg);
            }
        }
    }
}