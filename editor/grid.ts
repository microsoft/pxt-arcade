/// <reference path="../sim/svg.ts" />
/// <reference path="./util.ts" />


namespace mkcd {
    import svg = svgUtil;

    export interface GridStyleProps {
        cellWidth: number;
        cellHeight: number;
        columnMargin: number;
        outerMargin: number;
        rowMargin: number;
        cornerRadius: number;
        defaultColor: string;
        cellIdPrefix: string;
        backgroundFill?: string;
        cellClass?: string;
    }

    export interface GridProps extends GridStyleProps {
        rowLength: number;
        numCells: number;
    }

    /**
     * An SVG grid of pixels
     */
    export class Grid {
        protected group: svg.Group;
        protected cellGroup: svg.Group;
        protected cells: svg.Rect[];
        protected dragSurface: svg.Rect;
        protected background: svg.Rect;

        protected gridProps: GridProps;
        protected rows: number;
        protected columns: number;

        protected dragHandler: (col: number, row: number) => void;
        protected downHandler: (col: number, row: number) => void;
        protected upHandler: (col: number, row: number) => void;

        constructor(props: Partial<GridProps>, protected root?: svg.SVG) {
            this.gridProps = mkcd.mergeProps(defaultGridProps(), props);
            this.updateDimensions();
            this.group = new svg.Group();
            this.buildDom();
        }

        outerWidth(): number {
            const x = this.cellToCoord(this.columns - 1, 0)[0];
            return x + this.gridProps.cellWidth + this.gridProps.outerMargin;
        }

        outerHeight(): number {
            const y = this.cellToCoord(0, this.rows - 1)[1];
            return y + this.gridProps.cellHeight + this.gridProps.outerMargin;
        }

        getView() {
            return this.group;
        }

        translate(x: number, y: number) {
            this.group.translate(x, y);
        }

        scale(ratio: number) {
            this.group.scale(ratio);
        }

        resizeGrid(rowLength: number, numCells: number) {
            this.gridProps.rowLength = rowLength;
            this.gridProps.numCells = numCells;
            this.updateDimensions();

            if (numCells > this.cells.length) {
                while (this.cells.length < numCells) {
                    this.cells.push(this.buildCell());
                }
            }
            else if (numCells < this.cells.length) {
                while (this.cells.length > numCells) {
                    const c = this.cells.pop();
                    this.cellGroup.el.removeChild(c.el);
                }
            }

            this.layout();
        }

        setCellDimensions(width: number, height = width) {
            this.gridProps.cellWidth = width;
            this.gridProps.cellHeight = height;
            this.layout();
        }

        setGridDimensions(width: number, height = width, lockAspectRatio = true) {
            const totalCellWidth = this.columns * this.gridProps.cellWidth;
            const totalCellHeight = this.rows * this.gridProps.cellHeight;

            const targetWidth = width - (this.outerWidth() - totalCellWidth);
            const targetHeight = height - (this.outerHeight() - totalCellHeight);

            const maxCellWidth = this.gridProps.cellWidth * (targetWidth / totalCellWidth);
            const maxCellHeight = this.gridProps.cellHeight * (targetHeight / totalCellHeight);

            if (lockAspectRatio) {
                const aspectRatio = this.gridProps.cellWidth / this.gridProps.cellHeight;

                if (aspectRatio >= 1) {
                    const w = Math.min(maxCellWidth, maxCellHeight * aspectRatio);
                    this.setCellDimensions(w, w * aspectRatio);
                }
                else {
                    const h = Math.min(maxCellHeight, maxCellWidth / aspectRatio)
                    this.setCellDimensions(h / aspectRatio, h);
                }
            }
            else {
                this.setCellDimensions(maxCellWidth, maxCellHeight);
            }
        }

        setCellColor(column: number, row: number, color: string, opacity?: number): void {
            if (column < 0 || row < 0 || column >= this.columns || row >= this.rows) {
                return;
            }
            column = Math.floor(column);
            row = Math.floor(row);

            const cell = this.getCell(this.cellToIndex(column, row))
            if (color != null) {
                cell.setVisible(true);
                cell.fill(color, opacity);
            }
            else {
                cell.setVisible(false);
            }
        }

        down(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.downHandler = handler;
        }

        up(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.upHandler = handler;
        }

        drag(handler: (col: number, row: number) => void): void {
            this.initDragSurface();
            this.dragHandler = handler;
        }

        protected cellToCoord(column: number, row: number): Coord {
            const x = this.gridProps.outerMargin + column * (this.gridProps.cellWidth + this.gridProps.columnMargin);
            const y = this.gridProps.outerMargin + row * (this.gridProps.cellHeight + this.gridProps.rowMargin);
            return [x, y];
        }

        protected coordToCell(x: number, y: number): Coord {
            const column = Math.floor((x - this.gridProps.outerMargin) / (this.gridProps.cellWidth + this.gridProps.columnMargin));
            const row = Math.floor((y - this.gridProps.outerMargin) / (this.gridProps.cellHeight + this.gridProps.rowMargin));
            return [column, row];
        }

        protected indexToCell(index: number): Coord {
            const col = index % this.gridProps.rowLength;
            const row = Math.floor(index / this.gridProps.rowLength);
            return [col, row];
        }

        protected cellToIndex(col: number, row: number): number {
            return row * this.gridProps.rowLength + col;
        }

        protected buildDom() {
            this.cells = [];
            if (this.gridProps.backgroundFill) {
                this.background = this.group.draw("rect")
                    .size(this.outerWidth(), this.outerHeight())
                    .fill(this.gridProps.backgroundFill);
            }
            this.cellGroup = this.group.group();
            let count = 0;
            for (let col = 0; col < this.columns; col++) {
                for (let row = 0; row < this.rows; row++) {
                    this.cells.push(this.buildCell());
                    count++;
                    if (count > this.gridProps.numCells) {
                        return;
                    }
                }
            }
            this.layout();
        }

        protected buildCell(): svg.Rect {
            const cell = this.cellGroup.draw("rect")
                .size(this.gridProps.cellWidth, this.gridProps.cellHeight)
                .fill(this.gridProps.defaultColor)

            if (this.gridProps.cornerRadius) {
                cell.corner(this.gridProps.cornerRadius)
            }

            if (this.gridProps.cellClass) {
                cell.setAttribute("class", this.gridProps.cellClass);
            }

            return cell;
        }

        protected layout() {
            // Position grid cells
            for (let c = 0; c < this.columns; c++) {
                for (let r = 0; r < this.rows; r++) {
                    const [x, y] = this.cellToCoord(c, r);
                    const index = this.cellToIndex(c, r);
                    this.getCell(index)
                        .at(x, y)
                        .size(this.gridProps.cellWidth, this.gridProps.cellHeight)
                        .id(this.gridProps.cellIdPrefix + "-" + index)
                        .attr({ "data-grid-index": index });
                }
            }

            // Resize gesture surface and background
            if (this.dragSurface) {
                this.dragSurface.size(this.outerWidth(), this.outerHeight());
            }

            if (this.background) {
                this.background.size(this.outerWidth(), this.outerHeight());
            }
        }

        protected getCell(index: number): svg.Rect {
            return this.cells[index];
        }

        private initDragSurface() {
            if (!this.dragSurface && this.root) {
                let lastCol = -1;
                let lastRow = -1;
                let point = this.root.el.createSVGPoint();
                let inGesture = false;
                this.dragSurface = this.group.draw("rect")
                    .opacity(0)
                    .width(this.outerWidth())
                    .height(this.outerHeight());
                const mHandler = (ev: MouseEvent) => {
                    if (ev.buttons & 1) {
                        let start = false;
                        if (!inGesture) {
                            inGesture = true;
                            lastCol = -1;
                            lastRow = -1;
                            start = true;
                        }

                        point.x = ev.clientX;
                        point.y = ev.clientY;
                        const cursor = point.matrixTransform(this.root.el.getScreenCTM().inverse());
                        const [col, row] = this.coordToCell(cursor.x - this.group.left, cursor.y - this.group.top);
                        if (lastCol != col || lastRow != row) {
                            lastCol = col;
                            lastRow = row;
                            if (start) {
                                this.downCore(col, row);
                            }
                            else {
                                this.moveCore(col, row);
                            }
                        }
                    }
                    else if (inGesture) {
                        this.upCore(lastCol, lastRow);
                        lastCol = -1;
                        lastRow = -1;
                        inGesture = false;
                    }
                };
                this.dragSurface.el.addEventListener("pointermove", mHandler);
                this.dragSurface.el.addEventListener("pointerdown", mHandler);
                this.dragSurface.el.addEventListener("pointerclick", mHandler);
                this.dragSurface.el.addEventListener("pointerleave", ev => {
                    if (inGesture) {
                        this.upCore(lastCol, lastRow);
                        lastCol = -1;
                        lastRow = -1;
                        inGesture = false;
                    }
                });
            }
        }

        private upCore(col: number, row: number) {
            if (this.upHandler) {
                this.upHandler(col, row);
            }
        }

        private downCore(col: number, row: number) {
            if (this.downHandler) {
                this.downHandler(col, row);
            }
        }

        private moveCore(col: number, row: number) {
            if (this.dragHandler) {
                this.dragHandler(col, row);
            }
        }

        private updateDimensions() {
            this.columns = this.gridProps.rowLength;
            this.rows = Math.ceil(this.gridProps.numCells / this.columns);
        }
    }

    export function defaultGridProps(): GridProps {
        return {
            rowLength: 16,
            numCells: 16 * 16,
            cellWidth: 10,
            cellHeight: 10,
            outerMargin: 0,
            columnMargin: 0,
            rowMargin: 0,
            cornerRadius: 0,
            defaultColor: "#ffffff",
            cellIdPrefix: uniquePrefix()
        };
    }

    let current = 0;
    export function uniquePrefix() {
        return "grid" + current++;
    }
}